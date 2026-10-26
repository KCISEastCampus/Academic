# FM04 estimation and confidence intervals: source research and bilingual authoring pack

Date: 2026-10-26. Scope: OxfordAQA 9665 v5.2, FS2.2–FS2.3 only. Local research handoff; no course-page edits, Git mutations, network writes or publication. This is author research, not independent content approval.

## Design cards — written before the detailed study and calculations

### Lesson 1: What makes an estimator useful?

- Central question: how can a rule based on a random sample estimate a fixed population parameter, and how do we justify choosing between rules?
- Observable outcomes: distinguish parameter/statistic/estimator/estimate/sampling distribution; calculate bias; establish consistency with a valid sufficient argument; define the direction of relative efficiency; correct and compare combined estimators, stating the candidate class.
- Prerequisites: expectation, variance, independence, squared coefficients in a linear combination, elementary sums and limits. Recover through AS Further linear combinations; explain the new sampling vocabulary explicitly.
- Core model and conditions: independent identically distributed observations with fixed finite mean and variance; distinguish disjoint samples from statistics sharing observations. Consistency means convergence in probability, not merely a small variance.
- Representation: a two-observation enumeration to connect repeated samples to a sampling distribution; coefficients and variance calculations explain what weighting changes. No decorative simulation or empirical-data claim.
- Teaching sequence: concrete sample rule and observed value → expectation and bias → complete comparison example → consistency → independent choice, correction and dependence tasks.
- Evidence: four independent tasks, one targeted retry and one later mixed task; answers state conditions and comparisons rather than numerical results alone. Source identities and exact task content will be added below after reading.

### Lesson 2: How much uncertainty should accompany a mean estimate?

- Central question: which interval procedure is justified by the population and sample information, and what does its width let us infer?
- Observable outcomes: select and justify all three FS2.3 mean-interval cases; calculate and interpret a symmetric interval; distinguish a mean interval from individual observations; invert an interval for an unknown centre; plan an integer sample size using full versus half width.
- Prerequisites: sample mean, variance estimate with denominator n−1, standard deviation versus standard error, normal probabilities and algebraic inequalities. Lesson 1 establishes the random-estimator/fixed-parameter distinction.
- Core model and conditions: normal known variance (exact z), independent large sample with finite variance (approximate z, known variance or consistent variance estimate), normal small sample with unknown variance (exact Student t with n−1 degrees of freedom).
- Representation: a compact decision comparison and repeated-sampling explanation; all illustrative data are self-written. Every numerical critical value is supplied in the task, with its probability convention.
- Teaching sequence: what varies in repeated sampling → derive the interval from a standardised statistic → complete t example → choose among contrasting data situations → interpret, invert and plan.
- Evidence: five independent tasks with separate hints and solutions, a targeted new retry and a later mixed task. Keep essential conditions visible, answers closed when integrated into course pages.

Design basis: [AGENTS](../../AGENTS.md), [course-content-standard v1.1](course-content-standard.md), [official scope research](research-fm04-scope-route-2026-10-26.md), and the accepted [MGF sample](../../alevel/a2-further-mathematics/statistics/moment-generating-functions.md). Detailed source reading and author calculations follow; independent review and student trials remain separate.

## Source ledger and decisions for the integrating author

All questions below are **self-written / 自拟题**, with constructed data and author checking criteria, not official questions or official marks. English question blocks and mathematical blocks are canonical: copy them unchanged into both language versions; choose the corresponding EN or 中文 explanation. This avoids two subtly different versions of a task. Lesson headings in this report identify authoring material; retain neutral task headings on student pages.

### Exactly what was read

| Source | Actual reading in this research turn | Use and boundary |
| --- | --- | --- |
| OxfordAQA 9665 specification v5.2 | Local `D:/Downloads/oxfordaqa-a-level-further-mathematics-specification.pdf`, PDF21, printed22: FS2.2 and FS2.3 text, version header; adjacent PDF22/printed23 read only to establish the FS2.4 boundary | Confirms estimator properties, pooled-estimator moments, three mean-CI cases, inclusion of a hypothesised mean, sample-size planning, and symmetric intervals. Online PDF open failed; no new live qualification-page verification is claimed. |
| January 2025 QP/MS | Local `fm04-jan2025-qp.pdf` (24 pages), cover and Q4 printed/PDF8–9, Q6 printed/PDF12–13; corresponding MS (18 pages), cover, Q4 p10 and Q6 pp13–14. Relevant supplied `.txt` sections also read. QP12 and MS13 additionally rendered and visually read. | Cover confirms 9665/FM04, FS2, 16 January 2025; MS Version1.0 Final. Q4: infer n from a rounded t-interval width, then construct and interpret. Q6: bias → correction → variance/consistency → realised estimate. No full-paper review claimed. |
| June 2025 QP/MS | Supplied `fm04-june2025-qp.txt`: cover, Q4 pp8–9, Q8 pp16–17; `fm04-june2025-ms.txt`: cover, Q4 p8, Q8 p13 | Cover identifies 4 June 2025, 9665/FM04; MS Version1.0 Final. Q4: unknown variance, n=4, t width, invert interval inclusion. Q8: relative efficiency, weighted sum with squared integer weights, rescaling to unbiasedness. Text-only reading; no June PDF visual verification. |
| User's scanned OUP textbook | `D:/ProgramData/wx_files/xwechat_files/wxid_zi5zliwbv1qz22_ef80/msg/file/2026-10/IAQA_Further_Math___Statistics(1).pdf`, verified 506 pages. Visually read printed384–386 (PDF388–390, existing rendered images); printed388–390 (PDF392–394); printed398 (PDF402); printed401–402 (PDF405–406); printed404–405 (PDF408–409); printed407 (PDF411). | Ch30 vocabulary, variance correction, pooling, consistency and efficiency; Ch31 interpretation, z approximation, t interval and width inversion. Only these pages read. PDF text extraction was empty; later selected pages rendered in memory, with no additional output files. Some initial oversized PNG renders were unreadable and are not counted. |

Local paired paper files are under `C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/`; filenames are `fm04-{jan2025,june2025}-{qp,ms}.txt`, and January also `.pdf`. Original paper links and textbook bibliographic identity are recorded in [the existing source note](research-fm04-textbook-papers-2026-10-26.md). The title/authors/ISBN there are inherited provenance, not a new cover/copyright-page inspection here. The [official specification link](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) is retained for traceability; this turn used the local PDF body.

### Source calculations independently reconstructed by this author

