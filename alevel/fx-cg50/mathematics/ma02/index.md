---
layout: subjects
title: fx-CG50 · MA02：混合卷 PSM1
description: 三角全解、二项概率、离散期望、连接粒子与速度图像的计算器应用。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
cg50_unit: ma02
toc_headings: h2, h3
permalink: /alevel/fx-cg50/mathematics/ma02/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

PSM1 包含纯数、统计和力学。计算前先识别题目所在部分，再检查角度、分布参数或力学正方向。本页题意为英文改写，参考 [MA02 January 2025 QP]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf' | relative_url }}) 与[配套 MS]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf' | relative_url }})。

## 三角方程：主值之后找全解 {#ma02-trig}

**Q4(b)(ii)，英文题意改写：Solve $\tan y=-4/7$ for $0\le y\le2\pi$.** MS pp9–10。

1. 在 **计算·矩阵 → SHIFT → MENU** 把角度设为 **弧度**。
2. 按 `SHIFT → tan → ( → (−) → 4 → ÷ → 7 → ) → EXE`，读取主值约 $-0.519146114$。左括号手动输入。
3. 此主值不在给定区间。用未舍入的主值加 $\pi$，得到 $2.622446539\ldots$；再加 $\pi$，得到 $5.764039193\ldots$。
4. 按三位有效数字写 $y=2.62,5.76$。分别代回 $\tan y$，应接近 $-4/7$。

**答卷保留：** 周期为 $\pi$，一般解 $y=\arctan(-4/7)+k\pi$，以及区间内两个解。单独抄反三角主值会漏解；若方程的角为 $2x+\alpha$，还须先把 $x$ 的范围转换成角的范围，最后解回 $x$。

## 二项概率：单点与严格右尾 {#ma02-binomial}

**Q6(a)–(b)，英文题意改写：For $X\sim\operatorname{Bin}(40,0.09)$, find $P(X=6)$ and $P(X>4)$.** MS p13。

按[二项分布通用教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-26)进入主菜单 **分布 → 二项分布**。

1. “尾部”选单点 `F4`；$x=6$，试验次数 $n=40$，成功概率 $p=0.09$。
2. 执行，选中概率后按 `OPTN → F1（查看）` 读完整值 $0.0826057661\ldots$，四位小数为 $0.0826$。
3. 返回参数页。$X>4$ 对整数变量等价于 $X\ge5$；选右尾 `F3`，边界填 $5$，其余参数不变。
4. 得到 $0.2897108319\ldots$，四位小数为 $0.2897$。
5. 也可改成左尾 $x=4$，读 $P(X\le4)=0.7102891681\ldots$，再取补事件检查。

**答卷保留：** $X$ 的分布和所求事件；右尾边界为 $5$，不是 $4$。若需要展示方法，写 $1-P(X\le4)$，不要只写无标签的小数。

本题单日均值 $np=3.6$、方差 $np(1-p)=3.276$，可在 **计算·矩阵** 核对。不同独立日期的总人数方差可以相加，但成功概率不同时，不能直接把所有天数合并成一个同参数二项分布。

## 离散期望：把概率权重输入成频数 {#ma02-expectation}

**Q8(a)，英文题意改写：$A$ takes values $1,5,9,14$ with probabilities $k,5k,9k,14k$. Show that $E(A)=303/29$.** MS p15。

先由概率和为 $1$ 得 $29k=1$，所以 $k=1/29$。

1. 进入 **统计**，在可用的列表输入数据值 $1,5,9,14$。
2. 在另一可用列表输入权重 $1,5,9,14$。这列用于频数；它不是第二组测量值。
3. 按[频数设置教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-25)，把“单变量X列表”设为数据值列表，“单变量频数”设为权重列表。
4. 单变量计算显示 $n=29$、$\bar x=10.44827586\ldots$。这里 $n=29$ 是人为选择的权重总和，不是题目给出的样本量。
5. 在 **计算·矩阵** 输入 `(1 × 1 + 5 × 5 + 9 × 9 + 14 × 14) ÷ 29 → EXE`，核对精确结果 $303/29$。

