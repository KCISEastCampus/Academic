---
title: 运动与运动图像
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
lang: zh-CN
translation_of: /igcse/physics/motion-and-graphs/
permalink: /zh/igcse/physics/motion-and-graphs/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">同一次运动，为何有两种平均值？</h2>

**走了很远，却几乎回到原处，应该怎样描述这次运动？** 把实际行程、位置记录和速度图联系起来。

- **学习：**先明确[位置与方向](#position-and-direction)，再[读位置记录](#position-records)。
- **探究：**用[速度图](#velocity-and-acceleration)区分减速与反向。
- **独立检查：**关闭解答完成[练习](#independent-practice)。

**开始前：**会使用正负数、坐标、直线斜率和矩形／三角形面积。所有运动沿同一直线，未说明时取向东为正。

本页任务均为自拟题；表格和图像均为构造教学记录，不是已完成实验的实测数据。

<h3 id="first-judgement">先判断：究竟改变了什么？</h3>

*自拟题。*

<!-- task:first-judgement -->
A student walks 12 m east, then 5 m west along the same straight path. Has the distance travelled got smaller during the second part? Is the final change in position equal to the total distance travelled? Explain without using a speed formula.
<!-- /task:first-judgement -->

<details markdown="1">
<summary>提示</summary>

把走过的整条路径与起点、终点的位置分开记录。

</details>

<details markdown="1">
<summary>解答与检查</summary>

路程继续增加：$D=12+5=17\,\mathrm{m}$。位置变化为 $s=12-5=+7\,\mathrm{m}$，即向东 7 m。向西走会减小向东的位置坐标，不会抹去已经走过的路程。

</details>

<h2 id="position-and-direction">先定义物理量，再计算</h2>

先选定固定原点和正方向。位置 $x$ 描述物体相对原点在哪里；位移 $s$ 是带正负号的位置变化；路程 $D$ 是走过的总路径长度，不会为负。

$$s=x_{\mathrm{final}}-x_{\mathrm{initial}}$$

$$\text{average velocity}=\frac{s}{\Delta t},\qquad \text{average speed}=\frac{D}{\Delta t}$$

两种平均量都使用完整经过的时间，包括停留时间。速度（velocity）包含方向；速率（speed）是速度的大小。写清 $\mathrm{m\,s^{-1}}$ 等单位，并根据选定正方向解释负号。

**先看纵轴表示什么。** 累计路程图不会下降；物体朝坐标减小方向运动时，位置图可以下降。“距某固定点的距离”又是另一种量，也可能减小。下一幅图使用带正负号的位置，不是累计路程。

位置—时间图的斜率表示速度，斜率的绝对值表示速率。水平段表示位置不变。曲线在某点的切线斜率表示该时刻的速度；连接某段起终点得到的是该段平均速度。

<h2 id="position-records">把位置记录转成速度描述</h2>

下表是小车运动的理想化记录，假设相邻记录点之间速度恒定。

<!-- task:position-record -->

| Time $t$ / s | 0 | 2 | 5 | 9 |
| --- | --- | --- | --- | --- |
| Position $x$ / m | 0 | 6 | 6 | −2 |

<!-- /task:position-record -->

<img src="/assets/img/physics-ig-position.svg" alt="构造的位置—时间图，用直线依次连接 0 秒时 0 米、2 秒时 6 米、5 秒时 6 米和 9 秒时负 2 米四个记录点。" width="760" height="430">

**先示范第一段。** 两个坐标都取变化量：

$$v=\frac{6-0}{2-0}=+3\,\mathrm{m\,s^{-1}}$$

正号表示向东。只读纵坐标的高度，会把位置误当作速度。处理后面的某一段时，直接用最终位置除以最终时刻，会把计算区间选错。

<h3 id="complete-the-motion">接着完成整段运动</h3>

*自拟题。*

<!-- task:complete-the-motion -->
For the position record above:

1. Find the velocity in each of the remaining two intervals and draw the complete velocity–time graph.
2. Find the total distance and displacement over 9 s.
3. Calculate the average speed and average velocity over the complete record. Explain why their magnitudes differ.
<!-- /task:complete-the-motion -->

<details markdown="1">
<summary>提示</summary>

各段分别取起点和终点。路程累加每段路径长度；位移只看全程起终点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

另外两段的速度为：

$$v_{2\text{–}5}=\frac{6-6}{5-2}=0,\qquad v_{5\text{–}9}=\frac{-2-6}{9-5}=-2\,\mathrm{m\,s^{-1}}.$$

三个区间分别画在 $+3$、$0$ 和 $-2\,\mathrm{m\,s^{-1}}$ 的水平线段。连接处的瞬时变化是对短暂过渡过程的理想化。

$$D=6+0+8=14\,\mathrm{m},\qquad s=-2\,\mathrm{m}$$

$$\text{average speed}=\frac{14}{9}=1.56\,\mathrm{m\,s^{-1}},\qquad \text{average velocity}=\frac{-2}{9}=-0.222\,\mathrm{m\,s^{-1}}$$

返回过程增加路程，却抵消部分位移；停留时间仍进入两个平均量的分母。检查位置不变的区间是否对应零速度。

</details>

<h2 id="velocity-and-acceleration">速度图下降，不一定始终在减速</h2>

加速度（acceleration）是速度的变化率：

$$a=\frac{\Delta v}{\Delta t}$$

速度—时间图的斜率表示加速度，有符号面积表示位移；求路程时，时间轴两侧面积都取正值再相加。可以把面积理解为很多小时间段内“速度乘以持续时间”的累加。

<img src="/assets/img/physics-ig-velocity.svg" alt="构造的速度—时间图：直线从 0 秒时正 4 米每秒，经过 4 秒时零速度，延伸到 8 秒时负 4 米每秒。" width="760" height="430">

**先解释前 4 秒。** 速度为正但逐渐降至零，因此速率减小。加速度为：

$$a=\frac{0-4}{4-0}=-1\,\mathrm{m\,s^{-2}}.$$

第一个三角形的面积表示位移：

$$s_{0\text{–}4}=\frac12\times4\times4=+8\,\mathrm{m}.$$

这幅图记录速度随时间的变化，不是小车的空间轨迹或山坡形状。速度图的水平段表示速度不变，只有位于零速度处才表示静止。

<h3 id="crossing-zero">越过零速度后会怎样？</h3>

*自拟题。*

<!-- task:crossing-zero -->
Use the velocity graph above.

1. Describe the direction and change in speed between 4 s and 8 s. Has the acceleration changed sign?
2. Find displacement and distance for the whole 8 s.
3. A student says: “Negative acceleration always means slowing down.” Use the graph to correct this claim.
<!-- /task:crossing-zero -->

<details markdown="1">
<summary>提示</summary>

比较速度与加速度的方向，不能只看加速度是否为负。先分别处理两个三角形。

</details>

<details markdown="1">
<summary>解答与检查</summary>

4 秒后速度为负、绝对值增大，因此物体向西运动且速率增加。加速度仍为 $-1\,\mathrm{m\,s^{-2}}$。

$$s=8-8=0\,\mathrm{m},\qquad D=8+8=16\,\mathrm{m}$$

物体走过 16 m 后回到起点。速度与加速度异号时速率减小，同号时速率增大；某一瞬间速度为零，不表示加速度也为零，更不表示会持续停留。

</details>

<h2 id="independent-practice">独立选择表征与方法</h2>

先关闭解答。下列任务改变给定条件或要求评价判断，需要你自己选择物理量和图像。

<h3 id="practice-return">有停留的往返运动</h3>

*自拟题。*

<!-- task:practice-return -->
A cyclist travels 60 m east in 10 s, then 40 m west in 10 s, and waits for 5 s. Motion during each travelling stage is uniform.

Find the average speed and average velocity for all 25 s. Sketch a position–time graph starting at the origin, and explain how its final coordinate differs from total distance.
<!-- /task:practice-return -->

<details markdown="1">
<summary>提示</summary>

计入等待时间；两个运动阶段的斜率符号不同，最后才是水平停留段。

</details>

<details markdown="1">
<summary>解答与检查</summary>

路程为 100 m，位移为向东 20 m。

$$\text{average speed}=\frac{100}{25}=4.0\,\mathrm{m\,s^{-1}},\qquad \text{average velocity}=\frac{20}{25}=+0.80\,\mathrm{m\,s^{-1}}$$

位置图依次连接 $(0,0)$、$(10,60)$、$(20,20)$ 和 $(25,20)$；时间用秒，位置用米。最终位置是 20 m，不是 100 m。最后 5 秒没有新增路程或位移，却使全程平均量减小。

</details>

<h3 id="practice-design">从描述建立图像</h3>

*自拟题。*

<!-- task:practice-design -->
A trolley starts from rest, accelerates uniformly at 2.0 m s⁻² for 3.0 s, travels at constant velocity for 2.0 s, then slows uniformly to rest over 3.0 s without reversing.

Draw a labelled velocity–time graph and determine the total distance. Is the trolley stationary during the interval of zero acceleration? Explain.
<!-- /task:practice-design -->

<details markdown="1">
<summary>提示</summary>

先确定各段连接处的速度；全程分成三个面积区域，图线不会越过零速度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

连接处速度为 $v=2.0\times3.0=6.0\,\mathrm{m\,s^{-1}}$。图线依次连接 $(0,0)$、$(3,6)$、$(5,6)$ 和 $(8,0)$。

$$D=\frac12(3)(6)+(2)(6)+\frac12(3)(6)=30\,\mathrm{m}$$

水平段的速度为 $6.0\,\mathrm{m\,s^{-1}}$，因此物体仍在运动，只是加速度为零。总路程为正，首尾两个三角形面积相等，尽管加速度符号不同。

</details>

<h3 id="practice-evidence">三个读数究竟能说明什么？</h3>

*自拟题。*

<!-- task:practice-evidence -->
A tracker records position 0 m at 0 s, 8 m at 4 s and 0 m at 8 s. Nothing is known about motion between readings. A student concludes that the object's speed never exceeded 2 m s⁻¹.

Is this conclusion justified? State what can be calculated and describe a different possible motion that gives the same readings.
<!-- /task:practice-evidence -->

<details markdown="1">
<summary>提示</summary>

区间平均值不能确定区间内所有瞬时值。题目没有给出匀速条件，不应自行补上。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两个区间的平均速度分别为 $+2\,\mathrm{m\,s^{-1}}$ 和 $-2\,\mathrm{m\,s^{-1}}$，它们不能给出速率上限。

物体可以在每段的一部分时间内停留，在其余时间以更大速率运动，并经历短暂加减速；也可能存在额外往返。全程位移为零，但总路程和瞬时速率需要更多信息。最小可能路程是 16 m，这个下限仍不能确定最大速率。

</details>

<h2 id="diagnose-and-retry">找到错误原因，再试一次</h2>

| 如果你的答案是…… | 回去检查什么？ |
| --- | --- |
| 位置图的高度就是速率 | 应读[斜率](#position-records)，不是纵坐标。 |
| 速度图水平就表示静止 | 检查[速度是否为零](#velocity-and-acceleration)。 |
| 回到起点，所以路程为零 | 分清[有符号位移与路径长度](#position-and-direction)。 |
| 加速度为负一定在减速 | 比较[速度与加速度的符号](#crossing-zero)。 |

<h3 id="retry-average">不看前面的步骤，再判断</h3>

*自拟题。*

<!-- task:retry-average -->
A walker goes 8 m east and 8 m west in a total of 8 s. Give both whole-journey averages, then write one English sentence explaining why one is zero and the other is not.
<!-- /task:retry-average -->

<details markdown="1">
<summary>提示</summary>

先分别求路径长度与最终位置，再除以相同总时间。

</details>

<details markdown="1">
<summary>解答与检查</summary>

平均速率为 $2.0\,\mathrm{m\,s^{-1}}$；平均速度为 $0\,\mathrm{m\,s^{-1}}$。英文解释可写：“The walker returns to the starting position, so displacement is zero, but the distance travelled is 16 m.”

</details>

<h2 id="sources-and-next">范围与下一步</h2>

本课对应 OxfordAQA International GCSE Physics 9203 的 3.1.2，以及 3.1.3 中加速度和运动图像部分，不代表完整的力学单元。速度有负值时，明确区分有符号面积与路程。

范围以[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf)为准。例题、图像记录与反馈均为自拟，未设置官方分值。

[下一课：力与运动](/zh/igcse/physics/forces-and-motion/) · [返回 IGCSE 物理](/zh/igcse/physics/) · [查阅现有合力笔记](/zh/igcse/physics/#-13-resultant-forces)

