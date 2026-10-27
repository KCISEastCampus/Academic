---
layout: subjects
title: "勾股定理与三角比"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/pythagoras-and-trigonometry/
permalink: /zh/igcse/mathematics/pythagoras-and-trigonometry/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 要找的量，在哪一个三角形里？ {#start}

梯子长不等于竖直高度，屋顶斜线也不等于水平投影。这一课先辨认长度和角，再选计算方法。

先要会平方、平方根、简单方程和[角的关系](/zh/igcse/mathematics/angles-and-polygons/#start)。先从二维直角三角形开始，再在立体中找三角形，最后为非直角三角形选择规则。数值三角计算用角度制，不代表任何特定机型已获考场许可。

全部示范和任务为自拟题，无官方分值；示意图不能拿尺子直接量答案。
{:.lesson-meta}

## 两条直角边和一条斜边 {#right-triangles}

直角三角形中，**斜边（hypotenuse）**在直角对面，是最长边，不随图转动而改变。设斜边长 c，另两边长 a、b，勾股定理为：

$$a^2+b^2=c^2.$$

这里比较的是**以三边为边长的正方形面积**，不是边长直接相加。求直角边时，从 $c^2$ 减另一边的平方，再取正平方根，因为长度为正。必须先确认有直角。

![直角三角形ABC，AB水平长8、BC竖直长6、AC长10；B处为直角，A处标角theta。](/assets/img/igcse-geometry-calculation-triangle.svg)

图中 $8^2+6^2=64+36=100=10^2$，平方关系成立，不是 $8+6=10$。

<div class="worked-example" markdown="1">

### 完整示范：梯子靠墙 {#example-right}

**Question:** A 5 m ladder rests against a vertical wall on horizontal ground. Its foot is 3 m from the wall. Find the height reached.

墙和地面垂直，梯子在直角对面，是斜边。已知一条直角边和斜边，不能把两者平方相加：

$$h^2+3^2=5^2,\qquad h^2=25-9=16,\qquad h=4\text{ m}.$$

检查：$3^2+4^2=5^2$，竖直高度小于梯长。若取 $\sqrt{25+9}$，就会得到比斜边还长的直角边。

</div>

## 用边长比连接角度 {#ratios}

先认准所看的锐角 $\theta$。**对边（opposite）**在它对面；**邻边（adjacent）**接触它、但不是斜边。换看另一个锐角，对边和邻边的身份会交换。

锐角相同的相似直角三角形，对应边长比不变。这三个比称为正弦、余弦、正切：

$$
\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},
\quad \cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},
\quad \tan\theta=\frac{\text{opposite}}{\text{adjacent}}.
$$

图中 $\sin\theta=6/10$、$\cos\theta=8/10$、$\tan\theta=6/8$。选同时包含“已知边”和“所求边”的比，不必先把第三边算出来。

反过来求角用反三角函数，例如 $\theta=\tan^{-1}(6/8)\approx36.9^\circ$。这里 $\tan^{-1}$ 意思是“哪个角的正切为这个数”，不是 $1/\tan$。中间保留完整数值，最后再舍入。

<div class="worked-example" markdown="1">

### 完整示范：只选真正需要的两条边 {#example-ratios}

**Question:** A right triangle has hypotenuse 12 cm and angle 35°. Find the side opposite 35°, then the side adjacent to 35°.

第一问用对边、斜边，选正弦；第二问用邻边、斜边，选余弦：

$$
\sin35^\circ=\frac{x}{12},\quad x=12\sin35^\circ\approx6.88\text{ cm}.
$$

$$
\cos35^\circ=\frac{y}{12},\quad y=12\cos35^\circ\approx9.83\text{ cm}.
$$

两边都短于12。用未舍入值检查有 $x^2+y^2=144$，也能帮助发现计算器模式错了。

</div>

## 自己选择方法 {#practice}

<div class="lesson-check" markdown="1">

### 换一个所求量 {#check-right}

**Question:** A 13 m cable joins the top of a 12 m vertical pole to a point on horizontal ground. Draw a labelled triangle and find how far the ground point is from the foot of the pole.

<details markdown="1">
<summary>提示</summary>

直角在哪？它对面是哪一边？

</details>

<details markdown="1">
<summary>解答与检查</summary>

