---
title: "变力冲量与一维碰撞"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/impulse-and-collisions/
permalink: /zh/alevel/as-further-mathematics/impulse-and-collisions/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · M3 · FM1.3

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 先选哪个系统、方向与过程？ {#model}

**开始：**区分速度 −3 m s⁻¹ 与速率 3 m s⁻¹。**目标：**积分变力、使用带符号动量与恢复系数、筛选速度范围并解释能量变化。先修为 AS 动量、积分、联立方程。模型为沿同一直线运动的粒子，整个过程使用同一正方向。

$$p=mv,\qquad J=\int_{t_1}^{t_2}F(t)\,dt=m(v-u).$$

冲量（impulse）为力—时间图的带符号面积，单位 N s；恒力时化为 $J=F\Delta t$。两粒子系统只有在碰撞期间外冲量为零或可忽略时才守恒，内部冲量互相抵消。固定墙对粒子有外冲量，粒子单独动量不守恒。

$$m_Au_A+m_Bu_B=m_Av_A+m_Bv_B;\qquad v_B-v_A=e(u_A-u_B),\quad0\le e\le1.$$

恢复系数式假定 A 从左侧追近 B、正方向向右，且 $u_A>u_B$。碰后分离速率非负。$e=1$ 的理想碰撞动能守恒；$e<1$ 时平动动能可转为其他形式。$e=0$ 只说明紧接碰后速度相同，不代表永久黏合。

## 示范：力脉冲与两粒子 {#demonstration}

**Demonstration (self-written):** A 2 kg particle initially moves at −1 m s⁻¹. Its net force is $F(t)=6t(1-t)$ N for $0\le t\le1$ s. Find its final velocity.

$$J=\int_0^1(6t-6t^2)\,dt=[3t^2-2t^3]_0^1=1\ \mathrm{N\,s};\qquad v=-1+1/2=-0.5\ \mathrm{m\,s^{-1}}.$$

![Positive force pulse F=6t(1−t), with labelled time endpoints and signed area 1 N s; a separate before/after collision diagram shows 2 kg and 1 kg particles and signed velocity arrows.](/alevel/as-further-mathematics/diagrams/impulse.svg)

**Demonstration (self-written):** A (2 kg) has initial velocity 3 m s⁻¹; B (1 kg) has velocity −1 m s⁻¹. They collide on a smooth horizontal line with negligible external impulse and $e=1/2$.

$$2v_A+v_B=5,\qquad v_B-v_A=2\Rightarrow v_A=1,\quad v_B=3\ \mathrm{m\,s^{-1}}.$$

$$J_A=2(1-3)=-4\ \mathrm{N\,s},\quad J_B=1(3-(-1))=4\ \mathrm{N\,s};$$

$$K_{\rm before}=\tfrac12(2)(3^2)+\tfrac12(1)(1^2)=9.5\ \mathrm J,\quad K_{\rm after}=\tfrac12(2)(1^2)+\tfrac12(1)(3^2)=5.5\ \mathrm J.$$

冲量相反使总动量守恒，但有 4 J 离开平动动能；非弹性碰撞不能再把动能守恒当第二个方程。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** A 0.5 kg particle approaches a fixed wall at 4 m s⁻¹. Positive is away from the wall, and $e=0.75$. Find signed velocities and the wall's impulse on the particle.

<details markdown="1"><summary>补步骤核对</summary>

$$u=-4,\quad v=-eu=3\ \mathrm{m\,s^{-1}};\qquad J=0.5(3-(-4))=3.5\ \mathrm{N\,s}.$$

冲量背离墙面；墙与粒子的系统边界不同于粒子单独。

</details>

**Independent task (self-written):** A 1 kg particle approaches a fixed wall with speed u. Positive is away from the wall. The net contact force is $F(t)=12t(1-t)$ N for $0\le t\le1$ s; other impulse is negligible. Assume a conventional restitution model $0\le e\le1$ and nonnegative outward velocity immediately after contact. Find the impulse, express the final signed velocity and e in terms of u, and find the physically permitted range of u. Explain which boundaries correspond to no rebound and an elastic impact.

<details markdown="1"><summary>提示</summary>

初速度为 −u。先积分，再用 $J=v+u$；分离后的速度须满足 $0\le v\le u$。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$J=\int_0^1(12t-12t^2)\,dt=2\ \mathrm{N\,s};\quad v=2-u,\quad e=\frac{2-u}{u}\quad(u>0).$$

$$0\le2-u\le u\Rightarrow1\le u\le2\ \mathrm{m\,s^{-1}}.$$

$u=2$ 时 v 为零、$e=0$，无立即反弹；$u=1$ 时 $v=u$、$e=1$，为弹性碰撞。若要求严格正的反弹速度，须排除 $u=2$。范围同时用了冲量数据与常规碰撞模型，不是力脉冲单独推出。

</details>

## 诊断与再尝试 {#retry}

冲量方向错误常因把速度换成速率；算出 $e>1$ 表示不符合常规模型，不能只因代数解出就接受。

**Retry (self-written):** Two equal 1 kg masses collide on a line with initial velocities 2 and 0 m s⁻¹, negligible external impulse and $e=0$. Find final velocities and kinetic-energy loss. Must they stay attached forever?

<details markdown="1"><summary>再尝试核对</summary>

$$v_A=v_B=1\ \mathrm{m\,s^{-1}},\qquad\Delta K_{\rm loss}=2-1=1\ \mathrm J.$$

紧接碰后速度相等，本身不能推出永久黏合。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.3.
- FM02 June 2024 Q11–12; QP pp.21–23, MS pp.18–20. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/dimensions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route)
