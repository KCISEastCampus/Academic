---
title: "放射性：背景、衰变与判断"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/radiation-and-safety/
permalink: /zh/alevel/as-physics/radiation-and-safety/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">探测器究竟数到了什么？</h2>

探测器同时记录样品与环境辐射。背景包括宇宙射线及岩石、土壤、空气中的天然放射性。应扣除相同条件下移走样品测得的背景计数率，不能把不同时长的计数直接当计数率相减。先修：[核素表示](/zh/alevel/as-physics/atoms-and-particles/)与[测量质量](/zh/alevel/as-physics/measurements-and-uncertainties/)。

<h2 id="decays">核变化留下可检查的收支</h2>

α 发射移走两个质子和两个中子：$\,{}_Z^AX\to{}_{Z-2}^{A-4}Y+{}_2^4\mathrm{He}$。β⁻ 把中子变成质子，发射电子与电子反中微子，$A$ 不变、$Z$ 增一；β⁺ 把质子变成中子，发射正电子与电子中微子，$Z$ 减一。自由中子衰变为：

$$\,{}_0^1n\to{}_1^1p+{}_{-1}^0e+\bar\nu_e$$

β 电子能量的变化及能量、动量收支，促使科学家提出由未观察粒子携带剩余部分。γ 光子来自激发核能量降低，$A$、$Z$ 都不变。除配平电荷与核子数，还要写出中微子；仅配平两个数，不等于物理完整。

<h2 id="half-life">减半的是源，不是背景</h2>

衰变是自发而随机的：不能预测某一个核何时衰变，但大量核有可重复的统计趋势。半衰期是未衰变核数或期望活度减半的时间。在扣除背景的图中检查多次减半，沿横轴测各时间间隔。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:radiation-worked -->
A constructed detector record gives 840, 440 and 240 counts per minute at 0, 4 and 8 minutes. Constant background is 40 counts per minute. Infer the half-life and predict the total rate at 16 minutes, using whole half-lives only.
<!-- /task:radiation-worked -->

每项减 40 得源计数率 800、400、200，每次减半需 4 min。16 min 为四个半衰期，源计数率 $800/2^4=50$，再加回背景，预测总计数率 90/min。AS 此处采用图像与整数个半衰期计算；指数衰变方程留在 A2。
</div>

<h2 id="decay-check">解释发射了什么</h2>

<div class="lesson-check" markdown="1">
<!-- task:decay-check -->
Complete and justify these decays, naming every emitted particle: uranium-238 (Z = 92) to thorium (Z = 90) by alpha decay; carbon-14 (Z = 6) to nitrogen (Z = 7) by beta-minus decay; sodium-22 (Z = 11) to neon (Z = 10) by beta-plus decay; a free neutron by beta-minus decay. Explain why gamma emission changes neither proton number nor nucleon number and why the neutrino was proposed.
<!-- /task:decay-check -->
<details markdown="1"><summary>提示</summary>
追踪 Z 与 A，再判断仅靠它们配平还缺哪些粒子。
</details>
<details markdown="1"><summary>解答与修复</summary>
$\,{}_{92}^{238}\mathrm U\to{}_{90}^{234}\mathrm{Th}+{}_2^4\mathrm{He}$；$\,{}_6^{14}\mathrm C\to{}_7^{14}\mathrm N+{}_{-1}^0e+\bar\nu_e$；$\,{}_{11}^{22}\mathrm{Na}\to{}_{10}^{22}\mathrm{Ne}+{}_{+1}^0e+\nu_e$。自由中子方程见上。γ 发射为同一核退激发；中微子补全 β 衰变能量与动量收支。若 Z 方向错，先检查发射电荷，再重试下方新核。
</details>
</div>

<h2 id="counts-check">距离、吸收与证据</h2>

近似点状且各向同性的 γ 源，在吸收、散射可忽略时，几何扩散给出校正强度正比于 $1/r^2$。距离从有效源位置量到探测敏感区。大源靠近探测器时点源近似失效。重复等时计数可观察散布，延长收集可降低相对计数波动，但不能消除距离零点错误。

<div class="lesson-check" markdown="1">
<!-- task:gamma-counts -->
Constructed total rates at source–detector distances 0.10, 0.20 and 0.40 m are 1040, 290 and 103 counts per minute. Background is 40 counts per minute. Test an inverse-square model using corrected rates. State two assumptions, identify how an incorrect distance zero would affect the test, and propose a measurement plan that can distinguish a trend from counting scatter.
<!-- /task:gamma-counts -->
<details markdown="1"><summary>提示</summary>
比较校正计数率乘距离平方，而不是直接用总计数率。
</details>
<details markdown="1"><summary>解答与修复</summary>
校正率为 1000、250、63/min，乘 $r^2$ 得同一单位下的 10.0、10.0、10.08，考虑不确定度后可与反平方相容。假设包括点源几何、探测效率不变及吸收可忽略。固定距离偏移会产生随距离变化的扭曲，近处尤其明显。测多个距离，重复等时计数，独立测背景并核查源／探测器基准位置；不能只凭三个中心值声称证明，应比较散布与不确定度。若误用原始率，做下方新记录。
</details>
</div>

<h2 id="choice-check">穿透力不等于安全程度</h2>

α 电离强、射程短，可被纸或外层皮肤挡住。β 穿透更远，薄铝可使其衰减；γ 更强，足够厚铅或混凝土可使其显著衰减，但不是保证挡住每个光子。吸收比较可依次观察纸、铝、铅带来的变化，保持几何和背景条件相同。真实源与吸收体操作需要受训监督、缩短时间、增加距离、合适屏蔽与工具；构造数据不授权实际接触放射源。

