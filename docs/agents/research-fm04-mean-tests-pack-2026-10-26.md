# FM04 FS2.4a–c：功效、独立均值与配对均值研究课稿

日期：2026-10-26。研究与设计交接稿；仅限 OxfordAQA 9665 v5.2 的 FS2.4a–c，不是已整合课程或独立审查通过声明。遵循 AGENTS.md 与课程内容长期标准 v1.1。以下设计卡先建立，随后补入来源细读、原创课稿与计算核验。全部新题为自拟题、数据为构造数据；不使用官方分值。

## 1. 设计卡（先于课稿与数值计算）

| 拟议学习段 | 中心问题与可观察目标 | 先修、核心模型与条件 | 表征、示范、独立考查及恢复 | 来源计划 |
| --- | --- | --- | --- | --- |
| How likely is a test to detect a change?／检验有多大机会发现变化？ | FS2.4a：把不拒绝域写成事件；在一个指定真实参数下算第二类错误与功效；区分显著性与功效 | 单/双尾拒绝域，正态标准化，二项概率。先定检验规则，再换真实分布；不要求完整功效函数 | 两条分布共用一条临界线；正态完整示范、离散新情境、双尾独立任务；错因反馈后以反向尾重试，稍后混合提取 | 指定范围记录；Jan2025 Q7/MS；June2025 Q5/MS；教材32.1 |
| How should two independent means be compared?／两个独立总体均值怎样比较？ | FS2.4b：依据样本来源、正态性、方差是否已知及样本量选法；算标准误、尾与自由度；解释证据 | 独立线性组合的方差、无偏样本方差、单总体z/t。正态已知方差z；大样本已知/未知方差近似z；小正态未知等方差合并t | 从均值差的抽样变动推标准误；已知方差与合并t完整示范，大样本原始汇总题及未标方法任务；对误合并给条件诊断与新重试 | Jan2025 Q2、Q7/MS；June2025 Q7/MS；教材32.2 |
| What does a pair contribute?／每一对观测提供什么信息？ | FS2.4c：识别自然配对，先定义有方向的差；从差值算t；指出正态假设针对差值；拒绝无依据因果解释 | 单样本t、无偏方差；独立的随机配对单位，差值总体正态，小样本未知方差 | 连线配对与差值表；完整前后测示范；非零基准、反向差定义独立题；错因诊断后新数据重试与稍后选法 | Jan2025 Q3/MS；教材32.3；June卷只在确实相关时引用 |

先修回补建议由主代理落到实际可用锚点：AS Further 的 linear-combinations.md；普通数学的正态、计数检验与均值检验；FS2.2 无偏样本方差及 FS2.3 单总体t。MGF不是本组的强制门槛。核心讲解与完整示范正常展开；学生题目在前，提示与解答分别隐藏。未标方法任务放单元综合，避免课名泄露方法。

写入边界：只新增本文件；不修改课程、导航、配置、Git或远端。内容自核与后续独立审查分开，学生试用另记。

## 2. 来源身份与实际阅读（供作者，不放学生首屏）

范围依据：[已核9665 v5.2的范围记录](research-fm04-scope-route-2026-10-26.md)，FS2.4a–c。此子任务没有重新访问资格网站，不把前次访问算作本次访问。FS2.4b包括正态已知方差、大样本已知或未知方差、小正态未知等方差；不增设Welch t为必考。功效只计算给定简单备择下的概率，不要求学生推导完整功效函数。

本次直接读取的本地来源目录：`C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/`，下称材料目录。

| 来源 | 本次实际读到的身份、页码与用途 |
| --- | --- |
| `fm04-jan2025-qp.txt`及同名PDF；`fm04-jan2025-ms.txt`及同名PDF | QP正文：9665/FM04，Thursday 16 January 2025，90分钟、80分；MS January2025 Version1.0 Final。细读Q2（QP4–5，MS6–7）、Q3（QP6–7，MS8–9）、Q7（QP14–15，MS15–16）的文本。额外视觉核对QP4、5、6、14、15及MS7、15；不声称所有页都视觉复核。 |
| `fm04-june2025-qp.txt`、`fm04-june2025-ms.txt` | QP正文：Wednesday 4 June 2025，9665/FM04，90分钟、80分。细读Q5（QP10–11，MS9）与Q7（QP13–14，MS11–12）文本；本子任务未读June PDF图像。Q5检验离散功效；Q7并列大样本未知方差与小样本合并t。 |
| 已有教材图像 `fm04-textbook-005.png`、`fm04-inference-419.png`、`fm04-inference-432.png` | 实际看目录v、印刷415（PDF419，§32.1）、印刷428（PDF432，§32.3）。教材身份从[教材记录](research-fm04-textbook-papers-2026-10-26.md)承接：Gaulter等，OUP2017，ISBN9780198375999。目录定位§32.2在印刷419（PDF423），但本次未读该正文页。当前教材记录没有提供可直接打开的扫描PDF绝对路径；本次使用已有逐页图像，不声称阅读506页原书或整个第32章。 |

命令词的本地证据：Jan Q2的show需要从标准误方程推到给定方差和，不能只抄结果；determine要求以正确尾部临界值作判断。Jan Q3的state指明差值正态，test需要假设、差值统计、t和自由度、比较与情境结论。Jan Q7的explain连接大样本与CLT；find Type II/power先恢复原不拒绝域，再在指定真实均值差下求概率。June Q7的determine whether same conclusion要完成第二个检验后比较结论，不能只比样本均值。这是对已读题与MS的归纳，不是转录官方评分细则。

### 必须保留的来源核算修正

- Jan Q2：$z=4\sqrt5/5=1.788854$。双尾10%临界值1.644854，拒绝。MS7的约0.037是单尾概率；真正双尾$p=0.073638$，应与0.10比较。二者按正确分尾比较时结论一致，不能把0.037称双尾p。
- Jan Q7：$SE=\sqrt{3.04^2/478+2.09^2/437}=0.1712587031$，$z=2.335647723$，双尾$p=0.019509609<0.02$。MS15约0.0098是单尾概率；临界值2.3263正确。原不拒绝域为$[-0.398407320,0.398407320]$；真实差0.2时，$\beta=0.876437103$、power$=0.123562897$。MS以中间表值/截短临界边界得约0.877、0.123；教学使用未过早舍入结果，最终3sf为0.876、0.124，并说明与MS近似差异。
- Jan Q3：after−before的和17、平方和119，$\bar d=17/8$、$s_d^2=663/56$，$t=1.746791931$、$df=7$，右尾$p=0.0620864$，5%不拒绝。正态假设针对差值。MS的因果措辞不作为本课研究设计结论。
- June Q5：按每尾不超过2.5%的分尾规则，不拒绝域$1\le X\le8$。原参数0.2下两拒绝尾概率分别0.011529215、0.009981786，实际size=0.021511001，小于名义0.05。真参数0.15下$\beta=0.959911561$、power=0.040088439，与MS的三位小数一致。离散“双尾5%”本身不唯一决定所有可能检验；教学题必须明示分尾规则或直接给定拒绝域。
- June Q7(a)：$\bar x=112.5,\bar y=103.2,s_x^2=3000,s_y^2=2924$，$SE=6.184119447,z=1.503851936$，右尾5%不拒绝。Q7(b)：$s_p^2=2969,SE=30.31462008,t=0.3364713123,df=11$，临界值1.795884819，同样不拒绝。数值大方差合理地带来大标准误；均值差10.2不自动比9.3“更显著”。

