'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export default function ArticlesListPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{siteConfig.articles.title}</h1>
          <p className="text-lg text-muted-foreground">{siteConfig.articles.description}</p>
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-secondary/50 border-b border-border">
            <div className="col-span-6 text-sm font-semibold text-foreground">文章标题</div>
            <div className="col-span-3 text-sm font-semibold text-foreground">发布时间</div>
            <div className="col-span-3 text-sm font-semibold text-foreground">主题标签</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-border">
            {siteConfig.articles.items.map((article) => (
              <div
                key={article.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                onClick={() => router.push(`/articles/${article.id}`)}
              >
                <div className="col-span-6">
                  <h3 className="text-foreground font-medium mb-1">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{article.summary}</p>
                </div>
                <div className="col-span-3 flex items-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{article.publishTime}</span>
                  </div>
                </div>
                <div className="col-span-3 flex items-center">
                  <div className="flex items-center gap-1 flex-wrap">
                    <Tag className="w-3 h-3 text-muted-foreground" />
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-xs text-muted-foreground">+{article.tags.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
