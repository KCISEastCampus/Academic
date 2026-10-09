---
title: 纯数学：快速参考
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/quick-reference/
permalink: /zh/alevel/a2-mathematics/quick-reference/
toc_headings: h2
study_page: true
---

[返回主题目录](/zh/alevel/a2-mathematics/)

用本页核对公式和方法。需要完整例题与练习时，请从[纯数学主题目录](/zh/alevel/a2-mathematics/#study-a-topic)选择相应课程。

P2 编号依据 OxfordAQA 课程大纲的主题分类，部分标题作了简化，并非教材章号。[主题目录](/zh/alevel/a2-mathematics/#quick-reference)列出了对应教材章节与课程大纲补充内容。

## P2.1：代数与函数 {#p21-algebra-and-functions}

### 代数分式（algebraic fractions） {#algebraic-fractions}

在[代数分式的化简与运算](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/)中学习完整例题并完成练习。

- 运算规则与数值分数相同。加减分式时先通分，并排除使分母为零的取值。
- **加法例子：**$\frac{x}{x+4} + \frac{4}{x-1} = \frac{x(x-1) + 4(x+4)}{(x+4)(x-1)} = \frac{x^2 + 3x + 16}{(x+4)(x-1)}$
- **乘法例子：**$\frac{x}{x+4} \times \frac{4}{x-1} = \frac{4x}{(x-1)(x+4)}$
- **除法例子：**$\frac{x}{x+4} \div \frac{4}{x-1} = \frac{x}{x+4} \times \frac{x-1}{4} = \frac{x(x-1)}{4(x+4)}$

三个例子都要求 $x\ne-4,1$。在这个定义域内，第三个例子的除数始终不为零。

### 多项式除法（algebraic division） {#algebraic-division}

[学习商、余数和余数定理](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/#algebraic-division)。

- 分子次数（degree）大于或等于分母次数的代数分式称为**假分式（improper fraction）**。用多项式除法，将它写成多项式与真分式（proper fraction）之和。
- 对于 $\frac{F(x)}{G(x)}$，若 $F(x)$ 和 $G(x)$ 都是多项式，且 $G(x)\ne0$，则

  $$\frac{F(x)}{G(x)}=Q(x)+\frac{R(x)}{G(x)}.$$

  这里 $Q(x)$ 为商（quotient），$R(x)$ 为余数（remainder）。非零余数的次数必须低于 $G(x)$ 的次数；余数为零时，表示可以整除。
- **例子：**

  $$\frac{x^3+x^2-7}{x-3}=x^2+4x+12+\frac{29}{x-3}.$$

  限制条件为 $x\ne3$。

- **余数定理（remainder theorem）：**除式为 $ax+b$、$a\ne0$ 时，余数为 $F(-\frac ba)$。
- **因式定理（factor theorem）：**$ax+b$ 是 $F(x)$ 的因式，当且仅当 $F(-\frac ba)=0$。

### 部分分式（partial fractions） {#partial-fractions}

[学习分解方法、重复因式及完整例题](/zh/alevel/a2-mathematics/partial-fractions/#method)。

### 函数（functions） {#functions}

在[函数课程](/zh/alevel/a2-mathematics/functions/)中学习定义域、值域、复合函数与反函数，并完成例题与练习。

- **定义：**函数对每个允许的输入，都恰好对应一个输出。
- **定义域（domain）：**函数允许输入值组成的集合。
- **值域（range）：**给定定义域所对应的所有输出值组成的集合。
- 对于有限定义域，只计算允许输入值对应的函数值。对于分段函数（piecewise function），先判断输入属于哪一段，再选择相应表达式。
- **记号：**
  - $f(x)=\sqrt{x},\ \lbrace x\in\mathbb{R},x\geq0\rbrace$
  - $f:x\mapsto\sqrt{x},\ \lbrace x\in\mathbb{R},x\geq0\rbrace$

### 映射类型 {#function-types}
- **一一函数（one-to-one）：**不同输入对应不同输出。任意水平线与图像至多相交一次。
- **多对一函数（many-to-one）：**两个或更多不同输入可以对应同一输出。
- **一对多（one-to-many）：**一个输入对应多个输出，因此这不是函数。

### 复合函数（composite functions） {#function-composition}
- $fg(x) = f(g(x))$（先作用 $g$，再作用 $f$）。
- $gf(x) = g(f(x))$（先作用 $f$，再作用 $g$）。
- 对于 $fg$，$x$ 必须属于 $g$ 的定义域，且 $g(x)$ 必须属于 $f$ 的定义域。
- **注意：**一般情况下，$gf(x) \neq fg(x)$。
- **例子：**
  - $f(x) = 3x - 2$，$g(x) = x^2 + 4x - 2$。

  $$\begin{aligned}fg(x)&=3(x^2+4x-2)-2\\&=3x^2+12x-8,\\gf(x)&=(3x-2)^2+4(3x-2)-2\\&=9x^2-8.\end{aligned}$$

### 反函数（inverse functions） {#inverse-functions}
- 记作 $f^{-1}$。
- 函数只有在给定定义域上是**一一函数**，才有反函数。因此有时需要限制原函数的定义域。
- 图像关系：关于直线 $y = x$ 翻折。
- **性质：**
  - $ff^{-1}(x)=x$ 在 $f$ 的值域内成立；$f^{-1}f(x)=x$ 在 $f$ 的定义域内成立。
  - $f(x)$ 的定义域 = $f^{-1}(x)$ 的值域。
  - $f^{-1}(x)$ 的定义域 = $f(x)$ 的值域。
- **求反函数：**
  1. 令 $y = f(x)$。
  2. 交换变量 $x$ 与 $y$。
  3. 整理方程，解出 $y$。
  4. 按原定义域选择所需分支，再写明反函数的定义域和值域。
- **例子：**
  - $f(x)=x^3-8,\ \lbrace x\in\mathbb{R},x\geq2\rbrace$
  - $f^{-1}(x) = \sqrt[3]{x + 8}$，定义域为 $x\geq0$，值域为 $f^{-1}(x)\geq2$。

### 绝对值函数（modulus function） {#modulus-function}

在[绝对值函数课程](/zh/alevel/a2-mathematics/modulus-and-transformations/)中比较图像，并学习解方程与不等式。

绝对值定义为

$$\lvert x\rvert=\begin{cases}x & \text{if }x\geq0\\-x & \text{if }x<0.\end{cases}$$

- **两种绝对值图像：**
  - $y = \lvert f(x) \rvert$：保留满足 $f(x)\geq0$ 的部分；把 $x$ 轴下方的部分关于 $x$ 轴翻折。
  - $y = f(\lvert x \rvert)$：保留 $x\geq0$ 对应的允许部分，再关于 $y$ 轴翻折。输入值只有在 $\lvert x\rvert$ 属于原定义域时才允许。

### 图像变换（transformations） {#transformations}

[学习多个图像变换的组合](/zh/alevel/a2-mathematics/modulus-and-transformations/#combinations-of-transformations)。

用以下变换描绘新图像。下面两种伸缩都要求 $a>0$；若乘数为负，还需要翻折。
- $y = af(x)$ → 沿平行于 $y$ 轴的方向单向伸缩（one-way stretch），伸缩因子（scale factor）为 $a$。
- $y = f(x) + a$ → 竖直平移（translation）$a$ 个单位，正值向上、负值向下。
- $y = f(x + a)$ → 水平平移 $-a$ 个单位，正值向右、负值向左。
- $y = f(ax)$ → 沿平行于 $x$ 轴的方向单向伸缩，伸缩因子为 $\frac{1}{a}$。
- $y = -f(x)$ → 关于 x 轴翻折（reflection）。
- $y = f(-x)$ → 关于 y 轴翻折。

### 解绝对值方程 {#solving-modulus-equations}
1. 画草图，判断可能的解的个数。
2. 找出图像交点。
3. 按绝对值定义分类求解，并检查每个解是否满足对应情况的条件。
- **Example**: Solve $\lvert 2x + a \rvert - b = \frac{1}{3}x$
  - 情况 1，$2x+a\geq0$：$2x + a - b = \frac{1}{3}x$。
  - 情况 2，$2x+a<0$：$-(2x + a) - b = \frac{1}{3}x$。

若不等式两边都有绝对值，先求相等时的边界，再检验区间或比较图像。只有两边都非负时，才能直接平方。参见[完整例题](/zh/alevel/a2-mathematics/modulus-and-transformations/#example-7--modulus-on-both-sides)。

### 有理函数的化简（rational functions） {#rational-functions}

[练习因式分解与保留定义域限制](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/#simplification)。

- 分解分子和分母，再约去公因式。保留原分母带来的限制。
- **化简例子：**

  $$\begin{aligned}\frac{x^2-4x}{x^2-5x+4}&=\frac{x(x-4)}{(x-4)(x-1)}\\&=\frac{x}{x-1},\qquad x\ne1,4.\end{aligned}$$

### 更多多项式除法例子 {#algebraic-division-1}
**例子：**
- $\frac{3x + 4}{x - 1} = 3 + \frac{7}{x - 1}$，其中 $x\ne1$。
- $\frac{2x^3 - 3x^2 - 2x + 2}{x - 2} = 2x^2 + x + \frac{2}{x - 2}$，其中 $x\ne2$。

### 部分分式：进阶形式 {#partial-fractions-extended}

遇到一次因式与重复因式的复杂组合，仍然使用相同的方法。例如，

$$\frac{3+2x^2}{(2x+1)(x-3)^2}=\frac{A}{2x+1}+\frac{B}{x-3}+\frac{C}{(x-3)^2}.$$

先比较分子与分母的次数，再去分母。代入使因式为零的值后，若仍有常数未求出，就比较系数或再代入一个方便的值。

### 反证法（proof by contradiction） {#proof-by-contradiction}

[学习数学语言、直接证明、反证法与反例](/zh/alevel/a2-mathematics/mathematical-proof/)。这些都是 MA03 课程大纲要求的内容。

- **直接证明（direct proof）：**从假设出发，说明每一步的依据，推导出结论。
- **反证法：**先假设待证命题不成立，再推导出矛盾。明确写出矛盾之处，最后说明原命题成立。
- **用反例（counter-example）否定命题（disproof by counter-example）：**给出一个允许的情形，它满足假设，却不满足结论。
- $P\Rightarrow Q$ 表示 $P$ 是 $Q$ 的充分条件（sufficient condition），$Q$ 是 $P$ 的必要条件（necessary condition）。只有两个方向都成立时，才能使用 $P\Leftrightarrow Q$。

---

## P2.2：二项式级数 {#p22-sequences-and-series}

完整例题与独立练习见[二项式级数课程](/zh/alevel/a2-mathematics/binomial-series/)。

### 二项式级数（binomial series） {#binomial-series-}
- $(1+x)^n$ 可以对任意实数 $n$ 进行展开。
- 当 $n$ 为负数或非整数时，本课使用的无穷级数要求 $\lvert x\rvert<1$。这里的适用范围不包含端点；端点处的情况取决于 $n$。若 $n$ 为正整数，展开是有限的，且对所有实数 $x$ 都成立。当 $n=0$ 时，只要原式有定义，结果就是 $1$。
- **展开式（expansion）：**

  $$(1+x)^n=1+nx+\frac{n(n-1)}{2!}x^2+\frac{n(n-1)(n-2)}{3!}x^3+\cdots.$$

- **通项（general term）：**当 $r\geq1$ 时，

  $$u_{r+1}=\frac{n(n-1)\cdots(n-r+1)}{r!}x^r.$$
- **近似计算（approximation）：**用前几项估算根式或幂的值。例如，取 $n=\frac12$、$x=0.04$，估算 $\sqrt{1.04}$。
- **例子：**$(2 + 3x)^{-2} = \frac{1}{4}\left(1 + \frac{3x}{2}\right)^{-2}$，适用范围为 $\lvert x \rvert < \frac{2}{3}$。

### 级数展开 {#series-expansion}
- 把有理函数分解为部分分式，分别用二项式级数展开，再合并 $x$ 的同次幂项。所取的 $x$ 必须同时满足所有级数的适用范围。
- **例子形式：**$\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$。

---

## P2.3：参数方程 {#p23-coordinate-geometry}

完整例题与独立练习见[参数方程课程](/zh/alevel/a2-mathematics/parametric-equations/)。

### 参数方程（parametric equations） {#parametric-equations}
- 曲线可以用 $x=f(t)$ 和 $y=g(t)$ 表示，其中 $t$ 称为**参数（parameter）**。参见教材第 5.6 节。
- 消去 $t$，得到直角坐标方程（Cartesian equation）。保留参数范围带来的限制。
- **例子：**
  - $x = t^2, y = 2t \Rightarrow y^2 = 4x$，其中 $x\geq0$。
  - $x=a\cos\theta$、$y=b\sin\theta$，当 $a,b\ne0$ 时，得到椭圆 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$。
  - $x = \frac{1}{t}, y = 3t \Rightarrow y = \frac{3}{x}$，其中 $t\ne0$ 且 $x\ne0$。
  - $x=t+\frac1t$、$y=t-\frac1t$，当 $t\ne0$ 时，得到 $x^2-y^2=4$。

---

## P2.4：三角函数与公式 {#p24-trigonometry}

完整例题与独立练习见[三角函数与公式课程](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/)。

### 反三角函数（inverse trigonometric functions） {#inverse-trigonometric-functions-}
- $\sin^{-1}x$：定义域 $[-1,1]$，值域 $[-\frac{\pi}{2}, \frac{\pi}{2}]$。
- $\cos^{-1}x$：定义域 $[-1,1]$，值域 $[0, \pi]$。
- $\tan^{-1}x$：定义域 $\mathbb{R}$，值域 $(-\frac{\pi}{2}, \frac{\pi}{2})$。

### 倒数三角函数（reciprocal trigonometric functions） {#reciprocal-functions}
- $\sec x = \frac{1}{\cos x}$
- $\cosec x = \frac{1}{\sin x}$
- $\cot x = \frac{\cos x}{\sin x}$

余割和余切要求 $\sin x\ne0$；正割要求 $\cos x\ne0$。以下恒等式只在各项有定义时成立。正切的和角、差角及二倍角公式还要求分母非零。

### 三角恒等式（trigonometric identities） {#trigonometric-identities}
- $1 + \tan^2 x = \sec^2 x$
- $1 + \cot^2 x = \cosec^2 x$
- $\sin 2A = 2\sin A\cos A$
- 余弦的几种形式互相等价：

  $$\begin{aligned}\cos2A&=\cos^2 A-\sin^2 A\\&=2\cos^2 A-1\\&=1-2\sin^2 A.\end{aligned}$$

- $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$

### 和差角公式（compound angle formulae） {#compound-angle-formulae}
- $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$
- $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$
- $\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$

### $a\cos\theta+b\sin\theta$ 的形式 {#r-formulae}
- $a\cos\theta + b\sin\theta = r\cos(\theta \pm \alpha)$ 或 $r\sin(\theta \pm \alpha)$。
- 对于 $a\cos\theta+b\sin\theta=r\cos(\theta-\alpha)$，使用 $r=\sqrt{a^2+b^2}$、$r\cos\alpha=a$ 和 $r\sin\alpha=b$。这些关系可以确定 $\alpha$ 的正确象限。

### 三角方程 {#trigonometric-equations}

列出给定区间内的每一个解。改变角度变量时，也要转换区间。应因式分解，而不是除以可能为零的函数。[课程练习](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/#practice)提供题目、提示与已检查的解答。

---

## P2.5：指数函数与对数函数 {#p25-exponentials-and-logarithms}

完整例题与独立练习见[指数函数与对数函数课程](/zh/alevel/a2-mathematics/exponential-and-logarithmic-functions/)。

### 指数函数（exponential function） {#exponential-function-}
- $y = e^x$
- 图像：函数值始终为正（$y > 0$），函数递增，与 y 轴交于 (0,1)。
- 曲线斜率（gradient）等于函数值：$\frac{d}{dx}(e^x) = e^x$。

### 自然对数（natural logarithm） {#natural-logarithm}
- $y = \ln x$ 是 $e^x$ 的反函数。
- 图像：定义域为 $x > 0$，与 x 轴交于 (1,0)。

### 对数运算法则（laws of logarithms） {#logarithm-laws-}

以下法则要求 $a>0$ 和 $b>0$。
- **积：**$\ln(ab) = \ln a + \ln b$。
- **商：**$\ln\left(\frac{a}{b}\right) = \ln a - \ln b$。
- **幂：**$\ln(a^k) = k \ln a$。
- **常用数值：**$\ln e = 1$、$\ln 1 = 0$。
- **解方程：**用 $a = e^{\ln a}$ 或 $\ln(e^x) = x$ 在指数形式与对数形式之间转换。

### 应用 {#applications}
- 当 $N_0>0$ 且 $k>0$ 时，增长使用 $N=N_0e^{kt}$，衰减使用 $N=N_0e^{-kt}$。$N_0$ 表示初始值。
- 对这种衰减形式，**半衰期（half-life）**为 $T=\frac{\ln2}{k}$。
- 相等时间间隔内按固定百分比变化时，使用 $N=N_0q^n$。增加 $p\%$ 时，$q=1+\frac p{100}$；减少 $p\%$ 时，$q=1-\frac p{100}$。若要求首次达到界限的完整时间间隔数，应检查满足原不等式的第一个整数。

---

## P2.6：求导 {#p26-differentiation}

完整例题与独立练习见[求导课程](/zh/alevel/a2-mathematics/differentiation/)。

### 基本导数（derivatives） {#basic-derivatives}

对三角函数求导时使用弧度制（radians）。公式只在原函数有定义且可导（differentiable）时适用；特别地，$\ln x$ 要求 $x>0$。

| 函数 | 导数 |
|----------|------------|
| $e^{kx}$ | $ke^{kx}$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\sin kx$ | $k\cos kx$ |
| $\cos kx$ | $-k\sin kx$ |
| $\tan kx$ | $k\sec^2 kx$ |
| $\sec x$ | $\sec x \tan x$ |
| $\cosec x$ | $-\cosec x \cot x$ |
| $\cot x$ | $-\cosec^2 x$ |

### 反三角函数的导数 {#inverse-trigonometric-derivatives}

$$\frac{d}{dx}\sin^{-1}x=\frac1{\sqrt{1-x^2}},\qquad -1<x<1,$$

$$\frac{d}{dx}\cos^{-1}x=-\frac1{\sqrt{1-x^2}},\qquad -1<x<1,$$

$$\frac{d}{dx}\tan^{-1}x=\frac1{1+x^2},\qquad x\in\mathbb R.$$

对复合函数求导时，还要乘以内层函数的导数。反正弦与反余弦函数在 $x=\pm1$ 处有定义，但导数在这些点没有有限值。

### 乘积法则（product rule） {#product-rule}
- $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$

**Example**: Differentiate $x^2 \ln x$, where $x>0$.
- $f(x) = x^2$, $f'(x) = 2x$
- $g(x) = \ln x$, $g'(x) = \frac{1}{x}$
- 导数为 $2x\ln x + x^2 \cdot \frac{1}{x} = 2x\ln x + x$。

### 商法则（quotient rule） {#quotient-rule}
- $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$

**Example**: Differentiate $\frac{2x + 1}{3x - 2}$, where $x\ne\frac23$.
- $f(x) = 2x + 1$, $f'(x) = 2$
- $g(x) = 3x - 2$, $g'(x) = 3$
- 导数为

$$\frac{2(3x - 2) - (2x + 1)3}{(3x - 2)^2} = \frac{6x - 4 - 6x - 3}{(3x - 2)^2} = \frac{-7}{(3x - 2)^2}$$

### 链式法则（chain rule） {#chain-rule}
- $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$
- 对复合函数：$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$。

#### 链式法则例题 {#chain-rule-examples}

**Example 1**: Differentiate $(2x^3 - 5x + 1)^4$
- 令 $u = 2x^3 - 5x + 1$，则 $y = u^4$。
- $\frac{dy}{dx} = 4(2x^3 - 5x + 1)^3 \cdot (6x^2 - 5)$

**Example 2**: Differentiate $\ln(4x^3 + 7)$, where $4x^3+7>0$.
- $\frac{dy}{dx} = \frac{1}{4x^3 + 7} \cdot 12x^2 = \frac{12x^2}{4x^3 + 7}$

### 链式法则的另一种形式 {#alternative-chain-rule-form}
- 若 $\frac{dx}{dy}\ne0$，则 $\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}$。

**Example**: Curve $x = y^2 - 4y + 1$, find $\frac{dy}{dx}$ when $y = 1$
- $\frac{dx}{dy} = 2y - 4$
- 当 $y = 1$ 时，$\frac{dx}{dy} = -2$。
- 因此 $\frac{dy}{dx} = \frac{1}{-2} = -\frac{1}{2}$。

### 隐式求导（implicit differentiation） {#implicit-differentiation}
- 对等式两边关于 $x$ 求导。
- 把 $y$ 视为 $x$ 的函数。
- 含 $y$ 的项使用链式法则：$\frac{d}{dx}[f(y)] = f'(y)\frac{dy}{dx}$。

### 参数求导（parametric differentiation） {#parametric-differentiation}

斜率、切线、法线与驻点的完整方法见[参数方程课程](/zh/alevel/a2-mathematics/parametric-equations/#parametric-differentiation)。
- 已知 $x = f(t), y = g(t)$。
- $\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$，其中 $\frac{dx}{dt}\ne0$。
- MA03 课程大纲不要求隐函数或参数曲线的二阶导数。判断它们的驻点类型时，使用斜率的符号变化。

### 应用 {#applications-1}
- 求隐函数或参数曲线的切线（tangent）与法线（normal）。
- 求一般点处的切线方程。
- 驻点（stationary point）满足 $dy/dx=0$。求出两个坐标，再用导数的符号变化或二阶导数判断类型。二阶导数为零时，不能据此判定。
- 水平切线对应竖直法线；竖直切线对应水平法线。若切线斜率 $m$ 有限且非零，法线斜率为 $-\frac1m$。

### 求导法则汇总 {#differentiation-rules-summary}

| 法则 | 公式 | 适用形式 |
|------|---------|-------------|
| 乘积 | $(uv)' = u'v + uv'$ | 两个函数相乘 |
| 商 | $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ | 一个函数除以另一个 |
| 链式 | $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ | 复合函数 |
| 隐式 | 对两边求导，并保留 $\frac{dy}{dx}$ | 方程不是 $y = f(x)$ 的形式 |

---

## P2.7：积分 {#p27-integration}

[选择积分方法并完成练习](/zh/alevel/a2-mathematics/integration/)：例题涵盖先化简、标准积分、换元积分法、分部积分法及部分分式。

### 标准积分（standard integrals） {#basic-integration}

表中 $k\ne0$。公式只在函数有定义时适用。积分常数（constant of integration）记为 $C$。

| 函数 | 积分 |
|----------|----------|
| $e^{kx}$ | $\frac{1}{k}e^{kx} +C$ |
| $\frac{1}{x}$ | $\ln\lvert x\rvert +C \quad (x \neq 0)$ |
| $\sin kx$ | $-\frac{1}{k}\cos kx +C$ |
| $\cos kx$ | $\frac{1}{k}\sin kx +C$ |
| $\sec^2 kx$ | $\frac{1}{k}\tan kx +C$ |
| $\tan kx$ | $\frac{1}{k}\ln\lvert\sec kx\rvert +C$ |

### 观察法积分（integration by inspection） {#integration-by-inspection}

教材也称为 integration by recognition 或 “by sight”，即直接识别可积分的形式。
逆用链式法则，并对结果求导检查。

**当 $a\ne0$ 时：**$\int f'(ax+b) dx = \frac{1}{a} f(ax+b) +C$。

**例子：**
- $\int e^{-3x} dx = -\frac{1}{3}e^{-3x} +C$
- $\int \sin 4x dx = -\frac{1}{4}\cos 4x +C$
- $\int \frac{1}{\sqrt{x}} dx = 2\sqrt{x} +C$

### 换元积分法（integration by substitution） {#integration-by-substitution}
选取新变量 $u$，使积分更简单。整个积分都要用 $u$ 表示，包括 $dx$。定积分（definite integral）还要转换积分限（limits of integration）。

**一般形式：**$\int f(g(x))g'(x) dx = \int f(u) du$，其中 $u = g(x)$。

**例题 1：**$\int x(2 + x)^6 dx$。
- 结果：$\frac{1}{8}(2 + x)^8 - \frac{2}{7}(2 + x)^7 +C$。

**例题 2：**$\int \frac{x}{\sqrt{x - 3}} dx$。
- 结果：$\frac{2}{3}(x - 3)^{\frac{3}{2}} + 6(x - 3)^{\frac{1}{2}} +C$。

### 分部积分法（integration by parts） {#integration-by-parts-}
由乘积法则可得：

$$\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx.$$

与教材的记号一致，选 $v$ 为求导的因子，$\frac{du}{dx}$ 为积分的因子。检查剩余积分是否更简单。

**例题 1：**$\int xe^{2x} dx$。
$$\int xe^{2x} dx = \frac{1}{2}xe^{2x} - \frac{1}{4}e^{2x} +C$$

**例题 2：**$\int \ln x dx$，其中 $x>0$。
$$\int \ln x dx = x\ln x - x +C$$

### 特殊形式 {#special-forms}

当 $f(x)\ne0$ 时，可使用以下结果：

$$\int \frac{f'(x)}{f(x)} dx = \ln \lvert f(x) \rvert +C$$

**例子：**
- $\int \frac{2x}{x^2 + 1} dx = \ln\lvert x^2 + 1 \rvert +C$
- $\int \tan x dx = -\ln\lvert \cos x \rvert +C$

### 用部分分式积分 {#integration-using-partial-fractions}

[学习方法并练习有理函数的积分](/zh/alevel/a2-mathematics/partial-fractions/#integration)。

### 三角函数的积分 {#integrating-trigonometric-functions}

[学习恒等式及完整例题](/zh/alevel/a2-mathematics/integration-applications/#trigonometric-integrals)。

使用教材第 6.5 节的恒等式，将被积函数（integrand）化为更简单的形式。

- 对于 $\sin x$ 的奇次幂，保留一个因子 $\sin x$，其余偶次幂部分使用 $\sin^2x=1-\cos^2x$。然后尝试令 $u=\cos x$。
- 对于 $\cos x$ 的奇次幂，保留一个因子 $\cos x$，并使用 $\cos^2x=1-\sin^2x$。然后尝试令 $u=\sin x$。
- 对于偶次幂，使用 $\sin^2x=\frac{1-\cos2x}{2}$ 和 $\cos^2x=\frac{1+\cos2x}{2}$。
- 对于 $\tan x$ 的幂，使用 $\tan^2x=\sec^2x-1$ 降低幂次。

例如，

$$\int\sin^2x\,dx=\frac{x}{2}-\frac{\sin2x}{4}+C.$$

### 旋转体体积（volume of revolution） {#volumes-of-revolution-}

[学习如何选择半径、变量和积分限](/zh/alevel/a2-mathematics/integration-applications/#volume-of-revolution)。

以下公式用于曲线与旋转轴之间的区域。

#### 绕 x 轴旋转： {#about-the-x-axis}
$$V = \int_a^b \pi y^2 dx$$

#### 绕 y 轴旋转： {#about-the-y-axis}
$$V = \int_c^d \pi x^2 dy$$

### 定积分的应用 {#definite-integration-with-applications}

[通过例题比较带符号的积分与总面积](/zh/alevel/a2-mathematics/integration-applications/#area)。

#### 曲线与 x 轴之间的面积： {#area-between-curve-and-x-axis}
$$A = \int_a^b \lvert y\rvert dx$$

当整个区间都满足非负条件时，使用 $A=\int_a^b y\,dx$，对应条件为 $y\geq0$。若曲线穿过 $x$ 轴，就在交点处分段，把各段正面积相加。定积分给出带符号的面积（signed area）。

#### 两条曲线之间的面积： {#area-between-two-curves}
$$A=\int_a^b[f(x)-g(x)]\,dx.$$

这里要求 $f(x)\geq g(x)$ 在整个 $[a,b]$ 上成立。

---

## P2.8：微分方程 {#p28-differential-equations}

[学习包含完整例题、模型与练习的微分方程课程](/zh/alevel/a2-mathematics/differential-equations/)。

### 可分离变量的一阶微分方程（first order differential equations） {#first-order-differential-equations-with-separable-variables}

**可分离变量（separable variables）：**方程可以写成 $\frac{dy}{dx} = f(x)g(y)$ 的形式。

**建立方程：**对于正的数量，按自身比例增长时使用 $\frac{dy}{dt}=ky$，按自身比例衰减时使用 $\frac{dy}{dt}=-ky$，两种情形都取 $k>0$。用起始值确定解中的任意常数（arbitrary constant）；若还需要求 $k$，再利用其他已知信息。

**解题方法：**
1. 当 $g(y)\ne0$ 时，分离变量：$\frac{1}{g(y)} dy = f(x) dx$。
2. 对两边积分：$\int \frac{1}{g(y)} dy = \int f(x) dx$。
3. 用初始条件（initial condition）或边界条件（boundary condition）求 $C$。还要检查满足 $g(y)=0$ 的常数解（constant solution）；除以 $g(y)$ 可能会漏掉这些解。

**例题 1：**$\frac{dy}{dx} = ky$。
- 解为 $y = Ae^{kx}$，其中 $A$ 是常数。若按比例衰减写成 $\frac{dy}{dt}=-ky$，且 $k>0$，则使用 $y=Ae^{-kt}$。半衰期为 $\frac{\ln2}{k}$。

**例题 2：**$\frac{dy}{dx} = x(1 + y^2)$。
- 解为 $y = \tan\left(\frac{1}{2}x^2 +C\right)$。

---

## P2.9：数值方法 {#p29-numerical-methods}

[学习包含根的所在区间、迭代与积分法则的完整课程](/zh/alevel/a2-mathematics/numerical-methods/)。

### 定位根（locating roots） {#location-of-roots}
若 $f(x)$ 在 $[a, b]$ 上连续（continuous），且 $f(a)$、$f(b)$ 异号，那么 $(a, b)$ 内至少有一个根（root）。

### 迭代（iteration） {#iteration}
将 $f(x)=0$ 重排（rearrangement）为 $x=g(x)$。选取起始值 $x_0$，再使用 $x_{n+1}=g(x_n)$。有些重排方式不具备收敛性（convergence）。一个有用的局部判据是根附近满足 $\lvert g'(x)\rvert<1$，参见教材第 8.2 节。要验证舍入精度，应在原方程中找出合适的变号区间。[阶梯图与蛛网图（staircase and cobweb diagrams）](/zh/alevel/a2-mathematics/numerical-methods/#staircase-and-cobweb-diagrams)可以说明收敛与发散（divergence）的过程。

**Example:** Solve $x^3 - x - 1 = 0$
- 重排为 $x = \sqrt[3]{x + 1}$。
- 使用 $x_{n+1} = \sqrt[3]{x_n + 1}$。

### 数值积分（numerical integration） {#numerical-integration}

把 $[a,b]$ 分成 $n$ 个等宽条带（strips），宽度为 $h=\frac{b-a}{n}$。记 $x_i=a+ih$，$y_i=f(x_i)$。

**中点纵坐标法（mid-ordinate rule）：**使用每个条带中心处的高度。

$$\int_a^b f(x)\,dx\approx h\left(y_{\frac12}+y_{\frac32}+\cdots+y_{n-\frac12}\right).$$

**辛普森法则（Simpson's rule）：**每两个条带为一组。条带数 $n$ 必须是偶数，因此纵坐标（ordinates）的个数 $n+1$ 是奇数。

$$\begin{aligned}
\int_a^b f(x)\,dx\approx\frac{h}{3}\big[&(y_0+y_n)\\
&+4(y_1+y_3+\cdots+y_{n-1})\\
&+2(y_2+y_4+\cdots+y_{n-2})\big].
\end{aligned}$$

首尾纵坐标的权重（weight）为 $1$；内部纵坐标的权重按 $4$ 和 $2$ 交替。

---

## P2.10：向量 {#p210-vectors}

[学习包含直线、数量积与垂直距离的完整向量课程](/zh/alevel/a2-mathematics/vectors/)。

### 基本运算 {#basic-operations}

**向量（vector）**有大小和方向，**标量（scalar）**只有大小。对于 $\vec a=(x,y,z)$，
- **模（magnitude）：**$\lvert \vec{a} \rvert = \sqrt{x^2 + y^2 + z^2}$。
- **加法：**$\vec{a} + \vec{b} = (a_1 + b_1, a_2 + b_2, a_3 + b_3)$。
- **数乘（scalar multiplication）：**$k\vec{a} = (ka_1, ka_2, ka_3)$。

### 位置向量与直线 {#position-vectors-and-lines}

若 $A$ 和 $B$ 的位置向量分别为 $\vec a$ 和 $\vec b$，则 $\overrightarrow{AB}=\vec b-\vec a$。线段 $AB$ 中点的位置向量为 $\frac12(\vec a+\vec b)$。
- **位置向量（position vector）：**$\vec{r} = x\vec{i} + y\vec{j} + z\vec{k}$。
- **直线的向量方程（vector equation of a line）：**$\vec{r} = \vec{a} + \lambda\vec{b}$。
  其中 $\vec{a}$ 为直线上一个固定点的位置向量，$\vec{b}\ne\vec{0}$ 为方向向量（direction vector）。

**Example:** Line through point $(1,0,2)$ with direction vector $\begin{pmatrix} -1 \\\\ 2 \\\\ 3 \end{pmatrix}$:

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} -1 \\ 2 \\ 3 \end{pmatrix}$$

### 数量积（scalar product） {#scalar-product}

夹角公式要求两个向量都非零。
$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$$

**向量的夹角：**
$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$$

求两条直线的锐角时，分子中的数量积要取绝对值。

对于非零向量，互相垂直的向量满足 $\vec{a} \cdot \vec{b} = 0$。

### 两条直线的位置关系 {#pairs-of-lines}

对于直线 $\vec r=\vec a+\lambda\vec b$ 和 $\vec r=\vec c+\mu\vec d$，

- 方向向量互为标量倍数时，两条直线平行或重合。
- 求交点时，令三个分量（components）分别相等。同一组参数值 $\lambda,\mu$ 必须同时满足三个方程。
- 三维空间中既不平行也不相交的直线称为**异面直线（skew lines）**。

### 点到直线的垂足（foot of the perpendicular） {#foot-of-the-perpendicular-from-a-point-to-a-line}

设 $P$ 的位置向量为 $\vec p$，$H$ 在直线 $\vec r=\vec a+\lambda\vec b$ 上。

1. 写出 $\vec h=\vec a+\lambda\vec b$。
2. 用 $(\vec h-\vec p)\cdot\vec b=0$ 求 $\lambda$。
3. 求出 $H$。点 $P$ 到直线的垂直距离为 $\lvert\vec h-\vec p\rvert$。
