# A2 四科 Markdown 与生成 HTML 结构审查

日期：2026-10-15。工作区：`D:/GitHub/Academic`。审查基于当前工作树及其已生成的 `_site`；90 个课程源文件的修改时间均不晚于对应生成 HTML。本次只新增本报告，没有改课程、布局、样式或脚本。

## 结论与证据边界

四科共 **45 对、90 页**的结构转换总体可靠。逐页遍历源文件的标题、HTML 块、折叠边界、列表、表格和图片标记，并与生成 HTML 的内容容器逐项对应：**2,016 个正文标题、1,176 个折叠块、272 个表格、72 次图片引用**。没有发现标题丢失、向下跳级、重复正文 ID、未闭合折叠块、未解析的折叠内 Markdown，或题目/答案被错误列表吞并。

确证 **2 项 P2 无障碍问题**，另有 1 项低优先级标题组织问题。没有发现 P1 结构错误。不能仅凭这些静态结果认定网站已达到最佳阅读效果；字体、实际换行、图中文字可读性、屏幕阅读器行为、手机横向滚动与学生使用体验仍需实际验证。

本报告是结构审查，不代替各科内容报告。没有重复核算题目、验证全部官方评分材料或重新进行 TeX 破坏检查；这些分别由学科审查和另一并行审查负责。没有运行浏览器、拍截图或进行学生试用。主审负责新构建和桌面、手机实际展示。

## 读取的呈现链路

- `_config.yml:29` 使用 Kramdown；折叠内容采用 `<details markdown="1">`，不能用 GitHub 预览是否正常替代 Jekyll 生成结果。
- `_layouts/subjects.html:35` 输出页面 H1；`:47` 创建内容容器并传入目录选择器；`:48` 经 `_includes/lazy_content.html` 保留内容与图片标记。全部 90 页使用 `study_page: true` 和 `toc_headings: h2`。
- `assets/js/toc_generator.js:18` 只收集配置选中的标题，`:142` 按实际 heading 等级构造树。因此当前页面的 H3 例题标题不出现在右侧目录，这属于明确配置，不是标题丢失。化学入口折叠内的 4 个 H3 也不会成为指向关闭内容的目录项。
- `assets/js/table_wrapper.js:2` 将内容表格包进 `.table-wrapper`；`assets/css/subject.css:1452` 允许横向滚动，`:1463` 设置通常最小宽度 620px，`:1549` 在手机设为 520px。没有把全局样式较早的 `overflow: hidden` 单独当成最终生效规则。
- `assets/css/subject.css:61`、`:150`、`:2057` 控制正文、标题及学习页宽度；`:2070` 起控制折叠块、summary 和键盘焦点轮廓。`assets/css/style.css:282` 起提供表格基础样式。
- 同时读取 `assets/js/image_modal.js`、`assets/js/image_lazy_load.js`、`_includes/head.html`、`_includes/mathjax.html`。图示按 36 个唯一资源去重，其中 33 个 SVG 另读取了 XML 中的标题、描述、文字标签及线型说明；3 个 PNG 的本次核验限于网页中的文字替代与任务安排。

## 确证问题

### S1 · P2 · 两道化学原图题缺少独立作答所需的文字等价信息

位置：

- `alevel/a2-chemistry/acids-bases-and-buffers.md:201`；中文对应 `zh/alevel/a2-chemistry/acids-bases-and-buffers.md:202`。
- `alevel/a2-chemistry/thermodynamics.md:131`；中文对应 `zh/alevel/a2-chemistry/thermodynamics.md:132`。

复现证据：酸碱 Q3 的图片 alt 只说“weak acid HX titrated with sodium hydroxide; pH against volume…”，没有曲线、刻度或可读取的数据。紧随其后的 05.5–05.6 要求从图读出终点和半中和 pH。可用于计算的读数只出现在 `Solution and self-check` 内。热力学 Q2 的 alt 只说循环包含 X、Y、A、B 和焓值，没有各能级上可见的物种、箭头对应关系或焓数据；01.1–01.3 恰好要求利用这些信息。生成 HTML 没有对应的文字长描述、数据表或关联说明，只有图片和短 alt。

