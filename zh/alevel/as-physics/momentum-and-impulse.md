---
title: 动量与冲量：碰撞前后什么改变了？
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/momentum-and-impulse/
permalink: /zh/alevel/as-physics/momentum-and-impulse/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">力在变化，也能追踪它的效果</h2>

碰撞中的力通常先增大再减小。如果没有说明近似条件，就不能用匀加速公式描述整段接触过程。动量能把接触前后的运动，与接触期间力的作用联系起来。

你将选择研究系统，分析一维碰撞与分离，读取力—时间图，并判断数据是否支持模型。开始前，用[牛顿定律](/zh/alevel/as-physics/newtons-laws/)回补对象边界与合力，用[运动图像](/zh/alevel/as-physics/straight-line-motion/#graphs-and-signs)回补有符号面积，用[不确定度](/zh/alevel/as-physics/measurements-and-uncertainties/)准备数据任务。以下题目均为自拟，数值记录均为构造；没有声称完成实际实验。

<div class="lesson-check" markdown="1">
**读正文前先回忆——自拟题。**
<!-- task:recall -->
A ball moves downwards before hitting a floor and upwards after contact. Choose upwards as positive. State the sign of each velocity and the direction of its velocity change. Which forces act on the ball during contact?
<!-- /task:recall -->
<details markdown="1"><summary>提示</summary>
用末速度减去有符号的初速度。
</details>
<details markdown="1"><summary>解答与检查</summary>
初速度为负，末速度为正，所以速度变化向上。接触时，地板的力向上，重力向下。球对地板的力不能画在球的受力图上。需要时回看[上一课](/zh/alevel/as-physics/newtons-laws/#force-model)。
</details>
</div>

<h2 id="system">动量属于选定的系统</h2>

沿选定坐标轴，质量为 $m$、速度为 $v$ 的质点，其动量（momentum）为：

$$p=mv\qquad [p]=\mathrm{kg\,m\,s^{-1}}$$

动量是向量：相同质量以相同速率反向运动，动量也相反。系统总动量要把各物体的有符号动量相加，不能把速率直接相加。

第二定律也可表述为：合外力等于动量的变化率。在一段时间内，系统动量的变化等于**外冲量**。系统内部相互作用力等大反向，内力冲量在总和中抵消。因此，某方向的合外冲量为零时，该方向总动量守恒；若相对于所研究的动量变化足够小，可近似守恒。

能否守恒取决于选定边界和方向。两车短暂碰撞时，整体的水平动量可近似守恒，但每辆车的动量仍会改变。重力与轨道支持力在竖直方向平衡，也不会抵消额外的水平推力。

<h2 id="collision-example">两车粘在一起</h2>

<div class="worked-example" markdown="1">
**完整示范——自拟题。**

<!-- task:worked-collision -->
Trolley A (0.40 kg) moves right at 3.0 m/s and B (0.60 kg) moves left at 1.0 m/s. They collide and stick. The net external horizontal impulse during contact is negligible. Find their common velocity.
<!-- /task:worked-collision -->

两车一起作为系统，向右为正。接触力为内力。“粘在一起”提供了额外条件：碰撞后的速度相同，记为 $v$。

$$0.40(3.0)+0.60(-1.0)=(0.40+0.60)v$$

$$v=+0.60\,\mathrm{m\,s^{-1}}$$

最终向右运动。碰撞前后总动量均为 $+0.60\,\mathrm{kg\,m\,s^{-1}}$。一辆车失去动量，另一辆获得动量；不能把每辆车单独看成孤立系统。

判断碰撞类型时，使用动能这一标量：$E_k=\tfrac12mv^2$。负速度平方后，动能仍为正。本例中：

$$E_{k,\mathrm{before}}=\tfrac12(0.40)(3.0)^2+\tfrac12(0.60)(-1.0)^2=2.1\,\mathrm{J}$$

$$E_{k,\mathrm{after}}=\tfrac12(1.00)(0.60)^2=0.18\,\mathrm{J}$$

动能减少 1.92 J，转移到形变、内能，也可能有声音。总能量守恒，但系统的动能不守恒，所以是非弹性碰撞。
</div>

<h2 id="collision-types">动量与动能分开检查</h2>

孤立系统发生**弹性碰撞（elastic collision）**时，总动能和总动量均守恒。**非弹性碰撞（inelastic collision）**不守恒动能，但物体不一定粘连；粘连属于完全非弹性情形。只看到反弹，不能断言是弹性碰撞，要比较系统总动能。

爆炸或弹簧释放时，内部储存的能量可以转化为动能；只要外冲量可忽略，总动量仍不变。一个原先静止的系统，能分离成两个运动物体，二者动量之和仍为零。动量守恒只提供一条方程；若有两个未知末速度，还需要另一个明确条件或测量。题目没有说粘连或弹性，就不能自行假设。

<h2 id="impulse">读取力—时间图的有符号面积</h2>

合力恒定时，第二定律给出：

$$J=F_{\mathrm{resultant}}\Delta t=\Delta p=m(v-u)$$

合力变化时，冲量（impulse）是合力—时间图线与时间轴之间的有符号面积。把直边区域分成矩形、三角形或梯形，保留负面积。曲线可用足够窄的小条估算面积。$1\,\mathrm{N\,s}=1\,\mathrm{kg\,m\,s^{-1}}$。

选定时间段内的平均合力满足：

$$\bar F_{\mathrm{resultant}}=\frac{\Delta p}{\Delta t}$$

相同的动量变化，接触时间越长，平均合力的大小越小。但这本身不能确定峰值力，还要看图线形状。传感器测到的可能只是接触力；其面积要加上其他力的冲量，才等于总动量变化。

<div class="worked-example" markdown="1">
<h3 id="bounce-example">求地板的力，要补上重力</h3>
**完整示范——自拟题。**

<!-- task:worked-bounce -->
A 0.20 kg ball arrives at a horizontal floor with velocity −5.0 m/s and leaves with +3.0 m/s, upwards positive. Contact lasts 0.040 s. Use $g=10\,\mathrm{m\,s^{-2}}$ and neglect air resistance.
<!-- /task:worked-bounce -->

速度反向，要减去带负号的初速度：

$$\Delta p=0.20[3.0-(-5.0)]=+1.6\,\mathrm{kg\,m\,s^{-1}}$$

平均合力是 $1.6/0.040=40\,\mathrm{N}$，向上。这还不是地板单独的力。球的重力为 2.0 N，向下，所以：

$$\bar N-mg=40\,\mathrm{N},\qquad \bar N=42\,\mathrm{N}$$

由第三定律，球对地板的平均力为 42 N，向下。用冲量检查：地板贡献 +1.68 N s，重力贡献 −0.080 N s，总和为 +1.60 N s。只有重力冲量相对于所需精度足够小时，才可近似忽略它；接触力与合力不是恒等关系。
</div>

<h2 id="independent-practice">改变条件，自己选方法</h2>

初次作答先关闭提示。计算前写出正方向、研究系统以及守恒条件。除了数字，还要给理由；解答里的核查点均为自拟。

<div class="lesson-check" markdown="1">
<h3 id="collision-check">已测得一个结果</h3>
<!-- task:collision-check -->
Trolley A (0.50 kg) initially moves right at 2.0 m/s; trolley B (1.0 kg) is stationary. After a one-dimensional collision A moves left at 0.40 m/s. External horizontal impulse is negligible. Find B’s final velocity. Use the total kinetic energies to classify the collision. Do not assume that the trolleys stick. For a different collision with the same initial conditions, a student proposes final velocities −2/3 m/s for A and +4/3 m/s for B. Test whether this proposed outcome conserves total momentum and kinetic energy, and classify it.
<!-- /task:collision-check -->
<details markdown="1"><summary>提示</summary>
负速度要带入动量方程；能量要另行检查。
</details>
<details markdown="1"><summary>解答与检查</summary>
向右为正：$0.50(2.0)=0.50(-0.40)+1.0v_B$，得 $v_B=+1.2\,\mathrm{m\,s^{-1}}$。初动能为 1.0 J，末动能为 $0.040+0.72=0.76\,\mathrm{J}$。虽然发生反弹，仍是非弹性碰撞。第二个预测结果的总动量为 $-1/3+4/3=1.0\,\mathrm{kg\,m\,s^{-1}}$，总动能为 $1/9+8/9=1.0\,\mathrm{J}$，均等于初值，所以该结果属于弹性碰撞。必须分别完成动量和动能检查。如果你认为反弹一定是弹性碰撞，回看[碰撞类型](#collision-types)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="separation-check">从静止开始分离</h3>
<!-- task:separation-check -->
Two trolleys of masses 0.30 kg and 0.60 kg are initially stationary on a level low-friction track. A compressed spring between them is released. External horizontal impulse is negligible during release. The 0.30 kg trolley leaves at 2.0 m/s to the left. Find the other velocity and the increase in total kinetic energy. Explain in English how momentum can be conserved while kinetic energy increases. The spring’s mass is negligible.
<!-- /task:separation-check -->
<details markdown="1"><summary>提示</summary>
从总动量为零开始；再说明动能来自哪里。
</details>
<details markdown="1"><summary>解答与检查</summary>
向右为正：$0=0.30(-2.0)+0.60v$，得 $v=+1.0\,\mathrm{m\,s^{-1}}$。动能从零增加到 $0.60+0.30=0.90\,\mathrm{J}$。英文可写：“The spring transfers stored elastic energy to the trolleys. The interaction impulses are internal, so the total horizontal momentum remains zero.” 质量不同，所以末速度不同。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="graph-check">力改变了方向</h3>
<!-- task:graph-check -->
A 0.10 kg trolley has initial velocity −0.40 m/s. The graph shows its resultant horizontal force, with right positive. Straight lines join the points (time in ms, force in N): (0, 0), (20, 12), (40, 0), (60, −6), (80, 0). Find the impulse over 0–80 ms, the final velocity, and the average resultant force over that interval. Explain why the maximum force cannot be used as a constant force for the whole interval.
<!-- /task:graph-check -->

![构造的合力图：直线依次连接 (0 ms, 0 N)、(20 ms, 12 N)、(40 ms, 0 N)、(60 ms, −6 N)、(80 ms, 0 N)。](/assets/img/physics-as-impulse-task.svg){: width="480" height="320" }

<details markdown="1"><summary>提示</summary>
先把毫秒换成秒，再求两个三角形的有符号面积。
</details>
<details markdown="1"><summary>解答与检查</summary>
$$J=\tfrac12(0.040)(12)-\tfrac12(0.040)(6)=+0.12\,\mathrm{N\,s}$$

$$v=u+\frac{J}{m}=-0.40+\frac{0.12}{0.10}=+0.80\,\mathrm{m\,s^{-1}}$$
平均合力为 $0.12/0.080=+1.5\,\mathrm{N}$。12 N 的峰值只出现在一个瞬间，图中还有更小的力和负力。如果把两块面积的大小直接相加，回看[有符号面积](#impulse)；如果得到 120 N s，修正时间单位，再做下方重试。
</details>
</div>

<h2 id="evidence">相容就能证明模型正确吗？</h2>

动量实验要比较独立测得的量：力传感器提供图线，质量和运动传感器提供 $m(v-u)$。在给定不确定度内相容，支持测量与模型一致，但可能不止一种解释。下一题采用简单的区间判据：两个不确定度区间重叠，视为**在本项检查中相容**。这里给的是绝对不确定度界限，不是标准差，也不是统计显著性检验。

<div class="lesson-check" markdown="1">
<h3 id="evidence-check">比较两项测量</h3>
<!-- task:evidence-check -->
In a constructed trolley impact record, the measured impulse of the bumper’s force on the trolley is −0.84 ± 0.03 N s. Independently measured momentum change is −0.90 ± 0.04 kg m/s. Right is positive. Compare the intervals and assess the claim “this proves all other horizontal forces were zero”. A small unmeasured resistance acts left throughout contact: predict the sign of (momentum change − bumper impulse). Suggest a measurement that could distinguish this effect from sensor zero bias. Assume the quoted bounds have already included the stated instrument uncertainties.
<!-- /task:evidence-check -->
<details markdown="1"><summary>提示</summary>
把两个区间放在同一条有正负的数轴上。缓冲器的力只是一个外力。
</details>
<details markdown="1"><summary>解答与检查</summary>
两个区间分别为 [−0.87, −0.81] N s 和 [−0.94, −0.86] N s，重叠部分为 −0.87 至 −0.86 N s。在给定检查中相容，但不能证明其他力全为零。向左的阻力贡献负冲量，所以所求差应为负；本题中心值之差为 −0.06 N s。可在接触前后检查力传感器零点，再独立测量同一轨道上不接触缓冲器时的小车减速度，估算阻力冲量。独立重复碰撞可检查离散程度，但重复本身不能去掉持续的零点偏差。实际使用器材时，应固定传感器、调平轨道、设置接车挡板并采用低速；本纸面练习没有检验实际装置。
</details>
</div>

<h2 id="diagnose-and-retry">收起解答，检查是否修好了</h2>

正负号错了，回看[动量](#system)；守恒判断错了，说清外冲量；力算错了，分清[接触力与合力](#bounce-example)。若把区间相容当作证明，回看[比较实际检验什么](#evidence)。

<div class="lesson-check" markdown="1">
<h3 id="retry-evidence">另一份记录</h3>
<!-- task:retry-evidence -->
In a new constructed record, bumper impulse is −0.50 ± 0.01 N s and independent momentum change is −0.58 ± 0.02 kg m/s. Right is positive. Are these compatible using the stated interval check? Can repeated impacts alone decide whether sensor zero bias or an unmeasured leftward resistance caused the discrepancy? Give a direction prediction and a separate measurement for each proposed cause.
<!-- /task:retry-evidence -->
<details markdown="1"><summary>提示</summary>
先比较端点，再分别测量无接触时的传感器和不碰缓冲器的小车。
</details>
<details markdown="1"><summary>解答与检查</summary>
区间 [−0.51, −0.49] 与 [−0.60, −0.56] 不重叠，按此判据不相容。仅重复碰撞不能区分持续存在的原因。向左阻力增加负冲量；可测同一轨道上小车自由滑行的减速度，估算接触时段的阻力冲量。力传感器的正零点偏移会让负的缓冲器冲量读得偏正，也产生负的“动量变化减测得缓冲器冲量”；可在撞击前后记录无接触时的基线。若仅有负零点偏移，预测的差异方向则相反。先区分假设，不能直接扩大不确定度界限来消除差异。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-momentum">换一种接触过程</h3>
<!-- task:retry-momentum -->
A 0.20 kg trolley initially moves right at 1.0 m/s. Its resultant horizontal force varies linearly from 0 to −8.0 N and back to 0 over a total of 0.10 s, making one triangle below the time axis. Find its final velocity and explain whether kinetic energy is conserved over this interaction. Separately, a 0.10 kg ball is brought from −2.0 m/s to rest by a horizontal floor in 0.020 s. With upwards positive and g = 10 m/s², find the average floor force on the ball.
<!-- /task:retry-momentum -->
<details markdown="1"><summary>提示</summary>
对小车，用有符号面积并检查两端速率；对球，求完合力后还要计入重力。
</details>
<details markdown="1"><summary>解答与检查</summary>
小车冲量为 −0.40 N s，所以 $v=1.0-0.40/0.20=-1.0\,\mathrm{m\,s^{-1}}$。前后动能均为 0.10 J；仅凭这个相等，还不能断言小车与题目未指定的另一个相互作用物体组成了孤立的弹性碰撞系统。球的 $\Delta p=+0.20\,\mathrm{kg\,m\,s^{-1}}$，平均合力 +10 N，地板平均力为 11 N 向上。第三定律检查：球对地板的平均力为 11 N 向下。
</details>
</div>

<h2 id="later-review">下次学习先做：混合情境</h2>

把这题留到下次学习，先关闭前面的答案再做。记录首次理由、用过的提示、错误原因和重试结果。这可以提供自己的提取表现；只读完解答不能代替作答。

<div class="lesson-check" markdown="1">
<!-- task:later-review -->
A 2.0 kg trolley moves right at 3.0 m/s. A steady 2.0 N horizontal resistance brings it to rest on a level track. Determine the stopping time and distance. A different bumper arrangement stops the same trolley from the same speed in 0.10 s; all other horizontal forces are negligible during that contact. Determine the bumper’s average force on the trolley and compare the momentum changes in the two stops. Explain in English why equal momentum changes do not require equal average forces. Name the third-law partner of the bumper force. Do not assume the bumper force is constant.
<!-- /task:later-review -->
<details markdown="1"><summary>提示</summary>
根据条件判断哪些量恒定，把两次停止过程分开处理。
</details>
<details markdown="1"><summary>解答与检查</summary>
向右为正：$a=-2.0/2.0=-1.0\,\mathrm{m\,s^{-2}}$，所以恒阻力停止需 3.0 s，位移为 4.5 m。两次均有 $\Delta p=2.0(0-3.0)=-6.0\,\mathrm{kg\,m\,s^{-1}}$。缓冲器平均力为 −60 N。英文解释：“The same momentum change occurs over a shorter time, so the magnitude of the average resultant force is larger.” 对应力是小车对缓冲器的力，平均为 60 N，向右。检查：只有第一次停止的距离计算使用了匀加速条件；知道缓冲器平均力，不能推出加速度恒定或峰值力。如果混淆对象边界，重做上一课的[包裹题](/zh/alevel/as-physics/newtons-laws/#retry-forces)；如果混淆正负或面积，重做[另一种接触](#retry-momentum)。
</details>
</div>

<h2 id="sources-and-next">本课范围与后续缺口</h2>

范围：OxfordAQA International AS Physics 9630，PH01 §3.2.6，一维动量、碰撞、爆炸、冲量与接触时间。见[资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/)及其链接的[Version 4.4 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)。另一官方 PDF 标为 Version 5.1，相关范围一致。

已查阅 [PH01 specimen 试卷](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9630-PH01-international-as-physics-specimen-paper-2016-v2.pdf)（正文标 Specimen 2018、V1.1）的 Q06.3–06.5 及[配套评分标准](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9630-PH01-international-as-physics-mark-scheme-2016-v2.pdf)，核对动量方向、撞击力与接触时间的论证。本课使用不同的自拟题，不转载官方题目或分值。反弹示范在区分接触力和合力时明确保留了重力。

[上一课：牛顿定律](/zh/alevel/as-physics/newtons-laws/) · [AS 物理](/zh/alevel/as-physics/) · [下一课：功、能与功率](/zh/alevel/as-physics/work-energy-power/) · [Unit 1 综合复习](/zh/alevel/as-physics/unit-1-review/)
