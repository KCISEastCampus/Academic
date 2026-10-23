# FM03 微积分四章：独立内容审查

日期：2026-10-23。基线：`d50b33b9fb954cbcadb27ea60bff6aa17163ef67`。身份：本报告为另一组 author 完稿后的独立内容审查；审查者未参与本组课程正文制作。本审查只写本文件，不修改课程、作者记录、入口、CSS 或脚本，不运行 build、tests 或 commit。

当前状态：**R1、R2、R3 已独立复核关闭；本轮限定范围的内容审查无遗留发现**。已核算的新增任务和更改答案未发现数学错误，未发现错误资格或官方试卷身份。R1 是阅读结构缺口，R2 是新增答案的论证证据遗漏，R3 是新版先修落点的含义错配；均不等于已发现错误数值答案。结论对应文末八份最终源码快照，不代替全站技术或学生验收。

## 范围与判据

范围为中英八页相对基线的 diff，以及理解改动所必需的上下文：

- `inverse-trigonometric-functions.md`
- `arc-length-and-surface-area.md`
- `hyperbolic-functions.md`
- `second-order-differential-equations.md`

依据：AGENTS、`docs/agents/course-content-standard.md` v1.1、公式规范、总审计及微积分／复数附录 F01–F08、本组设计与作者检查记录；读取已接受的一阶样章以理解角色容器。可靠未改资产没有机械逐项重审。

遵守用户最新澄清：**所有常规积分逐行展开只要求一阶章**。本组审查要求相应官方 MS 的关键方法、条件、得分步骤不缺失；不因合理压缩常规积分而报错。自拟题核查数学和同类方法，不赋予官方分值。

## 发现与修复复查

### R1 · P2 · 每题独立边界尚未实现（初审；四章、两语；已关闭）

长期标准 §6 明确要求“每题有自己的边界”，用户也要求独立任务有自己的边界。初审时每章整个 Practice 由一个 `lesson-check` 包住，多个题干和展开解答共用同一个外框；Diagnose 及后续一至两个 retry 也共用一个外框。标题和答案折叠已有，但题目角色边界仍覆盖下一题。

初次定位（EN；对应中文同样存在）：

| 章节 | Practice 容器 | Diagnose/retry 容器 | 不受此发现影响的独立容器 |
| --- | --- | --- | --- |
| inverse | `#practice` 前，约 417 行至 772 行，Q1–Q8 及三图任务 | 约 774 行起，诊断、主值 retry、积分综合 | 无需改动已正常展开示范 |
| arc | `#practice` 前，约 248 行至 472 行，Q1–Q7 | 约 474 行起，诊断和线段重试 | 无需改动已正常展开示范 |
| hyper | `#practice` 前，约 486 行至 756 行，Q1–Q8 及六图任务 | 约 758 行起，诊断、acosh retry、asinh 综合 | `#equation-selection-task` 已独立 |
| second | `#practice` 前，约 386 行至 588 行，Q1–Q7 | 约 590 行起，诊断和重根重试 | E7 的独立尝试容器已独立 |

所需修复：主题标题和组说明放在各题之外；每道独立题／补步／诊断／重试分别有单层边界。保留原题干、锚点和数学；各自的提示与答案继续分开默认关闭。避免通过给外层再嵌套题框实现。源码修复后需由主代理在实际生成页确认边界；本内容审查不运行构建。

状态：**2026-10-23 复查 Newton 13:41 后源码，R1 关闭**。已逐页读取八页 Practice、Diagnose 和 retry 的题干、边界及折叠开闭。各练习／作图／诊断／重试现有自己的单层 `lesson-check`，前题结束后才开始下一题；组标题与说明在题框外。所有受影响提示与答案仍分别默认关闭，诊断可只有一个关闭反馈。

| 章节 | 修复后 EN 范围 | 修复后 ZH 范围 | 已读题框数（每语） |
| --- | --- | --- | ---: |
| inverse | Practice L421–804；诊断／两项重试 L810–879 | L423–806；L812–881 | 9＋3 |
| arc | L254–496；L502–553 | L256–498；L504–555 | 7＋2 |
| hyper | L490–799；L805–870 | L492–801；L807–872 | 9＋3 |
| second | L390–612；L618–664 | L406–628；L634–680 | 7＋2 |

