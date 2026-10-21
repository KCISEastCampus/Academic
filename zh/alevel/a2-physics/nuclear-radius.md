---
title: 核半径
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/nuclear-radius/
permalink: /zh/alevel/a2-physics/nuclear-radius/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH04 · 3.12.1

怎样由散射证据推断看不见的原子核尺寸？先区分粒子转折距离与核尺寸，再把半径数据连接到核物质模型。

**开始前：**回顾[库仑势能](/zh/alevel/a2-physics/electric-fields/)、能量守恒、核素记号及 AS 衍射与 de Broglie 波长。本课要比较模型、自选作图量，并说明证据不能支持什么。

## 起步判断：最近处一定静止吗？ {#checkpoint-turning-point}

A positively charged particle passes a heavy positive nucleus and bends away. At its closest point, must its total speed be zero? Use its direction of motion to explain your prediction.

<details markdown="1">
<summary>检查模型</summary>

不一定。偏心轨迹在最近处的径向速度瞬时为零，但仍可沿切向运动。只有下方正碰转折模型才使粒子瞬时静止。练习 2 会改变这个条件。

</details>

## 最近接近：先限定碰撞模型 {#closest-approach}

原子核电荷为 $+Ze$，α 粒子电荷为 $+2e$。把重靶核近似看作固定，初始位置很远，核外相互作用只按静电斥力处理；无穷远处势能取零：

$$K_\infty=K(r)+\frac{k(2e)(Ze)}{r},\qquad k=\frac{1}{4\pi\varepsilon_0}.$$

<img src="/assets/img/physics-nuclear-approach.svg" alt="Explanation diagram, not to scale: a head-on alpha path turns back before a heavy fixed nucleus; an off-centre path curves past it. The marked distance is centre-to-centre separation, not a radius measurement." width="520" height="340" data-lazy-ignore="true">

对于**正碰**，$K(r_{\min})=0$，于是：

$$r_{\min}=\frac{k(2e)(Ze)}{K_\infty}.$$

靶电荷固定时，初动能加倍会使正碰转折距离减半。若散射仍符合核外库仑场，转折距离只给出核尺寸的**上限估计**：α 粒子没有探到表面，不能把该距离直接称为核半径。这里忽略 α 粒子尺寸、靶核反冲和核力。核半径通常为几个飞米；1 fm 是一米的千万亿分之一。

$$1\,\mathrm{fm}=10^{-15}\,\mathrm m.$$

### 例题 1：计算后限定结论 {#example-1}

*Self-written.*

An alpha particle approaches a fixed gold nucleus head-on from far away with kinetic energy $5.0\,\mathrm{MeV}$. Use $Z=79$, $e=1.60\times10^{-19}\,\mathrm C$, $k=8.99\times10^9\,\mathrm{N\,m^2\,C^{-2}}$ and $1\,\mathrm{MeV}=1.60\times10^{-13}\,\mathrm J$. Estimate the closest separation. Would it prove that the gold nucleus has that radius?

$$K_\infty=8.0\times10^{-13}\,\mathrm J,\qquad r_{\min}=\frac{(8.99\times10^9)(2)(79)(1.60\times10^{-19})^2}{8.0\times10^{-13}}\approx4.5\times10^{-14}\,\mathrm m=45\,\mathrm{fm}.$$

正碰且重靶固定，才适合这样列能量账。所得距离远大于通常的核半径；在这个模型下它是上限估计，不是“金核半径等于 45 fm”的证据。α 粒子离开时静电势能降低，动能重新增加。

## 电子衍射：用图样推断尺寸 {#electron-diffraction}

电子的 de Broglie 波长为 $\lambda=h/p$。使用动量范围很窄的电子束、薄靶，以及沿散射角扫描的探测器。要分辨核尺度结构，波长需与核尺寸相当。高能电子受正核吸引，与 α 粒子受到斥力不同。角强度图有很强的前向峰、极小值和较弱的侧峰结构。

