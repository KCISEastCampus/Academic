# AS 高数级数：样章确认后的首批扩展

2026-10-23。依据用户已确认的[复数样章](sample-complex-numbers-2026-10-22.md)和[课程内容长期标准 v1.1](course-content-standard.md)，局部改写中英文 series 学习页。范围为 9665 v5.2 FP1.5；不迁移到 9765，不改 AS 生物／化学，不改共享样式或 Numerical Methods。

## 设计卡与当前断点

中心问题：怎样选择标准和或差分，保留正确边界，再用有限部分和判断无限和？先修为括号展开、分数通分与 Σ 记号；归纳法不作为本章先修。正文按“有限项的含义 → 标准和 → 差分与边界 → 部分和极限”建立依赖，方法选取、展开及极限理由在主线中可读。

当前源码的标准和示范直接从展开跳到答案；独立任务主要考分式消项与发散判断，不能同时承担标准平方／立方和的独立证据；原重试只有立方差，不能检验非 1 下限的分式边界修复。示范与学生任务缺少完整边界，首屏有内部活动码与作者声明。实施前另保存实际页面基线，不能仅由行数判断阅读质量。

| 目标与官方条目 | 先修与回补 | 讲解与示范 | 独立证据与反馈计划 |
| --- | --- | --- | --- |
| FP1.5 组合平方和、立方和并改变下限 | 展开、Σ 的范围、常数项、二次式因式分解；start 自检及 AS 代数回补 | model、lower-limits：线性拆和、常数项、减到 m−1 的示范 | practice-1 自行选法与 hence；retry-1 同目标重试；later-review 的 A_n；检查式子、下限与最小 n |
| FP1.5 差分求有限和 | 通分、下标；demonstration 有限列表 | 步长二示范列出实际首尾项；n=1、2 单独核查 | practice-2 原独立分式题；retry-2 不同下限及小 n；later-review 的 B_n；检查完整边界 |
| FP1.5 部分和极限存在时的无限级数 | 有限部分和；infinite-sums 定义与恢复入口 | 收敛示范及奇数和发散对照，不约掉“无穷处的项” | practice-2 判断错误说法、retry-3 立方差、later-review 两种结论；均须用有限部分和极限说明 |

复用 reading_layout、worked-example、lesson-check；按本章推理决定题数，不照搬复数章的数量。原 model、demonstration、practice、retry、sources 锚点与前后课网址保持。

## 本轮实际阅读的官方材料

从 [9665 当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)点击 specification 和所配样卷、评分材料，重新核对：

- [Specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)，正文 9665、版本 5.2，印刷 p.12／PDF 第 11 页 FP1.5。
- [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf)，Q1、Q6（印刷 pp.2、9）；正文 Specimen 2018 Morning，文件名 2019/v3，沿用身份说明。
- [配套 specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf)，Q1、Q6（印刷 pp.4、7），版权 2017，非实考 Final MS。

设计据此保留清楚的消项边界、平方／立方和分拆及代入推理、m−1 下限和 hence 与前面结果的连接。所有课程练习均为自拟题，不复制样卷原题或标官方分值。PDF 文本已读；网页工具的 PDF 截图本轮返回内部错误，未以失败截图作为验证证据。

## 验收状态

### 改写前的实页基线

本机 Chromium 打开已构建旧版，英文／中文分别检查 1365×950 与 390×950。四组均 HTTP 200，MathJax 错误为 0、整页横向溢出为 0；这些技术结果仍未暴露以下阅读问题：

- 手机三个标准和同排，立方和需横向查看，无法在同一视域直接读完；不是整个页面溢出。
- 桌面完整消项示范、发散说明、带支架题及独立题边界较弱，示范的最终极限与下一题之间缺少明确的学习状态区分。
- 首屏先展示内部 A5／FP1.5 编号和作者题目声明，学习起点在其后。

### 实施与独立内容审查

两页复用既有 reading_layout、worked-example 与 lesson-check，没有新增本章样式、脚本功能或依赖。主线展开，两个完整示范具有题干、选法、连续推理和检查的边界；8 个学生任务各有自己的默认关闭提示与反馈，不嵌套题框。原 model、demonstration、practice、retry、sources 及前后课链接保留。

新增多项式有限和的独立选法、平方／立方和组合及变下限重试；分式边界有对应重试；下一课后有两种方法混合回顾。学生做完本章还会返回上一页的复数延后回顾。没有用同组的其他题替代缺失目标。

