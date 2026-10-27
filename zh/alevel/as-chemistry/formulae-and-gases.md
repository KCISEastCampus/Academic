---
title: 化学式与气体证据
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/formulae-and-gases/
permalink: /zh/alevel/as-chemistry/formulae-and-gases/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">称出质量，能推断什么化学式？</h2>

化学式说明原子个数比例，天平测量质量比例。不同元素的原子质量不同，因此这两种比例通常不一样。先把各元素质量换成原子的物质的量，才能推断化学式。气体测量还能对分子质量提供第二种独立约束。

你需要[摩尔质量和粒子比例](/zh/alevel/as-chemistry/amount-and-equations/#mole-bridge)。学完后应能区分经验式与分子式、根据合适数据推断它们，并评价气体计算的假设。本页示范和数据均为教学构造，不是实际样品的测量记录。

<h2 id="composition-model">质量比不是原子个数比</h2>

**经验式（empirical formula）**给出各元素原子的最简整数比；**分子式（molecular formula）**给出一个分子内每种原子的实际个数。$\ce{C2H4}$ 和 $\ce{C3H6}$ 的经验式都是 $\ce{CH2}$，但仅凭它无法决定是哪一种分子。离子固体也有经验式或化学式单位比例，不因此具有分子式。

如果分子化合物只含 C、H、O，三种质量百分数之和是 100%。可以想象取 100 g 样品，这时百分数与各元素克数数值相同。这只是方便选取尺度，不代表实际样品真的有 100 g。分别除以原子的摩尔质量，再把所得 mol 数同时除以最小值。如果得到接近 1:1.5 的比例，应把**每一项**乘 2，得到 2:3；直接把 1.5 四舍五入成 2 会改变组成。

测量数据有精度限制，接近小整数的比例可能与它一致。若离合理简单比例很远，应检查测量误差和“含哪些元素”的假设，不要强行把任何数都凑成最近整数。

<div class="worked-example" markdown="1">
**完整示范——自拟组成数据。**
<!-- task:worked-formula -->
A pure molecular compound contains 40.0% carbon, 6.67% hydrogen and 53.3% oxygen by mass. Its relative molecular mass is 60.0. Use C = 12.0, H = 1.0 and O = 16.0. Determine its empirical and molecular formulae. Does this identify its structure?
<!-- /task:worked-formula -->

取 100 g 为计算基准，用摩尔质量把质量转换成原子数量比例：

| 元素 | 假设质量 / g | 原子物质的量 / mol | 同除以 3.33125 |
| --- | --- | --- | --- |
| C | 40.0 | 40.0/12.0 = 3.3333… | 1.0006… |
| H | 6.67 | 6.67/1.0 = 6.67 | 2.0023… |
| O | 53.3 | 53.3/16.0 = 3.33125 | 1 |

在给定数据的舍入精度内，原子比为 1:2:1，经验式是 $\ce{CH2O}$。该单位的相对质量为 $12.0+2(1.0)+16.0=30.0$，实际分子是它的两倍：

$$k=\frac{M_r\text{ of molecule}}{\text{relative mass of empirical unit}}=\frac{60.0}{30.0}=2$$

每一个下标都乘 $k$，得到分子式 **$\ce{C2H4O2}$**。回算质量百分数：碳 $24/60=40.0\%$、氢 $4/60=6.67\%$、氧 $32/60=53.3\%$。这些证据没有给出原子连接方式，同一分子式可能对应多种结构。如果 $k$ 远离正整数，需要质疑数据或模型。
</div>

<div class="lesson-check" markdown="1">
<h3 id="composition-check">检验一个化学式建议</h3>
<!-- task:composition-check -->
A compound contains only C, H and O. It contains 54.5% C and 9.1% H by mass and has Mr = 88.0. Use C = 12.0, H = 1.0 and O = 16.0. A student proposes C2H4O as its molecular formula. Determine the empirical formula, test the proposal against both pieces of evidence, and give the molecular formula consistent with the data.
<!-- /task:composition-check -->
<details markdown="1"><summary>提示</summary>
先找缺失的百分数，再区分“组成比例”和“一个分子有多大”。
</details>
<details markdown="1"><summary>解答与检查</summary>
氧为 36.4%。取 100 g，原子物质的量约为 4.5417、9.1、2.275 mol，比例约 **2:4:1**。$\ce{C2H4O}$ 是经验式，相对质量为 44.0；它符合百分组成，却不符合给定分子质量。$k=88.0/44.0=2$，分子式为 **$\ce{C4H8O2}$**。如果停在最简比，回看[分子倍数](#composition-model)，再做[化学式重试](#retry-formula)。
</details>
</div>

<h2 id="gas-model">气体体积是有条件的证据</h2>

同一气体样品在不同温度、压强下占据不同体积，不能把“每摩尔固定多少体积”当普遍规律。理想气体近似给出：

$$pV=nRT$$

取 $R=8.31\,\mathrm{J\,mol^{-1}\,K^{-1}}$ 时，使用以 Pa 表示的**绝对压强**、以 $\mathrm{m^3}$ 表示的体积和以 K 表示的绝对温度。换算 $T/\mathrm K=\theta/{}^\circ\mathrm C+273.15$，或遵从题目指定近似。$1\,\mathrm{kPa}=1000\,\mathrm{Pa}$、$1\,\mathrm{dm^3}=10^{-3}\,\mathrm{m^3}$、$1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$。从 dm³ 与从 cm³ 换到 m³，倍率不同。

这个模型在状态方程中忽略粒子自身体积和相互吸引。在压强较低、远离凝结的条件下常较适用；接近液化或密度很高时可靠性下降。这是模型局限，与读错刻度是两种问题。

先明确气体样品是什么，再变形：

$$n=\frac{pV}{RT},\qquad M=\frac{mRT}{pV}$$

第二式来自代入 $n=m/M$，不是另一条独立定律。若 $m$ 用克，$M$ 的单位就是 $\mathrm{g\,mol^{-1}}$。要核对称量的样品是否全部成为收集到的气体、气体是否纯净、$p,V,T$ 是否描述同一个收集样品。装置失去的质量不自动等于成功收集的气体质量。若用排水法集气，测得总压强包含水蒸气；题目提供或要求修正时应使用目标气体自己的压强。

<div class="worked-example" markdown="1">
**完整示范——自拟干燥气体数据。**
<!-- task:worked-gas -->
A pure gas has mass 0.440 g and volume 249 cm3 at 100 kPa and 300 K. Treat it as ideal and dry. Use R = 8.31 J mol−1 K−1. Estimate its molar mass and assess whether the data are consistent with CO2 (M = 44.0 g mol−1).
<!-- /task:worked-gas -->

这些数据描述同一样品。换算 $p=100000$ Pa、$V=249\times10^{-6}$ $\mathrm{m^3}$，温度已是 K。先计算 mol 数，再换算质量：

$$n=\frac{100000(249\times10^{-6})}{8.31(300)}=0.00998797\ldots\,\mathrm{mol}$$

$$M=\frac{0.440}{0.00998797\ldots}=44.1\,\mathrm{g\,mol^{-1}}$$

在给定精度下接近 44.0，因此与二氧化碳**一致（consistent with）**。但摩尔质量不能单独鉴定气体，其他物质或混合物也可能产生接近的表观值。反算检查：0.440 g 二氧化碳为 0.0100 mol，在此条件下应占 249.3 cm³，与给定体积接近。
</div>

<div class="lesson-check" markdown="1">
<h3 id="gas-check">连接两种证据</h3>
<!-- task:gas-check -->
A pure molecular gas has empirical formula CH2 and mass 0.420 g. It occupies 249 cm3 at 100 kPa and 300 K. Treat it as ideal and dry. Use R = 8.31 J mol−1 K−1, C = 12.0 and H = 1.0. Infer its molecular formula. Does doubling this sample's volume at the same pressure and temperature necessarily make each molecule twice as heavy? Explain what must change if the sample remains the same pure substance.
<!-- /task:gas-check -->
<details markdown="1"><summary>提示</summary>
先由气体证据求每摩尔质量。样品总量变大，与单个分子变大是两回事。
</details>
<details markdown="1"><summary>解答与检查</summary>
$n=0.00998797\ldots$ mol，$M=0.420/n=42.1$ $\mathrm{g\,mol^{-1}}$。经验单位相对质量为 14.0，$k\approx3$，分子式 **$\ce{C3H6}$**；不能据此确定具体结构。相同 $p,T$ 下 $V\propto n$：同种纯物质体积加倍，需要 mol 数与质量都加倍到约 0.840 g，每个分子不变。若质量也不变却在相同 $p,T$ 下体积加倍，就与此模型矛盾。如果因为样品大就把分子下标加倍，回看[分子大小](#composition-model)，再做[气体重试](#retry-gas)。
</details>
</div>

<h2 id="retry-formula">根据反馈重新建立比例</h2>

关闭前面解答再做。以下两题和数据均为自拟。

<div class="lesson-check" markdown="1">
<!-- task:retry-formula -->
A molecular compound contains 28.0 g of nitrogen and 48.0 g of oxygen in a sample. Its Mr is 76.0. Use N = 14.0 and O = 16.0. Determine the empirical formula and the molecular formula. A student rounds the ratio 1:1.5 to 1:2. Explain precisely why this fails, and check your own formula using the original mass ratio.
<!-- /task:retry-formula -->
<details markdown="1"><summary>提示</summary>
把质量换成原子的 mol 数。整数下标必须保留原比例，不能每项单独四舍五入。
</details>
<details markdown="1"><summary>解答与检查</summary>
氮原子 2.00 mol、氧原子 3.00 mol，经验式 **$\ce{N2O3}$**，单位相对质量 76.0。$k=76.0/76.0=1$，分子式也为 **$\ce{N2O3}$**。1:1.5 应整体乘 2；四舍五入成 1:2 会预测质量比 14:32，与 28:48 不符。我们的经验式恰好预测 28:48。
</details>
</div>

<h2 id="retry-gas">检查单位与收集模型</h2>

<div class="lesson-check" markdown="1">
<!-- task:retry-gas -->
A 0.580 g sample becomes a pure dry gas occupying 250 cm3 at 100 kPa and 300 K. Assume ideal behaviour and no loss. Use R = 8.31 J mol−1 K−1. Estimate its molar mass. If the true volume is instead 500 cm3 at the same pressure, temperature and mass, estimate the molar mass implied by those revised data. Separately, if some gas escaped before collection but the full 0.580 g were still used in the calculation, would the estimated molar mass be too high or too low?
<!-- /task:retry-gas -->
<details markdown="1"><summary>提示</summary>
用 $M=mRT/(pV)$ 一次追踪一个改变，区分“修订原始数据”和“真实收集损失”。
</details>
<details markdown="1"><summary>解答与检查</summary>
250 cm³ 对应 $n=0.0100281\ldots$ mol，**$M=57.8$ $\mathrm{g\,mol^{-1}}$**；把体积修订为 500 cm³ 后，得到 **28.9 $\mathrm{g\,mol^{-1}}$**。这是两套备选数据解释，不是同一物质固定质量、相同 $p,T$ 下把体积加倍。若发生逸散，收集体积及算出的 $n$ 相对所用质量偏小，$m/n$ 就偏高。反复读数不能修复持续漏气。若方向判断错，先分别写出分子与分母的改变再重试。
</details>
</div>

下一步追踪溶解样品的[配制与滴定](/zh/alevel/as-chemistry/solutions-and-titration/)，稍后在[综合练习](/zh/alevel/as-chemistry/quantitative-review/)中自行判断什么证据支持化学式或纯度结论。[返回课程](/zh/alevel/as-chemistry/)。

<h2 id="sources">范围与阅读来源</h2>

OxfordAQA 9620 AS 3.1.2.3–4；[现行大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，印刷页 13–14。教材：Lister / Renshaw，*International A Level Chemistry*（OUP，2016），§§2.3–2.4，印刷页 36–43。题目、数据与检查点均为自拟。理想化数据计算不代表真实气体鉴定或仪器试验。
