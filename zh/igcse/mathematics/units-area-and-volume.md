---
layout: subjects
title: "单位、面积与体积"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/units-area-and-volume/
permalink: /zh/igcse/mathematics/units-area-and-volume/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 你量的是边界、表面，还是内部空间？ {#start}

油漆覆盖表面，水填满内部空间，围栏沿边界走。同一个物体，问的量不同，计算也不同。先说清要求什么量、答案该用什么单位。

先要会乘除、[分数](/zh/igcse/mathematics/fractions-decimals-and-percentages/#change-form)和简单图形。斜长计算会用平方、平方根，需要时看[勾股](/zh/igcse/mathematics/pythagoras-and-trigonometry/#right-triangles)。先从立体、投影、单位和平面面积开始，再把定截面体积连到曲面立体、锥台、相似面积体积和扇形。

所有示范、数据和任务均自拟，是教学构造，不是实测数据，不设官方分值。
{:.lesson-meta}

## 一个立体由什么组成？ {#solids}

**面（face）**是平的，**曲面（curved surface）**不是平的。**棱（edge）**是表面相接的边界，**顶点（vertex）**是角点或尖顶。这里把平面和曲面分开计数。圆形立体的“圆形棱”指平面与曲面的圆周交界，不是直线段。

正方体有6个正方形面、12条棱、8个顶点。一条棱即使由两个面共用，也只算一次。长方体的数量相同，但面是长方形，三个方向长度不一定相等。

**棱柱（prism）**沿长度方向保持同一截面，两端平行且全等。**直三棱柱（right triangular prism）**有两个三角形端面和三个长方形侧面：连接两端的棱垂直于端面。一般棱柱的侧面可以是平行四边形。**棱锥（pyramid）**有一个多边形底面，三角形侧面汇在同一尖顶。圆柱有两个平圆面和一个曲面；圆锥有一个平圆底面和一个通向尖顶的曲面。球只有一个连续曲面，没有平面、棱或顶点。

![供任务使用的两个立体：A画有两个三角形端面及连接边，B画有四边形底面及汇于尖顶的边，隐藏边用虚线表示。](/assets/img/igcse-geometry-calculation-solids.svg)

## 学一段，独立检查一段 {#practice}

<div class="lesson-check" markdown="1">

### 读立体图 {#check-solids}

**Question:** In the diagram, A is a right prism and B has a square base. Name solids A and B. For each give the number of flat faces, edges and vertices, explaining how you counted the hidden parts. Also state the numbers of flat faces, curved surfaces, circular edges and vertices of a cylinder, a cone and a sphere. How do a cube's faces differ from a general cuboid's?

<details markdown="1">
<summary>提示</summary>

A的两个端面分开数，B的底面也要算。

</details>

<details markdown="1">
<summary>解答与检查</summary>

A为直三棱柱：5个平面（2三角形+3长方形）、9条棱（两端各3条+连接的3条）、6个顶点（两端各3）。B为正方形底的四棱锥：5个平面（底+4三角形）、8条棱（底4条+通尖顶4条）、5顶点（底4+尖顶）。虚线隐藏棱仍要算。只有正方形底面，不能断言B的顶点恰在底面中心正上方。

圆柱：2平面、1曲面、2圆形棱、0顶点。圆锥：1平面、1曲面、1圆形棱、1顶点。球：0平面、1曲面、0棱、0顶点。正方体6个面是全等正方形；一般长方体是3对全等长方形。球在图上的外轮廓不是棱，那里没有两表面相交。

</details>

</div>

## 从上方看，还是从侧面看？ {#views}

**俯视图（plan）**竖直向下看，保留水平位置，不表现高度。**立面图（elevation）**从指定方向水平看，保留宽度和所见最大高度，不是把同一方向的方块数相加。用单位方格、直线画正投影，不画透视斜线。

例如后排高度(1,2)、前排(2,1)，占4个地面格。正视图高度为(2,2)，因为同一前后方向中高的挡住矮的。总方块数为 $1+2+2+1=6$，不是立面可见的4格。

下面高度图提供的是**数据**，不是已经画好的立面图。每个数为该位置堆叠的单位方块数，0表示空位。FRONT、RIGHT箭头规定观察方向。

![高度数据图：后排从左到右1、2、0，前排2、1、1；FRONT从图下方向上看，RIGHT从右向左看。](/assets/img/igcse-geometry-calculation-views.svg)

<div class="lesson-check" markdown="1">

### 画出三个视图 {#check-views}

**Question:** Using the height map, draw the plan, front elevation and right elevation on unit grids. For the right elevation put the front row on the left of your drawing and the back row on the right. Count the cubes. Would increasing the back-left stack from 1 to 2 change either elevation? Explain.

<details markdown="1">
<summary>提示</summary>

俯视标有方块的地面格，立面按视线逐列比较最高堆。

</details>

<details markdown="1">
<summary>解答与检查</summary>

俯视：前排3格都有，后排左边2格有，右后格空。正视从左到右高度为(2,2,1)；按指定“前排在左”的右视图，高度为(2,2)。共 $1+2+0+2+1+1=7$ 个。后左堆改为2，方块共8个，但两个立面都不变，因为相关最高值原来就为2。投影会隐藏信息，不能只凭立面就断定方块总数。

</details>

</div>

## 单位变小，需要的个数变多 {#units}

1米含100厘米。**1平方米**是100 cm乘100 cm的正方形，因此有 $100^2=10000$ 平方厘米；1立方米则有 $100^3=1000000$ 立方厘米。面积、体积不能照抄长度换算倍数。

常用等式：$1\text{ km}=1000\text{ m}$，$1\text{ m}=100\text{ cm}=1000\text{ mm}$；$1\text{ kg}=1000\text{ g}$，$1\text{ g}=1000\text{ mg}$。容量与体积量的是同一个空间：$1\text{ litre}=1000\text{ cm}^3=1000\text{ ml}$，$1\text{ ml}=1\text{ cm}^3$，所以 $1\text{ m}^3=1000\text{ litres}$。

例如 $0.4\text{ m}^2=0.4\times10000=4000\text{ cm}^2$，但 $0.4\text{ m}^3=400000\text{ cm}^3=400\text{ litres}$。量的类型不同，换算倍数也不同。

时间不是十进制：$1\text{ h}=60\text{ min}=3600\text{ s}$。21:35是9:35 pm，00:05是12:05 am。中午为12:00 pm，午夜为12:00 am。跨午夜的行程，先算到当天结束，再加第二天的分钟。货币按所给币种的单位关系换算；这里100 cents = 1 dollar，以元和分支付的金额保留两位小数。

<div class="lesson-check" markdown="1">

### 别换错量的类型 {#check-units}

**Question:** Convert (a) 2.5 m to mm, (b) 0.06 m² to cm², (c) 0.003 m³ to litres and ml, (d) 450000 mg to kg, (e) 1.2 km² to m². Express 9:35 pm and 12:05 am in 24-hour notation, then find the elapsed time from the first to the second on the next day. A bill is USD 18.75 paid with USD 20: find the change in dollars and cents.

<details markdown="1">
<summary>提示</summary>

先写单位等式，面积把长度倍数平方。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a)2500 mm；(b)$0.06\times10000=600\text{ cm}^2$；(c)3 litres = 3000 ml；(d)450 g = 0.45 kg；(e)$1.2\times1000^2=1200000\text{ m}^2$。时刻为21:35、00:05；到午夜145分钟，再加5，为150分钟 = 2 h 30 min = 2.5 h。找零 USD 1.25 = 125 cents。时长2:30是2.5小时，不是2.30小时。

</details>

</div>

## “每”字告诉你除以什么 {#rates}

速度是每单位时间的路程，密度是每单位体积的质量：

$$v=\frac{d}{t},\qquad \rho=\frac{m}{V}.$$

先配单位，再相除。72 km/h要写成 $72000/3600=20\text{ m/s}$，分子、分母都改变。密度中 $1\text{ g/cm}^3=1000\text{ kg/m}^3$，因为 $0.001\text{ kg}/0.000001\text{ m}^3=1000\text{ kg/m}^3$。

<div class="worked-example" markdown="1">

### 完整示范：同一次行程的时间、速度与费用 {#example-rates}

**Question:** A journey of 54 km starts at 23:40 and ends at 00:25 next day. Find its average speed in km/h and m/s. The fare is USD 0.40 per km with no other charge. Find the fare.

午夜前20分钟，午夜后25分钟，共45分钟，即 $45/60=0.75\text{ h}$。平均速度用全部路程除全部时间：

$$v=54/0.75=72\text{ km/h}=20\text{ m/s}.$$

车费为 $54\times0.40=21.60$ 美元。这是构造的费率，不是某公司当前价格。另看密度：质量2.4 kg、体积3000 cm³，先转为 $m=2400\text{ g}$，再算 $\rho=2400/3000=0.8\text{ g/cm}^3=800\text{ kg/m}^3$。密度用质量，不用以牛顿计的重力。

</div>

<div class="lesson-check" markdown="1">

### 用单位说明计算 {#check-rates}

**Question:** (a) A vehicle travels 150 km in 2 h 30 min. Find its average speed in km/h and m/s. (b) A material has density 2.7 g/cm³ and volume 200 cm³. Find its mass in kg; then find the volume in cm³ of 1.35 kg of the same material. (c) At the stated teaching exchange rate EUR 1 = USD 1.20, an item costs EUR 15. Find the USD cost and change from USD 20.

<details markdown="1">
<summary>提示</summary>

从定义式移项，不猜乘还是除。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a)$150/2.5=60\text{ km/h}$；$60000/3600=16.7\text{ m/s}$（3位有效数字）。(b)$m=\rho V=2.7(200)=540\text{ g}=0.54\text{ kg}$；$V=m/\rho=1350/2.7=500\text{ cm}^3$。(c)$15(1.20)=18.00$ USD，找零 USD 2.00。同体积下密度越大质量越大；若质量乘密度，单位不可能是体积。

