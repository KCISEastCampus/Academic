---
title: 重心与质心
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/centres-of-mass/
permalink: /zh/alevel/a2-mathematics/mechanics/centres-of-mass/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.3 静力学与力（Statics and forces）

在直尺的一端附近加上一个小重物，平衡点会向它靠近；切去一部分材料，平衡点则远离被切走的部分。本课要找的是：**把总重量放在哪一点，才能保留整个物体重量的转动效果？**找到这一点后，再判断物体怎样悬挂或受到支承。

- **学习：**从[质点系](#a-system-of-particles)开始，再学[均匀物体](#uniform-bodies-and-symmetry)、[组合薄板](#composite-laminae)及[悬挂物体](#suspended-bodies)。
- **学后要能：**使用带符号质量矩，说明对称依据，处理组合体与挖孔，并把质心位置连接到悬挂或支承力。
- **复习：**收起解答完成[练习](#practice)，检查总质量、坐标与最后位置是否合理。

教材对应：第 12 章 §§12.1–12.4（印刷页 184–197）。本课使用质心（centre of mass）、重心（centre of gravity）、均匀薄板（uniform lamina）、对称轴（line of symmetry）及悬挂物体（suspended body）等术语。在本课均匀重力场模型中，质心与重心重合，下文也简称重心。

需要坐标、简单方程、直角三角形，以及上一课的[垂直距离](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#the-moment-of-a-force)和[支承方程](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#equilibrium-under-parallel-forces)。若还没完成 forces 的稍后检查，可先回做[墙面任务](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#wall-check)。
{:.lesson-meta}

各部分视为刚性固定，彼此位置不变。质点在一个位置贡献已知质量；轻框架自身质量忽略；薄板则薄到可以当作平面。除非另有说明，取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值；最终数值保留三位有效数字，角度保留一位小数；题目另有要求时从其要求。
{:.lesson-meta}

所有例题和练习均为自拟题，并非官方历届试题，不设官方分值。图中的长度和力箭头未采用统一比例尺。

## 质心与重心 {#centre-of-mass-and-centre-of-gravity}

**重心**是合重力作用的点；全部重量作用于此点时，力矩与各部分重量分别作用时相同。当物体各处的 $g$ 相同时，重心与**质心**重合，记为 $G$。本课使用这一模型。

求刚体的支承力和力矩时，把总重量放在 $G$。质心不一定落在物体的材料内，例如圆环的质心位于中间的孔中。

这是用总重力**替代**各部分的重力，并没有增加一个力。列式时可用各部分重量，也可用作用在 $G$ 的总重量，但不能两套一起算。这里假设物体各处重力的大小和方向相同；不满足时，质心不一定就是合重力的作用点。

## 质点系 {#a-system-of-particles}

若质量 $m_1,m_2,\ldots$ 分别位于 $(x_1,y_1), (x_2,y_2),\ldots$，记总质量为 $M$，质心为 $(\bar x,\bar y)$。先统一原点，再记每部分坐标；坐标上方的横线表示组合质心的坐标，不是移动距离。

为什么要把质量乘坐标？先看水平直线上的质量 $m_1$、$m_2$，取逆时针为正，它们的重力对原点产生的带符号力矩为 $-m_1gx_1-m_2gx_2$。用总重量 $(m_1+m_2)g$ 替代，并让它作用在 $\bar x$，力矩须相同。约去共同的 $-g$，得到

$$(m_1+m_2)\bar x=m_1x_1+m_2x_2.$$

乘积 $mx$ 称为**质量矩（mass moment）**。采用千克和米时，单位是 $\mathrm{kg\,m}$，不是力矩的 $\mathrm{N\,m}$。原点左侧的坐标 $x$ 为负，所以该项 $mx$ 为负；质量本身仍为正。各个相互垂直方向都可分别使用同一加权规则：

$$M=\sum m_i,\qquad M\bar x=\sum m_ix_i,\qquad M\bar y=\sum m_iy_i.$$

因此，每个坐标都是**以质量为权重的平均值**（mass-weighted average）。共线质点只需一个坐标；三维情况同理计算 $\bar z$。位置向量形式为

$$\bar{\mathbf r}=\frac{\sum m_i\mathbf r_i}{\sum m_i}.$$

坐标要保留正负号；到轴的距离则非负。先求坐标，若题目问距离，再取其大小。轻杆或轻框架的质量可忽略，不贡献质量和质量矩。

<div class="worked-example" markdown="1">

### 例 1：直线上及空间中的质点 {#example-1-particles-on-a-line-and-in-space}

**Question:** particles of masses $3$, $2$ and $5\,\mathrm{kg}$ lie on a light straight rod at $x=0$, $5$ and $8\,\mathrm m$. Find their centre of mass. **Self-written.**

$$\bar x=\frac{3(0)+2(5)+5(8)}{3+2+5}=\boxed{5\,\mathrm m}.$$

For a separate system, two particles of masses $2m$ and $3m$, where $m>0$, have position vectors $(1,0,2)$ and $(4,5,-1)$ metres. Their centre of mass has position vector:

这是另一个独立系统，分别对三个分量按质量加权：

$$\bar{\mathbf r}=\frac{2m(1,0,2)+3m(4,5,-1)}{5m}
=\boxed{\left(\frac{14}{5},3,\frac15\right)\mathrm m}.$$

**核对：**第一问中，对 $x=5$ 的带符号质量矩之和为 $3(-5)+2(0)+5(3)=0$。空间向量答案的每个坐标都在两个质点相应坐标之间。

**常见错误：**质量不等时，仍对各位置取普通算术平均。

</div>

## 均匀物体与对称性 {#uniform-bodies-and-symmetry}

**均匀薄板**是单位面积质量恒定的薄平面物体，这个常量称为面密度（mass per unit area）。它的质心位于每一条对称轴上；若两条这样的轴相交，交点就是 $G$。

例如，从均匀板任意位置取两块面积相等的小片，质量也相等。关于对称轴配对的两片便有相同质量，横向质量矩互相抵消。若外形对称但一侧更重，这种**质量分布的对称**就被破坏了。均匀杆指单位长度质量相同，均匀实体指单位体积质量相同。

| 均匀物体 | 质心位置 |
| --- | --- |
| 直杆 | 中点 |
| 矩形或正方形薄板 | 两对角线交点 |
| 圆形薄板 | 圆心 |
| 三角形薄板 | 三条中线交点 |
| 球体、长方体或直圆柱体 | 几何中心 |

对于均匀实体，可同样使用对称面。如果质量分布不均匀，仅有外形对称并不足以确定质心。

对**任意均匀三角形薄板**，$G$ 位于从一边中点向对顶点前进三分之一的位置；等价地，从该顶点沿中线走向对边中点的三分之二处。其坐标等于三个顶点坐标的平均。三角形本身没有对称轴时，这个结论依然成立。

**中线（median）**连接一个顶点与对边中点。这里把三角形重心作为已知几何结论使用，不要求积分推导。薄板的质量实际铺满整个面积，并不是三个顶点处各放一个等质量质点；只是这两个系统恰好有相同质心。若再放不等质量的顶点质点，必须重新列质量矩。

<div class="worked-example" markdown="1">

### 例 2：三角形薄板 {#example-2-a-triangular-lamina}

**Question:** a uniform triangular lamina has vertices $A=(0,0)$, $B=(6,0)$ and $C=(0,9)$, in centimetres. Find $G$ and its distance from $AB$. **Self-written.**

$$G=\left(\frac{0+6+0}{3},\frac{0+0+9}{3}\right)=\boxed{(2,3)\,\mathrm{cm}}.$$

因为 $AB$ 是 $x$ 轴，$G$ 到 $AB$ 的距离为 $\boxed{3\,\mathrm{cm}}$。

**核对：**$AB$ 中点是 $(3,0)$。从 $(3,0)$ 向 $C$ 前进三分之一，得到 $(3,0)+\frac13(-3,9)=(2,3)$。

**常见错误：**把 $G$ 放在中线的一半处。中点规则适用于均匀直杆，不适用于均匀三角形薄板。

</div>

## 组合薄板 {#composite-laminae}

把物体分成质心已知的部分，注意不要重复计入重叠区域。均匀薄板的面密度为 $\rho$ 时，各部分的质量为 $m_i=\rho A_i$。

只有当各部分的**面密度相同**时，$\rho$ 才能约去，用面积代替质量作权重：

$$\bar x=\frac{\sum A_ix_i}{\sum A_i},\qquad
\bar y=\frac{\sum A_iy_i}{\sum A_i}.$$

挖孔时，从完整薄板中减去孔的面积及相应面积矩。表中的负项只是记录移除材料，**不代表存在负质量**。剩余总面积必须为正。

理由是：把剩余部分与挖去部分重新拼回，二者质量矩之和必须等于原板的质量矩。移项后，剩余部分便等于“原板减去孔”。孔的中心仍用原来的坐标，不要临时把原点移到孔中心。可以把余板分成不重叠的正面积部分，也可以统一用完整板减孔，但不能混算。

<div class="worked-example" markdown="1">

### 例 3：矩形与三角形组合 {#example-3-a-rectangle-and-a-triangle}

**Question:** a uniform lamina consists of a $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ rectangle and a triangle above it. The rectangle has opposite corners $(0,0)$ and $(4,2)$; the triangle has vertices $(0,2)$, $(4,2)$ and $(2,5)$. Find $G$. **Self-written.**

![矩形与上方三角形组成的薄板，标有每一部分的质心及组合后的重心 G](/assets/img/a2-math-mech/composite-lamina.svg)

| 部分 | 面积（$\mathrm{cm^2}$） | 质心（$\mathrm{cm}$） |
| --- | --- | --- |
| 矩形 | $8$ | $(2,1)$ |
| 三角形 | $6$ | $(2,3)$ |

矩形面积为 $4(2)=8$。三角形底为 $4$，高为 $5-2=3$，所以面积为 $\frac12(4)(3)=6$；它的质心在底边 $y=2$ 上方三分之一高度，即 $y=3$。各部分面密度相同，约去后才可用这些面积作权重。

直线 $x=2$ 是对称轴，所以 $\bar x=2$。

$$\bar y=\frac{8(1)+6(3)}{8+6}=\frac{13}{7}.$$

$$\boxed{G=\left(2,\frac{13}{7}\right)\mathrm{cm}}.$$

**核对：**$\bar y$ 在 $1$ 与 $3$ 之间，而且更靠近 $1$，因为矩形部分质量较大。两部分仅共边，没有重复计算面积。

</div>

<div class="worked-example" markdown="1">

### 例 4：切去矩形的一角 {#example-4-removing-a-rectangular-corner}

**Question:** a uniform $8\,\mathrm{cm}$ by $6\,\mathrm{cm}$ rectangular lamina has a $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ corner removed. Use the bottom-left corner as the origin; the removed rectangle has opposite corners $(4,4)$ and $(8,6)$. Find the remaining lamina's centre of mass. **Self-written.**

![8 cm 乘 6 cm 的矩形薄板右上角切去 4 cm 乘 2 cm；标有完整矩形、移除部分及剩余薄板的重心](/assets/img/a2-math-mech/lamina-cutout.svg)

| 部分 | 带符号面积（$\mathrm{cm^2}$） | 质心（$\mathrm{cm}$） |
| --- | --- | --- |
| 完整矩形 | $48$ | $(4,3)$ |
| 移除的角 | $-8$ | $(6,5)$ |

$$\bar x=\frac{48(4)-8(6)}{48-8}=\frac{18}{5},\qquad
\bar y=\frac{48(3)-8(5)}{48-8}=\frac{13}{5}.$$

$$\boxed{G=(3.6,2.6)\,\mathrm{cm}}.$$

**核对：**从右上方移除材料后，$G$ 相对 $(4,3)$ 应向左下移动。另一做法是把剩余部分分为底部 $8\times4$ 矩形和左上 $4\times2$ 矩形，用正面积矩计算会得到同一答案。

**常见错误：**分母减去了孔的面积，分子却把孔的面积矩加上。

</div>

## 附加质量与不同材料 {#attached-masses-and-different-materials}

若各部分面密度不同，或附有质点、杆，就必须使用**实际质量**。不能把千克与平方米相加。对于均匀细线或框架，只有各段的线密度（mass per unit length）相同时，才可用长度代替质量作权重。

先把每项变成质量：薄板用面密度乘面积，杆用线密度乘长度，质点用题给质量。沿薄板边缘固定的杆是额外加上的材料，即使位置落在薄板边界，也要另列一项。不同材料的面积相同，质量仍可能不同。

<div class="worked-example" markdown="1">

### 例 5：薄板上固定一个质点 {#example-5-a-particle-attached-to-a-lamina}

**Question:** a uniform rectangular lamina has opposite corners $(0,0)$ and $(4,2)$ metres and mass per unit area $2\,\mathrm{kg\,m^{-2}}$. A particle of mass $4\,\mathrm{kg}$ is fixed at $(4,2)$. Find the centre of mass of the combined body. **Self-written.**

薄板质量为 $2(4\times2)=16\,\mathrm{kg}$，质心为 $(2,1)$，因此

$$\bar x=\frac{16(2)+4(4)}{20}=\frac{12}{5},\qquad
\bar y=\frac{16(1)+4(2)}{20}=\frac65.$$

$$\boxed{G=(2.4,1.2)\,\mathrm m}.$$

**核对：**$G$ 从薄板质心朝质点前进总间距的五分之一，因为附加质点占总质量的五分之一。

**常见错误：**将 $8$ 当成薄板质量。那是面积，实际质量是 $16\,\mathrm{kg}$。

</div>

## 悬挂物体 {#suspended-bodies}

刚体从一点 $P$ **自由悬挂**（freely suspended）时，重力在 $G$ 处向下，支承力作用于 $P$。稳定平衡（stable equilibrium）时，$G$ 位于 $P$ 的**正下方**，重力对 $P$ 的力矩为零。

支承力经过 $P$，所以对它没有力矩。若 $G$ 偏在过 $P$ 的竖直线一侧，重力就有非零垂距，会使物体转动。$G$ 正好在 $P$ 上方也能使瞬时力矩为零，但稍微偏转就会越转越偏，是不稳定朝向；$G$ 在 $P$ 下方时，小偏转产生恢复作用。这个单点自由悬挂模型里没有其他接触或外加力。

先在物体转动前选方便的物体坐标求 $G$，然后连出 $PG$。$PG$ 与某条边的夹角，就是悬挂后该边与竖直线的夹角。这套坐标随物体一起转动，原来的 $y$ 轴不一定仍是竖直方向。若 $G=P$，重力在任意朝向都没有转动效果，此规则便不能确定唯一朝向。

<div class="worked-example" markdown="1">

### 例 6：悬挂的矩形薄板 {#example-6-a-suspended-rectangular-lamina}

**Question:** a uniform rectangular lamina has vertices $A=(0,0)$, $B=(4,0)$, $C=(4,2)$ and $P=(0,2)$ centimetres. It is freely suspended from $P$. Find the acute angle $\theta$ between edge $PA$ and the vertical. **Self-written.**

![矩形转动前的坐标图及悬挂后的图；G 在 P 正下方，标出 PA 与竖直线的夹角](/assets/img/a2-math-mech/suspended-lamina.svg)

矩形质心为 $G=(2,1)$。在原物体坐标中，从 $P$ 到 $G$ 向右变化 $2$、向下变化 $1$，因此 $PA$ 与 $PG$ 的夹角满足

原图中 $PA$ 朝下，紧邻它的直角三角形对边为 $2$，邻边为 $2-1=1$。物体转动时，这个三角形形状不变；其中的夹角会成为该边与竖直线 $PG$ 的夹角。

$$\tan\theta=\frac{2}{1},\qquad \boxed{\theta=63.4^\circ}.$$

**核对：**转过此角后，$\overrightarrow{PG}$ 的水平分量为 $2\cos\theta-\sin\theta=0$。还须选 $G$ 在 $P$ 下方的朝向，而非上方的不稳定朝向。

</div>

<div class="worked-example" markdown="1">

### 例 7：实体附加质点 {#example-7-a-solid-with-an-attached-particle}

**Question:** a uniform solid cylinder has radius $1\,\mathrm{cm}$, height $6\,\mathrm{cm}$ and mass $3\,\mathrm{kg}$. A particle of mass $1\,\mathrm{kg}$ is fixed at a point $A$ on the lower rim. The body is freely suspended from the point $B$ directly above $A$ on the upper rim. Find the acute angle between $AB$ and the vertical. **Self-written.**

在包含 $A$、$B$ 和圆柱轴线的平面中取坐标 $A=(0,0)$、$B=(0,6)$，圆柱质心为 $(1,3)$。由对称性，组合质心也位于这个平面内。

$$\bar x=\frac{3(1)+1(0)}4=\frac34,\qquad
\bar y=\frac{3(3)+1(0)}4=\frac94.$$

平衡时 $BG$ 竖直。在物体坐标中，这条连线的横向变化为 $3/4$，向下变化为

$$6-\frac94=\frac{15}{4}\,\mathrm{cm}.$$

$$\tan\theta=\frac{3/4}{15/4}=\frac15,\qquad
\boxed{\theta=11.3^\circ}.$$

**核对：**附加质点使 $G$ 从 $(1,3)$ 朝它移动到 $(3/4,9/4)$。求悬挂角应使用从悬点 $B$ 到 $G$ 的距离，不能使用从 $A$ 到 $G$ 的距离。

</div>

## 两根绳支承 {#support-by-two-strings}

有两根竖直绳时，$G$ 不必位于任一连接点正下方。把总重量放在 $G$，列竖直平衡，并对其中一个连接点取矩。绳只能拉，不能推；若算出负张力，假设的两绳拉紧平衡便不成立。

若两连接点的水平间距为 $L$，$G$ 到左侧连接点的水平距离为 $a$，力矩方程是 $LT_{\mathrm{right}}=Mga$。两根绳的向上张力都非负，便要求 $0\leq a\leq L$；到端点时，一根张力为零，处于即将松弛的边界。竖直力的力臂是**水平距离**，连接点的高度不参与这个乘积。

<div class="worked-example" markdown="1">

### 例 8：两端支承的薄板 {#example-8-a-lamina-supported-at-both-ends}

**Question:** the combined body from Example 5 is supported by two vertical strings attached at $P=(0,2)$ and $Q=(4,2)$ metres. Edge $PQ$ is horizontal. Find the tensions. **Self-written.**

总质量为 $20\,\mathrm{kg}$，且 $\bar x=2.4\,\mathrm m$。对 $P$ 取矩：

$$4T_Q=20g(2.4),\qquad \boxed{T_Q=117.6\,\mathrm N\approx118\,\mathrm N}.$$

竖直方向平衡：

$$T_P+T_Q=20g,\qquad \boxed{T_P=78.4\,\mathrm N}.$$

**核对：**两张力都为正。对 $Q$ 取矩，$4T_P=20g(4-2.4)=313.6\,\mathrm{N\,m}$。靠近较重一侧的支承张力较大。

</div>

## 练习 {#practice}

尽可能使用精确坐标。各题均为自拟题，先独立尝试，再展开提示或解答。

<div class="lesson-check" markdown="1">

### Q1：框架上的质点 {#q1-signed-coordinates}

**Question:** Particles of masses $2$, $3$ and $5\,\mathrm{kg}$ are fixed to a light framework at $(-4,1)$, $(2,-3)$ and $(4,2)$ metres. Find $G$ and its distance from the $y$-axis. **Self-written.**

<details markdown="1">
<summary>提示</summary>

每个质量矩中使用带符号坐标；到 $y$ 轴的距离是 $\lvert\bar x\rvert$。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\bar x=\frac{-8+6+20}{10}=\frac95,\qquad
\bar y=\frac{2-9+10}{10}=\frac3{10}.$$

所以 $\boxed{G=(1.8,0.3)\,\mathrm m}$，到纵轴距离为 $\boxed{1.8\,\mathrm m}$。

**核对：**相对 $G$ 的两个方向质量矩都为零：$18-10(1.8)=0$、$3-10(0.3)=0$。

**恢复与重试：**按错因回看[对应讲解](#a-system-of-particles)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#particles-retry)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2：三个顶点 {#q2-a-triangle-and-its-median}

**Question:** A uniform triangular lamina has vertices $(0,0)$, $(9,0)$ and $(3,6)$ centimetres. Find $G$. Explain why its $x$-coordinate is not $4.5$. **Self-written.**

<details markdown="1">
<summary>提示</summary>

对三个顶点坐标取平均；也可以从底边中点向对顶点前进三分之一。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\boxed{G=(4,2)\,\mathrm{cm}}.$$

底边中点为 $(4.5,0)$，但中线向 $(3,6)$ 倾斜。通过底边中点的竖直线并非三角形的对称轴。

**核对：**$(4.5,0)+\frac13(-1.5,6)=(4,2)$。

**恢复与重试：**按错因回看[对应讲解](#uniform-bodies-and-symmetry)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#triangle-retry)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3：L 形薄板 {#q3-an-l-shaped-lamina}

**Question:** A uniform lamina is the union of two rectangles with opposite corners $(0,0)$ and $(6,2)$, and $(0,2)$ and $(2,6)$ centimetres. Find $G$. **Self-written.**

<details markdown="1">
<summary>提示</summary>

两面积分别为 $12$、$8$，相应质心为 $(3,1)$、$(1,4)$。它们没有面积重叠。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\bar x=\frac{12(3)+8(1)}{20}=\frac{11}{5},\qquad
\bar y=\frac{12(1)+8(4)}{20}=\frac{11}{5}.$$

$$\boxed{G=(2.2,2.2)\,\mathrm{cm}}.$$

**核对：**也可把右上 $4\times4$ 正方形（中心 $(4,4)$）从 $6\times6$ 正方形（中心 $(3,3)$）中减去。两个坐标都为 $(36(3)-16(4))/20=2.2$。本题 $G$ 位于材料之外，这是允许的。

**恢复与重试：**按错因回看[对应讲解](#composite-laminae)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#cutout-retry)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4：带孔的正方形板 {#q4-a-circular-hole}

**Question:** A uniform square lamina has opposite corners $(0,0)$ and $(6,6)$ centimetres. A circular hole of radius $1\,\mathrm{cm}$ and centre $(4,3)$ is cut out. Find $G$. **Self-written.**

<details markdown="1">
<summary>提示</summary>

减去孔的面积 $\pi$ 及面积矩；$y=3$ 仍是对称轴。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\bar x=\frac{108-4\pi}{36-\pi},\qquad \bar y=3.$$

$$\boxed{G\approx(2.90,3.00)\,\mathrm{cm}}.$$

**核对：**$\bar x=3-\pi/(36-\pi)<3$。从右边移除材料会使 $G$ 向左移动；$\bar y$ 仍为 $3$。

**恢复与重试：**按错因回看[对应讲解](#example-4-removing-a-rectangular-corner)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#cutout-retry)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5：连接起来的物体 {#q5-two-materials-and-an-attached-rod}

**Question:** Two rectangular laminae are joined along an edge. The first has opposite corners $(0,0)$ and $(2,2)$ metres and mass per unit area $3\,\mathrm{kg\,m^{-2}}$. The second has opposite corners $(2,0)$ and $(4,2)$ metres and mass per unit area $1\,\mathrm{kg\,m^{-2}}$. A uniform rod of mass $4\,\mathrm{kg}$ is fixed along the edge from $(0,2)$ to $(4,2)$. Find the combined centre of mass. **Self-written.**

<details markdown="1">
<summary>提示</summary>

使用实际质量 $12$、$4$、$4\,\mathrm{kg}$，相应质心为 $(1,1)$、$(3,1)$、$(2,2)$。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\bar x=\frac{12(1)+4(3)+4(2)}{20}=\frac85,\qquad
\bar y=\frac{12(1)+4(1)+4(2)}{20}=\frac65.$$

$$\boxed{G=(1.6,1.2)\,\mathrm m}.$$

**核对：**加杆前重心为 $(1.5,1)$。杆占总质量的五分之一，因此使重心向 $(2,2)$ 前进间距的五分之一，得到 $(1.6,1.2)$。

**恢复与重试：**按错因回看[对应讲解](#attached-masses-and-different-materials)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#retry-replace-suspension-by-two-supports)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6：悬挂的三角形板 {#q6-free-suspension}

**Question:** The triangular lamina in Q2 is freely suspended from its vertex $C=(3,6)$. Find the acute angle between the line through $C$ perpendicular to the base and the vertical when it hangs in stable equilibrium. **Self-written.**

<details markdown="1">
<summary>提示</summary>

使用 $G=(4,2)$。题目中的垂线相对薄板固定，而平衡后的竖直方向为 $CG$。

</details>

<details markdown="1">
<summary>解答与核对</summary>

原物体坐标中，从 $C$ 到 $G$ 横向变化 $1$、向下变化 $4$。

$$\tan\theta=\frac14,\qquad \boxed{\theta=14.0^\circ}.$$

**核对：**$\cos\theta-4\sin\theta=0$，所以转动后 $CG$ 没有水平分量，且向下分量为正。

**恢复与重试：**按错因回看[对应讲解](#suspended-bodies)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#cutout-retry)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7：圆柱与质点 {#q7-a-suspended-solid}

**Question:** A uniform solid cylinder of radius $2\,\mathrm{cm}$, height $8\,\mathrm{cm}$ and mass $6\,\mathrm{kg}$ has a $2\,\mathrm{kg}$ particle fixed at a point $A$ on its lower rim. It is suspended from the point $B$ directly above $A$ on the upper rim. Find the acute angle between $AB$ and the vertical. **Self-written.**

<details markdown="1">
<summary>提示</summary>

在包含 $AB$ 和圆柱轴线的平面中，取 $A=(0,0)$、$B=(0,8)$，圆柱质心为 $(2,4)$。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$G=\left(\frac{6(2)}8,\frac{6(4)}8\right)=(1.5,3)\,\mathrm{cm}.$$

$$\tan\theta=\frac{1.5}{8-3}=\frac3{10},\qquad
\boxed{\theta=16.7^\circ}.$$

**核对：**$1.5\cos\theta-5\sin\theta=0$，使 $BG$ 竖直。$BG$ 长度为 $\sqrt{1.5^2+5^2}$，不是圆柱高度。

**恢复与重试：**按错因回看[对应讲解](#example-7-a-solid-with-an-attached-particle)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#cutout-retry)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8：受支承的杆 {#q8-tensions-and-an-unknown-mass}

**Question:** A uniform horizontal rod of length $6\,\mathrm m$ and mass $4\,\mathrm{kg}$ carries a particle of mass $m\,\mathrm{kg}$ at its right-hand end. Two vertical strings support the rod at its ends. The right-hand tension is twice the left-hand tension. Find $m$, the centre of mass measured from the left-hand end, and both tensions. **Self-written.**

<details markdown="1">
<summary>提示</summary>

设左绳张力为 $T$，使用 $3T=(4+m)g$，并对左端取矩。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$6(2T)=4g(3)+mg(6),\qquad 3T=(4+m)g.$$

代入得到 $4(4+m)=12+6m$，所以 $\boxed{m=2\,\mathrm{kg}}$。

$$\bar x=\frac{4(3)+2(6)}6=\boxed{4\,\mathrm m}.$$

$$\boxed{T_{\text{left}}=19.6\,\mathrm N},\qquad
\boxed{T_{\text{right}}=39.2\,\mathrm N}.$$

**核对：**张力之和为 $58.8\,\mathrm N=6g$。对右端取矩，$19.6(6)=4g(3)=117.6\,\mathrm{N\,m}$。

**恢复与重试：**按错因回看[对应讲解](#support-by-two-strings)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#retry-replace-suspension-by-two-supports)；须写出理由和条件检查。

</details>

</div>

## 独立检查 {#independent-task-infer-the-mass-distribution}

<div class="lesson-check" markdown="1">

### 悬挂的组合体 {#joined-body-check}

**Self-written task.** Two rectangular laminae are rigidly joined along an edge. In body coordinates measured in metres, the left rectangle has opposite corners $(0,0)$ and $(2,2)$ and constant mass per unit area $\rho\,\mathrm{kg\,m^{-2}}$, where $\rho>0$. The right rectangle has opposite corners $(2,0)$ and $(4,2)$ and constant mass per unit area $1\,\mathrm{kg\,m^{-2}}$. A $4\,\mathrm{kg}$ particle is fixed at $(4,2)$. The body is freely suspended from $P=(0,2)$ in stable equilibrium. The acute angle $\theta$ between the edge from $P$ to $(0,0)$ and the vertical satisfies $\tan\theta=2$. Find $\rho$. Assess the claim: “The rectangles have equal area, so their masses cancel and only the particle can break the symmetry.” Choose and explain your method.

<details markdown="1">
<summary>推理提示</summary>

先求两薄板的实际质量，再计入质点。在物体坐标中求 $G$，悬挂后 $PG$ 成为竖直方向。从 $P$ 处向下的边量起，角度应使用哪两个距离的比？

</details>

<details markdown="1">
<summary>反馈与核对</summary>

各部分质量为 $4\rho$、$4$、$4\,\mathrm{kg}$，质心依次是 $(1,1)$、$(3,1)$、$(4,2)$，总质量为 $4\rho+8\,\mathrm{kg}$，所以

$$\bar x=\frac{4\rho+12+16}{4\rho+8}=\frac{\rho+7}{\rho+2},\qquad \bar y=\frac{4\rho+4+8}{4\rho+8}=\frac{\rho+3}{\rho+2}.$$

从 $P$ 到 $G$ 的横向变化为 $\bar x$，向下变化为 $2-\bar y$。当 $\rho>0$ 时两者均为正。因此

$$\tan\theta=\frac{\bar x}{2-\bar y}=\frac{\rho+7}{\rho+1}=2,\qquad \boxed{\rho=5}.$$

左板面密度为 $5\,\mathrm{kg\,m^{-2}}$。此时三部分质量为 $20$、$4$、$4\,\mathrm{kg}$，得到

$$G=\left(\frac{12}{7},\frac87\right)\mathrm m,\qquad \frac{12/7}{2-8/7}=2.$$

转到稳定朝向后，$PG$ 的水平分量为零，而且 $G$ 在 $P$ 下方。面积相等不代表质量相等，因为面密度不同；左板本身已使质量分布不对称。如果你把三个质心等权平均，应恢复质量权重；如果角度分母用了 $\bar y$，应从悬点 $P$ 而非原点量距离。

**请用英文补全理由：**“Area weighting is valid only when …; the vertical passes through …”。

**恢复与重试：**按错因回看[对应讲解](#attached-masses-and-different-materials)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#retry-replace-suspension-by-two-supports)；须写出理由和条件检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再尝试：由悬挂改成双点支承 {#retry-replace-suspension-by-two-supports}

**Self-written task.** Remove the particle. Use the same two rectangles, but treat the left surface density $\rho\,\mathrm{kg\,m^{-2}}$ as unknown again; the right density remains $1\,\mathrm{kg\,m^{-2}}$. Two vertical strings attached at $P=(0,2)$ and $Q=(4,2)$ support the rigid body with $PQ$ horizontal. The tension at $P$ is twice that at $Q$. Find $\rho$, the combined centre of mass and both tensions. Explain why the centre of mass need not lie directly below either attachment point.

<details markdown="1">
<summary>再尝试提示</summary>

将张力比与竖直平衡、力矩平衡连接。单点悬挂时的角度条件已不适用。

</details>

<details markdown="1">
<summary>再尝试核对</summary>

设 $T_Q=T$、$T_P=2T$。总质量为 $M=4\rho+4$，竖直平衡给出 $3T=Mg$。对 $P$ 取矩得到 $4T=Mg\bar x$，所以 $\bar x=4/3$。

$$\frac{4\rho(1)+4(3)}{4\rho+4}=\frac43,\qquad 3(\rho+3)=4(\rho+1),\qquad \boxed{\rho=5}.$$

两部分质心都满足 $y=1$，因此

$$\boxed{G=\left(\frac43,1\right)\mathrm m},\qquad \boxed{T_P=156.8\,\mathrm N\approx157\,\mathrm N,\quad T_Q=78.4\,\mathrm N}.$$

两张力都为正，总和为 $24g=235.2\,\mathrm N$。对 $Q$ 取矩核对：$4T_P=24g(4-4/3)=627.2\,\mathrm{N\,m}$。两向上力共同平衡重量及其力矩，单个支点不必位于 $G$ 正上方。不要继续计入已移除的质点，或沿用原来的总质量 $28\,\mathrm{kg}$。

**恢复与重试：**按错因回看[对应讲解](#support-by-two-strings)，重新标出作用点、方向或各部分质量。关闭本解答，再做[另一道同目标任务](#later-body-check)；须写出理由和条件检查。

</details>

</div>

## 修复后再试 {#repair-and-retry}

收起旧解答再做对应任务。修复出错原因后，用新题的无帮助作答检查；照抄原来的订正不算。之后还要通过下一课及稍后回顾，检查是否保留了能力。

<div class="lesson-check" markdown="1">

### 空间中的框架 {#particles-retry}

**Question:** Particles of masses $2\,\mathrm{kg}$ and $3\,\mathrm{kg}$ are fixed on a light rigid frame at $(-2,1,4)$ and $(1,-2,-1)$ metres. Find the centre of mass and its distance from the plane $x=0$. A student replaces every negative coordinate by its magnitude before averaging. Explain why this changes the system. **Self-written.**

<details markdown="1">
<summary>提示</summary>

逐个坐标保留原有符号。到平面的距离另行计算，结果非负。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\bar x=\frac{2(-2)+3(1)}5=-\frac15,\qquad
\bar y=\frac{2(1)+3(-2)}5=-\frac45,\qquad
\bar z=\frac{2(4)+3(-1)}5=1.$$

$$\boxed{G=\left(-\frac15,-\frac45,1\right)\mathrm m},\qquad
\boxed{\text{distance from }x=0=\frac15\,\mathrm m}.$$

每个坐标都在两个质点相应坐标之间。相对 $G$ 的带符号质量矩为零，例如 $2(-2+1/5)+3(1+1/5)=0$。先取坐标绝对值会把质点反射到不同位置，已经改变了系统，并非只换符号约定。若犯了这个错误，回看[质量矩的由来](#a-system-of-particles)，收起解答，先标出负坐标位置再计算。

</details>

</div>

<div class="lesson-check" markdown="1">

### 未知的顶点 {#triangle-retry}

**Question:** A uniform triangular lamina has vertices $A=(0,0)$, $B=(6,0)$ and $C=(u,v)$ centimetres. Its centre of mass is $(1,2)\,\mathrm{cm}$. Find $C$ and check the median ratio. Explain what uniform means here. A student says the same vertex-average rule always finds the centre of three unequal particles placed at these vertices. Assess the claim. **Self-written.**

<details markdown="1">
<summary>提示</summary>

倒过来使用三角形薄板的重心结论。铺满面积的薄板和三个给定质量的质点是不同系统。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\frac{0+6+u}{3}=1,\qquad\frac{0+0+v}{3}=2,\qquad \boxed{C=(-3,6)\,\mathrm{cm}}.$$

$AB$ 中点为 $(3,0)$，向 $C$ 前进三分之一，得到 $(3,0)+\frac13(-6,6)=(1,2)$，符合已知质心。均匀表示整块薄板的单位面积质量恒定，不是说外形一定有对称轴。

质点说法错误，应按实际质量加权。反例：质量 $1$、$1$、$2$ 的质点依次放在 $A$、$B$、$C$，质心为 $(0,3)\,\mathrm{cm}$，并非 $(1,2)$。中线比例出错回看[三角形结论及其含义](#uniform-bodies-and-symmetry)；不等质量仍等权时回看[质量加权](#a-system-of-particles)，再做同样改变质量模型的 [Q5](#q5-two-materials-and-an-attached-rod)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 改变过的薄板 {#cutout-retry}

**Question:** A uniform rectangular lamina has opposite corners $(0,0)$ and $(8,4)$ centimetres. A square hole of side $2\,\mathrm{cm}$ is cut out with centre $(a,2)$, entirely within the rectangle. The remaining centre of mass is $(3.8,2)\,\mathrm{cm}$. Find $a$ and check that the hole fits. The remaining lamina is then freely suspended in stable equilibrium from $P=(0,4)$. Find the acute angle between the edge from $P$ to $(0,0)$ and the vertical. Explain the orientation chosen. **Self-written.**

<details markdown="1">
<summary>提示</summary>

用剩余部分与孔的面积矩重建原板。求悬挂角时，从悬点量坐标差，不是从原点量。

</details>

<details markdown="1">
<summary>解答与核对</summary>

完整面积为 $32\,\mathrm{cm^2}$，孔为 $4\,\mathrm{cm^2}$，余板为 $28\,\mathrm{cm^2}$。

$$28(3.8)=32(4)-4a,\qquad\boxed{a=5.4\,\mathrm{cm}}.$$

孔的横向范围为 $x=4.4$ 至 $6.4$，竖向为 $y=1$ 至 $3$，完全在原矩形内。切走右侧材料，质心从 $x=4$ 左移到 $3.8$；对称轴 $y=2$ 仍然保留。

从 $P$ 到 $G=(3.8,2)$，横向变化 $3.8$，向下变化 $4-2=2$，所以

$$\tan\theta=\frac{3.8}{2}=1.9,\qquad\boxed{\theta=62.2^\circ}.$$

稳定朝向要求 $PG$ 竖直、$G$ 在 $P$ 下方。使用 $3.8/2$ 得对，是因为本题恰好有向下变化等于 $\bar y$，但应先写出 $4-\bar y$，不能把这种巧合当通用规则。用未舍入角检查 $3.8\cos\theta-2\sin\theta=0$。负号出错回看[减孔的理由](#composite-laminae)；角度出错回看[悬挂三角形](#example-6-a-suspended-rectangular-lamina)，然后关闭帮助做 [Q7](#q7-a-suspended-solid)。

</details>

</div>

## 学完牛顿定律后回来检查 {#later-check}

下一课学[牛顿运动定律](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/)，学后不看质心例题，回来完成本题。也回做上一课的[横梁检查](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#later-beam-check)，再做入口的[混合题](/zh/alevel/a2-mathematics/mechanics/#mixed-problems)与[稍后回顾](/zh/alevel/a2-mathematics/mechanics/#later-review)。

<div class="lesson-check" markdown="1">

### 同一物体，两种安排 {#later-body-check}

**Question:** A uniform rectangular lamina of mass $4\,\mathrm{kg}$ has opposite corners $(-2,0)$ and $(2,2)$ metres. A $2\,\mathrm{kg}$ particle is fixed at $(2,0)$. Find the combined centre of mass and assess the claim that it must remain at $(0,1)$ because the lamina is uniform. (a) Suspend the body freely from $P=(-2,2)$ in stable equilibrium. Find the acute angle between its left edge and the vertical. (b) Instead support it with two vertical strings at $P$ and $Q=(2,2)$, with $PQ$ horizontal. Find both tensions. Explain why the single-suspension condition cannot be imposed on either string separately in (b). **Self-written.**

<details markdown="1">
<summary>提示</summary>

板和质点都要计入。求出 $G$ 后，先辨认每种安排中的力，再选方程。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\bar x=\frac{4(0)+2(2)}6=\frac23,\qquad
\bar y=\frac{4(1)+2(0)}6=\frac23.$$

该说法把原板质心当成整体质心。附加质点使整体质心向 $(2,0)$ 移动。(a) 中，从 $P$ 到 $G$ 的横向变化为 $8/3$，向下变化为 $4/3$，所以

$$\tan\theta=2,\qquad\boxed{\theta=63.4^\circ}.$$

选择 $G$ 在 $P$ 下方。(b) 中，用总重量 $6g$ 作用在 $G$：

$$4T_Q=6g\left(\frac83\right),\qquad\boxed{T_Q=39.2\,\mathrm N},\qquad\boxed{T_P=19.6\,\mathrm N}.$$

两张力为正，总和 $58.8\,\mathrm N$；对 $Q$ 检查，$4T_P=6g(2-2/3)=78.4\,\mathrm{N\,m}$。两个分开的向上力共同平衡重量和力矩，单个力不必与重力共线。若把单点悬挂条件套进 (b)，回看[两绳支承](#support-by-two-strings)，再做[支承重试](#retry-replace-suspension-by-two-supports)。漏质量或角度错误则回看[附加质量](#attached-masses-and-different-materials)或[悬挂](#suspended-bodies)，再做[改变过的薄板](#cutout-retry)。

</details>

</div>

## 速查 {#quick-reference}

| 模型 | 方法与条件 |
| --- | --- |
| 质点或质量已知的组成部分 | $M\bar x=\sum m_ix_i$，$y$ 和 $z$ 同理 |
| 均匀三角形薄板 | 三个顶点坐标取平均 |
| 各部分面密度相同的组合薄板 | 在加权式中以面积代替质量 |
| 均匀薄板中的孔 | 减去面积及相应面积矩 |
| 不同材料、附加质点或杆 | 先求各部分实际质量，再组合 |
| 从一点自由悬挂 | 稳定平衡时 $G$ 位于悬点正下方 |
| 两根竖直支承绳 | 竖直力平衡及取矩，并检查两张力 |

最后检查：总质量须为正；各部分坐标须使用同一原点；添加质量后结果应向其靠近，移除质量后应远离它。若各部分质量都为正，质心的每个坐标必在各部分质心相应坐标的最小值与最大值之间。

## 来源与范围 {#sources-and-scope}

范围依据：[OxfordAQA Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，§3.5 M2.3；该单元不要求用积分求重心。实际阅读的评分参照为 **9660/MA05 Unit M2，January 2025，Q6**：[试卷 pp.12–13](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=12)与[配套评分标准 Version 1.0 Final，p.12](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=12)。该题要求解释均匀面密度、同时计入薄板与质点、给出精确坐标，并处理悬挂几何。本次使用这些仓库存档核对教学检查点；本页题目仍均为自拟题，不赋予官方分值。

页首精度约定适用于本页自拟题。January 2025 原卷要求计算器最终答案默认保留两位有效数字，题内另有规定时从其规定；Q6(b) 明确要求精确坐标。做官方题应逐项遵循原指令。

**学习路线：**[上一课：力矩与刚体平衡](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/) · [力学目录](/zh/alevel/a2-mathematics/mechanics/) · [下一课：牛顿运动定律](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/)。
