import { test, expect } from '@playwright/test'

test.describe('Counter', () => {
  test('should display initial counter value', async ({ page }) => {
    await page.goto('/')
    const counterValue = await page.textContent('form button span')
    expect(counterValue).toBeTruthy()
    expect(Number(counterValue)).toBeGreaterThanOrEqual(0)
  })

  test('should increment counter when clicked', async ({ page }) => {
    await page.goto('/')

    // 获取初始值
    const initialValue = await page.textContent('form button span')
    expect(initialValue).toBeTruthy()
    const initialNumber = Number(initialValue)

    // 点击按钮
    const button = page.locator('form button')
    await button.click()

    // 等待按钮禁用状态（加载状态）
    await expect(button).toBeDisabled()

    // 等待新值出现
    await expect(async () => {
      const newValue = await page.textContent('form button span')
      const newNumber = Number(newValue)
      expect(newNumber).toBeGreaterThan(initialNumber)
    }).toPass()
  })

  test('should show loading state while incrementing', async ({ page }) => {
    await page.goto('/')

    // 点击按钮
    const button = page.locator('form button')
    await button.click()

    // 验证加载状态
    await expect(button).toBeDisabled()
    const span = page.locator('form button span')
    await expect(span).toHaveClass(/animate-pulse/)

    // 等待加载状态结束
    await expect(button).not.toBeDisabled({ timeout: 10000 })
    await expect(span).not.toHaveClass(/animate-pulse/)
  })

  test('should persist counter value after page reload', async ({ page }) => {
    await page.goto('/')

    // 获取初始值
    const initialValue = await page.textContent('form button span')
    expect(initialValue).toBeTruthy()
    const initialNumber = Number(initialValue)

    // 点击按钮
    const button = page.locator('form button')
    await button.click()

    // 等待新值出现
    await expect(async () => {
      const newValue = await page.textContent('form button span')
      const newNumber = Number(newValue)
      expect(newNumber).toBeGreaterThan(initialNumber)
    }).toPass()

    // 等待一段时间确保值已经被持久化
    await page.waitForTimeout(1000)

    // 记住增加后的值
    const valueBeforeReload = await page.textContent('form button span')
    const numberBeforeReload = Number(valueBeforeReload)

    // 刷新页面
    await page.reload()

    // 验证值没有减少
    const valueAfterReload = await page.textContent('form button span')
    const numberAfterReload = Number(valueAfterReload)
    expect(numberAfterReload).toBeGreaterThanOrEqual(numberBeforeReload)
  })
})
