# FM03 微积分四章升级：设计与作者检查

## 设计卡（先于正文修改，2026-10-23）

- 作者身份：本记录由本组 author 编写；作者核算、自检不称独立审查通过。
- 基线与写入边界：`d50b33b`；只改中英 `inverse-trigonometric-functions`、`arc-length-and-surface-area`、`hyperbolic-functions`、`second-order-differential-equations` 八页及本记录。共享工作区其他改动不归本组；不改入口、共享 CSS、标准、脚本，不 build/commit/push。
- 已读依据：AGENTS、RTK、课程内容长期标准 v1.1、数学公式规范、总审计及微积分／复数附录 F01–F08；读取现行一阶积分因子样章及其实施记录。用户已接受样章结构。最新澄清：逐步展开全部积分只是一阶章要求；本组以保全相应官方 MS 的关键方法、条件和得分步骤为准，常规运算可压缩。已补的有助理解步骤保留，不机械扩写公式族。
- 资格：OxfordAQA 9665，A2 Unit FP2／FM03，FP2.7、FP2.8、FP2.9、FP2.11。当前资格页链接到的大纲正文为 v5.2，2017 起教学、2019 起 A-level 考试；不迁移 9765。
- 中心问题：反函数怎样限制分支并参与微积分；曲线的长度与旋转面积怎样由同一微元建立；二阶线性方程怎样根据根和非齐次项选择独立试探式并使用条件？
- 先修：限定反函数、链式／隐式／乘积求导、参数导数、配方、换元、分部积分、指数对数积分及复二次根。链接现有对应技能段，给出回补后返回的具体动作。
- 核心条件：反三角主值；指数代换为正；acosh 输入至少 1、输出非负而导数要求输入大于 1；平方根绝对值；半径取距离；参数覆盖一次；共振按根重数消除 CF 重复。
- 图的用途：保留已有三反三角／六双曲图及替代文字，用作概念解释与作答后核对；独立草图要求先遮住参考图、纸笔作图并解释分支，不删 alt 隐藏答案。
- 示范与撤架：沿用 `reading_layout`、`worked-example`、`lesson-check`。反三角和弧长保留有效示范，补积分链；双曲 E2–3 邻接方程方法；二阶各新 CF／PI 类型首次示范正常展开，混合 E7 保留学生尝试。提示、答案分别默认关闭；目录只保留主题。
- 独立与恢复：保留原英文题干、身份、数据、锚点；新增任务另标自拟，不给官方分值。三图作图／纠错、负候选根筛选、反函数分支推导、主值／acosh 同目标重试各有实际产出。有效原重试保留。
- 后续回顾：四章均链接主代理负责的课程入口 #mixed-review 与 #later-review 实际任务，本组不编辑入口。不把任务安排称为已观察到保持。

## 目标证据表（实施前定位）

| 目标与条目 | 精确先修回补 | 讲解／示范 | 独立产出 | 判据、错因与同目标恢复 |
| --- | --- | --- | --- | --- |
| FP2.7 三反函数的主值与图像 | functions#inverse-functions；三角函数对应段 | values-and-graphs、E1 | 原 Q1 加独立作图／纠图小任务 | 三图端点／渐近线、增减、域与值域；主值错误接新复合角重试 |
| FP2.7 复合求导与适用域 | differentiation#composite-functions、#implicit-functions | differentiation、E2–3 | Q2、Q5 | 内层导数、函数域与导数域分别检查；回 E2 后重做未完成任务 |
| FP2.7 配方、缩放、分部与定积分 | integration#substitution、#integration-by-parts、#logarithmic-form | E4–8 | Q3–4、Q6–8；后续 课程入口 #mixed-review／#later-review | 保留选法、系数、原函数和代限等关键证据；困难新方法完整示范，常规运算可压缩 |
| FP2.8 Cartesian／parametric 长度 | differentiation#composite-functions；parametric-equations#parametric-differentiation | ds 推导、E1–3 | Q1–3、Q7 | 两方向导数、正平方根与正确限；回具体示范后新端点重试 |
| FP2.8 绕 x 轴曲面积 | integration#definite-integrals、#substitution | 半径×ds、E4–6 | Q4–7、原有效重试；课程入口 #mixed-review／#later-review | 距离半径、ds、无端盖、无重叠；缺 ds 的反馈仍检验同目标 |
| FP2.9 指数定义、图与恒等式 | integration#exponential-logarithmic-integrals；functions#inverse-functions | definitions、graphs-and-identities | Q1–2；新增 graph-and-branch-task；原 asinh 综合 | 六图均有独立特征产出；从指数解释奇偶／最小值与反射限制 |
| FP2.9 解方程并筛有效根 | 指数正性与二次方程 | linear-combinations 紧接 E2–3 | 保留 Q3；另加 equation-selection-task | 必须面对负候选根并解释不能取对数；不能以两正根题代替 |
| FP2.9 推导反函数与分支 | differentiation#implicit-functions | inverse-cosh 等 | graph-and-branch-task 推导；acosh-branch-retry | 区分 cosh 方程全解和 acosh 主值，负输入／端点另判 |
| FP2.9 微积分 | 链式／换元／部分分式技能段 | differentiation、E5–9 | Q5–8；课程回顾任务 | 系数与积分链完整、正确支域；导数检查为交叉核验 |
| FP2.11 三类 CF 与条件 | differentiation#products-and-quotients；AS 复数二次根段 | E1–3 首次完整示范 | Q1–3；课程回顾任务 | 根类型、两个独立函数、总解条件；回对应根类型示范 |
| FP2.11 PI、共振与零根 | 一阶 #cf-and-pi；乘积求导 | E4–6 完整，补单根／三角／多项式的关键支架 | Q4–7、原有效重试、E7 学生尝试 | 先设、求导、代回比较系数；重根明确消零过程；两次积分逐次写出 |
| 隔段提取与方法选择 | 已学本组知识 | 前章具体回顾链接 | 课程入口 #mixed-review／#later-review | 先关闭提示说明方法与条件；按错因回指原段；真实作答待收集 |

