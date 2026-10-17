# A2 Further Mathematics Pure 全量审查记录（2026-10-15）

## 结论与审查边界

本记录按当前根 `AGENTS.md` 的学科制作准则，对工作树中 A2 Further Mathematics Pure 的 **24 个页面逐页全文审查**：英文入口及 11 课、对应中文入口及 11 课。共覆盖 **81 个编号例题、78 组编号练习**，另包含正文中的推导、证明、速查表及未单独编号的小例子；多小问仍按一组计数。未确证 P1 数学错误。确证 3 项 P2：旧 AQA 原题的来源／配套评分材料记录不完整；二阶微分方程的独立练习标题提前揭示应由学生判断的根型或共振情况；补充检查发现双曲函数 8 处集合花括号在生成 HTML 时丢失（渲染问题，见文末 FP2-AUDIT-03）。

这是一份内容审查，不是修改实施。审查基于本地 `ff47be7`（`Merge branch 'main' into codex/physics-ph03-content-opt`）及当时工作树；未改课程、提交或推送。只新增本报告。工作树原有的其他学科和共享文件改动不属于本报告的变更。

**“现有页面均已读完”不等于“整门 FP2 已制作完成”。** 入口明确把 FP2.12 向量与三维坐标几何、FP2.14 线性方程组、FP2.13 矩阵标为准备中。当前有内容的是 FP2.1–FP2.11；没有把这三个缺页误当成已完成内容，也没有因为各页例题数量或标题格式不同而判错。

## 依据及官方材料核验

