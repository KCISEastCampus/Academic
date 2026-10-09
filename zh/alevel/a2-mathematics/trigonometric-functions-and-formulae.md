---
title: 三角函数与公式
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/trigonometric-functions-and-formulae/
permalink: /zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.4 三角函数与公式

运用反三角函数与倒数三角函数，证明恒等式，并选择合适的公式解三角方程。

- **学习：**逐一学习各个方法，再通过例题检查符号和取值区间。
- **作业帮助：**先查看[方法选择表](#choose-a-method)。计算前检查角度单位、无定义的取值及完整的解题区间。
- **复习：**先尝试[练习](#practice)，再打开解答，最后用[快速参考](#quick-reference)核对。

教材：第 3 章第 3.1–3.6 节（印刷版第 32–49 页）。本课依次介绍反三角函数、倒数三角函数、三角恒等式、和差角公式、$a\cos\theta+b\sin\theta$ 的形式，以及二倍角公式。

**开始前：**你应当熟悉正弦、余弦和正切函数的图像、三角函数精确值（exact value）、象限（quadrant）、弧度制（radians）、[反函数](/zh/alevel/a2-mathematics/functions/)和[图像变换](/zh/alevel/a2-mathematics/modulus-and-transformations/)。

本页所有例题与练习均为自拟题，并非官方真题。建议用时仅供参考；题目没有官方分值。

## 选择方法 {#choose-a-method}

| 任务 | 第一步 | 检查 |
|---|---|---|
| 反三角函数（inverse trigonometric function） | 使用反函数规定的值域 | 一个反函数值并不等于方程的全部解 |
| 倒数三角函数（reciprocal trigonometric function） | 改写成正弦或余弦的形式 | 保留无定义取值的限制 |
| 证明恒等式（identity） | 从一边出发，使用已知公式化简 | 不能把待证恒等式当作已知条件 |
| 和差角公式（compound angle formulae） | 展开或识别展开后的形式 | 余弦公式中的符号与括号内相反 |
| $a\cos\theta+b\sin\theta$ | 按题目要求的形式比较系数（compare coefficients） | 检查 $\alpha$ 所在象限 |
| 多倍角 | 使用二倍角公式或换一个角度变量 | 同时转换角度的取值区间 |

题目使用角度制（degrees）时，就按角度制计算；本课其余地方使用弧度制。中间步骤保留精确值；求小数答案时，保留计算器完整精度，最后再取近似值。

## 反三角函数（inverse trigonometric functions） {#inverse-trigonometric-functions}

求反函数之前，须先限制正弦、余弦、正切函数的定义域，使它们成为一一函数（one-to-one function）。

| 反函数 | 定义域（domain） | 反函数的值域（range） |
|---|---|---|
| $\sin^{-1}x$ | $-1\le x\le1$ | $-\frac\pi2\le y\le\frac\pi2$ |
| $\cos^{-1}x$ | $-1\le x\le1$ | $0\le y\le\pi$ |
| $\tan^{-1}x$ | 所有实数 $x$ | $-\frac\pi2<y<\frac\pi2$ |

例如，$\sin^{-1}\left(\frac12\right)=\frac\pi6$ 给出规定值域中的一个角。但在 $\sin\theta=\frac12$ 的方程中，若取值区间为 $[0,2\pi]$，就有**两个**解：$\frac\pi6$ 和 $\frac{5\pi}6$。

**注意：**$\sin^{-1}x$ 表示反函数，不是 $\frac1{\sin x}$。此外，$\sin^{-1}(\sin\theta)=\theta$ 只有在 $\theta$ 属于规定值域时才成立。例如，$\sin^{-1}\left(\sin\frac{5\pi}6\right)=\frac\pi6$。

把限制定义域后的原函数图像关于 $y=x$ 翻折，就得到反函数图像。

### 例题 1 — 定义域、值域与变换后的反函数图像 {#example-1--domain-range-and-a-transformed-inverse-graph}

**Question:** Find the domain and range of $y=\cos^{-1}(3x-2)$. Give three points for a sketch and solve $\cos^{-1}(3x-2)=\frac\pi3$.

$\cos^{-1}$ 的输入必须介于 $-1$ 与 $1$ 之间：

$$-1\le3x-2\le1\quad\Rightarrow\quad\boxed{\frac13\le x\le1}.$$

值域为 $\boxed{0\le y\le\pi}$。函数递减，图像经过

$$\left(\frac13,\pi\right),\quad\left(\frac23,\frac\pi2\right),\quad(1,0).$$

从 $y=\cos^{-1}x$ 的图像出发，作单向伸缩，伸缩因子为 $\frac13$，方向平行于 $x$ 轴；再平移 $\frac23$ 个单位，方向为 $x$ 轴正方向。

解方程时，得到 $3x-2=\cos\frac\pi3=\frac12$，所以 $\boxed{x=\frac56}$。

**检查：**$\frac56$ 属于定义域，$\frac\pi3$ 属于反函数的值域。若等号右边是 $\frac{4\pi}3$，方程就无解，因为这个值超出了值域。

## 倒数三角函数（reciprocal trigonometric functions） {#reciprocal-trigonometric-functions}

$$\cosec\theta=\frac1{\sin\theta},\qquad \sec\theta=\frac1{\cos\theta},$$

$$\cot\theta=\frac{\cos\theta}{\sin\theta}.$$

当 $\tan\theta$ 有定义且不为零时，$\cot\theta=\frac1{\tan\theta}$。用 $\frac{\cos\theta}{\sin\theta}$ 可以看清完整的定义域：例如，$\cot\frac\pi2=0$，尽管 $\tan\frac\pi2$ 无定义。

- **余割（cosecant）：**在 $\theta=k\pi$ 时无定义；周期（period）为 $2\pi$；函数值满足 $y\le-1$ 或 $y\ge1$。
- **正割（secant）：**在 $\theta=\frac\pi2+k\pi$ 时无定义；周期为 $2\pi$；函数值满足 $y\le-1$ 或 $y\ge1$。
- **余切（cotangent）：**在 $\theta=k\pi$ 时无定义；周期为 $\pi$；值域为所有实数，且在相邻渐近线之间递减。

这里 $k$ 是任意整数。无定义的取值对应竖直渐近线（vertical asymptote）。余割和正割取的是原图像**纵坐标的倒数**，不是把正弦和余弦图像关于 $y=x$ 翻折。

![余割、正割和余切在零到 2π 区间内的图像，虚线表示竖直渐近线。](/assets/img/trigonometric-reciprocals.svg)

### 例题 2 — 改变角度变量时，也要转换区间 {#example-2--transform-the-interval-as-well-as-the-angle}

**Question:** Solve $\sec\left(2\theta-\frac\pi3\right)=-2$ for $0\le\theta\le\pi$.

令 $\phi=2\theta-\frac\pi3$，则 $-\frac\pi3\le\phi\le\frac{5\pi}3$。方程变为

$$\cos\phi=-\frac12.$$

在转换后的区间内，$\phi=\frac{2\pi}3$ 或 $\frac{4\pi}3$，因此

$$\boxed{\theta=\frac\pi2,\ \frac{5\pi}6}.$$

**检查：**两个值都属于 $[0,\pi]$，对应角的余弦均非零。只取 $\cos^{-1}(-\frac12)=\frac{2\pi}3$ 会漏掉第二个解。

## 三角恒等式（trigonometric identities） {#trigonometric-identities}

从 $\sin^2\theta+\cos^2\theta=1$ 出发，两边除以 $\cos^2\theta$ 或 $\sin^2\theta$，得到

$$1+\tan^2\theta=\sec^2\theta,\qquad 1+\cot^2\theta=\cosec^2\theta.$$

每个恒等式都只在其中表达式有定义时成立。证明时，从等式的一边出发，使用已知恒等式化简到另一边。代入数值可以发现错误，但不能代替证明。

### 例题 3 — 证明恒等式 {#example-3--prove-an-identity}

**Question:** Prove $\sec\theta-\cos\theta=\sin\theta\tan\theta$ where both sides are defined.

从左边出发：

$$\begin{aligned}
\sec\theta-\cos\theta
&=\frac1{\cos\theta}-\cos\theta\\
&=\frac{1-\cos^2\theta}{\cos\theta}\\
&=\frac{\sin^2\theta}{\cos\theta}\\
&=\sin\theta\tan\theta.
\end{aligned}$$

这正是右边的表达式。限制条件为 $\cos\theta\ne0$。

**常见错误：**先假定待证结论成立，再进行变形，却没有说明每一步都可逆。

### 例题 4 — 消去参数（eliminate a parameter） {#example-4--eliminate-a-parameter}

**Question:** Given $x=3\sec\theta$ and $y=2\tan\theta$, eliminate $\theta$ and state the possible $x$ values.

使用 $\sec^2\theta-\tan^2\theta=1$：

$$\boxed{\frac{x^2}{9}-\frac{y^2}{4}=1}.$$

因为 $\sec\theta\le-1$ 或 $\sec\theta\ge1$，所以 $\boxed{x\le-3\text{ or }x\ge3}$。参数必须排除 $\theta=\frac\pi2+k\pi$。

**检查：**当 $\theta=0$ 时，$(x,y)=(3,0)$ 同时满足原方程和消参后的方程。当 $\theta=\pi$ 时，对应点为 $(-3,0)$，因此不能舍去负数对应的分支。

若参数的取值区间受到限制，也要在消参后的曲线上保留相应限制。

## 和差角公式（compound angle formulae） {#compound-angle-formulae}

$$\begin{aligned}
\sin(A+B)&=\sin A\cos B+\cos A\sin B,\\
\sin(A-B)&=\sin A\cos B-\cos A\sin B,\\
\cos(A+B)&=\cos A\cos B-\sin A\sin B,\\
\cos(A-B)&=\cos A\cos B+\sin A\sin B.
\end{aligned}$$

$$\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B},$$

$$\tan(A-B)=\frac{\tan A-\tan B}{1+\tan A\tan B}.$$

使用正切公式时，所有项都必须有定义，分母也必须非零。若右边某个正切值无定义，就改用正弦和余弦。

推导两角差的余弦公式时，在单位圆（unit circle）上取角度为 $A$ 和 $B$ 的两个点。余弦定理给出两点距离的平方为 $2-2\cos(A-B)$；用两点坐标计算，同一个距离的平方为

$$(\cos A-\cos B)^2+(\sin A-\sin B)^2.$$

展开后，用 $\sin^2 A+\cos^2 A=1$ 化简，得到 $2-2(\cos A\cos B+\sin A\sin B)$。令两种结果相等，就得到两角差的余弦公式。把 $B$ 换成 $-B$，得到两角和的公式；再利用余角关系推导正弦公式。正弦的和角公式除以余弦的和角公式，就得到正切的和角公式，前提是各式有定义。

### 例题 5 — 求精确值与识别公式 {#example-5--exact-value-and-recognising-a-formula}

**Question:** Find $\sin15^\circ$ exactly. Simplify $\sin\theta\cos\frac\pi4-\cos\theta\sin\frac\pi4$ and find the smallest positive value of $\theta$ at which the maximum occurs.

求精确值时，

$$\begin{aligned}
\sin15^\circ&=\sin(45^\circ-30^\circ)\\
&=\frac{\sqrt2}{2}\frac{\sqrt3}{2}-\frac{\sqrt2}{2}\frac12\\
&=\boxed{\frac{\sqrt6-\sqrt2}{4}}.
\end{aligned}$$

第二个表达式为 $\sin\left(\theta-\frac\pi4\right)$。最大值为 $1$，对应 $\theta-\frac\pi4=\frac\pi2+2k\pi$；满足条件的最小正角为 $\boxed{\theta=\frac{3\pi}4}$。

**检查：**$\sin15^\circ$ 为正，且小于 $\sin30^\circ=\frac12$。不能使用 $\sin(A-B)=\sin A-\sin B$ 这个错误等式。

## 化为一个正弦或余弦函数 {#sine-and-cosine-forms}

选择题目要求的正弦或余弦形式，**先展开，再比较系数**。例如，

$$r\cos(\theta-\alpha)=r\cos\alpha\cos\theta+r\sin\alpha\sin\theta.$$

对于 $a\cos\theta+b\sin\theta$，得到

$$r\cos\alpha=a,\qquad r\sin\alpha=b,\qquad r=\sqrt{a^2+b^2}.$$

取 $r>0$，条件是 $a,b$ 中至少一个不为零。确定 $\alpha$ 时，要同时检查**两个系数的符号**；仅凭 $\tan\alpha$ 的值不能确定象限。若 $a=b=0$，整个表达式为零，就不需要求角度。

若使用 $r\sin(\theta+\alpha)$，则应比较 $r\sin\alpha=a$ 和 $r\cos\alpha=b$。这里的角通常与余弦形式中的角不同。

### 例题 6 — 正弦形式、最大值与最小值 {#example-6--a-sine-form-maximum-and-minimum}

**Question:** Express $4\sin\theta-3\cos\theta$ as $r\sin(\theta-\alpha)$, with $r>0$ and $0<\alpha<90^\circ$. Find the maximum and minimum of $2+4\sin\theta-3\cos\theta$ and the angles at which they occur in $0\le\theta\le360^\circ$.

展开并比较系数：

$$r\cos\alpha=4,\qquad r\sin\alpha=3.$$

所以 $r=5$、$\alpha=\tan^{-1}\frac34=36.869897\ldots^\circ$，且

$$4\sin\theta-3\cos\theta=5\sin(\theta-\alpha).$$

最大值为 $\boxed{7}$，对应 $\boxed{\theta=126.9^\circ}$；最小值为 $\boxed{-3}$，对应 $\boxed{\theta=306.9^\circ}$。角度保留一位小数。

**检查：**当 $\theta=0$ 时，原式为 $-3$，正弦形式给出 $-5\sin\alpha=-3$。计算最后的角度之前，不要对 $\alpha$ 取近似值。

### 例题 7 — 用余弦形式解方程 {#example-7--solve-using-a-cosine-form}

**Question:** Solve $\cos\theta+\sqrt3\sin\theta=1$ for $0\le\theta\le2\pi$.

由 $r=2$、$r\cos\alpha=1$ 和 $r\sin\alpha=\sqrt3$，得到 $\alpha=\frac\pi3$。因此

$$2\cos\left(\theta-\frac\pi3\right)=1.$$

令 $\phi=\theta-\frac\pi3$，则 $-\frac\pi3\le\phi\le\frac{5\pi}3$。在这个区间内，$\cos\phi=\frac12$ 对应 $\phi=-\frac\pi3,\frac\pi3,\frac{5\pi}3$。

因此 $\boxed{\theta=0,\frac{2\pi}3,2\pi}$。

**检查：**题目包含两个端点，所以 $0$ 和 $2\pi$ 都要列出。代回原方程，三个解均成立。

## 二倍角公式（double angle formulae） {#double-angle-formulae}

在和差角公式中令 $B=A$：

$$\sin2A=2\sin A\cos A,$$

$$\begin{aligned}
\cos2A&=\cos^2 A-\sin^2 A\\
&=1-2\sin^2 A=2\cos^2 A-1,
\end{aligned}$$

$$\tan2A=\frac{2\tan A}{1-\tan^2 A}.$$

正切公式要求各项有定义且分母非零。选择余弦的二倍角形式时，尽量使方程只含**一种**三角函数。整理后还可得到

$$\sin^2 A=\frac{1-\cos2A}{2},\qquad\cos^2 A=\frac{1+\cos2A}{2}.$$

这些形式在[三角积分](/zh/alevel/a2-mathematics/integration-applications/#trigonometric-integrals)中很有用。

### 例题 8 — 因式分解时保留全部解 {#example-8--keep-solutions-when-factorising}

**Question:** Solve $\sin2x=\sin x$ for $0\le x\le2\pi$.

$$2\sin x\cos x-\sin x=0\quad\Rightarrow\quad\sin x(2\cos x-1)=0.$$

其中 $\sin x=0$ 给出 $x=0,\pi,2\pi$，而 $\cos x=\frac12$ 给出 $x=\frac\pi3,\frac{5\pi}3$。

$$\boxed{x=0,\frac\pi3,\pi,\frac{5\pi}3,2\pi}.$$

**常见错误：**两边除以 $\sin x$，会漏掉 $0,\pi,2\pi$。应先因式分解，再把所有候选解代回原方程检查。

### 例题 9 — 推导另一个恒等式 {#example-9--derive-a-further-identity}

**Question:** Prove $\cos3A=4\cos^3 A-3\cos A$.

$$\begin{aligned}
\cos3A&=\cos(2A+A)\\
&=\cos2A\cos A-\sin2A\sin A\\
&=(2\cos^2 A-1)\cos A-2\sin^2 A\cos A\\
&=2\cos^3 A-\cos A-2(1-\cos^2 A)\cos A\\
&=4\cos^3 A-3\cos A.
\end{aligned}$$

**检查：**当 $A=0$ 时，两边均为 $1$。上面的代数推导证明了恒等式对所有实数角成立；只代入一个角度不能证明这一点。

## 练习 {#practice}

建议用时约 **35–45 分钟**。除非题目要求小数，否则给出精确答案。证明或消参时，写明所用限制条件。

### Q1 — 反函数值与图像 {#q1--inverse-values-and-graph}

Find $\sin^{-1}(-\frac12)$ and $\tan^{-1}(-\sqrt3)$ exactly. Find the domain, range and three sketch points for $y=\sin^{-1}(2x+1)$.

<details markdown="1">
<summary>提示</summary>

使用反函数规定的值域。解 $-1\le2x+1\le1$，确定图像的定义域。

</details>

<details markdown="1">
<summary>解答与检查</summary>

角度分别为 $\boxed{-\frac\pi6}$ 和 $\boxed{-\frac\pi3}$。定义域为 $\boxed{-1\le x\le0}$，值域为 $\boxed{-\frac\pi2\le y\le\frac\pi2}$。

函数递增，图像经过 $(-1,-\frac\pi2)$、$(-\frac12,0)$ 和 $(0,\frac\pi2)$。代入后，反三角函数的输入值依次为 $-1,0,1$。

</details>

### Q2 — 含倒数三角函数的方程 {#q2--reciprocal-equation}

Solve $\cosec\theta=-2$ for $0\le\theta\le360^\circ$. Give the asymptotes and period of $y=\cot\theta$ using radians.

<details markdown="1">
<summary>提示</summary>

使用 $\sin\theta=-\frac12$。注意两部分使用的角度单位不同。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\boxed{\theta=210^\circ,330^\circ}$。两个角的正弦值均为 $-\frac12$，所以倒数均为 $-2$。

余切函数的渐近线为 $\boxed{\theta=k\pi}$，其中 $k$ 为整数；周期为 $\boxed{\pi}$。零点为 $\frac\pi2+k\pi$，这些点处余切有定义，而正切无定义。

</details>

### Q3 — 恒等式及其定义域 {#q3--an-identity-and-its-domain}

Prove $\tan\theta+\cot\theta=\sec\theta\cosec\theta$ and state the restrictions.

<details markdown="1">
<summary>提示</summary>

把左边写成正弦和余弦的形式，再通分。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\begin{aligned}
\tan\theta+\cot\theta
&=\frac{\sin\theta}{\cos\theta}+\frac{\cos\theta}{\sin\theta}\\
&=\frac{\sin^2\theta+\cos^2\theta}{\sin\theta\cos\theta}\\
&=\frac1{\sin\theta\cos\theta}=\sec\theta\cosec\theta.
\end{aligned}$$

要求 $\sin\theta\ne0$ 和 $\cos\theta\ne0$ 同时成立。当 $\theta=\frac\pi4$ 时，两边都得到 $2$，可以用来检查，但不能代替证明。

</details>

### Q4 — 消去参数 {#q4--eliminate-the-parameter}

Eliminate $\theta$ from $x=2\cosec\theta$, $y=3\cot\theta$. State the possible $x$ values.

<details markdown="1">
<summary>提示</summary>

使用 $\cosec^2\theta-\cot^2\theta=1$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\frac{x^2}{4}-\frac{y^2}{9}=1},\qquad \boxed{x\le-2\text{ or }x\ge2}.$$

参数必须排除 $\theta=k\pi$。当 $\theta=\frac\pi2$ 和 $\frac{3\pi}2$ 时，原方程分别给出 $(2,0)$ 和 $(-2,0)$，确认两条分支都要保留。

</details>

### Q5 — 精确值与和差角方程 {#q5--exact-values-and-a-compound-angle-equation}

Find $\cos15^\circ$ exactly. Solve $\sin(\theta+\frac\pi6)=\cos\theta$ for $0\le\theta\le2\pi$.

<details markdown="1">
<summary>提示</summary>

求精确值时使用 $45^\circ-30^\circ$。展开正弦和角公式，再因式分解或整理方程，注意不能漏掉因子为零的情况。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\cos15^\circ=\frac{\sqrt6+\sqrt2}{4}}.$$

