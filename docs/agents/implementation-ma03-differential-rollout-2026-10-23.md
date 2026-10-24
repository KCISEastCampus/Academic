# MA03 differential rollout — 2026-10-23

状态：本组源码修订与作者自检已完成并冻结；待交叉独立复审、统一构建及实际阅读验收。基线 `bb18c70fb93942ffe0f00f2795e9e1d7f89c3ebe`。工作树 `D:/GitHub/Academic-ma03-numerical`。

## 范围与实施约束

仅修改 differentiation、parametric-equations、differential-equations 的英中正文及三个同名专题脚本、本记录；临时辅助放 `scratch/ma03-differential/`。不修改共享 CSS、布局、其他组、原 Academic 工作区；不 commit、push、build。保留原元数据、锚点、可靠题目及参数抛物线图；使用 reading_layout、worked-example、lesson-check。

已读本工作树 AGENTS.md、course-content-standard.md v1.1、MATH_FORMULA_GUIDELINES.md、codex-collaboration.md、Numerical Methods 样章及六篇原文、三个原测试。既有正确推导保留；优先处理先修断点、方法泄露、连续示范、反馈重试和延后回顾。

## 设计卡（先于正文修订）

| 页面 | 中心问题与可观察目标 | 精确先修与核心条件 | 表征、示范、支持与独立证据 |
| --- | --- | --- | --- |
| Differentiation | 读出最外层运算，组合求导法则，再用导数解释直线及驻点 | AS differentiation #l06（幂函数、点斜式）、#l07（符号与驻点）；A2 exponential #natural-logarithms；trigonometry #inverse-trigonometric-functions。弧度、原定义域、局部可导、除数非零 | 原 E1–9 保留并完整分界；在 E3 首次计算复合指数导数前公开解释链式步骤，随后复合函数段继续展开；保留旧锚点。中性 Q1–8，新增未标方法混合任务、针对规则/隐式条件/反三角分支的重试及延后题 |
| Parametric equations | 参数值→同一点→轨迹限制与方向→对 x 的变化率→直线与驻点 | AS coordinate geometry #l04；A2 differentiation #composite-functions、#tangents-normals-and-stationary-points；trigonometry #trigonometric-identities。保留参数区间、dx/dt 非零条件，0/0 不直接判型 | 原参数表和带方向图留在示范；独立任务用新的参数化，不能从旧图抄箭头。原 E1–8、Q1–6 保留，中性题名；补反向构造、一般点切/法线独立证据，图表解释、异常导数与方向重试 |
| Differential equations | 从变化规律建立可实现模型，再分离、用条件定常数、验证及解释预测 | integration #power-integrals、#exponential-logarithmic-integrals；partial-fractions #method；differentiation #composite-functions。分离前查常数解、原方程定义域、初值选支，比例常数与积分常数区分 | 原 E1–6、Q1–6 保留。核心步骤公开，补“速率决定 k”的连续示范；数据明示自拟。独立模型需判断适用区间、方向、单位，针对失解/分支及模型常数的独立新重试和延后任务 |

## 逐目标证据表（设计定位；完成后逐项复核）

| 目标与官方条目 | 先修与回补入口 | 讲解、示范 | 独立产出 | 判断、错误与恢复 |
| --- | --- | --- | --- | --- |
| D1 P2.6：组合标准、乘积、商、链式法则 | AS #l06；本页 #standard-derivatives、#composite-functions | E1–5；完整 outer→inner→product 过程 | Q1–4；#check-mixed | 两项及内层因子完整、定义域；#retry-rules |
| D2 P2.6＋AS：倒数导数、切法线和显式驻点 | AS #l06/#l07；本页 #tangents-normals-and-stationary-points | E6–7 | Q2、Q5–6；#later-review | 同一点、m=0 单独处理、分类理由；#retry-geometry |
| D3 P2.6：隐式及一般点切法线 | D1；#implicit-functions | E8 逐项、收集、一般点无除法直线 | Q7；#check-mixed | xy 两项、y 链式因子、分母/点合法；#retry-geometry |
| D4：反三角导数的推导与复合应用（由 P2.4/P2.6 支持，不另称显列必考清单） | #inverse-trigonometric-functions；隐式求导 | E9 主值与符号；arccos/atan 补完整分支依据 | Q8；#later-review | domain 与 derivative domain 区分；#retry-inverse |
| P1 P2.3：两方向转换、保留轨迹范围和方向 | 代数、#trigonometric-identities | E1–4、From Cartesian to parametric | Q1–2；#check-curve | 方程＋区间＋方向；#retry-trace |
| P2 P2.6：参数导数、切/法线（含一般点）及再交点 | #composite-functions；#tangents-normals-and-stationary-points | E5–7 | Q3、Q6；#check-general | 同参数坐标、比率、法线方向、排除原根；#retry-tangent |
| P3 P2.6＋AS：驻点与退化情形 | AS #l07；#parametric-differentiation | E5、E8；dx/dt、dy/dt 分支 | Q4–5；#later-review | 按 x 增大比较；0/0 回原曲线；#retry-tangent、#retry-trace |
| E1 P2.8：分离、积分、通解/特解、检验 | 积分三入口及 #method | E1–3 | Q1–2；#retry-solution | +C、绝对值、常数解、符号与原定义域；#separable-variables/#using-a-given-condition |
| E2 P2.8：文字→模型→两种常数→物理范围 | 比例、单位、#forming-a-model | E4 与新增速率定常数示范 | Q3–4；#retry-model | 自变量、正负、k 单位、初值、有效区间；回模型示范 |
| E3 P2.8＋P2.5：指数增长衰减、预测及模型限制 | #natural-logarithms；#natural-growth-and-decay | E5–6 | Q5–6；#later-review | 精确 k、剩余/减少量、模型假设；#retry-model |

