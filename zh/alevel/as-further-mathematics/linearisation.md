---
title: "线性化、作图与拟合"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/linearisation/
permalink: /zh/alevel/as-further-mathematics/linearisation/
toc_headings: "#start, #model, #demonstration, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

直线只有在坐标轴含义明确时才有用。本课练习选择变换量、画全数据点、拟合趋势，再还原原式常数。学习证据包括你自己画出的标注图，不能只交计算出来的常数。

## 开始之前 {#start}

需要会辨认 $Y=mX+c$ 的斜率和截距，并会幂与常用对数；对数规则可回补 [AS 指数与对数](/zh/alevel/as-mathematics/exponentials-logarithms/)。本页题目与数据均为**自拟／构造**，不是实测，没有官方分值。先作答，再打开帮助。

## 选择满足直线关系的两个量 {#model}

先从模型关系整理方程，再给横轴量 X、纵轴量 Y 命名。“Y against X” 表示 Y 放在纵轴。取对数要求真数为正；有量纲读数须在明确单位下用其数值，不能对未说明单位的物理量直接取对数。

对正值幂律，对数法则把指数变成斜率，把乘法常数变成对数截距：

$$\begin{aligned}
y&=kx^n\quad(x,y,k>0),\\
Y&=\log_{10}y,\quad X=\log_{10}x,\\
Y&=nX+\log_{10}k.
\end{aligned}$$

指数模型只对 y 取对数，斜率是 a 的对数，而不是 a：

$$\begin{aligned}
y&=ka^x\quad(y,k,a>0),\\
Y&=\log_{10}y,\quad X=x,\\
Y&=X\log_{10}a+\log_{10}k.
\end{aligned}$$

不必每次都取对数。优先找原式中已经按直线方式联系的两个量：

$$\begin{aligned}
\frac1y&=a+\frac bx\quad(xy\ne0),\\
X&=1/x,\quad Y=1/y,\\
Y&=a+bX.
\end{aligned}$$

$$\begin{aligned}
y^2&=ax^3+b,\\
X&=x^3,\quad Y=y^2,\\
Y&=aX+b.
\end{aligned}$$

变换后可能不再显出原来的限制或符号。取倒数排除零，撤销平方可能得到两支实解，也可能没有实解。返回原变量时必须把这些条件带回去。

## 先作图，再估计常数 {#demonstration}

<section class="worked-example" markdown="1">

### 完整走一遍幂律拟合

以下无量纲数据为**构造数据**，刻意精确满足幂律，不是实测，也不构成实验验证。

| x | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| y | 2.5 | 10 | 22.5 | 40 | 62.5 |
| $X=\log_{10}x$ | 0 | 0.30103 | 0.47712 | 0.60206 | 0.69897 |
| $Y=\log_{10}y$ | 0.39794 | 1 | 1.35218 | 1.60206 | 1.79588 |

原始值均为正，所以可取对数。对变换量仍使用均匀的直线刻度，画全五个点，再沿趋势画一条直线，并延到 X=0 处读截距。

![All five constructed log10 x, log10 y points plotted on labelled axes with the fitted line Y=2X+0.39794 and grid scales.](/alevel/as-further-mathematics/diagrams/linearisation.svg){: width="560" height="472" }

选拟合线上的两个相距较远的位置，不必正好选原数据点。本例取 (0,0.39794) 与 (0.6,1.59794)，得到

$$m=\frac{1.59794-0.39794}{0.6-0}=2.$$

斜率就是 n，但截距是对数，还需还原：

$$n=2,\qquad k=10^{0.39794}\approx2.5.$$

因此 $y=2.5x^2$。x=3 时预测 22.5，其余四对原始数据也吻合。变换表中的微小差异来自对数舍入，并不是测量散布。

</section>

### 怎样读拟合线并核验 {#reading-a-fit}

有散布时，用一条平衡整体趋势的直线，尽量让两侧都有点，不逐点连接；除非模型要求，也不能强迫过原点。较大的斜率三角形能减小读数误差影响。估计值的精度要与网格相称，并返回原变量比较预测。拟合好只说明与这些数据相容，不能证明因果关系或普遍物理定律。

<section class="lesson-check" markdown="1">

#### 任务 1 {#scaffold}

**Scaffold (self-written):** A plot of $\log_{10}y$ against x is $Y=0.3x+0.7$. Express y in the form $ka^x$ and state the necessary positivity conditions.

<details markdown="1"><summary>提示</summary>

先对整个右侧撤销对数，再把和的指数拆成乘积。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$y=10^{0.7}(10^{0.3})^x.$$

$$k=10^{0.7},\qquad a=10^{0.3},\qquad y>0.$$

