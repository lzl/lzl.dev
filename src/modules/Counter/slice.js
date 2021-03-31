import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    up: (state) => {
      ++state.value
    },
    down: (state) => {
      --state.value
    },
  },
})

export const counterActions = slice.actions
export const counterReducer = slice.reducer
