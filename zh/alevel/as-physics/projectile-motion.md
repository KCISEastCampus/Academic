---
title: 抛体运动
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/projectile-motion/
permalink: /zh/alevel/as-physics/projectile-motion/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">两个方向，共用一个时间</h2>

抛体运动把同一次飞行在两个方向上的描述联系起来。水平与竖直分运动共用一个时间，但通常不具有同一个加速度。

1. 建立[模型并分解初速度](#projectile-model)。
2. 联系[轨迹、记录与速度图](#representations)。
3. 完成[足球改编任务](#exam-football)，选择符合情境的时间。
4. 检查[阻力模型边界](#resistive-forces)，再做[独立练习](#independent-practice)。

**先修：**用[向量与力矩](/zh/alevel/as-physics/vectors-and-moments/)中的方法分解速度，调用[直线运动](/zh/alevel/as-physics/straight-line-motion/)中的符号约定与匀加速方程。每题按给定 g 计算。图中记录均为教学构造，不代表实体实验。足球任务标为改编，其余为自拟。

<h3 id="first-independence">先试一试：水平速度会延迟落地吗？</h3>

*自拟题。*

<!-- task:first-independence -->

Two small identical balls leave the same height simultaneously. One is released from rest; the other is projected horizontally. Ignore air resistance and assume a horizontal landing surface with no intervening obstacles. Which lands first? Explain using the vertical initial conditions, rather than the length of each path.

<!-- /task:first-independence -->

<details markdown="1">
<summary>提示</summary>

比较它们的初始竖直速度和竖直加速度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两球初始竖直速度都为零，下落距离和向下加速度相同，因此同时落地。水平射出的球虽然走过更长的曲线路径，但水平分运动不改变本无阻力模型中的竖直分运动。若初始有竖直推力、高度不同或阻力显著，就要重新判断。

</details>

<h2 id="projectile-model">先确定系统与坐标，再列方程</h2>

研究抛体离开手或发射器之后的运动，把它视为质点。采用固定地面坐标：x 水平向右，y 从发射位置竖直向上。匀强重力场、忽略空气阻力时，自由飞行阶段只受重力，不存在持续向前的“发射力”。

初速率为 u、方向与水平成 θ 角时：

$$u_x=u\cos\theta,\qquad u_y=u\sin\theta$$

$$a_x=0,\qquad a_y=-g$$

分别在两个方向应用直线运动方程，但共用同一个经过时间 t：

$$x=u_xt,\qquad y=u_yt-\frac12gt^2$$

$$v_x=u_x,\qquad v_y=u_y-gt$$

速率为速度向量的大小：

$$v=\sqrt{v_x^2+v_y^2}$$

最高点只有竖直速度为零。对水平速度非零的斜抛，球仍沿水平方向运动，并始终向下加速。轨迹切线沿速度方向，加速度通常不沿该切线。

<div class="worked-example" markdown="1">

**水平射出示范。**质点以 6.0 m/s 离开水平边缘，落地平面低于起点 4.905 m。取 g = 9.81 m/s²，忽略阻力。水平射出表示初始竖直速度为零，并非重力为零：

$$-4.905=-\frac12\times9.81t^2,\qquad t=1.00\,\mathrm{s},\qquad x=6.0\times1.00=6.0\,\mathrm{m}$$

飞行从释放时开始，因此舍去负时间根。落地时速度分量为 +6.0 m/s、−9.81 m/s。竖直分量来自下落，水平分量则不变。同一高度下增大水平发射速度，会增加 x，而不改变这一落地时间。

</div>

<h3 id="horizontal-transfer">改变给定量与求问方向</h3>

*自拟题。*

<!-- task:horizontal-transfer -->

A particle is projected horizontally and lands 16.0 m away on a plane 19.62 m below the launch position. Use g = 9.81 m/s² and neglect air resistance. Find the flight time, initial speed and vertical velocity just before landing. Sketch the velocity and acceleration arrows at that instant.

<!-- /task:horizontal-transfer -->

<details markdown="1">
<summary>提示</summary>

先用竖直下落确定时间，再由水平距离反推初速度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$t=\sqrt{\frac{2\times19.62}{9.81}}=2.00\,\mathrm{s},\qquad u_x=\frac{16.0}{2.00}=8.00\,\mathrm{m\,s^{-1}}$$

竖直速度为 −19.62 m/s（取三位有效数字为 −19.6 m/s）。速度沿轨迹切线指向右下方；加速度竖直向下，没有水平分量。初始竖直分量为零，因此初速率就是水平分量的大小。

</details>

<h2 id="representations">把同一次飞行读成轨迹与分量图</h2>

**理想化构造记录：**质点初速度分量为水平向右 8.0 m/s、竖直向上 6.0 m/s。本任务取 g = 10 m/s²，忽略阻力，运动到返回同高水平面时结束。每个时间标签对应同一时刻的 x、y，而非两个独立计时器。

<!-- record:projectile-record -->

| t / s | x / m | y / m |
| --- | --- | --- |
| 0.0 | 0.0 | 0.00 |
| 0.3 | 2.4 | 1.35 |
| 0.6 | 4.8 | 1.80 |
| 0.9 | 7.2 | 1.35 |
| 1.2 | 9.6 | 0.00 |

<!-- /record:projectile-record -->

<img src="/assets/img/physics-as-projectile-path.svg" alt="无阻力构造轨迹：初始水平分量 8 m/s、竖直向上 6 m/s，g = 10 m/s²；0、0.3、0.6、0.9、1.2 s 标记与给定 x、y 记录对应，发射平面为 y=0；未给出待作答速度图。" width="760" height="430">

<h3 id="component-graphs">根据模型建立速度分量图</h3>

*自拟题。*

<!-- task:component-graphs -->

Using the constructed record, sketch v_x–time and v_y–time graphs for 0 to 1.2 s. Determine the velocity vector and speed at 0.6 s. Explain why equally spaced horizontal markers do not imply constant speed along the curved path. Describe the acceleration–time graphs.

<!-- /task:component-graphs -->

<details markdown="1">
<summary>提示</summary>

分别考察两个坐标如何变化，或在两个方向应用速度方程。

</details>

<details markdown="1">
<summary>解答与检查</summary>

水平速度图为 +8.0 m/s 的水平直线；竖直速度图从 +6.0 m/s 线性降到 −6.0 m/s，在 0.6 s 过零。此时速度水平向右，为 +8.0 m/s，速率为 8.0 m/s；加速度仍向下。

<img src="/assets/img/physics-as-projectile-components.svg" alt="构造飞行的解答图：水平速度恒为 +8 m/s；竖直速度在 1.2 s 内从 +6 线性减至 −6 m/s，0.6 s 为零。文字标签区分两分量，不只靠颜色。" width="760" height="430">

相同时间内水平距离相等，只说明水平速度恒定。竖直分量变化，因此总速率在接近最高点时减小、过最高点后增大。加速度分量图分别是零与 −10 m/s² 的水平线。速度图面积给出水平位移 +9.6 m，竖直净位移为零。

</details>

<h3 id="quadratic-recovery">代数先修：保留物理时间</h3>

目标事件可能给出 at² + bt + c = 0。a ≠ 0 时 $t=(-b\pm\sqrt{b^2-4ac})/(2a)$；先检查实根存在，再用 t ≥ 0、上升／下降、着地前等条件选根。平方根里的判别式为负说明所给模型下达不到该事件。这里不需要微积分。


<h2 id="exam-football">选择物理事件，而非只解二次方程</h2>

**改编自 OxfordAQA International AS Physics 9630，PH01 June 2024 Q08.1–08.6，已核对原图与配套评分标准。**这里将足球明确视为从 y = 0 发出的质点，横梁简化为 y = 2.56 m 的水平目标，在下降时到达。任务合并并重述原题，不套用官方分值。初速率取 15 m/s、与水平成 38°，g = 9.81 m/s²；除明确重新讨论外，忽略空气阻力。

<h3 id="exam-apex">展示最高点结论的推理</h3>

*改编题；本节已标明题源。*

<!-- task:exam-apex -->

For the adapted football model, determine the initial horizontal and vertical velocity components. Show that the maximum height gained is approximately 4.3 m and the time to reach it approximately 0.94 s. State the velocity and acceleration directions at that point.

<!-- /task:exam-apex -->

<details markdown="1">
<summary>提示</summary>

最高点取竖直速度为零，不要把整个速度向量取零。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$u_x=15\cos38^\circ=11.820\ldots\,\mathrm{m\,s^{-1}},\qquad u_y=15\sin38^\circ=9.2349\ldots\,\mathrm{m\,s^{-1}}$$

$$0=u_y^2-2gh,\qquad h=\frac{u_y^2}{2g}=4.3467\ldots\,\mathrm{m}$$

$$0=u_y-gt_{\mathrm{top}},\qquad t_{\mathrm{top}}=\frac{u_y}{g}=0.9414\ldots\,\mathrm{s}$$

这些步骤给出近似结论的依据，而非只重复结论。最高点速度仍水平向右，加速度竖直向下。配套评分标准使用已舍入的 9.2 m/s 竖直分量，示范值为 4.31 m、0.937 s；保留原三角函数值解释了这里的小数差异。

</details>

<h3 id="exam-target">为什么两个时间根都为正？</h3>

*改编题；本节已标明题源。*

<!-- task:exam-target -->

In the same adapted model, find both times when the particle is at y = 2.56 m. Identify the time at which it reaches the crossbar on descent and calculate the horizontal distance to the crossbar. Use vertical velocity to justify the root choice. Explain why the same-height range formula cannot be substituted directly.

<!-- /task:exam-target -->

<details markdown="1">
<summary>提示</summary>

低于最高点的同一高度，可在上升与下降时各经过一次。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2.56=u_yt-\frac12gt^2,\qquad t=\frac{u_y\pm\sqrt{u_y^2-2g(2.56)}}{g}$$

两根约为 0.338 s、1.545 s。相应竖直速度约为 +5.92 m/s、−5.92 m/s，因此后一个时刻才是题目要求的下降时到达事件。

$$d=u_xt_{\mathrm{descending}}=18.26\ldots\,\mathrm{m}\approx18\,\mathrm{m}$$

另一个根不是代数错误，而是在不同阶段经过同一高度。目标高于起点，若把竖直净位移取为零，会求出错误事件。配套评分标准的舍入计算给出约 1.54 s、18 m。

</details>

<h2 id="resistive-forces">空气不可忽略时，哪些模型需要改变？</h2>

**阻力（drag）**反对物体相对流体的速度方向。静止空气中，上升抛体的阻力指向后下方；仍向前运动的下降抛体，其阻力同时有向后和向上的分量。阻力一般随相对速率增大而增大。此时水平速度不再恒定，竖直加速度也不能简单取恒定的 −g。

比较相同发射条件、静止空气且只增加普通阻力的情形，最大高度降低，轨迹也不再是无阻力模型中的对称抛物线。原来能到达的目标可能被错过。不能只把水平速度减小，却保留原飞行时间，因为竖直运动同样发生了变化。

**升力（lift）**垂直于相对气流方向；具体方向取决于气流与物体姿态，不一定竖直向上。若升力显著，仅受重力的抛体模型同样失效。本课不额外要求升力或阻力的定量公式。

接触表面之间的**摩擦力（friction）**反对相对滑动或滑动趋势。地面对驱动车辆的摩擦力可以向前，而空气阻力向后，应区分研究对象及相互作用。本课不把静摩擦／动摩擦区别引入为额外考试要求。

无升力的下落物体，阻力可增大到与重力平衡，此时达到**终端速率（terminal speed）**，加速度为零而速度非零。车辆在水平路面保持极限稳态速率时，驱动力与空气阻力及其他阻力平衡。在可用驱动力相同、其他阻力不变的比较中，流线型降低给定速率下的空气阻力，可提高极限速率。实际驱动力可能随速率改变，因此“最高速率”来自相互作用平衡，不是所有力消失。

<h3 id="force-model-check">解释“加速度为 −g”的三个边界</h3>

*自拟题。*

<!-- task:force-model-check -->

Explain (a) why the no-drag football trajectory cannot simply be reused after appreciable air resistance is introduced, (b) how an object can fall at constant nonzero terminal speed, and (c) why a streamlined vehicle may have a higher steady maximum speed when the available driving force is unchanged. State an assumption for each comparison.

<!-- /task:force-model-check -->

<details markdown="1">
<summary>提示</summary>

逐一判断哪些力发生改变，哪些力达到平衡。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) 静止空气中的阻力具有水平、竖直分量，会同时改变飞行时间与水平运动；普通阻力、无升力时，最大高度降低。(b) 无升力的竖直下降中，向上阻力平衡重力，合力和加速度为零，原有速度仍可保持。(c) 在水平路面、其他阻力不变时，同样驱动力下，原速率处的空气阻力减小，出现向前合力；速率可升高，直到阻力再次平衡驱动力。终端或极限速率处不需要阻力为零。

</details>

<h2 id="independent-practice">独立求解新的运动事件</h2>

<h3 id="practice-ledge">落点低于起点</h3>

*自拟题。*

<!-- task:practice-ledge -->

A particle leaves a ledge 5.0 m above level ground with velocity components 8.0 m/s horizontally and 6.0 m/s upwards. Use g = 10 m/s² and neglect air resistance. Determine the time to hit the ground, horizontal distance travelled and vertical velocity just before impact. Sketch the velocity direction. Explain why taking twice the time to the apex gives the wrong landing time.

<!-- /task:practice-ledge -->

<details markdown="1">
<summary>提示</summary>

以发射点为原点，落地事件的竖直位移是 −5.0 m。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$-5.0=6.0t-5.0t^2,\qquad t=\frac{6+\sqrt{136}}{10}=1.766\ldots\,\mathrm{s}$$

另一个根为负，属于发射前。水平距离为 14.13… m，竖直速度为 −11.66… m/s，取两位有效数字约为 14 m、−12 m/s。速度指向右下方。到最高点时间的两倍为 1.2 s，那是返回发射高度的时刻；地面更低，因此之后还要继续下落。

</details>

<h2 id="same-height-range">有用公式也有明确落地条件</h2>

只有落地平面与发射点同高、无阻力模型成立且向上发射时，才可取竖直方程的非零根，得到：

$$T=\frac{2u\sin\theta}{g},\qquad R=(u\cos\theta)T=\frac{u^2\sin2\theta}{g}$$

这来自两个分运动方程的联系，不能覆盖题目给定的其他目标高度。在这些条件下，同一初速率以 45° 发射时射程最大，因为正弦因子不能超过一。起落高度不同、升力或空气阻力都可能改变这一结论。

<h2 id="diagnose-and-retry">检查方向、时间与目标平面</h2>

| 错误 | 修正 |
| --- | --- |
| 无阻力模型中重力使水平运动减速 | 把加速度分解到所选坐标轴。 |
| 最高点整个速度为零 | 只把竖直分量取为零。 |
| 两个正时间根代表相同事件 | 结合上升／下降及目标位置判断。 |
| 总能把上升时间乘二得到落地时间 | 先检查落地高度。 |
| 阻力只改变水平运动 | 重新检查完整受力与运动模型。 |

<h3 id="retry-two-angles">重试：相同射程，不同飞行过程</h3>

*自拟题。*

<!-- task:retry-two-angles -->

Two particles are launched from the same level ground with the same speed 20 m/s, one at 30° and one at 60° above horizontal. Use g = 10 m/s², neglect air resistance and assume each lands back on the same level. Compare their ranges, flight times and maximum heights. Explain why equal range does not mean identical velocity throughout the flight.

<!-- /task:retry-two-angles -->

<details markdown="1">
<summary>提示</summary>

两次发射在水平与竖直分量之间作出了不同分配。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$R_{30}=R_{60}=\frac{20^2\sin60^\circ}{10}=34.64\ldots\,\mathrm{m}$$

飞行时间分别为 2.00 s、3.464… s，最大高度为 5.00 m、15.0 m。60° 发射的水平速度较小，但飞行时间更长；30° 发射的水平速度较大，但时间较短，因此水平距离相同。它们的初速度向量、竖直速度和轨迹均不同。结论依赖题目给定的同高、无阻力条件。

</details>

<h2 id="friction-and-lift-check">按相互作用选方向</h2>

<div class="lesson-check" markdown="1">
<!-- task:friction-lift-task -->
A car moves right at steady speed on a level road in still air. Its powered wheels drive it forwards. Show road-friction direction on those driven wheels and air-drag direction on the car; name each interaction partner. A wing moves down and right through still air. Sketch a possible lift direction perpendicular to its relative motion with an upward component. Explain which weight-only projectile assumptions fail if this lift is appreciable.
<!-- /task:friction-lift-task -->
<details markdown="1"><summary>提示</summary>
摩擦由轮与路接触决定；升力垂直于相对运动。
</details>
<details markdown="1"><summary>解答与修复</summary>
驱动轮所受道路摩擦向前（右），空气阻力向后（左），相互作用对象分别为道路和空气。右下运动的翼，符合要求的升力指右上。显著升力改变合力，a_x = 0 和 a_y = −g 一般都不能保留。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:retry-friction-lift -->
Retry: the car is braking while still moving right. Give the road-friction direction on its braking wheels. A wing now moves horizontally right through still air: give the lift direction with an upward component. Explain why neither friction nor lift should automatically be drawn opposite the object's full velocity.
<!-- /task:retry-friction-lift -->
<details markdown="1"><summary>提示</summary>
仍向右运动不代表摩擦一定向右。
</details>
<details markdown="1"><summary>解答与修复</summary>
制动轮所受道路摩擦向后（左）；水平右行翼的所述升力向上。摩擦的方向取决于接触相对滑动趋势，不由物体整体速度单独决定；升力垂直于相对空气运动，不与它反向。
</details>
</div>
<h2 id="sources-and-next">范围与下一步</h2>

范围：OxfordAQA International AS Physics 9630，PH01 的 3.2.4，包含匀强重力场中的独立分运动，以及摩擦、升力、阻力、终端速率和车辆极限速率的定性理解。足球任务改编自 PH01 June 2024 Q08.1–08.6，已核对配套评分标准。受力模型任务通过自拟情境扩展相关概念，其他任务与记录均为自拟，不套用虚构官方分值。范围依据[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)。

[上一课：直线运动](/zh/alevel/as-physics/straight-line-motion/) · [下一课：牛顿定律](/zh/alevel/as-physics/newtons-laws/) · [返回 AS 物理](/zh/alevel/as-physics/)。
