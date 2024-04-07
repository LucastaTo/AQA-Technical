import createSagaMiddleware from 'redux-saga'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import rootSaga from './rootSaga'
import { weatherStorageReducer, weatherReducers } from './slice/weather'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  weather: weatherReducers,
  weatherStorage: weatherStorageReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(sagaMiddleware)
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
