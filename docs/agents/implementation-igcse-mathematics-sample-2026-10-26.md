# IGCSE 数学：分数、小数和百分数样章

日期：2026-10-26。状态：本次限定样章内容复核与技术检查通过，待用户审阅及学生试用；未推送、未发布。

## 范围与来源

- OxfordAQA International GCSE Mathematics **9260**，当前资格页链接的大纲正文 **Version 5.1**。不自动迁移至另一资格 9233。
- [当前资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)、[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)：实际阅读正文 p.13（PDF 第 12 页）N12–N14。样章覆盖等值分数、有限小数、百分数互换，作为算子求数量、辨认比较基准；不声称完成循环小数、全部分数运算或整个 Number 单元。
- 实际阅读并本地渲染配对资料：[9260/1C specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf)，封面 **Specimen 2018，Version 0.4，80 marks**，Q3 正文 p.3；[配套 MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf) PDF 第 4 页 Q3：35%，B1。文件名中的 2016 不是试卷考季。
- 样章保留 Q3 英文原题、全部五个选项及官方 1 mark；额外的解释是本站教学反馈，不另称官方评分点。其余示范与任务均自拟，无官方分值。Core 题用于共同基础，不冒称 Extension 真题。
- 原英文页是偏 Extension 的速查笔记，中文页主要导航；现有 PDF 及 Lynn 署名保留，仅增加样章入口，不把旧笔记称作升级完成课程。

## 写作前设计卡

中心问题：同一部分为什么可以写成分数、小数或百分数？题目给一个数量时，怎样判断是在求“一部分有多少”，还是“这一部分占多少”？

必要先修：整数乘除、按位值读到百分位的小数。页内先修回补用钱和均分解释，首次三位小数处补千分位意义；不以百分数算法作为先修。

概念：同样大的整体、等分、等值分数；percent 表示每一百；求一部分与求占比的输入和单位不同。比较的基准必须明确，百分数可以超过 100。

图的用途：同一个条形中的五个等份，三份填充。直接把“取了三份”连接到分数；文字和分割线共同提供信息，不只靠颜色。

呈现：正常展开概念，三个完整示范分别用于等值形式、求数量和求占比。学生任务各有边界，提示与解答分别关闭，不改变共享样式。

| 目标与范围 | 讲解／示范 | 独立产出 | 判定、回补和重试 |
| --- | --- | --- | --- |
| 解释等值分数，互换有限小数与百分数；N12 的部分 | `same-amount`、`change-form` | `practice-forms`、官方 `exam-check` | 保持同一整体；`retry-forms` 纠正小数点和分母错误 |
| 求一个数量的某个分数／百分数；N13 | `find-part` | `practice-part`、`mixed-check` | 先找整体，平均分再取份；`retry-part` |
| 求一个量是另一量的百分之几，包括超过 100；N14 | `find-share` | `practice-share`、`mixed-check` | 基准量作为分母，区分数量与无单位比值；`retry-share` |
| 隔一段学习后重新判断任务与基准 | `next-step` | `later-check` | 实际新题，解答分开；不声称已观察保持效果 |

下一步：样章先验收；后续可接百分比变化，再到反向百分比与复利。页面明确后续学习页尚未制作，不提供虚假下一课链接。保留旧笔记可查，不把它们冒充完整下一课。

## 验收记录

### 实际交付与内容复核

- 新增中英文学习页各一份：[英文](../../igcse/mathematics/fractions-decimals-and-percentages.md)、[中文](../../zh/igcse/mathematics/fractions-decimals-and-percentages.md)；两个原入口增加本地化起点并准确区分样章／参考资料。既有 PDF、署名与旧正文锚点保留。
- 采用现有 subjects／reading_layout、worked-example、lesson-check；没有修改共享 CSS、卡片、导航或布局。
- 全科范围与依赖路线见[研究记录](research-igcse-mathematics-route-2026-10-26.md)。路线是后续计划，不代表已经完成。
- 独立代理 Chandrasekhar 逐项重算三个完整示范、补充计算与全部九个任务，核对官方原题、双语条件、帮助与答案，见[复核报告第 7 节](review-igcse-mathematics-sample-2026-10-26.md#7-局部修补后的最终独立复核)。最终正文哈希与复核报告相符，初轮未受影响的核算继续适用。
- 首轮发现与修补：纸带模型限定正整数细分；在任务前解释英文分子／分母、最简形式和公因数；补 0.375 的千分位；把 fiction 词义放到题旁；将重试 B 改成两天均以全部 150 张为基准的新题，答案 64 张；下一步分别链接求数量和求占比。受影响内容已独立复读，F1–F4 及下一步恢复路径问题闭合。
- 三个示范与九任务分别承担等值形式、算子求量、改变比较基准、混合使用、专项重试与稍后回顾；不是按题数判断目标完成。英文 Question 共 12 条、源序 TeX 50 片段两语言一致，语义对应另由独立复读确认。

### 最终技术检查

- Jekyll 最终构建成功，31.385 秒。Pagefind 1.5.2 重新生成：374 页、两语言、51,943 词；这是索引生成结果，不据此宣称完成全站搜索体验审查。
- 七项检查通过：新样章数学／双语／任务边界、subject-index-translations、reading-layout、frontend-ux、site-language、search-language、frontend-loading。新样章脚本已加入现有 Tests 工作流；本地执行通过，尚未提交远程 CI。
- 新样章、研究与实施／复核文档 Markdownlint、两个检查脚本的语法检查、工作区差异空白检查通过。
- 实际 Chromium 检查两语言入口及样章：390／1365 px、深浅主题，共 **16 个视图**。没有整页横向溢出、MathJax 错误或失效图像；所有任务帮助默认关闭，八个样章视图实际用键盘展开／收起提示。展开所有帮助后重查公式与页面宽度。
- **三条实际路径**：两语言入口→样章→示范→提示→下一步→返回入口；手机先展开导航再中切英，保留 example-forms 位置。**65 个本地链接／锚点**检查无错误；两个原入口各 31 个既有内容 ID 全部保留。
- [浏览器原始结果](audit-assets/igcse-mathematics-sample-2026-10-26/browser-results.json)及[可重跑脚本](audit-assets/igcse-mathematics-sample-2026-10-26/browser-check.cjs)保存本轮范围。脚本调试修正了旧锚点适用页面、绝对链接、移动端菜单操作及请求地址；最终完整运行通过，没有将脚本误用当作网站缺陷。
- 已逐张目视检查中文手机深浅主题首屏、中文手机及英文桌面连续概念→完整示范→独立题截图。连续长截图仅在拍摄时隐藏固定导航、进度和回顶按钮；普通视口截图保留正常界面。图、分数与折叠控件可辨认，连续示范推理没有被拆散。
- 本地预览为 `http://127.0.0.1:8843/zh/igcse/mathematics/fractions-decimals-and-percentages/`，独立服务于本次最终构建。

### 剩余事项与证据边界

等待用户核对写法与真实学生作答反馈，再扩展同类型学习段。百分比变化、循环小数、完整分数运算及其他领域均未标为制作完成；不同的几何论证／图表／变化率类型需单独做小段验收。

未进行目标学生试用、延后保持观察、实体手机、完整屏幕阅读器／WCAG 审查或任何具体计算器操作核验。旧笔记和既有 PDF 未全量重审，原 Quick Check 的同屏答案仍是参考资料的历史状态；不把本次样章验收推广到全科。没有推送、PR、合并或正式发布，也未动其他草稿与未跟踪的依赖文件。
