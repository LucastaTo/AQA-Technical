import { Link } from 'react-router-dom'

const ErrorPage = () => (
  <main className='min-h-screen bg-fuchsia-100 flex items-center justify-center text-center min-h-page-100'>
    <section className='gap-5 grid'>
      <h1 className='text-8xl'>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link
        to='/home'
        className='uppercase bg-fuchsia-300 text-white p-4 inline-block font-normal transition-opacity text-sm'
      >
        back home
      </Link>
    </section>
  </main>
)

export default ErrorPage
