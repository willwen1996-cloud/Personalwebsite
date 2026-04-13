'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit2, Trash2, Eye, Calendar, Tag } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  summary: string;
  publish_time: string;
  tags: string[];
  source: string;
  created_at: string;
}

export default function AdminArticlesPage() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    fetchArticles();
  }, [page]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/articles?page=${page}&pageSize=${pageSize}`);
      const data = await res.json();
      if (data.success) {
        setArticles(data.data);
        setTotal(data.total);
      }
    } catch (error) {
      console.error('获取文章失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除这篇文章吗？')) return;
    
    try {
      const res = await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        fetchArticles();
      } else {
        alert('删除失败: ' + data.error);
      }
    } catch (error) {
      console.error('删除失败:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-foreground">文章管理</h1>
            <span className="text-sm text-muted-foreground">共 {total} 篇文章</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              查看网站
            </button>
            <button
              onClick={() => router.push('/admin/articles/new')}
              className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-sm hover:bg-foreground/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>新建文章</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">加载中...</div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">暂无文章</p>
            <button
              onClick={() => router.push('/admin/articles/new')}
              className="text-primary hover:underline"
            >
              创建第一篇文章
            </button>
          </div>
        ) : (
          <>
            <div className="bg-card border border-border rounded-sm overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-secondary/50 border-b border-border">
                <div className="col-span-5 text-sm font-semibold text-foreground">标题</div>
                <div className="col-span-2 text-sm font-semibold text-foreground">发布时间</div>
                <div className="col-span-2 text-sm font-semibold text-foreground">来源</div>
                <div className="col-span-3 text-sm font-semibold text-foreground text-right">操作</div>
              </div>

              <div className="divide-y divide-border">
                {articles.map((article) => (
                  <div key={article.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-secondary/30 transition-colors">
                    <div className="col-span-5">
                      <h3 className="text-foreground font-medium mb-1">{article.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{article.summary}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Tag className="w-3 h-3 text-muted-foreground" />
                        {article.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-2" />
                      {article.publish_time}
                    </div>
                    <div className="col-span-2 flex items-center text-sm text-muted-foreground">
                      {article.source}
                    </div>
                    <div className="col-span-3 flex items-center justify-end gap-2">
                      <button
                        onClick={() => window.open(`/articles/${article.id}`, '_blank')}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="查看"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => router.push(`/admin/articles/${article.id}`)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="编辑"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        title="删除"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            {total > pageSize && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-border rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
                >
                  上一页
                </button>
                <span className="text-sm text-muted-foreground">
                  第 {page} / {Math.ceil(total / pageSize)} 页
                </span>
                <button
                  onClick={() => setPage(p => Math.min(Math.ceil(total / pageSize), p + 1))}
                  disabled={page >= Math.ceil(total / pageSize)}
                  className="px-4 py-2 border border-border rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
                >
                  下一页
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
