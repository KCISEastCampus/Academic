---
layout: subjects
title: fx-CG50 高数进阶：数值方法与微积分
description: 求和、误差、二分法、插值、Newton、Euler、双曲函数、反常积分、弧长与微分方程的中文操作。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: further
toc_headings: h2, h3
permalink: /alevel/fx-cg50/further-mathematics/numerical-calculus/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

本页介绍求和、误差、数值迭代、双曲函数、积分与微分方程中的计算器操作，对应 Further Mathematics 核心任务 21–30。

真题题意为简短英文改写，计算与答卷要求已对照官方 MS；衔接练习明确标为自拟。练习时先写出题目要求的数学方法，再按步骤输入，最后用屏幕结果核对。

本页属于高数进阶的第二篇。若还不熟悉计算器输入与基本应用，先回顾[初学输入模板]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#chapter-3)及[进阶定积分]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-23)；需要按核心任务顺序学习时，从[复数、矩阵与向量（01–20）]({{ '/alevel/fx-cg50/further-mathematics/' | relative_url }})开始。

开始前进入 **计算·矩阵 → SHIFT → MENU**，选择数学输入、**角度：弧度**、**函数类型：Y=**。屏幕应显示 Rad；画极坐标后尤其要确认变量恢复为 X。以下菜单按 **03.81.0202 中文固件**核对，尚待同版本实机抽查。

按键中的 <code>→</code> 表示下一步；存储箭头键会另写“存储键”。<code>sin</code> 等函数名后手动输入括号，指数和根号输入后用右方向键离开模板。连续计算直接在下一行输入，不需每次清屏。

## 求和与误差 {#fm-sums}

本节用有限求和检查推导，并用临界值两侧的误差确定最小整数。

### 任务 21 有限求和：差分消项与归纳法的数值检查 {#fm-task-21}

例题：[FM03 January 2025 Q5/Q6]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf' | relative_url }})、[官方 MS pp8–10]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf' | relative_url }})。题意改写：**Q6: derive the sum by differences. Q5: prove divisibility by induction.**

Q6 的公式为

$$\sum_{r=1}^{n}r^4=\frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}.$$

1. 在 **计算·矩阵** 按 <code>OPTN → F4（计算）→ F6 → F3（Σ(）</code> 调出求和模板。
2. 输入被加项 $X^4$，用右方向键离开指数。按上方向键到上限输入 $3$，按下方向键到下限区域，再按左方向键到等号左边输入变量 X；按右方向键到等号右边输入下限 $1$。核对屏幕为上限 3、下方 X=1。
3. 执行后得到 $98$。另输入 $3\times4\times7\times35/30$，核对同为 $98$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-sigma-check.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="从1到3的四次方求和为98"><figcaption>先核对求和的上下限，再比较公式右侧。</figcaption></figure>
</div>

Q6 答卷先展开 $(r+1)^5-(r-1)^5=10r^4+20r^2+2$，从 $r=1$ 加到 $n$ 后用差分消项（method of differences）：

$$(n+1)^5+n^5-1=10\sum_{r=1}^n r^4+20\sum_{r=1}^n r^2+2n.$$

代入已知的平方和并化简，得到上面的四次方和；原题参数为 $p=3,q=-1$。屏幕的 98 不能替代这一过程。

Q5 可检查 $f(n)=7^{n+1}+11^n$：$f(1)=60$、$f(2)=464$、$f(3)=3732$，均为 4 的倍数。但三个数值不构成证明。答卷应明确假设 $4\mid f(k)$，再用

$$f(k+1)=11f(k)-4\cdot7^{k+1}$$

完成递推，最后写出归纳结论。求和模板也不会自动生成一般的 $n$ 的公式。

### 任务 22 相对误差与最小整数 {#fm-task-22}

**自拟操作练习：Find the least integer $n$ for which the relative error of $S_n=\sum_{k=1}^n2^{-k}$ as an approximation to $1$ is less than $10^{-6}$.**

纸上先求 $S_n=1-2^{-n}$，所以相对误差

$$E_n=\frac{\lvert S_n-1\rvert}{1}=2^{-n}.$$

在 **表格** 采用 Y=，在空的 Y 行输入 $2^{-X}$（图中使用 Y6）。按 <code>F5（设定）</code>，开始 $19$、终止 $20$、步长 $1$，只选择这个函数，再 F6（表）。输入负指数要用独立的 <code>(−)</code> 键。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-error-boundary.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="n为19和20时的相对误差"><figcaption>临界值两侧都检查，才能说明20是最小整数。</figcaption></figure>
</div>

$$E_{19}=1.9073486328\times10^{-6}>10^{-6},\qquad
E_{20}=9.5367431641\times10^{-7}<10^{-6}.$$

因此最小整数为 $20$。本例误差随 $n$ 严格减小；还须交代这个性质，不能只找到一个满足条件的 $n$。直接算 $2^{-n}$ 比先算接近 1 的 $S_n$ 再作差更合适；也不要把“严格小于”改成“小于等于”。

## 数值求根与微分方程 {#fm-numerical}

二分法、插值、Newton 与 Euler 的更新规则不同。每次计算都要记录更新前的值和得到的新值。

### 任务 23 二分法（bisection）：记录每次保留的区间 {#fm-task-23}

例题：[FM02 June 2024 Q3]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf' | relative_url }})、[官方 MS Q3]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf' | relative_url }})。题意改写：**Use three iterations of bisection to improve the bracket.**