此处行号对应本次修复复查时保存的源码。额外的 hyper 正性筛选和 second E7 任务本来已有独立边界，不混入上表的修复题框数。实际生成页仍由主代理进行技术阅读验收。

### R2 · P2 · 六图任务的答案缺少题目要求的指数奇偶性论证（初审，已关闭）

初审时，两语 `hyperbolic-functions/#graph-and-branch-task`，答案开头约 560–564 行。英文任务明确要求用 exponentials justify parity，中文也保留相同英文要求；答案仅列 `sinh(-x)=-sinh x` 与 `cosh(-x)=cosh x`，没有从指数定义推出这两个结论。后面的 cosh 最小值恒等式与 acosh 分支、导数推导正确，但不能替代奇偶性证明。

所需修复：在答案中各补一条从定义展开的等式链，例如 `sinh(-x)=(e^{-x}-e^x)/2=-sinh x`，cosh 同理。两语保持等量帮助。另建议将最小值的“Equality holds only at x=0”移到其恒等式之后，避免隔着 acosh 中复用的 x≥1 变量造成指代不清；此句原本意图正确，不报成数学反例。

状态：**2026-10-23 复查两语修复后，R2 关闭**。EN L568–582、ZH L570–584 已各从指数定义写出负输入、提负号／交换加数、原函数的完整等式链；独立核对两链成立。最小值恒等式紧接 `e^x>0`，并就地说明等号当且仅当 `e^x=1`、即 `x=0`。后续 acosh 的二次根、主值选择和导数域与初审正确内容一致；两语帮助量对应。

### R3 · P2 · 二阶的“复二次根”先修落点与新版 AS 内容错配（初审，已关闭）

初审时，两语 second-order 的 Before you start（EN约23行／中文约25行）将“complex quadratic roots／复二次根”指向 `complex-numbers-and-roots/#roots`。已打开目标核读：该段现为 Transforming quadratic roots／二次根的变换，讲根和积及倒数根，并不恢复用负判别式／配方求共轭复根。相应实际示范 `(z−1)²=−4 ⇒ z=1±2i` 位于前面的 `#conjugate` 段末。

所需修复：两语把该先修链接准确指向含配方求复根示范的现有段（例如 `#conjugate`），并说明读到二次式配方和负判别式；返回二阶 Example3 分清实部和频率。无需改 AS 课程或添加重复课程。链接原本存在，问题是技能定位错配，不报为404。

状态：**2026-10-23 13:48（Asia/Singapore）独立核对主代理接管的两行修复，R3 关闭**。EN L23／ZH L25 现均指向对应语言的 `#conjugate`，并明确读到配方示范与负判别式说明，再返回二阶例3解释实部及频率。已实际打开两语 AS 目标：EN L88–96、ZH L89–97 包含该配方与实系数／负判别式说明；不要求改 AS 课程。

返回上下文亦成立：二阶例3由 `(m+1)²+4=0` 得 `m=−1±2i`，构造 `e^(−x)(Acos2x+Bsin2x)`，实部和频率有明确对应。两语修复帮助一致。在内存中仅反向还原链接片段及新增说明句，文件字节哈希分别恢复修复前的 `7a1e49f1b34a11cb0bd1b71c7a4da666ee034e3105ba9d33a0cf632f4abd3f9d`、`e660070d858affb9be14d5bb3b371868e233332d56258787c2b3b09d4cc6c0ce`，确认相对已审版本只改这两行，题干、数学及其他正文未变。本审稿者未修改课程。

## 已审内容证据

以下是审查者独立重建的推理与目标证据，不引用作者自测作为独立检查结果。后续复查只重看修复影响的部分。