以下只给自拟课稿，不将官方数据题改写冒充自拟题；核算用的官方数值仅存本作者记录。

## 3. Lesson draft A — How likely is a test to detect a change?／检验有多大机会发现变化？

### A1. A fixed rule, two possible realities／固定规则，两种真实情况

**EN.** A test is a rule chosen before seeing the sample. Its rejection region contains the sample outcomes that lead us to reject $H_0$. A Type I error rejects a true null hypothesis. A Type II error fails to reject a false null hypothesis. “Fail to reject” means that the data did not cross the evidence threshold; it does not mean that the null hypothesis has been proved.

**中。** 检验先定规则，再看样本。落在拒绝域就拒绝$H_0$。第一类错误是“原假设其实成立，却拒绝了”；第二类错误是“原假设其实不成立，却没有拒绝”。没有拒绝只是证据没有达到门槛，不是证明原假设为真。

**EN.** To find a Type II error probability, specify one true alternative value. Keep the original rejection rule. Calculate the probability of the original non-rejection event using the distribution at that true value. Power is the probability that the test does reject at this same alternative. Both probabilities concern new random samples, not the probability that a hypothesis is true after one observed result.

**中。** 求第二类错误概率时，必须给出一个具体的真实备择值。拒绝域保持原样，只把计算概率所用的分布换成这个真实值下的分布。功效power是同一真实备择下成功拒绝的概率。这里讨论的是重复抽样的表现，不是“看到结果后，原假设有多大概率正确”。

$$
\beta=P_{\text{specified alternative}}(\text{do not reject }H_0),
\qquad \text{power}=1-\beta.
$$

**EN.** For a continuous exact test, the Type I error probability can equal the stated significance level. With discrete outcomes, the available cutoffs may make the actual probability smaller. Do not substitute $1-\alpha$ for power: $\alpha$ is calculated under the null, whereas power here is calculated under a specified false-null reality.

**中。** 连续精确检验可以把第一类错误概率恰好定在显著性水平；离散数据只能按整数划界，实际概率可能更小。功效不是$1-\alpha$：$\alpha$使用原假设分布，功效使用指定备择分布。

如制图：横轴标$\bar X$，两条正态曲线分别中心50和52，共用竖线51.644854；在真实均值52的曲线下，左侧为$\beta$，右侧为power。用文字/斜线区分，不只靠颜色。这是待制作图的任务说明，本记录未制作或验收该图。

### A2. Worked example／完整示范（自拟题）

**EN question.** Individual filling volumes, in ml, are independent observations from $N(\mu,16)$, where the second parameter is the variance. A sample of 16 is used to test $H_0:\mu=50$ against $H_1:\mu>50$ at 5%. Find the rejection rule. If the true mean is 52 ml, find the Type II error probability and power. Explain the two probability models.

**中文题意。** 灌装量单位ml，独立来自$N(\mu,16)$，第二个参数为方差。抽16个，5%检验$\mu=50$对$\mu>50$。求拒绝规则；若真实均值52，求第二类错误概率及功效，并解释两个概率模型。

**EN solution.** Normal individual volumes and independence give an exact normal distribution for the sample mean. Its standard error is the population standard deviation divided by $\sqrt n$, not the variance divided by $n$. Under $H_0$:

**中解。** 总体正态且独立，所以样本均值精确正态。标准误是样本均值的标准差；这里不使用总体方差16直接作标准误。

$$
SE=\frac4{\sqrt{16}}=1\text{ ml},\qquad
\bar X\sim N(50,1),\qquad
Z=\frac{\bar X-50}{1}.
$$

**EN.** The claim is an increase, so large sample means provide evidence. The upper 5% standard normal cutoff is $z_{0.95}=1.644853627$. Reject when

**中。** 备择是增大，因此取右尾5%，把标准正态临界值换回ml：

$$
Z>1.644853627
\quad\Longleftrightarrow\quad
\bar X>50+1.644853627=51.644853627.
$$

**EN.** Now keep this cutoff. If $\mu=52$, the true sampling distribution is $N(52,1)$. A Type II error occurs when $\bar X\le51.644853627$:

**中。** 真实均值改为52，临界线仍为51.644853627。第二类错误就是明明均值52，却抽到没有超过临界线的样本均值。

$$
\begin{aligned}
\beta&=P_{\mu=52}(\bar X\le51.644853627)\\
&=\Phi\left(\frac{51.644853627-52}{1}\right)
=\Phi(-0.355146373)=0.361239969,\\
\text{power}&=1-0.361239969=0.638760031.
\end{aligned}
$$

**EN check and conclusion.** Under $\mu=50$, the rejection probability is 0.05. Under $\mu=52$, it is about 0.639. Thus about 63.9% of repeated samples would detect this specified increase using this rule; this is not a claim that 63.9% of cans have increased volumes. No degrees of freedom are needed for this known-variance normal test.

**中检查与结论。** 原假设下越线概率是0.05；真实均值52时越线概率约0.639，即重复使用此规则，约63.9%的样本会发现这一个具体变化。不是说63.9%的罐子增量，也不是事后假设概率。已知方差正态检验不使用t自由度。

### A3. Student task 1／独立任务1（自拟题）

**EN.** For a test of $H_0:\delta=0$ against $H_1:\delta\ne0$, a statistic $D$ has the exact distribution $N(\delta,0.25)$. Use a two-sided 5% test with equal tail probabilities. Find its non-rejection interval and then its Type II error probability and power when $\delta=0.6$. Explain why one normal tail is not enough.

**中。** 统计量$D\sim N(\delta,0.25)$。按两尾各2.5%检验$\delta=0$对$\delta\ne0$。求不拒绝区间，以及真实$\delta=0.6$时的第二类错误概率和功效。解释为什么不能只算一条尾。

<details><summary>Hint／提示</summary>

Find both cutoffs under $\delta=0$. Then standardise both endpoints under $\delta=0.6$ using standard deviation0.5.／先在零均值下找两个界，再用真实均值0.6、标准差0.5标准化两个端点。

</details>

<details><summary>Full solution／完整解答</summary>

The null standard deviation is0.5, so the two-sided critical values are $\pm1.959963985$ on the z scale.／零假设下标准差0.5，双尾标准临界值为正负1.959963985。

$$
c=0.5(1.959963985)=0.979981992,
\qquad -c\le D\le c\quad\text{means do not reject}.
$$

At the specified alternative, $D\sim N(0.6,0.25)$.／指定备择下换中心，界不动。

$$
\begin{aligned}
\beta&=P_{\delta=0.6}(-c\le D\le c)\\
&=\Phi\left(\frac{c-0.6}{0.5}\right)
-\Phi\left(\frac{-c-0.6}{0.5}\right)\\
&=\Phi(0.759963985)-\Phi(-3.159963985)\\
&=0.775573000,\\
\text{power}&=0.224427000.
\end{aligned}
$$

