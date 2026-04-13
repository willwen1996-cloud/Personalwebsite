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
- **瞎聊几句**：文章列表（标题、摘要、内容、发布时间、标签、来源）
- **个人履历**：工作经历列表（时间、职位、公司、描述）
- **教育背景**：教育经历列表（时间、学位、学校、描述）
- **生活 Vlog**：生活记录卡片（支持图片、视频、链接）
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

### 示例：修改生活 Vlog
```typescript
vlog: {
  title: "生活 Vlog",
  subtitle: "记录美好瞬间",
  items: [
    {
      type: "image",  // 类型：image（图片） | video（视频） | link（链接）
      title: "周末的咖啡时光",
      description: "在阳光明媚的午后，享受一杯手冲咖啡",
      media: "https://...",  // 图片/视频地址
      link: "",  // 如果是链接类型，填写链接地址
      rotation: -3  // 卡片倾斜角度（-10 到 10，创造俏皮感）
    }
  ]
}
```

### 生活 Vlog 说明
- **图片类型**：直接填写图片 URL 或本地路径（如 `/photo.jpg`）
- **视频类型**：填写视频 URL，会自动播放
- **链接类型**：填写自媒体博文链接，会显示链接预览
- **倾斜角度**：建议在 -5 到 5 之间，创造随意感
- **悬停效果**：鼠标悬停会放大卡片并显示标题描述

### 瞎聊几句（文章模块）说明
- **文章类型**：支持转载小红书、知乎等平台的长文章
- **文章结构**：
  - `id`: 文章唯一标识（用于路由）
  - `title`: 文章标题
  - `summary`: 文章摘要（首页卡片显示）
  - `content`: 文章正文（支持 Markdown 格式，**加粗**等）
  - `publishTime`: 发布时间
  - `tags`: 文章标签数组
  - `source`: 来源平台（如"知乎"、"小红书"）
  - `sourceLink`: 原文链接
- **页面路由**：
  - 首页展示前 4 篇文章卡片
  - 点击"查看更多"进入列表页（`/articles`）
  - 点击文章卡片进入详情页（`/articles/[id]`）
- **列表页展示**：标题、发布时间、主题标签三列
- **详情页展示**：完整文章内容、标签、来源链接

## 文章管理系统

### 系统架构
文章管理系统采用前后端分离架构，支持在线编辑、发布和管理文章内容。

### 技术实现
- **数据库**: Supabase (PostgreSQL)
- **API 接口**: Next.js API Routes
- **前端界面**: React + shadcn/ui
- **编辑器**: Markdown 编辑器，支持实时预览和自动排版

### 数据库表结构
```sql
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT,
  content TEXT,
  publish_time DATE,
  tags TEXT[],
  source TEXT,
  source_link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### API 接口
- **后台管理接口** (`/api/admin/articles`)
  - `GET /api/admin/articles` - 获取文章列表（支持分页）
  - `POST /api/admin/articles` - 创建新文章
  - `GET /api/admin/articles/[id]` - 获取单篇文章
  - `PUT /api/admin/articles/[id]` - 更新文章
  - `DELETE /api/admin/articles/[id]` - 删除文章

- **前台展示接口** (`/api/articles`)
  - `GET /api/articles` - 获取文章列表（支持分页）
  - `GET /api/articles/[id]` - 获取单篇文章详情

### 后台管理页面
- **文章列表**: `/admin/articles` - 查看所有文章，支持新建、编辑、删除
- **新建文章**: `/admin/articles/new` - Markdown 编辑器，支持实时预览和自动排版
- **编辑文章**: `/admin/articles/[id]` - 编辑已有文章

### 自动排版功能
编辑器内置自动排版功能，可一键优化 Markdown 格式：
- 统一换行符（CRLF → LF）
- 优化段落间距（避免过多或过少的空行）
- 标题前后自动添加空行
- 列表项自动格式化
- 代码块自动格式化

### 使用说明
1. 访问 `/admin/articles` 进入后台管理
2. 点击"新建文章"创建新文章
3. 填写标题、摘要、内容等信息
4. 使用"自动排版"按钮优化格式
5. 点击"预览"查看效果
6. 点击"保存"发布文章

## 环境变量说明

项目运行在云端沙箱环境，以下环境变量已预置：
- `COZE_WORKSPACE_PATH`：项目工作目录（默认 `/workspace/projects/`）
- `COZE_PROJECT_DOMAIN_DEFAULT`：对外访问域名
- `DEPLOY_RUN_PORT`：服务监听端口（5000）
- `COZE_PROJECT_ENV`：环境标识（DEV/PROD）
- `SUPABASE_URL`：Supabase 项目地址
- `SUPABASE_ANON_KEY`：Supabase 公开密钥


