# IGCSE Mathematics 9260：90 条目独立范围审查

日期：2026-10-27。**最终状态：90条官方范围与学习活动的语义覆盖审查完成，无未解决项；新增SC-1/SC-2关闭，最终结论见第8节。** 审查者只写本报告和 [entry/mixed 报告](review-igcse-entry-mixed-2026-10-27.md)，不改课源、图、作者记录、映射、测试或共享文件；不构建、不用站点浏览器、不提交 Git、不发布。

## 1. 当前范围与交接结论

用户最新明确学校只开设 **Extension 单一路线**。本审查保留 Extension 所需全部基础概念与任务，不要求制作第二套 Core 课程或跳过路线。官方双列仅在本作者／审查记录中用于来源追踪；学生正文应按基础到进阶或自然主题组织，不提供 Core 学生分流／服务声明。geometry-calculation 旧 R6 的 Core 跳过建议因需求改变撤回，不算作者修复；仍须核对单变换、组合、向量及矩阵的先修顺序。稳定锚点名含 core/extension 本身不是学生分流，不要求破坏旧链接。

**给主执行者：**90 个官方编号和初稿任务映射已逐条对照，发现集中在模型有效性、独立产出／新重试和少量映射遗漏，不能用 90/90 锚点存在宣布语义完整。其他五组已交叉审查且正在修补；以各原报告为发现主记录，本报告不复制其未关闭项。下述 SC-1 是额外确认的 units 数据可实现性问题，SC-2 是有课而映射漏指，不是最终缺课。入口原 F3 的 R1/R2 已独立重解并关闭，详见 entry 报告第 9 节；这不为所有恢复目标整课背书。

## 2. 实际已审与未审

已读 AGENTS、课程内容长期标准 v1.1、公式规范、主制作记录及五组设计记录。已实际阅读官方缓存 specification.pdf，正文身份为 OxfordAQA International GCSE Mathematics 9260 Version 5.1；逐条读取 PDF10–25 的 N1–20、A1–26、G1–26、S1–18，按原表格坐标／左右单元格判列，未把串行提取的先后当列位。PDF 页码为一基，印刷页码比 PDF 页码大 1。PDF10 明确 Extension 可考全部内容，故左列基础也全部保留。G22–26 均在右列，包含 G23/G24；G11 construct 与 interpret plans/elevations 均在左列。N9 与 S17 的交集符号按图形确认，未将提取出的伪 union 当官方错误。

已实际读取 `syllabus-coverage.json` 全部 90 条及其讲解／独立任务定位，对照全部 27 个主题的英文任务要求，并针对疑点回看概念、关闭解答及中文相应条件；不是只检查路径存在。已独立核过入口原 10 道综合／延后任务、新面积重试、独立性四格表，以及本报告列出的图形存在性、tan 图、四边形角、图表类型与份额算子见证。scope 审查未声称独立解完所有课程题目，亦未逐句对译所有中文解释。

08:23:53 的结构快照为：27 对主题均已落盘，另有入口／综合两对，共 29 页面身份、58 源；90 个 ID 恰为 N1–20/A1–26/G1–26/S1–18，无重复或缺编号；所有映射讲解／独立锚点两语言均存在；27 对主题的 390 条单行 Question 文本成对一致。这只是初稿结构证据，不是 390 题已独立重解或中译语义全部通过。制作中一度未落盘的文件不作为最终缺课。源仍在变化；最后的版本附录区分初读版与收尾版，不自动继承受改动内容的通过结论。

未审／待复核：五组最终修补后的全量语义、全部新任务与重试、所有中文讲解逐句等价、所有主题 SVG 的实际显示、最终全课程先修路线及学生可见分流清理。未运行 Jekyll、现有测试、生成 HTML、桌面／手机／键盘／语言切换或浏览器验收；未做学生试用。作者报告初建／6 tests 通过属于作者技术证据，本报告没有复跑，不能替代上述语义证据。本轮官方 QP/MS 实读范围沿用 entry 报告所列 1E Q6/Q7/Q10，不冒称独立读过其他作者列出的全部试卷题。

## 3. 本轮新增发现

### SC-1 · P2 · 两道立体缩放任务的表面积和体积不能同时成立

位置：英文 [units-area-and-volume.md](../../igcse/mathematics/units-area-and-volume.md) `#check-scale` 第414行、`#retry-scale` 第625行；中文对应 [同页](../../zh/igcse/mathematics/units-area-and-volume.md) 第416／627行（行号对应下方初读 SHA，修补后以锚点为准）。

- `#check-scale` 明确 closed solids，小者总表面积 54 cm²、体积 81 cm³、特定棱 9 cm。任何通常的闭合欧氏立体均满足 S³≥36πV²；S=54 时最大可能体积约 37.3134 cm³，远小于 81。
- `#retry-scale` 小者体积 64 cm³、表面积 40 cm²、棱 8 cm；S=40 时最大可能体积约 23.7883 cm³，远小于 64。把该立体按 3/2 缩放不能修复不存在的原模型。

独立核验：前题 k=√(96/54)=4/3，作者算出的 192 cm³／12 cm；后题 k=∛(216/64)=3/2，作者算出的 90 cm²／12 cm，**缩放算术本身正确**。问题是被缩放的对象不存在。上述不等式只用于作者数据验证，不应新增为 IGCSE 学生必考定理或解题负担。

最小修复：改用明确可实现的一对立方体／长方体，保留由面积或体积反求长度比的任务。例如前题使用边长 3／4 的立方体，总面积仍为 54／96，小体积改 27、棱改 3，学生得大体积 64、大棱 4；后题用边长 4／6 的立方体，保留体积 64／216，小面积改 96、棱改 4，学生得大棱 6、大面积 216。同步中英文题干、关闭解答、反馈和设计记录；这些只是修补建议，审查者未修改课源。

影响：G17 的首次独立证据及同目标恢复均受影响；entry `models` 的缩放恢复目标也不能因此称为整课已通过。此项与 geometry-reasoning 已记录的 G-R2 同类但发生在另两道 units 任务，不重复登记 similarity 页的原发现。

### SC-2 · P2 · 细项见证已存在，但 90 条映射没有指向它们

这是证据定位遗漏，**不是尚未制作的缺课**。若仅按当前 JSON 的 independent 数组核细项，会把以下已写任务漏掉，或错误认为一个局部任务足以代表全部细项。最小修复是在现有 evidence.teaching / independent 中加入实际见证，不需新 schema 或重复写课。

