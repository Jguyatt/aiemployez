import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import VapiWidget from '@/components/VapiWidget'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cereva - Custom AI Solutions',
  description: 'Transform your business with custom AI solutions that automate workflows and boost revenue',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
          async
          type="text/javascript"
        />
      </head>
      <body className={inter.className}>
        {children}
        <VapiWidget />
      </body>
    </html>
  )
} 