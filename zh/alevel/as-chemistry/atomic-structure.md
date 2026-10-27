---
title: 原子结构与证据
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/atomic-structure/
permalink: /zh/alevel/as-chemistry/atomic-structure/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">怎样用测量推断一个原子？</h2>

原子模型要解释观察，不能只是好记的图。不可分原子模型不能解释电子或放射性变化；散射证据支持小而带正电的原子核及大部分为空间的原子，电子占据核外量子态。电子层图表示能量与数量，不是“小行星绕核运动”的照片。新证据约束旧解释，模型因此改变。

先修是电荷、简单化学式及[摩尔与相对质量](/zh/alevel/as-chemistry/amount-and-equations/)。本页从粒子数、同位素谱和飞行时间，连接到电子排布与离子化能证据。题目与数值均自拟；构造测量不冒称真实观察。

<h2 id="particles">原子核与电子分别计数</h2>

质子的相对电荷 +1、相对质量约 1；中子电荷 0、相对质量约 1；电子电荷 −1、相对质量约 1/1836。质量几乎都在原子核，电子分布却决定原子大部分空间尺度。质子数 $Z$ 决定元素；质量数 $A$ 是质子与中子总数，是某个同位素的整数，不是加权平均。

对 $\ce{^{A}_{Z}X^{q+}}$，质子数 $Z$、中子数 $A-Z$、电子数 $Z-q$。负电荷表示多出电子，−1 离子有 $Z+1$ 个电子。形成离子改变电子，不改变元素。**同位素（isotopes）**质子数相同、中子数不同；中性原子的电子排布通常相同，化学性质很相近，但质量和一些物理行为不同。

例如 $\ce{^{24}_{12}Mg^{2+}}$ 有 12 个质子、12 个中子、10 个电子。用 $12-10=+2$ 复查总电荷。