| 条目与细项 | 当前映射局限 | 已实际找到的见证／最小补充 |
| --- | --- | --- |
| N3 逆运算核验 | teaching 只指 operation-order | number-operations `#written-methods`、`#practice-arithmetic` 明确要求用逆运算检查小数乘除；与原顺序任务一起列 |
| N12 三种写法双向转换 | 样章只列 fraction→decimal/percentage 的 practice-forms | fractions-decimals-and-percentages `#retry-forms`：18%→0.18→9/50 并解释分母100 |
| N13 小数作为算子 | practice-part 不能单独代表所有写法 | 同页 `#later-check`：0.6×40=24 与 (5/8)×40=25，比人数而非只比写法 |
| A12 tan 图及定义域 | practice-trigonometric 的独立要求为 sin/cos，未指 tan 独立任务 | functions-and-graphs `#practice-tangent-graph`：−180°至360°分支、零点、渐近线、±1，tan(−135°)=1，tan270°未定义 |
| G3 四边形角性质 | 只指平行线／三角形任务 | angles-and-polygons `#quadrilaterals`、`#practice-quadrilaterals`：平行四边形68/112/68/112；筝形84+116余160，两等角80 |
| G8 半圆角 | 独立列表未列半圆专题 | circles-and-proof `#practice-semicircle`、`#retry-semicircle`；不以“定理都在同页”代替定位 |
| S4 散点图／普通条形图 | 列表不含 scatter；categories 首题为 dual/composite/pie | statistical-diagrams `#scatter`、`#practice-scatter`；`#retry-core` 已要求画普通 bar chart。旧锚点名字不代表两群体教学 |
| S8 方向与强弱完整对照 | practice-scatter 只给一种强负相关 | 同页 `#practice-patterns` 对照正／负／无线性相关／弱模式，并判断陡峭不等于强相关 |

## 4. 已有交叉审查阻断项及去重

其他五组正在修补，以下是已读报告的已确认发现范围，不代表本审查者已核过其最终修复。以各报告的最新追加复核状态为准；不能因为作者正在改而预记关闭。

| 原报告 | 当前需交回原作者／审查者的内容 | 本报告处理 |
| --- | --- | --- |
| [Geometry reasoning](review-igcse-geometry-reasoning-2026-10-27.md) | G-R1 不存在的三角形；G-R2 similarity 示例／重试立体条件；G-R3 四边形对角线独立应用；G-R4 同弓角新重试；G-R6 单路文字整理 | 本审查亦独立确认 G-R1：38°对边12而70°对边9，不可实现；不再另编号。S/ V 条件与本 SC-1 合并追踪修补范围但不混同题目 |
| [Geometry calculation](review-igcse-geometry-calculation-2026-10-27.md) | R1 变换反求完整描述／放大任务；R2 向量差数乘图示及结合律；R3 非交换次序新重试；R4 原点/原像；R5 直棱柱／正棱锥条件 | 不重复报项。旧 R6 Core 跳过建议撤回；单路先修仍待最终源核对 |
| [Statistics](review-igcse-statistics-2026-10-27.md) | R1 TeX 反斜线；R2 不等组距图及一般 percentile 新重试 | 不把同步双语错误当通过；修后由原审查者复算图形／分位任务 |
| [Algebra](review-igcse-algebra-2026-10-27.md) | A-R1 负被开方数术语；A-R2 指数 k=1 条件；A-R3 新真实情境非标准图；A-R4 指数恢复定位 | 报告仍为检查点，不能据“有 task anchor”关闭 A17 独立情境产出 |
| [Number](review-igcse-number-2026-10-27.md) | 除法大小的正量条件；面积界／反求复利率／单增配方成分后的比之匹配新重试 | 报告仍为保存点，不称最终通过 |

所有正确性及无有效独立任务的问题依长期标准属于内容交付阻断；P2 不等于可以在宣布内容完成后再修。仅映射漏指的 SC-2 可直接用已存在、有效的任务补证；不能通过缩窄 capability 字段删掉官方要求。

## 5. 90 条目逐项语义账本

下表的“对应”仅表示已读要求与现有讲解／学生任务之间存在具体能力对应，不代表该主题所有解答、重试、双语与阅读均通过。每行列出的任务定位来自初读版 JSON；第 3 节补充任务及第 4 节阻断优先，不能用本表覆盖它们。“左／右／双列”只描述官方表格来源，全部进入本课程同一 Extension 路线。

账本已完成 90/90 项对照。页面缩写仅为压缩本报告；每行任务须连同该项 JSON 的 teaching 定位阅读。`对应`不是整课通过，已确认问题及未关闭复核优先。以下采用 SC-2 修补后的 JSON（SHA256 `9894f8cb01922e3f4a82762dc572a423c771b01148f34604155316c22ac42de2`）。

[NO](../../igcse/mathematics/number-operations.md) · [PR](../../igcse/mathematics/powers-roots-and-standard-form.md) · [AB](../../igcse/mathematics/accuracy-and-bounds.md) · [RD](../../igcse/mathematics/recurring-decimals.md) · [PC](../../igcse/mathematics/percentage-change.md) · [RP](../../igcse/mathematics/ratio-and-proportion.md) · [FD](../../igcse/mathematics/fractions-decimals-and-percentages.md) · [EF](../../igcse/mathematics/expressions-and-formulae.md) · [AP](../../igcse/mathematics/algebraic-fractions-and-proof.md) · [EI](../../igcse/mathematics/equations-and-inequalities.md) · [CL](../../igcse/mathematics/coordinates-and-lines.md) · [QS](../../igcse/mathematics/quadratics-and-simultaneous-equations.md) · [FG](../../igcse/mathematics/functions-and-graphs.md) · [SQ](../../igcse/mathematics/sequences.md) · [DM](../../igcse/mathematics/differentiation-and-motion.md) · [AN](../../igcse/mathematics/angles-and-polygons.md) · [CS](../../igcse/mathematics/congruence-and-similarity.md) · [CP](../../igcse/mathematics/circles-and-proof.md) · [CB](../../igcse/mathematics/constructions-loci-and-bearings.md) · [UV](../../igcse/mathematics/units-area-and-volume.md) · [PT](../../igcse/mathematics/pythagoras-and-trigonometry.md) · [TR](../../igcse/mathematics/transformations.md) · [VM](../../igcse/mathematics/vectors-and-matrices.md) · [DA](../../igcse/mathematics/data-and-averages.md) · [SD](../../igcse/mathematics/statistical-diagrams.md) · [SP](../../igcse/mathematics/sets-and-probability.md) · [CC](../../igcse/mathematics/combined-and-conditional-probability.md)

