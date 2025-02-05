import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest'
import CounterButton from '@/app/counter-button'

const mockUseFormStatus = vi.fn()

// Mock the entire react-dom module
vi.mock('react-dom', () => ({
  useFormStatus: () => mockUseFormStatus(),
}))

describe('CounterButton', () => {
  beforeEach(() => {
    mockUseFormStatus.mockReturnValue({ pending: false })
  })

  afterEach(() => {
    mockUseFormStatus.mockReset()
  })

  it('renders with the provided value', () => {
    render(<CounterButton value={42} />)
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('is enabled when not pending', () => {
    render(<CounterButton value={42} />)
    expect(screen.getByRole('button')).not.toBeDisabled()
  })

  it('is disabled and shows animation when pending', () => {
    mockUseFormStatus.mockReturnValue({ pending: true })
    render(<CounterButton value={42} />)

    const button = screen.getByRole('button')
    const valueSpan = screen.getByText('42')

    expect(button).toBeDisabled()
    expect(valueSpan).toHaveClass('animate-pulse')
  })
})
