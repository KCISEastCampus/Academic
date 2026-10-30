---
title: "功、能量与功率"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/work-energy-power/
permalink: /zh/alevel/as-physics/work-energy-power/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">什么能量跨过了系统边界？</h2>

有力不一定有功：匀速水平提着包走，向上的支持力与位移垂直。功描述力沿位移转移的能量。你将判断哪些力传能，在变力情形下读取面积，并核对能量收支。先修：[受力](/zh/alevel/as-physics/newtons-laws/)、[动量](/zh/alevel/as-physics/momentum-and-impulse/)与图像面积。

<h2 id="work">把力和位移的方向放在一起</h2>

恒力做功 $W=Fs\cos\theta$，角度是力与位移之间的夹角。沿位移的分量做正功，反向分量做负功。分量变化时，功是沿路径的力—位移有符号面积，不是力—时间面积。单位焦耳满足 $1\,\mathrm{J}=1\,\mathrm{N\,m}$。

动能 $E_k=\tfrac12mv^2$ 的变化等于所有力的总功。水平运动中重力和支持力不做功，但二者可以仍然存在。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:energy-worked -->
A 2.0 kg trolley starts from rest on a horizontal track. A constant 10 N pull acts at 60° above the direction of travel over 4.0 m. Horizontal resistance is 1.0 N. The trolley stays on the track. Use g = 10 m/s². Find the work by the pull, work by resistance and final speed.
<!-- /task:energy-worked -->

拉力水平分量为 $10\cos60^\circ=5.0\,\mathrm{N}$，做功 20 J；阻力做功 −4.0 J。所以 $\Delta E_k=16\,\mathrm{J}$，$v=\sqrt{2(16)/2}=4.0\,\mathrm{m\,s^{-1}}$。拉力竖直分量 8.66 N，小于重力 20 N，仍可由正的支持力维持接触。能量与受力模型相容。
</div>

<h2 id="budget">先选哪些能量留在系统里面</h2>

近地面把物体和地球一起作为系统，有 $\Delta E_p=mg\Delta h$；高度零点可自选。物体下降时势能降低，动能可增加。符合胡克定律的弹簧，相对原长储能 $\tfrac12kx^2$。若加载不符合胡克定律，要用力—伸长图下面积，不能把任意曲线都当三角形。

孤立系统总能量守恒。摩擦让机械能转为内能，不是毁掉能量。可把传能作为外力做功，也可把相关储能纳入系统，但不能把同一次重力作用既算作外界输入功，又算作同一势能下降。

<h2 id="transfer">换一种表征</h2>

<div class="lesson-check" markdown="1">
<!-- task:energy-transfer -->
A 1.0 kg trolley starts at 2.0 m/s on a horizontal track. Its forward applied force rises linearly from 0 to 8.0 N over 3.0 m; a steady 1.0 N resistance acts backwards. Find its final speed. Explain why neither the peak force nor the impulse formula supplies the applied work here.
<!-- /task:energy-transfer -->
<details markdown="1"><summary>提示</summary>
先求外加力—位移面积，再扣除阻力做功。
</details>
<details markdown="1"><summary>解答与修复</summary>
外加力做功 $\tfrac12(3)(8)=12\,\mathrm{J}$，阻力做功 −3 J。初动能 2 J，末动能 11 J，所以 $v=\sqrt{22}=4.69\,\mathrm{m\,s^{-1}}$。峰值并未沿整段位移保持。冲量需要时间、对应动量变化；本题横轴是位移。若混淆面积，先写出两图横纵轴，再做重试。
</details>
</div>

<h2 id="power-check">有用能量转移得多快？</h2>

平均功率是能量变化除以对应时段；瞬时机械功率 $P=Fv\cos\theta$，同向时为 $Fv$。功率变化时，能量为功率—时间面积。效率是同一过程中有用输出除以总输入，可以一致地用能量比或功率比。$1\,\mathrm{kW\,h}=1000\times3600=3.6\times10^6\,\mathrm{J}$，是能量，不是功率。

