---
title: 牛顿定律：先选物体，再列方程
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/newtons-laws/
permalink: /zh/alevel/as-physics/newtons-laws/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">什么改变了运动？</h2>

电梯可以正在下降，地板对乘客向上的推力却比重力更大。只要分清**运动朝哪里**和**速度朝哪个方向改变**，这件事就不矛盾了。

学完后，你应能为指定物体画受力图，使用牛顿三定律，并在单个物体和连接整体之间选择研究对象。先学[受力图](#force-model)，读完[电梯示范](#lift-example)，再做[独立任务](#independent-practice)。

先修是[直线运动](/zh/alevel/as-physics/straight-line-motion/#graphs-and-signs)中的有符号速度与加速度，以及[向量与力矩](/zh/alevel/as-physics/vectors-and-moments/)中的力的分量。本课把实验室参考系视为惯性系，质量保持不变，只研究平动；转动不在本课范围内。

<div class="lesson-check" markdown="1">
**先用熟悉的运动知识试一试——自拟题。**

<!-- task:motion-start -->
A trolley moves to the right. Its velocity changes from +6.0 m/s to +2.0 m/s in 2.0 s. Find its average acceleration and state its direction. Is the trolley moving left at the end?
<!-- /task:motion-start -->

<details markdown="1"><summary>提示</summary>
用有符号速度的变化，不能只看末速度。
</details>
<details markdown="1"><summary>解答与检查</summary>
加速度为 $(2.0-6.0)/2.0=-2.0\,\mathrm{m\,s^{-2}}$，方向向左。末速度仍为正，所以小车仍向右运动。如果这里的正负号让你困惑，先回到上方链接的运动课，再继续。
</details>
</div>

<h2 id="force-model">一张受力图只属于选定的物体</h2>

先说清研究哪个物体，再逐一问：“哪个别的物体在推它或拉它？”图上只画**作用在它身上**的力。重力是地球对它的引力；法向接触力（normal contact force）是表面垂直于接触面的推力。在本课的简单情境中，摩擦力或流体阻力阻碍相对滑动或相对于流体的运动。力不必沿着速度方向。

选坐标轴和正方向，分别把各轴上的力分量相加，得到合力（resultant force）。不要另画“运动的力”，也不要把 $ma$ 当作额外的相互作用：它描述的是合力产生的效果。

<h2 id="three-laws">三条定律分别回答三个问题</h2>

**第一定律：合力为零时怎样运动？** 在惯性系中，物体保持静止或做匀速直线运动。速度不变也要求方向不变。正在运动不意味着必须有向前的合力；驱动力可能恰好平衡阻力。

**第二定律：合力怎样改变运动？** 对质量不变的物体：

$$\sum F_x=ma_x,\qquad \sum F_y=ma_y$$

分量的正负由坐标轴决定。合力为零说明加速度为零，不说明速度一定为零。如果力在变化，加速度也可能变化；此时使用匀加速运动公式还需要另行说明理由。

**第三定律：另一个物体受到什么力？** 如果 A 对 B 施力，B 同时对 A 施加大小相等、方向相反、属于同种相互作用的力。这对力作用在不同物体上，不能在 B 的受力图中互相抵消。受到相等大小的力，质量不同的物体仍可有不同的加速度。

静止的书受到桌面向上的支持力和向下的重力，二者平衡，但不是作用力与反作用力。桌面对书的力，其对应力是书对桌面的力；地球对书的引力，其对应力是书对地球的引力。

<h2 id="lift-example">乘客正在下降，却在减速</h2>

<div class="worked-example" markdown="1">
**完整示范——自拟题。**

<!-- task:worked-lift -->
A 60 kg passenger stands on the horizontal floor of a lift. The lift moves down at 4.0 m/s and slows uniformly to rest in 2.0 s. The passenger stays in contact with the floor. Find the floor force on the passenger. Use $g=10\,\mathrm{m\,s^{-2}}$; neglect other forces on the passenger.
<!-- /task:worked-lift -->

研究对象是乘客，向上为正。速度从 −4.0 变为 0 m/s，所以：

$$a=\frac{0-(-4.0)}{2.0}=+2.0\,\mathrm{m\,s^{-2}}$$

乘客受到地板向上的法向力 $N$ 和向下的重力 $mg$。电梯缆绳拉的是电梯，不是直接拉乘客。

![乘客受力示意图：地板的力 N 向上，重力 mg 向下；N 的箭头较长。只把乘客选作研究对象。](/assets/img/physics-as-passenger-forces.svg){: width="480" height="320" }

加速度向上，所以向上的力必须超过重力。对乘客使用第二定律：

$$N-mg=ma$$

$$N=60(10+2.0)=720\,\mathrm{N}$$

重力为 600 N，合力为 120 N 向上。单位也一致：$\mathrm{kg\,m\,s^{-2}}=\mathrm{N}$。如果电梯改为匀速下降，$a=0$，便有 $N=600\,\mathrm{N}$。只知道“正在下降”，判断不了哪个力更大。乘客对地板施加的 720 N 向下的力，才是 $N$ 的第三定律对应力。
</div>

<h2 id="connected-system">先研究整体，再看内部连接</h2>

两辆小车 A、B 在水平轨道上，用绷紧的轻质水平细绳相连，水平拉力作用在 A 上。绳不可伸长时，两车沿轨道的加速度相同。“轻质”意味着可忽略绳的质量，绳两端张力大小相等；如果绳松弛，就不能沿用这一约束。

把 A+B 作为整体，两端绳力是内力，在水平方向的总和中抵消。忽略水平阻力时：

$$P=(m_A+m_B)a$$

只研究 B 时，绳力成了作用于研究对象的外力。若 B 没有其他水平力，便有 $T=m_Ba$。这是同一运动的两种描述：整体方便求加速度，单车方便求连接力。若有外部阻力，包含受阻小车的每个研究对象都必须计入它。

<h2 id="independent-practice">自己使用模型</h2>

第一次作答时先关闭提示。计算前先画研究对象的边界和力。本页题目与核查依据均为自拟，不标作官方分值。

<div class="lesson-check" markdown="1">
<h3 id="steady-check">一段匀速行程</h3>
<!-- task:steady-check -->
A 2.0 kg trolley travels right at a constant velocity of 3.0 m/s along a level track. A horizontal driving force and a 6.0 N horizontal resistance are the only horizontal forces. Find the driving force. Assess the statement “constant velocity means no forces act”. The driving force is then removed while the resistance remains 6.0 N: find the acceleration while the trolley still moves right.
<!-- /task:steady-check -->
<details markdown="1"><summary>提示</summary>
把匀速阶段和撤去驱动力后的阶段分开。
</details>
<details markdown="1"><summary>解答与检查</summary>
匀速行程中水平合力为零，所以驱动力为 6.0 N，向右。有力在作用，但它们平衡；合力为零不等于没有力，也不等于速度为零。撤去驱动力后，向右为正：$a=-6.0/2.0=-3.0\,\mathrm{m\,s^{-2}}$。小车仍向右时在减速。如果认为匀速就没有阻力，回看[第一定律](#three-laws)，再做[包裹题](#retry-forces)，分清题目给出的速度与它的变化。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="force-transfer">读数改变了</h3>
<!-- task:force-transfer -->
A 50 kg passenger is moving upwards in a lift. A floor sensor measures an upward normal force of 400 N on the passenger. Use g = 10 m/s². Draw the forces on the passenger, calculate the acceleration, and explain what happens to the speed while the passenger is still moving upwards. Can this motion continue with the same velocity indefinitely?
<!-- /task:force-transfer -->
<details markdown="1"><summary>提示</summary>
先选坐标轴。传感器测的是一个力，不是合力。
</details>
<details markdown="1"><summary>解答与检查</summary>
向上为正：$400-500=50a$，所以 $a=-2.0\,\mathrm{m\,s^{-2}}$。图上应有 400 N 向上、500 N 向下。乘客还向上运动时速率减小。如果这些力持续存在，速度就继续变化，不会一直保持原速度。不知道初速度，不能求停止时间。如果你写了 $400=50a$，回到[受力图](#force-model)，把重力补上。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="interaction-check">两位同学互推</h3>
<!-- task:interaction-check -->
Two students, A (40 kg) and B (60 kg), stand on low-friction wheeled platforms and push one another horizontally. During one instant A exerts a 120 N force to the right on B. Neglect other horizontal forces and platform masses. State the force on A, find both accelerations with right positive, and explain in English why the two students do not each have zero resultant force.
<!-- /task:interaction-check -->
<details markdown="1"><summary>提示</summary>
分别为每位同学画边界，说清每个力作用在谁身上。
</details>
<details markdown="1"><summary>解答与检查</summary>
B 对 A 的力为 120 N，向左。于是 $a_A=-120/40=-3.0\,\mathrm{m\,s^{-2}}$，$a_B=120/60=+2.0\,\mathrm{m\,s^{-2}}$。英文解释可写：“The interaction forces act on different students. Each student has a non-zero horizontal resultant, so each accelerates.” 力相等不意味着加速度相等。如果你把两力在同一人身上抵消了，先回看[第三定律](#three-laws)，再做下方重试。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="connected-check">已知的是加速度</h3>
<!-- task:connected-check -->
Trolleys A (2.0 kg) and B (3.0 kg) are joined by a taut, light, inextensible horizontal string. A pull P acts to the right on A. B experiences a 1.0 N resistance to the left; A has negligible horizontal resistance. Both accelerate right at 0.80 m/s². Find P and the string tension. Explain which forces disappear from the combined-system equation and why.
<!-- /task:connected-check -->
<details markdown="1"><summary>提示</summary>
画整体和 B 的受力图，在两条相关方程中都保留阻力。
</details>
<details markdown="1"><summary>解答与检查</summary>
对 A+B：$P-1.0=(2.0+3.0)(0.80)$，得 $P=5.0\,\mathrm{N}$。对 B：$T-1.0=3.0(0.80)$，得 $T=3.4\,\mathrm{N}$。检查 A：$5.0-3.4=2.0(0.80)$。绳力只在整体求和时抵消，因为它们是相反的内力；阻力是外力，仍须保留。如果你写了 $T=P$，检查 A 产生非零加速度所需的合力，再做[新的连接系统题](#retry-connected)。
</details>
</div>

<h2 id="diagnose-and-retry">先修复理由，再收起答案</h2>

如果把力的方向等同于速度方向，回看[电梯示范](#lift-example)；如果把所有反向力都抵消，回看[力作用在谁身上](#three-laws)；如果认为绳力必等于拉力，回看[两种研究对象](#connected-system)。然后收起示范解答，处理下面的新情境。

<div class="lesson-check" markdown="1">
<h3 id="retry-connected">改拉另一辆车</h3>
<!-- task:retry-connected -->
Trolley B (3.0 kg) is to the left of trolley A (1.0 kg), joined by a taut, light, inextensible horizontal string. B is pulled left with 9.0 N. A experiences a 1.0 N resistance to the right; B has negligible horizontal resistance. Both move left. Find their acceleration and the tension, naming the boundary used for each equation. Check your result using B alone.
<!-- /task:retry-connected -->
<details markdown="1"><summary>提示</summary>
可以选向左为正。阻力现在作用在 A 上，而 A 没有直接受到拉力 P。
</details>
<details markdown="1"><summary>解答与检查</summary>
向左为正：对 A+B，$9.0-1.0=(3.0+1.0)a$，得 $a=+2.0\,\mathrm{m\,s^{-2}}$。只研究 A，$T-1.0=1.0(2.0)$，得 $T=3.0\,\mathrm{N}$。再用 B 检查：$9.0-3.0=3.0(2.0)$。绳的内力只在整体求和时消失。若仍不清楚，先为 A、B 分别画出带施力者标签的箭头，再看解答。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-forces">下降电梯里的包裹</h3>
<!-- task:retry-forces -->
A 4.0 kg package rests on a lift floor. The lift is moving downwards and accelerating downwards at 1.5 m/s². Use g = 10 m/s². Find the normal force on the package, name its third-law partner, and explain whether the package is speeding up or slowing down. Explain why the weight and normal force are not a third-law pair. Later the lift descends at constant non-zero velocity: find the normal force then and explain why neither force has disappeared.
<!-- /task:retry-forces -->
<details markdown="1"><summary>提示</summary>
列第二定律时固定研究对象；寻找第三定律对应力时，才更换受力者。
</details>
<details markdown="1"><summary>解答与检查</summary>
向上为正：$N-40=4.0(-1.5)$，得 $N=34\,\mathrm{N}$，仍为正，与地板保持接触的条件相容。其对应力是包裹对地板 34 N 向下的力。速度与加速度都向下，所以速率增加。重力和支持力都作用在包裹上，且属于不同相互作用，不是第三定律力对。若算出负的支持力，就要重新检查接触条件：此模型中的地板不能向下拉包裹。后来匀速下降时，$a=0$，$N=40\,\mathrm{N}$；重力和地板接触仍存在，只是二者平衡。
</details>
</div>

<h2 id="sources-and-next">下一步：让系统发生碰撞</h2>

范围：OxfordAQA International AS Physics 9630，PH01 §3.2.5。已核对[资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/)及其链接的[Version 4.4 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)。另一官方 PDF 标为 Version 5.1，相关条目一致。本页均为自拟教学任务和示意图，不是转载真题或实测记录。

[上一课：抛体运动](/zh/alevel/as-physics/projectile-motion/) · [下一课：动量与冲量](/zh/alevel/as-physics/momentum-and-impulse/) · [AS 物理](/zh/alevel/as-physics/)

下一课的力可能变化得很快，不能一直沿用同一个加速度。你将研究力在一段时间里的效果，并在[延后综合题](/zh/alevel/as-physics/momentum-and-impulse/#later-review)中重新选择本课的受力模型。

{% include exam_topic_practice.html %}
