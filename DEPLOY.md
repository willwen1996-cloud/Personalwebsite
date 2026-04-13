# Vercel 部署指南

## 🎯 部署目标
将个人网站部署到 Vercel，并绑定自定义域名 `coconutchick.top`

---

## 📋 前置准备

### 1. 注册 GitHub 账号
- 访问：https://github.com
- 点击 "Sign up" 注册
- 填写用户名、邮箱、密码
- 验证邮箱

### 2. 注册 Vercel 账号
- 访问：https://vercel.com
- 点击 "Sign Up"
- 选择 "Continue with GitHub"（用 GitHub 登录）
- 授权 Vercel 访问你的 GitHub

---

## 🚀 部署步骤

### 步骤一：推送代码到 GitHub

#### 方式 A：我帮你推送（推荐）
如果你提供 GitHub 账号，我可以帮你创建仓库并推送代码。

#### 方式 B：你自己推送
```bash
# 1. 初始化 Git（如果还没有）
cd /workspace/projects
git init

# 2. 添加远程仓库
git remote add origin https://github.com/你的用户名/your-portfolio.git

# 3. 推送代码
git add .
git commit -m "Initial commit: 个人网站"
git push -u origin main
```

---

### 步骤二：在 Vercel 导入项目

1. **登录 Vercel**
   - 访问 https://vercel.com
   - 用 GitHub 账号登录

2. **导入 GitHub 仓库**
   - 点击 "Add New" → "Project"
   - 选择你的 GitHub 账号
   - 找到你的仓库（your-portfolio）
   - 点击 "Import"

3. **配置项目**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`
   - Build Command: `pnpm run build`（自动检测）
   - Output Directory: `.next`（自动检测）
   - Install Command: `pnpm install`（自动检测）

4. **点击 Deploy**
   - 等待 2-3 分钟构建
   - 看到庆祝动画表示部署成功！

5. **获取临时域名**
   - Vercel 会自动分配一个域名：`your-portfolio.vercel.app`
   - 点击域名可以访问你的网站

---

### 步骤三：绑定自定义域名

1. **进入项目设置**
   - 在 Vercel 项目页面点击 "Settings"
   - 左侧菜单选择 "Domains"

2. **添加自定义域名**
   - 输入：`coconutchick.top`
   - 点击 "Add"

3. **添加 www 域名（可选）**
   - 输入：`www.coconutchick.top`
   - 点击 "Add"

4. **配置 DNS 解析**
   
   在你的域名服务商（阿里云/腾讯云/GoDaddy 等）配置 DNS：
   
   **方式 A：A 记录（推荐）**
   ```
   类型: A
   主机记录: @
   记录值: 76.76.21.21
   TTL: 600
   ```
   
   **方式 B：CNAME 记录**
   ```
   类型: CNAME
   主机记录: www
   记录值: cname.vercel-dns.com
   TTL: 600
   ```

5. **等待 DNS 生效**
   - 通常 5-10 分钟生效
   - 最长可能需要 24 小时

6. **验证域名绑定**
   - Vercel 会显示 ✅ 表示验证成功
   - 自动配置 HTTPS 证书

---

## ✅ 部署完成

部署完成后，你的网站地址：
- 主域名：https://coconutchick.top
- www 域名：https://www.coconutchick.top
- Vercel 域名：https://your-portfolio.vercel.app

---

## 🔄 后续更新

### 自动部署
每次推送代码到 GitHub，Vercel 会自动重新部署：
```bash
cd /workspace/projects
git add .
git commit -m "更新内容"
git push
```

### 手动部署
在 Vercel 项目页面点击 "Redeploy" 按钮

---

## 🛠️ 常见问题

### 1. 域名 DNS 配置后无法访问？
- 等待 10-30 分钟
- 使用 `nslookup coconutchick.top` 检查 DNS 是否生效
- 清除浏览器缓存

### 2. 构建失败？
- 检查 Vercel 的构建日志
- 确保代码没有语法错误
- 运行 `pnpm run build` 本地测试

### 3. 图片无法加载？
- 确保图片 URL 可访问
- 检查 next.config.ts 的 images 配置

### 4. 想要修改内容？
- 修改 `/workspace/projects/src/config/site.config.ts`
- 推送到 GitHub
- Vercel 自动部署

---

## 📞 需要帮助？

如果你在部署过程中遇到问题，可以：
1. 告诉我具体的错误信息
2. 我会帮你排查和解决

---

## 🎉 下一步

部署成功后，你可以：
1. 在配置文件中修改个人信息
2. 上传自己的照片
3. 更新履历和教育背景
4. 分享你的个人网站链接