- Jan Q6: E(X)=nm/2, so k=2/n; independence gives Var(kX)=m²/(3n). Already-unbiased kX therefore converges in probability to m. The data sum to 13.5, giving estimate 5.4 minutes. The sequence matters: the variance limit is sufficient here because the target expectation was established first.
- Jan Q4: s=12.3; n can only be 6,7,8,9. Using the displayed critical values 2.571,2.447,2.365,2.306 gives full widths 25.8203,22.7520,20.5694,18.9092 respectively. Only n=8 rounds to 20.6 at 3 s.f. The corresponding rounded interval is [45.4,66.0]; 40 is excluded. These critical values are from this MS calculation, not a newly inspected statistical table. Since the t quantile depends on n, do not insert a fixed z to invert this question.
- June Q4: s²=0.0075/3=0.0025, SE=0.025, df=3, supplied MS t critical value 2.353. Full width=0.11765, hence 0.118 at 3 s.f. The minimum centre that includes 2.7 is 2.7−0.058825=2.641175, hence 2.64. Retain unrounded half width until final rounding.
- June Q8: read the extracted variance of A in conjunction with the paired MS as **6σ²**, not σ²/6. With efficiency of B relative to A defined as Var(A)/Var(B), 6/c=10 gives c=0.6. For Y=Σi²Xᵢ, E(Y)=μn(n+1)(2n+1)/6 and k=6/[n(n+1)(2n+1)]. The bias conclusion applies for n≥2; at n=1 the rule reduces to X₁ and is unbiased. Showing bias means showing the expectation and why it is not identically μ as a function of the parameter; equality at μ=0 alone does not make a rule unbiased. The MS's method comment permits either ratio direction at a method stage; its final answer and textbook convention establish the direction used here. Do not teach two reciprocal final values as interchangeable.

### Corrections and limits to preserve

Textbook printed389 describes consistency through variance tending to zero. Used as a general definition this is insufficient: a rule can concentrate on the wrong value. Teach convergence in probability, then the sufficient criterion bias→0 and variance→0. Jan Q6 is compatible with that criterion. Textbook printed404 describes s as an unbiased estimate of σ; the precise general fact is **S² is unbiased for σ²**, whereas S need not be unbiased for σ. The t pivot remains correct. Textbook printed407 inverts an already observed rounded interval and obtains an approximate historical sample size; planning a future interval **no wider than** a target instead requires an inequality and upward rounding.

The June logarithmic-price example estimates the mean of the logarithm. It does not by itself justify exponentiating the interval to estimate the arithmetic mean price. This pack uses directly measured quantities and does not introduce that extra transformation.

### Outcome-to-evidence map

| Outcome | Explanation/example below | Independent evidence and recovery |
| --- | --- | --- |
| FS2.2 vocabulary and sampling distribution | L1 “A rule before data”; finite two-draw enumeration | L1 A distinguishes estimator from estimate; later task asks both. Recover by re-enumerating possible samples. |
| Bias, correction, consistency | L1 “Target and spread”; worked comparison; probability definition | L1 A and C; retry repairs coefficient squaring and target/limit reasoning. |
| Relative efficiency and combined moments | L1 worked comparison, weighted combination and shared-data caution | L1 B and D, later task; state numerator and candidate class. |
| FS2.3 all three cases and variance estimation | L2 interval derivation, model comparison, complete t example | L2 A and B; retry1 checks n−1, SE, t tail and width. |
| Interpretation and inclusion inversion | L2 coverage explanation and inclusion algebra | L2 B, C and E; distinguish fixed mean from individual readings. |
| Planning sample size/full versus half width | L2 width algebra | L2 D, retry2; check the preceding integer. |
| Retention and transfer | Separate later tasks with neutral wording | L1 later pools samples; L2 later combines summaries then chooses interval. No method hint in their headings. |

## Lesson 1 draft — What makes an estimator useful?

### A rule before data, a number after data

**EN:** The population mean μ is a fixed feature of the population, even when we do not know it. A random sample X₁,…,Xₙ has not yet produced its values. A statistic is a rule calculated from that sample and known quantities, with no unknown parameter needed as an input. When we use such a rule to estimate μ, it is an estimator. Once the data arrive, the calculated number is an estimate.

**中文：** 总体均值 μ 是总体的固定特征；“不知道”不表示它随本次抽样改变。抽样前，X₁,…,Xₙ 的数值尚未出现。统计量（statistic）是只用样本和已知量就能计算的规则，不需要把未知参数当作输入。用这个规则估计 μ 时，它叫估计量（estimator）；代入某次数据所得的数，才是估计值（estimate）。

$$
\bar X=\frac1n\sum_{i=1}^nX_i,
\qquad
\bar x=\frac1n\sum_{i=1}^nx_i.
$$

**EN:** With observed values 2,4,6,8, the estimator is still the rule X̄; its observed estimate is 5. X̄−μ is a random variable useful in theory, but it is not a statistic when μ is unknown: the sample alone cannot calculate it. A sampling distribution describes how a statistic varies over repeated samples of the same size from the same population.

**中文：** 观察到 2,4,6,8 后，估计量仍是规则 X̄，这次的估计值是 5。如果 μ 未知，X̄−μ 虽然是研究中有用的随机变量，却不是统计量，因为仅凭样本不能算出它。抽样分布（sampling distribution）描述的是：从同一总体反复抽取同样大小的样本时，统计量怎样变化。

**EN:** To see that distribution rather than just name it, take two independent Bernoulli observations with success probability 1/4. Each is 0 or 1. The sample mean can take three values. The middle value comes from two different ordered samples.

**中文：** 看一个能完整列出的例子：独立抽取两个成功概率为 1/4 的 Bernoulli 观察值，每个值是 0 或 1。样本均值有三种可能；中间的均值对应两种不同的有序样本。

| Sample | Sample mean | Probability |
| --- | --- | --- |
| (0,0) | 0 | 9/16 |
| (0,1) or (1,0) | 1/2 | 6/16 |
| (1,1) | 1 | 1/16 |

$$
E(\bar X)=0+\frac12\frac6{16}+\frac1{16}=\frac14,
\qquad
\operatorname{Var}(\bar X)=\left(\frac14\frac6{16}+\frac1{16}\right)-\left(\frac14\right)^2=\frac3{32}.
$$

**EN:** This distribution is about sample means, not the distribution of individual observations. For an iid sample with finite mean μ and variance σ², linearity of expectation and independence give E(X̄)=μ and Var(X̄)=σ²/n. Normality is unnecessary for these two moment statements.

**中文：** 这张表描述样本均值，不是单个观察值。一般地，若样本独立同分布（iid），均值为 μ、有限方差为 σ²，则 E(X̄)=μ，Var(X̄)=σ²/n；第一条用期望的线性，第二条还用独立性。这两个矩的结论不要求总体正态。

### Target and spread answer different questions

**EN:** Bias compares the average of a rule over repeated sampling with the target parameter. Unbiased does not mean every estimate is correct, or even that this particular estimate is close.

**中文：** 偏差（bias）比较的是规则在反复抽样中的平均结果与目标参数。无偏（unbiased）不表示每一次估计都正确，也不保证眼前这次估计很接近真值。

$$
\operatorname{Bias}_\theta(T)=E_\theta(T)-\theta.
\qquad
T\text{ is unbiased for }\theta\text{ if }E_\theta(T)=\theta\text{ for every admissible }\theta.
$$

**EN:** To compare unbiased estimators of the same parameter, smaller variance means less sampling spread. Define the direction before calculating relative efficiency. Here A relative to B has B's variance in the numerator. A value above 1 favours A. Require positive finite variances for this ratio.

**中文：** 比较同一参数的无偏估计量时，方差较小表示反复抽样的结果更集中。相对效率（relative efficiency）先写方向再计算：本课“A 相对于 B”的分子是 B 的方差；比值大于 1 表示 A 更有效率。比值要求两个方差正且有限。

$$
\operatorname{Eff}(A\text{ relative to }B)
=\frac{1/\operatorname{Var}(A)}{1/\operatorname{Var}(B)}
=\frac{\operatorname{Var}(B)}{\operatorname{Var}(A)}.
$$

