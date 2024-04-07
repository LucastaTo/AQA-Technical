import { doGetWeather, doGetListWeather5Day, doSetCurrentWeather, doSetLoading } from '../../slice/weather'
import { getCurrentWeatherApi, getListWeather5DayApi } from '../../../api/weather'
import { all, call, put, takeEvery } from 'typed-redux-saga'

function* getWeatherSaga(action: ReturnType<typeof doGetWeather>) {
  try {
    const response = yield* call(getCurrentWeatherApi, action.payload)

    yield* put(doSetCurrentWeather(response))
    action.payload.cb(response)
  } catch (error) {
    yield* put(doSetLoading())
  }
}

function* getListWeather5DaySaga(action: ReturnType<typeof doGetListWeather5Day>) {
  try {
    const response = yield* call(getListWeather5DayApi, action.payload)
    action.payload.cb(response)
  } catch (error) {
    yield* put(doSetLoading())
  }
}

export function* weatherSaga(): Generator {
  yield* all([takeEvery(doGetWeather, getWeatherSaga), takeEvery(doGetListWeather5Day, getListWeather5DaySaga)])
}
