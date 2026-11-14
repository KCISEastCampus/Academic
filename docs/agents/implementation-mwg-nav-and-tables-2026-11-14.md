# 导航窄桌面布局与表格键盘访问

日期：2026-11-14。基线提交：`cdf8b70f231af4e8726648c5135679742e43febb`。本轮接续[构建与移动导航记录](implementation-mwg-build-and-nav-2026-11-13.md)，修复其记录的 1025–1037px 导航溢出，然后增加有横向溢出的课程表格键盘访问。本轮改动仅作本地 Git 提交，未推送或发布。

## 实现

- [导航样式](../../assets/css/style.css#L55)：链接区允许在可用宽度内收缩和换行；1025–1199px 适度缩小链接横向内边距和导航组间距。原先数值方法英文页在 1025px、1037px 的文档宽度为 1124px；默认字体下现在 1025px 为 1010px（其余空间是纵向滚动条），导航高 58px，保持单行。保留 1024px 手机断点和上一轮的自然键盘顺序。
- [表格脚本](../../assets/js/table_wrapper.js)：仅对可见且 `scrollWidth - clientWidth > 1` 的滚动包装器生成 `tabindex="0"`、`role="region"` 和名称。使用浏览器原生方向键滚动，不截获键盘事件，也不改变原生 table 语义。
- 名称优先使用包装器已有的作者属性；否则使用可见 caption、表格自己的 ARIA 名称，最后回退到中英文“Table n / 表格 n — 最近标题”。生成的 caption ID 检查冲突。作者已有属性和后续覆盖均受保护，撤销时只删除仍与本脚本记录匹配的值。
- 无溢出时撤销生成的入口和区域属性。若包装器仍是当前焦点，暂将脚本自有 `tabindex` 改为 `-1`，取消后续 Tab 停靠而保留当前焦点；离焦后清理。脚本不主动调用 `focus()`。
- 支持已有包装器、重复初始化、动态内容、字体完成、窗口/元素尺寸变化和 details 开合；移除表格时解除对应 ResizeObserver 观察。关闭的 details 内容即使仍返回布局矩形也不增强，仅首个直接 summary 内可见内容例外。
- [焦点样式](../../assets/css/subject.css#L1185)：3px 主题色轮廓，并在强制颜色模式使用系统 Highlight。

本轮参考 [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) 的 `responsive-table`：**“Add a `tabindex="0"` attribute to the container”**，以及容器区域角色和可访问名称要求。这里将入口限制为实际溢出的容器，避免每张普通表格都增加一个 Tab 停靠点。Material 焦点顺序原则及来源沿用[上一轮记录](implementation-mwg-build-and-nav-2026-11-13.md#改动)。

## 构建和回归

使用锁定的 Ruby 3.4.4、Bundler 2.6.7、Jekyll 4.3.4，设置 `BUNDLE_FROZEN=true`，向仓库外的全新输出目录构建。Gemfile 和锁文件未改动。最终构建成功，耗时 40.481 秒；浏览器复验结果见下方验收表。实际测试没有依赖旧 `_site`。

```powershell
bundle exec jekyll build --destination D:/LearningResources/audit-modern-web-guidance-20261113/site-current --trace
node scripts/test-table-wrapper.js
node scripts/test-nav-keyboard.js
node scripts/test-reading-layout.js
node scripts/test-exam-topic-integration.js --site-dir=D:/LearningResources/audit-modern-web-guidance-20261113/site-current
node scripts/test-frontend-ux.js --site-dir=D:/LearningResources/audit-modern-web-guidance-20261113/site-current
node scripts/test-site-language.js --site-dir=D:/LearningResources/audit-modern-web-guidance-20261113/site-current
```

[表格回归](../../scripts/test-table-wrapper.js)执行实际脚本，覆盖溢出阈值、名称/本地化、属性归属、预包装、幂等性、观察器、动态 caption、字体回退、details 非空矩形以及聚焦容器放宽后保焦/离焦清理。VM 检查和真实浏览器输入分别执行。

现有检查通过：128 个考试映射、254 个双语课程页、25 个多章节条目；254 个生成页、四门试点课程链接及 3,582 个真实 Ruby Liquid 组合样例；243 对语言页面；前端 UX；32 个双语 MA03 页面阅读角色检查。另运行 accessibility、toc-refresh、mathjax-fallback、anchor-navigation、image-modal、reading-progress、search-interaction、search-language、theme-init、back-to-top、tmua-math 回归，均通过。脚本语法和 `git diff --check` 通过；LF/CRLF 提示来自现有仓库设置。

## 生成页浏览器证据

本地静态服务器提供本次 Jekyll 输出，使用隔离 Chrome 157.0.8103.52（CDP）和 Firefox 155.0（WebDriver BiDi）的真实 Tab/Shift+Tab/Enter/Escape/方向键输入。没有关闭浏览器沙箱或修改 ACL。布局测量等待字体及有限时长动画完成。

| 检查 | 结果 |
| --- | --- |
| 数值方法英文页、英文首页、中文首页；320、390、768、1024、1025–1037 每个整数宽度、1100、1124、1280px | 共 60 个组合；导航无元素重叠或越界，页面无横向溢出；1025px 数值方法页导航为 58px 单行 |
| 数值方法页手机导航 | Enter 展开，Tab 顺序覆盖七个链接、语言选择、主题；Shift+Tab 逆行返回菜单按钮；Escape 关闭；1024px 和 1025px 断点焦点恢复通过 |
| 中文首页手机导航 | 无课程目录按钮时，Enter 展开后 Tab 进入“首页”，Escape 回菜单按钮 |
| 英/中文 `/alevel/as-chemistry/structure-and-forces/`，Chrome，320px | 包装器宽 263px，内容分别 321/330px；Tab 可进入，方向右键 `scrollLeft: 0 → 40`；名称与文档语言匹配 |
| 同两页，Firefox，320px | 包装器宽 278px，内容 321/330px；Tab 可进入，方向右键 `0 → 39` |
| 同两页，390px | Chrome 包装器/内容均 333px；Firefox 均 348px；无溢出，role 被撤销，当前焦点入口改为 -1，实际 Tab 离开后清理 tabindex |
| 表格键盘焦点，浅色/深色/强制颜色 | 三种模式均有 3px solid 轮廓；颜色分别为 `rgb(3,105,161)`、`rgb(125,211,252)`、系统 Highlight（本机 `rgb(26,235,255)`） |
| 数值方法页，390px | 436 个 MathJax 容器、0 个排版错误；可见溢出表格有名称及键盘入口；关闭答案折叠区中的表格不生成入口 |
| 数值方法页，展开答案再放宽到 1280px | 展开后可见溢出表格自动增强；已聚焦表格放宽后退出 Tab 顺序并保留当前焦点，Tab 移开后清理临时 `-1` |

真实页面复验曾发现两个 VM 初版未覆盖的差异：Chrome 对关闭 details 的子树仍返回非空矩形，以及移除当前焦点元素的 tabindex 会导致丢焦。两者已分别补充实现和回归用例，再经生成页复验。首页初次进入的动画也会影响瞬时几何值，尺寸矩阵按字体和有限动画完成后的稳定布局判断。

范围限于布局、键盘访问及上述生成页抽样。未完成 Safari、实际读屏播报、真实移动设备或学习效果验收。浏览器辅助脚本、原始 JSON 和截图保留于本机临时审查目录，不是仓库测试依赖；本记录列出路线、尺寸、操作和测量结果以便复验。验证结束关闭隔离浏览器并停止本地服务器。