**EN:** Call a rule “lowest variance among these unbiased candidates” only after specifying the candidates. Comparing two rules does not establish that one is best among every possible estimator. Variance alone also cannot rank a biased rule against an unbiased one without another criterion.

**中文：** 先说明候选范围，再说“这些无偏候选中方差最小”。只比较两个规则，不能宣布其中一个优于所有可能的估计量。若一个规则有偏、另一个无偏，只比较方差也不足以作全面判断。

### Complete worked example: repair first, then compare

**Question — self-written:** Let X₁,X₂,X₃,X₄ be independent observations from a population with unknown mean μ and finite variance σ²>0. Define A=(X₁+X₂+X₃+X₄)/4 and C=(X₁+X₂+2X₃+2X₄)/4. Find a constant k such that B=kC is unbiased for μ. Compare A and B using their variances and the efficiency of A relative to B. For observed values 2,4,6,8, find both estimates.

**EN:** Both rules target μ, so first check their expectations. C has total coefficient 6/4, not 1. Rescale its entire expression before comparing variances.

**中文：** 两个规则都要估计 μ，因此先检查期望。C 的系数和是 6/4，而不是 1；先修正整个表达式，再比较方差。

$$
\begin{aligned}
E(A)&=\frac{4\mu}{4}=\mu,\\
E(C)&=\frac{6\mu}{4}=\frac32\mu,\\
E(kC)&=\frac32k\mu=\mu\quad\text{for every }\mu
\quad\Longrightarrow\quad k=\frac23,\\
B&=\frac{X_1+X_2+2X_3+2X_4}{6}.
\end{aligned}
$$

**EN:** Independence removes covariance terms. Each coefficient is squared in a variance; the denominator is squared too.

**中文：** 独立性使协方差项为零。计算方差时，每个系数都要平方，分母也要平方。

$$
\begin{aligned}
\operatorname{Var}(A)&=\frac{1+1+1+1}{16}\sigma^2=\frac14\sigma^2,\\
\operatorname{Var}(B)&=\frac{1+1+4+4}{36}\sigma^2=\frac5{18}\sigma^2,\\
\operatorname{Var}(B)-\operatorname{Var}(A)&=\frac1{36}\sigma^2>0,\\
\operatorname{Eff}(A\text{ relative to }B)&=\frac{5/18}{1/4}=\frac{10}{9},\\
a&=5,\qquad b=\frac{2+4+12+16}{6}=\frac{17}{3}.
\end{aligned}
$$

**EN:** A has the smaller variance among these two unbiased candidates. We do not know μ, so the observed estimates do not tell us which happened to be closer this time. The efficiency ratio agrees with the direct variance comparison.

**中文：** 在这两个无偏候选中，A 的方差较小。但 μ 未知，不能根据 5 和 17/3 判断这一次谁更接近真值；相对效率的方向与直接比较方差一致，是一个检查。

### Consistency asks what happens as the sample grows

**EN:** Consistency is a property of a sequence of rules Tₙ, not a label attached to one observed number. For every fixed allowable θ and every ε>0, the probability of an error exceeding ε must tend to zero.

**中文：** 一致性（consistency）讨论随样本量增长的一列规则 Tₙ，不是评价某一个已经算出的数。对每个固定的合法参数 θ、每个 ε>0，误差超过 ε 的概率都必须趋于零。

$$
T_n\xrightarrow{P}\theta
\quad\Longleftrightarrow\quad
P_\theta(\lvert T_n-\theta\rvert>\varepsilon)\longrightarrow0.
$$

**EN:** A useful sufficient route is bias→0 and variance→0. The following inequality shows why: the expected squared error controls the chance of a large error. This is a justification, not an additional memorisation task.

**中文：** 常用的充分论证是“偏差趋零，方差也趋零”。下面的不等式说明原因：平均平方误差能控制出现大误差的概率。它用于说明逻辑，不额外要求背诵证明。

$$
P_\theta(\lvert T_n-\theta\rvert>\varepsilon)
\leq\frac{E_\theta[(T_n-\theta)^2]}{\varepsilon^2}
=\frac{\operatorname{Var}_\theta(T_n)+[E_\theta(T_n)-\theta]^2}{\varepsilon^2}.
$$

**EN:** For X̄, the bias is zero and σ²/n→0, so X̄ is consistent for μ. In contrast, X̄+1 has the same shrinking variance but concentrates on μ+1. It is not consistent for μ. An estimator may be biased at each finite n and still be consistent if its bias disappears.

**中文：** X̄ 的偏差为零，σ²/n→0，所以它对 μ 一致。X̄+1 虽然有同样趋零的方差，却越来越集中在 μ+1 附近，因此对 μ 不一致。反过来，有限样本时有偏的规则，如果偏差最终消失，仍可能一致。

### Combine information without pretending it is independent

**EN:** Suppose U and V are independent unbiased estimators of the same mean, with variances vᵤ and vᵥ. A weighted combination stays unbiased when its coefficients add to 1. Independence is needed for the simple variance formula, not for the expectation formula.

**中文：** 设 U、V 是同一均值的两个独立无偏估计量，方差为 vᵤ、vᵥ。系数和为 1 的加权组合仍无偏。期望公式不需要独立性，下面简化的方差公式需要。

$$
\begin{aligned}
W&=aU+(1-a)V,\qquad E(W)=\mu,\\
\operatorname{Var}(W)&=a^2v_u+(1-a)^2v_v\\
&=(v_u+v_v)\left(a-\frac{v_v}{v_u+v_v}\right)^2
+\frac{v_uv_v}{v_u+v_v}.
\end{aligned}
$$

**EN:** For positive variances, this family has minimum variance when a=vᵥ/(vᵤ+vᵥ). The more precise rule receives more weight. If U and V are sample means of independent samples from the same population, their variances are σ²/nᵤ and σ²/nᵥ, so their weights become nᵤ/(nᵤ+nᵥ) and nᵥ/(nᵤ+nᵥ). This pooling result concerns means; it is not a licence to average sample variances with the same weights.

**中文：** 方差为正时，这一族在 a=vᵥ/(vᵤ+vᵥ) 时方差最小；越精确的规则得到越大的权重。如果 U、V 来自同一总体的两个独立样本，样本量分别是 nᵤ、nᵥ，则权重正好与样本量成比例。这是在合并均值，不能据此直接用同样的权重合并样本方差。

**EN:** If two statistics share observations, inspect the overlap. In general the variance above also contains 2a(1−a)Cov(U,V). Rewriting the combination in terms of the original independent observations often makes the calculation clearer.

**中文：** 如果两个统计量使用了相同观察值，就要检查重叠；一般的方差还含 2a(1−a)Cov(U,V)。把组合写回原来的独立观察值，往往更容易算对。

### Independent tasks — keep hints and solutions separate and closed on the lesson page

#### Task A

**Question — self-written:** Independent observations U₁,…,Uₙ have mean θ/3 and variance θ²/18, where θ>0. Let R=ΣUᵢ. Show that R is biased for θ unless n=3. Find cₙ such that cₙR is unbiased for θ, and determine whether this sequence is consistent. For the observations 1,2,4, state the estimator and its estimate. Explain why an estimate is not a sampling distribution.

**Hint EN:** Begin with E(R). Once corrected, square cₙ in the variance calculation.

