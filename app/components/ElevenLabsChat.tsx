"use client"

import { useState, useEffect } from "react"

export default function ElevenLabsChat() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://elevenlabs.io/convai-widget/index.js"
    script.async = true
    script.type = "text/javascript"

    const handleLoad = () => {
      setIsLoaded(true)
      console.log("ElevenLabs script loaded successfully")
    }

    const handleError = (event: Event | string) => {
      console.error("Error loading ElevenLabs script:", event)
      setError("Failed to load ElevenLabs chat widget")
    }

    script.addEventListener("load", handleLoad)
    script.addEventListener("error", handleError)

    document.body.appendChild(script)

    return () => {
      // Don't remove the script on unmount to prevent re-registration issues
      script.removeEventListener("load", handleLoad)
      script.removeEventListener("error", handleError)
    }
  }, [])

  if (error) {
    console.error(error)
    return null // Or return a fallback UI
  }

  if (!isLoaded) {
    return null // Or return a loading indicator
  }

  return <div className="fixed bottom-4 right-4 z-50" data-elevenlabs-convai data-agent-id="YnayAQPQdHpYGV4M6SZw" />
}
