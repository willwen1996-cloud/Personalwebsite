import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '清蒸椰子鸡 | 个人网站',
    template: '%s | 清蒸椰子鸡',
  },
  description:
    '一位热爱研究与分享的数字化领域分析师。专注于企业战略与数字化场景落地，致力于打造丰富而有深度的数字品牌。',
  keywords: [
    '个人网站',
    '数字化转型',
    '产品经理',
    '设计师',
    'Portfolio',
  ],
  authors: [{ name: '清蒸椰子鸡' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '清蒸椰子鸡 | 个人网站',
    description:
      '一位热爱研究与分享的数字化领域分析师',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
