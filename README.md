# 杜均个人简介网站 - Cloudflare Pages 版本

这是一个为 Cloudflare Pages 优化的杜均个人简介网站，展示了他从草根到亿万富豪的传奇经历。

## 🚀 快速部署到 Cloudflare Pages

### 方法1：直接部署（推荐）

1. 访问 [Cloudflare Pages](https://pages.dev)
2. 点击 "Create a project"
3. 选择 "Upload assets"
4. 上传以下文件：
   - `_worker.js`
   - `wrangler.toml`

### 方法2：使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署项目
wrangler pages deploy .
```

### 方法3：GitHub 集成

1. Fork 这个仓库
2. 在 Cloudflare Pages 中选择 GitHub 集成
3. 选择你的仓库
4. 构建命令留空（使用 _worker.js）
5. 部署目录设置为根目录

## 📁 项目结构

```
├── _worker.js          # Cloudflare Worker 主文件
├── wrangler.toml       # Wrangler 配置文件
├── README.md          # 项目说明
└── .gitignore         # Git 忽略文件
```

## 🎯 功能特点

- **响应式设计**：完美适配手机、平板和桌面
- **高性能**：使用 Cloudflare 全球 CDN
- **SEO 优化**：完整的 meta 标签和结构化数据
- **社交分享**：Open Graph 和 Twitter Card 支持
- **动画效果**：流畅的滚动和悬停动画
- **无障碍访问**：语义化 HTML 和键盘导航支持

## 🎨 设计亮点

- 深色主题设计，突出专业形象
- 渐变色彩方案，体现科技感
- 卡片式布局，信息层次清晰
- 时间轴展示，突出成长历程
- 关键数据可视化展示

## 🔧 自定义配置

### 修改个人信息

在 `_worker.js` 中搜索并替换以下内容：

```javascript
// 修改个人信息
const personalInfo = {
  name: "杜均",
  title: "区块链传奇 · 火币创始人",
  subtitle: "新火科技CEO | ABCDE Capital合伙人",
  location: "新加坡",
  education: "NUS EMBA",
  profession: "Web3投资人"
};
```

### 修改图片

更换头像和背景图片：

```javascript
// 更换图片URL
const images = {
  avatar: "https://chainwhy.com/upload/default/20180711/98fab55de67f9358fdf15ef2f642eab6.jpg",
  background: "https://chainwhy.com/upload/default/20180711/98fab55de67f9358fdf15ef2f642eab6.jpg"
};
```

## 📊 性能优化

- **图片优化**：使用 WebP 格式和响应式图片
- **CSS 优化**：内联关键 CSS，减少请求
- **JS 优化**：最小化 JavaScript，延迟加载
- **缓存策略**：合理的缓存头设置
- **CDN 加速**：全球节点分发

## 🌐 访问地址

部署成功后，你的站点将在以下地址可用：

- 生产环境：`https://dujun-profile.pages.dev`
- 自定义域名：可绑定你自己的域名

## 📞 支持

如有问题，请通过以下方式联系：

- 提交 GitHub Issue
- 发送邮件至：[your-email@domain.com]

## 📄 许可证

MIT License - 可自由使用和修改