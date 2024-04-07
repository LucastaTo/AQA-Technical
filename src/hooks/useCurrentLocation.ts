import { useState, useEffect } from 'react'
import { Coordinate } from 'types'

const useCurrentLocation = () => {
  const [position, setPosition] = useState<Coordinate | null>(null)

  useEffect(() => {
    const fetchLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (pos) {
          setPosition({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
          })
        })
      } else {
        console.warn('Geolocation is not available in your browser.')
      }
    }

    if (!position) {
      fetchLocation()
    }

    return () => {}
  }, [])

  return position
}

export default useCurrentLocation