</details>

</div>

## 用分割和拼接建立面积 {#flat-shapes}

长方形面积是长乘宽。平行四边形可把一头剪下、移到另一头拼成长方形，因此面积是**底乘垂高**，不是底乘斜边。三角形是同底同高的平行四边形的一半。

两个相同梯形可拼成平行四边形，底长等于两条平行边 a、b 之和，所以：

$$A_{\text{triangle}}=\tfrac12 bh,\qquad
A_{\text{parallelogram}}=bh,\qquad
A_{\text{trapezium}}=\tfrac12(a+b)h.$$

半径 r、直径 $d=2r$ 的圆有：

$$C=2\pi r=\pi d,\qquad A=\pi r^2.$$

周长是长度，面积数的是平方单位。若要精确答案就保留 $\pi$，需要小数时才近似。

复合图形可分成无缝、无重叠的小块，也可补完整再减缺口。周长只沿外边界走，不包括为了计算而画的内部分割线。

<div class="worked-example" markdown="1">

### 完整示范：切掉一个角 {#example-flat}

**Question:** An 8 cm by 6 cm rectangle loses a 2 cm by 3 cm rectangle from its top-right corner. Find the remaining area and perimeter.

原面积48，切掉6，剩 $48-6=42\text{ cm}^2$。求周长时先画六条边。从左下角沿底边逆时针走，长度依次为8、3、2、3、6、6：