展开方程得到 $\frac{\sqrt3}{2}\sin\theta+\frac12\cos\theta=\cos\theta$，所以 $\sqrt3\sin\theta=\cos\theta$。

若 $\cos\theta=0$，方程不成立，所以这里除以 $\cos\theta$ 不会漏解。于是 $\tan\theta=\frac1{\sqrt3}$，$\boxed{\theta=\frac\pi6,\frac{7\pi}6}$。代回原方程，两个解分别使等式两边都等于 $\frac{\sqrt3}{2}$ 或 $-\frac{\sqrt3}{2}$。

</details>

### Q6 — 系数、符号与最值 {#q6--coefficients-signs-and-extrema}

Express $3\cos\theta-4\sin\theta$ as $r\cos(\theta+\alpha)$, with $r>0$ and $0<\alpha<90^\circ$. Find the maximum and minimum of $1+3\cos\theta-4\sin\theta$ and their angles in $0\le\theta\le360^\circ$, to one decimal place.

<details markdown="1">
<summary>提示</summary>

展开 $r\cos(\theta+\alpha)$。注意正弦项系数前的负号。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$r\cos\alpha=3$、$r\sin\alpha=4$，所以 $\boxed{r=5}$，$\alpha=\tan^{-1}\frac43=53.130102\ldots^\circ$。

