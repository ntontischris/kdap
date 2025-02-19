export function reportWebVitals(metric: any) {
  const { id, name, label, value } = metric

  // Analytics implementation
  if (window.gtag) {
    window.gtag('event', name, {
      event_category:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    })
  }
}

export function measureCLS() {
  let clsValue = 0
  let clsEntries: PerformanceEntry[] = []

  let sessionValue = 0
  let sessionEntries: PerformanceEntry[] = []

  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // Only count layout shifts without recent user input
      if (!entry.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0]
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1]

        // If the entry occurred less than 1 second after the previous entry and
        // less than 5 seconds after the first entry in the session, include the
        // entry in the current session. Otherwise, start a new session.
        if (
          sessionValue &&
          entry.startTime - lastSessionEntry.startTime < 1000 &&
          entry.startTime - firstSessionEntry.startTime < 5000
        ) {
          sessionValue += entry.value
          sessionEntries.push(entry)
        } else {
          sessionValue = entry.value
          sessionEntries = [entry]
        }

        // If the current session value is larger than the current CLS value,
        // update CLS and the entries contributing to it.
        if (sessionValue > clsValue) {
          clsValue = sessionValue
          clsEntries = sessionEntries
        }
      }
    }
  }).observe({ entryTypes: ['layout-shift'] })

  return { clsValue, clsEntries }
}

export function measureLCP() {
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('LCP:', entry.startTime)
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] })
}

export function measureFID() {
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const duration = entry.processingStart - entry.startTime
      console.log('FID:', duration)
    }
  }).observe({ type: 'first-input', buffered: true })
}

export function measureTTFB() {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  return navigation.responseStart - navigation.requestStart
}

// Initialize all performance measurements
export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    measureCLS()
    measureLCP()
    measureFID()
    console.log('TTFB:', measureTTFB())
  }
}
