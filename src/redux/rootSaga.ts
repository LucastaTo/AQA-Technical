import { all, fork } from 'typed-redux-saga'
import { weatherSaga } from './saga/weather'

function* saga(): Generator {
  yield all([fork(weatherSaga)])
}

export default saga
