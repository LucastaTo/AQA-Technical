import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Card, CardBody } from '@components/Card'
import Header from '@components/Header'
import { City, Country, ICity, ICountry } from 'country-state-city'
import {
  ObjectItem,
  doDeleteItemSearchHistory,
  doSetCoordinateWeather,
  doSetSearchHistory
} from '../../redux/slice/weather'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import classNames from 'classnames'
import useClickOutside from '../../hooks/useClickOutside'
import InfiniteScrollDropdown from '@components/InfiniteScrollDropdown'
import { useNavigate } from 'react-router-dom'
import Text from '@components/Text'
import { BiSearch } from 'react-icons/bi'
import { FiTrash } from 'react-icons/fi'

const SearchPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const searchHistory = useAppSelector((store) => store.weatherStorage.searchHistory)
  const [mergedData, setMergedData] = useState<ObjectItem[]>([])
  const [listDropdown, setListDropdown] = useState<ObjectItem[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [isError, setError] = useState(false)
  const containerRef = useClickOutside<HTMLDivElement>(() => setShowDropdown(false))
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = () => {
      const countries = Country.getAllCountries()
      const cities = City.getAllCities()

      const mergedData = mergeAndRemoveDuplicates(cities, countries)
      setMergedData(mergedData)
    }

    fetchData()
  }, [])

  const mergeAndRemoveDuplicates = (cities: ICity[], countries: ICountry[]): ObjectItem[] => {
    const mergedArray = [...countries, ...cities]

    const map = new Map<string, ObjectItem>()

    mergedArray.forEach((item) => {
      const existingItem = map.get(item.name)
      if (!existingItem) {
        map.set(item.name, {
          name: item.name,
          lon: Number(item.longitude),
          lat: Number(item.latitude),
          countryCode: 'isoCode' in item ? item.isoCode : item.countryCode
        })
      }
    })

    return Array.from(map.values())
  }

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setError(false)
    setSearchValue(e.target.value)
    if (e.target.value === '') setListDropdown([])
  }

  const handleSearch = () => {
    setShowDropdown(false)
    setListDropdown([])
    console.log(searchValue)
    if (
      searchValue === '' ||
      !mergedData.some((data) => data.name.toLocaleLowerCase().includes(searchValue.toLowerCase()))
    ) {
      setError(true)
    } else {
      setError(false)
      setShowDropdown(true)
      setListDropdown(mergedData.filter((data) => data.name.toLowerCase().includes(searchValue.toLowerCase())))
    }
  }

  const handleSelected = (item: ObjectItem, isSetHistory: boolean = true) => {
    isSetHistory && dispatch(doSetSearchHistory(item))
    dispatch(
      doSetCoordinateWeather({
        lat: Number(item.lat),
        lon: Number(item.lon),
        cb: () => {
          navigate('/home')
        }
      })
    )
  }

  return (
    <>
      <Header isShowBtnBack={true} />
      <main className='w-full overflow-y-auto'>
        <div className='bg-sky-100 w-full min-h-screen overflow-y-auto'>
          <div className='max-w-sm w-full p-4 m-auto grid gap-3' ref={containerRef}>
            <div className='flex items-start max-w-sm mx-auto w-full mb-5 relative'>
              <div className='relative w-full items-start max-w-sm mx-autov'>
                <input
                  type='text'
                  id='simple-search'
                  className={`bg-gray-50 border ${isError ? 'border-red-700 focus:invalid:border-red-500 focus:invalid:ring-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder='Search country or city here...'
                  value={searchValue}
                  onChange={onChangeSearch}
                  onClick={() => setShowDropdown(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch()
                  }}
                />
                {isError && (
                  <span className='text-red-700 text-sm ms-2 absolute'>
                    {searchValue ? 'Invalid country or city' : 'Please fill the input'}
                  </span>
                )}
              </div>
              {listDropdown.length > 0 && (
                <div
                  className={classNames(
                    'z-10 absolute top-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-full mt-1',
                    { block: showDropdown, hidden: !showDropdown }
                  )}
                  ref={menuRef}
                  style={{ maxHeight: showDropdown ? '200px' : '0', overflowY: 'auto' }}
                >
                  <InfiniteScrollDropdown
                    data={listDropdown}
                    renderOption={(item) => (
                      <span className='' key={item.name}>
                        {item.name}, {item.countryCode}
                      </span>
                    )}
                    onClick={handleSelected}
                  />
                </div>
              )}
              <button
                onClick={handleSearch}
                className={`${isError && 'mb-[24px]'} p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
              >
                Search
              </button>
            </div>
            {searchHistory.length > 0 && (
              <>
                <Text as='h5' className='m-0 text-left font-bold'>
                  Search History
                </Text>
                <Card className='max-w-ms max-h-[90vh] overflow-y-auto'>
                  <CardBody className='my-5'>
                    <ul className='flex flex-col gap-6'>
                      {searchHistory.map((item) => (
                        <li key={item.name} className='flex flex-1 justify-between items-center text-sm font-bold'>
                          {item.name}, {item.countryCode}
                          <span className='flex items-center gap-3 text-sm'>
                            <button
                              type='button'
                              onClick={() => handleSelected(item, false)}
                              className='bg-transparent'
                            >
                              <BiSearch className='h-5 w-5' />{' '}
                            </button>{' '}
                            <button
                              type='button'
                              className='bg-transparent'
                              onClick={() => dispatch(doDeleteItemSearchHistory(item))}
                            >
                              <FiTrash className='h-5 w-5' />
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default SearchPage