$$P=8+3+2+3+6+6=28\text{ cm}.$$

切去的外边2和3，被长度相同的内凹边代替，周长没有随面积减少。这适用于此处切角，不是所有挖洞图形都如此。

</div>

下图为一个长方形沿一条边接半圆，虚线直径是最终图形的内部接缝。

![长6 cm、高4 cm的长方形，右边接一个直径4 cm的半圆，共用直径为虚线。](/assets/img/igcse-geometry-calculation-composite.svg)

<div class="lesson-check" markdown="1">

### 选对边界与垂高 {#check-flat}

**Question:** (a) A triangle has base 6 cm and perpendicular height 4 cm. A parallelogram has base 7 cm, sloping side 5 cm and perpendicular height 3 cm. A trapezium has parallel sides 4 cm and 10 cm and perpendicular height 3 cm. Find their areas, explaining which lengths you used. (b) Find the exact area and perimeter of the rectangle-and-semicircle diagram.

<details markdown="1">
<summary>提示</summary>

外周长不包含共用直径。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a)面积依次为 $\frac12(6)(4)=12\text{ cm}^2$、$7(3)=21\text{ cm}^2$、$\frac12(4+10)(3)=21\text{ cm}^2$。5 cm斜边不是垂高。(b)半径 $=4/2=2\text{ cm}$，面积 $=6(4)+\frac12\pi(2^2)=24+2\pi\text{ cm}^2$。外周长 $=6+6+4+\pi(2)=16+2\pi\text{ cm}$。把虚线直径加入，会多算内部线段。

</details>

</div>

## 把相同截面一层层叠起来 {#prisms}

若立体在与长度方向垂直的每一处，截面积都为 A，长度为 h，则体积：

$$V=Ah.$$

想象每一薄层都填同样大的面积。这适用于长方体、棱柱、圆柱，不适用于逐渐变尖的圆锥、棱锥。圆柱 $A=\pi r^2$，所以 $V=\pi r^2h$。

表面积数的是暴露的表面。封闭长方体有 $2(lw+lh+wh)$。封闭圆柱有两个圆面，加展开后的侧面长方形：

$$S_{\text{cylinder}}=2\pi r^2+2\pi rh.$$

展开长方形的高为 h，另一边长是圆周长。若无盖，减一个圆面积，不改变体积公式。