Power includes rejection in either tail, including the small wrong-direction tail. The interval probability includes both endpoints; endpoints have zero probability for a continuous distribution. Under a true difference0.6, about22.4% of samples trigger this two-sided test. No t degrees of freedom apply.／功效包括两条拒绝尾，不能因真实差为正就删掉负尾。连续分布端点概率为零。真实差0.6时约22.4%的样本触发这套双尾检验，无t自由度。

</details>

### A4. Student task 2／独立任务2（自拟题）

**EN.** Ten independent items each have defect probability $p$, constant within a batch. Let $X$ count defects. Test $H_0:p=0.2$ against $H_1:p>0.2$ at a nominal5% level. Use a non-randomised rule $X\ge k$, choosing the smallest integer $k$ with null rejection probability at most0.05. Find the rule and actual size. At $p=0.5$, find exact $\beta$ and power. A student recalculates $k$ using $p=0.5$ before finding power. Explain the error.

**中。** 十个独立产品，每个缺陷概率相同为$p$，$X$是缺陷数。按名义5%检验$p=0.2$对$p>0.2$。使用$X\ge k$的非随机规则，取使原假设拒绝概率不超过0.05的最小整数$k$。求规则和实际第一类错误率；真实$p=0.5$时求精确$\beta$和功效。指出“先用0.5重算$k$”的错误。

<details><summary>Hint／提示</summary>

Check the two adjacent integer cutoffs. The same event is then evaluated under a new binomial parameter.／检查相邻整数界；换参数后仍计算原事件。

</details>

<details><summary>Full solution／完整解答</summary>

$X\sim\mathrm{Bin}(10,p)$, support $\{0,1,\ldots,10\}$, $0\le p\le1$. Under the null, $p=1/5$.／模型为二项分布，支撑集和参数范围如上。

$$
P_{0.2}(X\ge4)=0.1208738816>0.05,
\qquad P_{0.2}(X\ge5)=0.0327934976\le0.05.
$$

Since upper-tail probability decreases as the integer cutoff increases, $k=5$ is the smallest admissible cutoff. Actual size is0.0327934976, not0.05.／右尾概率随整数界增加而下降，故拒绝域为$X\ge5$，实际size约3.28%。

$$
\begin{aligned}
\beta&=P_{0.5}(X\le4)
=\sum_{x=0}^{4}\binom{10}{x}\left(\frac12\right)^{10}\\
&=\frac{1+10+45+120+210}{1024}
=\frac{193}{512}=0.376953125,\\
\text{power}&=\frac{319}{512}=0.623046875.
\end{aligned}
$$

At a true defect rate of50%, the rule detects an increase with probability about0.623. Recalculating the critical region at0.5 replaces the test, so it cannot measure the power of the original test. These are exact finite binomial calculations, with no normal approximation or degrees of freedom.／真实缺陷率50%时，原规则发现增加的概率约0.623。用0.5重建拒绝域是在换检验，而不是计算原检验功效。这是有限项精确概率，不用正态近似或自由度。

</details>

### A5. Diagnose and retry／诊断与新重试（自拟题）

**Diagnosis prompt / 诊断题。** “Power equals0.95 because the test is at5%; when the true mean changes, centre the critical line at the new mean.” Identify both errors.／指出“5%检验功效等于0.95”和“真实均值变化时把临界线也平移”的两处错误。

**Feedback / 反馈。** The first confuses probabilities under different realities. The second changes the decision rule. Return to A1 and write the non-rejection event before naming its distribution.／前者混淆概率所用的真实分布，后者改了检验规则。回A1，先写不拒绝事件，再写该事件在哪个分布下求概率。

**New retry EN.** Independent measurements are $N(\mu,36)$; $n=36$. At1%, test $\mu=100$ against $\mu<100$. Find the fixed cutoff, $\beta$ and power if the true mean is97. Draw or describe which side is $\beta$.

**中。** 独立测量来自$N(\mu,36)$，抽36个。1%检验$\mu=100$对$\mu<100$。求固定临界线，以及真实均值97时的$\beta$、功效；说明$\beta$在线的哪侧。

<details><summary>Retry solution／重试解答</summary>

$$
SE=6/\sqrt{36}=1,\quad z_{0.01}=-2.326347874,
\quad c=100-2.326347874=97.673652126.
$$

Reject for $\bar X<c$; do not reject for $\bar X\ge c$. With $\mu=97$, $\bar X\sim N(97,1)$.／左尾拒绝，右侧不拒绝；真实分布中心97。

$$
\beta=1-\Phi\left(\frac{c-97}{1}\right)
=1-\Phi(0.673652126)=0.250266253,
\quad \text{power}=0.749733747.
$$

The area to the right of the fixed cutoff under the97-centred curve is $\beta$. About75.0% of repeated samples detect this specified reduction. No t degrees of freedom.／在中心97的曲线下，固定临界线右侧面积是$\beta$；约75.0%的重复样本发现这一个指定下降，无t自由度。

</details>

### A6. Later retrieval／稍后提取（自拟题；放在后续单元，课名不提示方法）

**EN.** Two independent normal populations have known variances9 and16. Samples of sizes9 and16 are used. A rule tests $H_0:\mu_A-\mu_B=0$ against an increase at5%. If the true difference is3, find the probability that the rule fails to detect it. State the roles of the null and true distributions.

**中。** 两独立正态总体已知方差9和16，样本量9和16。按5%检验均值差为零对大于零。真实差为3时，求检验未发现它的概率，并解释两个分布各自用途。

<details><summary>Later solution／稍后任务解答</summary>

$D=\bar X_A-\bar X_B$, $SE=\sqrt{9/9+16/16}=\sqrt2$. Under the null, $D\sim N(0,2)$; reject for $D>1.644853627\sqrt2=2.326174307$. Under the specified alternative, $D\sim N(3,2)$:

$$
\beta=\Phi\left(\frac{2.326174307-3}{\sqrt2}\right)
=\Phi(-0.476466717)=0.316870957,
\quad\text{power}=0.683129043.
$$

The null sets the cutoff, the alternative supplies the probability distribution. With a true3-unit difference, this rule misses it about31.7% of the time. Independence justifies adding the two mean variances; no t degrees of freedom.／原假设决定界，真实备择决定算概率时使用的分布。真实差3个单位时约31.7%的重复检验未发现；独立性支持方差相加，无t自由度。

</details>

## 4. Lesson draft B — How should two independent means be compared?／两个独立总体均值怎样比较？

### B1. What varies from sample to sample?／均值差怎样随样本波动？

**EN.** Two sample means will rarely be identical even if their population means are equal. A test compares the observed difference with the sampling variation expected under a stated null difference. First ask how the observations were collected. Different independently sampled objects support an independent-samples comparison. Repeated measurements on the same objects belong to the paired lesson, even if a table presents them in two columns.

**中。** 即使总体均值相等，两次样本的均值也很少完全一样。检验要问：观察到的差，相比原假设下正常的抽样波动，有多大？先看数据怎么取得。两批互相独立抽到的对象才是独立样本；同一对象重复测量属于配对，不能只因有两列就用独立样本公式。

Let $X_1,\ldots,X_n$ and $Y_1,\ldots,Y_m$ be independent random samples, with independence within and between samples. Set $D=\bar X-\bar Y$ and $\delta=\mu_X-\mu_Y$.／设两样本内部及相互独立，以$D$估计总体均值差$\delta$。

