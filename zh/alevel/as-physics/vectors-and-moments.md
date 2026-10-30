---
title: 向量与力矩
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/vectors-and-moments/
permalink: /zh/alevel/as-physics/vectors-and-moments/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">合力为零，为什么仍可能转动？</h2>

建立同时检查平动和转动的受力模型。只知道一个力的大小，还不足以判断向量效果及其作用线。

1. [分解与合成向量](#components)。
2. 判断[质点的平衡](#point-equilibrium)。
3. 选择[垂直力臂](#moments)，再区分[力偶](#couples)。
4. 完成[独立练习](#independent-practice)与[重试](#diagnose-and-retry)。

**开始前：**会正负数、直角三角形、正弦／余弦及单位。需要时回看[IG受力模型](/zh/igcse/physics/forces-and-motion/)或[AS测量判断](/zh/alevel/as-physics/measurements-and-uncertainties/)。本页AS计算使用g = 9.81 N/kg。

除明确标为原题或改编的任务外，均为自拟题；图为教学示意。提示与完整解答默认关闭。

<h3 id="first-judgement">先判断：反向不等于所有效果都抵消</h3>

*自拟题。*

<!-- task:first-judgement -->

Two equal parallel forces act in opposite directions on a rigid board, along different lines. A student says: “The forces add to zero, so there can be no effect.” Which part of that claim is established by adding vectors, and what additional information would you examine? You do not need a moment equation yet.

<!-- /task:first-judgement -->

<details markdown="1">
<summary>提示</summary>

想一想在轮子两侧反向推，轮子能否转动。

</details>

<details markdown="1">
<summary>解答与检查</summary>

向量和为零，说明合力为零，但不同作用线上的力仍可产生转动效果。需要检查施力位置和两条作用线的垂直间距。仅合力为零，还不能证明转动平衡。

</details>

<h2 id="components">先定义坐标轴和角度，再分解</h2>

重力是有方向的力向量，质量是标量。

标量只有大小，向量具有大小和方向。速率、路程、质量是标量；速度、位移、加速度、力是向量。分量只是同一个向量在选定轴上的表示，不是额外的相互作用力。

取向东为x、向北为y。角θ从正x轴逆时针量起时：

$$F_x=F\cos\theta,\qquad F_y=F\sin\theta.$$

与所标角相邻的分量用余弦。若角从竖直方向量起，就要重新判断邻边，不能死记“水平永远用余弦”。各象限还要带方向符号。

<div class="worked-example" markdown="1">

<img src="/assets/img/physics-as-components.svg" alt="东、北坐标轴上的向量示意：10 N箭头指向东偏北30度。虚线直角三角形标出向东分量Fx和向北分量Fy，没有给出分量数值；角从水平轴量起。" width="760" height="430">

**分解示范：**对于图中向量，

$$F_x=10\cos30^\circ=8.66\,\mathrm{N},\qquad F_y=10\sin30^\circ=5.00\,\mathrm{N}.$$

核验 $F_x^2+F_y^2=F^2$。每个分量的绝对值不能超过原向量大小。合成时分别求全部x分量和y分量之和；首尾相接的比例作图也可求同一合向量。

合向量的两垂直分量给出：

$$R=\sqrt{R_x^2+R_y^2}.$$

方向要结合图和分量正负判断；单用反正切计算器结果可能选错象限。合向量为零时，没有确定方向。

</div>

<h3 id="exam-components">改变角度的参照方向</h3>

*改编自 OxfordAQA International AS Physics 9630，PH01 June 2024 Q08.1；已核对配套评分标准，新增水平分量与角度参照任务。*

<!-- task:exam-components -->

A football is kicked with an initial speed of 15 m/s at 38° above the horizontal. Determine its initial vertical and horizontal velocity components. A student instead uses 38° from the vertical. Explain the error and state the angle that would correctly be measured from the vertical.

<!-- /task:exam-components -->

<details markdown="1">
<summary>提示</summary>

画出参照轴，找到给定角的对边。

</details>

<details markdown="1">
<summary>解答与检查</summary>

分量为：

$$u_y=15\sin38^\circ=9.23\,\mathrm{m\,s^{-1}},\qquad u_x=15\cos38^\circ=11.82\,\mathrm{m\,s^{-1}}.$$

竖直分量取9.2 m/s，与已核对的Q08.1评分要求一致。从竖直方向量应是余角52°；$15\cos52^\circ$给出相同竖直分量。从竖直量38°则改变了原向量方向，不是同一向量的另一种算法。

</details>

<h2 id="point-equilibrium">作用于同一点的力怎样平衡</h2>

作用于同一点的二力或三力在平面内平衡时，向量首尾相接可闭合：

$$\sum F_x=0,\qquad \sum F_y=0.$$

二力须等大反向；三力不要求等大，也不要求两两120°，只要求向量和为零。静止和匀速直线运动都可满足平动平衡；扩展物体还须检查力矩。

<div class="worked-example" markdown="1">

**节点示范：**两条理想轻绳在静止小节点处支持向下40 N负载。一绳水平向左，另一绳向右上方、与水平成30°。对节点：

$$T\sin30^\circ=40,\qquad H=T\cos30^\circ.$$

所以 $T=80\,\mathrm{N}$、$H=69.3\,\mathrm{N}$。绳沿自身方向拉，不能提供压推力。与负载平衡的是斜绳的竖直分量，不是斜张力的全部大小。

</div>

<h3 id="complete-equilibrium">三个方向，不预设等大</h3>

*自拟题。*

<!-- task:complete-equilibrium -->

At a stationary ring, one force is 6.0 N east and another is 8.0 N north. Determine the magnitude and direction of the third force needed for equilibrium. Sketch the three vectors head to tail. Explain why a third force of 14 N is not the correct answer.

<!-- /task:complete-equilibrium -->

<details markdown="1">
<summary>提示</summary>

先求前两力合力，再取其反向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

前两力合力为10 N，方向东偏北53.1°。第三力分量为向东−6.0 N、向北−8.0 N，因此大小10 N，方向西偏南53.1°。向量三角形闭合。6和8对应垂直方向，不能直接相加得到14 N。

</details>

<h2 id="moments">力臂量到作用线，不是沿杆量</h2>

力矩（moment）描述一个力相对选定点的转动效果：

$$M=Fd_{\perp}.$$

距离是从转轴到力作用线的垂直距离。若杆长为r，力与杆成θ角，同一几何关系给出：

$$d_{\perp}=r\sin\theta,\qquad M=Fr\sin\theta.$$

<img src="/assets/img/physics-as-moment-arm.svg" alt="示意：水平杆从转轴O向右长0.40 m，右端20 N力与杆向上成30度。画出该力延长作用线及从O引出的垂线，垂直距离标为d，未给出数值。" width="760" height="430">

<div class="worked-example" markdown="1">

**几何示范：**施力点距O为0.40 m，力与杆成30°。

$$d_{\perp}=0.40\sin30^\circ=0.20\,\mathrm{m},\qquad M=20\times0.20=4.0\,\mathrm{N\,m}.$$

方向为逆时针。也可以用垂直于杆的10 N分量乘0.40 m。只有力与杆垂直时，才可直接用完整力乘完整杆长。作用线经过O的力，不论多大，对O的力矩都为零。

刚体平衡时，选择正负约定，同时要求合力矩及合力为零。对某个支点取矩，该支点未知力的力臂为零，可从这条力矩方程中消去。

</div>

<h2 id="couples">力偶：合力为零仍有转动效果</h2>

**力偶（couple）**由同一平面内、等大反向且平行、作用线不同的两个力构成：

$$M_{\mathrm{couple}}=Fd,$$

d是两条作用线的垂直间距，不是任意转轴到其中一力的距离。力偶矩不依赖选择哪个点取矩。两力作用于同一物体，因此不是第三定律配对力。

两竖直力均为12 N，左向上、右向下，作用线相距0.30 m时，合力为零，但顺时针力偶矩为 $12\times0.30=3.6\,\mathrm{N\,m}$。无平衡力矩时，物体不满足转动平衡；仅此还不能给出角加速度，角加速度还与转动惯量有关。

<h3 id="exam-equilibrium">说出两个平衡条件</h3>

*官方原题：OxfordAQA International AS Physics 9630，PH01 June 2024 Q06.1；已核对配套评分标准。*

<!-- task:exam-equilibrium -->

State the two conditions for a body to be in equilibrium.

<!-- /task:exam-equilibrium -->

<details markdown="1">
<summary>提示</summary>

一个条件针对向量和，另一个针对转动。

</details>

<details markdown="1">
<summary>解答与检查</summary>

合力为零，并且关于任意点的合力矩为零。平面内合力为零还包括两个独立方向的分量平衡。只说“顺时针力矩等于逆时针力矩”遗漏了合力条件。

</details>

<h2 id="centre-of-mass">把重力放在合适的质心位置</h2>

均匀、规则实体的质心在几何中心。非均匀物体不能直接取中点，须使用题给位置或质量模型。在均匀重力场中，本页的受力与力矩计算可把重力等效作用在质心。

<div class="worked-example" markdown="1">

**对称支承示范——改编自PH01 June 2024 Q06.2。** 质量4.8 kg的均匀滑板承载重力360 N的儿童，儿童质心在滑板中点正上方。两个支承点到中点等距，整体静止。

$$R_A+R_B=360+4.8\times9.81=407.088\,\mathrm{N}.$$

由对称距离、集中在中点的载荷及力矩平衡，得到两反力相等，每个为203.544 N，约204 N。重力计算保留到最后再取近似；已核对题源接受204 N，或取两位有效数字的200 N。反力相等来自几何与载荷条件，不能只用“加速度为零”推出。

</div>

<h2 id="independent-practice">同时使用力与力矩检查</h2>

保持解答关闭，选研究对象并画受力图，说明使用哪些平衡方程。支承只能推时，要检查反力答案的符号。

<h3 id="practice-cords">不同的角度参照</h3>

*自拟题。*

<!-- task:practice-cords -->

A stationary small joint supports a 60 N downward load. A horizontal cord pulls left; another cord points up and right at 40° to the vertical. Find both tensions. Explain whether moving the inclined cord closer to the vertical reduces or increases its required tension, with the load unchanged.

<!-- /task:practice-cords -->

<details markdown="1">
<summary>提示</summary>

画出与竖直的夹角，竖直分量是该角的邻边。

</details>

<details markdown="1">
<summary>解答与检查</summary>

设斜绳张力T、水平张力H：

$$T\cos40^\circ=60,\qquad H=T\sin40^\circ.$$

得到 $T=78.3\,\mathrm{N}$、$H=50.3\,\mathrm{N}$。斜绳靠近竖直时，与竖直夹角的余弦增大，同样向上分量只需较小T。该角趋于零时，T趋于60 N、H趋于零。

</details>

<h3 id="practice-beam">载荷沿带悬臂的梁移动</h3>

*自拟题。*

<!-- task:practice-beam -->

A uniform rigid beam is 4.0 m long and weighs 60 N. It lies horizontally on two supports: A at x = 0 and B at x = 3.0 m, measured from the left end. Each support can push upwards but cannot pull down. A 120 N load is placed at x = 2.5 m.

1. Draw the force diagram, including the beam's own weight, and determine both reactions.
2. The load is moved to x = 3.8 m. Can the same horizontal two-contact equilibrium exist? Explain physically.
3. Find the greatest load position x compatible with both contacts having non-negative reactions.

<!-- /task:practice-beam -->

<details markdown="1">
<summary>提示</summary>

先对A取矩，再检查竖直平衡。普通支承算出负反力，表示模型有问题，不是它会主动向下拉。

</details>

<details markdown="1">
<summary>解答与检查</summary>

梁自身重力作用于x = 2.0 m。初始位置：

$$3.0R_B=60\times2.0+120\times2.5,\qquad R_B=140\,\mathrm{N},\qquad R_A=180-140=40\,\mathrm{N}.$$

若载荷移到x = 3.8 m，假设平衡会算得 $R_B=192\,\mathrm{N}$、$R_A=-12\,\mathrm{N}$。A不能向下拉，故双接触水平模型不成立；梁倾向于从A抬起，绕B顺时针转动。

边界为 $R_A=0$，因此 $R_B=180\,\mathrm{N}$：

$$3.0\times180=60\times2.0+120x,\qquad x=3.5\,\mathrm{m}.$$

这是极限位置，再向右就不能维持所述水平平衡。计算识别的是失去接触条件，不是后续角运动。

</details>

<h3 id="practice-couple">合力为零，结果却不为零</h3>

*自拟题。*

<!-- task:practice-couple -->

Two parallel vertical forces act on one rigid plate. A 12 N force acts upwards at the left and a 12 N force downwards at the right; their lines are separated horizontally by 0.30 m.

Find the resultant force and resultant moment. A student calculates each force's moment about the midpoint as 12 × 0.15, then subtracts them. Correct the reasoning. How could an additional couple bring rotational equilibrium without changing the resultant force?

<!-- /task:practice-couple -->

<details markdown="1">
<summary>提示</summary>

分别判断每个力造成顺时针还是逆时针，再定正负。

</details>

<details markdown="1">
<summary>解答与检查</summary>

合力为零。对中点取矩，两力均造成顺时针转动，应相加：

$$M=12\times0.15+12\times0.15=3.6\,\mathrm{N\,m}.$$

也可用一个力乘完整0.30 m间距。增加3.6 N m逆时针力偶，可平衡力矩，同时不改变合力。原来的两力作用于同一板上，不是牛顿第三定律配对力。

</details>

<h2 id="diagnose-and-retry">检查方向、距离与接触条件</h2>

| 错误 | 修正 |
| --- | --- |
| 水平分量总用余弦 | 标明[实际参照角](#components)。 |
| 合力为零就不可能转动 | 加上[力矩条件](#exam-equilibrium)。 |
| 杆长总等于力臂 | 作出[到作用线的垂线](#moments)。 |
| 反向力必定产生反向力矩 | 分别判断[转动方向](#couples)。 |
| 负支持力也是可接受答案 | 检查[单向接触约束](#practice-beam)。 |

<h3 id="retry-moment">离开原图再试一次</h3>

*自拟题。*

<!-- task:retry-moment -->

A 20 N force acts at the end of a 0.40 m rod pivoted at its other end. Compare the moments when the force acts (a) perpendicular to the rod, (b) at 30° to the rod, and (c) along the rod through the pivot. Give magnitudes and explain which distance must change even though the rod length stays fixed.

<!-- /task:retry-moment -->

<details markdown="1">
<summary>提示</summary>

各情形延长力的作用线，再从转轴作垂线。

</details>

<details markdown="1">
<summary>解答与检查</summary>

力矩大小依次为8.0 N m、4.0 N m和零；垂直力臂依次为0.40 m、0.20 m和零。只知道力和杆长还不足够，改变作用线会改变垂直距离。(a)、(b)的转动方向还取决于力朝杆的哪一侧。

</details>

<h2 id="moment-transfer">比较相同力矩的不同效应</h2>

<div class="lesson-check" markdown="1">
<!-- task:moment-transfer-check -->
A force of 18 N acts at the end of a 0.50 m rod at 30° to the rod. Take moments about the rod’s other end. Separately, two equal opposite parallel forces of 15 N act on a plate along lines 0.30 m apart. Compare their moment magnitudes. Which arrangement has zero resultant applied force? Explain why equal moments do not establish the same translational effect.
<!-- /task:moment-transfer-check -->
<details markdown="1"><summary>提示</summary>
分别用垂直力臂和两平行作用线的垂直间距。
</details>
<details markdown="1"><summary>解答与修复</summary>
单力矩 18(0.50)sin30° = 4.5 N m；力偶矩 15(0.30) = 4.5 N m。只有所列力偶合力为零；单力本身合力 18 N，若要分析整根杆还须另给支承力。相等力矩不意味着相同平动效应。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:retry-quadrant-contact -->
Retry: a 10 N vector points 30° north of west. Find east/north components. A 40 N weight is supported at a joint by a cord 60° from the vertical and a horizontal cord: find both tensions. Finally, an ordinary unfastened support calculation gives a reaction of −8 N when upwards was positive. Can that contact state exist?
<!-- /task:retry-quadrant-contact -->
<details markdown="1"><summary>提示</summary>
先画象限；斜绳角从竖直量。
</details>
<details markdown="1"><summary>解答与修复</summary>
东分量 −10cos30° = −8.66 N，北分量 +5.00 N。斜绳 Tcos60° = 40，T = 80 N；水平绳 Tsin60° = 69.3 N。普通接触不能向下拉物体，−8 N 说明所假定接触平衡状态不成立，须改变约束／支承模型。质量是标量，重力是有方向的力向量。
</details>
</div>

{% include exam_topic_practice.html %}

<h2 id="sources-and-next">范围与下一步</h2>

范围：OxfordAQA International AS Physics 9630，PH01 3.2.1–3.2.2。官方Q06.1、改编Q08.1与对称支承示范参考PH01 June 2024，已核对配套评分标准。其他任务均为自拟，不赋官方分值；图示与数值是教学构造。

用[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)核对范围。完成这些任务不代表完成实体实验或整个力学单元。

[上一课：测量与不确定度](/zh/alevel/as-physics/measurements-and-uncertainties/) · [返回AS物理](/zh/alevel/as-physics/) · [下一课：直线运动与匀加速](/zh/alevel/as-physics/straight-line-motion/)。抛体运动接续本路线后课。