$$\begin{aligned}
E(A)&=\sum aP(A=a)\\
&=\frac{1+25+81+196}{29}=\frac{303}{29}.
\end{aligned}$$

**答卷保留：** 归一化方程、$k$、期望的加权算式。这是 show that，统计屏幕上的平均数不能代替推导。

若继续核对该分布的方差，须使用**总体标准差**的平方，或 $E(A^2)-E(A)^2$；不要使用样本标准差 $s_x$。一般概率不一定能方便地转换为整数权重，可直接按概率作加权计算。

## 连接粒子：先选两边的正方向 {#ma02-pulley}

**Q9，英文题意改写：Particles of masses $0.7$ kg and $0.4$ kg are connected over a smooth pulley. Find the acceleration after release.** MS p16；模型条件以原卷为准。

取 $0.7$ kg 粒子向下、$0.4$ kg 粒子向上为各自正方向。绳轻且不可伸长、滑轮光滑，因此两边张力相同、加速度大小相同。

$$0.7g-T=0.7a,\qquad T-0.4g=0.4a.$$

1. 相加消去 $T$，得 $a=(0.7-0.4)g/(0.7+0.4)$。
2. **计算·矩阵** 输入 `(0.7 − 0.4) × 9.8 ÷ (0.7 + 0.4) → EXE`，得到 $2.672727\ldots\ \mathrm{m\,s^{-2}}$，按 MS 给 $2.7\ \mathrm{m\,s^{-2}}$。
3. 用未舍入的 $a$ 代入 $T=0.4(g+a)$，可得 $4.9890909\ldots\ \mathrm N$，再代回重粒子的方程检查；此项是额外核验。

**答卷保留：** 两个有正方向的运动方程及消元。不能把两物体的总重量 $1.1g$ 当作驱动合力；内部张力相消后，驱动力来自重量差。

## 速度函数：最大值、平均速率与分段距离 {#ma02-motion}

**Q10(a)–(c)，英文题意改写：A particle has $v=-0.5t^2+1.9t$ for $0\le t\le2$, then its speed decreases uniformly to zero. Find its maximum velocity and use a total distance of $56/3$ m to determine the stopping time.** MS pp17–19。

### 前两秒：先求导，再积分

纸上写 $a=dv/dt=1.9-t$，所以驻点在 $t=1.9$，且 $v''=-1<0$。

1. **计算·矩阵** 输入 `(-0.5) × 1.9² + 1.9 × 1.9 → EXE`，得最大速度 $1.805\ \mathrm{m\,s^{-1}}$。
2. 数值积分输入 $-0.5X^2+1.9X$，下限 $0$、上限 $2$，得 $37/15\approx2.4666667$ m。
3. 这段 $v\ge0$，故积分也是距离；除以时间 $2$ 得平均速率 $37/30\ \mathrm{m\,s^{-1}}$。

### 之后：用三角形面积表示距离

$$v(2)=1.8,\qquad \frac{56}{3}-\frac{37}{15}=16.2.$$

1. 在 **计算·矩阵** 输入 `56 ÷ 3 − 37 ÷ 15 → EXE`，得到剩余距离 $16.2$ m。
2. 匀减速阶段的速度—时间图为三角形，$\frac12(1.8)(T-2)=16.2$。
3. 输入 `2 + 2 × 16.2 ÷ 1.8 → EXE`，得到 $T=20$ s。

**答卷保留：** 最大值的导数判断、积分原函数、平均速率定义、分段距离和三角形模型。其他题目若速度变号，总距离应分段积分 $\lvert v\rvert$，不能把位移绝对值当作距离。

## 单元完成检查 {#ma02-check}

- 反三角函数后继续利用周期找全解。
- 离散尾概率先把严格不等号改成整数边界。
- 概率权重与样本频数的含义分开；期望写出加权计算。
- 力学正方向在建模前选定；速度积分先判断是否变号。

[下一单元：MA03 纯数 P2]({{ '/alevel/fx-cg50/mathematics/ma03/' | relative_url }}) · [返回考试应用路线]({{ '/alevel/fx-cg50/mathematics/' | relative_url }})。

</div>