**提示 中文：** 先求 E(R)；修正后算方差时，cₙ 要平方。

**Solution / 解答:**

$$
E(R)=\frac{n\theta}{3},\quad
\operatorname{Bias}_\theta(R)=\left(\frac n3-1\right)\theta,
\quad c_n=\frac3n,\quad
\operatorname{Var}(c_nR)=\frac9{n^2}\frac{n\theta^2}{18}=\frac{\theta^2}{2n}\to0.
$$

**EN:** For θ>0 the bias vanishes exactly when n=3. The corrected estimator is unbiased for every n and has variance tending to zero for fixed θ, hence is consistent. For n=3 it is (3/3)ΣUᵢ, and its estimate is 7. A single calculated number is one realisation; the sampling distribution assigns probabilities to all possible values over repeated samples. Here θ is the target, not the mean θ/3 of one observation.

**中文：** 因为 θ>0，原规则恰在 n=3 时无偏。修正规则对每个 n 都无偏，固定 θ 后方差趋零，所以一致。n=3 时估计量是 (3/3)ΣUᵢ，估计值是 7。一个数只是一次实现；抽样分布要描述反复抽样时所有可能估计值及其概率。目标是 θ，不能误把单次观察的均值 θ/3 当目标。

#### Task B

**Question — self-written:** U and V are means of independent samples of sizes 4 and 12 from the same population, whose mean is μ and variance is σ²>0. Consider Wₐ=aU+(1−a)V for real a. Find its mean and variance and determine the value of a giving the smallest variance within this family. Compare that choice with (U+V)/2 by relative efficiency, stating the direction. If u=10 and v=14, find the chosen estimate.

**Hint EN:** Substitute the variances of the sample means and complete a square in a.

**提示 中文：** 先代入样本均值的方差，再对 a 配方。

**Solution / 解答:**

$$
\begin{aligned}
E(W_a)&=\mu,\\
\operatorname{Var}(W_a)&=\sigma^2\left(\frac{a^2}{4}+\frac{(1-a)^2}{12}\right)
=\sigma^2\left[\frac13\left(a-\frac14\right)^2+\frac1{16}\right].
\end{aligned}
$$

**EN:** Thus a=1/4 and the minimum is σ²/16. The equal-weight rule has variance σ²/12. Efficiency of the chosen rule relative to the equal-weight rule is (1/12)/(1/16)=4/3. The estimate is (1/4)10+(3/4)14=13. The minimum is proved only within the stated family; equal averaging wastes the additional precision in the larger sample.

**中文：** 因此 a=1/4，最小方差为 σ²/16。等权规则的方差是 σ²/12，所以“所选规则相对于等权规则”的效率为 4/3。估计值是 13。这里证明的是给定族内的最小值；等权平均没有充分利用较大样本的精确性。

#### Task C

**Question — self-written:** For iid observations with mean μ and finite variance σ²>0, consider Pₙ=X̄+1/n and Qₙ=X̄+1. Determine the bias of each and whether each is consistent for μ. A student says, “Any unbiased estimator is consistent.” Disprove this using Hₙ=X₁ and the concrete case Xᵢ∼Bernoulli(1/2). Give a probability that does not tend to zero.

**Hint EN:** For Pₙ and Qₙ inspect both target and spread. For Hₙ choose ε=1/4.

**提示 中文：** Pₙ、Qₙ 要同时检查目标位置与离散程度；Hₙ 可取 ε=1/4。

**Solution / 解答:**

$$
\operatorname{Bias}(P_n)=\frac1n,\quad
\operatorname{Bias}(Q_n)=1,\quad
\operatorname{Var}(P_n)=\operatorname{Var}(Q_n)=\frac{\sigma^2}{n}.
$$

**EN:** Pₙ is consistent: bias and variance both tend to zero. Qₙ tends in probability to μ+1, so is not consistent for μ. More explicitly, for n sufficiently large, Chebyshev gives P(|X̄−μ|<1/2)→1; on that event |Qₙ−μ|>1/2. Hₙ is unbiased but ignores all new data. At μ=1/2, P(|Hₙ−1/2|>1/4)=1 for every n. That disproves the claim; unbiasedness alone is a statement about expectation, not improvement with n.

**中文：** Pₙ 的偏差与方差都趋零，因此一致。Qₙ 依概率趋近 μ+1，对 μ 不一致：当 |X̄−μ|<1/2 时，|Qₙ−μ|>1/2，而前一事件的概率趋于 1。Hₙ 虽无偏，却完全不使用后来增加的数据。在给定 Bernoulli 情形中，P(|Hₙ−1/2|>1/4) 对所有 n 都等于 1，已经构成反例。无偏只讨论期望，不保证随着 n 增大而改善。

#### Task D

**Question — self-written:** X₁,X₂,X₃ are independent with mean μ and variance 8. Let U=(X₁+X₂)/2, V=(X₂+X₃)/2 and W=(U+V)/2. A student calculates Var(W)=2 by treating U and V as independent. Find the correct mean and variance of W. Compare W with Z=(X₁+X₂+X₃)/3 as estimators of μ. For observed values 1,2,9, calculate w and z and explain why their difference does not identify the better estimate on this occasion.

**Hint EN:** Rewrite W in terms of X₁,X₂,X₃ before calculating its variance.

**提示 中文：** 先把 W 写回 X₁、X₂、X₃；检查共享的 X₂ 获得了多少权重。

**Solution / 解答:**

$$
W=\frac{X_1+2X_2+X_3}{4},\quad E(W)=\mu,\quad
\operatorname{Var}(W)=\frac{8(1+4+1)}{16}=3;
\qquad E(Z)=\mu,\quad\operatorname{Var}(Z)=\frac83.
$$

**EN:** U and V share X₂, so Cov(U,V)=8/4=2, which gives the missing variance term. Z has smaller variance among these two unbiased candidates. The observed values give w=14/4=3.5 and z=12/3=4. Since μ is unknown, these two numbers cannot determine which is nearer μ this time.

**中文：** U、V 共享 X₂，因此 Cov(U,V)=2，遗漏它就会少算方差。Z 在这两个无偏候选中方差较小。此次 w=3.5，z=4，但 μ 未知，不能根据两个数的大小判断本次谁更接近 μ。

### Targeted retry — close the earlier solutions first

**Question — self-written:** For n≥2 iid observations with mean μ and finite variance σ²>0, define Tₙ=(3X₁+X₂+⋯+Xₙ)/(n+2). Determine whether Tₙ is unbiased and consistent for μ. Compare its variance with that of X̄ for each n≥2. Explain both the squared coefficient and the scope of your comparison.

**Hint EN:** There are n−1 coefficients equal to 1 and one coefficient equal to 3.

**提示 中文：** 系数 1 有 n−1 个，系数 3 有一个；它的方差贡献是 9σ²。

**Solution / 解答:**

$$
E(T_n)=\frac{(3+n-1)\mu}{n+2}=\mu,\quad
\operatorname{Var}(T_n)=\frac{n+8}{(n+2)^2}\sigma^2\longrightarrow0,
$$

$$
\operatorname{Var}(T_n)-\operatorname{Var}(\bar X)
=\frac{4(n-1)\sigma^2}{n(n+2)^2}>0\qquad(n\geq2).
$$