$$
E(D)=\mu_X-\mu_Y=\delta,\qquad
\operatorname{Var}(D)=\frac{\sigma_X^2}{n}+\frac{\sigma_Y^2}{m}.
$$

**EN.** Subtracting independent quantities still adds their variances: the coefficient $-1$ is squared. The standard error is the square root of this variance. A standardised statistic compares $D$ with the null value $\delta_0$, which need not be zero. Its numerator and standard error both have the original measurement unit, so the statistic is dimensionless.

**中。** 差的方差仍相加，因为系数$-1$要平方。标准误再对方差开方。统计量比较的是$D$和原假设差值$\delta_0$，不一定和零比较。分子、分母单位相同，相除后没有单位。

### B2. Conditions determine the denominator and reference distribution／条件决定分母和参照分布

**EN.** If both populations are normal and their variances are known, $D$ is exactly normal for any positive sample sizes. Under $H_0:\delta=\delta_0$:

**中。** 两总体都正态且方差已知时，不论样本大小，均值差都精确正态：

$$
Z=\frac{\bar X-\bar Y-\delta_0}
{\sqrt{\sigma_X^2/n+\sigma_Y^2/m}}\sim N(0,1).
$$

**EN.** With large independent samples from finite-variance populations, the CLT instead gives an approximate normal reference. Known variances use the same denominator. Unknown variances use the two separate unbiased sample variances:

**中。** 大样本、有限总体方差及独立抽样让CLT提供近似正态参照。方差已知仍用上式；未知时用各样本自己的无偏方差，不需要先假定它们相等：

$$
s_X^2=\frac{\sum x_i^2-(\sum x_i)^2/n}{n-1},\qquad
s_Y^2=\frac{\sum y_i^2-(\sum y_i)^2/m}{m-1},
$$

$$
Z\approx\frac{\bar X-\bar Y-\delta_0}
{\sqrt{s_X^2/n+s_Y^2/m}}\quad\text{with approximate }N(0,1)\text{ reference}.
$$

**EN.** A large sample does not make individual observations normal, nor repair dependence or an unrepresentative sample. There is no universal sample-size boundary that guarantees a good approximation for every skewed population. This course uses the large-sample normal route specified by FS2.4b; Welch t is not an additional required method here.

**中。** 大样本不会把每个原始观测变成正态，也不能修复相互依赖或抽样偏差。“超过某个数”不保证所有偏态总体都近似良好。本范围按FS2.4b使用大样本正态近似，不额外要求Welch t。

**EN.** For small independent normal samples with unknown but assumed equal population variances, estimate that common variance by pooling the within-sample sums of squares. Do not average the two sample variances without weighting unless the sample sizes happen to be equal.

**中。** 小样本时，若两总体正态，方差未知但可假定相等，就把两组组内平方和合在一起，除以合计自由度。样本量不同时不能直接平均两个样本方差。

$$
s_p^2=\frac{(n-1)s_X^2+(m-1)s_Y^2}{n+m-2},
\qquad
T=\frac{\bar X-\bar Y-\delta_0}{s_p\sqrt{1/n+1/m}}
\sim t_{n+m-2}\quad\text{under }H_0.
$$

**EN.** The t reference accounts for estimating the common variance. For independent normal observations, the pooled sum of squares supplies $n+m-2$ degrees of freedom. The standard error estimates variability of a difference of means; $s_p$ alone estimates individual variability and is not the standard error. All denominator variances must be positive. If the estimated variance is zero, these ratios are undefined and should not be reported as an ordinary finite t statistic.

**中。** t分布反映共同方差是估计来的，合计自由度为$n+m-2$。$s_p$描述单个观测的散布，必须再乘$\sqrt{1/n+1/m}$才是均值差的标准误。分母方差须为正；零方差导致比值未定义，不能当普通有限t统计量处理。

**EN.** The claim sets the tail before the data are inspected. An increase in $\mu_X-\mu_Y$ uses an upper tail; a decrease uses a lower tail; a difference in either direction splits $\alpha$ across two tails. A non-rejection conclusion should name the population claim and say that evidence is insufficient, not that the two populations are identical.

**中。** 备择在看数据前确定：均值差增大用右尾，减小用左尾，两方向都关注则分两尾。未拒绝时说“没有足够证据支持某总体差异”，不是宣布两个总体完全一样。

### B3. Worked example 1／完整示范1（自拟题）

**EN question.** Random independent samples are taken from two normal production processes. For A, $n=9,\bar x=24$ g, with known population standard deviation3g. For B, $m=16,\bar y=21$ g, with known population standard deviation4g. At5%, test whether the population mean masses differ.

**中文题意。** 两个正态生产过程独立随机抽样。A样本量9、均值24g、已知总体标准差3g；B样本量16、均值21g、已知总体标准差4g。5%检验总体均值是否不同。

**EN/中 solution.** Define population means in grams. The claim is two-sided. Known population variances and normal populations justify exact z despite the small samples.／定义总体均值单位g；“不同”是双尾。总体正态且方差已知，因此小样本也可精确用z。

$$
H_0:\mu_A-\mu_B=0,\quad H_1:\mu_A-\mu_B\ne0,
$$

$$
SE=\sqrt{3^2/9+4^2/16}=\sqrt2\text{ g},
\quad z=\frac{24-21}{\sqrt2}=2.121320344.
$$

At two-sided5%, reject if $\lvert Z\rvert>1.959963985$. Since2.121320344 exceeds this, reject $H_0$; the two-sided$p=0.033894854<0.05$. There is sufficient evidence at5% that the population mean masses differ.／双尾临界值如上，观察值越界；有足够证据支持两过程总体均值不同。

Check: each mean has variance1g², so their difference has variance2g². Do not subtract these variances. No estimated variance and no t degrees of freedom are involved.／检查：两个均值方差各1g²，差的方差2g²，不能相减；不使用t自由度。

### B4. Worked example 2／完整示范2（自拟题）

**EN question.** Two independent random samples come from normal populations whose unknown variances may be assumed equal. Six A measurements have mean18s and unbiased variance4s². Six B measurements have mean15s and unbiased variance5s². Test the pre-specified claim $\mu_A>\mu_B$ at5%.

**中文题意。** 两批独立随机样本来自正态总体，未知总体方差可假定相等。A六次均值18s、无偏方差4s²；B六次均值15s、无偏方差5s²。5%检验预先提出的$\mu_A>\mu_B$。

**EN/中 solution.** The samples are small and population variances are estimated. Normality and common population variance justify the pooled t reference; similar sample variances alone would not prove equal population variances.／小样本、未知方差，正态且已给等总体方差假设，故用合并t；不能仅由两个样本方差接近就证明总体等方差。

$$
H_0:\mu_A-\mu_B=0,\quad H_1:\mu_A-\mu_B>0,
$$

$$
s_p^2=\frac{5(4)+5(5)}{10}=4.5\text{ s}^2,
\quad SE=\sqrt{4.5(1/6+1/6)}=\sqrt{1.5}\text{ s},
$$

$$
t=\frac{18-15}{\sqrt{1.5}}=2.449489743,
\quad df=6+6-2=10.
$$

