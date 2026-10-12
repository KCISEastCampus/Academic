---
layout: subjects
title: fx-CG50 · MA03：纯数 P2
description: 中矩形法、指定迭代、Simpson 法、向量、旋转体与参数微积分的输入和答卷要求。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
cg50_unit: ma03
toc_headings: h2, h3
permalink: /alevel/fx-cg50/mathematics/ma03/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

P2 里指定数值方法的题目，重点是**照题目的方法算**。本页真题题意为英文改写，参考 [MA03 January 2025 QP]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma03-2025-january-question-paper.pdf' | relative_url }}) 与[配套 MS]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma03-2025-january-mark-scheme.pdf' | relative_url }})。

先掌握[表格]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-20)、[Ans]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#task-14)、[导数与积分模板]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#chapter-7)。积分、迭代和参数曲线的三角函数设为 **弧度**；向量夹角按题目需要改成度数。

## 中矩形法：五个小区间对应五个中点 {#ma03-midordinate}

**Q2(a)，英文题意改写：Use the mid-ordinate rule with five equal strips to estimate $\int_0^3 5^{1-x}\,dx$, to three decimal places.** MS p5。

$$h=\frac{3-0}{5}=0.6,\qquad x_{\text{mid}}=0.3,0.9,1.5,2.1,2.7.$$

1. 在 **表格** 采用 Y=，在空的 Y 行输入 $5^{1-X}$。整个 $1-X$ 放在指数模板内，输入完用右方向键离开。
2. 按 `F5（设定）`，开始 $0.3$、终止 $2.7$、步长 $0.6$；只选中这一函数，按 `F6（表）`。
3. 选中 Y 的数值格，可读屏幕底部的完整值。不要只使用表格列内较短的小数。

| 中点 $x$ | $5^{1-x}$，供核对 |
| --- | --- |
| $0.3$ | $3.085169314\ldots$ |
| $0.9$ | $1.174618943\ldots$ |
| $1.5$ | $0.4472135955\ldots$ |
| $2.1$ | $0.1702679845\ldots$ |
| $2.7$ | $0.06482626387\ldots$ |

4. 在 **计算·矩阵** 输入 $0.6(5^{0.7}+5^{0.1}+5^{-0.5}+5^{-1.1}+5^{-1.7})$，用原表达式避免抄回舍入数值。
5. 执行得 $2.965257660\ldots$，按题意写 **$2.965$**。

**答卷保留：** 中点、函数值、步长和加权算式。中矩形不取端点，也不使用梯形法的内部权重 $2$。直接定积分约为 $3.081821275$，可作独立量级检查，不能替代题目指定的估计。

## 指定迭代：每一步保留内部精度 {#ma03-iteration}

**Q2(b)，英文题意改写：Show that the intersection of $y=5^{1-x}$ and $y=2x-3$ lies between 1.6 and 1.7. Then use $x_{n+1}=\frac12(3+5^{1-x_n})$, with $x_1=1.6$, to find $x_2,x_3$.** MS pp5–6。

先设 $g(x)=5^{1-x}-2x+3$。

1. 用 **计算·矩阵** 分别代入 $1.6$ 和 $1.7$，得 $g(1.6)\approx0.180730788$、$g(1.7)\approx-0.075868681$。
2. $g$ 在区间连续，且两端异号，因此区间内有根。连续性与符号变化要写在纸上。
3. 输入 `1.6 → EXE`，建立初始 `Ans`。
4. 下一行输入 $0.5(3+5^{1-\mathrm{Ans}})$，Ans 用 `SHIFT → (−)`。执行得 $x_2=1.690365394\ldots$。
5. 从空白输入行按上方向键两次，选中历史中的**递推式**；按 `EXE` 进入编辑，核对式中仍为 Ans，再按 `EXE` 执行，得 $x_3=1.664598284\ldots$。两步之间不要执行其他计算，以免覆盖 Ans。
6. 只在答卷舍入：$x_2=1.690,\ x_3=1.665$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/ma/ma03-iteration.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="同一 Ans 递推式连续算出 1.690365394 和 1.664598284"><figcaption>两次执行同一递推式，中间值保留完整精度。</figcaption></figure>
</div>

**答卷保留：** 异号值、连续性结论、题目给定的递推式与每一步值。若先把 $x_2$ 舍入为 $1.690$ 再输入，就不再使用同样的内部精度。

方程求解器可以在完成后检查最终交点约 $1.670$，但不能用该根代替题目要求的两次迭代。给定两次迭代不等同于要求迭代到收敛。

## Simpson 法：偶数小区间与交替权重 {#ma03-simpson}

**自拟操作练习：Use Simpson's rule with four equal strips to estimate $\int_0^2x^4\,dx$.**

1. **表格** 输入 $X^4$，开始 $0$、终止 $2$、步长 $0.5$。
2. 得五个端点值 $0,\frac1{16},1,\frac{81}{16},16$。
3. 在 **计算·矩阵** 输入 `0.5 ÷ 3 × (0 + 16 + 4 × (1 ÷ 16 + 81 ÷ 16) + 2 × 1) → EXE`。
4. 得 $77/12=6.416666667\ldots$；独立定积分为 $32/5=6.4$。

$$S=\frac h3[y_0+y_4+4(y_1+y_3)+2y_2].$$