| 目标／原审计缺口 | 改稿中的学习与独立产出 | 审查判断 |
| --- | --- | --- |
| 反三角三图、主值（F02、F03） | 正常展开概念与例题；`#three-graph-task` 交三幅有标记草图并纠正 arccos 方向；`#principal-value-retry` 在新角区间重新选主值 | 实际作图与主值均有独立产出；重试针对同一错因，不再以积分题充当主值恢复 |
| 反三角求导、积分与条件 | 复合求导、配方、尺度换元、分部及定积分；Q2–Q8 和积分综合 | 关键方法、系数、定义域与端点使用正确；官方 Q6–Q8 身份和英文任务保留 |
| 弧长与旋转面积 | Cartesian/parametric 微元解释，6 个公开示范；Q1–Q7、缺 ds 诊断与新线段重试 | 速率、距离半径、一次描绘及旋转后重复覆盖区分正确；同错因重试仍检验 ds |
| 弧长先修（F04） | 精确回补求导、换元、分部、对数；Q2 用分部及对数换元建立原函数 | 不强迫先学后章 hyperbolic。题目允许用提示中的原函数；答案额外推导合理，不把该推导当作题干强制评分点 |
| 双曲方程（F02、F06） | E2–E3 紧邻方程方法；独立 `#equation-selection-task` 真有负指数候选 | 示范位置已修；必须执行正性筛选，具有真实方法选择证据 |
| 双曲六图、反函数证明（F02） | `#graph-and-branch-task` 要六图、指数性质、acosh 对数及导数推导 | 图与分支独立目标齐备；R2 修复后答案已补指数奇偶性论证，并明确最小值取等条件 |
| acosh 条件恢复（F03） | `#acosh-branch-retry` 区分方程全解、主值、负输入、端点与导数域；保留 asinh 综合 | 同一分支／定义域错因得到再次独立判断，原 asinh 题不再冒充该恢复证据 |
| 二阶 CF／PI 首次示范（F01） | 三种根、指数／三角／多项式 PI 公开；新增零根、单根及三角共振完整示范，E7 为组合尝试 | 首次方法不再全藏在答案；E7 用到的方法已先建立 |
| 二阶独立选择与恢复 | Q1–Q7；E7 混合非齐次及无穷远条件；重根诊断后反向恢复方程再求解 | 条件用于总解；重复根需要 x² 的理由和实代入充分；新任务确有逆向迁移 |
| 双语帮助、先修与回顾（F04、F08） | 两语保留相同英文任务及数据；精确先修链接和返回动作；课程 `#mixed-review`、`#later-review` 真实任务入口 | 改动的条件、提示及解答帮助量对应；R3 修复后二阶复根先修落点与实际示范一致；回顾落点存在。安排不等于已观察到延后保持 |

## 独立数学核算

