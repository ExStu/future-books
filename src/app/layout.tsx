import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import '../assets/styles/globals.scss'
import Header from '../components/HeaderTop/HeaderTop'
import Providers from '../providers/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg'
  } ,
  title: 'Future Books',
  description: 'Search for any books',
}

export default function RootLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
