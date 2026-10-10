---
layout: subjects
title: fx-CG50 Further Mechanics 操作专题
description: 弹性绳、变力做功、斜面抛射、斜碰撞、简谐运动和圆周运动的六项计算器扩展。
lang: zh-CN
author: Eric Shi
study_page: true
toc_headings: h2, h3
permalink: /alevel/fx-cg50/further-mechanics/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010">

<div class="cg50-guide" markdown="1">

本页介绍弹性、变力、斜面抛射、斜碰撞、简谐运动与圆周运动中的计算器操作。先画受力图、选方向、列物理方程，再用计算器核对。

六项扩展均以 [FM05 June 2024 原题]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm05-2024-june-question-paper.pdf' | relative_url }}) 和 [官方 MS]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-fm05-2024-june-mark-scheme.pdf' | relative_url }}) 为依据，英文题意为改写。

菜单按 **03.81.0202 中文固件**核对，尚待同版本实机抽查。初始采用 **Rad、Y=**；M03 为角度答案改用 Deg 后，要恢复 Rad。该套试卷取 $g=9.8\,\mathrm{m\,s^{-2}}$，非精确答案通常要求 2 位有效数字，另有明确要求时遵从题目。

## 扩展 M01 弹性绳（elastic string）：张力、平衡点与能量 {#fm-mech-01}

Q2，题意改写：**A 6 kg particle is released from rest on a vertical elastic string of natural length 2 m and modulus 300 N, initially extended by 0.5 m. Find its initial acceleration and maximum speed.**

纸上先写 $T=\lambda e/l$。初始张力为 $75\,\mathrm N$，大于重力 $58.8\,\mathrm N$，因此加速度向上：

$$a_0=\frac{75-58.8}{6}=2.7\,\mathrm{m\,s^{-2}}.$$

速度在合力为零处达到最大；平衡伸长为

$$e_*=\frac{mgl}{\lambda}=0.392\,\mathrm m.$$

从初始位置向上走 $0.5-0.392=0.108\,\mathrm m$。以这个位置的重力势能为零，能量式可写

$$\frac12mv^2=\frac{\lambda}{2l}(0.5)^2
-\frac{\lambda}{2l}(0.392)^2-mg(0.108).$$

在 **计算·矩阵** 输入 <code>(75−58.8)÷6</code>、<code>6×9.8×2÷300</code>，核对加速度和平衡伸长。三个能量项分别为 $18.75,11.5248,6.3504\,\mathrm J$，再输入 $\sqrt{2(18.75-11.5248-6.3504)/6}$，得到 $v_{\max}=0.54\,\mathrm{m\,s^{-1}}$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-elastic.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="平衡伸长为0.392，最大速度为27除以50"><figcaption>最大速度的精确数值27/50等于0.54，答卷附上相应单位。</figcaption></figure>
</div>

伸长 $e$ 不等于绳的总长；弹性势能是 $\lambda e^2/(2l)$，不是张力乘伸长。绳松弛后 $T=0$，不能继续把负伸长代入同一绳模型。该题的最大速度发生在绳仍拉紧的平衡位置。

## 扩展 M02 变力做功（work done）、停止位置与阻力模型 {#fm-mech-02}

Q3，题意改写：**A horizontal driving force is $10e^{-0.1x}$ N. Use work and energy to find the speed at 5 m and the stopping distance, to the nearest metre.** 质量 $2\,\mathrm{kg}$，摩擦系数 $0.2$，初速零。

驱动力做功为

$$W(d)=\int_0^d10e^{-0.1x}\,dx=100(1-e^{-0.1d}).$$

摩擦力为 $0.2\times2\times9.8=3.92\,\mathrm N$。到 $5\,\mathrm m$ 时，$W\approx39.34693403\,\mathrm J$，净动能为 $W-19.6$，所以速度

$$v=\sqrt{W-19.6}\approx4.443752247\,\mathrm{m\,s^{-1}},$$