For the upper5% tail, $t_{10,0.95}=1.812461123$. Since2.449489743>1.812461123, reject. The one-sided$p=0.017143853$. There is sufficient evidence that A's population mean measurement time is greater than B's.／右尾5%临界值1.812461123，拒绝；有足够证据支持A总体平均测量时间更长。

Check: $SE=1.224744871$s, smaller than the pooled individual standard deviation $\sqrt{4.5}$s. The different quantities answer different variability questions.／检查：标准误约1.225s，与个体标准差约2.121s的含义不同。

### B5. Student task 1／独立任务1（自拟题）

**EN.** Independent random samples of service times from two populations have the following summaries. Neither population variance is known; no equality of variances is assumed. Both populations have finite variances, and these sample sizes are judged sufficient for a normal approximation to their mean difference. At5%, assess the claim that A has a greater population mean service time. State which features allow your method and which are not guaranteed by sample size.

**中。** 两总体服务时间独立随机抽样，汇总如下。总体方差未知，不假设相等；方差有限，题设说明样本量足以使用均值差正态近似。5%判断A总体平均服务时间是否更长。说明方法的条件，以及大样本不能保证什么。

| Population／总体 | $n$ | $\sum x$ (min) | $\sum x^2$ (min²) |
| --- | --- | --- | --- |
| A | 64 | 640 | 6652 |
| B | 100 | 950 | 9916 |

<details><summary>Hint／提示</summary>

Recover both means and unbiased variances. Inspect the sampling design before deciding whether any variances should be pooled.／先还原两均值、无偏方差，再根据设计决定是否合并。

</details>

<details><summary>Full solution／完整解答</summary>

$$
\bar x=640/64=10,\quad\bar y=950/100=9.5,
$$

$$
s_A^2=\frac{6652-640^2/64}{63}=\frac{252}{63}=4,
\quad s_B^2=\frac{9916-950^2/100}{99}=\frac{891}{99}=9.
$$

The large independent samples permit an approximate z test with separate variance estimates; equality is not assumed.／大样本独立均值差可近似正态，各用自己的方差估计，不合并。

$$
H_0:\mu_A-\mu_B=0,\quad H_1:\mu_A-\mu_B>0,
$$

$$
SE=\sqrt{4/64+9/100}=\sqrt{0.1525}=0.390512484\text{ min},
\quad z=\frac{0.5}{0.390512484}=1.280368799.
$$

Compare with1.644853627; $p\approx0.100207731>0.05$. Do not reject. There is insufficient evidence that A has the greater population mean service time. There is no t degrees-of-freedom calculation in this route. Large samples support the distributional approximation; they do not establish independent observations, remove sampling bias or make individual service times normal.／未越右尾临界值，不能支持A总体均值更大；不求t自由度。样本量不能证明独立、消除抽样偏差或令个体时间正态。

</details>

### B6. Student task 2／独立任务2（自拟题；应移入未标方法综合）

**EN.** Two independent normal measuring processes have known population standard deviations4 and3 units. Their samples give $n=16,\bar x=31$ and $m=9,\bar y=28$. An engineer claims that the first population mean exceeds the second by more than2 units. Test this at5%. Then explain why the null numerator is not simply31−28.

**中。** 两独立正态测量过程，已知总体标准差分别4、3单位。样本分别$n=16,\bar x=31$和$m=9,\bar y=28$。工程师认为第一总体均值比第二总体均值多超过2单位。5%检验，并解释分子为什么不只是31−28。

<details><summary>Hint／提示</summary>

Translate “more than2” into a population difference before standardising.／先把“超过2”写成总体差值假设。

</details>

<details><summary>Full solution／完整解答</summary>

Set $\delta=\mu_X-\mu_Y$. Use $H_0:\delta=2$ (the boundary of $\delta\le2$), $H_1:\delta>2$. Known variances and normal populations give exact z.／以$\delta\le2$的边界2作原假设，备择右尾。

$$
SE=\sqrt{16/16+9/9}=\sqrt2,
\qquad z=\frac{31-28-2}{\sqrt2}=\frac1{\sqrt2}=0.707106781.
$$

$0.707106781<1.644853627$; $p=1-\Phi(1/\sqrt2)\approx0.239750061$. Do not reject. At5%, there is insufficient evidence that the first population mean exceeds the second by more than2 units. Subtracting2 measures departure from the null boundary; omitting it tests a different claim. No t degrees of freedom.／没有足够证据支持“超过2”；分子减去2才是偏离原假设的程度，漏掉它会换成另一问题。无t自由度。

</details>

### B7. Condition diagnosis and retry／条件诊断与新重试（自拟题）

**EN diagnosis.** A student pools variances from independent samples of sizes8 and10, even though both populations are strongly skewed and the population variances are explicitly unequal. The student also subtracts the two sample variances because the question compares a difference. Identify the problems and say whether this pack supplies a justified small-sample test for these conditions.

**中诊断。** 两独立样本量8和10，总体强偏态且明确不等方差。学生仍合并方差，又因为研究“差”而相减方差。指出问题；本范围是否已提供适用于这些条件的小样本检验？

**Feedback / 反馈。** Independence adds variance terms for a difference. Pooled t needs normal populations with a common variance; the data violate both conditions. These small samples do not justify a generic CLT shortcut. The methods in this pack do not provide a justified test as stated; seek a more suitable design/model or another method outside this specified route. Do not silently invent an equal-variance assumption or prescribe Welch as if it solves severe small-sample skewness.／差的独立方差相加；正态与等方差均被违反，不能硬用合并t，也不能靠小样本套CLT。应补充合理模型、设计或另学范围外方法，不能自行篡改条件。

**New retry EN.** Now two independent random samples are explicitly from normal populations with the same unknown population variance. A gives $n=5,\bar x=12,s_A^2=9$; B gives $m=7,\bar y=8,s_B^2=4$. All measurements use the same unit. Test whether the population means differ at5%. Explain why9 and4 do not themselves contradict the equal-population-variance assumption.

**中。** 新题明确两总体正态、共同总体方差未知，独立抽样。A为$n=5,\bar x=12,s_A^2=9$；B为$m=7,\bar y=8,s_B^2=4$，单位相同。5%检验总体均值是否不同，并解释9和4为何不直接否定总体等方差假设。

<details><summary>Retry solution／重试解答</summary>

$$
H_0:\mu_A-\mu_B=0,\qquad H_1:\mu_A-\mu_B\ne0,
$$

$$
s_p^2=\frac{4(9)+6(4)}{5+7-2}=\frac{60}{10}=6,
\quad SE=\sqrt{6(1/5+1/7)}=\sqrt{72/35}=1.434274331,
$$

$$
t=\frac4{\sqrt{72/35}}=2.788866755,
\quad df=10,\quad t_{10,0.975}=2.228138852.
$$

Reject since $\lvert t\rvert>2.228138852$; two-sided$p=0.019156984$. There is sufficient evidence at5% that the population means differ. The sample variances are random estimates and may differ even when population variances are equal; the common-variance assumption comes from the stated model, not from forcing the two observed variances to match.／拒绝，有足够证据支持总体均值不同。样本方差会随机波动，不要求它们恰好相等；共同总体方差来自题设模型，不能由两个样本值直接证明。

</details>

### B8. Later retrieval／稍后提取（自拟题；未标方法）

