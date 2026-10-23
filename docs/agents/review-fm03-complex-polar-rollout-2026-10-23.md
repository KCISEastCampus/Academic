# FM03 复数、多项式与极坐标：本轮独立内容复核

日期：2026-10-23。审查性质：相对固定基线的独立数学与内容阅读审查。

## 范围、依据与结论边界

基线为 d50b33b9fb954cbcadb27ea60bff6aa17163ef67，审查对象为 roots-and-polynomials、de-moivres-theorem、polar-coordinates 的英文及中文当前工作区版本。本轮关注新增目标任务、重试、稍后任务、变更解答、阅读边界及来源身份；未改可靠题目和图稿只核必要衔接，没有重新全量审计。

已读仓库 AGENTS、课程内容长期标准 v1.1、公式规则及协作说明，并读取[作者实施记录](implementation-fm03-complex-polar-2026-10-23.md)。作者记录已经标明本组三章完稿；下述数学核算和源码检查为本审稿者另行完成，不将作者自检直接转记为独立验收。

**用户澄清的适用口径：**“所有中间积分不跳步”仅适用于一阶微分方程章。本组三章按关键方法、必要条件和相应官方 MS 的作答证据衡量，不额外要求每个常规积分逐行展开。本文仍写出足以复查系数、端点与分段的核算。

**本轮结论（含修复复核）：**已重算的新增任务和变更解答数学结果成立；唯一发现 CP1 已在双语 De Moivre 受影响片段复核后关闭，最终哈希见文末补记。本次独立内容审查无遗留发现。

本审稿者只写本报告；此前已在[一阶及入口原报告](review-fm03-first-order-rollout-2026-10-23.md)追加 I1 关闭。没有修改六份课程、tests 或共享文件，没有提交或推送。以下不构成 Jekyll、浏览器、辅助技术或真实学生试用验收，也不代表全部 FM03 目标已经验收。

## 锁定的作者完稿快照（初审）

路径均相对于仓库根；EN 为 alevel/a2-further-mathematics/，ZH 为 zh/alevel/a2-further-mathematics/。

| 文件 | 行数 | SHA-256 |
| --- | ---: | --- |
| EN roots-and-polynomials.md | 618 | c93fc4e4821596d5f5069a706667f8ec14aa1a150eda4be2b09e44baa9ca12d9 |
| ZH roots-and-polynomials.md | 622 | 70d7e7f31c258516b42832e28a5409f929238c91a853835e8e0e1b5fb4e1bec0 |
| EN de-moivres-theorem.md | 1179 | 6ccddb35b4995fba6bd176c9df9cc15a18a82ace0fd5b2e88581cf14529f9870 |
| ZH de-moivres-theorem.md | 1181 | c1e65fb06721754d6c6e7fc5ace66ee97b030e28d000fbfe1b132d8d24ee9866 |
| EN polar-coordinates.md | 876 | 979828b4079f640657b909812c04c9b0e78ee08dcfbc1ed5d66c274aff5bf92e |
| ZH polar-coordinates.md | 878 | f2de43c1ed890ecd47a10be12bdfd4ecd50f70c63119f9e3fa0a1c5b7135d76b |

初审行号以上表快照为准；CP1 修复后的 De Moivre 行号和最终哈希见文末补记，不沿用旧行号声称已检查新稿。

## 具体可操作发现

### CP1：第三象限重试的题干须放在原解答之外（初审 P2，已复核关闭）

