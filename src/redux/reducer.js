import { counterReducer } from '@/modules/Counter/slice'
import { swApi } from '@/modules/StarWars/service'

export default {
  counter: counterReducer,
  [swApi.reducerPath]: swApi.reducer,
}
