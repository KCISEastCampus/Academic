# FM03 复数、根与极坐标：设计及作者检查

日期：2026-10-23。角色：author。基线：`d50b33b9fb954cbcadb27ea60bff6aa17163ef67`。本记录先于本组正文改动建立；以下是设计，不是验收通过声明。

## 范围和依据

只修改 roots-and-polynomials、de-moivres-theorem、polar-coordinates 三课的英文／中文 Markdown 及本记录。遵循 AGENTS.md、课程内容长期标准 v1.1、公式规范、2026-10-23 主审及 calculus-complex 附录。复用已接受一阶样章的 `reading_layout`、连续公开 `worked-example` 和有边界的 `lesson-check`，不修改共享 CSS、脚本或入口；不 build、commit、push。

真实学生反馈来自已接受的一阶积分因子样章：结构改善，中间积分不能跳步。本组三课尚无学生试用或保持证据。旧审计和旧来源读取不能充当本轮独立审查。

**2026-10-23 用户后续澄清：**“所有积分不跳步”限定在一阶微分方程章。本组三章保留对应官方 MS 的关键方法、适用条件与得分步骤；常规积分可合理压缩，不要求每个常规运算逐行展开。下列初始设计卡中的“每一步积分”等表述按此修正执行。已写且有助理解的拆项、系数与代限保留，不再为每个公式族机械重复扩写。自拟题按官方同类方法核查，教学检查点不冒称官方分值。

## 设计卡（正文前）

### Roots and polynomials

中心问题：不逐个求根，如何从系数获得根的信息；何时可推出共轭根？先修回补：新版 AS complex-numbers-and-roots 的 model／conjugate／roots；AS algebra 的因式定理、除法和二次方程；A2 微分的单调与驻点。保留系数展开、变换根、实根数和复系数反例的完整示范。补一处学生解释中间推理的暂停；把复系数误用共轭后的重试改为新的复系数反例，保留原有效三次式综合题作为延后回顾。后续在 De Moivre 官方 Q8 后回访根与系数，在本课给出实际任务。

### De Moivre

中心问题：同一复数的代数、辐角和几何表示怎样支持整数幂、全根、三角恒等式与积分？先修：AS geometry／conjugate，归纳法 method，和差角及三角积分、指数积分。首次证明和示范保持连续公开；补齐负幂的非零条件、根式化简和每一步积分。Q3 增加纸笔实际作图及标注要求；新增整数幂英文证明、复平方根推精确值、虚部定积分独立任务。遗漏辐角重试明确要求除以前的枚举和不同／重复的论证。完成 polar 后回本课进行实际根与面积连接任务；不凭任务存在宣称保持。

### Polar coordinates

中心问题：先判断哪些射线和边界组成区域，再列哪些积分？先修：AS geometry、二倍角、逐项积分、定积分和换元。保留 9665 的正半径约定、既有示范和无障碍图注；补公共区域两个分段及所有面积题的积分—原函数—代上下限。Q5 改为中性找全部交点及公共区域任务，保留旧锚点，不公开交点个数或极点判断。Q6–7 原题与 Q8 重绘图改编的总括一致。保留平方差的同目标重试并展开积分；设实际延后混合任务并链接回 De Moivre。

## 目标与证据表（设计）

