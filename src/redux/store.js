import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import reducer from '@/redux/reducer'
import middleware from '@/redux/middleware'

const store = configureStore({ reducer, middleware })

setupListeners(store.dispatch)

export default store
