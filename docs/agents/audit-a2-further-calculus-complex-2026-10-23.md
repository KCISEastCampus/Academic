# A2 高数九课双语正文审查（2026-10-23）

## 结论与审查边界

本轮按工作区现行 [课程内容长期标准 v1.1](D:/GitHub/Academic/docs/agents/course-content-standard.md:3)、[AGENTS.md](D:/GitHub/Academic/AGENTS.md)及公式规范，逐页阅读下列九课的英文正文、保留的英文题干、中文解释、例题、提示、解答、诊断、重试及来源标签。判断依据是学生实际需要完成的推理与任务，不是栏目、题量或折叠框数量。

**不能据此宣布九课全部目标达标。** 已确认两门微分方程课将所有具体示范解法默认折叠，必要示范不能沿正常展开的主线连续阅读；另有若干自述目标尚缺独立产出证据，以及诊断后重试换了目标的问题。正文已有大量有效讲解和独立练习，不应把这些局部缺口概括为“没有讲解”“没有练习”或“数学全错”。

本轮未发现可确认的数学答案或推导错误。该结论来自当前源码阅读及下文列出的独立复算，不继承旧审查的数学通过结论。双语题目数据、条件和数学表达检查未见漂移；极坐标来源概括有一处与局部改编标签不一致。

本报告只覆盖九课共十八个 Markdown 源文件。官方资格、当前大纲身份与完整范围、课程入口、旧 AS 先修链接、生成 HTML、浏览器及另七课由主代理审查。主代理反馈“13 项专项本轮通过”，属协作提供的检查状态，本代理未独立复跑，也不据此认定学习目标已完成。浏览器当时仍在进行，未纳入本报告的通过证据。

本轮只新增本报告；不修改课程、布局、脚本或其他文档，不执行 Git 提交。

## 逐课目标链与恢复路径

表中 E 为正文例题，Q 为正文练习；“独立”均指未展开提示与答案时的产出。链接指向本轮读取版本的源文件行。先修栏不重复主代理负责的旧 AS 链接发现。