| 条目／官方列 | 要求中的实际子能力 | 已读的学生产出锚点（页面缩写） | 判断／待复核 |
| --- | --- | --- | --- |
| N1／左 | 正负整数/小数/分数排序，数轴及比较符号 | NO：`practice-order` | 要求与任务对应；整课修补状态见原报告 |
| N2／左 | 含负数的整数、小数、真假带分数书面四则及位值 | Number原审查者已关闭除法条件项 | Number除法条件待原审查复核 |
| N3／左 | 逆运算/约分、括号、幂根、倒数及运算顺序 | NO：`practice-order-of-operations`、`practice-arithmetic` | SC-2关闭 |
| N4／左 | 奇偶、质数、因数倍数、质因数分解、HCF/LCM | NO：`practice-factors` | 要求与任务对应；整课修补状态见原报告 |
| N5／左 | 正整数幂，平方/立方/高次实根及2/3/4/5的幂 | PR：`practice-powers` | 要求与任务对应；整课修补状态见原报告 |
| N6／双列 | 乘除整数指数法则及分数指数 | PR：`practice-indices`、`practice-fractional-powers` | 要求与任务对应；整课修补状态见原报告 |
| N7／双列 | 精确分数运算、根式化简与有理化 | NO：`practice-fractions`；PR：`practice-surds` | 要求与任务对应；整课修补状态见原报告 |
| N8／左 | 标准形式及其运算 | PR：`practice-standard-form` | 要求与任务对应；整课修补状态见原报告 |
| N9／左 | 集合语言、并交补及Venn表示 | SP：`practice-sets`、`practice-venn` | 要求与任务对应；整课修补状态见原报告 |
| N10／左 | 有效使用计算器，估算核验及三角角度模式 | AB：`practice-estimation`；PT：`check-ratios` | 不声称真实机型按键已验 |
| N11／双列 | 精度、舍入、估算、单值限界及计算结果上下界 | 面积界重试由Number原审查者关闭 | 面积界重试待原审查复核 |
| N12／双列 | 分数/小数/百分数互换与循环小数转换 | FD：`practice-forms`、`retry-forms`；RD：`practice-division`、`practice-conversion`、`practice-reasoning` | SC-2关闭 |
| N13／左 | 分数、小数、百分数作算子 | FD：`practice-part`、`later-check` | SC-2关闭 |
| N14／左 | 一数量占另一数量的百分比及超过100% | FD：`practice-share`、`retry-share` | 要求与任务对应；整课修补状态见原报告 |
| N15／双列 | 增减、单复利、逆百分数及复利公式 | 反求利率重试由Number原审查者关闭 | 反求利率重试待原审查复核 |
| N16／左 | 比的记法、化简及分数联系 | RP：`practice-sharing` | 要求与任务对应；整课修补状态见原报告 |
| N17／左 | 按给定比分配总量 | RP：`practice-sharing` | 要求与任务对应；整课修补状态见原报告 |
| N18／左 | 用比解决问题，辨别改变成分后比例 | 单增成分新重试由Number原审查者关闭 | 单增成分后比例重试待原审查复核 |
| N19／左 | 工资、单位率及最合算比较 | RP：`practice-rates` | 要求与任务对应；整课修补状态见原报告 |
| N20／双列 | 正反比例、重复比例变化及指数增减 | RP：`practice-models`、`practice-growth` | 要求与任务对应；整课修补状态见原报告 |
| A1／左 | 字母表示一般数与算术过程 | EF：`practice-language` | 要求与任务对应；整课修补状态见原报告 |
| A2／双列 | 代入、改变主项及主项出现两次的复杂公式 | EF：`practice-substitution`、`practice-rearrange`、`practice-twice` | 要求与任务对应；整课修补状态见原报告 |
| A3／左 | 式/方程/公式/恒等式/不等式、项与因子 | EF：`practice-language` | 要求与任务对应；整课修补状态见原报告 |
| A4／双列 | 合并同类项及两/三个二项式展开 | EF：`practice-expansion`、`practice-three` | 要求与任务对应；整课修补状态见原报告 |
| A5／双列 | 公因子、二次式分解及平方差 | EF：`practice-factors` | 要求与任务对应；整课修补状态见原报告 |
| A6／双列 | 整数及分数指数的代数法则 | PR：`practice-indices`、`practice-fractional-powers` | 要求与任务对应；整课修补状态见原报告 |
| A7／双列 | 数值分母及一次/二次代数分母的分式四则 | AP：`practice-numeric`、`practice-fractions` | 要求与任务对应；整课修补状态见原报告 |
| A8／双列 | 等价表达、一般论证及代数证明 | AP：`practice-argument`、`practice-proof` | 要求与任务对应；整课修补状态见原报告 |
| A9／双列 | 机器/函数规则、正式记法、域值域、复合与反函数 | FG：`practice-machine`、`practice-domain`、`practice-composite`、`practice-inverse` | 要求与任务对应；整课修补状态见原报告 |
| A10／左 | 四象限二维坐标 | CL：`practice-points` | 要求与任务对应；整课修补状态见原报告 |
| A11／双列 | 直线图/斜率/截距/平行、过点方程及垂直关系 | CL：`practice-lines`、`practice-equation`、`practice-perpendicular` | 要求与任务对应；整课修补状态见原报告 |
| A12／双列 | 线性/二次/简单三次/倒数、正底指数与任意角sin/cos/tan | FG：`practice-families`、`practice-exponential`、`practice-trigonometric`、`practice-tangent-graph` | SC-2关闭；k=1条件待原审查复核 |
| A13／右 | 先化简，非负整数幂多项式微分 | DM：`practice-derivative` | 要求与任务对应；整课修补状态见原报告 |
| A14／右 | 由导数求一点的切线梯度/方程 | DM：`practice-tangent` | 要求与任务对应；整课修补状态见原报告 |
| A15／右 | 驻点极大/极小/拐点判断并画草图 | DM：`practice-stationary` | 要求与任务对应；整课修补状态见原报告 |
| A16／双列 | 因式/根/截距、二次草图与配方顶点 | QS：`practice-roots`、`practice-graph`、`practice-square` | 要求与任务对应；整课修补状态见原报告 |
| A17／双列 | 真实情境非标准图、近似解、直线/曲线变化率及曲下面积 | FG：`practice-context`；DM：`practice-motion`、`practice-estimates` | 真实情境独立图A-R3待复核 |
| A18／右 | 用字母关系式表达正反比例 | RP：`practice-variation` | 要求与任务对应；整课修补状态见原报告 |
| A19／左 | 解线性方程及图像近似解 | EI：`practice-equations`、`practice-graph` | 要求与任务对应；整课修补状态见原报告 |
| A20／双列 | 因式、图解、配方、公式解二次方程 | QS：`practice-roots`、`practice-graph`、`practice-square`、`practice-formula` | 英文负被开方数术语A-R1待复核 |
| A21／双列 | 联立线性及直线-二次关系，用代数及图解 | QS：`practice-simultaneous`、`practice-line-curve` | 要求与任务对应；整课修补状态见原报告 |
| A22／左 | 从情境建方程并解释可接受解 | EI：`practice-model`；QS：`practice-model` | 要求与任务对应；整课修补状态见原报告 |
| A23／双列 | 解集/数轴端点、二维区域及二次不等式 | EI：`practice-inequality`、`practice-region`、`practice-quadratic` | 要求与任务对应；整课修补状态见原报告 |
| A24／左 | 递推与按位置规则产生数列 | SQ：`practice-rules` | 要求与任务对应；整课修补状态见原报告 |
| A25／双列 | 三角/平方/立方/等差及二次数列识别 | SQ：`practice-families`、`practice-quadratic` | 要求与任务对应；整课修补状态见原报告 |
| A26／双列 | 线性及二次数列的第n项 | SQ：`practice-linear`、`practice-quadratic` | 要求与任务对应；整课修补状态见原报告 |
| G1／左 | 点线顶点棱面、平行垂直、正多边形与角边记法 | AN：`practice-notation` | 要求与任务对应；整课修补状态见原报告 |
| G2／左 | 周角/平角/直角及对顶角 | AN：`practice-angles` | 要求与任务对应；整课修补状态见原报告 |
| G3／左 | 平行相交线、三角形和四边形的角性质 | AN：`practice-angles`、`practice-triangles`、`practice-quadrilaterals` | SC-2关闭 |
| G4／左 | 多边形内外角和、正多边形中心角 | AN：`practice-polygons` | 要求与任务对应；整课修补状态见原报告 |
| G5／左 | 六类特殊四边形定义、边角及对角线性质 | AN：`practice-shapes` | 对角线独立应用G-R3待复核 |
| G6／左 | 平面图形的轴对称及旋转对称 | AN：`practice-shapes` | 要求与任务对应；整课修补状态见原报告 |
| G7／双列 | 全等/相似辨别、对应长度及三角形全等条件 | CS：`practice-lengths`、`practice-proof`、`practice-conditions` | 三角形修补取样正确，原报告最终复核另计 |
| G8／双列 | 圆各部分术语和全部八项圆定理应用条件 | CP：`practice-labels`、`practice-angles`、`practice-tangents`、`practice-chord`、`practice-alternate`、`practice-semicircle`、`retry-semicircle` | SC-2关闭；同弓角新重试G-R4待复核 |
| G9／右 | 用圆定理构成证明 | CP：`practice-proof` | 要求与任务对应；整课修补状态见原报告 |
| G10／左 | 立方/长方/柱/圆柱/锥/球等立体性质 | UV：`check-solids` | 直棱柱/正棱锥条件R5待复核 |
| G11／左 | 构造并解释平面图及立面图 | UV：`check-views` | 要求与任务对应；整课修补状态见原报告 |
| G12／左 | 尺/量角器、比例尺图、八方位及三位方位角 | CB：`practice-map`、`practice-bearing` | 要求与任务对应；整课修补状态见原报告 |
| G13／左 | 尺规垂直/角平分/60°、轨迹及最短垂距 | CB：`practice-tools`、`practice-locus` | 要求与任务对应；整课修补状态见原报告 |
| G14／左 | 长面积体积、质量容量、12/24时、货币、速度密度单位 | UV：`check-units`、`check-rates` | 要求与任务对应；整课修补状态见原报告 |
| G15／左 | 三角/平行四边/梯形面积及等截面柱体V=Ah | UV：`check-flat`、`check-prism` | 要求与任务对应；整课修补状态见原报告 |
| G16／双列 | 圆/复合平面、球锥/复合立体和两类锥台外表面积/体积 | UV：`check-flat`、`check-composite`、`check-frustums` | 要求与任务对应；整课修补状态见原报告 |
| G17／右 | 相似图形/立体的长度、面积及体积尺度 | SC-1已独立关闭；similarity三段修补取样正确 | SC-1未关闭；similarity三段修补取样正确 |
| G18／右 | 弧长、扇形角及面积 | UV：`check-sector` | 要求与任务对应；整课修补状态见原报告 |
| G19／双列 | Pythagoras和三种直角三角比，二维及三维 | PT：`check-right`、`check-ratios`、`check-space` | 要求与任务对应；整课修补状态见原报告 |
| G20／右 | 正弦/余弦定理及½absinC，反求边角 | PT：`check-any`、`check-area` | 要求与任务对应；整课修补状态见原报告 |
| G21／双列 | 执行并完整描述单变换，组合及分数/负比例放大与不变量 | TR：`check-single`、`check-description`、`check-enlarge`、`check-order` | 完整反求描述等R1/R4待复核；不要求Core绕行 |
| G22／右 | 向量和差数乘的计算/图示、交换/结合及二维证明 | VM：`check-vectors`、`check-proof` | 差/数乘图示及结合律R2待复核 |
| G23／右 | 2×2乘2×2/2×1及标量乘矩阵 | VM：`check-products` | 要求与任务对应；整课修补状态见原报告 |
| G24／右 | 2×2单位矩阵 | VM：`check-products` | 要求与任务对应；整课修补状态见原报告 |
| G25／右 | 单位方形的90/180/270°旋转、四镜线反射及原点放大矩阵 | VM：`check-square` | 要求与任务对应；整课修补状态见原报告 |
| G26／右 | 矩阵组合次序及不交换 | VM：`check-composition` | 不交换次序新重试R3待复核 |
| S1／左 | 离散/连续及定量/定性数据 | DA：`practice-data` | 要求与任务对应；整课修补状态见原报告 |
| S2／左 | 频数表、分组及归类 | DA：`practice-data` | 要求与任务对应；整课修补状态见原报告 |
| S3／左 | 双向表及合计 | DA：`practice-table` | 要求与任务对应；整课修补状态见原报告 |
| S4／双列 | 全套规定图表，含不等组距histogram/CF/box及scatter | SC-2关闭；Statistics原审查者已关闭R1/R2 | SC-2关闭；TeX/不等组距重试待原审查复核 |
| S5／双列 | 均值/中位/众数/众数组/极差，四分位/IQR/百分位 | Statistics原审查者已关闭R1/R2 | TeX/一般百分位重试待原审查复核 |
| S6／左 | 用表图表达、比较数据并解释 | SD：`practice-scatter`、`practice-box` | 要求与任务对应；整课修补状态见原报告 |
| S7／左 | 用集中及离散统计量比较分布 | DA：`practice-averages`、`practice-quartiles` | 要求与任务对应；整课修补状态见原报告 |
| S8／左 | 正/负/无及强弱相关、目测拟合与局限 | SD：`practice-scatter`、`practice-patterns` | SC-2关闭 |
| S9／左 | 概率词汇及0到1尺度 | SP：`practice-model` | 要求与任务对应；整课修补状态见原报告 |
| S10／左 | 概率模型、相对频数和预期频数 | SP：`practice-experiment` | 要求与任务对应；整课修补状态见原报告 |
| S11／左 | 比较试验/经验与理论概率 | SP：`practice-experiment` | 要求与任务对应；整课修补状态见原报告 |
| S12／左 | 重复试验的变异 | SP：`practice-experiment` | 要求与任务对应；整课修补状态见原报告 |
| S13／左 | 样本量对估计及抽样偏差局限 | SP：`practice-experiment` | 要求与任务对应；整课修补状态见原报告 |
| S14／左 | 一/两事件样本空间及等可能计数条件 | SP：`practice-space` | 要求与任务对应；整课修补状态见原报告 |
| S15／左 | 互斥/穷尽及概率总和1 | SP：`practice-events` | 要求与任务对应；整课修补状态见原报告 |
| S16／左 | Venn表示事件与概率 | SP：`practice-venn` | 要求与任务对应；整课修补状态见原报告 |
| S17／右 | 独立事件联合概率及树图 | CC：`practice-independent`、`practice-tree` | 要求与任务对应；整课修补状态见原报告 |
| S18／右 | 不放回与条件概率的分母更新 | CC：`practice-dependent`、`practice-conditional` | 要求与任务对应；整课修补状态见原报告 |

