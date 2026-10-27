---
title: 氧化还原与电子守恒
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/redox-equations/
permalink: /zh/alevel/as-chemistry/redox-equations/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">电子去了哪里？</h2>

氧化是失电子，还原是得电子；一种反应物给出的电子须由另一种接受，因此二者同时发生。用氧的转移可描述部分反应，却不能概括全部氧化还原。先修为[配平离子方程式](/zh/alevel/as-chemistry/amount-and-equations/#reaction-ratios)及[原子与离子的区别](/zh/alevel/as-chemistry/atomic-structure/#particles)。所有题自拟；本页讨论方程式推理，不是自行混合试剂的操作指南。

<h2 id="electron-transfer">根据它对另一物种的作用命名</h2>

在 $\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}$ 中，锌给出电子：

$$\ce{Zn(s) -> Zn^2+(aq) + 2e-}$$

铜离子接受电子：$\ce{Cu^2+(aq) + 2e- -> Cu(s)}$。Zn 被氧化，却是**还原剂（reducing agent）**，因为它给电子、使 Cu²⁺ 还原；Cu²⁺ 被还原，却是**氧化剂（oxidising agent）**，因为它接受 Zn 的电子。agent 的名称描述对另一反应物的作用，不是自身变化的名称。总反应中电子相消，普通水溶液总反应不能留下自由电子作产物。