| 课程与正文位置 | 目标 → 讲解／完整示范 | 已有独立任务与判定证据 | 反馈 → 同目标重试 | 先修恢复及本轮判断 |
| --- | --- | --- | --- | --- |
| Roots and polynomials：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/roots-and-polynomials.md:28)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/roots-and-polynomials.md:30) | 根与系数由因式展开建立；E1–2 用关系式构造信息与新方程；E3–5 区分实系数共轭与复系数例外；E6 把单调性、连续变号和非实根实部界连接起来。示范解法可连续读。 | Q1–3 分别检验系数比、五次根关系与平移根；Q4 求全部四根，Q5 处理复系数，Q6 证明唯一实根，Q7 综合系数、平方和与共轭。不能说本课缺复系数任务。 | 诊断针对复系数下误用共轭定理；新三次式重试的系数明确为实数，可以完成而不再次辨认“非实系数时不可强推共轭”，见 F03。 | 开始前列因式定理、除法、二次公式、微分，但没有逐技能的恢复落点；AS 链接另交主审。数学链较完整，主要缺口为对应重试与后续保持证据。 |
| De Moivre：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:28)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/de-moivres-theorem.md:30) | 整数幂的证明、零／负幂、指数形式、全根、单位根、双向三角展开及积分有完整示范；根式精确值 E4 有象限选符号。 | Q1–4 有幂、全根及几何位置描述；Q5–8 有恒等变形、积分及五倍角综合。结课还承诺独立证明整数幂、实际画全部根、得到精确根式；本页练习未逐项提供这些产出，见 F02。 | 漏掉多值辐角的反馈正确；平移正方形重试可凭几何直接列根，不能单凭做对就证明已掌握完整辐角枚举。已有 Q3–4 能检验全根，见 F03 的较弱证据项。 | 归纳法、积分链接到整页；复数基础由主审归并。优先补齐明确承诺的独立产出，不需重写现有推导。 |
| Series and limits：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/series-and-limits.md:28)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/series-and-limits.md:30) | 解释部分和与收敛、导数求 Maclaurin 系数、标准展开、有效范围、乘积／复合截断、极限与反常积分。E2 展示导数求系数；E4–5 展示跨项截断。 | Q1 检查收敛及端点；Q2–4、Q7 检查套用、代入、乘积或复合；Q5 检查消项极限；Q6、Q8 要求显式极限过程。没有要求新函数从导数求系数的独立任务，见 F02。 | 截断过早的诊断后，重试先判参数使极限有限，再算存活项，确实重测截断与消项，值得保留。 | 有有限级数、二项式、积分整页链接，阶乘、几何级数、分部积分未分别定位。收敛与积分不能仅凭最终数值验收，当前解答一般有过程。 |
| Inverse trigonometric functions：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:28)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:30) | 反射与主值区间、导数的开区间、缩放和配方、端点反常积分及分部积分有解释与示范。函数域与导数域没有混为一谈。 | Q1 实际考三种主值，但只要求画 arctan；Q2 考复合导数及有效区间；Q3–8 检查积分缩放、恒等式分支和分部积分。三图目标仍缺 arcsin、arccos 的独立图像产出，见 F02。 | arcsin 复合主值诊断后改为 arctan 原函数与平移值域，属有价值的另一任务；不再次检验原困难。Q1 本来已有 arcsin 主值练习，见 F03。 | 微分、积分大多为整页入口；反常积分回补已有具体锚点，应保留。 |
| Hyperbolic functions：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:24)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/hyperbolic-functions.md:26) | 指数定义、恒等式、六图、线性组合、反函数对数式、求导与积分的支路条件都有内容；必要证明不是完全缺失。线性组合规则与其示范之间插入多个新主题，见 F06。 | Q1 重现已示范的恒等式证明；Q2 考 tanh、atanh、coth 图像特征；Q3 的两个指数根均为正；Q4 已考 acosh 负输入无实值；Q5–8 有求导与积分。筛去无效指数根、部分核心图像及独立推导的证据仍不足，见 F02。 | acosh 负输入诊断后换成 asinh 梯度与图像任务，未重测 acosh 分支；不是“全课没有定义域练习”，见 F03。 | 开始前只列技能名，没有任何回补链接；可直接复用已有普数精确锚点，见 F04。 |
| Polar coordinates：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:28)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/polar-coordinates.md:30) | 坐标转换、正半径约定、原点、草图、面积、公共区域更换边界的解释和 E1–9 示范连贯；不能按允许负半径的另一约定把本页两瓣图判错。 | Q1–4 检验转换、限制与指定区域；Q5 有公共区域分段，Q6–8 有转换及环面积。但 Q5 标题与题干已给出极点交点，不能据其完成证明学生会主动检查遗漏极点，见 F05。 | 平方差错误的反馈后，重试换成圆内、心形线外并判边界次序，能直接检验刚修复的错误，保留。 | 模辐角链接落在 De Moivre 幂证明段，未直接恢复该基础；积分、三角为整页链接。另有来源概括小矛盾，见 F07。 |
| First-order differential equations：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:24)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/first-order-differential-equations.md:26) | 标准化、积分因子的乘积法则推导、非零因子、连续区间、CF+PI 与共振有展开讲解。E1–6 的具体完整过程全部默认关闭，见 F01。 | Q1 确实考未标准化方程；Q2–3 有变系数，Q4 有多项式 PI 与边值，Q5 有共振，Q6 在负区间用积分因子。不能因重试错配否定 Q1。Q5 标题对共振判断有提示，见 F05。 | 标准化遗漏诊断后改为由解族反推 P、Q，没有非单位最高导数系数，未重测原困难，见 F03。 | P2.8 和指数／对数积分有入口，乘积法则未精确定位；可复用现有段落，见 F04。 |
| Second-order differential equations：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/second-order-differential-equations.md:24)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/second-order-differential-equations.md:26) | 辅助方程的指数试设、三类 CF、线性叠加、PI 试设与根重数、零根及边值不唯一均有主线解释；E1–7 的完整具体过程全部默认关闭，见 F01。 | Q1–3 考三类根；Q4 四次多项式 PI；Q5 简单共振；Q6 三角共振且对总解用条件；Q7 重复零根、边值与 PI 次数。题名中性，给出的混合顺序与“先解释试探式”要求是有效安排。 | 诊断只乘一次 x 的失败后，重试从解族恢复方程并解新的重根共振初值题，仍需 x²，确实重测原困难。 | 一阶课有链接，乘积求导与复二次根仅列名称。混合非齐次项加无穷远条件只有 E7 示范，本页独立题未再要求极限条件；是否须补为核心目标由主代理范围对照确定。 |
| Arc length and surface area：[EN](D:/GitHub/Academic/alevel/a2-further-mathematics/arc-length-and-surface-area.md:28)／[中文](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md:30) | 由弦长建立 ds，再由周长乘 ds 建立曲面积；E1–6 的方法、推理、结果与检查可连续读。区分半径绝对值、端盖、重复描线与旋转后重叠。 | Q1–3 考两类弧长；Q4–5 考正负半径；Q6 主动解释独立球面只计一次；Q7 同一参数化求长度与面积，不能概括为只有换数字。 | 缺 ds 的诊断后，重试由端点自建参数化、求长度及曲面，确实重测几何因子。 | 三项先修均有课程页入口，但仍需精确到参数导数与积分相关段。当前即时链条较完整；延后保持状态仍见 F08。 |

