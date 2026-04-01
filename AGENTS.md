# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   ├── components/ui/      # Shadcn UI 组件库
│   ├── config/             # 配置文件目录
│   │   └── site.config.ts  # ⭐ 网站内容配置文件（所有可修改内容）
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

- 项目文件（如 app 目录、pages 目录、components 等）默认初始化到 `src/` 目录下。

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

- **项目理解加速**：初始可以依赖项目下`package.json`文件理解项目类型，如果没有或无法理解退化成阅读其他文件。
- **Hydration 错误预防**：严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。


## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**

## 网站内容配置说明

### 配置文件位置
所有网站的可修改内容都集中在 `src/config/site.config.ts` 文件中。

### 如何修改内容
1. **打开配置文件**：找到 `src/config/site.config.ts`
2. **修改对应字段**：根据注释找到需要修改的部分
3. **保存文件**：修改后保存，网站会自动热更新（开发环境）

### 主要配置项
- **基础信息**：姓名、标题、描述
- **首屏 Hero**：欢迎语、个人介绍、数据统计、个人照片
- **关于我**：个人简介、专业技能、兴趣爱好
- **个人履历**：工作经历列表（时间、职位、公司、描述）
- **教育背景**：教育经历列表（时间、学位、学校、描述）
- **联系方式**：邮箱、社交媒体链接
- **页脚**：版权信息、个人格言

### 图片修改
在 `hero.profileImage` 字段中修改图片地址：
- **使用在线图片**：直接填写图片 URL
- **使用本地图片**：将图片放到 `public/` 目录，然后填写 `/文件名.jpg`

### 示例：修改个人信息
```typescript
hero: {
  name: "我是你的名字",
  introduction: "你的个人介绍...",
  profileImage: "你的图片地址"
}
```

## 环境变量说明

项目运行在云端沙箱环境，以下环境变量已预置：
- `COZE_WORKSPACE_PATH`：项目工作目录（默认 `/workspace/projects/`）
- `COZE_PROJECT_DOMAIN_DEFAULT`：对外访问域名
- `DEPLOY_RUN_PORT`：服务监听端口（5000）
- `COZE_PROJECT_ENV`：环境标识（DEV/PROD）


