import { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ErrorPage, HomePage, SearchPage } from './pages'
import Preloader from '@components/PreLoader'
import useCurrentLocation from './hooks/useCurrentLocation'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { doSetCoordinateWeather } from './redux/slice/weather'
import { Country } from 'country-state-city'
import { CONFIG } from './utils/constants'

const App = () => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector((store) => store.weather.loading)

  const position = useCurrentLocation() || Country.getCountryByCode(CONFIG.COUNTRY_CODE)
  useEffect(() => {
    if (position !== undefined)
      dispatch(
        doSetCoordinateWeather({
          lat: 'latitude' in position ? Number(position.latitude) : position.lat,
          lon: 'longitude' in position ? Number(position.longitude) : position.lon
        })
      )
  }, [position])
  return (
    <>
      {loading ? (
        <Suspense fallback={<Preloader />}></Suspense>
      ) : (
        <Router>
          <Routes>
            <Route
              path='/home'
              element={
                <Suspense fallback={<Preloader />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path='/search'
              element={
                <Suspense fallback={<Preloader />}>
                  <SearchPage />
                </Suspense>
              }
            />
            <Route
              path='*'
              element={
                <Suspense fallback={<Preloader />}>
                  <ErrorPage />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
