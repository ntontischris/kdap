'use client'

import { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function LocationMap() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: 'weekly',
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 40.640063, lng: 22.944419 },
        zoom: 15,
      })

      new google.maps.Marker({
        position: { lat: 40.640063, lng: 22.944419 },
        map,
        title: 'ΚΔΑΠ Ντόντης',
      })
    })
  }, [])

  return (
    <div id="map" className="w-full h-96 rounded-lg shadow-lg" />
  )
}

