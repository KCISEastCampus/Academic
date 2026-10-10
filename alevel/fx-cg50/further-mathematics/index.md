---
layout: subjects
title: fx-CG50 Further Mathematics 操作专题
description: 中文版 fx-CG50 的复数根、矩阵特征值与特征向量、线面角和极坐标面积操作。
lang: zh-CN
author: Eric Shi
study_page: true
toc_headings: h2, h3
permalink: /alevel/fx-cg50/further-mathematics/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}">

<div class="cg50-guide" markdown="1">

**编写与组织：Eric Shi · GPT 辅助整理、操作核对与网页制作**

面向 OxfordAQA International A-level Further Mathematics（9665），先学习 FP2 中四类常用操作。例题来自 FM03 真题；英文题意为改写，公式与答卷要求已对照官方 Mark Scheme。计算器用于检查结果，推导和精确答案仍写在答题纸上。

[复数](#fm-complex) · [矩阵](#fm-matrices) · [线面角](#fm-vectors) · [极坐标](#fm-polar) · [参考资料](#fm-sources)

[返回基础使用指南]({{ '/alevel/fx-cg50/' | relative_url }})。本页沿用其中的[按键读法]({{ '/alevel/fx-cg50/' | relative_url }}#reading-keys)、[输入模板]({{ '/alevel/fx-cg50/' | relative_url }}#chapter-3)和[定积分]({{ '/alevel/fx-cg50/' | relative_url }}#task-23)，不重复完整入门教程。

更新于 2026 年 10 月 10 日。本页操作已在 **03.81.0202 中文固件**逐项核对，尚待同版本实机抽查。考试模式须按老师要求设置，不由本页推定学校使用哪一种模式。

## 开始前：角度与复数设置 {#fm-settings}

进入 **计算·矩阵**，按 <code>SHIFT → MENU</code> 打开设置，用方向键按行名选择：

| 项目 | 本页采用的设置 | 注意 |
| --- | --- | --- |
| 输入/输出 | 数学模式 | 指数、根号和积分模板要看光标位置。 |
| 角度 | 弧度，F2 | 复数辐角、极坐标和微积分使用 Rad。 |
| 复数模式 | a+bi，F2 | 允许复数结果；单次表达式仍可转换成极坐标形式。 |
| 函数类型 | Y=，F1 | 此时 <code>X,θ,T</code> 键输入积分所需的变量 X。画极坐标图后需再检查。 |

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-complex-settings.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="角度为弧度，复数模式为 a+bi"><figcaption>确认“角度”和“复数模式”两行，再按 EXIT 返回。</figcaption></figure>
</div>

这里的 <code>sin</code>、<code>cos</code>、<code>tan</code> 键不会自动补左括号；复合自变量要手动输入，例如 <code>cos → ( → … → )</code>。命令 <code>DotP(</code>、<code>Norm(</code> 自带左括号，不能多加或少加。一次计算完成后直接输入下一式。

## 复数：从一个主值到全部根 {#fm-complex}

例题：[FM03 June 2024 Q12，原题 pp22–23](https://drive.google.com/file/d/12GEUUvTgOSAYeUJMGMhFjf4OSWRX7rxK/view)，[官方 MS p18](https://drive.google.com/file/d/1aFtCI8SMU-bVJd5j_BB4wBlj-QIijRzd/view)。题意改写：**Find the fifth roots of $4-4i$ and compare their positions.**

### 求模、辐角与形式转换 {#fm-task-03}

先在纸上写 $w=4-4i$，明确辐角单位是弧度。

1. 在 **计算·矩阵** 按 <code>OPTN → F3（复数）</code>。此菜单中 F1 输入虚数单位 $i$，F2 为 <code>Abs</code>，F3 为 <code>Arg</code>。
2. 求模：<code>F2（Abs）→ ( → 4 → − → 4 → F1（i）→ ) → EXE</code>，得到 $4\sqrt2$。
3. 求辐角：<code>F3（Arg）→ ( → 4 → − → 4 → F1（i）→ ) → EXE</code>，得到 $-\pi/4$。
4. 转换单个结果时，先输入 $(4-4i)$，再在复数菜单按 <code>F6 → F3（▸r∠θ）→ EXE</code>。F6 下一页的 F4（▸a+bi）可转换回直角坐标形式。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-abs-arg.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="4减4i的模为4根号2，辐角为负π除以4"><figcaption>模与辐角分别计算；负辐角不代表计算出错。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-complex-polar.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="4减4i转换为模4根号2、辐角负π除以4的极坐标形式"><figcaption>屏幕的 $r\angle\theta$ 对应答卷上的 $re^{i\theta}$。</figcaption></figure>
</div>

若题目要求 $0\le\theta<2\pi$，本例的负辐角应加 $2\pi$，写成 $7\pi/4$。不要把不同范围中的等价角误当成不同的复数。

### 用数值表核对全部五次根 {#fm-task-04}

纸上先写出全部根，而不是只输入一个五次方根：

$$z_k=\sqrt2\,e^{i\theta_k},\qquad
\theta_k=-\frac{\pi}{20}+\frac{2k\pi}{5},\qquad k=0,1,2,3,4.$$

直接计算 $(4-4i)^{1/5}$ 只显示一个主值。本例约为 $1.396802247-0.2212317421i$；其余四个根仍需用角度公式生成。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-principal-root.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="4减4i的一次五次方根运算只显示一个复数主值"><figcaption>这个结果是一枚根；不是“全部五个根”的答案。</figcaption></figure>
</div>

进入 **表格**，采用 Y= 类型。用表中的 $X$ 代表整数 $k$，在两个可用的 Y 行分别输入：

$$Y_1=\sqrt2\cos\left(-\frac{\pi}{20}+\frac{2X\pi}{5}\right),$$
$$Y_2=\sqrt2\sin\left(-\frac{\pi}{20}+\frac{2X\pi}{5}\right).$$

1. 输入 $\sqrt2$ 后按右方向键离开根号，再输入乘号与三角函数。两处三角函数的左括号均手动输入。
2. 选中这两个函数，取消其他暂时不用的函数；图形与表格共用函数列表。
3. 按 <code>F5（设定）</code> 打开“表格设置”，开始值 $0$、终止值 $4$、步长 $1$。返回后按 <code>F6（表）</code>。
4. 第一列 X 是 $k$，Y1 是实部，Y2 是虚部。向下查看 $k=4$；选中数值单元格可在屏幕底部读完整精度。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-root-table.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="k从0至3的复数根实部与虚部数值表"><figcaption>逐行配对实部、虚部；不要把 Y1 和 Y2 当成两组不同的根。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-root-table-last.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="k等于4的根实部完整值为0.2212317421"><figcaption>第五枚根对应 $k=4$，其正实部约为 $0.2212317421$。</figcaption></figure>
</div>

将角度换到主值范围后：

| $k$ | 辐角 | 实部约值 | 虚部约值 |
| --- | --- | --- | --- |
| 0 | $-\pi/20$ | 1.396802 | −0.221232 |
| 1 | $7\pi/20$ | 0.642040 | 1.260074 |
| 2 | $3\pi/4$ | −1 | 1 |
| 3 | $-17\pi/20$ | −1.260074 | −0.642040 |
| 4 | $-9\pi/20$ | 0.221232 | −1.396802 |

答卷仍保留 $\sqrt2e^{i\theta_k}$、$k$ 的五个取值及角度范围。表格中的小数只用于检查，不能替代精确指数形式。

### 筛选根并检查乘积 {#fm-task-05}

距虚轴的距离是 $|\operatorname{Re}z|$。比较上表，$k=4$ 的绝对实部最小，因此最近虚轴的根为

$$\sqrt2e^{-9\pi i/20}.$$

<figure class="cg50-keyboard"><img src="{{ '/assets/img/fx-cg50/fm/argand-roots.svg' | relative_url }}" width="440" height="440" loading="lazy" data-lazy-ignore alt="五个根在半径根号2的圆上，标记k从0至4；k等于4最接近虚轴"><figcaption>五个根等角间隔排列；距离虚轴用绝对实部判断。</figcaption></figure>

实轴上方的两枚根对应 $k=1,2$，模相乘、辐角相加：

$$z_1z_2=2e^{i(7\pi/20+3\pi/4)}
=2e^{11\pi i/10}=2e^{-9\pi i/10}.$$

在计算器中，<code>SHIFT → X,θ,T</code> 输入极坐标复数的 $\angle$。分别把 $\sqrt2\angle(7\pi/20)$ 和 $\sqrt2\angle(3\pi/4)$ 放在括号内相乘，末尾添加复数菜单的 <code>▸r∠θ</code> 再按 EXE。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-roots-product.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="实轴上方两枚根的乘积为模2、辐角负9π除以10"><figcaption>乘积的模为 $2$，主值辐角为 $-9\pi/10$。</figcaption></figure>
</div>

只凭“看起来最近”不能说明筛选理由；写清实部、虚部或辐角对应的几何条件。

## 矩阵：输入、特征值与特征向量 {#fm-matrices}

例题：[FM03 June 2024 Q11(b)，原题 pp20–21](https://drive.google.com/file/d/12GEUUvTgOSAYeUJMGMhFjf4OSWRX7rxK/view)，[官方 MS pp16–17](https://drive.google.com/file/d/1aFtCI8SMU-bVJd5j_BB4wBlj-QIijRzd/view)。题意改写：**After proving $c=5$, find the eigenvalues and an eigenvector for the least eigenvalue.**

先完成题目中 $c=5$ 的参数推导，再输入数值矩阵：

$$M=\begin{pmatrix}1&0&2\\1&5&-11\\2&-1&1\end{pmatrix}.$$

### 输入矩阵、求行列式与逆 {#fm-task-08}

1. 进入 **计算·矩阵**，按 <code>F3（▸矩阵）</code> 打开编辑器，选择未使用的 Mat A。本例用 A；已有数据时换空的存储区。
2. 按 <code>F3（维数）</code>，输入行数 $3$、EXE，列数 $3$、EXE；**再按一次 EXE** 进入单元格。
3. 按行输入 $1,0,2;\ 1,5,-11;\ 2,-1,1$，每个数后按 EXE。负数用独立的 <code>(−)</code> 键。
4. 按 EXIT 返回矩阵列表，再按 EXIT 返回计算页。按 <code>OPTN → F2（矩阵）</code>；F1 插入 <code>Mat</code>，F3 插入 <code>Det</code>。字母 A 用 <code>ALPHA → X,θ,T</code> 输入。
5. 执行 <code>Det Mat A</code>，得到 $-28$。本例行列式非零，可以计算逆。
6. 输入 <code>Mat A → ^ → (−) → 1 → 右方向键 → EXE</code>，计算 $M^{-1}$；右方向键用于离开指数区域。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-matrix-M.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="Mat A中的三行数据为1 0 2；1 5负11；2负1 1"><figcaption>先核对矩阵维数与每一个负号，再进行运算。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-matrix-det.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="矩阵M的行列式为负28"><figcaption>$\det M=-28$；上方列向量是另一次乘法的结果。</figcaption></figure>
</div>

可在纸上或计算器中用 $MM^{-1}=I$ 检查逆矩阵。行列式为零时没有逆；但“没有逆”不等于所有相关线性方程组都无解，还可能有自由变量。

### 通过特征方程求特征值 {#fm-task-10}

先在纸上建立 $\det(\lambda I-M)=0$。本例在代入 $c=5$ 后为

$$\lambda^3-7\lambda^2-4\lambda+28=0.$$

1. 从主菜单进入 **方程**；若保留上一道结果，按 EXIT 直到“选择类型”页。
2. 按 <code>F2（多项式）→ F2（3）</code> 选择三次方程。
3. 按 $a,b,c,d$ 顺序输入 $1,-7,-4,28$，每项后按 EXE；按 <code>F1（求解）</code>。
4. 结果显示 $7,2,-2$。屏幕顺序不是从小到大；题目要求最小特征值时应选 $-2$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-eigen-coefficients.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="特征三次方程系数为1负7负4和28"><figcaption>这里求的是已经推导出的特征方程。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-eigenvalues.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="三次方程根按屏幕顺序为7 2负2"><figcaption>特征值为 $-2,2,7$；最小值不是屏幕第一行。</figcaption></figure>
</div>

多项式求根只检查数值方程，不能代替原题“证明 $c=5$”的参数过程。

### 核对非零特征向量 {#fm-task-11}

取最小特征值 $\lambda=-2$。先写 $(M+2I)v=0$，得到

$$3x+2z=0,\qquad x+7y-11z=0,\qquad 2x-y+3z=0.$$

由消元得 $z=-3x/2$、$y=-5x/2$，可取

$$v=\begin{pmatrix}2\\-5\\-3\end{pmatrix}.$$

把 Mat A 保留为 $M$，在一个空的矩阵存储区 Mat B 建立 $3\times1$ 列矩阵，按行输入 $2,-5,-3$。回计算页，在矩阵菜单输入 <code>Mat A × Mat B → EXE</code>；字母 B 用 <code>ALPHA → log</code>。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-matrix-product.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="Mat A乘Mat B得到列向量负4 10 6"><figcaption>$Mv=(-4,10,6)^T=-2v$，与特征值对应。</figcaption></figure>
</div>

答卷写成 $v=\beta(2,-5,-3)^T$，其中 $\beta\ne0$。零向量不是特征向量；计算器乘法是最后的核对，不是消元过程的替代。

## 三维向量：求直线与平面的锐角 {#fm-vectors}

例题：[FM03 June 2024 Q10(a)，原题 p16](https://drive.google.com/file/d/12GEUUvTgOSAYeUJMGMhFjf4OSWRX7rxK/view)，[官方 MS p14](https://drive.google.com/file/d/1aFtCI8SMU-bVJd5j_BB4wBlj-QIijRzd/view)。题意改写：**Find the acute line–plane angle, to the nearest $0.1^\circ$.**

### 点积、向量模与线面角 {#fm-task-15}

从原题先识别直线的方向向量和面的法向量：

$$d=\begin{pmatrix}2\\-1\\4\end{pmatrix},\qquad
n=\begin{pmatrix}1\\1\\3\end{pmatrix}.$$

1. 在 **计算·矩阵** 按 <code>F3（▸矩阵）→ F6（M⇔V）</code> 打开向量编辑器。选择空的 Vct A、Vct B，均建立 $3\times1$，分别输入 $d$、$n$。维数输入后的确认与矩阵相同。
2. 返回计算页，按 <code>OPTN → F2（矩阵）→ F6 → F6</code> 进入向量命令页。F1 为 Vct，F2 为 DotP(。
3. 输入 <code>DotP(Vct A,Vct B)</code>，得到 $13$。
4. Norm( 在向量命令页的 <code>F6 → F1（Norm(）</code>。插入命令后，**重新按 OPTN → F2 → F6 → F6 → F1（Vct）**，再输入 A、右括号，得到 $\sqrt{21}$；同样求 Vct B 的模，得到 $\sqrt{11}$。
5. 所求线面锐角满足

$$\sin\alpha=\frac{|d\cdot n|}{\|d\|\|n\|}
=\frac{13}{\sqrt{231}}.$$

在 Rad 设置下，输入

$$\sin^{-1}\left(\frac{13}{\sqrt{231}}\right)\times\frac{180}{\pi}.$$

逐键可按 <code>SHIFT → sin → ( → 13 → ÷ → SHIFT → x² → 231 → 右方向键 → ) → × → 180 → ÷ → SHIFT → ×10ˣ（π）→ EXE</code>，得到 $58.79700755^\circ$，按题意写 $58.8^\circ$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-vector-norms.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="点积为13，方向向量的模为根号21，法向量的模为根号11"><figcaption>点积与两个模分别核对，注意函数中是 Vct A、Vct B。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-line-plane-angle.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="反正弦13除以根号231并转为度，得到58.79700755"><figcaption>Rad 下的反正弦先得到弧度；乘 $180/\pi$ 后才是度数。</figcaption></figure>
</div>

直接用 Angle(d,n) 得到的是方向向量与法向量的夹角，不是所求线面角。答卷说明这两个向量的身份，写出点积与模的关系，再取线面锐角。

## 极坐标：限定图像范围，再核对面积 {#fm-polar}

例题：[FM03 January 2025 Q7，原题 p12](https://drive.google.com/file/d/1aOiIyWqQHlGQuiJQ8sQpFw9_k4dNWKaz/view)，[官方 MS p11](https://drive.google.com/file/d/1eN1K1jPKe-X80JGmxR_sgNNbC9wySygy/view)。题意改写：**Find the exact area between the curve and the rays $\theta=0$ and $\theta=\pi/6$.**

$$r=\sec^2\theta\sqrt{2(1+\tan\theta)},\qquad
-\frac{\pi}{4}\le\theta<\frac{\pi}{2}.$$

这里根号中的 **2 不能漏掉**。本题面积区域只用 $0\le\theta\le\pi/6$，不用整条曲线的定义域积分。

### 输入极坐标函数并限定绘图区间 {#fm-task-17}

1. 进入 **图形**，在空的函数行按 <code>F3（类型）→ F2（r=）</code>。本例沿用表格中的 Y1、Y2，使用第三行 r3，并取消其他函数的绘图选择。
2. 计算器没有独立 sec 键，用 $1/\cos\theta$ 改写，输入

$$r=\frac{\sqrt{2(1+\tan\theta)}}{(\cos\theta)^2}.$$

输入根号中的整个 $2(1+\tan\theta)$ 后，用右方向键离开根号，再输入除号和分母。此时 <code>X,θ,T</code> 键自动输入 $\theta$。

3. 按 <code>SHIFT → F3（V-Window）</code>，按行名设置：

| 参数 | 值 |
| --- | --- |
| X 最小值 / 最大值 / 刻度 | $0,\ 2.5,\ 0.5$ |
| Y 最小值 / 最大值 / 刻度 | $0,\ 1.5,\ 0.5$ |
| Tθ 最小值 | $0$ |
| Tθ 最大值 | $\pi/6$ |
| Tθ 步长 | $\pi/180$ |

X 刻度下面的“点距”行跳过。返回后按 <code>F6（绘图）</code>。这张图只画面积所需的弧段；原题的 $\pi/2$ 不包含在定义域内，不能直接把它设为求值端点。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-polar-function.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="r3为根号2乘1加tanθ，再除以cosθ的平方"><figcaption>根号包含因子 $2$ 与整个 $1+\tan\theta$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-polar-range.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="极坐标绘图的Tθ最小值为0，最大值为π除以6，步长为π除以180"><figcaption>此处的 Tθ 范围控制曲线参数，X、Y 范围只控制画面窗口。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-polar-arc.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="θ从0至π除以6的极坐标弧段"><figcaption>计算器显示边界弧段；面积还包括从极点到两端点的射线。</figcaption></figure>
</div>

<figure class="cg50-keyboard"><img src="{{ '/assets/img/fx-cg50/fm/polar-region.svg' | relative_url }}" width="480" height="340" loading="lazy" data-lazy-ignore alt="极点O、θ等于0的端点A、θ等于π除以6的端点B及两射线和弧段围成的阴影区域"><figcaption>阴影是所求区域，边界由 OA、OB 与弧 AB 构成。</figcaption></figure>

### 数值积分检查精确面积 {#fm-task-20}

先在纸上写出

$$A=\frac12\int_0^{\pi/6}r^2\,d\theta
=\int_0^{\pi/6}(1+\tan\theta)\sec^4\theta\,d\theta.$$

1. 回到 **计算·矩阵**，打开 <code>SHIFT → MENU</code> 设置，将“函数类型”改回 **Y=（F1）**。确认输入变量是 $X$，不是刚画图用的 $\theta$。
2. 按 <code>OPTN → F4（计算）→ F4（∫dx）</code> 调出积分模板，输入被积函数 $(1+\tan X)/(\cos X)^4$。
3. 输入指数 $4$ 后先按右方向键离开指数，再按右方向键到下限格子输入 $0$；继续到上限格子输入 $\pi/6$。
4. 核对变量与上下限，按 EXE，得到 $0.8359447435$。再输入 $(21+40\sqrt3)/108$，检查精确式对应同一数值。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/fm/fm-polar-area-check.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="以X为积分变量的面积为0.8359447435，下行精确式为21加40根号3除以108"><figcaption>上行是数值积分结果，下行是手算所得的精确式。</figcaption></figure>
</div>

<details markdown="1">
<summary>答卷保留的解析积分步骤</summary>

令 $u=\tan\theta$，则 $du=\sec^2\theta\,d\theta$，上下限为 $0$ 和 $1/\sqrt3$：

$$A=\int_0^{1/\sqrt3}(1+u)(1+u^2)\,du.$$
$$A=\left[u+\frac{u^2}{2}+\frac{u^3}{3}+\frac{u^4}{4}\right]_0^{1/\sqrt3}
=\frac{21+40\sqrt3}{108}.$$

这给出原题所需的整数 $m=21$、$n=40$。官方 MS 对正确积分式、积分方法及精确化简分别给分；不能只写一个计算器小数。

</details>

若积分模板中误用 $\theta$，计算器可能使用它保存的数值，把被积函数当成常数。本例画图后误用 $\theta$ 会得到约 $1.468264302$；检查屏幕里的积分变量是必要步骤。

## 参考资料与后续学习 {#fm-sources}

- [OxfordAQA Further Mathematics 9665 Specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)：复数 FP2.2、极坐标 FP2.3、向量 FP2.12、矩阵 FP2.13–14。
- [Casio fx-CG50 中文软件手册 v3.70](https://www.casio.com/content/dam/casio/global/support/manuals/calculators/pdf/004-zh-cn/f/fx-CG50_Soft_v370_CN.pdf)：复数 2-35 起、矩阵 2-42 起、向量 2-59 起、绘图第 5 章。最终步骤以本页核对的 03.81.0202 中文菜单为准。
- 真题及官方 MS 链接已放在对应主题旁。原题版权归相应考试局；本页使用简短题意改写，不复制整套试卷。Drive 链接沿用原有共享权限。

本页先完成复数、矩阵、线面角和极坐标面积八项重点操作。数值方法、双曲函数、反常积分、微分方程及 Further Mechanics 将继续补充；这些内容尚未在本页完成操作核对。

</div>