## 具体发现与最小优化

优先级是本轮内容验收用的排序：**P1** 表示在宣称有关核心目标已达标或推广该教学模式前必须处理；**P2** 表示应修复的反馈、恢复或阅读路径缺口；**P3** 表示来源说明的局部一致性问题。它们不是软件故障等级，也不表示应下线全部课程。

### F01 · P1：两门 DE 的必要具体示范系统性默认关闭

证据：一阶 [EN:74](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:74)–293、[中文:76](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/first-order-differential-equations.md:76)–295；二阶 [EN:58](D:/GitHub/Academic/alevel/a2-further-mathematics/second-order-differential-equations.md:58)–317、[中文:60](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/second-order-differential-equations.md:60)–331。具体首例的解法分别在一阶 EN:85／中文:87、二阶 EN:69／中文:73 开始的 `<details markdown="1">` 中，均无 `open`。

一阶六个例题、二阶七个例题均如此，两种语言一致。数量只用于确认同一种处理贯穿两课；判断依据是：沿初学者默认路线读完公式、步骤表和例题题干后，没有一条正常展开的具体过程，把选法、代入、积分或系数比较、使用条件及检验连起来。主线并非完全没有概念解释，展开 Solution 后也确有完整解法，因此问题是必要示范的归类与可连续阅读性，而非答案缺失。

依据标准 [第 3 节](D:/GitHub/Academic/docs/agents/course-content-standard.md:43)、[第 6 节](D:/GitHub/Academic/docs/agents/course-content-standard.md:79)及代表性示范的[阅读验收](D:/GitHub/Academic/docs/agents/course-content-standard.md:113)。标准第 6.2 节“提示与解答默认关闭”适用于让学生自行作答后按需揭示的部分，不能据此把首次教学所需的完整具体示范也全部隐藏。

**最小优化：**不重写现有数学过程；把各方法首次建立时的必要完整示范移到正常展开的正文，明确标为“观看示范”。一阶至少处理积分因子首次完整应用、CF+PI 首次应用及共振的关键解释；二阶处理 CF 加条件的首次完整应用、首次 PI，以及重根为何须乘 x² 的必要计算。后续可用明确暂停点逐步撤去支架，不必把所有例题答案一概展开；独立练习的提示和答案继续默认关闭。

**完成判据：**两语在不点击 Solution 时，均能读完相应新方法的一个完整操作与检查，然后进入明确的学生尝试；仍可独立作答的题目不提前露答案。主代理再作桌面、手机与键盘阅读验收。

### F02 · P1：部分自述目标没有相应独立产出，不能由别种任务代替

这不是要求“每公式一题”，而是区分不同的目标能力。已有讲解、示范或同章其他独立题，不自动成为目标本身的独立证据。

