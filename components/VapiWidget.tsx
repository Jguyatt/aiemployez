'use client'

import { useEffect } from 'react'

export default function VapiWidget() {
  useEffect(() => {
    // Create the vapi-widget element
    const widget = document.createElement('vapi-widget')
    widget.setAttribute('assistant-id', '7bfdbaf9-3a36-41a2-bf89-34cbcd2fb5b4')
    widget.setAttribute('public-key', '0467c949-25f6-40d3-b106-0376ff43b4c2')
    
    // Append to body
    document.body.appendChild(widget)
    
    // Cleanup on unmount
    return () => {
      if (document.body.contains(widget)) {
        document.body.removeChild(widget)
      }
    }
  }, [])

  return null
} 