本账本没有发现整项官方编号完全无设计指向的最终缺课；但 SC-1 与五组已有发现说明，**90/90 有设计映射不等于 90/90 已有有效、完整、闭环的学习证据**。最终范围／活动完整性尚不能通过。复核工作集中在已定位缺口、新题及受改动内容，不要求再次独立算全课程所有题。
## 6. 修补复核与本次最终交接

本节更新第 1–4 节的发现状态，保留原问题与最小修复历史；第 5 节是完整 90 条账本，亦以本节当前状态为准。

- **SC-2：关闭。** 已实际重读最新 JSON（SHA256 `9894f8cb01922e3f4a82762dc572a423c771b01148f34604155316c22ac42de2`）的 N3/N12/N13/A12/G3/G8/S4/S8，八处补充均与本报告找到的真实 witness 相符；再次定位两语言正文／关闭解答，检查任务确实调用相应子能力。90 项全部 teaching / independent 锚点两语言均可定位。没有把“锚点存在”单独作为关闭理由。JSON 仍明确 Extension 单路、final-source review pending，未越级宣称整课通过。
- **SC-1：关闭本项数学与双语问题。** 作者已经将 units 两题改为立方体。已重读四个中英题段及各自关闭提示／解答，独立核算：首次面积比 96/54=16/9，长度比4/3，3→4 cm、27→64 cm³；6×3²=54、6×4²=96。重试体积比216/64=27/8，长度比3/2，4→6 cm、96→216 cm²；4³=64、6³=216。条件全部可实现，量纲正确，216 cm² 与216 cm³仅数值相同。此处复核不是采信作者完成声明。Hilbert 对 Geometry calculation 的整组 R1–R6／SC-1 最终复核仍由其报告记录，本报告仅关闭实际重读的这两题。
- **已记录相似页修补取样。** G-R1 当前改30°/90°/60°、直角边6√3及6，斜边12，确可实现；对应边比1/2，UV=3 cm。G-R2 示例4×2×1→10×5×2.5，S28→175、V8→125；重试9×6×3（S198,V162）→6×4×2（S88,V48），两者均实算相符。这里只核这三段，不替原审查者关闭四边形／圆重试等其他问题。
- **单路要求。** 收尾58源的学生可见文字检索未留 Core 群体分流，入口、综合及样章承接段已人工复读；基础课与全部原映射仍在，G22–26右列来源记录没有被用来删先修。矩阵入口现要求带符号乘法、坐标和单变换，transformations先单变换再组合，下一步接向量矩阵；旧R6不再要求Core绕行。仅靠检索不能证明全课程每条先修均充分，五组的最终语义复核仍独立承担。
- **其他五组的当前交接。** Statistics 的最终独立报告已明确 R1/R2 关闭，8源SHA与本次收尾快照一致；其结论归该审查者，不写成本审查者重解所有统计新题。Number 原审查者现已声明四项复核关闭，不继续称四项仍未修，也不把其报告以后补表或追加文字作为本审查条件。Algebra及两个Geometry在本次读取时的最终变更复核由各原审查者承担；本审查没有替他们复算所有修补题。第4节与账本里的“待复核”是交接位置，不能把已修源重新报成数学仍错。