| 课程、目标及证据路径 | 当前独立任务实际能证明什么 | 尚缺什么 | 可执行的最小优化与验收 |
| --- | --- | --- | --- |
| De Moivre 结课 [EN:821](D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:821)／[中文:823](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/de-moivres-theorem.md:823) 承诺证明整数幂、画全部根、得到精确根式；证明在 EN:39–109，根式示范在 EN:185–217。 | Q1–8 能考幂、全根、几何位置描述、双向恒等式与积分。Q3、Q4 的描述位置不能直接算学生已经画图；整数幂应用不能算一般证明；求最小角不能算由复根推出根式。 | 本页没有要求独立完成一般整数幂证明、实际 Argand 作图、复根推精确根式的对应产出。E10 复指数积分也仅有示范，若将其单列能力亦须补证。 | 先在现有根题增加实际作图与标注；补无现成结论步骤的证明任务及一个新的复根→根式任务，例如由第一象限的 w²=1+i 求 cos(π/8)。证明是否可用归纳、负整数及零幂须怎样交代，由主代理按资格范围确认；不能只删结课目标掩盖必修要求。 |
| Series [EN:33](D:/GitHub/Academic/alevel/a2-further-mathematics/series-and-limits.md:33)、[E2:118](D:/GitHub/Academic/alevel/a2-further-mathematics/series-and-limits.md:118)／[中文 E2:120](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/series-and-limits.md:120) 明确建立导数求 Maclaurin 系数。 | Q2–4、Q7 可以通过标准展开、代入或乘积／复合完成，其他题考极限、收敛或积分；这些都是有效任务。 | 没有要求对新函数实际求出 f(0)、各阶导数值并形成系数的独立产出。 | 在已有展开练习补一小问，明确要求由导数形成系数，例如 ln(2+x) 至三次项，判断点为常数项、导数值、阶乘和组合。其结果为 ln2+x/2−x²/8+x³/24；只套标准表做对不能单独作为“导数求系数”的证据。 |
| Inverse trig [EN:749](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:749)／[中文:751](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:751) 要求画三图；[Q1 EN:382](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:382)／[中文:384](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:384)。 | Q1 考三种主值，却只要求画 arctan；Q2–8 没有补上其他两图的独立绘制或纠图。 | arcsin、arccos 的图像产出，不是它们的全部主值、导数或积分都未考。 | 扩充现有图像任务，让学生独立画或修正另外两图，说明端点、增减、定义域与值域，连回主值限制；答案图延后揭示。无需复制一套完整新习题。 |
| Hyperbolic [目标 EN:24](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:24)／[中文:26](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/hyperbolic-functions.md:26)；[Q2–4 EN:440](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:440)／[中文:442](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/hyperbolic-functions.md:442)。 | Q2 考 tanh、atanh、coth 特征；重试画缩放后的 asinh。Q3 得 t=1、1/7，均为正。Q4 已要求解释 acosh(−3) 无实值。Q5–8 主要用已给的求导、积分规则。 | 六种核心图中的 sinh、cosh、acosh 特征没有相应独立解释；“筛掉无效指数根”未真正遇到应舍的根；反函数／导数推导只有示范，没有对应独立推导。不能把 Q4 的域判断说成不存在，也不能以两根均正证明会舍负根。 | 保留 Q3 的双正根情形，补一项有正、负候选根的方程，要求说明筛选原因；例如 3sinh x+cosh x=2，对应 t=(1±√3)/2。在现有图题补余下特征判断；选一个反函数对数式或导数让学生从定义推导、说明所选支。无须把所有证明逐条复制成题。 |

### F03 · P2：指定诊断后的重试改换目标，已有相关练习仍应如实保留

依据标准 [第 5 节](D:/GitHub/Academic/docs/agents/course-content-standard.md:65)。以下前三项是主代理提示后，本轮重新读取源文确认；后两项是同样判据下的补充检查。

| 诊断与重试的具体路径 | 本课已有的相关任务；不能作出的泛化 | 错配及最小处理 |
| --- | --- | --- |
| Hyperbolic [EN:635、644](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:635)／[中文:637、646](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/hyperbolic-functions.md:637) | Q4 EN:493／中文:495 已考 acosh(−3) 为什么无实值，不能写“完全没有 acosh 域任务”。 | 诊断是 acosh(−2) 不能靠对数绝对值修复；重试是 asinh(kx) 的斜率、值与图。保留后者为综合题，另加一个新的 acosh 定义域／分支判断，例如解 cosh y=2，并区分方程全部实解与 acosh2 的主值。 |
| First order [EN:443、452](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:443)／[中文:445、454](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/first-order-differential-equations.md:445) | Q1 EN:301／中文:303 已考 3y′+6y=12 的标准化，不能写“没有标准化独立题”。 | 诊断漏除最高导数系数，重试却从已规范写出的 y′+Py=Q 恢复 P、Q，无法检查该错误是否修复。保留逆向任务，再给新的未标准化方程，要求先认 P、Q，再写积分因子及乘积导数；可在非零区间用变量最高导数系数，避免只换常数。 |
| Inverse trig [EN:705、714](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:705)／[中文:707、716](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:707) | Q1 EN:382／中文:384 已含 arcsin(sin(5π/6)) 及另两种主值，不能写“无反 sin 主值任务”。 | 诊断是 arcsin(sin θ) 被误当任意角上的恒等映射；重试要求积分得 arctan(3x)+π/6 并说明平移值域。后者正确但属另一困难。补新的复合主值题，并要求给主值区间及同正弦理由；可用不同区间的角或分段角域，避免只复述订正。 |
| Roots [EN:453、462](D:/GitHub/Academic/alevel/a2-further-mathematics/roots-and-polynomials.md:453)／[中文:457、466](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/roots-and-polynomials.md:457) | E5 解释复系数例外，Q5 也有复系数方程，不能写“共轭条件从未训练”。 | 诊断要求辨认共轭定理的实系数条件；重试明确是实系数三次式，主要测根和、积及构造二次式。保留综合题，另让学生判断一个复系数例子的共轭推论是否有效并说明理由。 |
| De Moivre [EN:779、788](D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:779)／[中文:781、790](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/de-moivres-theorem.md:781) | Q3–4 本来会检验全根。新正方形题也会检验完整根集，因此不能说其与漏根问题毫无联系。 | 证据较弱：已给正方形和一个顶点，可直接旋转列根，不必修复多值辐角步骤。只需在原重试增加“写出平移后全部辐角，并说明 n 个不同根及为何后续重复”，便可使修复过程可观察。 |

