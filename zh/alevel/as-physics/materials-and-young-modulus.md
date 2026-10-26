---
title: "材料、弹性能与杨氏模量"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/materials-and-young-modulus/
permalink: /zh/alevel/as-physics/materials-and-young-modulus/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">卸载以后，金属丝会恢复吗？</h2>

力—伸长曲线更陡，可能只是试样更粗，不代表换了材料。你将区分试样几何与材料行为，并为 RP2 选择测量方法。先修：[能量面积](/zh/alevel/as-physics/work-energy-power/)和[不确定度](/zh/alevel/as-physics/measurements-and-uncertainties/)。

<h2 id="material-model">尺寸、形变与材料性质</h2>

密度 $\rho=m/V$ 是每单位体积的质量。拉力使金属丝伸长 $\Delta L$，不要把它当作最终长度。胡克定律 $F=k\Delta L$ 只适用于正比区。弹性限度看卸载后是否恢复，不一定恰好等于正比限度。塑性形变留下永久伸长；脆性材料在很少塑性形变后断裂，延性材料可先发生较大塑性应变。

$$\sigma=\frac{F}{A},\qquad \epsilon=\frac{\Delta L}{L},\qquad E=\frac{\sigma}{\epsilon}=\frac{FL}{A\Delta L}$$

应力单位 Pa，应变无单位。Young modulus 是初始线性区的应力—应变斜率，不能任取屈服后的割线。断裂应力是断裂时的应力。圆截面 $A=\pi d^2/4$，直径不是半径。输入功为加载面积，可恢复能量为卸载面积；只有从零开始的线性可逆加载，才把 $\tfrac12F\Delta L$ 全部储为弹性能。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:materials-worked -->
A uniform wire has original length 2.00 m and diameter 0.40 mm. Within its linear elastic region a 10.0 N load produces extension 0.80 mm. Find stress, strain, Young modulus and stored energy.
<!-- /task:materials-worked -->

先换单位再平方：$A=\pi(0.40\times10^{-3})^2/4=1.26\times10^{-7}\,\mathrm{m^2}$。应力 $7.96\times10^7$ Pa，应变 $0.00080/2.00=4.0\times10^{-4}$，所以 $E=1.99\times10^{11}$ Pa，能量 $\tfrac12(10)(0.00080)=0.0040$ J。伸长远小于原长，支持小应变模型；长度混用 mm 与 m 则不相容。
</div>

<h2 id="curves">解释另一种加载历史</h2>

<div class="lesson-check" markdown="1">
<!-- task:materials-curves -->
A block has mass 54 g and volume 20 cm³. Find density in kg/m³. Separately, a constructed force–extension loading curve joins (0 mm,0 N), (1.0 mm,20 N), (2.0 mm,30 N) by straight segments. Unloading is a straight line to (0.50 mm,0 N). Find work supplied, energy recovered and permanent extension. Explain why the whole supplied work is not recoverable elastic energy. Compare this behaviour with a material that fractures after almost no plastic extension.
<!-- /task:materials-curves -->
<details markdown="1"><summary>提示</summary>
体积换算要立方；加载面积拆成三角形和梯形。
</details>
<details markdown="1"><summary>解答与修复</summary>
密度 $0.054/(20\times10^{-6})=2700\,\mathrm{kg\,m^{-3}}$。输入功 0.010 + 0.025 = 0.035 J；卸载恢复 $\tfrac12(30)(0.0015)=0.0225$ J，另 0.0125 J 不可逆转移，永久伸长 0.50 mm。此试样有塑性行为，脆性试样断裂前塑性形变很少。若把非线性加载当一个三角形，先画两块面积再重试。
</details>
</div>

<h2 id="wire-data">RP2：自己决定怎么测</h2>

牢固夹持长金属丝，下设接物盘；防护断丝伤眼，逐渐加挂砝码，不站在悬挂物下面。用检查过零点的千分尺，在不同位置和方向测多个直径，并测原始标距；平均可减小散布，不能去掉零点偏差。小预载可拉直金属丝，但必须明确基准态，额外载荷与额外伸长对应。控制温度，测模量时避免进入屈服区，卸载检查恢复，并在损坏前停止。

