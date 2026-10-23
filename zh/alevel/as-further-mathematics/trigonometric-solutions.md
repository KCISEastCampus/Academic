---
title: "三角方程的完整通解"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/trigonometric-solutions/
permalink: /zh/alevel/as-further-mathematics/trigonometric-solutions/
toc_headings: "#start, #model, #demonstration, #non-special, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

反函数返回一个角，周期方程却要求所有角。先用单位圆说明为什么解已经列全，再整体还原角中的频率与相位。最后收起示范完成[独立题](#practice)。

## 开始前 {#start}

先修为单位圆、弧度、特殊角值与因式分解。下文整数参数均属于 $\mathbb Z$，除注明角度符号外都用弧度。学完应能写出完整的精确或反函数形式通解，包括非特殊值，并说明无解、排除或重复的情况。

<section class="lesson-check" markdown="1">

### 先修检查 {#entry}

**Entry check (self-written):** Mark the points where sine equals $1/2$ on a unit circle. Give their angles in $[0,2\pi)$. State the periods of sine, cosine and tangent.

<details markdown="1"><summary>提示</summary>

正弦对应纵坐标。

</details>

<details markdown="1"><summary>解答与核对</summary>

两角为 $\pi/6$、$5\pi/6$。正弦与余弦每 $2\pi$ 重复，正切在有定义处每 $\pi$ 重复。若只找到一点，画高度 $1/2$ 的水平线，找它与圆的两个交点。

</details>

</section>

## 为什么主值还不够 {#model}

正弦是单位圆上的纵坐标，所以一般的水平线会交圆两次；余弦是横坐标，对应角关于横轴对称。不断增加整周便得到同一坐标的全部角。正切是坐标比，对径两点的比值相同，所以半周就重复。由此可同时解释第二分支与周期。

![Unit circle marking two distinct points with y=1/2, at angles π/6 and 5π/6, and labelled cosine and sine axes.](/alevel/as-further-mathematics/diagrams/trig.svg){: width="560" height="465" }

正弦、余弦要有实解，必须 $-1\le k\le1$。取主值 $\alpha=\arcsin k$、$\beta=\arccos k$，全部解族为

$$\begin{aligned}
&\sin\theta=k:\quad\theta=\alpha+2n\pi\\
&\text{or }\theta=\pi-\alpha+2n\pi;\\
&\cos\theta=k:\quad\theta=\beta+2n\pi\\
&\text{or }\theta=-\beta+2n\pi.
\end{aligned}$$

对正切，任意实 $k$ 都有主值 $\gamma=\arctan k$，通解为 $\theta=\gamma+n\pi$。余弦为零时正切无定义，而这些解角不会落在该处。$k=\pm1$ 时正弦或余弦的两支重合，只需一支。右端为零时，正弦两支可合并为 $\theta=n\pi$，余弦则为 $\theta=\pi/2+n\pi$。

## 整体还原角 {#demonstration}

<section class="worked-example" markdown="1">

### 两支都保留，每一项都还原

**Demonstration (self-written):** Solve $\sin(2x-\pi/6)=1/2$ for all real x.

令 $\theta=2x-\pi/6$。先解整个角，不要直接把输入变量当作角；单位圆上的两个位置给出

$$\begin{aligned}
&2x-\pi/6=\pi/6+2n\pi\\
&\text{or }5\pi/6+2n\pi.\\
&2x=\pi/3+2n\pi\\
&\text{or }\pi+2n\pi.\\
&x=\pi/6+n\pi\\
&\text{or }\pi/2+n\pi.
\end{aligned}$$

输入的周期为 $\pi$，整数项也必须除以 2。取代表值 $x=\pi/6,\pi/2$，整角分别为 $\pi/6,5\pi/6$，正弦均为 $1/2$。任一实解都必须在模 $2\pi$ 意义下落在这两个圆上位置之一，仿射变换可逆，所以没有遗漏。

</section>

## 非特殊值与角度单位 {#non-special}

<section class="worked-example" markdown="1">

### 保留精确反函数表达式

**Demonstration (self-written):** Solve $\cos(3x+0.2)=0.3$ for all real x.

这不是特殊角余弦值；先以弧度定义 $\beta=\arccos(0.3)$，不要一开始就舍入。两个符号都需要：

$$\begin{aligned}
&3x+0.2=\beta+2n\pi\\
&\text{or }-\beta+2n\pi,\\
&x=\frac{\beta-0.2}{3}+\frac{2n\pi}{3}\\
&\text{or }\frac{-\beta-0.2}{3}+\frac{2n\pi}{3}.
\end{aligned}$$

代表值约为 $0.355368$ 与 $-0.488701$，周期 $2\pi/3$。通解代表值不必都为正，负角同样合法。代回得到整角 $\pm\beta$，从而核对余弦值。只在要求数值答案时最后舍入，不要舍入周期或定义用的反函数表达式。

</section>

角度制的整周与半周分别是 $360^\circ,180^\circ$。例如 $\tan(2x-30^\circ)=1$ 给出 $2x-30^\circ=45^\circ+180^\circ n$，所以 $x=37.5^\circ+90^\circ n$。计算器模式要与单位一致，但显示出的主值仍不能代替通解。

<section class="lesson-check" markdown="1">

### 补全整角步骤 {#scaffold}

**Scaffold (self-written):** Complete the two branches for $\cos(2x)=1/\sqrt2$, then divide the entire expression by 2.

<details markdown="1"><summary>提示</summary>

角 $\pi/4$ 的正负两支都要用。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&2x=\pm\pi/4+2n\pi,\\
&x=\pm\pi/8+n\pi.
\end{aligned}$$

代表角与周期都已经除以倍率。

</details>

</section>

## 独立完成 {#practice}

要求全部实解并说明完备性。不要直接除以可能为零的式子，必须先保留它为零的情况。

<section class="lesson-check" markdown="1">

### 第 1 题 {#practice-1}

**Independent task (self-written):** Solve $2\sin^2x-3\sin x+1=0$ for all real x. Explain why $x=\arcsin(1/2)$ alone is incomplete. Also solve $\tan(3x+\pi/4)=-1$.

<details markdown="1"><summary>提示</summary>

先把正弦整体作为代数未知数；正切以半周为周期。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&(2\sin x-1)(\sin x-1)=0,\\
&x=\pi/6+2n\pi,\\
&x=5\pi/6+2n\pi,\\
&x=\pi/2+2n\pi.\\[2pt]
&3x+\pi/4=-\pi/4+n\pi,\\
&x=-\pi/6+n\pi/3.
\end{aligned}$$

只给主值会遗漏正弦的第二支、整周重复，以及代数根 $\sin x=1$。端值只新增一个解族；正切部分把整角及周期都除以 3。漏支时回看[单位圆位置](#model)，再做重试 1。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题 {#practice-2}

**Independent task (self-written):** Solve $\sin(2x-0.4)=-0.3$ for all real x. Give an exact inverse-function form and decimal representatives to six decimal places. Justify the second branch and the period.

<details markdown="1"><summary>提示</summary>

本题反正弦主值为负，反射公式必须使用实际的负主值。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\alpha=\arcsin(-0.3),\\
&2x-0.4=\alpha+2n\pi\\
&\text{or }\pi-\alpha+2n\pi,\\
&x=\frac{\alpha+0.4}{2}+n\pi\\
&\text{or }\frac{\pi-\alpha+0.4}{2}+n\pi.
\end{aligned}$$

代表值为 $0.047654$ 与 $1.923143$，周期均为 $\pi$。第二个整角在单位圆上有相同纵坐标，两族都必要；整角每增加一周，输入只增加半周。漏第二支回看[单位圆](#model)，周期错回看[仿射还原](#demonstration)，再做重试 2。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题 {#practice-3}

**Independent task (self-written):** In degrees, solve $\tan(2x-30^\circ)=\sqrt3$ and $\cos(3x+60^\circ)=-1$ for all real x. Explain why two distinct cosine families are not needed.

<details markdown="1"><summary>提示</summary>

先解整角，再判断余弦两符号是否其实同族。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&2x-30^\circ\\
&=60^\circ+180^\circ n,\\
&x=45^\circ+90^\circ n;\\[2pt]
&3x+60^\circ\\
&=180^\circ+360^\circ n,\\
&x=40^\circ+120^\circ n.
\end{aligned}$$

余弦代表角 $180^\circ$ 与 $-180^\circ$ 相差一周，两族重合；正切在所列各角都有定义。

</details>

</section>

## 诊断与重试 {#retry}

漏零因子或没有排除不可能的正弦值，回看[坐标范围](#model)，再做重试 1；周期或非特殊角分支错，回看[整角步骤](#demonstration)，再做重试 2。先收起订正答案。

<section class="lesson-check" markdown="1">

### 重试 1 {#retry-1}

**Retry (self-written):** Solve $\sin x\cos x=0$ and $\sin x=1.2$ over the reals.

<details markdown="1"><summary>提示</summary>

保留两种零因子，检查正弦可能范围。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\sin x\cos x=0\Rightarrow x=n\pi/2.$$

解族 $x=n\pi$ 与 $x=\pi/2+n\pi$ 可合为这一族。$\sin x=1.2$ 无实解，因为 $1.2>1$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 2 {#retry-2}

**Retry (self-written):** Solve $\cos(2x+0.6)=-0.2$ for all real x. Keep an exact inverse-function form and explain its completeness.

<details markdown="1"><summary>提示</summary>

整角的两个反射位置都保留，再将每项除以 2。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\beta=\arccos(-0.2),\\
&x=\frac{\beta-0.6}{2}+n\pi\\
&\text{or }\frac{-\beta-0.6}{2}+n\pi.
\end{aligned}$$

两个位置覆盖整角一周内的全部可能，仿射还原可逆，所以解完整。

</details>

</section>

## 下一课后的回顾 {#later-review}

<section class="lesson-check" markdown="1">

### 混合回顾 {#review}

**Later review (self-written):** Solve $\cos(2x)=\cos x$ and $\tan(x/2)=1$ for all real x. Explain any algebraic roots or undefined values you reject.

<details markdown="1"><summary>提示</summary>

第一式自己选择表示方法，不要除掉可能为零的因子。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&2\cos^2x-\cos x-1=0,\\
&(2\cos x+1)(\cos x-1)=0,\\
&x=2n\pi\\
&\text{or }2\pi/3+2n\pi\\
&\text{or }-2\pi/3+2n\pi.\\[2pt]
&x/2=\pi/4+n\pi,\\
&x=\pi/2+2n\pi.
\end{aligned}$$

两个代数余弦值 $-1/2,1$ 都合法；正切解的整角处余弦均非零。漏族回看[单位圆](#model)，周期翻倍错误回看[整角](#demonstration)。

</details>

</section>

## 下一步 {#next-step}

无帮助通过对应重试后，进入[复数与根](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/)。现在完成[圆锥曲线回顾](/zh/alevel/as-further-mathematics/conics-and-loci/#later-review)，下一课后再回本页。

## 来源与范围 {#sources}

本页示范及练习均为**自拟题（self-written）**，无官方分值。FP1.6 包括特殊值与非特殊值的完整三角通解；本页不需要反三角函数微积分。

<details markdown="1"><summary>官方来源与样卷身份</summary>

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.6.
- FM01 specimen Q8; QP p.11, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/conics-and-loci/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/)