独立审查者 Maxwell（子代理，2026-10-23）只读求解全部示范、先修、带支架题、两道独立题、三道重试和混合回顾；重新核对官方 FP1.5、所引样卷与评分材料。确认多项式结果、非 1 下限、步长二的小 n、分母条件、有限部分和与极限、hence 的连接和双语帮助一致。未发现阻断项。

审查发现一项 P3：先修未写因式分解，而独立题要求 factorised form。已同步补先修及 AS 代数 #l02 入口，在独立题 1 的关闭解答内展示拆中项、分组提取及展开核对，并要求回补后遮住重做。审查者再次复核，确认已解决。数学核算脚本另用直接求和比较涵盖最小 n 的多种取值；这些核算不替代全范围代数论证或独立内容审查。

### 相同内容的实际阅读复查

| 发现 | 修改与复查 |
| --- | --- |
| 手机标准和三式同排，第三式需横向查看 | 分三行陈列；390 px 实页中三个公式均完整可见 |
| 示范、概念和尝试的边界不清 | 完整多项式示范与差分示范各成轻边框，概念解释仍保持正文；桌面连续读完题干、选法、推理、结果与检查 |
| 首屏先出现内部编号和作者声明 | 改为中心问题、学习起点与先修；完整来源身份留在页尾资料区 |
| 初次重排后，手机展开解答仍有六处公式局部横向滚动 | 调整等式对齐与换行，保留全部项和推理；最终中英文 390 px 的所有显示公式均在所属阅读区内，不依赖缩小字号或全站 CSS 修改 |
| 主线示范无法折叠，却写“收起示范” | 改为遮住或不回看示范；提示与解答仍各自可关闭 |

使用用户已授权的本机无头 Chromium / Playwright；地址 `http://127.0.0.1:8832`。中英文分别检查 1365×950、390×950，并检查深浅主题及全部反馈展开的状态。四组均 HTTP 200，各有 179 个 MathJax 容器，错误节点 0，整页横向溢出 0；另测两种尺寸的每个显示公式与所属阅读区宽度，最终均无超出。稳定加载后人工查看了手机标准和、桌面完整示范、手机展开推理及深色反馈等截图。

Enter 可展开并关闭控件；目录可实际跳到 practice；页内锚点、本地课程／前后课链接、语言选择保留 practice 定位均通过，未记录到页面脚本异常。原五个锚点继续可用。检查没有把“脚本无溢出”当作长公式已经易读。

保留证据：[改写前手机](sample-assets/series-2026-10-23/before-mobile.png)、[手机标准和](sample-assets/series-2026-10-23/mobile-standard-sums.png)、[桌面完整示范](sample-assets/series-2026-10-23/desktop-example.png)、[手机展开后的末段推理](sample-assets/series-2026-10-23/mobile-answer.png)、[手机深色阅读](sample-assets/series-2026-10-23/mobile-dark.png)、[浏览器回归](sample-assets/series-2026-10-23/browser-results.json)、[公式宽度与 Functions 定点检查](sample-assets/series-2026-10-23/followup-results.json)。

### 技术检查与交付状态

- 最终 Jekyll build --trace、修改正文的 Markdownlint、git diff --check：通过。
- test-as-further-course.js：20 对学习页及 112 个归档锚点通过；复数与级数按逐题边界和完整双语题干核对，不再强制三道题；读取统一 CRLF/LF，未放宽数学内容一致性。
- test-as-further-calculations.js：458 项数值／代数比较及其他模型断言通过，含本章新任务及边界值。
- test-reading-layout.js：通过；test-further-bilingual.js：既有 16 对 FM03 学习页回归通过，后者不作为本章 FP1 内容审查证据。
- 本地 Pagefind 索引重新生成，2 种语言、296 页；未操作搜索界面，不称搜索体验已验收。
- 本批同时只改 Functions Q2、Q5 的中性标题，显式保留旧锚点。与 HEAD 对照，题干与其他正文未变；中英文桌面／手机的标题、旧 ID、默认关闭提示／答案及公式实页通过。这不是 Functions 全章内容验收。

本章内容审查与技术检查通过，状态为待学生试用。用户确认的是复数样章，不是本章；没有真实学生作答、真实移动设备或完整屏幕阅读器验收。本轮不改 AS 生物／化学，不重写其他课程；没有推送或发布。
