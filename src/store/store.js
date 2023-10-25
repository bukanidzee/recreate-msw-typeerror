import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import { appApi } from './appApi'

const rootReducer = combineReducers({
  user: userReducer,
  [appApi.reducerPath]: appApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(appApi.middleware)
  })
}
