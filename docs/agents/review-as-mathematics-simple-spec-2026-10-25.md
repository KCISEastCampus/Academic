# AS 数学通俗版：Spec 独立审查

日期：2026-10-25。**最终复核结论：本轮 Spec 内容复核通过；首轮 5 项发现全部关闭（1 项 P1、4 项 P2），另四类恢复补强均完成本轴核验。最后两入口页判别式分行复核通过，未发现新的 Spec 问题或范围外扩张。** 其余 34 文件与上一轮快照相同。结论限于末尾最终 36 文件快照，不代替 Standards 轴签署、技术验收或学生试用。

审查依据为用户要求（初学者能读懂，同时保留数学水平、英文任务和条件、独立作答边界、准确恢复与实际综合／稍后任务）、[实施设计](implementation-as-mathematics-simple-2026-10-25.md)、[旧审计](audit-as-mathematics-standard-2026-10-24.md)，以及设计引用的[长期标准 v1.1](course-content-standard.md)。以下只报告 Spec 轴。

## 首轮发现（历史记录）

1. **P1 · 错误：新 X 定义使保留的倒数题失去确定含义。** 设计第 19 行要求“保留非线性任务”。[随机变量 E:113](../../alevel/as-mathematics/random-variables.md#l19-independent-distribution)／Z:115 新定义 X 为两硬币正面数，零的概率为 1/4；随后 [E:149](../../alevel/as-mathematics/random-variables.md#l19-retry)／Z:151 却问“the same X”的 1/X，并断言零不存在。9/16、19/256 只属于先前的 {1,2,4} 分布。应更名新变量或明确倒数题引用原分布，并同步双语。

2. **P2 · 部分：恢复链接仍未对应被修复能力。** 审计 AS-05 要求“诊断指向相同技能的回补”；三角摘要另要求“两种错因分别给恢复／重试”。[L15](../../alevel/as-mathematics/trigonometry.md#l15-diagnosis) 只给扇形路径，遗漏 SSA 两角；[L16 E:207](../../alevel/as-mathematics/trigonometry.md#l16-diagnosis)／Z:209 把约分丢条件导向没有分母的题；L25 将分离错误导向黏合题。应补对应新重试，不能以链接存在判完成。

3. **P2 · 部分（设计判断）：进一步纯数的综合选法不足。** 设计第 22 行要求“未指明方法的混合任务”；长期标准 §4 排除只换数字承担迁移。[Task B E:103](../../alevel/as-mathematics/index.md#mixed-further)／Z:102 重复 L14 示范的半径差 (3,4)、切法线、平移顺序，且直接给圆心，更易照搬。答案正确，但尚不足承担该路线的综合选法证据；应改变信息表征或连接另一种所学关系。

4. **P2 · 错误：受力核对图缺少八个力的箭头头部。** 设计第 24 行要求图具备方向，审计 AS-07 要求可核对受力图。[car-trailer-check.svg:9](../../alevel/as-mathematics/assets/car-trailer-check.svg) 将多个 M 子路径合成两条 path，marker-end 仅作用于整条路径末端；九个力仅汽车 680 N 有箭头。内存渲染已复现，符合 [SVG 2 §13.7.2](https://www.w3.org/TR/SVG2/painting.html#VertexMarkerProperties)。应将每个力单独成 path。

5. **P2 · 缺失：动摩擦尚无独立产出。** 旧审计第 3 节 L24 明确要求“摩擦不只停留在带支架计算”。当前 F=μR 仍仅用于 [L24 scaffold](../../alevel/as-mathematics/forces.md#l24-scaffold)；独立题、重试与入口综合都直接给阻力，没有要求自主确定 R、动摩擦及方向。应补一项可独立检验该模型的任务。

上述问题在对应中文页同样存在；不是仅有译文或标题风格问题。其余新增题的数值结果见附录，不用脚本通过抵消这些发现。

## 增量复核结论

以下为修补后的当前状态；前节五项原文保留为首轮历史发现，不再代表开放问题。复核基线为首轮 2026-10-25T04:10:52.159100+00:00 的 36 文件清单；本轮 27 文件变化，9 文件字节未变并继承首轮证据。固定点、HEAD 和分支未变，仍审查工作区。

| 首轮发现 | 当前状态 | 实际关闭证据 |
| --- | --- | --- |
| 1 · P1 随机对象／倒数定义域 | **关闭** | 两语言 [l19-retry](../../alevel/as-mathematics/random-variables.md#l19-retry) 保留原 Question，在帮助之前重列 1、2、4 与概率 1/4、1/2、1/4，明确链接原 worked 并排除硬币对象。重新加权得均值 9/16、二阶矩 25/64、方差 19/256，定义有效。 |
| 2 · P2 恢复错位 | **关闭** | L15 三角可行性、L16 原分母限制、L25 分离范围均新增真实重试，并分别由对应错因分流到解释和新题；不再把它们交给扇形、无分母方程或黏合碰撞承担。具体求解见增量附录。 |
| 3 · P2 综合选法不足（原为设计判断） | **关闭** | [新 Task B](../../alevel/as-mathematics/index.md#mixed-further) 改由直径端点建立圆，再连接含参数直线的单交点及平移。需选用中点／距离与交点判别，不能照抄原切法线示范的同一半径向量。数学、帮助边界及双语条件均通过；这属于任务设计验收，未宣称已取得学生迁移证据。 |
| 4 · P2 受力图箭头 | **关闭** | 图的 marker-end 组现有十个各含单一 M 的独立 path：九个力＋一个正方向箭头。逐一核对对象、起止与标签；在内存中按 490 px 及 245 px 宽栅格化，全部箭头均可见。数据、几何、26 号字及名称／质量换行保持，未把图本体预览当课程页面验收。 |
| 5 · P2 独立动摩擦缺失 | **关闭** | [独立摩擦题](../../alevel/as-mathematics/forces.md#l24-independent-friction) 要求自主画力、确定 R、摩擦方向、加速度及速率变化；[反向运动重试](../../alevel/as-mathematics/forces.md#l24-retry-friction) 对应同一目标。均正确限定到仍在滑动的阶段，停止后重新判断模型。 |

另一轴提出而本轴首轮未单列的四个恢复子项也已逐项核验；下列状态只签署本轴的数学、条件与目标对应，不代替 Standards 报告的独立关闭结论。

| 新增恢复子项 | 本轴结论 |
| --- | --- |
| L03 除法商项 | **关闭**：商余完整逐次相减并乘回，诊断从遗漏商项进入新除法；旧余数／图像题保留。 |
| L10 首次阈值 | **关闭**：先求总额，再解释不等式和正整数月份，核对 8、9 月及单调性；诊断分开项数与阈值错误。 |
| L18 非零条件概率 | **关闭**：8 的非零交集使错用全组分母不能蒙对；分别圈定 20、22 条记录，并以正确边际判断独立性。 |
| L21 二项模型 | **关闭**：先拒绝不放回模型，再判断明确独立的放回模型；诊断将模型条件与尾部边界分别导向对应新题。 |

本轮没有新增未关闭的 Spec 发现，也未发现范围外扩张。新题没有引入超几何分布公式、恢复系数或未声明的能量方程作为必需先修。

### 增量任务独立求解附录

先从题干重算，再对照双语提示与解答。九道新增题、改写后的综合 B 及倒数题上下文均逐项检查；题干在两语言逐字匹配，中文解释中的对象、条件、方向、单位及答案与英文一致。

| 任务 | 独立推理与结果 |
| --- | --- |
| [l03-retry-division](../../alevel/as-mathematics/algebra.md#l03-retry-division) | 依次选 x²、−4x、3；余式为 −4x²−5x+6、3x+6、0。商 x²−4x+3，余数 0；(x+2)(x²−4x+3) 精确还原 x³−2x²−5x+6。 |
| [l10-retry-threshold](../../alevel/as-mathematics/sequences.md#l10-retry-threshold) | Sₙ=2n²+10n，正边界 (−5+√525)/2≈8.96。独立逐月累加得到 12、28、48、72、100、132、168、208、252；正存款保证递增，因此第 9 月首次至少 250。不是只四舍五入根。 |
| [l15-retry-triangle](../../alevel/as-mathematics/trigonometry.md#l15-retry-triangle) | sin B=(2/3)sin40°；候选为 25.37399394°、154.62600606°。后者与 40° 相加超过 180°，舍去；只留 B=25.37°，第三角约 114.63°。 |
| [l16-retry-restrictions](../../alevel/as-mathematics/trigonometry.md#l16-retry-restrictions) | 原分母要求 sin t≠0，排除 0、π、2π。仅在该域内化简为 sin t=0；所得三个候选全部被排除，故原题无解。不是约分后恢复了禁值。 |
| [l18-retry-conditional](../../alevel/as-mathematics/probability.md#l18-retry-conditional) | 四格为仅 A 14、仅 B 12、交集 8、两者皆非 16。P(A given B)=2/5，P(B given A)=4/11；交集概率 4/25 与边际乘积 22/125 不等，故不独立。 |
| [l21-retry-model](../../alevel/as-mathematics/binomial.md#l21-retry-model) | 不放回：已抽红后红概率从 3/5 变为 2/4；不独立。另枚举有标签抽取，X=1、2、3 的概率为 3/10、3/5、1/10，而拟议 Bin 会允许不可能的零红。放回且独立时 Bin(3,3/5)，恰两红为 54/125；这是枚举核验，不要求学生学习额外分布公式。 |
| [l25-retry-separation](../../alevel/as-mathematics/momentum.md#l25-retry-separation) | 右正：2v+vB=12，vB=12−2v；继续向右且立即分离要求 0<v<vB，故 0<v<4 m/s。A 的冲量 2v−12 向左，大小在 4 与 12 N s 之间，均不含端点。v=0 使 A 停下，v=4 使两者同速；不擅加能量约束。 |
| [l24-independent-friction](../../alevel/as-mathematics/forces.md#l24-independent-friction) | 竖直平衡 R=39.2 N；滑动向右，摩擦 9.8 N 向左，与 3 N 外力同向。右正时 4a=−12.8，a=−3.2 m/s²，速率减小。力图应有重力、支持力及两个左向水平力；结论限于仍向右滑动。 |
| [l24-retry-friction](../../alevel/as-mathematics/forces.md#l24-retry-friction) | R=49 N，摩擦 9.8 N 向右；右正时 5a=8+9.8，a=3.56 m/s² 向右。速度向左而加速度向右，仍为减速；停下后不能继续默认同一滑动摩擦。 |
| [mixed-further](../../alevel/as-mathematics/index.md#mixed-further) | 中点 (1,2)、半径平方 20。代入直线得 5x²+(4c−10)x+(c−2)²−19=0，判别式 400−4c²，因此 c=±10；接触点依次为 (−3,4)、(5,0)。另用圆心到直线的距离平方 c²/5=20 及垂足独立复核。平移后圆心 (3,1)，方程 (x−3)²+(y−1)²=20。 |
| [l19-retry](../../alevel/as-mathematics/random-variables.md#l19-retry) | 对重列的原分布直接枚举倒数 1、1/2、1/4；均值 9/16，直接求平方偏差的加权和为 19/256，与二阶矩减均值平方一致。原 Question 未改。 |

还逐项核对诊断所指的实际解释与新题，而非仅检查锚点存在：除法／余数、数项／阈值、扇形／SSA、全区间解／分母限制、条件分母／互斥独立、尾部／模型、受力／假设／摩擦、碰撞符号／分离均按错因分流。提示和答案保持分别关闭，题目前的对象澄清和完整作答数据不直接代做所考判断。

### 最终公式改排、检查与限制

- 核读最终五对页面：trigonometry 的三条定律及扇形两式；binomial 的 Bernoulli 一／二阶矩、方差、独立和及尾部补集；constant-acceleration 的四个匀加速关系；exponentials-logarithms 的换底等价关系和 a>0、a≠1、b>0 条件另行；variable-acceleration 的速度／加速度导数与两次积分常数。aligned／gathered 改排前后的数学含义一致，双语公式顺序一致；没有据此宣告手机不再溢出。
- 实际重跑内容检查：15 主题、25 组、每语言 **130 题干／224 关闭折叠区**，入口仍为八题；计算检查 **244 次数值比较及相关断言**均通过。另做上表的系数消元、逐月枚举、抽样枚举、精确 Fraction 矩和力计算、切线距离及垂足核验。
- 再将原英文 Question 与固定点逐项比较，未保留项仍仅为已独立验收的 L01 两处；没有为修补本轮发现删除旧题。新综合 B 属本轮新增任务的改写，原法线独立任务仍保留。
- 本轮只写本报告；没有改课程、SVG、测试、依赖或共享 CSS。没有执行 Jekyll、生成 HTML、课程浏览器、手机或 lint 验收；主线程报告的构建、截图和 lint 不算本轴执行证据。没有真实学生试用或延后保留证据。首轮官方来源阅读沿用未受改动的结论，本轮没有重复整套历史 QP／MS 或计算器流程。

### 最后两入口页分行复核

上一轮清单摘要为 5abaa7473d14da2cc44d5e4b4fdfae5b6658eed124967f8b0304630b2df28cac。本次仅两语言 index.md 字节变化，其余 34 文件哈希一致。逐行核对 [综合 B](../../alevel/as-mathematics/index.md#mixed-further) 的判别式：三行仍连续表示 (4c−10)²−20[(c−2)²−19]；精确展开为 (16c²−80c+100)−(20c²−80c−300)=400−4c²。c=±10、接触点、平移结果与条件均保持。

中英文使用相同 aligned 三行，分段文字均先说明重根，再计算判别式、令其为零；题干及关闭帮助的边界未变。本轮再次执行内容检查，通过 130 题干／224 关闭折叠区。244 次计算比较沿用上一轮已执行结果，此次等价改排没有重复运行计算脚本；没有据源码改排推断手机阅读或构建验收通过。

## 首轮覆盖与限制（保留原审查记录）

下述内容记录修补前的执行范围与状态；涉及已修复缺口及旧综合 B 的结果，以前述增量复核为当前结论。

固定点与 HEAD 均为 e9cd88a8730dda83bc6aaa855d1863c2d7837d1c，分支 codex/as-mathematics-simple；没有新增提交。实际比较为：

~~~powershell
git diff e9cd88a -- alevel/as-mathematics zh/alevel/as-mathematics scripts/test-as-mathematics-content.js scripts/test-as-mathematics-calculations.js
~~~

另逐一读取两张未跟踪 SVG；没有使用 Windows shell 花括号展开。范围为 15 对学习页及两入口，共 32 页、25 组活动，另含 2 SVG、2 测试文件。

- 独立求解全部 17 项非 L01 新增 independent／retry 任务及入口 8 题，重建改写示范和模型判断；先核算再与解答对照。
- L01 及其页内稍后题沿用用户明确接受的[独立 Spec](review-as-l01-simple-spec-2026-10-25.md)／[Standards](review-as-l01-simple-standards-2026-10-25.md)复核，本轮未重复求解。除此样章已接受的两处题干替换，固定点的其他原有英文 Question 均保留。
- 人工对照新增与改写部分的中文解释、条件、方法选择、提示、答案和恢复含义；源码检查补充核对英文题干、公式及锚点。没有将机械配对视为逐句翻译认证。
- 已纳入用户后续增加的两语言累计表、random-variables／circles 的 aligned 换行，以及两 SVG 的 26 号字体和车名／质量换行；逐行换式的数学内容相同。SVG 在 bundled sharp 中内存渲染，未保存额外图像文件。
- 实际执行两项既有脚本：内容检查通过（15 主题、25 组，每语言 121 个学习页题干、206 个关闭折叠区；另检查入口 8 题）；计算检查通过（225 次数值比较及其余断言）。排版换行后再执行内容检查。另用标准库 Fraction 精确枚举新分布、累计概率、有限余项和入口矩；核对 SVG 坐标变换与面积。这些检查没有覆盖发现 1 的题间指代。
- 本轮不作 Jekyll 构建、生成 HTML、课程浏览器／手机、完整无障碍或学生试用结论；主线程的截图修复及页面测试不计为本审查的执行证据。所有新增题和改写推理均保留 AS 知识要求，没有用删题或删条件降低任务；发现 3、5 则是综合／独立产出的不足。

### 旧审计逐项对应

| 审计项 | 本轮核对结果 |
| --- | --- |
| AS-01 圆法线 | 已有公开几何解释、一般方向示范、独立两线与竖直半径重试；均正确，未引入隐函数求导。 |
| AS-02 目标与独立任务 | 原七处指定缺口均已增加对应产出：L01 沿用先前验收；L04 长度与一般中垂线、L06 有理幂导数、L08 原函数与常数、L19 构造与线性变换、L23 两条件恢复、L24 假设辨认。L19 保留题另受发现 1 影响；审计摘要中的动摩擦补强仍缺（发现 5）。 |
| AS-03 关键桥梁 | L01 已验收；L03 展示依次选商 x²、x、−2 并乘回相减；L23 展示两次积分及各自条件。 |
| AS-04 原三处重试错位 | L04 新交点重试、L13 新截断近似、L17 新对数筛根均对应原目标，保留旧练习；不能由此推断其他所有组的恢复均完整（发现 2）。 |
| AS-05 恢复与综合／稍后路线 | 主题先修、局部概念锚点、四路线出口和八题均已存在；恢复任务仍有错位，进一步纯数综合仍偏同型（发现 2、3）。 |
| AS-06 阅读层次 | 源码有公开连续概念／完整示范边界、单题边界、分别关闭的帮助及缩减目录。实际桌面／手机可读性由主线程验收，本审查不据类名宣告通过。 |
| AS-07 对应图形反馈 | 两图均在对应关闭解答内。速度图是三条线段、四块有向面积，旧审计“四段”措辞不再沿用；受力图数值与对象正确，但箭头不全（发现 4）。 |
| AS-08 精确／近似 | log5/log2 与 2.322 之间已用近似号；保留未舍入值代回检查。 |

审计摘要的其余补强也已对照：L07 由入口立方函数题检查区间选法，不再只有矩形；L09 错误方向回到曲线形状假设而非只看表值；L18 进入未标方法的统计组合题；L20 独立和／同一变量倍数的辨认及 L25 严格分离范围均保留。L21 现在有实际可读取表，见下文。L11“若把推导和公式使用都作为目标”的条件性建议：主线已展开推导，当前独立题检验公式使用和收敛拒绝，本轮不将它冒称独立推导验收。

### 全部新增任务的独立解题记录

所有行均对照中英文条件与答案；这里的“正确”只指所列任务的数学核算，不代替恢复、迁移或学生表现验收。

| 页面与任务 ID | 独立所得结果及必要检查 |
| --- | --- |
| coordinate-geometry · l04-independent-geometry | 坐标差 (6,4)，长度 2√13，中点 (1,3)，垂直方向 −3/2；3x+2y=9 同时满足过中点及垂直。 |
| coordinate-geometry · l04-retry-intersections | x²−3x−c=0；两点要求 c>−9/4，等号给切点 (3/2,9/4)。 |
| coordinate-geometry · l04-retry-geometry | 长度 3√5，中点 (3/2,2)，斜率 2；中垂线 2x+4y=11。 |
| differentiation · l06-independent-powers | x>0；y′=−6x⁻²+(3/2)x⁻¹ᐟ²；在 4 为 3/8。 |
| differentiation · l06-retry-powers | 先拆为 2x³ᐟ²+3x⁻¹ᐟ²；导数 3x¹ᐟ²−(3/2)x⁻³ᐟ²，在 1 为 3/2；正分母条件保留。 |
| integration · l08-independent-function | y=2x³ᐟ²−2/x+C；(1,4) 给 C=4。求导及代点都满足原题。 |
| integration · l08-retry-function | y=4x³ᐟ²+4/x+C；(4,35) 给 C=2；负幂积分符号及原正域均正确。 |
| sequences · l13-retry-approximation | 截至三次项为 1−8x+24x²−32x³；x=0.01 给 0.922368。仅遗漏 16x⁴=0.00000016>0，故偏低，完整值 0.92236816。 |
| circles · l14-independent-lines | 中心 (−1,2)，到 P 差 (4,3)，半径平方 25；切线 4x+3y=27，法线 3x−4y=−11。两线过 P，法线还过中心。 |
| circles · l14-retry-lines | 中心 (0,1)，半径竖直；法线 x=0、切线 y=5。无需对无穷斜率取倒数。 |
| exponentials-logarithms · l17-retry-domain | 原条件 x>1；合并后 x²=4，仅保留 2；代回为 log₃3+log₃1=1。 |
| random-variables · l19-independent-distribution | HH/HT/TH/TT 各 1/4；X 概率为 (1/4,1/2,1/4)，E(X)=1、Var(X)=1/2；Y 均值 2、方差 9/2、SD=3/√2。此处的 X 含零，是发现 1 的触发点。 |
| random-variables · l19-retry-distribution | X=1、4 的概率为 1/3、2/3；E(X)=3、E(X²)=11、Var(X)=2；Y 的均值 7、方差 8、SD=2√2。 |
| variable-acceleration · l23-independent-conditions | v=3t²−2t+C；v(1)=3 给 C=2。s=t³−t²+2t+D；s(1)=5 给 D=3。位移 s(2)−s(0)=8 m；反向微分及两条件都符合。 |
| variable-acceleration · l23-retry-conditions | v=2t²−2；s=(2/3)t³−2t+1；s(2)=7/3 m。两个常数分别由速度、位置条件确定。 |
| forces · l24-independent-assumptions | 轻绳／光滑轻滑轮支持同 T；绷紧／不可伸长／固定路径支持同加速度大小。有质量不能默认同 T，松弛不能继续套共同运动约束。没有假称牛顿定律失效。 |
| forces · l24-retry-assumptions | 固定长度仍给同加速度大小；粗糙接触不保证同 T，缺少相互作用信息时不能求唯一数值加速度。没有额外教授粗糙滑轮定量模型。 |

### 入口八题

| ID | 独立所得结果及边界 |
| --- | --- |
| mixed-foundations | f′=3x(x−2)；端点与驻点值为 0、−4、0，最大值 0 在 0、3，最小值 −4 在 2。曲线全不高于轴；面积 27/4。 |
| mixed-further | 原圆 (x−1)²+(y+2)²=25；切线 3x+4y=20、法线 4x−3y=10；新圆 (x−3)²+(y+1)²=25。计算正确，迁移设计见发现 3。 |
| mixed-statistics | P(A given B)=3/5≠P(A)=1/2，不独立。独立放回四次，p=1/3；均值 4/3、方差 8/9、P(X≥1)=65/81。条件分母未误作 p。 |
| mixed-mechanics | 右正；合力 8 N，a=4 m s⁻²，末速度 18 m s⁻¹，全程向右，路程 40 m；冲量 32 N s 向右，由 FΔt 和 mΔv 均得到。 |
| later-foundations | y=x²−4x+1；y≤1 时 0≤x≤4；上方直线减曲线积分得面积 32/3。 |
| later-further | 2c²+c−2=0；c=(−1±√17)/4，负根小于 −1 而舍去。保留根给两角约 0.675、5.608 rad；端点不满足，保留精确式后才舍入。 |
| later-statistics | C=0、1、9；E(C)=11/6、E(C²)=83/6、Var(C)=377/36。独立枚举两副本给 E(T)=8/3、Var(T)=377/18；常数不改方差。 |
| later-mechanics | v=2t−t²，s=t²−t³/3+3；在 t=2 转向，s 为 3、13/3、3。位移 0、路程 8/3 m、冲量 −4.5 N s；a 随 t 变，不能跨全段套匀加速公式。 |

### 改写示范、既有约束与新表／图

- L02：三种二次式形式相等，区间端点按不等号取舍；切触对应重根。L03 三次除法每次消最高次项，最终商 x²+x−2，乘回得到原式；重复根与单根的局部符号解释成立。L05 通过相同输入求新横坐标，内外乘数、负号、零因子限制保留。
- L04 中点 (3,3)、长度 2√5、斜率 1/2，垂直线 2x+y−9=0；交点与等距检查正确。L06 根式导数只在 x>0 使用，切法线过 (1,5)，梯度 4、−1/4；驻点水平切线的法线直接写竖直线。L07 原无约束面积上限 25、受约束上限 21；入口立方函数另检查全区间和端点。
- L08 幂积分排除 n=−1，恢复常数与定积分上下限分别处理；示范两曲线面积 4/3，保留题面积 9/2、横轴下方面积 16/3。L09 内部高度计两次；示范梯形值 5、精确积分 14/3；向下弯曲题估计 10 偏低，只有三个表值的另一题估计 11 而误差方向不确定。
- L10 项与和的区别、首次阈值的相邻整数检查保留。L11 有限和推导逐行相消，r=1 独立处理；非零首项的无穷和要求绝对值小于 1，保留独立题拒绝 r=3/2。L12 完整走 0→3→4.5→5.25→5.625，并用差距减半证明趋近 6；保留平方递推的两初值反例。L13 示范 x=0.01，保留项 1.0824、全部余项 0.00003216，未凭“x 很小”宣称误差保证。
- L14 配方确得中心 (2,−1)、半径 5，切线 3x+4y=27、法线 4x−3y=11；翻译向量改变中心、半径不变。一般方向和水平／竖直方向均未除零。L15 9√3 的三角形面积从 6π 扇形面积扣除；SSA 两角及正第三角保留。L16 恒等式约分保留 cos 非零限制，含端点的完整周期解集正确；恢复问题另见发现 2。L17 原对数各自真数为正，5 与 −1 中仅 5 可取，精确／近似分开。
- L18 构造表与边际、交集、并集自洽，独立与互斥分开，未复制异常官方数据。L19 公开示范的 E(X)=9/4、Var(X)=19/16 及平方变换的 531/16 均正确；旧倒数答案在原分布下成立，题间 X 指代则有发现 1。L20 负系数平方、独立方差相加与同一变量倍数的区别保持；未知依赖时不能只凭边际方差求和。
- **L21 实际读表：** 由 Bin(5,1/5) 的精确概率 C(5,k)4^(5−k)/5^5 枚举，F(0)…F(5) 依次为 0.32768、0.73728、0.94208、0.99328、0.99968、1；两语言表逐项相同。读 F(3)−F(0)=416/625=0.6656 正确，保留下端点；题干未改，表明确标成模型计算的自拟表。Bernoulli 矩及独立和推导保留。
- L22 保留投射示范最高点 1.5 s、高度 11.025 m、飞行 3 s、平均速率 7.35 m s⁻¹；最高点加速度不为零。独立速度图按屏幕坐标 (80+34t,220−15v) 核对四顶点与 t=9 零点；三段梯度 2、0、−4，四面积 16、24、8、−2，位移 46 m、路程 50 m、平均速率 5 m s⁻¹。突变连接处不指定单一加速度。
- L23 先积分确定 C=3，再积分确定 D=0，v=(t−1)(t−3)，转向位置为 4/3、0，最终位置 4/3；位移 4/3、路程 4。原分段任务接续速度 12，第二段距离 18，得到 T=5、a=−4；不混用两阶段方程。
- L24 两体方程给 a=1.96、T=23.52；汽车／拖车给 a=1.2、T=680，两个物体的作用对象和文字方向正确。新图的线段起止、标签、质量、反力与重力分别核对；箭头不足见发现 4。两图字体为 26，480 单位图宽若显示为 245 px，等效 13.27 px；这只是比例核算，不是本审查实测手机页面宽度。
- L25 外冲量与系统边界明确，未另加能量守恒或恢复系数。保留独立题“继续向右并立即分离”给 0<v<2、4<冲量大小<6，均为开端点；不照抄官方另题的非严格共同速度边界。

### 官方材料与来源声明

本轮实际打开[当前 9660 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)所连的[大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，核读版本及 §3.1／§3.2（PDF pp9–18）。有理幂微积分、有限正整数展开、圆法线、有限分布／独立和、二项公式与表、直线运动和连接体均在目标范围。没有迁移到 9760；未新增隐函数求导、指数／对数微积分、统计检验、斜力分解或恢复系数的必考要求。仓库两份 AS 大纲实际均为 v5.1，入口标作历史资产正确。

用 bundled pypdf 只读提取四份本地原卷，核对封面身份、January 2025、单元和 Final MS。下面列实质核读的配对题，页码均为 PDF 页；不是全部历史题的重新解答。

| 本地配对材料 | 实际核读位置及与课程声明的关系 |
| --- | --- |
| MA01 Q1 | QP pp2–3／MS pp4–5；指数改写及法则证据，未移植分值。L01 本轮解题沿用先前独立验收。 |
| MA01 Q3、Q6、Q9 | QP pp6–7、12–13、20–21／MS pp8–9、14–15、21–23；项与总和、hence 的代入／比例、收敛候选的拒绝。 |
| MA01 Q7、Q8 | QP pp14–19／MS pp16–20；有理幂导数、驻点论证、法线比较、原函数常数和实际面积边界。课程自拟题没有冒充这些原题。 |
| MA02 Q3、Q4 | QP pp6–9／MS pp7–10；弦中垂线、平移、三角恒等变形与区间解。Q3 本身未考法线，新增法线依据大纲。 |
| MA02 Q6–Q8 | QP pp12–17／MS pp13–15；严格尾部、独立和方差、条件分母、构造分布及期望。Q8 不直接验证单变量线性方差；该新增目标依据大纲。 |
| MA02 Q9–Q11 | QP pp19–23／MS pp16–21；两体列式、分段速度／面积、冲量与碰后边界。Q10 给速度，不把它称两次积分求常数的原题。 |

MA02 Q7(b) 的本地题面确有 P(R)=1/6、P(R∩L)=9/50，交集大于边际；MS 的 368/525 只是加法结果，不能使模型成立。课程另用一致的自拟数据，来源异常声明正确。本轮没有核查另外的官方替换版本或勘误，也未逐条核验现行公式册或实体计算器模式。

原卷身份哈希：

~~~text
MA01 QP 2ff28edd42878e473aaecafffa27bef01ef93f072db505cbddabd786f2c195d8
MA01 MS 99e892f5c5ca01299ba9dc1f244f66551d015d7526eebbc20ca5159b0bbd3c9e
MA02 QP c012472610d3e869fb9d73b6ce94b547f984ce2df5cf764744078212fe47e1d1
MA02 MS f66fed29e34a3ff95946053ac065017c5e16e55be59bd70fc682a5a699832c6d
~~~

## 最终审查源快照

下列 SHA-256 覆盖 32 页＋2 SVG＋2 测试，共 36 个文件；已纳入九道新任务、倒数对象澄清、综合 B、十个独立箭头，以及最终五主题和两入口页判别式的公式改排。与首轮源快照相比，27 文件变化，9 文件不变。本审查只写本报告，未触碰未跟踪 node_modules／package.json，未安装依赖、提交、推送或发布。

取样时间（UTC）：2026-10-25T04:23:22.735511+00:00。

首轮清单摘要 SHA-256：`deaaf42cbb24cf35f9e955d3aac60f64b42a1d0675bbcd3618d1d5ac94cdccaf`。
当前清单摘要 SHA-256：`718d5bed97dcef930201506d5589164c6599cc18ae2dc9df6c58ea7ad09b1eea`。
摘要算法为按路径字典序拼接“SHA256＋两个 ASCII 空格＋路径＋LF”，以 UTF-8 无 BOM 计算；不包含报告自身。

~~~text
4a5b128415be89c85b20a1c26282aed6b7e4193d1d3a04b51ea1801331ecbf91  alevel/as-mathematics/algebra.md
b89c7e1b0c7653cb13836b4b81f8b368fdc0bc20b33ba0e0e9212eb079d84907  alevel/as-mathematics/assets/car-trailer-check.svg
91128b1f770cc878c042dbdad319f79653eac5f3ec539e20c6595e9a57125d08  alevel/as-mathematics/assets/motion-check.svg
ff8ce5ad1fce7d117fba7dedb09e1eeb37803680011f43440aabec017ba5cfc2  alevel/as-mathematics/binomial.md
5c374ec18ee871d643fd715fefffa6a0b71d4278a877d0392831843355586d52  alevel/as-mathematics/circles.md
9c07e694271e6a2fcc4971e8a72f39e9de4b958f201ec831995cce0c24d4c9a6  alevel/as-mathematics/constant-acceleration.md
399cefe98f2271d56936f02201ff697740f2c449c91c7e5509b5ac40ac59c9e2  alevel/as-mathematics/coordinate-geometry.md
7152aff346f091ba725b5218edf868f6bb824f552bb17173bce3a6b790faa78c  alevel/as-mathematics/differentiation.md
64e61bf8875b5cc8361562d7519def40a3b00e0724c2a19eac03fc82221234fa  alevel/as-mathematics/exponentials-logarithms.md
359721ff08064858dfb3b16d74558fb35a3d5c34defd349990a2e602a2225ecf  alevel/as-mathematics/forces.md
cd839185d9f6e8ea4764164789d0fec351e7165081602f03eb3e44282642cb75  alevel/as-mathematics/index.md
c7685d6e0ddcdb2e0ce3298e2ac974b7369e42e95a1eac700ea99815cb7978e8  alevel/as-mathematics/integration.md
a0d35ba8fa627cc38a05f5d37f9691f4e8211ebe24303041a53e493d0aa75a0e  alevel/as-mathematics/momentum.md
53360e8a48e90ac85647ae0a6767c0ca1c4b4f9ce816e9589a7317280bef542a  alevel/as-mathematics/probability.md
8b009f08c5e616c4ea8ab52b9f1caf39c468e09f22b888c3acd312d079a01296  alevel/as-mathematics/random-variables.md
213d9f0b121c29332f2c48506aa41acfb58e2a72a4e874752c6119fcb98e1ef0  alevel/as-mathematics/sequences.md
cf7f3efa3ae054b67b97eeb891f5e9657c6421e66bb300cfb5de885b35a6107e  alevel/as-mathematics/trigonometry.md
fa30de0326d729d688b212f133f9fb76541082d77273d0785fe039fa57c255ec  alevel/as-mathematics/variable-acceleration.md
344b1296735f614b6740629e054e250f4e04124419d090a149feee9741697615  scripts/test-as-mathematics-calculations.js
8c50fe63a058f484131df4e97fb6c6c5140f1f23474294065f097ef6b1cb72e6  scripts/test-as-mathematics-content.js
e2dbfb624bf3e6319c3c48b35c86a8a14ee3dba3a9d42e555e4d9abab17a17ac  zh/alevel/as-mathematics/algebra.md
96ea5bba445be23c149ddbf52ca894012c1b1532ac0df12473e4aa84f52fba13  zh/alevel/as-mathematics/binomial.md
54ec0660b59409ff88284454bfd3c8583068ab414ad9883aa7fc737d362358c1  zh/alevel/as-mathematics/circles.md
0811cc16dd0f25c8205b013797b28508a8bf430ab19558b56d04f8b8e26a614b  zh/alevel/as-mathematics/constant-acceleration.md
e42f0458800defd74314ab7988281e0a083f5e3c70f636a2fe7458dc224e19a2  zh/alevel/as-mathematics/coordinate-geometry.md
6aee58b5caad7ae07e9fd6bbbd973fa07498ad4ae82e0bd09e4b76a594e695d3  zh/alevel/as-mathematics/differentiation.md
c8c399e3ea011a3a814633b4dfbd129a7c46a6bc74ae576e48410fc7afd6bfe9  zh/alevel/as-mathematics/exponentials-logarithms.md
eb1cc12c007972cc71d28d9aa17fc6e6a697d91bc5cc94cc41a43db8aa940e49  zh/alevel/as-mathematics/forces.md
f98285319aa921ed54f7a1a3f3bccb6626eb45129e470255609ff3591edea40b  zh/alevel/as-mathematics/index.md
ed162609940adf76cc443d1f2902c82e3fd35d2440256bc113a70def281d8ae6  zh/alevel/as-mathematics/integration.md
a33f81849e5c0160f92f9fc1bf14de7de84d19a55de219d006abf311b693819d  zh/alevel/as-mathematics/momentum.md
38611ad4539820363ae66db7ded2e2b48fb9bd2f49b04903d9a3ede034ad36ec  zh/alevel/as-mathematics/probability.md
03f6d23b21e213e05eb4b8e3c520f7a9df7c29908befdcb49cfeeab8a3a71621  zh/alevel/as-mathematics/random-variables.md
aac3af495154b873176c2aaa0be0443d55559e130dabc92284e5361d9e1c317b  zh/alevel/as-mathematics/sequences.md
27cad5d06b1e6b688cc30865b6a561e2e084541674cd38d33efd9d473585f71b  zh/alevel/as-mathematics/trigonometry.md
73e9473409345ba759eec0665da08acfde5ded06d3d024c7052e9c7a83a993af  zh/alevel/as-mathematics/variable-acceleration.md
~~~

首轮五项均已关闭，本轮无新增未关闭 Spec 发现。构建、课程浏览器和真实学生表现仍分别验收；后续源码若变更，须重核受影响内容并刷新快照。