**EN:** Tₙ is unbiased and consistent, but has larger variance than X̄ for every allowed n. The coefficient 3 multiplies X₁, so it becomes 9 in the variance. This comparison concerns these two rules; consistency does not imply the smallest finite-sample variance.

**中文：** Tₙ 无偏且一致，但对每个合法 n，它的方差都大于 X̄。3 乘在同一个 X₁ 上，因此算方差时是 9；一致性不等于有限样本时最有效率。比较范围仍只是这两个规则。

**Feedback routing EN:** Wrong target in A → return to estimator versus population mean. Unsquared weights in B/D → return to the worked variance lines. “Variance→0” alone in C → check where the expectation tends. A ratio contradicting the variance comparison → label its numerator before recalculating. Complete the retry without reopening the old answer.

**反馈路径 中文：** A 目标弄错，回看估计量与单个观察均值的区别；B/D 系数未平方，回看示范的方差步骤；C 只写方差趋零，还要检查期望趋向哪里；效率比与方差比较冲突，先标分子再算。订正后收起旧答案，独立完成重试。

### Later task — use after another topic

**Question — self-written:** Two independent random samples from the same population have sizes 5 and 15 and sample means 8 and 12. The population mean is θ and its finite variance is σ²>0. Construct the mean of all 20 observations as an estimator, find its expectation, variance and realised estimate, and compare its relative efficiency with the equal average of the two sample means. Identify a parameter, an estimator and an estimate in your answer. State what independence allows you to do.

**Hint EN:** Recover the two sample totals before combining them.

**提示 中文：** 先由样本量与样本均值还原两组总和。

**Solution / 解答:**

$$
T=\frac{5\bar X_5+15\bar Y_{15}}{20},\quad E(T)=\theta,
\quad\operatorname{Var}(T)=\frac{25(\sigma^2/5)+225(\sigma^2/15)}{400}=\frac{\sigma^2}{20},
\quad t=\frac{40+180}{20}=11.
$$

**EN:** R=(X̄₅+Ȳ₁₅)/2 is unbiased with Var(R)=σ²/15, so efficiency of T relative to R is (1/15)/(1/20)=4/3. θ is the parameter, T is the estimator, and 11 is its realised estimate. Independence removes covariance from the variance calculation; expectation is linear without it. No claim is made that 11 is definitely closer to θ than the equal-average estimate 10.

**中文：** 等权规则 R=(X̄₅+Ȳ₁₅)/2 也无偏，方差为 σ²/15；T 相对于 R 的效率是 4/3。θ 是参数，T 是估计量，11 是本次估计值。独立性让方差计算不含协方差，期望的线性则不依赖独立性。不能据此保证 11 在这次一定比等权估计值 10 更接近 θ。

**Next EN:** A good point estimator still gives only one number. Next ask how sampling variation determines an interval for μ.

**下一步 中文：** 好的点估计量仍只给出一个数；下一课把抽样波动转化为总体均值的区间。

## Lesson 2 draft — How much uncertainty should accompany a mean estimate?

### The mean stays fixed; the interval varies

**EN:** A sample mean is a point estimate. A confidence interval adds a range produced by a specified repeated-sampling procedure. In this lesson, all intervals estimate one population mean and are symmetric about the sample mean. They do not describe the middle 95% of individual population values.

**中文：** 样本均值是点估计。置信区间（confidence interval）再给出一个范围，但这个范围要来自明确的抽样方法。本课只估计单个总体均值，区间以样本均值为中心对称；它不是“总体中间 95% 的个体数值范围”。

**EN:** A 95% procedure covers the fixed true μ in 95% of repeated samples under its assumptions, or approximately 95% for an approximate method. After one sample has produced a numerical interval, μ is either inside or outside. We do not assign a 95% frequentist probability to that fixed μ lying in this already observed interval. In ordinary reporting, “we are 95% confident that μ lies between…” refers to the procedure's coverage.

**中文：** 在假设成立时，95% 的方法会在反复抽样得到的区间中约有 95% 覆盖固定真值 μ；精确方法的理论覆盖率是 95%，近似方法则是近似覆盖。某次数据产生数值区间后，固定 μ 要么在里面，要么不在里面；不能再把它解释成固定 μ 对这个已得到区间有 95% 的频率概率。日常报告中的“有 95% 的置信度”指向方法的覆盖性质。

### Build the interval from a standardised mean

**EN:** Begin with independent observations from N(μ,σ²), where σ² is known. Then X̄ is exactly normal with variance σ²/n. Its standard deviation, σ/√n, is the standard error (SE) of the mean, not the spread σ of individual observations. Let q satisfy P(Z≤q)=1−α/2 for Z∼N(0,1), where the required confidence is 100(1−α)%.

**中文：** 先考虑从 N(μ,σ²) 独立抽样，且 σ² 已知。X̄ 精确服从方差为 σ²/n 的正态分布。σ/√n 是样本均值的标准误（standard error, SE），不是单个观察值的标准差 σ。若要求 100(1−α)% 置信水平，取 q 使标准正态的 P(Z≤q)=1−α/2；两个尾部各留 α/2。

$$
P\left(-q\leq\frac{\bar X-\mu}{\sigma/\sqrt n}\leq q\right)=1-\alpha
\quad\Longrightarrow\quad
P\left(\bar X-q\frac{\sigma}{\sqrt n}\leq\mu\leq\bar X+q\frac{\sigma}{\sqrt n}\right)=1-\alpha.
$$

**EN:** After observing x̄, calculate h=qσ/√n. The interval is [x̄−h,x̄+h]. Its half width, or margin of error, is h; its full width is 2h. For example, with known σ=8, n=16, x̄=50 and supplied q=1.960 for 95%, SE=2, h=3.92, giving [46.08,53.92] with full width 7.84. Normality makes this exact even though the sample is small.

**中文：** 得到 x̄ 后，计算 h=qσ/√n，区间为 [x̄−h,x̄+h]。半宽（margin of error）是 h，全宽是 2h。例如已知 σ=8、n=16、x̄=50，题给 95% 所用 q=1.960，则 SE=2，半宽 3.92，区间 [46.08,53.92]，全宽 7.84。因为总体正态且方差已知，小样本仍可用这个精确结论。

### Which sampling information justifies which interval?

| Information | Distribution used for the standardised mean | Interval and status |
| --- | --- | --- |
| Independent normal observations, σ² known | Standard normal Z, any sample size | x̄±qσ/√n; exact under the model |
| Independent large iid sample, finite positive variance; normal approximation justified | Approximately standard normal, using CLT | Known σ: x̄±qσ/√n; unknown σ: x̄±qs/√n; approximate |
| Independent normal observations, σ² unknown; especially small n | T=(X̄−μ)/(S/√n)∼tₙ₋₁ | x̄±tₙ₋₁,₁₋α/₂s/√n; exact under normality |

**EN:** “Large” is a justification about the sampling distribution, not a universal magic cutoff. Severe skew, outliers, dependence or infinite variance can defeat a casual normal approximation. The tasks explicitly identify suitable large-sample settings. A small nonnormal sample with unknown variance does not become valid for t merely because σ is unknown. For a normal population with unknown variance, the t result is valid at any n≥2; large-n z is an approximation to it, not a reason t becomes wrong.

