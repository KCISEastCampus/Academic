---
title: 力与运动
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
lang: zh-CN
translation_of: /igcse/physics/forces-and-motion/
permalink: /zh/igcse/physics/forces-and-motion/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">向前运动，合力却可以向后？</h2>

运动图描述“发生了什么”；受力模型解释相互作用怎样改变运动。

1. [选定研究对象，画出受力](#force-model)。
2. 把[合力](#newtons-laws)与加速度联系起来，再学习[动量](#momentum)。
3. 用模型解释[停车](#stopping-distance)和[终端速度](#terminal-velocity)。
4. 完成[独立练习](#independent-practice)，再[诊断并重试](#diagnose-and-retry)。

**开始前：**会使用[运动与运动图像](/zh/igcse/physics/motion-and-graphs/)中的带方向速度、加速度和速度图面积。数值题未说明时沿直线运动，取向东为正，并使用给出的 g。

除标明的样卷改编题外，任务均为自拟题；记录与图示是教学构造，不是实测实验结果。

<h3 id="first-judgement">先判断：一条直线能说明什么？</h3>

*自拟题。*

<!-- task:first-judgement -->

A trolley's idealised position–time graph is a straight rising line, with east chosen as positive. A student says: “It is moving east, so its resultant force must point east.” Is that conclusion justified? Use the motion description before choosing an equation.

<!-- /task:first-judgement -->

<details markdown="1">
<summary>提示</summary>

区分“有速度”和“速度在改变”。

</details>

<details markdown="1">
<summary>解答与检查</summary>

位置—时间图是直线，斜率不变，因此速度不变。定质量模型下，加速度为零，因此合力为零。物体仍可受到多个力，只是这些力相互平衡。

</details>

<h2 id="force-model">先选定一个物体，再合成力</h2>

力表示相互作用。要说清“谁对谁施力”：桌面对小车施力，地球对小车施力。**受力图（free-body diagram）**只画选定物体受到的力，不把速度画成力，也不把该物体对外施加的力混入。

重力是引力，不是质量：

$$W=mg$$

质量单位为 kg，重力为 N，重力场强为 N/kg。拉紧绳的张力沿绳方向；支持力垂直接触面。摩擦力阻碍相对滑动或滑动趋势，不一定总与物体相对地面的速度相反。

<img src="/assets/img/physics-ig-force-model.svg" alt="教学示意：水平面上5 kg小车受到向东40 N拉力、向西10 N阻力、向上49 N支持力和向下49 N重力。箭头均表示作用在小车上的力；g为9.8 N/kg。" width="760" height="430">

图中小车竖直加速度为零，拉力也无竖直分量，因此支持力等于重力。这个相等关系来自具体条件，不是任何受力题都能直接使用的规则。

**示范水平方向建模：**取向东为正。

$$F_{\mathrm{resultant}}=40-10=+30\,\mathrm{N},\qquad a=\frac{30}{5}=+6.0\,\mathrm{m\,s^{-2}}$$

使用合力，不能只代入 40 N 拉力。箭头表示相互作用，不表示小车将来走出的轨迹。

<h3 id="two-directions">两个力不在同一直线上</h3>

*自拟题。*

<!-- task:two-directions -->

Two horizontal forces act on a small ring: 3.0 N east and 4.0 N north. Use a scale drawing of 1 cm to 1 N to find their resultant. State its magnitude and direction. Explain why adding 3.0 and 4.0 as ordinary numbers is not appropriate.

<!-- /task:two-directions -->

<details markdown="1">
<summary>提示</summary>

首尾相接画箭头；合力从第一个箭尾指向最后一个箭头。

</details>

<details markdown="1">
<summary>解答与检查</summary>

比例图对角线长 5.0 cm，表示合力为 5.0 N，方向约为东偏北 53°。直角三角形可核验：$R^2=3^2+4^2=25$。只有同向时才能直接得到 7 N；本题用量角器测方向，不要求用三角函数计算。

</details>

<h2 id="newtons-laws">把受力模型与运动联系起来</h2>

在惯性参考系、物体质量不变的条件下：

- **第一定律：**合力为零时速度保持不变，静止只是其中一种情况。
- **第二定律：**合力决定加速度，不直接决定速度。
- **第三定律：**A 对 B 施力时，B 同时对 A 施加大小相等、方向相反的力。两个力分别作用于不同物体，来自同一相互作用。

$$\sum F=ma,\qquad a=\frac{v-u}{\Delta t}$$

向东运动的小车可以受到向西合力，因而减速；它不会立刻改为向西运动。同一个物体上的重力与支持力可以平衡，却不是第三定律的一对力：地球对小车引力的配对力，是小车对地球的引力。

接触状态或运动方向改变时，必须重新判断受力。不能在滑动物体停下后，未经检查就继续沿用原来的恒摩擦力方程。

<h3 id="remove-the-pull">撤去拉力之后</h3>

*自拟题。*

<!-- task:remove-the-pull -->

A 5.0 kg trolley travels east at 8.0 m/s. The pull is removed. While it is sliding east, a constant 10 N resistance acts west. Find its acceleration and velocity after 3.0 s. A student extends the same equation to 6.0 s and predicts a westward velocity. Explain what must be reconsidered.

<!-- /task:remove-the-pull -->

<details markdown="1">
<summary>提示</summary>

先确定力的正负号，再检查算到的时刻是否仍在向东滑动。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取向东为正：

$$a=\frac{-10}{5.0}=-2.0\,\mathrm{m\,s^{-2}},\qquad v=8.0-2.0\times3.0=+2.0\,\mathrm{m\,s^{-1}}.$$

小车仍向东，只是更慢。原受力模型使它在 4.0 s 后停下，此后不能让“阻碍向东滑动的阻力”继续向西并主动推动小车倒退。水平面上无新的驱动力时，它可以保持静止。

</details>

<h2 id="momentum">先选系统，再使用动量守恒</h2>

动量是向量：

$$p=mv,\qquad F_{\mathrm{average}}=\frac{\Delta p}{\Delta t}$$

选定系统后，只有在相互作用期间外力冲量为零或可忽略时，总动量才守恒。内力在物体之间交换动量，不改变系统总动量；碰撞中的单辆小车通常不保持自身动量不变。

**碰撞示范：**2.0 kg 小车以 3.0 m/s 向东运动，与静止的 1.0 kg 小车碰后粘在一起，忽略外界水平冲量。

$$2.0\times3.0+1.0\times0=(2.0+1.0)v,\qquad v=+2.0\,\mathrm{m\,s^{-1}}.$$

第一辆车动量从 6.0 变为 4.0 kg m/s，若碰撞历时 0.10 s：

$$F_{\mathrm{average}}=\frac{4.0-6.0}{0.10}=-20\,\mathrm{N}.$$

负号表示向西。第一辆车损失的动量等于第二辆车获得的动量。粘连碰撞不保持总动能不变，部分能量转为内能、声音或形变。

同样的动量变化下，延长停止时间可减小平均力；缓冲垫、溃缩区和安全气囊正是利用这一点，不是让动量消失。平均力也不等于峰值力。

<h2 id="stopping-distance">把反应阶段与制动阶段分开</h2>

停车距离等于反应距离加制动距离。简化模型中，反应阶段速率不变；开始制动后，向后的合力使速率减小。疲劳、分心可延长反应时间；湿滑路面、磨损轮胎和不良制动器会影响可用制动力。

以下构造记录表示汽车向东运动，开始制动前匀速，制动期间匀减速。

<!-- record:braking-record -->

| Time / s | 0 | 0.50 | 3.50 |
| --- | --- | --- | --- |
| Velocity east / (m/s) | 12 | 12 | 0 |

<!-- /record:braking-record -->

<img src="/assets/img/physics-ig-braking.svg" alt="构造速度记录：0 s至0.50 s均为向东12 m/s，之后沿直线减至3.50 s时速度为零。图中标明反应和制动阶段，没有给出面积或距离答案。" width="760" height="430">

**先示范反应阶段：**图下为矩形，反应距离是 $12\times0.50=6.0\,\mathrm{m}$。制动阶段的时间长度和图形不同。制动把动能转移到热储能等形式，不是把能量消灭。

质量和恒定合制动力相同时，加速度大小不变。初速加倍，制动时间也加倍，速度图三角形的高和底均加倍，因此该模型下制动距离变为四倍；只有反应时间不变时，反应距离才恰好加倍。

<h3 id="read-the-stop">完成制动过程的解释</h3>

*自拟题。*

<!-- task:read-the-stop -->

Use the constructed braking record. The car has mass 1000 kg.

1. Determine braking distance and total stopping distance.
2. Determine the resultant force during braking, including its direction.
3. The initial speed is doubled while mass, reaction time and resultant braking force stay unchanged. Predict the new thinking distance, braking distance and total stopping distance. Explain why doubling the original total is incorrect.

<!-- /task:read-the-stop -->

<details markdown="1">
<summary>提示</summary>

制动历时3.0 s，不是3.5 s。把两段距离分别处理。

</details>

<details markdown="1">
<summary>解答与检查</summary>

制动面积为三角形：

$$d_{\mathrm{braking}}=\frac12\times3.0\times12=18\,\mathrm{m},\qquad d_{\mathrm{stop}}=6.0+18=24\,\mathrm{m}.$$

$$a=\frac{0-12}{3.0}=-4.0\,\mathrm{m\,s^{-2}},\qquad F=1000\times(-4.0)=-4000\,\mathrm{N}.$$

初速为24 m/s时，反应距离12 m。制动历时6.0 s，三角形面积72 m，总距离84 m。两部分增长规律不同，总距离既不是简单加倍，也不是恰好变为四倍。

</details>

<h2 id="terminal-velocity">仍在下落，加速度却为零</h2>

研究下落的人，取向下为正。近似认为重力不变、浮力可忽略：

$$F_{\mathrm{resultant}}=mg-D.$$

开始时阻力 D 较小；下落速率增大，阻力增大，加速度减小。阻力等于重力时，合力为零，仍以非零终端速度下落，速度—时间图变成非零高度的水平线。

开伞会在当前速率下显著增大阻力。如果阻力超过重力，加速度向上，但速度暂时仍向下。速率减小，直至达到较低的新终端速率。其他条件可比时，流线型可减小同速下的阻力，并提高终端速率。

<h2 id="independent-practice">独立选系统，并说明选法依据</h2>

保持解答关闭，先画需要的受力图或运动图，再代数值。说清结论针对单个物体还是整个系统。

<h3 id="practice-release">起初静止的系统释放之后</h3>

*自拟题。*

<!-- task:practice-release -->

Two trolleys of masses 1.5 kg and 0.50 kg start at rest on a horizontal low-friction track. A compressed spring between them is released. The 1.5 kg trolley moves west at 0.40 m/s. Ignore external horizontal impulse. Determine the velocity of the other trolley, and explain why equal and opposite interaction forces do not imply equal speeds.

<!-- /task:practice-release -->

<details markdown="1">
<summary>提示</summary>

把两辆车作为系统，写入方向符号与各自质量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取向东为正：

$$0=1.5\times(-0.40)+0.50v,\qquad v=+1.2\,\mathrm{m\,s^{-1}}.$$

轻车向东。大小相等、方向相反的冲量带来相反的动量变化，但质量不同就不要求速度大小相等。弹簧储能提供动能，同时系统水平总动量仍为零。

</details>

<h3 id="practice-parachute">解释完整的受力变化</h3>

*改编自 OxfordAQA International GCSE Physics 9203/1 Paper 1 Specimen，Q01.3–01.6；已核对配套评分标准，另加开伞后数据与任务。*

<!-- task:practice-parachute -->

A falling parachutist has weight 784 N where g = 9.8 N/kg. Before the parachute opens, the downward speed becomes constant at 50 m/s. Ignore buoyancy.

1. Determine the mass and the drag at this constant speed.
2. Explain how the resultant force and acceleration changed as the parachutist sped up towards 50 m/s.
3. Immediately after opening, drag is 1200 N. Determine acceleration, stating direction, and explain whether the parachutist must already be moving upwards.

<!-- /task:practice-parachute -->

<details markdown="1">
<summary>提示</summary>

先用重力求质量，区分加速度方向与速度方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

质量为 $784/9.8=80\,\mathrm{kg}$；匀速时阻力向上且为784 N。此前随速率增大，阻力增大，重力近似不变，因此向下合力和加速度逐渐降至零。

开伞瞬间取向下为正：

$$a=\frac{784-1200}{80}=-5.2\,\mathrm{m\,s^{-2}}.$$

加速度向上，但速度仍可向下，表示下落变慢。英文解释可写：“Upward acceleration changes the downward velocity towards zero; it does not instantly reverse the motion.”

</details>

<h3 id="practice-impact">相同动量变化，不同缓冲</h3>

*自拟题。*

<!-- task:practice-impact -->

A 0.20 kg ball moving east at 10 m/s is stopped without rebounding. One pad stops it in 0.010 s; another takes 0.050 s. Determine the average horizontal force on the ball in each case. Explain what this comparison does and does not establish about the largest force during impact.

<!-- /task:practice-impact -->

<details markdown="1">
<summary>提示</summary>

用末动量减初动量，并区分平均值与峰值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

动量变化为 $\Delta p=0-0.20\times10=-2.0\,\mathrm{kg\,m\,s^{-1}}$。

$$F_1=-200\,\mathrm{N},\qquad F_2=-40\,\mathrm{N}.$$

两者均向西。同样动量变化下，停止时间较长，平均力大小较小。没有力—时间记录，不能确定峰值或其比值。

</details>

<h2 id="diagnose-and-retry">修正产生错误的原因</h2>

| 说法 | 回去检查 |
| --- | --- |
| 向东运动一定受到向东合力 | 比较[速度与加速度](#newtons-laws)。 |
| 反向箭头都是第三定律配对力 | 说清[物体与相互作用](#force-model)。 |
| 每辆碰撞小车各自动量守恒 | 选择[完整系统](#momentum)。 |
| 速率加倍，总停车距离就加倍 | 分开[反应与制动](#stopping-distance)。 |
| 终端速度时没有力 | 重建[平衡受力模型](#terminal-velocity)。 |

<h3 id="retry-forces">重试：先识别力作用在哪个物体上</h3>

*自拟题。*

<!-- task:retry-forces -->

A book rests on a horizontal table. Earth pulls the book down and the table pushes it up. A student calls these a Newton's third-law pair. Correct the explanation, naming the partner of each force. Then explain why the book does not accelerate.

<!-- /task:retry-forces -->

<details markdown="1">
<summary>提示</summary>

把每个相互作用中的施力物与受力物交换。

</details>

<details markdown="1">
<summary>解答与检查</summary>

地球对书的引力，与书对地球的引力配对；桌面对书向上的接触力，与书对桌面向下的接触力配对。书受到的两力平衡，合力及加速度为零，但这两力属于不同相互作用。

</details>

<h2 id="sources-and-next">范围与下一步</h2>

本页发展 OxfordAQA International GCSE Physics 9203 的3.1.1中力与重力基础，以及3.1.3–3.1.6。弹簧形变接续下一课；质心与力矩接续本路线后课，本页不等于完整的力学单元。

范围依据[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf)。样卷改编任务旁已标具体试卷和题号；其他任务与数值记录均为自拟。改编及自拟任务不标官方分值。

[上一课：运动与运动图像](/zh/igcse/physics/motion-and-graphs/) · [返回IGCSE物理](/zh/igcse/physics/) · [现有力矩笔记](/zh/igcse/physics/#%EF%B8%8F-17-centre-of-mass--18-moments)。

[下一课：弹簧与胡克定律](/zh/igcse/physics/springs-and-hookes-law/)
