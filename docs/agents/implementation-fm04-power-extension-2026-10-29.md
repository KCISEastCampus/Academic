# FM04 功效定向补点：制作前设计与原始来源核对

日期：2026-10-29。设计与来源部分先于正文写成；当时状态为设计就绪。**当前内容与技术检查通过，待学生试用**，最终实施及验收见第6节。下列原始研究交接状态按历史记录保留，不用来替代最终版本验收。

## 1. 设计卡与改动边界

**中心问题：**同一条检验规则下，怎样从“发现变化的机会”反过来找到真实均值？数据只能取整数时，怎样确定两端边界并计算完整的第二类错误事件？

- **目标资格：**OxfordAQA International A-level Further Mathematics 9665，v5.2，Unit FS2 / FM04。以 FS2.4 的功效条目（项目对应名 FS2.4a）为核心。延后题只连接已有的正态已知方差两均值比较，不新增检验类型。
- **只补当前功效页：**[英文](../../alevel/a2-further-mathematics/statistics/test-power.md)及[中文](../../zh/alevel/a2-further-mathematics/statistics/test-power.md)。保留现有自拟示范、独立题、重试和延后题，不改其他 FM04 课程、共享布局或样式。
- **可观察目标：**从 power 与 β 的关系求对应概率；在原假设下定界；保持该事件不变，在一个指定但未知的备择参数下列概率方程并反求参数；用固定边界解释方向；用相邻整数尾概率确定双尾二项规则，区别名义水平与实际 size；在指定备择下保留两个尾部或完整不拒绝事件。
- **必要先修：**[正态标准化](../../alevel/a2-mathematics/statistics/normal-distribution.md#standardise)、[反向正态](../../alevel/a2-mathematics/statistics/normal-distribution.md#inverse)、[二项双尾检验](../../alevel/a2-mathematics/statistics/hypothesis-testing.md#binomial-example)、当前功效页的[固定规则](../../alevel/a2-further-mathematics/statistics/test-power.md#example)。延后题再调用[均值差条件](../../alevel/a2-further-mathematics/statistics/comparing-means.md#conditions)。中文回补指向对应的中文页面。
- **核心条件：**正态题明确总体正态、独立随机样本、已知方差和样本量；二项题明确固定次数、独立试验及相同成功概率。每题给定显著性水平；双尾离散题额外写清每尾预算及尽量扩大的规则，不把某一种精确双侧约定当作普遍唯一规定。
- **图表用途：**反向题以一条固定临界竖线对照原假设和真实分布，移动的是分布中心，不是规则。离散题用相邻整数的短概率表辨认端点；不制作完整功效函数。独立题作答前不展示所需的边界判定结果。
- **教学组织：**两个短演示 → 各自独立题 → 对应新重试 → 学完均值比较后的一道混合题。复用现有完整示范与单题边界，提示和解答分别默认关闭，新增题标题保持中性。

学生文字使用“先画好决定拒绝的线”“现在只换算概率的分布”等具体表述，再解释统计意义。不把 β 写成参数为假的后验概率，也不把不拒绝解释为证明假设为真。

## 2. 来源核对：教材、Specification、QP 与 MS

### 2.1 当前 Specification：本研究实际读取

从[当前 9665 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)的 Download the specification 进入[官方 Specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=22)，核对封面 9665、正文 **Version 5.2**，以及 FS2.4 的 Content / Additional information，PDF 第 22 页、印刷第 23 页。

该条要求在简单备择下计算第二类错误概率或功效，不要求推导功效函数，显著性水平由题目给定。该限制不等于禁止“已知一项功效关系，求对应的一个真实参数”：June 2026 Q10 正是这种原题。本设计只反求一个数值并解释方向，不要求求出、绘制或研究全参数功效函数，不增加最优检验、一般单调性证明或功效规划理论。

读取边界：本次实际读到官方 PDF 正文与页码；PDF 截图工具返回 cache miss，**不声称已完成该 Specification 页的图像核对**。没有采用 9765，也没有用网页摘要代替细目。页面的 FS2.4 功效行未单印字母 a；FS2.4a 是本项目细分对应名。

### 2.2 教材：现存扫描本已实际看页

原微信 temp/RWTemp 文件及所在目录已失效。按主任务提供的新位置，实际只读：

[International A Level Further Mathematics with Statistics](D:/ProgramData/wx_files/xwechat_files/wxid_zi5zliwbv1qz22_ef80/msg/file/2026-10/IAQA_Further_Math___Statistics(1).pdf)。

封面与版权页：Oxford University Press；Brian Gaulter、Mark Gaulter、Brian Jefferson、John Rayneau；首次出版 **2017**；ISBN **978-0-19-837599-9**。本文件 506 PDF 页，为无可提取文字的扫描件，页内可见手写批注；批注不是印刷教材正文，文件修改日期也不是新版教材出版时间。本次未读取或比较另一份 2025-11 同名副本。

实际使用 Poppler 渲染并由 view_image 看过 PDF 第 1–6 页及第 418–423 页；后者对应印刷 pp.414–419。重点是 **§32.1 Power of a hypothesis test，印刷 pp.415–418 / PDF pp.419–422**：

| 实际位置 | 实际读到的定义、条件或例题 | 对本设计的约束 |
| --- | --- | --- |
| 印刷 p.414 / PDF p.418 | 回顾第一、二类错误、正态样本均值和独立均值差的抽样分布 | 写明独立性、已知方差及总体正态；延后题使用已有均值差知识 |
| 印刷 pp.415–416 / PDF pp.419–420 | 灌装量：正态总体、已知 SD=3、n=10、H0 均值 330、右尾 5%；先定边界约 331.561，再在真实均值 331.6 下算漏检概率。Stage A 基于 H0，Stage B 基于指定真实参数 | 新反向题保持“先定规则，再换分布”的顺序；方差与标准误不能混用 |
| 印刷 pp.416–417 / PDF pp.420–421，Example 1 | 独立正态样本 n=12、SD=5，检验均值 14 对左尾；5% 规则后，在真实均值 13.1 下求第二类错误概率，书中约 0.846 | 教材确实包含左尾，左尾反求示范有明确先修基础 |
| 印刷 p.418 / PDF p.422，Power / Example 3 | 功效与第二类错误互补；240 次骰子计数，H0:p=1/6 对双尾；用正态近似及 1.96，落实为整数不拒绝域 29–51，再在 p=0.12 下算完整事件，使用连续性修正，power 约 47.6% | 双尾须保留两个端点。该例是大样本近似，不能照搬到本设计 n=12 或 n=10 的精确二项题 |
| 印刷 p.419 / PDF p.423 | §32.1 的 Exercise 1，随后进入 §32.2 正态已知方差两均值比较 | 本节存在左右尾与双尾练习；延后连接已有两均值课程，不要求先学未知方差 t |

教材正文有时使用 acceptance；新正文保留项目现行 non-rejection 表述。印刷 p.415 对第一类错误与显著性水平的概括，不能用来强令离散实际 size 恰等于名义水平；小样本精确边界遵循下述原 QP/MS 及题目明确规则。未在这些教材页看到反向功效求均值的例题，不虚称教材已有；其直接考试依据为 June 2026 Q10。

### 2.3 原试卷和配套评分页：重新核验

从给定 PDF 重新提取封面及指定题页文字，用 Poppler 渲染，并实际通过 view_image 查看下表**全部封面和题目／评分页**。页码为一基 PDF 页；这些 QP/MS 的相关印刷页码与 PDF 页序相同。

| 文件与来源链 | 封面身份 | 本次实际阅读、渲染及看页 |
| --- | --- | --- |
| [June 2026 QP 本地文件](C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/power-upgrade-2026-10-29/qp-2026.pdf)；[既有资料记录的 Drive 原链接](https://drive.google.com/file/d/1tL6Bbjx9_3rs3oq0CxUetH0DBTvkE43r/view) | 9665/FM04，Unit FS2 Statistics；Monday 8 June 2026，08:00 UK Time；90 分钟、80 分；24 PDF 页 | 封面 p.1，Q10 pp.20–21 |
| [June 2026 MS 原文件](C:/Users/mi/Documents/Codex/2026-09-15/codex-threads-01a0a49b-cef9-7c92-95e1/work/further-math-frequency/sources/MS_202605_FS2.pdf) | 9665/FM04，FS2；June 2026；Version 1.0 Final；17 PDF 页 | 封面 p.1，Q10 pp.16–17；原文件全程只读 |
| [June 2025 QP 本地文件](C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/power-upgrade-2026-10-29/qp-2025.pdf)；[既有资料记录的 Drive 原链接](https://drive.google.com/file/d/1FTxQ-X2OSM6MRZHAAKbTk8-Gp1Vqx7z4/view) | 9665/FM04，FS2；Wednesday 4 June 2025，07:00 GMT；90 分钟、80 分；取得文件 19 PDF 页 | 封面 p.1，Q5 pp.10–11 |
| [June 2025 MS 本地文件](C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/power-upgrade-2026-10-29/ms-2025.pdf)；[既有资料记录的 Drive 原链接](https://drive.google.com/file/d/1VRTlOTfUIP2agmgWRMxOBJLAUS1AwvQA/view) | 9665/FM04，FS2；June 2025；Version 1.0 Final；15 PDF 页 | 封面 p.1，Q5 p.9 |

Drive 链接由[前轮原始材料研究](research-fm04-ms-alignment-2026-10-29.md#2-实际读取的原卷与评分标准)提供；本次实际读取上表本地文件，没有声称重新从 Drive 下载或重新验证权限。只核了这两题，不宣称分析过全部历年评分点或得出考频趋势。

**原题官方评分动作，仅在作者记录保存：**

- **2026 Q10(a)，6 分：**B1 正态分位数约 1.8808；M1 用 H0 确定临界值；A1 临界值约 29.378；M1 在真实均值 k 下把拒绝事件概率设为 0.25（或不拒绝事件设为 0.75）并标准化；m1 形成 k 的正确方程；A1 得 29.60。独立重算：SE=√(9.3/85)≈0.3307744922，c≈29.3778814493，k≈29.6009854539。
- **2026 Q10(b)，2 分：**M1 进一步说明落入既定拒绝事件的概率为何变小；A1 k 变大。只复述 β 增加或 power 下降不充分。MS 中允许的“面积变小”应解释为真实分布下概率面积变小，不能教成移动临界线。
- **2025 Q5(a)，5 分：**M1 左端尾概率；M1 右端尾概率；A1 不拒绝域 1≤X≤8；M1 在 Bin(20,0.15) 下算该完整事件；A1 β≈0.960。原 MS 同时列 P0.2(X≤0)≈0.0115、P0.2(X≤1)≈0.0692、P0.2(X≥8)≈0.0321、P0.2(X≥9)≈0.0100，支持以每尾 0.025 检查相邻边界。
- **2025 Q5(b)，1 分：**B1ft，1−β≈0.040。独立精确二项求和得到 β≈0.959911560531、power≈0.040088439469。

以下演示的新增求问及全部新任务都没有官方分值；不能把上述 M/A/B 编号机械贴给自拟题。

### 2.4 可复查的文件与图像边界

原文件 SHA256：

| 文件 | SHA256 |
| --- | --- |
| 教材现存扫描本 | 6f7b90eb354936bd616d2991337c6c32ddcc74de8d4c980ce5cde1f61ca360f5 |
| qp-2026.pdf | 07c126032c324cc0fca2692243110efef77d59bc8da45483117866998f7e5816 |
| 原目录 MS_202605_FS2.pdf | 7c0093069297282c3a66ab6f46ab701e74157b8aa8659c76ac8a0f7e6aa4a00f |
| qp-2025.pdf | 1e878ba3498f2531dc8b10a63201f647c88e6b905623c6876a7ee569e532d3cb |
| ms-2025.pdf | a8b20ce8634bd8b3e8f5b83172a1d36e80b1fe41c7fd66dd90fb7b1c14f7b807 |

本次生成图像全部位于[指定 scratch](C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/power-upgrade-2026-10-29/)：

- design-review-qp-2026-p{1,20,21}.png
- design-review-ms-2026-p{1,16,17}.png
- design-review-qp-2025-p{1,10,11}.png
- design-review-ms-2025-p{1,9}.png
- design-textbook-p{1,2,3,4,5,6,418,419,420,421,422,423}.png

花括号仅列实际文件页序，不是文件名或命令。教材功效正文图以 130 dpi 渲染；QP/MS 以 115 dpi 渲染，均实际看过。未把教材或截图放进仓库、课程或共享 _site。

## 3. 现有课程基线与目标映射

完整读过当前双语 test-power.md。每版已有 6 个英文 Question 题干、11 个显式锚点：rule、example、practice、task-a、task-b、retry、retry-a、retry-b、later-review、later-a、next-step。现有正态单尾示范、正态双尾、二项单尾、左右尾重试和均值差延后题均保留。

读取时源文件 SHA256：英文 6f386fa8c3ebdb45ad5c8adf1ffbc86c3c067ddf324bedcf575b733d1a397d77；中文 d6dfc51ed478a03fdde3ac725582555be7c7677e52c4ac99c2f534c261bbbb8c。这是研究输入版本，**不是尚未制作的新版本验收哈希**。

按[前轮建议一](research-fm04-ms-alignment-2026-10-29.md#一功效从代入备择走向反求备择并补双尾离散边界)重新对照全文：已有题目给定真实参数求概率，尚无固定规则反求备择均值；二项题尚未把双尾整数定界、实际 size 与备择完整事件合在同一独立任务中。

| 目标与来源 | 讲解／演示设计 | 独立产出设计 | 判据、恢复与新重试 |
| --- | --- | --- | --- |
| 从 β 与 power 的比例得到具体概率；FS2.4 功效、2026 Q10 | D1 先用互补关系，再求临界线 | T1 不提供算式，学生先写 β、power 及含义 | 若写成 1−α，回 rule；R1 改成标准化报告的统计量，重建事件 |
| H0 定界、备择分布反求参数；教材 Stage A/B、2026 Q10(a) | D1 左尾演示并列“同一 c／两个中心” | T1 右尾反求 μ，写抽样分布、定界和概率方程 | c 固定且使用 σ/√n；移动 c 则回 example，收起答案后做 R1 |
| 用固定规则解释方向；2026 Q10(b) | D1 解释中心变动使线外概率变化 | T1 比较较小 power 对 μ 的影响，不能只说 β 增加 | 必须连接固定拒绝域的概率；R1 左尾方向相反 |
| 相邻整数定双尾、实际 size；教材双尾整数事件及2025 Q5 | D2 用相邻尾概率和明确的每尾预算 | T2 在不对称 Bin(12,0.3) 下确定两端和实际 size | 两个相邻比较均出现；错误端点回 task-b 与 D2，再做 R2 |
| 在指定备择下算完整 β/power；教材 Example 3、2025 Q5 | D2 先写不拒绝事件再换 p | T2 在 p=0.5 下写 1≤X≤6；power 两尾都计入 | 不漏端点或左尾，不在备择下重定界；R2 诊断规则并重算 |
| 延后连接模型、反求和解释；FS2.4 功效与已有均值差知识 | 不新增均值差教学，明确先学 comparing-means 的 conditions | L1 从两个总体恢复均值差方差，再反求一个均值 | 看模型条件、SE、固定事件与具体均值；未学均值比较时延后 |

建议在现有 example 后加入 D1/T1；practice 的两题后加入 D2/T2；retry 中追加 R1/R2；later-review 中保留 later-a 并追加 L1。建议新锚点为 inverse-example、task-inverse、discrete-example、task-discrete、retry-inverse、retry-discrete、later-inverse，由制作时核对重名。不得改名旧锚点或改写其他课来凑导航。

## 4. 演示与任务设计卡：数据和作者核算

以下是制作输入，不是已排版的学生正文。D2 为改编教学示范，其余为自拟题。题目进入课程时保留英文题干；作者答案、诊断和分值记录不能出现在默认可见的独立题附近。

### D1：短演示，左尾反求一个真实均值

自拟数据：独立正态观察 N(μ,16)，n=16，H0:μ=50 对 H1:μ<50，显著性 5%；真实 μ 下 power=β/3。求 μ，解释若该比例所对应的 power 更低，μ 如何变化。

作者链：SE=1；power=1/4、β=3/4；H0 给定 c=50+z0.05≈48.355146373。在真实分布中 Pμ(X̄<c)=1/4，因此 c−μ=z0.25≈−0.674489750，μ≈49.029636123。更低 power 意味着中心向右移、固定左尾概率变小；在所给左尾备择内，μ 增大且仍小于 50。

只展开这一个数值的求法，不写一般 power(μ) 公式。先解释“漏掉／发现是互补事件”，再标准化，不让学生先处理没有解释的分位数等式。

### T1：独立题，右尾反求

**拟用英文题干：** Independent observations have distribution \(N(\mu,36)\), where the second parameter is the variance. A random sample of size 36 is used to test \(H_0:\mu=100\) against \(H_1:\mu>100\) at the 5% significance level. At the true mean, the Type II error probability is twice the power. Find the true mean and show your reasoning. If the same test has a smaller power at another mean in the alternative, is that mean greater or smaller? Explain.

作者核算：

\[
\beta=2\,\mathrm{power},\quad \mathrm{power}=\tfrac13,\quad
\beta=\tfrac23,\quad SE=1,\quad c\approx101.644853627.
\]

\[
P_\mu(\bar X\le c)=\tfrac23,\qquad c-\mu=\Phi^{-1}(\tfrac23)
\approx0.430727299,\qquad \mu\approx101.214126328.
\]

较小 power 对应较小真实均值（仍在 μ>100 的备择内）；固定 c 右侧概率下降。与 D1 不只是数字不同：拒绝尾改变、比例改变，方向也反过来。提供可用的普通正态表／数值工具条件，不提前给完整标准化等式或宣称验证过计算器按键。

### D2：短演示，双尾离散定界

**改编依据：June 2025 FM04 Q5。** 保留 n=20、p0=0.2、5% 双尾和真实 p=0.15，简化为计数情境；新增“每尾至多 2.5%，在预算内尽量扩大两尾”和实际 size 求问。这是改编示范，不标原题官方分值。

边界证据：

\[
\begin{aligned}
P_{0.2}(X\le0)&\approx0.011529215046<0.025,&
P_{0.2}(X\le1)&\approx0.069175290276>0.025,\\
P_{0.2}(X\ge9)&\approx0.009981786321<0.025,&
P_{0.2}(X\ge8)&\approx0.032142663081>0.025.
\end{aligned}
\]

拒绝 X=0 或 X≥9，不拒绝 1≤X≤8；实际 size≈0.021511001367，小于名义 0.05。接着只改概率计算所用的 p，在 Bin(20,0.15) 下算 P(1≤X≤8)≈0.959911560531，power≈0.040088439469。不根据备择方向删去一尾，也不将实际 size 当作 β。

### T2：独立题，不对称两端与完整事件

**拟用英文题干：** A count \(X\) has distribution \(\operatorname{Bin}(12,p)\). Test \(H_0:p=0.3\) against \(H_1:p\ne0.3\) at a nominal 10% significance level. Each rejection tail must have null probability at most 0.05 and must be made as large as this condition permits. Find the non-rejection region, justify both endpoints, and calculate the actual size. At \(p=0.5\), find the Type II error probability and power. State the events you use.

作者相邻边界表：

| H0 下事件 | 精确二项概率 |
| --- | --- |
| X≤0 | 0.013841287201 |
| X≤1 | 0.085025049949 |
| X≥7 | 0.038600843058 |
| X≥6 | 0.117848738862 |

拒绝 X=0 或 X≥7，不拒绝 **1≤X≤6**；实际 size=0.013841287201+0.038600843058=**0.052442130259**，不是 0.10，也不是每尾恰有 0.05。

真实 p=0.5 时：

\[
\beta=P_{0.5}(1\le X\le6)=\frac{2509}{4096}
=0.612548828125,\qquad
\mathrm{power}=\frac{1587}{4096}=0.387451171875.
\]

power 的两个尾分别为 P0.5(X=0)=0.000244140625、P0.5(X≥7)=0.38720703125。独立答案不能只给约 0.387；需保留事件、H0/备择分布归属和端点证据。每尾规则是本题题设，不外推成所有精确双侧检验的唯一约定。

### R1：新重试，统计量表示改变并诊断规则被移动

**拟用英文题干：** A statistic \(D\) has exact distribution \(N(\delta,2)\), where 2 is the variance. A 2.5% test of \(H_0:\delta=0\) against \(H_1:\delta<0\) uses the rule \(D/\sqrt2<-1.959964\). At the true value of \(\delta\), the Type II error probability is three times the power. Find \(\delta\). An analyst instead uses \((D-\delta)/\sqrt2<-1.959964\) as the decision rule when evaluating this power. Does that evaluate the original test? Explain.

作者核算：power=1/4；原事件是 D<c，其中 c≈−2.771807649。正确概率方程为

\[
P_\delta(D<c)=\tfrac14,\qquad
\frac{c-\delta}{\sqrt2}=\Phi^{-1}(\tfrac14),\qquad
\delta\approx-1.817935096.
\]

完全使用题给舍入分位数 −1.959964 时，结果约 −1.817935118，差别来自舍入，不应判错。错误规则相当于 D<δ−1.959964√2，临界线随未知真值移动；在各真值下其拒绝概率都约 0.025，不能得到原检验指定的 0.25。可以用真实参数标准化计算概率，但必须同时变换原 c，不能改写原决定。

这里改变随机对象和规则的表示，并要求恢复错误的计算对象，不是只替换 T1 的数据。若补方向问：原固定左尾下更低 power 意味着 δ 更大；不要求完整函数。

### R2：新重试，诊断不符合每尾预算的端点

**拟用英文题干：** For \(X\sim\operatorname{Bin}(10,p)\), a nominal 10% test of \(H_0:p=0.4\) against \(H_1:p\ne0.4\) requires each rejection tail to have null probability at most 0.05 and to be as large as permitted. A report proposes rejecting for \(X\le1\) or \(X\ge7\), claiming that both tails meet the requirement. Assess the claim, give the corrected rule with the required boundary evidence, and find its actual size and power at \(p=0.6\).

作者核算：

- 左端：P0.4(X≤1)=0.0463574016≤0.05，而 P0.4(X≤2)=0.1672897536>0.05，保留 X≤1。
- 右端：P0.4(X≥7)=0.0547618816>0.05，而 P0.4(X≥8)=0.0122945536≤0.05，修正为 X≥8。
- 正确不拒绝域 2≤X≤7；实际 size=**0.0586519552**。
- 指定 p=0.6 下，β=P0.6(2≤X≤7)=**0.8310325248**；power=P0.6(X≤1)+P0.6(X≥8)=0.0016777216+0.1672897536=**0.1689674752**。

学生审核不正确的规则、修复一个端点，再对修复后的同一事件求概率。提示可提醒分别核查题设条件，不给应改哪一端的答案。题目独立目标是边界诊断和恢复，不是只换数字做一遍 T2。

### L1：延后混合题，学完均值比较后再做

**拟用英文题干：** Independent random samples of sizes 9 and 16 come from independent normal populations \(A\) and \(B\), with known population variances 9 and 16 respectively. A 5% test examines \(H_0:\mu_A=\mu_B\) against \(H_1:\mu_A>\mu_B\). When the true value of \(\mu_B\) is 40, the probability of missing the difference is four times the probability of detecting it. Find the true value of \(\mu_A\), explaining how the test rule is set. If \(\mu_B\) then decreases by 1 while \(\mu_A\), the sampling design and the test remain unchanged, does the power rise or fall? Explain.

作者核算：自行选 D=X̄A−X̄B，δ=μA−μB。由独立性，

\[
D\sim N(\delta,9/9+16/16)=N(\delta,2),\quad
c=z_{0.95}\sqrt2\approx2.326174307.
\]

拒绝 D>c；power=1/5、β=4/5。Pδ(D≤c)=0.8，故

\[
\delta=c-\sqrt2\,\Phi^{-1}(0.8)\approx1.135942144,\qquad
\mu_A\approx41.135942144.
\]

B 的真实均值下降 1 而 A 不变时，δ 增加 1；D 的分布中心右移，固定 c 右侧概率增加，power 上升。H0 的差值仍为 0，不能把 c 也减去 1。此题连接抽样模型、均值差方差、逆向概率和情境解释，没有在题名或题干给出标准误或求解步骤；不增加未知方差 t。

## 5. 制作交接与待验收目标

计算核对已完成：正态分位使用 Python 标准库 NormalDist，并用 erfc 的二分求根复核；二项概率以 Fraction 有理数直接求和，另用相邻质量递推与补集检查。使用 UTF-8 stdout。核算支持上述数据和设计，不代替新学习页的独立内容审查。

制作时需要完成的证据：

1. 两版保持旧 6 题及所有旧锚点；新增题身份、条件、英文题干、方差、尾部和答案一致。保留独立尝试机会，不以来源摘要或默认展开答案泄露方法。
2. D1 到 T1 能从已声明先修读通；D2 区分教材大样本近似与新题精确二项计算，不把名义 α、实际 size、β 或 power 混用。
3. R1/R2 分别修复移动边界与离散每尾条件错误；延后题有均值比较先修和返回位置。接受合理的等价概率写法，不只匹配最后小数。
4. 另行进行独立内容审查及改动对应的构建、现有测试、生成 HTML 与桌面／手机实际阅读，尤其检查长事件、概率表和默认关闭的帮助；本背景研究未做这些操作。
5. 学生试用另行记录首次作答、使用提示、错因、新重试与延后表现。目前无这些数据，不承诺补点必然提高成绩，也不由两题材料推断考频。

本子任务只新增本记录；生成的原页图像仅存指定 scratch。没有改课程、测试、共享 _site，没有构建、提交、推送或发布。**教材、Specification、两套指定 QP/MS 已按上述边界实际读取；设计就绪，待制作验收。**

## 6. 最终实施与验收

**已完成的定向补点：**两版功效页增加两段公开连贯示范、两道独立题、两个对应新重试及一道延后均值差任务。保留原6道英文题干和11个明确锚点，新增后各13道题、20个明确锚点。新题维持总体正态／已知方差／独立抽样或精确二项条件、题给显著性与每尾规则；没有推导完整功效函数。其他FM04课程、CSS、布局均未修改。

**内容复核：**[Standards](review-fm04-power-extension-standards-2026-10-29.md)与[Spec](review-fm04-power-extension-spec-2026-10-29.md)分别独立重建7道新题，核对教材、Specification及两道原题MS，均无可行动发现。最终三份源码哈希与报告一致。研究者、主作者和审查者的读取范围各自记录，不能把其中一人的文本读取冒称所有人逐页视觉复核；主作者另实际目视教材PDF422与2026MS16–17页。

**技术检查：**最后构建47.825秒通过。FM04 content、calculations、sample三项通过；跨任务的Further双语、原重试、曲面专题、阅读布局、Frontend UX通过。FM04 content检查22页、162个呈现任务、194个本地目标；数量不表示教学质量或全科学生掌握。两份课文及本记录Markdownlint、差异空白检查通过。Pagefind生成477页、2语言、61565词；未重新测试完整搜索交互。

**实际阅读：**[最终8视图](audit-assets/power-extension-2026-10-29/browser-results.json)覆盖中英×390／1365px×明暗；公式零错误、整页不横向溢出、帮助默认关闭，提示键盘展开不揭开解答；展开全部解答后复查公式与宽度。4个手机视图实际使用Tab→ArrowRight滚动局部宽公式。30个去重本地链接／锚点（10条路径）无错误，实际完成两次课程入口返回与两次保留锚点的语言切换。

手机目视发现新增概率算式过长，虽可局部滚动但不便连续阅读；于是按计算步骤分行，并显式定义解答中临时使用的功效符号p。数学与题干不变，随后重新构建、运行受影响检查，重做该页8视图并目视连续示范、离散展开答案及桌面。修前结果保留为[历史对比](audit-assets/power-extension-2026-10-29/browser-before-line-wrap.json)；最终证据及保护资源见[最终版本](audit-assets/power-extension-2026-10-29/final-manifest.json)。长组件截图只临时隐藏固定导航／进度条，普通截图保留原界面。

本机[预览](http://127.0.0.1:8844/zh/alevel/a2-further-mathematics/statistics/test-power/#inverse-problems)；同网段[局域网预览](http://172.31.226.8:8844/zh/alevel/a2-further-mathematics/statistics/test-power/#inverse-problems)。当前只提供本地成果，未提交、推送或发布。无学生首答／提示使用／新重试／延后保持数据，也未用实体手机、另一台设备或完整读屏流程验收；不宣称学完已掌握或必然提分。
