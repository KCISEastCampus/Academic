# 数学课程结构与可读性审计 · 2026-10-22

范围：全站审计中的数学部分。依据当前工作区源码（读取时 HEAD `1076347`）、`AGENTS.md` 与 `course-content-standard.md`；不使用旧截图、旧审计或历史报告作为证据。以下是内容组织判断，不是数学正确性、官方范围覆盖或学习效果认证。P1 表示核心学习／独立考查缺口，应优先修复；P2 表示影响自学连贯性和恢复效率。

## 已读范围

完整阅读指定四类课程的全部 8 份中英文 `index.md`、MA05 的两份 `mechanics.md` 入口，以及下列 15 组双语课文（30 份文件）。MA04 只有一份汇总正文，因此完整读其 S2.1–S2.6，不能虚称抽到了两节独立课。

| 实际课程／单元 | 入口 | 完整阅读的代表课文（均含 zh 对应页，MA04 除外） |
| --- | --- | --- |
| AS 数学 MA01 | [EN](/D:/GitHub/Academic/alevel/as-mathematics/index.md:22)／[中](/D:/GitHub/Academic/zh/alevel/as-mathematics/index.md:21) | `coordinate-geometry`、`differentiation` |
| AS 数学 MA02 | [EN](/D:/GitHub/Academic/alevel/as-mathematics/index.md:32)／[中](/D:/GitHub/Academic/zh/alevel/as-mathematics/index.md:31) | `binomial`、`forces`；纯数／统计／力学入口均已读 |
| AS 高数 FM01／FM02 | [EN](/D:/GitHub/Academic/alevel/as-further-mathematics/index.md:18)／[中](/D:/GitHub/Academic/zh/alevel/as-further-mathematics/index.md:13) | FM01：`rational-functions`、`complex-numbers-and-roots`、`series`；FM02：`numerical-roots`、`geometric-distribution` |
| A2 数学 MA03 | [EN](/D:/GitHub/Academic/alevel/a2-mathematics/index.md:15)／[中](/D:/GitHub/Academic/zh/alevel/a2-mathematics/index.md:14) | `functions`、`partial-fractions` |
| A2 统计 MA04 | [英文汇总页](/D:/GitHub/Academic/alevel/a2-mathematics/statistics.md:10) | S2.1–S2.6 全文；目录中未找到中文统计正文，[中文课程入口明确跳往英文](/D:/GitHub/Academic/zh/alevel/a2-mathematics/index.md:84) |
| A2 力学 MA05 | [EN](/D:/GitHub/Academic/alevel/a2-mathematics/mechanics.md:12)／[中](/D:/GitHub/Academic/zh/alevel/a2-mathematics/mechanics.md:14) | `mechanics/mathematical-modelling`、`mechanics/vectors-and-kinematics` |
| A2 高数 FM03（FP2） | [EN](/D:/GitHub/Academic/alevel/a2-further-mathematics/index.md:12)／[中](/D:/GitHub/Academic/zh/alevel/a2-further-mathematics/index.md:14) | `roots-and-polynomials`、`linear-equations`；不将此目录称为全部 A2 高数选修单元 |

补查：中英文 `de-moivres-theorem`、`uniform-circular-motion` 的标题层级、开篇、若干教学段与末尾；AS 代数开篇、MA03 积分开篇、AS 动量及 FM03 特征向量课末、MA05 速查的综合问题段。补查不计作全文阅读。MA03 `numerical-methods` 正在有其他工作，本审计不以它或其研究／实施文件作为发现依据。

## 优先发现

### 1. P1 · MA04 仍是参考笔记，入口没有给初学者一条学习路线

**证据：**[S2.2 从 PDF 条件直接进入积分关系](/D:/GitHub/Academic/alevel/a2-mathematics/statistics.md:50)，[S2.5 主要列估计公式，没有学生任务](/D:/GitHub/Academic/alevel/a2-mathematics/statistics.md:162)；[S2.6 列出多类检验后只示范一次已指定的左尾 z 检验](/D:/GitHub/Academic/alevel/a2-mathematics/statistics.md:216)。全页例题解答紧随题干展开，末尾为[公式汇总](/D:/GitHub/Academic/alevel/a2-mathematics/statistics.md:250)，没有独立练习、提示分层、诊断重试或学后路径。中英文主入口均直接链接到这份英文正文。

**影响／建议：**学生能查式子，却无法据此检查自己能否区分密度与概率、选择分布或决定检验方向。先明确标为参考笔记；补一条基于 AS 随机变量及积分的学习顺序，优先完成“密度与区间概率”“从情境选择检验”两个学习段及独立检查。中文入口继续如实标明英文，不宣称已有中文课程。

### 2. P1 · MA03 函数页的独立题标题提前完成关键判断

**证据：**练习区明确称[Independent practice](/D:/GitHub/Academic/alevel/a2-mathematics/functions.md:218)，但 Q5 标题直接写[“Choose the negative square root”](/D:/GitHub/Academic/alevel/a2-mathematics/functions.md:314)，随后才要求学生求反函数；[中文标题同样给出“选择负平方根”](/D:/GitHub/Academic/zh/alevel/a2-mathematics/functions.md:316)。Q2 的[“A restricted domain does not always give an inverse”](/D:/GitHub/Academic/alevel/a2-mathematics/functions.md:242)也先提示了随后“是否存在反函数”的判断方向。答案虽折叠，这些提示默认在题目前。

