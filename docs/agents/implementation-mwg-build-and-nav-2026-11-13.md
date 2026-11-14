# 新构建验证与移动导航键盘修复

日期：2026-11-13。基线提交：`cdf8b70f231af4e8726648c5135679742e43febb`。本轮完成本地依赖安装、全新 Jekyll 构建、生成页浏览器验证及移动导航 Tab 顺序修复；未推送或发布。本记录补充[前两项实施记录](implementation-mwg-first-two-2026-11-13.md)当时尚未完成的构建与生成页验证，不改写其历史结果。

## 改动

- [共享导航](../../_includes/nav.html#L77)：在不超过 1024 CSS px 时，将链接组移动到包含菜单按钮的操作组之后，让展开后的自然 Tab 顺序进入导航；桌面恢复链接组在前的顺序。语言和主题偏好控件在桌面回到原插入位置。
- 跨断点重排后恢复仍然可见的原控件焦点；菜单收起时进入手机宽度，焦点转到菜单按钮；菜单按钮在桌面隐藏时，焦点转到首个导航链接。保留既有 Escape、外部点击、链接关闭及目录互斥行为。
- [导航回归](../../scripts/test-nav-keyboard.js)：运行实际导航脚本，覆盖初始手机/桌面、有/无目录、正反向焦点顺序、偏好控件、断点恢复、关闭行为和重复切换。VM 只验证机制，真实 Tab 另见下文。
- [考试映射检查](../../scripts/test-exam-topic-integration.js)、[语言检查](../../scripts/test-site-language.js)、[前端 UX 检查](../../scripts/test-frontend-ux.js)新增可选 `--site-dir=...`，默认行为保持不变。用于直接检查本次独立输出目录，避免把旧构建当作当前页面。

本实现参考 [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) 的 `accessibility` §5：**“Provide a logical tab order”**。使用普通站点导航和浏览器自然 Tab 顺序；未添加正 tabindex 或应用菜单键盘模型。Material 焦点原则来源：[Hierarchy and focus](https://m1.material.io/usability/accessibility.html#accessibility-hierarchy-focus) 的 **“Input focus should follow the order of the visual layout”**。这是已读取的 Material 1 历史规范，不冒称 Material 3 验收。

## 构建与自动检查

Windows、Ruby 3.4.4、Bundler 2.6.7、Jekyll 4.3.4，使用仓库现有锁文件，设置 `BUNDLE_FROZEN=true` 后执行 `bundle install --jobs 4 --retry 1`；42 个 gem、11 项直接依赖安装完成，`bundle check` 通过。Gemfile 与锁文件没有改动。

构建命令与复验方式（从仓库根目录执行；输出在仓库外）：

```powershell
$env:BUNDLE_FROZEN='true'
bundle exec jekyll build --destination D:/LearningResources/audit-modern-web-guidance-20261113/site-current --trace
node scripts/test-exam-topic-integration.js --site-dir=D:/LearningResources/audit-modern-web-guidance-20261113/site-current
node scripts/test-site-language.js --site-dir=D:/LearningResources/audit-modern-web-guidance-20261113/site-current
node scripts/test-frontend-ux.js --site-dir=D:/LearningResources/audit-modern-web-guidance-20261113/site-current
node scripts/test-nav-keyboard.js
```

首次构建耗时 47.472 秒；导航修复后再次构建耗时 35.349 秒，均成功。生成目录由本地静态服务器提供给 Chrome，未使用旧 `_site` 作为本轮生成页验证证据。

- 考试映射完整检查：128 个映射、254 个双语课程页、25 个多章节条目；254 个生成页、四门试点课程链接、3,582 个真实 Ruby Liquid 组合样例全部通过。
- 语言检查：243 对生成页面，文档语言、语言目的页与偏好行为通过。
- 前端 UX：共享搜索、所选页面的 landmark/skip link、课程发现、双语卡片名称/目的地、回退语言、链接对比度通过。该检查是已有抽样断言，不覆盖此前报告的所有次级布局问题。
- 14 项回归通过：`test-nav-keyboard`、`test-accessibility`、`test-frontend-ux`、`test-site-language`、`test-toc-refresh`、`test-mathjax-fallback`、`test-anchor-navigation`、`test-image-modal`、`test-reading-progress`、`test-search-interaction`、`test-search-language`、`test-theme-init`、`test-back-to-top`、`test-tmua-math`。其中语言与 UX 的生成页检查另用上述 `--site-dir` 命令复验通过。
- `git diff --check` 通过。Git 提示考试映射检查脚本在将来检出时会按现有仓库设置转换 LF/CRLF，不是测试失败。

## 真实生成页检查

Chrome 157.0.8103.52，加载本次 Jekyll 输出；不是前一轮的最小机制夹具。原 DevTools MCP 在截图/后续调用中超时，因此移动导航的最终验收使用独立 Chrome 的 CDP 输入事件；未禁用浏览器沙箱，也未修改浏览器 ACL。

| 页面与条件 | 观察结果 |
| --- | --- |
| `/alevel/a2-mathematics/numerical-methods/`，1280px | 436 个 MathJax 容器、0 个 `mjx-merror`、无加载失败提示；目录点击只发生一次 smooth 滚动、一次 replaceState，未增加历史条目，标题获得焦点 |
| 同页，390px，reduced motion，实际 Enter 激活目录 | 一次 instant 滚动、一次 replaceState；焦点进入目标标题；目录关闭、body 滚动锁释放 |
| `/zh/alevel/as-chemistry/amount-and-equations/` | `lang=zh-CN`；64 个 MathJax 容器、0 个 `mjx-merror`、无失败提示；原始表达式中有 10 个含 `\ce` 的化学表达式，包含水的化学方程式 |
| 数值方法页，390px，实际键盘展开菜单 | Enter 展开后，Tab 依次进入七个导航链接、语言选择、主题按钮；Shift+Tab 可完整逆行回菜单按钮；Escape 关闭并回到按钮 |
| 同页，1024px | Enter 展开后，Tab 进入首个导航链接 |
| 同页，跨 1024/1025px 断点 | 可见偏好控件保持焦点；收起菜单进入手机宽度时移到按钮；返回桌面时从隐藏按钮移到首个链接；桌面恢复原 DOM 顺序 |
| `/zh/`，390px，无目录按钮 | 文档为中文，Enter 展开后 Tab 到“首页”，Escape 关闭并回到按钮；页面无横向溢出 |

生成页检查确认了本地 MathJax 正常加载与排版；没有通过拦截实际生成页的网络来重演 CDN 失败。失败重试与本地化提示的受控浏览器证据仍以[前一轮记录](implementation-mwg-first-two-2026-11-13.md)为准。

## 未解决问题与边界

英文数值方法页在本次抽样的 **1025px、1037px** 桌面宽度上，文档 `scrollWidth=1124`，溢出来自导航操作组/偏好控件。该现象在本轮导航修复前的生成页检查也已出现；本次修复 Tab 顺序后仍存在，应作为单独的响应式导航布局问题处理，不能将断点焦点测试通过解读为该宽度的视觉布局通过。

同页 390px、768px、1024px 文档无横向溢出；1280px 下文档宽度为 1265px（含纵向滚动条占位）。部分 MathJax 内部内容的矩形超出视口，但由局部滚动容器限制，没有造成这些宽度的整页溢出。

本轮没有完成 Firefox/Safari、实际读屏播报、真实移动设备、Core Web Vitals 或学生学习效果验收。保留此前审查中表格键盘访问、触控尺寸、字体偏好等后续事项；没有修改课程内容。

浏览器截图、CDP 辅助脚本和原始 JSON 留在本机临时审查目录，不是仓库测试依赖；本记录给出页面、尺寸、操作与观察值，便于独立复验。完成验证后关闭隔离浏览器并停止本地测试服务器。