## 实施与作者检查

### 实际改动与审计闭合

只写以下八页及本记录；没有改共享 CSS、AGENTS、标准、scripts、index、其他章节，没有 build/commit/push。

| 两语正文 | 实际改动与产出 |
| --- | --- |
| [inverse EN](../../alevel/a2-further-mathematics/inverse-trigonometric-functions.md) / [中文](../../zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md) | 紧凑目录、reading_layout、8 个正常展开示范；补换元系数、原函数和代限。F02：three-graph-task 交三幅草图与反余弦纠图理由。F03：principal-value-retry 同目标重测主值；原积分／平移值域任务另作综合保留。原官方 Q6–8 英文题文、身份、数字和分值保留 |
| [arc EN](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md) / [中文](../../zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md) | 精确先修、6 个正常展开示范；补拆项、换元、原函数和代限。Q2 以分部积分和对数换元推导原函数，避免依赖尚未学的双曲函数。保留原 Q1–7 和有效 ds 诊断／端点重试，分开解释半径、速率、覆盖一次与旋转重叠 |
| [hyper EN](../../alevel/a2-further-mathematics/hyperbolic-functions.md) / [中文](../../zh/alevel/a2-further-mathematics/hyperbolic-functions.md) | F06：原 E2–3 紧接方程方法，E4 紧接反函数，E5–6 紧接求导；9 个正常展开示范。F02：equation-selection-task 确有负候选；graph-and-branch-task 要六图、指数性质、acosh 分支与导数推导。F03：acosh-branch-retry 区分方程全解、反函数主值、函数域与导数域；保留原 asinh 综合。补尺度积分与对数部分分式 |
| [second-order EN](../../alevel/a2-further-mathematics/second-order-differential-equations.md) / [中文](../../zh/alevel/a2-further-mathematics/second-order-differential-equations.md) | F01：E1–6 首次 CF／PI 方法正常展开；补多项式、重零根、单根共振、三角共振四个自拟示范。实际写出共振试探式的导数与抵消。E7 为关闭提示／答案的独立组合尝试，使用无穷远条件；原 Q1–7 与有效重根重试保留，Q7 两次积分分开写，重试补完整求导与条件 |

F04：先修链接精确到技能段，并给返回动作。F08：四章均链接课程入口 mixed-review 与 later-review；源码核查时两个实际锚点均已存在，入口任务由主代理制作。独立任务提示和答案分别默认关闭，首次新方法示范正常展开。参考图及 alt 保留；独立画图要求先遮住参考图，不删替代文字。以上为作者实施与检查，不是独立审查通过。

### 本轮实际重新读取的官方材料

读取日期均为 **2026-10-23**，在正文数学编辑前读取；不把旧“已读”记录当成本轮证据。web PDF 文本读取成功，截图接口未提供页面图像，故没有完成原 PDF 的视觉逐页核验。只读取有关题目、对应 MS 部分和身份页，不宣称读完每份卷子。

