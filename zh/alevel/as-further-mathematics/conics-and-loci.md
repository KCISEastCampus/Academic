---
title: "圆锥曲线、轨迹与相切"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/conics-and-loci/
permalink: /zh/alevel/as-further-mathematics/conics-and-loci/
toc_headings: "#start, #model, #transformations, #loci, #demonstration, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

方程、距离条件与草图怎样描述同一个点集？先建立四类形状，再变换坐标，最后从交点判断相切。[独立题](#practice)要求你连接这些表征。

## 开始前 {#start}

先修是勾股定理、配方和判别式。若分不清二次方程与降次方程，先回看[有理函数中的输入方程](/zh/alevel/as-further-mathematics/rational-functions/#range)。学完应能解释四类草图、单次变换、简单距离轨迹及完整交点论证。

<section class="lesson-check" markdown="1">

### 先修检查 {#entry}

**Entry check (self-written):** Write the distance from $(x,y)$ to $(0,2)$ and to $y=-2$. State what a zero discriminant means for a genuine quadratic.

<details markdown="1"><summary>提示</summary>

到水平线的距离量度竖直间隔。

</details>

<details markdown="1"><summary>解答与核对</summary>

两距离为 $\sqrt{x^2+(y-2)^2}$ 与 $\lvert y+2\rvert$。判别式为零表示一个实重根，前提是二次项系数非零。若遗漏，画出垂直距离，并明确写出二次项系数。

</details>

</section>

## 从四个方程读形状 {#model}

取 $a,b,c>0$，四种标准形式为

$$\begin{aligned}
&y^2=4ax,\\
&\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\\
&\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\\
&xy=c^2.
\end{aligned}$$

抛物线顶点 $(0,0)$，因 $x\ge0$ 而向右开口；纵坐标 $y$ 的正负给出对称的上下两半。椭圆截点 $(\pm a,0),(0,\pm b)$，两个坐标都有界，并关于两轴对称；两分母相等时是圆这一特例。

普通双曲线顶点为 $(\pm a,0)$，不交纵轴。输入绝对值很大时除以 $x^2$，可看出渐近线斜率趋于 $\pm b/a$，故渐近线为 $y=\pm(b/a)x$，两支向左右开口。直角双曲线 $xy=c^2$ 可写成 $y=c^2/x$，不交坐标轴，以两轴为渐近线，两支在第一、三象限。

![Four labelled conic sketches: y²=4x, x²/9+y²/4=1, x²/4−y²=1 with asymptotes, and xy=1 with axis asymptotes.](/alevel/as-further-mathematics/diagrams/conics.svg){: width="560" height="1270" }

读图时把每个截点、渐近线与相应方程对上。草图要有坐标轴及这些关键要素，不需要密集描点；焦点公式表不能代替这种读图推理。

## 先变点，再反解原坐标 {#transformations}

设原方程为 $F(u,v)=0$，像点为 $(x,y)$。写像方程时要用新坐标反解旧坐标。单次平移 $(h,k)$ 给出 $u=x-h,v=y-k$；沿 x 轴伸缩 $s>0$ 倍时 $u=x/s,v=y$；沿 y 轴伸缩 $t>0$ 倍时 $u=x,v=y/t$；关于 $y=x$ 反射时 $u=y,v=x$。这些规则适用于四类曲线。

<section class="worked-example" markdown="1">

### 用对应点核对，而非硬背符号

**Demonstration (self-written):** Apply each transformation separately to $y^2=4x$: translate by $(2,-1)$, stretch parallel to x by factor 2, stretch parallel to y by factor 2, and reflect in $y=x$.

$$\begin{aligned}
&\text{translation:}\\
&(y+1)^2=4(x-2),\\
&\text{x-stretch:}\quad y^2=2x,\\
&\text{y-stretch:}\quad y^2=16x,\\
&\text{reflection:}\quad x^2=4y.
\end{aligned}$$

原曲线上的点 $(1,2)$ 分别变为 $(3,1),(2,2),(1,4),(2,1)$，逐个代入相应像方程都成立。平移把顶点移到 $(2,-1)$；伸缩保持顶点不动，但改变抛物线的宽窄。这里各变换独立作用，不是连续施加。

</section>

渐近线也随同一坐标映射变换。平移会同时移动中心与渐近线；沿轴伸缩会改变斜率；交换坐标则交换横、竖方向。

<section class="lesson-check" markdown="1">

### 补全一次变换 {#scaffold}

**Scaffold (self-written):** Translate $xy=1$ by $(3,-2)$. Name its asymptotes before expanding.

<details markdown="1"><summary>提示</summary>

代入前先反解平移。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&(x-3)(y+2)=1,\\
&x=3,\\
&y=-2.
\end{aligned}$$

$(1,1)$ 变为 $(4,-1)$，代入可核对；中心为 $(3,-2)$。

</details>

</section>

## 由距离建立完整轨迹 {#loci}

轨迹是满足条件的完整点集。到 $x=a$ 的距离为 $\lvert x-a\rvert$，到 $y=b$ 的距离为 $\lvert y-b\rvert$。两边都是非负距离，所以平方是等价的，所得方程既包含全部所求点，也不增加多余点。

<section class="worked-example" markdown="1">

### 水平准线

**Demonstration (self-written):** Find the locus equidistant from $(0,2)$ and $y=-2$.

$$\begin{aligned}
&\sqrt{x^2+(y-2)^2}\\
&=\lvert y+2\rvert\\
&x^2+(y-2)^2\\
&=(y+2)^2\\
&\iff x^2=8y.
\end{aligned}$$

顶点在定点与直线之间的中点 $(0,0)$。方程要求 $y\ge0$，开口朝向定点。逆向展开并取非负平方根能还原距离等式，因此不是只证明单向包含。竖直准线同理，只是垂直距离改用另一个坐标。

</section>

## 交点与重根 {#demonstration}

将直线代入曲线得到输入方程。确为二次时，相异实根对应两交点，无实根对应不相交；对本课非退化曲线，实重根对应相切。降次后的一次方程只有一根，不自动意味着相切：与双曲线渐近线平行的直线就可能如此。用斜率参数时，另查竖线。

<section class="worked-example" markdown="1">

### 求定点引出的全部切线

**Demonstration (self-written):** Find all tangents from $(-1,0)$ to $y^2=4x$.

非竖直候选线全部可写为 $y=m(x+1)$。代入并按输入次数整理：

$$\begin{aligned}
&m^2(x+1)^2=4x,\\
&m^2x^2+(2m^2-4)x+m^2=0.\\
&m\ne0:\quad D=(2m^2-4)^2-4m^4\\
&=16(1-m^2).
\end{aligned}$$

要求 $D=0$ 得 $m=\pm1$。代回得到 $(x-1)^2=0$，切点 $(1,\pm2)$，切线 $y=\pm(x+1)$。$m=0$ 时降为 $x=0$，横轴在顶点穿过曲线，不相切。斜率参数遗漏的竖线 $x=-1$ 不相交，因为曲线要求 $x\ge0$。所以两条切线已经列全。

![Parabola tangents from (−1,0) touch (1,±2); a separate panel shows translation by (2,−1), with original and image vertices labelled.](/alevel/as-further-mathematics/diagrams/conic-tangents.svg){: width="560" height="850" }

</section>

## 独立完成 {#practice}

收起示范，标注草图，并解释方程为何描述全部所求点，而不只是其中一部分。

<section class="lesson-check" markdown="1">

### 第 1 题 {#practice-1}

**Independent task (self-written):** Find the locus equidistant from $(2,0)$ and $x=-2$. Reflect it in $y=x$. Find all lines through $(-4,0)$ tangent to the original locus. Explain why your list is complete.

<details markdown="1"><summary>提示</summary>

先写距离再平方；非竖直、降次和竖直情况都要查。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\sqrt{(x-2)^2+y^2}\\
&=\lvert x+2\rvert\\
&\iff y^2=8x,\\
&\text{reflection:}\quad x^2=8y.\\
&y=m(x+4),\\
&m^2x^2+(8m^2-8)x\\
&\quad+16m^2=0,\\
&D=64(1-2m^2),\\
&m=\pm\frac1{\sqrt2},\\
&y=\pm\frac{x+4}{\sqrt2}.
\end{aligned}$$

切点为 $(4,\pm4\sqrt2)$。$m=0$ 时穿过顶点；$x=-4$ 不可能与要求 $x\ge0$ 的曲线相交。两距离非负保证轨迹推导可逆。若漏线的类型，回看[完整切线论证](#demonstration)，再做[重试 4](#retry-4)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题 {#practice-2}

**Independent task (self-written):** Sketch $y^2=12x$, $x^2/16+y^2/9=1$, $x^2/9-y^2/4=1$ and $xy=4$. Label intercepts and asymptotes where present. Separately translate the parabola by $(-1,2)$, stretch the ellipse parallel to x by factor 2, stretch the ordinary hyperbola parallel to y by factor 2, and reflect the rectangular hyperbola in $y=x$. Give each image equation and use a corresponding point to check it.

<details markdown="1"><summary>提示</summary>

用新坐标反解旧坐标，每个变换只作用于它对应的原曲线。

</details>

<details markdown="1"><summary>解答与核对</summary>

原图要素：抛物线顶点 $(0,0)$ 向右；椭圆截点 $(\pm4,0),(0,\pm3)$；双曲线顶点 $(\pm3,0)$、渐近线 $y=\pm2x/3$；直角双曲线无轴交点，渐近线 $x=0,y=0$。

$$\begin{aligned}
&\text{parabola image:}\\
&(y-2)^2=12(x+1),\\
&\text{ellipse image:}\\
&\frac{x^2}{64}+\frac{y^2}{9}=1,\\
&\text{hyperbola image:}\\
&\frac{x^2}{9}-\frac{y^2}{16}=1,\\
&\text{rectangular image:}\\
&xy=4.
\end{aligned}$$

对应点核对：$(3,6)\mapsto(2,8)$、$(4,0)\mapsto(8,0)$、$(3\sqrt2,2)\mapsto(3\sqrt2,4)$、$(1,4)\mapsto(4,1)$。普通双曲线像的渐近线为 $y=\pm4x/3$。伸缩倍率颠倒时，回看[反解坐标](#transformations)，再做重试 2。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题 {#practice-3}

**Independent task (self-written):** Find the intersections of $y=x$ with $x^2/4-y^2=1$, and of $y=x+1$ with $xy=1$. Interpret the number of real roots in each case.

<details markdown="1"><summary>提示</summary>

先代入直线，不要只凭分支位置猜交点。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&x^2/4-x^2=1,\\
&x(x+1)=1,\\
&x=\frac{-1\pm\sqrt5}{2},\\
&y=\frac{1\pm\sqrt5}{2}.
\end{aligned}$$

第一式左边非正，所以无交点；第二个二次式判别式为 5，给出两个相异交点，坐标中的正负号对应取。代入可核对两点的坐标乘积均为 1。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题 {#practice-4}

**Independent task (self-written):** Find the full locus equidistant from $(1,3)$ and $y=-1$. Sketch it and show why squaring has not introduced extra points.

<details markdown="1"><summary>提示</summary>

到水平线取竖直距离。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\sqrt{(x-1)^2+(y-3)^2}\\
&=\lvert y+1\rvert\\
&\iff(x-1)^2=8(y-1).
\end{aligned}$$

顶点 $(1,1)$，向上开口，要求 $y\ge1$。两距离非负，故平方后的方程逆推可还原原等式，所有点都合法。若误用水平距离，回看[距离](#loci)，再做重试 3。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 5 题 {#practice-5}

**Independent task (self-written):** Find the locus equidistant from $(-1,2)$ and $(5,2)$. Decide whether $(2,-10)$ belongs to it.

<details markdown="1"><summary>提示</summary>

写两点距离，或找垂直平分线。

</details>

<details markdown="1"><summary>解答与核对</summary>

将两边的非负距离平方，得到等价条件：

$$\begin{aligned}&(x+1)^2+(y-2)^2\\&=(x-5)^2+(y-2)^2.\end{aligned}$$

化简得 $12x=24$，故为完整直线 $x=2$。$(2,-10)$ 在轨迹上，两距离均为 $\sqrt{153}$；纵坐标没有额外限制。

</details>

</section>

## 诊断与重试 {#retry}

漏交点时回看[根的几何意义](#demonstration)，再做重试 1；误判相切或漏掉直线类型时回看[完整切线论证](#demonstration)，再做重试 4；平移或伸缩符号颠倒回看[坐标](#transformations)，再做重试 2；距离方向或平方依据错误回看[轨迹](#loci)，再做重试 3。

<section class="lesson-check" markdown="1">

### 重试 1 {#retry-1}

**Retry (self-written):** Find intersections of $y=x$ with $x^2/9+y^2/4=1$, then reflect $x^2/4-y^2=1$ in $y=x$.

<details markdown="1"><summary>提示</summary>

先代入求根；另一个反射任务交换坐标。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&(x,y)=\left(\frac6{\sqrt{13}},\frac6{\sqrt{13}}\right)\\
&\text{or }\left(-\frac6{\sqrt{13}},-\frac6{\sqrt{13}}\right),\\
&\text{reflection:}\quad\frac{y^2}{4}-x^2=1.
\end{aligned}$$

这是两个相异交点，不是相切。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 2 {#retry-2}

**Retry (self-written):** Apply these transformations separately to $xy=2$: translate by $(-2,1)$, stretch parallel to x by factor 3, and stretch parallel to y by factor 4. Give equations and asymptotes.

<details markdown="1"><summary>提示</summary>

取原曲线一点，核对每个像。

</details>

<details markdown="1"><summary>解答与核对</summary>

方程依次为 $(x+2)(y-1)=2$、$xy=6$、$xy=8$。平移后渐近线 $x=-2,y=1$；两伸缩的渐近线仍为坐标轴。原曲线上的点 $(1,2)$ 分别变为 $(-1,3),(3,2),(1,8)$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 3 {#retry-3}

**Retry (self-written):** Find the locus equidistant from $(3,-1)$ and $x=-1$. Also find the locus equidistant from $(0,0)$ and $(0,4)$. Justify both as full sets.

<details markdown="1"><summary>提示</summary>

用非负距离，并区分准线条件与两个定点条件。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&(y+1)^2=8(x-1);\\
&y=2.
\end{aligned}$$

第一条轨迹由以下距离条件得到：

$$\begin{aligned}&(x-3)^2+(y+1)^2\\&=(x+1)^2.\end{aligned}$$

第二条轨迹则使用两点距离：

$$\begin{aligned}&x^2+y^2\\&=x^2+(y-4)^2.\end{aligned}$$

两处都是非负距离的等价平方，故得到完整点集。

</details>

</section>

<section class="lesson-check" markdown="1">

### 再试 4 {#retry-4}

**Retry (self-written):** Find all tangents from $(0,2)$ to $y^2=4x$. Justify that every possible line type has been considered, including any case where substitution loses degree.

<details markdown="1"><summary>提示</summary>

设斜率之前先留出竖直线。二次项系数为零时，不能继续套判别式。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&y=mx+2,\\
&m^2x^2+(4m-4)x+4=0.\\
&m\ne0:\\
&D=(4m-4)^2-16m^2\\
&=16(1-2m),\\
&D=0\iff m=1/2,\\
&(x,y)=(4,4).
\end{aligned}$$

非竖直切线为 $y=x/2+2$，切点 $(4,4)$。当 $m=0$ 时方程降为 $-4x+4=0$，得到水平线上的点 $(1,2)$；以曲线参数 $y$ 看，2 两侧的点落在这条线的两侧，因此这不是相切。经过 $(0,2)$ 而被斜率形式遗漏的竖直线是 $x=0$，代回原曲线得 $y^2=0$ 这一重根，所以它是顶点切线，切点 $(0,0)$。恰有两条切线，其中一条竖直；若一概舍弃竖线，会丢掉真实答案。

</details>

</section>

## 下一课后的回顾 {#later-review}

<section class="lesson-check" markdown="1">

### 混合回顾 {#review}

**Later review (self-written):** For $x^2/9-y^2/4=1$, find every intersection with $y=2x/3+1$ and decide whether this line is tangent. Separately reflect the hyperbola in $y=x$ and give its asymptotes. Finally find the locus equidistant from $(1,-2)$ and $y=2$.

<details markdown="1"><summary>提示</summary>

检查代入后是否仍是二次；一个交点本身不足以判相切。

</details>

<details markdown="1"><summary>解答与核对</summary>

代入得 $-x/3-1/4=1$，唯一交点 $(-15/4,-3/2)$。并不相切：直线平行于渐近线 $y=2x/3$，交点方程为一次，不是二次重根；沿此直线，曲线方程左边减 1 为 $-x/3-5/4$，在交点前后变号，说明直线从曲线一侧穿到另一侧。反射方程 $y^2/9-x^2/4=1$，渐近线 $y=\pm3x/2$。轨迹为 $(x-1)^2=-8y$，顶点 $(1,0)$、向下开口。按错误回看[根的几何意义](#demonstration)或[距离方向](#loci)。

</details>

</section>

## 下一步 {#next-step}

无帮助通过对应重试后，进入[三角通解](/zh/alevel/as-further-mathematics/trigonometric-solutions/)。现在完成上一课的[混合回顾](/zh/alevel/as-further-mathematics/rational-functions/#later-review)，下一课后再回到本页。

## 来源与范围 {#sources}

本页示范及练习均为**自拟题（self-written）**，无官方分值。范围为 FP1.1/FP1.2 的四类曲线、单次变换、交点及简单距离轨迹，不预设一般旋转或完整焦点/离心率理论。

<details markdown="1"><summary>官方来源与样卷身份</summary>

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1 FP1.2.
- FM01 specimen Q10; QP pp.14–15, MS p.10. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/rational-functions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/trigonometric-solutions/)