**本轮90条实际结论：**官方左右列及其细项已逐条对照设计与任务，未发现整项没有设计指向的最终缺课；本审查新增 SC-1/SC-2 均已在所读修补版关闭，当前未留本审查新增未处理发现。范围映射审查可按本边界交接；本审查未替五组复算所有最终修补任务，不能据此宣布全课程学习活动、恢复闭环及双语全部通过。原交叉发现应落实为实际源中的有效修补，报告关闭记录可随后追加，不需与本报告互锁；技术阅读和学生证据另行验收。无需重做全课程逐题求解；只复核既有缺口与受改动任务。

本报告及entry报告可作为本次范围审查冻结交接件；冻结的是记录与所列字节版本，不阻止作者按真实发现修补源。作者源继续变化时，只继承未受影响证据。

## 7. 版本证据

### 初读语义对照版本（2026-10-27T08:23:53.863945，Asia/Singapore）

以下为第2–5节初始语义对照的27对源，列值为完整文件SHA256。页面名在第5节已链接；EN前缀为 `igcse/mathematics/`，ZH前缀为 `zh/igcse/mathematics/`。不以后来大批移除分流文字后的新SHA冒充旧发现当时的源。

| 页面（.md） | EN SHA256 | ZH SHA256 |
| --- | --- | --- |
| accuracy-and-bounds | `ea19c4284114a2eaf88753406c9a04bfe49920e4a6d5312bcfd16460bf1ff09a` | `3b8fb54b58d2766cfe2a8457fcac91fc888733a1927ea4f007047b9da4f930bf` |
| algebraic-fractions-and-proof | `cdc58f67b12799c0cde6672db909645418c4f58c168f4c61990cf884e9a0e18e` | `e1f7c80231cb242b0506e58f55122d7124126e6d57dddaac563353692f73d424` |
| angles-and-polygons | `8d7706991e39fe6533c1e8482c2e50a188b4c1bafbb21d341ecc679637fc4090` | `56d824bf370dc3cb4958127eb3beb0fb7f5b3b6634e2c36dffa1a6b1732767a0` |
| circles-and-proof | `d6ed2fbcc8e687a34a218bdfdb17c030fb562818c1f554d8d34711d0f9572bde` | `646cd57eddbf11d770c1cdc8216fc13e940dba1c2ec9b7907ec908e3713f515f` |
| combined-and-conditional-probability | `8c63d60914ef3b3095095756593bade651978885825bfb36ea90709c616c63ef` | `27cf3f7c6fa14ead5f7efabfb4f8cce88932cd445b58e79853fa0c6022c28ec4` |
| congruence-and-similarity | `c1af5c375e19817a626abab9c1a382a23324f6f808b782b99dc959372a025b37` | `e3d465f8b9b0bb64296310c73ccd59b1475bbad8de3bc1d310c886f4b75f3727` |
| constructions-loci-and-bearings | `e863a9ebdad55e0a89de73e0704157911c7e7bbf5d3890d67d61060d68125c85` | `d81c84aea13127eb67cd472cb30dee83299e40894c97d7fd6d85be7c2c91902c` |
| coordinates-and-lines | `242b0d07fb0c81ece7de14703d42f44ebf4659590e048af4c63d6ba754701537` | `2ba4f5bdd4d3bf6a7570929afc6c07260b48d68261fb937fe7ee135851b576c4` |
| data-and-averages | `165b29a38a9358b0b3ae78bb613ff3e49e924bb8295709e9dc9dec4e3556d30b` | `f41d07eeb9a576bf61a20e7c56a5038d0095adf938d2236cd6198a37ddf6982f` |
| differentiation-and-motion | `01f16102346ddf2fb3e6e0e53ebf15e98bbdd7939a4906cd9b07441ec976288a` | `dd4b4c38285649d8cb69bc7f24a45ca29593889f60fa27c3d18f8371379dafde` |
| equations-and-inequalities | `fc1a9893ac6625721485d2a458eaf261d0ae676c9f97454cda656cc531adf08d` | `02b574082abf51fc763f4f3d399f9443b8cb6374e65ae5b90144cf7a22b2d21e` |
| expressions-and-formulae | `a71f976ea2f94c30e1640cb5bf53da0ce0a5834b497c66ea34331635d5f47788` | `896af6f58da2a4c770582b0f7a8382ab000e492ff71af3a4c1cc3fff8e8902d0` |
| fractions-decimals-and-percentages | `b57e5450259515745b5b22c9fd02b58fca450c7650b3ef21af73284e59b079b2` | `b1ba45fb1941ad73e765d1c901b8d0ba7c7f40956ff077b6da89c523d32ae0ff` |
| functions-and-graphs | `14471bb305fd5569518b684c79916e8ec5c827e94bc287780dc50d39c9958a87` | `5a8b84e7c974f879e26b090c247725fa1a654a65b2dbdde53bf479748966e679` |
| number-operations | `339fe531b571814c968fcd12e756f0752965fa1378dfef1597f92658138cdcd2` | `603d0f6f47c199cb40a284d59ca9f863f5e6ed328deb01455d33dc6964558900` |
| percentage-change | `59891c3a50a2fcf34481dd800ac14e565cf07ce43edab2cff7444bbf05bbfa5a` | `86013c7e4afe072b16cc6bf20b4fd0fbeed578651d6e396f902b114e344894a7` |
| powers-roots-and-standard-form | `79cdc2f58171da5541452335617ef2a1c2dc7559d7e79a71031bc3d3eb5b3097` | `0f84c5cca1bd16655c045561d01cabd446bb4534f97de0eed7308d45b4ecfff3` |
| pythagoras-and-trigonometry | `ad471a1f0d60fa9f62768376c9ef42c93f0e542eccb73efcf8a37788f1c578f2` | `acd4aed1e9029c15e8e389e25f1934c9dacd929887a9f682133662bc977b4d79` |
| quadratics-and-simultaneous-equations | `74dc1adeb19e9923c79275cd478010a02dbe08325deb9ea80f83633f3d321a1a` | `2d6aa890779864aa69e8f6465d1856326bb8ef778c4146829e58e3d90f372108` |
| ratio-and-proportion | `2880029d8175fcacb94541d1b6161579b9a665f59e3cdc1067e9bb19204d1929` | `b7a6283e35be440bd7968e1658fae1541fe4caac6d0e6e15e4354395578bdfa7` |
| recurring-decimals | `5d01dc4e464978e159fb87c03f43d390cac4a089e0066adba3c5d3c6b87a1055` | `696b5ee37a30a27d4400bff605bcd25e18a9c5e75d5fcc8ce5272094df95e972` |
| sequences | `d6c88f88ca2660230fcaaf4e4237f677822bd276cd503fdb32d7c1be9899d2b4` | `a8f86f517c0c76213df455f0d093258912381dd9535498a30b3f14e5bb2f79b8` |
| sets-and-probability | `7159d4f6184b45a3dd9a429c29c8b01cf2d6257b55bdaa8e3a749c656ff8b162` | `fbfaf36a3b8fb71dcf66c60850dc0b4306a4789d55554a2fcc78c3b6031cd6ec` |
| statistical-diagrams | `f9dbdb90043aca2f04406a2fd12a70fecfa758b493f33b5e504bb9b7aaa76f4e` | `d634ebe51583ed2d823dcce0fae1bd982d56c6cf49c6a1a546aa85f25d7be713` |
| transformations | `05b3c88bd2b221413426c7cd6d52d25a36cbce2f541565f3c1771466c631aaa3` | `ba1e7ca1cf6dd80ff2a4a825e7b02ef4d196eff63287834ffeb1d18676cf68d0` |
| units-area-and-volume | `3013491a34d3896eabe8351f4c0d1a738f0f3c0e2d8700cc7149d5509b982ade` | `a0374053d42b2283e985cf4992d44bd9aefc80b97a939bbc666b392809501761` |
| vectors-and-matrices | `d1bdc81572ea8130e9348c9cda711b43bcf6f3cc8b2370455fa37b12fb07d80f` | `6bd82ea2b0a75b68f56252840159094d393190697c5431c25276a4f8be3f0b63` |