设水平距离为 d。电缆为斜边：$d^2+12^2=13^2$，得 $d^2=25$、$d=5\text{ m}$。图须把13标在斜电缆上，标清地面与杆的直角。平方相加是在求另一个量。

</details>

</div>

<div class="lesson-check" markdown="1">

### 既求边，也求角 {#check-ratios}

**Question:** A right triangle has hypotenuse 15 cm and acute angle 32°. Find its opposite and adjacent sides to 3 significant figures. In another right triangle, the opposite side to angle t is 5 cm and the adjacent side is 12 cm. Find t to 1 decimal place. Explain both ratio choices.

<details markdown="1">
<summary>提示</summary>

写函数前先说清所用两边。

</details>

<details markdown="1">
<summary>解答与检查</summary>

对边 $=15\sin32^\circ=7.95\text{ cm}$，邻边 $=15\cos32^\circ=12.7\text{ cm}$。另一三角形中 $\tan t=5/12$，所以 $t=\tan^{-1}(5/12)=22.6^\circ$。用正切是因为不涉及斜边。对邻边交换，会得到余角而不是 t。

</details>

</div>

## 先在立体里找平面三角形 {#space}

一条线与一个平面的夹角，是这条线与它在该平面上的**垂直投影**之间的角，不是随便选一条棱来夹。

<div class="worked-example" markdown="1">

### 完整示范：穿过盒子的对角线 {#example-space}

**Question:** A cuboid has horizontal base edges 6 cm and 8 cm and vertical height 12 cm. Find the space diagonal from one bottom corner to the opposite top corner and its angle to the base plane.

先画盒子。起始底角叫 A，对面的底角叫 B，B 正上方顶角叫 T。底面对角线 AB 就是 AT 的投影。要用两个三角形：

$$AB^2=6^2+8^2=100,\qquad AB=10.$$

BT 垂直底面，因此 ABT 在 B 处为直角：

$$AT^2=10^2+12^2=244,\qquad AT=\sqrt{244}\approx15.6\text{ cm}.$$

所求夹角为 TAB：

$$\tan\theta=\frac{12}{10},\qquad \theta\approx50.2^\circ.$$

分母若用6或8，算的是另一个三角形的角。空间对角线应比底面对角线和竖直高度都长，可作检查。

</div>

<div class="lesson-check" markdown="1">

### 找准投影 {#check-space}

**Question:** A right square-based pyramid has base side 10 m. Its apex E is 12 m vertically above the centre X. B is a base vertex. Draw the two triangles needed to find EB and the angle EB makes with the base plane. Give answers to 3 significant figures.

<details markdown="1">
<summary>提示</summary>

连接 X、B，X 是中心不是顶角；再用竖直 EX。

</details>

<details markdown="1">
<summary>解答与检查</summary>

底面中 XB 的两个垂直分量为5和5，所以 $XB=\sqrt{50}$。EXB 在 X 处为直角，故 $EB=\sqrt{12^2+50}=\sqrt{194}=13.9\text{ m}$。所求为 EBX，$\tan\angle EBX=12/\sqrt{50}$，得 $59.5^\circ$。图中须在底面标出半边长，并标 EX 垂直 XB。

</details>

</div>

## 没有直角怎么办？ {#any-triangle}

不要把整个非直角三角形当作直角三角形套比。先配对：边 a 在角 A 对面，b 在 B 对面，c 在 C 对面。

**正弦定理（sine rule）**把一组对边、对角与另一组相连：

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}.$$

例如 $A=40^\circ$、$a=8$、$B=65^\circ$，已知配对为 $(8,40^\circ)$：

$$b=\frac{8\sin65^\circ}{\sin40^\circ}\approx11.3.$$

B 比 A 大，b 应比 a 长。反过来用正弦求角，要检查补角：$\sin B=\sin(180^\circ-B)$。若 $A=30^\circ,a=5,b=8$，可能 $B=53.1^\circ$ **或** $126.9^\circ$，两者都留下正的第三角。示意图不足以决定选哪个，必须用题给条件判断。

**余弦定理（cosine rule）**适合已知两边及夹角（SAS），或三边全已知（SSS）：

$$a^2=b^2+c^2-2bc\cos A.$$

