---
title: 匀速圆周运动
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/uniform-circular-motion/
permalink: /zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · MA05 · M2.7
{:.lesson-meta}

汽车沿弯道转弯，速度表的读数可以保持不变。速率没有增大，运动方向却在改变。**是什么力使它不断转向？如果能提供的力不够，会怎样？**

先理解[半径转过角度的快慢](#angular-speed-and-angular-velocity)，再看[速度为什么改变](#radial-acceleration)与[真实受力](#forces-in-a-horizontal-circle)。绳、摩擦与接触面的应用都沿用这个原理。先学[圆锥摆](#the-conical-pendulum)，再按需要练习不同接触面；[圆形轨道](#circular-orbits)要重新辨认力的方向。复习时关闭两种帮助，先做[练习](#practice)与[独立任务](#independent-method-choice)。

需要直角三角形、力分解、$F=ma$、静摩擦上限及分量微积分。可回补[力的方向](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#force-diagrams)、[摩擦上限](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#friction-and-limiting-equilibrium)或[向量与运动学](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/)。回想[能量课](../work-and-energy/#the-work-energy-principle)：动能不变表示**速率**不变。
{:.lesson-meta}

全部示范与任务均为 **Self-written / 自拟题**，无官方分值。采用质点模型，适用时取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值，最终默认三位有效数字、角度一位小数，题内另有要求时依题意。图未按比例绘制。[来源与范围](#sources-and-scope)放在页末。
{:.lesson-meta}

## 角速率与角速度 {#angular-speed-and-angular-velocity}

从圆心向质点画一条半径。质点移动时，这条线也在转动。角速率描述半径转过角度的快慢；线速率描述沿圆周走过距离的快慢。同一转盘上的点转一周用时相同，外侧的点却要走更远。

**角速率（angular speed）**表示质点绕圆心转过角度的快慢，记作 $\omega$，单位是**弧度每秒**。完整一周为 $2\pi$ 弧度。

$$\boxed{\omega=\frac{\text{angle turned through}}{\text{time taken}}}.$$

这给出匀速转动的角速率；转动快慢改变时，应使用瞬时变化率。**角速度（angular velocity）**还包含转动方向。若逆时针为正，顺时针角速度为负；当 $\theta$ 从逆时针方向量起，带符号角速度为 $\mathrm d\theta/\mathrm dt$，角速率为其大小。

下文速率与受力公式中的 $\omega$ 表示**非负的角速率**。题目要求角速度时，另说明顺时针或逆时针方向。

每分钟 $n$ 转换算为：

$$\boxed{\omega=\frac{2\pi n}{60}\,\mathrm{rad\,s^{-1}}}.$$

半径为 $r$、转角 $\theta$ 以弧度计时，弧长为 $s=r\theta$。除以时间得到**线速率（linear speed）**：

$$\boxed{v=r\omega}.$$

转一周所需的时间称为**周期（period）**。本课用 $\tau$ 表示，保留 $T$ 表示张力：

$$\boxed{\tau=\frac{2\pi}{\omega}=\frac{2\pi r}{v}}.$$

同一转盘上的点具有相同角速率，离转轴越远，线速率越大。半径是到**转轴**的距离，不一定等于物体的整体半径。

## 径向加速度 {#radial-acceleration}

速度回答两个问题：“多快？”和“朝哪里？”逆时针运动时，最右侧点的速度向上，最高点的速度向左。速度表读数相同，并不表示两个速度向量相同。加速度描述**速度的改变**，方向的变化也算在内。

**匀速圆周运动（uniform circular motion）**的速率恒定，但速度方向不断改变，因此仍有加速度。速度沿圆的切线；**径向加速度（radial acceleration）**又称向心加速度，指向圆心。

$$\boxed{a=\frac{v^2}{r}=r\omega^2}.$$

这是加速度的大小。质点运动时，加速度向量方向持续变化，不能称为恒定向量加速度。

![质点绕圆逆时针运动；P 点速度沿切线，加速度由 P 指向圆心 O](/assets/img/a2-math-mech/circular-velocity-acceleration.svg)

对于很小的正转角 $\Delta\theta$，前后两个速度向量大小均为 $v$，方向相差 $\Delta\theta$；速度变化量的大小为：

$$\lvert\Delta\mathbf v\rvert=2v\sin\left(\frac{\Delta\theta}{2}\right)\approx v\Delta\theta.$$

时间间隔趋于零时，除以 $\Delta t$ 得到 $a=v\omega$。再代入 $v=r\omega$ 得到上面的两个形式。这里使用了 $\sin x\approx x$（$x$ 为很小的弧度角），与教材 15.1 节一致。

<div class="worked-example" markdown="1">

### 例题 1：转数、速率与加速度 {#example-1-revolutions-speed-and-acceleration}

**Question:** a point on the rim of a disc of radius $0.4\,\mathrm m$ completes $90$ revolutions per minute anticlockwise. Find its angular velocity, linear speed, period and acceleration.

$$\omega=\frac{90(2\pi)}{60}=3\pi\,\mathrm{rad\,s^{-1}}.$$

角速度为 $\boxed{3\pi\,\mathrm{rad\,s^{-1}}\text{ anticlockwise}}$，即逆时针。

$$\boxed{v=0.4(3\pi)=1.2\pi\approx3.77\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\tau=\frac{2\pi}{3\pi}=\frac23\,\mathrm s}.$$

$$\boxed{a=0.4(3\pi)^2\approx35.5\,\mathrm{m\,s^{-2}}\text{ towards the centre}}.$$

**检查：**一分钟包含 $60/(2/3)=90$ 个周期。半径减半的点角速率相同，但线速率与加速度大小都减半。

</div>

<div class="worked-example" markdown="1">

### 例题 2：证明路径是圆 {#example-2-showing-a-path-is-a-circle}

**Question:** a particle has velocity:

$$\mathbf v=(6\cos2t)\mathbf i-(6\sin2t)\mathbf j.$$

At $t=0$, its position vector is $\mathbf r=\mathbf i+5\mathbf j$. Positions are in metres and time is in seconds. Find its position, show that it moves in a circle at constant speed, and find its acceleration.

圆心尚未给定，先从速度恢复位置。$\sin2t$ 的导数是 $2\cos2t$，所以先除以 $2$ 再对 $6\cos2t$ 积分；$-6\sin2t$ 的积分则是 $3\cos2t$。每个方向分别保留积分常数：

$$x=3\sin2t+C_x,\qquad y=3\cos2t+C_y.$$

在 $t=0$ 时，$C_x=1$，$3+C_y=5$，所以：

$$\boxed{\mathbf r=(1+3\sin2t)\mathbf i+(2+3\cos2t)\mathbf j}.$$

$$\boxed{(x-1)^2+(y-2)^2=9}.$$

减去固定点 $(1,2)$ 后，分量为 $3\sin2t$、$3\cos2t$。平方相加得到 $9(\sin^22t+\cos^22t)=9$，对任意 $t$ 都成立。到定点距离不变证明轨迹是圆；速率是否恒定还要另外验证。

圆心为 $(1,2)$，半径为 $3\,\mathrm m$。速率为：

$$\boxed{\lvert\mathbf v\rvert=\sqrt{36\cos^22t+36\sin^22t}=6\,\mathrm{m\,s^{-1}}}.$$

对速度求导得到：

$$\boxed{\mathbf a=-(12\sin2t)\mathbf i-(12\cos2t)\mathbf j}.$$

加速度大小为 $12\,\mathrm{m\,s^{-2}}$，与 $v^2/r=36/3$ 一致。若圆心位置向量为 $\mathbf c=\mathbf i+2\mathbf j$：

$$\mathbf a=-4(\mathbf r-\mathbf c).$$

可见加速度指向圆心。角速率为 $v/r=2\,\mathrm{rad\,s^{-1}}$；在圆的最高点速度向右，因此运动是**顺时针**。

**检查：**$t=0$ 的位置为 $(1,5)$；$\mathbf a\cdot\mathbf v=0$ 也验证加速度垂直速度。圆心不在原点时，应使用**相对圆心**的位置向量。

</div>

## 水平圆周的受力 {#forces-in-a-horizontal-circle}

这里采用地面惯性参照系。质点相对转盘的位置不变，相对地面却在运动。“在转盘上静止”不能作为地面参照系中合力为零的依据。

受力图只画**真实的力**，如重力、张力、法向反力和摩擦。**向心力（centripetal force）**描述这些力指向圆心的合力，不是需要另外加画的一种力。

水平匀速圆周运动满足：

$$\boxed{\text{resultant force towards the centre}=\frac{mv^2}{r}=mr\omega^2}.$$

竖直方向无加速度，切线方向也无加速度，对应的合力分量均为零。各个切向力仍可能存在，只是彼此平衡。

选择径向**朝圆心为正**，沿该方向分解力，即使速度指向别处也一样。不能因为速率恒定，就把所有方向的合力都设为零。

<div class="worked-example" markdown="1">

### 例题 3：张力与断裂界限 {#example-3-tension-and-a-breaking-limit}

**Question:** a particle of mass $0.25\,\mathrm{kg}$ moves in a horizontal circle on a smooth fixed table. It is attached to a fixed point on the table by a light inextensible string of length $0.8\,\mathrm m$. At speed $4\,\mathrm{m\,s^{-1}}$, find the tension and normal reaction. The string breaks if tension exceeds $8\,\mathrm N$; find the greatest angular speed before it breaks.

竖直方向重力与法向反力平衡；水平方向由张力提供向心合力：

$$\boxed{R=0.25g=2.45\,\mathrm N}.$$

$$\boxed{T=\frac{0.25(4^2)}{0.8}=5\,\mathrm N}.$$

在断裂界限处：

$$0.25(0.8)\omega^2=8.$$

$$\boxed{\omega_{\text{max}}=\sqrt{40}\approx6.32\,\mathrm{rad\,s^{-1}}}.$$

**检查：**对应的最大线速率为 $0.8\sqrt{40}\approx5.06\,\mathrm{m\,s^{-1}}$，所以 $4\,\mathrm{m\,s^{-1}}$ 的运动尚未达到断裂界限。只有绳水平且绷紧时，才能把绳长直接用作半径。

径向合力与瞬时速度垂直，功率为零，因此可以只改变方向而不增加动能。联系[能量账本](../work-and-energy/#the-work-energy-principle)：总功为零，不代表合力为零。

若绳断裂，质点最初沿切线运动，并非沿半径向外。在光滑水平桌面上，它将沿直线继续运动，直到其他力或边界改变运动。

</div>

## 摩擦与道路弯道 {#friction-and-road-bends}

物块随粗糙水平转盘转动时，相对**转盘**静止，但相对地面做圆周运动。静摩擦指向圆心，提供所需径向力。

$$f=mr\omega^2,\qquad R=mg,\qquad f\leq\mu R.$$

不要在任意速率都使用 $f=\mu R$；只有即将滑动的临界状态才取等号。联立方程得到：

$$\boxed{\omega^2\leq\frac{\mu g}{r}},\qquad \boxed{v^2\leq\mu gr}.$$

若把汽车或手机视为质点，且水平弯道的向心合力由摩擦提供，同样的界限适用。它检查的是滑动；刚体模型还需另查倾倒。

对于**光滑倾斜弯道（smooth banked road）**，外沿抬高，与水平夹角为 $\alpha$，法向反力斜向上且朝圆心。没有摩擦时：

$$R\cos\alpha=mg,\qquad R\sin\alpha=\frac{mv^2}{r}.$$

$$\boxed{\tan\alpha=\frac{v^2}{rg}}.$$

这给出指定半径和倾角下能够维持稳定圆周运动的一个速率，不是粗糙弯道的最大速率公式。

<div class="worked-example" markdown="1">

### 例题 4：转盘上的物块 {#example-4-a-block-on-a-rotating-disc}

**Question:** a block of mass $0.5\,\mathrm{kg}$ stays at a fixed position $0.4\,\mathrm m$ from the axis of a horizontal disc rotating at $3\,\mathrm{rad\,s^{-1}}$. Find the frictional force and the least coefficient of friction. If the coefficient is $0.4$, find the greatest angular speed without slipping.

$$\boxed{f=0.5(0.4)(3^2)=1.8\,\mathrm N\text{ towards the centre}}.$$

$$R=0.5g=4.9\,\mathrm N.$$

最小摩擦系数对应所需摩擦恰好达到上限：

$$\boxed{\mu_{\text{min}}=\frac{1.8}{4.9}\approx0.367}.$$

若 $\mu=0.4$：

$$\boxed{\omega_{\text{max}}=\sqrt{\frac{0.4g}{0.4}}\approx3.13\,\mathrm{rad\,s^{-1}}}.$$

**检查：**在 $\omega=3$ 时，摩擦为 $1.8\,\mathrm N$，小于可提供的 $0.4(4.9)=1.96\,\mathrm N$。角速率界限中的质量约去。

</div>

## 连接质点与不同半径 {#connected-particles-and-different-radii}

轻绳穿过桌面的光滑孔时，孔两侧张力相同。分别为每个质点写受力方程。

若悬挂质点平衡，张力等于它的重力；桌面上的质点**并不平衡**，张力使其产生径向加速度。

不同半径的质点以同一角速率转动时，分别用 $v=r\omega$。线速率和所需径向力不必相等；向外拉内侧质点的张力，在向心为正的方程中取负号。

<div class="worked-example" markdown="1">

### 例题 5：穿过小孔的绳 {#example-5-a-string-through-a-hole}

**Question:** particles $P$ and $Q$, of masses $0.6\,\mathrm{kg}$ and $0.9\,\mathrm{kg}$, are connected by a light inextensible string passing through a smooth hole $O$ in a smooth horizontal table. $P$ moves in a horizontal circle of radius $0.8\,\mathrm m$ about $O$. $Q$ hangs at rest below the hole. Find the tension, speed and angular speed of $P$.

对 $Q$，竖直平衡给出：

$$\boxed{T=0.9g=8.82\,\mathrm N}.$$

对 $P$，桌面反力平衡重力，张力指向 $O$：

$$8.82=\frac{0.6v^2}{0.8}.$$

$$\boxed{v=\sqrt{11.76}\approx3.43\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\omega=\frac{\sqrt{11.76}}{0.8}\approx4.29\,\mathrm{rad\,s^{-1}}}.$$

**检查：**$0.6(0.8)\omega^2=8.82$，且 $Q$ 的合力为零。桌面对 $P$ 的法向反力为 $0.6g=5.88\,\mathrm N$。在这些假设下，同一半径上换成其他速率就不能保持 $Q$ 静止。

</div>

## 圆锥摆 {#the-conical-pendulum}

质点始终在同一高度，说明向上与向下的力分量平衡；它仍在水平转向，说明径向分量不平衡。同一个倾斜张力可以用竖直分量支承重力，用水平分量改变方向。

**圆锥摆（conical pendulum）**用轻、不可伸长的绳把质点悬于固定点 $A$；质点在 $A$ 下方的水平圆周上匀速运动，绳扫出一个圆锥面。

设绳长为 $l$，绳与**竖直方向**夹角为 $\theta$。水平圆半径及圆心位于 $A$ 下方的深度为：

$$\boxed{r=l\sin\theta},\qquad \boxed{h=l\cos\theta}.$$

质点只受沿绳张力 $T$ 和竖直向下的重力 $mg$。分别沿竖直方向及水平向心方向分解：

$$\boxed{T\cos\theta=mg},\qquad \boxed{T\sin\theta=mr\omega^2}.$$

![圆锥摆的竖直截面；张力沿绳向上，重力向下，夹角从竖直量起，水平圆半径为 l sin theta](/assets/img/a2-math-mech/conical-pendulum-forces.svg)

两式相除得到：

$$\tan\theta=\frac{r\omega^2}{g}=\frac{v^2}{rg}.$$

角度从竖直量起，张力的邻边分量是 $T\cos\theta$；水平半径在这个角的对边，所以为 $l\sin\theta$，不能用 $l$。水平方程成为 $T\sin\theta=ml\sin\theta\,\omega^2$；约去 $\sin\theta$ 之前，必须确认半径不为零。

真正的圆周要求 $r>0$、$\sin\theta>0$。将 $r=l\sin\theta$ 代入水平方程得：

$$\boxed{T=ml\omega^2},\qquad \boxed{\cos\theta=\frac{g}{l\omega^2}},\qquad \boxed{h=\frac{g}{\omega^2}}.$$

因为 $0<\theta<90^\circ$，张力大于重力。非零半径圆锥摆要求 $l\omega^2>g$；等号对应 $\theta=0$、$r=0$，不是圆周轨道。角速率固定时，$h$ 与质量、绳长无关，但所选绳长必须大于 $h$。

<div class="worked-example" markdown="1">

### 例题 6：已知与竖直方向的夹角 {#example-6-angle-given-from-the-vertical}

**Question:** a particle of mass $0.4\,\mathrm{kg}$ forms a conical pendulum with string length $1.25\,\mathrm m$. Its acute angle to vertical satisfies $\cos\theta=4/5$. Find the radius, tension, angular speed, linear speed and period.

由 $\sin\theta=3/5$：

$$\boxed{r=1.25\left(\frac35\right)=0.75\,\mathrm m}.$$

$$\boxed{T=\frac{0.4g}{4/5}=4.9\,\mathrm N}.$$

$$\omega^2=\frac{g}{1.25(4/5)}=9.8.$$

$$\boxed{\omega\approx3.13\,\mathrm{rad\,s^{-1}}},\qquad \boxed{v=0.75\sqrt{9.8}\approx2.35\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\tau=\frac{2\pi}{\sqrt{9.8}}\approx2.01\,\mathrm s}.$$

**检查：**代回两个受力方程：

$$T\cos\theta=4.9\left(\frac45\right)=3.92=mg.$$

$$T\sin\theta=4.9\left(\frac35\right)=2.94=mr\omega^2.$$

半径是 $0.75\,\mathrm m$，不是整条绳长。

</div>

## 光滑碗内的运动 {#motion-inside-a-smooth-bowl}

这次约束力来自表面垂直地推物体，而不是绳沿自身拉物体。球面的半径垂直于该处切面，所以先在竖直截面里画出连向球心的反力，再用三角形分解。水平轨道另有自己的圆心。

质点可以在固定、光滑的半球形碗内做水平圆周运动。重力向下；法向反力指向**球心**，球心位于水平圆心上方。

设碗半径为 $a$，水平圆半径为 $r$，水平圆心 $C$ 比球心 $O$ 低 $d$：

$$\boxed{r^2+d^2=a^2}.$$

![光滑半球形碗的竖直截面；质点绕 O 下方的水平圆运动，反力指向 O，r 为水平圆半径，d 为圆心深度](/assets/img/a2-math-mech/circular-motion-bowl.svg)

反力的向上分量占 $d/a$，水平向心分量占 $r/a$。因此：

$$R\frac da=mg,\qquad R\frac ra=mr\omega^2.$$

对于 $r>0$，第二式可约去 $r$：

$$\boxed{R=ma\omega^2},\qquad \boxed{d=\frac{g}{\omega^2}}.$$

下半球内的非零水平圆要求 $0<d<a$。若 $d=a$，质点位于碗底且 $r=0$；若 $d>a$，所设圆周已不符合碗的几何约束。

<div class="worked-example" markdown="1">

### 例题 7：碗半径与水平圆半径 {#example-7-radius-of-the-bowl-and-radius-of-the-circle}

**Question:** a particle of mass $0.2\,\mathrm{kg}$ moves in a horizontal circle inside a fixed smooth hemispherical bowl of radius $0.5\,\mathrm m$. The circle's centre is $0.3\,\mathrm m$ below the bowl centre. Find the circle radius, normal reaction, angular speed and linear speed.

$$\boxed{r=\sqrt{0.5^2-0.3^2}=0.4\,\mathrm m}.$$

$$R\left(\frac{0.3}{0.5}\right)=0.2g,\qquad \boxed{R\approx3.27\,\mathrm N}.$$

$$\boxed{\omega=\sqrt{\frac{g}{0.3}}\approx5.72\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.4\sqrt{\frac{g}{0.3}}\approx2.29\,\mathrm{m\,s^{-1}}}.$$

**检查：**$R$ 的向上分量为 $1.96\,\mathrm N=mg$，水平向心分量约 $2.61\,\mathrm N$，等于 $mr\omega^2$。法向反力并非水平，$a$ 也不是轨道半径。

</div>

## 与平面的接触和离面 {#contact-and-lifting-off-a-plane}

质点可在光滑水平面上运动，同时用绳连接到平面**上方**的固定点；张力向上的分量使法向反力减小。

设绳长为 $l$，固定点高出平面 $h$。绳绷紧且质点仍在平面上时：

$$r=\sqrt{l^2-h^2}.$$

![质点在水平面上并用绳连接较高固定点；张力向上且朝转轴，反力向上，重力向下](/assets/img/a2-math-mech/circular-motion-contact.svg)

张力的水平分量为 $Tr/l$，竖直分量为 $Th/l$，所以：

$$T\frac rl=mr\omega^2,\qquad R+T\frac hl=mg.$$

当 $r>0$ 时得到：

$$\boxed{T=ml\omega^2},\qquad \boxed{R=m(g-h\omega^2)}.$$

平面能向上推质点，不能向下拉质点，因此接触要求 $R\geq0$。刚要离面时应设 **$R=0$**，不是 $T=0$：

$$\boxed{\omega^2=\frac gh},\qquad \boxed{v=r\sqrt{\frac gh}}.$$

超过这个角速率，固定高度的接触模型会给出 $R<0$，因此失效；质点的运动和绳的角度必须改变。

<div class="worked-example" markdown="1">

### 例题 8：高处的连接点 {#example-8-a-raised-attachment-point}

**Question:** a particle of mass $0.5\,\mathrm{kg}$ moves in a horizontal circle on a smooth fixed plane. It is attached to a fixed point $0.6\,\mathrm m$ above the plane by a light inextensible string of length $1\,\mathrm m$. Find tension and normal reaction at angular speed $3\,\mathrm{rad\,s^{-1}}$. Find the angular and linear speeds at lifting off.

$$r=\sqrt{1^2-0.6^2}=0.8\,\mathrm m.$$

$$\boxed{T=0.5(1)(3^2)=4.5\,\mathrm N}.$$

$$\boxed{R=0.5g-4.5\left(\frac{0.6}{1}\right)=2.2\,\mathrm N}.$$

在刚要离面时：

$$\boxed{\omega=\sqrt{\frac{g}{0.6}}\approx4.04\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.8\sqrt{\frac{g}{0.6}}\approx3.23\,\mathrm{m\,s^{-1}}}.$$

**检查：**在 $\omega=3$ 时，张力水平分量为 $4.5(0.8)=3.6\,\mathrm N=mr\omega^2$。在离面界限处，张力竖直分量等于重力，而张力本身仍为正。

</div>

## 光滑圆锥内的运动 {#motion-inside-a-smooth-cone}

圆锥的**半顶角（semi-vertical angle）**$\alpha$ 是侧面母线与竖直轴的夹角。内表面对质点的法向反力垂直侧面，斜向上且朝轴线。

![光滑圆锥的竖直截面；alpha 为侧面母线与竖直轴的夹角，法向反力垂直侧面](/assets/img/a2-math-mech/circular-motion-cone.svg)

反力与竖直方向夹角为 $90^\circ-\alpha$，所以竖直分量为 $R\sin\alpha$，水平向心分量为 $R\cos\alpha$：

$$R\sin\alpha=mg,\qquad R\cos\alpha=mr\omega^2.$$

$$\boxed{r=\frac{g\cot\alpha}{\omega^2}}.$$

不要未核对角度就套用圆锥摆的分量式。圆锥摆的力**沿绳**，这里的反力则**垂直圆锥侧面**。

<div class="worked-example" markdown="1">

### 例题 9：圆锥上的法向反力 {#example-9-the-normal-reaction-on-a-cone}

**Question:** a particle of mass $0.3\,\mathrm{kg}$ moves at angular speed $7\,\mathrm{rad\,s^{-1}}$ in a horizontal circle inside a fixed smooth cone. Its axis is vertical and its semi-vertical angle is $30^\circ$. Find the normal reaction, circle radius and height above the vertex. Assume the cone is large enough for this circle.

$$\boxed{R=\frac{0.3g}{\sin30^\circ}=5.88\,\mathrm N}.$$

$$\boxed{r=\frac{g\cot30^\circ}{7^2}=0.2\sqrt3\approx0.346\,\mathrm m}.$$

若顶点以上的高度为 $z$，圆锥几何关系给出 $r=z\tan30^\circ$：

$$\boxed{z=\frac{0.2\sqrt3}{\tan30^\circ}=0.6\,\mathrm m}.$$

**检查：**$R\sin30^\circ=2.94\,\mathrm N=mg$；$R\cos30^\circ=0.3(0.2\sqrt3)(49)$，与所需向心力一致。

</div>

## 圆形轨道 {#circular-orbits}

相同径向受力方程也可描述卫星的圆形轨道。轨道半径是地球半径**加上**离地高度；重力提供向心合力，应使用该轨道处的重力加速度，不能自动用地表 $9.8$。轨道不一定是地表附近的水平圆，因此不要再加上桌面或圆锥摆所用的竖直平衡方程。

## 练习 {#practice}

先尝试，再展开提示。写出真实的力并标出半径；水平圆周分别列竖直与向心方向的方程。

<div class="lesson-check" markdown="1">

### Q1 — 转动中的点 {#q1-clockwise-rotation}

**Self-written.**

**Question:** A point on a disc is $0.2\,\mathrm m$ from the axis and completes $60$ revolutions per minute clockwise. Find its angular speed, signed angular velocity, linear speed, period and acceleration. Take anticlockwise angular velocity as positive. State the directions of velocity and acceleration when the point is directly to the right of the centre.

<details markdown="1">
<summary>提示</summary>

把每分钟转数换为弧度每秒。在 $v=r\omega$ 中用正的角速率，转动方向另行说明。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\omega=2\pi\,\mathrm{rad\,s^{-1}}},\qquad \boxed{\text{signed angular velocity}=-2\pi\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.4\pi\approx1.26\,\mathrm{m\,s^{-1}}},\qquad \boxed{\tau=1\,\mathrm s}.$$

$$\boxed{a=0.8\pi^2\approx7.90\,\mathrm{m\,s^{-2}}}.$$

在圆的最右点，速度沿切线**向下**，加速度**向左**指向圆心。

**检查：**转盘每秒一周，与周期一致。顺时针运动不会使速率或加速度大小变成负数。

若本题未通过，回看[角量与线量](#angular-speed-and-angular-velocity)，收起示范后，独立做[两个点的任务](#rotation-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — 运动中的质点 {#q2-integrating-to-find-a-circle}

**Self-written.**

**Question:** A particle has acceleration:

$$\mathbf a=-(8\cos2t)\mathbf i-(8\sin2t)\mathbf j.$$

At $t=0$, its position is $3\mathbf i-\mathbf j$ and its velocity is $4\mathbf j$. Positions are in metres and time is in seconds. Find velocity and position, identify the circle and find the speed. Its mass is $0.5\,\mathrm{kg}$; find the magnitude and direction of the resultant force.

<details markdown="1">
<summary>提示</summary>

积分两次，先用给定初速度，再用给定初位置。圆心不一定在原点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

积分加速度并使用初速度，得到：

$$\boxed{\mathbf v=-(4\sin2t)\mathbf i+(4\cos2t)\mathbf j}.$$

再次积分，每个分量都保留自己的常数：

$$x=2\cos2t+C_x,\qquad y=2\sin2t+C_y.$$

初始位置给出 $C_x=1$、$C_y=-1$：

$$\boxed{\mathbf r=(1+2\cos2t)\mathbf i+(-1+2\sin2t)\mathbf j}.$$

$$\boxed{(x-1)^2+(y+1)^2=4}.$$

圆心为 $(1,-1)$，半径为 $2\,\mathrm m$，速率为 $\boxed{4\,\mathrm{m\,s^{-1}}}$。加速度大小为 $8\,\mathrm{m\,s^{-2}}$，所以合力为 $\boxed{4\,\mathrm N\text{ towards the centre}}$，即指向圆心。

**检查：**求导可恢复给定的加速度和初速度；同时 $v^2/r=16/2=8$。

若本题未通过，回看[向量示范](#example-2-showing-a-path-is-a-circle)，收起示范后，独立做[被记录的质点](#vector-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — 围缘旁的质点 {#q3-a-smooth-vertical-rim}

**Self-written.**

**Question:** A particle of mass $0.2\,\mathrm{kg}$ moves at $3\,\mathrm{m\,s^{-1}}$ around the inside of a smooth vertical rim on a smooth horizontal table. The circle radius is $0.4\,\mathrm m$. Find the acceleration, the force from the rim and the normal reaction from the table. Ignore air resistance.

<details markdown="1">
<summary>提示</summary>

围缘提供指向圆心的水平力，桌面另提供竖直反力来平衡重力。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{a=\frac{3^2}{0.4}=22.5\,\mathrm{m\,s^{-2}}\text{ towards the centre}}.$$

$$\boxed{R_{\text{rim}}=0.2(22.5)=4.5\,\mathrm N\text{ towards the centre}}.$$

$$\boxed{R_{\text{table}}=0.2g=1.96\,\mathrm N}.$$

**检查：**竖直力平衡，但水平合力非零。两个反力来自不同接触处，不应在受力图中合并成一个水平反力标签。

若本题未通过，回看[真实受力](#forces-in-a-horizontal-circle)，收起示范后，独立做[拟议运动](#radial-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — 列车中的手机 {#q4-a-phone-on-a-train-table}

**Self-written.**

**Question:** A train follows a horizontal circular bend at a steady $12\,\mathrm{m\,s^{-1}}$. A phone stays at rest relative to a rough horizontal table in the train. The coefficient of friction is $0.3$. Model the phone as a particle and find the least possible radius of its circular path without slipping.

<details markdown="1">
<summary>提示</summary>

静摩擦提供径向力。使用 $mv^2/r\leq\mu mg$ 并解出 $r$ 的条件。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{m(12^2)}{r}\leq0.3mg.$$

$$r\geq\frac{144}{0.3g},\qquad \boxed{r_{\text{min}}\approx49.0\,\mathrm m}.$$

**检查：**在最小半径处摩擦达到极限。同一速率下，更大半径只需更小摩擦；手机质量约去。圆周半径从弯道圆心量至手机。

若本题未通过，回看[摩擦需要量与上限](#friction-and-road-bends)，收起示范后，独立做[转盘位置任务](#friction-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — 相连的两个质点 {#q5-a-hanging-particle-in-equilibrium}

**Self-written.**

**Question:** Particles $P$ and $Q$, of masses $0.4\,\mathrm{kg}$ and $0.8\,\mathrm{kg}$, are joined by a light inextensible string through a smooth hole in a smooth fixed horizontal table. $Q$ hangs at rest and $P$ moves in a horizontal circle of radius $0.5\,\mathrm m$ about the hole. Find the tension, speed and angular speed of $P$.

<details markdown="1">
<summary>提示</summary>

对 $Q$ 用平衡条件，对 $P$ 用径向受力方程。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{T=0.8g=7.84\,\mathrm N}.$$

$$7.84=\frac{0.4v^2}{0.5},\qquad \boxed{v=\sqrt{9.8}\approx3.13\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\omega=\frac{\sqrt{9.8}}{0.5}\approx6.26\,\mathrm{rad\,s^{-1}}}.$$

**检查：**$0.4(0.5)\omega^2=7.84$。$Q$ 所受各力平衡，$P$ 则有水平向心合力。

若本题未通过，回看[分别研究两个物体](#connected-particles-and-different-radii)，收起示范后，独立做[拟议运动](#radial-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6 — 悬挂的质点 {#q6-is-a-conical-pendulum-possible}

**Self-written.**

**Question:** A particle of mass $0.5\,\mathrm{kg}$ hangs from a light inextensible string of length $1\,\mathrm m$ with a fixed upper end. It forms a conical pendulum with angular speed $4\,\mathrm{rad\,s^{-1}}$. Find tension, angle to vertical, circle radius, linear speed and period. Explain why a non-zero-radius conical motion with angular speed $2\,\mathrm{rad\,s^{-1}}$ is impossible for the same string length.

<details markdown="1">
<summary>提示</summary>

使用：

$$T=ml\omega^2,\qquad \cos\theta=\frac{g}{l\omega^2}.$$

检查所算余弦是否严格在零与一之间，才能形成非零半径圆周。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{T=0.5(1)(4^2)=8\,\mathrm N}.$$

$$\cos\theta=\frac{9.8}{16}=0.6125,\qquad \boxed{\theta\approx52.2^\circ}.$$

$$\boxed{r=\sqrt{1-0.6125^2}\approx0.790\,\mathrm m}.$$

$$\boxed{v=4r\approx3.16\,\mathrm{m\,s^{-1}}},\qquad \boxed{\tau=\frac{2\pi}{4}\approx1.57\,\mathrm s}.$$

若 $\omega=2$，同一组圆周方程会要求 $\cos\theta=9.8/4=2.45$，不可能成立；所需深度 $g/\omega^2$ 已超过绳长。

**检查：**$8(0.6125)=4.9\,\mathrm N=mg$。计算线速率时使用未舍入的半径。

若本题未通过，回看[圆锥摆几何](#the-conical-pendulum)，收起示范后，独立做[两根绳的任务](#pendulum-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7 — 碗内的质点 {#q7-a-horizontal-circle-in-a-bowl}

**Self-written.**

**Question:** A particle of mass $0.3\,\mathrm{kg}$ moves in a horizontal circle inside a fixed smooth hemispherical bowl of radius $0.6\,\mathrm m$. The circle's centre is $0.36\,\mathrm m$ below the bowl centre. Find the circle radius, normal reaction, angular speed and linear speed.

<details markdown="1">
<summary>提示</summary>

先用 $r^2+d^2=a^2$，再把法向反力分解为竖直与水平向心分量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{r=\sqrt{0.6^2-0.36^2}=0.48\,\mathrm m}.$$

$$R\left(\frac{0.36}{0.6}\right)=0.3g,\qquad \boxed{R=4.9\,\mathrm N}.$$

$$\boxed{\omega=\sqrt{\frac{g}{0.36}}\approx5.22\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.48\sqrt{\frac{g}{0.36}}\approx2.50\,\mathrm{m\,s^{-1}}}.$$

**检查：**向上分量为 $4.9(0.6)=2.94\,\mathrm N=mg$，向心分量为 $4.9(0.8)=3.92\,\mathrm N=mr\omega^2$。两者都来自同一个法向反力。

若本题未通过，回看[球碗几何](#motion-inside-a-smooth-bowl)，收起示范后，独立做[报告中的测量](#surface-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8 — 平面上的质点 {#q8-check-the-contact-model}

**Self-written.**

**Question:** A particle of mass $0.4\,\mathrm{kg}$ moves on a smooth fixed horizontal plane. A light inextensible string of length $1.25\,\mathrm m$ connects it to a fixed point $0.75\,\mathrm m$ above the plane. The string is taut. Find tension and normal reaction at angular speed $3\,\mathrm{rad\,s^{-1}}$, and find the angular speed at lifting off. Can the same contact model describe motion at $4\,\mathrm{rad\,s^{-1}}$?

<details markdown="1">
<summary>提示</summary>

从直角三角形求水平半径。接触要求 $R\geq0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$r=\sqrt{1.25^2-0.75^2}=1\,\mathrm m.$$

在 $\omega=3$ 时：

$$\boxed{T=0.4(1.25)(9)=4.5\,\mathrm N}.$$

$$\boxed{R=0.4g-4.5\left(\frac{0.75}{1.25}\right)=1.22\,\mathrm N}.$$

在刚要离面时：

$$\boxed{\omega=\sqrt{\frac{g}{0.75}}\approx3.61\,\mathrm{rad\,s^{-1}}}.$$

在 $\omega=4$ 时，固定高度模型给出 $T=8\,\mathrm N$ 和 $R=3.92-8(0.6)=-0.88\,\mathrm N$。支承平面无法提供向下的拉力，所以**这个速率下接触模型失效**。

**检查：**在 $\omega=3$ 时，向心力为 $4.5(1/1.25)=3.6\,\mathrm N=mr\omega^2$。离面临界处的张力竖直分量恰好等于重力。

若本题未通过，回看[接触条件](#contact-and-lifting-off-a-plane)，收起示范后，独立做[测得反力的任务](#contact-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q9 — 转动的两个质点 {#q9-two-particles-at-different-radii}

**Self-written.**

**Question:** Particles $P$ and $Q$ of masses $0.3\,\mathrm{kg}$ and $0.2\,\mathrm{kg}$ rotate together on a smooth fixed horizontal table at $4\,\mathrm{rad\,s^{-1}}$. They lie on one radius in the order $O,P,Q$, with $O$ fixed. Light inextensible strings $OP$ and $PQ$ each have length $0.5\,\mathrm m$ and remain taut. Find both linear speeds and both tensions.

<details markdown="1">
<summary>提示</summary>

$Q$ 的半径等于两段绳长之和。$PQ$ 的张力把 $Q$ 向内拉，却把 $P$ 向外拉。

</details>

<details markdown="1">
<summary>解答与检查</summary>

半径分别为 $r_P=0.5$、$r_Q=1$，单位为米：

$$\boxed{v_P=2\,\mathrm{m\,s^{-1}}},\qquad \boxed{v_Q=4\,\mathrm{m\,s^{-1}}}.$$

对 $Q$：

$$\boxed{T_{PQ}=0.2(1)(4^2)=3.2\,\mathrm N}.$$

对 $P$，取向内为正：

$$T_{OP}-3.2=0.3(0.5)(4^2),\qquad \boxed{T_{OP}=5.6\,\mathrm N}.$$

**检查：**$T_{OP}-T_{PQ}=2.4\,\mathrm N$，等于 $P$ 所需径向合力。相同角速率不代表相同线速率，也不代表两段绳张力相同。

若本题未通过，回看[不同半径与研究对象](#connected-particles-and-different-radii)，收起示范后，独立做[拟议运动](#radial-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q10 — 弯道上的汽车 {#q10-a-smooth-banked-road}

**Self-written.**

**Question:** A car of mass $900\,\mathrm{kg}$ follows a horizontal circle of radius $80\,\mathrm m$ on a smooth banked road. The outer edge is raised, and the acute bank angle $\alpha$ satisfies $\tan\alpha=1/4$. Ignore air resistance and model the car as a particle. Find the speed for steady circular motion and the normal reaction. Explain why this speed is not a maximum-speed result for a rough road.

<details markdown="1">
<summary>提示</summary>

本模型只有重力和法向反力。使用 $R\cos\alpha=mg$ 和 $R\sin\alpha=mv^2/r$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$v^2=80g\left(\frac14\right)=196,\qquad \boxed{v=14\,\mathrm{m\,s^{-1}}}.$$

由该角度可知 $\cos\alpha=4/\sqrt{17}$，所以：

$$\boxed{R=\frac{900g\sqrt{17}}4\approx9.09\,\mathrm{kN}}.$$

粗糙道路上还可以有沿接触面的摩擦。求速率范围时，必须把摩擦方向和上限纳入方程；这里的光滑道路计算只给出无需摩擦的速率。

**检查：**向上分量为 $900g=8820\,\mathrm N$，向心分量是其四分之一，即 $2205\,\mathrm N$，等于 $900(14^2)/80$。

若本题未通过，回看[反力分量](#friction-and-road-bends)，收起示范后，独立做[报告中的测量](#surface-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q11 — 一颗卫星 {#q11-a-satellites-orbital-radius}

**Self-written.**

**Question:** Model the Earth as a sphere of radius $6400\,\mathrm{km}$. A satellite of mass $400\,\mathrm{kg}$ moves at constant speed in a circular orbit $200\,\mathrm{km}$ above the surface. Gravitational acceleration at this height is $9\,\mathrm{m\,s^{-2}}$. Assume gravity is the only force on the satellite. Find the inward force, orbital speed, angular speed and orbital period.

<details markdown="1">
<summary>提示</summary>

从地心量半径，并将千米换成米。使用 $mv^2/r=mg_{\text{orbit}}$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$r=(6400+200)(1000)=6.6\times10^6\,\mathrm m.$$

$$\boxed{F=400(9)=3600\,\mathrm N\text{ towards the Earth's centre}}.$$

$$\frac{v^2}{r}=9,\qquad \boxed{v=\sqrt{9(6.6\times10^6)}\approx7.71\times10^3\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\omega=\frac vr\approx1.17\times10^{-3}\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{\tau=\frac{2\pi}{\omega}\approx5.38\times10^3\,\mathrm s}.$$

**检查：**用未舍入值可得 $r\omega^2=9\,\mathrm{m\,s^{-2}}$ 和 $v\tau=2\pi r$。除重力外，不要额外加入支承反力或张力。

若本题未通过，回看[轨道半径](#circular-orbits)，收起示范后，独立做[测得轨道的任务](#orbit-retry)。

</details>

</div>

<!-- motion-transfer:start -->
## 独立选择方法 {#independent-method-choice}

**自拟诊断任务。**自行选择受力方程及运动可行的判据。首次尝试时，保持推理提示和反馈折叠。

<div class="lesson-check" markdown="1">

**Question:** Two small blocks are to rotate without slipping on a rough horizontal turntable. Block $P$ has mass $0.2\,\mathrm{kg}$, radius $0.25\,\mathrm m$ and coefficient of friction $0.2$; block $Q$ has mass $0.8\,\mathrm{kg}$, radius $0.75\,\mathrm m$ and coefficient of friction $0.3$. At a constant angular speed $2\,\mathrm{rad\,s^{-1}}$, test the proposed motion for each block. Find the greatest common angular speed at which both can remain fixed relative to the disc. A student says the heavier block must be safer because its limiting friction is larger. Assess that reasoning. Ignore air resistance and model the blocks as particles.

<details markdown="1">
<summary>提示</summary>

既求所需径向力，也求可提供的极限摩擦。分别检验每个物块的不等式，不要假定所有速率下摩擦都已达到极限。

</details>

<details markdown="1">
<summary>解答与检查</summary>

竖直方向 $R=mg$。静摩擦是唯一的水平力；不滑动时必须提供朝圆心的 $f=mr\omega^2$，并满足 $f\leq\mu mg$。

$$f_P=0.2(0.25)(2^2)=0.2\,\mathrm N<0.2(0.2g)=0.392\,\mathrm N.$$

$$f_Q=0.8(0.75)(2^2)=2.4\,\mathrm N>0.3(0.8g)=2.352\,\mathrm N.$$

因此 $P$ 可以相对转盘保持静止，$Q$ 的不滑动圆周模型却不可能成立。$2.4\,\mathrm N$ 是它所需的力，不是实际可提供的静摩擦；这里没有建立滑动后的运动模型。

$$\omega^2\leq\frac{0.2g}{0.25}=7.84\quad(P),\qquad \omega^2\leq\frac{0.3g}{0.75}=3.92\quad(Q).$$

$$\boxed{\omega_{\text{max}}=\sqrt{3.92}\approx1.98\,\mathrm{rad\,s^{-1}}}.$$

每个不等式中的质量都会约去，因为所需的力也随质量增加。应比较 $r\omega^2$ 与 $\mu g$，不能只比摩擦上限。若给两个物块使用相同线速率，回到 $v=r\omega$ 重试。独立代回共同临界值，可得 $f_Q=2.352\,\mathrm N$，而 $f_P=0.196\,\mathrm N<0.392\,\mathrm N$，只有 $Q$ 达到极限。

</details>

</div>

<div class="lesson-check" markdown="1">

<span id="contact-retry"></span>

### 测得的反力 {#retry-change-the-structure}

**Question:** A $0.5\,\mathrm{kg}$ particle moves in a horizontal circle on a fixed smooth horizontal plane. A light inextensible string of length $1\,\mathrm m$ joins it to a fixed point $0.6\,\mathrm m$ above the plane. The string is taut, and the normal reaction is measured as half the particle's weight. Find the angular speed, tension and linear speed. Check that the assumed contact is possible. Ignore air resistance.

<details markdown="1">
<summary>提示</summary>

将测得的反力用于竖直平衡，求张力竖直分量，再用张力水平分量提供径向合力。

</details>

<details markdown="1">
<summary>解答与检查</summary>

半径为 $\sqrt{1^2-0.6^2}=0.8\,\mathrm m$，反力为 $R=0.5mg=2.45\,\mathrm N$。因此：

$$0.6T=mg-R=2.45,\qquad \boxed{T=\frac{49}{12}\approx4.08\,\mathrm N}.$$

$$0.8T=0.5(0.8)\omega^2,\qquad \boxed{\omega=\sqrt{\frac{49}{6}}\approx2.86\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.8\sqrt{\frac{49}{6}}\approx2.29\,\mathrm{m\,s^{-1}}}.$$

这里 $R>0$、$T>0$，且 $0.6\omega^2=4.9<g$，接触模型成立。独立用 $R=m(g-h\omega^2)$ 可恢复 $2.45\,\mathrm N$。光滑面上无摩擦；测得反力帮助确定张力，并不是另一个向心力。

</details>

</div>
<!-- motion-transfer:end -->


## 修复后重新尝试 {#repair-and-retry}

找到并修复错误原因后，收起之前的解答，再做对应的新任务。借助帮助完成，要记录为有帮助完成，之后再检验独立表现。

<div class="lesson-check" markdown="1">

### 关于运动质点的一个说法 {#turning-check}

**Self-written.**

**Question:** A $0.2\,\mathrm{kg}$ particle moves at constant speed $2\,\mathrm{m\,s^{-1}}$ on a smooth fixed horizontal table, tied by a taut horizontal string to the circle centre. The radius is $0.5\,\mathrm m$. A student says that unchanged KE means no resultant force, then draws both tension and an extra inward force called centripetal force. Assess both ideas, find the tension and state its work over one revolution.

<details markdown="1">
<summary>提示</summary>

区分速度大小与方向。每一股真实的力都要说清由谁施加。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两个想法都不成立。速度不断转向，需要指向圆心的加速度；“向心力”是在描述真实力的合力。桌面反力竖直平衡重力，张力是唯一的水平力：

$$T=\frac{0.2(2^2)}{0.5}=1.6\,\mathrm N.$$

各处张力都垂直于切向速度，功率始终为零，因此一周做功为 $0\,\mathrm J$。动能不变与总功为零、径向合力非零可以同时成立。回看[径向加速度](#radial-acceleration)与[真实受力](#forces-in-a-horizontal-circle)，再试[被记录的质点](#vector-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 同一转盘上的两个点 {#rotation-retry}

**Self-written.**

**Question:** A disc turns anticlockwise with period $0.8\,\mathrm s$. Points $P$ and $Q$ are $0.3\,\mathrm m$ and $0.6\,\mathrm m$ from its axis. Find the angular speed and revolutions per minute, and each linear speed. Compare the acceleration magnitudes. State the directions of velocity and acceleration when $Q$ is directly to the left of the centre.

<details markdown="1">
<summary>提示</summary>

一个周期对应完整转角，也对应各点各自的一圈路程。画出最左侧的切线。

</details>

<details markdown="1">
<summary>解答与检查</summary>

共同角速率与每分钟转数为

$$\omega=\frac{2\pi}{0.8}=2.5\pi\,\mathrm{rad\,s^{-1}},\qquad n=\frac{60}{0.8}=75\,\mathrm{rpm}.$$

$$v_P=0.75\pi\approx2.36\,\mathrm{m\,s^{-1}},\qquad v_Q=1.5\pi\approx4.71\,\mathrm{m\,s^{-1}}.$$

同一角速率下 $a=r\omega^2$，所以 $Q$ 的加速度大小是 $P$ 的两倍。最左侧点的速度向下，加速度向右。核对 $v_P(0.8)=2\pi(0.3)$，$Q$ 同理。转一圈用时相同，不代表线速率相同。回补[角量与线量](#angular-speed-and-angular-velocity)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 被记录的质点 {#vector-retry}

**Self-written.**

**Question:** A particle of mass $0.4\,\mathrm{kg}$ has position vector $\mathbf r=(2+0.5\cos4t)\mathbf i+(-1+0.5\sin4t)\mathbf j$ metres, with $t$ in seconds. Show that its path is a circle and its speed is constant. Find its velocity, acceleration and resultant force as vectors. Assess the claim that the acceleration vector is constant because its magnitude is constant.

<details markdown="1">
<summary>提示</summary>

先找固定圆心，再比较加速度与位置。两个分量都要用链式法则求导。

</details>

<details markdown="1">
<summary>解答与检查</summary>

圆心为 $(2,-1)$，因为

$$(x-2)^2+(y+1)^2=0.25(\cos^24t+\sin^24t)=0.25.$$

$$\mathbf v=-2\sin4t\,\mathbf i+2\cos4t\,\mathbf j,\qquad \lvert\mathbf v\rvert=2\,\mathrm{m\,s^{-1}}.$$

$$\mathbf a=-8\cos4t\,\mathbf i-8\sin4t\,\mathbf j,\qquad \mathbf F=-3.2\cos4t\,\mathbf i-3.2\sin4t\,\mathbf j.$$

设 $\mathbf c=2\mathbf i-\mathbf j$，则 $\mathbf a=-16(\mathbf r-\mathbf c)$，指向圆心。大小 $8$ 与 $v^2/r=4/0.5$ 相同，但方向随时间改变，因此说法不成立。核对 $\mathbf a\cdot\mathbf v=0$：速率不增大，也完全可以有非零加速度。若漏了内层导数 $4$，回看[例题 2](#example-2-showing-a-path-is-a-circle)；圆心错时，先减固定偏移，再检验半径。

</details>

</div>

<div class="lesson-check" markdown="1">

### 一个拟议的运动 {#radial-retry}

**Self-written.**

**Question:** A $0.3\,\mathrm{kg}$ particle is tied to a fixed point on a smooth horizontal table by a taut light string of length $0.6\,\mathrm m$. The string breaks if tension exceeds $4.5\,\mathrm N$. Test a proposed uniform circular speed of $3.2\,\mathrm{m\,s^{-1}}$, find the greatest allowed linear speed, and find the table reaction. Describe the initial path if the string breaks.

<details markdown="1">
<summary>提示</summary>

需要的张力与允许的张力要分别算。竖直方向没有加速度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

拟议运动需要

$$T=\frac{0.3(3.2^2)}{0.6}=5.12\,\mathrm N>4.5\,\mathrm N,$$

因此绳不能维持该运动。允许边界上

$$\frac{0.3v^2}{0.6}=4.5,\qquad v_{\max}=3\,\mathrm{m\,s^{-1}}.$$

桌面反力为 $0.3g=2.94\,\mathrm N$。绳水平拉，不承担重力。断绳瞬间速度沿切线；光滑桌面上随后沿直线运动，直到其他边界或力介入。若另加了一股向心力，或让水平张力平衡重力，回补[真实受力](#forces-in-a-horizontal-circle)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 选择转盘上的位置 {#friction-retry}

**Self-written.**

**Question:** A $0.2\,\mathrm{kg}$ block is to stay fixed relative to a horizontal disc rotating at $4\,\mathrm{rad\,s^{-1}}$. The coefficient of friction is $0.25$. Find the greatest allowed distance from the axis, and test distances $0.12\,\mathrm m$ and $0.20\,\mathrm m$. At the first distance, would doubling the coefficient double the actual friction? Do not model motion after slipping starts.

<details markdown="1">
<summary>提示</summary>

先求拟议圆周需要多少力，再与摩擦上限比较。这次未知的是半径。

</details>

<details markdown="1">
<summary>解答与检查</summary>

这里 $R=0.2g=1.96\,\mathrm N$，摩擦上限为 $0.49\,\mathrm N$。不滑动要求

$$0.2r(4^2)\leq0.49,\qquad r\leq0.153125\,\mathrm m.$$

允许的最大半径为 $0.153\,\mathrm m$。在 $0.12\,\mathrm m$ 处，需要向心摩擦 $0.384\,\mathrm N$，未达上限；在 $0.20\,\mathrm m$ 处则需要 $0.64\,\mathrm N$，静摩擦模型无法提供。系数加倍提高的是上限；同一运动中，$0.12\,\mathrm m$ 处实际摩擦仍为 $0.384\,\mathrm N$。用 $r\omega^2=\mu g$ 核对边界。回补[需要量与摩擦极限](#friction-and-road-bends)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 两根备选的绳 {#pendulum-retry}

**Self-written.**

**Question:** A particle of mass $0.2\,\mathrm{kg}$ is to form a conical pendulum at angular speed $\sqrt{49/3}\,\mathrm{rad\,s^{-1}}$. Two light inextensible strings, of lengths $0.8\,\mathrm m$ and $0.5\,\mathrm m$, are available. Decide which can form a nonzero horizontal circle with a fixed upper end. For each possible case find the radius and tension.

<details markdown="1">
<summary>提示</summary>

比较角速率要求的竖直深度与各绳长。零半径或虚数半径都不是所要求的圆周。

</details>

<details markdown="1">
<summary>解答与检查</summary>

竖直与径向方程要求

$$h=\frac{g}{\omega^2}=\frac{9.8}{49/3}=0.6\,\mathrm m.$$

$0.8$ 米的绳能达到这个深度，并留出正的水平半径：

$$r=\sqrt{0.8^2-0.6^2}=\sqrt{0.28}\approx0.529\,\mathrm m,\qquad T=0.2(0.8)\frac{49}{3}\approx2.61\,\mathrm N.$$

用未舍入张力核对 $T(h/0.8)=mg$。$0.5$ 米的绳太短，会要求 $\cos\theta=0.6/0.5=1.2$。增大质量也修复不了几何矛盾。若接受了短绳，或把整条绳长当半径，回看[夹角与非零半径条件](#the-conical-pendulum)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 倾斜表面旁的质点 {#cone-check}

**Self-written.**

**Question:** A $0.2\,\mathrm{kg}$ particle moves uniformly in a horizontal circle of radius $0.4\,\mathrm m$ inside a fixed smooth cone whose semi-vertical angle is $60^\circ$. Only weight and the normal reaction act. Draw their directions and find the normal reaction, angular speed and height above the vertex. A student uses $R\cos60^\circ=mg$. Assess this equation.

<details markdown="1">
<summary>提示</summary>

题目给的是侧面母线的角度，不是法向反力的角度。先在竖直截面里定位。

</details>

<details markdown="1">
<summary>解答与检查</summary>

反力垂直侧面，斜向上且朝内，与竖直方向成 $30^\circ$。因此

$$R\sin60^\circ=0.2g,\qquad R=\frac{3.92}{\sqrt3}\approx2.26\,\mathrm N.$$

$$R\cos60^\circ=0.2(0.4)\omega^2,\qquad\omega^2=\frac{24.5}{\sqrt3},\qquad\omega\approx3.76\,\mathrm{rad\,s^{-1}}.$$

$$z=\frac{0.4}{\tan60^\circ}\approx0.231\,\mathrm m.$$

学生把母线角误当成了反力角。检查真正向上的分量是否等于 $mg$，以及 $R>0$。回看[垂直圆锥侧面的反力](#motion-inside-a-smooth-cone)，再做[报告中的测量](#surface-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 报告中的一个测量值 {#surface-retry}

**Self-written.**

**Question:** A report claims that the normal reaction on a particle of mass $m$ moving in a horizontal circle is $2mg$. Test that claim in each proposed model: (a) inside a fixed smooth bowl of radius $0.6\,\mathrm m$, with the circle centre $0.3\,\mathrm m$ below the sphere centre; (b) inside a fixed smooth cone of semi-vertical angle $45^\circ$. Only weight and the normal reaction act. If a model is possible, find its circle radius and angular speed.

<details markdown="1">
<summary>提示</summary>

先检查竖直平衡，再解径向方程。几何给定后，增大角速率不能补救错误的竖直分量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

碗内向上分量为 $(2mg)(0.3/0.6)=mg$，竖直平衡可以成立：

$$r=\sqrt{0.6^2-0.3^2}=\sqrt{0.27}\approx0.520\,\mathrm m,\qquad\omega=\sqrt{\frac{g}{0.3}}\approx5.72\,\mathrm{rad\,s^{-1}}.$$

再核对 $R(r/0.6)=mr\omega^2$ 和 $0<0.3<0.6$。圆锥内，所报反力的向上分量为 $2mg\sin45^\circ=\sqrt2mg>mg$，会产生向上加速度；任何角速率都不能让它符合这个水平圆周模型。两种表面的法向不同。回补[球碗几何](#motion-inside-a-smooth-bowl)或[圆锥几何](#motion-inside-a-smooth-cone)；反力为正只是必要条件，不足以保证整个模型成立。

</details>

</div>

<div class="lesson-check" markdown="1">

### 测得的轨道速率 {#orbit-retry}

**Self-written.**

**Question:** A spherical planet has radius $6.0\times10^6\,\mathrm m$. A satellite has circular orbital speed $6000\,\mathrm{m\,s^{-1}}$ and gravitational acceleration $4\,\mathrm{m\,s^{-2}}$ at the orbit. Gravity is its only force. Find the orbital radius, height above the surface, angular speed and period. Explain why no supporting force is needed.

<details markdown="1">
<summary>提示</summary>

观测到的加速度指向行星中心。先由加速度求轨道半径，再减去行星半径。

</details>

<details markdown="1">
<summary>解答与检查</summary>

引力就是全部径向合力：

$$\frac{6000^2}{r}=4,\qquad r=9.0\times10^6\,\mathrm m,\qquad h=r-6.0\times10^6=3.0\times10^6\,\mathrm m.$$

$$\omega=\frac{6000}{9.0\times10^6}=\frac1{1500}\,\mathrm{rad\,s^{-1}},\qquad\tau=3000\pi\,\mathrm s\approx9.42\times10^3\,\mathrm s.$$

核对 $r\omega^2=4$。卫星在引力下加速，并不是静止在桌面上方，所以没有理由再加支持力或额外的“向心力”。若把 $v^2/g$ 得到的量当成了离地高度，回看[中心与表面](#circular-orbits)。

</details>

</div>

## 稍后回来提取 {#later-check}

下一步做入口[混合题](/zh/alevel/a2-mathematics/mechanics/#mixed-problems)。下一次学习先不看示范，完成[被记录的质点](#vector-retry)与[报告中的测量](#surface-retry)，再做[稍后回顾](/zh/alevel/a2-mathematics/mechanics/#later-review)。用英文解释为什么径向合力非零时动能仍可不变，以及为什么法向反力不一定等于重力。解释有误回看[真实受力](#forces-in-a-horizontal-circle)，力方向错误回看[表面几何](#motion-inside-a-smooth-cone)，并记录使用过的帮助。

<!-- motion-sources:start -->
## 来源与范围 {#sources-and-scope}

[OxfordAQA 9660 大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，M2.7：printed 30 / PDF 29（1-based）；整个 M2 范围为 printed 27–30 / PDF 26–29。范围包括匀速圆周、水平圆周或引力朝圆心的圆轨道、角速率换算、位置／速度／加速度向量及圆锥摆。

本次配对阅读 MA05 January 2025 [Q3(a)–(b)，QP pp.6–7](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=6)与 [MS pp.7–8，Version 1.0 Final](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=7)。先检查摩擦是否足够，再接受不滑动模型；只有极限才取等号。位置的两个分量都要求导，再乘质量得到实际摩擦向量。show 题应在给出的舍入结果之前保留足够的未舍入证据。

全部题目均为 **Self-written / 自拟题**，无官方分值。January 2025 卷默认两位有效数字，题内另有要求时依题意；本页自拟题依开头约定。教材对应第 15 章 15.1–15.3 节，印刷 pp.240–251。球碗、圆锥、弯道与接触题用于迁移同一受力方法；本课不把非匀速竖直圆周作为 MA05 必考内容。
<!-- motion-sources:end -->

## 方法小结 {#method-summary}

- **先换单位：**弧度每秒、米和米每秒；求角速度时说明转动方向。
- **标半径：**水平量至圆心；绳长、碗半径和轨道半径可能不同。
- **画真实的力：**向心力是它们指向圆心的合力，不是额外一种力。
- **分解：**水平圆周的竖直合力为零，向心合力为 $mv^2/r$ 或 $mr\omega^2$。
- **检查模型：**摩擦满足 $f\leq\mu R$，张力须为正且不超过断裂限值，接触要求 $R\geq0$。
- **检查角度：**张力沿绳，反力垂直表面；标清角度从水平还是竖直量起。
- **检查速率和方向：**速率恒定仍可有加速度；能量本身不能给出圆周运动所需的受力或接触条件。

**学习路线：**[上一课：功与能](/zh/alevel/a2-mathematics/mechanics/work-and-energy/) · [力学单元入口](/zh/alevel/a2-mathematics/mechanics/) · [力学速查（英文）](/alevel/a2-mathematics/mechanics/quick-reference/)。至此完成教材 A2 力学的学习顺序；返回[练习](#practice)，并用单元入口复习曾需调用的先前方法。