$$f(x)=8x^3-28x^2+34x-17.$$

先检查 $f(1)=-3,f(2)=3$。多项式连续，所以该区间内至少有一个根。每轮先算中点，再保留端点函数值异号的那半段。

| 轮次 | 中点 $m$ | $f(m)$ | 新区间 |
| --- | --- | --- | --- |
| 1 | $1.5$ | $-2$ | $[1.5,2]$ |
| 2 | $1.75$ | $-0.375$ | $[1.75,2]$ |
| 3 | $1.875$ | $1.046875$ | $[1.75,1.875]$ |

在计算页输入各中点对应的 $8m^3-28m^2+34m-17$；也可在表格用同一函数检查这些点。截图使用空的 Y7，开始 1.5、终止 1.875、步长 0.125；其中 1.625 是额外检查行，不是本次二分法的中点。若用标量 A 保存中点，纸上每轮更新后再存 A，避免把上一轮的端点误代进去。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-bisection-values.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="三个中点处的函数值"><figcaption>符号决定保留哪一半；不要把中点直接当成准确根。</figcaption></figure>
</div>

答卷保留中点、函数值及新区间。原题指定二分法时，不能用“方程”里的数值求解结果替代这三轮记录。

### 任务 24 线性插值（linear interpolation）与 Newton：同一函数，不同更新式 {#fm-task-24}

**自拟衔接练习：Apply one linear-interpolation step and one Newton step to the polynomial above.**

从二分法所得 $a=1.75,b=1.875$ 出发，插值用两个端点：

$$x_{\mathrm{int}}=a-\frac{f(a)(b-a)}{f(b)-f(a)}
=1.782967032967\ldots.$$

在计算页输入 <code>1.75−(−0.375)×(1.875−1.75)÷(1.046875−(−0.375))</code>，按 EXE。

Newton 用起点及导数：

$$f'(x)=24x^2-56x+34,\qquad
x_1=1.75-\frac{-0.375}{9.5}=1.789473684211\ldots.$$

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-interpolation-newton.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="一次插值和一次Newton得到不同的近似值"><figcaption>保留更新式和起点，最后才按要求舍入。</figcaption></figure>
</div>

两者都是一次迭代的近似值，不能称为准确根。后续若重复插值，要重新选择异号端点；若重复 Newton，要用新 $x$ 重算导数。导数接近零、跳出定义域或不收敛时，应检查起点和方法适用性。停止标准来自题目，不由屏幕的小数位数决定。

### 任务 25 Euler：斜率使用更新前的点 {#fm-task-25}

例题：[FM02 June 2024 Q1]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf' | relative_url }})、[官方 MS Q1]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf' | relative_url }})。题意改写：**Use Euler's method with step $0.2$, starting at $(1,-3)$.**

$$y'=\sqrt{x^2+2y^2},\qquad
y_{j+1}=y_j+0.2\sqrt{x_j^2+2y_j^2},\qquad x_{j+1}=x_j+0.2.$$

第一步在计算页输入 $-3+0.2\sqrt{1^2+2(-3)^2}$，得到 $y(1.2)\approx-2.1282202113$。下一步用 Ans 保留此数的完整精度：

$$\text{Ans}+0.2\sqrt{1.2^2+2\,\text{Ans}^2}.$$

Ans 的按键是 <code>SHIFT → (−)</code>。输入第二式的两处 Ans 均指向第一式结果，按 EXE 后才更新；得到 $y(1.4)\approx-1.4801880351$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-euler-steps.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="两次Euler更新后的y值"><figcaption>第二步斜率取在旧点x为1.2，而不是新点1.4。</figcaption></figure>
</div>