三边求角时，先变形，再取反余弦：

$$\cos A=\frac{b^2+c^2-a^2}{2bc}.$$

<div class="worked-example" markdown="1">

### 完整示范：给出的角夹在两边之间 {#example-any}

**Question:** Two sides of a triangle are 5 cm and 7 cm and their included angle is 60°. Find the third side.

没有已知对边、对角配对，所以用余弦定理，60° 对面是未知边 c：

$$c^2=5^2+7^2-2(5)(7)\cos60^\circ=25+49-35=39.$$

$$c=\sqrt{39}\approx6.24\text{ cm}.$$

用三角形两边差、两边和检查：$7-5<c<7+5$。再看三边求角：若三边7、8、9，A 在9对面，则：

$$\cos A=\frac{7^2+8^2-9^2}{2(7)(8)}=\frac27,\qquad A\approx73.4^\circ.$$

夹角为90°时，余弦为零，余弦定理就成为勾股定理。

</div>

<div class="lesson-check" markdown="1">

### 三种已知条件 {#check-any}

**Question:** Choose a method for each triangle, explain the choice and calculate to 3 significant figures. (a) Two sides 6 cm and 9 cm include 60°: find the third side. (b) Sides are 9 cm, 10 cm and 14 cm: find the angle opposite 14 cm. (c) $A=35^\circ,a=7\text{ cm},B=75^\circ$: find b and C.

<details markdown="1">
<summary>提示</summary>

标对边配对，不能从自己画的图猜直角。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) SAS：$c^2=6^2+9^2-2(6)(9)\cos60^\circ=63$，得 $c=7.94\text{ cm}$。(b) SSS：$\cos C=(9^2+10^2-14^2)/(2(9)(10))=-1/12$，得 $C=94.8^\circ$，负余弦与钝角一致。(c) 已知一组对边对角，用 $b=7\sin75^\circ/\sin35^\circ=11.8\text{ cm}$；$C=180^\circ-35^\circ-75^\circ=70^\circ$。中间不要过早舍入。

</details>

</div>

## 不知道垂高也能求面积 {#area}

三角形面积仍为 $\frac12\times\text{base}\times\text{perpendicular height}$。边 a、b 夹角为 C 时，以 a 为底的垂高为 $b\sin C$；C 为钝角也成立，此时垂线落在底边延长线上。因此：

$$\text{Area}=\tfrac12 ab\sin C.$$

C 必须是所用两边的**夹角**。上面的5 cm、7 cm、60°三角形，面积 $=\frac12(5)(7)\sin60^\circ\approx15.2\text{ cm}^2$。反求边时，用面积除以另一边与夹角正弦乘积的一半；反求角时，先求正弦，再看题目限定锐角还是钝角。

<div class="lesson-check" markdown="1">

### 把面积题倒过来 {#check-area}

**Question:** (a) Sides 10 cm and 8 cm include 120°: find the area to 3 significant figures. (b) Sides 10 cm and 8 cm enclose area 20 cm²: find both possible included angles. (c) Area is 12 cm², one side is 6 cm and its included angle with side b is 30°: find b.

<details markdown="1">
<summary>提示</summary>

公式中的角夹在两边之间，同一个正弦值可能对应两个角。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) 面积 $=\frac12(10)(8)\sin120^\circ=34.6\text{ cm}^2$。(b) $\sin C=20/40=1/2$，得 $30^\circ$ 和 $150^\circ$，都能形成三角形。(c) $12=\frac12(6)b\sin30^\circ=1.5b$，得 $b=8\text{ cm}$。面积用平方单位，反求出的边用长度单位。

</details>

</div>

## 修正三角形或选法后重试 {#retry}

