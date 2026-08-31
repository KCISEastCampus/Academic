# Code Review Report

**分支**: `feat/optimize-seo-fonts-images` → `main`
**审查日期**: 2026-08-31
**审查范围**: 全部待推送变更（15 commits, +1030/-492 lines, 35 files）
**语言/框架**: HTML, CSS, JavaScript, Jekyll (Liquid), GitHub Actions

---

## 任务清单

> 按优先级排列。🔴 为必须修复项，合并前完成。

---

### 🔴 T1 — 轮换 OAuth 凭据（安全阻断）

**文件**: `worker-code.js`（已删除，但凭据仍在 Git 历史中）

**问题**: 文件包含明文 GitHub OAuth Client ID 和 Secret。虽然文件已删除，凭据永久存在于 Git 历史。

```
GITHUB_CLIENT_ID  = "Ov23li8iRwGmP6JGnDUl"
GITHUB_CLIENT_SECRET = "60ddff0976cfb563b316fb1652358b115d8ead37"
```

**修复步骤**:
1. 前往 [GitHub Developer Settings](https://github.com/settings/developers) → 找到对应的 OAuth App
2. **Revoke and regenerate** Client Secret
3. 如果 Cloudflare Worker 仍在使用，将新凭据存入 Workers 的环境变量（Settings → Variables and Secrets）
4. （可选，需团队协调）使用 `git filter-repo` 或 BFG Repo Cleaner 从 Git 历史中清除该文件

**检查清单**:
- [ ] Client Secret 已轮换
- [ ] Cloudflare Worker 环境变量已更新（如适用）
- [ ] 旧凭据确认失效

---

### 🔴 T2 — 修复搜索结果 XSS 风险

**文件**: `assets/js/search.js:71-78`

**问题**: Pagefind 返回的 `excerpt` 直接通过 `innerHTML` 插入 DOM，未经过转义。

```javascript
// 当前代码（有风险）
snippet.innerHTML = result.excerpt;
```

**修复方案**（二选一）:

**方案 A — 使用 `textContent`（最安全，推荐）**:
```javascript
const snippet = document.createElement('small');
snippet.classList.add('text-muted', 'd-block');
snippet.textContent = result.excerpt ? result.excerpt.slice(0, 120) : '';
item.appendChild(snippet);
```

**方案 B — 如果需要保留 `<mark>` 高亮，使用 DOMPurify**:
```html
<!-- 在 head.html 中添加 -->
<script defer src="https://cdn.jsdelivr.net/npm/dompurify@3/dist/purify.min.js"></script>
```
```javascript
snippet.innerHTML = DOMPurify.sanitize(result.excerpt);
```

**检查清单**:
- [ ] `snippet.innerHTML` 已替换为安全写法
- [ ] 搜索功能仍然正常工作
- [ ] 搜索高亮显示正常（如选择方案 B）

---

### 🔴 T3 — 清理 nav.html 中的死代码

**文件**: `_includes/nav.html:75-80`

**问题**: 主题同步代码引用 `#theme_button`，但该元素已从所有 layout 中移除。整段代码永远不会执行。

```javascript
// 需要删除的代码
var mainBtn = document.getElementById('theme_button');
if (mainBtn) {
  var label = mainBtn.querySelector('.theme-label');
  if (label) label.textContent = newTheme === 'dark' ? 'Dark' : 'Light';
  mainBtn.setAttribute('aria-pressed', String(newTheme === 'dark'));
}
```

**修复**: 直接删除上述 6 行代码。

**检查清单**:
- [ ] `#theme_button` 相关同步代码已删除
- [ ] Nav 主题按钮切换功能正常
- [ ] 主题切换后页面各区域（代码块、卡片等）正确跟随

---

### 🟡 T4 — 解决 woff2 字体文件冗余

**文件**: `assets/fonts/MapleMono-NF-CN-*.woff2`（4 文件，~992 KB）、`.github/workflows/pages.yml`

**问题**: woff2 字体既在 CI 中生成，又被提交到 Git 仓库。二者选一即可。

**修复方案**（二选一）:

**方案 A — 仅依赖 CI 生成（推荐）**:
1. 将 woff2 加入 `.gitignore`:
   ```
   assets/fonts/*.woff2
   ```
2. 从 Git 中移除已跟踪的 woff2 文件:
   ```bash
   git rm --cached assets/fonts/MapleMono-NF-CN-*.woff2
   ```

**方案 B — 仅依赖仓库文件**:
1. 从 `pages.yml` 中删除 "Subset MapleMono fonts to woff2" 步骤（第 41-76 行）
2. 从 `pages.yml` 中删除 "Setup Python" 步骤（第 36-39 行）

**检查清单**:
- [ ] 选定方案已执行
- [ ] CI 构建成功
- [ ] 站点字体加载正常（woff2 优先，TTF fallback）

---

### 🟡 T5 — Footer 链接 hover 从内联 JS 迁移到 CSS

**文件**: `_includes/footer.html:7-11`

**问题**: 5 个 footer 链接使用 `onmouseover`/`onmouseout` 内联事件处理器，违反 CSP 最佳实践，与项目其他 CSS `:hover` 写法不一致。

**修复步骤**:

1. 在 `assets/css/style.css` 中添加:
```css
.footer-nav-link {
  color: var(--muted) !important;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.78rem;
  transition: color 0.15s ease;
}
.footer-nav-link:hover {
  color: var(--text) !important;
}
```

2. 替换 `footer.html` 中的链接（去掉内联 style 和事件处理器）:
```html
<a href="/" class="footer-nav-link">Home</a>
<a href="/alevel/" class="footer-nav-link">A-Level</a>
<a href="/igcse/" class="footer-nav-link">IGCSE</a>
<a href="/student-council/" class="footer-nav-link">Student Council</a>
<a href="/contributors/" class="footer-nav-link">Contributors</a>
```

**检查清单**:
- [ ] 内联事件处理器已移除
- [ ] Footer 链接 hover 效果正常
- [ ] 颜色在 light/dark 模式下均正确

---

### 🟡 T6 — 简化 `loadPagefind()` 冗余逻辑

**文件**: `assets/js/search.js:15-29`

**问题**: 第二个条件 `if (searchReady) return Promise.resolve(pagefind)` 永远不会在第一个条件未命中时触发。

**修复**:
```javascript
function loadPagefind() {
  if (pagefind) return Promise.resolve(pagefind);

  return import(/* webpackIgnore: true */ '/pagefind/pagefind.js')
    .then(mod => {
      pagefind = mod.default || mod;
      return pagefind;
    })
    .catch(err => {
      console.error('Pagefind failed to load:', err);
      return null;
    });
}
```

**检查清单**:
- [ ] 冗余条件和 `searchReady` 变量已移除
- [ ] 搜索功能正常（Pagefind 可用时）
- [ ] 搜索功能正常（Pagefind 不可用时 fallback）

---

### 🟢 T7 — Nav 移动端菜单添加 Escape 键关闭支持

**文件**: `_includes/nav.html`

**修复**: 在现有事件监听器区域添加:
```javascript
// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && links.classList.contains('show')) {
    links.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});
```

**检查清单**:
- [ ] 移动端菜单打开后按 Escape 可关闭
- [ ] 焦点正确返回到 toggle 按钮

---

### 🟢 T8 — CI 中复用 `extract_chars.mjs` 而非内联 Python

**文件**: `.github/workflows/pages.yml:41-76`

**问题**: CI 内联了一段 Python 字符提取脚本，与仓库中 `scripts/extract_chars.mjs` 逻辑重复，容易漂移。

**修复**: 在 font subsetting 步骤之前先安装 Node（将 Setup Node 步骤上移），然后:
```yaml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: '20'

- name: Extract character set
  run: node scripts/extract_chars.mjs

- name: Subset MapleMono fonts to woff2
  run: |
    pip install --quiet fonttools brotli
    for F in Regular Bold Italic BoldItalic; do
      pyftsubset "assets/fonts/MapleMono-NF-CN-${F}.ttf" \
        --text-file=scripts/chars_site.txt \
        --flavor=woff2 \
        --output-file="assets/fonts/MapleMono-NF-CN-${F}.woff2" \
        --layout-features=liga,calt,ccmp,kern \
        --no-hinting --name-IDs=0,1,2,3,4,5,6
    done
    rm -f scripts/chars_site.txt
```

**检查清单**:
- [ ] Python 内联脚本已移除
- [ ] CI 构建成功
- [ ] 生成的 woff2 字符集与之前一致

---

### 🟢 T9 — 移除 `.card:hover` 的 `!important`

**文件**: `assets/css/style.css`

**当前代码**:
```css
.card:hover,
.card:focus-within {
  box-shadow: 0 4px 16px rgba(10, 15, 35, 0.1) !important;
}
```

**修复**: 尝试通过提高特异性替代 `!important`:
```css
.container .card:hover,
.container .card:focus-within {
  box-shadow: 0 4px 16px rgba(10, 15, 35, 0.1);
}
```

> 如果仍无法覆盖 Bootstrap，保留 `!important` 也可接受。

**检查清单**:
- [ ] 卡片 hover 效果正常
- [ ] 不与其他组件的 box-shadow 冲突

---

## 快速参考

| 任务 | 优先级 | 涉及文件 | 预估时间 |
|---|---|---|---|
| T1 — OAuth 凭据轮换 | 🔴 阻断 | 外部操作 | 10 min |
| T2 — XSS 修复 | 🔴 阻断 | `search.js` | 5 min |
| T3 — 死代码清理 | 🔴 阻断 | `nav.html` | 2 min |
| T4 — 字体冗余 | 🟡 重要 | `.gitignore` / `pages.yml` | 5 min |
| T5 — Footer hover CSS 化 | 🟡 重要 | `footer.html` + `style.css` | 10 min |
| T6 — loadPagefind 简化 | 🟡 重要 | `search.js` | 3 min |
| T7 — Escape 键关闭菜单 | 🟢 可选 | `nav.html` | 3 min |
| T8 — CI 复用 extract_chars | 🟢 可选 | `pages.yml` | 5 min |
| T9 — 移除 !important | 🟢 可选 | `style.css` | 2 min |
