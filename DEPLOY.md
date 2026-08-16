# 张晓芬老师网站 · 部署与更新工作流

纯静态 HTML 站点，零构建。域名：**xiaofen.pro**
GitHub 账号：**icyzhang666** ｜ 仓库建议名：**zxf-site**

---

## 一、内容更新的标准工作流（重要）

> 所有网页内容调整，**先落在云端资产文件夹，再从资产推送到 GitHub**。

1. **改内容**：在云端项目网盘「网站 / 最新版」对应目录里更新文件（根 / blog / faq / legal / assets）。
   - 网盘不支持原地覆盖，同名会产生 `(1)` 副本；因此统一在「最新版」子目录维护**文件名一致的最新全集**。
2. **同步到本地 git 源**：把「最新版」全集拉回本地 `zxf-site/` 目录（保证文件名一致、内容最新）。
3. **提交并推送**：
   ```bash
   cd zxf-site
   git add -A
   git commit -m "更新：<本次改动简述>"
   git push origin master
   ```
4. **Vercel 自动部署**：仓库推送后，Vercel 自动拉取并发布（纯静态，无需构建）。
5. **绑定域名**：在 Vercel 项目 Settings → Domains 添加 `xiaofen.pro`，并按提示在域名商处配置 DNS（见下文）。

---

## 二、首次打通 GitHub（拿到令牌后执行）

```bash
# 1. 配置令牌（icyzhang666 账号，需 repo 权限的 PAT）
export GITHUB_TOKEN=<你的 Personal Access Token>

# 2. 在 GitHub 创建仓库 zxf-site（空仓库，不要勾 README）
#    https://github.com/new  →  Owner: icyzhang666  →  Repository name: zxf-site

# 3. 本地仓库关联远程并推送
cd zxf-site
git remote add origin https://oauth2:${GITHUB_TOKEN}@github.com/icyzhang666/zxf-site.git
git branch -M master
git push -u origin master
```

---

## 三、Vercel 部署（GitHub 推送后）

- 方式 A（推荐）：Vercel 控制台 **Import Git Repository** → 选 `icyzhang666/zxf-site` → Framework 选 **Other** → Deploy。
- 方式 B（CLI）：`vercel --prod`（需 Vercel 账号关联同一 GitHub）。
- 本仓库已带 `vercel.json`（outputDirectory 为根目录，零构建）。

### 绑定域名 xiaofen.pro
Vercel 项目 → **Settings → Domains** → 输入 `xiaofen.pro` → 按提示在域名商 DNS 添加：
- **A 记录** 指向 `76.76.21.21`（Vercel 生产 IP）
- 或 **CNAME** 指向 `cname.vercel-dns.com`

---

## 四、目录结构

```
zxf-site/
├── index.html              首页
├── about.html              关于张老师
├── services.html           服务/业务
├── search.html             站内搜索
├── styles.css              全站样式（苹果设计美学）
├── robots.txt
├── sitemap.xml
├── search-index.json       站内搜索索引
├── assets/
│   ├── nav.js              导航注入
│   └── search.js           搜索逻辑
├── blog/                   文章（出海股权 / 股权激励税务 / 全球架构税务）
├── faq/                    常见问题
├── legal/                  免责声明 / 知识产权 / 隐私政策
├── vercel.json             部署配置
└── DEPLOY.md               本文件
```