最长边认错，回看[勾股](#right-triangles)；对邻边颠倒，回看[三角比](#ratios)；立体夹角认错，回看[投影](#space)；非直角图套直角比，回看[配对与余弦定理](#any-triangle)；夹角或单位错，回看[面积](#area)。先关闭旧解答。

<div class="lesson-check" markdown="1">

### 重试直角边关系 {#retry-right}

**Question:** A rectangular screen is 24 cm wide and 10 cm high. Find its diagonal and explain why the positive root is used.

<details markdown="1">
<summary>提示</summary>

长方形提供了直角。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$d^2=24^2+10^2=676$，所以 $d=26\text{ cm}$。长度为正，-26 虽是平方方程的代数解，但不是对角线长度。

</details>

</div>

<div class="lesson-check" markdown="1">

### 这次反求斜边 {#retry-ratios}

**Question:** A right triangle has opposite side 6 cm to an angle of 35°. Find the hypotenuse to 3 significant figures. Another has hypotenuse 13 cm and opposite side 12 cm: find the acute angle to 1 decimal place.

<details markdown="1">
<summary>提示</summary>

先列比，再移项。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\sin35^\circ=6/h$，所以 $h=6/\sin35^\circ=10.5\text{ cm}$。第二个角 $\theta=\sin^{-1}(12/13)=67.4^\circ$。若把6乘正弦，会使斜边比直角边更短。

</details>

</div>

<div class="lesson-check" markdown="1">

### 反求立体高度 {#retry-space}

**Question:** A cuboid has a horizontal 3 cm by 4 cm base and space diagonal 13 cm. Find its height and the diagonal's angle to the base plane.

<details markdown="1">
<summary>提示</summary>

先求投影。

</details>

<details markdown="1">
<summary>解答与检查</summary>

底面对角线 $=\sqrt{3^2+4^2}=5\text{ cm}$，高 $=\sqrt{13^2-5^2}=12\text{ cm}$。$\tan\theta=12/5$，角为 $67.4^\circ$（1位小数）。用5 cm投影，不用某条底棱。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试非直角三角 {#retry-any}

**Question:** (a) Sides 4 cm and 6 cm include 120°: find the third side to 3 significant figures. (b) $A=30^\circ,a=6\text{ cm},b=6\text{ cm}$: find B and C, rejecting any impossible angle.

<details markdown="1">
<summary>提示</summary>

(a)看 SAS，(b)看对边对角配对，检查角和。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) $c^2=4^2+6^2-2(4)(6)\cos120^\circ=76$，得 $c=8.72\text{ cm}$。(b) $\sin B=6\sin30^\circ/6=1/2$。候选150°使 $C=0^\circ$，须舍去；得 $B=30^\circ,C=120^\circ$。补角候选不是每次都成立。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试面积条件 {#retry-area}

**Question:** Two sides are 6 cm and 8 cm and their triangle has area 12 cm². Find the obtuse included angle. If instead the included angle is 90°, find the area.

<details markdown="1">
<summary>提示</summary>

先求正弦，再用 obtuse（钝角）筛选。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\sin C=12/24=1/2$，钝角为 $150^\circ$，不是30°。90°时面积 $24\text{ cm}^2$，是这两条固定边所能围成的最大面积。

</details>

</div>

## 学过测量后再回来 {#next-step}

学习[面积体积](/zh/igcse/mathematics/units-area-and-volume/#solids-extension)后，遮住公式做下面题，再到[几何混合回顾](/zh/igcse/mathematics/mixed-review/#geometry-review)。

<div class="lesson-check" markdown="1">

### 不标方法的稍后题 {#later-check}

**Question:** A triangular panel has sides 7 cm and 10 cm meeting at 120°. Find the third side to 3 significant figures and the area to 3 significant figures. Explain why treating the two given sides as perpendicular would be wrong.

<details markdown="1">
<summary>提示</summary>

按题目真实给出的角处理。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$c^2=7^2+10^2-2(7)(10)\cos120^\circ=219$，得 $c=14.8\text{ cm}$。面积 $=\frac12(7)(10)\sin120^\circ=30.3\text{ cm}^2$。夹角是120°不是90°，不能删去余弦项，也不能把10当垂高。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>资格与实际阅读页</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1：[大纲 PDF 21、印刷22页，G19–20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=21)。G19包含二维与三维直角三角；G20包含正弦、余弦定理，三角形面积及反求。

实际读过：Specimen 2018 2C Q28，[QP PDF 25](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=25)/[MS PDF 11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11)，包括题图；2E Q11，QP PDF 10/MS PDF 7；线面角1E Q28，[QP PDF 27](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=27)/[MS PDF 14](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=14)；余弦定理钝角2E Q19，QP PDF 16/MS PDF 12。用于核对方法与作答证据；本页教学题全自拟，无官方分值。

</details>
