---
title: 数学公式显示测试
layout: subjects
mathjax: true
---

# 数学公式显示效果测试

## 行内公式测试 (使用 `$...$`)

### ✅ 适合行内显示的公式：
- 简单变量：当 $x = 3$ 时
- 简单分数：斜率 $m = \frac{1}{2}$
- 简单函数：$f(x) = x^2$
- 简单指数：$e^x$, $x^n$
- 区间：$x \in [0, 1]$

### ❌ 不适合行内的复杂分数：
以下分数在行内会很难阅读：
- 多项式分数：$\frac{x^2 + 2x + 1}{x^2 - 4x + 3}$ ← 这个太小了
- 三角函数分数：$\frac{\sin x + \cos x}{x^2 - 1}$ ← 这个也很难看清
- 嵌套分数：$\frac{1}{1 + \frac{1}{x}}$ ← 几乎看不清

## 显示公式测试 (使用 `$$...$$`)

### ✅ 复杂分数应该用显示模式：

多项式分数：
$$\frac{x^2 + 2x + 1}{x^2 - 4x + 3}$$

三角函数分数：
$$\frac{\sin x + \cos x}{x^2 - 1}$$

嵌套分数：
$$\frac{1}{1 + \frac{1}{x}}$$

商规则公式：
$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

复杂计算：
$$V = \int_1^4 \pi (\sqrt{x})^2 dx = \pi \int_1^4 x dx = \pi \left[\frac{1}{2}x^2\right]_1^4 = \frac{15\pi}{2}$$

## 对比效果

### 同一个分数的不同显示方式：

行内：函数 $f(x) = \frac{x^2 + 2x + 1}{x^2 - 4x + 3}$ 的导数...

显示：函数
$$f(x) = \frac{x^2 + 2x + 1}{x^2 - 4x + 3}$$
的导数...

明显可以看出，复杂分数用显示模式更清晰！

## 表格中的公式处理

| 规则 | 公式 | 说明 |
|------|------|------|
| 乘积规则 | $(uv)' = u'v + uv'$ | 简化表示 |
| 商规则 | $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ | 使用 \left( \right) |
| 链式规则 | $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ | 保持清晰 |

## 分段函数

$$f(x) = \begin{cases} 
x^2 & \text{if } x \geq 0 \\
-x^2 & \text{if } x < 0 
\end{cases}$$

## 化学公式测试

使用标准 LaTeX 格式（推荐）：
- 简单化学式：$\mathrm{H_2SO_4}$
- 化学反应：$$\mathrm{2H_2 + O_2 \rightarrow 2H_2O}$$
- 平衡反应：$$\mathrm{N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)}$$