## 来源身份和实读边界

- 当前资格页：<https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/> 。本轮只针对 9660/MA03；不自动迁移 9760。
- 大纲：<https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf> ，PDF 正文核到 9660、Version 5.2、36 页；P2.3（印刷 p22）、P2.6（p23）、P2.8（p24）。参数/隐式二阶导数不要求。反三角导数保留作既有推导，不能伪称 P2.6 独立枚举要求。
- 实读官方出版物的镜像：<https://aqamat.alevelclouds.com/25_01_QP_P2.pdf> 和 <https://aqamat.alevelclouds.com/25_01_MS_P2.pdf> 。QP 32 页、MS 22 页，January 2025，9660/MA03，QP 120 分。读取本任务 scratch/ma03-geometry-proof 缓存，不改其文件。相关 QP p6–7 Q3、p20–21 Q11、p23 Q12(b)、p24–25 Q13；MS p7、p17、p19、p20。网页截图镜像请求失败后，已用本地 PDF 渲染并实看 QP p6、p7、p20、p23、p24 与 MS p7、p17、p19、p20 的公式；其余上述页面依据正文提取阅读，不声称逐页图像验收。渲染件仅保存在本组 scratch/ma03-differential/。页面不搬运官方题，也不将自拟检查点包装成官方分值。
- Q3 对照保留内层导数、乘积两项、商的顺序及要求的因式形式；Q11 保留隐式链式/乘积、收集导数、驻点条件和回代；Q12(b) 保留分离的两个积分、积分常数、代入条件、解出指定变量；Q13 保留两个参数导数、dy/dx、同一点坐标、直线方程及消参过程。具体官方分值仅用于理解其原题，不分配给本课自拟题。

## 验收边界

已执行：每道新答案先独立推导，再作数值/代数核算；保留并扩展三个原脚本的数学校验；检查双语英文题干、公式、条件、帮助、旧锚点与单题边界。构建、最终生成 HTML、桌面/手机、键盘、MathJax 真实渲染由主代理统一；不使用旧 _site 声称新正文已验收。学生试用未进行；作者自检不能代替交叉独立复审。

## 实际完成与作者自检发现

- Differentiation：保留 E1–9、原八题及所有旧锚点，题名改为中性编号；E3 先展示内层速率再连续用乘积法则，E8 补收集步骤与一般点直线，E9 说明主值与导数定义域。新增未指定法则的混合任务、规则/竖直切线/反三角分支的新重试及延后复习。圆的竖直切线最终改用局部 x(y) 推导，不在该点套用假设 dy/dx 有限的公式；三次函数拐点同时核查一阶导数符号与二阶导数变号。
- Parametric equations：保留 E1–8、原六题、原参数表与 SVG。新任务要求从表生成不同轨迹、保留范围与方向，并反向构造参数式；一般点切线/法线含特殊值，法线解答用已教的负倒数、点斜式连续推导，避免只在解答中引入向量先修。重试涵盖左半椭圆、x 随参数反向变化和 0/0；延后题连接自交轨迹、水平/竖直切线及同一点的直线。
- Differential equations：保留 E1–6 与原六题；公开分离变量的链式依据，新增“速率定 k、初值定 C”的完整排水示范。原堆积模型增加单位与外推条件任务；重试分别检查原方程边界/负分支/常数解和非指数平方速率模型，延后题建立相对室温的模型并判断不可达温度。排水、堆积、增长/衰减均区分数学解、正量/方向与物理规则保持的条件。纠错措辞只说明指数模型有恒定半衰期，不将其写成所有速率模型的无条件分类定理。
- 主代理预检指出的公式拆分、空格及顺序差异已对齐；没有删除必要帮助。当前全篇英中 TeX 序列完全相同：Differentiation 348 项，Parametric equations 387 项，Differential equations 390 项。计数用于对齐检查，不代表课程质量或目标覆盖已经通过独立审查。
- 每个独立题块各有一个标题、两个默认关闭且互不嵌套的提示/解答；恢复题位于旧 solution 之外，延后任务有稳定 #later-review。当前分别 13、11、9 个题块是按目标缺口形成，并非统一题数模板。

## 已执行检查与可复验命令