影响：非视觉阅读者无法在保持答案关闭的情况下得到与看图者相同的题目条件，学习页的“先独立作答、后看解答”流程在这里中断。它们并非完全没有 alt，而是复杂原图的短 alt 不足以承载任务所需信息。

建议：为 Born–Haber 原图提供保留 X/Y 等未知量的完整可见信息转录，包括已给物种、各箭头起止、标签和数值；为滴定曲线提供合适的图形长描述及等价可访问数据。将“题目图示文字版本”与 Hint、Solution 分开，不直接把计算答案写进短 alt，也不要删除必要说明来防止答案泄露。若转换表征实质改变了被考查的任务，应明确标注改编关系。

### S2 · P2 · 通用图片放大只有鼠标入口，未形成可键盘操作的对话框

位置：`assets/js/image_modal.js:31`、`:33`、`:41`，影响本范围内全部 72 次图片引用。

复现证据：脚本为每个 `img` 设置 zoom-in 光标并只绑定 `click`；90 页的生成 HTML 中，72 个正文 `img` 都没有焦点入口，也没有链接或按钮祖先。脚本没有补充按钮、`tabindex` 或 Enter/Space 激活处理。打开时只赋图片地址、添加 `.active` 和锁页面滚动，没有移动焦点。创建的外层是普通 `div`，没有对话框角色或相应焦点管理。脚本虽处理 Escape 关闭，这不能使图片放大入口本身可以用键盘访问。

影响：依赖键盘的学生不能使用站点提供的图片放大功能；鼠标打开后，键盘焦点也继续停留在背景流程中。对细小原图和多联图尤其不利。此结论来自 DOM 与事件绑定，未声称已经进行真实键盘或辅助技术测试。

建议：以有名称的按钮或链接触发放大；打开时将焦点移入有适当名称的对话框，管理背景可交互状态并在关闭后恢复触发处焦点。保留图的原有替代说明。随后以键盘和屏幕阅读器实际验收。

### S3 · P3 · 物理速查比较部分的子主题与比较标题同级

位置：`alevel/a2-physics/quick-reference.md:522`、`:535`、`:546`、`:556`、`:571`、`:575`、`:587`；中文对应比较段从 `zh/alevel/a2-physics/quick-reference.md:571` 起。

证据：`Summary: Comparing Gravitational Fields and Electric Fields` 是 H2，其后的 `Similarities`、`Differences` 也是 H2；下一组 `Summary: Electric Fields and Magnetic Fields` 后的连接、带电粒子、速度选择器也继续用 H2。生成 HTML 如实保留这些等级，`toc_headings: h2` 又将它们全部列成相互独立的顶层目录项。

影响：这不是 Markdown 解析失败，但“Similarities / Differences”的目录文字失去比较对象，子主题的从属关系没有编码到文档结构中。它与新学习页清晰的 H2 概念/H3 示例关系不同。

建议：将比较的子主题降为 H3，或将其 H2 标题改成独立且包含比较对象的标题；如要让 H3 保持可从目录直达，应同时评估目录选择范围与树形导航，而非只机械改 `##`。保留现有锚点。正文中的 Unit 3 H1 与布局页面 H1 本次不单独判为错误：其承担单元层级，不能仅按“一页必须只有一个 H1”的固定模板扣分。

## 已核实的结构通过项

