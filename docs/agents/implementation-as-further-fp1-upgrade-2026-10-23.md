# FP1 五个学习页升级实施记录

日期：2026-10-23。作者范围：`rational-functions`、`conics-and-loci`、`trigonometric-solutions`、`rates-and-approximations`、`improper-integrals` 的英文及中文共十页。本记录独立维护；不改共享入口、样式、测试或其他代理的文件，不提交、推送、发布或组织学生试用。

## 范围与制作前阅读

- 已读当前 `AGENTS.md`、RTK 指令、课程内容长期标准 v1.1、FM01/FM02 研究及 `complex-numbers-and-roots.md`、`series.md` 样章；复用连续主线、完整 `worked-example`、每题独立 `lesson-check` 与分别默认关闭的帮助。
- 本轮实际从 [9665 当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) 点击 specification 与配套 FM01 QP/MS，核对正文资格 9665、v5.2、FP1.1/FP1.2/FP1.6/FP1.7；不迁移 9765。
- 本轮实读 FM01 specimen Q3（QP pp.4–5 / MS p.5）、Q5（QP pp.7–8 / MS p.6）、Q8（QP p.11 / MS p.9）、Q9（QP pp.12–13 / MS p.9）、Q10（QP pp.14–15 / MS p.10）。QP 正文 Specimen 2018 Morning，文件名 2019/v3；MS 为版权 2017 的 specimen，非实考 Final MS。读取文本；在线原页截图工具返回 Internal Error，不冒称图像核验完成。研究记录的旧读取不算本轮读取。
- 这五页均为 FM01 范围，没有引用 FM02 题目，未把本地 FM02 QP/MS 的历史阅读算作本轮实读。保留原自拟题，不新增复制的官方题或官方分值。

## 写作前设计卡

| 页 | 中心问题、先修与核心条件 | 主线、图与示范 | 独立产出与后续 |
| --- | --- | --- | --- |
| 有理函数 | 商式怎样决定图像和可达高度？先修因式分解、二次理论、符号；保留原禁值，降次另查 | 三类逐步解释；原图对应一次/一次示范；直线交点与符号；一次/二次与首一二次/二次值域 | 空点/不等式、三类草图与值域、降次高度；按错误重试，延后连接直线交点与范围 |
| 圆锥曲线 | 方程如何表达形状、变换、距离与相切？先修配方、距离、判别式；平方的两边非负，二次退化另查 | 四类图与渐近线；用旧坐标反解两轴伸缩、平移与反射；横/竖准线；完整切线示范 | 四类草图、全部单次变换、横/竖轨迹、点点等距、交点与切线完备性；同目标重试与延后混合 |
| 三角 | 怎样从主值得到所有解？先修单位圆、弧度、因式分解；整数参数、定义域与不重不漏 | 单位圆解释两支；整体角变换；非特殊值保留精确反三角形式；角度制与退化 | 原代数三角/正切题；非特殊角、角度制、端值及无解独立判断；周期/漏根重试，延后无方法混合 |
| 变化率 | 从有限差到局部斜率后，怎样连接真实变化？先修展开、斜率、普通 AS 微积分；差商中增量非零 | 弦切图；完整平方及一般多项式重建；球体链式关系；旧点线性估计与精确差 | 由差商独立推导、面积到周长、反求变化率与近似误差；同目标重试及延后混合 |
| 反常积分 | 无界是否必然有无限面积？先修幂/对数定积分与简单极限；每个坏端点单独处理 | 截断图；有限上限积分后取极限；零端与无穷对照；幂测试分参数；内点不能抵消 | 原三积分判断；独立两侧极限及参数边界；移动奇点重试；延后混合普通/反常与双坏端 |

## 写作前目标—任务映射

任务编号为本记录定位用；学生题标题不预告方法。每页新增 `later-review` 与 `next-step`，保留五个旧锚点及语言元数据、原前后链接。

