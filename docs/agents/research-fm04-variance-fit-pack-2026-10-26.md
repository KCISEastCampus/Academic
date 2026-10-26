# FM04 方差、拟合优度与关联检验：研究及双语教学草案

日期：2026-10-26。范围：OxfordAQA 9665 v5.2，FS2.4d–g。本记录供主代理制作课程使用；仅本地研究，不修改课程页、导航、配置或 Git，不推送、不发布。

## 1. 先行设计卡

本卡先于本报告的教材深读、独立数值核算和草案编写建立。已先读 AGENTS.md、课程内容长期标准 v1.1、既有范围记录及指定试卷文本以确认任务身份。

| 项目 | 设计决定 |
| --- | --- |
| 中心问题 | 数据的波动、分布形状或两个分类变量的联系，是否与所声明的总体模型相容？怎样从研究问题选择统计量，而不是看见 χ² 就套同一检验？ |
| 三个学习段 | ① Comparing variability / 比较波动（FS2.4d–e）；② Does the distribution fit? / 分布是否相符（FS2.4f–g）；③ Are the categories associated? / 分类变量是否有关联（FS2.4f）。三个教学段不强制等于三个网址。 |
| 可观察目标 | 识别随机对象与抽样单位；写总体假设；核对正态性及独立性；选方差或方差比统计量与尾部；从概率或积分建立期望表；合理合组并重算自由度；完成一般列联表及2×2 Yates；给出有条件、非因果的情境结论。 |
| 先修及回补 | 样本方差的 n−1 定义、抽样与假设检验、概率表及 Poisson、连续密度积分与反常积分。主代理应连接实际已建的抽样/连续分布页面；本报告不假定 MGF 样章已教过这些。 |
| 核心条件 | 方差 χ² 针对正态总体；F 针对独立正态样本；计数 χ² 针对互斥完备类别和独立观测，最终每项期望频数严格 >5；2×2 按本资格使用 Yates；拟合参数与合组改变自由度。 |
| 表征用途 | 方差示范用尾部方向与倒数比值对照；拟合表并列区间、概率、O、E及贡献；列联表保留行列总数。只在有助于解释尾部或分组时绘图，不以图数验收。 |
| 示范与撤架 | 完整解释一次选择、计算、检查；再改问法、改变已知/估计参数或给出错误方案，要求独立选法。提示和答案分开，任务标题不透露方法。 |
| 恢复与复查 | 按“统计量/尾部/概率/合组/自由度/结论”的实际错因定位回补；提供同目标新重试与未标方法的延后混合任务，不能把看过解答算独立完成。 |
| 来源计划 | 读取 January 2025 Q1、Q5与配对MS，June 2025 Q9与配对MS；扫描教材32.4及33对应页。范围身份由既有官方研究记录提供；实际读过的页与未读边界在下一节逐一记录。 |
| 本轮验收边界 | 作者逐题计算及文档自检；独立内容复核、课程整合、网页实际阅读及学生试用由主代理另记，不将作者核算称独立审查。所有教学题自拟、无官方分值。 |

## 2. 实际来源与短结论

仅此节是作者说明；第3–5节提供可直接用于课程的英文与中文解释。共用公式与数据不重复翻译。所有 W、P、R、L 编号均为本报告自拟题编号，不是官方题号或分值。题号仅供整合定位；生产页应使用中性标题，提示、答案分别默认折叠。

| 实际读取材料 | 身份与位置 | 得到的证据和边界 |
| --- | --- | --- |
| 本地 `fm04-jan2025-qp.txt` 与 `fm04-jan2025-ms.txt` | 9665/FM04，Unit FS2，16 January 2025；QP封面及Q1（印刷pp.2–3）、Q5（pp.10–11）；MS封面Version1.0 Final、Q1 pp.4–5、Q5 pp.11–12 | Q1要求完整列联表、总体无关联假设、期望频数、统计量、自由度和情境结论。Q5(a)是反求不拒绝的标准差范围；Q5(b)是单侧F。未宣称全卷逐题复核。 |
| 本地 `fm04-june2025-qp.txt` 与 `fm04-june2025-ms.txt` | 9665/FM04，4 June 2025；QP封面、Q9 pp.18–19；MS Version1.0 Final、Q9 pp.14–15 | Poisson拟合：同组估计λ时df=4−1−1=2；题目另指定λ时df=3。实际读可提取文本；未取得/逐页核验June原PDF图像。QP第19页页脚提取为Jan25，与封面不符；不据页脚将本题改认January。 |
| 用户教材已有渲染 `fm04-textbook-005.png`、`fm04-inference-435.png`、`fm04-inference-446.png`、`fm04-inference-454.png` | *International A Level Further Mathematics with Statistics, AS and A Level*，OUP 2017，Gaulter等，ISBN9780198375999；目录印刷v、32.4开头印刷431/PDF435，33.1开头442/PDF446，33.2开头450/PDF454 | 本轮实际看上述四张页图。33.1区分已知/未知参数及低期望频数；450页给出尾类与合组任务并引入分类表。未读完整32.4或33全章，未查看书内后续F/Yates示范；不把下列自拟解答说成教材原解。当前研究记录未给扫描PDF绝对路径，有限检索未定位；不阻塞基于已配对QP/MS的正文交接。 |
| [官方范围记录](research-fm04-scope-route-2026-10-26.md) §2 | 已有代理核对9665 v5.2 §3.4，印刷pp.22–23 | 本轮读取该记录，未重新联网打开spec；严格采用其FS2.4d–g范围及期望频数>5、2×2用Yates的规定。不能将本轮表述成再次访问官网。 |

本地试卷材料目录：`C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/`。January原PDF也在该目录，定位文件为`fm04-jan2025-{qp,ms}.pdf`；本轮试卷细读依据配对文本，不声明已逐页看原PDF。

