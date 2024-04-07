import React from 'react'

const ErrorPage = React.lazy(() => import('./error'))
const HomePage = React.lazy(() => import('./home'))
const SearchPage = React.lazy(() => import('./search'))

export { ErrorPage, HomePage, SearchPage }