<div class="worked-example" markdown="1">

### 完整示范：三角形截面的柱体 {#example-prism}

**Question:** A closed right prism is 8 cm long. Its cross-section is a right triangle with sides 3,4,5 cm. Find volume and surface area.

截面积 $\frac12(3)(4)=6\text{ cm}^2$，体积 $V=6(8)=48\text{ cm}^3$。外面有两个三角形端面和三个长方形：

$$S=2(6)+8(3)+8(4)+8(5)=108\text{ cm}^2.$$

侧面积也可写成长度乘截面周长。体积用截面**面积**，侧表面积用截面**周长**，不要混淆。

</div>

<div class="lesson-check" markdown="1">

### 哪些面露在外面？ {#check-prism}

**Question:** (a) A closed right triangular prism has cross-section sides 5,12,13 cm (5 and 12 are perpendicular) and length 10 cm. Find volume and surface area. (b) An open cylindrical container has internal radius 2 cm and depth 5 cm. Ignoring wall thickness, find capacity in cm³ and ml, and area of material (base and curved side only).

<details markdown="1">
<summary>提示</summary>

先列外露面，再求和。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a)截面积 $=\frac12(5)(12)=30\text{ cm}^2$，体积 $=30(10)=300\text{ cm}^3$；表面积 $=2(30)+10(5+12+13)=360\text{ cm}^2$。(b)容量 $=\pi(2^2)(5)=20\pi\text{ cm}^3=20\pi\text{ ml}$；用料面积 $=\pi(2^2)+2\pi(2)(5)=24\pi\text{ cm}^2$。再加上顶圆，就变成有盖容器了。

</details>

</div>

## 逐渐变尖或带曲面的立体 {#solids-extension}

棱锥的底面积为 A、**垂直**高为 h，体积为 $V=\frac13Ah$。圆锥底是圆，斜高 l 用于表面，不是体积所用的垂高：

$$V_{\text{cone}}=\tfrac13\pi r^2h,\qquad
S_{\text{cone, closed}}=\pi rl+\pi r^2.$$

正圆锥中 $l=\sqrt{h^2+r^2}$。侧面展开为扇形，其弧长为底圆周长 $2\pi r$、半径为 l，面积为 $\frac12(2\pi r)l=\pi rl$。棱锥侧面积要把各三角形面面积相加。正四棱锥底边长 s 时，每个侧面的底为 s、斜高为 $\sqrt{h^2+(s/2)^2}$。尖顶到基底角点的棱，不是侧面三角形的垂高。

球有：

$$V_{\text{sphere}}=\tfrac43\pi r^3,\qquad S_{\text{sphere}}=4\pi r^2.$$

半球的体积、曲面面积各为球的一半。若平的圆底也露在外面，再加 $\pi r^2$，总面积为 $3\pi r^2$。

<div class="worked-example" markdown="1">

### 完整示范：接起来的面不算外面 {#example-composite}

**Question:** A hemisphere of radius 2 cm sits on a cylinder of radius 2 cm and height 5 cm, with their circular faces joined. Find the volume and the total external surface area of the closed solid.

两部分体积没有重叠，所以相加：

$$V=\pi(2^2)(5)+\tfrac23\pi(2^3)=20\pi+\tfrac{16}3\pi=\tfrac{76}3\pi\text{ cm}^3.$$

接缝在内部。外面只露出圆柱曲面、半球曲面、一个底圆：

$$S=2\pi(2)(5)+2\pi(2^2)+\pi(2^2)=32\pi\text{ cm}^2.$$

若两个完整表面积直接相加，就把接合圆算了两次。总高虽为7 cm，圆柱公式内自己的高仍为5 cm。

</div>

<div class="lesson-check" markdown="1">

### 辨认外露表面 {#check-composite}

**Question:** Find exact volume and total external surface area for each closed object: (a) sphere radius 3 cm; (b) right square pyramid with base side 6 cm and perpendicular height 4 cm; (c) right circular cone radius 3 cm and perpendicular height 4 cm; (d) cylinder radius 3 cm and height 4 cm joined to a hemisphere of radius 3 cm at one end. Include sketches showing the lengths and exposed surfaces.

<details markdown="1">
<summary>提示</summary>

圆锥和棱锥先求斜高；内部接合面不刷漆。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a)$V=\frac43\pi(3^3)=36\pi\text{ cm}^3$、$S=4\pi(3^2)=36\pi\text{ cm}^2$，系数碰巧相同，单位仍不同。