完成判据不是“多出一个 Retry 标题”，而是收起原答案后，新产出必须再次调用刚失败的条件或方法。相比之下，Series、Polar、Second order、Arc 的现有重试已经调用原困难，不应批量替换。

### F04 · P2：先修名称或整页链接尚不能让卡住的学生精确恢复

最明显的是 Hyperbolic [EN:22](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:22)／[中文:24](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/hyperbolic-functions.md:24)：列指数对数、链式、隐式求导、换元，但一个回补入口也没有。一阶 [EN:22](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:22)／[中文:24](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/first-order-differential-equations.md:24) 的乘积法则、二阶 [EN:22](D:/GitHub/Academic/alevel/a2-further-mathematics/second-order-differential-equations.md:22)／[中文:24](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/second-order-differential-equations.md:24) 的乘积与复二次根，也只列技能名。

其余课多有课程页链接，但对“链式因子漏了”“分部积分不会选”“参数导数不会算”等具体失败，还没有足够精确的恢复位置。这里不据链接泛泛存在就判恢复已完成，也不声称整页链接等于坏链。反三角页已有反常积分锚点是正例。旧 AS 链接的语言与归档问题由主代理另列。

**最小优化：**复用已有技能段，不再新建统一先修课或固定题数模板。例如微分已有 `#products-and-quotients`、`#composite-functions`、`#implicit-functions`；积分已有明确稳定锚点 `#exponential-logarithmic-integrals`、`#substitution`、`#integration-by-parts`。英文段落分别位于 [微分:57、107、188](D:/GitHub/Academic/alevel/a2-mathematics/differentiation.md:57)、[积分:75、143、173](D:/GitHub/Academic/alevel/a2-mathematics/integration.md:75)，中文已有同名显式锚点。弧长可直达 [参数求导 EN:97](D:/GitHub/Academic/alevel/a2-mathematics/parametric-equations.md:97) 对应段。

在首次真正依赖这些技能的位置，说明“出现哪种困难 → 看哪一小段 → 回来完成哪一步”。必要时加一个短的先修自查动作即可。新增跳转仍须由主代理验证生成 HTML 的实际锚点，不能只据标题猜浏览器行为。

### F05 · P2：部分题目已替学生作出本应被考查的判断

Polar [EN:474–476](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:474)／[中文:476–478](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/polar-coordinates.md:476) 的 Q5 标题直接提示“不同角度的极点交点”，题干又明确告知两圆交于极点及另一点。它仍是有效的公共区域面积题，但无法作为“学生会主动发现所有交点，包括不能简单同角相等得到的极点”的独立证据；结课 [EN:694](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:694) 正好承诺全部交点。

**最小优化：**保留原方程与面积任务，用中性题名，先让学生找全部交点、解释检查方法，再按需揭示极点提示。现有必要图意与无障碍描述保留；若描述已给出答案，应把独立判断安排在看到该图之前，而非删除必要替代文字。

First order [Q5 EN:391](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:391)／[中文:393](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/first-order-differential-equations.md:393) 的标题也先说“重复的指数 PI”。这可作带支架熟练题，但如果用来证明会独立识别共振并选试探式，就证据不足。最小处理是另给中性题名或在后续混合题中检验这项判断，不必把原题废除。

### F06 · P2：双曲函数线性组合规则与首次完整应用之间跳过多个新主题

Hyperbolic [EN:119–127](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:119)／[中文:121–129](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/hyperbolic-functions.md:121) 建立代换 t=eˣ>0 的线性组合方法；对应 E2–3 却在 [EN:275](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:275)／[中文:277](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/hyperbolic-functions.md:277) 后才出现。期间先经过反函数对数式、求导及积分整段，首次学习者未看完一个具体方程便切换模型。

