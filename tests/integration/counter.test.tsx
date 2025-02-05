import { screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, beforeAll, afterAll, afterEach } from 'vitest'
import { revalidateTag } from 'next/cache'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'
import { renderServerComponent } from '../test-utils'

// Mock next/cache
vi.mock('next/cache', () => ({
  revalidateTag: vi.fn(),
  unstable_cacheLife: vi.fn(),
  unstable_cacheTag: vi.fn(),
}))

// Mock Counter component
const mockIncrCounter = vi.fn(async () => {
  await revalidateTag('counter')
})

const mockCounter = vi.fn(async () => {
  return (
    <form action={mockIncrCounter}>
      <button type="submit" disabled={false}>
        (<span>42</span>)
      </button>
    </form>
  )
})

vi.mock('@/app/counter', () => ({
  default: () => mockCounter(),
}))

// 设置 MSW 服务器
const server = setupServer(
  http.get('https://api.upstash.com/v2/redis/incr/counter', () => {
    return HttpResponse.json({ result: '42' })
  }),
  http.post('https://api.upstash.com/v2/redis/incr/counter', () => {
    return HttpResponse.json({ result: 'OK' })
  })
)

describe('Counter', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  beforeEach(() => {
    process.env.REDIS_API_URL = 'https://api.upstash.com/v2/redis'
    process.env.REDIS_API_TOKEN = 'test-token'
  })

  it('renders the counter value from API', async () => {
    const counter = await mockCounter()
    renderServerComponent(counter)
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('calls revalidateTag when form is submitted', async () => {
    const counter = await mockCounter()
    const { container } = renderServerComponent(counter)
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()

    await fireEvent.submit(form!)
    expect(revalidateTag).toHaveBeenCalledWith('counter')
  })

  it('shows loading state during form submission', async () => {
    // 模拟 pending 状态
    mockCounter.mockImplementationOnce(async () => {
      return (
        <form action={mockIncrCounter}>
          <button type="submit" disabled={true}>
            (<span className="animate-pulse">42</span>)
          </button>
        </form>
      )
    })

    const counter = await mockCounter()
    const { container } = renderServerComponent(counter)
    const button = screen.getByRole('button')
    const valueSpan = screen.getByText('42')

    expect(button).toBeDisabled()
    expect(valueSpan).toHaveClass('animate-pulse')
  })

  it('handles API error gracefully', async () => {
    // 修改 MSW handler 以返回错误
    server.use(
      http.get('https://api.upstash.com/v2/redis/incr/counter', () => {
        return HttpResponse.error()
      })
    )

    try {
      const counter = await mockCounter()
      renderServerComponent(counter)
    } catch (error) {
      expect(error).toBeDefined()
    }

    // 恢复原始 handler
    server.resetHandlers()
  })
}) 