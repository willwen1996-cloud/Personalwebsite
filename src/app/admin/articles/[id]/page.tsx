'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Eye, Wand2 } from 'lucide-react';

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const articleId = params.id as string;

  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    publish_time: '',
    tags: [] as string[],
    source: '知乎',
    source_link: ''
  });
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    fetchArticle();
  }, [articleId]);

  const fetchArticle = async () => {
    try {
      const res = await fetch(`/api/admin/articles/${articleId}`);
      const data = await res.json();
      if (data.success) {
        setFormData({
          title: data.data.title,
          summary: data.data.summary,
          content: data.data.content,
          publish_time: data.data.publish_time,
          tags: data.data.tags || [],
          source: data.data.source,
          source_link: data.data.source_link || ''
        });
      } else {
        alert('文章不存在');
        router.push('/admin/articles');
      }
    } catch (error) {
      console.error('获取文章失败:', error);
      router.push('/admin/articles');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  const handleAutoFormat = () => {
    let formatted = formData.content;
    
    formatted = formatted.replace(/\r\n/g, '\n');
    formatted = formatted.replace(/\n{3,}/g, '\n\n');
    formatted = formatted.replace(/([^\n])\n([^\n])/g, '$1\n\n$2');
    formatted = formatted.replace(/([^\n])(\n#{1,6} )/g, '$1\n\n$2');
    formatted = formatted.replace(/(#{1,6} [^\n]+)(\n)([^\n])/g, '$1\n\n$3');
    formatted = formatted.replace(/([^\n])(\n[-*+] )/g, '$1\n\n$2');
    formatted = formatted.replace(/([^\n])(\n```)/g, '$1\n\n$2');
    formatted = formatted.replace(/(```[^\n]*)(\n)([^\n])/g, '$1\n\n$3');
    
    setFormData({ ...formData, content: formatted });
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      alert('请输入标题');
      return;
    }
    if (!formData.content.trim()) {
      alert('请输入内容');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/articles');
      } else {
        alert('保存失败: ' + data.error);
      }
    } catch (error) {
      console.error('保存失败:', error);
      alert('保存失败');
    } finally {
      setSaving(false);
    }
  };

  const renderMarkdown = (text: string) => {
    let html = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
      .replace(/^```(\w+)?\n([\s\S]+?)```/g, '<pre class="bg-secondary p-4 rounded-sm my-4 overflow-x-auto"><code>$2</code></pre>')
      .replace(/`(.+?)`/g, '<code class="bg-secondary px-1 rounded">$1</code>')
      .replace(/\n\n/g, '</p><p class="my-4">')
      .replace(/\n/g, '<br>');
    
    return `<p class="my-4">${html}</p>`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">加载中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回</span>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-secondary transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>{preview ? '编辑' : '预览'}</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-sm hover:bg-foreground/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? '保存中...' : '保存'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">标题</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="输入文章标题"
              />
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">摘要</label>
              <textarea
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="输入文章摘要（用于列表展示）"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-foreground">正文（Markdown 格式）</label>
                <button
                  onClick={handleAutoFormat}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-muted-foreground hover:text-foreground border border-border rounded-sm transition-colors"
                >
                  <Wand2 className="w-3 h-3" />
                  <span>自动排版</span>
                </button>
              </div>
              {preview ? (
                <div 
                  className="min-h-[500px] px-6 py-4 bg-card border border-border rounded-sm prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(formData.content) }}
                />
              ) : (
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={25}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="输入文章正文..."
                />
              )}
            </div>
          </div>

          {/* Right: Settings */}
          <div className="space-y-6">
            {/* Publish Time */}
            <div className="bg-card border border-border rounded-sm p-6">
              <label className="block text-sm font-semibold text-foreground mb-2">发布时间</label>
              <input
                type="date"
                value={formData.publish_time}
                onChange={(e) => setFormData({ ...formData, publish_time: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Source */}
            <div className="bg-card border border-border rounded-sm p-6">
              <label className="block text-sm font-semibold text-foreground mb-2">来源平台</label>
              <select
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="知乎">知乎</option>
                <option value="小红书">小红书</option>
                <option value="微信公众号">微信公众号</option>
                <option value="个人博客">个人博客</option>
                <option value="其他">其他</option>
              </select>
            </div>

            {/* Source Link */}
            <div className="bg-card border border-border rounded-sm p-6">
              <label className="block text-sm font-semibold text-foreground mb-2">原文链接</label>
              <input
                type="url"
                value={formData.source_link}
                onChange={(e) => setFormData({ ...formData, source_link: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://..."
              />
            </div>

            {/* Tags */}
            <div className="bg-card border border-border rounded-sm p-6">
              <label className="block text-sm font-semibold text-foreground mb-2">标签</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-sm text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="输入标签"
                />
                <button
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-sm hover:bg-secondary/80 transition-colors"
                >
                  添加
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-destructive transition-colors"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Format Tips */}
            <div className="bg-secondary/30 border border-border rounded-sm p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">排版提示</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 标题前后会自动添加空行</li>
                <li>• 段落间保留一个空行</li>
                <li>• 列表项前后自动添加空行</li>
                <li>• 点击"自动排版"一键优化格式</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