(b)侧面斜高 $\sqrt{4^2+3^2}=5$。$V=\frac13(6^2)(4)=48\text{ cm}^3$；$S=6^2+4[\frac12(6)(5)]=96\text{ cm}^2$。

(c)斜高5；$V=\frac13\pi(3^2)(4)=12\pi\text{ cm}^3$；$S=\pi(3)(5)+\pi(3^2)=24\pi\text{ cm}^2$。

(d)$V=36\pi+18\pi=54\pi\text{ cm}^3$；外面积 $S=24\pi+18\pi+9\pi=51\pi\text{ cm}^2$。图须排除共用圆面、保留圆柱底面。圆锥的斜高不能当体积的高。

</details>

</div>

## 平行切去尖顶，留下锥台 {#frustums}

平行于底面的切割会去掉一个较小的**相似**圆锥或棱锥，剩下的叫**锥台（frustum）**。体积是整块减去小块。表面积要重新列外露面，因为新切出的顶面现在露在外面，不能直接把两个完整表面积相减。

<div class="worked-example" markdown="1">

### 完整示范：圆锥台 {#example-cone-frustum}

**Question:** A right cone has radius 6 cm and perpendicular height 8 cm. A parallel cut removes a smaller cone with radius 3 cm. Find the remaining frustum's volume and total surface area.

半径比 $3/6=1/2$，所以小锥高4，斜高也是原来一半。全锥斜高 $\sqrt{6^2+8^2}=10$，小锥斜高5。

$$V=\tfrac13\pi(6^2)(8)-\tfrac13\pi(3^2)(4)=96\pi-12\pi=84\pi\text{ cm}^3.$$

先减两块侧面，再加两个外露圆面：

$$S=[\pi(6)(10)-\pi(3)(5)]+\pi(6^2)+\pi(3^2)=90\pi\text{ cm}^2.$$

锥台垂高 $8-4=4$，斜高 $10-5=5$，两者不是同一个量。

</div>

<div class="worked-example" markdown="1">

### 完整示范：四棱锥台 {#example-pyramid-frustum}

**Question:** A right square pyramid has base side 12 cm and height 8 cm. Remove the similar top pyramid whose base side is 6 cm. Find the frustum's volume and total surface area.

长度比也是 $1/2$，小锥高4。原侧面斜高 $=\sqrt{8^2+6^2}=10$，小侧面斜高5。

$$V=\tfrac13(12^2)(8)-\tfrac13(6^2)(4)=384-48=336\text{ cm}^3.$$

原四个三角形侧面面积 $4[\frac12(12)(10)]=240$，小四侧面面积60，相减为锥台四个梯形侧面的面积。再加上下底：

$$S=(240-60)+12^2+6^2=360\text{ cm}^2.$$

直接检查：每个梯形平行边12和6，**侧面内的高**为 $10-5=5$，所以 $4[\frac12(12+6)(5)]=180$，侧面积一致。若用竖直锥台高4，就把斜面面积算小了。

</div>

<div class="lesson-check" markdown="1">

### 反求切割前的整锥 {#check-frustums}

**Question:** (a) A right cone frustum has bottom radius 4 cm, top radius 2 cm and perpendicular height 3 cm. Reconstruct the full cone and find exact volume and total surface area. (b) A right square-pyramid frustum has bottom side 8 cm, top side 4 cm and perpendicular height 3 cm. Do the same. The top and bottom planes are parallel in both.

<details markdown="1">
<summary>提示</summary>

相似给整锥高与小锥高的比，两高之差才是已知3 cm。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两题的小锥/全锥长度比都为 $1/2$。设全高 H，则 $H-H/2=3$，所以 $H=6$，小高3。

(a)全斜高 $=\sqrt{6^2+4^2}=2\sqrt{13}$，小斜高 $=\sqrt{13}$。$V=\frac13\pi(4^2)(6)-\frac13\pi(2^2)(3)=28\pi\text{ cm}^3$。侧面积为 $\pi(4)(2\sqrt{13})-\pi(2)(\sqrt{13})=6\pi\sqrt{13}$，加两个圆面得 $S=(20+6\sqrt{13})\pi\text{ cm}^2$。

(b)全、小侧面斜高为 $2\sqrt{13}$、$\sqrt{13}$。$V=\frac13(8^2)(6)-\frac13(4^2)(3)=112\text{ cm}^3$。侧面积 $=4[\frac12(8+4)\sqrt{13}]=24\sqrt{13}$，所以 $S=80+24\sqrt{13}\text{ cm}^2$。图须把切去的尖顶画在顶面上方，不能画在3 cm高的锥台内部。

</details>

</div>

