---
title: 直线运动与匀加速
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/straight-line-motion/
permalink: /zh/alevel/as-physics/straight-line-motion/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">同一段运动的三种描述</h2>

位移描述物体相对起点的位置，速度描述位置怎样变化，加速度描述速度怎样变化。理解这些联系，比根据字母凑公式更重要。

1. 联系[正负号、斜率和面积](#graphs-and-signs)。
2. 明确[匀加速方程](#constant-acceleration)的适用条件。
3. 解释[竖直运动与转折点](#vertical-motion)。
4. 分析 [RP1 自由落体数据](#freefall-practical)，再完成[独立练习](#independent-practice)。

**先修：**需要时回看 [IG 运动图像](/zh/igcse/physics/motion-and-graphs/)，实验评价可回看 [AS 测量与不确定度](/zh/alevel/as-physics/measurements-and-uncertainties/)。赋予正负号前先规定正方向。数值记录均为构造材料；标注的改编题改变了原题图像和数值。

<h3 id="first-turn">先试一试：瞬时静止等于没有加速度吗？</h3>

*自拟题。*

<!-- task:first-turn -->

A ball is thrown vertically upwards and later returns to its release height. Ignore air resistance. At the highest point its velocity is zero. Does its acceleration also become zero? Give a reason using the interaction that still acts.

<!-- /task:first-turn -->

<details markdown="1">
<summary>提示</summary>

最高点时，哪一种力消失了？

</details>

<details markdown="1">
<summary>解答与检查</summary>

最高点仍受到重力。速度只是瞬时为零，并继续向下变化；整个自由飞行过程中的加速度均向下。某一瞬间速度为零，不能证明加速度为零。

</details>

<h2 id="graphs-and-signs">读懂斜率与有符号面积</h2>

位移和速度带方向符号，路程与速率则非负。对有限时间间隔：

$$\bar v=\frac{\Delta s}{\Delta t},\qquad \text{average speed}=\frac{\text{total distance}}{\Delta t},\qquad \bar a=\frac{\Delta v}{\Delta t}$$

瞬时速度是位移—时间图的切线斜率；瞬时加速度是速度—时间图的切线斜率。割线给出区间平均值。负速度逐渐接近零时，物体在减速，但加速度可以为正。

| 图像 | 斜率或面积 | 物理意义 |
| --- | --- | --- |
| 位移—时间 | 切线斜率 | 瞬时速度 |
| 速度—时间 | 切线斜率 | 瞬时加速度 |
| 速度—时间 | 有符号面积 | 位移变化 |
| 速率—时间 | 面积 | 经过的路程 |
| 加速度—时间 | 有符号面积 | 速度变化 |

根据速度图求路程时，应把零轴两侧面积的大小相加。曲线图求瞬时值需作切线，求位移需适当估计面积，不能用一套恒加速度方程替代整个变加速过程。

<h3 id="graph-transfer">转换不同表征</h3>

*自拟题。*

<!-- task:graph-transfer -->

A trolley starts with velocity +2.0 m/s. Its acceleration is +3.0 m/s² for 2.0 s, then −2.0 m/s² for 5.0 s. Sketch acceleration–time and velocity–time graphs. Determine the final velocity, total displacement and total distance. Identify when the trolley reverses direction.

<!-- /task:graph-transfer -->

<details markdown="1">
<summary>提示</summary>

先用加速度图的面积求速度变化，再在速度为零处拆分面积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$v_2=2+3\times2=8\,\mathrm{m\,s^{-1}},\qquad v_7=8-2\times5=-2\,\mathrm{m\,s^{-1}}$$

加速度图先为 +3、后为 −2 的水平段，在 2 s 处跳变，理想模型不指定跳变瞬间的加速度值。速度图用直线连接 (0,2)、(2,8)、(7,−2)，在 6 s 穿过零轴。0–2 s 面积为 10 m，2–6 s 为 +16 m，6–7 s 为 −1 m。位移为 +25 m，路程为 27 m；6 s 时转向。两个阶段的边界速度连续，但不能把全程当成同一个恒加速度过程。

</details>

<h2 id="constant-acceleration">先判断条件，再选择方程</h2>

沿一条轴运动，并且所选时间区间内**加速度恒定**时，规定 u 为初速度、v 为末速度、s 为相对该段起点的位移、t 为经过的时间：

$$v=u+at$$

速度—时间图为直线，其有符号梯形面积给出：

$$s=\frac{u+v}{2}t=ut+\frac12at^2$$

消去 t，可得另一常用关系：

$$v^2=u^2+2as$$

这些量必须对应同一时间段、同一正方向。平方会丢失 v 的符号，需要根据运动情境选取物理上适当的方向。对于一般曲线速度图，不能把两端速度的算术平均值当作平均速度。

**方法选择示范：**小车以 +4.0 m/s 运动，在 +12 m 的位移内保持 +2.0 m/s² 加速度。未给时间，可先消去它：

$$v^2=4.0^2+2\times2.0\times12=64,\qquad v=+8.0\,\mathrm{m\,s^{-1}}$$

取正号是因为加速度与初速度同向，过程中不会反向。核查可得经过 2.0 s，平均速度为 +6.0 m/s。

<h3 id="suvat-choice">选出可以使用恒加速度的区间</h3>

*自拟题。*

<!-- task:suvat-choice -->

A train moves at 12 m/s, accelerates uniformly to 20 m/s over 160 m, then travels at 20 m/s for 15 s. Determine the total time and distance. Explain why one nonzero acceleration cannot describe the whole journey.

<!-- /task:suvat-choice -->

<details markdown="1">
<summary>提示</summary>

用第一段的速度图求时间，再把该段末速度作为第二段速度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$t_1=\frac{2\times160}{12+20}=10\,\mathrm{s},\qquad a_1=\frac{20-12}{10}=0.80\,\mathrm{m\,s^{-2}}$$

第二段加速度为零，经过 300 m。总时间为 25 s，总路程为 460 m。若全程使用同一非零加速度，就会错误地预测第二段速度继续变化。

</details>

<h2 id="vertical-motion">转向改变速度，不改变重力方向</h2>

取向上为正。近地表自由飞行，忽略空气阻力，并把 g 视为常量：

$$a=-g,\qquad v=u-gt,\qquad s=ut-\frac12gt^2$$

上升与下降时，速度图都向下倾斜。位移图是曲线，在最高点切线水平。最高点为零的是 v，不是 a；下降时 v、a 都为负，因此速率增大。

碰撞结束了这一段自由飞行。弹跳球接触地面时速度快速改变，应单独画出短暂接触阶段，不能把自由飞行直线直接延伸穿过碰撞。两次接触之间斜率仍为 −g；离地速率不必等于碰撞前速率。

<h3 id="vertical-return">同一运动中为什么有两个时刻？</h3>

*自拟题。*

<!-- task:vertical-return -->

A ball leaves a hand vertically upwards at 14.7 m/s. Take g = 9.8 m/s² and ignore air resistance. Find its maximum rise, the times when it is 9.8 m above the release point, and its velocity at each of those times. Find the distance travelled by the time it returns to the release height, before being caught.

<!-- /task:vertical-return -->

<details markdown="1">
<summary>提示</summary>

最高点前后都沿用向上为正的约定。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$t_{\mathrm{top}}=\frac{14.7}{9.8}=1.50\,\mathrm{s},\qquad h=\frac{14.7^2}{2\times9.8}=11.025\,\mathrm{m}$$

到达给定高度时：

$$9.8=14.7t-4.9t^2,\qquad t^2-3t+2=0,\qquad t=1.0\,\mathrm{s}\ \text{or}\ 2.0\,\mathrm{s}$$

相应速度为 +4.9 m/s 和 −4.9 m/s，分别对应上升与下降。最大上升高度取 11.0 m；保留中间精度，返回用时 3.0 s，路程为 22.05 m（取 3 位有效数字为 22.1 m），位移却为零。两个正根属于同一次自由飞行，不代表发生弹跳。

</details>

<h2 id="exam-graph">从整幅图求平均值</h2>

下图**改编自 OxfordAQA International AS Physics 9630，PH01 June 2024 Q04.1**，已核对原图与配套评分标准。重绘图改变了时间、速度和运动起始时刻，因此答案不沿用原卷数值，也不套用原题分值。

<img src="/assets/img/physics-as-kinematics.svg" alt="Adapted idealised velocity–time graph. Time is in milliseconds and velocity in metres per second. Straight segments join (0,0), (4,3), (10,3), (12,0). The object moves in the positive direction from 0 to 12 ms." width="760" height="430">

<h3 id="exam-average">使用整幅图，而非只看端点</h3>

*改编题；具体题源见下方。*

<!-- task:exam-average -->

Determine the average speed during the 12 ms motion shown in the adapted graph. Explain why averaging the initial and final speeds does not work here. Sketch the corresponding acceleration–time graph, giving the values and units on each open interval.

<!-- /task:exam-average -->

<details markdown="1">
<summary>提示</summary>

面积和斜率计算都要把毫秒换为秒。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$d=\left(\frac12\times4\times3+6\times3+\frac12\times2\times3\right)10^{-3}=0.027\,\mathrm{m}$$

$$\text{average speed}=\frac{0.027}{0.012}=2.25\,\mathrm{m\,s^{-1}}$$

图像非负，因此面积同时给出路程和位移。初末速率都为零，但中间发生了运动；全程不是同一个恒加速度。三个开区间的加速度分别为：0–4 ms 内 +750 m/s²，4–10 ms 内零，10–12 ms 内 −1500 m/s²。理想折点不指定瞬时加速度，真实过渡会更平滑。

</details>

<h2 id="freefall-practical">RP1：从图像测定 g</h2>

不施加初速度，释放一颗紧凑小球。电子释放器与碰撞传感器可分别在释放、下落结束时触发计时。下落距离 s 应对应球上同一参考点在两个触发事件时的位置，要考虑球的尺寸与传感器几何。选取多个安全高度，重复计时并记录离散，保持释放与传感装置一致。

忽略阻力、从静止释放且计时同步时：

$$s=\frac12gt^2$$

纵轴画 s、横轴画 t²。直线斜率单位为 m/s²，等于 g 的一半。根据数据拟合；无法解释的截距需要调查，不能靠强制过原点掩盖。

**构造记录：**t 表示各高度多次计时的平均值。数据经教学理想化，并非完成了实体实验的证据。

<!-- record:freefall-record -->

| Mean t / s | t² / s² | s / m |
| --- | --- | --- |
| 0.200 | 0.0400 | 0.196 |
| 0.250 | 0.0625 | 0.306 |
| 0.300 | 0.0900 | 0.441 |
| 0.350 | 0.1225 | 0.600 |
| 0.400 | 0.1600 | 0.784 |

<!-- /record:freefall-record -->

<img src="/assets/img/physics-as-freefall.svg" alt="Constructed freefall graph with squared time in seconds squared horizontally and distance in metres vertically. Five supplied records are plotted with a straight model line; the gradient and value of g are left for the student to determine." width="760" height="430">

<h3 id="freefall-analysis">选择图像，诊断偏差</h3>

*自拟题。*

<!-- task:freefall-analysis -->

Use widely separated points on the fitted freefall line to estimate g, including units. A second apparatus starts its timer 0.020 s after release but stops it at impact. Predict the bias in g if s is divided by half the square of that recorded time. Would repeat readings alone remove the bias? Propose a check and a safety precaution.

<!-- /task:freefall-analysis -->

<details markdown="1">
<summary>提示</summary>

计时延迟开始会缩短记录时间，却不会缩短实际下落距离。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\text{gradient}=\frac{0.784-0.196}{0.1600-0.0400}=4.90\,\mathrm{m\,s^{-2}},\qquad g=2\times4.90=9.80\,\mathrm{m\,s^{-2}}$$

记录时间偏短，因此该计算高估 g。真实下落 0.200 s、距离 0.196 m 时，延迟计时器只记录 0.180 s，将得到约 12.1 m/s²。固定计时延迟不一定在时间平方图中造成简单的固定截距。可用独立计时方法或已知电子触发检查同步，并观察不同高度的偏差规律。重复读数不会消除延迟。固定装置，用托盘接球、让脚避开落点，并避免不必要的大高度。

</details>

<h2 id="independent-practice">独立选择方法</h2>

<h3 id="practice-sensor">反推未测到的起点速度</h3>

*自拟题。*

<!-- task:practice-sensor -->

A trolley passes sensor A, then sensor B 18 m farther along the same straight track. It reaches B 3.0 s later at +9.0 m/s. Acceleration is constant between the sensors. Find its velocity at A and its acceleration. Explain what would fail if only the final velocity were known and constant acceleration had not been established.

<!-- /task:practice-sensor -->

<details markdown="1">
<summary>提示</summary>

位移对应经过两个传感器时刻之间的速度图面积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$18=\frac{u+9.0}{2}\times3.0,\qquad u=+3.0\,\mathrm{m\,s^{-1}},\qquad a=\frac{9.0-3.0}{3.0}=+2.0\,\mathrm{m\,s^{-2}}$$

本段为恒加速度且初末速度都为正，期间不发生转向。若不满足恒加速度条件，梯形面积未必等于真实面积；多种曲线速度过程可具有相同末速度、不同初速度，需要额外模型或运动数据。

</details>

<h2 id="diagnose-and-retry">重新计算前，先检查符号和时间段</h2>

| 错误 | 修正 |
| --- | --- |
| 速度为零即加速度为零 | 检查仍然存在的相互作用与速度图斜率。 |
| 负加速度必然减速 | 比较速度和加速度的符号。 |
| 初末速率总能直接求平均 | 先检查速度图是否为直线。 |
| 速度图面积总是路程 | 在零轴处拆分，区分有符号面积。 |
| 同一方程能覆盖碰撞 | 分开自由飞行与接触阶段。 |

<h3 id="retry-turning">重试：初速度改为负值</h3>

*自拟题。*

<!-- task:retry-turning -->

Take east as positive. An object starts at the origin with velocity −6.0 m/s and constant acceleration +2.0 m/s² for 5.0 s. Find when it changes direction, its final displacement, distance travelled and final speed. Sketch a velocity–time graph to check all four answers.

<!-- /task:retry-turning -->

<details markdown="1">
<summary>提示</summary>

速度过零处把图分成符号相反的两块三角形面积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$v=-6+2t,\qquad t_{\mathrm{turn}}=3.0\,\mathrm{s},\qquad s=-6\times5+\frac12\times2\times5^2=-5.0\,\mathrm{m}$$

速度图连接 (0,−6) 与 (5,+4)，在 3 s 过零。先向西走 9 m，再向东走 4 m，路程 13 m、位移 −5.0 m。末速度为 +4.0 m/s，末速率为 4.0 m/s。正加速度先使速率减小，转向后又使速率增大。

</details>

<h2 id="sources-and-next">范围与下一步</h2>

范围：OxfordAQA International AS Physics 9630，PH01 的 3.2.3 与 Required practical 1。图像任务参考 PH01 June 2024 Q04.1 及配套评分标准，修改后的图明确标为改编。其他任务及自由落体记录为自拟或构造材料，不套用官方分值，也不声称已完成实体实验。范围依据为[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)。

[上一课：向量与力矩](/zh/alevel/as-physics/vectors-and-moments/) · [返回 AS 物理](/zh/alevel/as-physics/) · [下一课：抛体运动](/zh/alevel/as-physics/projectile-motion/)。后续动力学仍需继续制作学习页。
