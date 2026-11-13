# Academic 前端改进实施：MathJax 回退与目录点击

日期：2026-11-13（Asia/Singapore）。分支：`codex/exam-mapping-line-endings-20261031`。基线 HEAD：`9df5b372472379d67223043b84b0c1db0e67d59f`。

## 范围与结果

用户确认开始实施后，本轮完成前期审查的前两项（MathJax入口回退、目录重复处理）及目录锚点的减少动态效果支持。两位队友分别修改加载器与目录交互，主代理复核差异、补齐旧测试的真实点击字段，并运行源码及浏览器隔离验证。此前四份审查报告保留，不将历史审查改写成修复后的整站验收。

- **公式入口回退：**每个候选地址创建新的 script；失败节点移除，重复或晚到事件不再推进回退链；成功后停止。全部失败时在正文前显示一次中英文可见提示，正文未解析时等待 DOMContentLoaded。
- **目录点击：**全局锚点增强尊重 defaultPrevented，TOC 的一次处理不再被 document 监听器二次接管；保留 replaceState、标题焦点、aria-current 与抽屉关闭。修饰点击、下载、外开目标及 skip link 保持原生行为。
- **减少动态效果：**TOC 与普通正文锚点每次激活读取系统偏好，reduce 使用 instant，其他情况保留 smooth。返回顶部、搜索高亮的其他滚动入口未纳入本轮修改。

## 实际变更文件

