# lzl.dev

个人网站，使用 Next.js 构建。

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 测试

项目使用多层测试策略：

### 单元测试

使用 Vitest 和 React Testing Library 进行单元测试：

```bash
# 运行单元测试
pnpm test

# 监听模式
pnpm test:watch

# 生成覆盖率报告
pnpm test:coverage
```

### 端到端测试

使用 Playwright 进行端到端测试：

```bash
# 运行 E2E 测试
pnpm test:e2e

# 使用 UI 模式
pnpm test:e2e:ui

# 调试模式
pnpm test:e2e:debug
```

### 代码质量

```bash
# 运行 ESLint
pnpm lint

# 格式化代码
pnpm format

# 检查代码格式
pnpm format:check
```

## CI/CD

项目使用 GitHub Actions 进行持续集成和部署：

- 每次 PR 和推送到 main 分支时运行测试
- 测试通过后自动部署到 Vercel
- 自动生成并上传测试报告和覆盖率报告

### 环境变量

需要在 GitHub Secrets 中设置以下环境变量：

- `REDIS_API_URL`: Redis API 的 URL
- `REDIS_API_TOKEN`: Redis API 的访问令牌
- `VERCEL_TOKEN`: Vercel 部署令牌
- `VERCEL_ORG_ID`: Vercel 组织 ID
- `VERCEL_PROJECT_ID`: Vercel 项目 ID