<div class="lesson-check" markdown="1">
<h3 id="particle-check">辨认改变了什么</h3>
<!-- task:particle-check -->
A report says that the electron has charge +1 and relative mass 1, and that rare large-angle deflections of positive probes support positive charge spread uniformly through the atom. Correct the particle values and assess the scattering claim. For 26Mg2+ (Z = 12) and 37Cl− (Z = 17), state proton, neutron and electron numbers. Compare 26Mg2+ with neutral 24Mg: identify the isotope difference and the ionisation difference. A learner says that Mg2+ has two fewer protons than Mg. Explain the error.
<!-- /task:particle-check -->
<details markdown="1"><summary>提示</summary>
先用核的数字，再调整电子数；另算总电荷复查。
</details>
<details markdown="1"><summary>解答与检查</summary>
电子电荷−1、相对质量约1/1836；中子0、约1，质子+1、约1。大部分穿过而少数大角度偏转支持集中的小正电核，不支持正电荷均匀散布。26Mg2+：12 p、14 n、10 e；37Cl−：17 p、20 n、18 e。Mg 的同位素相差两个中子，2+ 离子相对其中性原子少两个电子。减少质子会改变元素，不是形成镁离子。若把 A 当电子数，回看[核与电荷](#particles)，再做后面的重试。
</details>
</div>

<h2 id="isotope-evidence">谱图区分质量，平均值不必是谱峰</h2>

简单元素质谱以检测信号对 **质荷比（mass-to-charge ratio，$m/z$）**作图。本段各峰代表单原子、单正电荷离子，因此 $m/z$ 的数值对应相对同位素质量。不能不加权就平均横坐标。同一同位素带 2+ 时，$m/z$ 是带 1+ 时的一半；先明确电荷，再解释谱峰。

<div class="worked-example" markdown="1">
**自拟示范，构造同位素记录。**相对同位素质量为 10.0、11.0，信号比例为 20、80；假设每个离子的检测响应相同。100 个原子的总相对质量为 $20(10.0)+80(11.0)=1080$，故 $A_r=10.80$。不需要存在质量 10.80 的原子，也不预期在那里出现谱峰。若信号写成 2、8，分母是信号总和 10，不能仍除以 100。
</div>

<div role="region" aria-label="已解示范质谱，可左右滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![构造元素质谱：横轴 m/z，纵轴相对信号，峰位10与11的信号为20与80。此图对应已解示范。](/assets/img/chemistry-as-isotope-spectrum.svg){: width="520" height="280" style="min-width:440px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="spectrum-check">解释一份新记录</h3>
<!-- task:spectrum-check -->
Read the peak positions and responses from the constructed spectrum below; all ions are mononuclear 1+. Reference isotope patterns, rounded for this task, are Mg: masses 24/25/26 with responses 79/10/11; Ne: 20/22 with 90/10; Cl: 35/37 with 75/25. Identify which candidate matches, justify the comparison, and calculate Ar. Explain why a missing peak at that mean does not refute the result. State one necessary assumption about detector response. How would the position of the 24.0 isotope change if it formed a 2+ ion?
<!-- /task:spectrum-check -->
<div role="region" aria-label="新质谱，可左右滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![Constructed record: mononuclear 1+ peaks at m/z 24, 25, 26 with relative responses 79, 10, 11.](/assets/img/chemistry-as-isotope-check.svg){: width="520" height="280" style="min-width:440px" }

</div>

<details markdown="1"><summary>提示</summary>
按信号加权，区分同位素质量与 m/z。
</details>
<details markdown="1"><summary>解答与检查</summary>
峰位与相对信号符合Mg，而非Ne或Cl。$A_r=(24.0\times79+25.0\times10+26.0\times11)/100=24.32$。均值描述混合物，不是额外同位素；信号须能代表相对粒子数，或已校正响应差异。2+ 离子出现在 $m/z=12.0$，不是变成质量 12 的原子。若得 25.0，说明忽略了丰度：回看[加权](#isotope-evidence)，再做新记录重试。
</details>
</div>

<h2 id="tof">区分飞行时间仪器中的各步骤</h2>

电离产生气态带电粒子。电子轰击会移走一个电子；电喷雾可形成质子化离子，因此质子化分子峰不自动等于中性分子质量。对本题规定的同电荷离子，加速阶段使比较对象获得相同动能，然后在真空中的无电场漂移管内飞行；真空减少会改变飞行的碰撞。正离子到检测器得到电子，形成电流；到达时间和信号量用于分析质荷比与相对丰度。

相同动能 $E_k$、相同漂移距离 $L$ 时：

$$E_k=\tfrac12mv^2,\qquad t=\frac{L}{v},\qquad t\propto\sqrt{m}$$

这里 $m$ 为离子质量、$v$ 为速度。先解出 $v=\sqrt{2E_k/m}$，再代入时间式：$t=L\sqrt{m/(2E_k)}$。比较时相同 $L$ 和 $E_k$ 的因子相消，故时间比为质量比的平方根。

轻离子更快；相同动能**不等于**相同速度。比较要保持路径和动能一致，并考虑电荷，不能理解成中性原子自然掉进管子。分子质量测量连接到[有机分析](/zh/alevel/as-chemistry/organic-analysis/)；分子碎裂与元素同位素计算是不同问题。

<div class="lesson-check" markdown="1">
<h3 id="tof-check">检验仪器解释</h3>
<!-- task:tof-check -->
Ions A and B have the same positive charge, travel the same drift distance and have equal kinetic energy. Their masses are in the ratio 20:40. Find tB/tA. Put ionisation, acceleration, drift and detection in a defensible order, and explain the vacuum and how a positive ion produces a detector current. A report assumes equal ion speed and uses flight time alone as a measure of abundance. Correct both claims.
<!-- /task:tof-check -->
<details markdown="1"><summary>提示</summary>
用动能比较速度，区分何时到达与信号大小。
</details>
<details markdown="1"><summary>解答与检查</summary>
$t_B/t_A=\sqrt{40/20}=\sqrt2\approx1.41$。电离→加速→漂移→检测，再分析时间和信号。真空减少碰撞；正离子在检测器获电子，外电路补充电子形成电流；不同质量、相同动能意味着速度不同。时间定位质荷比，信号量才与检测到的离子数联系，且有响应假设。若得到时间比 2，重新由动能式推导平方根关系。
</details>
</div>

<h3 id="molecular-mass">分子离子峰先确认身份</h3>

完整分子离子M+带+1电荷、忽略电子质量时，m/z数值给Mr：明确标为M+的46.0峰给Mr约46.0。若明确为[M+H]+，须减去加入的质子质量（本段约1.0）：47.0峰给中性Mr约46.0。碎片峰不代表完整分子；只有峰位、没有离子身份，证据不足。

<div class="lesson-check" markdown="1">
<!-- task:molecular-check -->
Sample A has an explicitly identified intact M+ ion at m/z 58.0. Sample B has an explicitly identified [M+H]+ ion at m/z 61.0; use relative proton mass 1.0. Determine the neutral Mr of each. Could an unidentified fragment peak at m/z 31 establish either molecular mass? Explain.
<!-- /task:molecular-check -->
<details markdown="1"><summary>提示</summary>
先区分完整分子离子、质子化离子和碎片。</details>
<details markdown="1"><summary>解答与检查</summary>
A的Mr约58.0；B减质子后约60.0。未知31碎片峰不能独自给出母分子的Mr。若B写61，先辨认电离时增加了什么，再把m/z换为中性质量。
</details>
</div>

<h2 id="electron-configurations">用电子态表示排布，不画成运动轨迹</h2>

电子层由主量子数 $n$ 标记，亚层包括 s、p、d。轨道是联系空间概率分布的量子态，不是电子运动路线。一个轨道最多容纳两个自旋相反电子；s 亚层一个轨道（最多2电子），p 三个（6），d 五个（10）。同亚层的等能轨道先各占一个、自旋平行，再配对；p³ 为 `↑  ↑  ↑`，p⁴ 为 `↑↓  ↑  ↑`。

对 $Z\leq36$ 的中性原子，通常按 1s、2s、2p、3s、3p、4s、3d、4p 次序及容量填入。$2p^6$ 表示第二层 p 亚层有六个电子；[Ar] 缩写 $1s^2 2s^2 2p^6 3s^2 3p^6$。重要基态例外为 Cr：$[\mathrm{Ar}]3d^5 4s^1$，Cu：$[\mathrm{Ar}]3d^{10}4s^1$；亚层能量接近，简单填充次序不能预测所有原子。Kr 末段为 $3d^{10}4s^2 4p^6$。

过渡金属形成离子时，先移去 4s，再移去 3d。Fe 是 $[\mathrm{Ar}]3d^6 4s^2$，Fe²⁺ 为 $[\mathrm{Ar}]3d^6$，Fe³⁺ 为 $[\mathrm{Ar}]3d^5$。总电子数须等于 $Z$ 减正电荷，不能因为先填 4s 就认定最后才移除。

<div class="lesson-check" markdown="1">
<h3 id="configuration-check">建立并检查电子记录</h3>
<!-- task:configuration-check -->
Write ground-state electron configurations for Cr (Z = 24), Mn2+ (Z = 25), and Br− (Z = 35). Count the electrons in each. Draw the three p-orbital boxes for a p5 subshell, showing spins. Explain what is wrong with placing four parallel-spin electrons into one p orbital.
<!-- /task:configuration-check -->
<details markdown="1"><summary>提示</summary>
先核对电荷，区分整个 p 亚层和其中一个轨道。
</details>
<details markdown="1"><summary>解答与检查</summary>
Cr：[Ar]3d5 4s1，共24电子；Mn2+：[Ar]3d5，共23电子；Br−：[Ar]3d10 4s2 4p6，共36电子。p5 是两对相反自旋电子和一个单电子：↑↓、↑↓、↑。一个轨道不能容纳四电子，也不能有同自旋的一对。若 Mn2+ 保留了4s电子，回看[成离子](#electron-configurations)，再做 Cu+ 重试。
</details>
</div>

<h2 id="ionisation-evidence">用能量变化检验排布</h2>

**第一离子化能（first ionisation energy）**是从一摩尔气态原子各移走一个电子，形成一摩尔气态1+离子所需的能量。克服吸引需要供能，因此为正；必须写气态以及每个原子移走一个电子：

$$\ce{Mg(g) -> Mg+(g) + e-},\qquad\ce{Mg+(g) -> Mg^2+(g) + e-}$$

第二式是第二离子化能，不是从中性 Mg 一次移走两电子。逐次电离使离子越来越正，对剩余电子吸引增强，能量一般增大；特别大的跳跃意味着开始移走内层电子。构造序列 600、1200、5000、6600 kJ mol⁻¹ 在第二与第三次之间跃升，支持有两个外层电子，不是“两层电子”。这些数值只是模型记录，不能据此确认元素身份。

第三周期总体随核电荷增大，同一层屏蔽变化较小，吸引增强。两个下降提供亚层证据：Al 移去的3p电子能量高于 Mg 的3s，较易移除；S 的一个3p轨道已配对，电子间排斥使它比三个3p轨道各有单电子的 P 更易失去一个。不能把所有下降解释为多一电子层。第2族向下时，外层电子处于更高层，距离和屏蔽增大，超过核电荷增大的影响，第一离子化能总体降低。

<div class="lesson-check" markdown="1">
<h3 id="energy-check">根据证据选择解释</h3>
<!-- task:energy-check -->
Correct the definition “first ionisation energy is the energy to remove an electron from any atom” and write the first ionisation equation for Al. Constructed approximate first-ionisation records in kJ mol−1 are Na–Ar: 500, 740, 580, 790, 1010, 1000, 1250, 1520; Be, Mg, Ca, Sr, Ba: 900, 740, 590, 550, 500. Infer the overall directions and identify the Period-3 exceptions. A constructed successive-ionisation record for a Period-3 element X is 580, 1820, 2740, 11600 kJ mol−1. Infer the number of outer electrons, identify the decisive comparison and write its outer-shell configuration. Mg has successive values 740, 1450, 7700, 10500: explain their evidence for 3s2. Write the equation for the third ionisation of X. Explain why the first ionisation energies fall from Mg to Al and from P to S, and generally fall down Group 2, using different appropriate electron arguments.
<!-- /task:energy-check -->
<details markdown="1"><summary>提示</summary>
大跳跃揭示跨层，小幅周期下降则需要亚层或配对解释。
</details>
<details markdown="1"><summary>解答与检查</summary>
定义须包含一摩尔气态原子，各失去一个电子，形成一摩尔气态1+离子；Al(g) → Al+(g) + e−。第三周期记录总体上升，Mg→Al及P→S下降；第2族记录向下减小。Mg在第二次后大幅跃升，符合先移走两个外层3s电子，再移内层电子。第三次之后跃升，支持三个外层电子；在第三周期外层为3s2 3p1。第三电离为 X2+(g) → X3+(g) + e−。Mg→Al：移除对象从3s变为能量更高的3p；P→S：一个3p轨道配对，电子排斥使移除较易；第2族向下：距离及内层屏蔽增强，超过核电荷增大的影响。单靠此序列不能确定层数或唯一元素。若三种变化都用同一句话，回看[不同的比较](#ionisation-evidence)。
</details>
</div>

<h2 id="retry">关闭答案，用新证据重试</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-atoms">订正后的报告</h3>
<!-- task:retry-atoms -->
An unknown element has mononuclear 1+ isotope signals at relative masses 63.0 and 65.0 with responses 3 and 1. Calculate Ar and explain the peak assumption. Separately, state p, n and e for 65Cu+ (Z = 29), write its electron configuration, and write an equation for the second ionisation of Cu. For equal-energy ions of masses 25 and 36 on the same path, calculate the heavier-to-lighter flight-time ratio. Use these as separate claims: the isotope record alone does not prove a particular electron arrangement.
<!-- /task:retry-atoms -->
<details markdown="1"><summary>提示</summary>
除以信号总和；由中性Cu先移除4s，再考虑3d。
</details>
<details markdown="1"><summary>解答与检查</summary>
$A_r=(63.0\times3+65.0)/4=63.5$，假设单电荷原子离子的单位粒子响应相同。65Cu+：29 p、36 n、28 e；[Ar]3d10。第二电离为 Cu+(g) → Cu2+(g) + e−。飞行时间比 $\sqrt{36/25}=1.20$。平均值不是同位素，原子质量证据也不能独自确定轨道占据。先回到出错的具体段落，再做[全课程综合](/zh/alevel/as-chemistry/as-review/)的新题。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-energy">用新比较检验解释</h3>
<!-- task:retry-energy -->
A new Period-3 record has a large successive-ionisation jump after the first electron. Infer the outer configuration and write its first-ionisation equation using symbol Y. Predict and explain which has the greater first ionisation energy: Na or Mg, and Mg or Ca. Explain separately why S is below P. Your explanation must distinguish nuclear charge, shell shielding and paired-electron repulsion.
<!-- /task:retry-energy -->
<details markdown="1"><summary>提示</summary>
每次比较都明确正在移除哪个电子。</details>
<details markdown="1"><summary>解答与检查</summary>
第三周期外层为3s1；Y(g) → Y+(g) + e−。Mg高于Na：同一主层、屏蔽相近而核电荷较大；Mg高于Ca：Ca外电子在更高层、距离和屏蔽较大；S低于P：配对3p电子有额外排斥。失去一个电子后跃升不等于只有一层电子。关闭本答案后重做，仍混淆则返回ionisation-evidence。
</details>
</div>

<h2 id="sources">来源与下一步</h2>

[OxfordAQA 9620 大纲 Version 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf) 3.1.1；Lister/Renshaw，*International A Level Chemistry*（OUP，2016），Ch1 印刷13–28页。实际查阅选定页面；本页分子峰规则限于明确指定离子身份，详细分析在后续继续。所有任务与数值记录自拟，无官方分值。下一步[化学键与形状](/zh/alevel/as-chemistry/bonding-and-shape/)，或回[课程入口](/zh/alevel/as-chemistry/)。