**中文：** “大样本”是在论证均值的抽样分布可近似正态，不是一个适用于所有总体的神奇门槛。强偏态、极端值、相依或无限方差都可能使草率近似失效。本课题目会明确给出适用的大样本情形。小样本若总体不正态，不能仅因 σ 未知就改用 t。总体正态且方差未知时，t 结论对任意 n≥2 都成立；大样本的 z 是近似选择，不表示 t 错了。

**EN:** When variance is unknown, use the sample variance with denominator n−1. The subtraction of n x̄² accounts for centring on the estimated mean. Keep variance, standard deviation and standard error distinct.

**中文：** 方差未知时，用分母为 n−1 的样本方差；减去 n x̄² 是因为离差以估计出的样本均值为中心。方差、标准差、均值的标准误是三个不同量。

$$
S^2=\frac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1},
\qquad
s^2=\frac{\sum x_i^2-(\sum x_i)^2/n}{n-1},
\qquad
\widehat{\operatorname{SE}}(\bar X)=\frac{s}{\sqrt n}.
$$

**EN:** For iid data with finite variance, E(S²)=σ². One way to see the correction is E[Σ(Xᵢ−X̄)²]=E[ΣXᵢ²−nX̄²]=n(σ²+μ²)−n(σ²/n+μ²)=(n−1)σ². Taking a square root does not preserve unbiasedness: do not call S an unbiased estimator of σ. For normal samples, estimating the spread changes the pivot to t with n−1 degrees of freedom.

**中文：** iid 且方差有限时，E(S²)=σ²。可用 Σ(Xᵢ−X̄)²=ΣXᵢ²−nX̄² 验证，其期望是 n(σ²+μ²)−n(σ²/n+μ²)=(n−1)σ²，因此除以 n−1。开平方不会保留无偏性，不能因此说 S 是 σ 的无偏估计量。正态样本中，用样本估计离散程度后，标准化变量应服从自由度 n−1 的 t 分布。

### Complete worked example: a small sample with unknown spread

**Question — self-written:** Five independent readings, in mg, are 8,9,10,11,12. They are a random sample from a normal population with unknown mean μ and unknown variance. Construct a 95% confidence interval for μ and give its full width. Use t₄,₀.₉₇₅=2.776, meaning P(T₄≤2.776)≈0.975. Does the interval support μ=12 mg? Explain why observing a reading of 12 mg is not a contradiction.

**EN:** The population is normal, the sample is small and the variance is unknown, so use t with 5−1=4 degrees of freedom. Calculate the centre and spread from the data before choosing the margin.

**中文：** 总体正态，样本小且总体方差未知，因此用自由度 4 的 t。先从数据求中心与离散程度，再计算半宽。

$$
\begin{aligned}
\bar x&=\frac{8+9+10+11+12}{5}=10\text{ mg},\\
\sum(x_i-\bar x)^2&=4+1+0+1+4=10\text{ mg}^2,\\
s^2&=\frac{10}{4}=2.5\text{ mg}^2,\\
\frac{s}{\sqrt5}&=\sqrt{\frac{2.5}{5}}=\frac1{\sqrt2}\text{ mg},\\
h&=\frac{2.776}{\sqrt2}=1.962928\ldots\text{ mg},\\
\text{CI}&=\left[10-\frac{2.776}{\sqrt2},10+\frac{2.776}{\sqrt2}\right]
\approx[8.037,11.963]\text{ mg},\\
\text{full width}&=2h=3.925857\ldots\text{ mg}\approx3.926\text{ mg}.
\end{aligned}
$$

**EN:** The interval is centred at 10, and the endpoints are equally far from 10: a useful arithmetic check. The value 12 is outside, so this interval does not support the hypothesised population mean 12 mg at the corresponding two-sided 5% level. It is an interval for the population mean, not a bound on individual readings; a reading of 12 is entirely compatible with this calculation. The conclusion is not proof that the parameter cannot equal 12.

**中文：** 两端到 10 的距离相等，可用来检查运算。12 在区间外，因此该区间在对应的双侧 5% 水平下不支持“总体均值是 12 mg”的假设。但它约束的是总体均值，不是个体读数；出现一个 12 mg 的读数完全不矛盾。也不能把统计结论写成“已经证明参数绝不可能是 12”。

### Read an interval backwards and plan its width

**EN:** If a claim μ₀ is compatible with a symmetric interval of known half width h, the unknown sample mean must place that value between its endpoints. Rearranging both inequalities gives a range for the centre.

**中文：** 若半宽 h 已知，而区间要包含假设均值 μ₀，那么样本均值这个中心必须让 μ₀ 落在两端之间。把左右两个不等式都整理，才能得到中心的范围。

$$
\bar x-h\leq\mu_0\leq\bar x+h
\quad\Longleftrightarrow\quad
\mu_0-h\leq\bar x\leq\mu_0+h.
$$

**EN:** For planning with known σ and a fixed normal critical value q, full width W=2qσ/√n. If the requested full width is at most w, solve an inequality and take the smallest integer that satisfies it. A requirement on half width e instead gives a different expression.

**中文：** 规划时，如果 σ 已知、正态临界值 q 固定，全宽 W=2qσ/√n。要求全宽不超过 w，要解不等式，再取满足条件的最小整数；如果要求的是半宽不超过 e，公式则少一个 2。

$$
W\leq w\quad\Longleftrightarrow\quad
n\geq\left(\frac{2q\sigma}{w}\right)^2;
\qquad
h\leq e\quad\Longleftrightarrow\quad
n\geq\left(\frac{q\sigma}{e}\right)^2.
$$

**EN:** Verify the selected integer and, when proving minimality, the preceding one. If σ is estimated from a pilot, the plan is approximate: the future sample spread may differ. For a small-sample t plan, the critical value itself depends on n, so test integer candidates with the relevant degrees of freedom rather than freeze an arbitrary t. “Strictly less than” also differs from “at most” when the boundary is an integer.

**中文：** 把选定整数代回检查；需要证明最小时，也检查前一个整数。若 σ 来自先导样本估计，样本量规划只是近似，因为未来样本的离散程度可能不同。小样本 t 规划的临界值也依赖 n，应逐个候选整数使用相应自由度，不能固定一个随意的 t。“严格小于”在边界恰为整数时，也与“不超过”不同。

### Independent tasks

#### Task A

**Question — self-written:** Select and justify an interval procedure and calculate the interval in each applicable case. All samples are independent random samples. (i) A normal population has known variance 36 mg²; n=9 and x̄=40 mg; use 90% confidence. (ii) A nonnormal population has finite known variance 25 mg²; n=100 and x̄=20 mg; use 95% confidence. A normal approximation for the sample mean is justified. (iii) As in (ii), except the variance is unknown and Σ(xᵢ−x̄)²=2475 mg². (iv) Only six observations from a strongly skewed nonnormal population are available and the variance is unknown. Is a standard small-sample t interval justified from this information? Use z₀.₉₅=1.645 and z₀.₉₇₅=1.960, where P(Z≤zₚ)≈p.

**Hint EN:** First identify population shape, known or estimated variance, and the justification for the sampling distribution. Sample size alone is not the complete decision.

**提示 中文：** 先找总体形状、方差是否已知，以及均值抽样分布的依据；不能只看 n。

**Solution / 解答:**