答卷写出每一轮的旧点、斜率与新值。中间数值多保留几位，最后按题目舍入。微分方程的数值近似不等于精确解，步长减小也不自动保证任意题目都满足所需误差。

## 双曲函数与积分 {#fm-calculus}

调用函数或积分模板前，先检查定义域、角度设置和积分端点。

### 任务 26 双曲方程：反函数以后仍要保留两个符号 {#fm-task-26}

例题：[FM03 January 2025 Q2]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf' | relative_url }})、[官方 MS p5]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf' | relative_url }})。题意改写：**Solve $\sinh^2x-\cosh x-5=0$ exactly.**

纸上用 $\sinh^2x=\cosh^2x-1$，得 $(\cosh x-3)(\cosh x+2)=0$。实数 $x$ 满足 $\cosh x\ge1$，所以只保留 $\cosh x=3$，但 $x$ 有正、负两个解：

$$x=\pm\operatorname{arcosh}3
=\pm\ln(3+2\sqrt2).$$

在 **计算·矩阵** 按 <code>OPTN → F6 → F2（双曲）</code>，F1/F2/F3 为 sinh/cosh/tanh，F4/F5/F6 为其反函数。按 <code>F5 → ( → 3 → ) → EXE</code>，得到正值 $1.762747174$。另输入 $\ln(3+2\sqrt2)$ 检查一致；把正值代入 cosh 再核对为 3。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-hyperbolic-check.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="反双曲余弦3与对数式得到相同正值"><figcaption>计算器反函数给出主值，另一个解由cosh的偶性得到。</figcaption></figure>
</div>

答卷写精确的两个解。不要把双曲函数当普通三角函数，也不要保留 $\cosh x=-2$ 的实数解。

### 任务 27 反三角函数：定义域与导数 {#fm-task-27}

**自拟衔接练习：For $g(x)=\sin^{-1}(x/2)$, find its domain and check $g'(1)$.**

实数定义域为 $[-2,2]$，而导数公式适用于内部 $-2<x<2$：

$$g'(x)=\frac{1}{\sqrt{4-x^2}},\qquad g'(1)=\frac1{\sqrt3}.$$

在 Rad 下按 <code>SHIFT → sin → ( → 1 → ÷ → 2 → ) → EXE</code>，核对 $g(1)=\pi/6$。再用 **OPTN → F4（计算）→ F2（d/dx）**，在导数模板输入 $\sin^{-1}(X/2)$，求值位置为 $1$，核对 $0.5773502692$；离开函数括号后按右方向键进入求值格。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-inverse-trig-derivative.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="反正弦在1处的函数值与导数"><figcaption>反正弦的上标负1表示反函数，不是取倒数。</figcaption></figure>
</div>

靠近 $x=\pm2$ 时导数无界，端点不能直接当成普通有限导数点。先判断定义域和可导范围，再调用模板。

### 任务 28 反常积分：截断检查与极限证明 {#fm-task-28}

例题：[FM03 January 2025 Q4]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf' | relative_url }})、[官方 MS p7]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf' | relative_url }})。题意改写：**Explain the improper endpoint and evaluate the integral.**

$$I=\int_0^2\frac{1}{\sqrt{4-x^2}}\,dx.$$

上端点分母为零，先写截断积分 $I(a)$，其中 $0<a<2$。在 **OPTN → F4 → F4（∫dx）** 模板输入 $1/\sqrt{4-X^2}$，下限 $0$、上限 $1.99$，得到约 $1.470754613$。光标离开指数及根号后，才移到上下限格；屏幕积分变量应为 X。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-improper-truncated.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="上限为1.99的截断积分"><figcaption>避开奇异端点的数值结果是检查值，还不是原积分的证明。</figcaption></figure>
</div>

纸上用 $x=2\sin u$ 或反三角函数原函数，得到

$$I=\lim_{a\to2^-}\left[\sin^{-1}(x/2)\right]_0^a
=\frac\pi2.$$

可比较上限 $1.9,1.99,1.999$ 对应的 $\sin^{-1}(a/2)$，观察数值趋近 $\pi/2$。这里是有可积奇点的收敛积分；一次计算器报错或几次截断值，都不能单独证明收敛或发散。

### 任务 29 参数弧长与旋转曲面面积 {#fm-task-29}

例题：[FM03 January 2025 Q9]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf' | relative_url }})、[官方 MS p14]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf' | relative_url }})。题意改写：**Find the exact arc length and the surface area generated about the x-axis.**

$$x=\sin\theta\cos\theta,\qquad y=\sin^2\theta,
\qquad0\le\theta\le\pi/6.$$

