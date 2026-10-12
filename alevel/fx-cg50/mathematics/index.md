---
layout: subjects
title: fx-CG50 普数考试应用：MA01–MA05
description: 按 OxfordAQA 普数考试单元查找计算器应用，连接 2025 年 1 月真题、输入方法与答卷过程。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
cg50_applications: true
toc_headings: h2, h3
permalink: /alevel/fx-cg50/mathematics/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

本路线适用于 **OxfordAQA Mathematics 9660**，即普数 MA01–MA05。先学会[进阶通用操作]({{ '/alevel/fx-cg50/advanced/' | relative_url }})，再按正在学的考试单元选读。每个应用都先写模型，随后输入、核验结果，并说明答卷上须保留的过程。

例题限定为 **2025 年 1 月**原卷及配套 Final Mark Scheme。英文题意均标注为改写；补齐大纲缺口的题目标为“自拟操作练习”。这是计算器应用指南，不是整套试卷的完整解答。

## 选择考试单元 {#choose-unit}

| 单元 | 本页应用 | 先掌握的通用操作 |
| --- | --- | --- |
| [MA01 · P1]({{ '/alevel/fx-cg50/mathematics/ma01/' | relative_url }}) | 精确距离、数列、二项展开、交点与面积、梯形法 | 联立、二次方程、组合数、定积分、表格 |
| [MA02 · PSM1]({{ '/alevel/fx-cg50/mathematics/ma02/' | relative_url }}) | 三角全解、二项尾概率、离散期望、连接粒子、速度与距离 | 角度、分布、统计频数、积分 |
| [MA03 · P2]({{ '/alevel/fx-cg50/mathematics/ma03/' | relative_url }}) | 中矩形、指定迭代、Simpson、向量、旋转体、参数曲线 | 表格、Ans、导数、积分 |
| [MA04 · S2]({{ '/alevel/fx-cg50/mathematics/ma04/' | relative_url }}) | 泊松与指数、连续密度、临界区、z/t 检验、样本量 | 左右尾、分位数、样本标准差 |
| [MA05 · M2]({{ '/alevel/fx-cg50/mathematics/ma05/' | relative_url }}) | 功率、摩擦、圆周、圆锥摆、能量、抛射、力矩、质心、动量与向量运动 | 角度、二次方程、存储变量、模长 |

AS 混合卷 MA02 同时包含纯数、统计和力学。MA05 是普数 M2；[Further Mechanics]({{ '/alevel/fx-cg50/further-mechanics/' | relative_url }})另含高数扩展，不能用斜面抛射或离面模型替代 MA05 的普通抛射和匀速圆周运动。

## 解题时怎样使用 {#workflow}

1. **先判断方法。** 写出方程、事件、积分式或受力图。遇到 show that、exact、justify 或指定方法，先确认答卷要求。
2. **回顾通用教程。** 本路线链接到已维护的按键教程，不要求每道题重新学习菜单。
3. **按未舍入数据计算。** 用 `Ans` 或存储变量继续计算；不要把显示的小数先抄回去。
4. **核对结果。** 检查全解、范围、符号、单位、概率尾部和精度，再完成题目所需的文字结论。

按键中的 `→` 表示依次按；实体存储箭头键另称“存储键”。`sin`、`cos` 等键只输入函数名，复合参数的左括号须手动输入。一次计算结束后，直接在下一输入行输入新式。

需要保存未舍入结果时，在计算·矩阵输入式后按 **存储键 → ALPHA → 字母所在键 → EXE**。字母取键上红色标记。例如 A 对应 `X,θ,T` 键，B 对应 `log` 键，C 对应 `ln` 键。之后用 `ALPHA` 加相应键调用。不要把步骤箭头当作存储键。

## 数值方法与检验的边界 {#answer-boundaries}

- 指定中矩形、梯形或 Simpson 法时，直接调用定积分只能检查量级，不能替代给定方法。
- 指定递推公式时，要记录每一次迭代；方程求解器给出的最终根不能代替迭代值。
- exact answer 保留分数、根式或含 $\pi$ 的表达式；数值近似只作检查。
- 假设检验先写 $H_0,H_1$ 和显著性水平，再比较临界值或尾概率。结论放回题目情境。
- 力学先确定正方向、受力、约束和初始条件；计算器不会自动判断这些模型。

## 来源与核验状态 {#sources}

课程范围参考 [OxfordAQA Mathematics 9660 Specification，v5.2](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf)。各单元页列出 2025 年 1 月 QP 与对应 MS，文件随网站保存，不依赖个人 Drive 权限。

本轮选用的题意、公式和答卷要求已对照对应 MS，代表数值另行复算。复用的基础菜单已有中文固件核对记录；新增组合数、Ans 两次迭代与泊松有限求和已在 03.81.0202 中文固件执行并配图，本轮例题尚未逐项在中文版实机验收。t 检验用统计结果和纸上统计表完成。

编写与组织：**Eric Shi**；GPT 辅助整理、核算与网页制作。[完整署名]({{ '/alevel/fx-cg50/' | relative_url }}#credits)。

</div>
