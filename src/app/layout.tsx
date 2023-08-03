import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jack Werner - Portfolio',
  description: 'A collection of works by Jack Werner. Made by Jack Werner using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rly1kmu.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