位置：[EN De Moivre L1013](../../alevel/a2-further-mathematics/de-moivres-theorem.md#question-10--an-exact-value-from-a-complex-root)；ZH L1015。独立的“Exact-value retry check／精确值重试检查”位于 EN L1019–1027、ZH L1021–1029。

初审时，完整重试要求“求同一方程第三象限的根及其单位方向向量”只出现在 Q10 的完整解答内。按该句要求收起解答后，学生只能看见一个检查答案的折叠控件，看不见新任务要求；该控件还位于 Q10 的 lesson-check 边界之外。问题是重试任务无法在收起帮助的状态独立阅读，数学答案没有错误。

建议最小修法：

- 将重试题干移到原完整解答之外，明确写出方程、象限及两项输出；不让学生依赖“同一方程”回开旧答案。
- 给重试题干和现有检查答案一个共同、独立的任务边界。小重试可以只设一个关闭的检查答案，无须机械增加提示。
- 两语保留同一英文任务，例如：**Self-written retry; no official marks.** A root $w$ of $w^2=1+i$ lies in the third quadrant. Find $w$ and $w/\lvert w\rvert$ exactly. Explain the signs.
- 原解答只保留“若符号错误，完成下方第三象限重试”的指向。复核时确认收起所有帮助后，完整重试要求仍可见，检查答案仍默认关闭。

初审已向当前任务及时说明此项。作者修复后，本审稿者核对新快照并关闭；受影响位置与证据见文末补记。上述建议保留为具体纠错记录。

### 不列为缺陷、但应正确解释的学习证据

- Roots 的 supported-root-products 放在公开例 2 之后，属于带示范的补步解释，不能单独算成未获帮助的迁移证据；页面标注 supported 与其用途一致。
- De Moivre Q9 反馈内“换成角变量 2t 再写负整数部分”是原方法的巩固，不能算新的迁移任务。其主任务本身有独立题干及关闭帮助，且中文页保留完整英文证明模型。
- De Moivre 稍后题的 $z^3=8$ 与课程入口有重合；新增连接是射线间扇形面积。已见过相同三根后，不能把再列三根单独记作新迁移证据。
- Polar Q5 的旧稳定锚点包含 pole 字样，当前可见标题和题干已中性化；不以不可见锚点字符串认定提前泄题。

## Roots and Polynomials：独立核算

### 补步、共轭条件与重试

supported-root-products（EN L141–164、ZH L141–164）要求补例 2 的共同因子及首一三次式的常数符号。令 $u=\alpha\beta,\ v=\beta\gamma,\ w=\gamma\alpha$，则

$$
\begin{aligned}
uv+vw+wu
&=\alpha\beta^2\gamma+\alpha\beta\gamma^2+\alpha^2\beta\gamma\\
&=\alpha\beta\gamma(\alpha+\beta+\gamma)
=(-6)\frac32=-9,\\
uvw&=(\alpha\beta\gamma)^2=36,\\
(t-u)(t-v)(t-w)\big\rvert_{t=0}&=-uvw=-36.
\end{aligned}
$$

新根为 $3,-4,-3$，和为 $-4$，故新式
$t^3+4t^2-9t-36=0$。因式展开一致。补步答案明确解释符号，成立。

纠错题的 $z^2-(2+i)z+1+i$ 不满足全部系数为实数的条件；已知 $1+i$ 后，由和求另一根为 $1$，因式为 $(z-1)(z-1-i)$。这保留了原错因。

新增 conjugate-retry（EN L546–572、ZH L550–576）：

$$
\begin{aligned}
\beta&=(3+2i)-(1+2i)=2,\\
(1+2i)+2&=3+2i,\qquad (1+2i)2=2+4i,\\
\bigl(z-(1+2i)\bigr)(z-2)&=z^2-(3+2i)z+2+4i.
\end{aligned}
$$

强推 $1-2i$ 会使根和变为 $2$、根积变为 $5$，均不合原式。题干、条件判断、实际根和两项核验一致；这是针对共轭条件误用的有效重试。

### 稍后重建三次式

later-review（EN L574–600、ZH L578–600）保留原任务，改为完成 De Moivre Q8 后再做。已知根 $2$，总和 $6$、总积 $10$，故其余根和为 $4$、积为 $5$：

$$
z^2-4z+5=0
\ \Longleftrightarrow\ (z-2)^2=-1
\ \Longrightarrow\ z=2\pm i.
$$

全部根为 $2,2+i,2-i$，且

$$
(z-2)(z^2-4z+5)=z^3-6z^2+13z-10.
$$

两两积和为 $2(4)+5=13$，总积为 $2(5)=10$。实系数条件与共轭对一致。任务本身可读、答案关闭；改变返回时点不等于新增了一道全新的数学任务。

Q5 的乘积括号只是 Markdown 表达修正；$(1+i)(3-2i)=5+i$ 未变。其他未改解答未全量重做。

## De Moivre：独立核算

### 新补步、根式与图

- supported-root-arguments（EN L198–224）：$v^2=-4i$ 给 $\lvert v\rvert=2$，$2\arg v=-\pi/2+2k\pi$。两根为 $\sqrt2-i\sqrt2$、$-\sqrt2+i\sqrt2$，各自平方为 $-4i$。除二前多一整周，除二后差半周；漏根原因解释成立。
- 例 4 新增化简：对 $z^2=\sqrt3+i$，第一象限根的实虚部为 $(\sqrt3+1)/2$、$(\sqrt3-1)/2$。平方差为 $\sqrt3$、两倍乘积为 $1$、模为 $\sqrt2$；所以 $\cos(\pi/12)=(\sqrt6+\sqrt2)/4$。正号有象限依据。
- Q3 新增实际作图与完备性要求：$z^4=-16$ 的模为 $2$，角为 $\pi/4+k\pi/2,\ k=0,1,2,3$，根为 $\pm\sqrt2\pm i\sqrt2$。新增关闭答案内的 SVG 以 $(225,190)$ 为原点，四点的横纵位移均为 $75$，参考圆半径 $75\sqrt2$，数学上为等轴标度的同一正方形。图及描述都在关闭解答内；这里只核源码坐标和答案边界，未做渲染视觉验收。

### 变更积分的系数核算

例 9：

$$
\begin{aligned}
\sin^5x&=\frac{\sin5x-5\sin3x+10\sin x}{16},\\
\int\sin^5x\,\mathrm dx
&=-\frac{\cos5x}{80}+\frac{5\cos3x}{48}
-\frac{5\cos x}{8}+C.
\end{aligned}
$$

求导后各项分别给 $1/16,-5/16,10/16$ 倍的对应正弦，成立。Q6 的
$\cos^4x=\cos4x/8+\cos2x/2+3/8$
给原函数
$\sin4x/32+\sin2x/4+3x/8+C$，各内角系数正确。

例 10：

$$
\frac1{2+3i}=\frac{2-3i}{13},\qquad
\operatorname{Re}\frac{e^{(2+3i)x}}{2+3i}
=\frac{e^{2x}}{13}(2\cos3x+3\sin3x).
$$

求导的余弦系数为 $(4+9)/13=1$，正弦系数为 $(-6+6)/13=0$。复原函数、倒数、取实部及实积分常数均已给出，成立。这里按实变量的实虚部分别求导核验，不额外把常规线性换元扩写为复分析课程。

### Q9：所有整数的英文证明

EN L929–975、ZH L931–977。令 $v=\cos t-i\sin t$：

1. $n=1$ 成立；对任意正整数 $k$ 作归纳假设。
2. 实际乘开 $v^kv$，实部为 $\cos kt\cos t-\sin kt\sin t$，虚部系数为 $-(\sin kt\cos t+\cos kt\sin t)$，由和角公式得 $v^{k+1}$ 的目标式。
3. 明确归纳结论；$n=0$ 两边为 $1$。
4. $v\overline v=1$ 保证非零。对 $m>0$，取 $v^{-m}=1/(\cos mt-i\sin mt)$，乘共轭，分母为 $1$，再用余弦偶性和正弦奇性得到负整数结论。

这不是以被证定理证明自身；基础、任意 $k$、归纳步、结论及零／负整数均有可检查证据。中文页的英文证明与英文页一致，中文另作检查反馈。数学及关键作答方法完整。

### Q10：复平方根、精确值和第三象限重试

EN L979–1027、ZH L981–1029。由 $w=a+ib,\ w^2=1+i$：

$$
a^2-b^2=1,\qquad 2ab=1,\qquad
a^2+b^2=\lvert w\rvert^2=\sqrt2.
$$

故第一象限给

$$
a=\sqrt{\frac{\sqrt2+1}{2}},\qquad
b=\sqrt{\frac{\sqrt2-1}{2}},\qquad
w=2^{1/4}e^{i\pi/8}.
$$

归一化须除以根的模 $2^{1/4}$，得到
$\cos(\pi/8)=\sqrt{2+\sqrt2}/2$。第三象限根是上述两分量同时取负，单位方向为

$$
-\frac{\sqrt{2+\sqrt2}}2
-i\frac{\sqrt{2-\sqrt2}}2.
$$

两分量均负、模为一，原根平方仍为 $1+i$。数学正确；任务位置问题单列 CP1。

### Q11：复指数的虚部定积分

EN L1031–1069、ZH L1033–1069。由

$$
\frac1{1+2i}=\frac{1-2i}{5},\qquad
\operatorname{Im}\frac{e^{(1+2i)x}}{1+2i}
=\frac{e^x}{5}(\sin2x-2\cos2x),
$$

原函数求导后的正弦系数为 $(1+4)/5=1$、余弦系数为 $(2-2)/5=0$。上限值为 $2e^{\pi/2}/5$，下限值为 $-2/5$，故定积分为
$2(e^{\pi/2}+1)/5>0$。复积分、系数、虚部、原函数和两端值均在答案中，符合题目所要求的方法证据；自拟补充题身份明确。

### 平移正方形重试及稍后根—面积连接

重试以中心 $1$ 的位移 $w=z-1$ 处理。已知顶点 $3$，位移为 $2$，其他位移相隔 $\pi/2$。于是 $w^4=16$，先列 $4\arg w=2k\pi$，再除四。四根为
$3,1+2i,-1,1-2i$，且

$$
(z-1)^4-16=z^4-4z^3+6z^2-4z-15.
$$

四个角模整周互异；指标加四才重复。答案要求展示列全辐角的证据，能直接检查原漏根错因。

稍后题 $z^3=8$ 得
$2,-1+i\sqrt3,-1-i\sqrt3$，和为零。相邻根射线的较小夹角是 $2\pi/3$，圆内扇形面积
$\frac12\int_0^{2\pi/3}4\,\mathrm d\theta=4\pi/3$。取圆弧扇形而非三角形，根和亦与三次式二次项系数一致。题干要求真正 plot；答案给坐标和几何描述，学生产出仍须检查实际图。

## Polar Coordinates：独立核算

### 新面积补步及变更例题

supported-area-setup（EN L267–292、ZH L269–292）：$r=3\cos2\theta$ 靠初始线的环瓣端点为 $\theta=\pm\pi/4$，内部半径为正，设置
$\frac12\int_{-\pi/4}^{\pi/4}9\cos^22\theta\,\mathrm d\theta$ 正确。题目暂不要求求值；独立核值为 $9\pi/8$，不要求页面提前公开。

例 7 的 $r=2\cos3\theta$ 单环角域为 $[-\pi/6,\pi/6]$，积分
$\int(1+\cos6\theta)\,\mathrm d\theta$
给面积 $\pi/3$。例 8 的螺线 $r=2\theta$ 在 $[\pi/2,\pi]$ 给
$\int2\theta^2\,\mathrm d\theta=[2\theta^3/3]_{\pi/2}^{\pi}=7\pi^3/12$。新增端点及角系数计算成立。

例 9 的心形线 $1+\cos\theta$ 和圆 $\sqrt3\sin\theta$，上半平面非极点交点满足
$1+\cos\theta=\sqrt3\sin\theta$，得 $\theta=\pi/3,\ r=3/2$；另在 $\theta=\pi$ 同为极点。公共区域在前段取圆、后段取心形线：

$$
\begin{aligned}
A_1&=\frac12\int_0^{\pi/3}3\sin^2\theta\,\mathrm d\theta
=\frac\pi4-\frac{3\sqrt3}{16},\\
A_2&=\frac12\int_{\pi/3}^{\pi}(1+\cos\theta)^2\,\mathrm d\theta
=\frac\pi2-\frac{9\sqrt3}{16},\\
A&=\frac{3\pi}{4}-\frac{3\sqrt3}{4}.
\end{aligned}
$$

两段边界、原函数和端点相符，成立。

### 练习中发生变化的要求与积分

- Q3 的 $r=2\sin2\theta$ 须遵守本课程正半径约定；非负区间给两个环瓣，每瓣面积 $\pi/2$。不能沿用允许负半径时的四瓣图来判错本页。
- Q4 的 $r=4\cos\theta$，在 $0\le\theta\le\pi/4$ 有
  $A=\int_0^{\pi/4}4(1+\cos2\theta)\,\mathrm d\theta=\pi+2$。新增端点计算正确。
- Q5（EN L573–623、ZH L575–625）公开标题及题干已改为找全交点、说明无遗漏、画图并求公共面积，不公开极点答案或交点数。

Q5 的两个单位圆圆心分别为 $(1,0),(0,1)$。极点在第一曲线由 $\theta=\pm\pi/2$ 取得，在第二曲线由 $0,\pi$ 取得；它们是同一个交点。非极点同时为正半径的角域只在第一象限，等半径给唯一 $\theta=\pi/4,\ r=\sqrt2$，即 $(1,1)$。正切严格递增支持“无遗漏”。

公共区域是第一象限透镜，前段 $2\sin\theta$ 较小、后段 $2\cos\theta$ 较小：

$$
A=\frac12\int_0^{\pi/4}4\sin^2\theta\,\mathrm d\theta
+\frac12\int_{\pi/4}^{\pi/2}4\cos^2\theta\,\mathrm d\theta
=2\left(\frac\pi4-\frac12\right)=\frac\pi2-1.
$$

题干的全交点要求有对应论证；解答提供圆心、半径、交点和阴影描述，能重建图，但没有新增实际参考图。这里不把文字答案当学生完成 sketch 的证据。

Q8 的 $r=(2+\cos\theta)\sqrt{\sin\theta}$，在 $[0,\pi]$ 合法。设 $u=2+\cos\theta$，则 $\mathrm du=-\sin\theta\,\mathrm d\theta$，上下限 $3\to1$：

$$
A=-\frac12\int_3^1u^2\,\mathrm du
=\frac12\int_1^3u^2\,\mathrm du
=\left[\frac{u^3}{6}\right]_1^3=\frac{13}{3}.
$$

负号、反向上下限及分母六均正确。

### 平方差重试与稍后区域

重试（EN L787–814、ZH L789–816）：内侧心形线始终满足 $0\le1+\cos\theta\le2$，外侧圆无需换序。面积

$$
\begin{aligned}
A&=\frac12\int_{-\pi}^{\pi}[4-(1+\cos\theta)^2]\,\mathrm d\theta\\
&=\left[\frac54\theta-\sin\theta-\frac18\sin2\theta\right]_{-\pi}^{\pi}
=\frac{5\pi}{2}.
\end{aligned}
$$

圆面积 $4\pi$ 减心形线面积 $3\pi/2$ 也得同值。两者相切不要求交换边界，退化端点不影响面积。

新增稍后题（EN L824–852、ZH L826–854）：$r=2$ 是原点圆心、半径二的大圆；$r=2\cos\theta$ 是圆心 $(1,0)$、半径一的小圆。两者内部相切于 $(2,0)$，只有此交点；原点仅在小圆上。

$$
\begin{aligned}
A_R&=\frac12\int_{-\pi/2}^{\pi/2}(4-4\cos^2\theta)\,\mathrm d\theta
=\left[\theta-\frac12\sin2\theta\right]_{-\pi/2}^{\pi/2}=\pi,\\
A_L&=\frac12\int_{\pi/2}^{3\pi/2}4\,\mathrm d\theta=2\pi,\\
A&=3\pi.
\end{aligned}
$$

右侧用平方差、左侧只有大圆单边界，符合正半径约定。也等于 $4\pi-\pi$。把小圆负半径区间继续平方扣除，会重复扣面积；页面反馈准确。

## 官方、改编与自拟身份的窄范围核对

以下是本审稿者实际查看的配对材料及关键证据。旧 AQA 6360 文件是 AQA 编写、PMT 托管；部分 QP 为压缩版，不能说成 OxfordAQA 9665 的历年 FM03 原卷。没有因本轮查看来源日期而重做全部旧题。

| 页面位置 | 本轮实际读取与核验 | 结论及限制 |
| --- | --- | --- |
| Roots Q7 | January 2006 MFP2 Q2 的 [MS PDF p.3](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202006%20MS%20-%20FP2%20AQA.PDF#page=3)：根和、平方和转两两积、共轭与积，得 $p=-4,q=-2,r=20$，5+5。 | MS 身份及分值吻合。QP 文字严重乱码，截图工具亦失败；未声称本审稿者已目读清楚原 QP。作者另记有下载目读，属作者证据。 |
| De Moivre Q7 | June 2007 MFP2 Q3：[QP p.2](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF#page=2)、[MS p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF#page=4)。方法为整数幂、实虚部匹配及最小正角选择，结果 $\pi/10$，5分。 | 来源、条件、关键方法一致。 |
| De Moivre Q8 | June 2011 MFP2 Q7：[QP p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20QP%20-%20FP2%20AQA.pdf#page=4)、[MS p.7](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20MS%20-%20FP2%20AQA.PDF#page=7)。核五次展开、取实虚部、正切式、四根及乘积正号，5+3+3+5。 | 页面明确 $\cos\theta\ne0,\cos5\theta\ne0$，并用两角在第一象限排除负乘积；关键解释没有遗漏。 |
| Polar Q6 | June 2014 MFP3 Q3：[QP p.6](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20QP%20-%20FP3%20AQA.PDF#page=6)、[MS p.5](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20MS%20-%20FP3%20AQA.PDF#page=5)。原题 $r(4-3\cos\theta)=4$，要求 $y^2=f(x)$，4分。 | 坐标替换、隔离 $r$ 后平方及目标形式均对应。原解答未改变，不作新的全量旧题验收。 |
| Polar Q7 | June 2013 MFP3 Q2：[QP p.2](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20QP%20-%20FP3%20AQA.pdf#page=2)、[MS p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20MS%20-%20FP3%20AQA.PDF#page=4)。圆式、指定极点／初始线和目标形式一致，4分；结果 $r=12\sin\theta-16\cos\theta$。 | 页面保留原点说明及正半径条件，没有将除以 $r$ 自动当成删除几何极点。 |
| Polar Q8 | January 2009 MFP3 Q3：[QP p.3](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20QP%20-%20FP3%20AQA.PDF#page=3)、[MS p.4](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20MS%20-%20FP3%20AQA.PDF#page=4)。文字公式、角域、面积任务及原题6分可读；MS 的面积式、合法积分与 $13/3$ 可核。 | QP 图的截图工具失败，未独立目读原图细节。当前课程保留“图重绘的改编题”和“原题6分”；末尾总括亦区分 Q6–7 与 Q8，身份一致。没有新改动旧 SVG。 |

新增证明、精确值、积分及稍后任务均有自拟教学身份；未把自拟评分点称官方分值。当前 specification 的 2026/07 URL 本轮独立读取未成功；作者记录其读取结果。本报告不以这份未成功读取作为“整个现行大纲逐项覆盖已核”的证据，也未改用其他资格替代。

## 阅读边界、双语帮助与目标闭合

以下记录初审快照的源码检查结果；CP1 修复后的变化见文末补记。检查公开示范、任务及关闭帮助的关系，没有用“有多少栏目”代替学习验收。

| 项目 | 本次结果 |
| --- | --- |
| 首次示范 | 六页的 worked-example 均公开，未发现完整首次示范被藏入答案折叠。每语 Roots 6个、De Moivre 10个、Polar 9个；这些计数只辅助定位。 |
| 任务和帮助边界 | 每语 lesson-check 分别11、15、12个，details 分别21、30、23个。无未闭合 section/details、嵌套任务、嵌套 details 或默认 open。De Moivre 唯一位于任务外的答案折叠就是 CP1；标签合法不等于任务独立可读。 |
| 不提前泄题 | 新主任务题干和中性标题可在关闭帮助后阅读；De Moivre Q3 图及描述在关闭答案中。Roots 支持题紧接公开示范，按支持练习解释。Q10 另列 CP1，不能仅凭折叠默认关闭判为完全闭合。 |
| 数学一致 | 两语公式片段按出现顺序完全相同：Roots 243、De Moivre 389、Polar 315。另人工对照新增英文题干、证明语言、提示方向、象限／角域条件、反馈和再尝试要求；所核数学及帮助含义一致，CP1 两语同存。 |
| 恢复链接 | 六页136处 Markdown 的站内绝对路径／本页锚点链接解析到现有文件及源码锚点，两语去掉语言前缀后序列一致。英文自动锚点按本仓库 Kramdown 的保留空格转换规则核对；未把其双连字符误判为坏链接。含 AS 先修、三章互返、课程 mixed-review／later-review。 |
| 目标—任务 | Roots 有根乘积补步、共轭条件判断、系数反推；De Moivre 新增整数幂英文证明、根式精确值及复指数虚部积分，漏根重试要求枚举与完备性；Polar 有先列面积、全交点、分段和单边界选择。所核新目标有相应可观察输出，不只是定义复述。 |
| 稍后保持 | 三章确有返回时点和稍后题。任务已安排不等于学生已延后完成；看过答案、使用提示和独立完成应分别记录。重复过的根计算也不单独算迁移。 |

限定六份课程的 git diff --check 返回0。另做了源码公式序列、标签及链接存在性检查；未运行或修改课程 tests，未做 Jekyll build、生成 HTML 或桌面／手机／键盘实际阅读。一次辅助符号库调用因未安装 SymPy 未执行计算，未将其记为通过；上列结论依据逐题解析核算。

**交接：**CP1 已按下方补记复核关闭。如再改方程、象限或解答，则对相应计算重新核算。本报告不代替后续技术及学生验收。

## CP1 修复复核与关闭（2026-10-23）

已读取作者记录末尾“独立审查 CP1 的作者修复”，并独立检查两语实际保存的源码；未以作者修复声明替代复核。

| 核验点 | 受影响位置及结果 |
| --- | --- |
| 原解答的指向 | EN L1013、ZH L1015 只保留到 #exact-value-retry 的重试链接，不再把完整新任务藏在原答案里。两语锚点均唯一，链接指向存在。 |
| 公开完整题干 | EN L1021–1025、ZH L1023–1027：明确 $w^2=1+i$、第三象限、精确求 $w$ 及 $w/\lvert w\rvert$ 两个输出，并解释符号；同一英文题干逐字一致，中文页另有对应操作说明。按源码排除全部关闭的 details 内容后，完整题干仍保留。 |
| 独立任务边界 | EN L1019–1037、ZH L1021–1039：各有一个单层 lesson-check，同时包含题干和原检查答案。前一题的 section 已结束，新任务的 section 在 Q11 前结束。 |
| 检查答案关闭 | EN L1027–1035、ZH L1029–1037：各只有一个 details，没有 open 属性，答案仍独立关闭；题干处未提前给出两个目标根式。 |
| 答案及双语一致 | 原有数学答案未改。第三象限根两分量均负；平方给 $1+i$，除以模长 $2^{1/4}$ 得保留的单位方向。两语全页现有393个按出现顺序完全相同的公式片段；本次新增的是题干内4个公式片段。 |
| 修复范围 | 在内存反向还原“原解答链接、新公开题干和任务边界”后，两语全文的字节哈希分别精确恢复初审表中的旧哈希，证明本次两页相对已审快照只有上述局部修复，没有借此沿用未核的其他正文变更。 |

数学再核：设 $a=\sqrt{(\sqrt2+1)/2}$、$b=\sqrt{(\sqrt2-1)/2}$，均为正，则 $a^2-b^2=1$、$2ab=1$，所以 $(-a-ib)^2=1+i$；模长为 $2^{1/4}$。单位方向的实虚部分别为 $-\sqrt{2+\sqrt2}/2$、$-\sqrt{2-\sqrt2}/2$，平方和为一且均为负，满足第三象限。方程、象限、两项输出与检查答案一致。

**CP1 关闭。**最终复核快照如下，SHA-256 按实际保存的文件字节计算：

| 文件 | 最终行数 | 最终 SHA-256 |
| --- | ---: | --- |
| EN de-moivres-theorem.md | 1189 | d0fab622d40247de93fba81ad17e112040639f8a7d41b10e0003a67592a49e92 |
| ZH de-moivres-theorem.md | 1191 | b9005fa1f840ba449e98e63375202061ac4c103e4512ba7557aab642ded77d2c |

本次只修改本审查报告；没有修改课程、tests 或作者记录，没有重做其他旧资产。关闭结论限于已核的数学、任务源码及双语帮助，不新增构建、浏览器或真实学生验收。
