---
layout: subjects
title: "尺规、轨迹与方位角"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/constructions-loci-and-bearings/
permalink: /zh/igcse/mathematics/constructions-loci-and-bearings/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 让位置同时满足条件 {#start}

怎样让一条小路以最短距离到达河边？哪些点到两个门一样远？有用的图必须表达条件，不只是画得像。本页要真正使用直尺与圆规作图，画出所有可能位置，并测量一条按比例画出的路线。

先要会[平行、垂直与角的语言](/zh/igcse/mathematics/angles-and-polygons/#notation)及[比例因子](/zh/igcse/mathematics/congruence-and-similarity/#matching)。准备纸、直尺、圆规和量角器。所有任务与图均为**自拟，无官方分值**。

## 为什么要保留圆规交弧？ {#constructions}

直尺与量角器能量出近似中点或角。**尺规作图 construction** 则利用等半径圆弧建立相等关系，必须保留圆弧，让别人能检查方法。用直尺连接点，用圆规传递长度；最后测量是检查，不能代替构造。

**复制线段。** 把圆规张开到 AB 的长度，保持开口不变，以 P 为圆心在选定射线上截出 Q，则 PQ = AB。这是在不读刻度的情况下传递长度。

**垂直平分线。** 对线段 AB，选大于 AB 一半的半径。以 A、B 为圆心、同一半径，在 AB 两侧画弧，交于 X、Y，连接 XY。XY 上各点到 A、B 等距，XY 与 AB 在中点垂直相交。半径过小就没有两个交点。

![垂直平分线示范：A、B 的等半径弧交于 X、Y，连接 XY；这是讲解图，不是独立题答案。](/assets/img/igcse-geometry-reasoning-bisector.svg)

**过线上一点作垂线。** P 在线上，在 P 两侧各截取相同距离，得到 A、B。以 A、B 为圆心、相同半径作弧，在线外交于 X，连接 PX。P 是 AB 中点，所以 PX 是 AB 的垂直平分线。

**过线外一点作垂线。** P 在线外，以 P 为圆心画弧，与直线交于 A、B。再以 A、B 为圆心、等半径作弧，找到另一个线外点 X，且 X 不与 P 重合。连接 PX 并延长到直线。P、X 都到 A、B 等距，连线就是 AB 的垂直平分线，因此也是所求垂线。

**角平分线。** 对角 APB，以 P 为圆心作弧，与两边交于 C、D。再以 C、D 为圆心、相同开口，在角内交弧于 X，连接 PX。三角形 PCX、PDX 有 PC = PD、CX = DX 和公共 PX，由 SSS 全等，P 处两角相等。

**复制角。** 以原顶点为圆心作弧，与两边交于 C、D；保持半径，在新顶点 P 作弧，与新基线交于 E。用圆规传递弦长 CD，以 E 为圆心在新弧上截出 F，连接 PF。两条半径与弦构成全等三角形，因此角被复制。

**构造60°。** 画 AB，以 A、B 为圆心、AB 为半径画圆，交于 C，连接 AC、BC。三边都等于 AB，所以是等边三角形，各角60°。同样可以复制给定边长来构造三边确定的三角形，但两短边之和必须大于最长边。

<div class="worked-example" markdown="1">

### 完整作图：不用量角器构造30° {#example-construction}

**Question:** Construct an angle of 30° at A using a straightedge and compasses. Explain why the result has the required angle.

先按60°方法构造等边三角形 ABC。再平分 CAB：以 A 为圆心作圆，截 AC、AB 于 D、E；以 D、E 为圆心、同半径作弧，在角内交于 F，连接 AF。角平分线的 SSS 理由说明60°被分成相等两份，所以 FAB 为30°。保留等边三角形与角平分线的交弧；量角器读数约30°只能检查结果，不能代替构造。

</div>

## 轨迹是全部位置，不是随便一个点 {#loci}

**轨迹 locus** 是满足条件的全部点。到 A 的距离固定为 r：以 A 为圆心、r 为半径的圆周；在这个距离以内：圆盘，“至多”包括边界，“小于”不包括。到两个不同点 A、B 等距：整条 AB 垂直平分线。到 A 比到 B 近：垂直平分线 A 所在一侧的半平面。

到无限长直线距离为 d：两侧各一条平行线，距离按垂直测量。到两条相交的无限直线等距：**两条**角平分线；若指定在某个角内部，就取内部角平分线。对象若为有限线段，定距轨迹还可能含端点附近的圆弧，不能擅自改成无限直线。

“同时满足”表示两个集合的交集。某个条件可以包括边界，另一个不包括，要逐条读清楚。

<div class="worked-example" markdown="1">

### 完整的双条件轨迹 {#example-locus}

**Question:** Draw AB = 6 cm. Construct and mark all points P such that PA = PB and PA = 5 cm.

第一个条件要求 AB 的垂直平分线，不是线段 AB；用等半径交弧构造。第二个条件要求以 A 为圆心、5 cm 为半径的圆。圆与垂直平分线的两个交点就是全部答案。检查每点到 A、B 都为5 cm。中点离 A 为3 cm，5 cm 的圆能越过中点，因此 AB 两侧各有一点；若半径为3 cm只有一点，小于3 cm则没有。

</div>

## 最短距离要沿垂线量 {#shortest}

对线外点 P，作垂线 PH，垂足为 H。直线上任何其他点 Q 都与 P、H 构成直角三角形，PQ 是斜边，比 PH 长，因此 PH 最短。如果目标被限制为某条线段，而 H 落在线段外，H 就不允许选，最近位置可能变为线段端点。直线与线段是不同集合。

## 先按已知比例画，再测量 {#scale-measure}

比例尺 $1:25\,000$ 表示图上1单位对应实地同单位的25000。因此1 cm代表25000 cm = 250 m，3.6 cm的路线代表 $3.6\times250=900\text{ m}$。应用比例后再换单位，或者先写“1 cm代表多少实地距离”。

读直尺要把零刻度放在端点，不是把尺子的物理边缘当零。量角要把量角器中心放在顶点、零线对齐第一条射线，再选沿所需方向增长的刻度。屏幕图片缩放后不能可靠地按厘米测量；下面的题要按照给定尺寸在纸上重画。

## 从北开始，顺时针量 {#bearings}

八个方位为 N、NE、E、SE、S、SW、W、NW，相邻相隔 $45^\circ$。对应三位数方位角依次为 **000°、045°、090°、135°、180°、225°、270°、315°**。bearing 从**出发点的北线**顺时针量，由 $000^\circ$ 到小于 $360^\circ$，不足三位要补零。

“B from A” 从 A 出发，用 A 的北线量到 AB。在北线互相平行的局部平面地图上，反向路线转过 $180^\circ$：原角小于180时加180，否则减180。它不自动等于某个三角形内角。

![A 处北线及其右侧的路线 AB，B 处也有平行北线；图示方向，未标数值答案。](/assets/img/igcse-geometry-reasoning-bearing.svg)

<div class="worked-example" markdown="1">

### 完整的反向方位角检查 {#example-bearing}

**Question:** The bearing of B from A is 064°. Find the bearing of A from B.

起点由 A 变成 B。AB 指向东北，BA 就应指向西南，所以加半周：

$$064^\circ+180^\circ=244^\circ.$$

答案是三位方位角244°，西南方向合理。$180^\circ-64^\circ=116^\circ$ 指向东南，不是反向路线。

</div>

## 自己真正画出来 {#practice}

<div class="lesson-check" markdown="1">

### 留下构造过程 {#practice-tools}

**Question:** On separate paper panels: copy a 5.5 cm segment onto a ray; construct the perpendicular bisector of a 7 cm segment; construct a perpendicular at a marked point on a line; construct a perpendicular from a point 4 cm off a line; bisect a drawn 70° angle; copy that angle onto a new ray; construct 60° and then an equilateral triangle of side 4 cm. Use a protractor only to draw the initial 70° and to check results. Leave all compass arcs and explain the equality behind each construction.

<details markdown="1">
<summary>提示</summary>

逐项使用对应构造方法；代表同一距离的开口不能随意改变。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

复制线段应为5.5 cm；7 cm线段的垂直平分线在3.5 cm处垂直相交；两种垂线都成90°；角平分得到两个35°；复制角为70°；等边三角形三边4 cm、角60°。不是量出这些读数就完成了构造：等距确定平分线，SSS 支持复制／平分角，三等边给出60°。只靠测量画出的部分要回到[构造方法](#constructions)重画。这些是教学检查，不是官方考试容许误差。

</details>

</div>

<div class="lesson-check" markdown="1">

### 同时满足限制 {#practice-locus}

**Question:** Draw A and B 8 cm apart on a horizontal line. Construct all P satisfying PA = PB and PA = 5 cm, then retain only points above AB. Separately draw a vertical infinite line l: show all points exactly 2 cm from l and explain why a slant segment is not a shortest distance. Finally draw a 60° angle and construct the locus inside it equidistant from its two sides.

<details markdown="1">
<summary>提示</summary>

先取交集，再用上方限制筛选；到直线的距离沿垂线量。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

垂直平分线与半径5的圆有两个交点，但只保留上方交点，离 AB 的高度为3 cm（3–4–5直角三角形）；必须有交弧和标点，不只是一个计算结果。到直线距离2的轨迹是两条竖直平行线，在 l 左右各水平相距2 cm。斜线是直角三角形的斜边，比垂线长。最后的轨迹为60°角内部的30°角平分射线；若对象是两条完整相交直线，则有两条角平分线。若只画一条平行线，或把到边的距离当成到端点的距离，回看[位置集合](#loci)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 画路线并测量 {#practice-map}

**Question:** On paper use 1 cm to represent 100 m. Put A at your origin, draw B 6 cm east of A, and C 8 cm north of B. Draw AC. Measure AC with a ruler and the bearing of C from A with a protractor. Give the direct ground distance, the distance via B and the bearing of A from C. State the equivalent ratio scale.

<details markdown="1">
<summary>提示</summary>

过 A、C 画与 BC 平行的北线。从北顺时针量，不是从 AB 开始。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

纸上 AC 约10 cm，因此直达距离1000 m；经 B 则为 $600+800=1400\text{ m}$。去程方位角约037°，反向约217°。等价比例尺为 $1:10\,000$。本教学图中量角相差约1°可作为检查参考，不是官方误差标准。直达应比折线路线短。若得到约053°，很可能从东开始量，应回看[以北为起始射线](#bearings)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 辨方位，再反向 {#practice-bearing}

**Question:** Write the bearings for E, SW and NW. The bearing of Q from P is 305°. Find the bearing of P from Q. On paper draw a route from X for 4 cm on bearing 135°, with a north arrow, and name its compass direction.

<details markdown="1">
<summary>提示</summary>

先判断反向应该落在哪个象限。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

E = 090°，SW = 225°，NW = 315°。反向为 $305^\circ-180^\circ=125^\circ$。135°路线指向 SE，北向上时斜向右下，长度应为4 cm。若反向写成55°，回看[半周转向](#example-bearing)。

</details>

</div>

## 重做画法，不只改答案 {#retry}

<div class="lesson-check" markdown="1">

### 构造新图形 {#retry-tools}

**Question:** Construct triangle ABC with AB = 6 cm, AC = 5 cm and BC = 5 cm. Construct its line through C perpendicular to AB, and bisect angle ACB. Explain why the last two lines coincide. Separately copy a length 4.2 cm, construct a perpendicular at a new point on a line, and construct and copy a 60° angle before bisecting it.

<details markdown="1">
<summary>提示</summary>

使用中点与等距构造，不是凭眼睛画竖线。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

以 A、B 为圆心、半径5交弧确定 C。两腰相等说明 C 到 A、B 等距，故 C 在垂直平分线上；与 AB 的交点为中点，用两半三角形 SSS 也能说明同一条线平分 ACB。另题复制线段4.2 cm，垂线90°，复制的60°被分成30°与30°。检查每幅新图都保留等半径圆弧证据；不能独立重画哪一步，就回到 [为什么要保留圆规交弧？](#constructions)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 把等式改成区域 {#retry-locus}

**Question:** Draw AB = 6 cm. Shade all points closer to A than to B and at most 4 cm from A. State which boundaries are included. A point P is above an infinite line l: construct the shortest route to l and explain why an oblique route is longer. Also draw all points 3 cm from a new infinite line and both loci equidistant from two intersecting lines.

<details markdown="1">
<summary>提示</summary>

等式通常给边界，不等式常给区域。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

取以 A 为圆心半径4的圆盘，与 AB 垂直平分线 A 侧半平面的交集。允许的圆周边界包括在内；垂直平分线不包括，因为等距不是“更近”。构造 PH 垂直 l，其他路线 PQ 是直角三角形 PHQ 的斜边，所以更长。定距3 cm画两条平行线，最后的轨迹画两条角平分线。若涂了整个圆盘或漏一支，回到 [轨迹是全部位置，不是随便一个点](#loci)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 反向使用比例尺 {#retry-map}

**Question:** At scale 1:20 000, how long should a 1.4 km path be on paper? Draw it, then measure your segment to check. A drawn 4.5 cm path at the same scale represents what ground distance?

<details markdown="1">
<summary>提示</summary>

先统一公里与厘米，再做除法。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$1.4\text{ km}=140\,000\text{ cm}$，所以图长为 $140\,000/20\,000=7\text{ cm}$。4.5 cm代表 $4.5\times20\,000=90\,000\text{ cm}=900\text{ m}$。保留实际7 cm线段作为证据；若混用了公里与厘米，回到 [先按已知比例画，再测量](#scale-measure)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 由文字建立方位角 {#retry-bearing}

**Question:** From A, B is 35° east of north. Draw AB with a north arrow. Write its three-figure bearing and the reverse bearing. A second route points due south: write both its outward and return bearings. List the four remaining compass directions N, NE, SE and W with their bearings.

<details markdown="1">
<summary>提示</summary>

东在北的哪侧？南转半周是什么方向？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

AB 在北的右侧、顺时针35°，所以035°。反向为 $035^\circ+180^\circ=215^\circ$。正南为180°，返回正北为000°。N = 000°，NE = 045°，SE = 135°，W = 270°。若写325°，画成了北偏西，应回到 [从北开始，顺时针量](#bearings) 重画。

</details>

</div>

## 在混合题中辨认条件 {#next-step}

接到[几何计算](/zh/igcse/mathematics/pythagoras-and-trigonometry/#start)与[几何混合题](/zh/igcse/mathematics/mixed-review/#geometry-review)。学完[数与运算回顾](/zh/igcse/mathematics/mixed-review/#number-review)后，回到 [把等式改成区域](#retry-locus)，不看旧解答重画。保留圆弧、北线、单位与理由；算对一个数字不能证明已经会作图。

## 范围与参考 {#sources}

<details markdown="1">
<summary>OxfordAQA 来源与题目身份</summary>

9260 v5.1 G12–G13：[大纲 PDF 第19–20页（印刷20–21页）](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19)，共同基础。复制线段／角用于支持指定构造，不另立额外必考要求。设计前实际阅读 Specimen 2018 2C Q19：[QP 第18页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=18)、[MS PDF 第8页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8)；Q25：[QP 第23页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=23)、[MS PDF 第10页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10)。分别用于核对北线／反向、等半径交弧、垂直平分线及联合限制。本页均为自拟任务，不是官方评分标准。屏幕图用于解释，测量题以纸上给定尺寸为准。

</details>
