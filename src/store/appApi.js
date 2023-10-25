import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api'
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginMutation } = appApi
