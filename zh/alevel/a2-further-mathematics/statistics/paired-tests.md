---
title: "配对检验：每一对提供一个差"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/paired-tests/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/paired-tests/
---

## 保留两次读数之间的联系 {#meaning}

同一对象测两次，就形成一对。我们关心每个对象内部是否有平均变化，而不是把它们当成两批无关对象。先把每一对化成一个有方向的差值。本页示范和练习均为自拟题，数据为构造教学数据。

需要先会求[样本方差](/zh/alevel/a2-mathematics/statistics/estimation/#estimates)，并理解[总体方差未知时的均值检验](/zh/alevel/a2-mathematics/statistics/mean-tests/#unknown-normal)。若两组是互不相关、独立抽到的对象，回到[独立均值比较的条件](/zh/alevel/a2-further-mathematics/statistics/comparing-means/#conditions)。

计算前先确定差的方向，例如：

$$
D_i=\text{after}_i-\text{before}_i.
$$

这样，正差代表增加。若改成反方向，差值均值、原假设的比较值和备择方向都要同步反向。三处保持一致，对原始测量变化的结论就不会改变。

配对必须来自设计：同一人测两次、同一负载由两台仪器称重，或具有实际匹配依据的对象。两列长度相同不代表配对。把无关观测排序后按名次匹配，不能制造出真正配对差值的随机样本。

## 先检查差值，再检验一个均值 {#conditions}

小样本配对t检验假定：各差值是独立随机观测，来自方差未知且为正的正态差值总体。独立性要求在**不同对之间**，同一对内的两个读数可以有关联。正态性针对差值总体，不是分别针对原始两列。少量观测不能证明总体正态；明显离群值应促使我们检查模型和数据。

设共有$n\ge2$对。先求差值均值和无偏方差，再估计这个均值的标准误：

$$
\bar d=\frac{\sum d_i}{n},\qquad
s_d^2=\frac{\sum d_i^2-(\sum d_i)^2/n}{n-1},\qquad
SE=\frac{s_d}{\sqrt n}.
$$

原假设的平均差值为$\delta_0$时，使用：

$$
H_0:\mu_D=\delta_0,\qquad
T=\frac{\bar D-\delta_0}{S_D/\sqrt n}\sim t_{n-1}\quad\text{under }H_0.
$$

共有$n$个独立差值，自由度是$n-1$，不是$2n-2$。t分布考虑了未知散布需要由样本估计的不确定性。备择决定尾部：正差用右尾，负差用左尾，两方向的偏离用双尾。若$s_d=0$，上式t比值未定义；不能除以零后报告普通有限统计量。

为什么不能直接合并原两列的散布？因为一对内部的关联会影响差值的方差：

$$
\operatorname{Var}(Y-X)=\operatorname{Var}(Y)+\operatorname{Var}(X)-2\operatorname{Cov}(X,Y).
$$

直接计算实际差值的方差，就保留了这种关联，不必另算协方差。若最后一项不熟悉，回补[协方差及适用条件](/zh/alevel/as-further-mathematics/linear-combinations/#covariance)。

显著结果可以支持总体平均变化或测量偏差，却不能单独解释原因。时间趋势、练习、顺序效应和其他同步变化，都可能解释前后差异。因果主张需要研究设计支持。同样，不显著也不等于证明平均差恰好等于原假设值。

## 连贯做完一次比较 {#example}

<section class="worked-example" markdown="1">

### 调整前后的产出

**Question:** Six randomly selected independent units are measured before and after a process change. Their before outputs are $20,25,22,30,28,24$ units and their corresponding after outputs are $22,24,26,33,28,28$ units. Assume the population of after-minus-before differences is normal with unknown variance. Test whether mean output has increased at 5%, using $t_{5,0.95}=2.015048$. Explain whether the result establishes that the process change caused the increase.

同样的六个对象各测两次，因此先给每个对象定义一个差。正态性假设针对这些差值；独立抽取的对象提供独立的配对。

$$
D=\text{after}-\text{before},\qquad
H_0:\mu_D=0,\quad H_1:\mu_D>0.
$$

$$
d_i:2,-1,4,3,0,4;\qquad
\sum d_i=12,\quad \sum d_i^2=46.
$$

第二个负差也要保留：即使总体平均变化为正，仍可以有个别对象下降。

$$
\bar d=\frac{12}{6}=2,\qquad
s_d^2=\frac{46-12^2/6}{5}=\frac{22}{5}=4.4.
$$

估计标准误的单位仍是产出单位；相除后的t统计量没有单位。

$$
SE=\sqrt{\frac{4.4}{6}}=\sqrt{\frac{11}{15}}=0.856349,\qquad
t=\frac{2-0}{\sqrt{11/15}}=2.335497,\quad df=6-1=5.
$$

备择是增加，使用右尾。统计量超过右尾5%临界值，拒绝原假设。在5%水平，有足够证据支持产出的总体平均变化为正。这本身不能证明流程调整造成增加，因为尚未排除其他变化。

检查：是六个独立差，不是十二个独立读数。若改用调整前减调整后，符号与尾部会同时反向：

$$
\bar d'=-2,\quad t'=-2.335497,\quad H_1:\mu_{D'}<0,
\qquad -2.335497<-2.015048.
$$

证据仍支持产出增加；只是用相反方向描述同一个变化。

</section>

## 收起示范，自己判断 {#practice}

先尝试，再展开提示与解答。若使用帮助，记下它帮助你完成了哪一步。

<section class="lesson-check" markdown="1">

### 标称校准偏移 {#task-a}

**Question:** Instruments A and B measure each of eight randomly selected independent reference items. The A-minus-B differences are $1,2,0,3,2,4,1,3$ mm. Assume a normal population of differences with unknown variance. At 5%, test whether the population mean difference differs from the stated calibration offset of 1 mm, using $t_{7,0.975}=2.364624$. Explain how the hypotheses and statistic change if differences are defined as B minus A.

<details markdown="1"><summary>提示</summary>

原假设平均差是1mm，不是零。改变差值方向时，原假设值也要反向。

</details>

<details markdown="1"><summary>解答</summary>

每个参考物提供一个差值，属于配对设计。设差值单位为mm：

$$
D=A-B,\qquad H_0:\mu_D=1,\quad H_1:\mu_D\ne1.
$$

$$
\sum d_i=16,\quad\sum d_i^2=44,\quad\bar d=2,
\qquad s_d^2=\frac{44-16^2/8}{7}=\frac{12}{7}.
$$

$$
SE=\sqrt{\frac{12/7}{8}}=\sqrt{\frac{3}{14}}=0.462910,\qquad
t=\frac{2-1}{\sqrt{3/14}}=2.160247,\quad df=7.
$$

独立差值来自正态总体，支持t参照分布。题目关注两个方向，所以用统计量的绝对值与给定临界值比较：

$$
\lvert t\rvert=2.160247<2.364624.
$$

不拒绝。在5%水平，没有足够证据支持A减B的总体平均差偏离1mm。这不是证明它恰好为1mm。

反向定义后，方差与标准误不变，均值、原假设值和统计量都变号：

$$
D'=B-A=-D,\quad\bar d'=-2,\quad s_{d'}^2=\frac{12}{7},
$$
$$
H_0:\mu_{D'}=-1,\quad H_1:\mu_{D'}\ne-1,\qquad
t'=\frac{-2-(-1)}{\sqrt{3/14}}=-2.160247.
$$

统计量绝对值与双尾结论不变。

</details>

</section>

<section class="lesson-check" markdown="1">

### 设计是否支持模型？ {#task-b}

**Question:** Decide whether each proposal justifies a small paired t test, identifying any missing or violated condition: (i) independent random patients measured twice, with a normal population of differences and positive unknown variance assumed; (ii) unrelated independent groups of six patients, paired after sampling by sorting their results; (iii) six repeated before-and-after readings on one patient, treated as six independent patients; (iv) six independent natural pairs with differences $1,1,1,1,1,20$, justified only by saying that the original columns look normal. No numerical test is required.

<details markdown="1"><summary>提示</summary>

每种情形都先辨认独立抽取的单位、配对的来源，以及正态性应该针对哪个总体。

</details>

<details markdown="1"><summary>解答</summary>

1. 所给条件支持配对t：患者是独立对象，自然形成配对，差值正态性已作假设。
2. 对无关观测排序，不能得到真实、预先定义的配对，也不能得到其差值的随机样本。只有满足独立样本方法自身条件时，才考虑该方法。
3. 同一人的重复读数不一定独立，六个读数不等于六名独立抽取的患者。需要适当设计或模型处理依赖。
4. 要求正态的是差值总体。明显离群值应促使我们检查记录和模型，原始两列的外观不能支持差值正态。这六个样本值本身不能证明总体分布，现有论据不足。

</details>

</section>

## 修正独立信息的单位 {#retry}

若示范中用了十二个读数和十个自由度，回到[每对贡献一个差值](#conditions)。六个差值需要五个自由度，标准误要用差值标准差计算。合并原两列会丢失配对结构。若把显著写成因果，再看前后测设计的局限。随后收起示范，完成下面的新题。

<section class="lesson-check" markdown="1">

### 换一组数据再判断 {#retry-a}

**Question:** Five independently selected workers perform the same task before and after a schedule change. Before times are $30,31,29,33,32$ seconds and corresponding after times are $30,30,27,30,28$ seconds. Assume the population of before-minus-after differences is normal with unknown variance. Test whether mean completion time has decreased at 5%, using $t_{4,0.95}=2.131847$. Give a conclusion that avoids an unsupported causal claim.

<details markdown="1"><summary>提示</summary>

差定义为调整前减调整后，因此时间减少对应正差。先数独立员工，再估计他们差值的散布。

</details>

<details markdown="1"><summary>解答</summary>

五名员工提供独立配对，题设假定差值总体正态。正差代表时间减少：

$$
D=\text{before}-\text{after},\qquad H_0:\mu_D=0,\quad H_1:\mu_D>0.
$$

$$
d_i:0,1,2,3,4,\qquad \sum d_i=10,\quad\sum d_i^2=30,
$$
$$
\bar d=2,\qquad s_d^2=\frac{30-10^2/5}{4}=2.5,
\qquad SE=\sqrt{\frac{2.5}{5}}=\sqrt{0.5}.
$$

$$
t=\frac{2-0}{\sqrt{0.5}}=2.828427,\quad df=5-1=4,
\qquad 2.828427>2.131847.
$$

右尾拒绝。在5%水平，有足够证据支持从调整前到调整后总体平均完成时间减少。但这些数据不能单独证明减少由排班变化导致。标准误单位是秒，依据五个差值计算，而非十个独立读数。

</details>

</section>

## 换过主题后再回来 {#later-review}

收起之前的解答再做。先识别抽样设计，再选择统计量。

<section class="lesson-check" markdown="1">

### 同一负载的两次读数 {#later-a}

**Question:** Each of eight independently sampled reference loads is weighed by both an old and a new instrument. Old-minus-new differences are $-2,0,1,3,-1,2,0,1$ g. Assume a normal population of differences with positive unknown variance. At 10%, test whether the new instrument reads lower on average, using $t_{7,0.90}=1.414924$. Explain why equal sample sizes alone would not have identified the appropriate design.

<details markdown="1"><summary>提示</summary>

同一负载有两个读数。先判断什么符号的差支持题目主张。

</details>

<details markdown="1"><summary>解答</summary>

配对来自同一负载被称两次。旧减新的差为正，支持新仪器读数更低：

$$
D=\text{old}-\text{new},\qquad H_0:\mu_D=0,\quad H_1:\mu_D>0.
$$

$$
n=8,\quad \sum d_i=4,\quad\sum d_i^2=20,\quad\bar d=0.5,
\qquad s_d^2=\frac{20-4^2/8}{7}=\frac{18}{7}.
$$

$$
SE=\sqrt{\frac{18/7}{8}}=\sqrt{\frac{9}{28}}=0.566947,\qquad
t=\frac{0.5-0}{\sqrt{9/28}}=0.881917,\quad df=7.
$$

独立差值来自正态总体，因此用七个自由度的t分布。统计量未越过右尾10%临界值：

$$
0.881917<1.414924.
$$

不拒绝。在10%水平，没有足够证据支持新仪器的总体平均读数更低。独立样本也可以数量相同；应依据测量对象之间的关系辨认配对。

</details>

</section>

## 决定下一步 {#next-step}

若困难是判断设计，对照[独立均值检验条件](/zh/alevel/a2-further-mathematics/statistics/comparing-means/#conditions)与[本页配对条件](#conditions)，再做设计判断题。若困难是分母或自由度，先回补[单总体t模型](/zh/alevel/a2-mathematics/statistics/mean-tests/#unknown-normal)，再做新重试。记下首次答案、用过的帮助、订正和稍后作答；读懂解答还不能证明自己能独立选法。

{% include exam_topic_practice.html %}