k、a 都是十的幂，因此为正。斜率 0.3 不是 a，截距 0.7 不是 k；若直接抄了它们，回看[指数模型](#model)。

</details>

</section>

## 自己作图并保留产出 {#practice}

每道作图题都应保留：变换数据表、轴名与刻度、全部数据点、一条拟合线，以及宽斜率三角形和所取两点坐标；之后还要还原原模型并代回一组数据。只写常数不算作图证据。使用提示时记录帮助。

每幅图使用一份空白网格：可随本页打印，也可在方格纸上复制。横向 24 格、纵向 20 格；选择并标明均匀刻度，让数据点占据大部分网格。图中没有预先画出的答案。

<svg xmlns="http://www.w3.org/2000/svg" width="560" height="470" style="display:block;max-width:100%;height:auto" viewBox="0 0 560 470" role="img" aria-labelledby="blank-grid-title blank-grid-desc">
<title id="blank-grid-title">Blank plotting grid</title>
<desc id="blank-grid-desc">Twenty-four horizontal divisions and twenty vertical divisions, with empty margins for student-selected axis labels and scales. No data or fitted line is shown.</desc>
<defs><pattern id="blank-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#b7c4d4" stroke-width="1"/></pattern></defs>
<rect width="560" height="470" fill="white"/>
<rect x="60" y="20" width="480" height="400" fill="url(#blank-grid-pattern)" stroke="#344054"/>
<path d="M60 20V420H540" fill="none" stroke="#172b4d" stroke-width="2"/>
<text x="300" y="462" text-anchor="middle" fill="#172b4d" font-size="18">Horizontal quantity and scale: __________</text>
<text x="20" y="220" text-anchor="middle" transform="rotate(-90 20 220)" fill="#172b4d" font-size="18">Vertical quantity and scale: __________</text>
</svg>

手机阅读时，使用打印的网格或方格纸，并把数据表放在纸旁。

<section class="lesson-check" markdown="1">

#### 任务 1 {#practice-1}

**Independent task (self-written):** The following dimensionless data are constructed: $(x,y)=(1,1/5),(2,2/7),(3,1/3),(6,2/5)$. Test a model $1/y=a+b/x$ by choosing axes and plotting all four points; read off a and b, then predict y at $x=4$. State a value of x at which the model is undefined and explain why a numerical fit does not prove a physical law.

<details markdown="1"><summary>提示</summary>

先列变换表并标轴，读参数后还原 y；分别查取倒数的限制和还原式分母。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
X=1/x:&\quad1,\ 1/2,\ 1/3,\ 1/6,\\
Y=1/y:&\quad5,\ 7/2,\ 3,\ 5/2.
\end{aligned}$$

可取横轴 X 从 0 到 1.2、纵轴 Y 从 0 到 6。要画变换后的四对点，不能仍画原始 (x,y)。它们在 Y=2+3X 上，用 (0,2) 与 (1,5) 的大三角形得到斜率 3，所以 a=2、b=3。

$$\begin{aligned}y&=\frac{x}{2x+3},\\y(4)&=\frac4{11}.\end{aligned}$$

原倒数关系要求 $x\ne0,y\ne0$；还原式还要排除 $x=-3/2$，不能悄悄延伸到 x=0。把 (2,2/7) 代回原式核对。你自己的图应显示四点在所选刻度下靠近这条线，纯代数结果不能替代这个证据。吻合构造数据也不是自然界证据。轴名或落点错，回到[选择变换量](#model)，再做[重试一](#retry-plot)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 任务 2 {#practice-2}

**Independent task (self-written):** The constructed dimensionless pairs are $(1,3),(4,6),(9,9),(16,12)$. Investigate the proposed model $y=kx^n$ by choosing axes, plotting every transformed pair and fitting a line. Estimate k and n from your graph, predict y at x=25 and state the domain used. Keep your table, graph and gradient triangle.

<details markdown="1"><summary>提示</summary>

先推直线关系，再判断斜率和截距代表什么。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{array}{rrr}
x&X&Y\\
1&0&0.47712\\
4&0.60206&0.77815\\
9&0.95424&0.95424\\
16&1.20412&1.07918
\end{array}$$

这里 X、Y 分别是 x、y 的常用对数。你画的拟合线应接近

$$Y=0.5X+0.47712.$$

例如在线上取 (0,0.47712) 与 (1.2,1.07712)，斜率为 0.5。故 n≈0.5、k≈3；在正值定义域内，x=25 时 y≈15。代 x=9 得 y=9。手绘图可用 n 在 0.48–0.52、k 在 2.9–3.1 作自检参考，并非官方容差；不同估计需用实际拟合线解释。若把 k 写成 0.47712，回看[撤销对数](#demonstration)，再做[重试二](#retry-exponential)。

</details>

</section>

## 回补后重新作图 {#retry}

坐标轴交换会改变斜率含义；对数截距要用指数还原；平方后丢失符号则要查分支。选对应重试，并收起旧答案。

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-plot}

**Retry (self-written):** For the constructed pairs $(x,y)=(1,1/6),(2,1/4),(4,1/3)$, test $1/y=a+b/x$ using a new labelled graph and a wide gradient triangle. Find a, b and y at x=8, and state excluded x-values.

<details markdown="1"><summary>提示</summary>

画之前先变换每对数据；整理后仍保留原倒数限制。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}X:&\quad1,\ 1/2,\ 1/4,\\Y:&\quad6,\ 4,\ 3.\end{aligned}$$

取直线上的 (0,2) 与 (1,6) 得 a=2、b=4。

$$y=\frac{x}{2x+4},\qquad y(8)=\frac25.$$

排除 x=0 与 x=−2。核对新图中三个点。若斜率为 1/4，可能交换了轴；先按所选轴推新关系，再解释参数。

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-exponential}

