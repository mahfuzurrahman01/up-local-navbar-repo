import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='box-border p-0 m-0 font-sans flex'>
        <div className='w-[20%] bg-gray-700 text-white '>
          <Sidebar />
        </div>
        <div className='w-[80%]'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