| 文件 | 变更 |
| --- | --- |
| [mathjax.html](../../_includes/mathjax.html#L95) | 独立脚本重试、单次结算、防陈旧事件和本地化失败提示 |
| [interactive_effects.js](../../assets/js/interactive_effects.js#L69) | 普通锚点滚动偏好、已处理事件与原生点击例外 |
| [toc_generator.js](../../assets/js/toc_generator.js#L48) | TOC 点击例外、减少动态效果、保持焦点和历史契约 |
| [test-mathjax-fallback.js](../../scripts/test-mathjax-fallback.js) | 新增入口重试、全失败、语言、DOM就绪和TMUA配置回归 |
| [test-anchor-navigation.js](../../scripts/test-anchor-navigation.js) | 新增真实处理器冒泡、单次滚动/历史、焦点/ARIA、偏好变化及点击例外回归 |
| [test-accessibility.js](../../scripts/test-accessibility.js#L147) | 点击替身补 button:0、链接补 hasAttribute，使旧回归模拟真实 DOM 事件 |
| 本实施记录 | 记录范围、验证证据及剩余限制 |

旧无障碍回归首次运行失败，因为点击替身未提供 button 字段，被新增的非主键过滤当成非主键事件。补齐真实点击字段后通过；产品过滤没有为迁就替身而放宽。新增回归同时覆盖键盘生成的 button=0、detail=0 点击。

## 通过的源码与回归检查

以下11项逐一运行且全部通过：

```text
node scripts/test-mathjax-fallback.js
node scripts/test-anchor-navigation.js
node scripts/test-accessibility.js
node scripts/test-image-modal.js
node scripts/test-reading-progress.js
node scripts/test-toc-refresh.js
node scripts/test-search-interaction.js
node scripts/test-search-language.js
node scripts/test-theme-init.js
node scripts/test-back-to-top.js
node scripts/test-tmua-math.js
```

另外通过：

- `node scripts/test-exam-topic-integration.js --source-only`：128个映射、254个双语学习页、25个跨章节条目。该检查不代替公式或课程内容审查。
- 修改的两个浏览器脚本及两个新增回归脚本分别执行 `node --check`。
- `git diff --check` 无错误；未修改依赖、课程正文、共享布局结构或生产配置。

新 MathJax 回归覆盖：首源成功、1/2源失败后恢复、全源失败、旧尝试重复错误/晚到成功、成功后的错误、提示去重、中英文、正文容器有无、DOM未ready、TMUA配置不被重置。新导航回归运行真实TOC和全局处理器，模拟容器→document冒泡，不只检查源代码字符串。

## 真实 Chromium 隔离验证

使用现有 chrome-devtools 浏览器连接，UA为 Windows Chrome/157.0.0.0。临时托管服务器只监听127.0.0.1:8797，验证结束后停止。

验证使用的本地临时HTTP夹具每次请求读取本轮源码；夹具位于仓库外，不属于本次提交，以下记录为本次实测观察，可提交的自动化回归见上方两个新增测试。公式夹具只替换 include.mathml 的条件分支及三个候选地址，将候选地址指向可控制成功/404的同源端点；成功端点返回仓库真实 MathJax bundle，字体与扩展路径保留原配置。此方法验证重试机制和真实排版，不证明外部 CDN 当前可用，也不等同 Jekyll 构建。

### 公式回退

| 场景 | 浏览器记录的尝试序号 | 排版结果 | 提示 |
| --- | --- | --- | --- |
| 首源成功，英文 | 0 | 两个mjx-container：TeX与H2O | 0条 |
| 首源失败，英文 | 0→1 | 两个mjx-container | 0条 |
| 前两源失败，中文 | 0→1→2 | 两个mjx-container | 0条 |
| 全源失败，中文 | 0→1→2 | 无引擎排版，正文仍在 | 1条中文提示 |
| 全源失败，英文 | 0→1→2 | 无引擎排版，正文仍在 | 1条英文提示 |
| TMUA条件配置，前两源失败 | 0→1→2 | 自动排版为0；调用typesetPromise后为2，错误为0 | 0条 |

成功场景仅保留一个MathJax-script节点；全部失败后失败节点已移除。失败提示有role=status和可见文本；没有做屏幕阅读器真实播报验收。

### 目录与正文锚点

- 桌面1280px、no-preference：点击TOC，1次scrollIntoView(smooth)、0次window.scrollTo、1次replaceState、0次pushState，历史长度不增加，焦点落到目标标题。
- 手机390px、reduce：打开TOC，聚焦链接后用浏览器Enter键激活，1次scrollIntoView(instant)、0次window.scrollTo、1次replaceState、0次pushState；抽屉关闭，body滚动锁解除，标题获得焦点，历史长度不增加。
- reduce下普通正文锚点：1次window.scrollTo(instant)、1次pushState，保留原有80px偏移策略。普通正文锚点的历史策略没有改为TOC的replace策略。

导航夹具使用当前两个完整脚本和必要的DOM，但不是完整课程样式或Jekyll页面。因此以上结果证明事件和焦点机制，不代表整站视觉、所有课程深链接或所有设备已验收。

## 边界与未执行项

- `bundle check` 仍失败，当前工作副本缺少Jekyll及相关gem；没有安装新依赖、重建站点或使用旧_site声称本次构建通过。
- 未测试Firefox/Safari、完整Jekyll生成HTML、生产CDN故障、屏幕阅读器、实际学生阅读与CWV。
- MathJax回退限入口bundle；字体、mhchem/MathML扩展等子资源路径按原配置保留。脚本请求成功不等于所有引擎内部初始化错误都能恢复，也没有新增超时重试。
- 没有数学/学科内容修改或教师认证，没有学生试用；生产状态仍为未推送、未发布。Git提交只记录本地修复和验证结果，不代表上线。
- 优先清单其余项目仍待实施，本轮不将其标成已修复。

## Modern Web Guidance

- `performance`：我保留本地资源优先（“DO self-host critical third-party dependencies”）；具体的新script重试由[WHATWG脚本准备算法](https://html.spec.whatwg.org/multipage/scripting.html#prepare-the-script-element)约束，没有引入新加载库。
- `motion`：我让两个锚点滚动入口按每次激活的偏好选择滚动方式（“Always respect reduced motion preferences.”）。instant是避免显式JS/CSS平滑滚动继续产生位移的实现选择，指南没有逐字规定该参数。