**最小优化：**只移动已有 E2–3，使其紧接线性组合方法，完成正根筛选与回代，再进入反函数。无需增加总篇幅或改变正确公式。以标准第 6 节“一个示范的关键推理连贯完成”验收，而非用统一课长裁切。

### F07 · P3：极坐标总括把已标改编的 Q8 又概称为保留原题措辞和分值

Polar [EN:346、696](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:346)／[中文:348、698](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/polar-coordinates.md:348) 概括 Q6–8 保留 AQA 题文与分值；但 [Q8 EN:594](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:594)／[中文:596](D:/GitHub/Academic/zh/alevel/a2-further-mathematics/polar-coordinates.md:596) 已明确写“Adapted question (diagram redrawn)”和“6 marks (original question)”。

这是两语共有的概括与局部标签不一致，不是 Q8 没标改编，也不是两语题目身份漂移。**最小优化：**两处总括区分“Q6–7 原题；Q8 题图改编，六分属于原题”，保留既有题号、链接、图与局部说明。

### F08 · P2：即时重试以外，尚未定位到实际延后新任务的落点

九页均有 After practice 或“需要提示时稍后再做”的说明。例如 [Roots EN:490](D:/GitHub/Academic/alevel/a2-further-mathematics/roots-and-polynomials.md:490)、[De Moivre EN:819](D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:819)、[Series EN:780](D:/GitHub/Academic/alevel/a2-further-mathematics/series-and-limits.md:780)、[Inverse trig EN:747](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:747)、[Hyperbolic EN:675](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:675)、[Polar EN:692](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:692)、[First order EN:493](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:493)、[Second order EN:554](D:/GitHub/Academic/alevel/a2-further-mathematics/second-order-differential-equations.md:554)、[Arc EN:450](D:/GitHub/Academic/alevel/a2-further-mathematics/arc-length-and-surface-area.md:450)，对应中文保留这些路线。

这些说明能指导订正和再次提取，但本十八页未给出明确的延后新任务或后续单元落点，不能由“稍后独立完成”文字推定保持已测。此处不否定已有综合：二阶已有混合顺序，Series 的复合展开、De Moivre 的五倍角题、Arc 的 Q6–7 也确实连接多个知识。

**最小优化：**先由主代理查单元或后续课是否已有未标方法的新任务；若有，只补可定位链接及错误后返回位置，不重复造题。若没有，在实际后续学习节点安排少量有意义的混合任务，记录“首次／用提示／错误原因／重试／稍后复查”。不统一规定间隔天数、题数或通过率，不把本轮源码审查写成学生已保持所学。

## 数学核验与反例边界

正文按条件、推理、结果及检验阅读；对易误判部分另作解析复算，随后以只读 Node 内联计算复核部分代数与积分。未保存测试脚本，也未写入课程。71 个系数或数值断言全部通过；它们包含同一多项式的多个系数，不能称为 71 道题或 71 项学习质量验收。数值积分采用复合 Simpson、N=10000，仅作交叉检查，不替代解析证明或误差保证。