## 长度比不能直接当面积比 {#scaling}

所有长度乘 k，面积涉及的两个长度各乘 k，因此面积乘 $k^2$；体积三个方向各乘 k，因此体积乘 $k^3$。前提是图形或立体**相似**，不能只把一个方向加倍就套相似比例。

例如对应长度比 $3:5$，面积比 $9:25$，体积比 $27:125$。反过来由面积求长度比，开平方；由体积求长度比，开立方。“大除以小”还是“小除以大”必须始终一致。

<div class="lesson-check" markdown="1">

### 从面积反求比例 {#check-scale}

**Question:** Two cubes have total surface areas 54 cm² and 96 cm². The smaller cube has volume 27 cm³ and edge length 3 cm. Use the area ratio to find the length scale factor, then find the larger volume and edge length, explaining both powers.

<details markdown="1">
<summary>提示</summary>

先找长度倍数，不是直接把面积比当体积比。

</details>

<details markdown="1">
<summary>解答与检查</summary>

面积倍数 $96/54=16/9$，所以长度倍数 $k=4/3$。大棱长 $3(4/3)=4\text{ cm}$。体积倍数 $k^3=64/27$，大体积 $=27(64/27)=64\text{ cm}^3$。若27乘 $16/9$，就是把面积倍数错用到体积上。再核对真实立方体：$6(3^2)=54$、$3^3=27$、$6(4^2)=96$、$4^3=64$。

</details>

</div>

## 扇形占整圆的一部分 {#sectors}

扇形由两条半径和中间的弧围成。圆心角 $\theta$ 度占整周的 $\theta/360$，所以：

$$
L_{\text{arc}}=\frac{\theta}{360}(2\pi r),
\qquad A_{\text{sector}}=\frac{\theta}{360}(\pi r^2).
$$

弧长不是扇形周长，还要加两条半径。扇形也不是弦切出的弓形。

<div class="worked-example" markdown="1">

### 完整示范：整圆的三分之一 {#example-sector}

**Question:** A sector has radius 6 cm and central angle 120°. Find its exact arc length, area and perimeter.

比例 $120/360=1/3$。弧长 $=(1/3)(12\pi)=4\pi\text{ cm}$；面积 $=(1/3)(36\pi)=12\pi\text{ cm}^2$；周长 $=12+4\pi\text{ cm}$。弧和面积用同一比例，但单位不同。反求角时，用已知弧长除整圆周长（或已知扇形面积除整圆面积），再乘360°。

</div>

<div class="lesson-check" markdown="1">

### 已知角与反求角 {#check-sector}

**Question:** (a) A sector has radius 8 cm and angle 135°. Find its exact arc length and area. (b) Another sector has radius 9 cm and arc length $3\pi$ cm. Find its central angle, area and perimeter. Sketch both sectors and label the radii.

<details markdown="1">
<summary>提示</summary>

把已知弧与整圆周长比较。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a)比例 $135/360=3/8$，弧长 $=(3/8)(16\pi)=6\pi\text{ cm}$，面积 $=(3/8)(64\pi)=24\pi\text{ cm}^2$。(b)比例 $3\pi/(18\pi)=1/6$，角 $=60^\circ$；面积 $=(1/6)(81\pi)=\frac{27}2\pi\text{ cm}^2$，周长 $=18+3\pi\text{ cm}$。图中弧连接两半径的远端，连接端点的直弦不是这段弧。

</details>

</div>

## 找出错因，关闭旧答案再重试 {#retry}