**影响／建议：**无法把完成这些题当作学生独立选择分支、判断可逆性的证据。保留必要定义域与无障碍内容，把结论性标题移入折叠提示或题后反馈；独立题使用中性题号，再提供一题未提示分支的检查。此处不把正常展示的教学例题当作泄露。

### 3. P1 · AS 高数几何分布的“推导矩”目标没有独立产出

**证据：**[目标明确要求 derive both moments](/D:/GitHub/Academic/alevel/as-further-mathematics/geometric-distribution.md:19)，[完整推导已经展示](/D:/GitHub/Academic/alevel/as-further-mathematics/geometric-distribution.md:25)；但补步骤只填概率指数，[独立题只求参数、条件概率、均值方差与判断抽样模型](/D:/GitHub/Academic/alevel/as-further-mathematics/geometric-distribution.md:43)，[重试也只计算另一计数约定的概率与矩](/D:/GitHub/Academic/alevel/as-further-mathematics/geometric-distribution.md:73)。[中文目标](/D:/GitHub/Academic/zh/alevel/as-further-mathematics/geometric-distribution.md:20)与[任务](/D:/GitHub/Academic/zh/alevel/as-further-mathematics/geometric-distribution.md:52)相同。

**影响／建议：**会代入已给公式不证明会重建均值、方差推导。保留现有应用题，增加从期望定义出发、无预填关键等式的推导任务，并核对求导后的幂次、因子及方差连接；提示使用情况与独立完成分开记录。发现限于该目标，不能据此判定全部 FM02 目标均未考查。

### 4. P2 · 部分 AS 新概念的首次讲解仍像压缩规则表

**证据：**复数课仅声明二次方程、坐标、三角先修，却在[开篇几行](/D:/GitHub/Academic/alevel/as-further-mathematics/complex-numbers-and-roots.md:19)连续引入实虚部、共轭、模、极形式、主辐角、四则运算和两个结果；极形式中的 r、θ 与平面距离／方向的连接尚未逐步建立，就转到复数方程、轨迹和根变换。[中文也保持相同压缩](/D:/GitHub/Academic/zh/alevel/as-further-mathematics/complex-numbers-and-roots.md:20)。AS 普通数学[力学开篇](/D:/GitHub/Academic/alevel/as-mathematics/forces.md:22)同样在一个段落内交代三定律及多种力，接着直接进入双物体方程；[中文对应](/D:/GitHub/Academic/zh/alevel/as-mathematics/forces.md:24)。

**影响／建议：**对已学过者有效，初学者则要自行补出“符号代表什么、为何选这种表示／研究对象”。在现有页内先建立一个可追踪对象：例如从一个复数点得到距离、角度及极形式，再迁移；力学先解释一物体的受力与正方向，再连接双物体。保留规则用于课末速查，不必为每个定义另建页面。

### 5. P2 · 先修定位与实际顺序不总一致，编号和维护说明增加找路负担

**证据：**[坐标课先修只写 L02](/D:/GitHub/Academic/alevel/as-mathematics/coordinate-geometry.md:20)，[中文也只有编号](/D:/GitHub/Academic/zh/alevel/as-mathematics/coordinate-geometry.md:22)，课程入口没有 L 编号对照。微分 L06 的[重试先要求 stationary point](/D:/GitHub/Academic/alevel/as-mathematics/differentiation.md:79)，该词的定义却在后面的[L07](/D:/GitHub/Academic/alevel/as-mathematics/differentiation.md:95)，中文同样是[先用](/D:/GitHub/Academic/zh/alevel/as-mathematics/differentiation.md:81)、[后教](/D:/GitHub/Academic/zh/alevel/as-mathematics/differentiation.md:97)。FM03 [中文根与多项式的复数回补](/D:/GitHub/Academic/zh/alevel/a2-further-mathematics/roots-and-polynomials.md:24)仍指向[已收起的旧英文参考正文](/D:/GitHub/Academic/alevel/as-further-mathematics/index.md:108)，而非现有中文复数课。AS 高数入口还让学生先读[“本轮没有新增实机……”等维护口径](/D:/GitHub/Academic/zh/alevel/as-further-mathematics/index.md:19)。

**影响／建议：**学生须解释内部编号、倒读后文或绕入旧语言资料才能补缺。先修改为可点击的能力名称及具体段落；L06 重试前直接解释驻点，或移至 L07 后；复数回补指向当前同语言学习页。保留考试单元号与来源身份，将内部活动码及验证状态放到参考／制作记录中。这里未断言旧锚点在浏览器失效。

### 6. P2 · 长页以整章讲授后再集中练习，概念转折缺少就近检查