| 目标与官方条目 | 先修/回补 | 讲解定位 | 独立证据定位 | 判据与对应重试 |
| --- | --- | --- | --- | --- |
| R1 三类图像、轴交点、轴平行渐近线 FP1.1 | 分解与零点；页内 start | model、demonstration、quadratic-range | practice-1/2/3 | 图有分支/禁值/截点；retry-1/2；空点与丢失高度另做 retry-3 |
| R2 直线交点及不等式 FP1.1 | 符号区间；signs | demonstration、signs | practice-1、later-review | 保留分母符号与端点；retry-1 |
| R3 二次理论值域、极值及降次 FP1.1 | 判别式；range | range、quadratic-range | practice-2/3、later-review | 充要条件、合法根、边界取得；retry-2；空点排除高度 retry-3 |
| C1 四类草图/交点及完整相切判断 FP1.1 | 二次理论；model | model、demonstration | practice-1/2/3、later-review | 图像要素及二次非退化；交点 retry-1，完整切线含降次及竖线 retry-4 |
| C2 平移、两轴伸缩、y=x 反射及渐近线 FP1.1 | 坐标代换；transformations | transformations | practice-2、later-review | 每一单次像及对应点；retry-2 |
| C3 点点/点与横竖线距离轨迹 FP1.2 | 距离/绝对值；loci | loci | practice-1/4/5 | 距离等价与完整点集；retry-3 |
| T1 特殊与非特殊完整通解 FP1.6 | 单位圆；model | model、demonstration、non-special | practice-1/2/3 | 两支、周期、整数、单位、定义域；retry-1/2、later-review |
| D1 从差商极限重建多项式导数 FP1.7 | 展开/斜率；model | model、demonstration | practice-1 | 非零增量、展开相消、极限；retry-1 |
| D2 相关变化率模型 FP1.7 | 几何量与单位；connected-rates | connected-rates | practice-2/3 | 先关系后求导，带符号单位；retry-2 |
| D3 微小变化与近似限制 FP1.7 | 旧点导数；small-changes | small-changes | practice-2/3、later-review | 变化与新值区分、精确差核对；retry-1/2 |
| I1 识别并截断坏端点 FP1.7 | 定积分；model | model、demonstration、finite-endpoints | practice-1/2、later-review | 有限截断及单侧极限；retry-1 |
| I2 收敛/发散及参数边界 FP1.7 | 幂/对数；power-test | power-test | practice-3、later-review | p=1 分开，不把无穷当数；retry-2 |
| I3 内点及多个坏端分开极限 FP1.7 | 定义域；separate-limits | separate-limits | practice-2、later-review | 每段各自有限才能相加；retry-1 |

## 最终写入路径

只写下列十页与本记录。SVG 沿用现有图片与完整 alt，未改图片、共享 CSS、入口、共享测试或其他代理文件；未提交。

| 英文 | 中文 |
| --- | --- |
| `alevel/as-further-mathematics/rational-functions.md` | `zh/alevel/as-further-mathematics/rational-functions.md` |
| `alevel/as-further-mathematics/conics-and-loci.md` | `zh/alevel/as-further-mathematics/conics-and-loci.md` |
| `alevel/as-further-mathematics/trigonometric-solutions.md` | `zh/alevel/as-further-mathematics/trigonometric-solutions.md` |
| `alevel/as-further-mathematics/rates-and-approximations.md` | `zh/alevel/as-further-mathematics/rates-and-approximations.md` |
| `alevel/as-further-mathematics/improper-integrals.md` | `zh/alevel/as-further-mathematics/improper-integrals.md` |

## 新增任务答案与关键核算

编号对应各页稳定锚点。所有新增题均为自拟题，无官方分值。原有可靠题干与答案保留，原题可继续由原锚点定位。

