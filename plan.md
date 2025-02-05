# 执行计划 - Testing & TDD

本文档详细描述了为本项目引入测试体系并采用 TDD 开发方法的执行计划，目标读者为后续接手该项目的 LLM 或开发者。

---

## 1. 目标

- **建立全面的测试体系**：覆盖单元测试、集成测试和端到端（E2E）测试，确保项目的前后端组件均能得到充分的测试验证。
- **采用 TDD（测试驱动开发）流程**：从编写测试用例开始，让开发过程始终由测试反馈驱动，提升代码质量和降低回归风险。

---

## 2. 测试工具选择

- **Vitest**：作为主要测试运行器，具备快速执行、原生 ESM 支持以及与 Vite 良好的集成。（可替换 Jest 来加快反馈速度）
- **React Testing Library**：针对 React 组件的交互式测试框架，能模拟用户行为、检查 UI 状态。
- **MSW (Mock Service Worker)**：用于在集成测试中模拟 API 请求，确保外部数据请求不会干扰本地测试。用于模拟 fetch 调用、环境变量依赖的接口（如 Next.js 服务端 Action 和缓存方法）。
- **Playwright**：实现端到端测试，验证用户从 UI 到后端完整的交互场景。

---

## 3. 执行步骤

### 3.1 设置测试环境

1. **安装必要依赖**
   - 安装 Vitest、React Testing Library 及相关依赖：
     ```bash
     npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
     ```
   - 安装 MSW 以模拟 API 请求：
     ```bash
     npm install --save-dev msw
     ```
   - 安装 Playwright 用于端到端测试：
     ```bash
     npm install --save-dev @playwright/test
     ```
   
2. **配置 Vitest**
   - 创建或更新 `vitest.config.ts` 配置文件，设置项目中需要测试的文件路径、全局设置及与 TypeScript 的兼容性配置，并确保引入 MSW 的全局 setup 文件（例如 `setupTests.ts`）。

3. **文件和目录结构规划**
   - 在项目根目录创建 `/tests` 目录，内部分别建立：
     - `/tests/unit` 用于单元测试
     - `/tests/integration` 用于集成测试
     - `/tests/e2e` 用于端到端测试

4. **配置 MSW**
   - 在 `/tests` 目录下建立 `setupTests.ts` 文件，用于启动 MSW 服务并拦截相关 API 请求。
   - 在 Vitest 配置或全局环境中引入 `setupTests.ts`。

### 3.2 编写单元测试

- **测试内容**
  - 针对独立 React 组件，例如 `app/counter-button.tsx`（注意验证组件在不同状态下的展示：如 pending 状态时是否显示 `animate-pulse`，按钮是否正确禁用等）。
  
- **TDD 步骤**
  1. 编写失败的测试用例（红灯阶段）。
  2. 编写或修改代码使测试通过（绿灯阶段）。
  3. 重构代码，保持测试通过（重构阶段）。

- **示例**
  - 在 `/tests/unit/counter-button.test.tsx` 中编写测试代码，模拟 pending 状态下按钮的变化逻辑。

### 3.3 编写集成测试

- **测试内容**
  - 针对包含 API 调用的服务端组件，例如 `app/counter.tsx` 中的 `getCounter` 函数以及相关的缓存、Server Actions（如 `incrCounter`）逻辑。
  - 利用 MSW 模拟 API 响应，验证数据是否正确解析，组件渲染是否正确反映 API 返回数据，以及缓存失效和重新请求功能的正确性。
  - 对 Next.js 特有的服务器组件、服务端 Action 和缓存行为进行测试，确保能正确处理环境变量依赖（如 `process.env.REDIS_API_URL` 和 `process.env.REDIS_API_TOKEN`）。

- **TDD 步骤**
  1. 根据需求编写测试，包括成功、错误及边界情况的不同分支（红灯阶段）。
  2. 编写或调整代码以满足测试用例要求（绿灯阶段）。
  3. 在所有测试通过后重构代码，确保整体代码结构和可维护性（重构阶段）。

### 3.4 编写端到端（E2E）测试

- **测试内容**
  - 使用 Playwright 自动化测试整体用户流程，例如：页面加载、点击计数器按钮、响应后的数据变更以及动态展示效果（包括 Suspense 边界的验证）。
  
- **执行步骤**
  1. 编写用于启动本地开发服务器的 Playwright 测试脚本。
  2. 使用 Page 模型定位页面元素，模拟用户行为，并断言预期页面状态。
  3. 集成到 CI 流水线，确保每次更新都运行端到端测试。

### 3.5 持续集成（CI）

- **配置 CI**
  - 在 GitHub Actions 或其它 CI 工具中添加测试运行脚本，确保在代码提交与 PR 时自动运行单元、集成及 E2E 测试。
  - 配置测试覆盖率报告，跟踪并逐步提升各模块的测试覆盖率。

---

## 4. TDD 开发流程步骤

1. **编写测试**
   - 根据业务需求或 Bug 修复场景，先编写新的测试用例，确保测试在当前代码下失败（红灯阶段）。

2. **实现业务逻辑**
   - 根据失败的测试编写或修改代码，使测试通过（绿灯阶段）。

3. **重构和优化**
   - 在确保所有测试均通过的前提下，对代码进行重构和优化，确保代码结构清晰、易于维护。

4. **提交与回顾**
   - 每次代码提交前，确保所有测试通过；定期与团队讨论并微调测试覆盖范围和 TDD 流程。

---

## 5. 里程碑与时间规划

- **第 1 阶段：设置测试环境**（1-2 天）
  - 安装并配置 Vitest、React Testing Library、MSW、Playwright。
  - 建立测试目录结构和基础配置。

- **第 2 阶段：覆盖关键组件的单元与集成测试**（3-5 天）
  - 为 Counter Button、Counter 组件分别编写初步单元测试和集成测试。
  - 确保 API 模拟、缓存失效及服务端 Action 的交互正确运行。

- **第 3 阶段：端到端测试集成**（2-3 天）
  - 编写 Playwright 测试脚本，覆盖关键用户路径和交互逻辑。

- **第 4 阶段：CI/CD 集成**（1-2 天）
  - 配置 CI 流程，确保每次 push 与 PR 变更自动运行全量测试。
  - 添加并配置测试覆盖率分析工具。

- **第 5 阶段：持续改进与 TDD 规范落地**（持续进行）
  - 每轮迭代均从测试开始，贯彻 TDD 思想贯穿项目生命周期。
  - 定期回顾并优化测试用例和 TDD 流程。

---

## 6. 最终目标

- **高覆盖率测试**：确保所有主要功能点、边界情况及错误处理逻辑均有充分测试支撑。
- **快速反馈机制**：利用 Vitest 和 Playwright 实现快速、实时的测试反馈，支持高效 TDD 开发方式。
- **持续集成**：将所有测试集成到 CI 管道中，确保代码变更后能及时进行回归测试，降低缺陷风险。

---

## 7. 附录

- **参考文档**
  - [Vitest 官方文档](https://vitest.dev/)
  - [React Testing Library 官方文档](https://testing-library.com/docs/react-testing-library/intro/)
  - [MSW 官方文档](https://mswjs.io/)
  - [Playwright 官方文档](https://playwright.dev/)
  - [TDD 开发流程介绍](https://agiledata.org/essays/tdd.html)

---

此文档为测试策略及 TDD 开发流程的详细指南，请开发者和后续维护者参考，并在实践过程中根据项目实际情况进行必要的调整与扩展。 