---
title: 酸、碱与缓冲 · Acids, bases and buffers
layout: subjects
mathjax: true
lang: zh-CN
grade: a2
subject: a2-chemistry
permalink: /alevel/a2-chemistry/acids-bases-and-buffers/
toc_headings: h2
study_page: true
---

[CH03 课程](/alevel/a2-chemistry/) · 3.1.10 · 教材第 21 章，印刷 322–343 页

本章先区分强弱与浓稀，再用 $K_w$、$K_a$ 处理平衡，最后把化学计量与平衡连接起来。计算时始终问：**我现在算的是原溶液、中和后剩余物，还是平衡浓度？**

**先想一想：**温度改变后，纯水的 pH 不等于 7，它是否一定变成酸性？写出你判断“中性”的条件。

<span id="ph-and-kw"></span>

## A1：pH、强酸强碱与水的离子积

Brønsted–Lowry 酸是质子给体，碱是质子受体。共轭酸碱对相差一个 H⁺。**强弱**描述电离程度；**浓稀**描述单位体积内的物质的量，两者不能混用。

$$\mathrm{pH}=-\log_{10}[\mathrm H^+]$$

$$[\mathrm H^+]=10^{-\mathrm{pH}}$$

$$K_w=[\mathrm H^+][\mathrm{OH}^-]$$

浓度用 mol dm⁻³。对考试中通常浓度的强一元酸，$[\mathrm H^+]\approx c$；NaOH 提供一份 OH⁻，Ba(OH)₂ 提供两份 OH⁻。先由化学式得到离子浓度，再求 pH。极稀溶液须考虑水自身电离，不能无条件使用 $[\mathrm H^+]=c$。

$$\mathrm{pH}+\mathrm{pOH}=\mathrm{p}K_w.$$

只有使用 $K_w=1.00\times10^{-14}$ 时，右边才是 14.00。**中性条件永远是 $[\mathrm H^+]=[\mathrm{OH}^-]$**；中性 pH 为 $\tfrac12\mathrm{p}K_w$。水的电离吸热，升温使 $K_w$ 增大。

**示范（自拟）：**在 298 K，把 10.0 cm³ 的 0.100 mol dm⁻³ HCl 稀释到 50.0 cm³，H⁺ 的 mol 不变，$[\mathrm H^+]=(0.100\times0.0100)/0.0500=0.0200$，pH = 1.70。

### 真题：中性水不一定是 pH 7

**OxfordAQA CH03 · June 2026 · 11.2–11.4 · 1 + 2 + 3 marks**

> **11.2** At 5 °C, the pH of pure water is not 7.00. State why the water is neutral, even though the pH is not 7.00.
>
> **11.3** At 5 °C, $K_w=1.86\times10^{-15}\,\mathrm{mol^2\,dm^{-6}}$. Calculate the pH of water at 5 °C. Give your answer to 2 decimal places.
>
> **11.4** Calculate the pH of a 0.100 mol dm⁻³ solution of Ba(OH)₂ at 5 °C. Give your answer to 2 decimal places. At 5 °C, $K_w=1.86\times10^{-15}\,\mathrm{mol^2\,dm^{-6}}$.

<details markdown="1">
<summary>提示：对水与 Ba(OH)₂ 分别找 OH⁻ 的来源</summary>

纯水使用 $[\mathrm H^+]=\sqrt{K_w}$；Ba(OH)₂ 溶液先得 $[\mathrm{OH}^-]=2c$，再用 $K_w$ 求 H⁺。

</details>

<details markdown="1">
<summary>评分解析：MS 第 31–32 页</summary>

- 11.2：$[\mathrm H^+]=[\mathrm{OH}^-]$，1 分。
- 11.3：$[\mathrm H^+]=\sqrt{1.86\times10^{-15}}=4.31\times10^{-8}$，pH = **7.37**，求浓度与求 pH 各 1 分。
- 11.4：$[\mathrm{OH}^-]=0.200$；$[\mathrm H^+]=1.86\times10^{-15}/0.200=9.30\times10^{-15}$；pH = **14.03**，三步各 1 分。

不要把 14 当作 pH 的绝对上限，也不要把“酸性”简单定义为 pH 小于 7 而不看温度。

</details>

<span id="weak-acids"></span>

## A2：弱酸、Ka 与近似条件

对一元弱酸 $\ce{HA <=> H+ + A^-}$：