<img src="/assets/img/physics-nuclear-diffraction.svg" alt="Teaching schematic of electron intensity against scattering angle: strongest at zero angle, then a nonzero minimum and a weaker side maximum. This is an explanatory pattern, not a measured dataset or a universal zero-intensity rule." width="520" height="340" data-lazy-ignore="true">

这是参考 June 2024 Q15（键 B）的定性教学示意，不是复制原图或实测记录；不能坚持实测极小值一定为零。在相同散射模型及波长下，更大的核尺寸通常使对应极小角变小。波长分散会使特征变模糊。定量推断尺寸必须先说明模型和角度约定。

探测核尺度的电子通常不满足低速近似，应使用题给动量或波长，不能直接用非相对论动能公式反求动量。本课不新增相对论推导或要求背诵某个衍射尺寸系数。

### 例题 2：使用题给尺寸模型 {#example-2}

*Self-written. The relation below is supplied for this task, not asserted as a universal nuclear-scattering law.*

Electrons have momentum $3.0\times10^{-19}\,\mathrm{kg\,m\,s^{-1}}$. The first minimum is at $20^\circ$. For this task use $R\sin\theta_{\min}=0.61\lambda$, where the angle is measured from the incoming beam, and $h=6.63\times10^{-34}\,\mathrm{J\,s}$. Find the wavelength and radius estimate.

$$\lambda=\frac{6.63\times10^{-34}}{3.0\times10^{-19}}=2.21\times10^{-15}\,\mathrm m,\qquad R=\frac{0.61(2.21\times10^{-15})}{\sin20^\circ}\approx3.9\,\mathrm{fm}.$$

这里得到的是依赖题给模型的尺寸估计，不是 α 转折距离上限。须区分半径和直径，系数与角度必须属于同一个模型；此处也没有用低速近似反推电子速率。

## 半径数据与平均核密度 {#radius-and-density}

经验关系为 $R=R_0A^{1/3}$，其中 $A$ 是核子数，$R_0$ 是由数据拟合的长度尺度。计算应沿用题目或数据提供的取值，不能悄悄换成自己熟悉的常量。把原子核近似为球体，质量近似为 $A m_u$：

$$V=\frac43\pi R^3=\frac43\pi R_0^3A,\qquad \rho=\frac{A m_u}{(4/3)\pi R_0^3A}=\frac{3m_u}{4\pi R_0^3}.$$

核子数约去，因此模型预测不同原子核的**平均**密度近似相同；这不能证明每个原子核内部处处密度相同。半径随核子数的立方根增加，体积与质量则近似随核子数成正比。

### 例题 3：从一个核转到另一个核 {#example-3}

*Adapted from OxfordAQA 9630 PH04 January 2024 Q7.2; QP p.17 and MS p.18 read. Ratio reasoning is made explicit; no official marks assigned.*

A helium-4 nucleus has radius $1.68\times10^{-15}\,\mathrm m$. Assuming the same fitted radius law, estimate the radius of gold-197 in fm.

$$\frac{R_{\mathrm{Au}}}{R_{\mathrm{He}}}=\left(\frac{197}{4}\right)^{1/3},\qquad R_{\mathrm{Au}}=1.68\left(\frac{197}{4}\right)^{1/3}\,\mathrm{fm}\approx6.16\,\mathrm{fm}.$$

共用的长度尺度在比值中约去。直接把核子数比当作半径比会高估尺寸。题给氦核参考值对应的拟合尺度可能与其他示例数据不同，这道题应保留自己的参考条件。

## 数据探究：自己选择作图量 {#data-radius-records}

*Self-written; constructed radius records for teaching, not experimental measurements. Treat each radius uncertainty as ±0.05 fm for this task only.*

Choose graph axes that can test $R\propto A^{1/3}$ and estimate the length scale. Use a free intercept first, inspect residuals, and assess whether an intercept of zero is consistent with the stated uncertainty. Calculate the predicted average density using $m_u=1.66\times10^{-27}\,\mathrm{kg}$. Would this establish uniform density inside every nucleus?

