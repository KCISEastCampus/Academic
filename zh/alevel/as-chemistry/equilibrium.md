---
title: 化学平衡与Kc
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/equilibrium/
permalink: /zh/alevel/as-chemistry/equilibrium/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">反应持续进行，混合物为什么可以不再变化？</h2>

颜色或浓度恒定，不必表示反应完全停止。可逆反应的两个相反变化可以等速持续。本页把这个粒子模型连接到条件预测、平衡计算与工业决策。

先修是[摩尔与配平比例](/zh/alevel/as-chemistry/amount-and-equations/)、[浓度](/zh/alevel/as-chemistry/solutions-and-titration/)、[速率与催化](/zh/alevel/as-chemistry/kinetics/)和[焓变符号](/zh/alevel/as-chemistry/energetics-and-calorimetry/)。AS 3.1.7.1–2 包括**均相 $K_c$**，并不推迟到 A2。每道计算中所有物种均同相。全部题、数据和图为**自拟／constructed**；题给常数和圆整能量值是练习输入，不是新测量。

<h2 id="dynamic-model">速率相等不代表浓度相等</h2>

可逆箭头 $\rightleftharpoons$ 表示逆变化可以发生。封闭体系、条件固定，若起初主要是反应物，正向通常较快，逆向较慢；产物积累后，逆过程逐渐明显。达到 **dynamic equilibrium（动态平衡）**时，正逆反应速率相等且非零，净变化为零，因此各浓度恒定。

平衡浓度不必相等。产物远多于反应物的混合物，也可以每单位时间发生等量正逆变化。体系须保留相关反应物质，气体通常需密闭容器。“封闭”不等于绝热：可以通过传热控制温度，同时不让物质逃逸。

![构造示意：正向速率下降、逆向速率上升，最终在同一正值重合；平衡时两过程仍继续，时间轴、速率轴及线名均有标注。](/assets/img/chemistry-as-equilibrium-rates.svg)

单凭浓度记录变平不能证明平衡，也可能只是反应极慢或试剂耗尽。还须结合可逆、条件稳定及两过程继续的证据判断。

