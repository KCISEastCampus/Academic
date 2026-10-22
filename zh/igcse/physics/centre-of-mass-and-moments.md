---
title: 质心、稳定性与力矩
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
lang: zh-CN
translation_of: /igcse/physics/centre-of-mass-and-moments/
permalink: /zh/igcse/physics/centre-of-mass-and-moments/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">为什么很小的变化就能让物体倾倒？</h2>

解释平衡，不仅要知道有哪些力，还要知道质量如何分布、力的作用线经过哪里，以及物体怎样受到支承。

1. 认识[质心](#centre-of-mass)，设计[悬挂实验](#suspension-method)。
2. 选择[垂直力臂](#moments)，检验[杠杆平衡](#levers)。
3. 解释[稳定性与倾倒](#stability)。
4. 完成[独立练习](#independent-practice)，再[诊断与重试](#diagnose-and-retry)。

**先修：**[力与运动](/zh/igcse/physics/forces-and-motion/)中的力和重量；上一课[弹簧](/zh/igcse/physics/springs-and-hookes-law/)练习了检查模型适用范围。本课假定物体为刚体、重力场均匀。图和记录均为教学构造；除明确标注的样卷改编外，任务均为自拟。

<h3 id="first-judgement">先试一试：一定在正中间吗？</h3>

*自拟题。*

<!-- task:first-judgement -->

A uniform rectangular card has a small metal washer attached near its right edge. A student says its centre of mass must still be the geometric centre because the outline is a rectangle. Evaluate the claim without calculating a new position.

<!-- /task:first-judgement -->

<details markdown="1">
<summary>提示</summary>

变化的是轮廓，还是质量分布？

</details>

<details markdown="1">
<summary>解答与检查</summary>

垫圈使质心向右移。利用对称性判断质心，需要质量分布对称，而非只看外轮廓对称。新位置取决于卡片、垫圈的质量及其位置。

</details>

<h2 id="centre-of-mass">用一条重力作用线描述分布的重量</h2>

**质心（centre of mass）**是描述物体整体运动时，可把质量视为集中于其中的一点。在均匀重力场中，合重力沿经过质心的竖直线向下作用。

均匀矩形的质心在对角线交点，均匀圆盘的质心在圆心。只有质量分布具有相应对称性时，对称轴才限制质心位置。质心也可以处在物体之外，例如均匀圆环中心的空处。

物体自由悬挂并静止时，质心位于**悬挂点正下方**。若重力作用线不经过悬挂点，重力就产生转动作用。质心在支点下方时，微小偏转会产生恢复趋势，物体可在此稳定下来。

<h2 id="suspension-method">寻找不规则薄板的质心</h2>

**薄板（lamina）**是厚度很小的板。用低摩擦销钉从边缘小孔悬挂薄板，再从同一支点悬挂铅垂线。等薄板与铅垂线都静止后，在板上标出竖直线。换到相隔较远的小孔重复，两条标线的交点就是质心位置；第三次悬挂用于一致性检查。

每次悬挂时薄板的朝向会改变。应在**当次悬挂状态下**描出竖直线，再在同一块板上比较各条标线。不能只在一张不动的轮廓图上，经过不同孔画两条平行竖线。避免薄板与支架摩擦，正对观察，画细线；标线夹角过小会放大交点的不确定性。

固定支架，遮住尖锐销钉，铅垂物下方避开脚。完成网页方案任务不代表已完成实体实验。

<img src="/assets/img/physics-ig-lamina.svg" alt="Plan view of an irregular thin sheet before suspension, with two marked holes P and Q near different edges. No centre of mass or measured plumb-line traces have been marked; the outline is a schematic, not an experimental result." width="760" height="430">

<h3 id="plan-suspension">解释证据，而非只列仪器</h3>

*自拟题。*

<!-- task:plan-suspension -->

Use the lamina sketch to describe how you would locate its centre of mass. Explain why two suspension positions are needed and how a third helps. A student clamps the sheet so that it cannot rotate and draws a vertical below the clamp. Explain why this does not provide the required evidence.

<!-- /task:plan-suspension -->

<details markdown="1">
<summary>提示</summary>

使用“正下方”结论前，薄板必须能够发生什么运动？

</details>

<details markdown="1">
<summary>解答与检查</summary>

从 P 自由悬挂，静止后描铅垂线方向；从 Q 重复，再找两条板上标线的交点。一条线只能限制到一条可能位置线上，第三条线可检查有限线宽下的交点是否一致。夹紧会阻止转动，夹具还能提供力矩，质心未必处于夹具正下方，因此必须允许薄板自由转动。

</details>

<h2 id="moments">选定转轴与垂直距离</h2>

**力矩（moment）**描述力对选定转轴的转动作用：

$$M=Fd$$

F 为力的大小，单位 N；d 为**转轴到力的作用线的最短垂直距离**，单位 m。力矩单位为 N m，另行说明顺时针或逆时针。即使施力点离转轴很远，只要作用线经过转轴，力矩仍为零。

**模型示范：**25 N 的力竖直向下，作用点在转轴右方水平距离 0.40 m 处。竖直作用线到转轴的垂直距离就是 0.40 m：

$$M=25\times0.40=10\,\mathrm{N\,m}$$

转动方向为顺时针。支点力对该支点的力矩为零，但它可能是保持合力为零所必需的力。

<img src="/assets/img/physics-ig-moment-distance.svg" alt="A sloping rod goes from pivot O to an endpoint 0.80 m horizontally right and 0.60 m above O; rod length is 1.00 m. A 30 N force acts vertically down at the endpoint, with its vertical line of action shown. The dimensions are supplied data." width="760" height="430">

<h3 id="choose-distance">三个长度中，哪一个才是力臂？</h3>

*自拟题。*

<!-- task:choose-distance -->

For the sloping rod diagram, calculate the moment of the 30 N force about O and state its turning sense. Explain why using either 1.00 m or 0.60 m as the moment arm would be incorrect. No trigonometry is required.

<!-- /task:choose-distance -->

<details markdown="1">
<summary>提示</summary>

延长竖直作用线，从 O 向它作垂线。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$M=30\times0.80=24\,\mathrm{N\,m}$$

力矩为顺时针。竖直线的垂线沿水平方向，因此距离为 0.80 m。1.00 m 的杆长为斜线，0.60 m 则沿作用线平行方向，都不是所需的垂直力臂。

</details>

<h2 id="levers">平衡力矩后，再检查力</h2>

刚体静止时，绕同一支点的顺时针力矩与逆时针力矩相等，合力也必须为零：

$$\sum M_{\mathrm{clockwise}}=\sum M_{\mathrm{anticlockwise}}$$

简单杠杆的动力臂较长时，可以放大力：

$$F_{\mathrm{effort}}d_{\mathrm{effort}}=F_{\mathrm{load}}d_{\mathrm{load}}$$

较大的输出力不意味着产生额外能量。理想缓慢转动中，较长的动力臂会移动较大距离。若杠杆自重的作用线不经过支点，就必须计入它的力矩，不能因杆看起来很细就忽略。

**改编题源：**OxfordAQA International GCSE Physics 9203/1，Paper 1 Specimen material Q02.4–02.6，已核对原图及配套评分标准。下题明确模型假设，并增加支点力核查；用重量和所在侧识别两名儿童。

<h3 id="specimen-seesaw">先比较力矩，再判断转向</h3>

*改编题；本节已标明题源。*

<!-- task:specimen-seesaw -->

A horizontal see-saw has a 560 N child 1.7 m to the left of its pivot and a 420 N child 2.4 m to the right. Its own weight acts through the pivot; ignore pivot friction. Calculate the two moments and predict the initial turning direction when released from rest. With the 420 N child fixed, where must the 560 N child sit to balance it? If the board weighs 100 N, find the upward pivot force in the balanced state.

<!-- /task:specimen-seesaw -->

<details markdown="1">
<summary>提示</summary>

比较未舍入的力矩，重量较大不一定力矩较大。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$M_{\mathrm{left}}=560\times1.7=952\,\mathrm{N\,m},\qquad M_{\mathrm{right}}=420\times2.4=1008\,\mathrm{N\,m}$$

右侧初始向下，为顺时针。较重儿童的力臂较短，因此力矩反而较小。平衡时：

$$560d=420\times2.4,\qquad d=1.8\,\mathrm{m}$$

560 N 的儿童应位于支点左方 1.8 m。支点向上的力为 1080 N，平衡两名儿童与木板的总重量。木板重力经过支点，本题不产生力矩。配套评分标准把 952 N m 取为 950 N m；判断转向前应比较未舍入值。

</details>

<h2 id="stability">观察倾斜过程中重力作用线的位置</h2>

在水平面上，刚体只受重力与支承作用并保持静止时，经过质心的竖直线必须落在支承底面之内。物体绕边缘倾斜且不滑动时：

- 作用线在底面内：重力倾向于使物体恢复原来的位置。
- 作用线恰过边缘：重力对此边缘的力矩为零，是容易受扰动的临界平衡。
- 作用线越过边缘：重力倾向于使倾斜加剧，按本模型释放后会倾倒。

其他条件可比时，较宽底面或较低质心通常使物体能倾斜更大角度才越过临界位置。这解释了低而宽的平衡玩具，也解释了高处载荷为何可能降低车辆的抗倾倒能力。转弯车辆有加速度，需更完整的受力模型，不能仅凭静态作用线规则计算安全车速。

<img src="/assets/img/physics-ig-tilting.svg" alt="Two schematic blocks A and B with equal 0.60 m base widths, each tilted 25 degrees clockwise about its right lower edge on a horizontal floor without slipping. The centre of mass is marked at height 0.30 m for A and 0.90 m for B before tilt. Vertical weight lines are drawn through the marked centres; no stability verdicts are labelled." width="760" height="430">

<h3 id="tilt-judgement">相同底宽与倾角，为什么结果不同？</h3>

*自拟题。*

<!-- task:tilt-judgement -->

The two blocks in the diagram are held at the same tilt and then gently released, with no initial rotation. The right edge does not slip. Use the weight lines to predict which block returns and which topples. Explain how moving mass down inside block B would affect its resistance to toppling. Do not calculate an angle.

<!-- /task:tilt-judgement -->

<details markdown="1">
<summary>提示</summary>

对接触边缘取矩，而非对质心取矩。

</details>

<details markdown="1">
<summary>解答与检查</summary>

A 的重力作用线位于右侧接触边缘左方，产生逆时针恢复力矩；B 的作用线越到右方，产生顺时针倾倒力矩。把 B 的质量移低，会减小同一倾角下质心的水平偏移，一般需要更大倾角才越过边缘。这里保持底面等其他条件不变，并假定不滑动。

</details>

<h2 id="independent-practice">独立判断哪些条件重要</h2>

<h3 id="practice-lever">选择动力，并检查支点力</h3>

*自拟题。*

<!-- task:practice-lever -->

An ideal horizontal wheelbarrow is supported at its wheel axle. Its 300 N load acts 0.40 m behind the axle, and an upward effort at the handles acts 1.20 m behind the axle. Neglect the barrow’s own weight. Find the effort and the upward ground force at the wheel. Explain how the effort changes if the load is moved to 0.60 m behind the axle. State the turning senses about the axle.

<!-- /task:practice-lever -->

<details markdown="1">
<summary>提示</summary>

两个力在转轴同一侧，但一个向上、一个向下。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$F_{\mathrm{effort}}\times1.20=300\times0.40,\qquad F_{\mathrm{effort}}=100\,\mathrm{N}$$

侧视图中若手柄在右方，载荷产生顺时针力矩，动力产生逆时针力矩。地面向上的力为 200 N，总向上力恰为 300 N。载荷移到新位置时，动力为 150 N，地面力也为 150 N。重量虽未改变，载荷力矩却增加；动力臂不变时，动力必须增加。

</details>

**构造几何记录：**同一刚体被保持在四个不同位置，表中给出质心在地面上的水平投影。保留的接触边缘为 x = 0.60 m，原底面从 0 延伸到 0.60 m。数值为给定模型几何，并非实测记录。

<!-- record:stability-record -->

| Held position | Centre-of-mass projection x / m |
| --- | --- |
| P | 0.30 |
| Q | 0.59 |
| R | 0.60 |
| S | 0.63 |

<!-- /record:stability-record -->

<h3 id="practice-projection">区分余量很小与没有余量</h3>

*自拟题。*

<!-- task:practice-projection -->

For each supplied position, judge whether weight gives a restoring moment, zero moment or a toppling moment about the retained right edge. Compare P and Q. Explain why an actual measurement of 0.60 m with uncertainty would not prove exact limiting balance.

<!-- /task:practice-projection -->

<details markdown="1">
<summary>提示</summary>

判断竖直重力作用线落在支点哪一侧。

</details>

<details markdown="1">
<summary>解答与检查</summary>

P、Q 产生恢复力矩，R 的力矩为零，S 产生倾倒力矩。P 的水平恢复力臂为 0.30 m，Q 只有 0.01 m；重量相同时，Q 的恢复力矩更小。R 是临界状态，不是余量充足的稳定状态。真实的 0.60 m 读数区间可能覆盖边缘两侧，应检查不确定度与支承位置，不能断言恰好处于边界。

</details>

<h2 id="diagnose-and-retry">检查作用线与整个物体</h2>

| 错误 | 修正 |
| --- | --- |
| 轮廓对称就断言质心居中 | 检查质量分布。 |
| 杆长总是力臂 | 向力的作用线作垂线。 |
| 较重儿童一定向下 | 比较力与垂直距离的乘积。 |
| 力矩平衡就证明完全平衡 | 同时检查合力。 |
| 底宽相同就一样稳定 | 找出质心与重力作用线。 |

<h3 id="retry-own-weight">重试：现在木板自重也有力矩</h3>

*自拟题。*

<!-- task:retry-own-weight -->

A uniform 2.0 m board weighing 80 N is held horizontally on a pivot 0.50 m from its left end. A 40 N load acts at the right end. An upward force is applied at the right end to keep the board stationary. Find that force and the upward pivot force. Explain why omitting the board’s weight gives an incorrect answer.

<!-- /task:retry-own-weight -->

<details markdown="1">
<summary>提示</summary>

先定位木板质心，再对支点取矩。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$F\times1.50=80\times0.50+40\times1.50,\qquad F=66.7\,\mathrm{N}$$

均匀木板质心在左端右方 1.00 m，位于支点右方 0.50 m。支点向上的力为 53.3 N，两项向上力合计平衡 120 N。若遗漏木板的力矩，会得到末端只需 40 N，却留下未平衡的顺时针力矩。中间值保留精度，最终取两位有效数字约为 67 N 和 53 N。

</details>

<h2 id="sources-and-next">范围与下一步</h2>

范围：OxfordAQA International GCSE Physics 9203 的 3.1.7–3.1.8，包含薄板质心定位、稳定性、力矩及杠杆放大力。跷跷板任务改编自 Paper 1 Specimen material Q02.4–02.6，已核对配套评分标准。其他任务与几何记录为自拟，改编题不套用官方分值。范围依据[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf)。

[上一课：弹簧与胡克定律](/zh/igcse/physics/springs-and-hookes-law/) · [返回 IGCSE 物理](/zh/igcse/physics/)。能量部分目前仍为[复习笔记](/zh/igcse/physics/#-unit-2-energy)，不把本路线称为完整 IGCSE 课程或实体实验完成证明。
