import { render } from '@testing-library/react'
import type { ReactElement } from 'react'

export function renderServerComponent(component: ReactElement) {
  return render(<div suppressHydrationWarning>{component}</div>)
}

export function createFormData(data: Record<string, string> = {}) {
  const formData = new FormData()
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value)
  }
  return formData
}
