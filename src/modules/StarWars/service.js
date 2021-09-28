import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPeopleById: builder.query({
      query: (id) => `people/${id}`,
    }),
  }),
})

export const { useGetPeopleByIdQuery } = swApi
