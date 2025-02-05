import { ReactElement } from 'react'
import { render } from '@testing-library/react'

export function renderServerComponent(component: ReactElement) {
  return render(
    <div suppressHydrationWarning>
      {component}
    </div>
  )
}

export function createFormData(data: Record<string, string> = {}) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })
  return formData
} 