按错误找回补入口：面棱点或形状认错看[立体](#solids)；隐藏堆叠看[视图](#views)；单位幂次或钟表错看[单位](#units)；乘除选错看[复合单位](#rates)；斜高或内部边界错看[平面面积](#flat-shapes)；外露面错看[棱柱](#prisms)或[曲面立体](#solids-extension)；切去尖顶看[锥台](#frustums)；比例幂次错看[相似](#scaling)；把弧当周长看[扇形](#sectors)。

先关旧解答再做对应新题，记录错因和是否用提示，不只抄一个改正后的数。

<div class="lesson-check" markdown="1">

### 重试立体与投影 {#retry-views}

**Question:** A right pentagonal prism has pentagon ends. Count its flat faces, edges and vertices and explain. A new cube-height map has back row (0,1,2) and front row (1,2,1), from left to right. Draw its plan and front elevation, then its right elevation with front row shown on the left. Count its cubes.

<details markdown="1">
<summary>提示</summary>

每端有5顶点，连接对应顶点；视图分别用占位和最大高度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

棱柱7个平面（2五边形+5长方形）、15棱（5+5+5）、10顶点。俯视占后排右2格和前排全部3格。正视高度(1,2,2)，右视按前到后为(2,2)。总方块数 $=0+1+2+1+2+1=7$。五边形有5条边仍是平面，不是曲面。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试面积、容量和时间 {#retry-units}

**Question:** Convert 35000 cm² to m², 750 ml to cm³ and litres, and 1.8 kg to mg. A journey runs from 11:50 am to 1:20 pm: write the two times in 24-hour notation and give the duration in minutes and decimal hours. Write 405 cents in dollars.

<details markdown="1">
<summary>提示</summary>

平方厘米换平方米不能只除100。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$35000/10000=3.5\text{ m}^2$；750 ml = 750 cm³ = 0.75 litres；1.8 kg = 1800000 mg。时刻11:50、13:20，时长90 min = 1.5 h。405 cents = 4.05 dollars。1.30 h是1小时18分钟，不是1小时30分钟。

</details>

</div>

<div class="lesson-check" markdown="1">

### 反过来用“每” {#retry-rates}

**Question:** At a constant 12 m/s, how far does a runner travel in 2 min 30 s? Give metres and kilometres. A uniform sample has mass 360 g and volume 120 cm³. Find density in g/cm³ and kg/m³. At the stated rate USD 1 = 7.20 units of currency X, convert 54 units of X to USD.

<details markdown="1">
<summary>提示</summary>

m/s配秒；反向换币须反向运算。

</details>

<details markdown="1">
<summary>解答与检查</summary>

时间150 s，路程 $=12(150)=1800\text{ m}=1.8\text{ km}$。密度 $=360/120=3\text{ g/cm}^3=3000\text{ kg/m}^3$。换币 $=54/7.20=7.50$ USD。54乘7.20是换错方向。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试不同的切割 {#retry-flat}

**Question:** A 10 cm by 6 cm rectangle has a 4 cm by 2 cm rectangular notch removed from the middle of its top edge, not from a corner. Draw it and find area and perimeter. Also find the area of a trapezium with parallel sides 5 cm and 9 cm and perpendicular height 4 cm.

<details markdown="1">
<summary>提示</summary>

沿凹槽两条新增竖边走一遍。

</details>

<details markdown="1">
<summary>解答与检查</summary>

面积 $=60-8=52\text{ cm}^2$，周长 $=2(10+6)+2(2)=36\text{ cm}$。原横边少4，槽底又补4，另增两条2 cm竖边，所以周长增加。梯形面积 $=\frac12(5+9)(4)=28\text{ cm}^2$。这也说明前面的切角周长结论不能套所有凹槽。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试容量与用料 {#retry-prism}

**Question:** A rectangular box is 8 cm long, 5 cm wide and 3 cm deep, with no lid. Ignoring wall thickness, find its capacity in ml and the area of material. Then find the volume of a prism whose trapezium cross-section has parallel sides 3 cm and 7 cm, perpendicular separation 4 cm, and prism length 9 cm.

<details markdown="1">
<summary>提示</summary>

盒子为一底四侧；另一棱柱先求截面积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

盒子容量 $=8(5)(3)=120\text{ cm}^3=120\text{ ml}$，用料 $=8(5)+2(8)(3)+2(5)(3)=118\text{ cm}^2$。另一截面积 $=\frac12(3+7)(4)=20\text{ cm}^2$，体积 $=20(9)=180\text{ cm}^3$。棱柱长9不是梯形内的高4。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试外露面与切割 {#retry-solids}

**Question:** (a) Find volume and total surface area of a closed hemisphere radius 2 cm. (b) Do the same for a cone with radius 5 cm and perpendicular height 12 cm. (c) A full right square pyramid has base side 8 cm, height 3 cm. Find its volume and total surface area. (d) A parallel cut of the cone in (b) removes a similar cone of radius 2.5 cm: find the remaining frustum's volume and total surface area. (e) Make the same parallel halfway cut in the pyramid in (c), leaving a top square of side 4 cm: find the frustum's volume and total surface area.

<details markdown="1">
<summary>提示</summary>

逐个列外露底面与曲面/斜面，长度减半使体积为八分之一。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a)$V=\frac23\pi(2^3)=\frac{16}3\pi\text{ cm}^3$；$S=3\pi(2^2)=12\pi\text{ cm}^2$，其中圆底贡献 $4\pi$。

(b)斜高 $=\sqrt{5^2+12^2}=13$，$V=100\pi\text{ cm}^3$，$S=65\pi+25\pi=90\pi\text{ cm}^2$。

(c)侧面斜高 $=\sqrt{3^2+4^2}=5$，$V=64\text{ cm}^3$，$S=64+4[\frac12(8)(5)]=144\text{ cm}^2$。

(d)小锥高6、斜高6.5、体积 $12.5\pi$；锥台体积 $=87.5\pi\text{ cm}^3$，侧面积 $=65\pi-16.25\pi=48.75\pi$，两个圆底贡献 $25\pi+6.25\pi$，总 $S=80\pi\text{ cm}^2$。

(e)小棱锥高1.5、侧面斜高2.5、体积8、侧面积20。锥台体积 $=64-8=56\text{ cm}^3$；侧面积 $=80-20=60$，上下底 $=64+16$，总 $S=140\text{ cm}^2$。两类切割都先减侧面，再加两个外露端面。

</details>

</div>

<div class="lesson-check" markdown="1">

### 这次从体积出发 {#retry-scale}

**Question:** Two cubes have volumes 64 cm³ and 216 cm³. The smaller has total surface area 96 cm² and edge length 4 cm. Use the volume ratio to find the length scale factor, then find the larger edge length and total surface area.

<details markdown="1">
<summary>提示</summary>

先开立方根找长度倍数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

体积倍数 $216/64=27/8$，长度倍数 $k=3/2$，大棱 $=4(3/2)=6\text{ cm}$，大面积 $=96(3/2)^2=216\text{ cm}^2$。体积比开平方不能得到长度比。再核对立方体本身：$4^3=64$、$6(4^2)=96$、$6^3=216$、$6(6^2)=216$。大立方体面积与体积数值恰巧相同，但单位不同。

</details>

</div>

<div class="lesson-check" markdown="1">

### 从面积反求 {#retry-sector}

**Question:** A sector of radius 10 cm has area $20\pi$ cm². Find its central angle, arc length and perimeter. Explain why the arc and perimeter differ.

<details markdown="1">
<summary>提示</summary>

先求占整圆面积的比例。

</details>

<details markdown="1">
<summary>解答与检查</summary>

比例 $20\pi/(100\pi)=1/5$，角 $=72^\circ$，弧长 $=(1/5)(20\pi)=4\pi\text{ cm}$，周长 $=20+4\pi\text{ cm}$。两条直半径比弧长多出20 cm。

</details>

</div>

## 到别的地方再用一次 {#next-step}

继续学[三角形计算](/zh/igcse/mathematics/pythagoras-and-trigonometry/#start)，在[三维三角](/zh/igcse/mathematics/pythagoras-and-trigonometry/#space)中连接投影与斜高，再学[图形变换](/zh/igcse/mathematics/transformations/#start)。学完另一主题后再做下面题，再到[几何混合回顾](/zh/igcse/mathematics/mixed-review/#geometry-review)。

<div class="lesson-check" markdown="1">

### 稍后的综合题 {#later-check}

**Question:** A closed cylindrical tank has radius 20 cm and height 50 cm. Water enters at 0.1 litres per second. How long will an empty tank take to fill, to the nearest second? Is it less than 10 minutes? Find the exact external surface area. Ignore pipe openings and wall thickness.

<details markdown="1">
<summary>提示</summary>

分开处理体积、容量、注水时间、表面积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

体积 $=\pi(20^2)(50)=20000\pi\text{ cm}^3=20\pi\text{ litres}$，时间 $=20\pi/0.1=200\pi\text{ s}\approx628\text{ s}$。因 $200\pi>600$，超过10分钟。表面积 $=2\pi(20^2)+2\pi(20)(50)=2800\pi\text{ cm}^2$。先用未舍入值比较；平方厘米不能换成升。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>官方范围与实际读过的页</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1：G10–11见[大纲 PDF 19、印刷20页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19)，G14–16见[PDF 20、印刷21页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=20)，G17–18见[PDF 21、印刷22页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=21)。本课包含单位、平面面积、定截面体积、球/棱锥/圆锥/复合体/锥台计算、相似面积体积与扇形。G12方位角、比例图另见作图课。

实际试卷/评分阅读：Specimen 2018 1C Q25，[QP PDF 21](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=21)/[MS PDF 11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11)，核对容量、时间；2C Q10/Q12，QP PDF 9、12/MS PDF 5–6，核对单位和质量体积比例；1E Q29，QP PDF 28/MS PDF 14，核对圆锥体积；2E Q26，[QP PDF 23](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=23)/[MS PDF 15](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=15)，核对长度倍数的立方。本页题全自拟，不设官方分值；封面身份为 Specimen 2018，不是2016考季。圆形棱按正文已说明的计数约定处理。

</details>