| 核查对象及可定位正文 | 本轮独立核验结果与必须保留的条件 |
| --- | --- |
| Roots [Q7 EN:403–443](D:/GitHub/Academic/alevel/a2-further-mathematics/roots-and-polynomials.md:403)、[E6 EN:225](D:/GitHub/Academic/alevel/a2-further-mathematics/roots-and-polynomials.md:225) | 由和 4、平方和 20 得 p=−4、q=−2；实系数给另一根 3−i，第三根 −2，积 −20，r=20；独立相乘得到 x³−4x²−2x+20。E6 导数为 3(x−1)²+1>0，单调性负责唯一、连续异号负责存在，职责没有混淆。重试相乘得 z³−6z²+13z−10。 |
| De Moivre [EN:39–155](D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:39)、[E10 EN:415](D:/GitHub/Academic/alevel/a2-further-mathematics/de-moivres-theorem.md:415) | 检查正整数归纳、零次与负次的非零限制，复根 R>0 与 R=0 分开；单位根求和要求 n>1、几何级数分母非零。对 e^(2x)(2cos3x+3sin3x)/13 求导，cos 项系数为 (4+9)/13、sin 项相消，确实回到 e^(2x)cos3x。精确三角值取号需要象限，不以图或小数替代证明。 |
| Series [E4–5 EN:214](D:/GitHub/Academic/alevel/a2-further-mathematics/series-and-limits.md:214)、[Q4 EN:524](D:/GitHub/Academic/alevel/a2-further-mathematics/series-and-limits.md:524)、[Q2 EN:462](D:/GitHub/Academic/alevel/a2-further-mathematics/series-and-limits.md:462) | 重新卷积得 e^(2x)sinx 的前四项 x+2x²+11x³/6+x⁴；e^(sinx) 三次项为零、四次项 −1/8；e^(cosx)=e(1−x²/2+x⁴/6+…)。ln(1−3x) 由 −1<−3x≤1 得 −1/3≤x<1/3，负代换的端点方向正确。Maclaurin 段保留“函数可由该幂级数表示”的前提，没有把仅有各阶导数直接当作收敛到原函数的证明。 |
| Inverse trig [Q2 EN:408](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:408)、[Q5 EN:516](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:516)、[Q6–8 EN:552](D:/GitHub/Academic/alevel/a2-further-mathematics/inverse-trigonometric-functions.md:552) | arcsin√(2x) 的函数域 [0,1/2] 与导数适用区间 (0,1/2) 分开正确；arctan 恒等式的主值分支有检查。重算三道积分得 π/(4√2)、√3π/6−1/2、π/4−ln√2；分别核对配方换元系数与分部积分符号。 |
| Hyperbolic [EN:131–269](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:131)、[Q3–4 EN:464](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:464)、[重试 EN:644](D:/GitHub/Academic/alevel/a2-further-mathematics/hyperbolic-functions.md:644) | 对数形式按 asinh 全实、acosh≥1、atanh 输入绝对值<1 检查；acosh 导数排除端点 1。积分负支没有误套正支 acosh。Q3 两个正根确实都应保留，分别回代得 4，教学检验不足不是答案错。重试 k=2、x=2/3 正确；asinh 斜率趋零不代表有水平渐近线，正文没有作该错误推断。 |
| Polar [E9 EN:282](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:282)、[Q5 EN:476](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:476)、[Q8 EN:602](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:602)、[重试 EN:658](D:/GitHub/Academic/alevel/a2-further-mathematics/polar-coordinates.md:658) | 公共区域在 π/3 换边界，重新积分为 3π/4−3√3/4；两圆公共面积 π/2−1；环面积 13/3；圆内心形线外面积 5π/2。依本页 r>0、极点可作边界的约定判断，不能把负半径段加入本页要求的草图。面积是半径平方之差，不是半径差的平方。 |
| First order [E2–3 EN:104](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:104)、[E4–6 EN:211](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:211)、[Q6 EN:413](D:/GitHub/Academic/alevel/a2-further-mathematics/first-order-differential-equations.md:413) | 重新求导检查 y=x²/4+7/(4x²)；三角例乘 tanx 后积分 2tan²x，条件常数 π/2−1，端点系数无定义。多项式 PI、指数 PI 与共振的算子代回相符。μ 的非零常数倍在固定符号区间可互换，不应把 μ=x 判为负半轴非法。Q6 虽得多项式 x²−x，原方程仍在 x=0 无定义。 |
| Second order [E5–7 EN:203](D:/GitHub/Academic/alevel/a2-further-mathematics/second-order-differential-equations.md:203)、[Q4–7 EN:389](D:/GitHub/Academic/alevel/a2-further-mathematics/second-order-differential-equations.md:389)、[重试 EN:512](D:/GitHub/Academic/alevel/a2-further-mathematics/second-order-differential-equations.md:512) | 用 L[p(x)e^(kx)]=e^(kx)[a(D+k)²+b(D+k)+c]p 独立比较多项式系数。重根例必须 x²e^(2x)，PI=4x²e^(2x)；混合例指数 PI 与多项式 PI 分别贡献 −6e^(−2x)、4x，解 (3+2x)e^(−2x)−2x−1 满足值与无穷远导数条件。Q4 PI=x⁴−12x²+24；Q6 三角共振得 sin2x−2xcos2x；Q7 重零根使 PI 次数升高合法。重试 (1+x+3x²)e^(−x) 回到 6e^(−x)，两个初值成立。 |
| Arc [E2–6 EN:104](D:/GitHub/Academic/alevel/a2-further-mathematics/arc-length-and-surface-area.md:104)、[Q2 EN:241](D:/GitHub/Academic/alevel/a2-further-mathematics/arc-length-and-surface-area.md:241)、[Q6–7 EN:331](D:/GitHub/Academic/alevel/a2-further-mathematics/arc-length-and-surface-area.md:331)、[重试 EN:417](D:/GitHub/Academic/alevel/a2-further-mathematics/arc-length-and-surface-area.md:417) | 完全平方化简先写绝对值，再用区间去掉；改编参数例速率 tan t、长度 ln2。Q2 长度 √5+ln(2+√5)/2；Q6 全圆弧长 2π，球面独立面积 4π，全圆面积积分 8π 是旋转重叠而非曲线重复描绘；Q7 长 √2、面积 π√2；重试母线长 5、曲面积 30π，不含端盖。 |