| 材料及正文身份 | 本轮阅读范围与用途 |
| --- | --- |
| [当前 9665 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) → [大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)，正文 Version 5.2，2017 起教学、2019 起 A-level 考试 | 身份及 FP2.7–8（PDF17／印刷18）、FP2.9（PDF18／印刷19）、FP2.11（PDF19／印刷20）；PDF 页码为一基页码。维持 9665，不因当前资格页出现另一资格而迁移 9765 |
| OxfordAQA FM03 Unit FP2 **Specimen 2018** [QP](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf) / [MS](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf) | Q2：QP PDF4–5／MS5；Q7：QP12–13／MS10；Q9：QP15–16／MS12；Q11：QP18–19／MS14。以正文 Specimen 2018 为准，忽略 URL 的2019／2016。原 Q2 含 ln2，值½ln6；hyper E3 改为 ln3，保持改编身份。原 Q7 与 second E7 方程数据不同。Q9 与 inverse Q6 同题。Q11 支持 arc E3 的速率与积分，措辞标改编 |
| AQA Mathematics 6360／MFP2 January 2012 Q6：[QP PDF3](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20QP%20-%20FP2%20AQA.pdf#page=3) / [MS PDF7](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20MS%20-%20FP2%20AQA.PDF#page=7)，MS Version 1.0 Final | 身份页、Q6 与配套 MS；inverse Q6 的配方、换元系数、反正弦与代限，另与 OxfordAQA Q9 交叉核对 |
| AQA MFP2 January 2011 Q5：[QP PDF3](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20QP%20-%20FP2%20AQA.pdf#page=3) / [MS PDF5](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20MS%20-%20FP2%20AQA.PDF#page=5)，MS Version 1.0 | 身份页、Q5 与配套 MS；inverse Q7 的导数、分部积分、余项负号与确切常数 |
| AQA MFP2 June 2007 Q4：[QP PDF3](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF#page=3) / [MS PDF5](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF#page=5)，MS Version 1.0:0607 | 身份页、Q4 与配套 MS；inverse Q8 的乘积求导、积分恒等式、½log 系数与代限 |

三份旧 AQA 卷是 AQA 编写、PMT 托管，QP 为压缩排版，不能称为 OxfordAQA FM03 历年卷。自拟题按官方同类方法核查，不赋予官方分值或称自拟检查为官方评分标准。

### 作者数学核算

| 对象 | 解析核算结果及条件 |
| --- | --- |
| inverse 图与主值重试 | arccos 从 (−1,π) 递减到 (1,0)。π/2≤θ≤3π/2 时，sin(π−θ)=sinθ 且补角在主值域内，故返回 π−θ，三个检查点为 π/2、0、−π/2 |
| inverse E4–8、Q3–4 与原重试 | 标准积分保留 dx 系数；E5 余例令 w=x²+6x+25。E7 正常积分换元 u=√3x/2，限0→√3/2，系数1/√3，值π/(3√3)；反常积分取 b→2−。E8 余项½∫dw/w，w=1+x²。重试得 y=arctan(3x)+π/6，值域(−π/3,2π/3) |
| inverse 官方 Q6–8 | Q6 配方9−2(x−1)²，换限0→3√2/2，值π/(4√2)。Q7 实际换元 w=1−x² 得 −½∫w^(−½)dw，原函数 x arcsin x+√(1−x²)，值√3π/6−½。Q8 余项换限1→2，值π/4−ln√2；各关键方法与本轮相应 MS 一致 |
| arc E1–6 | E1 u=1+x，限1→4，L=14/3；E2 拆 x/2+1/(2x)，L=3/4+½ln2；E3 w=cos t，限1→½，L=ln2；E4 S=8π√2；E5 两段积分各½，S=2π√2；E6 S=8π |
| arc Q1–7、诊断和重试 | Q1 L=2√10；Q2 分部积分得2I=x√(1+x²)+ln(x+√(1+x²))+C，定积分值√5+½ln(2+√5)；Q3 L=3π/2；Q4 S=4π√2；Q5 S=8π√2；Q6 L=2π、独立球面4π，整圈曲面积积分8π重复覆盖；Q7 L=√2、S=π√2。诊断S=3π√10；重试L=5、S=30π，无端盖 |
| hyper 有效根与图／分支 | 新任务得2t²−2t−1=0，t=(1±√3)/2，舍负留正，x=ln((1+√3)/2)，回代为2。cosh 最小值由(eˣ−1)²/(2eˣ)≥0；acosh 二次根乘积1，选支要求 t≥1。cosh y=2 全解±ln(2+√3)，acosh2 只取非负；负输入无实值，输入1有值但无有限导数 |
| hyper 改写积分 E7–9、Q7–8 | E8 因子(2/3)/2=1/3；E9 部分分式系数1/16，第二线性换元给负号。atanh 形式仅在其输入绝对值小于1成立，log 形式在排除奇点的各区间分别使用常数。Q8 三原函数系数½、1/10、½，末式限定x>3/2；复合 sech²、cosh 用实际内层导数核对 |
| second E1–6 及新增公开示范 | 三类 CF 与条件求导代回。新增多项式 PI=x²−1；重零根两次积分得x³/3+Bx+A；单根 PI=2xeˣ 贡献4eˣ；三角共振 PI=xsin x 贡献2cos x。E6 的 Ce^(2x)、Cxe^(2x) 均实际代入为0，Cx²e^(2x) 贡献2Ce^(2x)，故C=4 |
| second E7、Q4–7 与重试 | E7 比较系数C=−2,D=−1,E=2，无穷远条件排除eˣ，再得A=3，解(3+2x)e^(−2x)−2x−1。Q4 PI=x⁴−12x²+24；Q5 PI=−5xeˣ；Q6 明写乘积导数，解sin2x−2xcos2x；Q7 两次积分得x³+2x²+Bx+A，条件A=1,B=0。重试得C=3,A=B=1，解(1+x+3x²)e^(−x)，左边6e^(−x) |

### 实际执行的检查

- 执行现有 test-further-inverse-trig.js 和 test-further-second-order.js 的数学部分：在内存中按数学／源码HTML分界运行，未改脚本。反三角的原函数导数、积分及官方结果检查通过；二阶14个原解族、初值／边值与大x导数检查通过。没有把部分执行称完整脚本通过。
- 另作72个数值断言：20个弧长／面积定积分（拆段分别计）、8类双曲原函数数值导数、主值、有效根、acosh条件、新增PI与重试代入，全部通过。数值采样仅交叉支持作者解析核算，不是72题，也不是全范围证明或学习效果验收。
- 用仓库现有MathJax（base/ams）编译四章按章去重共922个TeX字串，没有merror；两语完整TeX序列精确一致。公式数量不是课程质量判据。
- 八页英文题干、外部来源URL、图路径、双语显式锚点对应；旧显式锚点保留，反三角英文自动锚点按旧中文稳定ID显式固定。官方Q6–8的题文、数字和分值逐段保留。
- 初次源码检查确认 section/details 标签配对、独立提示／答案默认关闭、ID无重复、紧凑目录有真实目标；172处内部链接通过，含课程两语 mixed-review／later-review。写前检查八页没有并发编辑冲突。该次配对检查未发现下述中文反三角角色容器错序，不能作为生成 HTML 边界验收。
- 范围内 git diff --check 通过。没有保存测试脚本、安装依赖或修改构建产物。整套既有专项含固定折叠数和生成HTML断言，例如二阶旧数量31，本轮按角色调整后19；该旧数量不能直接代表本轮课程验收。本组未改共享脚本，未宣称完整专项通过。

### 未执行与证据边界

未执行Jekyll build、生成HTML验收、桌面／手机／键盘／屏幕阅读器实际阅读检查，交主代理汇总。本组为author，核算与自检不称独立审查通过。仅已接受的一阶积分因子样章有用户真实反馈；**本组四章没有学生首次作答、重试或延后保持证据**，不宣称学习效果已验证。课程入口任务由主代理制作，本组只核对链接落点。

学生试用边界：仅用户已接受的一阶积分因子样章有本轮提供的结构／跳步反馈；本组四章没有真实学生首次作答、重试或延后保持证据。

### 构建回报后的边界修复（2026-10-23）

主代理实际构建发现中文反三角例8求导核验后，下一 lesson-check 先打开、旧 worked-example 才关闭，造成真实嵌套。直接读取现有生成 HTML 确认了该缺陷；将中文例8的关闭标签移至下一 lesson-check 开始标签之前。例7边界原本正确，英文此处也正确，未作无必要修改。修后只读检查两语各8个 worked-example、2个 lesson-check 均无 section/details 父容器，所有 details markdown="1" 且起止配对。此次未 build、未运行 tests；等待主代理重新构建确认生成 HTML。本组作者完稿可交接构建，作者自查不称独立审查。

### 独立审查反馈后的修订设计（2026-10-23，R1／R2）

Sartre 的独立报告指出：R1 四章两语 Practice／Diagnose 多题共用边界；R2 六图任务未实际展开指数奇偶性证明。本次修订先把主题标题、组说明、后续路线移出题框，再为每道练习、诊断和重试各设单层 lesson-check，保留原锚点、英文题干、身份、数学及关闭的提示／答案；不采用外层套内层题框。双曲图像答案补 sinh／cosh 从指数定义比较正负输入的等式链，并将最小值等号条件邻接不等式。目标证据表中的独立产出位置不变，新增论证检查对应 FP2.9 的指数性质。中文 inverse 例7／8闭合已经修复，旧生成页四视图不能作为本版源码的验收。修后交接主代理重新构建，author 仅记录源码检查，不代称独立复查通过。

### R1／R2 修复完稿与冻结交接（2026-10-23）

- R1：中英四章的 Practice 组标题与说明、Diagnose 组说明、保留任务的过渡说明和学后路线均在题框之外。每道题／诊断／重试单独一个 lesson-check，既有单独尝试保留。两语各章 lesson-check 数为 inverse 12、arc 9、hyper 13、second 10；这是边界清单，不是内容质量判据。源码逐框复读无 section/details 交叉闭合、角色嵌套或一个框内多个独立题目；details 保留 markdown="1" 且默认关闭。
- R2：两语 graph-and-branch-task 答案从 e^(-x) 与 e^x 实际展开 sinh／cosh 的奇偶性；独立核算负号与加法交换正确。cosh x−1 共同分母化为 (e^x−1)²/(2e^x)，分母正，等号仅 e^x=1，即 x=0。最小值条件已移到相邻位置。英文任务、数学条件、分支及导数条件保持一致；自拟任务未赋官方分值。
- 页码勘误：上表大纲的一基 PDF 页从18／19／20纠正为17／18／19；对应印刷页18／19／20不变。此次采用 Sartre 对同一 v5.2 原文的页码复核，不冒称本作者重新视觉读完 PDF；本次 web 重开该大纲返回 Internal Error，不计作新增成功阅读。此前已实际读过的材料与日期沿用原范围声明。
- 中文 inverse 例7于379行前后闭合、例8于417行前后闭合；练习标题和第一道尝试随后开始。EN 同处原本正确。旧构建四视图仍记录此前缺陷，须由最终构建重验，不继承旧 HTML 的边界状态。
- 非 hyper 的正文去除角色标签／空行后与修复前一致；hyper 仅新增上述证明及邻近说明。原题、旧锚点和官方身份保留，两语无重复显式 ID。范围内 git diff --check 通过。修订过程中一次文本替换转义造成的临时重复已在源码复读时纠正；冻结版本未保留重复，正文一致性已重新检查。
- 已明确通知主代理：R1／R2 源码 ready，可以最终 build，八页冻结；请求 Sartre 复查。本作者未运行 build／tests／浏览器，不将请求复查记为复查通过。后续只写记录及另一组独立报告。学生试用边界仍只有已接受的一阶样章，本组无新增真实学生证据。

冻结源码 SHA256：

| 文件 | SHA256 |
| --- | --- |
| `alevel/a2-further-mathematics/inverse-trigonometric-functions.md` | `34e6c33633d4d86df6e6480c5cb1f4b1cb14700cb257ebe041642d37ba1fed38` |
| `alevel/a2-further-mathematics/arc-length-and-surface-area.md` | `8bbf0c5092bb4ebc1d6f93537405ab96259246f898473152b2018fb1d8adbc6c` |
| `alevel/a2-further-mathematics/hyperbolic-functions.md` | `e191fa610e0c46a6cbbf68e4689402453527fd652356de15936dcb8607257855` |
| `alevel/a2-further-mathematics/second-order-differential-equations.md` | `7a1e49f1b34a11cb0bd1b71c7a4da666ee034e3105ba9d33a0cf632f4abd3f9d` |
| `zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md` | `460e32a48f03e0fc29fa5f0dbdc568c85b13e68ebfb67edc1b3afd604b819487` |
| `zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md` | `aed100edc10e0e2ec95792392e525e3fe3eb69ca4062306424147c760997b811` |
| `zh/alevel/a2-further-mathematics/hyperbolic-functions.md` | `0c13cbec8fbf8a92a915324f0e549264876d15ec818af6275cf91ab48c72610a` |
| `zh/alevel/a2-further-mathematics/second-order-differential-equations.md` | `e660070d858affb9be14d5bb3b371868e233332d56258787c2b3b09d4cc6c0ce` |
