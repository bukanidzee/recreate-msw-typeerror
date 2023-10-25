import { createSlice } from '@reduxjs/toolkit'
import { appApi } from './appApi'

const initialState = {
  name: '',
  picture: undefined,
  userId: '',
  token: '',
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, picture, userId, token, isAdmin } = action.payload
      state.name = name
      state.picture = picture
      state.userId = userId
      state.token = token
      state.isAdmin = isAdmin
    },
    logout: (state) => {
      state.name = initialState.name
      state.picture = initialState.picture
      state.userId = initialState.userId
      state.token = initialState.token
      state.isAdmin = initialState.isAdmin
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (state, action) => {
        const { name, picture, userId, token, isAdmin } = action.payload
        state.name = name
        state.picture = picture
        state.userId = userId
        state.token = token
        state.isAdmin = isAdmin
      }
    )
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
