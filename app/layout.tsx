import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import Footer from '@/components/Footer'


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
        <script src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js" async type="text/javascript"></script>
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <div
          dangerouslySetInnerHTML={{
            __html: `<vapi-widget
              public-key="0467c949-25f6-40d3-b106-0376ff43b4c2"
              assistant-id="7bfdbaf9-3a36-41a2-bf89-34cbcd2fb5b4"
              mode="chat"
              theme="dark"
              base-bg-color="#000000"
              accent-color="#14B8A6"
              cta-button-color="#000000"
              cta-button-text-color="#ffffff"
              border-radius="large"
              size="full"
              position="bottom-right"
              title="TALK WITH AI"
              start-button-text="Start"
              end-button-text="End Call"
              chat-first-message="Hey, How can I help you today?"
              chat-placeholder="Type your message..."
              voice-show-transcript="true"
              consent-required="true"
              consent-title="Terms and conditions"
              consent-content="By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
              consent-storage-key="vapi_widget_consent"
            ></vapi-widget>`
          }}
        />
      </body>
    </html>
  )
} 