**Retry (self-written):** Constructed data with deliberate scatter are $(x,y)=(0,2),(1,4.1),(2,7.9),(3,16.2)$. Investigate $y=ka^x$ by plotting suitable transformed values. Estimate k and a from a balanced line and predict y at x=4. Explain why neither exact agreement nor a physical law has been established.

<details markdown="1"><summary>提示</summary>

只有一个轴需要对数。画一条整体趋势线，不逐点连接。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}X:&\quad0,\ 1,\ 2,\ 3,\\Y:&\quad0.30103,\ 0.61278,\\&\quad0.89763,\ 1.20952.\end{aligned}$$

平衡拟合线可近似为 Y=0.302X+0.302，得到 k≈2.00、a≈2.00、y(4)≈32.4。便于读图的参考线 Y=0.30103X+0.30103 则给 k=a=2、y(4)=32，两者都是合理的作图估计。要比较实际拟合线、三角形和原变量预测，不强求精确截距。k 在 1.9–2.1、a 在 1.95–2.05 仅供自检，不是官方界限。人为散布使精确吻合不成立，而构造数据不能验证物理定律。

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 3 {#retry-branches}

**Retry (self-written):** A straight plot of $y^2$ against $x^3$ has gradient 4 and intercept 9. Give the original relation. Is positive y the only possible branch?

<details markdown="1"><summary>提示</summary>

先查根号内非负，再撤销平方。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}y^2&=4x^3+9,\\y&=\pm\sqrt{4x^3+9}\\&\quad(4x^3+9\ge0).\end{aligned}$$

只取正支需要额外情境条件；根号内为零时两支重合，为负时没有实数 y。

</details>

</section>

## 学过数值求根后回顾 {#later-review}

<section class="lesson-check" markdown="1">

#### 任务 1 {#review-1}

**Later review (self-written):** For the constructed pairs $(1,3),(2,12),(3,27),(4,48)$, investigate which of $y=kx^n$ and $y=ka^x$ is consistent with the data. Choose and draw a suitable linear plot, estimate its constants and justify your choice using the original variables. Separately, if $1/y=2+3/x$, find x when y=3/10 and check the domain.

<details markdown="1"><summary>提示</summary>

比较两个模型对 x 变化的预测；即使代数看出了关系，也保留实际作图。

</details>

<details markdown="1"><summary>解答与核对</summary>

幂律图给出 Y=2X+0.47712，所以 k=3、n=2。X 为 0、0.30103、0.47712、0.60206，对应 Y 为 0.47712、1.07918、1.43136、1.68124；把四点实际画出。原 y 在连续单位 x 间隔的比值为 4、9/4、16/9，不是固定常数，因此同一个指数因子 a 不能精确符合四点。

$$\begin{aligned}\frac{10}3&=2+\frac3x,\\x&=\frac94.\end{aligned}$$

结果非零且不等于 −3/2，符合定义域。若最后仍在算 y 而非 x，回看[返回原变量](#reading-a-fit)。

</details>

</section>

## 下一步 {#next-step}

自己的图能支持参数估计、且能保留原定义域后，继续[数值求根](/zh/alevel/as-further-mathematics/numerical-roots/)。现在先做[变换回顾](/zh/alevel/as-further-mathematics/transformations/#later-review)，下一课后再回到本页做混合复查。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

<details markdown="1"><summary>官方来源</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.2.
- FM02 June 2024 Q4; QP pp.7–9, MS pp.7–9. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/transformations/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/numerical-roots/)

{% include exam_topic_practice.html %}
