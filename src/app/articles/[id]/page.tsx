'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import Link from 'next/link';

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id as string;

  const article = siteConfig.articles.items.find(item => item.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">文章不存在</h1>
          <button
            onClick={() => router.push('/articles')}
            className="text-primary hover:underline"
          >
            返回文章列表
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{article.title}</h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.publishTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">来源：</span>
              <span>{article.source}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mb-8">
          <Tag className="w-4 h-4 text-muted-foreground" />
          <div className="flex gap-2 flex-wrap">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <h3 key={index} className="text-xl font-bold text-foreground mt-8 mb-4">
                  {paragraph.replace(/\*\*/g, '')}
                </h3>
              );
            }
            return (
              <p key={index} className="text-foreground leading-relaxed mb-4">
                {paragraph.split('**').map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </p>
            );
          })}
        </div>

        {/* Source Link */}
        {article.sourceLink && (
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href={article.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>查看原文：{article.source}</span>
            </a>
          </div>
        )}
      </article>
    </div>
  );
}