以下均在本工作树执行，不访问原 Academic dirty 课程稿，不 commit/push/build。

```powershell
node scripts/test-differentiation.js --source-only
node scripts/test-parametric-equations.js --source-only
node scripts/test-differential-equations.js --source-only
```

三条均退出 0。保留原数学校验并增加至 32 组显式函数导数、一般隐式椭圆的切向核验及驻点/分支边界；参数章节核验双向参数式、轨迹坐标、一般切法线、反向参数分类及自交；微分方程核验 16 组解族及原方程、初值、速率、预测、有效区间和不恒定减半时间。数值差分用于发现计算错误，正文的推导与范围依据仍需独立复审。

三个脚本同时检查双语英文题干与条件、全篇公式序列、锚点序列、单题边界、默认折叠、无控制字符/替代字符。移除旧的固定全页 disclosure 数量，默认模式改为按源文件题块/表格/锚点检查英中生成 HTML；统一构建后请去掉 --source-only 再运行，当前未把旧 _site 当新页面证据。

另已只读比较 bb18c70 的中文显式旧锚点，六页均保留；本组页内跳转、先修/下一步 Markdown 目标和源文件锚点均存在（包括英文自动标题 Method → #method）。此项是源链接检查，仍需构建后核实实际 URL/HTML id。

## 交接与未验收项

本组冻结文件：六篇分配正文、三个分配专题脚本、本实施记录，共十个交付文件；临时脚本与 PDF 渲染在本组 scratch，不作为课程资产。未修改共享 CSS、布局、其他组文件或原工作区。当前分支上其他组修改由主代理管理，本记录不归属或回滚它们。

仅作者自检完成；交叉独立复审尚未完成。主代理统一 Jekyll build 后须运行默认专题脚本、test-pure-consistency 与适用共享检查，再实看英中桌面/手机、公式、图像、键盘、提示/解答边界与语言切换。已找到本机 npm 缓存中的 Markdown-lint CLI，无需安装；对六篇正文与本记录执行仓库配置检查，退出 0。本组 diff 空白检查亦通过。学生试用未进行，不能声称学习效果已经验证。


## 渲染反馈修订与最终冻结

主代理技术验收发现新增行内 ASCII 导数撇号会被 Kramdown smart quotes 变成弯引号，属于实际渲染缺陷。按用户明确回修授权，仅在本组六页数学块内将 ASCII 撇号写为显式 TeX 上标：一阶使用 `^{\prime}`，二阶原有 `^{\prime\prime}` 保留；英文普通撇号不变。Differentiation 每种语言各替换 29 个导数撇号，Differential equations 各 7 个；Parametric equations 无需替换，仍纳入六页扫描。同步处理函数、复合表达式和速率符号，未改变数学含义、帮助、条件或题目。

修订后三个 `--source-only` 专题脚本再次全部退出 0；全篇英中数学序列仍分别为 348、387、390 项且逐项一致；六页数学块不存在 ASCII 导数撇号或弯引号。未改三个专题脚本及原 prime 渲染断言，未改共享 smartquotes 配置。此次仅源码修复完成；新生成 HTML 的 prime 断言及实际 MathJax 阅读仍需主代理统一构建后验收，不将 source-only 结果当作渲染已通过。

以下为修订后重新冻结的九个正文／专题脚本 SHA256；本实施记录的最终 hash 由交接消息另报，避免自引用。独立内容复审仍由分配的复审者完成。

| 文件 | SHA256 |
| --- | --- |
| `alevel/a2-mathematics/differentiation.md` | `b4e0a6f0183f114e86de3c1136b046a9e076bc3a29a4dec97076eaead02a7d10` |
| `alevel/a2-mathematics/parametric-equations.md` | `7add90f30eed90b8c61a0b6dd1195bfba3b0486333592848c5c8106931d66637` |
| `alevel/a2-mathematics/differential-equations.md` | `6599ea0ae0b3cfa7bf79052987abafbc0dc1237ae0f02899aaa0ac504601579e` |
| `zh/alevel/a2-mathematics/differentiation.md` | `80b2f212a2f69c27f8c832a298fc8ae9ab5fc098c05de017b1ef79f5b8186ed2` |
| `zh/alevel/a2-mathematics/parametric-equations.md` | `ff2a0e39ea5e7337b0bdfd7e5216a8b34226b079b4c4a18bd7ae15652c8419b9` |
| `zh/alevel/a2-mathematics/differential-equations.md` | `46389cbb6d82eca2fbe0861edb6642a6edac2ea4c1b54612096ad72b4cfa7188` |
| `scripts/test-differentiation.js` | `58a13b1dbbd5461f555812aed6d7bff92af4666cfa2d41306cb4e47d0045929c` |
| `scripts/test-parametric-equations.js` | `deac93463f8d40bf7d9baeb92ccea26f6e5b09b712a0a3f7ad4a45dabbdb269a` |
| `scripts/test-differential-equations.js` | `9917ac91fe8bcd6cb3f34cf8f271d1880bcc30d041f416385ad8a43426134914` |
