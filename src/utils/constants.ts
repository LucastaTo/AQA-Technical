const SCHEME = 'https://'
const API_HOST = 'api.openweathermap.org/'

const WEATHER_API_NAME = 'data/'
const WEATHER_API_VERSION = `2.5/`
export const CURRENT_WEATHER_ENDPOINT = 'weather'
export const FORECAST = 'forecast'

export const GEOCODING_API_NAME = 'geo/'
export const GEOCODING_API_VERSION = `1.0/`
export const DIRECT_GEO = 'direct'
export const REVERSE_GEO = 'reverse'
export const ZIP_GEO = 'zip'

export const CONFIG = {
  OPEN_WEATHER_API_URL: SCHEME + API_HOST + WEATHER_API_NAME + WEATHER_API_VERSION,
  APP_NAME: import.meta.env.VITE_APP_TITLE || 'HungLuu-Test',
  COUNTRY_CODE: import.meta.env.VITE_DEFAULT_COUNTRY_CODE || 'SG',
  VITE_API_KEY: import.meta.env.VITE_API_KEY_OPEN_WEATHER || '67694a6341667da8cc377e1c875146de'
} as const