原归档来源：[January QP](https://drive.google.com/file/d/1d0uWUyBn-BuKFxO9vIB5HCFHUZSjwJgu/view)、[January MS](https://drive.google.com/file/d/1KTx2ZmsUj2YMpUEycJwAQeekCh1aXy1-/view)、[June QP](https://drive.google.com/file/d/1FTxQ-X2OSM6MRZHAAKbTk8-Gp1Vqx7z4/view)、[June MS](https://drive.google.com/file/d/1VRTlOTfUIP2agmgWRMxOBJLAUS1AwvQA/view)。链接沿用既有[教材真题记录](research-fm04-textbook-papers-2026-10-26.md)，本轮不重新访问云盘。所有官方材料在本报告只作定位和方法证据，不复制原题全文或官方分值。

作者独立重算的定位检查：January Q1得16.8123866，df2，0.5%上尾临界10.5966；Q5(a)由24.433、59.342反求标准差约4.14至6.45；Q5(b)66.1/25.4=2.60236，df(10,40)，1%上尾临界约2.801，故不拒绝。MS该题最终示例句写“different”，而题干及假设为“greater”；课程应回到方向性的“没有足够证据认为书面部分总体方差更大”。June Q9用未提前取整的概率得6.6570294；估计参数df2时超过5.991，题设固定参数df3时小于7.815，与MS的约6.7一致。后一个比较是题目指定的两个假设模型，不能推广成“把刚估计的值改称已知就可以增加df”。

### 目标—证据定位（全部为待学生作答的设计）

| 目标/范围 | 讲解与示范 | 独立任务 | 恢复、新重试及延后 |
| --- | --- | --- | --- |
| 方差/标准差χ²，单尾、双尾与反求，FS2.4d | V概念、W-V1 | P-V1反求标准差 | R-V1由离差平方和反求；L-V1反方向单尾 |
| 两独立正态总体比值与尾部，FS2.4e | V概念、W-V2 | P-V2纠正反比及方向；P-V3判断条件 | R-V2小于型；R-V3更换抽样设计；L-V2双侧 |
| 离散拟合、估计、合组和df，FS2.4f–g | G概念、W-G1 | P-G1估计与指定模型；P-G3错合组 | R-G1逆向恢复参数；R-G3严格>5；L-G1反向读概率 |
| 连续拟合与积分、尾类，FS2.4g | G概念、W-G2 | P-G2从总和估计并积分 | R-G2改变密度及支撑；L-G2缺失尾部诊断 |
| r×c和2×2 Yates，FS2.4f | A概念、W-A1/W-A2 | P-A1不完整表与解释；P-A2审查校正；P-A3独立性/低E | R-A1换维度；R-A2临界决策翻转；R-A3合法合并；L-A1/2混合 |

## 3. Lesson draft V — Comparing variability / 比较波动

### V-concept: What is being tested? / 我们究竟在检验什么？

**EN.** A large sample variance is a description of one sample. A variance test asks whether that amount of variation is plausible under a stated population variance. Name the population and the parameter before calculating. A claim about standard deviation can be written as a claim about variance because standard deviations are non-negative. If the proposed standard deviation is 2 mm, the proposed variance is 4 mm²; the denominator is not 2.

**中文。** 样本方差大，是这一次数据的描述；检验问的是：假定总体波动达到所声明的水平，这样的样本波动是否过于异常？先写总体和参数。标准差是原单位，方差是单位平方；“标准差为2 mm”在方差公式中必须写4 mm²。

For independent observations from a normal population / 对正态总体的独立随机观测，定义

$$
S^2=\frac{\sum_{i=1}^{n}(X_i-\bar X)^2}{n-1},\qquad
Q=\frac{(n-1)S^2}{\sigma_0^2}\sim\chi^2_{n-1}\quad\text{under }H_0:\sigma^2=\sigma_0^2.
$$

**EN.** The chi-square result is a sampling-distribution result used here, not a new definition of variance. Estimating the mean leaves n−1 independent deviations: their sum is zero. The result relies on population normality. A large n does not by itself establish this exact variance-test distribution for arbitrary non-normal data.

**中文。** χ²关系说明重复抽样时统计量怎样变化，不是方差的新定义。算过样本均值以后，各离差的总和固定为零，只有n−1个可自由变化。正态性是这个方差检验的条件，不能把“大样本均值近似正态”移植成“任何总体的大样本方差都服从这里的χ²”。

Define $c_\nu(p)$ by $P(\chi^2_\nu\le c_\nu(p))=p$ / 本包统一用左侧累计概率定义分位数。At level $\alpha$ / 显著性水平为$\alpha$时：

| Alternative / 备择 | Rejection region / 拒绝域 |
| --- | --- |
| $\sigma^2>\sigma_0^2$ | $Q>c_{n-1}(1-\alpha)$ |
| $\sigma^2<\sigma_0^2$ | $Q<c_{n-1}(\alpha)$ |
| $\sigma^2\ne\sigma_0^2$ | $Q<c_{n-1}(\alpha/2)$ or $Q>c_{n-1}(1-\alpha/2)$ |

**EN.** For two independent normal samples, compare their unbiased sample variances. Under equal population variances,

**中文。** 比较两个独立正态总体时，用两组无偏样本方差之比。总体方差相等的原假设下：

$$
F=\frac{S_A^2}{S_B^2}\sim F_{n_A-1,n_B-1}.
$$

**EN.** Write the numerator first, then its degrees of freedom first. If $H_1:\sigma_A^2>\sigma_B^2$, large $F$ supports the alternative; use the upper tail. If $H_1:\sigma_A^2<\sigma_B^2$, use the lower tail. Do not choose the numerator merely to make the observed ratio exceed 1: that can change the tested direction. For a claim about a standard-deviation ratio, square it: $H_0:\sigma_A/\sigma_B=k$ means $F=(S_A^2/S_B^2)/k^2$ under $H_0$.

**中文。** 分子是哪组，自由度顺序就先写哪组。A总体方差较大对应比值偏大，A较小对应比值偏小；不能为了让结果大于1而自动换分子并仍用原来的上尾。若原假设指定标准差比为k，方差比是k²，检验统计量也要除以k²。

Let $f_{a,b}(p)$ denote an F left-CDF quantile / F也使用左累计分位数。The reciprocal rule / 倒数关系是

$$
f_{a,b}(p)=\frac{1}{f_{b,a}(1-p)}.
$$

**EN.** A table may instead label entries by upper-tail probability. Read the table heading: an “upper 5%” entry is $f(0.95)$ in this report. Taking a reciprocal swaps both the degrees of freedom and the tail. For a two-sided 5% test with a fixed A/B ratio, compare with $f_{a,b}(0.025)$ and $f_{a,b}(0.975)$.

**中文。** 有的表写“上尾概率”，本包则写左累计概率。表中“右侧留5%”对应这里的0.95分位数。取倒数时，要同时交换两自由度和尾部；固定A/B的双侧5%检验，应把左右各2.5%都写出来。

### W-V1: A complete one-population example / 单总体完整示范（自拟题）

**Question (EN).** A random sample of 11 independent rod lengths is taken from a normal population. Its unbiased sample variance is 9 mm². Test at 5% whether the population standard deviation exceeds 2 mm. Use $c_{10}(0.95)=18.307$.

**题目（中文）。** 正态总体中独立随机抽取11根杆，长度的无偏样本方差9 mm²。用5%水平检验总体标准差是否超过2 mm；给定上述分位数。

**Solution / 解答。** $H_0:\sigma=2$ mm; $H_1:\sigma>2$ mm. Equivalently / 等价地，$H_0:\sigma^2=4$ mm²、$H_1:\sigma^2>4$ mm²。

$$
Q=\frac{(11-1)\times9}{2^2}=22.5,
\qquad\nu=10,\qquad22.5>18.307.
$$

**EN.** Reject $H_0$. At 5%, there is sufficient evidence that the population standard deviation of rod lengths exceeds 2 mm. The statistic is dimensionless; a larger observed variance gives a larger statistic, matching the chosen upper tail. This does not say every rod differs from the mean by more than 2 mm.

**中文。** 拒绝原假设。在5%水平，有足够证据认为杆长度的总体标准差超过2 mm。方差单位在分子分母相消；样本波动更大使Q更大，与上尾选择一致。结论针对总体标准差，不是每根杆与均值的距离。

### W-V2: Two populations / 两个总体（自拟题）

**Question (EN).** Independent random samples from two normal manufacturing processes have $n_A=11,s_A^2=18$ and $n_B=21,s_B^2=6$, with both variances in mm². Test whether process A has greater population variance at 5%. Given $f_{10,20}(0.95)=2.347878$.

**题目（中文）。** 两种正态加工过程的独立随机样本如上。用5%水平检验A总体方差较大，给定分位数。

**Solution / 解答。** $H_0:\sigma_A^2=\sigma_B^2$; $H_1:\sigma_A^2>\sigma_B^2$。

$$
F=\frac{18}{6}=3,\qquad (\nu_1,\nu_2)=(10,20),\qquad3>2.347878.
$$

**EN.** Reject $H_0$: sufficient evidence of greater population variance for A. An independent direction check uses B/A: $1/3=0.333333$ with df(20,10). The lower 5% critical value is $1/2.347878=0.425917$. Since $0.333333<0.425917$, the decision agrees. Comparing $1/3$ with an upper-tail cutoff would test the wrong direction.

**中文。** 拒绝原假设，有足够证据支持A总体方差较大。独立检查：若改用B/A，统计量1/3，自由度改为(20,10)，应与下尾临界值0.425917比较，结论相同。不能取了倒数仍套上尾。

### P-V: Independent tasks / 独立任务（全部自拟）

**P-V1 — EN.** Eleven independent observations from a normal population have $s^2=9$ mm². A two-sided 5% test of $H_0:\sigma=k$ is not rejected. Find the possible positive k. Use $c_{10}(0.025)=3.246973$, $c_{10}(0.975)=20.483177$. Explain why using the two 5% cutoffs would answer a different question.

**中文。** n=11、s²=9 mm²，双侧5%检验$\sigma=k$不拒绝，反求正数k；解释为何不能用左右各5%的临界值。

**P-V2 — EN.** Two independent normal samples have $n_A=11,s_A^2=4$ and $n_B=21,s_B^2=9$. The claim is $\sigma_A^2>\sigma_B^2$. A student uses $9/4=2.25$ and the upper 5% cutoff for $F_{20,10}$, saying “the larger variance always goes on top”. Diagnose the reasoning and perform the correct test. Given $f_{10,20}(0.95)=2.347878$; $f_{20,10}(0.05)=0.425917$.

**中文。** 数据及备择如上。学生坚持“大方差永远放分子”，用9/4及上尾。指出错因并完成正确检验；给定两种方向的分位数。

**P-V3 — EN.** The same 15 instruments are measured under two settings. Both marginal distributions are normal. Can the independent-sample F test establish whether one setting has larger variance? Would replacing these observations by two independent samples of 200 from strongly skewed populations automatically validate the exact F test? Explain each answer.

**中文。** 同一15台仪器在两种设置下重复测量，各自边际分布正态，能否直接作本课独立F检验？若改成各200个独立但强偏态观测，是否自动满足精确F条件？分别解释。

**Hint V（单独折叠） / 提示。** Identify the parameter, then the event “not rejected” or the tail supported by $H_1$. Conditions are properties of the sampling design and population, not the ratio alone. / 先找参数，再写不拒绝事件或备择支持哪一尾；不能只检查一个比值。

**Solutions V（与提示分开折叠） / 完整解答。**

- **P-V1:** $3.246973\le90/k^2\le20.483177$ gives $90/20.483177\le k^2\le90/3.246973$, hence $2.09615\le k\le5.26480$ mm. EN: inversion reverses each inequality because $k^2>0$. The 0.05 and0.95 cutoffs leave a total10% in the two tails. 中文：正数取倒数时不等号反向，最后才开方；左右各5%合起来是10%，不是双侧5%。本包约定在严格拒绝域边界处不拒绝；连续分布精确等号概率零，按题目/表格精度报告端点，不用四舍五入值声称严格区分边界。
- **P-V2:** With A/B, $F=4/9=0.444444$, df(10,20), upper-tail rejection requires $F>2.347878$; do not reject. With B/A, $F'=2.25$, df(20,10), the same alternative is $\sigma_B^2/\sigma_A^2<1$, so rejection requires $F'<0.425917$; again do not reject. EN: insufficient evidence that A has greater population variance. It is not evidence that A and B have equal variances. 中文：倒数以后备择成“小于”，不能凭样本大小重选研究方向；样本趋势与所宣称方向相反，本次证据不支持A更大。
- **P-V3:** EN: no; pairing can make sample variances dependent, and marginal normality does not establish independent samples. The exact F result also requires normal populations; a large sample does not establish it for strongly skewed populations. The supplied information cannot justify this test. 中文：同一仪器重复测量可带来依赖；仅两边各自正态不够。改成独立大样本只修复独立性，不能自动修复总体非正态。无需额外教授超纲替代检验，应说明需要合适设计/模型。

### Recovery and new retries V / 定点恢复与新重试（全部自拟）

**Recovery / 恢复。** If P-V1 fails, return to the V-concept two-sided row, write the non-rejection interval before replacing $\sigma_0$ by k, and reverse inequalities explicitly when taking reciprocals. If P-V2 fails, write “large/small under $H_1$” beside each ratio and swap df on inversion. If P-V3 fails, draw one line per sampled object to check shared subjects; separately mark population normality. Then close the earlier solutions. / P-V1错回到双侧事件，P-V2错回到比值与方向，P-V3错回到抽样单位及正态性；完成回补后收起原答案。

**R-V1 — EN.** A normal sample of21 independent observations has $\sum(x_i-\bar x)^2=160$ mm². Find the positive standard deviations not rejected by a two-sided5% test. Given $c_{20}(0.025)=9.590777$, $c_{20}(0.975)=34.169607$. **中文：** 从离差平方和开始反求标准差范围，不把160误当s²。

**R-V2 — EN.** Independent normal samples have $n_A=11,s_A^2=3$, $n_B=21,s_B^2=12$. Test $\sigma_A<\sigma_B$ at5%, using $f_{10,20}(0.05)=0.360488$. Verify with the reciprocal and $f_{20,10}(0.95)=2.774016$. **中文：** 检验标准差“小于”，并用倒数方向复核。

**R-V3 — EN.** Choose a valid design for the independent F test: (a)40 independent units randomly assigned to two disjoint groups of20, outcomes normal within each population; (b)20 units each measured twice, with normal margins. State what must still be checked in(a). **中文：** 两种抽样设计中选择可支持独立F者，并说明仍需检查的条件。

**Retry solutions / 重试解答。** R-V1: $s^2=160/20=8$; $9.590777\le160/k^2\le34.169607$, giving $2.16391\le k\le4.08445$ mm. EN: the numerator is already the sum of squared deviations. 中文：160已是分子，不再乘20。R-V2: $H_0:\sigma_A^2=\sigma_B^2$, $H_1:\sigma_A^2<\sigma_B^2$; $F=3/12=0.25<0.360488$, reject. Reciprocal $4>2.774016$, df(20,10), same decision. Sufficient evidence that A has smaller population SD / 足够证据支持A总体标准差较小。R-V3: (a)has the required independent groups; check random sampling/assignment and within-group independence, population normality and that the sampling population matches the inference. (b)does not supply between-sample independence / 选(a)，仍需核对组内独立和正态模型、推断总体；(b)重复对象不能自动当独立。

### L-V: Later retrieval / 稍后回顾（自拟题；放入混合复习时不显示方法名称）

**L-V1 — EN.** A laboratory claims its normally distributed measurement error has SD below2 units. Eleven independent errors have unbiased sample variance1. At5%, assess the claim using $c_{10}(0.05)=3.940299$. **中文：** 稍后独立选检验并判断总体标准差较小的主张。

**L-V2 — EN.** Two independent normal samples each contain11 observations, with variances16 and4. At5%, assess whether the population variances differ. Use $f_{10,10}(0.025)=0.269049$, $f_{10,10}(0.975)=3.716792$. Explain why the one-sided cutoff2.978237 is not the two-sided upper cutoff. **中文：** 选双侧检验并解释为何不能把5%单尾值用于5%双尾。

**Later solutions / 稍后解答。** L-V1: $H_0:\sigma=2$, $H_1:\sigma<2$; $Q=10/4=2.5<3.940299$, df10, reject; sufficient evidence that population error SD is below2 / 有足够证据支持总体误差标准差小于2。L-V2: $H_0:\sigma_A^2=\sigma_B^2$, $H_1:\sigma_A^2\ne\sigma_B^2$; $F=4>3.716792$, df(10,10), reject; sufficient evidence of differing population variances. Two-sided5% allocates2.5% to each tail / 双侧5%每尾2.5%，结论不等于证明任一具体比值。

## 4. Lesson draft G — Does the distribution fit? / 分布是否相符？

### G-concept: Build the expected table first / 先建立模型应当给出的频数

**EN.** A goodness-of-fit test compares the counts of one random variable with a probability model. It does not compare two means. If the model gives category i probability $p_i$, a sample of n independent observations has expected count $E_i=np_i$. Categories must be mutually exclusive and cover every possible outcome. They are not limited to the values that happened to appear in this sample.

**中文。** 拟合优度考查一个随机变量的分类频数，是否与指定概率模型相容。先由模型求每类概率，再乘样本量，不能把观察到多少直接当作“应当有多少”。各类互不重叠并覆盖全部可能结果；样本中未出现的取值仍可能具有模型概率，不能删除。

For a discrete variable / 离散变量：$p_i=\sum_{x\in C_i}P(X=x)$。For a continuous variable / 连续变量：

$$
p_i=P(a_i\le X<b_i)=\int_{a_i}^{b_i}f(x)\,dx.
$$

**EN.** A density height is not an interval probability. The class width and the shape of the density matter. Continuous endpoints have probability zero, so either consistent endpoint convention is possible. An unbounded final category requires the integral to infinity. For a normal model on the whole real line, the first and last categories must cover the two unbounded tails too.

**中文。** 密度曲线某一点的高度不是区间概率。必须积出面积；不能只取中点密度，尤其不能漏区间宽度。连续端点的概率为零，但区间写法仍应一致。指数模型最后一类需要积分到无穷；正态模型还要覆盖负无穷一侧。

**EN.** Check every expected count against this qualification's strict rule: $E_i>5$. A count of exactly5 fails. A small observed count does not itself trigger pooling; the condition concerns E. If a tail category fails, combine adjacent, substantively meaningful categories, adding both O and E. Recheck the combined count. Decide using the model's expected table and meaningful categories, not by searching for a favourable test result. Ordered values should remain contiguous groups. If no meaningful pooling leaves a valid test, say the approximation is not justified; do not invent categories.

**中文。** 本资格要求每个最终期望频数**严格大于5**，等于5也不满足。检查的是E，不是O。尾部不足时，与相邻且意义相容的类别合并；O和E必须一起相加，然后再检查。不能观察哪个合并方案最容易“不拒绝”再挑它。按数值排序的类应保持连续；若合理合组后仍无法检验，应明确说明条件不够。

With K final categories and p independent population parameters fitted from these data / 最终K类、从同一组数据估计p个独立总体参数时：

$$
T=\sum_{i=1}^{K}\frac{(O_i-E_i)^2}{E_i},\qquad\nu=K-1-p.
$$

**EN.** The fixed total removes one freedom; fitting parameters removes more. Recount K after pooling, then subtract fitted parameters. A mean supplied as a sample mean is still information estimated from the data. A genuinely pre-specified parameter uses no fitted-parameter subtraction. Two parameters, such as a fitted normal mean and variance, use p=2; a fixed normal model uses p=0. At least one degree of freedom must remain. Expected counts use the fitted model, even when a sample contains an empty category.

**中文。** 总频数固定先减1；若用数据调了模型参数，还要再减。先合组、再数K、最后扣参数。题目直接给“样本均值”不代表总体参数已知。正态均值与方差均从本样本估计就减2，均预先指定则不减参数；若最终自由度不为正，本课χ²近似不能照用。空观察类仍应按模型计算E。

**EN.** Use an upper-tail chi-square comparison because large total discrepancy is evidence against fit. State $H_0$ as the distributional model for the named variable and $H_1$ as its failure. With fitted parameters, distinguish the family in $H_0$ from the estimate used for computation: “X follows a Poisson distribution” and then “estimate $\lambda$ by…”. Do not rewrite $H_0$ as though the newly fitted value had been specified independently.

**中文。** 统计量衡量总偏离，越大越不相符，因此用上尾。原假设应说清哪个变量服从什么分布；参数待估计时，先写分布族，再写估计步骤。不能把“用本样本估出来的参数”伪装成事前指定。

### W-G1: Discrete counts and pooling / 离散计数与合组（自拟题）

**Question (EN).** Counts X in100 independently selected equal observation periods are recorded as follows. These are constructed teaching data, not measured records. Assess at5% whether a Poisson model is adequate. Estimate its parameter from the data. Given $c_2(0.95)=5.991465$.

**题目（中文）。** 在100个独立、等长的观察时段，得到下表计数（构造教学数据）。从样本估参数，用5%水平评价Poisson模型；给定分位数。

| X | 0 | 1 | 2 | 3 | 4 | 5 or more / 至少5 |
| --- | --- | --- | --- | --- | --- | --- |
| O | 40 | 32 | 18 | 8 | 2 | 0 |

**Solution / 解答。** $H_0$: X follows a Poisson distribution / X服从某Poisson分布；$H_1$: X does not follow a Poisson distribution / X不服从Poisson分布。

$$
\hat\lambda=\bar x=\frac{0(40)+1(32)+2(18)+3(8)+4(2)}{100}=1.
$$

**EN.** The last group has no observations, so it contributes zero to the sample total here; if it contained observations with unknown individual values, this grouped table alone would not determine the exact mean. Under the fitted model, $P(X=x)=e^{-1}/x!$.

**中文。** 此例尾组观察频数零，因此不妨碍算精确样本均值；若尾组非零又不知道具体值，仅这张表通常不能算精确均值。拟合模型的概率为$e^{-1}/x!$。

| Initial class / 原类 | O | E before pooling / 合组前E |
| --- | --- | --- |
| 0 | 40 | $100e^{-1}=36.787944$ |
| 1 | 32 | $100e^{-1}=36.787944$ |
| 2 | 18 | $100e^{-1}/2=18.393972$ |
| 3 | 8 | $100e^{-1}/6=6.131324$ |
| 4 | 2 | $100e^{-1}/24=1.532831$ |
| $\ge5$ | 0 | $100[1-e^{-1}(1+1+1/2+1/6+1/24)]=0.365985$ |

**EN.** Combining4 with≥5 gives only1.898816, still not>5. Include adjacent3 too. The final category≥3 has $O=10$, $E=100[1-e^{-1}(1+1+1/2)]=8.030140$. The resulting four classes all satisfy the rule. We combine the small expected tail with its neighbour, not with a remote large category.

**中文。** 4与至少5先合起来仍只有1.898816，不够；再并入相邻3，得到至少3。此时四类E全部大于5，才计算检验量。

| Final class / 最终类 | O | E | $(O-E)^2/E$ |
| --- | --- | --- | --- |
| 0 | 40 | 36.787944 | 0.280453 |
| 1 | 32 | 36.787944 | 0.623150 |
| 2 | 18 | 18.393972 | 0.008438 |
| $\ge3$ | 10 | 8.030140 | 0.483223 |

$$
\sum O=\sum E=100,\quad T=1.395265,\quad\nu=4-1-1=2,\quad1.395265<5.991465.
$$

**EN.** Do not reject $H_0$. There is insufficient evidence against the Poisson model for these period counts at5%. This does not prove a Poisson mechanism or independence; independence came from the sampling assumptions. Sum checks catch omitted tails, and df uses the four final classes and one fitted parameter.

**中文。** 不拒绝原假设。5%水平下没有足够证据否定本情境的Poisson模型；这不证明事件机制一定为Poisson，也不证明数据独立。独立性来自研究设计；总和检查帮助找漏尾部，自由度必须按合组后的四类扣除一个估计参数。

### W-G2: Continuous probability is area / 连续概率来自积分面积（自拟题）

**Question (EN).** Independently sampled waiting times T (minutes) are tested against the pre-specified density $f(t)=e^{-t}$ for $t\ge0$, zero otherwise. No parameter is fitted. For80 observations the counts in $[0,\ln2)$, $[\ln2,\ln4)$, $[\ln4,\ln8)$ and $[\ln8,\infty)$ are36,18,14,12. Test at5%, given $c_3(0.95)=7.814728$.

**题目（中文）。** 80个独立等待时间，检验预先指定的上述密度，无参数估计。四区间及频数如上，给定分位数，用5%水平检验。

**Solution / 解答。** $H_0$: waiting time follows the stated exponential density / 等待时间服从所给指数密度；$H_1$: it does not / 不服从该密度。

$$
\begin{aligned}
P(0\le T<\ln2)&=\int_0^{\ln2}e^{-t}\,dt=[-e^{-t}]_0^{\ln2}=1-\tfrac12=\tfrac12,\\
P(\ln2\le T<\ln4)&=[-e^{-t}]_{\ln2}^{\ln4}=\tfrac12-\tfrac14=\tfrac14,\\
P(\ln4\le T<\ln8)&=[-e^{-t}]_{\ln4}^{\ln8}=\tfrac14-\tfrac18=\tfrac18,\\
P(T\ge\ln8)&=\lim_{b\to\infty}[-e^{-t}]_{\ln8}^{b}=0+\tfrac18=\tfrac18.
\end{aligned}
$$

**EN.** The density is normalised by the same integral over0 to∞, giving1; the four probabilities sum to1. The final interval contributes a positive tail probability even though its upper limit is infinite. Here t represents waiting time, not the MGF input used in another lesson.

**中文。** 同样从0积分到无穷可检验密度总面积为1；四项概率相加也是1。最后区间上界无限并不意味着概率零。这里t是等待时间，与其他章节MGF的函数输入需按语境区分。

| Interval / 区间 | O | E | Contribution / 贡献 |
| --- | --- | --- | --- |
| $[0,\ln2)$ | 36 | 40 | $16/40=0.4$ |
| $[\ln2,\ln4)$ | 18 | 20 | $4/20=0.2$ |
| $[\ln4,\ln8)$ | 14 | 10 | $16/10=1.6$ |
| $[\ln8,\infty)$ | 12 | 10 | $4/10=0.4$ |

$$
T_{\rm test}=2.6,\quad\nu=4-1-0=3,\quad2.6<7.814728.
$$

**EN.** All E>5; do not reject. There is insufficient evidence that these waiting times fail to follow the specified model. The same letter T for a waiting time and a test statistic can confuse readers, so the subscript explicitly distinguishes the statistic here; production may call the statistic Q instead.

**中文。** 所有E>5，不拒绝；没有足够证据说明这些等待时间与指定模型不符。检验统计量此处特写下标，避免把等待时间随机变量与求出的总偏离混淆，生产页可统一改称Q。

### P-G: Independent tasks / 独立任务（全部自拟）

**P-G1 — EN.** A variable is the number of successes in two trials. Independent observations of this variable have counts $O_0=32,O_1=36,O_2=12$ (n=80). Assess a Binomial(2,p) family at5%, estimating p from the sample mean. Then assess the pre-specified model Binomial(2,0.5). Explain why the expected table, df and question change. Given $c_1(0.95)=3.841459$, $c_2(0.95)=5.991465$.

**中文。** 同一张0、1、2次成功的频数表，先估p检验Binomial(2,p)分布族，再检验事前指定p=0.5的模型。完成两种判断，解释不是只改一个临界值。

**P-G2 — EN.** One hundred independent positive waiting times have raw total100 minutes. Test an exponential family, estimating its rate from the identity $E(T)=1/\lambda$. The counts in the same four intervals as W-G2 are45,27,15,13. Derive each probability by integration, state df and test at5%. Given $c_2(0.95)=5.991465$.

**中文。** 100个独立正等待时间的原始总和为100分钟，用$E(T)=1/\lambda$估速率；按W-G2同样区间得到45、27、15、13。自己积分求概率、写自由度并检验。

**P-G3 — EN.** Under a specified geometric model, $P(X=x)=2^{-(x+1)}$ for x=0,1,… . In80 independent observations, the frequencies for0,1,2,3,≥4 are40,18,12,4,6. A student uses five classes because the last two E values are “at least5”. Another combines0 and≥4 while leaving3 separate. Diagnose both plans and complete a valid5% test. Given $c_3(0.95)=7.814728$.

**中文。** 给定几何模型与五类频数。一人说最后两格“至少5就行”，另一人把0与至少4合并却留下3。分别诊断并完成合法检验。

**Hint G（单独折叠） / 提示。** A binomial mean is2p; an exponential mean is1/λ. Start with probabilities, not contributions. For pooling, mark every E≤5 and preserve ordered intervals. / 二项均值为2p，指数均值为1/λ。先求概率；圈出每个E≤5，再按相邻类别合组。

**Solutions G（与提示分开折叠） / 完整解答。**

**P-G1.** Family / 分布族：$H_0:X\sim\operatorname{Bin}(2,p)$ for some p / 某个p；$H_1$: not this binomial family / 不属该族。

$$
\bar x=\frac{36+2(12)}{80}=0.75,\quad\hat p=0.375;\quad
E=80((5/8)^2,2(3/8)(5/8),(3/8)^2)=(31.25,37.5,11.25).
$$

$$
T=\frac{0.75^2}{31.25}+\frac{(-1.5)^2}{37.5}+\frac{0.75^2}{11.25}
=0.018+0.060+0.050=0.128.
$$

EN: all E>5, df=3−1−1=1; 0.128<3.841459, do not reject; insufficient evidence against a Binomial(2,p) model. 中文：扣除一个估计参数，自由度1，未发现足够反对该分布族的证据。

Specified / 指定模型：$H_0:X\sim\operatorname{Bin}(2,0.5)$; $H_1$: not this specified model / 不服从指定模型。

$$
E=(20,40,20),\qquad T=144/20+16/40+64/20=10.8,
\quad\nu=3-1=2.
$$

EN: 10.8>5.991465, reject; sufficient evidence against the particular p=0.5 model, not against every binomial model. The fitted family has used the data to adjust p; the fixed model has not. 中文：拒绝p=0.5这个模型，不等于否定所有二项模型。两表E与统计量均不同，不能只更改自由度。

**P-G2.** $H_0$: the waiting time has an exponential distribution with an unspecified positive rate / 等待时间服从某正速率指数分布；$H_1$: not exponential / 不服从指数分布。

$$
\bar t=100/100=1,\quad\hat\lambda=1/\bar t=1\ {
m min}^{-1}.
$$

EN: using the fitted density, for a,b≥0, $\int_a^b\hat\lambda e^{-\hat\lambda t}dt=[-e^{-\hat\lambda t}]_a^b=e^{-\hat\lambda a}-e^{-\hat\lambda b}$. With b→∞ the second term tends to0. Thus the four probabilities are1/2,1/4,1/8,1/8. 中文：先代拟合速率，再积分；无穷端点的指数项趋零，得到同样四个概率，但由于本次速率由样本估计，自由度不同。

$$
E=(50,25,12.5,12.5),\quad
T=25/50+4/25+6.25/12.5+0.25/12.5=1.18,
\quad\nu=4-1-1=2.
$$

EN: all E>5, 1.18<5.991465, do not reject; insufficient evidence against the exponential family for these waiting times. The raw total was supplied separately: grouped frequencies alone do not give that exact total. 中文：不拒绝，不能说已证实指数模型。原始总和单独给出，不能从四个区间的中点凭空得到精确均值。

**P-G3.** $H_0$: X follows the specified geometric model / X服从指定几何模型；$H_1$: it does not / 不服从。$P(X\ge4)=1-(1/2+1/4+1/8+1/16)=1/16$; initial E=(40,20,10,5,5). EN: exactly5 fails the strict rule. Combining0 and≥4 makes a non-contiguous ordered group and leaves E=5 at3 anyway. Pool3 and≥4 into≥3, giving O=(40,18,12,10), E=(40,20,10,10). 中文：第一方案把>5误成≥5；第二方案破坏有序分组而且未解决3类的不足。合理合并尾部两类。

$$
T=0+4/20+4/10+0=0.6,\quad\nu=4-1-0=3,\quad0.6<7.814728.
$$

EN: do not reject; insufficient evidence against the specified geometric model. No parameter was fitted. 中文：不拒绝指定几何模型，p=0.5是事前给定，不扣拟合参数。

### Recovery and new retries G / 定点恢复与新重试（全部自拟）

**Recovery / 恢复。** P-G1 df error: list each population parameter and where its numerical value came from, then rebuild E under the stated model. P-G2 probability error: return to W-G2 and evaluate the antiderivative at both ends, including the limit. P-G3 error: return to G-concept and write “E, not O; >5, not≥5; adjacent bins; recount K”. Close the solutions before retrying. / 分别回到参数来源、积分上下限、合组条件，按错因恢复后收起解答，不要求无差别重看整章。

**R-G1 — EN.** Sixty-four independent observations with values0,1,2 have frequencies26,30,8. A colleague proposes Binomial(2,p), with p estimated from these observations. Find p, E, df and test at5%, given $c_1(0.95)=3.841459$. **中文：** 重新从频数估p，而不是抄前题参数。

**R-G2 — EN.** A specified density is $f(x)=2x$ on0≤x≤1, zero elsewhere. In80 independent observations the counts in $[0,1/2)$, $[1/2,1/\sqrt2)$, $[1/\sqrt2,\sqrt3/2)$, $[\sqrt3/2,1]$ are12,18,22,28. Test at5%; derive probabilities by integration. Given $c_3(0.95)=7.814728$. **中文：** 换成有限支撑的密度，积分得到每类概率后检验，不沿用指数公式。

**R-G3 — EN.** A fixed discrete model gives probabilities(0.2,0.3,0.25,0.25) for ordered categories0,1,2,3. In20 independent observations O=(3,7,4,6). Construct valid contiguous pooled categories and complete the5% test, using $c_1(0.95)=3.841459$. **中文：** 原E有等于5和小于5；应保留尽可能有意义的相邻两组，重新算O、E、df。

**Retry solutions / 重试解答。**

**R-G1:** $H_0$: Binomial(2,p) family; $H_1$: not that family / 属该分布族对不属该族。$\bar x=(30+16)/64=23/32$, $\hat p=23/64=0.359375$. Hence

$$
E=\left(\frac{1681}{64},\frac{1886}{64},\frac{529}{64}\right)
=(26.265625,29.46875,8.265625),\quad\nu=3-1-1=1.
$$

$$
T=\frac{(-17/64)^2}{1681/64}+\frac{(34/64)^2}{1886/64}+\frac{(-17/64)^2}{529/64}
\approx0.020800.
$$

EN: all E>5, do not reject; insufficient evidence against the binomial family. 中文：此题必须重新估p，不能用假定p=0.5的E=(16,32,16)；后者回答另一个模型问题。

**R-G2:** $H_0$: X has the given density; $H_1$: not that density / 服从与不服从给定密度。$\int_0^1 2x\,dx=[x^2]_0^1=1$. For each class, $P(a\le X<b)=[x^2]_a^b=b^2-a^2$; squared endpoints are0,1/4,1/2,3/4,1, so probabilities all1/4. $E=(20,20,20,20)$, all>5; $T=64/20+4/20+4/20+64/20=6.8$, df3, 6.8<7.814728, do not reject. EN: insufficient evidence against the specified density. 中文：不拒绝；相等概率来自积分面积相等，不是四个区间等宽。

**R-G3:** $H_0$: the stated four-category probability model; $H_1$: not that model / 服从与不服从指定分类概率。Initial E=(4,6,5,5). Pool{0,1} and{2,3}: E=(10,10), O=(10,10), T=0, df=2−1=1, do not reject. EN: both5s fail separately; the final two groups satisfy>5. A pooled test has less ability to detect differences inside its groups, so this is not proof of the full unpooled model. 中文：合组会丢失组内差异的信息，不应把T=0说成已证明每个原类概率正确。

### L-G: Later retrieval / 稍后回顾（全部自拟；混合题标题不标方法）

**L-G1 — EN.** A fixed distribution assigns probabilities1/4,1/2,1/4 to0,1,2. Sixty-four independent observations have frequencies26,30,8. Assess the model at5% and explain why a mean estimated in another task is irrelevant to the df here. Given $c_2(0.95)=5.991465$. **中文：** 同样的频数现在检验预先指定模型，说明为什么不扣其他题估计的参数。

**L-G2 — EN.** A team tests the specified density $e^{-t}$, t≥0, using only classes[0,1),[1,2),[2,3), ignoring7 of50 observations because they exceed3. They divide all expected counts by $1-e^{-3}$ and still describe an untruncated exponential test. Explain what changed; propose valid classes for the original question and check expected counts before choosing a statistic. **中文：** 删除超过3的7个观测、重归一化后还能称检验原总体指数分布吗？指出对象变化，恢复原问题的完整类别并核对期望条件。

**Later solutions / 稍后解答。** L-G1: $H_0$ is the fixed model, $H_1$ its failure; E=(16,32,16), all>5; $T=100/16+4/32+64/16=10.375>5.991465$, df=3−1=2, reject. EN: sufficient evidence against these fixed probabilities; no parameter is fitted in this task. 中文：拒绝指定概率，不把前题拟合参数带进此题；这也说明“数据支持某个模型族”与“支持某组具体参数”不同。

L-G2: EN: removing observations and renormalising tests a conditional model given T<3, not the original full distribution. Keep all50 observations. Proposed initial classes[0,1),[1,2),[2,3),[3,∞) have probabilities $1-e^{-1}$, $e^{-1}-e^{-2}$, $e^{-2}-e^{-3}$, $e^{-3}$, hence E≈(31.606028,11.627208,4.277411,2.489353). The last two fail; pool to[2,∞), giving E≈(31.606028,11.627208,6.766764), all>5. Three final classes, p=0, df2. The last O would be7 plus the original count in[2,3); a numerical test is impossible without the other observed counts. Do not invent them. 中文：去掉7人相当于改为条件总体，不回答原问题。应保留全部50次，把低期望尾部并成至少2；自由度2。但题目未给所有观察频数，故可恢复分类和E，不能捏造统计量或结论。对信息不足作出明确判断正是本题目标。

## 5. Lesson draft A — Are the categories associated? / 分类变量是否有关联？

### A-concept / 概念

**EN.** In an association test, each independently sampled individual contributes to exactly one cell, classified by two categorical variables. Under independence, the probability of a column category is the same in every row. Estimate that probability by its overall proportion, then multiply by the row total:

**中文。** 关联检验中，每个独立抽取的对象按两个分类变量，恰好落入一格。无关联时，每行内各列的比例应与总体列比例相同。因此先算总体列比例，再乘该行人数：

$$
E_{ij}=\frac{R_iC_j}{N},\qquad
Q=\sum_{i=1}^{r}\sum_{j=1}^{c}\frac{(O_{ij}-E_{ij})^2}{E_{ij}},\qquad
\nu=(r-1)(c-1).
$$

**EN.** Row and column totals constrain the remaining cells: after choosing the first r−1 rows and c−1 columns, the margins determine the rest. The total row and total column are checks, not additional categories. All expected cell counts must exceed5. Use an upper-tail chi-square comparison. The hypotheses name the two population variables: no association versus association. Neither a rejection nor non-rejection proves causation.

**中文。** 行列总数固定后，最前面的r−1行、c−1列确定，剩下各格就由边际总数决定，所以自由度不是格数减1。合计行、合计列不是额外类别。每格E严格大于5，使用上尾。原假设和备择应写明是哪两个总体分类变量；有关联也不证明因果。

**EN.** For a2×2 table, this qualification requires Yates' continuity correction:

**中文。** 本资格的2×2表需用Yates连续性校正：

$$
Q_Y=\sum_{i=1}^{2}\sum_{j=1}^{2}\frac{(\lvert O_{ij}-E_{ij}\rvert-0.5)^2}{E_{ij}},\qquad\nu=1.
$$

**EN.** Take the absolute residual before subtracting0.5; do not subtract0.5 from signed residuals or from the observed table. The correction does not change df, the expected table, or the E>5 condition. It is not applied to a general r×c table or automatically to a goodness-of-fit task with few categories. All numerical Yates tasks below have absolute residuals greater than0.5, so no near-zero convention is needed.

**中文。** 先取残差绝对值，再减0.5，最后平方；不要把0.5直接从观察人数扣掉。校正不改变自由度或期望频数，也不能拯救不满足E>5的表。本包Yates题的残差绝对值均大于0.5，不涉及接近零的不同实现约定。一般r×c表不加此校正。

### W-A1: A general table / 一般列联表（自拟题）

**Question (EN).** A random sample of120 independent customers records membership type A/B and product preference X/Y/Z. Rows A,B have observed counts(24,12,24) and(16,28,16). Test for association at5%; use $c_2(0.95)=5.991465$.

**题目（中文）。** 120名独立随机顾客记录会员类型A/B与产品偏好X/Y/Z，两行频数如上。5%水平检验关联，给定分位数。

**Solution / 解答。** $H_0$: membership type and product preference are independent / 两分类变量无关联；$H_1$: they are associated / 有关联。Row totals(60,60), column totals(40,40,40), N=120. Every E is60×40/120=20>5 / 每格期望频数20。

$$
Q=\frac{4^2+(-8)^2+4^2+(-4)^2+8^2+(-4)^2}{20}=9.6,
\qquad\nu=(2-1)(3-1)=2.
$$

**EN.** 9.6>5.991465: reject. Sufficient evidence of an association between membership type and preference. A2×3 table does not use Yates. Check that each expected row totals60 and each expected column totals40. The observational study does not establish that membership causes preference.

**中文。** 拒绝原假设，有足够证据支持会员类型与产品偏好有关联。2×3不作Yates。E的行列总和应分别回到60和40；观察性资料不能推断会员类型造成偏好变化。

### W-A2: A2×2 table / 2×2示范（自拟题）

**Question (EN).** Sixty independent randomly selected respondents are classified by training access A/B and confidence yes/no. The two observed rows are(18,12) and(8,22). Test for association at5%. Given $c_1(0.95)=3.841459$.

**题目（中文）。** 60名独立随机受访者，按培训机会A/B与信心有/无分类，两行如上。用5%水平检验关联。

**Solution / 解答。** $H_0$: access and confidence are independent / 培训机会与信心无关联；$H_1$: associated / 有关联。Rows(30,30), columns(26,34); E rows both(13,17). All>5. Residuals(5,−5,−5,5); use Yates / 所有格E>5，按2×2使用Yates。

$$
Q_Y=2\frac{(5-0.5)^2}{13}+2\frac{(5-0.5)^2}{17}
=\frac{40.5}{13}+\frac{40.5}{17}=5.497738.
$$

**EN.** df1;5.497738>3.841459, reject. Sufficient evidence of association between access and confidence. This does not establish the effect of training on confidence. Uncorrected Q=6.787330 is not the requested calculation for this2×2 qualification task.

**中文。** 自由度1，拒绝原假设，有足够证据支持两分类变量有关联；不能据此确定培训的因果效果。未校正结果6.787330不能替代本资格要求的2×2计算。

### P-A: Independent tasks / 独立任务（全部自拟）

**P-A1 — EN.** Ninety independently sampled items are classified by shift(early/middle/late) and status(pass/fail). Each shift row totals30. The observed rows are(18,12),(12,18),(6,?). Complete the table and test for association at5%; $c_2(0.95)=5.991465$. Explain whether the result proves that shift causes defects. **中文：** 补表后选方法并检验，另解释因果限制。

**P-A2 — EN.** For W-A2, a student computes $\sum(O-E-0.5)^2/E$, using signed residuals. Identify the error and supply the correct value, df and conclusion without changing the original table. **中文：** 诊断校正顺序错误，保持原数据重算。

**P-A3 — EN.** Two independently sampled groups yield rows(9,1),(3,7). A student says Yates makes the chi-square approximation valid. Evaluate the claim. A second survey counts each person's answer before and after an event as two independent respondents; evaluate that design separately. **中文：** 分别审查低期望频数与重复对象，不混成同一个错误。

**Hint A（单独折叠） / 提示。** Rebuild margins before E. For2×2, list absolute residuals, then subtract0.5. Correcting a formula does not correct a sampling design. / 先复原边际总数；2×2先写绝对残差。计算校正不能修复抽样条件。

**Solutions A（与提示分开折叠） / 完整解答。** P-A1: missing24; column totals(36,54), N90, each E row(12,18), all>5. $H_0$: shift and status independent; $H_1$: associated / 班次与状态无关联对有关联。$Q=36/12+36/18+0+0+36/12+36/18=10$, df(3−1)(2−1)=2, reject as10>5.991465. EN: sufficient evidence of association; other factors may differ between shifts, so no causal proof. 中文：有足够关联证据，但其他条件可能随班次变化，不能断言因果。

P-A2: EN: signed negative residuals become−5.5 while positive ones become4.5, incorrectly treating equal discrepancies differently. Use absolute residual5 in each cell; correct QY=5.497738, df1, reject at5%, association conclusion as W-A2. 中文：带符号先减0.5会把同样大小的正负偏差不对称处理，改为各格绝对值5后再减，结论同示范。

P-A3: rows10,10; columns12,8; E rows(6,4). EN: E=4 fails>5; Yates does not fix it, so this approximation is not justified. In the second design, responses from the same individual are dependent, so treating them as independent respondents is also unjustified. 中文：第一题是期望条件不满足；第二题是对象重复导致独立性不足。两者都不能靠套Yates来解决。

### Recovery and new retries A / 定点恢复与新重试（全部自拟）

**Recovery / 恢复。** P-A1: return to A-concept and reconstruct one E as row total×column fraction, then check both margins. P-A2: return to the absolute-residual step in W-A2, keeping the observed table intact. P-A3: identify sampling units first, then inspect each E; do not inspect O alone. Close solutions before retrying. / 分别回到期望频数来源、绝对残差、抽样单位与E条件，订正后收起答案。

**R-A1 — EN.** Independently sampled respondents give a2×3 table with observed rows(12,18,30),(18,12,30). Test for association at5%, $c_2(0.95)=5.991465$. **中文：** 换表维度并独立判断，无需Yates。

**R-A2 — EN.** Forty independently sampled respondents give a2×2 table with rows(14,6),(7,13). Test for association at5% using $c_1(0.95)=3.841459$. A colleague obtains4.912281. Explain whether that number supplies the required test. **中文：** 重试校正并检查忽略它是否会改变结论。

**R-A3 — EN.** An independent random sample classified by route A/B and package size small/medium/large gives rows(8,1,1),(2,3,5). A proposed size grouping was specified before looking at this table: small versus not-small. Does this make the expected counts valid under the strict rule? Compute them and state what follows. **中文：** 类别合并有实际含义且事前指定，仍需重新检查E，不能自动认为已修复。

**Retry solutions / 重试解答。** R-A1: $H_0$: the row and column variables are independent; $H_1$: associated / 行列变量无关联对有关联。Rows60,60; columns30,30,60; E rows(15,15,30), all>5. $Q=9/15+9/15+0+9/15+9/15+0=2.4$, df2;2.4<5.991465, do not reject; insufficient evidence of association / 无足够关联证据，不代表已证明独立。

R-A2: $H_0$: the two classification variables are independent; $H_1$: associated / 两变量无关联对有关联。Rows20,20; columns21,19; E rows(10.5,9.5), all>5; absolute residuals all3.5.

$$
Q_Y=2\frac{(3.5-0.5)^2}{10.5}+2\frac{(3.5-0.5)^2}{9.5}=3.609023,
\qquad\nu=1.
$$

EN:3.609023<3.841459, do not reject; insufficient evidence of association. The colleague used uncorrected Q=4.912281, which would cross the cutoff; omitting Yates changes this decision. 中文：校正后不拒绝，未校正结果会拒绝，因此不能把校正当成无关紧要的装饰。

R-A3: EN: pooled observed rows(8,2),(2,8); margins all10, N20. Every E=10×10/20=5, which still fails>5. No valid chi-square conclusion follows. Pooling further leaves no two-category size variable, so collect a suitable larger independent sample rather than manufacturing an association result. 中文：合并后四格E都恰为5，仍失败；再并就不剩尺寸比较。题目要求的是判定信息不足，不是强行给拒绝或不拒绝。

### L-A: Later retrieval / 稍后回顾（全部自拟）

**L-A1 — EN.** A random sample of60 independent people gives a2×2 table of transport preference and study mode with rows(16,14),(9,21). At5%, assess association; $c_1(0.95)=3.841459$. **中文：** 稍后独立识别2×2条件及校正。

**L-A2 — EN.** Contrast these investigations: (i)80 independent die rolls are classified by face and compared with six stated face probabilities; (ii)80 independent people are each classified by preferred die colour and age category. State what the expected counts and df depend on. If the table dimensions in(ii) are2×3, should Yates be used? **中文：** 未标方法地区分一个变量的模型拟合与两个变量的关联，写期望值及自由度来源。

**Later solutions / 稍后解答。** L-A1: $H_0$: preference and study mode independent; $H_1$: associated / 两变量无关联对有关联。Rows30,30; columns25,35; E rows(12.5,17.5), all>5; absolute residuals3.5. $Q_Y=2(3^2/12.5)+2(3^2/17.5)=2.468571$, df1; do not reject as2.468571<3.841459. EN: insufficient evidence of association, not proof of independence. 中文：无足够关联证据，不是证明独立。

L-A2: (i)is goodness of fit: E=80×each face probability; fixed six probabilities give df6−1=5 before any pooling. (ii)is association: E=row total×column total/80; df=(r−1)(c−1), hence2 for2×3, no Yates. Check all final E>5 in both; if not, revise meaningful categories and recount df. 中文：(i)一个变量对指定模型，(ii)两个分类变量的联系；不是看两题都出现χ²就采用同一种期望表。六面概率及列联具体频数未给，不能编造数值统计量。

## 6. 交接与实际验证边界

正文中的全部数据、题干和检查点为自拟；不冒充实测记录或官方评分标准。已用独立于正文的有限求和核算频数贡献、边际及方差统计量；χ²偶数自由度分位数由有限和CDF二分核验，F偶数自由度分位数由beta有限和CDF二分核验，并检查倒数尾部恒等式。常用df1/2/3的5%χ²分位数作为题内给定数据。作者数值自检不是另一个审查者的独立内容验收。

三段均有概念、公开完整示范、独立题、具体错因恢复、同目标新重试和稍后题；包含信息不足时明确停止计算的诊断任务。参数估计、合组、积分尾部、Yates和F方向有实际计算落点。延后任务尚未由学生完成。

本轮不改生产课程、入口、布局或共享导航；不运行Jekyll或浏览器验收，不认领主代理同时发生的更改。独立内容审查、两语生产HTML和真实桌面/手机阅读、学生试用均待主代理组织；无推送、发布或Git变更命令。

### 派生正文交接：已冻结

按后续授权，另导出scratch正文目录：`C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/fm04-drafts/`。

- `variance-tests.en.md` / `variance-tests.zh.md`
- `goodness-of-fit.en.md` / `goodness-of-fit.zh.md`
- `association-tests.en.md` / `association-tests.zh.md`

每课2个公开完整示范、3个独立任务、3个对应新重试、2个稍后任务；两语均无frontmatter。每个任务使用lesson-check、稳定h3锚点、单行英文Question、分别默认关闭的提示和解答；示范使用worked-example。两语英文Question、全部TeX和h2锚点逐项完全一致；核对全部当前回补文件及锚点存在、section/details配对、任务答案未默认展开。关联课六个可数值检验案例另以行列边际重算通过；低E及信息不足任务明确不给不成立的检验结论。

命令词证据按任务类型保留：test包含假设、条件、统计量、自由度/尾部、临界比较及情境结论；explain需要给出参数估计或约束的原因；find反求题展示不拒绝事件及不等式变化；diagnose需定位错误并给修复或说明所需信息不足。上述是本包自拟作答检查点，不是官方分值。

主代理已读的方差与拟合优度片段保持原样。本轮完成关联片段及基本双语自检后冻结，不再扩写；最终next-step、课程整合及独立评审由主代理负责。此状态不等于生产网页技术验收或学生学习效果验证。