<div class="lesson-check" markdown="1">
<!-- task:radiation-choice -->
Choose and justify radiation properties for monitoring paper thickness, thicker aluminium foil, and steel where beta radiation is almost fully absorbed. Explain why an alpha source outside the body can be a smaller hazard than the same source taken inside. For technetium-99m diagnostic imaging, explain why detectable escaping gamma radiation and a suitably short half-life are useful, without claiming zero risk.
<!-- /task:radiation-choice -->
<details markdown="1"><summary>提示</summary>
厚度计需要可探测的透射信号，而且厚度变化时信号须改变。
</details>
<details markdown="1"><summary>解答与修复</summary>
β 可用于纸，在合适能量下也可用于较厚铝箔；钢若几乎不透 β，可选 γ。产品完全吸收 α 时，透射变化通常没有可用信息。具体还取决于厚度、能量与探测器。体内 α 电离靠近敏感组织，外部射程短不等于摄入后无害。Tc-99m 的 γ 可逸出供探测，适当短半衰期在允许测量时减少持续时间；风险仍取决于暴露和专业控制。若只选穿透最强的，回看测量目的。
</details>
</div>

<h2 id="retry">换背景，换一个原子核</h2>

<div class="lesson-check" markdown="1">
<!-- task:radiation-retry -->
A different constructed source has total rates 620, 320 and 170 counts per minute at 0, 3 and 6 minutes; background is 20 counts per minute. Find its half-life and total rate at 12 minutes. At distances 0.20 and 0.40 m its separate corrected gamma rates are 240 and 60 per minute. Test the distance law and explain why subtracting the background only once from the whole decay series is wrong. Write the daughter Z and A after one alpha decay of a nucleus with Z = 84, A = 210.
<!-- /task:radiation-retry -->
<details markdown="1"><summary>提示</summary>
逐点校正，数减半次数，再单独检查距离规律。
</details>
<details markdown="1"><summary>解答与修复</summary>
校正率 600、300、150，半衰期 3 min。12 min 时源率 $600/16=37.5$/min，总率 57.5/min。距离加倍，校正 γ 率降至四分之一，在其假设下与反平方相容。每个总率都含背景，所以每个都须扣除。α 子核 Z = 82、A = 206。以后进入 [Unit 1 综合](/zh/alevel/as-physics/unit-1-review/)，混合处理源、能量与证据。
</details>
</div>


<h3 id="graph-half-life">从图中分开背景与减半</h3>

![构造总计数率曲线，时间 0–8 min，纵轴 counts/min；曲线经 (0,660)、(2,340)、(4,180)、(6,100)、(8,60)，背景为 20。](/assets/images/physics-as-decay-graph.svg){: width="780" height="410" }

<div class="lesson-check" markdown="1">
<!-- task:graph-half-life-task -->
Use the constructed total-count-rate graph. Background is 20 counts/min. Read source rates after correction and use at least three successive halving intervals to estimate half-life. Predict total count rate at 10 min using whole half-lives. Explain why halving the plotted total directly gives inconsistent intervals.
<!-- /task:graph-half-life-task -->
<details markdown="1"><summary>提示</summary>
先从每个读数扣 20，再在横轴读连续减半间隔。
</details>
<details markdown="1"><summary>解答与修复</summary>
净值 640、320、160、80、40 counts/min，各次减半均需 2 min。10 min 为五个半衰期，总预测 640/32 + 20 = 40 counts/min。总值含不衰减的背景，不能直接按总值减半；多组间隔可检查一致性，但构造平滑线没有显示实际计数的随机散布。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:beta-retry -->
Retry the emitted-particle accounting: oxygen-15 (Z = 8) undergoes beta-plus decay to nitrogen (Z = 7); tritium, hydrogen-3 (Z = 1), undergoes beta-minus decay to helium (Z = 2). Write complete equations with the appropriate neutrino or antineutrino, and explain the change of nucleon and proton numbers.
<!-- /task:beta-retry -->
<details markdown="1"><summary>提示</summary>
β+ 发正电子和电子中微子，β− 发电子和电子反中微子。
</details>
<details markdown="1"><summary>解答与修复</summary>
$\,{}_8^{15}\mathrm O\to{}_7^{15}\mathrm N+{}_{+1}^0e+\nu_e$；$\,{}_1^3\mathrm H\to{}_2^3\mathrm{He}+{}_{-1}^0e+\bar\nu_e$。A 均不变；β+ 的 Z 减一，β− 的 Z 加一。中微子类型不能只靠平衡 Z、A 猜出，需连到对应过程。
</details>
</div>

<h3 id="absorber-data-check">根据吸收数据辨认成分</h3>

<div class="lesson-check" markdown="1">
<!-- task:absorber-data-check -->
Constructed equal-duration rates are background 20 counts/min; with the source, no absorber gives 820, paper gives 420, thin aluminium gives 120, thick lead gives 35 counts/min. Infer which radiation components are supported and identify one limitation. Retry: another source gives 220 without absorber, 218 with paper, and 22 with aluminium under the same background. What component is supported, and why is 'no alpha at all' stronger than these records establish?
<!-- /task:absorber-data-check -->
<details markdown="1"><summary>提示</summary>
每点扣背景，比较变化并考虑计数不确定度。
</details>
<details markdown="1"><summary>解答与修复</summary>
首组净值 800、400、100、15，按吸收体模型依次减少，支持 α、β、穿透 γ 成分。余量不能证明所有 γ 都被停止，需考虑不确定度、几何、散射和厚度。重试净值 200、198、2 支持 β 为主；没有计数误差时，纸前后差 2 不足以证实 α，低于灵敏度不等于绝对不存在。
</details>
</div>

<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 §3.3.3. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/atoms-and-particles/) · [下一课](/zh/alevel/as-physics/unit-1-review/) · [课程](/zh/alevel/as-physics/)
