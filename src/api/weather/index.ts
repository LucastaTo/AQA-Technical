import { CONFIG } from '../../utils/constants'
import { Coordinate, CurrentWeatherResponse, ThreeHourResponse } from 'types'
import axios from 'axios'

export const getCurrentWeatherApi = (param: Coordinate): Promise<CurrentWeatherResponse> =>
  axios
    .get<CurrentWeatherResponse>(
      `${CONFIG.OPEN_WEATHER_API_URL}weather?appid=${CONFIG.VITE_API_KEY}&lat=${param.lat}&lon=${param.lon}&units=metric`
    )
    .then((response) => response.data)

export const getListWeather5DayApi = (param: Coordinate): Promise<ThreeHourResponse> =>
  axios
    .get<ThreeHourResponse>(
      `${CONFIG.OPEN_WEATHER_API_URL}forecast?appid=${CONFIG.VITE_API_KEY}&lat=${param.lat}&lon=${param.lon}&units=metric`
    )
    .then((response) => response.data)
