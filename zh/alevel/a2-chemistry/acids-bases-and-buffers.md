---
title: 酸、碱与缓冲 · Acids, bases and buffers
layout: subjects
mathjax: true
lang: zh-CN
grade: a2
subject: a2-chemistry
translation_of: /alevel/a2-chemistry/acids-bases-and-buffers/
permalink: /zh/alevel/a2-chemistry/acids-bases-and-buffers/
toc_headings: h2
study_page: true
---

[CH03 课程](/zh/alevel/a2-chemistry/) · 3.1.10 · 教材第 21 章，印刷 322–343 页

## 导入与先修 {#introduction}

- **新学：**从[方法选择](#method)开始，再完成示范。
- **作业求助：**先按[方法表](#method)判断体系，再定位对应真题。
- **复习：**先做[独立练习](#practice)，再查[速查与纠错](#quick-reference)。

**开始前：**应会把 cm³ 换成 dm³、用浓度与体积求物质的量、配平中和方程式，并用对数反求浓度。若不熟悉，先完成[课程首页的先修检查](/zh/alevel/a2-chemistry/#prerequisites)。

本章先区分强弱与浓稀，再用 $K_w$、$K_a$ 处理平衡，最后把化学计量与平衡连接起来。计算时始终问：**我现在算的是原溶液、中和后剩余物，还是平衡浓度？**

**先想一想：**温度改变后，纯水的 pH 不等于 7，它是否一定变成酸性？写出你判断“中性”的条件。

## 方法选择 {#method}

先写出溶液中实际存在的物种；只要加过酸或碱，就先检查反应的化学计量。

| 任务 | 第一步 | 然后做什么 |
| --- | --- | --- |
| 强酸／强碱或稀释 | 由化学式和最终体积求离子浓度 | 用 pH 或水的离子积；见[示范 1](#example-1)、[Q1](#q1) |
| 只含弱酸 | 写出平衡和初始浓度 | 估算电离量并检查近似；见[示范 2](#example-2)、[Q5](#q5) |
| 滴定图 | 先找等当体积 | 求酸的 mol；半等当时读 pKa；见[Q3](#q3) |
| 弱酸加有限量强碱 | 先列中和后的 mol 表 | 两组分仍存在才用缓冲比；见[示范 3](#example-3)、[Q4](#q4) |
| 指示剂或实验步骤 | 看等当点附近的跳变区 | 变色范围须落在陡峭区；见[Q7](#q7) |

<span id="a1ph强酸强碱与水的离子积"></span>

## A1：pH、强酸强碱与水的离子积 {#ph-and-kw}

Brønsted–Lowry 酸是质子给体，碱是质子受体。共轭酸碱对相差一个 H⁺。**强弱**描述电离程度；**浓稀**描述单位体积内的物质的量，两者不能混用。

$$\mathrm{pH}=-\log_{10}[\mathrm H^+]$$

$$[\mathrm H^+]=10^{-\mathrm{pH}}$$

$$K_w=[\mathrm H^+][\mathrm{OH}^-]$$

浓度用 mol dm⁻³。对考试中通常浓度的强一元酸，$[\mathrm H^+]\approx c$；NaOH 提供一份 OH⁻，Ba(OH)₂ 提供两份 OH⁻。先由化学式得到离子浓度，再求 pH。极稀溶液须考虑水自身电离，不能无条件使用 $[\mathrm H^+]=c$。

$$\mathrm{pH}+\mathrm{pOH}=\mathrm{p}K_w.$$

只有使用 $K_w=1.00\times10^{-14}$ 时，右边才是 14.00。**中性条件永远是 $[\mathrm H^+]=[\mathrm{OH}^-]$**；中性 pH 为 $\tfrac12\mathrm{p}K_w$。水的电离吸热，升温使 $K_w$ 增大。

### 示范 1：强酸稀释（自拟） {#example-1}

**题目：**在 298 K，把 10.0 cm³ 的 0.100 mol dm⁻³ HCl 稀释到 50.0 cm³，求 pH。

**方法：**没有中和反应，H⁺ 的 mol 不变；使用最终体积。

1. 换成 dm³，H⁺ 的 mol 为 0.100 × 0.0100 = 0.00100。
2. $[\mathrm H^+]=(0.100\times0.0100)/0.0500=0.0200$。
3. pH = −log₁₀(0.0200) = **1.70**。

**独立检查：**稀释五倍使 pH 从 1.00 增加 log₁₀5 ≈ 0.70；酸的 mol 仍为 0.0200 × 0.0500 = 0.00100。

<span id="真题中性水不一定是-ph-7"></span>

### Q1 真题：中性水不一定是 pH 7 {#q1}

**OxfordAQA CH03 · June 2026 · 11.2–11.4 · 1 + 2 + 3 marks**

> **11.2** At 5 °C, the pH of pure water is not 7.00. State why the water is neutral, even though the pH is not 7.00.
>
> **11.3** At 5 °C, $K_w=1.86\times10^{-15}\,\mathrm{mol^2\,dm^{-6}}$. Calculate the pH of water at 5 °C. Give your answer to 2 decimal places.
>
> **11.4** Calculate the pH of a 0.100 mol dm⁻³ solution of Ba(OH)₂ at 5 °C. Give your answer to 2 decimal places. At 5 °C, $K_w=1.86\times10^{-15}\,\mathrm{mol^2\,dm^{-6}}$.

<details markdown="1">
<summary>提示</summary>

纯水使用 $[\mathrm H^+]=\sqrt{K_w}$；Ba(OH)₂ 溶液先得 $[\mathrm{OH}^-]=2c$，再用 $K_w$ 求 H⁺。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 31–32 页。

- 11.2：$[\mathrm H^+]=[\mathrm{OH}^-]$，1 分。
- 11.3：$[\mathrm H^+]=\sqrt{1.86\times10^{-15}}=4.31\times10^{-8}$，pH = **7.37**，求浓度与求 pH 各 1 分。
- 11.4：$[\mathrm{OH}^-]=0.200$；$[\mathrm H^+]=1.86\times10^{-15}/0.200=9.30\times10^{-15}$；pH = **14.03**，三步各 1 分。

不要把 14 当作 pH 的绝对上限，也不要把“酸性”简单定义为 pH 小于 7 而不看温度。

</details>

<span id="a2弱酸ka-与近似条件"></span>

## A2：弱酸、Ka 与近似条件 {#weak-acids}

对一元弱酸 $\ce{HA <=> H+ + A^-}$：

$$K_a=\frac{[\mathrm H^+][\mathrm A^-]}{[\mathrm{HA}]},\qquad\mathrm pK_a=-\log_{10}K_a.$$

在同一温度下，改变初始浓度不改变 $K_a$；它会改变平衡浓度和电离比例。$K_a$ 越大、p$K_a$ 越小，酸越强。

设只含该酸的初始浓度为 $c$，电离量为 $x$，忽略水自身电离：

$$K_a=\frac{x^2}{c-x}.$$

只有 **$x\ll c$** 时，才可以用 $c-x\approx c$，得到 $[\mathrm H^+]\approx\sqrt{K_ac}$。先算出近似 $x$，再检查 $x/c$ 是否足够小；不满足时解二次方程。含盐、加过碱或存在其他 H⁺ 来源时，不能直接套这条“纯弱酸”公式。

### 示范 2：纯弱酸与近似检查（自拟） {#example-2}

**题目：**某一元弱酸的 $c=0.100$、$K_a=1.00\times10^{-5}$（浓度单位为 mol dm⁻³），求 pH 并检查近似。

**方法：**只含弱酸，先估算电离，再检查是否可忽略初始浓度的减少。

1. 由上面的平衡式，$x\approx1.00\times10^{-3}$。
2. 电离量占初始量约 1%，故小量近似合理。
3. pH ≈ **3.00**。

**独立检查：**保留分母中的减少量，解二次方程得 H⁺ 浓度约 9.95 × 10⁻⁴ mol dm⁻³、pH 约 3.002；与近似值一致到两位小数。

<span id="真题从-pka-得到-ka"></span>

### Q2 真题：从 pKa 得到 Ka {#q2}

**OxfordAQA CH03 · June 2026 · 10.1–10.2 · 1 + 1 marks**

Butanoic acid is a weak acid.

$$\ce{CH3CH2CH2COOH(aq) <=> CH3CH2CH2COO^-(aq) + H+(aq)}.$$

At 298 K, the pKa for butanoic acid = 4.82.

> **10.1** Give the expression for the acid dissociation constant, Ka, for butanoic acid.
>
> **10.2** Calculate the value of Ka, in mol dm⁻³, for butanoic acid at 298 K.

<details markdown="1">
<summary>提示</summary>

指数是 $-\mathrm pK_a$；表达式分母为未电离的酸的平衡浓度。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 28 页。

$$K_a=\frac{[\ce{CH3CH2CH2COO^-}][\mathrm H^+]}{[\ce{CH3CH2CH2COOH}]}.$$

$$K_a=10^{-4.82}=\boxed{1.51\times10^{-5}\,\mathrm{mol\,dm^{-3}}}.$$

表达式、数值各 1 分；不要在式子中使用初始 mol 来代替平衡浓度。

</details>

<details markdown="1">
<summary>进阶：January 2025 10.1 的近似为什么需要特别说明？</summary>

这道水合 Fe³⁺ 题给出 $\mathrm pK_a=2.22$、1.35 g FeCl₃、750 cm³。原评分标准（MS 第 30 页）采用 $\sqrt{K_ac}$，得到 **pH = 2.09**。

但 $K_a=6.03\times10^{-3}$，$c=(1.35/162.3)/0.750=0.0111$；按近似得到的电离量占初始量约 **74%**，不能视为小量。若使用**同一个单步电离模型**、保留 $c-x$ 解二次方程，则 pH ≈ **2.24**。

所以这里要区分**原卷的给分方法**与**近似的成立条件**。2.24 是该单步模型的计算结果，不是对真实多步 Fe³⁺ 水解体系的完整预测；本题不作为无条件套用平方根公式的示范。

</details>

<span id="a3滴定曲线指示剂与-rp7"></span>

## A3：滴定曲线、指示剂与 RP7 {#titration}

把酸放在锥形瓶、逐步加入碱时，先画初始 pH，再找中和区和过量碱区。**Equivalence point** 指按化学计量完全中和的位置；**end point** 指指示剂的可见变化位置，两者应尽量接近，但不是同一定义。

| 酸／碱组合 | 等当点附近 | 指示剂选择 |
| --- | --- | --- |
| 强酸／强碱 | 298 K 下等当点约 pH 7，跳变较宽 | methyl orange 或 phenolphthalein 通常均可 |
| 弱酸／强碱 | 共轭碱使等当点 pH > 7；之前有缓冲区 | 通常 phenolphthalein |
| 强酸／弱碱 | 共轭酸使等当点 pH < 7 | 通常 methyl orange |
| 弱酸／弱碱 | 跳变较小，不一定有清楚的视觉终点 | 通常用 pH 测量方法 |

选择指示剂的核心是其变色范围落在曲线的陡峭跳变区，不是死记“所有酸碱滴定用同一个指示剂”。对弱一元酸／强碱，半等当点时 $[\mathrm{HA}]=[\mathrm A^-]$，故 **pH = pKa**。

**RP7：**校准 pH 计，准确移取酸，搅拌后待读数稳定；在预计等当点附近减小加液体积，在其他区可用较大间隔。画 pH 对加入体积的图，不能只连几个稀疏点后凭空确定等当点。冲洗探头、避免交叉污染，并按给定温度解释数据。

<span id="真题从原滴定图求浓度和-ka"></span>

### Q3 真题：从原滴定图求浓度和 Ka {#q3}

**OxfordAQA CH03 · June 2024 · 05.5–05.6 · 3 + 3 marks**

A student adds 0.100 mol dm⁻³ aqueous sodium hydroxide from a burette to 25.0 cm³ of an aqueous solution of the weak acid HX. Figure 4 shows how the pH changes during part of this titration at 298 K.

![Original Figure 4: weak acid HX titrated with sodium hydroxide; pH against volume of NaOH in cubic centimetres.](/assets/img/a2-chemistry/ch03-2024-jun-q05-titration.png)

> **05.5** Use Figure 4 to determine the concentration, in mol dm⁻³, of the weak acid, HX.
>
> **05.6** Use Figure 4 to determine the pH of the mixture at half equivalence (half neutralisation). Use this pH to determine the value of the acid dissociation constant, Ka, at 298 K for the weak acid HX. Give the units for Ka.

<details markdown="1">
<summary>提示</summary>

HX 是一元酸，等当点时 $n(\mathrm{HX})=n(\mathrm{NaOH})$。半等当的体积是等当体积的一半，不是 pH 的一半。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 20 页。

05.5：等当体积约 27.0 cm³；酸的 mol 为 $0.100\times0.0270=0.00270$；原浓度 $0.00270/0.0250=\boxed{0.108\,\mathrm{mol\,dm^{-3}}}$。三个步骤各 1 分。

05.6：13.5 cm³ 处 pH 约 **5.3**；所以 $K_a=10^{-5.3}=\boxed{5.01\times10^{-6}\,\mathrm{mol\,dm^{-3}}}$。图读数、Ka 数值、单位各对应 1 分；原 MS 接受合理的读图范围，不要求读出图上没有的精度。

</details>

<span id="a4缓冲溶液先中和再平衡"></span>

## A4：缓冲溶液——先中和，再平衡 {#buffers}

**酸性缓冲**含弱酸 HA 与大量共轭碱 A⁻；加入少量 H⁺ 时，$\ce{A^- + H+ -> HA}$；加入少量 OH⁻ 时，$\ce{HA + OH^- -> A^- + H2O}$。这样 H⁺ 浓度变化较小，pH 较稳定，**并非完全不变**。缓冲能力有限，耗尽任一组分后不再能按原方式缓冲。

**碱性缓冲**可由 NH₃ 与 NH₄⁺ 盐组成：NH₃ 消耗加入的 H⁺，NH₄⁺ 消耗加入的 OH⁻。这里理解两类原理，定量重点放在酸性缓冲。

$$[\mathrm H^+]\approx K_a\frac{[\mathrm{HA}]}{[\mathrm A^-]},\qquad\mathrm{pH}=\mathrm pK_a+\log_{10}\frac{[\mathrm A^-]}{[\mathrm{HA}]}.$$

在同一最终体积内，浓度比等于 mol 比。若缓冲由弱酸与强碱部分中和形成，必须先用 mol 表计算：HA 减少多少、A⁻ 生成多少、OH⁻ 是否仍有剩余。完全中和时的盐溶液、过量强碱体系，不可以继续套双组分缓冲公式。

### 示范 3：先中和，再求缓冲 pH（自拟） {#example-3}

**题目：**在 298 K，20.0 cm³ 的 0.100 mol dm⁻³ 一元弱酸（Ka = 1.00 × 10⁻⁵ mol dm⁻³）与 10.0 cm³ 的 0.100 mol dm⁻³ NaOH 混合，求 pH。

**方法：**先计算中和后的 HA 与 A⁻，确认没有剩余强碱。

1. 初始酸为 0.00200 mol，OH⁻ 为 0.00100 mol；中和按 1:1 进行。
2. 最终 HA 和 A⁻ 各为 0.00100 mol，OH⁻ 为零。两者同处 0.0300 dm³ 中，浓度比等于 mol 比。
3. H⁺ 浓度近似等于 Ka × 1 = 1.00 × 10⁻⁵ mol dm⁻³，**pH = 5.00**。

**独立检查：**HA 与 A⁻ 等量，pH 应等于 pKa。酸性物种总量 0.00100 + 0.00100 = 0.00200 mol，守恒；求的是平衡 H⁺，不是剩余强酸。

<span id="真题部分中和形成缓冲"></span>

### Q4 真题：部分中和形成缓冲 {#q4}

**OxfordAQA CH03 · June 2026 · 10.3 · 6 marks**

> A different acid, propanoic acid, CH₃CH₂COOH is reacted with NaOH.
>
> 14.0 cm³ of 0.200 mol dm⁻³ aqueous propanoic acid are reacted with 25.0 cm³ of 0.100 mol dm⁻³ aqueous NaOH.
>
> At 298 K, the Ka of propanoic acid = $1.35\times10^{-5}\,\mathrm{mol\,dm^{-3}}$.
>
> Calculate the pH of the final mixture. Give your answer to 2 decimal places.

<details markdown="1">
<summary>提示</summary>

写出反应前、反应量、反应后；最终弱酸和共轭碱都是否仍存在？不要先把两种溶液浓度直接代入。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 29 页。

| 物种 | 初始 mol | 最终 mol |
| --- | --- | --- |
| CH₃CH₂COOH | $0.0140\times0.200=0.00280$ | $0.00280-0.00250=0.000300$ |
| OH⁻ | $0.0250\times0.100=0.00250$ | 0 |
| CH₃CH₂COO⁻ | 0 | 0.00250 |

$$[\mathrm H^+]=1.35\times10^{-5}\frac{0.000300}{0.00250}=1.62\times10^{-6},\qquad \boxed{\mathrm{pH}=5.79}.$$

六个评分步骤：酸的 mol、碱的 mol、剩余酸、正确平衡关系、H⁺ 数值、pH。此题反应前是丙酸，解析也必须使用丙酸／丙酸根。

**复做：**把加入的 NaOH 改为 28.0 cm³。此时恰好完全中和，不能用本题的缓冲比继续计算。

</details>

## 独立练习 {#practice}

先不打开提示或评分解析；用下面的索引选题，写清自己采用的第一步。

| 练习 | 检查能力 |
| --- | --- |
| [Q1：低温纯水与强碱](#q1) | 中性条件、离子个数与温度下的 Kw |
| [Q2：pKa 与 Ka](#q2) | 正确的平衡表达式与反对数 |
| [Q3：滴定曲线](#q3) | 等当体积、原酸浓度、半等当点 |
| [Q4：部分中和缓冲](#q4) | 中和后的 mol 表与缓冲比 |
| [Q5：弱酸近似（自拟）](#q5) | 独立检查电离量占比 |
| [Q6：缓冲再加碱（自拟）](#q6) | 更新 mol 后预测 pH 的方向 |
| [Q7：指示剂与 RP7（自拟）](#q7) | 从曲线选择指示剂、控制读数间隔 |

### Q5 弱酸近似（自拟） {#q5}

一元弱酸初始浓度为 0.0100 mol dm⁻³，Ka = 1.00 × 10⁻⁵ mol dm⁻³。求近似 pH，检查电离量占比，再用二次方程复核。

<details markdown="1">
<summary>提示</summary>

从[示范 2](#example-2)的平衡式出发；先估算，后检查。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

自拟题，无官方分值。近似 H⁺ 浓度为 3.16 × 10⁻⁴ mol dm⁻³，pH ≈ **3.50**；电离量约占 3.16%。完整二次方程给 3.11 × 10⁻⁴ mol dm⁻³、pH ≈ **3.51**。本题小量近似较合理，但两位小数结果有约 0.01 的差别；不要不经检查就声称近似完全精确。

</details>

### Q6 缓冲中加入少量强碱（自拟） {#q6}

向[示范 3](#example-3)的最终缓冲液加入 0.000200 mol NaOH，温度不变，忽略体积变化。先预测 pH 的方向，再计算。

<details markdown="1">
<summary>提示</summary>

OH⁻ 消耗 HA 并生成等量 A⁻。写出新 mol 表，再代入缓冲比。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

自拟题，无官方分值。HA 为 0.000800 mol，A⁻ 为 0.00120 mol；pH = 5.00 + log₁₀(1.50) = **5.18**。pH 略升，HA 与 A⁻ 都仍存在；两者总量仍为 0.00200 mol。

</details>

### Q7 指示剂与滴定读数（自拟） {#q7}

弱酸／强碱滴定在等当点附近的陡峭区跨越 pH 8–10。给定 methyl orange 的变色范围为 3.1–4.4、phenolphthalein 为 8.2–10.0，选择指示剂并说明理由。解释为什么在预计等当点附近不能一直每次加入 5 cm³ 碱。

<details markdown="1">
<summary>提示</summary>

把变色范围放到给定的跳变区内；想一想大体积间隔会漏掉什么。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

自拟题，无官方分值。选 phenolphthalein：其变色范围落在陡峭区，少量加入碱就能使颜色明显改变。5 cm³ 间隔可能跨过整个跳变区，难以定位等当体积；应在附近减小加液间隔，并搅拌、待读数稳定。

</details>

## 速查与纠错 {#quick-reference}

| 体系或定义 | 速查 | 易错点 |
| --- | --- | --- |
| 中性 | H⁺ 与 OH⁻ 浓度相等 | pH = 7 只适用于相应温度的 Kw |
| 强弱／浓稀 | 电离程度／单位体积物质的量 | 强酸可以很稀，弱酸可以很浓 |
| pH 与 Kw | 先求离子浓度，再用 A1 的关系 | Ba(OH)₂ 的 OH⁻ 浓度是配制浓度的两倍 |
| 纯弱酸 | A2 的 Ka 平衡式；小量时用平方根近似 | 检查电离量占初始量的比例 |
| 半等当点 | pH = pKa | 体积减半，不是 pH 减半 |
| 缓冲 | 先中和，再用 A4 的浓度比或 mol 比 | 两组分都须存在，pH 不是完全不变 |

**独立验算：**每个 mol 表检查守恒与非负数；浓度单位使用 mol dm⁻³；改变条件后先预测 pH 方向。弱酸检查近似，读图不报超出图像精度的数字。

| 错误答案或表现 | 回到哪里 | 关上解析后复做 |
| --- | --- | --- |
| 把 5 °C 中性水写成 pH 7 | [A1](#ph-and-kw)、[Q1](#q1) | 先写中性条件，再重新算 11.3 |
| Ka 大于 1，却来自 pKa = 4.82 | [A2](#weak-acids)、[Q2](#q2) | 检查指数的符号，重新做 10.2 |
| 加碱后仍直接套纯弱酸公式 | [示范 3](#example-3)、[Q4](#q4) | 重列反应后的 mol 表，复做 10.3 |
| 缓冲加碱后 pH 下降 | [Q6](#q6)、[A4](#buffers) | 先预测 HA／A⁻ 的变化，再计算 |
| 把半等当点理解成 pH 的一半 | [A3](#titration)、[Q3](#q3) | 重新找 13.5 cm³ 处的 pH |

<span id="闭卷检查与下一步"></span>

## 完成检查与下一步 {#completion}

不用看公式，分别说明纯弱酸、强碱、半等当点、缓冲体系应从哪一步开始；解释两个近似条件：弱酸的小量电离、缓冲中组分的消耗可忽略。

**完成标准：**能在不看解析时选择计算方法、正确列中和 mol 表、检查弱酸近似，并用曲线解释指示剂选择。若有一项未完成，按上表定位后复做对应题。

[上一课：电极电势](/zh/alevel/a2-chemistry/electrode-potentials/) · [下一课：第三周期](/zh/alevel/a2-chemistry/period-3/) · [返回 CH03 课程](/zh/alevel/a2-chemistry/)
