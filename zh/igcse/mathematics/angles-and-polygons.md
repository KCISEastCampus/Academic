---
layout: subjects
title: "角与多边形"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/angles-and-polygons/
permalink: /zh/igcse/mathematics/angles-and-polygons/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 图能告诉我们什么？ {#start}

门打开时转过一个角，长方形窗有角和相互平行的边。几何把这些特征说清楚，使我们即使面对不按比例的草图，也能解释哪些结论一定成立。本页要练习标图、选角理、描述形状与对称。

需要会加减和简单除法，准备纸、直尺和量角器。以下均为**自拟题，不设官方分值**。

## 先把对象说清楚 {#notation}

![三角形 ABC，a 对 A、b 对 B、c 对 C；另有平行直线 p、q 及垂线 r，带直角符号。](/assets/img/igcse-geometry-reasoning-notation.svg)

**点 point** 表示位置，如 A。**直线 line** 向两端无限延伸；**线段 line segment** AB 则有端点 A、B。**顶点 vertex** 是拐角，复数为 vertices。**平面 plane** 是向各方向延伸的平坦面。立方体的一个面位于某个平面内，两个面相接形成**棱 edge**，棱相交于顶点。棱是线段，平面不是棱。

$\angle ABC$ 的顶点为中间的 **B**，两边为 BA、BC。在三角形 ABC 中，边 $a=BC$ 对着 A；$b=CA$ 对着 B；$c=AB$ 对着 C。相同短划线表示等边，相同箭头表示平行，不能只凭外观判断。

平行线 $p\parallel q$ 在同一平面内保持距离、不相交。垂直线 $r\perp p$ 以 $90^\circ$ 直角相交，小方框是直角标记。**多边形 polygon** 是由直线段围成的平面闭合图形。**正多边形 regular polygon** 的各边和各内角都相等；只有边相等还不够。

<div class="lesson-check" markdown="1">

### 标出有意义的条件 {#practice-notation}

**Question:** Draw triangle PQR. Mark PQ = PR, label angle PQR, and label side p opposite P. Separately draw two parallel lines l and m and a line n perpendicular to l. Add conventional marks. On a sketch of a cube, point out one vertex, one edge and one face lying in a plane.

<details markdown="1">
<summary>提示</summary>

角看中间字母；小写边名放在同字母大写顶点对面。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

PQR 的角在 Q；$p=QR$。PQ、PR 标相同短划线，l、m 标相同箭头，n 与 l 之间标直角方框。立方体上分别指出拐角、两个面相接的线段和平坦的面。若把 p 放在 PQ，回看[对边命名](#notation)。

</details>

</div>

## 转动与直线 {#angle-facts}

一整周是 $360^\circ$，平角是 $180^\circ$，直角是 $90^\circ$。一点周围的角加起来为 $360^\circ$；一条直线上相邻的角加起来为 $180^\circ$。两直线相交时，**对顶角相等 vertically opposite angles**，因为它们都与同一个邻角互补。

锐角在 $0^\circ$ 与 $90^\circ$ 之间，钝角在 $90^\circ$ 与 $180^\circ$ 之间，优角在 $180^\circ$ 与 $360^\circ$ 之间。要看清组成角的两条射线，不是一律选较小角。

## 截线遇到平行线 {#parallel}

![平行线 p、q 被一条截线穿过；上交点从左上顺时针标1、2、3、4，下交点对应位置标5、6、7、8。](/assets/img/igcse-geometry-reasoning-parallel.svg)

穿过两条线的直线称为**截线 transversal**。**同位角 corresponding angles** 在两个交点占相同相对位置，所以 $\angle1=\angle5$。**内错角 alternate interior angles** 位于平行线之间、截线两侧，所以 $\angle3=\angle5$、$\angle4=\angle6$。**同旁内角 co-interior angles** 位于两线之间、截线同侧，所以 $\angle3+\angle6=180^\circ$。

这些角关系需要两线平行。任意两线被截时，仍能辨认位置，却不保证角相等。答题要写“平行线的同位角相等”等准确理由，不用字母形状的俗称代替。

## 三角形可以按边，也可以按角分类 {#triangles}

三角形内角和为 $180^\circ$。理由是：过一个顶点画底边的平行线，借内错角把另外两个角移到顶点旁边，三个角恰好拼成平角。四边形沿一条对角线分成两个三角形，所以内角和为 $360^\circ$。

**等腰 isosceles** 三角形至少有两边相等，它们对面的底角相等。**等边 equilateral** 三角形三边相等，各角为 $60^\circ$。**不等边 scalene** 三角形三边互不相等。**直角 right-angled、锐角 acute-angled、钝角 obtuse-angled** 三角形分别有一个直角、三个锐角、一个钝角。两种分类可以同时使用，例如直角三角形也可以是等腰三角形。

<div class="worked-example" markdown="1">

### 把理由完整连起来 {#example-chain}

**Question:** Triangle ABC has AB = AC and angle BAC = 44°. Through C, draw CD parallel to BA, with ray CD in the direction from B to A. Find angle ABC and the obtuse angle BCD.

AB = AC 说明 B、C 处底角相等，不是 A 处的角与底角相等。扣除顶角后还有 $180^\circ-44^\circ=136^\circ$，所以：

$$\angle ABC=\angle BCA=136^\circ/2=68^\circ.$$

射线 CB 与底边方向 BC 相反。BA 平行于 CD，B、C 处的同旁内角和为平角：

$$\angle BCD=180^\circ-68^\circ=112^\circ.$$

检查：$44^\circ+68^\circ+68^\circ=180^\circ$，且所求确实是钝角。草图帮助辨认角，但真正的依据是等边和平行条件。

</div>

## 边数为什么会决定角和？ {#polygons}

凸 n 边形从一个顶点向其他不相邻顶点连对角线，会分成 $n-2$ 个不重叠三角形。因此内角和为 $(n-2)180^\circ$。沿凸多边形边界走一周，每个顶点向同一方向转一次，合起来转过一整周，所以外角和为 $360^\circ$。这里每个外角都与对应内角互补。

正 n 边形各外角相等，每个为 $360^\circ/n$；内角为 $180^\circ-360^\circ/n$。圆心连向各顶点，也把整周分为 n 个相等中心角，各为 $360^\circ/n$。非正凸多边形仍有这些角和，但除以 n 只给平均值，不是每一个角。

<div class="worked-example" markdown="1">

### 由角反推图形 {#example-polygon}

**Question:** A regular polygon has an interior angle of 150°. Find its number of sides and its angle at the centre.

外角能直接连到整周，所以先求外角：

$$180^\circ-150^\circ=30^\circ,\qquad n=360^\circ/30^\circ=12.$$

中心角为 $360^\circ/12=30^\circ$。用内角和检查：$(12-2)180^\circ=1800^\circ$，同时 $12\times150^\circ=1800^\circ$。边数是至少为三的整数，因此这样的正多边形存在。

</div>

## 凭性质，而不是凭外观 {#quadrilaterals}

**平行四边形 parallelogram** 有两组对边平行，对边相等、对角相等、邻角互补，对角线互相平分。**矩形 rectangle** 是四个角都为直角的平行四边形，对角线还相等。**菱形 rhombus** 是四边相等的平行四边形，对角线互相垂直，并平分相应顶角。**正方形 square** 同时是矩形和菱形，因此具有两者的性质。

**梯形 trapezium** 有一组对边平行；常见学校分类把它限定为恰好一组。边界情况要说明采用的定义。等腰梯形的两腰相等，每条底边两端的底角相等。**风筝形 kite** 有两组邻边分别相等；普通两组长度不同的凸风筝形中，一条对角线垂直平分另一条，并有一组对角相等。不能假设每个风筝形的两条对角线都互相平分。

<div class="worked-example" markdown="1">

### 先分清整条与半条 {#example-diagonals}

**Question:** The diagonals of rectangle ABCD meet at O and AC = 14 cm. Find BO with a reason.

先认图形：矩形也是平行四边形，所以对角线互相平分；矩形还保证两条对角线相等。因此 $BD=AC=14\text{ cm}$，再取一半，$BO=BD/2=7\text{ cm}$。画出两条对角线，在 AO、OC 及 BO、OD 上分别标相等记号。互相平分是各分成两半，不是四段必定相等；这里四段相等还用到了矩形的等对角线条件。也不能因此加上垂直记号，非正方形矩形的对角线并不垂直。

</div>

## 折一折，再转一转 {#symmetry}

一条**反射对称轴 reflection symmetry** 能把整个图形对折重合。**旋转对称阶数 order k** 表示转一周有 k 次重合，包括回到原位的 $360^\circ$；最小正重合转角为 $360^\circ/k$。

非正方形矩形有两条对称轴（过对边中点），旋转阶数为2，对角线不是它的对称轴。非正方形菱形以两条对角线为对称轴，旋转阶数为2。正方形有四条轴、阶数4。一般平行四边形没有反射轴、阶数2；一般风筝形有一条轴、阶数1。一般梯形没有轴、阶数1，等腰梯形有一条轴。正 n 边形有 n 条轴，旋转阶数 n。圆有无数条对称轴，绕圆心转任意角都重合。

## 画图、判断、说明理由 {#practice}

<div class="lesson-check" markdown="1">

### 使用编号图 {#practice-angles}

**Question:** In the parallel-line diagram, angle 2 is 63°. Find angles 4, 6, 3, 5 and 8, giving a reason for each. Separately, three angles around a point are 90°, 145° and x. Find x.

<details markdown="1">
<summary>提示</summary>

先在一个交点用角理，再移到另一个交点。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle4=63^\circ$（对顶角），$\angle6=63^\circ$（p 平行 q，同位角），$\angle3=117^\circ$（与2组成平角），$\angle5=117^\circ$（与3为内错角），$\angle8=63^\circ$（与6为对顶角）。另题 $x=360^\circ-90^\circ-145^\circ=125^\circ$。若把所有角都写成63°，回看[平角](#angle-facts)与[平行位置](#parallel)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 保留两种可能 {#practice-triangles}

**Question:** An isosceles triangle has an angle of 40°. Draw and label all possible angle triples. Classify each by angles. Also draw one right-angled isosceles triangle and one obtuse scalene triangle, labelling valid angles.

<details markdown="1">
<summary>提示</summary>

已知角可能是顶角，也可能是一个底角。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

两组为 $(40^\circ,70^\circ,70^\circ)$（锐角）与 $(40^\circ,40^\circ,100^\circ)$（钝角）。等腰直角例子为 $(90^\circ,45^\circ,45^\circ)$；钝角不等边例子为 $(110^\circ,40^\circ,30^\circ)$。每组和为 $180^\circ$；不等边例子没有相等角，因此没有相等边。若只列出一种等腰情况，回看[按边与按角分类](#triangles)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 辨认不可能的说法 {#practice-polygons}

**Question:** A regular polygon has exterior angle 24°. Find its number of sides, interior angle, centre angle and interior angle sum. A second student claims a regular polygon has exterior angle 50°. Decide whether that is possible.

<details markdown="1">
<summary>提示</summary>

整周必须容纳整数个相同外角。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$n=360^\circ/24^\circ=15$；内角 $156^\circ$；中心角 $24^\circ$；内角和 $(15-2)180^\circ=2340^\circ$。第二种不可能，因为 $360/50=7.2$ 不是整数。把边数四舍五入会改变角，若取成7边，回看[整周转角](#polygons)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 画反例与对称 {#practice-shapes}

**Question:** Draw a non-square rectangle, a non-square rhombus, a square, a generic parallelogram, a generic kite and a trapezium with no reflection symmetry. Mark defining equal/parallel sides. Draw every reflection axis and state each rotational order. Is every rhombus a square? Give a counterexample.

<details markdown="1">
<summary>提示</summary>

检验整条轮廓能否对折重合，不只看一对等边。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

按题目顺序，反射轴数量为2、2、4、0、1、0；旋转阶数为2、2、4、2、1、1。可画角为60°、120°、60°、120°的菱形：边虽全等，却没有直角，所以不是正方形。一般风筝形的轴连接两组等边分别相交的顶点。若把矩形对角线当成对称轴，回看[图形条件](#quadrilaterals)与[折叠转动](#symmetry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 使用四边形的条件 {#practice-quadrilaterals}

**Question:** ABCD is a parallelogram in that order, and angle A = 68°. Find the other three angles. A convex kite PQRS has PQ = PS and RQ = RS, with angles P = 84° and R = 116°. Find angles Q and S, justifying which are equal.

<details markdown="1">
<summary>提示</summary>

平行四边形用平行边角理；风筝形先认出哪两个对角相等。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

平行四边形中 $\angle B=\angle D=180^\circ-68^\circ=112^\circ$（邻角／同旁内角互补），$\angle C=68^\circ$（对角相等）。风筝形中 Q、S 才是对应相等的那组对角，所以 $\angle Q=\angle S=(360^\circ-84^\circ-116^\circ)/2=80^\circ$。两幅图均可用四边形内角和检查。若让 P = R，回看[风筝形哪对角相等](#quadrilaterals)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 让对角线提供证据 {#practice-diagonals}

**Question:** On four separate sketches draw and label the following. (i) ABCD is a parallelogram; its diagonals meet at O, with AO = 6 cm and BO = 4 cm. Find AC and BD. Must AC equal BD? (ii) PQRS is a rectangle; its diagonals meet at O and PR = 18 cm. Find QO. Must the diagonals be perpendicular? (iii) KLMN is a rhombus; its diagonals meet at X and angle LKN = 76°. Find angles LKM and KXN. (iv) EFGH is a convex kite with EF = EH and GF = GH; EG and FH meet at J, with EJ = 7 cm, JG = 3 cm and FJ = 4 cm. Find JH and angle EJF. Does FH bisect EG? Mark each conclusion and justify it.

<details markdown="1">
<summary>提示</summary>

每幅图先确定图形保证的性质，再分清整条与半条。菱形中找经过 K 的对角线，风筝形中找连接两对等边顶点的 EG。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

(i) 对角线互相平分，所以 $AC=2(6)=12\text{ cm}$，$BD=2(4)=8\text{ cm}$。本例两条长度已经不同；在图上标 AO = OC、BO = OD，别把四段都标一样。(ii) 矩形给出 $QS=PR=18\text{ cm}$，互相平分再得 $QO=9\text{ cm}$。不保证垂直，例如长4、宽3的矩形。(iii) KM 平分顶角 K，所以 $\angle LKM=76^\circ/2=38^\circ$；菱形对角线垂直，$\angle KXN=90^\circ$。标出两个38°和交点直角。(iv) EG 垂直平分 FH，所以 $JH=FJ=4\text{ cm}$，$\angle EJF=90^\circ$。但 EJ = 7、JG = 3，并不相等，因此 FH 没有平分 EG。画出 J 在 EG 上偏向 G 的位置，保留 FH 两半相等。若把互相平分、相等、垂直当成同一件事，回看[整条与半条的示范](#example-diagonals)，再做[新对角线任务](#retry-diagonals)。

</details>

</div>

## 修好理由，再试一次 {#retry}

<div class="lesson-check" markdown="1">

### 换一组字母 {#retry-notation}

**Question:** Draw triangle XYZ with XY perpendicular to YZ. Mark the right angle, label angle YXZ and side z opposite Z. Explain whether the triangle is necessarily regular.

<details markdown="1">
<summary>提示</summary>

直角只确定一个角，不保证边全相等。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

直角方框在 Y，YXZ 在 X，$z=XY$。它不是正三角形：正三角形三个角为 $60^\circ$，不能有直角。角顶点或对边放错时回到 [先把对象说清楚](#notation)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 去掉一个条件 {#retry-angles}

**Question:** Two lines cross with one angle 128°. Find the other three angles. Can you transfer those values to a second intersection on an unmarked line? Explain. Then find the base angles of an isosceles triangle whose vertex angle is 128°. At a separate point, angles 110°, 135° and y make a full turn; find y.

<details markdown="1">
<summary>提示</summary>

区分单交点角理与需要平行条件的角理。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

对顶角为 $128^\circ$，两个邻角各为 $52^\circ$。没有平行条件，不能保证另一交点的同位角相等。等腰三角形底角各为 $(180^\circ-128^\circ)/2=26^\circ$。另题一点周围角和为360°，所以 $y=360^\circ-110^\circ-135^\circ=115^\circ$。若无平行就搬角，回到 [截线遇到平行线](#parallel)；若剩余角和没平分，回到 [三角形可以按边，也可以按角分类](#triangles)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 由总和出发 {#retry-polygons}

**Question:** A convex polygon has interior angle sum 1260°. Find n. If it is regular, find each interior, exterior and centre angle.

<details markdown="1">
<summary>提示</summary>

先还原三角形数量，再求边数。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$n-2=1260/180=7$，所以 $n=9$。各内角为 $1260^\circ/9=140^\circ$，各外角与中心角都是 $40^\circ$。若把边数写成7，回看[分三角形](#polygons)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 由对称反推 {#retry-shapes}

**Question:** Draw a quadrilateral with exactly one reflection axis and rotational order 1, and another with no reflection axis and rotational order 2. Explain why a square cannot answer either request.

<details markdown="1">
<summary>提示</summary>

用一般形状，避免选到额外对称的特殊情况。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

第一个可用普通风筝形或非矩形的等腰梯形；第二个可用邻边不等、斜放的一般平行四边形。画出第一幅的轴，验证第二幅转半周重合。正方形有四条轴、阶数4。若把起始位置又多算一次，回到 [折一折，再转一转](#symmetry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 改变已知角位置 {#retry-quadrilaterals}

**Question:** A rhombus ABCD has angle B = 124°. Find A, C and D. An isosceles trapezium PQRS has PQ parallel SR, equal legs PS and QR, and angle P = 72°. Find Q, R and S.

<details markdown="1">
<summary>提示</summary>

菱形继承哪些平行四边形性质？梯形哪两个角在同一底边上？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

菱形中 $\angle A=\angle C=56^\circ$，$\angle D=124^\circ$，理由是对角相等、邻角互补。梯形中 $\angle Q=72^\circ$（同底边两端角相等），$\angle R=\angle S=108^\circ$（两底平行，同旁内角互补）。若把菱形每角都当成90°，回看[四边形性质](#quadrilaterals)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换一个已知角再分类 {#retry-triangles}

**Question:** An isosceles triangle has an angle of 64°. Draw every possible angle triple and classify each triangle by angles. Draw a separate scalene acute triangle and a right-angled isosceles triangle, labelling their angles.

<details markdown="1">
<summary>提示</summary>

把64°分别放在顶角与底角试一次。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

64°为顶角时，另两角各为 $(180^\circ-64^\circ)/2=58^\circ$；为底角时，第三角为 $180^\circ-2(64^\circ)=52^\circ$。两者都是锐角三角形。不等边锐角例子为 $(50^\circ,60^\circ,70^\circ)$；等腰直角例子为 $(90^\circ,45^\circ,45^\circ)$。检查每组内角和与等角位置；若把直角三角形叫作锐角，回看[三角形分类](#triangles)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 改变已知量，再检验结论 {#retry-diagonals}

**Question:** Draw new labelled sketches. (i) The diagonals of parallelogram ABCD meet at O, with AO = (2x - 1) cm, OC = (x + 4) cm and BO = 6 cm. Find x, AC and BD. (ii) In rectangle PQRS, the diagonals meet at O and QO = 8 cm. Find PR. A student says equal diagonals make this rectangle a square. Explain whether the conclusion follows, using a non-square example. (iii) In rhombus KLMN, diagonal KM makes angle LKM = 31°. Find angle LKN and the angle between the diagonals. (iv) In convex kite EFGH with EF = EH and GF = GH, EG and FH meet at J, EJ = 6 cm, JG = 2 cm and FJ = 3 cm. Find FH and EG, and decide which diagonal bisects the other. Give reasons rather than trusting the sketches.

<details markdown="1">
<summary>提示</summary>

先用相等半对角线列方程；再分别判断矩形、菱形和风筝形能保证什么，不要把图上看起来的样子当条件。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

(i) $2x-1=x+4$，所以 $x=5$；两半各9 cm，$AC=18\text{ cm}$，而 $BD=12\text{ cm}$。图上分别标9、9和6、6。(ii) $PR=QS=2(8)=16\text{ cm}$。不一定为正方形：长9.6 cm、宽12.8 cm的矩形相邻边不等，而两条对角线均长16 cm。(iii) KM 平分角 K，所以 $\angle LKN=2(31^\circ)=62^\circ$，两条对角线夹角为 $90^\circ$。(iv) EG 垂直平分 FH，所以 $FH=2(3)=6\text{ cm}$；$EG=6+2=8\text{ cm}$。EJ 不等于 JG，故 FH 不平分 EG，不能反过来画两个相等记号。若仍混淆性质，回到[四边形条件](#quadrilaterals)，用自己的图检查每个记号是否有理由。

</details>

</div>

## 换图时仍然保留理由 {#next-step}

接着学[全等与相似](/zh/igcse/mathematics/congruence-and-similarity/#start)。学完[数据回顾](/zh/igcse/mathematics/mixed-review/#data-review)后，不重看例题，返回 [去掉一个条件](#retry-angles)，再做[几何混合题](/zh/igcse/mathematics/mixed-review/#geometry-review)。记录漏掉的是哪个条件或理由，不只记错的数字。

## 范围与参考 {#sources}

<details markdown="1">
<summary>OxfordAQA 来源与题目身份</summary>

9260 v5.1 G1–G6：[大纲 PDF 第18页（印刷19页）](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=18)。设计前阅读 Specimen 2018 1C Q10：[QP 第10页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=10)、[MS PDF 第6页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=6)；2C Q20：[QP 第19页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=19)、[MS PDF 第8页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8)。本页均为自拟教学任务，不是官方题或官方评分点。完整角理链对应展示推理的要求。示意图用条件推理，不能通过测量草图代替精确解答。

</details>
