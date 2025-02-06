import '@testing-library/jest-dom'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from 'vitest'

// 定义模拟的 API handlers
export const handlers = [
  http.get('https://api.upstash.com/v2/redis/*', () => {
    return HttpResponse.json({ result: '42' })
  }),

  http.post('https://api.upstash.com/v2/redis/*', () => {
    return HttpResponse.json({ result: 'OK' })
  }),
]

// 设置 MSW 服务器
const server = setupServer(...handlers)

// 在所有测试之前启动服务器
beforeAll(() => server.listen())

// 每个测试后重置 handlers
afterEach(() => server.resetHandlers())

// 所有测试完成后关闭服务器
afterAll(() => server.close())
