import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/globals.css'
import '../../public/fonts/fonts.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry';
// swiper 插件
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import Header from '@/components/layout/header/page'
import Footer from '@/components/layout/footer/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '浙大宁波理工学院经理学院国际课程中心',
  description: '浙大宁波理工学院经理学院国际课程中心',
  icons: {
    icon: 'https://icon-zhuhai.oss-cn-hangzhou.aliyuncs.com/2024/07/10/938_favicon.png',
    shortcut: 'https://icon-zhuhai.oss-cn-hangzhou.aliyuncs.com/2024/07/10/938_favicon.png',
    apple: 'https://icon-zhuhai.oss-cn-hangzhou.aliyuncs.com/2024/07/10/938_favicon.png',
    other: {
      rel: 'https://icon-zhuhai.oss-cn-hangzhou.aliyuncs.com/2024/07/10/938_favicon.png',
      url: 'https://icon-zhuhai.oss-cn-hangzhou.aliyuncs.com/2024/07/10/938_favicon.png',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Header></Header>
          {children}
          <Footer></Footer>
        </AntdRegistry>
      </body>
    </html>
  )
}
