---
layout: subjects
title: "统计图：选图、画图与判断"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/statistical-diagrams/
permalink: /zh/igcse/mathematics/statistical-diagrams/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 这张图要让人看见什么？ {#start}

有用的统计图是为了回答问题：比较类别、观察变化，还是看数值怎样分布？画得整齐却用错刻度，也会让人看错。

先修是分数、一周角有 $360^\circ$、坐标和[频数表](/zh/igcse/mathematics/data-and-averages/#frequency)。在纸上作答。本页示范、数据和任务均为**自拟题，无官方分值**；数据为教学构造，并非真实学生的观测记录。

先学习记录、类别、时间和成对数据的图，再用面积处理不等组距，接着学习累积频数和箱线图。每一步都保留前面的读图与作图方法。

## 把每条记录看清楚 {#recording}

**划记表（tally chart）**每出现一条记录就加一笔，五笔成组方便计数。**象形图（pictogram）**用一个图标代表指定数量。例如一个圆点代表 2 人，半个圆点就代表 1 人，不是“半个人”。

下面把同一份自拟交通选择写成三种形式：

| Choice | Tally (a group of five shown as 5 strokes) | Frequency | Pictogram: ● = 2 people |
| --- | --- | ---: | --- |
| Walk | &#124;&#124;&#124;&#124;╱ &#124; | 6 | ●●● |
| Bus | &#124;&#124;&#124;&#124; | 4 | ●● |
| Cycle | &#124;&#124; | 2 | ● |

实际画划记时，第五笔斜穿前四笔。象形图使用同样大小的图标，按图例数个数；不要把图标放大来表示更多人。

**茎叶图（stem-and-leaf diagram）**整理数值时还能保留每个原始值。例如 12、15、18、20、20、27、31 cm：

| Stem | Ordered leaves |
| --- | --- |
| 1 | 2 5 8 |
| 2 | 0 0 7 |
| 3 | 1 |

图例：$2\mid0=20$ cm。茎是十位，叶是个位。重复的叶是不同观测，不是多写了；每行叶要排序，必须给出带单位的图例。需要显示中间空档时，也要保留没有叶的茎。

<div class="lesson-check" markdown="1">

### 把记录整理清楚 {#practice-recording}

**Question:** Draw a tally chart and a pictogram for Red 7, Blue 4, Green 3, using one full symbol for 2 votes. Then make an ordered stem-and-leaf diagram for lengths 12, 15, 15, 21, 24, 28, 30, 31 cm, with a key. Read the median from it.



<details markdown="1">
<summary>提示</summary>

划记五笔一组。半个图标表示一票。排序后定位中间两个长度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

划记：Red 为五笔一组再加两笔，Blue 四笔，Green 三笔，总频数 14。象形图可用图例 ● = 2 票，Red ●●●◐、Blue ●●、Green ●◐，并明确 ◐ 表示一票。茎 1 的叶为 2 5 5；茎 2 为 1 4 8；茎 3 为 0 1。图例 $1\mid2=12$ cm。中位数 $(21+24)/2=22.5$ cm。保留重复的 15 才有八片叶；删掉会改变中位数。

</details>

</div>

## 比较类别 {#categories}

**条形图（bar chart）**比较不同类别的频数。条宽相同，类别间留空，频数轴从零开始，每个类别有标签。类别通常可以换顺序，因为空隙不表示数值区间。

![自拟交通选择条形图：Walk 6 人，Bus 4 人，Cycle 2 人。](/assets/img/igcse-statistics-bar.svg)

**双条形图（dual bar chart）**把两组并排；**复合/堆叠条形图（composite bar chart）**把两组上下叠放。都要有区分两组的图例。堆叠图里，上面一段的人数是**高度差**，不是顶部刻度。

![并排双条形图：星期一至三，A 到场 4、6、5 人，B 到场 6、3、7 人。](/assets/img/igcse-statistics-dual.svg)

![同一组到场数据的堆叠图：每天总数为 10、9、12。](/assets/img/igcse-statistics-composite.svg)

星期二的 B 段从 6 到 9，所以 B 有 $9-6=3$ 人，不是 9 人。并排便于比较 A/B，堆叠便于比较每天总数。百分比堆叠图的每根总高度都是 100%，比较的是比例，不能直接比较总人数。

<div class="worked-example" markdown="1">

### 完整示范：分一整圆 {#example-pie}

**Question:** Construct a pie chart for Walk 6, Bus 4 and Cycle 2 out of 12 people.

**饼图（pie chart）**显示同一个整体内的份额。一周角是 $360^\circ$，所以每份比例乘以 360：

$$\text{sector angle}=\frac{\text{frequency}}{\text{total frequency}}\times360^\circ.$$

交通选择总数 12：Walk 是 $6/12\times360^\circ=180^\circ$，Bus 是 $4/12\times360^\circ=120^\circ$，Cycle 是 $2/12\times360^\circ=60^\circ$。先画圆和起始半径，再用量角器在圆心量角；标注各扇区及总数。

![自拟交通饼图：Walk 180 度、Bus 120 度、Cycle 60 度，总计 12 人。](/assets/img/igcse-statistics-pie.svg)

最后检查角度之和为 $360^\circ$。两个饼图如果总人数不同，看起来相同大小的扇区也不一定表示相同人数。

</div>

<div class="lesson-check" markdown="1">

### 选图并画图 {#practice-categories}

**Question:** For Monday, Tuesday and Wednesday, attendance is A: 5, 3, 7 and B: 2, 6, 5. Draw a dual and a composite bar chart. Identify the day with the greatest total and every day when A exceeds B. Separately draw a pie chart for Walk 9, Bus 7, Cycle 4 out of 20 people. Which display would you choose for A/B comparison, and which for travel shares?

<details markdown="1">
<summary>提示</summary>

共用人数刻度，先算全部扇区角度再画。

</details>

<details markdown="1">
<summary>解答与检查</summary>

条形要等宽、零基线、共用刻度并有图例。A 高度 5、3、7，B 为 2、6、5。堆叠总高为 7、9、12；B 段自身的高度是 2、6、5，不能直接读顶部坐标。

![解答：新到场数据的并排双条形图。](/assets/img/igcse-statistics-dual-check.svg)

![解答：同一份新数据的堆叠条形图。](/assets/img/igcse-statistics-composite-check.svg)

星期三总数最大，为 12；星期一和三 A 都超过 B。饼图角度为 $9/20\times360^\circ=162^\circ$、$7/20\times360^\circ=126^\circ$、$4/20\times360^\circ=72^\circ$：

![解答饼图：20 人，扇区角为 162、126、72 度。](/assets/img/igcse-statistics-pie-check.svg)

角度和为 $360^\circ$。并排图便于 A/B 比较，饼图显示同一整体内的份额。把各日合并成一个饼图会丢掉逐日比较。

</details>

</div>

## 按时间看变化 {#time}

**折线图（line graph）**按时间顺序连接观测。横轴放时间，间隔按真实时间比例；纵轴放记录的量，再连接相邻点。例如第 1、2、3、4 周到场人数为 8、12、10、16：

![自拟到场人数折线图：第 1 至 4 周分别为 8、12、10、16 人。](/assets/img/igcse-statistics-line.svg)

第 2 到第 3 周减少 $12-10=2$ 人。中间线段表达记录之间的趋势，不证明整周每时每刻都按固定速度改变。

<div class="lesson-check" markdown="1">

### 注意时间间隔 {#practice-time}

**Question:** Temperatures at 08:00, 09:00, 11:00 and 12:00 are 12, 15, 14 and 18 °C. Draw an appropriate graph and describe the change from 09:00 to 11:00. Explain why equally spacing all four times would mislead.



<details markdown="1">
<summary>提示</summary>

9 点至 11 点的间隔是其他间隔的两倍。

</details>

<details markdown="1">
<summary>解答与检查</summary>

折线图描点 (8,12)、(9,15)、(11,14)、(12,18)，轴标时间（小时）与温度（°C），按顺序连线。9–11 的横向距离必须是 8–9 或 11–12 的两倍。两小时内下降 1 °C；等距画四点会歪曲变化率。记录间的实际温度仍不知道。

</details>

</div>

## 显示分组数值 {#grouped-graphs}

条形图的空隙分开类别；**直方图（histogram）**把区间放在真实数轴上，相邻区间的长方形紧挨着。组距相等时，可以让高度表示频数，因为所有宽度都带着相同的比例因子。

| Time $t$ (min) | Frequency |
| --- | ---: |
| $0\le t<10$ | 4 |
| $10\le t<20$ | 8 |
| $20\le t<30$ | 6 |
| $30\le t<40$ | 2 |

![自拟时间的等组距直方图：组界 0、10、20、30、40，高度 4、8、6、2。](/assets/img/igcse-statistics-equal-histogram.svg)

直方图用**组界**画宽度。**频数折线图（frequency polygon）**则在**组中点**上描点：(5,4)、(15,8)、(25,6)、(35,2)，按顺序用直线连接。同一组频数有了另一种表示；这里不要累加频数。只有题目采用相应约定时，才在两端加零频数的辅助组，不能凭空增加观测。

![频数折线图：组中点 5、15、25、35 分钟对应频数 4、8、6、2。](/assets/img/igcse-statistics-polygon.svg)

频数折线图便于对比分布形状。但两组总人数不同时，可能要先转成比例，才好公平比较。

<div class="lesson-check" markdown="1">

### 同一份数据，两种图 {#practice-grouped}

**Question:** Lengths 0 ≤ l < 5, 5 ≤ l < 10, 10 ≤ l < 15, 15 ≤ l < 20 cm have frequencies 2, 6, 8, 4. Draw an equal-width histogram and a frequency polygon. Find the number with l < 10 and explain why connecting the upper-right corners of the histogram is not the required polygon.



<details markdown="1">
<summary>提示</summary>

直方图用组界，频数折线用每组中点配这一组的频数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

直方图：组界为 0、5、10、15、20 cm，四根相接长方形等宽 5，高度 2、6、8、4。频数折线点为 (2.5,2)、(7.5,6)、(12.5,8)、(17.5,4)，依次直线相连。两轴都须刻度均匀、带标签与单位。低于 10 cm 的有 $2+6=8$ 个。连接右上角用的是上界而非中点，会把整个形状右移。总频数是 20。

</details>

</div>

## 两个量有关联吗？ {#scatter}

**散点图（scatter graph）**每一个点表示一对测量值。除非变量本身是时间，否则不是按时间变化的图；不要把点按记录顺序逐个连起来。

点大致向上，叫**正相关（positive correlation）**；大致向下，叫**负相关（negative correlation）**。**强（strong）**指点贴近同一个趋势，**弱（weak）**指比较散，不是说斜率小。**无相关（no correlation）**是这张图上看不出明显关联；没有直线趋势时，也可能有曲线关系。

自拟练习时数与成绩配对为 (1,3)、(2,4)、(3,4)、(4,6)、(5,7)、(6,8)。画好轴，六对各描一个点，可以看见较强正相关。

![六对自拟练习时数/成绩散点，带一条用于估读的虚线目测拟合线。](/assets/img/igcse-statistics-scatter.svg)

**目测最佳拟合线（line of best fit by eye）**穿过点群中间，使上下的点大致均衡；不用强行过原点，也不是只连首末两个点。示范线大约是 $y=x+2$，3.5 小时时估计约得 5.5 分（满分 12）。合理目测线可以稍有不同。

在已观测的横轴范围内估读，叫**内插（interpolation）**；超出范围继续延长，叫**外推（extrapolation）**，通常更不可靠，成绩不可能无限增长。相关也不能证明练习造成了分差，原有知识等因素可能同时影响两者。

<div class="lesson-check" markdown="1">

### 描点、估计、说明限制 {#practice-scatter}

**Question:** Distance x (km) and time remaining y (min) give pairs (1,9), (2,8), (3,8), (4,6), (5,5), (6,4). Draw the scatter graph and a line of best fit by eye. Describe direction and strength; estimate y at x = 3.5. Comment on predicting y at x = 20 and on claiming that changing x alone causes the change in y.



<details markdown="1">
<summary>提示</summary>

一对数据一个点，不是分别画两列数字。直线穿过点群中间。

</details>

<details markdown="1">
<summary>解答与检查</summary>

一种合理画法是：

![解答散点图：六对向下趋势的点，以及一条合理的虚线拟合线。](/assets/img/igcse-statistics-scatter-check.svg)

这是强负相关。图中线大约为 $y=10.5-x$，3.5 km 时估计约 7 分钟；合理目测线给出约 6.5–7.5 分钟均可。延伸至 20 km 会得负的剩余时间，外推失效；20 远离 1–6 km 的观察范围。单靠关联不能证明因果。答案还须有轴、全部六点及穿过点群中间的直线，不能只写估计数字。

</details>

</div>

<div class="lesson-check" markdown="1">

### 比较不同点群 {#practice-patterns}

**Question:** On separate axes plot datasets P: (1,1),(2,2),(3,3),(4,4); Q: (1,4),(2,3),(3,2),(4,1); R: (1,2),(2,4),(3,1),(4,3); S: (1,2),(2,8),(3,1),(4,6),(5,5). Describe the direction and strength of each linear pattern. Is a steeper line necessarily stronger correlation?

<details markdown="1">
<summary>提示</summary>

先看大致方向和贴近趋势的程度，不只看斜率。

</details>

<details markdown="1">
<summary>解答与检查</summary>

P 是完全正直线相关，Q 是完全负直线相关；R 没有明显直线相关；S 有较弱正向总体趋势，点很分散。准确描出每组，并用分散程度解释“弱”。线陡不自动说明关系强；P、Q 的趋势同样紧密，方向相反。这些小型构造数据用于辨析词汇，不是总体结论。

</details>

</div>

## 组距不同，怎样不把图画歪？ {#unequal-histograms}

想一想：十分钟的一组有 4 人，二十分钟的一组有 8 人。第二根长方形已经宽一倍；如果高度也画成两倍，面积就变成四倍，可人数只多一倍。

**直方图（histogram）用长方形的面积表示频数。** 横轴按真实数值标出组界，相邻区间的长方形紧挨着。要让面积等于频数，就用频数除以宽度（class width，组距）：

$$\text{frequency density}=\frac{\text{frequency}}{\text{class width}}.$$

$$\text{frequency}=\text{class width}\times\text{density}.$$

这里的 frequency density 就是**频数密度**：每单位横轴宽度对应多少人。

<div class="worked-example" markdown="1">

### 完整示范：先定面积，再找高度 {#example-density}

**Question:** Construct a histogram for these illustrative journey times. Explain why the widest bar is not the tallest.

| Journey time $t$ (min) | Frequency |
| --- | ---: |
| $0\le t<10$ | 4 |
| $10\le t<20$ | 8 |
| $20\le t<40$ | 8 |

三组宽度是 10、10、20 分钟。不能直接把人数当高度，因为宽度不同，所以求密度：

$$4\div10=0.4,\qquad8\div10=0.8,\qquad8\div20=0.4.$$

![自拟通勤时间直方图。横轴组界为 0、10、20、40 分钟，纵轴频数密度高度为 0.4、0.8、0.4 人每分钟。](/assets/img/igcse-statistics-density.svg)

横轴刻度要均匀，纵轴标 frequency density。按真实区间宽度和算出的高度画长方形。后两根的面积分别为 $10\times0.8=8$ 和 $20\times0.4=8$，所以人数相同。最后一组宽一倍，只需一半的高度。

用面积检查总数：$4+8+8=20$ 人。最高的一根表示每分钟宽度内的人最集中，并不自动表示这一组人数最多。

</div>

<div class="lesson-check" markdown="1">

### 自己画，并解释 {#practice-density}

**Question:** Waiting times $w$ (min) have frequencies 6, 12 and 12 in $0\le w<5$, $5\le w<15$ and $15\le w<30$. Draw a histogram. A learner draws heights 6, 12 and 12. Explain the error and compare the numbers waiting in the last two intervals.

<details markdown="1">
<summary>提示</summary>

先用每组的上下界求宽度。想一想每根长方形的面积应该表示什么。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$6\div5=1.2,\qquad12\div10=1.2,\qquad12\div15=0.8.$$

横轴标 waiting time (min)，使用均匀刻度；在 0–5、5–15、15–30 上画相接的长方形，高为 1.2、1.2、0.8，纵轴标 frequency density（人/分钟）。面积是 6、12、12，总计 30。后两组人数相同，虽然高度不同。错画成 6、12、12，会让面积变成“频数乘组距”，夸大宽组。

</details>

</div>


## 累加到每个组界 {#cumulative}

**累积频数（cumulative frequency）**告诉我们某个边界以下共有多少条记录。密度例题的频数 4、8、8，逐组累加成 4、12、20。将**上界**与累计人数配对，并在最初下界从零开始：

$$(0,0),\ (10,4),\ (20,12),\ (40,20).$$

![自拟时间累积图，用直线段连接 (0,0)、(10,4)、(20,12)、(40,20)。](/assets/img/igcse-statistics-cumulative.svg)

本例用直线段连接，作组内线性估计。需要时也可用平滑上升曲线，按题目画法要求。累积图不能下降。组中点用于频数折线，不用于这些对应上界的累计人数。

总计 20 人。中位数先在**纵轴**找 $20/2=10$ 人，横向到图，再向下读时间。从 (10,4) 到 (20,12)，要走过十分钟组距的八分之六：

$$\text{median estimate}=10+\frac{10-4}{12-4}\times10=17.5\text{ min}.$$

$Q_1$ 从累计人数 5 读，$Q_3$ 从 15 读，第 90 百分位从 18 读。线性估计分别为 11.25、27.5、35 分钟，$IQR\approx16.25$ 分钟。这些是估计，不是恢复了每个人的准确时间。

<div class="lesson-check" markdown="1">

### 自己画并读 {#practice-cumulative}

**Question:** Times in consecutive intervals 0 ≤ t < 10, 10 ≤ t < 20, 20 ≤ t < 30, 30 ≤ t < 40, 40 ≤ t < 50 minutes have frequencies 4, 8, 12, 8, 8. Draw a cumulative frequency graph using straight segments. Estimate the median, quartiles, IQR, 80th percentile and number with t ≥ 35. Explain why plotting (5,4) as the first cumulative point would be wrong.



<details markdown="1">
<summary>提示</summary>

先算累计人数。所求分位数分别从累积轴的 10、20、30、32 处读取。

</details>

<details markdown="1">
<summary>解答与检查</summary>

累计人数是 4、12、24、32、40，所以描 (0,0)、(10,4)、(20,12)、(30,24)、(40,32)、(50,40)：

![解答累积图：五组对应各上界的累计人数，终点为 (50,40)。](/assets/img/igcse-statistics-cumulative-check.svg)

$$Q_1\approx10+\frac{10-4}{12-4}\times10=17.5,\quad \text{median}\approx20+\frac{20-12}{24-12}\times10\approx26.7.$$

$$Q_3\approx30+\frac{30-24}{32-24}\times10=37.5,\qquad IQR\approx20\text{ min}.$$

第 80 百分位从 $0.8\times40=32$ 人处读，得 40 分钟。35 分钟处累积估计为 28，剩下 $40-28=12$ 人至少用 35 分钟。(5,4) 错称 0–10 组的四个人都低于 5，实际应配上界 10。百分位的单位是分钟，最后人数的单位是人。

</details>

</div>

## 同时比较中心与分散 {#box-plots}

**箱线图（box plot）**展示五个数：最小值、$Q_1$、中位数、$Q_3$、最大值。在同一条均匀数轴上，从 $Q_1$ 到 $Q_3$ 画箱，中位数画一道线，两端用“须”接到极值。本页须接最小、最大值，不要求另学离群值判据。

时间为 2、4、5、7、8、10、12、16 分钟，按两半各取中位数，五数为 2、4.5、7.5、11、16。箱宽 $11-4.5=6.5$ 分钟，全距 $16-2=14$ 分钟。箱子不是表示频数的条形，高度没有人数意义；宽度描述中间一半有多分散。比较中心看中位数，比较中间一半的波动看 IQR，但都不能证明一组里每个人都大于另一组的每个人。

<div class="lesson-check" markdown="1">

### 画出比较 {#practice-box}

**Question:** Five-number time summaries (min) are A: 2,4,6,10,20 and B: 0,6,8,10,14, listed as minimum, Q1, median, Q3, maximum. Draw comparative box plots on one scale. Compare typical time, IQR and full range. Does the longer A box mean more observations in A?



<details markdown="1">
<summary>提示</summary>

共用横轴刻度。无论总人数多少，箱子表示的都是各自中间一半。

</details>

<details markdown="1">
<summary>解答与检查</summary>

可画成：

![解答：共用 0 至 20 分钟刻度的箱线图，A 中位数 6，B 中位数 8。](/assets/img/igcse-statistics-box-check.svg)

A 的中位数较低，为 6 对 8 分钟。A 的 IQR 为 $10-4=6$，大于 B 的 $10-6=4$ 分钟；A 极差 $20-2=18$，也大于 B 的 $14-0=14$ 分钟。A 的典型时间较低，但按两种尺度都更分散。箱宽不能告诉我们样本总人数，所以不能说明 A 人更多。

</details>

</div>

## 不照着示范独立检查 {#practice}

先判断需要的表示，再回看：[记录与茎叶](#practice-recording)、[类别比较与份额](#practice-categories)、[时间](#practice-time)、[分组数据](#practice-grouped)、[成对数据](#practice-scatter)及[不同相关形态](#practice-patterns)；接着完成[密度](#practice-density)、[累积图](#practice-cumulative)、[箱线图](#practice-box)。答案要有标签、正确刻度的图和解释，不能只算数字。

## 找出错误，再重画 {#retry}

漏叶或图例问题回到[记录](#recording)；堆叠高度或扇区角度问题回到[类别](#categories)；时间间隔问题回到[时间](#time)；组界与中点混淆回到[分组图](#grouped-graphs)；相关与拟合问题回到[散点](#scatter)，再做 [A](#retry-core)、[组界与比较重试](#retry-grouped)或 [B](#retry-scatter)。面积或分位读数问题回到[密度](#unequal-histograms)、[累计人数](#cumulative)或[箱线图](#box-plots)，再做[新直方图](#retry-density)或 [C](#retry-extension)。先关闭原解答。

<div class="lesson-check" markdown="1">

### 重试 A：选择并表示 {#retry-core}

**Question:** A survey has 20 responses: Music 10, Art 6, Sport 4. Draw a tally chart, a bar chart, a pictogram with one symbol for 2 responses, and a pie chart. Separately make a stem-and-leaf diagram for 11, 13, 13, 20, 25, 32. Choose a graph for counts recorded at days 1, 2 and 5 as 4, 7, 6, and a graph for lengths grouped into equal-width intervals. Explain your choices.



<details markdown="1">
<summary>提示</summary>

先分辨类别、时间或数值区间。每种表示都要保留图例或坐标含义。

</details>

<details markdown="1">
<summary>解答与检查</summary>

划记为 Music 两组五笔，Art 五笔加一笔，Sport 四笔。类别条形等宽，留空，高度 10、6、4，频数轴从零开始。象形图 Music ●●●●●、Art ●●●、Sport ●●，图例 ● = 2 份回答。饼图角度 $10/20\times360=180^\circ$、$6/20\times360=108^\circ$、$4/20\times360=72^\circ$，总计 360°。茎 1：1 3 3；茎 2：0 5；茎 3：2；图例 $1\mid1=11$。时间用折线连 (1,4)、(2,7)、(5,6)，末段横向间隔是首段三倍。等组距测量组用直方图，按实际区间画相接长方形；若画频数折线，则用中点/频数配对。类别留空，连续区间按宽度相接，不把无关类别按时间折线相连。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 B：判断说法 {#retry-scatter}

**Question:** Draw a scatter graph for pairs (1,2),(2,4),(3,3),(4,6),(5,5). Describe its correlation and draw an eye-fit line. A learner says a steep line always means strong correlation and predicts 20 at x = 20. Explain what is unsupported.



<details markdown="1">
<summary>提示</summary>

方向看趋势，强弱看点贴近趋势的程度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

在带标签的轴上画齐五点，是有一定离散的正相关。约 y = x + 1 的目测线穿过点群中部，x = 3 时约为 4。陡峭程度不等于强度。x = 20 远在观测 1–5 之外，这份样本不能支持趋势一定延伸至那里，也不能支持估计值一定为 20。不要依次连点。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 C {#retry-extension}

**Question:** A histogram has a bar over 10 ≤ t < 25 with density 0.6 people/min. Recover its frequency. For a separate grouped sample, cumulative points are (0,0),(10,6),(20,18),(40,24). Draw straight segments and estimate the median, Q1, Q3 and the 60th percentile, then draw an approximate box plot using interval endpoints 0 and 40 as approximate extremes. State the limitation.



<details markdown="1">
<summary>提示</summary>

密度乘组距。求百分位时，先算总人数的相应比例，再从累计人数轴横向找到图线，向下读时间。假定端点不等于实际极值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

直方图频数 $(25-10)\times0.6=9$ 人。累积中位数在 12 人处，位于 (10,6) 至 (20,18) 的一半，得 15 分钟；$Q_1\approx10$，$Q_3\approx20$，$IQR\approx10$ 分钟。在有标签的轴上描四个累积点。近似箱子的两端为 10、20，中位线在 15，须接假定的 0、40。真实最小、最大值只知道落在首末有数据的组内，因此这不是精确原始数据箱线图。要说明限制，不能假装端点就是实际极值。

第 60 百分位先用总数 24，得到累计位置 $0.60\times24=14.4$，位于 (10,6) 和 (20,18) 之间。横向到图线，再向下读时间：

$$P_{60}\approx10+\frac{14.4-6}{18-6}(20-10)=17\text{ min}.$$

14.4 是累计位置，不是时间，也不是实际观察到“0.4 个人”。17 分钟是估计有 60% 的样本低于的时间。用直线连接意味着假设组内均匀分布；原始观测值仍然未知。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试：重新画一张直方图 {#retry-density}

**Question:** Constructed journey times have frequencies 6, 9 and 10 in the intervals 0 ≤ t < 4, 4 ≤ t < 10 and 10 ≤ t < 20 minutes. Draw a histogram with labelled axes and explain how its areas recover the frequencies. A learner instead uses heights 6, 9 and 10 on a frequency-density axis. Explain the error.

<details markdown="1">
<summary>提示</summary>

把真实组界标在同一条线性时间轴上。每组要选怎样的高度，才能使“组距 × 高度”等于该组人数？

</details>

<details markdown="1">
<summary>解答与检查</summary>

| 区间（min） | 组距（min） | 频数 | 频数密度（people/min） |
| --- | --- | --- | --- |
| $0\le t<4$ | 4 | 6 | 1.5 |
| $4\le t<10$ | 6 | 9 | 1.5 |
| $10\le t<20$ | 10 | 10 | 1 |

![解答直方图：0–4、4–10、10–20 分钟的柱相接，密度高为每分钟 1.5、1.5、1 人，面积分别代表 6、9、10 人。](/assets/img/igcse-statistics-density-retry-check.svg)

在时间轴标出 0、4、10、20，画相接长方形，宽度比例必须是 4:6:10。频数密度轴从零开始，清楚标出 1 和 1.5。核对面积 $4\times1.5=6$、$6\times1.5=9$、$10\times1=10$，合计 25 人。前两柱同高，但组距不同，所以人数不同。若高度用 6、9、10，面积会成为 24、54、100，组距会把原来人数歪曲。检查时既看三个高度，也看组距与面积。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试：组界、中点与堆叠总数 {#retry-grouped}

**Question:** Lengths in 0 ≤ l < 4, 4 ≤ l < 8, 8 ≤ l < 12 cm have frequencies 1,5,2. Draw a histogram and a frequency polygon. Separately, X attendance on days 1,2 is 3,7 and Y is 5,2. Draw dual and composite bars and state which day has the larger combined attendance.

<details markdown="1">
<summary>提示</summary>

组界决定长方形宽度，中点决定折线点；堆叠是把各段本身高度相加。

</details>

<details markdown="1">
<summary>解答与检查</summary>

直方图在 0–4、4–8、8–12 上画相接长方形，频数高为 1、5、2，横轴标长度与单位。频数折线点为 (2,1)、(6,5)、(10,2)，直线连接，不在 4、8、12 处描点。并排图画 X 高 3、7，旁边 Y 高 5、2；有图例和零基线。堆叠图下段 X 高 3、7，上段 Y 加 5、2，总高 8、9。第 2 天总数较大，虽然 Y 单独看更小。两种画法都须让每段自身高度对应原来人数。

</details>

</div>

## 稍后再作一次判断 {#next-step}

接着学[集合与概率](/zh/igcse/mathematics/sets-and-probability/#start)。学过另一主题后回来做下题，再去[数据混合回顾](/zh/igcse/mathematics/mixed-review/#data-review)。解释有困难时，回到对应图形，不只是背公式。

<div class="lesson-check" markdown="1">

### 回来时不提示图名 {#later-check}

**Question:** A club wants to show (a) members choosing each of four activities, (b) attendance over six months, (c) paired height and arm span, and (d) grouped journey times. Choose suitable displays and justify the choice. A second club has twice as many members but the same activity percentages. What would stay the same and what would change in its activity charts?



<details markdown="1">
<summary>提示</summary>

把数据结构和展示目的联系起来。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) 类别计数可用条形图，整体内份额可用饼图；(b) 按时间画折线；(c) 每人一对数据画散点；(d) 数值区间可画直方图，比较分组形状也可画频数折线。总数翻倍而百分比不变，饼图角度和百分比条形份额不变；使用相同人数刻度时，计数条形高度翻倍。所以相同饼图不能证明群体人数相同。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>官方范围与实际读过的示例</summary>

OxfordAQA International GCSE Mathematics **9260 v5.1**，印刷 pp.24–26（PDF pp.23–25），S4–8，并联系 S5 的分位数。[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=23)。本页从基本记录与图表，继续到不等组距直方图、累积频数、箱线图和分位数读数。

写作前实际配对阅读：Specimen 2018 **9260/1C Q5**，QP p.4 / MS p.4（双条形）；**9260/2C Q14**，[QP pp.13–14](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=13) / [MS p.7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7)（散点、拟合、外推）；**9260/1E Q20**，QP pp.20–21 / MS p.11（上界累计）；**9260/2E Q20**，[QP p.17](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=17) / [MS p.12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=12)（密度）。封面是 Specimen 2018，文件名 2016 不是考季。本页所有题、数据、图均自拟，无官方分值。目测线与分组分位数是估计，不要求回归计算或相关系数。

</details>
