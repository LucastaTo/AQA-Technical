import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

interface Props {
  isShowBtnBack?: boolean
}
const Header: FC<Props> = ({ isShowBtnBack = false }) => {
  const navigate = useNavigate()
  const currentWeather = useAppSelector((store) => store.weatherStorage.currentWeather)
  const onRedirectToSearchPage = () => navigate('/search')
  const onRedirectToHomePage = () => navigate('/home')
  return (
    <div className='w-full overflow-y-auto sticky top-0 z-10 bg-white'>
      <header className='text-lg w-full flex rounded items-center m-auto font-bold py-2 max-w-sm px-4'>
        {isShowBtnBack && (
          <button onClick={onRedirectToHomePage}>
            <BiArrowBack className='me-2 h-5 w-5' />
          </button>
        )}
        <p className='text-lg w-full flex mb-0 items-center gap-2'>
          <CiLocationOn className='h-6 w-6' />
          {currentWeather?.name}, {currentWeather?.sys?.country}
        </p>
        <button onClick={onRedirectToSearchPage}>
          <CiSearch className='h-6 w-6' />
        </button>
      </header>
    </div>
  )
}

export default Header