| 页／任务 | 答案及必要条件 |
| --- | --- |
| rational 新示范，一次／二次 | `q=x/(x²−1)` 定义域排除 ±1，值域全实；高度方程 `kx²−x−k=0`，非零高度判别式 `1+4k²>0`，高度零降为合法输入零；两个极点永不是候选根 |
| rational practice-2 | `u=x/(x²+1)` 定义域全实，值域 [−1/2,1/2]，极值点 (−1,−1/2)、(1,1/2)；高度方程 `kx²−x+k=0`，零高度另查 |
| rational practice-3 | `v=(x²+1)/(x²−1)` 定义域排除 ±1，值域为 k≤−1 或 k>1；中支最大值 −1 在输入零取得；高度 1 方程变为 `2=0` |
| rational retry-2 | `w=x²/(x²+1)` 值域 [0,1)，最小点 (0,0)，高度 1 不取到 |
| rational retry-3，新增恢复任务 | `H=(x²−3x+2)/(x²−1)=(x−2)/(x+1)`，仍排除输入 1、−1；空点 (1,−1/2)，值域排除 1、−1/2。高度非 1 时唯一候选为 `x=(−k−2)/(k−1)`；高度 −1/2 只对应原禁值 1，不能由其他输入补回 |
| rational later-review | 与 `y=x` 交点为 (a,a)、(b,b)，`a=(3−√13)/2`，`b=(3+√13)/2`；`f<x` 为 a<x<2 或 x>b。`u=3/5` 的判别式 −11，无实解；`u=0` 输入零合法 |
| conics practice-2 | 四图要素和原图条件见解答；单次像依次为 `(y−2)²=12(x+1)`、`x²/64+y²/9=1`、`x²/9−y²/16=1`、`xy=4`。对应点逐个代入核对，普通双曲线像渐近线为 `y=±4x/3` |
| conics practice-3 | `y=x` 与 `x²/4−y²=1` 无实交点；`y=x+1` 与 `xy=1` 两点，横坐标 `(−1±√5)/2`，纵坐标 `(1±√5)/2`，正负号对应 |
| conics practice-4 | 定点 (1,3)、准线 y=−1 的完整轨迹为 `(x−1)²=8(y−1)`，顶点 (1,1)，向上；非负距离使平方可逆 |
| conics practice-5 | 两定点 (−1,2)、(5,2) 的轨迹为完整直线 x=2；(2,−10) 合法，两距离均 √153 |
| conics retry-2/3 | `xy=2` 三个独立像为 `(x+2)(y−1)=2`、`xy=6`、`xy=8`；横竖距离轨迹分别为 `(y+1)²=8(x−1)`、y=2，平方条件及完整点集已说明 |
| conics retry-4，新增恢复任务 | 从 (0,2) 到 `y²=4x` 的全部切线是 `y=x/2+2`（切点 (4,4)）及 x=0（切点 (0,0)）。斜率式代入后的判别式为 `16(1−2m)`，仅在 m≠0 时作二次判断；m=0 降次，y=2 穿过曲线；竖线 x=0 必须补查且确为切线 |
| conics later-review | 与 `y=2x/3+1` 只有交点 (−15/4,−3/2)，非相切；沿直线曲线方程左边减 1 为 `−x/3−5/4`，在交点前后变号。反射像 `y²/9−x²/4=1`，渐近线 `y=±3x/2`；最后轨迹为 `(x−1)²=−8y` |
| trig 非特殊值示范 | 令 β=arccos(0.3)，通解 `x=(β−0.2)/3+2nπ/3` 或 `x=(−β−0.2)/3+2nπ/3`，代表约 0.355368、−0.488701 |
| trig practice-2 | α=arcsin(−0.3)，通解 `x=(α+0.4)/2+nπ` 或 `x=(π−α+0.4)/2+nπ`，六位小数代表 0.047654、1.923143 |
| trig practice-3 | 角度制两题分别为 `45°+90°n`、`40°+120°n`；后一题两余弦族重合 |
| trig retry-2 | β=arccos(−0.2)，通解 `x=(β−0.6)/2+nπ` 或 `x=(−β−0.6)/2+nπ` |
| trig later-review | 第一题为 `2nπ`、`2π/3+2nπ` 或 `−2π/3+2nπ`；第二题 `π/2+2nπ`。所有 n 均为整数，正切的所列角均在定义域 |
| rates 新多项式示范 | `f=2x³−3x+1` 的差商 `6x²+6xh+2h²−3`，导数 `6x²−3`；输入 2 的有限弦斜率 `21+12h+2h²`，切线 `y−11=21(x−2)` |
| rates practice-1 | 差商 `3x²−4x+(3x−2)h+h²`（h≠0），极限为 `3x²−4x`；输入 2 的点 (2,4)、斜率 4，切线 `y−4=4(x−2)` |
| rates practice-3 | 圆锥高度率 −0.1 cm/s，体积率 −0.9π cm³/s；2s 线性变化 −1.8π cm³。仅瞬时资料不能确定精确变化；额外假设半径率恒定后，精确变化为 `−2611π/1500` cm³，约 −1.740667π cm³ |
| rates retry-2 | 半径率 1 cm/s，面积率 8π cm²/s；0.1s 估计增加 0.8π cm²。周长率保持恒定时，精确增加 0.81π cm²，仍非线性估计的精确值 |
| rates later-review | 输入 2 的差商 `1+h→1`；输入减少 0.02，估计变化 −0.02，精确变化 −0.0196；输入率为 0.4 时输出瞬时率 0.4 |
| improper 分侧示范 | `∫[-1,1]1/x` 的左侧截断为 ln ε→−∞，右侧 −ln δ→+∞；独立极限不收敛，相等截断的零不是普通反常积分 |
| improper practice-2 | 奇点 1 左侧 ln ε→−∞，右侧 −ln δ→+∞；跨奇点直接减端值所得零无效 |
| improper practice-3 | 无穷尾积分当且仅当 p>1 收敛，值 `4/(p−1)`；值为 2 则 p=3，对应零端积分发散，截断 `2ε⁻²−2`；p=1 单独用对数论证 |
| improper retry-1 | 奇点 2 两侧截断分别为 `ε⁻¹−1/2`、`δ⁻¹−1/2`，独立趋于 +∞，发散 |
| improper later-review | 普通积分为 1/3；分段函数两个独立极限为 2 和 1，总和 3；`∫[-2,2]1/x` 两侧分别发散，不能用对称抵消 |

