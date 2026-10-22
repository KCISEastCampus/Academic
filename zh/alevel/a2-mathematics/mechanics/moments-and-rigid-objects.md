---
title: 力矩与刚体平衡
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/moments-and-rigid-objects/
permalink: /zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/
toc_headings: h2
study_page: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.3 静力学与力（Statics and forces）

计算力使物体转动的效果，同时用力平衡与力矩平衡处理横梁、梯子和铰接杆。求出力之后，还要判断它能否由题目中的接触或连接提供。

- **学习：**先学[力矩](#the-moment-of-a-force)，再学[平行力平衡](#equilibrium-under-parallel-forces)、[临界倾倒](#a-beam-about-to-tip)及[平面内刚体平衡](#equilibrium-of-a-rigid-object-in-a-plane)。
- **作业提示：**选择几个未知力的作用线都经过的点作矩心，这些力对此点的力矩便为零。
- **复习：**收起解答完成[练习](#practice)，检查垂直距离、转动正负号及接触条件。

教材对应：第 11 章 §11.4（印刷页 170–179）。本课的关键术语是力矩（moment）、作用线（line of action）、转动方向（sense of rotation）、法向反力（normal reaction）及极限平衡（limiting equilibrium）。

**开始前：**复习[力、平衡与摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/)。均匀杆（uniform rod）的重力作用于中点；轻杆（light rod）的自身重量可忽略。除非另有说明，取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值，最终数值保留三位有效数字，角度保留一位小数；题目另有要求时从其要求。

所有例题和练习均为自拟题，并非官方历届试题，不设官方分值。图示表达力的方向和作用点，箭长没有采用统一的力大小比例尺。

## 力的力矩 {#the-moment-of-a-force}

**力矩**衡量一个力绕某点产生的转动效果。在平面图中，转轴经过该点，并垂直于图面。

$$\text{magnitude of moment}=Fd.$$

这里 $F$ 是力的大小，$d$ 是**矩心到力的作用线的垂直距离**。作用线是沿力的方向、经过作用点的直线，必要时应将它延长。力矩单位是牛顿米（newton metre），记为 $\mathrm{N\,m}$。

答案既要有大小，也要有**转动方向**：顺时针或逆时针。带符号计算时先选正方向，并始终保持一致。本课除非另有说明，取逆时针为正。

| 情况 | 对所选矩心的力矩 |
| --- | --- |
| 力的作用线经过矩心 | 即使力不为零，力矩仍为零 |
| 力垂直于杆，作用点到矩心的距离为 $r$ | 大小为 $Fr$ |
| 力与杆夹角为 $\theta$，作用点到矩心的距离为 $r$ | 大小为 $Fr\sin\theta$ |
| 多个力共同作用 | 将各力矩按正负号相加 |

处理斜向力有两种等价方式：用完整的力乘垂距 $r\sin\theta$；或用垂直于杆的分力 $F\sin\theta$ 乘距离 $r$。**不能在力和距离上各乘一次正弦。**

### 例 1：垂直距离与符号 {#example-1-perpendicular-distance-and-signs}

**Question:** a horizontal rod extends $3\,\mathrm m$ to the right of $A$. A $10\,\mathrm N$ downward force acts $1\,\mathrm m$ from $A$, an $8\,\mathrm N$ upward force acts $2\,\mathrm m$ from $A$, and a $12\,\mathrm N$ force acts at the far end, directed downwards and to the right at $30^\circ$ to the rod. Find their resultant moment about $A$.

![水平杆上有向下的 10 N 力、向上的 8 N 力及斜向的 12 N 力，并标出 A 到斜向力作用线的垂直距离](/assets/img/a2-math-mech/moment-perpendicular-distance.svg)

取逆时针为正：

$$M_A=-10(1)+8(2)-12(3)\sin30^\circ.$$

$$M_A=-10+16-18=-12\,\mathrm{N\,m}.$$

所以合力矩为 $\boxed{12\,\mathrm{N\,m}\text{ clockwise}}$，即顺时针十二牛顿米。

**核对：**对 $12\,\mathrm N$ 的力，垂距为 $3\sin30^\circ=1.5\,\mathrm m$。改用竖直分力也得到 $-(12\sin30^\circ)(3)=-18\,\mathrm{N\,m}$。它的水平分力沿杆的方向，所以对 $A$ 的力矩为零。

**常见错误：**直接使用 $12\times3$。该力并不垂直于杆。

## 平行力作用下的平衡 {#equilibrium-under-parallel-forces}

刚体（rigid object）在共面平行力作用下平衡时，使用：

$$\sum F=0,\qquad\sum M_A=0.$$

第一式沿各力的共同方向列力平衡；第二式对选定的点 $A$ 列带符号的力矩平衡。

把每个力画在正确作用点上。水平梁上的竖直载荷，其力臂是水平距离。选一个支点作矩心，可以从该方程中消去这个支点的未知反力。

再对另一个支点取矩可以核对答案。也可以先用这两个力矩方程求反力，再检查竖直方向合力为零。

### 例 2：带悬伸段的梁 {#example-2-a-beam-with-an-overhang}

**Question:** a uniform horizontal beam $AB$ has length $6\,\mathrm m$ and weight $120\,\mathrm N$. It rests on small supports at $A$ and at $C$, where $AC=4\,\mathrm m$. A $40\,\mathrm N$ load acts at $B$. Find the upward reactions $R_A$ and $R_C$.

梁的重力作用于距端点 $3\,\mathrm m$ 处，该端点为 $A$。对 $A$ 取矩，逆时针为正：

$$4R_C-120(3)-40(6)=0.$$

$$R_C=150\,\mathrm N.$$

竖直方向平衡：

$$R_A+R_C=120+40,$$

$$\boxed{R_A=10\,\mathrm N,\qquad R_C=150\,\mathrm N}.$$

**核对：**对 $C$ 取矩得到 $-10(4)+120(1)-40(2)=0$。两个反力都为正，两个支点确实都可向上推梁。

**常见错误：**把梁重力放在两个支点间距的中点。均匀梁的重力作用于**整根梁**的中点。

### 例 3：反求非均匀杆的重心 {#example-3-where-the-weight-of-a-non-uniform-rod-acts}

**Question:** a non-uniform horizontal rod $AB$ has length $4\,\mathrm m$. It is supported by vertical forces of $35\,\mathrm N$ at $A$ and $15\,\mathrm N$ at $B$, with no other forces except its weight. Find its weight and the distance of its centre of mass from $A$.

先由竖直平衡求重量：

$$W=35+15=50\,\mathrm N.$$

设重力作用于距离为 $x$ 的位置，距离从 $A$ 量起。对 $A$ 取矩：

$$15(4)-50x=0,$$

$$\boxed{x=1.2\,\mathrm m\text{ from }A}.$$

**核对：**对 $B$ 取逆时针为正的力矩，得到 $-35(4)+50(4-1.2)=0$。重心（centre of mass）靠近提供较大向上支承力的一端。

**常见错误：**非均匀杆仍把重力放在中点。均匀性未给出时，不能使用这个假设。

## 梁即将倾倒 {#a-beam-about-to-tip}

梁下方的普通支承只能向上推，不能向下拉。如果把向上设为正后算出负反力，说明该接触无法维持所假定的平衡。

梁**即将倾倒**（about to tip）时，正在失去接触的另一支点反力降为零。应对仍接触的支点取矩。木板放在屋顶边缘时，剩下的支承位置就在屋顶边缘。

这个条件描述失去接触，不表示摩擦恰好达到极限。若可能发生滑动和倾倒，须分别检查两个条件。

### 例 4：倾倒前的最大载荷 {#example-4-the-greatest-load-before-tipping}

**Question:** a uniform horizontal beam $AB$ has length $4\,\mathrm m$ and weight $80\,\mathrm N$. Small supports are at $A$ and at $C$, where $AC=3\,\mathrm m$. A downward load of weight $P$ acts at $B$. Find the greatest $P$ for equilibrium and the reactions at that value.

![长 4 m 的均匀梁支承于 A 和 C；80 N 重力在距 A 两米处，载荷 P 在距 A 四米的悬伸端 B](/assets/img/a2-math-mech/beam-tipping.svg)

对 $A$ 取矩，并列竖直平衡：

$$3R_C=80(2)+4P,$$

$$R_A+R_C=80+P.$$

因此

$$R_C=\frac{160+4P}{3},\qquad R_A=\frac{80-P}{3}.$$

随着 $P$ 增大，$R_A$ 减小。临界倾倒时，$R_A=0$：

$$\boxed{P_{\max}=80\,\mathrm N}.$$

梁即将绕 $C$ 顺时针转动，此时

$$\boxed{R_A=0,\qquad R_C=160\,\mathrm N}.$$

**核对：**临界时对 $C$ 取矩，$80(1)-80(1)=0$。在 $0\leq P\leq80$ 内，两反力均非负；若 $P>80$，假定的 $A$ 处反力会为负，因此梁在那里失去接触。

## 平面内的刚体平衡 {#equilibrium-of-a-rigid-object-in-a-plane}

一般共面力的平衡须同时满足三个条件：

$$\sum F_x=0,\qquad\sum F_y=0,\qquad\sum M_A=0.$$

前两式平衡各力，第三式平衡转动效果。仅合力为零并不足够：两个大小相等、方向相反、作用于不同平行直线上的力，仍能使物体转动。

1. 明确研究对象，在正确作用点画出它受到的所有力。
2. 选相互垂直的坐标轴及转动正方向。
3. 选择能消去若干未知力的矩心。
4. 用力的分解与平衡求其余未知量。
5. 换矩心核对，并检查接触、张力及摩擦条件。

不同矩心的力矩方程未必独立。不能只对同一直线上的多个点取矩，就认为已经替代两个力平衡方程、证明了平衡。

### 例 5：梯子靠在光滑墙上 {#example-5-a-ladder-against-a-smooth-wall}

**Question:** a uniform ladder of length $5\,\mathrm m$ and weight $200\,\mathrm N$ rests at $60^\circ$ to the horizontal. Its foot $A$ is on rough horizontal ground and its top $B$ touches a smooth vertical wall to the left. Find the ground reaction $R$, wall reaction $S$, friction magnitude $F$ and least coefficient of friction needed.

![梯子与水平地面成 60 度；A 处反力向上、摩擦指向墙，B 处墙反力向右，重力作用于中点](/assets/img/a2-math-mech/ladder-smooth-wall.svg)

墙光滑，因此墙反力只有水平方向。梯脚有远离墙的滑动趋势，所以 $A$ 处摩擦指向墙。

分别沿竖直和水平方向平衡：

$$R=200,\qquad F=S.$$

对 $A$ 取矩，逆时针为正。$R$ 和 $F$ 的作用线都经过 $A$：

$$200(2.5\cos60^\circ)-S(5\sin60^\circ)=0.$$

$$\boxed{S=F=\frac{100}{\sqrt3}\,\mathrm N\approx57.7\,\mathrm N}.$$

平衡要求 $F\leq\mu R$，因此所需的最小摩擦系数（coefficient of friction）为

$$\boxed{\mu_{\min}=\frac{F}{R}=\frac{1}{2\sqrt3}\approx0.289}.$$

**核对：**对 $B$ 取矩：

$$-F(5\sin60^\circ)-200(2.5\cos60^\circ)+R(5\cos60^\circ)=0.$$

若实际摩擦系数为 $0.4$，则 $F<0.4R=80\,\mathrm N$。梯子可以平衡，但摩擦并未达到极限。

**常见错误：**把与墙的夹角当成与地面的夹角。这两个角互余，相加为 $90^\circ$。

### 例 6：铰接杆与拉绳 {#example-6-a-hinged-rod-and-a-string}

**Question:** a uniform horizontal rod $AB$ of length $4\,\mathrm m$ and weight $60\,\mathrm N$ is smoothly hinged to a wall at $A$. A $40\,\mathrm N$ load acts at $B$. A light string from the midpoint $C$ to a point on the wall above $A$ makes $30^\circ$ with the horizontal. Find its tension and the magnitude and direction of the hinge force on the rod.

![水平杆在 A 处铰接；C 处绳向左上拉，60 N 重力也在 C，B 处载荷 40 N；铰链分力假设为 X 向右、Y 向上](/assets/img/a2-math-mech/hinged-rod-forces.svg)

本模型中的光滑铰链（smooth hinge）可提供力，但不提供阻碍转动的力矩。设铰链分力为向右的 $X$ 和向上的 $Y$。这只是设定正方向，并非规定实际力必须沿这些方向。

对 $A$ 取矩，消去两个铰链分力：

$$2T\sin30^\circ-60(2)-40(4)=0.$$

$$\boxed{T=280\,\mathrm N}.$$

分别沿水平、竖直方向平衡：

$$X=T\cos30^\circ=140\sqrt3,$$

$$Y+T\sin30^\circ=60+40\quad\Rightarrow\quad Y=-40.$$

因此铰链力向右且**向下**，大小为

$$\boxed{\sqrt{(140\sqrt3)^2+40^2}=20\sqrt{151}\,\mathrm N\approx246\,\mathrm N}.$$

它与向右水平线的下方夹角为

$$\boxed{\tan^{-1}\left(\frac{40}{140\sqrt3}\right)\approx9.4^\circ}.$$

**核对：**绳的竖直分力为 $140\,\mathrm N$，由向下的 $40\,\mathrm N$ 铰链分力与总重 $100\,\mathrm N$ 平衡。对 $C$ 取矩得到

$$(-2)(-40)+2(-40)=0.$$

**常见错误：**看到负的铰链分力便认定失去接触。铰链可以在任一方向施力；只能推的普通支承才有单向限制。

### 例 7：杆搁在光滑钉上 {#example-7-a-rod-resting-on-a-smooth-peg}

**Question:** a uniform rod $AB$ of length $6\,\mathrm m$ and weight $80\,\mathrm N$ rests at $30^\circ$ to the horizontal. Its foot $A$ is on rough horizontal ground. A small smooth peg underneath the rod touches it at $C$, where $AC=4\,\mathrm m$. Find the contact forces and decide whether equilibrium is possible if the ground coefficient of friction is $0.8$.

![杆与水平成 30 度，在 C 接触光滑钉；钉的反力垂直于杆，地面反力向上、摩擦向右，重力向下](/assets/img/a2-math-mech/rod-smooth-peg.svg)

将钉建模为点接触。它的反力 $S$ 垂直于杆，指向左上方；钉处没有摩擦。地面摩擦则向右。

对 $A$ 取矩。钉的反力已经垂直于 $AC$：

$$4S-80(3\cos30^\circ)=0,$$

$$\boxed{S=30\sqrt3\,\mathrm N\approx52.0\,\mathrm N}.$$

竖直、水平方向分别平衡：

$$R+S\cos30^\circ=80\quad\Rightarrow\quad\boxed{R=35\,\mathrm N},$$

$$\boxed{F=S\sin30^\circ=15\sqrt3\,\mathrm N\approx26.0\,\mathrm N}.$$

两接触处的法向反力均为正，而且

$$F=15\sqrt3<0.8(35)=28\,\mathrm N.$$

因此可以平衡，地面摩擦未达到极限。所需的最小摩擦系数为 $\frac{3\sqrt3}{7}\approx0.742$。

**核对：**对 $C$ 取矩：

$$-4R\cos30^\circ+4F\sin30^\circ+80\cos30^\circ=0.$$

**常见错误：**将钉的反力画成竖直，或把它乘以 $4\cos30^\circ$。该力已垂直于杆，对 $A$ 的力矩就是 $4S$。

### 例 8：梯子两端都有摩擦 {#example-8-friction-at-both-ends-of-a-ladder}

**Question:** a uniform ladder of length $4\,\mathrm m$ and weight $100\,\mathrm N$ rests with its top against a rough wall to the left and its foot on rough horizontal ground. It is just about to slip, with the top moving down and the foot moving away from the wall. Friction is limiting at both contacts. The ground coefficient is $\frac14$ and the wall coefficient is $\frac13$. Find the contact forces and the angle $\alpha$ to the horizontal.

地面处设法向反力 $R$ 向上、摩擦 $F$ 指向墙；墙面处设法向反力 $S$ 向右、摩擦 $G$ 向上。两个极限摩擦条件使用的是**各自接触处的法向反力**：

$$F=\frac14R,\qquad G=\frac13S.$$

水平、竖直方向平衡：

$$S=F=\frac14R,\qquad R+G=100.$$

得到

$$\boxed{R=\frac{1200}{13}\,\mathrm N\approx92.3\,\mathrm N},$$

$$\boxed{S=F=\frac{300}{13}\,\mathrm N\approx23.1\,\mathrm N},$$

$$\boxed{G=\frac{100}{13}\,\mathrm N\approx7.69\,\mathrm N}.$$

对梯脚取矩。墙面两个力的力矩都为顺时针：

$$100(2\cos\alpha)-S(4\sin\alpha)-G(4\cos\alpha)=0.$$

除以 $4\cos\alpha$ 并整理：

$$\tan\alpha=\frac{50-G}{S}=\frac{11}{6}.$$

$$\boxed{\alpha\approx61.4^\circ}.$$

**核对：**$R+G=100$、$F=S$，且两法向反力均为正。梯子与墙的夹角为 $90^\circ-\alpha\approx28.6^\circ$。将结果代回力矩方程，合力矩为零。

**常见错误：**墙面粗糙时仍设 $R=100$。墙面向上的摩擦承担了部分重量。本题明确说两个接触都达到极限，才可同时使用两个摩擦等式；仅说“粗糙”并不足够。

## 练习 {#practice}

先尝试每道题，再展开提示。除了代数，还应更换矩心或检查物理条件来核对结果。

### Q1：倾斜杆上的力矩 {#q1-an-inclined-rod}

A rod $OB$ of length $2\,\mathrm m$ extends upwards and to the right at $30^\circ$ to the horizontal. A $12\,\mathrm N$ downward force acts at $B$, a $10\,\mathrm N$ horizontal force to the right acts at the midpoint, and a $20\,\mathrm N$ force acts along the rod at $B$, away from $O$. Find the resultant moment about $O$.

<details markdown="1">
<summary>提示</summary>

竖直力使用水平距离作力臂，水平力使用竖直距离。哪个力的作用线经过 $O$？

</details>

<details markdown="1">
<summary>解答与核对</summary>

取逆时针为正：

$$M_O=-12(2\cos30^\circ)-10(1\sin30^\circ)+0.$$

合力矩大小为

$$\boxed{(12\sqrt3+5)\,\mathrm{N\,m}}.$$

约为 $25.8\,\mathrm{N\,m}$，方向为顺时针。

**核对：**$B$ 处向下的力和位于 $O$ 上方的向右力都产生顺时针力矩。$20\,\mathrm N$ 的力沿经过 $O$ 的直线作用，因此力矩为零。

</details>

### Q2：轻梁 {#q2-a-light-beam}

A light horizontal beam of length $5\,\mathrm m$ rests on supports at its ends $A$ and $B$. Downward loads of $30\,\mathrm N$ and $20\,\mathrm N$ act $1\,\mathrm m$ and $4\,\mathrm m$ from $A$. Find both reactions.

<details markdown="1">
<summary>提示</summary>

轻梁的自身重量可忽略。对 $A$ 取矩，再列竖直方向平衡。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$5R_B=30(1)+20(4)\quad\Rightarrow\quad R_B=22\,\mathrm N.$$

$$\boxed{R_A=28\,\mathrm N,\qquad R_B=22\,\mathrm N}.$$

**核对：**反力之和为 $50\,\mathrm N$；对 $B$ 取矩，$-28(5)+30(4)+20(1)=0$。两接触都能提供所需的向上推力。

</details>

### Q3：另一端发生倾倒 {#q3-tipping-at-the-other-end}

A uniform horizontal plank $AB$ of length $6\,\mathrm m$ and weight $90\,\mathrm N$ rests on small supports $C$ and $D$, where $AC=1\,\mathrm m$ and $AD=5\,\mathrm m$. A downward load of weight $P$ is placed at $A$. Find both reactions when $P=100\,\mathrm N$, then find the greatest possible $P$ before tipping. State the pivot at the tipping limit.

<details markdown="1">
<summary>提示</summary>

对 $C$ 取矩。$A$ 处载荷和木板重力的转动效果相反。随着 $P$ 增大，哪个反力减小？

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$4R_D+P(1)-90(2)=0,$$

$$R_D=45-\frac P4,\qquad R_C=90+P-R_D=45+\frac{5P}{4}.$$

当 $P=100\,\mathrm N$ 时，

$$\boxed{R_C=170\,\mathrm N,\qquad R_D=20\,\mathrm N}.$$

临界倾倒时 $R_D=0$，所以 $\boxed{P_{\max}=180\,\mathrm N}$。木板即将绕 $C$ 逆时针转动，此时 $R_C=270\,\mathrm N$。

**核对：**对 $D$ 取矩，$-4R_C+2(90)+5P=0$。在 $0\leq P\leq180$ 内，两反力均非负。

</details>

### Q4：梯子保持平衡的最小角度 {#q4-the-least-ladder-angle-for-equilibrium}

A uniform ladder of length $4\,\mathrm m$ and weight $120\,\mathrm N$ has its top against a smooth vertical wall to the left. Its foot rests on rough horizontal ground with coefficient of friction $\frac14$. Find the least angle $\alpha$ to the horizontal for equilibrium, and all contact forces at this limiting angle. Also give the angle to the wall.

<details markdown="1">
<summary>提示</summary>

使用 $R=120$、$F=S$ 并对梯脚取矩。先列 $F\leq\frac14R$，再找临界角。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$120(2\cos\alpha)=S(4\sin\alpha),$$

$$S=F=60\cot\alpha.$$

因为 $F\leq30$，且 $0<\alpha<90^\circ$，

$$\tan\alpha\geq2.$$

$$\boxed{\alpha_{\min}=\tan^{-1}2\approx63.4^\circ}.$$

与墙夹角为 $\boxed{26.6^\circ}$。在临界角处，$\boxed{R=120\,\mathrm N,\quad F=S=30\,\mathrm N}$。

**核对：**与地面夹角越大，$\cot\alpha$ 越小，所需摩擦越小；极限摩擦仍为 $\frac14(120)=30\,\mathrm N$。

</details>

### Q5：人沿梯子向上爬 {#q5-a-person-climbing-a-ladder}

A uniform ladder of length $5\,\mathrm m$ and weight $100\,\mathrm N$ rests at $60^\circ$ to the horizontal, against a smooth wall to the left. The coefficient of friction at the ground is $0.3$. A person of weight $500\,\mathrm N$ stands at distance $x$ along the ladder from its foot. Model the person as a particle and assume the ladder remains rigid. Find the greatest $x$ for equilibrium. Decide whether equilibrium is possible at $x=2\,\mathrm m$ and $x=3\,\mathrm m$.

<details markdown="1">
<summary>提示</summary>

地面反力须支承两个重量。人的重力对梯脚的垂直力臂是 $x\cos60^\circ$。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$R=600,\qquad F=S.$$

对梯脚取矩：

$$100(2.5\cos60^\circ)+500x\cos60^\circ=S(5\sin60^\circ).$$

$$S=\frac{250+500x}{5\sqrt3}.$$

极限摩擦为 $0.3(600)=180\,\mathrm N$。在最大距离处，

$$\frac{250+500x}{5\sqrt3}=180.$$

$$\boxed{x_{\max}=1.8\sqrt3-0.5\approx2.62\,\mathrm m}.$$

当 $x=2$ 时，$F=\frac{250}{\sqrt3}\approx144\,\mathrm N<180\,\mathrm N$，所以可以平衡。当 $x=3$ 时，$F=\frac{350}{\sqrt3}\approx202\,\mathrm N>180\,\mathrm N$，因此在题设接触条件下不能平衡。

**核对：**$0<x_{\max}<5$，临界情况发生在人到达梯顶之前。$x$ 增大会增大人的重力矩，也增大所需摩擦。

</details>

### Q6：铰链合力 {#q6-the-resultant-hinge-force}

A uniform horizontal rod $AB$ of length $3\,\mathrm m$ and weight $40\,\mathrm N$ is smoothly hinged at $A$. A $20\,\mathrm N$ load acts $2\,\mathrm m$ from $A$. A light string at $B$ pulls upwards and towards a point on the wall above $A$, making angle $\theta$ with the horizontal, where $\tan\theta=\frac34$. Find the tension and the magnitude and direction of the hinge force on the rod.

<details markdown="1">
<summary>提示</summary>

使用 $\sin\theta=\frac35$ 和 $\cos\theta=\frac45$。先对铰链取矩，再求铰链力的水平及竖直分量。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$3T\left(\frac35\right)=40(1.5)+20(2),$$

$$\boxed{T=\frac{500}{9}\,\mathrm N\approx55.6\,\mathrm N}.$$

设 $X$ 向右、$Y$ 向上，

$$X=\frac45T=\frac{400}{9},\qquad Y=60-\frac35T=\frac{80}{3}.$$

铰链合力大小为

$$\boxed{\sqrt{X^2+Y^2}=\frac{80\sqrt{34}}{9}\,\mathrm N\approx51.8\,\mathrm N}$$

方向在向右水平线的上方，夹角 $\boxed{\tan^{-1}\left(\frac35\right)\approx31.0^\circ}$。

**核对：**水平力抵消；竖直方向 $\frac{80}{3}+\frac{100}{3}=60$。对 $B$ 取矩，$-3\left(\frac{80}{3}\right)+40(1.5)+20(1)=0$。

</details>

### Q7：检验光滑钉模型 {#q7-checking-a-smooth-peg-model}

A uniform rod of length $6\,\mathrm m$ and weight $80\,\mathrm N$ rests with its foot on rough horizontal ground and a small smooth peg underneath the rod at distance $4\,\mathrm m$ from its foot. The ground coefficient of friction is $0.5$. Find the required contact forces when the rod is at $10^\circ$ and at $30^\circ$ to the horizontal. Decide whether equilibrium is possible in each case.

<details markdown="1">
<summary>提示</summary>

设杆与水平夹角为 $\alpha$，钉的反力垂直于杆。先对杆脚取矩求此力，再检查 $R\geq0$ 和 $F\leq0.5R$。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$4S=80(3\cos\alpha),\qquad S=60\cos\alpha.$$

$$R=80-60\cos^2\alpha,\qquad F=60\sin\alpha\cos\alpha.$$

当夹角为 $10^\circ$ 时，

$$\boxed{\begin{aligned}S&\approx59.1\,\mathrm N,\\ R&\approx21.8\,\mathrm N,\\ F&\approx10.3\,\mathrm N.\end{aligned}}$$

用未舍入值比较，所需摩擦约 $10.2606\,\mathrm N$，上限约 $10.9046\,\mathrm N$。所需值较小，因此可以平衡。

当夹角为 $30^\circ$ 时，

$$\boxed{\begin{aligned}S&=30\sqrt3\,\mathrm N,\\ R&=35\,\mathrm N,\\ F&=15\sqrt3\,\mathrm N.\end{aligned}}$$

所需摩擦约 $26.0\,\mathrm N$，大于上限 $0.5R=17.5\,\mathrm N$，因此不能平衡。

**核对：**两个情况的法向反力都为正。第二种情况失效的原因是摩擦不足，而非失去法向接触。上述式子满足 $R+S\cos\alpha=80$ 及 $F=S\sin\alpha$。

</details>

### Q8：两个极限接触 {#q8-two-limiting-contacts}

A uniform ladder of weight $156\,\mathrm N$ touches a rough vertical wall to the left and rough horizontal ground. It is just about to slip with its top moving down and its foot moving away from the wall. Friction is limiting at both contacts. The ground coefficient is $\frac13$ and the wall coefficient is $\frac14$. Find both normal reactions, both friction forces and the angle to the horizontal.

<details markdown="1">
<summary>提示</summary>

使用地面摩擦 $F=\frac13R$、墙面摩擦 $G=\frac14S$、水平平衡 $F=S$、竖直平衡 $R+G=156$。力矩方程中的梯长会约去。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$S=\frac13R,\qquad G=\frac14S=\frac{R}{12}.$$

$$R+\frac{R}{12}=156\quad\Rightarrow\quad\boxed{R=144\,\mathrm N}.$$

$$\boxed{S=48\,\mathrm N,\quad F=48\,\mathrm N,\quad G=12\,\mathrm N}.$$

设梯长为 $L$，对梯脚取矩并除以 $L\cos\alpha$：

$$78=S\tan\alpha+G.$$

$$\boxed{\tan\alpha=\frac{11}{8},\qquad\alpha\approx54.0^\circ}.$$

**核对：**竖直方向 $144+12=156$，水平方向 $F=S=48$。力矩条件为 $48\left(\frac{11}{8}\right)+12=78$。地面摩擦指向墙，墙面摩擦向上，分别反抗题目所述的滑动趋势。

</details>

## 独立诊断：哪个条件先失效？ {#independent-task-which-condition-fails-first}

**Self-written task.** A uniform rigid box has weight $200\,\mathrm N$, a horizontal base of width $1.2\,\mathrm m$ and height $2\,\mathrm m$. It stands on rough horizontal ground with coefficient of friction $0.3$. A horizontal force $P$ to the right is applied at height $1.5\,\mathrm m$. It is increased slowly from zero. A student claims that the box remains in equilibrium at $P=70\,\mathrm N$ because the turning effect is too small to tip it. Assess the claim and determine the first loss of equilibrium. Model the ground contact by a resultant upward normal force acting somewhere within the base and a horizontal friction force at ground level. No other forces act. Choose and justify your method.

<details markdown="1">
<summary>推理提示</summary>

分别求力平衡所需的摩擦，以及力矩平衡所需的法向合力作用位置；两者都必须可实现。达到倾倒界限时，法向合力的作用线移至底边边缘。

</details>

<details markdown="1">
<summary>反馈与核对</summary>

取左下角为原点、向右为 $x$ 正方向。设法向合力 $N$ 作用于 $(x,0)$，向左摩擦大小为 $F$。力平衡给出 $N=200$、$F=P$。对原点取矩：

$$200x=200(0.6)+1.5P,\qquad x=0.6+\frac{1.5P}{200}.$$

静止接触须同时满足

$$0\leq x\leq1.2,\qquad F\leq0.3N.$$

候选倾倒界限为 $P=80\,\mathrm N$，但滑动界限为 $P=60\,\mathrm N$，因此先因**滑动**失去平衡，在 $P=60\,\mathrm N$ 达到极限平衡。此时 $x=1.05\,\mathrm m$，仍在底边内。倾倒值是假设滑动被阻止时的另一个界限；题设箱子在此之前已达到滑动极限。

当 $P=70\,\mathrm N$ 时，所需法向合力位置为 $x=1.125\,\mathrm m$，但所需摩擦 $70\,\mathrm N$ 超过上限 $60\,\mathrm N$。学生只检查力矩，不能据此判定平衡。如果始终设 $F=0.3N$ 而不区分 $P$ 的取值，应重新区分“实际所需静摩擦”与“最大静摩擦”。

**请用英文补全理由：**“The box cannot remain at rest because …, even though …”。

</details>

### 再尝试：改变拉力与接触条件 {#retry-change-the-pull-and-the-contact}

**Self-written task.** Use a box with the same dimensions and weight, but coefficient of friction $0.6$. A rope attached at its top-left corner pulls upwards and to the right at $30^\circ$ to the horizontal. Its tension $T$ is increased slowly from zero. Determine whether sliding or tipping occurs first, and check that contact is maintained up to that boundary. Treat the rope as light and the box as rigid. Use the same ground-contact model as above.

<details markdown="1">
<summary>再尝试提示</summary>

法向反力不再等于全部重量。先列竖直平衡，再比较摩擦界限与绕右下边缘的力矩条件。

</details>

<details markdown="1">
<summary>再尝试核对</summary>

以左下角为原点，绳作用于 $(0,2)$。它的向上分力对该角力矩为零。力与力矩平衡要求

$$N=200-\frac T2,\qquad F=\frac{\sqrt3}{2}T,\qquad xN=120+\sqrt3 T.$$

倾倒界限处 $x=1.2$：

$$1.2\left(200-\frac T2\right)=120+\sqrt3 T,\qquad T_{\mathrm{tip}}=\frac{120}{\sqrt3+0.6}\approx51.5\,\mathrm N.$$

候选滑动界限为

$$\frac{\sqrt3}{2}T=0.6\left(200-\frac T2\right),\qquad T_{\mathrm{slide}}=\frac{120}{\sqrt3/2+0.3}\approx103\,\mathrm N.$$

因此先倾倒。在该界限处，$N\approx174\,\mathrm N>0$，且 $F\approx44.6\,\mathrm N<0.6N\approx105\,\mathrm N$。此前 $x$ 从 $0.6$ 增至 $1.2$，$N$ 始终为正。若使用 $N=200$，便漏掉了绳的向上分力。须比较两个候选界限；较晚的界限不能用来描述已经失衡后的运动。

</details>

## 速查 {#quick-reference}

| 任务 | 方法 | 核对 |
| --- | --- | --- |
| 求一个力的力矩 | 力大小乘以矩心到作用线的垂直距离 | 写清顺／逆时针，单位为 $\mathrm{N\,m}$ |
| 杆上的斜向力 | $Fr\sin\theta$，其中 $\theta$ 为杆与力的夹角 | 只使用一个正弦因子 |
| 平行力平衡 | 沿力方向平衡，并取矩 | 换矩心核对 |
| 一般共面平衡 | 两个垂直方向的力方程及一个力矩方程 | 仅合力为零不足以判定 |
| 梁即将倾倒 | 将正在失去接触处的反力设为零 | 对剩余支点取矩 |
| 光滑墙 | 反力垂直墙面，没有墙面摩擦 | 竖直墙的反力为水平 |
| 杆下的光滑钉 | 接触反力垂直于杆 | 保留正确作用点 |
| 光滑铰链 | 两个力分量，不提供阻转力矩 | 负分量表示实际方向与假设相反 |
| 静摩擦 | 各接触处分别满足所需 $F\leq\mu R$ | 只有达到极限的接触才用等号 |

**练习后：**区分错误来自作用点、垂直距离、转动符号还是接触条件。先重新画图、检查角度，再重做。

**你应能做到：**计算带符号力矩，求支承力及铰链力，确定倾倒界限，并检验带摩擦的梯子和杆能否平衡。

## 来源与范围 {#sources-and-scope}

范围依据：[OxfordAQA Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，§3.5 M2.3。实际阅读的评分参照为 **9660/MA05 Unit M2，January 2025，Q5**：[试卷 pp.10–11](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)与[配套评分标准 Version 1.0 Final，p.11](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)。该题将解释墙反力与非均匀杆的力矩连接。本次使用仓库存档及配套评分标准来核对论证要求；本页教学题仍均为自拟题，不赋予官方分值。

页首精度约定适用于本页自拟题。January 2025 原卷要求计算器最终答案默认保留两位有效数字，题内另有规定时从其规定。做官方题应遵循实际试卷及题目指令。

**学习路线：**[上一课：力、平衡与摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/) · [力学目录](/zh/alevel/a2-mathematics/mechanics/) · [下一课：重心](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/)。
