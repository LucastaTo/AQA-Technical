import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { doGetListWeather5Day, doGetWeather } from '../../redux/slice/weather'
import { Card, CardBody, CardImage, CardTitle } from '@components/Card'
import Text from '@components/Text'
import { RiCelsiusFill } from 'react-icons/ri'
import { CurrentWeatherResponse, Forecast } from 'types'
import { formatDate, formatTime } from '../../utils/helpers'
import Header from '@components/Header'

type GroupedWeatherData = {
  [date: string]: { [time: string]: Forecast }
}

interface ICustomizeIcon {
  title: string
  description: ReactNode
}

const CustomizeIcon: FC<ICustomizeIcon> = ({ title, description }) => (
  <span className='flex flex-col items-center justify-center text-sm text-[rgb(83 89 99)]'>
    {title}
    <span className='flex items-center font-bold gap-1 text-black'>{description}</span>
  </span>
)

const HomePage = () => {
  const dispatch = useAppDispatch()
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResponse>()
  const [list5DayForecast, setList5DayForecast] = useState<Forecast[]>([])
  const location = useAppSelector((store) => store.weather.position)

  useEffect(() => {
    if (location != null) {
      dispatch(
        doGetWeather({
          lat: location.lat,
          lon: location.lon,
          cb: (response) => setCurrentWeather(response)
        })
      )
      dispatch(
        doGetListWeather5Day({
          lat: location.lat,
          lon: location.lon,
          cb: (response) => setList5DayForecast(response.list)
        })
      )
    }
  }, [location])

  const groupedWeather = useMemo(() => {
    const groupedData: GroupedWeatherData = {}

    list5DayForecast?.forEach((item) => {
      const [date, time] = item.dt_txt.split(' ')

      if (!groupedData[date]) {
        groupedData[date] = {}
      }

      groupedData[date][time] = item
    })

    return groupedData
  }, [list5DayForecast])

  return (
    <>
      <Header />
      <main className='w-full overflow-y-auto'>
        <div className='bg-sky-100 w-full min-h-screen overflow-y-auto'>
          <div className='max-w-sm w-full p-4 m-auto grid gap-3'>
            <Card className='max-w-ms'>
              <CardBody>
                <Text as='h5' className='m-0 font-bold'>
                  {formatDate(new Date(), false)}
                </Text>
                <Text className='flex items-stretch gap-8 justify-center mb-0'>
                  <CardImage src={`https://openweathermap.org/img/wn/${currentWeather?.weather?.[0]?.icon}@2x.png`} />
                  <span className='flex flex-col items-center justify-center text-sm'>
                    <span className='flex items-center text-2xl font-bold'>
                      {currentWeather?.main?.temp} <RiCelsiusFill />
                    </span>
                    {currentWeather?.weather?.[0]?.description.replace(/\b\w/g, (char: string) => char.toUpperCase())}
                  </span>
                </Text>
                <Text className='flex items-stretch gap-10 justify-center text-lg mb-0'>
                  <CustomizeIcon
                    title='Humidity'
                    description={
                      <>
                        {currentWeather?.main?.humidity} <p className='m-0 text-xs'>%</p>
                      </>
                    }
                  />
                  <CustomizeIcon
                    title='Winds'
                    description={
                      <>
                        {currentWeather?.wind?.speed} <p className='m-0 text-xs'>m/s</p>
                      </>
                    }
                  />
                  <CustomizeIcon
                    title='Visibility'
                    description={
                      <>
                        {currentWeather && currentWeather?.visibility / 1000} <p className='m-0 text-xs'>km</p>
                      </>
                    }
                  />
                </Text>
              </CardBody>
            </Card>
            <Text as='h5' className='m-0 text-left font-bold'>
              5-day Forecast (3 Hours)
            </Text>
            <Card className='max-w-ms'>
              <CardBody className='flex flex-col gap-6'>
                {Object.keys(groupedWeather).map((date) => (
                  <ul key={date}>
                    <CardTitle as='h6' className='mb-4 text-clr-grey-6 text-sx'>
                      {' '}
                      {formatDate(
                        date,
                        true,
                        {
                          day: 'numeric',
                          month: 'long'
                        },
                        'en-GB'
                      )}
                    </CardTitle>
                    {Object.keys(groupedWeather[date]).map((time) => (
                      <li key={time} className='flex flex-1 justify-between items-center text-sm font-bold'>
                        <span className='flex items-center gap-1'>
                          {formatTime(time)}{' '}
                          <span className='flex items-center text-xs text-[#7c6e6e] font-normal'>
                            <CardImage
                              src={`https://openweathermap.org/img/wn/${groupedWeather[date][time].weather[0].icon}.png`}
                            />
                            {groupedWeather[date][time].main.temp_max} / {groupedWeather[date][time].main.temp_min}{' '}
                            <RiCelsiusFill />
                          </span>
                        </span>
                        {groupedWeather[date][time].weather[0].description}
                      </li>
                    ))}
                  </ul>
                ))}
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
