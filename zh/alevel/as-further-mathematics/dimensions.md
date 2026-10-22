---
title: "量纲、单位与模型局限"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/dimensions/
permalink: /zh/alevel/as-further-mathematics/dimensions/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · M2 · FM1.2

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 量纲一致能证明什么？ {#model}

**开始：**由速度变化除以时间推加速度单位。**目标：**求量纲与单位，在明确假设下推幂指数，并说明核验的局限。M、L、T 表示质量、长度、时间的量纲，不是具体单位。同一加法中的各项必须量纲相同。

| Quantity | Definition | Dimensions | SI unit |
| --- | --- | --- | --- |
| Velocity | displacement/time | $LT^{-1}$ | m s⁻¹ |
| Acceleration | velocity/time | $LT^{-2}$ | m s⁻² |
| Force | mass × acceleration | $MLT^{-2}$ | N |
| Momentum / impulse | mass × velocity / force × time | $MLT^{-1}$ | kg m s⁻¹ / N s |
| Energy | force × distance | $ML^2T^{-2}$ | J |
| Power | energy/time | $ML^2T^{-3}$ | W |
| Pressure | force/area | $ML^{-1}T^{-2}$ | Pa |
| Density | mass/volume | $ML^{-3}$ | kg m⁻³ |

每行来自定义，而不是单位名称的拼写。未知系数可以有量纲；无量纲常数、角度和比值也能影响模型，但不会出现在 M、L、T 幂平衡中。

## 示范：压强与周期模型 {#demonstration}

$$[\rho gh]=(ML^{-3})(LT^{-2})(L)=ML^{-1}T^{-2}=[P].$$

这核对了 $P=\rho gh$ 的量纲，却没有证明静水假设或确定系数。$2\rho gh$ 量纲也相同。

**Demonstration (self-written):** Assume a pendulum period τ has form $K\ell^ag^bm^c$, with dimensionless K and no other dimensional variables. Find the powers.

$$T=L^a(LT^{-2})^bM^c\Rightarrow c=0,\ a+b=0,\ -2b=1.$$

$$a=1/2,\quad b=-1/2,\quad c=0\Rightarrow\tau=K\sqrt{\ell/g}.$$

结果依赖所列变量与幂乘积假设。K 可能依赖无量纲振幅；理想小振幅摆模型才能进一步确定 K，量纲法本身不能。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** If a gravitational force is modelled as $F=Gm_1m_2/r^2$, derive dimensions and SI units of G.

<details markdown="1"><summary>补步骤核对</summary>

$$[G]=\frac{[F]L^2}{M^2}=M^{-1}L^3T^{-2};\qquad\mathrm{m^3\,kg^{-1}\,s^{-2}}.$$

</details>

**Independent task (self-written):** In a linear resistance model $F=kv$, find the dimensions and SI units of k. A competing model is $F=C\rho A v^2$, where A is area and C is dimensionless. Check it, predict the force factor when v doubles with other variables fixed, and explain why the check cannot select the true model. Is $F=kv+1$ dimensionally valid if 1 is a pure number?

<details markdown="1"><summary>提示</summary>

除量纲求 k，乘量纲核对另一模型；把代数上的倍率与模型适用性的证据分开。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$[k]=(MLT^{-2})/(LT^{-1})=MT^{-1},\qquad\mathrm{kg\,s^{-1}}.$$

$$[C\rho Av^2]=(ML^{-3})(L^2)(L^2T^{-2})=MLT^{-2}.$$

另一模型速度加倍时力变为 4 倍，线性模型则为 2 倍。不同条件下两者都可量纲一致，须由观察及模型假设判断。纯数 1 不能与力相加。

</details>

## 诊断与再尝试 {#retry}

单位正确不能证明定律；指数方程无解时，应查量纲与变量是否足以提供所需维度。

**Retry (self-written):** A timescale is assumed to depend only on a length ℓ and a speed v through $K\ell^av^b$. Find a,b and say whether K is determined.

<details markdown="1"><summary>再尝试核对</summary>

$$T=L^{a+b}T^{-b}\Rightarrow b=-1,\ a=1;\qquad\tau=K\ell/v.$$

量纲法不能确定 K。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.2.
- FM02 June 2024 Q10; QP p.19, MS p.17. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/relative-motion/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/impulse-and-collisions/)
