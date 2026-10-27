---
layout: subjects
title: "全等与相似"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/congruence-and-similarity/
permalink: /zh/igcse/mathematics/congruence-and-similarity/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 形状相同，大小也相同吗？ {#start}

照片可以转动而大小不变，也可以放大而形状不变。这两件事不能混为一谈。本页先判断对应关系、计算长度，再用充分条件证明全等。

先要会[三角形与角理](/zh/igcse/mathematics/angles-and-polygons/#triangles)及[比例](/zh/igcse/mathematics/ratio-and-proportion/#start)。先建立全等、相似与对应长度的概念，再用三角形全等条件证明，计算面积与体积的缩放。以下均为**自拟题，不设官方分值**。

## 先配顶点，再算数字 {#matching}

两个图形经过平移、旋转或翻转后能完全重合，就叫**全等 congruent**，形状和大小都相同。如果一个是另一个按相同比例缩放的版本，即使转动或翻转，仍叫**相似 similar**。对应角相等，所有对应长度都乘同一个正比例因子。全等图形也是相似图形，长度比例因子为1。

写 $\triangle ABC\sim\triangle PQR$ 时，顺序已经说明 A 对 P、B 对 Q、C 对 R。因此 AB 对 PQ、BC 对 QR、AC 对 PR，即使一个图转了方向也一样。只有一对等角或一对等长，不能证明相似。

![两组三角形 ABC 与旋转后的 PQR。第一组 AB 为3、BC 为4、CA 为5，第二组 PQ 为6、QR 为8，PR 未标长度。](/assets/img/igcse-geometry-reasoning-similarity.svg)

三角形若有两对对应角相等（**AA**），第三对也相等，就能判定相似。三组对应边成比例（**SSS 相似**），或两组边成比例且**夹角**相等（**SAS 相似**），也能判定相似。这里说的是相似；下面的 SSS 全等要求等长，不只是成比例。

求缺失长度前，把比例方向写清楚：$\text{new length}/\text{old length}$，整题保持同一方向。比例因子小于1会得到缩小的副本，enlargement 这个术语不保证变大。

<div class="worked-example" markdown="1">

### 完整的对应长度计算 {#example-scale}

**Question:** Triangles ABC and PQR are similar in the stated order. AB = 3 cm, BC = 4 cm, AC = 5 cm, PQ = 6 cm. Find QR and PR.

先确定 AB 对应 PQ。从 ABC 到 PQR 的因子为 $6/3=2$，所以：

$$QR=4\times2=8\text{ cm},\qquad PR=5\times2=10\text{ cm}.$$

检查三组比：$6/3=8/4=10/5=2$。每边都加3 cm并不能保持比例。比例因子不是1，所以它们相似但不全等。

</div>

## 什么条件足以保证重合？ {#congruence}

以下条件能确定三角形的形状和大小：

- **SSS：**三组对应边分别相等。
- **SAS：**两组对应边及它们**之间的夹角**相等。
- **ASA／AAS：**两组对应角与一组对应边相等；第三个角由内角和确定。
- **RHS：**两个都是直角三角形，斜边和一组对应直角边分别相等。

**AAA** 只说明相似，不能固定大小。**SSA**（两边和非夹角）通常不够：在 A 处画与 AB 成锐角的射线，再以 B 为圆心、给定 BC 长度为半径画圆；圆可能与射线相交两次，产生不同的三角形。RHS 是特殊的直角条件，不能把任意 SSA 都当成充分条件。

证明时依次写对应条件及理由、合法全等判定、全等后的对应结论。看着对称的图不能补充题目没有给的条件。

<div class="worked-example" markdown="1">

### 完整全等证明 {#example-proof}

**Question:** Triangle ABC has AB = AC. M is the midpoint of BC. Prove that AM bisects angle BAC.

中点条件提供了第二组等边，因此比较 AM 两侧的三角形：

$$AB=AC,\qquad BM=CM,\qquad AM=AM.$$

理由依次是已知等边、M 为中点、公共边。因此由 SSS，$\triangle ABM\cong\triangle ACM$。对应角给出 $\angle BAM=\angle MAC$，所以 AM 平分 BAC。

证明没有提前假设 AM 垂直 BC，也没有先假设它平分顶角；这些只能是可能的结论，不是已知。检查对应顺序：B 对 C，M 对 M。

</div>

## 长度、面积、体积 {#area-volume}

所有长度乘以 k 时，矩形的长和宽各得到一个 k，所以面积得到 $k^2$。任意相似平面图形也一样：分成对应三角形后，每块面积都含两个长度因子。相似立体的三个独立长度方向各得一个 k，所以体积得到 $k^3$。表面积同样得到 $k^2$。

长度因子2对应面积因子4、体积因子8。反过来，从面积比求长度比要取正平方根，从体积比要取正立方根。这些关系需要图形**相似**；两个体积相等的盒子不一定同形，也不保证表面积相等。

<div class="worked-example" markdown="1">

### 先认清是哪种量 {#example-volume}

**Question:** A closed cuboid measures 4 cm by 2 cm by 1 cm. A similar larger cuboid has the corresponding longest edge 10 cm. Find the larger total surface area and volume.

先检查实际小模型：六个面的总面积为 $S=2(4\times2+4\times1+2\times1)=28\text{ cm}^2$，体积为 $V=4\times2\times1=8\text{ cm}^3$。从小到大的长度因子为 $k=10/4=2.5$。表面积含两个长度因子，体积含三个：

$$S=28(2.5)^2=175\text{ cm}^2,\qquad V=8(2.5)^3=125\text{ cm}^3.$$

再直接检查尺寸：大长方体是10 cm、5 cm、2.5 cm，六面总面积为 $2(10\times5+10\times2.5+5\times2.5)=175\text{ cm}^2$，体积为 $10\times5\times2.5=125\text{ cm}^3$。另外 $175/28=6.25=k^2$，$125/8=15.625=k^3$。两者都只乘2.5，就把面积和体积误当成长度了。

</div>

## 判断条件究竟保证什么 {#practice}

<div class="lesson-check" markdown="1">

### 配对旋转后的三角形 {#practice-lengths}

**Question:** Triangle XYZ has XY = 9 cm, YZ = 12 cm, XZ = 15 cm and angle Y = 90°. Triangle UVW has angle U = 90°, angle W equal to angle X, and UW = 6 cm. Show they are similar, write a correct ordered similarity statement, and find UV. Are the triangles congruent? Is a reflected copy of XYZ with unchanged lengths congruent to XYZ?

<details markdown="1">
<summary>提示</summary>

先匹配题目给的等角和两个直角，再比较边。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

题目给出 $\angle X=\angle W$，且 $\angle Y=\angle U=90^\circ$，所以剩余的 Z、V 也相等。X 对 W、Y 对 U、Z 对 V，由 AA 得 $\triangle XYZ\sim\triangle WUV$。XY 对 WU，因子为 $6/9=2/3$，于是 $UV=12(2/3)=8\text{ cm}$。剩余边为 $WV=15(2/3)=10\text{ cm}$；两者分别是边长9、12、15和6、8、10的实际直角三角形。不要把 UW 与 YZ 相比，它们的端点对应不同；若按屏幕位置配边，回看[顶点配对](#matching)。两三角形不全等，因为对应长度不同；但 XYZ 保持原长的镜像与原图全等，反射不改变大小。

</details>

</div>

<div class="lesson-check" markdown="1">

### 区分充分与不足条件 {#practice-conditions}

**Question:** For each pair of non-degenerate triangles, decide whether congruence is guaranteed and justify: (i) sides 4, 5, 6 cm in both; (ii) sides 4 and 6 cm with included angle 50° in both; (iii) angles 40°, 65° and the side between them 7 cm in both; (iv) right angles, hypotenuse 13 cm and one leg 5 cm in both; (v) angles 40°, 65°, 75° only; (vi) AB = 8 cm, AC along a ray at 30° to AB, and BC = 5 cm. For (vi), construct the possible C positions to test uniqueness.

<details markdown="1">
<summary>提示</summary>

给出的角是不是等边的夹角？第(vi)问用 B 为圆心、半径5的圆与射线相交。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

(i) SSS；(ii) SAS；(iii) ASA；(iv) RHS 均保证全等。(v) AAA 只固定形状，长度仍可全部翻倍，故不保证全等。(vi) 有两个交点：B 到射线的垂距为4 cm，而半径5 cm更大；垂足在 A 前方，两个交点也都落在射线上。两种 AC 长度不同，因此 SSA 不唯一。保留圆弧作为证据。若误用 SSA，回看[夹角条件](#congruence)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 平行四边形中的对角线 {#practice-proof}

**Question:** ABCD is a parallelogram with vertices in order. Draw diagonal AC. Prove triangles ABC and CDA are congruent, writing the corresponding order and a reason for every condition. Deduce angle BCA = angle DAC.

<details markdown="1">
<summary>提示</summary>

找公共边，再由平行边找等角。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$AB=CD$（平行四边形对边相等），$AC=CA$（公共边），$\angle BAC=\angle DCA$（AB 平行 CD，内错角相等）。因此由 SAS 得 $\triangle ABC\cong\triangle CDA$。对应角给出 $\angle BCA=\angle DAC$。也可用两组对边和 AC 作 SSS。不能只凭图看着像就把任意四边形当平行四边形；回看[证明条件](#example-proof)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 由体积比出发 {#practice-scale}

**Question:** Two similar closed cuboids A and B have volumes 8 cm³ and 216 cm³. A measures 4 cm by 2 cm by 1 cm and has total surface area 28 cm². Find B's longest edge and total surface area. Explain why a volume ratio alone would be insufficient without similarity.

<details markdown="1">
<summary>提示</summary>

先还原长度比例因子。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$k^3=216/8=27$，所以 $k=3$。最长棱为 $4\times3=12\text{ cm}$，表面积为 $28\times3^2=252\text{ cm}^2$。检查完整模型：B 的尺寸为12 cm、6 cm、3 cm，所以 $12\times6\times3=216\text{ cm}^3$，$2(12\times6+12\times3+6\times3)=252\text{ cm}^2$。没有相似条件，各方向长度可以按不同因子变化，不存在统一 k。若把边长乘27，回看[量的维度](#area-volume)。

</details>

</div>

## 针对刚才的判断重试 {#retry}

<div class="lesson-check" markdown="1">

### 由大图回到小图 {#retry-lengths}

**Question:** Triangles ABC and DEF are similar in that order. DE = 15 cm, EF = 21 cm and AB = 5 cm. Find BC. Decide whether the perimeter scale factor is the same as the length scale factor.

<details markdown="1">
<summary>提示</summary>

写出从 DEF 到 ABC 的因子。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

因子为 $5/15=1/3$，所以 $BC=21/3=7\text{ cm}$。各边都乘同一因子，边长总和即周长也乘同一因子。若把 EF 与 AB 配对，回到 [先配顶点，再算数字](#matching)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换一种全等条件 {#retry-proof}

**Question:** In triangles ABC and DEF, angle A = angle D = 50°, angle B = angle E = 60°, and BC = EF = 7 cm. Prove the triangles congruent and deduce AC = DF. Explain why the equal side need not lie between the two initially given angles.

<details markdown="1">
<summary>提示</summary>

求第三对角，或使用 AAS。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$\angle C=\angle F=180^\circ-50^\circ-60^\circ=70^\circ$。结合 BC = EF，可对 B、C 与 E、F 使用 ASA，或对原来的角使用 AAS。因此 $\triangle ABC\cong\triangle DEF$，对应边给出 $AC=DF$。第三角已固定，所以两对角加一组对应非夹边也足够；若混淆 AAS 与 SSA，回到 [什么条件足以保证重合？](#congruence)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 从体积改成面积 {#retry-scale}

**Question:** A closed cuboid measures 9 cm by 6 cm by 3 cm, with total surface area 198 cm² and volume 162 cm³. A similar smaller closed cuboid has total surface area 88 cm². Find the smaller volume.

<details markdown="1">
<summary>提示</summary>

面积给的是长度因子的平方，不是立方。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

由大到小，$k^2=88/198=4/9$，所以 $k=2/3$。小模型体积为 $162(2/3)^3=48\text{ cm}^3$。再用实际小模型检查：尺寸为6 cm、4 cm、2 cm，给出 $2(6\times4+6\times2+4\times2)=88\text{ cm}^2$，$6\times4\times2=48\text{ cm}^3$。若体积直接乘面积比，回到 [长度、面积、体积](#area-volume)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 检验新的说法 {#retry-conditions}

**Question:** One triangle has sides 4, 6 and 8 cm and another 6, 9 and 12 cm. Are they similar or congruent? A student says that equal pairs of 50° angles and one pair of 6 cm sides prove two triangles congruent. Give a counterexample by drawing two different triangles with AB = 6 cm and angle A = 50°.

<details markdown="1">
<summary>提示</summary>

第一问检查三组边比；第二问想想 AC 还可以怎样变化。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

三组对应边比为 $6/4=9/6=12/8=1.5$，由 SSS 相似判定得相似，但不全等。第二问画 AB = 6 cm，在 A 处画50°射线，分别沿射线取 AC 为4 cm和7 cm。两图都满足给定边角，但 AC 不同，所以不全等。一边一角不足以判定；若把部分条件误当成 SAS，回看[充分条件](#congruence)。

</details>

</div>

## 从三角形走向圆证明 {#next-step}

接着学[圆与证明](/zh/igcse/mathematics/circles-and-proof/#start)。面积体积计算接到[单位、面积与体积](/zh/igcse/mathematics/units-area-and-volume/#start)。学完[代数回顾](/zh/igcse/mathematics/mixed-review/#algebra-review)后，关闭帮助回做 [区分充分与不足条件](#practice-conditions)、[从体积改成面积](#retry-scale)，再做[几何混合题](/zh/igcse/mathematics/mixed-review/#geometry-review)。

## 范围与参考 {#sources}

<details markdown="1">
<summary>OxfordAQA 来源与题目身份</summary>

9260 v5.1 G7、G9、G17：[大纲 PDF 第19页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19)与[第21页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=21)。G17 对应相似面积体积关系；G18 是弧与扇形，不是相似。设计前阅读 Specimen 2018 2C Q3：[QP 第3页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=3)、[MS PDF 第4页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4)；2E Q25–26：[QP 第22–23页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=22)、[MS PDF 第14–15页](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=14)。用来核对对应条件与缩放要求，本页教学任务均自拟，无官方分值。

</details>