**EN.** Delivery times from two companies are skewed with finite variances. Random independent samples of100 deliveries from each company are sufficiently large for a mean-difference normal approximation. Population standard deviations are known to be10 and8 minutes; sample means are81 and78 minutes. At2%, test whether population means differ. Explain why the word “skewed” does not by itself invalidate this test.

**中。** 两公司送货时间偏态、方差有限，独立随机样本各100次；题设说明可用均值差正态近似。已知总体标准差10、8分钟，样本均值81、78分钟。2%检验总体均值是否不同，并解释偏态为何不单独使检验失效。

<details><summary>Later solution／稍后任务解答</summary>

$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A\ne\mu_B,
\quad SE=\sqrt{10^2/100+8^2/100}=\sqrt{1.64}=1.280624847\text{ min},
$$

$$
z=\frac{81-78}{1.280624847}=2.342606428,
\quad z_{0.99}=2.326347874.
$$

Two-sided2% uses1% in each tail. Reject since2.342606428>2.326347874; $p\approx0.019149572<0.02$. There is sufficient evidence at2% that population mean delivery times differ. The CLT concerns the sampling distribution of the means, not normality of individual deliveries. This is approximate, assuming the stated random independence and adequate sample sizes; no t degrees of freedom.／双尾2%分尾各1%，越界拒绝；有足够证据支持总体均值不同。CLT用于均值的抽样分布，不要求每次送货时间正态；结论是近似检验结果，无t自由度。

</details>

## 5. Lesson draft C — What does a pair contribute?／每一对观测提供什么信息？

### C1. One difference per independent unit／每个独立对象贡献一个差值

**EN.** Measuring the same object twice produces a natural pair. The two readings within that pair are related. Instead of pretending they come from unrelated objects, form one difference for each object. The test then concerns the population mean difference. Pairing comes from the design, not from placing two lists of the same length side by side. A matched pair can also be two genuinely linked objects, provided the matching was meaningful and specified by the design.

**中。** 同一对象测两次，自然形成一对；一对内的两次读数有联系。先把每个对象化成一个差值，再检验差值总体的均值。配对来自研究设计，不是把两列相同长度的数据并排；研究设计中有实际根据的匹配对象也可组成一对，不能事后随便按大小配。

**EN.** Define the direction before calculating: for example $D_i=\text{after}_i-\text{before}_i$. A positive value now means an increase. If you reverse the definition, reverse both the null difference and the alternative direction. The scientific conclusion should remain the same.

**中。** 先定差的方向，例如$D_i=\text{after}_i-\text{before}_i$，正值就代表增加。反向定义差时，原假设差值和备择方向都要同步反向，科学结论应保持一致。

**EN.** For a small paired-sample t test, assume the differences are independent random observations from a normal population with unknown positive variance. Independence is required between pairs; independence within a pair is not required. Normality is an assumption about the population of differences, not a requirement to test each original column separately. A small list cannot prove its own population is normal; pronounced outliers should prompt a check of the model and data collection.

**中。** 小样本配对t要求：各对产生的差值是独立随机观测，来自方差未知且为正的正态差值总体。独立性要求在不同对之间；同一对内允许相关。正态性针对差值，不是分别检查两列就算满足。几条样本差不能证明总体正态；明显离群值应促使我们检查模型与记录过程。

For $n\ge2$ pairs, the shared calculation is／有$n\ge2$对时：

$$
\bar d=\frac{\sum d_i}{n},\qquad
s_d^2=\frac{\sum d_i^2-(\sum d_i)^2/n}{n-1},\qquad
SE=\frac{s_d}{\sqrt n},
$$

$$
T=\frac{\bar D-\delta_0}{S_D/\sqrt n}\sim t_{n-1}
\quad\text{under }H_0:\mu_D=\delta_0.
$$

**EN.** There are $n$ independent differences, so the degrees of freedom are $n-1$, not $2n-2$. Calculating the spread of the differences retains the association within a pair. In general

**中。** 独立信息是$n$个差值，所以自由度$n-1$，不是$2n-2$。直接求差值的散布会保留一对内部的联系。一般而言：

$$
\operatorname{Var}(Y-X)=\operatorname{Var}(Y)+\operatorname{Var}(X)-2\operatorname{Cov}(X,Y).
$$

**EN.** Dropping the covariance term without justification gives the wrong variability. You do not need to estimate covariance separately when you calculate the sample variance of the actual differences. If all observed differences are identical, $s_d=0$ and the displayed t statistic is undefined; check the situation instead of dividing by zero.

**中。** 没有依据就丢掉协方差项，会得到错误的波动量。按实际差值算$s_d^2$时，不必另估协方差。所有差值恰好相同时，$s_d=0$使t式未定义，须检查情形而不是除以零。

**EN.** A test may supply evidence of a mean change or mean measurement bias. It does not by itself establish what caused the change. Other changes over time, order effects, practice, or selection may also explain before–after results. Causal interpretation needs support from the study design, not just a small p-value.

**中。** 检验可以支持“平均变化”或“平均测量偏差”，本身不能证明变化由某措施导致。时间、顺序、练习、选择等也可能改变前后结果；因果解释需要研究设计的支持，不能靠小p值代替。

如制图：将每个对象的before与after用线连接，再单独列出对应差值；让学生看到正负变化与固定配对关系。图不能把同一对象误连到另一对象；这只是制作建议，本记录没有生成配对图。

### C2. Worked example／完整示范（自拟题）

**EN question.** Six randomly selected independent units are measured before and after a process change. Measurements are in units of output. Assume their population differences after−before are normal with unknown variance. At5%, test whether mean output has increased. Explain what the result does and does not establish about the process change.

**中文题意。** 随机选六个互相独立的单位，某流程调整前后分别测产出。假设after−before的差值总体正态、方差未知。5%检验平均产出是否增加，并说明结果对“流程导致变化”能支持什么、不能支持什么。

| Unit／对象 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Before／调整前 | 20 | 25 | 22 | 30 | 28 | 24 |
| After／调整后 | 22 | 24 | 26 | 33 | 28 | 28 |

**EN/中 solution.** The same units occur twice, so define $D=\text{after}-\text{before}$; its population mean $\mu_D$ measures average change. We are given the relevant difference normality, and the six independent units supply six independent differences.／同一对象两次测量，先定义差；正差代表增加，题设正态性针对这个差值总体。

$$
H_0:\mu_D=0,\qquad H_1:\mu_D>0,
$$

$$
d_i:2,-1,4,3,0,4;\qquad \sum d_i=12,\quad\sum d_i^2=46,
$$

$$
\bar d=12/6=2,\qquad
s_d^2=\frac{46-12^2/6}{5}=\frac{22}{5}=4.4,
$$

$$
SE=\sqrt{\frac{4.4}{6}}=\sqrt{11/15}=0.856348839,
\quad t=\frac{2-0}{\sqrt{11/15}}=2.335496832,
\quad df=6-1=5.
$$

The upper5% critical value is $t_{5,0.95}=2.015048373$. Since2.335496832>2.015048373, reject; one-sided$p=0.033376527$. There is sufficient evidence at5% of a positive population mean change in output between these conditions. This alone does not show that the process adjustment caused it; the before–after design does not isolate other changes.／越过右尾临界值，有足够证据支持平均产出增加；仅此不能证明流程调整是原因，还未排除同期其他变化。