| 目标／范围 | 精确回补 | 连续讲解／示范 | 独立产出 | 错因及重试／稍后任务 |
| --- | --- | --- | --- | --- |
| FP2.1 系数、变换根 | AS algebra 因式／二次式；AS complex roots | Roots 系数展开、E1–2 | 原 Q1–3、Q7 | 系数符号按 Q1 回补；later-review 原三次式任务 |
| FP2.1 共轭的实系数条件及全部根 | AS conjugate、roots | Roots E3–5 | 原 Q4–5、Q7 | diagnose 后新的复系数 retry，须判断条件并以和／积核验 |
| FP2.1 实根数和非实根实部界 | A2 differentiation 驻点／单调 | Roots E6 | 原 Q6 | 区分连续变号与唯一性；稍后综合根任务 |
| FP2.2 整数幂及证明 | induction method；compound-angle-formulae | De Moivre powers-and-proof、E1–2 | Q1–2；新增 Q9 英文证明 | 查归纳步／零／负幂；Q9 对应闭合检查和新角变量重试 |
| FP2.2 全根、单位根、实际几何 | AS geometry | De Moivre E3、E5–6 | Q3 画图并标坐标；Q4；Q7 | retry 必须枚举除以前辐角；later-review 新根及区域 |
| FP2.2 精确根式值 | AS roots／geometry | De Moivre E4 | 新 Q10 复平方根推出 cos(pi/8) | 符号／模长原因与同目标新分支重试 |
| FP2.2 双向三角变形及积分 | compound angles、trigonometric-integrals、exponential-logarithmic-integrals | De Moivre E7–10，完整积分拆项／复常数 | Q5–6、Q8；新 Q11 虚部定积分（教学补充） | 逆链式系数／实虚部；新定积分要求完整代限 |
| FP2.3 转换及正半径图 | AS geometry；double-angle-formulae | Polar E1–5 | 原 Q1–3、Q6–7 | 象限／定义域回补；later-review 新曲线 |
| FP2.3 全交点及分段公共区域 | 同上；definite-integrals | Polar E6、E9 | 中性 Q5 全交点、草图、分段面积 | 不用公开提示替学生检查极点；后续新区域任务 |
| FP2.3 面积、换元、平方差 | simplify-and-integrate、substitution、definite-integrals | Polar E7–9、area-between-curves | Q3–5、Q8、原 retry | 保留同目标平方差重试，展开两端代值；later-review |

## 本轮实际来源读取（2026-10-23）

