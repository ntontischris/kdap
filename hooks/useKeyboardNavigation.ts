import { useEffect, useCallback } from 'react'

interface KeyboardNavigationOptions {
  onArrowUp?: () => void
  onArrowDown?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onEnter?: () => void
  onEscape?: () => void
  onTab?: (event: KeyboardEvent) => void
  enabled?: boolean
}

export function useKeyboardNavigation({
  onArrowUp,
  onArrowDown,
  onArrowLeft,
  onArrowRight,
  onEnter,
  onEscape,
  onTab,
  enabled = true,
}: KeyboardNavigationOptions) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault()
          onArrowUp?.()
          break
        case 'ArrowDown':
          event.preventDefault()
          onArrowDown?.()
          break
        case 'ArrowLeft':
          event.preventDefault()
          onArrowLeft?.()
          break
        case 'ArrowRight':
          event.preventDefault()
          onArrowRight?.()
          break
        case 'Enter':
          event.preventDefault()
          onEnter?.()
          break
        case 'Escape':
          event.preventDefault()
          onEscape?.()
          break
        case 'Tab':
          onTab?.(event)
          break
        default:
          break
      }
    },
    [enabled, onArrowUp, onArrowDown, onArrowLeft, onArrowRight, onEnter, onEscape, onTab]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}

// Focus trap utility
export function useFocusTrap(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    return () => container.removeEventListener('keydown', handleTabKey)
  }, [containerRef])
}
