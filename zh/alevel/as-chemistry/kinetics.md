---
title: 反应速率与碰撞理论
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/kinetics/
permalink: /zh/alevel/as-chemistry/kinetics/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">为什么放热反应仍可能很慢？</h2>

燃料点火前可长时间不变，另一些反应却在室温迅速发生。焓变描述起终点之差，**rate（速率）**问的是粒子多快能沿成功路线反应。

先修是[物质的量与浓度](/zh/alevel/as-chemistry/solutions-and-titration/)、基本斜率及[焓变符号](/zh/alevel/as-chemistry/energetics-and-calorimetry/)。本页对应 AS 3.1.6.1–5：碰撞理论、Maxwell–Boltzmann 分布、温度、浓度、气体压强与催化剂。全部任务、数值与示意曲线均为**自拟／constructed**，不是实测或官方题，不预设速率级数或 Arrhenius 计算。

<h2 id="reading-rate">把快慢与最终反应量分开读</h2>

速率描述单位时间内反应物或产物浓度的改变，常用 $\mathrm{mol\,dm^{-3}\,s^{-1}}$。反应物浓度的斜率为负，但其**消耗速率**通常报正的大小；产物生成的斜率为正。气体在相同收集温度、压强下，体积／时间可作为生成速率的实验指标，单位如 $\mathrm{cm^3\,s^{-1}}$，不自动等于浓度速率。

平均速率取**两时刻连线的斜率**，某时刻瞬时速率取切线斜率。即使温度不变，反应物逐渐消耗也会使曲线变平。平台反映给定收集条件下的最终量，不是初速；应比较初始斜率，而非学生碰巧停止测量的时间。

<div class="worked-example" markdown="1">
<h3 id="worked-rate">完整示范：斜率测量的究竟是什么</h3>
构造记录：0 至 20.0 s，反应物浓度从 0.100 降至 0.060 $\mathrm{mol\,dm^{-3}}$，平均消耗速率 $(0.100-0.060)/20.0=\mathbf{0.00200\,mol\,dm^{-3}\,s^{-1}}$。这个区间不决定精确初速，后者需足够细致早期数据的切线。同时间气体体积从 0 增至 30.0 cm³，则平均**体积生成速率**为 1.50 $\mathrm{cm^3\,s^{-1}}$。单位帮助辨认实际观察量。
</div>