<div class="lesson-check" markdown="1">
<!-- task:energy-power -->
A motor raises a 20 kg load vertically at constant speed 0.50 m/s. Use g = 10 m/s². Electrical input is 160 W. Find useful power and efficiency. A different machine delivers 120 W usefully for 2.0 h: express its useful output energy in J and kW h.
<!-- /task:energy-power -->
<details markdown="1"><summary>提示</summary>
匀速提升时力与重力平衡，再用有用输出除以总输入。
</details>
<details markdown="1"><summary>解答与修复</summary>
提升有用功率 $mgv=100\,\mathrm{W}$，效率 $100/160=0.625=62.5\%$。另一机器输出 $120(7200)=864000\,\mathrm{J}=0.240\,\mathrm{kW\,h}$。效率超过 100% 应检查边界、时段或计算；若把 kW h 当功率，展开单位换算重做。
</details>
</div>

<h2 id="retry">在新的停止过程中连接储能</h2>

<div class="lesson-check" markdown="1">
<!-- task:energy-retry -->
A 0.50 kg cart is released from rest 2.0 m above a horizontal stopping section. It loses 2.0 J to resistance before reaching that section, then stops against a spring of stiffness 100 N/m. During spring compression the track is horizontal and resistance is negligible. Use g = 10 m/s². Find the entry speed and maximum compression. Explain where the initial energy ends up.
<!-- /task:energy-retry -->
<details markdown="1"><summary>提示</summary>
代数前先写初始储能、不可逆转移与最终储能。
</details>
<details markdown="1"><summary>解答与修复</summary>
初势能 10 J，向环境转移 2 J 后，动能为 8 J，$v=\sqrt{32}=5.66\,\mathrm{m\,s^{-1}}$。最大压缩时小车瞬时静止，$\tfrac12(100)x^2=8$，得 $x=0.40\,\mathrm{m}$。初始 10 J 最终分为 8 J 弹性能与 2 J 转为内能。若漏算阻力或重复算重力，重新画边界并列收支。以后进入 [Unit 1 综合](/zh/alevel/as-physics/unit-1-review/)时先关闭本页答案。
</details>
</div>



<div class="lesson-check" markdown="1">
<!-- task:variable-force-retry -->
Retry with a different graph: a 2.0 kg object moves right at 1.0 m/s. Its horizontal resultant force is plotted against displacement through points (0 m, 0 N), (1 m, 6 N), (2 m, 6 N), (3 m, −2 N), with straight joins. Calculate work and final speed at 3 m. Explain why using peak force times 3 m is wrong, and what area would mean if the horizontal axis were time instead.
<!-- /task:variable-force-retry -->
<details markdown="1"><summary>提示</summary>
先看横轴，再分段积分面积。
</details>
<details markdown="1"><summary>解答与修复</summary>
有符号面积 3 + 6 + 2 = 11 J；最后段净面积是梯形，也可拆成正三角形和负三角形。初动能 1 J，末动能 12 J，v = √12 = 3.46 m/s。峰值 6 N 并非始终作用，不能算 18 J。若横轴为时间，面积为冲量 N s，不能直接当功。
</details>
</div>

<h3 id="power-retry">换条件重试</h3>

<div class="lesson-check" markdown="1">
<!-- task:power-retry -->
Retry: a motor lifts a 12 kg load steadily at 0.25 m/s with electrical input 60 W. Take g = 10 m/s². Find useful power and efficiency. At the same efficiency, what input power is needed for 0.50 m/s? A claim of 0.50 m/s with only 80 W input is made: can it also retain the original efficiency? Explain your conditional conclusion.
<!-- /task:power-retry -->
<details markdown="1"><summary>提示</summary>
匀速提升用 P = mgv，再用有用／输入。
</details>
<details markdown="1"><summary>解答与修复</summary>
有用功率 30 W，效率 50%。速率两倍，有用功率 60 W，保持效率需输入 120 W。若 0.50 m/s 仅输入 80 W，隐含效率 75%，不能同时保留原来 50% 模型。指出的是模型与数据不一致，不是说 75% 效率普遍不可能。
</details>
</div>

<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 §3.2.7–3.2.8. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/momentum-and-impulse/) · [下一课](/zh/alevel/as-physics/materials-and-young-modulus/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