$$
\begin{aligned}
\text{(i)}&\quad40\pm1.645\frac6{\sqrt9}=40\pm3.29
&&\Longrightarrow[36.71,43.29]\text{ mg},\\
\text{(ii)}&\quad20\pm1.960\frac5{\sqrt{100}}=20\pm0.98
&&\Longrightarrow[19.02,20.98]\text{ mg},\\
\text{(iii)}&\quad s^2=\frac{2475}{99}=25,\quad20\pm1.960\frac5{10}
&&\Longrightarrow[19.02,20.98]\text{ mg}.
\end{aligned}
$$

**EN:** (i) is exact z because normality and known variance are stated; n=9 does not force t. (ii) is approximate z by the given large-sample justification. (iii) is approximate z using the estimated variance; identical numerical endpoints do not make its assumptions identical to (ii). In (iv), neither normality nor a justified large-sample approximation is available, so the stated information does not justify the standard t procedure. More data or a separately justified method/model is needed.

**中文：** (i) 总体正态、方差已知，所以是精确 z；n=9 不会自动迫使使用 t。(ii) 根据题给的大样本依据使用近似 z。(iii) 以估计方差代入近似 z；端点相同，不代表与 (ii) 的信息和依据相同。(iv) 既没有正态总体假设，也没有可用的大样本依据，因此不能据这些资料采用标准 t 区间，需要更多数据或另有依据的方法／模型。

#### Task B

**Question — self-written:** Six independent observations from a normal population with unknown mean and variance give Σxᵢ=60 s and Σxᵢ²=630 s². Construct a 95% confidence interval for μ. Use t₅,₀.₉₇₅=2.571, meaning P(T₅≤2.571)≈0.975. Assess separately the claims μ=12 s and μ=14 s. State a correct repeated-sampling interpretation.

**Hint EN:** Recover the centred sum of squares before dividing by n−1.

**提示 中文：** 先由总和与平方和求离差平方和，再除以 n−1。

**Solution / 解答:**

$$
\bar x=10\text{ s},\quad
\sum(x_i-\bar x)^2=630-\frac{60^2}{6}=30\text{ s}^2,\quad
s^2=\frac{30}{5}=6\text{ s}^2,
\quad\operatorname{SE}=\sqrt{\frac66}=1\text{ s}.
$$

$$
\text{CI}=10\pm2.571=[7.429,12.571]\text{ s}.
$$

**EN:** Use t₅ because the population is normal, variance unknown, and n=6. The interval includes 12, so that mean is compatible with it; it excludes 14, so it does not support that mean at the corresponding two-sided 5% level. Inclusion does not prove equality. Repeating this sampling and interval procedure would produce intervals containing the same fixed μ in 95% of samples under the normal model, apart from the supplied quantile's rounding.

**中文：** 总体正态、方差未知、n=6，因此用 t₅。区间包含 12，表示与这个假设均值相容；不包含 14，表示在对应双侧 5% 水平下不支持该均值。包含不等于证明相等。在模型成立时反复使用同一抽样与区间方法，95% 的区间会覆盖同一个固定 μ；题给临界值的舍入只造成微小数值近似。

#### Task C

**Question — self-written:** A random sample of 16 from a normal population with known standard deviation 4 cm is used to form a 90% confidence interval for μ. The interval includes 20 cm. Find the full range of possible values of x̄ and its smallest possible value. Use z₀.₉₅=1.645, meaning P(Z≤1.645)≈0.95. Give the interval's full width.

**Hint EN:** Write the two inequalities expressing that 20 lies between x̄−h and x̄+h.

**提示 中文：** 先把“20 在两端之间”写成两个不等式，再解 x̄。

**Solution / 解答:**

$$
h=1.645\frac4{\sqrt{16}}=1.645\text{ cm},\quad
\bar x-1.645\leq20\leq\bar x+1.645
\Longleftrightarrow18.355\leq\bar x\leq21.645\text{ cm}.
$$

**EN:** The smallest centre is 18.355 cm: it places 20 exactly at the upper endpoint. Full width is 3.290 cm. The endpoints are included because the question says “includes”; 20 need not equal the centre.

**中文：** 最小中心为 18.355 cm，此时 20 恰是区间上端点；全宽是 3.290 cm。题目说“包含”，所以边界可以取到；20 不必等于样本均值。

#### Task D

**Question — self-written:** Plan independent sampling from a normal population with known standard deviation 6 g. Find the smallest sample size for a 95% confidence interval whose full width is at most 5 g. Then find the answer if the requirement instead refers to a half width of at most 5 g. Use z₀.₉₇₅=1.960, meaning P(Z≤1.960)≈0.975. Verify minimality for the full-width requirement.

**Hint EN:** Write width=2×critical value×SE before solving for n.

**提示 中文：** 先写“全宽=2×临界值×标准误”，再解 n；不要先把 5 当半宽。

**Solution / 解答:**

$$
\frac{2(1.960)(6)}{\sqrt n}\leq5
\Longleftrightarrow n\geq\left(\frac{23.52}{5}\right)^2=22.127616,
\qquad n_{\min}=23.
$$

**EN:** At n=22 the full width is about 5.01448 g, too wide; at n=23 it is about 4.90426 g, acceptable. Width decreases with n, so this proves minimality. For the half-width requirement, n≥(11.76/5)²=5.531904, giving n=6. The large difference comes from the factor 2 before squaring, not a change in confidence.

**中文：** n=22 时全宽约 5.01448 g，仍太宽；n=23 时约 4.90426 g，符合要求。全宽随 n 增大而减小，因此 23 最小。若 5 g 指半宽，则 n≥5.531904，最小为 6。差别来自平方前的因子 2，并非置信水平改变。

#### Task E

**Question — self-written:** Independent observations from a normal population with known standard deviation 4 units give n=64 and x̄=10 units. Construct 95% and 99% confidence intervals using z₀.₉₇₅=1.960 and z₀.₉₉₅=2.576, where P(Z≤zₚ)≈p. Explain why the widths differ. Assess the statements: “95% of individual observations lie in the 95% interval”; “the interval proves μ=10.5”; and “after observing the interval, the fixed μ has a 95% probability of lying in it.” If a new sample of size 256 is used with the same known σ, what is its 95% half width? Is its centre determined?

**Hint EN:** Separate the target μ, individual observations, and the randomness of the endpoints.

**提示 中文：** 分清总体均值、个体数值，以及区间端点的随机性。

**Solution / 解答:**

$$
\begin{aligned}
\operatorname{SE}&=\frac48=0.5,\\
95\%:&\quad10\pm0.980=[9.020,10.980],\\
99\%:&\quad10\pm1.288=[8.712,11.288],\\
n=256:&\quad h=1.960\frac4{16}=0.490.
\end{aligned}
$$

**EN:** Higher coverage requires a larger critical value and a wider interval when other information is fixed. All three statements are invalid: the target is the mean, not 95% of individual observations; inclusion makes 10.5 compatible but does not prove equality; and 95% describes coverage of the procedure before sampling, not a probability assigned to the already fixed parameter after observing these endpoints. Quadrupling sample size halves half width. The new centre depends on new data and is not given.

**中文：** 其他信息不变，提高覆盖率要使用更大的临界值，因此区间更宽。三个说法都不成立：区间针对均值，不是 95% 的个体；包含 10.5 只说明相容，不能证明相等；95% 指抽样前方法的覆盖率，不是观察到端点后赋给固定参数的概率。样本量变为四倍，半宽减半；新中心由新样本决定，题目没有给出。