<div class="lesson-check" markdown="1">
<h3 id="agent-check">追踪一次转移</h3>
<!-- task:agent-check -->
Magnesium reacts with H+(aq) to give Mg2+(aq) and H2(g). Write both half-equations and the overall equation. Identify the species oxidised, the species reduced, the oxidising agent and the reducing agent. If the acid is HCl, explain why chloride is absent from the net ionic equation.
<!-- /task:agent-check -->
<details markdown="1"><summary>提示</summary>
Mg失去两个电子，每个氢离子接受一个。
</details>
<details markdown="1"><summary>解答与检查</summary>
两半式 $\ce{Mg(s) -> Mg^2+(aq) + 2e-}$ 与 $\ce{2H+(aq) + 2e- -> H2(g)}$ 相加得 $\ce{Mg(s) + 2H+(aq) -> Mg^2+(aq) + H2(g)}$。Mg被氧化／是还原剂，H⁺被还原／是氧化剂。Cl⁻ 两边不变，作为旁观离子相消。若称Mg为氧化剂，回看[agent含义](#electron-transfer)，解释另一反应物的变化。
</details>
</div>

<h2 id="oxidation-states">把氧化态用作计数模型</h2>

氧化态把成键电子形式上分给电负性较强原子，是一种记账模型。单原子离子的氧化态等于其电荷，但共价分子的形式分配不表示里面真有这些游离离子。单质为0，即使写成O₂、Cl₂；中性化学式内氧化态总和为0，离子内总和为总电荷。

第1族通常+1，第2族+2；化合物中的F为−1。H通常+1，但NaH等金属氢化物中为−1。O通常−2，但H₂O₂等过氧化物中为−1；OF₂中F仍为−1，故O为+2。先确定这些分配，再求未知数。氧化态升高表示氧化，降低表示还原。

<div class="worked-example" markdown="1">
对 $\ce{SO4^2-}$ 写 $x+4(-2)=-2$，S为+6；整个离子的−2电荷不是S的氧化态。Fe₂O₃中 $2x+3(-2)=0$，Fe为+3。先按下标数清原子，再求电荷和。
</div>

<div class="lesson-check" markdown="1">
<h3 id="state-check">检查一组氧化态分配</h3>
<!-- task:state-check -->
Find Fe and S oxidation states in Fe2(SO4)3, N in NH4+, and O in H2O2 and OF2. Explain why the total ion charge is not assigned to every atom. In 2Fe2+ + Cl2 → 2Fe3+ + 2Cl−, use changes in oxidation state to identify oxidation, reduction and both agents.
<!-- /task:state-check -->
<details markdown="1"><summary>提示</summary>
先用整个硫酸根电荷，保留过氧化物与氟化物的例外。
</details>
<details markdown="1"><summary>解答与检查</summary>
Fe +3、S +6、N −3；H2O2中的O为−1，OF2中为+2。按原子个数相加的总和才等于总电荷，不能每个原子都分一次整个电荷。Fe +2→+3被氧化，Fe2+是还原剂；Cl 0→−1被还原，Cl2是氧化剂。若给S写−2，回[模型](#oxidation-states)重列硫酸根的电荷式。
</details>
</div>

<h2 id="half-equations">先原子，再电荷，最后相消电子</h2>

在产物已知的酸性水溶液半反应中，先配非H/O原子，以H₂O配O、H⁺配H、电子配电荷，然后重新检查。这是针对给定介质和产物的计数程序，不能据此预测任意混合物都会反应。碱性题须使用适当介质，不能在碱性总式中留下人为加入的H⁺。

<div class="worked-example" markdown="1">
**自拟推导，指定酸性产物。**把 $\ce{MnO4-}$ 还原成 $\ce{Mn^2+}$：Mn已有一个；四个O使右边需要4H₂O，其八个H使左边需要8H⁺。此时左电荷+7，右+2，在左边加入五电子使两边同为+2：

$$\ce{MnO4-(aq) + 8H+(aq) + 5e- -> Mn^2+(aq) + 4H2O(l)}$$

氧化半式 $\ce{Fe^2+(aq) -> Fe^3+(aq) + e-}$ 只给一个电子，故**每一项**都乘五后相加：

$$\ce{MnO4-(aq) + 8H+(aq) + 5Fe^2+(aq) -> Mn^2+(aq) + 4H2O(l) + 5Fe^3+(aq)}$$

左总电荷 $-1+8+10=17$，右 $2+15=17$，Mn/Fe/O/H也分别守恒。1:5的mol比来自电子守恒，不是由初始浓度猜出。
</div>

<div class="lesson-check" markdown="1">
<h3 id="combine-check">重建一个陌生方程式</h3>
<!-- task:combine-check -->
In acidic solution Cr2O7^2− is reduced to Cr3+ and Fe2+ is oxidised to Fe3+. H2O is the oxygen-containing product. Construct both balanced half-equations and the net overall equation, including H+ where needed. Check total charge. Determine how many moles of Fe2+ react with 0.00200 mol of Cr2O7^2−. Products are supplied; their formation is not a reaction to memorise for this task.
<!-- /task:combine-check -->
<details markdown="1"><summary>提示</summary>
右边必须有两个Cr，比较两半式的电子数。
</details>
<details markdown="1"><summary>解答与检查</summary>
两半式为 $\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}$、$\ce{Fe^2+ -> Fe^3+ + e-}$。后者乘六，相加得 $\ce{Cr2O7^2- + 14H+ + 6Fe^2+ -> 2Cr^3+ + 7H2O + 6Fe^3+}$（离子aq，水l）。左电荷 $-2+14+12=24$，右 $6+18=24$。Fe2+为 $6(0.00200)=0.0120$ mol。若总式留下电子，先等量再相加，然后做[重试](#retry)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="audit-check">审核一份解释</h3>
<!-- task:audit-check -->
A report writes MnO4− + 8H+ → Mn2+ + 4H2O + 5e− and says “atoms match, so the equation is balanced; manganese is oxidised because it gains positive charge.” Diagnose each error. A separate reaction is Cl2 + 2OH− → Cl− + ClO− + H2O. Assign chlorine oxidation states and explain how the same starting element can undergo both oxidation and reduction.
<!-- /task:audit-check -->
<details markdown="1"><summary>提示</summary>
命名电子变化前，先算两边总电荷。
</details>
<details markdown="1"><summary>解答与检查</summary>
错误式左电荷+7、右−3，电子应在左边。Mn从+7降到+2，被还原；一个多原子物种的总电荷不自动等于其中某原子的氧化态。给定碱性式中Cl从0到Cl−的−1，也从0到ClO−的+1；一部分还原、一部分氧化，是歧化，不是同一个Cl原子同时进入两种产物。若混淆，回看[电荷求和](#oxidation-states)。
</details>
</div>

<h2 id="retry">检查错误后换物种重试</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-redox">新的电子账目</h3>
<!-- task:retry-redox -->
In acidic solution H2O2 is reduced to H2O while I− is oxidised to I2. Construct the half-equations and overall equation, and name the oxidising agent. Explain why oxygen being −1 in H2O2 matters. If 0.00300 mol H2O2 reacts completely by this equation, determine the I− amount consumed. Keep atoms, charge and electrons as three distinct checks.
<!-- /task:retry-redox -->
<details markdown="1"><summary>提示</summary>
先写H2O2→2H2O，再补H与电荷。
</details>
<details markdown="1"><summary>解答与检查</summary>
$\ce{H2O2 + 2H+ + 2e- -> 2H2O}$；$\ce{2I- -> I2 + 2e-}$。总式 $\ce{H2O2(aq) + 2H+(aq) + 2I-(aq) -> 2H2O(l) + I2(aq)}$。H2O2是氧化剂，O从−1到−2；若起初误写−2，就看不出还原。两个碘离子总共失去两电子，对应一个H2O2，故消耗0.00600 mol I−。两边总电荷都为0，H/O/I也都守恒。稍后到[全课程综合](/zh/alevel/as-chemistry/as-review/)尝试新方程式。
</details>
</div>

<h2 id="sources">来源与连接</h2>

[OxfordAQA 9620 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf) 3.1.5；Lister/Renshaw（OUP，2016）Ch7，实际查阅印刷130、133、136–137页。陌生反应给产物是为了配平，不表示新增必背反应表。继续[周期性](/zh/alevel/as-chemistry/periodicity/)及[卤素反应](/zh/alevel/as-chemistry/halogens/)，或回[课程入口](/zh/alevel/as-chemistry/)。