<div class="lesson-check" markdown="1">
<!-- task:materials-data -->
For RP2, wire length is 2.00 m and diameter 0.40 mm. Constructed position readings in mm for loads 0, 5, 10, 15 N are respectively: (1.00,1.00,1.00), (1.39,1.40,1.41), (1.79,1.80,1.81), (2.19,2.20,2.21). Process means and extensions, choose a graph to estimate Young modulus, and explain the diameter measurement and load–unload checks you would perform. For the 10 N calculation only, use bounds ±0.1 N, ±0.002 m in length, ±0.01 mm in diameter, and ±0.01 mm in each position indication. Estimate the percentage modulus uncertainty, distinguishing it from a fitted-gradient uncertainty.
<!-- /task:materials-data -->
<details markdown="1"><summary>提示</summary>
每个加载位置减去初始位置，再判断图线斜率是 F/x 还是 x/F。
</details>
<details markdown="1"><summary>解答与修复</summary>
平均位置 1.00、1.40、1.80、2.20 mm，伸长 0、0.40、0.80、1.20 mm。力对伸长斜率为 $1.25\times10^4\,\mathrm{N\,m^{-1}}$，乘 $L/A$ 得 $E\approx1.99\times10^{11}$ Pa；应力对应变图则直接给 E。直径多位置、多方向测量并校零，再用卸载检查恢复及线性。10 N 时伸长为两个位置之差，界限 ±0.02 mm。保守一阶百分比界限为 $1.0+0.1+2(2.5)+2.5=8.6\%$。这不是整条拟合线的不确定度，后者需另用相容极限直线。若直径只计一次，面积里的平方就是下方重试要修的原因。
</details>
</div>

<h2 id="retry">几何偏差还是随机散布？</h2>

<div class="lesson-check" markdown="1">
<!-- task:materials-retry -->
A new wire has length 1.0 m and area 2.0 × 10⁻⁷ m². Loads of 4, 8 and 12 N produce extensions 0.10, 0.20 and 0.30 mm; all are linear elastic. Infer Young modulus and energy at 12 N. The diameter used to compute area was systematically 5% too large: predict the direction and approximate percentage bias in the inferred modulus. Explain why more load readings do not remove it. State how you would check it.
<!-- /task:materials-retry -->
<details markdown="1"><summary>提示</summary>
由加载趋势求刚度；模量方程中面积位于分母。
</details>
<details markdown="1"><summary>解答与修复</summary>
刚度 $4/(0.10\times10^{-3})=4.0\times10^4$ N/m，故 $E=2.0\times10^{11}$ Pa。储能 0.0018 J。直径偏高 5%，面积一阶约偏高 10%，E 约偏低 10%；精确因子 $1/1.05^2$，约低 9.3%。检查千分尺零点，与独立直径方法或标准比较；增加载荷读数不能去掉共同偏差。以后用 [Unit 1 综合](/zh/alevel/as-physics/unit-1-review/)连接弹簧、运动与能量。
</details>
</div>



<div class="lesson-check" markdown="1">
<!-- task:nonlinear-retry -->
Retry the recovery model: a specimen loads along straight segments through (extension/mm, force/N) = (0,0), (1,8), (2,20), (3,24). It unloads through (3,24), (2,12), (1,0). Calculate loading work, recovered work and energy dissipated. State permanent extension and explain why one loading triangle would be invalid.
<!-- /task:nonlinear-retry -->
<details markdown="1"><summary>提示</summary>
每一段单独求梯形面积，毫米改米。
</details>
<details markdown="1"><summary>解答与修复</summary>
加载功 = 0.004 + 0.014 + 0.022 = 0.040 J；卸载回收 = 0.018 + 0.006 = 0.024 J；耗散 0.016 J，永久伸长 1 mm。斜率分段改变，整体不是过原点直线，$\frac12 F_{\max}x_{\max}$ 不给实际面积。
</details>
</div>

<h3 id="stress-strain-check">读应力—应变记录</h3>

<div class="lesson-check" markdown="1">
<!-- task:stress-strain-check -->
A constructed tensile stress–strain record follows straight segments (strain, stress/MPa): (0,0), (0.0010,200), (0.0020,240), (0.010,300), with fracture at the last point. Find the initial Young modulus and breaking stress. Sketch the graph and compare with a specimen that fractures at strain 0.0012 while still on the same initial straight line. Explain why stress divided by strain at fracture is not generally Young modulus.
<!-- /task:stress-strain-check -->
<details markdown="1"><summary>提示</summary>
MPa 改 Pa，区分初始斜率与断裂终点。
</details>
<details markdown="1"><summary>解答与修复</summary>
E = 200 × 10⁶/0.0010 = 2.0 × 10¹¹ Pa，断裂应力 300 MPa。比较样品在 240 MPa 断裂，几乎无非线性变形，符合脆性行为。首样整体不成正比，断裂点的割线不是初始弹性模量。
</details>
</div>

<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 §3.2.9–3.2.10; RP2. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/work-energy-power/) · [下一课](/zh/alevel/as-physics/atoms-and-particles/) · [课程](/zh/alevel/as-physics/)
