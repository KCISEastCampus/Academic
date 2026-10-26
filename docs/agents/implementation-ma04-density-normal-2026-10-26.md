# MA04 连续随机变量与正态分布：设计及制作记录

2026-10-26。独占四个双语课程文件及本记录；不提交、不切分支、不构建、不改共享样式、测试或依赖。正文制作前建立本设计。遵循 course-content-standard.md v1.1；复用已认可泊松样章的阅读层次。

## 来源与边界

目标 OxfordAQA 9660 v5.2 MA04，S2.2（印刷25–26／PDF24–25）、S2.4（印刷26／PDF25），并核读S2整体印刷25–27／PDF24–26；当前资格页及2026/07官方PDF实际打开，未迁移9760。

- <https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/>
- <https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf>
- 实读本地 `assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf`（28页）Q2 PDF6–8、Q5 PDF14–15。
- 实读配对 `assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf`（17页）Q2 PDF6–8、Q5 PDF12，封面确认为January 2025 Version 1.0 Final。
- Q2独算：c=1/75，E(T)=1367/375，E(T²)=1052/75，Var(T)=0.738211…；E(4−5T)=−1067/75，Var(4−5T)=18.4552…（18.5，3sf）。正文采用密度后改变要求，标改编，不称全文原题。
- Q5(a)独算：z左=-1.281551…、z右=0.841621…，σ=1.9/(z右−z左)=0.894887…，μ=3.04684399…；用评分表近似值同样得到3.05、0.895。正文更换情境和任务分段，标改编。Q5(b)读到样本均值条件，MS给n≥65；留给estimation课，不将个体标准差与均值标准误混淆。

## 设计卡

连续课中心问题：结果可在区间内任意变化时，怎样用面积描述机会，并计算变换后或合计后的平均与波动？先修为定积分／幂函数微积分、AS加权平均及泊松中的离散计数；给现有积分课和前驱泊松的正文链接。核心模型为非负且总面积1的密度，CDF累计面积，有限矩及独立性条件。图用来区分高度与面积，不承担独立题答案提示。先完整示范再独立选法，错误回具体锚点及同目标不同表征新题。后继exponential。

正态课中心问题：如何把不同单位的偏离变成可比较的标准差距离，再由面积找概率、边界或参数？先修连续面积、独立和差与代数；前驱exponential。核心条件为给定或有理由采用的对称钟形连续模型，σ>0；独立正态线性组合精确为正态，不以均值方差推定分布。图解释一SD范围面积、尾部与中心的方向。表以左累计Φ定义，另解释0至z面积表／上尾百分位表的换算。后继estimation。

## 目标—教学—独立—重试映射

所有位置为两种语言相同稳定锚点。独立题中不出现选法名称；判定以过程及条件为准，不设置伪官方分值。

|范围／可观察目标|教学及完整示范|独立任务|判定与错误回补／新重试|
|---|---|---|---|
|S2.2 分辨离散、密度与概率，判合法及求常数|density、area|check-area|非负且总面积1，单点0；area→retry-area|
|S2.2 建全域CDF、边界与导数，区间和指定概率反求|cdf、quantiles|check-cdf|包含0/1外段、累计常数及合法根；cdf/quantiles→retry-cdf|
|S2.2 均值、二阶矩、方差、标准差及线性变换|moments、linear|check-moments|积分带权、先平方均值，系数平方；moments/linear→retry-moments|
|S2.2 简单非线性函数的均值、方差与存在条件（含倒数）|functions|check-functions|E(g²)而非E(X²)误用；functions→retry-functions|
|S2.2 独立和差及多个随机变量合计，区别重复同一个量|combinations|check-combinations|方差用平方系数相加，确认独立；combinations→retry-combinations|
|S2.4 形状、μ/σ²与约2/3一SD面积，模型局限|shape|check-shape|边界μ±σ，面积不是高度；shape→retry-shape|
|S2.4 标准化、表与左右/中央面积|standardise、tables|check-probability|除σ、左累计或补集，方向检查；tables→retry-probability|
|S2.4 由概率找边界或一个未知参数|inverse|check-inverse|先转左累计，再还原单位及正负；inverse→retry-inverse|
|S2.4 两未知参数|parameters|check-parameters|两条有符号分位方程联立，σ>0；parameters→retry-parameters|
|S2.4 独立正态和与线性组合，包括多项|normal-sums|check-sums|先认独立正态再算分布／概率；normal-sums→retry-sums|