## 双语身份、来源与技术状态

本轮先读正文，再用只读序列比较辅助查漏：九对页面中，去除空白后的 TeX 表达式序列一致；保留的练习题干、Diagnose、Independent retry 文本未见数值或条件改变。对无统一 Question 标签的题干也另作对照，未把仅匹配有标签的题当作全量。九对页面的外部来源 URL 序列与图像路径一致。以上一致性只能说明两语没有这些漂移，不能证明共同数学内容正确，也不能证明中文解释足够让学生独立作答。

收尾时十八个课程源文件的 SHA-256 均与开审快照一致；报告中的本地来源路径及所引行号已检查存在。此项只验证本轮未改课程及证据可定位，不是浏览器锚点、公式显示或排版验收。

当前正文区分旧 AQA Mathematics 6360 / MFP2、MFP3 与 OxfordAQA FM03；没有把所有旧 AQA 题称为 FM03 历年题。Roots Q7、De Moivre Q7–8、Series Q7、Inverse trig Q6–8、Polar Q6–7 的题号、来源与分值在两语对应；Series Q8、Polar Q8 及 Hyperbolic E3、两门 DE 的改编例、Arc E3 都有改编说明或方法来源。Polar 总括例外见 F07。

为核对已有来源身份，参考了 [2026-10-22 记录的原卷／MS 对照表](D:/GitHub/Academic/docs/agents/audit-fm03-existing-2026-10-22.md:33)，仅作为题号、配套评分材料与 PDF 页码的历史记录。本轮没有重新下载并目读全部原卷、评分标准、原始图；页面写着“Question and matching mark scheme read on 2026-10-22”也只代表旧记录，不能改述为本代理在 10 月 23 日已重读官方 PDF。官方范围与来源原件一致性待主代理汇总。

| 维度 | 本代理完成状态 | 不可升级的结论 |
| --- | --- | --- |
| 当前中英正文与题目链 | 九课十八页已读；按目标而非标题给证据与缺口 | 不等于每个自述目标已达标 |
| 数学 | 当前推理逐段核查，重点独立解析复算及数值交叉检查；未见确证错误 | 不是对所有表达式的形式化证明；有限采样不是全范围证明 |
| 双语与来源标签 | 题干、条件、公式、来源链接与改编身份已对照；发现 F07 | 未重新核读全部官方原件，不承接旧审计通过状态 |
| 精确先修 | 当前入口与部分可复用技能段已定位 | 未执行回补后的学生尝试；未做所有链接的浏览器验收 |
| Jekyll、HTML、专项与浏览器 | 本代理未执行；交主代理；主代理已报告 13 专项通过 | 不冒称本代理构建、键盘、手机或屏幕阅读器已通过 |
| 学生试用与延后保持 | 未取得，F08 指出本页路线证据边界 | 不宣称学习效果、无提示掌握或保持已经验证 |

## 后续最小执行顺序与深度限制

1. 先解决 F01 两门 DE 必要示范的默认阅读路径，保留现有正确推导；不要把“展开所有答案”当作修复。
2. 对 F02 补上确实不同的独立产出；每项都写明学生要交什么、什么推理算成立。由主代理核官方范围，不凭本报告新增必考要求。
3. 修正 F03 的指定诊断后重试对应，保留已有有效综合任务；处理 F05 的关键判断提前给出。
4. 复用现有先修段完成 F04，移动现有双曲示范完成 F06，修正 F07 的两处来源概括；不创建重复框架或另一本课程。
5. 主代理结合课程入口及后续课核 F08，安排真正可定位的延后任务，再完成实际阅读验收。源码、自动专项与浏览器通过状态分别记录。

这是一轮源码层的目标链与数学审查，覆盖指定九课的正文深读；不是学生可用性的现场试验，也不是第二套全课程官方范围审计。若主代理在入口、后续课或官方材料中找到本页没有的独立任务，应补充具体落点后更新对应判断，不能只说“别处应该有”。本报告保留独立任务已存在、仅重试错配，以及讲解已存在、仅产出不足等区别，避免把局部缺陷升级为整课否定。
