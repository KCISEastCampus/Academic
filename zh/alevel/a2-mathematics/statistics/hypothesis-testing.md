---
title: "假设检验：结果够不够反常？"
layout: subjects
mathjax: true
grade: a2
subject: s2
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/hypothesis-testing/
permalink: /zh/alevel/a2-mathematics/statistics/hypothesis-testing/
reading_layout: true
study_page: true
toc_headings: "#evidence, #hypotheses, #decision, #discrete-choice, #practice, #retry, #later-review, #next-step"
---

[A2 统计课程](/zh/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

一台机器以前大约每五件退回一件，今天退回得更多。是机器变了，还是碰巧抽到较多不合格品？假设检验先问：**假如原先的参数说法仍然成立，看到这样的数据有多反常？** 它帮助判断证据，不替任何一种说法作绝对证明。

先学[估计](/zh/alevel/a2-mathematics/statistics/estimation/)，需要随机独立样本、[二项模型](/zh/alevel/as-mathematics/binomial/#l21-concept)与[泊松概率](/zh/alevel/a2-mathematics/statistics/poisson-distribution/)。示范改编自 January 2025 MA04；其余题为自拟教学情境，不是实测资料，不附官方分值。先在纸上作答，再打开提示。

## 先假定说法成立，再看数据 {#evidence}

公平硬币也可能连续出现很多次正面，所以“小概率”不等于“不可能”。我们在看数据之前定好规则：如果结果太反常，就拒绝“硬币公平”的说法。这有一点像反证，但这里的反常不是逻辑矛盾：检验可能判断错。

**原假设** H0 给总体参数一个指定值；**备择假设** H1 写出我们正在寻找的变化。总体参数固定但未知，抽到的样本结果会变。不要把假设写成“这次样本数等于多少”。

## 哪个方向支持所调查的变化？ {#hypotheses}

例如总体不合格比例记为 p，原先的说法是0.2。先根据调查问题选方向，**不能看到样本偏哪边才改方向**。一个检验只选以下一个 H1：

$$\begin{aligned}
H_0&:p=0.2.\\
H_1&:p>0.2\quad\text{(upper tail)},\\
H_1&:p<0.2\quad\text{(lower tail)},\\
H_1&:p\ne0.2\quad\text{(two tails)}.
\end{aligned}$$

“增加”找较大的计数，“减少”找较小的计数，“改变”则两边都找。泊松模型的参数是指定区间内的总体平均次数 λ，不是比例；选方向的道理相同。

## 怎样规定“足够反常”？ {#decision}

**检验统计量**（test statistic）是从样本算出、用来判断的量，本课可以直接用“成功次数”。这次观察值只是一个数；**H0 下的分布**则说明，若 H0 成立，各种可能结果有多大概率。

**临界域**（critical region）是会导致拒绝 H0 的全部统计量取值。**临界值**（critical value）给出边界。其余可能取值构成**接受域**（acceptance region），更稳妥地叫“不拒绝域”。“接受域”只是传统名称，落在里面不代表 H0 已被证明。

**显著性水平** α 在看数据前给定：如果 H0 真的成立，仍把它拒绝的机会应不超过 α。5% **不是**“H0 只有5%机会正确”，也不是“H1有95%机会正确”。计数只能一个整数一个整数地改变，临界域的概率常常凑不齐5%；这个概率叫**实际显著性水平**，常低于名义水平。

**p 值**是在 H0 下，出现“至少像这次这么反常”的结果的概率；方向由 H1 决定。下尾要包括观察次数及更小次数，上尾要包括它及更大次数。通常不能只算“恰好这一次数”的概率。按与检验规则一致的定义，p 不超过 α 时拒绝 H0。

离散双尾检验对“同样反常”有不止一种定义。本课用**等尾分配规则**：每边最多分到 α/2，在各自预算内尽量扩大拒绝域。两边实际概率未必相等。相应 p 值可取“两倍较小的含观察值尾概率”，超过1则取1；离散性会使规则偏保守。题目指定规则时遵从题目，不能不说明规则就宣称只有一个正确临界域。

## 先看次数是怎样产生的 {#discrete-choice}

**精确二项概率**适用于固定次数的独立试验，每次两个结果，成功概率相同。**精确泊松概率**适用于固定区间内独立、一个个发生的事件，平均发生速度恒定。只看见“次数”还不能选模型。在 H0 下代入假定的参数，不是样本比例或这次看到的次数。

$$X\sim\operatorname{B}(n,p_0):$$

$$\begin{aligned}
P(X=k)&={n\choose k}p_0^k\\
&\quad\times(1-p_0)^{n-k}.
\end{aligned}$$

$$W\sim\operatorname{Po}(\lambda_0):$$

$$P(W=k)=\frac{e^{-\lambda_0}\lambda_0^k}{k!}.$$

第一行 k 从0到 n，第二行取非负整数。累积概率就是把对应项相加。上尾从 c 开始时，从1扣掉一直到 c−1 的累积概率，不能把 c 也扣掉。各题给足必要表值，不假设你会某台计算器的菜单。

<div class="worked-example" markdown="1">

### 完整示范：两边都可能反常 {#binomial-example}

**Question:** In 50 independent trials with the same success probability p, X counts successes. Test H0: p = 0.2 against H1: p ≠ 0.2 at the 10% level, using equal-tail allocation. Find and justify a critical region, its actual significance level, and the decision when X = 17.

改编并扩展自 MA04 January 2025 Q1(b)，不是原题全文。固定独立试验给出精确模型。10%分成每边5%，边界要找至“再包括一个整数就超预算”为止。

$$X\sim\operatorname{B}(50,0.2)\quad\text{under }H_0.$$

| 事件 | H0 下概率 |
| --- | --- |
| $X\le5$ | 0.0480272 |
| $X\le6$ | 0.1033982 |
| $X\ge15$ | 0.0607221 |
| $X\ge16$ | 0.0308034 |

左边可以包括5，却不能包括6；右边可以从16开始，却不能从15开始。

$$\begin{aligned}
\text{CR}&=\{0,\ldots,5\}\\
&\quad\cup\{16,\ldots,50\},\\
P_{H_0}(\text{CR})&=0.0480272+0.0308034\\
&=0.0788306.
\end{aligned}$$

按这里包含端点的不等式，临界值是5和16，接受域是6–15的整数。实际水平约7.88%，没有超过名义10%。即使把15加入右尾后总概率仍低于10%，也会违背每尾最多5%的规则。17落在临界域，所以拒绝 H0：有充分证据认为总体成功概率与0.2不同。结论是“有证据”，不是“绝对确定”。

</div>

<div class="worked-example" markdown="1">

### 完整示范：次数偏少，够反常吗？ {#poisson-example}

**Question:** W has a Poisson distribution with mean λ for one observation period. Test H0: λ = 4 against H1: λ < 4 at the 5% level. Find and justify a critical region. Make a decision when W = 1, and find the one-sided p-value.

改编并扩展自 MA04 January 2025 Q1(d)。H0 下用 Po(4)，H1 说均值减少，所以找小次数。从0开始，再检查能否把1也包括进去。

$$\begin{aligned}
P(W=0)&=e^{-4}=0.0183156,\\
P(W\le1)&=e^{-4}(1+4)\\
&=0.0915782.
\end{aligned}$$

只有 {0} 的概率不超过0.05，所以临界域为 {0}，实际水平约1.83%，临界值0，不拒绝域为所有正整数。观察值1不在临界域。它的 p 值要包括0和1，是0.0915782，大于0.05。因此**不拒绝 H0**：没有充分证据说明每段时间的平均次数下降，这不等于证明均值一定是4。

</div>

## 判断错了，错在哪里？ {#errors}

**I 类错误**是 H0 本来正确却被拒绝，相当于误报。**II 类错误**是 H0 本来错误却未被拒绝，相当于漏掉变化。在泊松示范中，I 类是实际均值仍为4，却判断有下降证据；II 类是实际均值已小于4，却没有检出下降。现实中不知道真实均值，所以不能只凭一次决定就断言发生了哪类错误。

样本方案不变、比较同一个真实备择值时，缩小拒绝域能减少误报，却可能增加漏检。显著性水平控制 H0 下的 I 类风险，不是 II 类风险。S2.6 要理解 II 类错误，不要求计算其概率。

## 收起示范，自己判断 {#practice}

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-language}

**Question:** A supplier claims that 30% of its seeds germinate. A researcher asks whether the proportion has changed. Before collecting data, state a parameter, H0, H1 and the tail choice. A sample later gives 34%. Explain why this does not justify switching to an upper-tail test, and why a non-significant result would not prove the supplier correct.

<details markdown="1"><summary>提示</summary>

分清总体和样本。

</details>

<details markdown="1"><summary>解答与回补</summary>

令 p 为总体发芽比例。

$$H_0:p=0.30,\qquad H_1:p\ne0.30.$$

问题是“改变”，用双尾。看到34%才选方向，会改变原先的误报控制。不拒绝是变化证据不足，不是证明 p = 0.30。把样本写进假设，回看[参数](#evidence)；方向错回看[假设](#hypotheses)，再做[新调查](#retry-language)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-regions}

**Question:** A count test rejects H0 for X ≥ 8; all non-negative integer counts are possible. Its nominal level is 5%, and P(X ≥ 8 | H0) = 0.041. For observed X = 7, P(X ≥ 7 | H0) = 0.083 and P(X = 7 | H0) = 0.042. Identify the statistic, critical value, critical region, acceptance region, actual level, upper-tail p-value and decision. Explain why 0.042 is not the p-value.

<details markdown="1"><summary>提示</summary>

别漏掉比观察值更极端的数值。

</details>

<details markdown="1"><summary>解答与回补</summary>

统计量 X，观察值7。临界值8，临界域 X ≥ 8，接受域为0–7的整数。实际水平4.1%，p = 0.083，所以5%水平不拒绝。0.042只算恰好7。回看[决策含义](#decision)，再做[新规则题](#retry-regions)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-binomial}

**Question:** Twenty independent items each have the same unknown fault probability p. Investigate whether p differs from 0.25 at the 10% level, using equal-tail allocation. State hypotheses, select a null model, justify both critical boundaries and their adjacent excluded values, give the actual level, and conclude when 9 faults are found. Also find the doubled-tail p-value for this observation. Under the null model, P(X ≤ 1) = 0.0243126, P(X ≤ 2) = 0.0912604, P(X ≥ 9) = 0.0409252, P(X ≥ 8) = 0.1018119.

<details markdown="1"><summary>提示</summary>

固定了什么？每尾分到多少概率？

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:p=0.25,\\
H_1&:p\ne0.25,\\
X&\sim\operatorname{B}(20,0.25)\quad(H_0).
\end{aligned}$$

符合二项条件。每尾0.05：左边包括到1，不能包括2；右边从9开始，不能包括8。

$$\begin{aligned}
P_{H_0}(\text{CR})&=0.0243126+0.0409252\\
&=0.0652378.
\end{aligned}$$

观察9时，较小的含观察值尾概率为 P(X ≥ 9) = 0.0409252，双尾 p 值为0.0818504，小于0.10，与临界域判定一致。9在临界域内，拒绝：10%水平有充分证据认为总体不合格概率与0.25不同。分尾错或漏邻值，回看[双尾示范](#binomial-example)，再做[新计数题](#retry-binomial)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-poisson}

**Question:** Calls arrive independently, singly and at a constant mean rate r per hour. Investigate an increase from r = 2.5 using a single 2-hour observation, at 5%. State hypotheses and a null model, find and justify the critical region, give its actual level and conclude for 9 calls. Relevant null upper-tail probabilities at counts 8, 9, 10 are 0.1333717, 0.0680936, 0.0318281 respectively.

<details markdown="1"><summary>提示</summary>

先定义计数区间。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:r=2.5,\\
H_1&:r>2.5,\\
X&\sim\operatorname{Po}(5)\quad(H_0).
\end{aligned}$$

条件支持泊松模型，两小时均值5。临界域 X ≥ 10：0.0318281不超过0.05，若包括9就变成0.0680936，超预算。实际水平约3.18%。观察9时 p = 0.0680936，不拒绝：没有充分证据说明每小时平均来电数增加。均值错回看[模型](#discrete-choice)，边界错回看[泊松示范](#poisson-example)，再做[新题](#retry-poisson)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-errors}

**Question:** A quality test has H0: p = 0.10 and H1: p > 0.10, where p is the population fault probability. Explain Type I and Type II errors in context. The test does not reject H0. A manager says, “There has definitely been no deterioration, and no error is possible.” Assess the statement.

<details markdown="1"><summary>提示</summary>

每类错误都写真实状态与决定。

</details>

<details markdown="1"><summary>解答与回补</summary>

I 类：实际 p = 0.10，却拒绝，误报质量下降。II 类：实际 p > 0.10，却不拒绝，漏掉质量下降。经理说法错误：不拒绝可能是 II 类，不能证明质量没变差；只凭决定也不能确定发生了错误。回看[错误类型](#errors)，再做[新情境](#retry-errors)。

</details>

</section>

## 回补后，换新任务 {#retry}

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-language}

**Question:** A clinic investigates whether the population probability p of a missed appointment has fallen below 0.12. Write hypotheses and choose the tail before seeing data. The sample later shows a higher rate. Should the direction change? What does non-rejection mean?

<details markdown="1"><summary>提示</summary>

回到原先调查的问题。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$H_0:p=0.12,\qquad H_1:p<0.12.$$

用下尾，不可见到数据后改方向。不拒绝说明下降证据不足，不是证明等于0.12。回看[假设](#hypotheses)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-regions}

**Question:** W can be any non-negative integer. At 5%, a test rejects when W ≤ 1. Under H0, P(W ≤ 1) = 0.017 and P(W ≤ 2) = 0.062. The observed value is 2. Give both regions, the critical value, actual level, lower-tail p-value and decision. Explain why 2 cannot be added to the critical region.

<details markdown="1"><summary>提示</summary>

检查概率预算。

</details>

<details markdown="1"><summary>解答与回补</summary>

临界域 {0,1}，接受域 {2,3,…}，临界值1，实际水平1.7%。观察2的 p = 0.062，不拒绝。加入2后误拒概率6.2%，超过5%。回看[决策规则](#decision)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-binomial}

**Question:** Ten independent trials have the same success probability p. Investigate whether p differs from 0.5 at 10%, using equal-tail allocation. State hypotheses and a null model, justify both boundaries with adjacent probabilities, find the actual level and doubled-tail p-value, and conclude for 8 successes. Under H0, P(X ≤ 1) = P(X ≥ 9) = 0.0107421875 and P(X ≤ 2) = P(X ≥ 8) = 0.0546875. Explain why the actual tails can be equal here but were unequal in the earlier 20-item investigation.

<details markdown="1"><summary>提示</summary>

可以利用这个 H0 分布的对称性，但仍要核对两边预算。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:p=0.5,\\
H_1&:p\ne0.5,\\
X&\sim\operatorname{B}(10,0.5)\quad(H_0).
\end{aligned}$$

固定次数、独立且成功概率相同，支持精确二项模型。每尾分到0.05，临界域为 X ≤ 1 或 X ≥ 9；再加入2或8，所在尾概率就超过0.05。实际水平为2 × 0.0107421875 = 0.021484375。观察8时，双尾 p 值为2 × 0.0546875 = 0.109375，大于0.10，不拒绝：没有充分证据认为总体成功概率与0.5不同。p = 0.5 的分布对称，所以实际两尾相等；等额分配预算，并不保证非对称分布的实际两尾相等。回看[分尾规则](#decision)或[边界](#binomial-example)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-poisson}

**Question:** Faults occur independently, singly and at a constant mean rate r per metre of cable. Investigate a decrease from r = 1.5 using a 4-metre section, at 5%. There are 2 faults. State hypotheses and a null model, justify the critical region, find the p-value and conclude. Under H0, P(X ≤ 1) = 0.0173513 and P(X ≤ 2) = 0.0619688.

<details markdown="1"><summary>提示</summary>

把长度与速度的单位配好。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:r=1.5,\\
H_1&:r<1.5,\\
X&\sim\operatorname{Po}(6)\quad(H_0).
\end{aligned}$$

H0 下均值1.5 × 4 = 6。临界域 X ≤ 1，因为0.0173513不超过0.05，而加入2变成0.0619688。观察2的 p = 0.0619688，不拒绝：没有充分证据说明每米平均故障数减少。回看[泊松示范](#poisson-example)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-errors}

**Question:** A test investigates whether the mean number of complaints per day has fallen from 4. Describe a missed improvement and a false claim of improvement using H0, the true situation and the decision. Does a 5% significance level give the probability of a missed improvement?

<details markdown="1"><summary>提示</summary>

什么情况对应 H0 为真？

</details>

<details markdown="1"><summary>解答与回补</summary>

H0 为均值4，H1 为均值小于4。漏掉改善是 II 类：实际小于4却不拒绝。误报改善是 I 类：实际仍为4却拒绝。水平控制 I 类风险，不给出漏检概率。回看[错误](#errors)。

</details>

</section>

## 学过别的主题再回来 {#later-review}

<section class="lesson-check" markdown="1">

### 自己试一试 {#review-decision}

**Question:** A report states: “We chose H1: λ > 3 after observing a high count. The probability of exactly our observed count was 0.03, so the 5% test proves the mean has increased.” Identify three flaws and the information needed for a valid test. If a valid upper-tail p-value were 0.07, give the conclusion.

<details markdown="1"><summary>提示</summary>

检查时机、概率事件及结论。

</details>

<details markdown="1"><summary>解答与回补</summary>

方向应事先决定；尾概率要包括所有至少同样极端的次数；拒绝只给证据，不是证明。还需明确区间、恒定速率且独立单个事件的泊松条件、H0: λ = 3、事先规定的 H1 与水平，以及观察次数。若 p = 0.07，不拒绝：没有充分证据说明指定区间内平均次数超过3。回补到[方向](#hypotheses)、[p 值](#decision)或[模型](#discrete-choice)，再不看帮助重做相应新题。

</details>

</section>

## 下一步：检验平均数 {#next-step}

继续学[均值检验](/zh/alevel/a2-mathematics/statistics/mean-tests/)，用抽样平均数本身的波动，判断它偏离得够不够远。

<details markdown="1"><summary>来源与范围</summary>

OxfordAQA Mathematics 9660 v5.2，S2.6，印刷第27页（PDF第26页）：[资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)与[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。本页覆盖检验语言、错误和精确二项/泊松检验，均值检验在下一课。示范改编并扩展 Q1(b)、Q1(d)：[January 2025 QP 第2–4页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=2)，[配套 MS 第4–5页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=4)。其他题自拟。数值核验不代表计算器按键或学习效果已验证。

</details>

{% include exam_topic_practice.html %}