- 从 [9665 当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)进入[官方 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)：FP2.1 在 PDF p.15，FP2.2–3 在 PDF p.16（印刷页 16–17）。核实实系数共轭、整数幂及证明、全根与根式、积分和 `r>0`；未迁移 9765。
- OxfordAQA **Specimen 2018**（以封面为准，URL 年份并非试卷身份）：[FM03 QP](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf) Q1 PDF p.2、Q3 PDF pp.6–7；[MS](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf) Q1 PDF p.4、Q3 PDF p.6。用于方法及作答证据核对，未把其题目新增为本组三课官方练习。
- Roots Q7：AQA 6360 MFP2 January 2006 Q2，[QP p.2](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202006%20QP%20-%20FP2%20AQA.PDF#page=2)、[MS p.3](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202006%20MS%20-%20FP2%20AQA.PDF#page=3)。网页文字乱码后，实际下载并渲染相关页，目读题干、条件、5+5 分与 MS。
- De Moivre Q7：AQA 6360 MFP2 June 2007 Q3，[QP p.2](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF#page=2)、[MS p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF#page=4)。Q8：June 2011 Q7，[QP p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20QP%20-%20FP2%20AQA.pdf#page=4)、[MS p.7](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20MS%20-%20FP2%20AQA.PDF#page=7)。本轮重读题干及配套 MS 相关页。
- Polar Q6：AQA 6360 MFP3 June 2014 Q3，[QP p.6](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20QP%20-%20FP3%20AQA.PDF#page=6)、[MS p.5](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20MS%20-%20FP3%20AQA.PDF#page=5)。Q7：June 2013 Q2，[QP p.2](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20QP%20-%20FP3%20AQA.pdf#page=2)、[MS p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20MS%20-%20FP3%20AQA.PDF#page=4)。本轮读取相关题干／MS（2014 QP 另下载核字）。
- Polar Q8：AQA 6360 MFP3 January 2009 Q3，[QP p.3](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20QP%20-%20FP3%20AQA.PDF#page=3)、[MS p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20MS%20-%20FP3%20AQA.PDF#page=4)。下载渲染目读原图，核对重绘图题意、公式、角域和原题 6 分；本页仍标改编。

局限：旧 AQA 文件为 AQA 编写、PMT 托管，部分 QP 为压缩版；不是 OxfordAQA FM03 历年卷。未宣称重读整份试卷、整本教材或所有 FM03 考季。网页／PDF读取不是本地课程 HTML 的阅读验收。

## 实施与作者检查

状态：**本组三章作者稿完成，可交主代理整合／build；未获独立内容审查或学生试用结论。** 下列检查于 2026-10-23 完成。

### 实际改动

只写以下七个文件：

- `alevel/a2-further-mathematics/roots-and-polynomials.md`
- `zh/alevel/a2-further-mathematics/roots-and-polynomials.md`
- `alevel/a2-further-mathematics/de-moivres-theorem.md`
- `zh/alevel/a2-further-mathematics/de-moivres-theorem.md`
- `alevel/a2-further-mathematics/polar-coordinates.md`
- `zh/alevel/a2-further-mathematics/polar-coordinates.md`
- 本记录。

六课均启用 `reading_layout` 与紧凑主题目录；保留全部旧标题锚点，将完整首次示范放在公开 `worked-example` 内，练习放在独立 `lesson-check` 内。提示与答案分别关闭。没有改共享 CSS、脚本、标准、AGENTS、其他组或任何 index。

Roots：先修改连新版 AS 的具体模型／共轭／根章节；增加变换根乘积的补步；把实系数条件误用后的重试改为复系数反例，要求判断条件并以根的和、积核验。原三次式任务保留为稍后回顾，并从 De Moivre Q8 反向链接。

De Moivre：补根式化简、积分关键系数与复常数计算；Q3 要求实际作图，关闭答案中给有坐标、角度及等比例坐标轴的 SVG。新增 Q9 英文整数幂证明、Q10 复平方根推出精确值和分支重试、Q11 虚部定积分补充题；它们均明标自拟、没有官方分值。遗漏辐角后的重试现在要求先枚举再除。新增根、射线、极坐标面积的稍后任务。旧 `#complex-roots` 保留，并在中英文页加 `#roots` 别名，课程综合 A 可继续链接 `de-moivres-theorem/#roots`。

Polar：新增先列区域积分的补步，保持正半径条件；Q5 改为中性找全部交点／公共区域／面积任务，不在公开标题或题干透露极点或交点个数，旧长锚点仍保留。官方 Q6–7 与 Q8 重绘图改编的身份总括一致。公共区域的分段、换元限、平方差及必要原函数保留；同错因重试和稍后新区域任务均有关闭答案。

三课均设实际稍后任务，并连至课程 `#mixed-review`、`#later-review`。这两个入口由主代理维护；最终只读链接检查时均已存在。未编辑入口。

### 数学核算及来源核对

新增／更改数学由作者另算，结果如下；这是作者核算，不是独立审查通过声明。

- Roots：复系数重试的已知根、另一根、和及积成立；错误共轭不满足原方程。稍后三次式得到 `2, 2+i, 2-i`，展开及系数成立。变换根的两两积提取与常数符号检查成立。
- De Moivre：支持任务 `v²=-4i` 的模、两辐角和根成立；四次根的坐标／辐角／SVG 位置一致。Q9 检查归纳起始、任意 k 假设、和差角连接、归纳结论及零／负整数的非零条件；未以数值采样代替证明。Q10 在含根号 2 的精确算术中检查平方差、模与正负分支，归一化余弦成立。平移正方形重试的四根及四次式展开成立。
- De Moivre 积分：逐项反求 sin⁵、cos⁴ 的原函数系数；用复倒数和实／虚部的二元系数关系检查 E10 与新 Q11，后者得 `2(e^(π/2)+1)/5`。数值积分仅作第二重数值检查。稍后立方根和为零，较小扇形为 `4π/3`。
- Polar：核对 E7 单环角域、E8 幂函数原函数、E9 两段的 π 与根号 3 系数；Q5 公共区域分段得 `π/2-1`；Q8 换元上下限 3 到 1 及面积 `13/3`；平方差重试为 `5π/2`；稍后两圆区域分成右半平面 π 与左半平面 2π，总计 `3π`，与圆面积差一致。数值积分只辅助检查解析结果。
- 另在内存运行现有 roots／de-moivre／polar 脚本的数学计算部分，均通过；没有运行依赖 `_site` 的完整脚本，不把该结果写成全套 tests 已通过。
- 官方／旧 AQA 对照按本记录上列实际读取页检查方法、条件及原题身份。自拟证明、精确值和积分使用同类方法作教学设计，不套用原卷分值。没有迁移 9765，也没有把旧读取说成本轮读取。

### 内容与技术自检

最终六页源码核对：英文／中文公式顺序逐项一致，来源 URL 顺序一致，原英文练习任务保留；全部基线标题锚点保留，当前 ID 唯一。每种语言 Roots 有 6 个公开示范／11 个任务边界／21 个关闭折叠；De Moivre 为 10／15／30；Polar 为 9／12／23。未发现嵌套任务边界、未闭合标签、默认展开答案或藏在完整示范中的答案折叠。

公式序列每种语言分别为 243、389、315 项；674 个不同公式经本地 MathJax base+ams 编译，无 `merror`。120 处内部链接解析到现有文件及锚点，包含课程两个回顾入口。六份 Markdown 只用 Kramdown 在内存转换片段检查，均零 warning，公开示范与唯一 ID 保持；顺手消除了 Roots 原内联方括号乘积造成的 Markdown 引用歧义。限定六正文的 `git diff --check` 通过。

**尚未执行／不宣称完成：**依用户分工没有运行 Jekyll build、完整站点 tests 或浏览器桌面／手机／键盘阅读验收，没有 commit 或 push。片段转换与公式编译不等同于生成站点验收。共享工作区还有其他组的并行修改，本作者未回退或接管。

**作者初次完稿时的学习验收边界：**只有此前已接受的一阶积分因子样章有用户提供的真实学生反馈。当时本组三课没有学生试用、延后保持证据或独立审查通过结论；本节为设计和作者自检。后续独立审查状态见下方补记，技术与学生验收仍需分别记录。

### 独立审查 CP1 的作者修复（2026-10-23）

按本轮独立审查反馈，仅修两语 De Moivre Q10 后的第三象限重试：公开完整英文题干，明确 `w²=1+i`、第三象限、根和单位方向两个精确输出及符号理由；原 Q10 解答改为链接 `#exact-value-retry`。新题干与原检查答案共用一个独立单层 `lesson-check`，检查答案仍默认关闭，原有数学解答保留。没有改其他四份已 freeze 正文。

作者重核：若正的两分量为 a、b，则第三象限根为 −a−ib；其平方的实部仍为 a²−b²=1，虚部仍为 2ab=1。除以模长 2^(1/4) 后得到保留答案中的两个负根式分量，模为1，符号和象限一致。两语题干、目标及关闭答案的帮助一致。此次不 build、不运行 tests、不提交；已通知主代理转 Noether 对该修复作独立复核，CP1 是否关闭以其报告为准，作者不自行宣布通过。

后续交接：已读取 Noether 的[独立审查报告](review-fm03-complex-polar-rollout-2026-10-23.md)及 CP1 关闭补记；该报告明确本次独立内容审查无遗留发现。这是对另一审稿者结论的归属记录，不是作者自称独立审查。两语 De Moivre 实际文件哈希与该报告最终快照一致：EN `d0fab622d40247de93fba81ad17e112040639f8a7d41b10e0003a67592a49e92`，ZH `b9005fa1f840ba449e98e63375202061ac4c103e4512ba7557aab642ded77d2c`。CP1 后 De Moivre 每语为16个任务边界、30个关闭折叠、393个公式片段；前文15／30／389为初次完稿历史快照。复数／极坐标作者稿现已 freeze ready，未新增 build、tests、浏览器或学生试用证据。