Check: the sample mean of the six increases is2 units; its standard error is0.856 units. There are six differences, not twelve independent readings. Reversing to before−after gives mean−2 and statistic−2.335496832, compared with lower cutoff−2.015048373, yielding the same evidence of an increase.／检查：每对产出差平均2单位，标准误约0.856；是六个独立差而非十二个独立读数。反向定义后统计量、尾部同步反向，结论不变。

### C3. Student task 1／独立任务1（自拟题；非零基准与双尾）

**EN.** Two instruments A and B measure each of eight randomly selected independent reference items. The differences A−B, in mm, are $1,2,0,3,2,4,1,3$. Assume these differences come from a normal population with unknown variance. At5%, assess whether the population mean difference differs from the stated calibration offset of1mm. Give the hypotheses and then explain how your statistic changes if differences are defined as B−A.

**中。** 仪器A、B都测量八个独立随机参考物。A−B差值（mm）为$1,2,0,3,2,4,1,3$，差值总体正态、方差未知。5%检验总体平均差是否不同于标称校准偏移1mm。写假设；再说明若定义B−A，统计量怎样改变。

<details><summary>Hint／提示</summary>

The null difference is1, not0. A change of difference direction must also change the null value.／原假设差值是1，不是0；反向定义时原假设也反向。

</details>

<details><summary>Full solution／完整解答</summary>

Let $D=A-B$ in mm. $H_0:\mu_D=1$, $H_1:\mu_D\ne1$. This is a paired design; normal independent differences justify a one-sample t test of those differences.／每个物体贡献一差，正态独立差值支持配对t。

$$
\sum d_i=16,\quad\sum d_i^2=44,\quad\bar d=2,\quad
s_d^2=\frac{44-16^2/8}{7}=\frac{12}{7}\text{ mm}^2,
$$

$$
SE=\sqrt{\frac{12/7}{8}}=\sqrt{3/14}=0.462910050\text{ mm},
\quad t=\frac{2-1}{\sqrt{3/14}}=\sqrt{14/3}=2.160246899,
\quad df=7.
$$

At two-sided5%, $t_{7,0.975}=2.364624252$. Since $\lvert t\rvert<2.364624252$, do not reject; two-sided$p=0.067583294$. There is insufficient evidence that the population mean A−B differs from1mm. This is not proof that the instruments' mean difference is exactly1mm.／未越双尾临界值，没有足够证据支持偏离1mm，不等于证明平均差恰好1mm。