$$K_a=\frac{[\mathrm H^+][\mathrm A^-]}{[\mathrm{HA}]},\qquad\mathrm pK_a=-\log_{10}K_a.$$

在同一温度下，改变初始浓度不改变 $K_a$；它会改变平衡浓度和电离比例。$K_a$ 越大、p$K_a$ 越小，酸越强。

设只含该酸的初始浓度为 $c$，电离量为 $x$，忽略水自身电离：

$$K_a=\frac{x^2}{c-x}.$$

只有 **$x\ll c$** 时，才可以用 $c-x\approx c$，得到 $[\mathrm H^+]\approx\sqrt{K_ac}$。先算出近似 $x$，再检查 $x/c$ 是否足够小；不满足时解二次方程。含盐、加过碱或存在其他 H⁺ 来源时，不能直接套这条“纯弱酸”公式。

**示范（自拟）：**$c=0.100$、$K_a=1.00\times10^{-5}$ 时，$x\approx1.00\times10^{-3}$，电离约 1%，pH ≈ 3.00；近似合理。

### 真题：从 pKa 得到 Ka

**OxfordAQA CH03 · June 2026 · 10.1–10.2 · 1 + 1 marks**

Butanoic acid is a weak acid.

$$\ce{CH3CH2CH2COOH(aq) <=> CH3CH2CH2COO^-(aq) + H+(aq)}.$$

At 298 K, the pKa for butanoic acid = 4.82.

> **10.1** Give the expression for the acid dissociation constant, Ka, for butanoic acid.
>
> **10.2** Calculate the value of Ka, in mol dm⁻³, for butanoic acid at 298 K.

<details markdown="1">
<summary>提示：pKa 转 Ka 是否要取倒数？</summary>

指数是 $-\mathrm pK_a$；表达式分母为未电离的酸的平衡浓度。

</details>

<details markdown="1">
<summary>评分解析：MS 第 28 页</summary>

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

<span id="titration"></span>

## A3：滴定曲线、指示剂与 RP7

把酸放在锥形瓶、逐步加入碱时，先画初始 pH，再找中和区和过量碱区。**Equivalence point** 指按化学计量完全中和的位置；**end point** 指指示剂的可见变化位置，两者应尽量接近，但不是同一定义。

| 酸／碱组合 | 等当点附近 | 指示剂选择 |
| --- | --- | --- |
| 强酸／强碱 | 298 K 下等当点约 pH 7，跳变较宽 | methyl orange 或 phenolphthalein 通常均可 |
| 弱酸／强碱 | 共轭碱使等当点 pH > 7；之前有缓冲区 | 通常 phenolphthalein |
| 强酸／弱碱 | 共轭酸使等当点 pH < 7 | 通常 methyl orange |
| 弱酸／弱碱 | 跳变较小，不一定有清楚的视觉终点 | 通常用 pH 测量方法 |

选择指示剂的核心是其变色范围落在曲线的陡峭跳变区，不是死记“所有酸碱滴定用同一个指示剂”。对弱一元酸／强碱，半等当点时 $[\mathrm{HA}]=[\mathrm A^-]$，故 **pH = pKa**。

**RP7：**校准 pH 计，准确移取酸，搅拌后待读数稳定；在预计等当点附近减小加液体积，在其他区可用较大间隔。画 pH 对加入体积的图，不能只连几个稀疏点后凭空确定等当点。冲洗探头、避免交叉污染，并按给定温度解释数据。

### 真题：从原滴定图求浓度和 Ka

**OxfordAQA CH03 · June 2024 · 05.5–05.6 · 3 + 3 marks**

A student adds 0.100 mol dm⁻³ aqueous sodium hydroxide from a burette to 25.0 cm³ of an aqueous solution of the weak acid HX. Figure 4 shows how the pH changes during part of this titration at 298 K.

![Original Figure 4: weak acid HX titrated with sodium hydroxide; pH against volume of NaOH in cubic centimetres.](/assets/img/a2-chemistry/ch03-2024-jun-q05-titration.png)

> **05.5** Use Figure 4 to determine the concentration, in mol dm⁻³, of the weak acid, HX.
>
> **05.6** Use Figure 4 to determine the pH of the mixture at half equivalence (half neutralisation). Use this pH to determine the value of the acid dissociation constant, Ka, at 298 K for the weak acid HX. Give the units for Ka.