最大值为 $\boxed{6}$，对应 $\boxed{306.9^\circ}$；最小值为 $\boxed{-4}$，对应 $\boxed{126.9^\circ}$。当 $\theta=0$ 时，余弦形式给出 $5\cos\alpha=3$，符合原式。

</details>

### Q7 — 二次方程 {#q7--a-quadratic-equation}

Solve $\cos2x=\sin x$ for $0\le x\le2\pi$.

<details markdown="1">
<summary>提示</summary>

使用 $\cos2x=1-2\sin^2 x$，再对关于 $\sin x$ 的二次式作因式分解。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2\sin^2 x+\sin x-1=0\quad\Rightarrow\quad(2\sin x-1)(\sin x+1)=0.$$

于是 $\sin x=\frac12$ 或 $-1$，得到 $\boxed{x=\frac\pi6,\frac{5\pi}6,\frac{3\pi}2}$。原方程的二倍角余弦值依次为 $\frac12,\frac12,-1$，与正弦值一致。

</details>

### Q8 — 二倍角与平方项 {#q8--double-angle-and-powers}

Given $\tan A=\frac12$, find $\tan2A$ exactly. Express $6\sin^2 x-2$ in terms of $\cos2x$.

<details markdown="1">
<summary>提示</summary>

使用正切的二倍角公式和 $\sin^2 x=\frac{1-\cos2x}{2}$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\tan2A=\frac{2(\frac12)}{1-\frac14}=\frac43},$$

