import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'



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
        <div 
          data-vapi-assistant-id="7bfdbaf9-3a36-41a2-bf89-34cbcd2fb5b4" 
          data-vapi-public-key="0467c949-25f6-40d3-b106-0376ff43b4c2"
          id="vapi-widget"
        />
      </body>
    </html>
  )
} 