### 收尾源快照（2026-10-27T08:43:47.320249，Asia/Singapore）

此表记录当时实际读取／定位及复核时的当前字节。各组整课修补验收依原报告；本审查没有重新独立算全部396条Question。入口及综合的完整当前复读结论另见entry第10节。SC-1修补条件与解答在本快照对应源已复读；SC-2使用上列修补后JSON。两语言当前全部映射锚点存在、各主题Question与TeX序列一致，但不由此推断所有译文语义正确。

| 页面（.md） | EN SHA256 | ZH SHA256 |
| --- | --- | --- |
| accuracy-and-bounds | `072fc821a0d2f8f04a377a137c72a1830a85d6471fa932975812ab4e051afd2a` | `c34ef7e9d5bc1f08e8517a0c5ed34dff39d5eeb7c37817bf608661fe7cace449` |
| algebraic-fractions-and-proof | `852eec95b4d14540446f14f3e22ff2fdcb4a743c02edcd97d13c870e204bcd50` | `757692c1482e947eb44e82d91111bea45c9d681dc6df75b14babfd651a26850a` |
| angles-and-polygons | `4ebf70dd15546db0638ded33de3332861a4908af998a070ce6242d1ee3114497` | `b0c7b0749ffffff2bf7b820a666d96271aad9acc6f8ce8c314937ebb985fa29f` |
| circles-and-proof | `d71087ed87b81471cf771cc0f47f05fa49968167ec7a66ef5b5b88cb610e0f19` | `9a653b646409778cd32cfa9b8cb0c3110b0743da0517c2b62dd8b1d996e38ec9` |
| combined-and-conditional-probability | `f3d8172a1477b096280df8aafa468e63825e21252fdad2d2e1c83e6f44503212` | `12580cd49c4bd48357d3315df264d447fcbf5b827c4f0f1a38382ea145776b18` |
| congruence-and-similarity | `3af9135fd544a872dad7a20a5b01aec04f43138d50eb2338b3cea58bcfa0de03` | `a865f584bfb43117b94913de357b302b16ef8cb1bb414414d4cfeaf779e92b5c` |
| constructions-loci-and-bearings | `99d61ffa4469d3a5c0267c509d149304d0c10fd2643b5fb4232b8ff48d2adb5b` | `9773326669a9be66c4668ed3c938c4b89365aa19be7b7ce702d020a9a344a383` |
| coordinates-and-lines | `84ee2c576c0fc259d8370c199f68249de0629553c6dee8348d105e87f8bcba99` | `e4b3cc073be719223a894fc71785c59f5cd4ba3077347819126b6d359d7fd2e2` |
| data-and-averages | `f677f68c4c58fb9f66ba27309735744adb576be1e705d17dc2dbc9139bee393b` | `c7bfeba9c1493b23a88ec903555e38b76dfb8376eaa7752ac690aa2d57ab7fa0` |
| differentiation-and-motion | `d22142b58a421b812cd6dd3eaf3731798b48f052619f61c0953eea1e286f9376` | `86b2d0402117ab4c8a1b652a14eeef6abc5487e1b8ef21aff5c1955d49d49fac` |
| equations-and-inequalities | `6eb366bff501571413bea7603701fba6a8bd1e18ac65b4ee811f202e94ffe1f9` | `1e875d4edff45aa917c0255c46c9b6684d32b7984fbf2b36a634624c1d44d0cd` |
| expressions-and-formulae | `f353ae39f68e8f0a0babb7dbe15c4118a63dfd81943cd62b2036c3dc149d668b` | `73edcf6229ab82ed4eec9c4fbd4656279b392a11553b6cb3a65b9894577e2319` |
| fractions-decimals-and-percentages | `bbec42deb10eb632b896319ca480154eeb5252a72a6e00f5c83a9a27be5fa865` | `74581e78c642ebe0fed185fc11f86bc4ba111730575a3a0c11e4fdb3be2fdf60` |
| functions-and-graphs | `5022dc555bd143b0b604c0554a03cc9dcd0c9682e9a90bd1f9be1fe02d29bcc0` | `75de41b0e2535becda2a5217933072ddfca04501ca3da4475c20d2f5af584826` |
| number-operations | `f33030a781ce730f07571ce5be12d9f0cd213fdbafa01aff4102dd32b754b42e` | `b637aa1d10d449cff0d3beebac0cb577aa2ed4bb2c99e73df9a1bf497f6a7353` |
| percentage-change | `03c1048bc009552b591c1611fa23f83129a07faa7580a63d602654640826ee7e` | `3b51c9e8678ce7c851ed1ae256cb68dd2add1b28f720a9d5a2299d618e9ca458` |
| powers-roots-and-standard-form | `c9db2208d143f842882a1a9c77e8c9ea4c5b30fd0ecd4c91ba68bd8a38126e73` | `b6b1a4503c1432322ce3fbdb6c37173839f25e13b239008c2c604950e68865df` |
| pythagoras-and-trigonometry | `36497d3f86b696baa319a9b28b23b9f6a87c7f203735124716e4dad4cbb90db7` | `67193233d81a7e7006e35bd75a12b22b3db27ae4b1f8d4b4e82c1732dba8df61` |
| quadratics-and-simultaneous-equations | `290d565cca033c355a90b82681b1daa2b206a31729eba5b1bb34e5700a0d4a36` | `8ad94cff9c480b8ea39d7181ed1f2ac517c034dc08a23ab22ec0918aaa1544cd` |
| ratio-and-proportion | `b0e5e8bedd6fb206c0eacd23af5fc9fc1ee31c05eed820d28d3874a6600dbf1d` | `8f24e3d4f22d4cbd000dad768f54d244b16b3a1353b57b9d97919c63cda78d85` |
| recurring-decimals | `3b80b35e0077eab72a29033c768f9b673bddd88929a32c3d960be1f412b14512` | `eba5cce7cdce27aa692acd86c7dcdd3424b932fbc0e66c67e730762f7f2426a8` |
| sequences | `f8baaee4f01a5b9f238f6e1b01dc8fd4d35b7f0ee0720a09490a968544a4a0d0` | `93de84fd52998928f365bd9e72a2007d07e53c73469fa35761d8b051ed4dcf55` |
| sets-and-probability | `b3466ec40e59a972169378aa17c83208f022cfa4582aa4cb2e5346bc7de7bb8f` | `b179f937bc31e93d74ca85527d425e8ab167d14aaba0f39924becee625d62afe` |
| statistical-diagrams | `c8041ff497269b047fde01f22dc6bd96398fecf58c294e018eaccad25855d2ac` | `685351eb5265a03440572dc471877c65e1eb93e856d3994a7ab5e12010fdf9f2` |
| transformations | `1292f38a1a6c21b1e5d065d36b629ac4b484a1c60d79173058c258c979048f22` | `32c080d85749504432b8bdffe043a224fceb10dd6307b00b3eb8ba5330f1ecc4` |
| units-area-and-volume | `c5d0082d5b2492200024162a346ef1c317f032cf4a6c7107c7728513dc7812d6` | `809c868254320afa9cc4752f0d1ae9595a07a3b3ad00e31d34c92fd6e4095df5` |
| vectors-and-matrices | `71ce0ddf69685d58a647c8f510811a997491543a2dc414871a2e64bfec51f63b` | `2cde97ecf963c7d70e605615882e72dad8fbd02e47163fa3a14e8c13a7aada3a` |
| index | `8881e8840231a335c2dfb1130973592507cf79ae4ed4a1c3abd6d986fb36ddd5` | `daef8d5f1ee5d6449b990e6e37ee352cce18240afbe88ea07e6f3ade3c020275` |
| mixed-review | `b0f98fb3d85147847a7613f8a61c5de5d1b74e6f49730cf52f570d8f691123be` | `fab99876dd8888d5323c5ab69244e6b68d00ed2bfe7e9ccbf8c4df49cc65d717` |

