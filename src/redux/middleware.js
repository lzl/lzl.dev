import { swApi } from '@/modules/StarWars/service'

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  swApi.middleware,
]

export default middleware