- 当前 [9665 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)及其链接的大纲：正文资格代号为 **9665**，版本 **5.2**。核对 FP2.1–FP2.11 的范围和条件；未把新资格 9765 自动应用于本站。文件路径中的上传日期不是资格或考季身份。
- [当前资格页链接的大纲 PDF](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)：已通过资格页链接打开并读相关 FP2 段落。后续直接 URL 读取出现间歇性工具失败；这不能据此判定本站链接失效。另读过官网 [2022 路径的同版 9665 大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/06/oxfordaqa-a-level-further-mathematics-specification.pdf)。
- [官方 FM03 样卷](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf)与[官方配套评分材料](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf)：根据 PDF 正文识别为 **Specimen 2018**，没有按文件名中的 2019／2016 替换考季。详细对照本组课程实际引用的 Q2、Q5、Q7、Q9、Q10、Q11；本次没有宣称审完样卷所有题目。
- [9665 Command words](https://www.oxfordaqa.com/oaqaresources/maths/assessment/a-level-further-maths-command-words.pdf)：全文读过，重点核对 `deduce`、`prove`、`show`、`sketch`、`solve` 与 `write down` 的作答证据。本组页面的证明和 `hence` 连接整体符合相应任务，未把数值试验当作证明。
- 对反三角函数课 Q7，实际读到 [AQA MFP2 January 2011 官方编写的评分材料镜像](https://colmanweb.co.uk/pastpapers/Papers/A%20Level/AQA%206360/AQA-6360-MFP2/AQA-MFP2-W-MS-JAN11.PDF)正文及 Q5，确认 2+6 分与结果；该站是镜像，PDF 作者是 AQA。
- 反三角函数课 Q8 所链的 June 2007 评分材料本次工具读取超时／失败，未完成外部重核；不据此断言页面作者没有核对过。其他旧 AQA 原题的完整原卷题号、图、题干和配套评分材料，尚未全部取得，见 FP2-AUDIT-01 与待核对清单。

关键范围核对：FP2.3 明确采用极点以外 `r>0` 的约定，因此本课只画正半径部分、`r=2sin(2θ)` 在给定一周内只计两个正半径环瓣是符合目标资格的，不能用其他课程常用的四瓣约定判错。FP2.11 的非齐次多项式次数限制针对右边的函数，不是特解次数；本课对零根共振的说明正确。

## 逐页覆盖表

下表每个语言栏各代表一个已全文阅读的实际页面。数字分别为编号例题／编号练习组数，不是制作达标所需的固定数量。全部正文数学式、问题条件和答案均作了人工独立推导或代回检查；证明逐步检查逻辑，不能以脚本采样替代。

| 课题 | 英文页面 | 中文页面 | 例／练 | 本次重点及结果 |
|---|---|---|---:|---|
| 课程入口 | [EN](../../alevel/a2-further-mathematics/index.md) | [中文](../../zh/alevel/a2-further-mathematics/index.md) | — | FP2 对应、学习顺序、先修和准备中状态已核对；未误标为完整 FP2。 |
| Roots and polynomials | [EN](../../alevel/a2-further-mathematics/roots-and-polynomials.md) | [中文](../../zh/alevel/a2-further-mathematics/roots-and-polynomials.md) | 6／7 | 全部例练、Vieta 符号、复系数反例、四次式、唯一实根及实部界。数学未发现错误；Q7 来源记录缺口。 |
| Proof by induction | [EN](../../alevel/a2-further-mathematics/proof-by-induction.md) | [中文](../../zh/alevel/a2-further-mathematics/proof-by-induction.md) | 6／6 | 起始情形、任意归纳假设、一步／两步递推、整除、复数、导数、矩阵乘法次序及完整结论。数学未发现错误；Q6 未记录配套原题评分材料。 |
| Finite series | [EN](../../alevel/a2-further-mathematics/finite-series.md) | [中文](../../zh/alevel/a2-further-mathematics/finite-series.md) | 4／5 | 相邻／隔项相消、较小 n 边界、不同下限、归纳法、精确分数。数学未发现错误；Q5 来源记录缺口。 |
| Series and limits | [EN](../../alevel/a2-further-mathematics/series-and-limits.md) | [中文](../../zh/alevel/a2-further-mathematics/series-and-limits.md) | 10／8 | 调和级数分组、比值判别边界、全部系数、复合／乘积展开、有效范围、极限及各反常积分。数学未发现错误；Q7 来源记录缺口。Q8 如实标为未核实原考试来源的改编教学题，无官方分值。 |
| De Moivre's theorem | [EN](../../alevel/a2-further-mathematics/de-moivres-theorem.md) | [中文](../../zh/alevel/a2-further-mathematics/de-moivres-theorem.md) | 10／8 | 正／零／负整数证明、非零及零右边的根、主辐角、单位根、根式、双向三角变换与积分。数学未发现错误；Q7–8 来源记录缺口。 |
| Polar coordinates | [EN](../../alevel/a2-further-mathematics/polar-coordinates.md) | [中文](../../zh/alevel/a2-further-mathematics/polar-coordinates.md) | 9／8 | 全部转换、正半径区间、极点漏解、环瓣、弦、公共面积分段、平方后的支路。数学未发现错误；Q6–8 来源记录缺口。 |
| Inverse trigonometric functions | [EN](../../alevel/a2-further-mathematics/inverse-trigonometric-functions.md) | [中文](../../zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md) | 8／8 | 主值、端点可导性、链式系数、配方、反常端点、分部积分、反正切恒等式的条件。数学未发现错误；Q6 对照官方 FM03 Q9，Q7 对照原 AQA Q5；Q8 外部文件本次未读取成功。 |
| Arc length and surface area | [EN](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md) | [中文](../../zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md) | 6／7 | 全部积分、速率绝对值、旋转半径、端盖、描线重复与曲面重叠的区别。数学未发现错误；改编例 3 与官方 Q11 方法和结果一致。 |
| Hyperbolic functions | [EN](../../alevel/a2-further-mathematics/hyperbolic-functions.md) | [中文](../../zh/alevel/a2-further-mathematics/hyperbolic-functions.md) | 9／8 | 指数定义及恒等式证明、六个核心图的数学特征、倒数函数定义域、正根筛选、反函数支、全部导数积分。数学未发现错误；例 3 如实标为 Q2 方法改编且不给官方分值。 |
| First-order differential equations | [EN](../../alevel/a2-further-mathematics/first-order-differential-equations.md) | [中文](../../zh/alevel/a2-further-mathematics/first-order-differential-equations.md) | 6／6 | 全部解族及条件、积分因子推导、CF/PI 区别、负半轴因子、奇点不能跨越、指数重复。数学未发现错误；改编例 3 对照官方 Q5。 |
| Second-order differential equations | [EN](../../alevel/a2-further-mathematics/second-order-differential-equations.md) | [中文](../../zh/alevel/a2-further-mathematics/second-order-differential-equations.md) | 7／7 | 全部解族及条件、三类根、一次／二次指数共振、三角共振、零根与多项式阶数、无穷远导数、边值不唯一反例。数学未发现错误；改编例 7 对照官方 Q7；独立判断被标题泄露，见 FP2-AUDIT-02。 |

本目录没有另设 Pure 速查文件或练习子目录；11 课内嵌的 Quick reference 和 Practice 全在上述范围。导航链接出去的 AS 先修或 A2 Mathematics 页面仅检查相关性，未当成另一轮全文审查范围。Statistics／Mechanics 不属于本次子审查。

## 确证问题

### FP2-AUDIT-01 — P2：9 道标为原题并保留分值的旧 AQA 题，缺完整的配套原卷／评分材料记录

**证据。** 下列 6 课的来源写到教材转载位置和考季，然后直接显示原题分值；其中 8 道还未写原试卷题号。相关结尾明确说是本课自写解答，但没有记录实际对照哪份配套原题评分材料。归纳法课末的其他年份评分示例不能替代其 June 2006 原题的配套材料。

| 题目 | 英文证据位置 | 中文证据位置 | 记录缺口 |
|---|---|---|---|
| Roots Q7，MFP2 Jan 2006 | `alevel/a2-further-mathematics/roots-and-polynomials.md:401` | `zh/alevel/a2-further-mathematics/roots-and-polynomials.md:403` | 原卷题号、配套 MS 身份／核对记录。 |
| Induction Q6，MFP2 Jun 2006 Q6 | `alevel/a2-further-mathematics/proof-by-induction.md:467` | `zh/alevel/a2-further-mathematics/proof-by-induction.md:469` | 配套 MS 身份／核对记录；已有原卷题号。 |
| Finite series Q5，MFP2 Jun 2010 | `alevel/a2-further-mathematics/finite-series.md:340` | `zh/alevel/a2-further-mathematics/finite-series.md:342` | 原卷题号、配套 MS 身份／核对记录。 |
| Series Q7，MFP3 Jan 2013 | `alevel/a2-further-mathematics/series-and-limits.md:622` | `zh/alevel/a2-further-mathematics/series-and-limits.md:624` | 原卷题号、配套 MS 身份／核对记录。 |
| De Moivre Q7，MFP2 Jun 2007 | `alevel/a2-further-mathematics/de-moivres-theorem.md:632` | `zh/alevel/a2-further-mathematics/de-moivres-theorem.md:634` | 原卷题号、配套 MS 身份／核对记录。 |
| De Moivre Q8，MFP2 Jun 2011 | `alevel/a2-further-mathematics/de-moivres-theorem.md:673` | `zh/alevel/a2-further-mathematics/de-moivres-theorem.md:675` | 原卷题号、配套 MS 身份／核对记录。 |
| Polar Q6，MFP3 Jun 2014 | `alevel/a2-further-mathematics/polar-coordinates.md:508` | `zh/alevel/a2-further-mathematics/polar-coordinates.md:510` | 原卷题号、配套 MS 身份／核对记录。 |
| Polar Q7，MFP3 Jun 2013 | `alevel/a2-further-mathematics/polar-coordinates.md:546` | `zh/alevel/a2-further-mathematics/polar-coordinates.md:548` | 原卷题号、配套 MS 身份／核对记录。 |
| Polar Q8，MFP3 Jan 2009 | `alevel/a2-further-mathematics/polar-coordinates.md:586` | `zh/alevel/a2-further-mathematics/polar-coordinates.md:588` | 原卷题号、配套 MS 身份／核对记录；题图虽注明重绘，尚未和原图逐项比对。 |

**影响。** 目前读者不能从项目记录复核“原题措辞和分值保留”的完整身份，也不能确认解答是否展示该原题要求的全部得分证据。根据新准则，这部分还未完成来源验收。本次已独立核算 9 题的数学结果，未发现其计算答案错误；**来源未验收不等于已证明题干或分值错误**，也不等于可以倒推作者从未读过原卷。

**建议。** 补读每题原卷及配套 MS，记录原题号、文件正文身份、必要图和要求的方法，并逐项对照。若实际改了文字、数据、图中数学条件，明确标改编题；如仍只能确认教材转载且不能确认原题身份，应准确保留这种证据状态，避免继续作已完整核实的原题／官方分值声明。不要给自写评分点贴官方标签。反三角函数课已经示范了较完整的原卷题号和配套 MS 记录，可沿用这一最小做法。

### FP2-AUDIT-02 — P2：二阶微分方程练习公开标题提前给出根型／共振判断

**位置。** `alevel/a2-further-mathematics/second-order-differential-equations.md:323`、`:345`、`:415`、`:441`、`:473`；对应中文 `zh/alevel/a2-further-mathematics/second-order-differential-equations.md:337`、`:359`、`:429`、`:455`、`:487`。

**证据。** Q1／Q2 标题直接给出 distinct real roots／repeated real root；Q5 是 simple exponential resonance，Q6 是 trigonometric resonance，Q7 是 repeated zero root。它们都显示在关闭的提示与解答外面。学生在解辅助方程、将非齐次项与 CF 比较以前，已得到决定 CF 形式或是否乘 `x` 的判断；该课也没有另一个撤去这些提示的混合选法任务。

这不是数学答案错误。例如 Q5 的算式确实为 `m²−3m+2=(m−1)(m−2)`，`e^x` 对应单根，所以 PI 应乘 `x`，并得到 `−5xe^x`。问题在于“辨认这是共振且只需乘一次 x”本身是应该独立检验的能力，当前标题先交出了这一结论。课末要求学生把看过提示的题重做，仍不能撤去一直可见的标题。

**影响。** 现有练习能检验在给定分类后执行算法，不能据此判定已会独立选择 CF／PI 形式及共振次数。它不满足新准则中逐渐加入未标明方法任务的独立考查要求。这里没有使用固定题数或强制统一课型来判错。

**建议。** 支架练习保留；在最终独立使用的练习中，把这些判断移入可展开提示或解答，题目标题只保留题号／情境，调整顺序后要求学生解释 CF／PI 的选择并代回检验。采用原有题也可以，不必为满足数量而添加题海。英文与中文标题和提示同时调整。

## 核算依据与未发现错误的重要边界

下面列的是人工重算中较容易出错的代表性证据；它们不是把其余题降为抽查。上表中每课全部编号例题和练习均已读并核算。

| 内容 | 独立检查示例 |
|---|---|
| Roots | 四次式 `z⁴−8z³+31z²−46z+34=(z²−2z+2)(z²−6z+17)`，另外两根为 `3±2√2 i`；唯一实根证明使用 `3(x−1)²+1>0` 和区间两端异号，不只是作图或试值。 |
| Induction | 两前项递推包含两个起始情形；整除题先得 `f(k+1)−8f(k)=7·15^k`，再用归纳假设写成 7 的倍数；矩阵归纳检查乘法次序和右上角项，导数归纳保留 `2^(n/2)` 与相位 `nπ/4`。 |
| Finite series | 三因子相消为 `1/2−1/[(n+1)(n+2)]`；隔两项相消保留首尾各两项，并照顾小 n 的重合；AQA 练习和为 `894/1225`。 |
| Series | `e^(2x)sin x=x+2x²+(11/6)x³+x⁴+…`；`e^(sin x)=1+x+x²/2−x⁴/8+…`；`e^(cos x)=e(1−x²/2+x⁴/6+…)`。对数的允许端点经过相应级数条件检查，不是照抄函数定义域。 |
| Limits / improper integrals | 比值判别在两个端点结果为 1 时另查通项；`(x−sin x)/[x²(e^(2x)−1)]→1/12`；`∫₀¹x ln x dx=−1/4`、`∫₀^∞xe^(−3x)dx=1/9`、`∫₀^e x²ln x dx=2e³/9`，都检查有限积分限及边界极限。 |
| De Moivre | `(1−i)^6=8i`；`16z⁴=(z−1)⁴` 的四根为 `−1,1/3,(1±2i)/5`，除法前检查 `z≠0`；单位模倒数恒等式没有泛化到任意模；五倍角相乘结果的正号由第一象限确定。 |
| Polar | 两圆公共面积 `π/2−1`；心形线／圆边界在 `θ=π/3` 交换，公共面积为 `3π/4−3√3/4`；`r(4−3cos θ)=4` 的平方结果在 `x∈[−4/7,4]` 上使 `1+3x/4>0`，未增添负支。 |
| Inverse trig | `atan[(1+x)/(1−x)]=π/4+atan x` 的条件确为 `x<1`；`x>1` 要减 π，`x=1` 无定义。官方 Q9 的积分为 `π/(4√2)`；两道分部积分分别为 `√3π/6−1/2` 和 `π/4−ln√2`。 |
| Arc / surface | 参数样题的速率为 `∣sin t∣ ∣sec t∣=tan t`（给定区间），弧长 `ln2`；完整单位圆弧长 `2π`，但不同曲面面积只计 `4π`，不把上下半圆生成的同一球面计两次；跨轴题使用 `∣y∣`。 |
| Hyperbolic | `3sinh x+4cosh x=4` 产生两个正根 `e^x=1/7,1`，两个解均保留；`atanh(sin x)'=sec x` 必须排除 `x=π/2+kπ`；`acosh(x/a)` 的原函数形式只用于 `x>a`，未错误用于负支。 |
| First-order | 12 个例练的解逐一代回原方程并检查给定条件；负半轴题可选 `μ=1/x`，解 `y=x²−x` 仍只在 `x<0` 讨论；虽是多项式也不让原方程跨过零处奇点。 |
| Second-order | 14 个例练的解逐一代回并检查条件；重复根指数特解需要 `x²`；三角共振题为 `y=sin2x−2xcos2x`；混合改编题为 `(3+2x)e^(−2x)−2x−1`，求导后分别处理 `e^(−2x)` 与 `xe^(−2x)` 的极限。边值不唯一的 `Bsin x` 反例正确。 |

## 双语、图与学习安排

- **双语对齐：**24 页均人工读完。逐页比较所有行内／块级 TeX 后，12 对页面的公式出现序列在去除空白后完全一致，共 **3017 次数学片段出现**（包含重复，不是 3017 个不同公式）。英文题干保留，题目数据、答案和定义域与中文解释一致；未发现实质漏题或范围不对齐。
- **布局与锚点：**中文保留共享 `subjects` 布局、`translation_of`、permalink、学习页元数据及稳定英文锚点。英文有的依靠自动锚点、中文显式指定同名锚点；两者源代码中显式 ID 数量不相同不能直接判定锚点坏掉。
- **图：**检查 6 个 `further-*.svg` 的文件可达性、XML、图例／文字或注释、函数定义及正文相互关系。包括复根圆、三幅极坐标图、公共区域、练习环瓣、三种反三角函数及六种双曲函数图。外链 SVG 在 Markdown 中有相应替代文字，不能仅因 SVG 自身无 `<title>`／`<desc>` 就认定图片无替代描述。实际屏幕可读性由主审查的桌面／手机浏览承担，本子审查不声称完成截图验收。
- **学习闭环：**11 课都有先修或准备说明、方法／模型解释、例题、独立题、折叠提示和答案、速查与重做指向。练习包含改条件、换表征、找缺失条件、反例／定义域及重叠曲面等有意义变化，不能概括成全部只换数值。需要改进的是逐渐撤去方法提示的末端独立任务，二阶课已形成上面的明确问题。
- **可改进但未列为确证错误：**双曲函数图像的独立补图／转换／预测任务较少；中文证明课可以更明确安排撤去句架的英文证明输出。当前页面已经保留英文题目，不能把“中文解释”本身当作违反双语要求；需要后续课堂试用判断支架撤去的程度。

## 本次执行的检查

主审查通知已完成当前工作树的 Jekyll 构建后，本子审查执行以下 9 个现有脚本，退出码全部为 0：

```text
node scripts/test-further-bilingual.js
node scripts/test-further-roots.js
node scripts/test-further-induction-series.js
node scripts/test-further-series-limits.js
node scripts/test-further-de-moivre.js
node scripts/test-further-polar.js
node scripts/test-further-inverse-trig.js
node scripts/test-further-first-order.js
node scripts/test-further-second-order.js
```

`test-further-bilingual.js` 自身报告只覆盖 7 对课；本报告的 12 对公式逐项比较补足了本次范围，但公式相同只能证明同步，不能证明双方的数学内容正确。其他脚本核对了部分精确关系、数值、解族、条件、生成 HTML 或布局断言；通过不替代人工证明检查或来源核验。本次没有更改这些脚本，也没有为凑覆盖率增写与正文同构的测试。

另执行：目录清点、逐页全文读取、全量公式序列比较、图像文件存在性、SVG XML 与标签检查、当前版本及工作树检查。人工核算和现有脚本之外未完成独立 CAS 全量验证，不宣称有此证据。Jekyll 构建和浏览器结果属于主审查，需随总报告一起看。

## 待核对与未查范围

1. FP2-AUDIT-01 的 9 道旧 AQA 题：补齐原卷题号、完整题干／图和配套 MS。本次外部读取旧卷的部分尝试返回 cache miss 或超时；不能据此判断来源不存在。
2. Inverse trig Q8：页面已经给出 June 2007 Q4 及 MS 链接，数学已独立核算，但本次外部文件失败，尚未重核其 2+5 分及与原卷的逐字一致。
3. 未取得完整所供教材原 PDF 并逐页校勘，因此这里没有宣称核实教材印刷页码、教材是否原封不动转载，或所有旧题图的忠实程度。
4. 尚未制作的 FP2.12–14、AS 先修全文、Statistics／Mechanics，不属于本轮子审查已读内容。
5. 未进行学生试用、真实英文作答批阅或学习效果测量。页面存在练习与反馈不代表已证明学生能迁移；脚本与构建通过不代表学会。
6. 本子审查没有独立浏览器桌面／手机截图、逐页键盘和辅助技术测试；由主审查合并技术证据后再判断交付状态。

建议先补原题来源记录，并在二阶课的小段独立任务中撤去公开分类提示，随后再试用同类学习安排。没有证据需要整批重写本组已核对正确的数学推导。

## 补充：生成 HTML 的 TeX 完整性（2026-10-15）

### FP2-AUDIT-03 — P2 渲染：双曲函数英中共 8 处集合花括号丢失

**性质与证据：**源 Markdown 的数学表达是正确的 `\mathbb R\setminus\{0\}`；当前生成 HTML 却变为 `$\mathbb R\setminus{0}$`。Markdown 把 `\{` 和 `\}` 当作普通字符转义，去掉了供 TeX 显示花括号的反斜杠。在 TeX 中，`{0}` 只分组，不显示集合花括号。主审查已在实际浏览器的 MathML 中确认结果为 **R∖0**；本子审查独立核对的是下面列出的源文件及生成 HTML，不重复声称完成浏览器检查。

| 语言及内容 | 源 Markdown（行） | 生成 HTML（行） |
| --- | --- | --- |
| 英文，coth 定义域 | `alevel/a2-further-mathematics/hyperbolic-functions.md:63` | `_site/alevel/a2-further-mathematics/hyperbolic-functions/index.html:741` |
| 英文，cosech 定义域 | `alevel/a2-further-mathematics/hyperbolic-functions.md:65` | `_site/alevel/a2-further-mathematics/hyperbolic-functions/index.html:753` |
| 英文，cosech 值域 | `alevel/a2-further-mathematics/hyperbolic-functions.md:65` | `_site/alevel/a2-further-mathematics/hyperbolic-functions/index.html:754` |
| 英文，练习解答中的 coth 定义域 | `alevel/a2-further-mathematics/hyperbolic-functions.md:450` | `_site/alevel/a2-further-mathematics/hyperbolic-functions/index.html:1169` |
| 中文，coth 定义域 | `zh/alevel/a2-further-mathematics/hyperbolic-functions.md:65` | `_site/zh/alevel/a2-further-mathematics/hyperbolic-functions/index.html:741` |
| 中文，cosech 定义域 | `zh/alevel/a2-further-mathematics/hyperbolic-functions.md:67` | `_site/zh/alevel/a2-further-mathematics/hyperbolic-functions/index.html:753` |
| 中文，cosech 值域 | `zh/alevel/a2-further-mathematics/hyperbolic-functions.md:67` | `_site/zh/alevel/a2-further-mathematics/hyperbolic-functions/index.html:754` |
| 中文，练习解答中的 coth 定义域 | `zh/alevel/a2-further-mathematics/hyperbolic-functions.md:452` | `_site/zh/alevel/a2-further-mathematics/hyperbolic-functions/index.html:1169` |

**影响：**本应表示“全体实数中去掉只含零的集合”的定义域／值域变为不规范的 `R∖0`，学生在速查表及解答中看到错误的集合表示。英中同样受损，所以双语公式源码相同及既有脚本通过均未发现它。这不推翻先前对双曲函数定义域、值域和推导的数学核验；错误发生在源码到网页的转换阶段。

**建议：**将这 8 个行内表达式统一使用 `\mathbb R\setminus\lbrace0\rbrace`，避免花括号依赖 Markdown 反斜杠转义；随后重新构建，检查上述 8 处生成 HTML 并在浏览器确认集合花括号可见。本轮仅记录问题，未改课程。

**补充检查范围与限制：**只读扫描了本轮四范围的全部 90 份生成 HTML：A2 Mathematics Pure 34 页、A2 Further Mathematics Pure 24 页、Physics 18 页、Chemistry 14 页。提取并比对 18,184 个源公式片段，检查公式中被插入的 HTML 标签，并将上述花括号丢失与源代码中有意使用的 Markdown 双反斜杠分开核对。另确认跨四范围有 210 个公式片段的 ASCII 撇号被替换为 `’`（其中高数 132 个）；主审浏览器抽查一阶微分方程已正确生成上标 prime，**没有证据将这些替换全部列为错误**，也未逐个视觉验收 210 处。本补充不宣称完成所有 TeX 命令、客户端渲染或无障碍输出的全量正确性验证。
