---
layout: subjects
title: Universal Markdown Math & Chemistry Guide
mathjax: true
---

# 📚 通用Markdown数学与化学公式指南

本指南展示了标准Markdown中数学和化学公式的正确写法，适用于GitHub、GitLab、Jekyll等所有支持MathJax的平台。

---

## 🧮 数学公式基础语法

### 行内公式 (Inline Math)
使用单个美元符号包围：`$公式$`

**示例：**
- 质量能量关系：$E = mc^2$
- 二次公式：$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
- 摩尔浓度：$c = \frac{n}{V}$ (mol/L)

### 显示公式 (Display Math)
使用双美元符号包围：`$$公式$$`

**基础数学：**
$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

---

## 🔬 化学公式标准语法

### 化学方程式
使用标准 LaTeX 格式（推荐）或 HTML 标签：

**基础反应（LaTeX）：**
$$\mathrm{2H_2 + O_2 \rightarrow 2H_2O}$$

$$\mathrm{CaCO_3 + 2HCl \rightarrow CaCl_2 + CO_2 + H_2O}$$

**复杂反应（带状态标记）：**
$$\mathrm{N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)}$$

**离子方程式：**
$$\mathrm{Ag^+ + Cl^- \rightarrow AgCl \downarrow}$$

**氧化还原：**
$$\mathrm{Zn + Cu^{2+} \rightarrow Zn^{2+} + Cu}$$

**备选（HTML）：**
Ag<sup>+</sup> + Cl<sup>-</sup> → AgCl↓


---

## 📊 化学计算公式

### 浓度计算
**摩尔浓度公式：**
$$\text{Concentration (mol/dm}^3\text{)} = \frac{\text{number of moles}}{\text{volume of solution (dm}^3\text{)}}$$

**质量浓度：**
$$\text{moles} = \frac{\text{mass (g)}}{\text{molar mass (g/mol)}}$$

**综合公式：**
$$c = \frac{m}{M \times V}$$

其中：
- $c$ = 浓度 (mol/L)
- $m$ = 质量 (g)  
- $M$ = 摩尔质量 (g/mol)
- $V$ = 体积 (L)

### 能量计算
**热量公式：**
$$Q = mc\Delta T$$

**分解：**
- $Q$ = 热量 (J)
- $m$ = 质量 (kg)
- $c$ = 比热容 (J/kg·°C)
- $\Delta T$ = 温度变化 (°C)

**焓变：**
$$\Delta H = \sum \text{(bonds broken)} - \sum \text{(bonds formed)}$$

---

## ⚡ 物理公式

### 基础力学
**牛顿第二定律：**
$$F = ma$$

**动能公式：**
$$E_k = \frac{1}{2}mv^2$$

**重力势能：**
$$E_p = mgh$$

### 电学公式  
**欧姆定律：**
$$V = IR$$

**电功率：**
$$P = VI = I^2R = \frac{V^2}{R}$$

---

## 🎯 最佳实践

### ✅ 推荐写法
```markdown
1. 行内数学：$\text{速度} = \frac{\text{距离}}{\text{时间}}$
2. 化学方程式：$$\mathrm{CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O}$$
3. 文本标记：$\text{单位：mol/L}$
4. 化学式：$\mathrm{H_2SO_4}$, $\mathrm{Ca(OH)_2}$
```

### ❌ 避免的写法
```markdown
1. mhchem 包 \ce{}：已不推荐（兼容性问题）
2. 混合HTML：<sub>2</sub>H<sub>2</sub>O（用 $\mathrm{H_2O}$ 替代）
3. 纯文本化学：H2 + O2 -> H2O（用 $\mathrm{H_2 + O_2 \rightarrow H_2O}$ 替代）
3. 复杂自定义宏 (保持标准兼容性)
```

---

## 🌐 兼容性

此配置兼容：
- ✅ GitHub Markdown (with MathJax extension)
- ✅ GitLab Markdown  
- ✅ Jekyll静态网站
- ✅ Jupyter Notebook
- ✅ Obsidian/Notion (部分)
- ✅ 大多数学术平台

**核心原则：使用标准语法，避免自定义扩展。**