### 可供主线程共享计算测试采用的断言

下列是审阅用数学断言，本作者未写入或修改共享脚本。

1. `disc(kx²−x−k) = 1+4k²`；`disc(kx²−x+k) = 1−4k²`；`disc((1−k)x²+4kx+2) = 8(2k−1)(k+1)`。三个降次高度分别为 0、0、1，均须独立处理；g 的高度 1 对应合法输入 −1/2。
2. 有理函数空点重试的高度 −1/2 只对应禁值 1；高度 1 无输入。旧任务 h 的丢失高度仍为 2/3，且 `h>2 ⇔ 2<x<3`。
3. `f−x=(−x²+3x+1)/(x−2)`；测试区间必须由 a、2、b 分开，不能漏极点 2。
4. 原两切线示范与旧独立题的判别式分别为 `16(1−m²)`、`64(1−2m²)`；新切线重试为 `16(1−2m)`，m=0 降次且另外有竖切线 x=0。
5. 新差商乘以 h 必须精确还原整个 shifted polynomial 减原多项式，不以导数规则替代该等式。h≠0 时先约，再令 h→0。
6. 圆锥精确有限变化系数为 `(2/3)((29/10)³−27)=−2611/1500`；旧倒数平方示范精确变化 `−404/13005≈−0.031064975`；旧平方根示范精确变化约 0.009983388658。
7. 三角新题两支对若干正负整数代回均给出原值；这些数值检查只核算分支与小数，通解完备性由单位圆与可逆仿射变换论证。
8. `∫[0,2]1/(x−1)` 与 `∫[0,4](x−2)⁻²` 均发散，必须分开左右极限；对所有实 p，`∫[0,∞]x⁻p` 不收敛。不能以相等截断或有限计算器读数替代定义。

## 作者自检与交接状态

2026-10-23 作者自检完成；独立审查结论由主线程另写，本记录不把作者核算称为独立复核。主线程在协作反馈中说明已独立阅读五页全部示范与任务并复算正确；正式审查记录仍由主线程维护。

| 检查 | 本作者实际结果 |
| --- | --- |
| 双语公式 multiset | 按完整显示／行内数学片段、只规范空白比较：每语言 rational 107、conics 152、trig 68、rates 77、improper 78，五组各自完全一致，共每语言 482 个片段 |
| 英文题干 | 每组逐行相同；包括示范、入口与学生题，每语言共 60 条；修改前备份中的原题干均逐行保留 |
| 结构 | 每语言 45 个独立 lesson-check、15 个 worked-example；每道学生题恰有两个默认关闭 details，无嵌套 section；数量是检查结果，非制作指标 |
| 稳定数据与链接 | 十页五旧锚点各出现一次，语言及其他原元数据、原末尾前后导航保留；reading_layout=true；本地链接及目标锚点存在；修复 improper 的先修入口至现有 integration 页 |
| 数学核算 | 仓库外 Python Fraction 精确系数检查 11 个多项式恒等式（差商展开及判别式），并核算精确有限变化、空点高度、切点、三角代回与小数、截断符号。全范围论证仍以正文条件／充要性／分情况及极限证明为依据，采样不代替证明 |
| 窄公式源码处理 | 按正文约 350px、题框答案约 274px 的反馈，拆开长等式、并列坐标、单位计算及反常积分步骤；aligned 使用单列步骤避免左右列最大宽度叠加。保留完整推理；未删 alt。此项是源码修复，不等于浏览器测宽已通过 |
| 中文及连贯性 | 补齐 conics 的行内 y；避免把 (1,2)、(2,11) 称为原点；rational 统一“空点”；公式前后改为完整引句与结句，清理零散 gives／分号／句点 |
| diff 空白检查 | 对十页执行 git diff --check，通过 |

可重跑的作者自检工具及结果位于仓库外本任务工作目录：`C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/fp1-selfcheck.py`、`fp1-selfcheck-results.json`；未改共享脚本。

共享计算测试、Jekyll 构建、生成 HTML、桌面／390px 手机局部公式与展开答案、键盘阅读及正式独立学科审查由主线程统一记录；本作者未执行或冒称这些通过。应重点看 conics practice-1/4/5、retry-1/3/4，rates scaffold、practice-1/2/3，improper practice-1/3、retry-1 的题框局部宽度。无推送、发布或学生试用授权，均未进行。
