# 执行计划 - Testing & TDD

本文档详细描述了为本项目引入测试体系并采用 TDD 开发方法的执行计划，目标读者为后续接手该项目的 LLM 或开发者。

---

## 1. 目标

- **建立全面的测试体系**：覆盖单元测试、集成测试和端到端（E2E）测试，确保项目的前后端组件均能得到充分的测试验证。
- **采用 TDD（测试驱动开发）流程**：从编写测试用例开始，让开发过程始终由测试反馈驱动，提升代码质量和降低回归风险。

---

## 2. 测试工具选择

- **Vitest**：作为主要测试运行器，具备快速执行、原生 ESM 支持以及与 Vite 良好的集成。（可以替换 Jest 来加快反馈速度）
- **React Testing Library**：针对 React 组件的交互式测试框架，能模拟用户行为、检查 UI 状态。
- **MSW (Mock Service Worker)**：用于在集成测试中模拟 API 请求，确保外部数据请求不会干扰本地测试。
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
   - 创建或更新 `vitest.config.ts` 配置文件，设置好项目中需要测试的文件路径、全局设置及与 TypeScript 的兼容性配置。

3. **文件和目录结构规划**
   - 在项目根目录添加 `/tests` 目录，内部分别建立：
     - `/tests/unit` 用于单元测试
     - `/tests/integration` 用于集成测试
     - `/tests/e2e` 用于端到端测试

4. **配置 MSW**
   - 在 `/tests` 目录下建立 `setupTests.ts` 文件，用于启动 MSW 服务并拦截相关 API 请求。
   - 在 Vitest 配置或 Jest 全局环境中引入 `setupTests.ts`。

### 3.2 编写单元测试

- **测试内容**
  - 针对独立 React 组件，如 `app/counter-button.tsx`。
  - 检查按钮在不同状态下的展示：例如是否显示 `animate-pulse`，按钮是否正确禁用等。
  
- **TDD 步骤**
  1. 编写失败的测试用例（红灯阶段）
  2. 实现代码满足测试（绿灯阶段）
  3. 重构代码，保证测试通过（重构阶段）

- **示例**
  - 在 `/tests/unit/counter-button.test.tsx` 中编写测试代码，模拟 pending 状态下按钮变化的逻辑。

### 3.3 编写集成测试

- **测试内容**
  - 针对包含 API 调用的服务端组件，如 `app/counter.tsx` 中的 `getCounter` 函数。
  - 利用 MSW 模拟 API 响应，验证数据获取函数是否正确解析结果，组件渲染是否正确反映 API 返回数据。

- **TDD 步骤**
  1. 根据需求编写测试，验证数据请求和错误处理分支
  2. 编写或调整代码以满足测试用例要求
  3. 稳定测试后重构，保持所有测试通过

### 3.4 编写端到端（E2E）测试

- **测试内容**
  - 使用 Playwright 自动化测试整条用户流程，例如：页面加载、点击计数器按钮、数据变更以及动态展示效果。
  
- **执行步骤**
  1. 编写用于启动本地开发服务器的 Playwright 测试脚本。
  2. 使用 Page 模型定位页面元素，模拟用户行为与断言预期页面状态。
  3. 集成到 CI 流水线，确保每次更新都运行 E2E 测试。

### 3.5 持续集成（CI）

- **配置 CI**
  - 在 GitHub Actions 或其他 CI 工具中添加测试运行脚本，确保在代码提交与 PR 时自动运行单元、集成和 E2E 测试。
  - 设置测试覆盖率报告，目标是跟踪各个模块的测试覆盖率情况。

---

## 4. TDD 开发流程步骤

1. **编写测试**
   - 根据业务需求或者 bug 修复场景编写新的测试用例，先确保测试用例在当前代码下是失败的（红灯）。

2. **实现业务逻辑**
   - 编写或修改代码使测试用例通过，保持测试反馈驱动整个开发流程（绿灯）。

3. **重构和优化**
   - 在保持所有测试通过的情况下，对代码进行重构和优化，确保代码更加清晰、可维护。

4. **提交与回顾**
   - 每次代码提交前确保所有测试通过，与团队讨论微调测试覆盖范围与 TDD 流程改进。

---

## 5. 里程碑与时间规划

- **第 1 阶段：设置测试环境**（1-2 天）
  - 安装和配置 Vitest、React Testing Library、MSW、Playwright
  - 建立测试目录结构和基础配置

- **第 2 阶段：覆盖关键组件的单元和集成测试**（3-5 天）
  - 为 Counter Button、Counter 组件编写初步测试用例
  - 确保 API 模拟与组件交互正确运行

- **第 3 阶段：端到端测试集成**（2-3 天）
  - 编写 Playwright 测试脚本，覆盖关键用户路径和交互逻辑

- **第 4 阶段：CI/CD 集成**（1-2 天）
  - 配置 CI 流程，确保每次 push 与 PR 产生的更改都能自动运行全量测试
  - 添加测试覆盖率分析工具

- **第 5 阶段：持续改进与 TDD 规范落地**（持续）
  - 每轮开发迭代均从测试开始，保持 TDD 思想贯穿项目生命周期
  - 定期回顾并优化测试用例和 TDD 流程

---

## 6. 最终目标

- **高覆盖率测试**：确保主要功能点、边界情况及错误处理均有充分的测试支撑。
- **快速反馈机制**：利用 Vitest 和 Playwright 实现快速反馈，支持高效 TDD 开发方式。
- **持续集成**：所有测试集成到 CI 管道，确保代码稳定性和及时回归检测，有效降低缺陷率。

---

## 7. 附录

- **参考文档**
  - [Vitest 官方文档](https://vitest.dev/)
  - [React Testing Library 官方文档](https://testing-library.com/docs/react-testing-library/intro/)
  - [MSW 官方文档](https://mswjs.io/)
  - [Playwright 官方文档](https://playwright.dev/)
  - [TDD 开发流程介绍](https://agiledata.org/essays/tdd.html)

---

此文档为测试策略和 TDD 开发流程的指南，请开发者和后续维护者参考，并在实践过程中根据项目实际情况进行必要的调整与扩展。 