| 改动对象 | 独立核算与条件 |
| --- | --- |
| inverse 三图及主值 retry | arccos 从 (−1,π) 递减至 (1,0)；当 π/2≤θ≤3π/2，π−θ 属于 [−π/2,π/2] 且正弦不变，因此 arcsin(sinθ)=π−θ，三点为 π/2、0、−π/2 |
| inverse E4–E8 的积分链 | 两缩放系数分别 1/20、1/2；E6 配方为 15−4(x+1)²，原函数 ½asin(2(x+1)/√15) 且严格域；E7 端点用 b→2−，结果 π/2，另一例 π/(3√3)；E8 余项为 ½ln(1+x²)，乘积求导核验成立 |
| inverse 官方 Q6 | 9−2(x−1)²；u=√2(x−1) 后限为 0、3√2/2，系数 1/√2，结果 π/(4√2)；对应 MS 的配方、换元因子、反正弦及代限齐全 |
| inverse 官方 Q7–Q8 | Q7 余项 ∫x/√(1−x²)dx=−√(1−x²)，故原函数 xasin x+√(1−x²)，定积分 √3π/6−1/2；Q8 产品导数给出余项 x/(1+x²)，结果 π/4−ln√2；没有把 hence/by parts 改成只报结果 |
| inverse 积分综合 | y=atan(3x)+π/6，导数 3/(1+9x²)，初值及值域 (−π/3,2π/3) 正确 |
| arc E1–E6 | 长度依次 14/3、3/4+½ln2、ln2；三个面积 8π√2、2π√2、8π。E2 正根化简先检验 x>0，E3 的 tan t 在所给区间非负；穿轴例分两段距离半径 |
| arc 改写 Q2 | 设 I=∫√(1+x²)dx，分部得到 2I=x√(1+x²)+∫dx/√(1+x²)。令 u=x+√(1+x²)>0，du/u=dx/√(1+x²)，故定积分 0→2 为 √5+½ln(2+√5)。与被积函数导数、限一致 |
| arc Q6–Q7、诊断／重试 | 单位整圆长 2π，上半圆只生成一次球面，面积 4π；全圈面积积分 8π 重复覆盖。Q7 速率 2√2t，L=√2、S=π√2。缺 ds 题补 √10 得 3π√10；新线段速率 5，L=5、S=30π，无端盖 |
| hyper 新正性筛选 | t=e^x>0，3sinhx+coshx=2 化为 2t²−2t−1=0；只留 (1+√3)/2，x=ln((1+√3)/2)。由 2t−1/t=2 回代成立 |
| hyper 六图及 acosh | cosh x−1=(e^x−1)²/(2e^x)≥0。逆支令 t=e^y≥1，二次根 x±√(x²−1) 互为倒数；x>1 时舍小于1的根。导数 1/√(x²−1) 只适用 x>1。六图域、值域、端点、单调及渐近线说明正确 |
| hyper 新分支 retry | cosh y=2 的全解 ±ln(2+√3)；acosh2 仅非负值，acosh(−2) 无实值，acosh1=0 但无有限端点导数；恢复目标与诊断一致 |
| hyper 更改积分及 asinh 综合 | E8 系数 1/3；E9 在绝对值 x<2 时系数 1/8 的 atanh(x/2)，一般对数形式系数 1/16；部分分式及第二线性换元的负号正确。Q8 系数 1/2、1/10、1/2，acosh 支域保留。asinh 综合 k=2，x=2/3，点 (2/3,ln3)，斜率随绝对值 x 增大而减小 |
| second 新公开示范 | 多项式 PI=x²−1；重零根积分得 x³/3+Bx+A；单根 PI=2xe^x，左边贡献 4e^x；三角共振 PI=xsinx，左边贡献 2cosx。均由导数代回重建，非仅核对终值 |
| second 重根示范 | Ce^(2x) 和 Cxe^(2x) 代回都为0；Cx²e^(2x) 给 2Ce^(2x)，所以 C=4；重数与最低附加幂相符 |
| second E7 | PI=Cx+D+Exe^(−2x) 代回为 −2Cx+(C−2D)−3Ee^(−2x)，得 C=−2,D=−1,E=2。总解中的 Be^x 被导数极限排除；xe^(−2x) 的衰减单独说明；初值得 A=3，最终 (3+2x)e^(−2x)−2x−1 |
| second 改写 Q4–Q7、retry | Q4 PI=x⁴−12x²+24；Q5 PI=−5xe^x；Q6 解 sin2x−2xcos2x，导数4xsin2x，代回8sin2x；Q7 x³+2x²+1 符合两端条件。retry 辅助式(m+1)²，解(1+x+3x²)e^(−x)，代回6e^(−x)，初值1、0成立 |

## 本轮实际读取的 primary sources

阅读日期均为 **2026-10-23**。只读本次相关身份页、条目、题目和配套 MS；没有宣称全卷通读。旧 AQA 文件虽由 PMT 托管，作者身份仍为 AQA；它们不是 OxfordAQA FM03 历年卷。PDF 文本提取有排版限制，本轮未完成所有原页图像的视觉复核。

| 实际材料／正文身份 | 实际范围和本次用途 |
| --- | --- |
| [当前 OxfordAQA 9665 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) → [specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) | FP2.7–8：PDF 第17页／印刷18；FP2.9：PDF18／印刷19；FP2.11：PDF19／印刷20。涵盖反三角微积分、两坐标弧长／绕x轴曲面积、双曲证明与图、二阶 CF/PI；维持9665，不迁移9765 |
| OxfordAQA FM03 Unit FP2 **Specimen 2018**：[QP](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf) / [MS](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf) | Q2：QP4–5/MS5，Q7：QP12–13/MS10，Q9：QP15–16/MS12，Q11：QP18–19/MS14（均一基PDF页）。正文 Specimen2018 为身份依据，URL 的2019/2016不改变它。HyperE3和secondE7更改数据，均已标改编；arcE3措辞改编。检查指数法／CF-PI／无穷远条件／换元／速度积分关键证据 |
| AQA6360 MFP2 January2012 Q6：[QP](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20QP%20-%20FP2%20AQA.pdf) / [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20MS%20-%20FP2%20AQA.PDF)，MS Version1.0Final | 身份、QP3/MS7；inverseQ6的2+6分题身份及方法。另与OxfordAQA specimenQ9交叉核对；没有给改编题套官方分值 |
| AQA MFP2 January2011 Q5：[QP](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20QP%20-%20FP2%20AQA.pdf) / [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20MS%20-%20FP2%20AQA.PDF)，MS Version1.0 | 身份、QP3/MS5；inverseQ7的2+6分、指定分部积分及余项／端点；英文原题与题目身份保留 |
| AQA MFP2 June2007 Q4：[QP](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF) / [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF)，MS Version1.0:0607 | 身份、QP3/MS5；inverseQ8的2+5分、乘积导数和 hence 积分、½log及确切终值 |