| 检查 | 结果 |
| --- | --- |
| 源 Markdown 标题与生成 heading 数 | 90/90 页相等；共 2,016 个 |
| 中英文 heading 等级与 ID 顺序 | 45/45 对一致 |
| 向下跳过一个 heading 等级 | 0；单独列出的是 S3 的语义组织问题 |
| 正文重复 ID、标题误入列表/引用/代码块 | 0 |
| 源 details 开始、结束与生成 details 数 | 1,176/1,176；无数量差、未闭合或嵌套折叠 |
| summary 结构 | 每块有一个首位 summary；无空 summary 或空内容块 |
| 折叠内 Markdown | 已生成段落、强调、列表、表格；未发现原样输出的标题、粗体或表格分隔行 |
| 默认泄露折叠内容的 open 属性 | 0 |
| 列表结构 | 无孤立 li，ul/ol 没有非 li 的直接元素子节点 |
| 表格结构 | 272 个表格逐行列数一致；没有由普通文本/HTML 块吞并的表格 |
| 正文 HTML 内容容器的解析错误 | 0；不把整页页脚中的脚本文字解析噪音当作正文错误 |
| 图片短 alt | 72/72 非空；S1 另检验复杂题图的信息是否充分 |
| 图示的颜色表达 | 矢量图另有公式、标记、方向、位置或线型等信息；没有确认“仅凭颜色才可辨认题目条件”的结构错误。实际配色、对比度仍需看图验证 |

所有图片都使用普通图片段落，没有语义 `<figure>/<figcaption>`；所有表格没有 `<caption>`。它们均有邻近标题或正文背景，因此不将缺少某一种标签一律视为内容错误。若增加 caption，应服务于题号、图号、来源和说明的关系，不机械为每幅教学图重复标题。

## 仅作为后续视觉或使用验证的建议

1. **手机表格的额外横滑**：272 个表格都受到 520px 的手机最小宽度约束，连简单两列表也会在约 350px 的正文宽度内横滑。这是静态可证明的布局约束，但已有滚动包装，不能据此断言内容被截断。实际检查横滑提示、最后一列可达性、键盘操作、MathJax 后的宽度，以及简单两列表是否可自然收窄。重点：`alevel/a2-mathematics/parametric-equations.md:84` 的 6 列表、`alevel/a2-mathematics/numerical-methods.md:223` 的 6 列表、`alevel/a2-further-mathematics/hyperbolic-functions.md:46` 的 5 列表；中英文都测。
2. **不把行数直接视为超长表格**：全范围最长为高数入口大纲对照表（`alevel/a2-further-mathematics/index.md:48`），15 行含表头；最大为 6 列。没有数十、上百行的正文巨表。高数入口已折叠，先验证查找和滚动体验，再决定是否拆分。
3. **深层列表**：数学速查最大 3 层，出现在绝对值方程例题的分情况推理（`alevel/a2-mathematics/quick-reference.md:127`，中文对应相同内容）；物理速查最大 2 层，其余页最大 1 层。原结构解析正确。手机每层有较大的左缩进，需观察三级中英列表中的公式宽度；不应为统一外观删掉必要的 Case 关系。
4. **多联图与缩略原图**：多联图的非颜色信息在源资源中存在，但源文件有文字不代表缩到手机后仍能读清。重点检查双曲函数六联图、物理简谐/电场/RC 联图、化学三幅原图的文字大小与放大操作。S2 修复后再验收键盘放大。
5. **中文页面的图片说明语言**：部分图片 alt 仍保留整段英文，例如中文数学的参数方程/积分面积、中文高数极坐标原题图及三幅化学原图。题干保持英文符合项目要求，但图的辅助讲解是否需要中文或显式语言标记，应结合中文屏幕阅读器实际朗读确认，不仅比较图片数量。
6. **长页导航的粒度**：右侧目录统一只列 H2，长学习页的题号 H3 不能直接从目录访问。现有章节锚点存在，不能称断链。应让学生完成“找题—开提示—回概念—再试”的实际任务后决定是否纳入部分 H3，避免一次把所有例题和解答标题塞进目录。

## 主审回传的浏览器证据与源码对应

以下实测由主审执行并回传，本审查只负责静态确认范围和定位源码；不把截图或尺寸归为本审查亲自测得。