For $D'=B-A=-D$, $\bar d'=-2$, $H_0:\mu_{D'}=-1$, $H_1:\mu_{D'}\ne-1$, and $s_{d'}^2=12/7$. Thus $t'=(-2+1)/\sqrt{3/14}=-2.160246899$; its absolute value, two-sided p-value and conclusion are unchanged.／反向后均值、原假设值及t都变号，方差不变；双尾证据不变。

</details>

### C4. Student task 2／独立任务2（自拟题；判断条件）

**EN.** For each proposal, decide whether the small paired t model is justified by the information given, and name the missing or violated condition. (i) Independent random patients measured twice; normal population of differences assumed. (ii) Unrelated independent groups of six patients each, paired after sampling by ordering their results. (iii) Six repeated before–after readings from one patient, treated as six independent patients. (iv) Six independent natural pairs with differences $1,1,1,1,1,20$; the author claims normality follows because both original columns “look normal”.

**中。** 判断每种设计是否已有充分条件使用小样本配对t，并说明缺失或违反条件：(i)独立随机患者各测两次，已假定差值总体正态；(ii)两批互不相关的独立六人组，抽样后按结果排序强行配对；(iii)一名患者重复六次前后测，当成六名独立患者；(iv)六个自然独立配对，差为$1,1,1,1,1,20$，作者因原始两列“看起来正态”就宣称可用。

<details><summary>Full solution／完整解答</summary>

(i) Yes, assuming the difference variance is positive: patients are independent units, pairing is natural, difference normality supplied. (ii) No meaningful pairing is supplied; sorting constructs dependence and is not a random sample of pre-defined paired differences. Use the independent-samples route only if its own population and variance conditions are met. (iii) Within-person repetition need not be independent; six readings do not establish six independent population units. A model accounting for repeated measurements/design is needed. (iv) The required assumption concerns differences. The outlier is a warning to investigate recording and distribution; small data cannot prove normality, and marginal column appearance does not justify the stated normal difference model. No valid t conclusion follows from the given justification alone.

(i)条件支持，另须差值方差为正。(ii)排序不是自然匹配，不能这样制造配对；独立样本方法也仍须满足自身条件。(iii)同一人的重复测量不自动独立，不能冒充六个独立患者。(iv)两列外观不能证明差值正态；明显离群值应调查记录和分布，现有论据不足以宣布检验有效。这里的目标是条件判断，不要求对违反条件的数据硬算p值。

</details>

### C5. Diagnose and retry／诊断与新重试（自拟题）

**EN diagnosis.** “There are twelve readings in the worked example, so use10 degrees of freedom and divide the pooled standard deviation by $\sqrt{12}$. A significant result proves the adjustment caused the increase.” Repair the reasoning before recalculating anything.

**中诊断。** “示范有十二个读数，所以自由度10，把合并标准差除以$\sqrt{12}$；显著就证明流程调整造成增加。”先修正推理，不急着重算。

**Feedback / 反馈。** There are six independent differences; use $s_d/\sqrt6$ and $df=5$. Pooling the two original columns discards pairing. A mean-change test does not remove confounding. Return to C1: identify the independent sampling unit, write the signed difference, and state the population to which normality applies.／独立对象是六对，用差值标准差及五个自由度；不能合并原两列代替差值方差。检验平均变化不排除混杂。回C1先认独立单位、定义差，再写正态性针对哪个总体。

**New retry EN.** Five independently selected workers each perform the same task before and after a schedule change. Times in seconds are shown below. Assume the population of before−after differences is normal with unknown variance. At5%, test whether mean completion time has decreased. Give a conclusion that avoids an unsupported causal claim.

**中。** 独立随机选五名员工，每人在排班变化前后完成同一任务，时间秒数如下。假定before−after差值总体正态，方差未知。5%检验平均完成时间是否减少；结论避免无依据因果推断。

| Worker／员工 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Before／前 | 30 | 31 | 29 | 33 | 32 |
| After／后 | 30 | 30 | 27 | 30 | 28 |

<details><summary>Retry solution／重试解答</summary>

Let $D=\text{before}-\text{after}$ seconds, so reduction means $\mu_D>0$.／定义正差为时间减少。

$$
H_0:\mu_D=0,\quad H_1:\mu_D>0,\quad d_i:0,1,2,3,4,
$$

$$
\sum d_i=10,\quad\sum d_i^2=30,\quad\bar d=2,
\quad s_d^2=\frac{30-10^2/5}{4}=2.5\text{ s}^2,
$$

$$
SE=\sqrt{2.5/5}=\sqrt{0.5}\text{ s},
\quad t=\frac2{\sqrt{0.5}}=2.828427125,
\quad df=4.
$$

$t_{4,0.95}=2.131846786$; reject since2.828427125>2.131846786; one-sided$p=0.023710328$. At5%, there is sufficient evidence of a decrease in the population mean time from before to after. The data do not by themselves establish that the schedule change caused it. The test uses five independent differences and their normal-population model, not ten independent readings.／有足够证据支持前后平均时间减少，但不能只凭这组数据认定排班变化造成减少。使用五个独立差及差值正态模型，而非十个独立读数。

</details>

### C6. Later retrieval／稍后提取（自拟题；未标方法）

**EN.** Each of eight independently sampled reference loads is weighed by both an old and a new instrument. Old−new differences in grams are $-2,0,1,3,-1,2,0,1$. Assume the difference population is normal with unknown positive variance. At10%, test the claim that the new instrument reads lower on average. Explain why equal sample sizes would not, by themselves, have identified the appropriate design.

**中。** 独立随机抽八个参考负载，每个都由旧、新仪器称重。旧−新差值（g）为$-2,0,1,3,-1,2,0,1$。差值总体正态，未知正方差。10%检验新仪器平均读数是否更低；解释为什么不能仅由两样本数相同来判断设计。

<details><summary>Later solution／稍后任务解答</summary>

Pairing comes from both instruments weighing the same load. Let $D=\text{old}-\text{new}$, so the claim is $\mu_D>0$.／配对来自同一负载被称两次，正差代表新仪器读数更低。

$$
H_0:\mu_D=0,\quad H_1:\mu_D>0,\quad n=8,
\quad \sum d_i=4,\quad\sum d_i^2=20,
$$

$$
\bar d=0.5,\quad s_d^2=\frac{20-4^2/8}{7}=\frac{18}{7},
\quad SE=\sqrt{\frac{18/7}{8}}=\sqrt{9/28}=0.566946710\text{ g},
$$

$$
t=\frac{0.5}{\sqrt{9/28}}=0.881917104,
\quad df=7,\quad t_{7,0.90}=1.414923928.
$$

Do not reject since0.881917104<1.414923928; one-sided$p=0.203541911>0.10$. At10%, there is insufficient evidence that the new instrument has a lower population mean reading. Equal sample counts also occur in independent designs, so counts alone cannot identify pairing.／未越右尾临界值，没有足够证据支持新仪器平均读数更低。独立样本也可能数量相等，配对依据是对象关系而不是数量。

</details>

## 6. 目标—证据对应及整合边界

| 官方目标及可观察能力 | 概念与完整示范 | 无提示独立证据 | 错因、恢复、新重试及稍后证据 |
| --- | --- | --- | --- |
| FS2.4a：区分实际size、第二类错误及指定备择功效 | A1–A2；A4离散解答在学生尝试后阅读 | A3双尾区间；A4整数临界域与精确二项概率 | A5纠正换界和$1-\alpha$；反向尾新重试；A6连接两均值 |
| FS2.4a：在简单备择下换分布、保留原事件 | A2完整标准化，两个概率模型分别解释 | A3改变为双尾；A4改变为离散支持集 | A5左尾；A6均值差，不要求全功效函数 |
| FS2.4b：判断独立性并建立均值差SE | B1–B3；方差平方系数与单位 | B5由汇总还原统计量；B6非零差值 | B7条件诊断；C4比较独立与配对设计；B8稍后 |
| FS2.4b：正态已知方差及大样本已知方差 | B2、B3精确z | B6非零原假设的选法及解释 | B8偏态但大样本已知方差；A6另需使用相同SE |
| FS2.4b：大样本未知、不必等方差 | B2说明近似与各自估计；B5解答在尝试后可读 | B5给原始汇总，不预告统计量名称 | B7不能用大样本口号掩盖小偏态；后续综合重混B5/B8条件 |
| FS2.4b：小正态未知等方差合并t | B2、B4，说明加权及$n+m-2$ | B7新数据、不等样本量、双尾 | B7错误条件诊断→返回B2→新重试；稍后与B8混合选法 |
| FS2.4c：配对结构、差值正态、SE及$n-1$ | C1–C2全差值链与反向检查 | C3非零基准及反向；C4设计判断 | C5先修正独立单位再算新题；C6不同仪器情境 |
| FS2.4a–c：明确假设、尾部与情境结论，限定推断 | 各完整示范和共享解释 | A3/A4、B5/B6、C3/C4均要求解释 | 各重试及稍后题；C2/C5明确平均变化不证明因果 |

以上是本稿中的目标与题解覆盖，不是学生已经做到的证据。主代理应把B6、C4及稍后题混入不标方法的综合入口；仅在对应课名下完成不能单独证明跨方法选法能力。提示用后记为“借助提示”，不算无帮助首次成功。B5首次独立后若出错，可回B2的未知方差式，再用B8已知方差条件做辨别；如需复测未知方差计算，可将B5题目收起解答、隔后再做，不能把看完解答算新迁移。

### 本次计算自核与后续审查

已对所有课稿数值与上面的指定官方题数值进行有限计算自核：正态使用Python标准库`statistics.NormalDist`；二项概率使用整数二项系数与`Fraction`精确求和；t临界值和p值使用标准t密度的数值积分及区间二分，先以$t_1$的$F(1)=0.75$和$t_{10,0.95}=1.81246112281$作断言校验。显示小数不宣称为精确值；分数及根式保留精确形式，比较使用未过早舍入值。计算在内存进行，没有新增辅助脚本或依赖。

内容状态：三份双语课稿及全部原创任务/重试/稍后题已有完整答案；来源阅读范围如第2节。作者自核已完成，**另一个审查者的独立审查尚未完成**，不得把本作者重算冒称独立审查。主代理整合时仍需检查语言切换、答案默认关闭、公式、图与桌面/手机阅读；本子任务没有生成课程HTML、运行Jekyll或做浏览器验收。学生未试用，不能宣称学习效果已验证。

初始研究阶段仅写此研究文件；未编辑课程、导航或共享样式，未执行Git写操作、推送或发布。后续层级与导航重设计由主代理负责。

## 7. 后续授权的配对课稿导出

用户随后授权额外导出两份scratch正文片段，供主代理审阅复制；仍不编辑生产课程。输出目录为材料目录下的`fm04-drafts/`：

- `paired-tests.en.md`
- `paired-tests.zh.md`

从本稿第5节整合，移除作者研究内务，无frontmatter。固定二级锚点为`meaning`、`conditions`、`example`、`practice`、`retry`、`later-review`、`next-step`。公开示范保持完整展开，使用`worked-example`；独立题、条件判断、新重试、稍后任务分别使用`lesson-check`，锚点为`task-a`、`task-b`、`retry-a`、`later-a`，每题均有分开的默认关闭提示和解答。五个英文`**Question:**`单行题干在两语中逐字相同，中文只译概念、提示和解释；40个按顺序提取的TeX片段完全相同。所需t临界值直接给在题干，避免依赖尚未验证的计算器流程。

回补链接已定位到现有双语单均值检验`#unknown-normal`、估计`#estimates`、线性组合`#covariance`及独立均值比较`#conditions`。导出只继承本作者的内容自核；主代理审阅、课程整合、Jekyll与实际页面阅读、学生试用仍需分别完成。没有把片段当作已发布或验收课程。