| Nucleon number A | Radius / fm |
| --- | --- |
| 8 | 2.42 |
| 27 | 3.58 |
| 64 | 4.83 |
| 125 | 5.98 |
| 216 | 7.22 |

<details markdown="1">
<summary>提示</summary>

先尝试对核子数做幂变换。把拟合长度由飞米转为米后再取立方。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

画 $R/\mathrm{fm}$ 对 $A^{1/3}$ 图。最小二乘直线斜率为 1.20、截距为 0.006，拟合尺度约 1.20 fm；半径残差均在 0.05 fm 内。按这个教学精度，小截距与零相容。模型给出的平均密度约为 $2.3\times10^{17}\,\mathrm{kg\,m^{-3}}$。它支持近似平均密度模型，不能证明核内逐点均匀。**再尝试：**每个半径都加上固定 +0.20 fm 零点误差：自由截距拟合的斜率不变，截距平移；强制过原点则会高估长度尺度，低估密度。

</details>

## 练习 {#practice}

### 练习 1：论证密度模型 {#question-1}

*Adapted from OxfordAQA 9630 PH04 January 2024 Q7.1; QP p.17 and MS p.18 read. Scaling extension is self-written.*

Assume $R=R_0A^{1/3}$, a spherical nucleus and mass $A m_u$. Show that average density is independent of A. Then predict the radius and volume factors when nucleon number increases eightfold.

<details markdown="1">
<summary>提示</summary>

先分别写质量与体积，再相除。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\rho=\frac{A m_u}{(4/3)\pi(R_0A^{1/3})^3}=\frac{3m_u}{4\pi R_0^3}.$$

结果不含核子数。核子数增至八倍，半径增至两倍，体积增至八倍。**再尝试：**模型中半径变为三倍，核子数应为 27 倍。

</details>

### 练习 2：偏心最近处仍有动能 {#question-2}

*Adapted from OxfordAQA 9630 PH04 January 2024 Q10; QP p.20 original path viewed and MS p.19 key C read. Open calculation restates the geometry; the head-on comparison is self-written.*

An alpha particle starts far from a fixed nucleus of charge $+82e$ with kinetic energy $2.1\times10^{-12}\,\mathrm J$. Its off-centre path has closest separation $4.5\times10^{-14}\,\mathrm m$. Use the constants in Example 1. Find its kinetic energy there and explain why setting it to zero would fail.

<details markdown="1">
<summary>提示</summary>

守恒总动能加静电势能；注意这不是正碰。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$K_{\min}=2.1\times10^{-12}-\frac{(8.99\times10^9)(2)(82)(1.60\times10^{-19})^2}{4.5\times10^{-14}}\approx1.3\times10^{-12}\,\mathrm J.$$

最近处仍有切向运动，径向速度为零不代表总速率为零。**再尝试：**同样初动能改为正碰，最近距离约 18 fm，小于偏心路径的值。

</details>

### 练习 3：反推核子数 {#question-3}

*Self-written.*

A nucleus with $A=64$ and a second nucleus follow the same radius law. The second radius is 1.50 times the first. Infer its nucleon number and compare the two average densities.

<details markdown="1">
<summary>提示</summary>

把半径比取立方后，才对应核子数比。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$A_2=64(1.50)^3=216.$$

模型内两者平均密度相等。**再尝试：**半径加倍要求质量变成八倍，不是两倍。

</details>

### 练习 4：分别改变探针与靶核 {#question-4}

*Self-written transfer task; qualitative pattern informed by OxfordAQA 9630 PH04 June 2024 Q15, QP p.25 original graphs viewed and MS p.21 key B read.*

Sketch how the angular intensity pattern changes when the electron momentum range is broadened. Then use the supplied size relation in Example 2 to predict the change of the first-minimum angle if momentum doubles for the same target. Does the angle halve exactly?

<details markdown="1">
<summary>提示</summary>

先区分特征模糊与位置移动；第二次比较保持靶核半径不变。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

