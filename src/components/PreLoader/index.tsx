import { FC } from 'react'
import { Oval } from 'react-loader-spinner'

const Preloader: FC = () => (
  <div className='bg-[rgba(250, 250, 250, 0.5)] flex justify-center items-center fixed z-50 w-full h-full'>
    <Oval
      visible={true}
      height='80'
      width='80'
      color='#4fa94d'
      ariaLabel='oval-loading'
      wrapperStyle={{}}
      wrapperClass=''
    />
  </div>
)

export default Preloader