<details markdown="1">
<summary>提示：先读等当体积，再把它减半</summary>

HX 是一元酸，等当点时 $n(\mathrm{HX})=n(\mathrm{NaOH})$。半等当的体积是等当体积的一半，不是 pH 的一半。

</details>

<details markdown="1">
<summary>评分解析：MS 第 20 页</summary>

05.5：等当体积约 27.0 cm³；酸的 mol 为 $0.100\times0.0270=0.00270$；原浓度 $0.00270/0.0250=\boxed{0.108\,\mathrm{mol\,dm^{-3}}}$。三个步骤各 1 分。

05.6：13.5 cm³ 处 pH 约 **5.3**；所以 $K_a=10^{-5.3}=\boxed{5.01\times10^{-6}\,\mathrm{mol\,dm^{-3}}}$。图读数、Ka 数值、单位各对应 1 分；原 MS 接受合理的读图范围，不要求读出图上没有的精度。

</details>

<span id="buffers"></span>

## A4：缓冲溶液——先中和，再平衡

**酸性缓冲**含弱酸 HA 与大量共轭碱 A⁻；加入少量 H⁺ 时，$\ce{A^- + H+ -> HA}$；加入少量 OH⁻ 时，$\ce{HA + OH^- -> A^- + H2O}$。这样 H⁺ 浓度变化较小，pH 较稳定，**并非完全不变**。缓冲能力有限，耗尽任一组分后不再能按原方式缓冲。

**碱性缓冲**可由 NH₃ 与 NH₄⁺ 盐组成：NH₃ 消耗加入的 H⁺，NH₄⁺ 消耗加入的 OH⁻。这里理解两类原理，定量重点放在酸性缓冲。

$$[\mathrm H^+]\approx K_a\frac{[\mathrm{HA}]}{[\mathrm A^-]},\qquad\mathrm{pH}=\mathrm pK_a+\log_{10}\frac{[\mathrm A^-]}{[\mathrm{HA}]}.$$

在同一最终体积内，浓度比等于 mol 比。若缓冲由弱酸与强碱部分中和形成，必须先用 mol 表计算：HA 减少多少、A⁻ 生成多少、OH⁻ 是否仍有剩余。完全中和时的盐溶液、过量强碱体系，不可以继续套双组分缓冲公式。

### 真题：部分中和形成缓冲

**OxfordAQA CH03 · June 2026 · 10.3 · 6 marks**

> A different acid, propanoic acid, CH₃CH₂COOH is reacted with NaOH.
>
> 14.0 cm³ of 0.200 mol dm⁻³ aqueous propanoic acid are reacted with 25.0 cm³ of 0.100 mol dm⁻³ aqueous NaOH.
>
> At 298 K, the Ka of propanoic acid = $1.35\times10^{-5}\,\mathrm{mol\,dm^{-3}}$.
>
> Calculate the pH of the final mixture. Give your answer to 2 decimal places.

<details markdown="1">
<summary>提示：先列三行 mol 表</summary>

写出反应前、反应量、反应后；最终弱酸和共轭碱都是否仍存在？不要先把两种溶液浓度直接代入。

</details>

<details markdown="1">
<summary>评分解析：MS 第 29 页</summary>

| 物种 | 初始 mol | 最终 mol |
| --- | --- | --- |
| CH₃CH₂COOH | $0.0140\times0.200=0.00280$ | $0.00280-0.00250=0.000300$ |
| OH⁻ | $0.0250\times0.100=0.00250$ | 0 |
| CH₃CH₂COO⁻ | 0 | 0.00250 |

$$[\mathrm H^+]=1.35\times10^{-5}\frac{0.000300}{0.00250}=1.62\times10^{-6},\qquad \boxed{\mathrm{pH}=5.79}.$$

六个评分步骤：酸的 mol、碱的 mol、剩余酸、正确平衡关系、H⁺ 数值、pH。此题反应前是丙酸，解析也必须使用丙酸／丙酸根。

**复做：**把加入的 NaOH 改为 28.0 cm³。此时恰好完全中和，不能用本题的缓冲比继续计算。

</details>

## 闭卷检查与下一步

不用看公式，分别说明纯弱酸、强碱、半等当点、缓冲体系应从哪一步开始；解释两个近似条件：弱酸的小量电离、缓冲中组分的消耗可忽略。

下一主题：[第三周期元素及其化合物](/alevel/a2-chemistry/period-3/)。