<div class="lesson-check" markdown="1">
<h3 id="rate-check">解释两份时间记录</h3>
<!-- task:rate-check -->
Constructed complete gas-production experiments A and B start with identical reactant amounts. Gas is collected without leakage at the same temperature and pressure. At times 0, 20, 40, 60, 120 s, volumes in cm3 are A: 0, 20, 34, 44, 60; B: 0, 34, 48, 55, 60. Both have finished by 120 s. Plot both records, compare their average volume-production rates over 0–20 s and 20–40 s, and distinguish evidence about speed from evidence about total amount. Explain why neither first chord is necessarily the exact initial rate.
<!-- /task:rate-check -->
<details markdown="1"><summary>Hint／提示</summary>
弦对应区间，平台对应反应量，先说明量和单位再计算。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
A 两区间为 1.00、0.70 $\mathrm{cm^3\,s^{-1}}$，B 为 1.70、0.70。B 早期更快，但相同收集条件下平台均 60 cm³，说明最终气体量相同。作图为平滑上升并趋平于 60 的曲线。20 s 弦平均了变化的斜率，不必等于零时刻切线。早期更快不等于最终更多。若混淆高度和斜率，回看[读取速率](#reading-rate)，再[改变收集条件](#retry-rate)。
</details>
</div>

<h2 id="collision-model">碰撞还需要足够能量与合适取向</h2>

粒子之间反应须先碰撞。**Activation energy（活化能）** $E_a$ 是反应发生所需最低能量；碰撞模型中，碰撞粒子须至少具备这部分能量。取向也重要：能反应的部位须以可形成新排列的方式接触。多数碰撞因能量不足和／或取向不合适而失败。

反应历程图上，正向 $E_a$ 从**反应物水平向上量到路线能垒**，不是从产物量，也不是两端水平之差。$\Delta H$ 才是起终点差。很负的 $\Delta H$ 可以与高能垒、慢反应并存；断键吸能，净放热还计入成新键的放能。

<div class="lesson-check" markdown="1">
<h3 id="collision-check">解释碰撞为何不成功</h3>
<!-- task:collision-check -->
A constructed reaction profile has reactants at 0, products at −60 and a transition barrier at +90 kJ mol−1 on the same enthalpy scale. Identify the forward activation energy and reaction enthalpy. Define activation energy and explain why a sample can react slowly despite its negative ΔH, including why not every sufficiently energetic encounter necessarily reacts.
<!-- /task:collision-check -->
<details markdown="1"><summary>Hint／提示</summary>
把能垒与反应物的比较，与起终点比较分开。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
正向 $E_a=\mathbf{90\,kJ\,mol^{-1}}$，$\Delta H=\mathbf{-60\,kJ\,mol^{-1}}$。活化能是反应发生所需最低能量，此温度下可能只有少量碰撞达到能垒，即使能量够也可能取向不适。负 $\Delta H$ 不是能垒或速率的指标。若正向用了 150，就是从产物量起；回看[历程模型](#collision-model)，再[评价慢放热反应](#retry-collision)。
</details>
</div>

<h2 id="distribution">表示分子能量的分布</h2>

同温气体并非所有分子具有相同能量。**Maxwell–Boltzmann 能量分布**从原点开始，上升到最概然能量的峰，再下降并带有较长高能尾；尾部趋近横轴，不在某个有限能量突然结束。平均能量不等于峰的位置。

本图纵轴为**单位能量的概率密度**，某能量区间的面积代表分子比例，总面积为 1，不是某个精确能量点的概率。若纵轴改成单位能量的分子数密度，总面积才代表粒子总数。必须说清约定，不能因峰高就声称粒子总数更多。

![两温度的归一化 Maxwell–Boltzmann 能量分布，以及同温曲线上较低与较高活化门槛，曲线和门槛用文字及不同虚实线标识。](/assets/img/chemistry-as-kinetics-distribution.svg)

<h2 id="temperature">升温改变分布，不改变同一路线的能垒</h2>

升温后曲线更宽，峰更低、更靠右，**同一个** $E_a$ 右侧面积增大，有更多分子具备有效碰撞所需能量。小幅升温可使高能尾比例明显增大，速率显著增大。运动加快也提高碰撞频率，但“现在所有分子都达到活化能”不成立。

比较时固定样品数和纵轴约定。较低峰的面积分散到更宽能量范围，并非总量减少。固定路线下，单纯加热不降低 $E_a$；换反应路线与改能量分布是不同事情。

<div class="lesson-check" markdown="1">
<h3 id="temperature-check">自己画出并解释温度比较</h3>
<!-- task:temperature-check -->
For a fixed number of gas molecules, sketch Maxwell–Boltzmann energy distributions at T1 and a slightly higher T2 on common axes with probability density per unit energy vertically. Label both curves, one unchanged Ea and the regions representing molecules energetic enough to react. Explain the area and peak changes and why the rate can increase markedly without Ea falling.
<!-- /task:temperature-check -->
<details markdown="1"><summary>Hint／提示</summary>
用门槛右侧面积代表比例，不是门槛处曲线高度。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
横轴分子能量，纵轴概率密度，两条曲线从零出发，总面积均 1；T2 更宽、峰更低且右移。$E_a$ 位置不变，分别标门槛右侧尾部，T2 面积更大。单位时间足够能量的碰撞增加，加上碰撞频率适度增加，解释反应加快；粒子总数和路线能垒都不下降。若移动了 $E_a$ 或改变总面积，回看[分布](#distribution)，再[给样品降温](#retry-temperature)。
</details>
</div>

<h2 id="concentration-pressure">不加热也可以增加碰撞</h2>

溶液中某反应物浓度增大，单位体积粒子更多，与另一反应物碰撞更频繁，前提是其他条件相同。同温下这不提高 $E_a$ 以上的比例。本页只作定性判断，浓度加倍不普遍证明速率恰好加倍。

同一气体样品**恒温压缩**使体积变小、反应物数密度增大、碰撞频率提高；归一化能量分布和 $E_a$ 不变。定容定温加入惰性气体，只使**总压强**上升而不改变反应物浓度，不能等同于压缩反应气体。

定体积改变浓度还可能改变**可反应总量**。过氧化氢溶液体积固定而浓度加倍，摩尔数加倍，完全分解后最终氧气可能加倍；但固定限制量碳酸盐与原本过量的酸反应，酸浓度改变可使反应更快而最终 CO2 不变。预测平台前，先说明限制试剂。

<div class="lesson-check" markdown="1">
<h3 id="conditions-check">预测两个不同实验</h3>
<!-- task:conditions-check -->
Compare these constructed experiments at unchanged temperature. I: a fixed 0.0100 mol CaCO3 sample reacts completely with acid; both the original and more concentrated acid are in excess at the same volume. II: a fixed volume of H2O2 solution is completely decomposed, and its concentration is doubled; no other reactant limits it. Predict changes in early rate and final gas amount, explaining the collision and amount arguments separately. Also explain what is and is not changed when a reacting gas mixture is compressed to half its volume at constant temperature.
<!-- /task:conditions-check -->
<details markdown="1"><summary>Hint／提示</summary>
把单位体积粒子数与实际反应总摩尔数分开记账。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
I：酸粒子与碳酸盐接触碰撞更频繁，早期通常更快；限制量 CaCO3 固定，最终仍是 0.0100 mol CO2。II：过氧化氢浓度提高通常使早期更快，摩尔数也加倍，按 $\ce{2H2O2 -> 2H2O + O2}$ 完全分解后氧气量加倍；比较体积须同收集条件。压缩使气体反应物数密度加倍、碰撞更频繁，但同温能量足够比例不变，$E_a$ 不降低，缺少证据时不能断定速率精确倍数。若把快慢与平台机械绑定，回看[反应量区别](#concentration-pressure)，再[检查惰性气体说法](#retry-conditions)。
</details>
</div>

<h2 id="catalysts">改变路线，保留同温能量分布</h2>

**Catalyst（催化剂）**提高反应速率，反应前后化学组成和量没有净改变。它可以参与中间步骤，但总体再生；其作用是提供活化能较低的另一条路线。

同温时 Maxwell–Boltzmann 分布不变，应将较低门槛 $E_{a,\mathrm{cat}}$ 标在原 $E_a$ 左侧。两门槛间额外面积表示原路线能量不足、但新路线足够的粒子。相同反应物与产物状态的 $\Delta H$ 不变；催化剂不按定义提供反应能量或加热样品。

可逆反应中，催化剂加快达到平衡，不改同温平衡组成。但它可以增加**较早固定时刻**已经收集的产物，因为那时已反应得更多；不代表最终平衡量或完全转化总量改变。

<div class="lesson-check" markdown="1">
<h3 id="catalyst-check">画清催化剂改变什么</h3>
<!-- task:catalyst-check -->
At a fixed temperature, a constructed reaction has an uncatalysed Ea of 80 kJ mol−1, a catalysed Ea of 45 kJ mol−1 and ΔH = −30 kJ mol−1. Sketch one Maxwell–Boltzmann distribution with both thresholds and identify the additional energetic fraction. Sketch both reaction profiles on common reactant/product levels, and explain the catalyst definition, whether it can participate in steps, and whether it changes ΔH or final equilibrium composition.
<!-- /task:catalyst-check -->
<details markdown="1"><summary>Hint／提示</summary>
一条能量分布、两条路线，共用初末态。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
MB 曲线不变，45 在 80 左侧，两门槛间面积是新获得能量资格的比例。两历程共用反应物水平，产物均低 30，能垒分别比反应物高 80、45。催化剂提供较低能垒路线，可参与但总体再生，组成和量无净变化；$\Delta H$ 与定温平衡位置都不变。若降低了产物水平或画成更热分布，回看[催化](#catalysts)，再[比较早期与最终产量](#retry-catalyst)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="report-check">为解释选择证据</h3>
<!-- task:report-check -->
A student says a catalyst makes more product because it makes molecules hotter, while increasing gas pressure always raises the energetic fraction. Design a controlled comparison that distinguishes faster approach from a different final amount, identify the graphs you would request, and correct both microscopic explanations. Include how temperature, starting amounts, gas collection conditions and leakage would be controlled, and one relevant practical risk control.
<!-- /task:report-check -->
<details markdown="1"><summary>Hint／提示</summary>
早期停止不能证明最终平台；分别问每项操作改变了什么。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
保持相同反应物量／浓度与装置，测量并控制温度，仅改变有无催化剂；记录产气或浓度随时间，直到稳定且有化学依据的终点，核查漏气并统一收集温压。分别比斜率和最终量；可逆体系须同条件比较平衡。催化改变路线能垒而非加热分子；恒温压缩改数密度而非高能比例。除了实测时序，还要求标好坐标的 MB／历程图。戴护目镜，使用批准的可排气装置，不随意密封产气反应。重复估计离散程度，不证明不漏气。以后关闭帮助重述，再学[化学平衡](/zh/alevel/as-chemistry/equilibrium/)。
</details>
</div>

<h2 id="retry">换条件重试</h2>

关闭前面的帮助，按错误选重试，先画图或解释再展开答案。

<div class="lesson-check" markdown="1">
<h3 id="retry-rate">改变收集温度</h3>
<!-- task:retry-rate -->
Two complete reactions produce equal moles of gas, but one sample is collected at a higher temperature at the same pressure. A student takes its larger final gas volume as proof that the reaction formed more product and had a higher initial rate. Evaluate both claims and state how to make the comparison valid.
<!-- /task:retry-rate -->
<details markdown="1"><summary>Hint／提示</summary>
体积依赖收集条件，速率需随时间的斜率。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
同压下相同气体摩尔数在较高收集温度占更大体积，所以不证明生成量更多；最终体积也不能决定初速。应统一收集温压或用 $n=pV/(RT)$ 比摩尔数，再在受控反应条件下比较早期摩尔生成斜率。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-collision">评价储存中的燃料</h3>
<!-- task:retry-collision -->
A fuel oxidation is strongly exothermic but slow at room temperature. Explain why this does not contradict collision theory, define the activation-energy condition, and explain why breaking a fuel bond is not itself the source of released heat.
<!-- /task:retry-collision -->
<details markdown="1"><summary>Hint／提示</summary>
起终点差和能垒是历程图的不同部分。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
高活化能使室温下少量碰撞才满足最低能量要求，取向也可限制成功；终态比初态低不意味着没有能垒。断键需能量，放热反应是产物成键释放超过断键吸收，不是燃料键断裂本身放热。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-temperature">改画降温</h3>
<!-- task:retry-temperature -->
A fixed gas sample cools from T2 to T1 without changing the reaction pathway. Draw both energy distributions with probability density vertically, compare total area and high-energy fraction, and evaluate the statement “a taller peak means more molecules and a lower Ea”.
<!-- /task:retry-temperature -->
<details markdown="1"><summary>Hint／提示</summary>
归一化与门槛固定，读尾部而不只看峰。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
低温曲线更窄、峰更高更靠左，两总面积仍为 1。同一 $E_a$ 右侧的低温尾部比例更小，反应通常变慢。峰高反映能量区间的密度，不是粒子总数，也不决定路线门槛。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-conditions">用两种办法提高总压强</h3>
<!-- task:retry-conditions -->
At fixed temperature compare I: compress the same reacting gas mixture to half its volume; II: add inert gas at unchanged volume. Predict the immediate change in reactant concentrations, collision frequency between reacting particles and the normalised energy distribution. Is a pressure reading alone enough to predict the rate change?
<!-- /task:retry-conditions -->
<details markdown="1"><summary>Hint／提示</summary>
追踪单位体积反应粒子数，不是混合物全部粒子总数。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
I 使每种反应物浓度加倍，反应粒子间碰撞更频繁；II 在理想化模型下不改变这些浓度及其相互碰撞频率。两者同温归一化能量分布和 $E_a$ 均不变。总压强读数不说明操作是哪一种，不能单独作普遍速率预测。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-catalyst">区分早期与最终产量</h3>
<!-- task:retry-catalyst -->
Two closed reversible reactions start with the same amounts at the same temperature. The catalysed sample contains more product after 30 s, but both eventually reach the same composition. Explain these observations using rate and equilibrium, draw one MB curve with two Ea thresholds, and explain why neither observation requires a change in ΔH.
<!-- /task:retry-catalyst -->
<details markdown="1"><summary>Hint／提示</summary>
早期产物更多可仅表示更快趋向相同终点。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
催化路线门槛较低，达到平衡更快，30 s 时产物可更多；正逆方向都被催化，同温最终组成不变。画一条曲线和较低催化门槛，右侧可反应比例增大；初末焓水平及 $\Delta H$ 保持不变。
</details>
</div>

<h2 id="sources">范围与后续使用</h2>

OxfordAQA 9620 [大纲5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，pp.18–19，3.1.6.1–5；Lister / Renshaw（2016），pp.105–113。教材补充当前 AS，旧边注编号不决定本页映射。数据／图为构造，不赋官方分值。实验比较只作准备，不证明完成 A2 的 RP8。继续[化学平衡](/zh/alevel/as-chemistry/equilibrium/)，以后关闭帮助重做综合报告任务。
