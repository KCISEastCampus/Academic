# AS Mathematics 通俗讲解升级：Standards 独立审阅

日期：2026-10-25。**增量复核结论：原 P1 及六处 P2 均已关闭；另一轴新增的 SSA 重试、综合 B、SVG 箭头和动摩擦独立产出，按本轴标准核验均已修复。本轴当前无未关闭发现；已纳入最终两语言入口综合 B 的判别式三行重排，原关闭结论保持。** 首轮发现原文保留如下，关闭依据另列。结论合并首轮全量审阅与本次增量复核；最终技术验收仍由主线程完成，不合并 Spec 作者的签署或学生试用结论。

## 审阅对象与依据

工作区 D:/GitHub/Academic，分支 codex/as-mathematics-simple。固定点及审阅时 HEAD 均为 e9cd88a8730dda83bc6aaa855d1863c2d7837d1c，两者间新提交数为 0。审阅的是工作区：

    git diff e9cd88a -- alevel/as-mathematics zh/alevel/as-mathematics scripts/test-as-mathematics-content.js scripts/test-as-mathematics-calculations.js

另外单独读取了两张未跟踪 SVG：motion-check.svg、car-trailer-check.svg；没有依赖 Windows shell 的花括号展开。

依据为 [AGENTS.md](../../AGENTS.md#学科内容制作准则)、[课程内容长期标准 v1.1](course-content-standard.md)、[数学公式规范](../MATH_FORMULA_GUIDELINES.md)、[协作约定](codex-collaboration.md)。结合[实施设计](implementation-as-mathematics-simple-2026-10-25.md)、[历史审计](audit-as-mathematics-standard-2026-10-24.md)与已通过的 L01 [Standards](review-as-l01-simple-standards-2026-10-25.md)／[Spec](review-as-l01-simple-spec-2026-10-25.md)样章记录，检查本次实际改动。旧审计中已补齐的圆法线讲解、幂次独立任务、两常数链等不再列为未解决问题。

资格边界沿用本轮来源记录中的 OxfordAQA **9660 v5.2、MA01／MA02**，没有迁移到 9760。对照了[官方材料研究记录](research-as-mathematics-rollout-2026-10-25.md)与课程来源段的身份、方法和适用边界；本审阅未重新逐页阅读整套本地 January 2025 QP／MS。主线程的配对官方材料阅读与本次独立数学重建分别计证。

## 首轮发现（历史保留）

下列为首轮快照的发现原文，保留以追踪修复；当前状态以“增量复核”两表为准，均已关闭。

1. **P1：倒数重试的 X 指代冲突。** 两语言 random-variables.md 的 [#l19-independent-distribution](../../alevel/as-mathematics/random-variables.md#l19-independent-distribution)先把 X 改为硬币正面数，$P(X=0)=1/4$；随后 [#l19-retry](../../alevel/as-mathematics/random-variables.md#l19-retry)却问 “For the same X”，提示断言不含零，答案仍采用旧分布。按最近定义，$1/X$ 在正概率事件上未定义；初学者无法唯一确定对象。违反 AGENTS 的随机对象／定义域核验要求及长期标准 §3。**最小修正：**在重试题干后明确回指 #l19-worked，并重列 $X=1,2,4$、概率 $1/4,1/2,1/4$；两语言一致，原英文 Question 可保留。

2. **P2：多处恢复路径没有重测所诊断的困难。** 长期标准 §5 要求“重试应检验刚修复的困难”。以下两语言的 #lNN-diagnosis 均指向同组 #lNN-retry，但对应能力可被绕过。保留现题，分别增加或分流到下列最小子问：
   - [algebra #l03](../../alevel/as-mathematics/algebra.md#l03-diagnosis)：商项遗漏却接展开／代入求余；补完整除法。
   - [sequences #l10](../../alevel/as-mathematics/sequences.md#l10-diagnosis)：阈值取整错误却接固定范围求和；补整数预算阈值。
   - [trigonometry #l16](../../alevel/as-mathematics/trigonometry.md#l16-diagnosis)：约分丢限制却接无分母方程；补含可约分母及原限制的新题。
   - [probability #l18](../../alevel/as-mathematics/probability.md#l18-diagnosis)：分母错误却接交集为零的题，错用全组分母也得零；补非零交集条件概率。
   - [binomial #l21](../../alevel/as-mathematics/binomial.md#l21-diagnosis)：模型错误却接已指定 Bin 的题；补新抽样模型判断。
   - [momentum #l25](../../alevel/as-mathematics/momentum.md#l25-diagnosis)：分离错误却接黏合碰撞；补分离末速度范围。

## 首轮全量覆盖记录

以下保留首轮全量阅读证据；涉及历史 P1／P2 和旧综合 B 的内容，由后附增量证据更新。

已连续阅读 **15 对学习页及两个入口，共 32 页、L01–L25 全部 25 组**，对照目标、声明先修、公开讲解、示范、学生输出、关闭的提示／答案、诊断、重试及学后去向。下表记录实际审查的推理与任务；“已覆盖审阅”不等于全部目标已通过，发现节列出的缺口仍保留。

| 双语学习页／组 | 实质审查证据 |
| --- | --- |
| algebra；L01、L02、L03、L05 | 指数与根式条件、样章两类独立输出；切触 $k=-4$ 和不等式 $1<x<3$；三次式除法与重根触轴；变换追踪同一输入输出及横向倍数的倒数。L03 恢复路径见 P2。 |
| coordinate-geometry；L04 | 中点／距离／斜率先解释，再由新点求 $2\sqrt{13}$ 与中垂线 $3x+2y=9$；不同点的重试；交点个数任务保留判别式及 $c>-9/4$。 |
| differentiation；L06、L07 | 有理幂自主改写和幂次求导，独立斜率 $3/8$、新商式重试 $3/2$；切法线条件；优化先定可行域，再比较候选和端点。入口另有全区间极值任务。 |
| integration；L08、L09 | 区域边界、上减下与符号检查；恢复函数时常数由点确定；梯形内点权重来自相邻两块，不以表值单独断言误差方向；独立新表估计 11。 |
| sequences；L10、L11、L12、L13 | 单项与总和、预算第 8 个月；公比拒绝 $3/2$、偶数部分和；迭代实际链 $0,3,4.5,5.25,5.625$ 与收敛条件；有限展开和截断近似区别，重试遗漏正项 $0.00000016$。L10 恢复路径见 P2。 |
| circles；L14 | 配方、距离、切线及经过圆心的法线连成完整示范；一般方向独立切法线与水平／竖直重试；弦与平移保留。最新 aligned 两行数学不变。 |
| trigonometry；L15、L16 | SSA 两角 $53.13^\circ/126.87^\circ$ 与可行性；弓形 $6\pi-9\sqrt3$；恒等式原分母限制、hence 连接及区间全解；切线图仅在关闭解答中。L16 恢复路径见 P2。 |
| exponentials-logarithms；L17 | 指数变化与对数含义、每个原真数分别为正；候选根回代筛除；新重试保留 $x=2$，舍入使用近似号。 |
| probability；L18 | 双向表、条件参照群体、交集与独立乘积检验；新数据自洽，独立题识别不可能的交集；旧官方异常数据未冒充有效模型。分母重试见 P2。 |
| random-variables；L19、L20 | 加权一阶／二阶矩、线性及非线性变换分开；独立构造硬币分布和骰子新重试；均值无需独立，方差相加需独立，重复一个变量与独立副本区别。倒数对象见 P1。 |
| binomial；L21 | Bernoulli 矩和独立求和、由均值方差反求参数、无放回模型判断、尾部整数边界；新增完整累计表提供真实选项读取，未提前给出所选两格。模型重试见 P2。 |
| constant-acceleration；L22 | 正方向、斜率和有向面积；独立图段换向处为 9 s，位移 46 m、路程 50 m；平均速率 5 m/s，不能用净面积替路程。 |
| variable-acceleration；L23 | 两次积分各保留常数、分别使用对应条件；速度零点划分路程；新增非零时刻条件独立题得 $C=2,D=3$，位移 8；重试 $s(2)=7/3$。 |
| forces；L24 | 先选系统／物体再列式；滑轮假设与等张力条件；汽车拖车独立图和 $a=1.2,T=680$；独立辨认建模假设，再以粗糙滑轮重试。 |
| momentum；L25 | 有向动量、外冲量可忽略的系统边界；立即分离条件给 $0<v<2$、$4<\lvert I\rvert<6$，不擅加能量或恢复系数；黏合题算术正确，但不能承担分离判断重试。 |

两个入口均检查了起点、先修回补、四条路线、各课下一步、综合及稍后回顾。英文入口旧档案与中文归档链接按资料职责检查，没有把归档当新增教学主线。入口新增的 **4 道综合＋4 道稍后任务**有可作答题干和关闭解答，内容包括：

| 路线 | 综合任务实际调用 | 稍后任务实际调用 |
| --- | --- | --- |
| 基础纯数 | 导数、全区间极值及面积 | 由梯度恢复函数、条件／不等式和面积 |
| 进一步纯数 | 圆、坐标及变换的连接 | 三角表达式化为二次式并拒绝不合条件的根 |
| 统计 | 条件概率及二项模型 | 非线性变换与独立随机量之和 |
| 力学 | 力、匀加速运动与冲量 | 变加速度、路程与冲量 |

这些是真实任务，已有返回具体段落的路线；八题没有穷尽 25 组每项能力的延后复测，也没有学生延后保留数据。

### 内容层次、帮助边界与双语

公开概念和完整示范保持连贯；学生任务先给题干／所需数据，提示和答案各自默认关闭；来源与补充说明降低层级。检查以段落用途和关键判断为依据，没有把类名、标题数或题数作为教学验收。

未发现新增两图或其替代文字在关闭帮助外泄露画图／面积判断。两图在双语相应解答的关闭 details 内；完整核对图公开后才构成帮助，不计为无帮助完成。最新累计表属于作答所需数据，完整列出六格，没有替学生选好上下端点。

对照了双语题目、数据、条件、推理、单位、答案与可获得的帮助。检查得到每语言 121 道匹配 Question，但人工核对仍独立进行：例如中文没有把独立性弱化为不同字母，没有把路程与位移混用，也没有把构造表说成官方表册。原稳定显式锚点均保留；旧英文题干变更限于已单独通过的 L01 样章，其他旧 Question 未删除。

按 12 类 smell 基线检查了本次两份测试及内容组织，未发现需另行报告的非工具强制架构问题。双语教学复用、现有共享角色与布局是明确设计，不按重复代码要求合并；本轮无需新建抽象或更换组件。

## 首轮独立数学与图表复核

以下为本审阅实际重建的代表性链条，用于佐证判断，不把脚本通过当作教学推理通过：

- [L03 示范](../../alevel/as-mathematics/algebra.md#l03-worked)：从 $x^3+0x^2-3x+2$ 依次减 $x^2(x-1)$、$x(x-1)$、$-2(x-1)$，余式依次为 $x^2-3x+2$、$-2x+2$、0。商为 $x^2+x-2$，乘回得到 $(x-1)^2(x+2)$；双根处不变号、单根处变号，与图像结论一致。
- [L08 示范与独立恢复函数](../../alevel/as-mathematics/integration.md#l08-worked)：交点为 0、2，$2x-x^2=x(2-x)>0$ 在内部成立，故 $\int_0^2(2x-x^2)\,dx=4/3$。新任务积分 $3x^{1/2}+2x^{-2}$ 得 $2x^{3/2}-2/x+C$；代 $(1,4)$ 得 $C=4$，再求导及代点均成立，保留 $x>0$。
- [L19 分布](../../alevel/as-mathematics/random-variables.md#l19-worked)：归一化得 $k=1/4$，$E(X)=9/4$、$E(X^2)=25/4$、方差 $19/16$。对这个旧分布取倒数确有 $E(1/X)=9/16$、二阶矩 $25/64$、方差 $19/256$，说明 P1 是对象切换问题。独立硬币题另得 $E(X)=1$、方差 $1/2$，$Y=5-3X$ 的均值 2、方差 $9/2$，计算本身正确。
- [L21 实际累计表](../../alevel/as-mathematics/binomial.md#l21-scaffold)：独立枚举 5 次 Bernoulli 的 32 种结果并累计，得到 $F(0),\ldots,F(5)$ 为 **0.32768、0.73728、0.94208、0.99328、0.99968、1**；$F(3)-F(0)=0.6656$。两语言原 Question 保留，新增文字明确为模型计算的自拟表；没有声称实查某版官方表册。
- [L23 两常数示范](../../alevel/as-mathematics/variable-acceleration.md#l23-worked)：$a=2t-4$ 积分为 $v=t^2-4t+C$，用 $v(0)=3$ 得 $C=3$；再积分并用 $s(0)=0$ 得 $s=t^3/3-2t^2+3t$。速度在 1、3 s 变号，位置依次为 $0,4/3,0,4/3$，故位移 $4/3$ m、路程 4 m，不能直接取末位置作路程。
- [L24 汽车与拖车](../../alevel/as-mathematics/forces.md#l24-independent)：系统给 $1800-400-200=1000a$，拖车给 $T-200=400a$，故 $a=1.2$ m/s²、$T=680$ N；汽车再验 $1800-400-680=600(1.2)$。两物体竖直平衡，杆拉拖车而拉力反作用于汽车，没有混用内外力。

两张最新 SVG 均读取 XML 并在内存中只读栅格化为 **245 px 宽**检查。源宽 480、字号 26，对应显示字号 $26\times245/480\approx13.27$ px；汽车／拖车名称与质量分两行后未见标签挤压。motion 图的四点、9 s 零点及面积 16／24／8／2 均与正文一致；car/trailer 图的质量、1800／400／680／200 N、竖直重量／支持力及正方向正确。此为图本体预览，不替代课程页面的最终浏览器验收。

两语言 random-variables 的概念三公式、示范方差／SD，以及 circles 的配方两式已检查最新 aligned 排列，数学含义不变，并已计入附录哈希。

## 增量复核：历史发现的逐项结论

本次以首轮 2026-10-25T04:10:10.483Z 快照为基线，读取全部变更任务、概念补充、双语解释与对应诊断入口，独立重建后再比较答案。原课题保留；新增九道学习任务，入口 B 按本轮明确授权替换。对固定点复查仍仅有已批准 L01 的两处旧题干替换，所有旧显式锚点保留。本次 36 文件中 27 项哈希改变：12 对页面、受力 SVG 与两份测试；其余 9 项与首轮完全相同。

以下每行均核对了两语言英文 Question、条件、数值、提示／解答边界及诊断分流；关闭的是所列具体困难，未以同章存在一道题替代同目标重试。

| 历史项 | 当前证据与独立核算 | 结论 |
| --- | --- | --- |
| P1，倒数对象 | [l19-retry](../../alevel/as-mathematics/random-variables.md#l19-retry)在原 Question 后、帮助之前公开给出 $X=1,2,4$ 及概率 $1/4,1/2,1/4$，明确链接 l19-worked 并排除硬币分布。各值非零；重算均值 $9/16$、二阶矩 $25/64$、方差 $19/256$。 | **关闭** |
| P2-L03，商项遗漏 | [l03-retry-division](../../alevel/as-mathematics/algebra.md#l03-retry-division)要求逐次相减并乘回。对除式 $x+2$，依次商 $x^2,-4x,3$，余式为 $-4x^2-5x+6$、$3x+6$、0；商 $x^2-4x+3$ 乘回确为原式。诊断将漏商项导向本题，旧展开／图像题保留另一分支。 | **关闭** |
| P2-L10，首次达标 | [l10-retry-threshold](../../alevel/as-mathematics/sequences.md#l10-retry-threshold)给自拟每月存款 12、16、20……。直接累加与 $S_n=2n^2+10n$ 一致，临界值 $(-5+\sqrt{525})/2\approx8.9564$；$S_8=208<250$、$S_9=252\ge250$，正存款保证此前总额更小。Question 要求说明整数选择；诊断另留项数分支。 | **关闭** |
| P2-L16，约分限制 | [l16-retry-restrictions](../../alevel/as-mathematics/trigonometry.md#l16-retry-restrictions)的原分母要求 $\sin t\ne0$，排除 $0,\pi,2\pi$。在原定义域内表达式等于 $\sin t$；其零点全被排除，故原方程无解。完整区间、端点和原式条件双语一致，诊断与周期漏解分开。 | **关闭** |
| P2-L18，条件分母 | [l18-retry-conditional](../../alevel/as-mathematics/probability.md#l18-retry-conditional)的四格为仅 A 14、仅 B 12、交集 8、皆非 16。$P(A\mid B)=8/20=2/5$、$P(B\mid A)=8/22=4/11$；$2/5\ne22/50$，不独立。误用 50 得 $8/50$，现在确实会错；诊断另保留互斥与独立分支。 | **关闭** |
| P2-L21，模型判断 | [l21-retry-model](../../alevel/as-mathematics/binomial.md#l21-retry-model)中，无放回的 $P(R_2\mid R_1)=2/4\ne3/5$，不满足独立试验条件；改为放回并明确独立后才是 $\mathrm{Bin}(3,3/5)$。独立枚举 125 个放回有序结果，红球数计数为 8、36、54、27，故恰两红 $54/125$；无放回 60 个有序结果的计数为 0、18、36、6，也证实两模型不同。诊断不再只接已给模型的尾部题。 | **关闭** |
| P2-L25，立即分离 | [l25-retry-separation](../../alevel/as-mathematics/momentum.md#l25-retry-separation)中 $12=2v+v_B$，故 $v_B=12-2v$；A 仍向右且在 B 左侧分离要求 $0<v<v_B$，得到 $0<v<4$。A 的冲量为 $2v-12<0$，大小满足 $4<\lvert I\rvert<12$ N·s。两速度端点分别为停止、等速，均不满足题意；没有擅加能量或恢复系数条件。诊断另留黏合题检查符号／系统。 | **关闭** |

## 增量复核：另一轴新增项

此处记录 Standards 对相同源码的独立核验，不修改[另一轴报告](review-as-mathematics-simple-spec-2026-10-25.md)，也不代替其作者更新 Spec 状态。

| 项目与稳定位置 | 独立核验及任务意义 | 本轴结论 |
| --- | --- | --- |
| SSA 恢复：[l15-retry-triangle](../../alevel/as-mathematics/trigonometry.md#l15-retry-triangle) | $\sin B=(6/9)\sin40^\circ$，未舍入角为 $25.3739939^\circ$；补角 $154.6260061^\circ$ 给第三角 $-14.6260061^\circ$，应拒绝。唯一合法 $B=25.37^\circ$，第三角约 $114.63^\circ$。与原两解情形形成判断变化，Question 要求所有候选及合法理由；诊断将 SSA 与扇形分流，两语言一致。 | **关闭** |
| 综合选法：[mixed-further](../../alevel/as-mathematics/index.md#mixed-further) | 由直径端点推得圆心 $(1,2)$、半径平方 20；代入直线得到 $5x^2+(4c-10)x+(c-2)^2-19=0$。判别式 $400-4c^2$ 为零给 $c=\pm10$，接触点分别 $(-3,4)$、$(5,0)$，两点均满足线与圆。平移后圆心 $(3,1)$，方程 $(x-3)^2+(y-1)^2=20$。另以圆心到直线的垂足作作者核验，得到相同接触点；没有把该替代方法作为学生必须先会的公式。题干不指定判别式，直径表征与单交点条件须连接 L14、L04；不再只照搬切法线示范。错误反馈也分流这两环节。 | **关闭** |
| 受力图箭头：[car-trailer-check.svg](../../alevel/as-mathematics/assets/car-trailer-check.svg) | 逐条检查五个汽车力、四个拖车力及一个正方向箭头的端点，均为各自单独的 path；内存栅格化为 245 px 后，十个箭头头部均可辨。汽车水平力为右 1800、左 400／680 N，拖车右 680、左 200 N，竖直重量向下／支持力向上。标签、质量、字体及关闭解答位置保留。 | **关闭** |
| 动摩擦独立输出：[l24-independent-friction](../../alevel/as-mathematics/forces.md#l24-independent-friction)及[l24-retry-friction](../../alevel/as-mathematics/forces.md#l24-retry-friction) | 新公开概念说明竖直平衡与摩擦反向于滑动。4 kg 向右时，$R=39.2$ N、摩擦 9.8 N 向左；取右正，$(-3-9.8)/4=-3.2$ m/s²，减速。5 kg 向左重试，$R=49$ N、摩擦 9.8 N 向右，$(8+9.8)/5=3.56$ m/s² 向右，亦减速。两题均要求自行确定支持力、摩擦和加速度，明确只在仍滑动时成立；停止后不能继续套动摩擦结论。诊断回到支架计算再接反向新题，原任务保留。 | **关闭** |

**首轮图形证据更正：**首轮核对了受力线段、标签和文字方向，却漏检复合 path 的 marker-end 只在末端出现箭头，未应把这些核对视为完整箭头验收。本轮逐根检查与新预览补足了这个遗漏；保留首轮记录是为了可追溯，不沿用其不充分的图形通过依据。

## 最后追加的公式分行核对

在用户确认完成并冻结后，检查了两语言以下五主题的实际 TeX 和邻近条件：trigonometry 的正弦／余弦／三角形面积三式及扇形两式；binomial 的 Bernoulli 矩、独立和矩与尾部计算结果；constant-acceleration 的四个匀加速关系；exponentials-logarithms 的换底式与另行条件；variable-acceleration 的微分关系和带两个常数的积分关系。

逐式保持原数学内容：三角边角仍正确配对且扇形角为弧度；Bernoulli 平方矩为 p，独立方差相加，尾部结果为 0.26272；四个运动关系仍限定恒定加速度；换底保留 $a>0,a\ne1,b>0$；积分的 C、D 仍由不同条件确定。双语公式顺序一致，未改任务、区间、单位或模型条件。此项确认数学等价与源码结构，手机宽度及生成 HTML 的最终结果仍由主线程验收。

### 最终入口补查：综合 B 判别式重排

仅两份 index.md 的 [mixed-further](../../alevel/as-mathematics/index.md#mixed-further) 解答段改变：判别式拆为 aligned 三行，前后分别说明重复根和令判别式为零。独立展开第一项为 $16c^2-80c+100$，第二项为 $-20c^2+80c+300$，相加仍为 $400-4c^2$，故 $c=\pm10$ 与接触点、平移结果保持不变。两语言公式顺序、原英文 Question、区间／条件、反馈链接及关闭的解答边界均保留。

在内存中将这两段恢复为上次的行内排版后，所得两页 SHA256 分别与上次快照完全相同，确认除本次明确的重排与前后分段外无其他差异；其余 34 文件哈希也未变。已再次运行内容检查，通过 130 道题干／224 个关闭折叠区（每语言）。此项核对源码与数学等价性，不新增本审阅执行过手机浏览器验收的声明。

## 当前检查状态与限制

| 项目 | 本审阅证据／边界 |
| --- | --- |
| 工作区与版本 | 固定点可解析，HEAD 未移动，新增提交为 0；审阅原始工作区 diff，并单独读取未跟踪 SVG。 |
| 现有内容检查 | 对最终冻结源码重新运行 node scripts/test-as-mathematics-content.js，通过：15 主题、25 组、每语言 130 道匹配题干及 224 个关闭折叠区。首轮为 121／206；数量只用于结构回归。 |
| 现有计算检查 | 重新运行 node scripts/test-as-mathematics-calculations.js，通过：244 项数值比较及相关断言，首轮为 225 项。另在内存中独立做多项式除法、逐月累加、SSA 候选、记录分组、两种抽样枚举、摩擦与接触点核验；定义域和全范围分离条件用解析推理，不以有限试值作证明。 |
| Jekyll／生成 HTML／桌面手机阅读 | 主线程负责最终版本验收；本报告不独立签署其构建、全站链接、键盘、主题或浏览器结果。旧截图懒加载空位已有采集原因说明，不作为课程缺陷。 |
| 官方材料 | 利用本轮已读材料记录与课程来源边界，未重新逐页审阅整套 QP／MS、官方表册或计算器流程；课程题仍按自拟题理解。 |
| 学生证据 | 无本轮真实学生独立作答、提示使用、重试或延后检查数据；代理重建与用户对样章的语言反馈不作为学生试用。 |
| 写入与发布 | 只写本报告；课程、测试、SVG、共享 CSS、无关 node_modules／package.json 均未改动，未安装依赖、提交、推送或发布。 |

上述历史发现及新增项已按当前冻结源码完成增量复核并刷新哈希。主线程报告 32 页 lint 已通过，本审阅未重跑该检查。当前本轴无未关闭项，技术／真实学生状态按上表边界保留；结论不预先覆盖后续修改。

## 附录：最终审阅源码版本与 SHA256

采集时间：**2026-10-25T04:23:08.414Z**（UTC）。分支 **codex/as-mathematics-simple**；HEAD 与固定点仍均为 **e9cd88a8730dda83bc6aaa855d1863c2d7837d1c**，新提交数为 **0**。32 页＋2 张 SVG＋2 份测试，共 36 文件；按本地原始字节计算。包含全部新增匹配任务、综合 B 替换及最终判别式三行重排、倒数对象说明、独立箭头、动摩擦任务和五主题公式分行。

首轮清单时间 2026-10-25T04:10:10.483Z，摘要为 deaaf42cbb24cf35f9e955d3aac60f64b42a1d0675bbcd3618d1d5ac94cdccaf；与首轮相比仍为 27 文件改变、9 文件未变。上次增量清单时间 2026-10-25T04:20:05.642Z，摘要为 5abaa7473d14da2cc44d5e4b4fdfae5b6658eed124967f8b0304630b2df28cac；本次仅两语言 index 的哈希改变，其余 34 项一致。

**最终清单摘要 SHA256：718d5bed97dcef930201506d5589164c6599cc18ae2dc9df6c58ea7ad09b1eea**。计算方式：按下表路径的字典序，将每行“SHA256、两个 ASCII 空格、路径、LF”连接成 UTF-8 无 BOM 字节，再计算 SHA256；不包含报告自身。

| 文件 | SHA256 |
| --- | --- |
| alevel/as-mathematics/algebra.md | `4a5b128415be89c85b20a1c26282aed6b7e4193d1d3a04b51ea1801331ecbf91` |
| alevel/as-mathematics/assets/car-trailer-check.svg | `b89c7e1b0c7653cb13836b4b81f8b368fdc0bc20b33ba0e0e9212eb079d84907` |
| alevel/as-mathematics/assets/motion-check.svg | `91128b1f770cc878c042dbdad319f79653eac5f3ec539e20c6595e9a57125d08` |
| alevel/as-mathematics/binomial.md | `ff8ce5ad1fce7d117fba7dedb09e1eeb37803680011f43440aabec017ba5cfc2` |
| alevel/as-mathematics/circles.md | `5c374ec18ee871d643fd715fefffa6a0b71d4278a877d0392831843355586d52` |
| alevel/as-mathematics/constant-acceleration.md | `9c07e694271e6a2fcc4971e8a72f39e9de4b958f201ec831995cce0c24d4c9a6` |
| alevel/as-mathematics/coordinate-geometry.md | `399cefe98f2271d56936f02201ff697740f2c449c91c7e5509b5ac40ac59c9e2` |
| alevel/as-mathematics/differentiation.md | `7152aff346f091ba725b5218edf868f6bb824f552bb17173bce3a6b790faa78c` |
| alevel/as-mathematics/exponentials-logarithms.md | `64e61bf8875b5cc8361562d7519def40a3b00e0724c2a19eac03fc82221234fa` |
| alevel/as-mathematics/forces.md | `359721ff08064858dfb3b16d74558fb35a3d5c34defd349990a2e602a2225ecf` |
| alevel/as-mathematics/index.md | `cd839185d9f6e8ea4764164789d0fec351e7165081602f03eb3e44282642cb75` |
| alevel/as-mathematics/integration.md | `c7685d6e0ddcdb2e0ce3298e2ac974b7369e42e95a1eac700ea99815cb7978e8` |
| alevel/as-mathematics/momentum.md | `a0d35ba8fa627cc38a05f5d37f9691f4e8211ebe24303041a53e493d0aa75a0e` |
| alevel/as-mathematics/probability.md | `53360e8a48e90ac85647ae0a6767c0ca1c4b4f9ce816e9589a7317280bef542a` |
| alevel/as-mathematics/random-variables.md | `8b009f08c5e616c4ea8ab52b9f1caf39c468e09f22b888c3acd312d079a01296` |
| alevel/as-mathematics/sequences.md | `213d9f0b121c29332f2c48506aa41acfb58e2a72a4e874752c6119fcb98e1ef0` |
| alevel/as-mathematics/trigonometry.md | `cf7f3efa3ae054b67b97eeb891f5e9657c6421e66bb300cfb5de885b35a6107e` |
| alevel/as-mathematics/variable-acceleration.md | `fa30de0326d729d688b212f133f9fb76541082d77273d0785fe039fa57c255ec` |
| scripts/test-as-mathematics-calculations.js | `344b1296735f614b6740629e054e250f4e04124419d090a149feee9741697615` |
| scripts/test-as-mathematics-content.js | `8c50fe63a058f484131df4e97fb6c6c5140f1f23474294065f097ef6b1cb72e6` |
| zh/alevel/as-mathematics/algebra.md | `e2dbfb624bf3e6319c3c48b35c86a8a14ee3dba3a9d42e555e4d9abab17a17ac` |
| zh/alevel/as-mathematics/binomial.md | `96ea5bba445be23c149ddbf52ca894012c1b1532ac0df12473e4aa84f52fba13` |
| zh/alevel/as-mathematics/circles.md | `54ec0660b59409ff88284454bfd3c8583068ab414ad9883aa7fc737d362358c1` |
| zh/alevel/as-mathematics/constant-acceleration.md | `0811cc16dd0f25c8205b013797b28508a8bf430ab19558b56d04f8b8e26a614b` |
| zh/alevel/as-mathematics/coordinate-geometry.md | `e42f0458800defd74314ab7988281e0a083f5e3c70f636a2fe7458dc224e19a2` |
| zh/alevel/as-mathematics/differentiation.md | `6aee58b5caad7ae07e9fd6bbbd973fa07498ad4ae82e0bd09e4b76a594e695d3` |
| zh/alevel/as-mathematics/exponentials-logarithms.md | `c8c399e3ea011a3a814633b4dfbd129a7c46a6bc74ae576e48410fc7afd6bfe9` |
| zh/alevel/as-mathematics/forces.md | `eb1cc12c007972cc71d28d9aa17fc6e6a697d91bc5cc94cc41a43db8aa940e49` |
| zh/alevel/as-mathematics/index.md | `f98285319aa921ed54f7a1a3f3bccb6626eb45129e470255609ff3591edea40b` |
| zh/alevel/as-mathematics/integration.md | `ed162609940adf76cc443d1f2902c82e3fd35d2440256bc113a70def281d8ae6` |
| zh/alevel/as-mathematics/momentum.md | `a33f81849e5c0160f92f9fc1bf14de7de84d19a55de219d006abf311b693819d` |
| zh/alevel/as-mathematics/probability.md | `38611ad4539820363ae66db7ded2e2b48fb9bd2f49b04903d9a3ede034ad36ec` |
| zh/alevel/as-mathematics/random-variables.md | `03f6d23b21e213e05eb4b8e3c520f7a9df7c29908befdcb49cfeeab8a3a71621` |
| zh/alevel/as-mathematics/sequences.md | `aac3af495154b873176c2aaa0be0443d55559e130dabc92284e5361d9e1c317b` |
| zh/alevel/as-mathematics/trigonometry.md | `27cad5d06b1e6b688cc30865b6a561e2e084541674cd38d33efd9d473585f71b` |
| zh/alevel/as-mathematics/variable-acceleration.md | `73e9473409345ba759eec0665da08acfde5ded06d3d024c7052e9c7a83a993af` |