| 范围／官方来源 | 当前 SHA256 |
| --- | --- |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/syllabus-coverage.json` | `9894f8cb01922e3f4a82762dc572a423c771b01148f34604155316c22ac42de2` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/course-route.json` | `066fe8a8e8c3d3ec77b6d9faf2490f7439269bd7a18b65640dbec0d78c43ebf7` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/sources/specification.pdf` | `d803d6a8ef6e10d530511572269c58586e8fad83ea5aa77fa7a7e0c44745322a` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/sources/manifest.json` | `419aea17b34d03f0db184682310181d0343380bfd6ff7a61a649da6865395662` |

作者／审查报告的后续追加及主制作记录的技术结果不作为相互锁定条件；本表只为课程源、映射和官方缓存保存版本身份。第4/6节的跨组状态是读取时的交接快照，后续关闭以相应实际源和原审查者证据更新，不要求本报告追逐其他报告SHA。
### 冻结交接时的后续源观察（2026-10-27T08:49:11.790104）

入口／综合／样章六源、两张答案SVG、units中英源及coverage JSON与08:43:47表一致，故当前entry关闭、SC-1模型及SC-2映射复核没有版本漂移。58源未检出学生可见Core分流文字，90项账本和JSON的编号集合均精确一致；两报告本地文件链接存在。此为文档／源级检查，未运行测试或构建。