波长分散会使极小值与侧峰变模糊。动量加倍使波长减半，在题给模型中 $\sin\theta_{\min}$ 减半。初始为 $20^\circ$ 时，新角度约 $9.8^\circ$；除非采用小角近似，否则角度不必恰好减半。**再尝试：**波长固定而核尺寸变大，对应极小角向前向移动。

</details>

### 练习 5：判断固定偏差的后果 {#question-5}

*Self-written.*

A radius instrument adds the same positive offset to all records. A student forces a radius-versus-cube-root graph through the origin and reports a higher scale constant and a lower density. Explain the direction of both biases and propose a diagnostic comparison.

<details markdown="1">
<summary>提示</summary>

自由截距直线能区分固定偏移和比例变化。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

固定偏移使全部纵坐标升高，强制过原点会把偏移并入更大的斜率。由于 $\rho\propto R_0^{-3}$，推算密度偏低。应比较自由截距、强制截距的拟合及残差；正截距提示偏移，但不能唯一证明原因。**再尝试：**若误差是纯比例校准误差，即使允许自由截距，斜率也会改变。

</details>

### 练习 6：独立选择尺寸与密度关系 {#question-6}

*Self-written.*

For a model nucleus with $A=216$, use $R_0=1.20\,\mathrm{fm}$ and $m_u=1.66\times10^{-27}\,\mathrm{kg}$. Estimate radius and average density. A Coulomb experiment turns an alpha particle at 30 fm. Which length represents the radius model and which is a turning-distance bound?

<details markdown="1">
<summary>提示</summary>

球体体积要用立方米；再判断两种实验各自测量什么。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$R=1.20(216)^{1/3}=7.20\,\mathrm{fm},\qquad \rho=\frac{216(1.66\times10^{-27})}{(4/3)\pi(7.20\times10^{-15})^3}\approx2.3\times10^{17}\,\mathrm{kg\,m^{-3}}.$$

7.20 fm 来自题给经验半径模型；30 fm 是核外转折距离，不是另一个实测核半径。**再尝试：**为什么把 30 fm 当半径会低估密度？

</details>

## 速查 {#quick-reference}

| 先判断 | 模型与限制 |
| --- | --- |
| 正碰，重靶固定 | $K_\infty=k(2e)(Ze)/r_{\min}$；只作上限估计 |
| 偏心轨迹 | 最近处保留动能 |
| 电子尺寸证据 | $\lambda=h/p$；按指定散射模型解释 |
| 球体平均密度模型 | $R=R_0A^{1/3}$；$m\approx A m_u$ |

[上一课：热学](/zh/alevel/a2-physics/thermal-physics/) · [课程目录](/zh/alevel/a2-physics/) · [下一课：质量与结合能](/zh/alevel/a2-physics/mass-and-binding-energy/)

## 来源与范围 {#sources}

OxfordAQA 9630 PH04，[大纲正文 v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) 3.12.1，印刷第 28 页/PDF 第 27 页，2026-10-21 核对。January 2024 [QP](https://drive.google.com/file/d/1hByI4GGJhjdx9xOLQ-IGzT3-xCQsW_mV/view) 第 17/20 页与配套 [MS Version 1.0 Final](https://drive.google.com/file/d/1zmUrY-MlADO-jrtdY2kvRNR_b9RZfEyh/view) 第 18–19 页支持例题 3 和练习 1–2；June 2024 [QP](https://drive.google.com/file/d/1eA1Yb4KcuFOImkJ0it6rYzyS8R-JKA6K/view) 第 25 页与 [MS Version 1.0 Final](https://drive.google.com/file/d/1Xw_hX-WCv-vkdKVuqcYFj8L2GszlmKv8/view) 第 21 页支持衍射图样讨论，已目视原图。Jim Breithaupt 第 24.1 节印刷第 420–421 页/PDF 第 436–437 页辅助教学组织。其余示范、记录、任务与 SVG 为自拟；例题 2 的尺寸关系是题给模型。本页属于首批核能学习样章，不代表完整 PH04。

教师资料库 QP/MS 链接可能需要访问权限。