两课均安排later-review综合提取任务；自拟情境均为构造数据，非实测。

## 状态

设计已写，正文制作中。独立审查、构建、生成HTML、桌面／手机实际阅读、键盘与深浅主题及学生试用尚未完成；由主代理后续统一安排。作者自检结果在交付前追加。


## 冻结前反馈处理

主代理指出原check-functions的1/V发散均值任务需要未声明的瑕积分／极限先修。采纳删除：两版Question同步移除该问，提示与解答同步删去极限／发散论证；不另增扩展折叠区。保留5V²非线性矩、[1,2]内6/X完整示范与[1,2]内1/X新重试，覆盖S2.2简单函数均值、方差和标准差。概念只提醒分母及所需矩存在条件，不把越纲技巧列为必做。图、目标和题目身份不受此删改影响。


## 作者自检与冻结交接

- 连续课每版17个Question（含完整示范）、11个独立任务框；正态课每版15个Question、11个独立任务框。每题一个lesson-check，提示／答案各自默认关闭，未嵌套题框。
- 两版逐字Question一致；连续课184个TeX表达式、正态课150个TeX表达式按出现顺序完全一致。双语元数据、同页唯一锚点、全部当前本地目标链接和折叠标签闭合核对通过。
- 作者重新用精确分数积分核算多项式矩／非线性矩，用标准正态累计与逆函数核算教学表、尾部、中央区间及参数；Q2、Q5与配套MS结果相符。倒数示范方差18−36(ln2)²=0.7036914989…；独立多项和差与重复使用同一变量分别核算。
- 来源身份自检：只有明确标注的改编题使用官方条件，未称原题、未移植分值；构造数据明确标注。全部同页反馈指向具体教学锚点及新重试；两课均有later-review。
- 两幅SVG可解析，有title／desc、可读标签和明确面积含义；图片只用于讲解，不给独立题图注泄漏答案。长函数方差及正态和公式已分行、用中间符号缩短；未实际渲染，不将源稿优化称作274px实测通过。
- 没有执行Jekyll构建、仓库测试、提交、分支操作；没有改共享CSS、测试、依赖、入口或其他作者文件。仅做自有文稿静态核对与算术／积分核算。
- 待主代理：独立内容交叉审查、全套构建／测试、生成HTML、桌面／手机实际阅读、深浅主题、键盘与语言切换。学生试用未进行，未宣称学习效果。
- 接续任务：待用户明确确认estimation作者冻结后，才开始只读审查estimation与两种入口全部综合／延后任务，核查S2.5、目标任务对应、独算、边界条件与简单语言。

作者冻结：2026-10-26T10:42:20（本机时间）。以下四个页面与两张图停止作者修改；本记录同时冻结。后续变更须由审查反馈明确驱动。

| 文件 | SHA-256 |
|---|---|
| `alevel/a2-mathematics/statistics/continuous-random-variables.md` | `eade1138e3273aa59276fa4ac8c1396efbcd13164309f33b8bc4580b6b179a4a` |
| `zh/alevel/a2-mathematics/statistics/continuous-random-variables.md` | `e56711773126aa32a73e562672163ea0d999943508ae574e7dd35d622cac38e5` |
| `alevel/a2-mathematics/statistics/normal-distribution.md` | `aeac641edec7ae0d828a57baa34804455cb676e98c34bc8acc19e3b8626c2c88` |
| `zh/alevel/a2-mathematics/statistics/normal-distribution.md` | `aea0f85e1ac79f9ae995ae6d8092d92b37d5969160a316586a23b252719d30ab` |
| `assets/img/ma04-density-area.svg` | `012d947650a24e9da8481d1e74c187885f0481210c238dac44e0fb8a4638654d` |
| `assets/img/ma04-normal-area.svg` | `2b43f26b51ce323c1835c082c93092eedbac567bc655f3a6cbc7db19b2c2ee0b` |

## 独立审查后的局部修复（主代理）

函数矩解释不再说“第二行”，两版明确定位E(Y²)并平方整个g(x)；密度图纵轴改到横坐标70与曲线零点对齐，0标签随之对齐。手机实测retry-cdf原分段式281px超过274px答案框，等价化简分支为(2x−1)/3，前置短显示式保留第一段面积1/3加第二段累计面积的桥梁。以上修复等待审查复核和同位置浏览器复验；旧冻结哈希不作为最终版本。