### Targeted retries — choose the one matching the error

#### Retry 1: variance, standard error and width

**Question — self-written:** Four independent observations from a normal population with unknown mean and variance are 4,6,8,10 mm. Find a 90% confidence interval for μ and its full width. Use t₃,₀.₉₅=2.353, meaning P(T₃≤2.353)≈0.95. Show the centred sum of squares, variance estimate, degrees of freedom and standard error.

**Hint EN:** Do not divide the centred sum by 4 to estimate the variance; do divide s² by 4 inside the SE square root.

**提示 中文：** 估计方差时离差平方和不除以 4；但标准误平方是 s²/4。

**Solution / 解答:**

$$
\bar x=7,\quad\mathrm{SS}=9+1+1+9=20,\quad s^2=\frac{20}{3},\quad\mathrm{df}=3,
\quad\operatorname{SE}=\sqrt{\frac{20/3}{4}}=\sqrt{\frac53}.
$$

$$
h=2.353\sqrt{\frac53}=3.0377099\ldots,\quad
\text{CI}=7\pm h\approx[3.9623,10.0377]\text{ mm},\quad
W=2h\approx6.0754\text{ mm}.
$$

**EN:** Normality and unknown variance justify t₃. The t quantile uses cumulative probability 0.95 for a two-sided 90% interval. The interval estimates a mean; neither its half width nor its full width is s.

**中文：** 正态且方差未知，故用 t₃；双侧 90% 区间用累计概率 0.95 的临界值。区间估计均值；半宽、全宽都不是 s。

#### Retry 2: a rounding error that changes the decision

**Question — self-written:** For independent sampling from a normal population with known σ=5 cm, find the smallest n giving a 95% interval with full width at most 4 cm. Use z₀.₉₇₅=1.960, where P(Z≤1.960)≈0.975. A student rounds the calculated bound to 24. Explain the error by checking both 24 and your chosen n.

**Solution / 解答:**

$$
n\geq\left(\frac{2(1.960)(5)}4\right)^2=24.01
\quad\Longrightarrow\quad n_{\min}=25.
$$

**EN:** At n=24, width=19.6/√24≈4.000833 cm, which exceeds 4; at n=25 width=3.92 cm. Ordinary nearest-integer rounding violates the required inequality. Retain enough digits to detect the small failure at 24.

**中文：** n=24 时全宽约 4.000833 cm，仍大于 4；n=25 时是 3.92 cm。普通四舍五入不能保证不等式成立。若过早把 4.000833 舍入成 4.00，就会掩盖 24 不合格。

**Feedback routing EN:** Wrong method in A → revisit the population/variance conditions; wrong denominator or missing square root in B → reconstruct SS, s² and SE as separate lines; wrong centre bound in C → write both inclusion inequalities; wrong integer in D → use retry2; interpretation errors in E → identify what varies before sampling. Retry1 checks the small-normal unknown-variance chain again with fresh data.

**反馈路径 中文：** A 选法错误，回看总体与方差信息；B 分母或平方根错误，把离差平方和、s²、SE 分行重建；C 中心范围错误，先写包含关系的左右两式；D 整数错误，做重试2；E 解释错误，先说抽样前究竟什么在变。重试1用新数据再查小样本正态、未知方差的完整链条。

### Later task — retrieve both lessons after another topic

**Question — self-written:** Two independent random samples from the same normal population with unknown mean μ and unknown variance have summaries (n,Σx,Σx²)=(4,40,420) and (5,60,730), with readings in seconds. Use all observations to estimate μ and construct a 95% confidence interval. Use t₈,₀.₉₇₅=2.306, meaning P(T₈≤2.306)≈0.975. Does the interval support μ=13 s? Explain why simply taking the unweighted average of the two sample means is not the combined sample mean. Show how you recover the combined spread; do not average the two variance estimates.

**Hint EN:** Combine counts, sums and sums of squares first, then centre the combined data about their combined mean.

**提示 中文：** 先合并样本量、总和与平方和，再相对于合并均值计算离差。

**Solution / 解答:**

$$
\begin{aligned}
n&=9,\quad\sum x_i=100,\quad\sum x_i^2=1150,\quad\bar x=\frac{100}{9},\\
\mathrm{SS}&=1150-\frac{100^2}{9}=\frac{350}{9},\\
s^2&=\frac{350/9}{8}=\frac{175}{36}\text{ s}^2,\\
\operatorname{SE}&=\sqrt{\frac{175/36}{9}}=\frac{5\sqrt7}{18}\text{ s},\\
h&=2.306\frac{5\sqrt7}{18}=1.6947507\ldots\text{ s},\\
\text{CI}&=\frac{100}{9}\pm h\approx[9.41636,12.80586]\text{ s}.
\end{aligned}
$$

**EN:** All nine observations are independent and share the same normal population, so t₈ is justified. The point estimator is the mean of the nine random observations and its estimate is 100/9 s. The interval excludes 13, so does not support that hypothesised mean at the corresponding two-sided 5% level. The two means are 10 and 12, but their equal average is 11, whereas the combined mean weights them by counts: (4×10+5×12)/9=100/9. Combining raw sums of squares accounts for both within-group spread and the different group means.

**中文：** 九个观察值相互独立且来自同一正态总体，因此用 t₈。点估计量是九个随机观察值的均值，这次估计值为 100/9 s。区间不包含 13，故在对应双侧 5% 水平下不支持该假设均值。两组均值是 10、12，等权平均为 11；合并均值则按人数加权，等于 100/9。先合并原始平方和，才会同时计入组内波动与两个组均值不同的贡献。

**Next EN:** A confidence interval compares one population mean with a proposed value. The subsequent inference lessons extend the model and target; do not automatically reuse this one-sample standard error for two independent populations or paired observations.

**下一步 中文：** 本课比较一个总体均值与一个假设值。后续推断会改变模型与目标；两个独立总体或配对观察不能直接沿用本课的单样本标准误。

## Author verification and handoff status

Author calculations were checked with exact rational arithmetic and finite enumeration where applicable, followed by numerical evaluation of the supplied critical values. The two-draw probabilities sum to 1 and give mean1/4, variance3/32; all linear-combination variances, efficiency directions and minimising weights were independently reconstructed from their coefficients. Variance and consistency conditions were checked separately. CI task summaries give positive centred sums of squares; all full widths, inclusion bounds and sample-size ceilings were recomputed. The planning examples explicitly fail at the preceding integer. t critical values in student tasks are supplied numerical inputs with cumulative-probability labels, not an invented or purportedly inspected table. Decimal answers are approximate to the displayed quantiles; algebraic/radical forms are the controlling expressions.

Only this report was written. No course files, navigation, shared styles, configuration or Git state were changed by this subtask. No new persistent scripts, PDF renders or other artifacts were created. The integrating author should place each common English prompt and mathematical solution unchanged in both pages, use the corresponding bilingual explanations, and keep each independent hint and solution separately closed. Do not carry the author ledger or internal task map into the first screen of a student lesson.

Status: source study and author self-check complete for this pack; **independent content review pending**, to be performed separately against the integrated final lessons. Jekyll, generated HTML, desktop/mobile reading, keyboard operation, language switching and student trials were not performed for this research-only file. No learning-effectiveness claim or publication approval is implied.