纸上求 $dx/d\theta=\cos2\theta$、$dy/d\theta=\sin2\theta$，因此 $ds/d\theta=1$。两个量分别是

$$L=\int_0^{\pi/6}1\,d\theta=\frac\pi6,$$
$$S=2\pi\int_0^{\pi/6}\sin^2\theta\,d\theta
=\frac{\pi(2\pi-3\sqrt3)}{12}.$$

在计算页采用 X 为参数变量，将 $2\pi(\sin X)^2$ 输入定积分模板，下限 $0$、上限 $\pi/6$，核对 $S\approx0.2845845437$。再输入精确式确认一致；$L\approx0.5235987756$ 是不同的量。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-parametric-surface.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="数值积分与旋转面积的精确式一致"><figcaption>绕x轴的半径是y，面积公式中的2π不能遗漏。</figcaption></figure>
</div>

若换题后 $y$ 可为负，要用旋转半径的非负值并按区间分析。计算器不会替你确认参数曲线是否重复描绘，也不会选择正确旋转轴。

## 二阶线性微分方程 {#fm-ode}

辅助方程和初始条件可以用计算器核对；特解与共振处理仍需纸笔推导。

### 任务 30 辅助方程、共振与初始条件 {#fm-task-30}

例题：[FM03 January 2025 Q12]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf' | relative_url }})、[官方 MS p19]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf' | relative_url }})。题意改写：**Solve the differential equation with $y(0)=10,y'(0)=1$.**

$$y''-y'-2y=6e^{-x}-10\cos x.$$

1. 纸上建立辅助方程 $m^2-m-2=0$。在 **解方程（组）→ 多项式 → 2 次** 输入 $1,-1,-2$，核对 $m=-1,2$，所以互补函数为 $Ae^{-x}+Be^{2x}$。
2. 右侧的 $e^{-x}$ 与互补函数重合，特解须试 $Cxe^{-x}$，不能只试 $Ce^{-x}$；三角项试 $D\cos x+E\sin x$。
3. 纸上代回原方程，得到特解 $-2xe^{-x}+3\cos x+\sin x$。
4. 用两个初始条件得 $A+B=7$、$-A+2B=2$。可用两元联立方程核对 $A=4,B=3$；系数表输入顺序是 $1,1,7;-1,2,2$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-ode-auxiliary.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="辅助二次方程的两根为2和负1"><figcaption>这两根决定互补函数中的指数，不能代替特解。</figcaption></figure>
</div>

因此

$$y=4e^{-x}+3e^{2x}+3\cos x+\sin x-2xe^{-x}.$$

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-ode-constants.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="初始条件给出的常数为4和3"><figcaption>屏幕X、Y依次对应本题的A、B；输入前先移项。</figcaption></figure>
</div>

最后检查 $y(0)=4+3+3=10$、$y'(0)=-4+6+1-2=1$。在 $x=0$，$y''(0)=17$，所以左侧 $17-1-2\times10=-4$ 与右侧 $6-10=-4$ 一致。

这些检查能发现常数和符号错误，但一个点的相等不能证明整个解满足方程；答卷须保留辅助方程、共振处理、特解代入和初始条件过程。fx-CG50 原生菜单的数值导数与多项式求解不提供这套符号解。

## 使用前的最后检查 {#fm-numerical-checklist}

确认 Rad、变量 X、上下限、迭代起点及题目的精度要求。中间值保留完整精度；答案先区分精确式、近似值、区间和最小整数，再决定如何书写。涉及学校考试模式时回到[考试准备]({{ '/alevel/fx-cg50/' | relative_url }}#exam-mode)，按老师要求操作。

---

操作参考 [Casio 中文软件手册](https://www.casio.com/content/dam/casio/global/support/manuals/calculators/pdf/004-zh-cn/f/fx-CG50_Soft_v370_CN.pdf) 的计算、求和、表格与方程章节。本页菜单以核对的中文 03.81.0202 为准，真题版权归考试局。

继续学习：

- 上一篇：[复数、矩阵与向量（任务 01–20）]({{ '/alevel/fx-cg50/further-mathematics/' | relative_url }})。
- 选学下一篇：[力学扩展（M01–M06）]({{ '/alevel/fx-cg50/further-mechanics/' | relative_url }})，将方程与积分操作用于力学模型。
- [回顾进阶操作]({{ '/alevel/fx-cg50/advanced/' | relative_url }}) · [返回学习路线总览]({{ '/alevel/fx-cg50/' | relative_url }})。

编写与组织：**Eric Shi**。GPT 辅助整理、操作核对与网页制作。更新于 2026 年 10 月 10 日。

</div>