来源记录勘误（非课程数学阻断项）：初审发现作者记录将大纲 PDF 一基页码写成18、19、20，实际为17、18、19；印刷页18、19、20正确。已核读作者后续修订，上表及修订说明已由作者纠正。本审稿者没有编辑该作者记录。

## 技术、试用与复查状态

- 本审查没有运行 build、tests、浏览器／桌面／手机／键盘实际阅读；作者自测或主代理构建不冒称为本审查执行。
- 两语改动题干、条件、关键提示及新增解答已阅读对照；数学重算支持的是内容判断，不代替公式渲染及展开后边界验收。
- 课程入口已存在 `#mixed-review`、`#later-review`；有关 hyperbolic 与 arc 的回顾任务确有可交作答，属于阅读关联上下文，未接管 index 审查或编辑。
- 学生试用仅限用户已接受的一阶积分因子样章；这四章没有真实学生首次作答、重试及延后保持证据。
- R1 题框拆分、R2 两语证明、R3 先修落点及受影响上下文均已按实际保存源码复查关闭。本轮内容审查无遗留发现。
- 主代理回报技术专项已通过，最后全站构建及受影响回归会在其他组有限 Q5 修复后统一执行。这属于主代理的技术交接状态，本审稿者没有据此新增构建／测试通过声明。

## 最终复核源码快照

记录时间：**2026-10-23 13:48（Asia/Singapore）**。SHA-256 按实际保存文件字节计算。六份未因 R3 修复改变的页面仍与 Newton 13:41 完稿快照一致；两份 second-order 为主代理仅修先修行后的版本。以下是本报告最终内容结论对应的源码，后续如再改变数学、题干或任务帮助，应复核相应影响。

| 文件（相对仓库根） | 行数 | SHA-256 |
| --- | ---: | --- |
| `alevel/a2-further-mathematics/inverse-trigonometric-functions.md` | 910 | `34e6c33633d4d86df6e6480c5cb1f4b1cb14700cb257ebe041642d37ba1fed38` |
| `alevel/a2-further-mathematics/arc-length-and-surface-area.md` | 582 | `8bbf0c5092bb4ebc1d6f93537405ab96259246f898473152b2018fb1d8adbc6c` |
| `alevel/a2-further-mathematics/hyperbolic-functions.md` | 899 | `e191fa610e0c46a6cbbf68e4689402453527fd652356de15936dcb8607257855` |
| `alevel/a2-further-mathematics/second-order-differential-equations.md` | 704 | `38b24c51bfce39b30401941807c4f011a67e596a180753e955d2b298cf3a17a0` |
| `zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md` | 912 | `460e32a48f03e0fc29fa5f0dbdc568c85b13e68ebfb67edc1b3afd604b819487` |
| `zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md` | 584 | `aed100edc10e0e2ec95792392e525e3fe3eb69ca4062306424147c760997b811` |
| `zh/alevel/a2-further-mathematics/hyperbolic-functions.md` | 901 | `0c13cbec8fbf8a92a915324f0e549264876d15ec818af6275cf91ab48c72610a` |
| `zh/alevel/a2-further-mathematics/second-order-differential-equations.md` | 720 | `935f92b2e9de9d1d3f9785b4854719cb7bb1e0a84be4388425b631a6f6c87935` |