**答卷保留：** $h=0.5$、表格、权重 $1,4,2,4,1$。标准复合 Simpson 法要求小区间数为偶数；奇数个小区间不能直接套这一公式。梯形、中矩形和 Simpson 的差别在于取值位置与权重，而不只是最后的乘数。

## 向量：分清方向、模长与锐角 {#ma03-vectors}

**Q4，英文题意改写：For $A=(2,-3,-1)$ and $B=(-2,-1,4)$, find $\overrightarrow{AB}$, its length and its acute angle to a line with direction $(1,-2,3)$.** MS pp8–9。

$$\mathbf u=\overrightarrow{AB}=B-A=(-4,2,5),\qquad \mathbf d=(1,-2,3).$$

1. **计算·矩阵** 逐项核对 $-2-2=-4,\ -1-(-3)=2,\ 4-(-1)=5$。
2. 根号模板输入 $(-4)^2+2^2+5^2$，得 $\sqrt{45}=3\sqrt5$。
3. 输入 `(-4) × 1 + 2 × (-2) + 5 × 3 → EXE`，得点积 $7$。
4. 设角度为 **度数**。按 `SHIFT → cos`，手动左括号，再输入 $7/(\sqrt{45}\sqrt{14})$，右括号后 `EXE`。
5. 得 $\theta=73.80623073\ldots^\circ$，按原题取最近 $0.1^\circ$：$73.8^\circ$。

求直线间**锐角**用

$$\cos\theta=\frac{\lvert\mathbf u\cdot\mathbf d\rvert}{\lVert\mathbf u\rVert\lVert\mathbf d\rVert}.$$

若计算出钝角，用其补角，或先对点积取绝对值。向量方向仍应正确，不能因为锐角不变就把 $\overrightarrow{AB}$ 和 $\overrightarrow{BA}$ 混写。需要向量模板时可参考[通用向量操作]({{ '/alevel/fx-cg50/further-mathematics/' | relative_url }}#fm-vectors)。

Q4(c)(ii) 的相交模型可选两分量联立：

$$3+\lambda=2-4\mu,\qquad -15+3\lambda=-1+5\mu.$$

化为 $\lambda+4\mu=-1,\ 3\lambda-5\mu=14$。二元联立输入 $1,4,-1$ 与 $3,-5,14$，得 $\lambda=3,\mu=-1$；再用 $b-2\lambda=-3+2\mu$ 得 $b=1$，检查三个分量全都一致。

**答卷保留：** 坐标相减、点积公式、夹角计算；交点题还须写出分量方程并核验剩余分量。

## 旋转体：平方整个函数，答案保留 exact {#ma03-volume}

**Q5，英文题意改写：The region under $y=1+\sin x$ from $x=0$ to $x=\pi/3$ is rotated about the x-axis. Find the exact volume.** MS p10。

$$V=\pi\int_0^{\pi/3}(1+\sin x)^2\,dx.$$

1. 角度改回 **弧度**。
2. 按[积分模板]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-23)，被积函数输入 $(1+\sin(X))^2$；`sin` 后的左括号手动输入，外面的平方作用于整个和。
3. 下限 $0$、上限 $\pi/3$。执行后在下一行输入 $\pi\times\mathrm{Ans}$，得 $7.396220093\ldots$。
4. 另输入 $\pi(\pi/2+1-\sqrt3/8)$，核对同值。

纸上用 $\sin^2x=(1-\cos2x)/2$ 展开：

$$\begin{aligned}
V&=\pi\left[\frac32x-2\cos x-\frac14\sin2x\right]_0^{\pi/3}\\
&=\pi\left(\frac\pi2+1-\frac{\sqrt3}{8}\right).
\end{aligned}$$

**答卷保留：** 旋转体体积公式、恒等式、积分与上下限代入，最后写精确表达式。数值积分不会替你生成 exact answer。

## 参数曲线：分别求导，再相除 {#ma03-parametric}

**自拟操作练习：For $x=t^2+1,\ y=t^3-t$, find the tangent at $t=2$.**

$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{3t^2-1}{2t}.$$

1. **计算·矩阵** 代入 $t=2$，得点 $(5,6)$。
2. 输入 `(3 × 2² − 1) ÷ (2 × 2) → EXE`，得斜率 $11/4=2.75$。
3. 若用数值导数复核，在模板中以 X 暂代参数 $t$，分别计算 $X^3-X$ 和 $X^2+1$ 在 $X=2$ 的导数，得 $11,4$；再相除。
4. 答案为 $y-6=\frac{11}{4}(x-5)$。

数值模板的变量名不会自动区分参数与横坐标；本步 X 代表 $t$。若 $dx/dt=0$，不能直接除以零，应另判断垂直切线或驻点的情况。

**答卷保留：** $dx/dt,dy/dt$、斜率公式、点坐标与切线方程。

## 单元完成检查 {#ma03-check}

- 中矩形取中点，Simpson 取端点并使用交替权重。
- 迭代照指定公式执行，Ans 不被其他计算覆盖。
- 向量先算终点减起点，锐角再处理点积的符号。
- 三角积分使用弧度；exact 体积仍由纸笔积分给出。

[下一单元：MA04 统计 S2]({{ '/alevel/fx-cg50/mathematics/ma04/' | relative_url }}) · [返回考试应用路线]({{ '/alevel/fx-cg50/mathematics/' | relative_url }})。

</div>
