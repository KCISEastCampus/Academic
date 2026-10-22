---
layout: subjects
title: "代数"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/algebra/
permalink: /zh/alevel/as-mathematics/algebra/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.1 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L01 等价形式与精确值](#l01)
- [L02 二次式、交点与不等式](#l02)
- [L03 多项式结构与三次草图](#l03)
- [L05 跟踪图像变换中的点](#l05)

## L01 · 等价形式与精确值 {#l01}

目标：选择便于计算的精确形式，并说明变形的依据。先修：分数、整数指数与展开。

根式（surd）保留精确的无理数值。先提取完全平方因子，不能把和的平方根拆开。有理化是分子、分母同乘一个非零共轭式。底数为正数 $a$，且 $m,n$ 为有理数时：

$$a^ma^n=a^{m+n},\qquad (a^m)^n=a^{mn},\qquad a^{-n}=\frac1{a^n}.$$

负指数要求底数非零；偶次根采用非负实根，运算须保持在实数范围。这些是计算条件，不另外扩成正式定义域、值域专题。

### 示范与推理 {#l01-worked}

**Question:** Simplify $\sqrt{50}-\sqrt8$ and rationalise $3/(\sqrt5+\sqrt2)$.

第一式为 $5\sqrt2-2\sqrt2=3\sqrt2$。第二式用共轭式消去分母根式：

$$\frac3{\sqrt5+\sqrt2}=\frac{3(\sqrt5-\sqrt2)}{5-2}=\sqrt5-\sqrt2.$$

把结果乘回原分母得到 3，检查的是原式而不是只重复最后一步。

### 带支架尝试 {#l01-scaffold}

**Question:** For $x>0$, rewrite $\sqrt{x}/x^2$ as one power, then evaluate it at $x=4$.

<details markdown="1">
<summary>提示</summary>

先把分子写成二分之一次幂，再减指数。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$x^{1/2-2}=x^{-3/2}$；当 $x=4$ 时值为 $1/8$。

</details>

### 独立任务 {#l01-independent}

**Question:** Without decimal approximations, decide which is larger: $1/(\sqrt3-1)$ or $(\sqrt3+1)/3$. Justify your answer.

<details markdown="1">
<summary>提示</summary>

把两个量改写成便于直接比较的精确形式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

第一式有理化后为 $(\sqrt3+1)/2$。两者正分子相同，由 $1/2>1/3$ 可知第一式较大。

</details>

### 诊断与修正 {#l01-diagnosis}

若使用 $\sqrt{a+b}=\sqrt a+\sqrt b$，取 $a=b=1$ 并平方，两边不同。若同底数相乘时把指数相乘，应先区分“幂相乘”与“幂的乘方”。

### 再尝试 {#l01-retry}

**Question:** Find an exact simplified form of $2/(\sqrt7-\sqrt3)$ and check it by multiplication.

<details markdown="1">
<summary>提示</summary>

共轭式取相反符号。

</details>

<details markdown="1">
<summary>解答与核验</summary>

结果为 $(\sqrt7+\sqrt3)/2$；乘回 $\sqrt7-\sqrt3$ 得 $2$。

</details>

## L02 · 二次式、交点与不等式 {#l02}

目标：连接根、符号与图形，并选择因式分解、配方或求根公式。先修：L01 与一次方程。

在 $a\ne0$ 时，$b^2-4ac$ 的符号判断 $ax^2+bx+c=0$ 有两个实根、一个重根或无实根。配方看顶点，因式分解看根；两者不方便时使用

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

一次不等式除以负数必须反向：$-2x<6$ 得 $x>-3$。二次不等式先标根再测试各区间，只有允许等号时才包含端点。直线与曲线联立可用代入法，求出横坐标后须恢复两个坐标。

![向上抛物线 y=x²−2x−3 在 −1、3 穿横轴，顶点为 (1,−4)。下方符号带标出两根外为正、根处为零、根间为负。](/alevel/as-mathematics/assets/quadratic-sign.svg)

### 示范与推理 {#l02-worked}

**Question:** Solve $x^2-2x-3\le0$. Find the intersections of $y=x^2$ and $y=2x+3$.

因式分解为 $(x-3)(x+1)$。开口向上的抛物线在两根之间不大于零，因此 $-1\le x\le3$。交点代入后是同一二次式等于零，得 $(-1,1)$ 与 $(3,9)$。配方 $x^2-2x-3=(x-1)^2-4$ 也确认顶点为 $(1,-4)$。

### 带支架尝试 {#l02-scaffold}

**Question:** Complete the square for $x^2+4x+7$ and state its minimum.

<details markdown="1">
<summary>提示</summary>

一次项系数的一半平方后，补上也减去。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$(x+2)^2+3$，所以最小值为 $3$，在 $x=-2$ 时取得。

</details>

### 独立任务 {#l02-independent}

**Question:** The line $y=4x+k$ touches $y=x^2$. Find $k$ and the point of contact. Then solve $x^2<4x+k+1$.

<details markdown="1">
<summary>提示</summary>

相切意味着联立所得方程有重根，再把参数代回不等式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

联立式为 $x^2-4x-k=0$。由判别式 $16+4k=0$ 得 $k=-4$，切点为 $(2,4)$。不等式变成 $(x-2)^2<1$，因此 $1<x<3$。

</details>

### 诊断与修正 {#l02-diagnosis}

两个根只是边界，不是不等式的完整解。应测试根间与根外的值；判别式为零说明重根的前提是方程确为二次。

### 再尝试 {#l02-retry}

**Question:** Solve $-x^2+5x-6>0$ and $5-3x\ge11$.

<details markdown="1">
<summary>提示</summary>

先看抛物线开口，再注意一次不等式所除数的符号。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$-(x-2)(x-3)>0$ 得 $2<x<3$。一次不等式得 $-3x\ge6$，故 $x\le-2$。

</details>

## L03 · 多项式结构与三次草图 {#l03}

目标：用余式找因式，并从根的结构说明草图。先修：L01–L02。

除法写为 $f(x)=(x-a)q(x)+r$，代入即得 $r=f(a)$。因此 $f(a)=0$ 当且仅当 $x-a$ 是因式。展开用分配律并合并同幂项，除法用乘回原式检查。P1 采用二、三次式除以简单整数一次因子。偶数重因子在横轴处相切，单根处穿轴；判别式为负的二次因子不产生实数交点。

![三次曲线 (x−1)²(x+2) 在单根 −2 穿轴，在二重根 1 切轴，并经过 (0,2)；左端向下、右端向上。](/alevel/as-mathematics/assets/cubic-roots.svg)

### 示范与推理 {#l03-worked}

**Question:** Factorise $f(x)=x^3-3x+2$ and describe its real intercepts and end behaviour.

$f(1)=0$，除后商为 $x^2+x-2=(x-1)(x+2)$，故 $f(x)=(x-1)^2(x+2)$。曲线在 $(-2,0)$ 穿轴，在 $(1,0)$ 切轴，过 $(0,2)$。最高次项系数为正，因此左端向下、右端向上。这些解析特征支持草图，不需要用屏幕窗口猜全部根。

### 带支架尝试 {#l03-scaffold}

**Question:** Divide $x^3+2x^2+x+5$ by $x+2$. State the quotient and remainder.

<details markdown="1">
<summary>提示</summary>

除式的零点是 −2。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$x^3+2x^2+x+5=(x+2)(x^2+1)+3$。商为 $x^2+1$，余式为 $3=f(-2)$。

</details>

### 独立任务 {#l03-independent}

**Question:** The remainder when $x^3+kx+2$ is divided by $x+1$ is zero. Find $k$, factorise the cubic over the reals, and justify the number of real roots.

<details markdown="1">
<summary>提示</summary>

先把余式条件变为参数方程，再讨论图像。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$-1-k+2=0$ 得 $k=1$。因式分解为 $(x+1)(x^2-x+2)$，二次因子的判别式 $1-8=-7<0$，故只有实根 $x=-1$，纵轴截点为 $(0,2)$。

</details>

### 诊断与修正 {#l03-diagnosis}

除式为 $x+a$ 时应代入 $-a$，不是 $a$。穿轴或切轴由重数决定，不能只数不同根。

### 再尝试 {#l03-retry}

**Question:** Expand $(x-2)^2(x+1)$. State the remainder on division by $x-1$ and say which root is a touching point.

<details markdown="1">
<summary>提示</summary>

余式代入 1 即可。

</details>

<details markdown="1">
<summary>解答与核验</summary>

展开得 $x^3-3x^2+4$，余式为 $2$；二重根 $x=2$ 对应切轴点。

</details>

## L05 · 跟踪图像变换中的点 {#l05}

目标：把函数式、关键点与准确的变换描述联系起来。先修：L02–L03 与函数记号。

若 $(p,q)$ 在 $y=f(x)$ 上，则在 $y=af(x)$ 上对应 $(p,aq)$，在 $y=f(x)+a$ 上对应 $(p,q+a)$。对 $y=f(x+a)$，要保持输入仍为 $p$，所以点变为 $(p-a,q)$。对 $y=f(ax)$，在 $a\ne0$ 时变为 $(p/a,q)$。负伸缩因子还包括反射：式外对应横轴，式内对应纵轴。平移向量 $(h,k)$ 对应 $y=f(x-h)+k$。本组训练单类变换，不把多种变换组合描述列为 P1 要求。

![实线为 y=f(x)=x²，虚线为 y=f(2x)=4x²。点 (1,1) 移到 (1/2,1)，显示横向伸缩因子 1/2。](/alevel/as-mathematics/assets/point-stretch.svg)

### 示范与推理 {#l05-worked}

**Question:** The graph $y=f(x)$ contains $(2,3)$. Locate its corresponding point on $y=f(2x)$ and on $y=-2f(x)$, describing each transformation.

第一点为 $(1,3)$，是水平方向伸缩，因子 $1/2$。第二点为 $(2,-6)$，是竖直伸长因子 $2$ 并关于横轴反射。把新横坐标代入各式，都应调用原来的 $f(2)=3$，这比口诀更可靠。

### 带支架尝试 {#l05-scaffold}

**Question:** Translate $y=x^2$ by vector $(3,-2)$. State the new equation and vertex.

<details markdown="1">
<summary>提示</summary>

减去横向位移，恢复原来的输入。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$y=(x-3)^2-2$，顶点为 $(3,-2)$。

</details>

### 独立任务 {#l05-independent}

**Question:** A horizontal stretch maps $(2,5)$ on $y=f(x)$ to $(6,5)$. Write the transformed equation using $f$ and determine where $( -1,4)$ moves.

<details markdown="1">
<summary>提示</summary>

先看坐标放大几倍，再取倒数放入函数输入。

</details>

<details markdown="1">
<summary>解答与核验</summary>

横向伸缩因子为 $3$，因此新式为 $y=f(x/3)$，另一点变为 $(-3,4)$。

</details>

### 诊断与修正 {#l05-diagnosis}

式内因子改变的是“得到原输出所需的输入”，并非直接乘图上的横坐标。用非零关键点检查；因子为零时得到的是有定义处的常值图像，不称为伸缩。

### 再尝试 {#l05-retry}

**Question:** Describe $y=f(x+4)$ and give the image of $(1,-2)$.

<details markdown="1">
<summary>提示</summary>

新横坐标须使括号内等于 1。

</details>

<details markdown="1">
<summary>解答与核验</summary>

平移向量为 $(-4,0)$，点变为 $(-3,-2)$。

</details>

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.1; marking-evidence principles from MA01 January 2025 Q6 and Q9.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
