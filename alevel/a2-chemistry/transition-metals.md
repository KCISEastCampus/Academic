---
title: 过渡金属 · Transition metals
layout: subjects
mathjax: true
lang: zh-CN
grade: a2
subject: a2-chemistry
permalink: /alevel/a2-chemistry/transition-metals/
toc_headings: h2
study_page: true
---

[CH03 课程](/alevel/a2-chemistry/) · 3.2.5 · 教材第 23 章及 24.2，印刷 366–385、391–393 页

从电子排布理解过渡金属的变价、颜色与催化，再学习配位、立体结构和配体取代。先复习 [电极电势](/alevel/a2-chemistry/electrode-potentials/) 和 [Gibbs 自由能](/alevel/a2-chemistry/thermodynamics/#entropy)。

**先想一想：**配合物有 3 个配体时，配位数是否一定是 3？想一个配体能否用两个原子同时与金属结合。

<span id="complexes"></span>

## M1：电子排布、配体、形状与异构

**Transition metal** 是能形成至少一种具有未充满 d 亚层的离子的元素。d block 的位置不自动保证符合这个定义：Zn 与常见 Zn²⁺ 的 d 亚层均充满，Zn 不属于此定义下的过渡金属。

形成阳离子时先移除 4s 电子。Fe 的基态为 $[\mathrm{Ar}]3d^64s^2$，Fe²⁺ 为 $[\mathrm{Ar}]3d^6$；Cu 为 $[\mathrm{Ar}]3d^{10}4s^1$，Cu²⁺ 为 $[\mathrm{Ar}]3d^9$。

**Ligand** 向中心金属离子提供孤对电子形成配位键；**co-ordination number** 是与中心金属结合的供体原子数／配位键数，不能直接数配体个数。

| 配体 | 供体与配位方式 |
| --- | --- |
| H₂O、NH₃、Cl⁻ | 单齿 monodentate；每个配体形成一根配位键 |
| $\ce{NH2CH2CH2NH2}$（en） | 双齿 bidentate；两个 N 各提供孤对电子 |
| $\ce{C2O4^{2-}}$（ethanedioate） | 双齿；两个 O 与同一金属配位 |
| EDTA⁴⁻ | 多齿 multidentate，常用六个供体原子包围金属离子 |

| 常见配位数 | 形状 | 典型例子 |
| --- | --- | --- |
| 2 | Linear，180° | $\ce{[Ag(NH3)2]+}$ |
| 4 | Tetrahedral，约 109.5° | $\ce{[FeCl4]^-}$ |
| 4 | Square planar，90° | $\ce{Pt(NH3)2Cl2}$ |
| 6 | Octahedral，90°／180° | $\ce{[Cu(H2O)6]^{2+}}$（可畸变） |

**Geometric isomerism：**square planar 的 $\ce{Pt(NH3)2Cl2}$ 中，两个 Cl 相邻为 cis，相对为 trans。画图先放中心金属，再放四个位置；不能只把整幅图旋转后称作异构体。

cis-$\ce{Pt(NH3)2Cl2}$ 称为 **cisplatin**。八面体的 $\ce{[Co(NH3)4Cl2]+}$ 也可有 cis／trans：两个 Cl 的位置夹角分别为 90° 和 180°。判断几何异构时，先确定整体形状，再比较相同配体的相对位置。

**Optical isomerism：**某些八面体三双齿配合物具有不能重合的镜像。画三维结构时用实线、实楔、虚楔体现空间方向，并在方括号外标总电荷。不是所有八面体配合物都有光学异构。

### 真题：双齿配体与镜像结构

**OxfordAQA CH03 · January 2025 · 07.1–07.2 · 1 + 3 marks**

> **07.1** Explain what is meant by bidentate ligand.
>
> **07.2** When an excess of sodium ethanedioate solution is added to an aqueous solution of cobalt(II) chloride, a pair of stereoisomers is formed.
>
> Draw the displayed formula of each isomer. Show clearly the charge on each complex.

<details markdown="1">
<summary>提示：先求配位数与总电荷</summary>

三个 C₂O₄²⁻ 各提供两个 O，形成六配位；Co²⁺ 与三个二价阴离子合起来的总电荷是多少？画一幅后，画它的镜像，而不是旋转它。

</details>

<details markdown="1">
<summary>评分解析：MS 第 24 页</summary>

07.1：一个配体含两个供体原子，各提供一对孤对电子给同一中心金属离子，1 分。

07.2 的配合物为 $\ce{[Co(C2O4)3]^{4-}}$。三个评分点：一幅正确的三双齿 displayed formula；正确镜像；两幅的总电荷。

![Official mark-scheme pair of mirror-image tris(ethanedioato)cobalt(II) complexes, each with overall charge 4 minus.](/assets/img/a2-chemistry/ch03-2025-jan-q07-optical-isomers.png)

**复做：**不看图重画，逐一检查三个配体的 C–C 与 C–O 键，避免画成六个互不相连的单齿配体。

</details>

<span id="colour"></span>

## M2：颜色、能级差与比色法

配体的影响使 d 轨道分成不同能量组。可见光中某些波长的光子被吸收，能量满足 $\Delta E=h\nu=hc/\lambda$，电子跃迁到更高能量的 d 轨道。观察到的颜色来自**未被吸收而透射／反射的光**，不是本题中的电子“发出该颜色的光”。

$$\Delta E=\frac{hc}{\lambda}.$$

波长代入 m；若求 nm，最后乘 $10^9$。每个光子的 J 与每 mol 的 kJ 不是同一物理量，不要额外乘 Avogadro 常数，除非题目要求每 mol 的能量。改变金属、氧化态、配体或配位环境可以改变能级差，因此改变颜色。

### 真题：解释颜色，再计算波长

**OxfordAQA CH03 · June 2026 · 09.4–09.5 · 3 + 2 marks**

> **09.4** Haem causes blood to be red. Explain why complexes formed from transition metal ions are coloured.
>
> **09.5** In a sample of haem, each electron is excited by gaining $3.67\times10^{-19}$ J of energy.
>
> Calculate the wavelength, in nm, of light absorbed by each electron.
>
> Speed of light, $c=3.00\times10^8$ m s⁻¹; Planck constant, $h=6.63\times10^{-34}$ J s.

<details markdown="1">
<summary>提示：看到的颜色与吸收的颜色相同吗？</summary>

解释写清吸收、跃迁、未吸收光三步；计算整理为 $\lambda=hc/\Delta E$。

</details>

<details markdown="1">
<summary>评分解析：MS 第 27 页</summary>

09.4：吸收可见光中某些波长；d 电子被激发到较高能级；余下透射／反射的光产生所见颜色，各 1 分。MS 明确不接受用 **emitted** 解释所见颜色。

09.5：$\lambda=(6.63\times10^{-34}\times3.00\times10^8)/(3.67\times10^{-19})=5.42\times10^{-7}$ m = **542 nm**。代入／整理 1 分，nm 结果 1 分。

</details>

### 真题：比色法不是只测一次吸光度

**OxfordAQA CH03 · June 2026 · 08.1 · 3 marks**

> A solution of KMnO₄ has an unknown concentration. A student uses colorimetry to determine the concentration of this solution.
>
> Describe how a graph is produced and used to determine the concentration of the KMnO₄ solution.

<details markdown="1">
<summary>提示：怎样把未知读数变成浓度？</summary>

需要已知浓度系列建立 calibration curve；横、纵坐标是什么？

</details>

<details markdown="1">
<summary>评分解析：MS 第 24 页</summary>

配制一系列已知浓度的标准溶液；测吸光度并作 **absorbance（y）对 concentration（x）** 的图；测未知溶液的吸光度，从图读出浓度，三步各 1 分。

实验方法还应控制波长、比色皿、光程与空白校准，避免在校准范围外随意外推。这些是完整方法的补充，不另外增加本题原分值。

</details>

<span id="ligand-substitution"></span>

## M3：配体取代、螯合与生物情境

**Ligand substitution** 更换配体，金属氧化态通常不改变。例如：

$$\ce{[Cu(H2O)6]^{2+} + 4Cl^- <=> [CuCl4]^{2-} + 6H2O}.$$

水配合物主要为六配位八面体；氯配合物为四配位四面体，颜色改变。加入大量 Cl⁻ 可推动取代；稀释降低 Cl⁻ 浓度，有利于反向。不要把这种颜色变化自动判为氧化还原。

**Chelate effect**：一个多齿配体代替多个单齿配体时，释放的粒子常使体系熵增加，推动形成较稳定的配合物。例如 EDTA⁴⁻ 代替六个水配体，反应式粒子计数由 2 变为 7。论证必须结合具体方程式和 $\Delta G=\Delta H-T\Delta S$；不能断言所有配体取代的 $\Delta H$ 都等于 0。

对 en 的示范：$\ce{[Co(H2O)6]^{2+} + 3en <=> [Co(en)3]^{2+} + 6H2O}$。粒子由 4 增至 7，$\Delta S>0$；若断开与形成的六个金属—配体键能相近，$\Delta H$ 很小，$-T\Delta S$ 项可使 $\Delta G$ 为负。这比只说“多齿配体总是成键更强”更完整。

其他取代例子：$\ce{[Co(H2O)6]^{2+} + 4Cl^- <=> [CoCl4]^{2-} + 6H2O}$（粉红到蓝）；$\ce{[Fe(H2O)6]^{3+} + 4Cl^- <=> [FeCl4]^- + 6H2O}$。Cl⁻ 较大，取代可能使配位数由 6 变 4；NH₃ 与 H₂O 大小相近，取代一般不改变配位数，且可能只部分取代，例如 Cu 的四氨二水配合物仍是六配位。

### 真题：EDTA 与水配体

**OxfordAQA CH03 · June 2026 · 07.5 · 3 marks**

> When a solution containing EDTA⁴⁻ ions is added to a solution containing [Cu(H₂O)₆]²⁺ ions, a more stable complex is formed.
>
> Write an equation for this reaction. Explain why the complex is more stable.

<details markdown="1">
<summary>提示：释放多少水？反应前后有多少粒子？</summary>

EDTA 的电荷也要计入总电荷。数整个反应式中的粒子，不能只比较配体个数。

</details>

<details markdown="1">
<summary>评分解析：MS 第 23 页</summary>

$$\ce{[Cu(H2O)6]^{2+} + EDTA^{4-} -> [Cu(EDTA)]^{2-} + 6H2O}.$$

正确方程式 1 分；粒子数由 2 增至 7，1 分；熵增加，1 分。不要写成“EDTA 的配位数是 1”。

</details>

血红蛋白中的 Fe²⁺ 与多齿 haem 和其他配体配位；O₂ 可以结合并释放，参与运输。CO 与该铁中心结合更强，竞争性地占据 O₂ 的位置。

### 真题：CO 的毒性与配位

**OxfordAQA CH03 · June 2026 · 09.3 · 1 mark**

> Explain, with reference to haemoglobin, why carbon monoxide is toxic.

<details markdown="1">
<summary>提示</summary>

把“结合更强”与“氧气的位置”联系起来。

</details>

<details markdown="1">
<summary>评分解析：MS 第 26 页</summary>

CO 与 haemoglobin 中的 Fe 结合比 O₂ 更强，或置换 O₂，1 分。只写“CO 有毒”“无法呼吸”没有说明配位原因。

</details>

<span id="redox-titration"></span>

## M4：变价与氧化还原滴定

过渡金属的 3d 与 4s 电子能量相近，可能形成多种氧化态。V 的不同水溶液氧化态有不同颜色：V(V) 的 $\ce{VO2+}$ 为黄，V(IV) 的 $\ce{VO^{2+}}$ 为蓝，V³⁺ 为绿，V²⁺ 为紫。利用 [电势比较](/alevel/a2-chemistry/electrode-potentials/#redox-direction) 判断还原剂能将体系还原到哪一步。

滴定计算先配平半反应，再从总反应得到 mol 比。取样计算必须区分**整瓶的 mol**与**移取部分的 mol**。酸性 KMnO₄ 滴定通常不另加指示剂，终点是第一滴略过量 MnO₄⁻ 的持久浅粉红色。

Fe²⁺ 滴定的总式为 $\ce{MnO4^- + 8H+ + 5Fe^{2+} -> Mn^{2+} + 4H2O + 5Fe^{3+}}$，所以 MnO₄⁻ : Fe²⁺ = 1 : 5；ethanedioate 的比例则是 2 : 5，不能混用。**自拟示范：**20.0 cm³ 的 0.0200 mol dm⁻³ MnO₄⁻ 完全氧化 25.0 cm³ Fe²⁺，则 Fe²⁺ 的浓度为 $5(0.0200\times0.0200)/0.0250=0.0800\,\mathrm{mol\,dm^{-3}}$。

还原电势会受到 pH 和配体影响，例如含 H⁺ 的 MnO₄⁻ 半反应随酸度改变，还原倾向也改变。**Tollens’ reagent** 含线形 $\ce{[Ag(NH3)2]+}$，可被醛还原为 Ag 形成银镜；通常不与酮产生该反应。碱性总式可写为 $\ce{RCHO + 2[Ag(NH3)2]+ + 3OH^- -> RCOO^- + 2Ag + 4NH3 + 2H2O}$。

### 真题：从整瓶到取样，再算 KMnO₄

**OxfordAQA CH03 · January 2025 · 04.1–04.2 · 5 + 1 marks**

Na₂C₂O₄ can be used to determine the concentration of a solution of KMnO₄.

$$\ce{5C2O4^{2-}(aq) + 2MnO4^-(aq) + 16H+(aq) -> 2Mn^{2+}(aq) + 8H2O(l) + 10CO2(g)}.$$

Method:

- 0.910 g of anhydrous Na₂C₂O₄ is dissolved in some distilled water and the solution is made up to 150 cm³ using dilute sulfuric acid in a volumetric flask.
- 25.0 cm³ of this solution are transferred to a conical flask and the solution is warmed to 60 °C.
- KMnO₄ solution is added from a burette until there is a permanent colour change. 22.35 cm³ of KMnO₄ solution are needed.

> **04.1** Determine the concentration, in mol dm⁻³, of the Na₂C₂O₄ solution. Calculate the concentration, in mol dm⁻³, of the KMnO₄ solution.
>
> **04.2** State the colour change at the end point.

Use $M_r(\mathrm{Na_2C_2O_4})=134.0$, from the relative atomic masses supplied with the paper.

<details markdown="1">
<summary>提示：25.0 cm³ 只占整瓶的多少？</summary>

先求整瓶浓度，然后求取样中的 mol；MnO₄⁻ 的 mol 是 C₂O₄²⁻ 的 $2/5$。

</details>

<details markdown="1">
<summary>评分解析：MS 第 16 页</summary>

$$n(\mathrm{Na_2C_2O_4})=0.910/134.0=0.006791,\qquad c=0.006791/0.150=\boxed{0.0453\,\mathrm{mol\,dm^{-3}}}.$$

取样含 $0.0452736\times0.0250=0.00113184$ mol C₂O₄²⁻，故 MnO₄⁻ 为 $0.00113184\times2/5=0.000452736$ mol。

$$c(\mathrm{KMnO_4})=0.000452736/0.02235=\boxed{0.0203\,\mathrm{mol\,dm^{-3}}}.$$

04.1 的五步：整瓶 mol、浓度、取样 mol、反应比例、滴定液浓度。04.2：**colourless → pale pink**，1 分；不是终点变成深紫色。

</details>

<span id="catalysis"></span>

## M5：均相、非均相与自催化

催化剂提供较低活化能的路径，在总反应中再生；它加快正、逆反应达到平衡，不改变平衡位置。过渡金属可利用不同氧化态形成反应循环。

**Heterogeneous catalyst** 与反应物不同相。表面吸附让反应物接近并使键更易反应，之后产物脱附；杂质可能占据活性位点而使催化剂中毒。**Homogeneous catalyst** 与反应物同相，通常通过中间体／氧化态变化循环。

Haber process 用 Fe 固体催化 $\ce{N2 + 3H2 <=> 2NH3}$。把催化剂分散在支撑材料上可增大有效表面积，减少昂贵催化材料的用量；清除杂质可减少中毒和更换成本。

### Fe²⁺ 均相催化的两步

$\ce{S2O8^{2-}}$ 与 I⁻ 都是阴离子，直接接近受到静电排斥。Fe²⁺／Fe³⁺ 提供中间路径：

$$\ce{S2O8^{2-} + 2Fe^{2+} -> 2SO4^{2-} + 2Fe^{3+}}.$$

$$\ce{2Fe^{3+} + 2I^- -> 2Fe^{2+} + I2}.$$

第一步 Fe²⁺ 被氧化，第二步 Fe³⁺ 被还原，Fe²⁺ 再生；催化剂与反应物都在水溶液中，故为均相。**自拟任务：**将两式相加，划去再生物种，确认净反应为 $\ce{S2O8^{2-} + 2I^- -> 2SO4^{2-} + I2}$。

### 真题：Contact process 的催化循环

**OxfordAQA CH03 · June 2024 · 07.2–07.3 · 3 + 1 marks**

In the Contact process, vanadium(V) oxide (V₂O₅) acts as a heterogeneous catalyst in the oxidation of sulfur dioxide to sulfur trioxide.

> **07.2** Write two equations to show how V₂O₅ acts as a catalyst in the Contact process. Explain why the catalyst is heterogeneous.
>
> **07.3** Suggest why it is important that any impurities are removed from the gas before sulfur dioxide is used in the Contact process.

<details markdown="1">
<summary>提示：第二步要让 V₂O₅ 再生</summary>

第一步由 V₂O₅ 把 SO₂ 氧化，第二步用 O₂ 恢复 V₂O₅；说明相态时必须同时提催化剂与反应物。

</details>

<details markdown="1">
<summary>评分解析：MS 第 23 页</summary>

$\ce{V2O5 + SO2 -> V2O4 + SO3}$；$\ce{V2O4 + 1/2O2 -> V2O5}$，各 1 分。V₂O₅ 为固体，而 SO₂／O₂ 为气体，1 分。杂质可能堵塞活性位点／使催化剂中毒，另 1 分。

相加后 V₂O₅ 与 V₂O₄ 消去，留下 $\ce{SO2 + 1/2O2 -> SO3}$。

</details>

**Autocatalysis** 中，某产物本身是催化剂。反应初期产物少，速率低；产物积累使反应加快；随后反应物耗尽，速率再次下降。因此反应物浓度随时间是“起初缓降 → 中间陡降 → 末段趋平”，不是反应物浓度先增加。

### 真题：自催化步骤与浓度—时间图

**OxfordAQA CH03 · June 2026 · 08.2–08.4 · 1 + 2 + 1 marks**

Manganate(VII) ions react with ethanedioate ions. This reaction is autocatalysed.

> **08.2** Identify the autocatalyst in this reaction.
>
> **08.3** Write an equation for each of the two steps that show how the autocatalyst is involved in this reaction.
>
> **08.4** The concentration of MnO₄⁻ is monitored throughout this autocatalysis reaction using a colorimeter. Sketch a graph to show how the concentration of MnO₄⁻ changes with time.

<details markdown="1">
<summary>提示：Mn²⁺ 先消耗，怎样再生？</summary>

第一步生成 Mn³⁺，第二步由 ethanedioate 把它还原回 Mn²⁺。画图用浓度作纵轴，不是速率。

</details>

<details markdown="1">
<summary>评分解析：MS 第 24–25 页</summary>

08.2：Mn²⁺，1 分。

08.3：$\ce{4Mn^{2+} + MnO4^- + 8H+ -> 5Mn^{3+} + 4H2O}$；$\ce{2Mn^{3+} + C2O4^{2-} -> 2Mn^{2+} + 2CO2}$，各 1 分。把第二式乘 $5/2$ 后相加，会看到净生成 Mn²⁺。

08.4：从较高初始浓度开始，先缓慢下降，再快速下降，最后趋平，1 分。要画连续下降的曲线，并标注 concentration of MnO₄⁻ 与 time。这是 CH03 的自催化图，不要求另学 CH04 速率方程才能作答。

</details>

## 闭卷检查与下一步

画一个双齿配体和两个镜像配合物；解释颜色的三步；从滴定数据写出五步 mol 链；相加催化循环，确认催化剂再生。

下一主题：[水溶液中的离子反应](/alevel/a2-chemistry/ions-in-solution/)。