<div class="lesson-check" markdown="1">
<h3 id="dynamic-check">解释稳定的混合物</h3>
<!-- task:dynamic-check -->
A closed reversible gas system H2(g) + I2(g) ⇌ 2HI(g) is kept at constant temperature and volume. Its concentrations remain at [H2] = 0.20, [I2] = 0.10 and [HI] = 0.60 mol dm−3. A separate tracer observation shows conversion in both directions at equal reaction rates. Explain why the state is dynamic equilibrium, sketch the forward/reverse rate behaviour if initially only H2 and I2 were present, and correct the claims “the concentrations must be equal” and “a flat concentration trace alone proves equilibrium”.
<!-- /task:dynamic-check -->
<details markdown="1"><summary>Hint／提示</summary>
同时使用示踪证据与平稳记录；净变化为零不等于微观变化为零。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
两方向等速且非零地继续，解释浓度恒定却不相等。图中正向初始为正、逆向初始为零，随后趋于同一正值。条件是速率相等，不是浓度相等；浓度平稳本身还可能是反应停滞，所以需附加的可逆／动态证据及封闭、受控条件。若画成两速率最终都零，回看[动态平衡](#dynamic-model)，再[检查相等浓度](#retry-dynamic)。
</details>
</div>

<h2 id="disturbances">分清外加改变与随后响应</h2>

**Le Chatelier’s principle（勒夏特列原理）**：平衡体系条件改变后，会向减弱该改变的方向移动。它预测方向，不直接给精确新反应量，也不表示扰动被完全抵消。先写清反应及保持条件。

- 定温定容加反应物，使其浓度瞬间升高，再由净正向反应消耗一部分；最终浓度未必回到旧值。移走产物通常促进继续生成产物。
- 恒温压缩气体使所有气体浓度瞬间升高，随后向**按题写方程气体总摩尔数较少侧**移动。两侧气体系数总和相同时，在理想化模型下均匀压缩不改变组成比例。关键是反应气体浓度改变，不只是压力表读数升高。
- 升温有利于**吸热**方向，降温有利于放热方向；先读正向 $\Delta H$ 符号。
- 催化剂加快正逆方向及达到平衡，不改变同温平衡位置。

例如 $\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$ 正向放热。恒温压缩有利于四摩尔气体变两摩尔，平衡向氨侧；升温有利于逆向吸热。这是平衡产率判断，升温同时仍可使正向反应速率增大。

<div class="lesson-check" markdown="1">
<h3 id="conditions-check">评价四种操作</h3>
<!-- task:conditions-check -->
For N2(g) + 3H2(g) ⇌ 2NH3(g), take the forward ΔH as −92 kJ per mole of reaction as written. Starting from equilibrium, predict and justify the direction of net change after each separate intervention: increase temperature; compress at unchanged temperature; add H2 at fixed temperature and volume; add an active catalyst at unchanged temperature. Distinguish the immediate imposed concentration change from the subsequent reaction response where appropriate, and distinguish equilibrium yield from speed.
<!-- /task:conditions-check -->
<details markdown="1"><summary>Hint／提示</summary>
数气体系数，找吸热方向；催化不等于加热。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
升温向左吸热，氨平衡产率降低，尽管反应通常更快。恒温压缩先使各气体浓度都升高，再向右减少气体总量。加 H2 先提高其浓度，再净正向消耗一部分并生成氨，不必恢复原 H2 浓度。单加催化剂不移平衡，只加快扰动后的恢复。若把反应更快等同平衡产率更高，回看[条件操作](#disturbances)，再[换气体系数](#retry-conditions)。
</details>
</div>

<h2 id="kc-model">写出平衡浓度比值</h2>

对于指定温度的均相反应 $\ce{aA + bB <=> cC + dD}$：

$$K_c=\frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}$$

方括号代表**平衡浓度，单位 $\mathrm{mol\,dm^{-3}}$**；系数变成幂，不是写在浓度前的乘数。同一温度、同一写法的方程，初始量不同也可在平衡时给出同一 $K_c$。

本课程浓度约定下，将浓度单位代入表达式推导单位。$\ce{N2O4(g) <=> 2NO2(g)}$ 的 $K_c=[\ce{NO2}]^2/[\ce{N2O4}]$ 单位为 $\mathrm{mol\,dm^{-3}}$；$\ce{H2(g) + I2(g) <=> 2HI(g)}$ 的单位相消。反转方程，表达式与常数取倒数；改变计量写法也改变相应常数。只能比较相同方程、相同温度。

气体浓度均应由 $n/V$ 求得，不能直接放摩尔数，除非已证明体积因子相消。本页均为均相气体计算，不需要另教异相固体省略规则。

<div class="worked-example" markdown="1">
<h3 id="worked-kc">完整示范：物质的量不是浓度</h3>
构造同温平衡混合物，均为气体：2.00 dm³ 内有 0.160 mol N2O4 与 0.0800 mol NO2。对于 $\ce{N2O4(g) <=> 2NO2(g)}$，浓度分别为 $0.160/2.00=0.0800$ 与 $0.0800/2.00=0.0400$ $\mathrm{mol\,dm^{-3}}$。

$$K_c=\frac{(0.0400)^2}{0.0800}=\mathbf{0.0200\,mol\,dm^{-3}}$$

直接代摩尔数会得 0.0400，漏掉体积因子。此比值之所以是平衡常数，是因为数据描述同一温度的平衡，不是任意浓度比都永远恒定。
</div>

<div class="lesson-check" markdown="1">
<h3 id="kc-check">从另一条方程建立表达式</h3>
<!-- task:kc-check -->
A constructed equilibrium mixture for 2SO2(g) + O2(g) ⇌ 2SO3(g) contains 0.400 mol SO2, 0.200 mol O2 and 0.800 mol SO3 in 2.00 dm3 at a fixed temperature. Write Kc, calculate its value with units, and diagnose a report that puts the mole amounts directly into the expression and obtains 20.0. State what composition data must refer to for the value to be an equilibrium constant.
<!-- /task:kc-check -->
<details markdown="1"><summary>Hint／提示</summary>
先显示幂次和各项 n/V，再消单位。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
$K_c=[\ce{SO3}]^2/([\ce{SO2}]^2[\ce{O2}])$。SO2、O2、SO3 浓度分别为 0.200、0.100、0.400，故 $K_c=0.400^2/(0.200^2\times0.100)=\mathbf{40.0\,dm^3\,mol^{-1}}$。浓度净幂为 −1，体积因子不能相消；直接用摩尔数才会错得 20.0。数据必须是指定温度的平衡组成。若丢失幂或体积，回看[表达式](#kc-model)，再[反转不等气体量反应](#retry-kc)。
</details>
</div>

<h2 id="amount-table">先求平衡量，再除以体积</h2>

若只给初始量，应用配平方程连接变化。$\ce{H2 + I2 <=> 2HI}$ 中，设正向消耗 $x$ mol H2，则 I2 也少 $x$，HI 却多 $2x$。先列初始—变化—平衡量，再代 $K_c$。每种物质都须非负；代数根超出物理区间，就不是可能的混合物。

<div class="worked-example" markdown="1">
<h3 id="worked-composition">完整示范：求反应进行的量</h3>
构造同温气体练习：2.00 dm³ 容器初始有 H2、I2 各 1.00 mol，无 HI，$K_c=16.0$。平衡量为 $(1-x),(1-x),2x$ mol，且 $0\le x\le1$：

$$16.0=\frac{(2x/2.00)^2}{[(1-x)/2.00]^2}=\frac{4x^2}{(1-x)^2}$$

这里浓度幂次平衡，所以体积相消。有限常数不允许分母为零，分子／分母比非负，因此取正平方根：

$$4=\frac{2x}{1-x},\qquad4(1-x)=2x,\qquad x=\frac23$$

H2、I2、HI 的量为 $\mathbf{1/3,\ 1/3,\ 4/3\ mol}$，浓度为 $\mathbf{1/6,\ 1/6,\ 2/3\ mol\,dm^{-3}}$。代回得 $(2/3)^2/(1/6)^2=16$，氢、碘原子量守恒。HI 的系数 2 不能省略。
</div>

<div class="lesson-check" markdown="1">
<h3 id="composition-check">从已有产物的体系出发</h3>
<!-- task:composition-check -->
Constructed gas exercise at a fixed temperature: a 1.00 dm3 vessel initially contains 0.500 mol H2, 0.500 mol I2 and 0.500 mol HI. For H2(g) + I2(g) ⇌ 2HI(g), Kc = 4.00. Set up an amount table, find the equilibrium amounts and concentrations, and state the physical interval for a forward-change variable x. Explain why writing the final HI amount as 2x would be wrong and verify your result in Kc.
<!-- /task:composition-check -->
<details markdown="1"><summary>Hint／提示</summary>
保留初始产物，让数据决定净反应方向。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
设净正向 $x$ mol，平衡量为 $0.500-x,\ 0.500-x,\ 0.500+2x$。非负条件给 $-0.250\le x\le0.500$，有限平衡表达式排除不可能端点。1.00 dm³ 中浓度与摩尔数数值相同：
$$4=\frac{(0.500+2x)^2}{(0.500-x)^2},\quad2=\frac{0.500+2x}{0.500-x}$$
$$1.000-2x=0.500+2x,\quad x=0.125.$$
平衡 H2、I2 各 **0.375 mol**，HI **0.750 mol**，浓度数值相同、单位 $\mathrm{mol\,dm^{-3}}$。代回 $0.750^2/0.375^2=4$。只写 $2x$ 会丢掉原有 HI。量表有误时回看[进行量](#amount-table)，再[求解解离](#retry-composition)。
</details>
</div>

<h2 id="kc-and-conditions">组成可改变，常数却不变</h2>

对同一写法的反应，**温度改变 $K_c$**。正向吸热时，升温有利产物，$K_c$ 增大；正向放热时，升温使 $K_c$ 减小。同温下改变浓度、压缩或加催化剂不改变 $K_c$。

加料或压缩后瞬间，把新浓度代入相同表达式可得到不同于 $K_c$ 的比值，但那时还不是新平衡；净反应随后把比值恢复为该温度要求的值。要区分“混合物变了”和“常数变了”。催化只改恢复速度，不改所要求的比值。

<h2 id="industry">作折中，而不是只最大化一个指标</h2>

对氨合成一类正向放热过程，低温有利平衡转化，却可能生产太慢。高压有利气体总量较少的产物侧，并常使碰撞更快，但压缩耗能，设备也须更贵、更耐压。催化可使较低温运行变得实用，不代表改变该温度的平衡。

工艺判断需同时考虑**单位时间有效产量、平衡转化、分离／循环、能耗与设备限制**。各反应器通过之间冷却分离产物，可回收产物并循环未反应原料，并非催化改变了 $K_c$。定性化学不能认证唯一精确的经济最优温压，应在安全设计范围内比较实测速率、产率与成本。

<div class="lesson-check" markdown="1">
<h3 id="industrial-check">论证生产条件选择</h3>
<!-- task:industrial-check -->
A proposed ammonia process uses the reversible exothermic reaction N2(g) + 3H2(g) ⇌ 2NH3(g). The plant must achieve a useful production rate and has a fixed maximum permitted pressure; increasing compression has rising energy/equipment costs. An engineer proposes the lowest possible temperature and unlimited pressure to maximise output, while another claims that a catalyst increases Kc. Evaluate both proposals and outline a defensible compromise, including what additional evidence is needed to choose actual settings and how product separation/recycling can help.
<!-- /task:industrial-check -->
<details markdown="1"><summary>Hint／提示</summary>
平衡转化与单位时间有效产量不同，分清温度、压强、催化效应。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
低温有利放热平衡，但速率可能不足；无限压强违反设计上限，也忽略成本。温度折中速率与转化，压力在批准范围内权衡产率／吞吐收益和成本；用催化改善速率，不是增大 $K_c$。决定实际最优值前需要速率、平衡产率、能耗、分离循环与设备成本数据。分离氨、循环未反应气体，可避免单程转化较低就浪费全部原料。该正向放热反应升温使 $K_c$ 降低；催化与恒温变压不改 $K_c$。若只答高压低温，回看[折中](#industry)，再[改变反应符号](#retry-industry)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="report-check">核查压缩后的平衡报告</h3>
<!-- task:report-check -->
Constructed closed gas equilibrium at a fixed temperature: N2O4(g) ⇌ 2NO2(g), initially [N2O4] = 0.100 and [NO2] = 0.200 mol dm−3. The volume is suddenly halved and temperature restored before appreciable reaction. Calculate the original Kc and the immediate concentration ratio after compression, then predict the net reaction direction and whether Kc changes. A report says “a shift to the left proves the final NO2 concentration is below its original 0.200”. Evaluate that claim by distinguishing amount, concentration and the immediate compressed state; show how to check it quantitatively.
<!-- /task:report-check -->
<details markdown="1"><summary>Hint／提示</summary>
把瞬时比值与不变的平衡要求比较，先有压缩改浓度，再有反应改摩尔数。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
原 $K_c=0.200^2/0.100=\mathbf{0.400\,mol\,dm^{-3}}$。瞬间 N2O4 为 0.200、NO2 为 0.400，比值 $0.400^2/0.200=\mathbf{0.800\,mol\,dm^{-3}}$。净二聚消耗 NO2，向左直到比值恢复 0.400；$K_c$ 不变。

向左使 NO2 相对**压缩后瞬时浓度**降低，不必低于压缩前。定最终体积，设压缩后生成 N2O4 的浓度为 $y$，则新浓度 $0.200+y$ 与 $0.400-2y$，$0\le y\le0.200$：
$$\frac{(0.400-2y)^2}{0.200+y}=0.400,\qquad4y^2-2.00y+0.0800=0.$$
两根约为 0.0438、0.456，后者使 NO2 为负，舍去。最终 NO2 约 **0.312 $\mathrm{mol\,dm^{-3}}$**，比原 0.200 高，但比瞬时 0.400 低。报告混淆了反应方向与体积外加改变的总效果。比较状态错时做[改变气体计量重试](#retry-conditions)，以后关闭帮助重做本报告。
</details>
</div>

<h2 id="retry">改变条件，再试一次</h2>

选对应错误的重试，收起先前答案，先写新推理再展开解答。

<div class="lesson-check" markdown="1">
<h3 id="retry-dynamic">浓度相等，速率不等</h3>
<!-- task:retry-dynamic -->
A closed reversible system has equal reactant and product concentrations at one instant, but measured forward and reverse reaction rates are 0.030 and 0.010 mol dm−3 s−1 respectively. Is it at equilibrium? Explain the net change, state what must hold at dynamic equilibrium and identify why concentration equality is not the deciding evidence.
<!-- /task:retry-dynamic -->
<details markdown="1"><summary>Hint／提示</summary>
比较两个速率，相同数量不保证相同周转速度。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
不是平衡，按题给反应速率基准仍有 0.020 $\mathrm{mol\,dm^{-3}\,s^{-1}}$ 的净正向差。动态平衡要求封闭、条件稳定、正逆速率相等且非零，从而浓度恒定；并不要求各浓度相等。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-conditions">改变气体总量关系与吸放热方向</h3>
<!-- task:retry-conditions -->
For a hypothetical homogeneous gas reaction A(g) + B(g) ⇌ 2C(g), use a stated positive forward ΔH. Predict the equilibrium response and Kc change when I: the mixture is compressed isothermally; II: temperature is increased; III: an inert gas is added at fixed volume and temperature; IV: a catalyst is added at fixed temperature. Explain why a higher total pressure in III is not the same intervention as I.
<!-- /task:retry-conditions -->
<details markdown="1"><summary>Hint／提示</summary>
分别看气体系数总和、焓符号及真正改变的浓度。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
I 两侧均两摩尔气体，理想化均匀压缩不移组成平衡，$K_c$ 不变；II 正向吸热有利，$K_c$ 增大；III 定容定温不改反应气体浓度，所以不移平衡、不改常数，而 I 使它们浓度都升高；IV 只加快达到平衡，不改位置及 $K_c$。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-kc">反转浓度表达式</h3>
<!-- task:retry-kc -->
A constructed equilibrium for N2O4(g) ⇌ 2NO2(g) has 0.200 mol N2O4 and 0.100 mol NO2 in 2.00 dm3 at fixed temperature. Calculate Kc for the forward equation and for 2NO2(g) ⇌ N2O4(g), giving units. Explain whether the volume cancels and why the two numerical constants differ without any change of mixture.
<!-- /task:retry-kc -->
<details markdown="1"><summary>Hint／提示</summary>
用同一浓度建立两式，反向使比值取倒数。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
浓度为 0.100 与 0.0500 $\mathrm{mol\,dm^{-3}}$；正向 $K_c=0.0500^2/0.100=\mathbf{0.0250\,mol\,dm^{-3}}$，逆向为倒数 $\mathbf{40.0\,dm^3\,mol^{-1}}$。浓度幂不平衡，所以体积不相消。常数对应方程写法，不是独立于方程附在混合物上的一个数。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-composition">求解解离并舍去不可能根</h3>
<!-- task:retry-composition -->
Constructed fixed-temperature exercise: initially 0.150 mol N2O4 and no NO2 occupy 1.00 dm3. For N2O4(g) ⇌ 2NO2(g), Kc = 0.0500 mol dm−3. Find the equilibrium amounts using x mol dissociated, show the quadratic equation and reject any physically impossible root. Verify the remaining root in Kc.
<!-- /task:retry-composition -->
<details markdown="1"><summary>Hint／提示</summary>
一摩尔解离生成两摩尔 NO2，该初态下 x 不能负。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
平衡量为 $0.150-x$ 与 $2x$ mol，$0\le x\le0.150$；在 1.00 dm³ 中：
$$0.0500=\frac{4x^2}{0.150-x},\qquad4x^2+0.0500x-0.00750=0.$$
$$x=\frac{-0.0500\pm\sqrt{0.0500^2+4(4)(0.00750)}}{8}=\frac{-0.0500\pm0.350}{8}.$$
根为 **0.0375** 和 **−0.0500** mol；负根会使 NO2 为负，舍去。N2O4 平衡量 **0.1125 mol**，NO2 **0.0750 mol**，代回 $0.0750^2/0.1125=0.0500$。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-industry">改变热效应与设备约束</h3>
<!-- task:retry-industry -->
A proposed homogeneous gas synthesis is A(g) + B(g) ⇌ C(g), with a constructed positive forward ΔH. A pressure limit is already reached, and higher temperature increases both equilibrium conversion and reaction speed but incurs extra energy cost and material limits. Explain why the exothermic-process advice “use lower temperature for yield” cannot be copied, predict temperature and catalyst effects on Kc, and describe the evidence needed for an operating decision.
<!-- /task:retry-industry -->
<details markdown="1"><summary>Hint／提示</summary>
重新读焓符号，不套固定工业配方。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
此正向吸热反应升温有利 C，$K_c$ 增大，不能照搬低温提高平衡产率。催化提速但不改 $K_c$。尽管压缩有利少气体的产物侧，仍不能越过压力设计上限。需比较实测速率／产率、能耗与材料限制后决定温度，定性趋势不能给精确最优值。
</details>
</div>

<h2 id="sources">范围与延后回顾</h2>

OxfordAQA 9620 [大纲5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，pp.19–20，3.1.7.1–2。教材 Lister / Renshaw（2016）已参考 pp.115–120、122–128；旧边注编号不改变当前 AS 边界。本页教均相浓度 Kc，不教 A2 Kp、酸解离或熵，不赋伪官方分值，不认证工厂最优设置。学过其他主题后，关闭帮助重做 report-check，比较首次解释、错误与重试。[AS 化学入口](/zh/alevel/as-chemistry/)。
