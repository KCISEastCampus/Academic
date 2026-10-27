---
title: 物质的量与反应计量
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/amount-and-equations/
permalink: /zh/alevel/as-chemistry/amount-and-equations/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">天平怎样帮我们数粒子？</h2>

天平读出的是克，反应却按照原子、分子的数量比例进行。**物质的量（amount of substance）**以摩尔 mol 为单位，把两种描述连接起来。质量相同，不代表粒子一样多。

这一页从辨认“数的是什么”出发，学会预测产物质量、判断谁先耗尽，并区分两个百分数。先修只需要化学式、乘除比例和原子守恒。先做下面这道熟悉的粒子题，之后再建立新的摩尔关系。

<div class="lesson-check" markdown="1">
**先不使用摩尔——自拟题。**

<!-- task:count-start -->
Four hydrogen molecules react with three oxygen molecules. Water is the only product. Each water molecule contains two hydrogen atoms and one oxygen atom. How many water molecules can form, and what remains? Account for every atom.
<!-- /task:count-start -->

<details markdown="1"><summary>提示</summary>
先数氢原子，再看这些水分子需要多少氧原子。
</details>
<details markdown="1"><summary>解答与检查</summary>
最多形成四个水分子，耗尽八个氢原子，用去六个氧原子中的四个，还剩一个氧分子。反应后仍有八个氢原子、六个氧原子。如果把起始分子数相加而得到七个水分子，先把每个分子拆画为原子，再按水的组成重新分组。
</details>
</div>

<h2 id="mole-bridge">先说明数的实体，再说摩尔</h2>

1 mol 约含 $6.02\times10^{23}$ 个指定实体。**阿伏伽德罗常数（Avogadro constant）**为 $N_A\approx6.02\times10^{23}\,\mathrm{mol^{-1}}$。实体可以是原子、分子、离子或化学式单位，必须说明。正如“一打”表示十二个而不规定质量，“一摩尔”也表示数量，只是规模大得多。这个类比并不表示一摩尔有固定质量。

若这些实体的物质的量为 $n$，数目为 $N$：

$$N=nN_A$$

例如 0.200 mol 二氧化碳分子含 0.200 mol 碳原子、0.400 mol 氧原子。下标 2 表示**每一个分子内部**有两个氧原子，不是整个样品的反应系数。

**相对原子质量 $A_r$**：元素原子的加权平均质量与一个碳-12 原子质量的十二分之一相比。**相对分子质量 $M_r$**对一个分子作同样的比较，可以把分子内各原子的 $A_r$ 相加得到。离子固体用**相对式量（relative formula mass）**：化学式表示延伸晶格中离子的比例，不代表存在独立的分子。这些相对量都没有单位。

**摩尔质量 $M$**是每摩尔的质量。在这里的精度下，以 $\mathrm{g\,mol^{-1}}$ 表示时，其数值与对应相对质量相同。取 H = 1.0、C = 12.0、O = 16.0、Ca = 40.0，二氧化碳的 $M_r=44.0$，而 $M=44.0\,\mathrm{g\,mol^{-1}}$。氢氧化钙 $\mathrm{Ca(OH)_2}$ 的相对式量为 $40.0+2(16.0+1.0)=74.0$。

质量与物质的量之间的桥梁是：

$$n=\frac{m}{M}$$

克搭配 $\mathrm{g\,mol^{-1}}$，千克搭配 $\mathrm{kg\,mol^{-1}}$；混用会差 1000 倍。单位 $\mathrm{g}/(\mathrm{g\,mol^{-1}})$ 约去后就是 mol。4.40 g 二氧化碳含 $4.40/44.0=0.100\,\mathrm{mol}$ 分子，即 $6.02\times10^{22}$ 个分子。氧原子数是这个值的两倍，二氧化碳分子数不是。

