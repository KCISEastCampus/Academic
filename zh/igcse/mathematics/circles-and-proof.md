---
layout: subjects
title: "圆与几何证明"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/circles-and-proof/
permalink: /zh/igcse/mathematics/circles-and-proof/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 哪些结论真正来自这个圆？ {#start}

圆盖有中心和边缘，但穿过圆的直线不一定经过中心。先说清楚题目给了什么，再决定用哪条性质。先说清圆的词汇，再用圆定理计算角，并写出完整证明。

先要会[三角形角理](/zh/igcse/mathematics/angles-and-polygons/#triangles)和[三角形全等](/zh/igcse/mathematics/congruence-and-similarity/#congruence)。先在纸上做，再打开帮助。以下均为**自拟题，不设官方分值**。

## 直线、弧与区域 {#circle-language}

![圆心 O、直径 AB、半径 OC、弦 DE；分别填充弓形和扇形，直线 t 在 B 接触圆。](/assets/img/igcse-geometry-reasoning-circle-language.svg)

**半径 radius** 从圆心连到圆周（边界），同圆的半径相等。**弦 chord** 连接圆周两点；经过圆心的弦才是**直径 diameter**，长度为半径的两倍。**弧 arc** 是圆周的一部分。**扇形 sector** 由两条半径和一段弧围成；**弓形 segment** 由一条弦和一段弧围成。**切线 tangent** 与圆只有一个公共点，穿过圆两次的直线不是切线。

顶点在 $C$、由 $CA$ 和 $CB$ 形成的角写成 $\angle ACB$，中间字母是顶点。它所对的弧 $AB$ 不含 $C$。$A$ 与 $B$ 之间有两段弧，不能随意选。

<div class="lesson-check" markdown="1">

### 画图辨认 {#practice-labels}

**Question:** Draw a circle of radius 3 cm with centre O. Draw a diameter AB, a chord CD that is not a diameter, and a radius OE. Shade one sector and use hatching for one segment. Label an arc and a tangent at A. Explain the difference between the shaded regions.

<details markdown="1">
<summary>提示</summary>

根据区域的边界命名，不根据大小猜。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

直径为 6 cm 且经过 O；另一条弦两端在圆上但不经过 O。扇形的两条直边都是半径，弓形只有一条弦作直边。切线只在 A 接触圆。如果画出的“弓形”由两条半径围成，回看[区域定义](#circle-language)。

</details>

</div>

## 沿同一段弧找角 {#angle-theorems}

![三幅圆图从上到下依次为：同弦 AB 的圆心角与圆周角、直径及第三点、圆内接四边形 ABCD；未标未知角答案。](/assets/img/igcse-geometry-reasoning-circle-angles.svg)

**同弧所对的圆心角等于圆周角的两倍**。要选不含圆周角顶点的那段弧对应的圆心角，它可能是优角。圆周角为 $110^\circ$ 时，圆心角为 $220^\circ$，不能擅自改成较小的 $140^\circ$。

直径在圆心所对的角为 $180^\circ$，所以**半圆所对的圆周角为 $90^\circ$**。同一条弦上的两个角，若顶点在**同一弓形内**（弦的同侧），就对着同一段弧，因此相等。顶点在弦两侧时通常不能说它们相等。

四边形的四个顶点都在一个圆上，才叫**圆内接四边形 cyclic quadrilateral**。对角和为 $180^\circ$：这两个角所对的弧合成圆心处的 $360^\circ$，而每个圆周角都是对应圆心角的一半。这是理由，不是看图觉得它们互补。

<div class="worked-example" markdown="1">

### 完整角理链 {#example-circle}

**Question:** A, B, C and D lie in that order on a circle. AC is a diameter and angle BAC is 34°. Find angle ABC, angle BCA and angle BDC. Give reasons.

先用最明确的条件：AC 是直径，不只是“一条较长的弦”。

$$\angle ABC=90^\circ,\qquad \angle BCA=180^\circ-90^\circ-34^\circ=56^\circ.$$

第一步理由是半圆所对圆周角为直角，第二步是三角形内角和。A 与 D 在弦 BC 同侧，因此所对的同弓圆周角相等：

$$\angle BDC=\angle BAC=34^\circ.$$

检查：三角形内角和为 $180^\circ$；最后一对相等角对应的是弦 BC，不是直径 AC。

</div>

## 切线与弦 {#tangents-chords}

连接圆心和切点的半径**垂直于切线**。从**同一个圆外点**引出的两条切线段等长。圆心向弦作的垂线**平分这条弦**。条件中必须真的有圆心、切线或垂直，图上看着像直角不够。

**交替弓形定理 alternate segment theorem**：切线与弦的夹角，等于这条弦在交替弓形内所对的圆周角。选择的圆周点应位于弦的另一侧，与组成所选夹角的切线射线分开。两条反向切线射线与弦组成互补的角，所以必须说明用的是哪条射线。

![上图：圆心 O，圆外点 P 引切线 PA、PB。下图：切线射线 AT、弦 AB，圆周点 C 与 T 在 AB 两侧。](/assets/img/igcse-geometry-reasoning-circle-tangent.svg)

<div class="worked-example" markdown="1">

### 完整证明：同一点引出的切线等长 {#example-proof}

**Question:** PA and PB are tangents from an external point P to a circle with centre O. A and B are distinct points of contact. Prove that PA = PB.

没有长度可代入计算。连接 OA、OB、OP，建立两个具有已知等边条件的三角形。

$$\angle OAP=\angle OBP=90^\circ.$$

理由是切点处的半径垂直于切线。又有 $OA=OB$（同圆半径），$OP=OP$（公共边），且 OP 是两个直角三角形的斜边。因此：

$$\triangle OAP\cong\triangle OBP\quad\text{(RHS)},\qquad PA=PB.$$

最后一步来自全等三角形的对应边相等。证明中没有提前假设切线段相等；结论指 P 到切点的线段，不是无限长的整条直线。

</div>

<div class="worked-example" markdown="1">

### 选对切线射线 {#example-tangents}

**Question:** In the lower tangent diagram, angle TAB is 58°. C is on the circle on the opposite side of AB from T. Find angle ACB. Explain why choosing the opposite tangent ray would change the angle.

切线与弦在 A 相交，所求圆周角必须对着弦 AB，且在交替弓形内。

$$\angle ACB=\angle TAB=58^\circ.$$

理由是交替弓形定理。把 AT 反向，夹角会变为 $180^\circ-58^\circ=122^\circ$，对应的是另一弓形内的圆周顶点。见到切线就随便抄一个邻角，可能得到互补的错误答案。

</div>

## 不预先指定方法，自己判断 {#practice}

<div class="lesson-check" markdown="1">

### 连接不同位置的角 {#practice-angles}

**Question:** A, B, C and D lie in that order on a circle with centre O. The minor arc AB subtends angle ACB = 38°. Find the minor angle AOB, angle ADB, and angle BCD if angle BAD = 112°. Sketch and give a reason for each answer.

<details markdown="1">
<summary>提示</summary>

先找每个角所对的弧，再找四边形的对角。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle AOB=76^\circ$（同一小弧 AB 的圆心角为圆周角两倍）；$\angle ADB=38^\circ$（同弦 AB 的同弓圆周角）。$\angle BCD=180^\circ-112^\circ=68^\circ$（圆内接四边形对角互补）。只写数字而没指认弧、弦或内接条件，不能说明理由；如果凭“角离得近”选法，回到[角定理](#angle-theorems)。

同弓角选错时，回看[同弦同侧的条件](#angle-theorems)，再做[换顶点的新题](#retry-same-segment)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 从角到理由 {#practice-tangents}

**Question:** PA and PB touch a circle at A and B. O is the centre, and angle APB = 64°. Find the non-reflex angle AOB and explain why triangle PAB is isosceles.

<details markdown="1">
<summary>提示</summary>

连接两条半径。切点处是什么角？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

四边形 OAPB 在 A、B 处都是直角，因此 $\angle AOB=360^\circ-90^\circ-90^\circ-64^\circ=116^\circ$。PA = PB，因为它们是从同一圆外点 P 引出的切线段，所以 PAB 是等腰三角形。底角为 $(180^\circ-64^\circ)/2=58^\circ$，也可检查。只说半径相等不能直接推出 PA = PB，回看[切线证明](#example-proof)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 分清整条弦与半弦 {#practice-chord}

**Question:** A chord AB has length 18 cm. OM is perpendicular to AB, where O is the centre and M lies on AB. Find AM and MB with a reason. Would an arbitrary perpendicular to AB bisect it?

<details markdown="1">
<summary>提示</summary>

垂线必须经过哪个特殊点？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

AM = MB = 9 cm：圆心到弦的垂线平分弦。任意一条垂线不一定通过中点。若把 AM 写成 18 cm，就是把整弦当半弦，回看[弦的条件](#tangents-chords)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 哪个角相等？ {#practice-alternate}

**Question:** Use the lower tangent diagram. Angle ACB is 47°. Find angle TAB and the angle between AB and the ray opposite AT. Give reasons.

<details markdown="1">
<summary>提示</summary>

先选射线，再套定理。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle TAB=47^\circ$，由交替弓形定理，C 与 T 在 AB 两侧。另一条切线射线给出 $180^\circ-47^\circ=133^\circ$，理由是平角为 $180^\circ$。如果两角都写成 47°，回看[射线选择](#example-tangents)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 写完整证明 {#practice-proof}

**Question:** AB is a chord of a circle with centre O. O is not on AB. M lies on AB and OM is perpendicular to AB. Prove that AM = MB. Do not use the chord-bisector theorem as your reason.

<details markdown="1">
<summary>提示</summary>

能否建立两个已知斜边相等的直角三角形？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

连接 OA、OB。因为 OM 垂直于 AB，所以 $\angle OMA=\angle OMB=90^\circ$。$OA=OB$（同圆半径），$OM=OM$（公共边）。OA、OB 是斜边，因此由 RHS，$\triangle OMA\cong\triangle OMB$。于是对应边 $AM=MB$。每个条件都有理由；直接引用待证明结论属于循环论证。若漏掉等边或直角条件，回看[完整证明结构](#example-proof)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 检查直径条件 {#practice-semicircle}

**Question:** EF is a diameter of a circle. G is another point on the circle, and angle EFG = 27°. Find angle EGF and angle GEF, giving reasons. Would the same reasoning work if EF were only known to be a chord?

<details markdown="1">
<summary>提示</summary>

直径经过圆心，但不是每条弦都经过圆心。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle EGF=90^\circ$，理由是 EF 为直径，半圆所对圆周角为直角。再由三角形内角和得 $\angle GEF=180^\circ-90^\circ-27^\circ=63^\circ$。任意弦不保证90°，因此不能同样计算。若漏了直径条件，回看[直径与所对弧](#angle-theorems)。

</details>

</div>

## 收起原答案，再试新任务 {#retry}

<div class="lesson-check" markdown="1">

### 改变边界 {#retry-labels}

**Question:** Draw two regions with the same arc PQ: one bounded by chord PQ and one by radii OP and OQ. Name both and explain why PQ is not necessarily a diameter.

<details markdown="1">
<summary>提示</summary>

PQ 是否经过 O？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

第一个是弓形，第二个是扇形。只有 PQ 经过 O 才是直径。若按面积大小命名，回看 [直线、弧与区域](#circle-language)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换一段弧 {#retry-angles}

**Question:** An angle at the circumference is 104°. Find the centre angle on the arc it subtends. A cyclic quadrilateral has an angle of 104°; find its opposite angle. Explain why these are different operations.

<details markdown="1">
<summary>提示</summary>

一个问同弧，一个问内接四边形对角。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

圆心角为 $2\times104^\circ=208^\circ$，是优角；内接四边形对角为 $180^\circ-104^\circ=76^\circ$。前者用同弧倍角，后者用对角互补；若得到 52° 或 152°，回看[所对弧的条件](#angle-theorems)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换顶点，再选择角 {#retry-same-segment}

**Question:** P, Q, T, R and S lie in that order on a circle, and angle QPR = 42°. Draw a possible diagram with chord QR. Find angles QSR and QTR, giving a reason for each. Explain whether every angle with endpoints Q and R must equal angle QPR.

<details markdown="1">
<summary>提示</summary>

先画弦 QR，再比较 P、S、T 分别在哪一侧、角所对的是哪一段弧。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle QSR=\angle QPR=42^\circ$，因为 P、S 在弦 QR 同侧，两角所对的是不含 P、S 的同一段弧 QTR。T 在 QR 的另一侧，所对的是经过 P、S 的另一段弧；四边形 QTRP 为圆内接四边形，所以 $\angle QTR=180^\circ-42^\circ=138^\circ$。在自己的图上标出 P、S 同侧，T 异侧，并标两段弧。端点相同不保证角全相等，还须检查顶点是否在同弦同侧；若把三个角都写42°，回到[同弓角的条件](#angle-theorems)，再遮住解答重画。

</details>

</div>

<div class="lesson-check" markdown="1">

### 反向求角 {#retry-tangents}

**Question:** PA and PB are tangents at A and B to a circle with centre O. The non-reflex angle AOB is 138°. Find angle APB and both base angles of triangle PAB.

<details markdown="1">
<summary>提示</summary>

先用切点直角，再用等腰三角形。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle APB=360^\circ-90^\circ-90^\circ-138^\circ=42^\circ$。两切线段相等，底角各为 $(180^\circ-42^\circ)/2=69^\circ$。若把 OA 与 PA 当等边，回看[切线条件](#tangents-chords)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 还原整条弦 {#retry-chord}

**Question:** The perpendicular from the centre O meets chord CD at M, and CM = 7.5 cm. Find CD and state the essential condition.

<details markdown="1">
<summary>提示</summary>

什么条件保证 M 是中点？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

CD = 15 cm，因为垂线来自圆心，故 CM = MD。只有垂直条件不够，回看 [分清整条弦与半弦](#practice-chord)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 选择互补角 {#retry-alternate}

**Question:** In the tangent diagram, the angle between AB and the ray opposite AT is 119°. Find angle ACB.

<details markdown="1">
<summary>提示</summary>

先还原 TAB。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle TAB=180^\circ-119^\circ=61^\circ$，再由交替弓形定理得 $\angle ACB=61^\circ$。119° 使用另一条射线；若直接抄它，回看 [选对切线射线](#example-tangents)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 改变证明结论 {#retry-proof}

**Question:** PA and PB are distinct tangents from external P to a circle with centre O. Prove that OP bisects angle APB, without assuming that it is a line of symmetry.

<details markdown="1">
<summary>提示</summary>

证明全等后，哪些对应角相等？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

连接 OA、OB。同圆半径给出 $OA=OB$，OP 为公共边，切线与半径垂直给出 $\angle OAP=\angle OBP=90^\circ$。由 RHS 得 $\triangle OAP\cong\triangle OBP$，于是 $\angle APO=\angle OPB$，所以 OP 平分 APB。图形看着对称不是证明；回看 [完整证明：同一点引出的切线等长](#example-proof) 的条件链。

</details>

</div>

<div class="lesson-check" markdown="1">

### 认出新直径 {#retry-semicircle}

**Question:** JK is a diameter. L is a third point on the circle and angle LJK = 41°. Find the other two triangle angles and explain why it is important that L is on the circumference.

<details markdown="1">
<summary>提示</summary>

对着 JK 的圆周角在哪个顶点？

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle JLK=90^\circ$（半圆所对圆周角），$\angle JKL=180^\circ-90^\circ-41^\circ=49^\circ$（三角形内角和）。L 必须在圆周上，半圆定理才能使用；只在圆内不保证直角。若把定理用于圆内点，回看[直径条件任务](#practice-semicircle)。

</details>

</div>

## 稍后再用 {#next-step}

接着学[尺规、轨迹与方位角](/zh/igcse/mathematics/constructions-loci-and-bearings/#start)。学完别的分支后，收起所有解答，回到 [改变证明结论](#retry-proof)，再做[几何混合回顾](/zh/igcse/mathematics/mixed-review/#geometry-review)。证明卡住回到 [完整证明：同一点引出的切线等长](#example-proof)，角的选择卡住回到 [沿同一段弧找角](#angle-theorems)。

## 范围与参考 {#sources}

<details markdown="1">
<summary>OxfordAQA 来源与题目身份</summary>

OxfordAQA 9260 v5.1，G8–G9：[大纲 PDF 第19页（印刷20页）](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19)。设计前实际阅读 Specimen 2018 1E Q19(a)(b)：[QP PDF 第18–19页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=18)、[MS PDF 第10页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10)。本页任务均自拟，不冒充真题或官方评分标准。文件名2016不是考季。图为教学构造，不是实测数据。

</details>