$$\boxed{6\sin^2 x-2=1-3\cos2x}.$$

正切公式的分母为 $\frac34\ne0$。检查第二个结果时，$x=0$ 使等式两边均为 $-2$；$x=\frac\pi2$ 则得到 $4$。

</details>

## 快速参考 {#quick-reference}

| 公式或任务 | 用途 | 检查 |
|---|---|---|
| 反三角函数 | 求规定值域中的一个角 | 区分反函数和倒数 |
| $\sec^2\theta=1+\tan^2\theta$ | 消去正割平方项 | 余弦必须非零 |
| $\cosec^2\theta=1+\cot^2\theta$ | 消去余割平方项 | 正弦必须非零 |
| 和差角公式 | 展开或识别两角的和与差 | 余弦公式中的符号与括号内相反 |
| 化为正弦或余弦形式 | 先求 $r=\sqrt{a^2+b^2}$，再比较系数 | 确定象限，并保留 $\alpha$ 的完整精度 |
| 二倍角公式 | 化为只含一种三角函数的方程 | 因式分解，不要除以可能为零的因子 |
| 方程的解 | 列出给定区间内的所有角 | 转换取值区间，按题意保留端点 |

**如果答案看起来不对：**检查角度单位、反函数值域、符号、系数顺序、分母和是否漏掉象限。每个候选解都要代回原方程检查。

**你应当能够：**描绘反三角函数与倒数三角函数的图像，证明恒等式，消去参数，并使用和差角公式与二倍角公式解方程。

**学习路径：**[上一节：二项式级数](/zh/alevel/a2-mathematics/binomial-series/) · [下一节：指数函数与对数函数](/zh/alevel/a2-mathematics/exponential-and-logarithmic-functions/) · [返回纯数学主题目录](/zh/alevel/a2-mathematics/)。
