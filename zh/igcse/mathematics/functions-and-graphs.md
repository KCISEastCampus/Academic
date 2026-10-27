---
layout: subjects
title: "函数与图像"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/functions-and-graphs/
permalink: /zh/igcse/mathematics/functions-and-graphs/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

规则接收一个输入，产生一个输出；图像一次展示许多输入—输出数对。先从机器的意思开始，再分段学习允许输入、组合规则和图像形状。

先会[代入与变形](/zh/igcse/mathematics/expressions-and-formulae/#start)、[坐标](/zh/igcse/mathematics/coordinates-and-lines/#coordinates)和[二次图像](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#sketch)。从函数机器及熟悉的图像出发，再连接正式记号、定义域、复合反函数、指数三角图像和正反变关系。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 一个输入，一个输出 {#machines}

函数（function）对每个允许输入指定恰好一个输出；不同输入可以得到同一输出。“乘 3 再减 4”把 2 变成 2，把 5 变成 11。从输出找输入，要按反顺序撤去运算。

<div class="worked-example" markdown="1">

### 正向与逆向 {#example-machine}

**Question:** A machine multiplies its input by 3, then subtracts 4. Find the output for input −2, and input for output 8.

$$(3)(-2)-4=-10;\qquad 3x-4=8\Rightarrow3x=12\Rightarrow x=4.$$

把逆向答案正代检查：3×4−4=8。先减 4 后乘是另一条规则。

</div>

## 独立检验规则 {#practice}

<div class="lesson-check" markdown="1">

### 另一台机器 {#practice-machine}

**Question:** A machine adds 5, then multiplies by 2. Find its output for −3, the input giving output 18, and an expression for output from input x.

<details markdown="1">

<summary>提示</summary>

先做加法，整个结果再加倍，所以要括号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$2(-3+5)=4;\quad 2(x+5)=18\Rightarrow x=4;\quad \text{output}=2(x+5).$$

规则不是 2x+5，因为输入与加上的 5 都要加倍。输入 4 的确得 18。

</details>

</div>

## 允许输入与实际输出 {#domain}

f(x) 表示函数 f 在输入 x 时的输出，不是 f 乘 x。**定义域（domain）**为允许输入集，**值域（range）**为真正得到的输出集。公式与定义域一起决定值域；图像若每条竖线最多穿过一个包含的点，才代表函数。

<div class="worked-example" markdown="1">

### 区间改变值域 {#example-domain}

**Question:** For $f(x)=x^2$ with $-2\le x\le3$, state the domain and range.

输入 −2 至 3，包含 0。平方输出非负；x=0 时最小为 0，x=3 时最大为 9；0≤x≤3 能得到之间所有高度。

$$\text{domain}:\ -2\le x\le3;\qquad \text{range}:\ 0\le f(x)\le9.$$

只平方两端会漏掉最小值。h(x)=1/x 禁止输入 0，也永远不会输出 0。

</div>

<div class="lesson-check" markdown="1">

### 找真正输出范围 {#practice-domain}

**Question:** For $f(x)=(x-1)^2$ on −1≤x≤3, state domain and range. For $g(x)=1/x$ with all possible real inputs, state domain and range. Does a rule assigning both +√x and −√x to each positive input define a function?

<details markdown="1">

<summary>提示</summary>

找平方在哪里为零，检查规则究竟给一个还是两个输出。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$f:\ -1\le x\le3,\quad 0\le f(x)\le4;\qquad g:\ x\ne0,\quad g(x)\ne0.$$

f 在 x=1 最小为零，两端最大为 4。正负根同时输出不是函数，因为每个正输入得到两个不同值；选定其中一个分支才可以。

</details>

</div>

## 把一个输出送入另一个 {#composite}

fg(x) 意为 f(g(x))：先做 g，再做 f，不是 f(x)g(x) 的乘积，交换次序通常会改变答案。内层必须有定义，且输出要落在外层定义域里。

<div class="worked-example" markdown="1">

### 次序很重要 {#example-composite}

**Question:** Let $f(x)=x^2+1$ and $g(x)=x-2$, both on all real inputs. Find fg(x), gf(x), fg(3), gf(3).

$$fg(x)=(x-2)^2+1=x^2-4x+5,\qquad gf(x)=(x^2+1)-2=x^2-1,$$

$$fg(3)=2,\qquad gf(3)=8.$$

第一式把 g 的整个输出 x−2 平方；第二式从 f 的完整输出减 2。两个复合的定义域都为全体实数。

</div>

<div class="lesson-check" markdown="1">

### 复合并检查输入 {#practice-composite}

**Question:** Let $f(x)=2x+1$ and $g(x)=x^2-3$, both on all real inputs. Find fg(x), gf(x), and solve fg(x)=gf(x). Then let h(x)=1/x and k(x)=x−3: find hk(x) and its domain.

<details markdown="1">

<summary>提示</summary>

整个内层表达式都要代入。hk 中 k 不得输出零。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$fg(x)=2x^2-5,\qquad gf(x)=(2x+1)^2-3=4x^2+4x-2,$$

$$2x^2+4x+3=0,\qquad \Delta=16-24=-8<0,$$

$$hk(x)=\frac1{x-3},\qquad x\ne3.$$

第一对复合无实数相等解，这是合理结果，不能因此改动复合次序。hk 排除 x=3，因为 h 不能接收 k(3)=0。

</details>

</div>

## 撤去一条规则 {#inverse}

反函数（inverse function）把输出还原成原输入。其定义域是原值域，值域是原定义域。先写 y=f(x)，解出 x，再用新的输入字母改写。f⁻¹ 表示反函数，不是倒数；每个旧输出只能对应一个旧输入，逆向才仍为函数。

<div class="worked-example" markdown="1">

### 逆向并交换域 {#example-inverse}

**Question:** For $f(x)=3x-4$, 1≤x≤5, find f⁻¹ and state its domain and range.

$$y=3x-4,\quad y+4=3x,\quad x=\frac{y+4}{3},\qquad f^{-1}(x)=\frac{x+4}{3}.$$

原值域为 −1≤y≤11，所以反函数定义域为 −1≤x≤11，值域为 1≤f⁻¹(x)≤5。检查 f(2)=2、f⁻¹(2)=2；一般地，f⁻¹(f(x))=(3x−4+4)/3=x，但只在声明定义域上使用。

</div>

x² 在全实数上把 +2、−2 都变成 4，因此无法逆推出唯一输入。限制 x≥0，反函数为 √x，定义域 x≥0；限制 x≤0，则反函数为 −√x。限制决定分支。

<div class="lesson-check" markdown="1">

### 确定反函数与分支 {#practice-inverse}

**Question:** Find the inverse of $f(x)=5-2x$ on −1≤x≤3, stating both domains and ranges. Then find the inverse of g(x)=x² on x≤0 and check it at output 9.

<details markdown="1">

<summary>提示</summary>

递减一次函数在最小输入处取得最大输出；g 要选负平方根分支。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$f^{-1}(x)=\frac{5-x}{2}.$$

f 定义域 [−1,3]，值域 [−1,7]；反函数定义域 [−1,7]，值域 [−1,3]。g 值域 [0,∞)，反函数 g⁻¹(x)=−√x，定义域 [0,∞)，值域 (−∞,0]。g⁻¹(9)=−3，g(−3)=9；正根不在原定义域内。

</details>

</div>

## 由规则认出形状 {#families}

直线斜率固定；二次曲线有对称转折；简单三次 x³ 上升通过 (0,0)，中心变平，两侧弯曲方向不同；倒数 1/x 有两支，x 正时正、负时负。它趋近两轴却不接触，两轴叫渐近线（asymptote）；不能跨 x=0 把两支连起来。

<div class="worked-example" markdown="1">

### 给形状可绘的数据 {#example-families}

**Question:** Plot $y=x^3$ on −2≤x≤2 and $y=1/x$ on −2≤x≤2, x≠0. Use separate axes.

| x | −2 | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- | --- |
| x³ | −8 | −1 | 0 | 1 | 8 |

| x | −2 | −1 | −0.5 | 0.5 | 1 | 2 |
| --- | --- | --- | --- | --- | --- | --- |
| 1/x | −0.5 | −1 | −2 | 2 | 1 | 0.5 |

三次图画平滑上升曲线，近原点变平；倒数图画第一与第三象限两支，向 y 轴靠近时愈陡却不碰轴。数表不允许跨禁用输入连线。一次与二次请连用完整的[直线作图](/zh/igcse/mathematics/coordinates-and-lines/#example-line)和[抛物线作图](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#example-sketch)。

</div>

<div class="lesson-check" markdown="1">

### 从特征匹配规则 {#practice-families}

**Question:** For $y=x-2$, $y=x^2-2$, $y=x^3-2$ and $y=2/x$, make tables and sketch each on separate axes for −2≤x≤2 (excluding 0 for 2/x). Identify which has a turning point, which is undefined at 0, and which has constant gradient. Give intercepts.

<details markdown="1">

<summary>提示</summary>

用整数 x，倒数另加 ±0.5；不能因一个共同点就认定同形。

</details>

<details markdown="1">

<summary>解答与检查</summary>

| x | −2 | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- | --- |
| x−2 | −4 | −3 | −2 | −1 | 0 |
| x²−2 | 2 | −1 | −2 | −1 | 2 |
| x³−2 | −10 | −3 | −2 | −1 | 6 |

直线斜率恒为 1，截距点 (0,−2)、(2,0)。二次最低点 (0,−2)，根 ±√2。三次上升，在 (0,−2) 平坦拐弯但不转向，横截距 ∛2。倒数在 0 无定义，无轴截距；−2、−1、−0.5、0.5、1、2 的输出为 −1、−2、−4、4、2、1。画 I、III 两支，以两轴为渐近线。三次曲线的平坦点不是转折点。

</details>

</div>

## 重复相乘 {#exponential}

y=kˣ 的输入在指数上，k 为固定正数。k>1 时增长，0<k<1 时衰减，k=1 时恒为 1；都经过 (0,1)。输出始终为正。k>1 时，x 向负方向无限减小，输出趋近零而不等于零；0<k<1 时，x 向正方向无限增大，输出趋近零而不等于零。k=1 的常数图像始终为1，不趋近零。这与底数随 x 改变的 x³ 不同。

<div class="worked-example" markdown="1">

### 观察乘数 {#example-exponential}

**Question:** Plot $y=2^x$ for −2≤x≤3. Explain why it is not a straight line.

| x | −2 | −1 | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- | --- | --- |
| 2ˣ | 0.25 | 0.5 | 1 | 2 | 4 | 8 |

x 每增一，y 加倍，而非增加固定量。绘点平滑连接，并保持在横轴上方。负指数给倒数，不给负 y。

</div>

<div class="lesson-check" markdown="1">

### 判断增长或衰减 {#practice-exponential}

**Question:** Plot $y=(1/2)^x$ for −2≤x≤3. A model is N=80aᵗ with a>0, t in hours. It gives N=20 at t=2 and decreases with time. Find a, the initial value and N at t=3.

<details markdown="1">

<summary>提示</summary>

由 80a²=20 求 a，选正根；初值代 t=0。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y:\ 4,2,1,0.5,0.25,0.125;\qquad a^2=\tfrac14,\quad a=\tfrac12,$$

$$N(0)=80,\qquad N(3)=80(\tfrac12)^3=10.$$

画经过 (0,1) 的正值递减曲线，趋向 y=0。模型每小时减半。负 a 被条件排除，也不能在所有实 t 上表示所需正指数函数。

</details>

</div>

## 度制中的周期图像 {#trigonometric}

角 x 以度计，在单位圆上 sin x 是纵坐标，cos x 是横坐标。一整圈为 360°，所以正弦、余弦每 360° 重复，也适用于负角与超过 360° 的角；值域为 −1 至 1。tan x=sin x/cos x，所以 cos x=0 时无定义，每 180° 重复。

| x (degrees) | 0 | 90 | 180 | 270 | 360 |
| --- | --- | --- | --- | --- | --- |
| sin x | 0 | 1 | 0 | −1 | 0 |
| cos x | 1 | 0 | −1 | 0 | 1 |

正余弦绘点后连平滑波形，不连锯齿折线。正切的一支用下表；在 −90°、90° 画竖直虚渐近线，曲线递增经过 (0,0)，近端点无限变陡。每 180° 重复一支，不跨渐近线相连。

| x (degrees) | −60 | −45 | 0 | 45 | 60 |
| --- | --- | --- | --- | --- | --- |
| tan x (approx.) | −1.732 | −1 | 0 | 1 | 1.732 |

任意整数 k 下，正切在 90°+180°k 无定义。大角可减整周期：sin 450°=sin 90°=1，cos(−360°)=1，tan 225°=tan 45°=1。直角三角形含义与特殊角值回看[三角学](/zh/igcse/mathematics/pythagoras-and-trigonometry/#start)。

<div class="lesson-check" markdown="1">

### 画到一圈之外 {#practice-trigonometric}

**Question:** Sketch sin x and cos x on separate axes for −180°≤x≤540°, marking zeros, maxima and minima. State each period and range, then find sin(−90°) and cos 450°.

<details markdown="1">

<summary>提示</summary>

把四分之一圈模式往两侧延伸；负 x 是角度，不能一律当函数外的负号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

| x (degrees) | −180 | −90 | 0 | 90 | 180 | 270 | 360 | 450 | 540 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sin x | 0 | −1 | 0 | 1 | 0 | −1 | 0 | 1 | 0 |
| cos x | −1 | 0 | 1 | 0 | −1 | 0 | 1 | 0 | −1 |

按点画平滑波形，横轴标度。两者周期均 360°、值域 [−1,1]；sin(−90°)=−1，cos450°=0。最高为 1、最低 −1，都没有竖直渐近线。

</details>

</div>

<div class="lesson-check" markdown="1">

### 画出分离各支 {#practice-tangent-graph}

**Question:** Sketch y=tan x for −180°≤x≤360°. Mark zeros, vertical asymptotes and points where y=1 or −1. Find tan(−135°) and explain why tan270° is undefined.

<details markdown="1">

<summary>提示</summary>

把 −90° 到 90° 的一支每 180° 重复。

</details>

<details markdown="1">

<summary>解答与检查</summary>

零点 −180°、0°、180°、360°；渐近线 −90°、90°、270°。y=1 在 −135°、45°、225°，y=−1 在 −45°、135°、315°。各支递增且分离，不能跨渐近线。tan(−135°)=1；cos270°=0，所以正切的商分母为零。周期 180°，值域全实数。

</details>

</div>

## 规则分段改变 {#context-graphs}

情境图在不同区间可能用不同规则。先判断输入在哪段，再计算；空实端点区分是否包含，跳跃处不能擅自补连线。

<div class="worked-example" markdown="1">

### 停车收费 {#example-context}

**Question:** A constructed parking rule is C=3 for 0<t≤1 and C=3+2(t−1) for 1<t≤4, with t in hours and C in dollars. Plot it and find C at 0.5 and 3 hours.

先画从空心 (0,3) 到实心 (1,3) 的水平段，再画从 (1,3) 到 (4,9) 的线；连接点由第一条规则包含。

$$C(0.5)=3,\qquad C(3)=3+2(3-1)=7.$$

0 时刻排除；第一小时固定收费，以后每小时加 2 元。把第二段向左延伸会算错短时停车。

</div>

<div class="lesson-check" markdown="1">

### 从收费文字建立图像 {#practice-context}

**Question:** A constructed bicycle-hire tariff allows 0 to 4 hours of hire. At t = 0 there is no hire and no charge. A hire of more than 0 and at most 2 hours costs 6 dollars. If the hire lasts more than 2 hours, a 3-dollar continuation fee is added to the first 6 dollars, plus 2 dollars per hour beyond 2 hours; fractions of an hour are charged proportionally. Define the cost C(t), draw its graph with endpoint marks, and state its domain and range. Find C(0), C(2), C(2.5) and C(4). When is the cost 11 dollars? Can the cost be 8 dollars? Explain what happens just after 2 hours.

<details markdown="1">

<summary>提示</summary>

先分清“不租”“最多2小时”“超过2小时”，再为每种情况写费用。

</details>

<details markdown="1">

<summary>解答与检查</summary>

先按时长判断适用规则。恰好2小时仍收6元；只有超过2小时才加续租费，并按超出时长计费。

$$C(t)=\begin{cases}0,&t=0,\\6,&0<t\le2,\\9+2(t-2),&2<t\le4.\end{cases}$$

在 (0,0) 画实心孤立点；水平段从空心 (0,6) 到实心 (2,6)。最后一段从空心 (2,9) 向上画到实心 (4,13)，不能用竖线填跳跃。横轴是时间（小时），纵轴是费用（元）。

$$C(0)=0,\quad C(2)=6,\quad C(2.5)=10,\quad C(4)=13.$$

定义域 [0,4]；值域为 {0,6} 与 (9,13] 的并集，9本身不取得。解 9+2(t−2)=11 得 t=3 小时，落在最后区间。8元不能出现：前两种收费为0或6，续租后费用大于9。刚超过2小时，费用由6跳到略大于9；3元是一次性续租费，不是每小时增加3元。若把2小时也放在续租段，或把6到9之间画成可达价格，回看[区间与端点](#context-graphs)，收起答案后做[水箱新情境](#retry-context)。

</details>

</div>



## 把变化关系写成代数 {#variation}

正变关系可写 y=kx；若与 x 的平方成正比，则 y=kx²。反变为 y=k/x，乘积 xy=k 不变。先由已知数对求 k，再用规则，不能只看趋势猜。[比例页](/zh/igcse/mathematics/ratio-and-proportion/#start)给出完整数量推理。

<div class="worked-example" markdown="1">

### 先求常数 {#example-variation}

**Question:** y varies inversely as x. When x=4, y=6. Find y when x=8.

$$y=\frac{k}{x},\quad 6=\frac{k}{4}\Rightarrow k=24,\qquad y=\frac{24}{8}=3.$$

x 加倍，y 减半，符合乘积恒为 24。若写 y=kx 会预测增长，与反变矛盾。

</div>

<div class="lesson-check" markdown="1">

### 选择关系 {#practice-variation}

**Question:** (a) y is directly proportional to x² and y=12 when x=2. Find the formula and y at x=3. (b) A rectangle has fixed area 24 cm² with positive sides x,y cm. Express y in terms of x and find y when x=8.

<details markdown="1">

<summary>提示</summary>

题设比例对象是 x²，不是 x；矩形定面积意味着积固定。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y=kx^2,\quad 12=4k\Rightarrow k=3,\quad y=3x^2,\quad y(3)=27;$$

$$xy=24,\quad y=\frac{24}{x},\ x>0,\qquad y(8)=3\text{ cm}.$$

第一题 y/x² 恒为 3，第二题 xy 恒为 24。长方形面积除以边长得到长度，单位相符。

</details>

</div>

## 一次修复一个概念 {#retry}

运算次序错回看[机器](#machines)；只由端点求值域回看[域](#domain)；复合倒序回看[复合](#composite)；反函数分支错回看[反函数](#inverse)；跨禁用值连图回看[图像族](#families)；周期单位错回看[三角图](#trigonometric)；分段错回看[情境](#context-graphs)；指数初值或乘数错回看[指数图像](#exponential)，再做[指数重试](#retry-exponential)；比例常数错回看[变化关系](#variation)。

<div class="lesson-check" markdown="1">

### 重试机器 {#retry-machine}

**Question:** A machine subtracts 3, then squares. Find output for input 1 and all inputs giving output 4.

<details markdown="1">

<summary>提示</summary>

撤去平方可能有两种输入。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$f(1)=(1-3)^2=4;\quad (x-3)^2=4\Rightarrow x-3=\pm2\Rightarrow x=1,5.$$

每个输入仍只有一个输出；多个输入共用输出不影响原规则是函数。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试值域 {#retry-domain}

**Question:** State the range of f(x)=x²+1 for −3≤x≤2. Explain why the outputs of the endpoints are insufficient.

<details markdown="1">

<summary>提示</summary>

检查是否允许 x=0。

</details>

<details markdown="1">

<summary>解答与检查</summary>

值域 [1,10]；x=0 最小为 1，x=−3 最大为 10。端点给 10、5，会漏掉内部最小值。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试次序与限制 {#retry-composite}

**Question:** Let f(x)=x+1, g(x)=2x. Find fg,gf. For h(x)=1/x and k(x)=x+2, find hk and kh with domains.

<details markdown="1">

<summary>提示</summary>

外层使用前先检查内层输出。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$fg(x)=2x+1,\quad gf(x)=2x+2;\quad hk(x)=\frac1{x+2},\ x\ne-2;\quad kh(x)=\frac1x+2,\ x\ne0.$$

分母限制对应不同输入，不能把同一域套给两个复合。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试反函数 {#retry-inverse}

**Question:** Find the inverse of f(x)=4x+1 on 0≤x≤2, with its domain and range. Can x² on all real inputs have a single-valued inverse?

<details markdown="1">

<summary>提示</summary>

交换旧定义域与值域。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$f^{-1}(x)=\frac{x-1}{4}.$$

反函数定义域 [1,9]，值域 [0,2]。全实数上的 x² 无反函数，因为 1 与 −1 同给 1，需要限域。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试形状 {#retry-families}

**Question:** Sketch y=x³+1 and y=−1/x using x=−2,−1,−0.5,0.5,1,2, adding x=0 only where allowed. State intercepts and asymptotes.

<details markdown="1">

<summary>提示</summary>

负倒数把倒数输出全部变号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$x^3+1:\ -7,0,0.875,1.125,2,9;\qquad -1/x:\ 0.5,1,2,-2,-1,-0.5.$$

三次还包含 (0,1)，横截距 (−1,0)，无渐近线；负倒数在 II、IV 两支，两轴为渐近线，无截距，不能补上 (0,0)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试指数变化 {#retry-exponential}

**Question:** Plot y=3ˣ at x=−2,−1,0,1,2. State intercepts and behaviour as x becomes very negative. A=100(0.8)ᵗ: find A at t=0,1,2.

<details markdown="1">

<summary>提示</summary>

负指数表示倒数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$3^x:\ \tfrac19,\tfrac13,1,3,9;\qquad A:\ 100,80,64.$$

上升曲线过 (0,1)，无横截距，x 越负越趋近零。A 每步乘 0.8，并非每步固定减 20。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试周期与分支 {#retry-trigonometric}

**Question:** Sketch sin x and tan x over 0°≤x≤360°, marking key points and asymptotes. Find sin810°, cos(−180°), tan405°. State both ranges.

<details markdown="1">

<summary>提示</summary>

按相应函数的整周期化简角度。

</details>

<details markdown="1">

<summary>解答与检查</summary>

正弦点 (0,0)、(90,1)、(180,0)、(270,−1)、(360,0)，平滑相连，值域 [−1,1]。正切零点 0°、180°、360°，渐近线 90°、270°，各支分离递增，值域全实数；45°、225° 取 1，135°、315° 取 −1。sin810°=1，cos(−180°)=−1，tan405°=1。

</details>

</div>

<div class="lesson-check" markdown="1">

### 在水箱情境中重试 {#retry-context}

**Question:** In a constructed tank model, a 10-litre tank contains 2 litres at t = 0. Water enters at a steady 3 litres per minute for the first 2 minutes. The tap is then closed for 2 minutes. From t = 4 to t = 7 minutes water drains at a steady 2 litres per minute. Define V(t) for 0 to 7 minutes and draw its graph. State its domain and range; find V(2), V(4) and V(5), and all times when the volume is 6 litres. Explain what a horizontal part means and whether the graph should jump at a change of rule.

<details markdown="1">

<summary>提示</summary>

分别计算每次改变规则时已有多少水，再写下一段的变化量。

</details>

<details markdown="1">

<summary>解答与检查</summary>

先累计进入或排出的水量，不把流量直接当体积。2分钟时已有 2+3×2=8 升；停止进水后保持8升。排水从第4分钟开始，所以排出的量为 2(t−4)，不是2t。

$$V(t)=\begin{cases}2+3t,&0\le t\le2,\\8,&2<t\le4,\\8-2(t-4),&4<t\le7.\end{cases}$$

横轴标分钟，纵轴标升；连续折线依次连接实心点 (0,2)、(2,8)、(4,8)、(7,2)。相邻规则在2与4分钟给同一体积，因此没有跳跃。中间水平段表示体积不变、净流量为零，不表示水箱空了。

$$V(2)=8,\quad V(4)=8,\quad V(5)=6;\qquad t=\frac43\text{ min}\ \text{or}\ t=5\text{ min}\quad\text{when }V=6.$$

6升对应进水段的 2+3t=6，以及排水段的 8−2(t−4)=6；两个时刻都在各自区间。定义域 [0,7]，值域 [2,8]，没有超过10升容量。若只找到一个时刻，逐段检验6升这条水平线；若画出跳跃，检查是否把前段累计水量遗失，回看[根据区间使用规则](#context-graphs)。

</details>

</div>



<div class="lesson-check" markdown="1">

### 重试变化关系 {#retry-variation}

**Question:** y varies inversely as x², x>0, and y=8 when x=2. Find its formula and y at x=4. Also find the direct-variation formula when z is proportional to x and z=15 at x=3.

<details markdown="1">

<summary>提示</summary>

第一题 yx² 固定，第二题 z/x 固定。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y=\frac{k}{x^2},\ k=8(2^2)=32,\quad y(4)=2;\qquad z=kx,\ k=15/3=5,\quad z=5x.$$

</details>

</div>

## 下一步与稍后回顾 {#next-step}

学[数列](/zh/igcse/mathematics/sequences/#start)后，回做值域与复合任务。接着学[微分与运动](/zh/igcse/mathematics/differentiation-and-motion/#start)，把曲线与当地斜率连接起来。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A9、A12、A17 及 A18；大纲 PDF 15–16（印刷 16–17）。A18 与 Number 交叉。全课角均为度。

实际读过 1C QP PDF 13 Q15 与 [MS PDF 8](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8)；1E QP PDF 2 Q3 与 [MS PDF 4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4)；2E QP PDF 11 Q12–13、19 Q22、20 Q23 与 [MS PDF 7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7)、13。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
