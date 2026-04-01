import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '清蒸椰子鸡 - 数字化战略咨询师',
    template: '%s | 清蒸椰子鸡',
  },
  description:
    '清蒸椰子鸡 Will.Wen - 数字化战略咨询师，专注于企业战略与数字化场景落地，致力于打造丰富而有深度的数字品牌。',
  keywords: [
    '清蒸椰子鸡',
    'Will Wen',
    '数字化战略',
    '咨询师',
    '产品经理',
    '企业数字化',
    '战略规划',
  ],
  authors: [{ name: '清蒸椰子鸡', url: 'https://coconutchick.top' }],
  generator: 'Coze Code',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '清蒸椰子鸡 - 数字化战略咨询师',
    description:
      '专注于企业战略与数字化场景落地，致力于打造丰富而有深度的数字品牌。',
    url: 'https://coconutchick.top',
    siteName: '清蒸椰子鸡的个人网站',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '扣子编程 - 你的 AI 工程师',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
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
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