- **宽表是四科全局策略**：主审在 390px 手机视口测得数学积分方法表 wrapper 333px、table 520px，关键第三列须横滑，第一屏未见横滑提示。它与 `assets/css/subject.css:1465` 的 620px、`:1550` 的手机 520px 规则直接对应；规则匹配全部 272 个正文表格，而非单页误写。`assets/js/table_wrapper.js:32` 添加 `.scrolled`，但当前 CSS 没有利用该类生成横滑提示的规则；只有滚动条外观样式。正文无整页横溢与表格右列位于滚动区域之外可以同时成立，不应混为一种故障。
- **H2 目录是全部 90 页的显式策略**：每页的 `toc_headings: h2` 经 `_layouts/subjects.html:47` 传给 `assets/js/toc_generator.js:18`。搜索也只在已有 tocLinks 上建索引（`assets/js/toc_generator.js:369`、`:377`），不是正文检索。因此二阶微分方程的 H3 例题和 Q1–Q7 不显示，也不能在目录搜索命中，符合代码现状；问题在导航粒度的选择，不是生成 Markdown 时漏题。
- **界面偏好与直接打开的课文语言不一致时会增加导航控件**：主审以英文界面偏好直接打开中文课程时，测得导航动作区横溢约 69px；偏好与中文一致后消失。`assets/js/site-language.js:8` 先取正文语言，`:10`–`:11` 由已存界面偏好覆盖；`:60` 只有在正文语言与界面偏好相同时才隐藏 fallback languageSwitch；`:68` 又显示语言下拉框。因此该状态同时有下拉框和 English 链接。`_includes/nav.html:37`–`:56` 将两者与目录、主题、菜单三个按钮放在同一动作区；`assets/css/style.css:87`–`:91` 令动作区不可收缩，品牌也在 `:37` 不可收缩，动作区没有换行规则。手机规则 `:171`–`:174` 只减少间距、约束 select，不处理新增 fallback 链接的空间预算。建议在保留所有功能的前提下重新安排这一组合状态，而不是依赖语言必须匹配。隐藏规则本身在 `assets/css/style.css:1557`，没有证据表明是 hidden 属性失效。

未将视口切换时尚未结束的过渡动画、目录抽屉的瞬间截图列为持续遮挡问题。

## 全量覆盖表

每行明确覆盖同名的英文与中文两个文件；两者的 H/D/T/I 数相等。H = 正文 heading 总数；D = details 数；T = 表格数；I = 图片数；L = 最大列表层数。下列都是源结构及生成 HTML 已检查，并非仅访问了页面标题。学科正确性、来源查证及视觉状态不由这些数字代替。

### A2 Mathematics Pure · 17 对 / 34 页

共同路径：`alevel/a2-mathematics/` 与 `zh/alevel/a2-mathematics/`；排除 Statistics、Mechanics 及其子目录。

| 同名文件（.md） | H | D | T | I | L |
| --- | ---: | ---: | ---: | ---: | ---: |
| index | 5 | 1 | 1 | 0 | 1 |
| functions | 21 | 13 | 3 | 1 | 1 |
| modulus-and-transformations | 20 | 12 | 5 | 1 | 1 |
| algebraic-fractions-and-division | 20 | 11 | 5 | 0 | 1 |
| partial-fractions | 13 | 9 | 3 | 0 | 1 |
| binomial-series | 17 | 12 | 1 | 0 | 1 |
| trigonometric-functions-and-formulae | 26 | 16 | 3 | 1 | 1 |
| exponential-and-logarithmic-functions | 25 | 14 | 1 | 1 | 1 |
| differentiation | 24 | 16 | 2 | 0 | 1 |
| parametric-equations | 22 | 12 | 2 | 1 | 1 |
| integration | 17 | 11 | 3 | 0 | 1 |
| integration-applications | 20 | 14 | 3 | 1 | 1 |
| differential-equations | 18 | 12 | 2 | 0 | 1 |
| numerical-methods | 21 | 12 | 5 | 2 | 1 |
| vectors | 21 | 14 | 2 | 1 | 1 |
| mathematical-proof | 12 | 6 | 2 | 0 | 1 |
| quick-reference | 70 | 0 | 3 | 0 | 3 |

小计：744 headings、370 details、92 tables、18 images。

### A2 Further Mathematics Pure · 12 对 / 24 页

共同路径：`alevel/a2-further-mathematics/` 与 `zh/alevel/a2-further-mathematics/`。

