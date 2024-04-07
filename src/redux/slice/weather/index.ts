import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coordinate, CurrentWeatherResponse, ThreeHourResponse } from 'types'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export interface ObjectItem {
  name: string
  lon: number
  lat: number
  countryCode: string
}

export interface WeatherType {
  position: Coordinate
  loading: boolean
  currentWeather: CurrentWeatherResponse | null
  searchHistory: ObjectItem[]
}

export interface WeatherResponseCallback<T> {
  cb: (response: T) => void
}
export interface CoordinateCallback {
  cb?: () => void
}

const initialState: WeatherType = {
  loading: false,
  position: {
    lat: 0,
    lon: 0
  },
  currentWeather: null,
  searchHistory: []
}

const weatherSlices = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    doGetWeather(_state, _action: PayloadAction<Coordinate & WeatherResponseCallback<CurrentWeatherResponse>>) {},
    doGetListWeather5Day(_state, _action: PayloadAction<Coordinate & WeatherResponseCallback<ThreeHourResponse>>) {},
    doSetCoordinateWeather(state, action: PayloadAction<Coordinate & CoordinateCallback>) {
      state.position = action.payload
      if (action.payload.cb) action.payload.cb()
    },
    doSetCurrentWeather(state, action: PayloadAction<CurrentWeatherResponse>) {
      state.currentWeather = action.payload
    },
    doSetSearchHistory(state, action: PayloadAction<ObjectItem>) {
      const { searchHistory } = state
      const existingIndex = searchHistory.findIndex((item) => item.name === action.payload.name)
      if (existingIndex !== -1) {
        const existingItem = searchHistory.splice(existingIndex, 1)[0]
        state.searchHistory = [existingItem, ...searchHistory]
      } else {
        state.searchHistory = [action.payload, ...searchHistory]
      }
    },
    doDeleteItemSearchHistory(state, action: PayloadAction<ObjectItem>) {
      const { searchHistory } = state
      state.searchHistory = searchHistory.filter((item) => item.name !== action.payload.name)
    },
    doSetLoading(state) {
      state.loading = true
    }
  }
})

const persistConfig = {
  key: 'weather',
  storage,
  whitelist: ['currentWeather', 'searchHistory']
}
const weatherReducers = weatherSlices.reducer
const weatherStorageReducer = persistReducer(persistConfig, weatherReducers)

export { weatherReducers, weatherStorageReducer }

export const {
  doGetWeather,
  doGetListWeather5Day,
  doSetCoordinateWeather,
  doSetCurrentWeather,
  doSetSearchHistory,
  doDeleteItemSearchHistory,
  doSetLoading
} = weatherSlices.actions