按该题精度写 $39\,\mathrm J$、$4.4\,\mathrm{m\,s^{-1}}$。可在[定积分模板]({{ '/alevel/fx-cg50/' | relative_url }}#task-23)输入 $10e^{-0.1X}$、下限 $0$、上限 $5$，也可输入纸上积分后的精确式核对；后一种检查不会替代积分过程。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-work.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="5米内的做功和速度"><figcaption>从驱动力做功中扣除摩擦做功，再求速度。</figcaption></figure>
</div>

停止位置满足 $F(d)=100(1-e^{-0.1d})-3.92d=0$。$d=0$ 是初始位置，所求是另一正根。数值求解约为 $22.93621443$；为说明最近整数确为 23，在计算页或表格检查

$$F(22.5)\approx1.260077544>0,\qquad
F(23.5)\approx-1.656916222<0.$$

此范围内 $F$ 严格递减，故停止点在 $(22.5,23.5)$，应写 $23\,\mathrm m$。不能只比较 $22$ 与 $23$ 来判断最近整数。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-stopping-bracket.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="停止位置在22.5米和23.5米之间"><figcaption>半整数边界用于证明四舍五入到23米。</figcaption></figure>
</div>

同卷 Q4 的阻力模型为 $v^2-9$ N、质量 $2\,\mathrm{kg}$、初速 $10\,\mathrm{m\,s^{-1}}$。由 $a=v\,dv/dx$ 得

$$2v\frac{dv}{dx}=-(v^2-9),\qquad
v=\sqrt{9+91e^{-x}},\qquad a=-45.5e^{-x}.$$

答卷的 $v$–$x$ 图从 $(0,10)$ 下降并趋于 $v=3$；$a$–$x$ 图从 $(0,-45.5)$ 上升并趋于 $0$。本模型没有有限距离的 $v=0$ 停止点。计算器画图前先标出截距、渐近线和 $x\ge0$，不可照抄上一模型的停止方程。

## 扩展 M03 斜面抛射（projectile motion）：分量、二次方程与两个角 {#fm-mech-03}

Q5，题意改写：**A particle is projected at 10 m/s at angle $\alpha$ above a plane inclined at $30^\circ$. Its range along the plane is 4 m. Find both possible angles.** 题目给 $0<\alpha<60^\circ$。

沿斜面向上、垂直斜面向外取正。落回斜面时

$$4=10\cos\alpha\,t-4.9\sin30^\circ\,t^2,
\qquad0=10\sin\alpha\,t-4.9\cos30^\circ\,t^2.$$

排除 $t=0$ 后消去飞行时间，令 $u=\tan\alpha$，得到

$$2.588u^2-2\sqrt3\,u+0.588=0.$$

1. 在 **解方程（组）→ 多项式 → 2 次** 输入 $2.588,-2\sqrt3,0.588$，核对两个正根约 $0.1994649507,1.139059630$。
2. 回 **计算·矩阵 → SHIFT → MENU**，将“角度”改为 **度（F1）**；屏幕应为 Deg。
3. 分别按 <code>SHIFT → tan → ( → 根的数值 → ) → EXE</code>。保留完整根值或使用存储变量，得到约 $11.28045^\circ,48.71955^\circ$，按本题“最接近的整数度”要求写 $11^\circ,49^\circ$。
4. 两角都满足原题范围，回代可得正飞行时间；不能只保留屏幕第一根。结束后把“角度”恢复弧度。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-projectile-roots.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="tanα的两个正根"><figcaption>多项式求解结果是正切值，还需要反正切和范围检查。</figcaption></figure>
</div>
<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-projectile-angles.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="Deg下的两个发射角"><figcaption>这里α相对斜面，不是相对水平面。</figcaption></figure>
</div>

答卷保留沿斜面、垂直斜面的分量方程及消去 $t$ 的过程；不要把水平射程公式直接套到斜面距离上。

## 扩展 M04 斜碰撞（oblique impact）：动量、冲量与法线恢复系数 {#fm-mech-04}

Q6，题意改写：**Two smooth spheres collide. Determine the second velocity, the impulse magnitude and the coefficient of restitution.**

质量 $m_A=2\,\mathrm{kg},m_B=3\,\mathrm{kg}$，以下速度分量的单位均为 $\mathrm{m\,s^{-1}}$。碰前 $u_A=(4,3)$、$u_B=(-1,5)$，碰后 $v_A=(0.4,3)$。由向量动量守恒

$$2(4,3)+3(-1,5)=2(0.4,3)+3v_B,$$

得 $v_B=(1.4,5)$。A 的冲量为

$$I_A=2(v_A-u_A)=(-7.2,0)\,\mathrm{N\,s},
\qquad \lVert I_A\rVert=7.2\,\mathrm{N\,s}.$$

在计算页分别输入 <code>(2×4+3×(−1)−2×0.4)÷3</code> 和 <code>(2×3+3×5−2×3)÷3</code> 核对 B 的两个分量。再算 $2(0.4-4)$，检查冲量的方向与大小。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-collision.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="碰后B的分量和A的冲量分量"><figcaption>动量逐分量守恒，冲量大小取非负值。</figcaption></figure>
</div>

光滑碰撞只沿碰撞法线传递冲量；本例法线是 x 方向，两个 y 分量都不改变。所以

$$e=\frac{1.4-0.4}{4-(-1)}=0.2.$$

恢复系数使用法线方向的分离速度与接近速度，不能把两球的总速率相除。若换题后法线不是坐标轴，先把速度投影到法线与切线，再计算。

## 扩展 M05 简谐运动（SHM）：相位与最短返回时间 {#fm-mech-05}

Q7，题意改写：**A spring system has period $\pi$ seconds. The amplitude is $a/10$ and C is $a/20$ from equilibrium. Find its speed at C and the shortest time between visits to C.**

$$\omega=\frac{2\pi}{T}=2\,\mathrm{rad\,s^{-1}},\qquad A=\frac a{10}.$$

由 $v^2=\omega^2(A^2-x^2)$，在 C 的速率为

$$\lvert v_C\rvert=\frac{a\sqrt3}{10}.$$

原题是水平面上的双弹簧：刚度分别为 $k$ 和 $2k$，自然长均为 $a$，两个固定点相距 $3a$。设两伸长为 $e_A,e_B$，平衡时 $e_A+e_B=a$、$ke_A=2ke_B$，得 $e_A=2a/3,e_B=a/3$。

从平衡点向 B 位移 $x$ 后，合力为

$$2k(a/3-x)-k(2a/3+x)=-3kx,$$

所以 $\ddot x=-(3k/m)x$，等效刚度为 $3k$，由 $\omega^2=3k/m=4$ 得 $k=4m/3$。弹簧伸长与相对平衡位置的位移是不同量。

在 Rad 下把正侧 C 取为 $x=A/2$，相位方程 $\cos(2t)=1/2$。邻近正侧转向点的两次通过间隔为

$$\Delta t_{\min}=2\frac{\cos^{-1}(1/2)}{2}=\frac\pi3\,\mathrm s.$$

在计算页输入 <code>SHIFT → cos → ( → 0.5 → ) → EXE</code>，核对 $\pi/3$；输入 $\sqrt3/10$，核对速度相对于 $a$ 的系数。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-shm.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="最短时间π除以3和速度系数根号3除以10"><figcaption>时间由相位差求，速度大小由能量形式求。</figcaption></figure>
</div>

若从 $x=A\cos2t$ 的 $t=0$ 起计，正侧 C 的前三次通过时刻为 $\pi/6,5\pi/6,7\pi/6$。相邻间隔交替为 $2\pi/3,\pi/3$ 秒；“最短”不是第一次通过到第二次通过的时间。必须检查当时运动方向，不能只读一个反余弦主值。

<figure class="cg50-keyboard"><img src="{{ '/assets/img/fx-cg50/fm/fm-shm-phase.png' | relative_url }}" width="1440" height="592" loading="lazy" data-lazy-ignore alt="简谐运动在同一位置的通过时刻与方向，相邻间隔交替为2π除以3和π除以3秒"><figcaption>在正侧转向点附近返回 C 的间隔较短；首次到达 C 的时刻不等于最短返回时间。</figcaption></figure>

## 扩展 M06 圆周运动（circular motion）：先离面，再用能量 {#fm-mech-06}

Q8，题意改写：**A particle slides from rest on a smooth hemisphere. It leaves the surface where the radius is $30^\circ$ to the horizontal. Find $\cos\theta$ at B, where the normal reaction is half its maximum.**

统一把 $\theta$ 定义为半径与竖直方向的夹角。直接计算 $\cos60^\circ$ 时用 Deg，或在 Rad 输入 $\cos(\pi/3)$；本例使用精确值 $1/2$，不需要切换设置。离面点 C 与水平成 $30^\circ$，所以 $\theta_C=60^\circ$，不能直接把 $30^\circ$ 代进竖直角公式。

$$N=mg\cos\theta-\frac{mv^2}{r},\qquad
v^2=2gr(\cos\alpha-\cos\theta).$$

离面时 $N=0$，得 $v_C^2=gr/2$。与能量式联立，得

$$\cos\alpha=\frac34,\qquad N_{\max}=mg\cos\alpha=\frac34mg.$$

在 B 点法向力为最大值的一半，$N_B=3mg/8$，所以

$$\frac38=3\cos\theta_B-2\cos\alpha,
\qquad\cos\theta_B=\frac58.$$

在计算页输入 <code>(3÷8+2×3÷4)÷3</code>，核对 $5/8$；再算 $2(3/4-5/8)$，核对 $v_B^2/(gr)=1/4>0$。代回径向方程，$5/8-1/4=3/8$，与所需法向力一致。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-mech-circular.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="B点的余弦为0.625，速度平方比为0.25"><figcaption>0.625等于5/8，0.25等于1/4；检查速度平方非负。</figcaption></figure>
</div>

原题要求精确的余弦值时写 $5/8$，不必转成舍入角度。离面后接触力为零，粒子不再沿半球作圆周运动；不能继续强制使用球面轨迹的径向约束。

## 答卷与考前检查 {#fm-mech-checklist}

每道题先写方向、单位和模型条件，再列受力或能量方程。碰撞检查法线，SHM 检查相位，圆周运动检查接触是否存在，数值求根检查物理解和题目范围。最后才按精度要求舍入；结束角度题后恢复 Rad，再做微积分。

[基础操作]({{ '/alevel/fx-cg50/' | relative_url }})提供矩阵、联立方程、定积分与表格的完整按键模板。本页真题版权归考试局，操作参考 [Casio 中文软件手册](https://www.casio.com/content/dam/casio/global/support/manuals/calculators/pdf/004-zh-cn/f/fx-CG50_Soft_v370_CN.pdf)。考试模式按学校与老师要求设置。

相关章节：

- [基础使用指南]({{ '/alevel/fx-cg50/' | relative_url }})：方程、积分与表格的按键模板。
- [Further Mathematics]({{ '/alevel/fx-cg50/further-mathematics/' | relative_url }})：复数、矩阵、向量与极坐标。
- [数值方法与微积分]({{ '/alevel/fx-cg50/further-mathematics/numerical-calculus/' | relative_url }})：求根、迭代与微分方程。

编写与组织：**Eric Shi**。GPT 辅助整理、操作核对与网页制作。更新于 2026 年 10 月 10 日。

</div>