以下四个Geometry源在并行修补中又更新，列为观察快照；本审查不把新字节自动称为整页已重审。其最终修补任务仍由对应交叉审查复核，不能据文件变化报告为缺课，也不要求本报告追逐后续作者／审查记录SHA。

| 源 | 后续观察 SHA256 |
| --- | --- |
| `igcse/mathematics/circles-and-proof.md` | `59f26fe827d521412b0246eb82311951494d63bc1b07afea3afefcd011db7e64` |
| `zh/igcse/mathematics/circles-and-proof.md` | `7d370c50cf7c1178b6cdf258670c49bb65f1cb94a2fd94a9f33fc19d6a01a84d` |
| `igcse/mathematics/congruence-and-similarity.md` | `bab5e23f97f8305d776f79ca36ae711dd2987f975c24c45ea2fc17189a37083b` |
| `zh/igcse/mathematics/congruence-and-similarity.md` | `3bf84e1a1814a4203829d1a289fb2725d70f23eb7af65a134bcda0e4ba7bc1dd` |

## 8. 最终范围与活动结论（2026-10-27 08:56，Asia/Singapore）

已实际读取五份独立审查报告的最终结论及最终课程源SHA表，并逐文件核对当前字节：

| 最终报告 | 实际读到的关闭结论 | 当前源SHA核对 |
| --- | --- | --- |
| [Number](review-igcse-number-2026-10-27.md) | 四项原发现关闭，六主题无未解决阻断 | 12文稿、3图全部匹配 |
| [Statistics](review-igcse-statistics-2026-10-27.md) | R1/R2关闭，最终手机图／公式修补版内容通过 | 8文稿、21图全部匹配 |
| [Algebra](review-igcse-algebra-2026-10-27.md) | A-R1–4关闭，八主题独立内容复核完成 | 16文稿、2图全部匹配 |
| [Geometry reasoning](review-igcse-geometry-reasoning-2026-10-27.md) | G-R1–4、G-R6关闭，单路及内容复核通过 | 8文稿、8图全部匹配 |
| [Geometry calculation](review-igcse-geometry-calculation-2026-10-27.md) | R1–5及SC-1关闭；R6旧分流建议撤回，单路衔接通过 | 8文稿、6图全部匹配 |

其余入口／综合／样章六源与entry第10节SHA完全一致，原发现和当前11题关闭结论继承。**结合本报告90条逐项语义映射、SC-1/SC-2实际修补复核，以及五组最终独立内容复核，N1–20、A1–26、G1–26、S1–18在官方范围及学习活动证据层面无未解决项；本次语义覆盖审查完成。** Extension单一路线包含必要基础，不提供Core学生分流。第1–7节的待修／待复核状态均保留为当时历史，由本节最终状态取代；本次没有重新求解全课程所有题。

已核对最终 `syllabus-coverage.json`：与SC-2关闭版相比，90项 `items` 内容及顺序完全未变，仅状态等元信息更新为全部语义映射完成；两语言全部讲解／独立任务锚点仍存在。最终JSON SHA256：`32c7c7042d29f82e5a84332a816a7b84df23dc715c6db5d9dc0b0e9d7fdfdeaa`。58份课程Markdown源的集合指纹为 `af86e041ec18296227227d0761d1d80cb1f8e05364417bf8e7968fb305edd51a`（按仓库相对路径升序，每行“路径＋TAB＋文件SHA256＋LF”，UTF-8后再取SHA256；08:56:46快照），对应逐文件身份见五组最终表及entry第10节。

此结论不宣称学生掌握或学习效果已验证；技术验收由主执行者另行记录。本轮只追加本报告最终结论，不改课程源／JSON，不运行构建、浏览器或全题重审。mainrecord后续追加技术结果、其他审查报告追加文字不作为互相锁定条件；仅课程源、图片或映射实质改变时按影响复核。