<div class="lesson-check" markdown="1">
<h3 id="particle-check">比较两个样品</h3>
<!-- task:particle-check -->
Sample A is 8.80 g of CO2. Sample B is 8.00 g of O2. Use C = 12.0, O = 16.0 and NA = 6.02 × 10^23 mol−1. Which has more molecules? Which has more oxygen atoms? Calculate the number of oxygen atoms in each and explain why comparing masses alone is insufficient.
<!-- /task:particle-check -->
<details markdown="1"><summary>提示</summary>
先在每个样品旁写出分子式和摩尔质量，再数每个分子内的氧原子。
</details>
<details markdown="1"><summary>解答与检查</summary>
A 有 $8.80/44.0=0.200$ mol 分子；B 有 $8.00/32.0=0.250$ mol。B 虽然更轻，分子却更多。A 含 0.400 mol 氧原子，即 $2.41\times10^{23}$ 个；B 含 0.500 mol，即 $3.01\times10^{23}$ 个。两者每个分子都含两个氧原子，但分子总数不同。如果直接比较克数，回看[质量与物质的量](#mole-bridge)，再做[重试](#retry-amount)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="entity-check">指定实体与相对质量</h3>
<!-- task:entity-check -->
Define relative atomic mass using carbon-12 as the reference and state whether it has a unit. Solid MgCl2 has an extended ionic lattice. Use Mg = 24.3, Cl = 35.5 and NA = 6.02 × 10^23 mol−1. Calculate its relative formula mass, the mass of 0.100 mol of formula units, and the numbers of magnesium ions and chloride ions in that sample. Explain why “0.100 mol of MgCl2 molecules” is unsuitable.
<!-- /task:entity-check -->

Close the answer and retry: 0.0500 mol of solid CaCl2 formula units, Ca = 40.0 and Cl = 35.5. Find relative formula mass, sample mass and the number of chloride ions; explain which quantities have units.

<details markdown="1"><summary>提示</summary>
区分一个式单位内的离子比、相对质量与每摩尔质量。
</details>
<details markdown="1"><summary>解答与检查</summary>
相对原子质量是该元素原子的加权平均质量与一个碳-12原子质量的十二分之一的比，无单位。MgCl2 的相对式量为 24.3 + 2(35.5) = 95.3，无单位；摩尔质量为 95.3 g mol−1，样品质量为 9.53 g。Mg2+ 为 0.100 mol，即 6.02 × 10^22 个；Cl− 为 0.200 mol，即 1.20 × 10^23 个。晶格没有独立 MgCl2 分子。
</details>
<details markdown="1"><summary>重试解答与检查</summary>
重试：CaCl2 相对式量 111.0（无单位），质量 5.55 g，Cl− 为 0.100 mol，即 6.02 × 10^22 个。若漏乘下标或给相对质量加 g，回看[实体与质量](#mole-bridge)，关闭答案后重试。
</details>
</div>

<h2 id="reaction-ratios">配平的方程式是一份粒子配方</h2>

水的生成反应先写正确化学式 $\ce{H2 + O2 -> H2O}$。一个氧分子提供两个氧原子，因此在水前写 2。两个水分子含四个氢原子，所以在氢气前也写 2。检查两边都为四个氢原子、两个氧原子，最小整数系数就是 2:1:2：

$$\ce{2H2(g) + O2(g) -> 2H2O(l)}$$

“两个分子与一个分子”的比例，也适用于“两摩尔与一摩尔”：把所有数量同时乘 $N_A$，比例不变。因此系数表示**物质的量之比，不是质量比**。取 H = 1.0、O = 16.0，4.0 g 氢气与 32.0 g 氧气生成 36.0 g 水，反应前后质量相等。

配平只能改正确化学式前面的系数，不能改下标：把 $\ce{H2O}$ 改成 $\ce{H2O2}$ 就换了物质。物态符号表示固体 (s)、液体 (l)、气体 (g) 和溶于水 (aq)。离子方程式还要检查电荷，例如 $\ce{H+(aq) + OH-(aq) -> H2O(l)}$ 两边总电荷都为零。

一般反应中，系数 $a$、$b$ 联系的是**实际参加反应的量**：

$$\frac{n(A)\text{ reacted}}{a}=\frac{n(B)\text{ reacted}}{b}$$

如果给了两种反应物的起始量，它们不一定恰好匹配。分别用每种物质的起始 mol 数除以它的系数，较小值决定反应最多能推进多少。它对应**限制反应物（limiting reactant）**，另一种过量（in excess）。过量不表示完全不反应，而是反应后还剩下一部分。

<div class="lesson-check" markdown="1">
<h3 id="equation-check">自己建立方程式</h3>
<!-- task:equation-check -->
Aluminium reacts with aqueous hydrochloric acid to form aqueous aluminium chloride and hydrogen gas. The correct formulae are Al, HCl, AlCl3 and H2. Write the balanced equation using the smallest whole-number coefficients and state symbols. Check the atoms of each element. Explain why changing AlCl3 to AlCl2 would not be a valid balancing step.
<!-- /task:equation-check -->
<details markdown="1"><summary>提示</summary>
找出氯化物中氯原子总数和氢气中氢原子总数能够匹配的数量。保持给定化学式不变。
</details>
<details markdown="1"><summary>解答与检查</summary>
$\ce{2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g)}$。两边各有 2 个铝原子、6 个氯原子、6 个氢原子。改下标会改变题目指定的产物，不是在平衡其化学式单位数量。如果有元素不守恒，给方程式两边各列一个原子数清单，再关闭答案重做。
</details>
</div>

<h2 id="batch-example">预测产物，再用剩余物检查</h2>

<div class="worked-example" markdown="1">
**完整示范——自拟的理论反应批次。**

<!-- task:worked-batch -->
5.40 g of aluminium reacts with 6.40 g of oxygen. Assume Al2O3 is the only product and reaction proceeds until one reactant is exhausted. Use Al = 27.0 and O = 16.0. Calculate the maximum product mass and the mass of each reactant remaining.
<!-- /task:worked-batch -->

先建立反应模型，不能直接套质量比：

$$\ce{4Al(s) + 3O2(g) -> 2Al2O3(s)}$$

起始量恰好都是 0.200 mol：铝是 $5.40/27.0$，氧气是 $6.40/32.0$。但配方要求四个铝原子对应三个氧分子，等摩尔不表示恰好反应。

$$\frac{0.200}{4}=0.0500,\qquad \frac{0.200}{3}=0.0667$$

铝对应的可推进量较小，是限制物。4 mol 铝生成 2 mol 氧化物，所以 $n(\ce{Al2O3})=0.200\times2/4=0.100\,\mathrm{mol}$。其摩尔质量是 $2(27.0)+3(16.0)=102.0\,\mathrm{g\,mol^{-1}}$，理论产量为 **10.2 g**。

耗去氧气 $0.200\times3/4=0.150$ mol，剩余 $0.200-0.150=0.0500$ mol，即 **1.60 g**。模型中铝全部反应。检查封闭体系质量守恒：$5.40+6.40=10.2+1.60=11.8$ g。产物可以比起始铝更重，因为氧也进入了产物。

这只是给定假设下的理论上限。真实操作中，氧化膜、反应不完全或收集损失都可能降低所得产量；算出数值不能证明真实实验已经完全反应。
</div>

<div class="lesson-check" markdown="1">
<h3 id="batch-check">改变起始混合物</h3>
<!-- task:batch-check -->
For 4Al + 3O2 → 2Al2O3, use Al = 27.0 and O = 16.0. A batch starts with 10.8 g of Al and 6.40 g of O2. Assume the same single-product and complete-reaction model. Identify the limiting reactant, calculate the maximum product mass and the mass left over, and test “doubling the aluminium must double the product”.
<!-- /task:batch-check -->
<details markdown="1"><summary>提示</summary>
起始配比变了，先耗尽的反应物也可能改变。重新比较 mol 数除以系数。
</details>
<details markdown="1"><summary>解答与检查</summary>
起始铝为 0.400 mol，氧气为 0.200 mol，对应限制值为 0.100 与 0.0667 mol；这次氧气限制。产物为 $0.200\times2/3=0.13333\ldots$ mol，即 **13.6 g**。耗去铝 $0.200\times4/3=0.26667\ldots$ mol，剩下 $0.13333\ldots$ mol，即 **3.60 g**。检查 $10.8+6.40=13.6+3.60$。另一种反应物开始限制后，只把铝加倍不会使产物加倍。如果沿用示范中的限制物，回看[按系数比较](#reaction-ratios)。
</details>
</div>

<h2 id="two-percentages">产率和原子经济性问的是两件事</h2>

**百分产率（percentage yield）**比较实际得到的干燥纯产物与限制物所决定的理论最大产量。**原子经济性（atom economy）**则问：按方程式反应时，反应物总质量中有多少进入目标产物。原子经济性使用配平方程式的系数，不能用某批次额外加入的过量物质来作分母。

$$\text{percentage yield}=\frac{\text{actual product mass}}{\text{theoretical product mass}}\times100\%$$

$$\text{atom economy}=\frac{\nu_{\text{desired}}M_{\text{desired}}}{\sum\nu_{\text{reactants}}M_{\text{reactants}}}\times100\%$$

$\nu$ 为配平方程式的系数；分母包括所有反应物。由原子守恒，也可以用所有产物的化学计量总质量作分母。

以 $\ce{CaCO3(s) -> CaO(s) + CO2(g)}$ 为例，取 Ca = 40.0、C = 12.0、O = 16.0。若目标是 CaO，100.0 g 碳酸钙理论上能生成 56.0 g CaO，原子经济性为 56.0%。如果实际只得到 50.4 g 干燥纯 CaO，产率是 $50.4/56.0\times100=90.0\%$。收集损失会降低产率，不改变方程式的原子经济性。报告产率超过 100% 通常提示产物潮湿或不纯等问题，不是创造了更多原子。两个百分数都不能单独代表能耗或环境安全性。

对生成同一目标产物、其他条件可比的路线，较高原子经济性可减少化学计量上必然出现的副产物废物，也可减少单位产物需要购买的原料质量。这有机会降低处理负担、成本和接触废物的风险。但这些优势取决于实际物质和流程：有毒试剂或大量加热需求，可能抵消这些好处。

<div class="lesson-check" markdown="1">
<h3 id="process-check">评价一份报告</h3>
<!-- task:process-check -->
8.43 g of pure MgCO3 is heated; MgO is the desired product and CO2 is the only other product. The reported recovered solid has mass 4.23 g. Use Mg = 24.3, C = 12.0 and O = 16.0. Calculate the theoretical MgO mass, the reported percentage yield if all recovered solid is assumed to be MgO, and the atom economy. Evaluate the claim “the process has improved atom economy because its yield exceeds 100%”. Give one possible reason the recovered mass is too large.
<!-- /task:process-check -->
<details markdown="1"><summary>提示</summary>
“假定产物纯净来计算”和“已有证据证明产物纯净”是两回事。
</details>
<details markdown="1"><summary>解答与检查</summary>
$\ce{MgCO3(s) -> MgO(s) + CO2(g)}$ 的比例为 1:1，摩尔质量分别为 84.3 和 40.3 $\mathrm{g\,mol^{-1}}$。理论 MgO 为 $8.43/84.3\times40.3=4.03$ g。报告产率为 $4.23/4.03\times100=105\%$（三位有效数字），这使“所得固体全部为干燥 MgO”的假设受到质疑。原子经济性为 $40.3/84.3\times100=\mathbf{47.8\%}$。残留未反应的碳酸镁，或冷却后吸收水，都可能使固体偏重。重复同一个有问题的流程不一定消除偏差。如果把 4.23 g 代入原子经济性，回看[两种定义](#two-percentages)，再做[过程重试](#retry-process)。
</details>
</div>

<h2 id="retry-amount">修复错误后，换条件重做</h2>

先关闭前面的答案。本题改变物质，要求你追踪剩余物，而不仅是产物。

<div class="lesson-check" markdown="1">
<!-- task:retry-amount -->
2H2 + O2 → 2H2O. A mixture contains 6.00 g of H2 and 32.0 g of O2. Use H = 1.0, O = 16.0 and NA = 6.02 × 10^23 mol−1. Find the maximum water mass, the mass of gas remaining after water condenses, and the number of molecules in that remaining gas. Ignore water vapour in the remaining gas. Explain your choices in English without a sentence template.
<!-- /task:retry-amount -->
<details markdown="1"><summary>提示</summary>
从限制物算出另一种反应物实际用了多少，再明确剩余气体是什么。
</details>
<details markdown="1"><summary>解答与检查</summary>
起始氢气为 $6.00/2.0=3.00$ mol，氧气为 $32.0/32.0=1.00$ mol。氧气限制，因为 $1.00/1<3.00/2$。它消耗 2.00 mol 氢气，得到 2.00 mol 水，即 **36.0 g**。剩余氢气 1.00 mol，即 **2.00 g**，包含 $6.02\times10^{23}$ 个分子。起始质量 $6.00+32.0=38.0$ g，与 $36.0+2.00$ g 相符。英文解释应根据 2:1 的关系判断限制物，并区分水分子和剩余氢分子。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-process">换一个过程再检查</h3>
<!-- task:retry-process -->
The reaction C2H5OH → C2H4 + H2O has ethene, C2H4, as the desired product. 46.0 g of pure ethanol gives 22.4 g of dry pure ethene. Use C = 12.0, H = 1.0 and O = 16.0. Calculate percentage yield and atom economy. A better collection method recovers another 2.80 g of ethene from the same batch. Which percentage changes, and what is its new value? Explain one waste-related advantage and one limitation of judging a process by atom economy alone.
<!-- /task:retry-process -->
<details markdown="1"><summary>提示</summary>
从配平方程式出发。改变收集方式，不会改变反应的化学计量配方。
</details>
<details markdown="1"><summary>解答与检查</summary>
1.00 mol 乙醇最多生成 1.00 mol 乙烯，即 **28.0 g**。产率 **80.0%**；原子经济性 $28.0/46.0\times100=60.9\%$。收集到 25.2 g 时，产率升至 **90.0%**，原子经济性仍为 60.9%。较高原子经济性可减少按反应计量必然产生的副产物废物，并降低单位目标产物的原料成本；它不证明能耗低、毒性小或实际产率高。解释中应明确两个百分数的分母不同。
</details>
</div>

记录是否看过提示、哪一个判断出错。下一步用质量和气体测量推断[化学式与气体物质的量](/zh/alevel/as-chemistry/formulae-and-gases/)，稍后到[定量化学综合练习](/zh/alevel/as-chemistry/quantitative-review/)再次独立选法。

<h2 id="sources">范围与阅读来源</h2>

OxfordAQA 9620 AS，大纲 3.1.2；[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)。教材参考：Lister / Renshaw，*International A Level Chemistry*（OUP，2016），Chapter 2 的 2.1、2.5–2.6，印刷页 31–33、44–50。本站题目、数据及检查点均为自拟，不是官方试题或官方分值。[返回课程入口](/zh/alevel/as-chemistry/)。