**证据：**De Moivre 页将幂与证明、复根、单位根、双向三角展开和两种积分累计为十个例题；[第 7 例已到四级标题](/D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:286)，直到[第 443 行才进入集中练习](/D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:443)；[中文对应层级](/D:/GitHub/Academic/zh/alevel/a2-further-mathematics/de-moivres-theorem.md:384)相同。MA05 圆周运动在[碗内运动](/D:/GitHub/Academic/alevel/a2-mathematics/mechanics/uniform-circular-motion.md:266)、接触离面、圆锥、轨道之间继续完整示范，到[第 374 行才进入练习](/D:/GitHub/Academic/alevel/a2-mathematics/mechanics/uniform-circular-motion.md:374)；[中文对应](/D:/GitHub/Academic/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion.md:376)。

**影响／建议：**首次顺读时，理解是否成立的检查落后于多个模型／表示转折；已有页首跳转和目录有助查阅，但不能替代分段学习。优先保留网址，将相应练习链接或短任务贴近“幂→根”“恒等式→积分”“受力→接触条件”的转折，并说明完成何种检查再继续；仅在中心问题确实变化时拆页。此判断来自源码组织，不以行数直接推断手机滚动或视觉故障，也没有据文件数量认定过度拆页。

### 7. P2 · 部分诊断后的重试换了能力，不能确认原困难已修复

**证据：**AS 高数复数课[诊断新根方程的符号错误](/D:/GitHub/Academic/alevel/as-further-mathematics/complex-numbers-and-roots.md:74)，但紧接的重试只做轨迹、零的辐角和简单二次方程，[中文亦如此](/D:/GitHub/Academic/zh/alevel/as-further-mathematics/complex-numbers-and-roots.md:75)，未再次要求建立变换根方程。MA05 向量运动学的[独立考查判断两物体是否碰撞](/D:/GitHub/Academic/alevel/a2-mathematics/mechanics/vectors-and-kinematics.md:391)，其[重试改考径向距离导数与速率](/D:/GitHub/Academic/alevel/a2-mathematics/mechanics/vectors-and-kinematics.md:409)；而重试题干还与原题完整解答放在同一折叠块，关掉该块也会隐藏新题。[中文同结构](/D:/GitHub/Academic/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics.md:402)。

**影响／建议：**做对另一技能可能被误读为原错误已恢复，且需看答案才能找到重试。把重试题干独立置于反馈块外；按实际错误给一个改变条件、仍检验同一判断的新任务。现有速率题可以保留为另一目标的检查，不让它承担碰撞诊断的恢复证据。

### 8. P2 · 部分课程的完成路径停在专题重做，未接到可执行的延后综合

**证据：**AS 数学[最后一课只要求完成本课重试并返回目录](/D:/GitHub/Academic/alevel/as-mathematics/momentum.md:94)，[中文相同](/D:/GitHub/Academic/zh/alevel/as-mathematics/momentum.md:96)；MA03 入口的[复习办法仍是选一课做 Practice](/D:/GitHub/Academic/alevel/a2-mathematics/index.md:56)，[中文相同](/D:/GitHub/Academic/zh/alevel/a2-mathematics/index.md:57)。部分分式虽写了[两天后重做、一周后换系数](/D:/GitHub/Academic/alevel/a2-mathematics/partial-fractions.md:286)，未给出那道新题或综合入口。FM03 [末课下一步仍围绕特征向量专题](/D:/GitHub/Academic/alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md:420)，[中文相同](/D:/GitHub/Academic/zh/alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md:444)，课程入口没有安排跨主题回顾。

**影响／建议：**学生可沿“下一课”走完，却没有明确任务检验隔一段时间能否在未标方法时连接旧知识。把少量跨主题、无方法标签的任务直接接到现有课程入口／终点，并提供错误→段落→新任务的返回路径。不要把此结论扩大为“全站没有综合”：AS 高数已有[混合出口及回学路线](/D:/GitHub/Academic/alevel/as-further-mathematics/index.md:78)，MA05 入口也链接[综合问题](/D:/GitHub/Academic/alevel/a2-mathematics/mechanics.md:48)；缺的是上述路线中的明确安排，不是统一再造一套栏目。

## 边界与未检查项

- 仅写入本报告；未修改课程、脚本、图像或已有 MA03 工作，未提交或推送。所有证据均为本轮读到的当前源文件，后续编辑可能改变行号。
- 未浏览网页、未运行浏览器／构建／测试；未验证生成 HTML、公式渲染、桌面／手机阅读、折叠键盘操作或视觉无障碍。图像引用与替代文字只按源码阅读，未检查实际图像；视觉证据由主任务处理。
- 未逐题独立验算、未重新打开官方大纲／试卷／评分标准／PDF，未认证大纲全覆盖、题目身份、分值或官方材料的当前有效性。沿用课程中的单元名称仅为定位，不把其自述当作本次已核验事实。
- 代表课文以外仅作上述局部补查与文本检索；没有声称通读全部课页，也不由模板相似推断未读页均有同样问题。未评估真实学生表现、保留或迁移效果。
- 已见多处有效的解释、独立题、总结和反馈，尤其 MA05 建模与 FM03 线性方程组；本报告只列优先改进项，不以“有栏目／构建通过”认定课程质量，也不建议整站重写。