| 同名文件（.md） | H | D | T | I | L |
| --- | ---: | ---: | ---: | ---: | ---: |
| index | 2 | 1 | 1 | 0 | 1 |
| roots-and-polynomials | 22 | 14 | 1 | 0 | 1 |
| proof-by-induction | 20 | 12 | 2 | 0 | 1 |
| finite-series | 17 | 10 | 2 | 0 | 1 |
| series-and-limits | 28 | 17 | 1 | 0 | 1 |
| de-moivres-theorem | 31 | 16 | 1 | 1 | 1 |
| polar-coordinates | 25 | 16 | 3 | 3 | 1 |
| inverse-trigonometric-functions | 25 | 17 | 3 | 1 | 1 |
| arc-length-and-surface-area | 20 | 14 | 3 | 0 | 1 |
| hyperbolic-functions | 35 | 16 | 4 | 1 | 1 |
| first-order-differential-equations | 23 | 24 | 2 | 0 | 1 |
| second-order-differential-equations | 23 | 28 | 3 | 0 | 1 |

小计：542 headings、370 details、52 tables、12 images。

### A2 Physics · 9 对 / 18 页

共同路径：`alevel/a2-physics/` 与 `zh/alevel/a2-physics/`。包含 PH03 学习页/速查和 PH04 第一章热学，不把未制作内容补算为学习页。

| 同名文件（.md） | H | D | T | I | L |
| --- | ---: | ---: | ---: | ---: | ---: |
| index | 4 | 0 | 0 | 0 | 1 |
| circular-motion | 19 | 14 | 3 | 3 | 1 |
| simple-harmonic-motion | 26 | 17 | 4 | 3 | 1 |
| gravitational-fields-and-satellites | 23 | 19 | 1 | 2 | 1 |
| electric-fields | 23 | 18 | 2 | 3 | 1 |
| capacitance | 23 | 18 | 2 | 2 | 1 |
| capacitor-charge-and-discharge | 28 | 18 | 1 | 3 | 1 |
| thermal-physics | 36 | 24 | 5 | 2 | 1 |
| quick-reference | 56 | 0 | 7 | 0 | 2 |

小计：476 headings、256 details、50 tables、36 images。

### A2 Chemistry · 7 对 / 14 页

共同路径：`alevel/a2-chemistry/` 与 `zh/alevel/a2-chemistry/`；当前已升级 CH03 内容。

| 同名文件（.md） | H | D | T | I | L |
| --- | ---: | ---: | ---: | ---: | ---: |
| index | 6 | 3 | 1 | 0 | 1 |
| thermodynamics | 20 | 14 | 8 | 1 | 1 |
| electrode-potentials | 17 | 12 | 6 | 0 | 1 |
| acids-bases-and-buffers | 19 | 15 | 6 | 1 | 1 |
| period-3 | 20 | 14 | 7 | 0 | 1 |
| transition-metals | 24 | 18 | 6 | 1 | 1 |
| ions-in-solution | 21 | 14 | 5 | 0 | 1 |

小计：254 headings、180 details、78 tables、6 images。

## 检查方法与未查范围

本次用临时只读脚本遍历明确列出的 90 个源文件及其 permalink 对应 `_site/.../index.html`，以 `lxml.html` 解析内容容器，比较标题与折叠数量、标题级别/ID，检查 summary、列表直接子元素、表格列数、图片 alt、嵌套深度、默认 open 状态及页面生成时间；随后人工读取结构提纲、异常候选、全部唯一 SVG 的语义标签、图片上下文及共享呈现代码。临时结果未写入课程目录，也未增加持久测试脚本。结构数量检查通过不等于题目答案、图的学科意义或浏览器展示通过。

未查：本清单之外的课程与资源页；浏览器运行后的实际布局、目录滚动及辅助技术；所有 PNG 内部的图像像素；打印排版；学生试用；从零重新审查所有题目、来源身份与评分材料。TeX 与数学公式的专门检查交由并行审查，本报告不重复给其结论。
