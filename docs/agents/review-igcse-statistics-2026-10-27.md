# IGCSE Statistics 独立内容审查

日期：2026-10-27。范围：四主题的中英文正文、20 个 igcse-statistics-* SVG、Statistics 作者记录，以及缓存中 OxfordAQA 9260 v5.1 的 N9、S1–S18 和相关 Specimen 2018 QP/MS。审查者未参与本组作者工作；此前负责 Number。本次只新增本报告，未改正文、SVG、作者记录或其他源文件，未构建、未运行站点或浏览器、未提交 Git。

**当前结论：修补后的内容审查通过，R1/R2 均已独立复核关闭。** 学校 Extension 单一路线已在8页连续落实，必要基础保留；本次复核版本为文末“最终手机图与公式冻结复核”30文件SHA清单，已包括21图字号修补及density两关系式拆行。技术/真实网页及学生验收未做，不据此称技术通过或学习效果已验证。

首轮结论为两项P2待修：图表页数学命令丢失，以及两项恢复产出不完整。首轮逐题计算与20图检查的证据保留在下文；原始发现、原行号、原哈希均属历史，当前关闭依据及新增任务/第21图检查见文末。

**复核口径：学校只开设 Extension，课程按单一路线验收。** 保留该路线所需的共同基础概念和全部必要任务；学生可见正文、标题及导航按基础到进阶或自然主题连续展开，不再服务两个学习群体，也不提供 Core 跳过路线。下文官方 Core/Extension 列仅作为来源映射，原始发现和哈希保留作历史证据。作者已再次冻结，文末记录本次关闭复核，不把旧SHA称为当前文件身份。

## 审查依据与版本

已读根 AGENTS、课程内容长期标准 v1.1、公式规范、全课程路线和本组实施记录。按标准第 1、3、4、5、6、7 节分别检查目标产出、初学者决策、独立性、恢复路径、双语与交付状态。技术构建和实际网页阅读由主执行者统一安排，本报告不代替该验收。

Git HEAD 为 `6c485e89e3e5ab2d3a7c5c5b5c1b3b7ef5963897`；本组新稿不以 HEAD 作为内容身份，**以文末逐文件 SHA-256 为本次审查版本**。

审查期间比较了初读与收尾的 29 文件哈希。8 份正文和 20 个 SVG 没有变化。作者记录由 `d15bfaa58c140d86b293451e2b50cd5393a956147a5b91f95e01a9ea37ef1748` 变为文末所列值；已重新完整阅读最终记录，特别重查冻结声明、独立任务映射、最终源级检查和未做网页验收的边界。作者记录变化没有消除下列两个正文问题。若修补后 SHA 再变化，本结论只继承未受影响的证据，须复核对应段落。

## 首轮确实问题（历史；R1/R2 已关闭，证据见文末）

### R1 · P2：中英图表页均丢失数学命令反斜线，影响键、角度与组界的含义

文件：`igcse/mathematics/statistical-diagrams.md` 与 `zh/igcse/mathematics/statistical-diagrams.md`。

| 内容 | English 行号 | 中文行号 | 冻结稿实例 | 最小修复 |
| --- | --- | --- | --- | --- |
| 茎叶图键 | 43、63 | 45、65 | `$2mid0=20$`、`$1mid2=12$` | 恢复为 `$2\mid0=20$`、`$1\mid2=12$` |
| 饼图完整示范 | 89、91、93、97 | 91、93、95、99 | `360^circ`、`180^circ` 等 | 所有该处 `^circ` 恢复为 `^\circ` |
| 等组距表的四个区间 | 171–174 | 173–176 | `$0le t<10$` 等 | `le` 恢复为 `\le`，四行均修 |
| Core 重试饼图解答 | 437 | 441 | `180^circ`、`108^circ`、`72^circ` | 三个角度恢复 `^\circ` |

每语言共定位 18 个丢失命令：2 个 mid、12 个 circ、4 个 le。这些是实际 Markdown 源中的字符错误，不是 PDF 提取伪错。MathJax 即使不报错，也可能把它们当字母相乘或仅把 c 作为上标；“两语言公式相同”不能证明公式正确。Core 学生首次接触茎叶图键、饼图转角与区间端点时，会看到错误数学表示。违反 AGENTS 的公式要求及长期标准第 3、6 节的表征一致要求。

**最小修复：**只修两语言上述命令，保留数据、图、结构与锚点。不要全局替换普通英文单词中的 mid/circ/le。之后重查这些具体数学片段；统一网页验收时再查看键的竖线、° 和 ≤ 的真实显示。作者记录“转义问题已修补”的声明也应按实际结果更新。

### R2 · P2：Extension 恢复任务未再次检验一般百分位数及不等组距直方图的绘制

定位：

- 首次任务：英文图表页第 308 行 Question（#practice-density）要求用不等宽频数表画图并解释错误；第 349 行（#practice-cumulative）要求第 80 百分位。
- 重试：英文第 471 行 / 中文第 475 行（#retry-extension）。
- 作者记录第 30、33、58 行将上述恢复路径记为已具备“同目标重试”。

现有 C 只由一个已给密度、已给区间的柱恢复频数，再用新累积点求中位数、Q1、Q3 并画箱线图。它确实检验面积反推、累积中位数/四分位与箱线图，但：

1. 学生即使仍把“不等组距表的频数直接当柱高”，也可完成单柱面积反推；新增的 #retry-grouped 全是等宽区间，不能验证该作图错误已修复。
2. 学生即使只会固定的 1/4、1/2、3/4 位置，也能完成 C；它没有要求新的非四分位百分位读数。#later-check 也只作图种选择，不提供这两项的再次产出。

这是**恢复证据缺口**，不是“首次没有教/没有考”，也不是答案算错。违反长期标准第 5 节“重试检验刚修复的困难”，不能以 C 同时含几个统计名词视为同目标已覆盖。

**最小修复建议，不需重写页面或添加装饰图：**

- 增补一个短绘图重试：完整提供新不等宽区间与频数，让学生画出有刻度的密度直方图并以面积解释。例如区间 0–4、4–10、10–20，频数 6、9、10，正确高度 1.5、1.5、1；前两柱同高但人数不同。反馈检查组界、宽度、密度轴和面积，不只给三个数字。提示与解答分别默认关闭。
- 在现有 C 的累积点任务中再问第 60 百分位。独立核算：n=24，纵轴位置为 14.4；在 (10,6) 至 (20,18) 间，10+(14.4−6)/12×10=17。完整反馈应解释“先确定累计人数，再读横轴时间”，且它是组内线性估计。
- 同步英文 Question、中英解释及作者记录；不要删除官方目标来规避缺口。新增题继续标自拟、无官方分值。

## 逐能力映射：首次独立产出与恢复状态分开

下表主题简称：D=data-and-averages；G=statistical-diagrams；P=sets-and-probability；C=combined-and-conditional-probability。中英锚点一致。这里记录的是任务实际要求，不以题数作为通过依据。

| 官方条目与实际子能力 | 概念/示范 | 首次独立证据 | 恢复与迁移判断 |
| --- | --- | --- | --- |
| N9：成员、n(A)、全集、补/交/并、空集、Venn | P #sets、#example-venn、#venn | P #practice-sets、#practice-venn | #retry-sets、#retry-venn；#later-check 换全集及期望连接 |
| S1：定性/离散/连续；分组/未分组；测量取整不变成计数 | D #data-types、#frequency、#grouped | #practice-data；#practice-grouped；#practice-table 将原始时间分组 | #retry-data 改用带数字的类别标签；两种表格任务验证分组/未分组使用 |
| S2：列表和印刷表格提取、频数与人数分母 | D #frequency、#two-way | #practice-data、#practice-table、#practice-grouped | #retry-data、#retry-table；原题访问列表沿用示范，只算熟练证据，新增列表有独立提取 |
| S3：分组与未分组两向表的设计/总计/使用 | D #two-way | #practice-table（时间分组）；#retry-table（未分组类别） | C #practice-conditional、#practice-independent-table 后续再次造表；未分组题虽名为重试，仍是真实新任务 |
| S4 Core：tally、pictogram、stem-and-leaf、bar | G #recording、#categories | #practice-recording、#practice-categories | #retry-core；键的源字符须 R1 修复 |
| S4 Core：dual/composite、pie、line | G #categories、#example-pie、#time | #practice-categories（新数据）、#practice-time（不等时间间隔） | #retry-core、#retry-grouped；#later-check 不给图名 |
| S4 Core：frequency polygon、equal-width histogram、scatter | G #grouped-graphs、#scatter | #practice-grouped、#practice-scatter、#practice-patterns | #retry-grouped、#retry-scatter；#later-check |
| S4 Extension：unequal-width histogram、CF、box | G #example-density、#cumulative、#box-plots | #practice-density、#practice-cumulative、#practice-box | CF/箱线 C 有新数据；不等宽绘图重试欠缺，见 R2 |
| S5 Core：mean/median/mode/range/modal class；频数加权与组中点估计 | D #averages、#grouped | #practice-averages、#practice-grouped | #retry-averages、#retry-grouped；#later-check 由均值反推缺失值；不等宽众数组明确按频数，未混同密度高峰 |
| S5 Extension：quartiles/IQR/percentiles | D #quartiles；G #cumulative | D #practice-quartiles；G #practice-cumulative（含 P80） | 四分位/IQR 有新重试；一般百分位重试欠缺，见 R2 |
| S6：读多类图、作结论 | G 各概念段；D #averages | G #practice-categories/time/grouped/scatter/density/cumulative/box | 解答给图的判定要求和限制，非仅数字；后续无图名选择题存在 |
| S7：分布比较与推断边界 | D #averages、#quartiles；G #box-plots | D #practice-averages、#practice-quartiles；G #practice-box | D #retry-averages、#retry-quartiles、#later-check；明确摘要不能逐人排序 |
| S8：正/负、强/弱、无直线相关；目测线、内插/外推 | G #scatter | #practice-scatter、#practice-patterns | #retry-scatter；非因果与外推范围有具体判断。无强制回归/相关系数计算 |
| S9：概率词汇与 0–1 尺度 | P #probability-scale | #practice-model 同时给 unlikely/even chance/likely/impossible/certain | #retry-events、#later-check 继续用概率与全集；不把连续分布的零概率结论引入此有限模型 |
| S10：等可能理论模型、相对频率、期望频数 | P #probability-scale、#sample-spaces、#experiments | #practice-model、#practice-space、#practice-experiment | #retry-events、#retry-experiment、#later-check；C 树题继续算期望并明确非保证 |
| S11：实验与理论比较 | P #experiments | #practice-experiment 0.48 对 0.5、期望 24 对 25 | #retry-experiment 与 #later-check；不作正式显著性判断 |
| S12：重复实验会有变化 | P #experiments | #practice-experiment 的“必须恰好发生吗” | #retry-experiment 与 #later-check；没有逐批单调趋近的错误保证 |
| S13：样本扩大的一般收益与局限，含总体特征 | D #data-types；P #experiments | P #practice-experiment 的篮球队身高抽样反例 | #retry-experiment 区分随机波动与保证；偏样不因人数增加自动修复 |
| S14：单次与两次有序样本空间 | P #sample-spaces | #practice-model 的有限单次结果；#practice-space 实画 3×3 有序表；#practice-events 列单骰面 | #retry-events 换成硬币；不能把和值标签当等可能格 |
| S15：互斥/穷尽分别判断；总和1；互斥并集加法 | P #events | #practice-events；#practice-model 的全集概率 | #retry-events 的两事件穷尽但不互斥；树端点总和后续检查 |
| S16：Venn 概率 | P #venn | #practice-venn | #retry-venn 由 neither 反求交集；#later-check |
| S17 Extension：独立组合、树及其他表示、交集乘法 | C #independence、#example-tree | #practice-independent、#practice-tree、#practice-independent-table | #retry-independent；#later-check 不预给树图方法，且判断非独立 |
| S18 Extension：条件分母、无放回树、表格及反向条件 | C #without-replacement、#conditional-table | #practice-dependent、#practice-conditional | #retry-conditional 求反向条件；#later-check 袋选择情境迁移 |

## 逐题独立核算

先按原始列表、完整样本空间或可区分个体重新计算，再对正文答案。定量部分另以 Fraction、Counter、有序枚举和分段线性插值复算；不是把作者公式重新求值作为唯一核验。运行的是临时只读计算，不新增仓库测试文件。定性题核查其条件和结论范围。下列每行包括该任务所有数值与主要判据；与正文一致，除 R1 的数学表示错误外。

### Data and averages

| 位置 | 独立结果及判断 |
| --- | --- |
| #frequency 及 #practice-data | visits 0/1/2/3 的 f=2/3/2/1；n=8、总 visits=10。至少两次为3人、零次份额1/4；colour 定性、siblings 离散、rounded height 连续。分母是人数，不是访问次数 |
| #two-way 示范 | Walk/Bus 对 <10、≥10 的格为 (2,1)/(1,2)，边际各3，总6 |
| #practice-table | 格 (3,1)/(1,3)，边际各4，总8；walker 中 ≥10 的1/4 |
| #example-averages | 2,2,3,5,18：sum30、mean6、median3、mode2、range16；中位数代表 usual，均值仍能还原总量，不能随意删18 |
| #practice-averages | A：mean7、median5.5、mode5、range8。B：mean7、median7、mode7、range2。A 中心较短但波动大；重视可预测性可选B，应说明权衡 |
| #example-grouped | 中点5/15/30；加权和380、n20，估计mean19；后两组按人数都为众数组；无法从组界还原精确range |
| #practice-grouped | 精确表 sum24、n10，mean2.4、median2；分组中点2.5/10/20，sum105、n10，mean≈10.5、众数组5≤t<15。第二均值的近似来自未知组内值 |
| #example-quartiles | Q1=4.5、median7.5、Q3=11、IQR6.5 |
| #practice-quartiles | A：Q1=3.5、median7、Q3=10.5、IQR7；B median8、IQR3。A 中位较低、中间一半更分散；不能推出每个A均小于每个B |
| #retry-data | route number 是类别标签；rounded time 连续；changes 离散。少于两次5人 |
| #retry-table | Awater/tea=2/1；B=1/2；列合计3/3，总6，Bwater1/3 |
| #retry-averages | sum42、n6、mean7、median4、modes3和4、range19。中位数配range保留“usual及波动”信息 |
| #retry-grouped | 中点2/6/10，加权68/10=6.8；精确range未知，不可把12−0当观察range |
| #retry-quartiles | Q1=4、median7.5、Q3=12、IQR8；20改50，range18→48，四分位不变。只对这次极值变更成立，非“任何变化均不影响IQR” |
| #later-check | 总90，前四次66，缺24；median18、range12。全为18的另一组同mean但range0 |

### Statistical diagrams

| 位置 | 独立结果及图的要求 |
| --- | --- |
| #practice-recording | Red7、Blue4、Green3，total14；key2对应3.5/2/1.5个图标。茎叶1:2 5 5；2:1 4 8；3:0 1；median22.5 cm。须保留重复值、单位与键 |
| #example-pie | 6/4/2 of12 的角为180°/120°/60°，合360°；源角度命令需 R1 |
| #practice-categories | dual A5/3/7、B2/6/5；composite顶7/9/12，Wed最大，A>B为Mon及Wed。新pie9/7/4 of20角162°/126°/72°；不可用顶部数充当B段高度 |
| #practice-time | 点(8,12),(9,15),(11,14),(12,18)，9–11横距须为一小时间隔的两倍；两小时下降1°C，不能据连线断言中间实际温度 |
| #practice-grouped | 直方图四个宽5的相接柱，高2/6/8/4；polygon点(2.5,2),(7.5,6),(12.5,8),(17.5,4)；<10为8。右上角用上界，会错移位置 |
| #scatter 示范 | 六对点与 SVG 相符；y≈x+2 在 x3.5 给5.5；线只是目测估读，不推断因果 |
| #practice-scatter | 点(1,9),(2,8),(3,8),(4,6),(5,5),(6,4)，强负相关。示意线10.5−x给x3.5时7；容许合理目测读数6.5–7.5。x20会给负剩余时间且远超观测范围；不可支持该外推或因果结论 |
| #practice-patterns | P完全正、Q完全负；R没有明显直线相关；S弱正向且很散。斜率和强度不能互换。这是微型构造点群，不用它作总体统计结论 |
| #example-density | 宽10/10/20，密度0.4/0.8/0.4；面积4/8/8。最后两柱人数同而高度不同 |
| #practice-density | 宽5/10/15，密度1.2/1.2/0.8；面积6/12/12。把频数当高会多乘组距；最后两组人数相同。题有完整可画数据与作图反馈 |
| #cumulative 示范 | 点(0,0),(10,4),(20,12),(40,20)；n20，Q1≈11.25、median17.5、Q3≈27.5、P90≈35、IQR≈16.25 |
| #practice-cumulative | cum4/12/24/32/40；Q1≈17.5、median≈80/3=26.7、Q3≈37.5、IQR≈20；P80=40min；CF35≈28，≥35≈12人。应标上界，不是(5,4) |
| #box-plots 与 #practice-box | 示范五数2/4.5/7.5/11/16。独立A五数2/4/6/10/20；B0/6/8/10/14。A/B median6/8、IQR6/4、range18/14；较长箱体不代表人数更多 |
| #retry-core | tally10/6/4；图标5/3/2；角180°/108°/72°。茎叶1:1 3 3；2:0 5；3:2。时间点(1,4),(2,7),(5,6)，末横距是首段3倍；等宽测量组可选histogram，不能把无关类别画成时间连线 |
| #retry-scatter | 五点有正相关及散布；近y=x+1的目测线可接受。强度看贴合程度；x20超出1–5，不能据本样本认可值20 |
| #retry-extension | 单柱freq=15×0.6=9。CF新点总24，Q1≈10、median≈15、Q3≈20、IQR≈10；箱端0/40是题目要求的近似假设，非已观察精确最值。R2 指向未重复考查的能力 |
| #retry-grouped | histogram宽4高1/5/2，polygon(2,1),(6,5),(10,2)；dual X3/7、Y5/2，堆叠顶8/9，day2总数较高 |
| #later-check | 类别计数bar/份额pie、时间line、成对scatter、数值分组histogram或polygon；人数翻倍但份额相同，则pie角度不变、同计数刻度的bar高翻倍。它是真实未给图名选法任务 |

### Sets and probability

| 位置 | 独立结果及模型条件 |
| --- | --- |
| #example-venn | ξ=1…12，onlyA4、both2、onlyB2、neither4；union8/12=2/3；补集含B-only。等机会选择才以人数计概率 |
| #practice-sets | intersection{2}；union{2,3,4,5,6,7,8,10}；A′{1,3,5,7,9}；A∩A′为空；n(intersection)=1；{0}不是空集 |
| #practice-venn | 四区10/8/6/6；neither1/5、atleastone4/5、exactlyone8/15；18+14把8人多算一次 |
| #practice-model | 3/8 unlikely、1/2 even chance、7/8 likely、0 impossible、1 certain；等可能的是八个等扇区，非三个颜色名称 |
| #sample-spaces 示范 | 2×3共6个等可能有序格，H且odd有2格，1/3；odd/even标签本身不等可能 |
| #practice-space | 3×3有序表9格；sum5有(2,3),(3,2)，2/9；odd sum4格，4/9；sum2一格而sum4三格 |
| #practice-events | even与>4交于6，既不互斥也不穷尽；union{2,4,5,6}，2/3。odd与6互斥，3/6+1/6=2/3；相同数值不代表同一个理由 |
| #experiments 示范 | 5/20=.25、2/20=.10，pooled7/40=.175；与1/6比较。fair120次期望20、经验.25模型期望30；不能保证某批恰好达到期望 |
| #practice-experiment | .6、.45，pooled48/100=.48而非.525；未来50次fair期望25、经验期望24；既非保证亦非公平性证明。更大的篮球队专属样本不自动代表全校身高 |
| #retry-sets | A′=B，size3；交为空size0；并ξ size7；{0}有一个成员 |
| #retry-venn | union33、both7、teaonly15、coffeeonly11、neither7；Pboth7/40 |
| #retry-events | HH/HT/TH/TT；exactlyoneH=1/2；atleastH与atleastT在HT/TH重叠，非互斥但穷尽 |
| #retry-experiment | pooled27/40=.675；未来80次期望54；每批不必改善，不保证54，也未证明真概率就是.675 |
| #later-check | A-only{4,6}、both{2}、B-only{3,5}、neither{1}；intersection1/6、union5/6、neither1/6；60次放回期望交集10；观察12单独不足以否定模型 |

### Combined and conditional probability — Extension

| 位置 | 独立结果及模型条件 |
| --- | --- |
| #independence 示范 | coin×die12格，heads且even3/12=1/4，union9/12=3/4；乘积是交集。正概率互斥事件不独立，零概率例外已写明 |
| #practice-independent | 单骰even/odd各1/2，交0、乘积1/4，互斥非独立。偏币H2/5与独立骰multiple3的1/3，交2/15、并3/5 |
| #example-tree | HR/HG/TR/TG概率1/6、1/3、1/6、1/3；HG1/3；恰好一个H/R为HG或TR，1/2；每节点分支与端点均合1 |
| #practice-tree | HH/HT/TH/TT=.36/.24/.24/.16；exactlyoneH .48、atleastone .84；100组期望84。题明确两次独立，不偷用未给假设 |
| #example-dependent | 可区分5筹码中20个等可能有序抽取，RR/RB/BR/BB=6/20、6/20、6/20、2/20；exactlyoneR .6、atleastoneR .9；第二分母4 |
| #practice-dependent | 可区分7筹码中42对：RR12、RB12、BR12、BB6；端点2/7、2/7、2/7、1/7；exactlyoneB4/7。B₂ given R₁=1/2，但P(B₂)=3/7，故非独立 |
| #conditional-table 示范 | late given bus12/20=3/5；bus given late12/18=2/3；joint12/50=6/25；overalllate18/50=9/25；参考群体不同 |
| #practice-conditional | 四格16/8/12/24；row24/36、col28/32、n60；C given W4/7、W given C2/3、joint4/15；product14/75≠20/75，非独立 |
| #practice-independent-table | red/blue行6,4 /12,8，row10/20、col18/12、n30；E given R3/5=E；joint1/5=(1/3)(3/5)。确为独立但不是互斥，交集中有6张 |
| #retry-independent | PP/PF/FP/FF=.72/.18/.08/.02；exactlyonefail .26、atleastfail .28。第二机器在两条分支均用.8依赖独立假设，题和反馈都说明条件 |
| #retry-conditional | 可区分2G3Y中20对，GG/GY/YG/YY=.1/.3/.3/.3；atleastG .7；G₂ given Y₁=.5，Y₁ given G₂=.75；后者分母是所有G结尾路径 |
| #later-check | 等概率选袋；A-red1/3、B-red1/6；P(red)=1/2，P(A given red)=2/3；red given A2/3≠1/2，非独立；恢复袋后100次期望50 |

## 图形、尺度与分位约定的独立检查

20 SVG 均以原始 SVG 栅格化后逐张查看，并读 XML 坐标；未通过浏览器加载页面。title/desc/viewBox 可解析，几何尺寸非负。下面列出实际校准，不把“XML能读”当作“数学图正确”。

以下文件名均加前缀 `assets/img/igcse-statistics-` 和后缀 `.svg`。

| 图 | 校准/重建结果 |
| --- | --- |
| bar | 零线y260，30px/人；柱高180/120/60对应6/4/2，等宽留空 |
| dual、composite | 零线y260，15px/人；A4/6/5、B6/3/7。堆叠上段按差值读，顶10/9/12 |
| dual-check、composite-check | 同15px/人；A5/3/7、B2/6/5，顶7/9/12；解答SVG位于对应关闭解答内 |
| equal-histogram | x=70+10t；y=260−20f；四个相接宽100px柱代表10分钟，高4/8/6/2，无把类别间空隙用于数轴区间 |
| polygon | 同轴，点(5,4),(15,8),(25,6),(35,2)，准确在中点，不是组上界；没有新增虚假观测 |
| density | x=70+10t；y=250−200d；实际宽100/100/200px、高80/160/80px，对应宽10/10/20、密度.4/.8/.4；面积恢复4/8/8 |
| cumulative | x=70+10t；y=260−10CF；(0,0),(10,4),(20,12),(40,20)的点及连接相符 |
| cumulative-check | x=70+8t；y=260−5CF；六点(0,0),(10,4),(20,12),(30,24),(40,32),(50,40)相符；两张CF纵轴尺度不同，但各自线性且标签正确 |
| line | 横轴周数1–4，各100px；纵轴10px/人，y260为0；8/12/10/16对应点y180/140/160/100 |
| scatter、scatter-check | x=70+(400/7)x；y=260−(200/12)y，逐点重建六对数据相符。两条虚线分别y=x+2、y=10.5−x；非把数据点逐个连线。合理目测线不要求回归系数或唯一截距 |
| pie、pie-check | 以圆心(205,165)、r105，从弧端坐标重算扫角：180/120/60及162/126/72；和360°，图例频数与正文相符 |
| box-check | x=70+20t，共用0–20分钟轴；A whiskers2/20、box4/10、median6；B whiskers0/14、box6/10、median8；位置、标签均一致 |
| venn、venn-check | 四个文本区分别位于A-only/overlap/B-only/neither；成员/计数与逐题结果相符，外区仍在全集框内 |
| tree、tree-dependent | 两阶段叶位置及对应分支标签不混；独立树端点1/6,1/3,1/6,1/3；不放回树第二分母4，端点3/10,3/10,3/10,1/10；逐节点合1 |

原始数据的四分位采用“排序后取上下两半中位数，奇数n时剔除全体中位数”的本页约定；所有现有原始列表任务均n=8，按该约定独立核算一致。页面明确小样本约定会不同，**不把本页约定宣称为官方唯一约定**。本次没有发现把原始列表位置和CF的n/4、n/2、3n/4混用。奇数n规则虽已讲明，尚无专门奇数列表尝试；这是练习广度的局限，未据此制造官方遗漏。

CF使用题目指定的直线段和组内线性估计，读出的是变量值，不是百分比得分。题中t<上界的方向与“至少35”取补的方向一致。重试箱线图0/40明确是近似端点而非观察极值，不作为数值错误。未要求1.5IQR异常值规则。

## 题前泄露、初学者决策、反馈与双语

- 四页的必要概念与完整示范正常展开。公开示范能连续读到方法选择和检查：例如密度先解释宽度已表达人数份额、条件概率先缩小已知参考群体、加权均值先区分记录数与数值总和；不要求初学者猜选法。
- 44 个新尝试/重试/稍后题框的提示、完整解答在源中分别默认关闭。解答图、其 alt 及答案说明位于对应解答内；未发现把独立作图答案放到题前的情况。源结构不能确认浏览器折叠、焦点或辅助技术实际行为，留给统一网页验收。
- 分类图 #practice-categories 已用新到场和出行数据，不能再报告“照抄示范”。G #later-check 真正不预给图名；C #later-check 不命名树/表方法，给定条件要求重新建模，不能报告全组只有指定公式代入。
- P #practice-model 的八扇区分配沿用紧前讲解，标题“Count sectors, not labels”也提示关键选择；D #practice-data 的访问列表沿用示范表。因此这两处只宜作有支架熟练证据，不能单独声称迁移独立。P #practice-space 的新有序和值任务、D #retry-data/#practice-table 的新记录，补足相应目标的真实独立产出；本次未把该局部支架问题夸大成整体目标缺失。
- 反馈不仅给数字：图题要求轴、单位、点、面积/高度/差值，条件题解释分母变化、反向条件和独立检验；数据比较说明中心与散布并保留个体推断局限。恢复链接指向具体概念，后续有 #later-check 及 mixed-review/#data-review。链接存在不证明已经发生延后保持。
- R2 外，恢复任务有新情境或表征：标签数字的公交路线、由neither反求Venn交集、机器故障、由第二结果反求第一条件等。G 的英文恢复导航未显式列新 #retry-grouped，而中文已列；题本身可见、锚点可达，不单列为阻断问题，整理时可同步该链接。
- 8 页逐对英文 Question 完全一致；按数学片段提取的TeX序列、内容锚点一致。逐段读中文解释，未发现更换数据、遗漏概率条件或把Extension汉化成Core。frontmatter均为 subjects / igcse / igcse-mathematics，MathJax、reading_layout、study_page为true；中文lang为zh-CN、translation_of与对应英文永久链接相符；每页必需五锚点存在、无重复。
- 双语一致不是正确性结论，R1正是同步错误的反例。未运行全站检查，也未据本组链接声称所有外组路径已通过。

## 官方实际阅读、身份与范围边界

使用公共缓存 `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/sources/`。实际读取 PDF 页的 regular `page.extract_text()`，没有读巨量空白的layout文本。以下页码均为一基PDF页码。官方spec PDF p.12=N9，pp.23–25=S1–S18，对应印刷p.13及pp.24–26。

独立查看了spec p.23、25渲染图，核对Core/Extension列：S4不等组距histogram/CF/box，S5quartile/IQR/percentile，S17及S18为Extension。本组其余所列内容为Core共同范围。S17图像明确是交集乘法；串行文字提取的union是伪错，**没有官方错式发现**。N9相关符号亦按集合意义核对，未传播重复union提取结果。G23/G24不属本组，本报告不作其范围判断或沿用误判。

| 官方材料 | 实际读过的QP页/题 | 实际读过的配套MS页 | 独立核对的用途/结果 |
| --- | --- | --- | --- |
| 9260/1C | p.4 Q5；p.5 Q6 | p.4 Q5–6 | dual画图与概率词汇；Friday20/23，合43、差3；样本结果条件下certain判断 |
| 9260/1C | p.12 Q12；p.20 Q24 | p.7 Q12；p.10 Q24 | 人数参考群体；female getting off为6；square且even={4}，1/12 |
| 9260/2C | pp.13–14 Q14 | p.7 Q14 | scatter、强正相关、拟合及外推；首次pass3/10；MS估计4，外推不可无条件接受 |
| 9260/2C | p.21 Q23 | p.9 Q23 | 双向概率表；Sport .30，所需两格.11，200×.15=30 |
| 9260/1E | p.7 Q9；p.13 Q15 | p.5 Q9；p.7 Q15 | Venn1/12；Q15的百分条/饼图任务及MS答案27已读，未声称重建原图全部细节 |
| 9260/1E | pp.20–21 Q20 | p.11 Q20 | 累积图纠错：累计46应48；应画上界而非中点 |
| 9260/1E | p.26 Q27 | p.13 Q27 | 不放回至少一蓝：1−(5/9)(4/8)=13/18 |
| 9260/2E | p.3 Q4；p.6 Q7 | p.4 Q4；p.6 Q7 | 独立重复(2/3)²=4/9；双向概率表解释 |
| 9260/2E | p.9 Q10；p.17 Q20 | p.7 Q10；p.12 Q20 | 组中点加权缺频数x=34；宽10/5/15/30与密度1.7/2.4/.2/.3 |

QP/MS上述页为实际文字阅读及独立数学核对；本次未逐页视觉重建官方所有图，不能把“提取读过”写成“官方图已全部目视核查”。作者课程20张SVG则全部另有实际图片查看。

四卷封面均Specimen 2018；文件URL中的2016不是考季。正文全部标自拟/无官方分值，未把这些自拟检查点称作官方分值。统计没有新增标准差、回归计算、显著性检验或贝叶斯定理必考要求；无fx-CG50考场许可主张。

## 首轮交接与尚欠验收（历史；当前状态见文末）

本次已完成：四主题双语实际阅读；所有现有任务及公开示范的独立核算/推理重建；20图坐标/尺度及栅格化图片查看；逐条首次任务覆盖、题前帮助、恢复与后续路径检查；官方范围及所列QP/MS实际页核对；版本变化重查与SHA留存。

尚欠：

1. 作者按 R1 恢复中英命令，按 R2 补同目标恢复任务并同步记录，随后独立复核受影响段和新SHA。报告中的示例补题只是建议，尚未进入课程源稿。
2. 主执行者统一Jekyll及现有检查、生成HTML、全部公式真实显示、桌面/手机/深浅主题阅读、键盘/折叠/图片/语言切换/外组链接检查。本次全部未做，不能称“技术通过”。
3. 目标学生真实作答、提示使用、错误恢复与延后保持证据。本次未组织学生试用，不以作者或审查者模拟解题代替。

## 首轮审查源文件 SHA-256（历史）

本报告不包含在以下被审查文件清单内。哈希为完整文件字节的SHA-256；此清单与收尾重新计算比较，正文/SVG无审查中漂移。修补后应保留本报告原版本身份，并追加修补复核的版本与结论，不用新稿覆盖旧结论的依据。


| 文件 | SHA-256 |
| --- | --- |
| `assets/img/igcse-statistics-bar.svg` | `3abe7c7fe0046ab82a04755c1f075300214339944cf4073904b69a3ceb4bafbf` |
| `assets/img/igcse-statistics-box-check.svg` | `db7c5820c8c5d142fdde7a2698d4cab4f83012a3fc93a2243a9100bbb57d4547` |
| `assets/img/igcse-statistics-composite-check.svg` | `e5056dac469437336b1e4715fbfca01f71eb3038418dec818eb85b8f36689966` |
| `assets/img/igcse-statistics-composite.svg` | `7f6e3834353870a4d6f77d50ff5f727295825cd07d96275fe112022e8b525549` |
| `assets/img/igcse-statistics-cumulative-check.svg` | `5263899baacebcb458cc6b6373c7cfa8e0e4766fb2df439f6503d1dc8632bf57` |
| `assets/img/igcse-statistics-cumulative.svg` | `e96700b42800d5f32719d3aff5cbbe495673823174e63aa0dc17248980c9ce7b` |
| `assets/img/igcse-statistics-density.svg` | `5c89e572032609b1df91f7aa5c9f08ae6b09fc78fce4992342c9f944046a8525` |
| `assets/img/igcse-statistics-dual-check.svg` | `e2f93e0e28a7a62c0f89be52255e87aa0b1145982003d5a8d31429fd38669a04` |
| `assets/img/igcse-statistics-dual.svg` | `377237ebb6646e000a26888a4ffb7eecda5da86b279a46bd00dea7e22ca20941` |
| `assets/img/igcse-statistics-equal-histogram.svg` | `a3e9ef909612751c693dcdac9f5382ce2e12e0fb49cfea54e987eff6f1aaa9aa` |
| `assets/img/igcse-statistics-line.svg` | `d42ebc4be15cfba41f936d81f53be3a873fda8b2d1e1c75e221b57e13e6106ca` |
| `assets/img/igcse-statistics-pie-check.svg` | `4d208d5b426751f2bedd59c1393195bbc0373599af118526f97aec9c32108ed5` |
| `assets/img/igcse-statistics-pie.svg` | `4ad966021f47736bc95c0e9c06d9a77f9f39907b0251489aa69288795d1927e2` |
| `assets/img/igcse-statistics-polygon.svg` | `0f1fb21da4bf4659a9a0a26e51a3071ae1dac0cf61f5098df772c71844aa86d5` |
| `assets/img/igcse-statistics-scatter-check.svg` | `79a98e094a47b92ef46e94899bc5467640652eee9d50532bd1583a6492e68776` |
| `assets/img/igcse-statistics-scatter.svg` | `a2f86c83a27d69fe710f11e08600f8242c2854b77405d0062bc33987c40a7b79` |
| `assets/img/igcse-statistics-tree-dependent.svg` | `b3e53f24e388fdd7e7fc0d5bacd30a5d01442de8b10731501fe41661998550eb` |
| `assets/img/igcse-statistics-tree.svg` | `54ee54ee35bc0d5fbf8a3938183c96469949602fbc578efbdc0fa07ba4317c36` |
| `assets/img/igcse-statistics-venn-check.svg` | `9919f8be82a2ac668ff50819f319dce6dbb703ac0deed89dff0ab61d2fcd1db4` |
| `assets/img/igcse-statistics-venn.svg` | `68bcde70265363005ff5c8aff221f1c9b950f7ccc2f596abc8494c4da7902980` |
| `docs/agents/implementation-igcse-statistics-2026-10-27.md` | `5ec4a12d216d4b19f23219db14032c9e1bdcd1e255926adc74873496d028f7c2` |
| `igcse/mathematics/combined-and-conditional-probability.md` | `8c63d60914ef3b3095095756593bade651978885825bfb36ea90709c616c63ef` |
| `igcse/mathematics/data-and-averages.md` | `165b29a38a9358b0b3ae78bb613ff3e49e924bb8295709e9dc9dec4e3556d30b` |
| `igcse/mathematics/sets-and-probability.md` | `7159d4f6184b45a3dd9a429c29c8b01cf2d6257b55bdaa8e3a749c656ff8b162` |
| `igcse/mathematics/statistical-diagrams.md` | `f9dbdb90043aca2f04406a2fd12a70fecfa758b493f33b5e504bb9b7aaa76f4e` |
| `zh/igcse/mathematics/combined-and-conditional-probability.md` | `27cf3f7c6fa14ead5f7efabfb4f8cce88932cd445b58e79853fa0c6022c28ec4` |
| `zh/igcse/mathematics/data-and-averages.md` | `f41d07eeb9a576bf61a20e7c56a5038d0095adf938d2236cd6198a37ddf6982f` |
| `zh/igcse/mathematics/sets-and-probability.md` | `fbfaf36a3b8fb71dcf66c60850dc0b4306a4789d55554a2fcc78c3b6031cd6ec` |
| `zh/igcse/mathematics/statistical-diagrams.md` | `d634ebe51583ed2d823dcce0fae1bd982d56c6cf49c6a1a546aa85f25d7be713` |


## 修补冻结后的关闭复核（中间版本；最终图及公式版本见后）

2026-10-27，按用户要求等待 Poincare 修补冻结后复核。冻结依据为作者记录“独立审查后修补与再次冻结（当前版本）”及其当前9项变更SHA，逐文件与实际字节吻合；另与首轮清单比较，原20个SVG全部未改。此次只更新本审查报告，未改统计正文、作者记录或图；本轮另行获授权修补的Number源不属于Statistics审查写入。

### R1：已关闭

逐项比较中英图表页冻结前后源差异，确认每语言2个茎叶键的 `\mid`、12个角度的 `^\circ`、4个组界的 `\le` 均恢复。重新阅读对应示范和重试，数据/计算未变：键2|0表示20cm；示范角180°/120°/60°，重试角180°/108°/72°，四个组界依次0≤t<10至30≤t<40。没有将普通单词替换成数学命令。全八页定向检查未发现原缺命令模式；真实网页MathJax显示仍留待主执行者统一验收，关闭的是已证实的源字符错误。

### R2：已关闭

| 新产出 | 实际读过的位置 | 审查者独立核算与学习判据 |
| --- | --- | --- |
| 不等宽直方图绘图/纠错重试 | 图表页 #retry-density；EN Question第501行、中文第505行；题干、提示、完整解答及新图全部读过 | 新组距4/6/10分钟、f6/9/10，密度1.5/1.5/1；面积6/9/10，total25。直接用f当高会给面积24/54/100，不能保留原人数。题要求有轴、尺度、真实宽度和面积解释，能重新考查原来“频数当密度高”的错误 |
| 一般百分位数重试 | #retry-extension；EN Question第471行、中文第475行；EN解答487–491、中文491–495 | n24，P60先取累计位置14.4，再在(10,6)和(20,18)间按直线插值，10+(14.4−6)/(18−6)×10=17min。反馈区分纵轴位置、横轴时间及组内均匀估计，不把14.4称观察到部分人 |

两个帮助分别默认关闭；#retry-density 的数据、题前文字和标题不含正确密度，解答图及其alt在关闭解答内。新图是 `assets/img/igcse-statistics-density-retry-check.svg`，不以“数量增加”代替产出判断。恢复导航从面积错误回密度、从分位错误回累积图，并直连相应新任务；英文也已补 #retry-grouped，与中文一致。未删首次目标或原恢复内容。

对新图独立读XML并栅格化后实际查看：x=70+25t，y=280−120d，三柱坐标/宽/高分别(70,100,100,180)、(170,100,150,180)、(320,160,250,120)，对应正确的区间4/6/10与密度1.5/1.5/1。密度轴0/.5/1/1.5/2、时间轴0/4/10/20线性；柱相接，面积标签6/9/10与图相符，图中文字可读。未在手机网页查看，保留该验收边界。

### 单一路线与受影响段复核

图表页的R1/R2及中英恢复导航均作冻结前后逐行差异比较。其余6页重读标题、开头、有关概念链接、练习/恢复导航、下一步与折叠来源的改动位置，并检查当前整页Question/TeX/锚点。

- Data：记录→平均数→四分位/百分位；基本数据类型、表格、平均数及比较任务保留。
- Diagrams：记录/类别/时间/成对数据→不等宽面积→累积图→箱线图；不再让一个群体跳过后半。
- Sets：集合与单次结果→事件关系/实验→组合与条件概率。下一步统一接条件概率，然后混合回顾，没有Core出口。
- Combined：标题和开头改为自然主题，从独立组合继续到已知条件；基础概率先修链接保留。
- 可见标题、正文、折叠来源及导航中未残留Core/Extension分流声明。旧 #retry-core、#retry-extension 只作为稳定URL锚点保留，不是学生可见群体标签。官方列位仍只在作者/审查记录中解释。
- 未发现基础知识或任务因单一路线被删。原首轮数学与图形证据继承，新增/受影响部分按上文重核；不把本次局部复核称为重新审了未变的官方所有图页。

四页每语言当前Question数14/17/12/10；TeX段58/74/79/50；锚点25/30/23/19；独立/重试/稍后框11/15/11/8。逐对英文Question、完整TeX序列、稳定锚点一致；每个练习的提示/解答分别默认关闭；必需锚点和本页恢复链接存在。原20图SHA均与首轮一致，新图独立核验。上述数量仅用于检查遗漏。

### 当前交接状态

| 项目 | 状态 |
| --- | --- |
| R1数学命令 | 独立复核关闭 |
| R2不等宽绘图及一般百分位恢复产出 | 独立复核关闭 |
| 学校Extension单一路线、基础保留及前后顺序 | 本组源级内容复核完成 |
| 本组内容审查 | 对下列冻结版本通过；没有未关闭的本轮内容发现 |
| Jekyll、全站检查、生成HTML、网页MathJax、桌面/手机、键盘/深浅主题/全局链接 | 本审查未运行，交主执行者统一验收 |
| 学生真实作答与延后保持 | 未进行，未验证学习效果 |
| Git提交/推送/发布 | 本审查未执行 |

### R1/R2 修补中间版本 SHA-256（历史）

以下取代首轮清单作为本次关闭的版本身份。原始清单继续保存；共8份正文、21图和1份作者记录。写入后再次与文件字节比较，若作者继续修补，须重查受影响段并追加新版本，不静默沿用本结论。

| 文件 | SHA-256 |
| --- | --- |
| `assets/img/igcse-statistics-bar.svg` | `3abe7c7fe0046ab82a04755c1f075300214339944cf4073904b69a3ceb4bafbf` |
| `assets/img/igcse-statistics-box-check.svg` | `db7c5820c8c5d142fdde7a2698d4cab4f83012a3fc93a2243a9100bbb57d4547` |
| `assets/img/igcse-statistics-composite-check.svg` | `e5056dac469437336b1e4715fbfca01f71eb3038418dec818eb85b8f36689966` |
| `assets/img/igcse-statistics-composite.svg` | `7f6e3834353870a4d6f77d50ff5f727295825cd07d96275fe112022e8b525549` |
| `assets/img/igcse-statistics-cumulative-check.svg` | `5263899baacebcb458cc6b6373c7cfa8e0e4766fb2df439f6503d1dc8632bf57` |
| `assets/img/igcse-statistics-cumulative.svg` | `e96700b42800d5f32719d3aff5cbbe495673823174e63aa0dc17248980c9ce7b` |
| `assets/img/igcse-statistics-density-retry-check.svg` | `94cf7a0de91f60970c4b608a2ff52a6b3f710f3c4f5bd1c1d9fb47228763efd6` |
| `assets/img/igcse-statistics-density.svg` | `5c89e572032609b1df91f7aa5c9f08ae6b09fc78fce4992342c9f944046a8525` |
| `assets/img/igcse-statistics-dual-check.svg` | `e2f93e0e28a7a62c0f89be52255e87aa0b1145982003d5a8d31429fd38669a04` |
| `assets/img/igcse-statistics-dual.svg` | `377237ebb6646e000a26888a4ffb7eecda5da86b279a46bd00dea7e22ca20941` |
| `assets/img/igcse-statistics-equal-histogram.svg` | `a3e9ef909612751c693dcdac9f5382ce2e12e0fb49cfea54e987eff6f1aaa9aa` |
| `assets/img/igcse-statistics-line.svg` | `d42ebc4be15cfba41f936d81f53be3a873fda8b2d1e1c75e221b57e13e6106ca` |
| `assets/img/igcse-statistics-pie-check.svg` | `4d208d5b426751f2bedd59c1393195bbc0373599af118526f97aec9c32108ed5` |
| `assets/img/igcse-statistics-pie.svg` | `4ad966021f47736bc95c0e9c06d9a77f9f39907b0251489aa69288795d1927e2` |
| `assets/img/igcse-statistics-polygon.svg` | `0f1fb21da4bf4659a9a0a26e51a3071ae1dac0cf61f5098df772c71844aa86d5` |
| `assets/img/igcse-statistics-scatter-check.svg` | `79a98e094a47b92ef46e94899bc5467640652eee9d50532bd1583a6492e68776` |
| `assets/img/igcse-statistics-scatter.svg` | `a2f86c83a27d69fe710f11e08600f8242c2854b77405d0062bc33987c40a7b79` |
| `assets/img/igcse-statistics-tree-dependent.svg` | `b3e53f24e388fdd7e7fc0d5bacd30a5d01442de8b10731501fe41661998550eb` |
| `assets/img/igcse-statistics-tree.svg` | `54ee54ee35bc0d5fbf8a3938183c96469949602fbc578efbdc0fa07ba4317c36` |
| `assets/img/igcse-statistics-venn-check.svg` | `9919f8be82a2ac668ff50819f319dce6dbb703ac0deed89dff0ab61d2fcd1db4` |
| `assets/img/igcse-statistics-venn.svg` | `68bcde70265363005ff5c8aff221f1c9b950f7ccc2f596abc8494c4da7902980` |
| `docs/agents/implementation-igcse-statistics-2026-10-27.md` | `9063b326deb5b66153ea8bc537b52e69b04fda36e0f6f28d509c00e6f61c2b74` |
| `igcse/mathematics/combined-and-conditional-probability.md` | `f3d8172a1477b096280df8aafa468e63825e21252fdad2d2e1c83e6f44503212` |
| `igcse/mathematics/data-and-averages.md` | `f677f68c4c58fb9f66ba27309735744adb576be1e705d17dc2dbc9139bee393b` |
| `igcse/mathematics/sets-and-probability.md` | `b3466ec40e59a972169378aa17c83208f022cfa4582aa4cb2e5346bc7de7bb8f` |
| `igcse/mathematics/statistical-diagrams.md` | `86a1b3daa2a2d879eb620124a9f0ec79804e0cd0f4c268490fb87158b22433f2` |
| `zh/igcse/mathematics/combined-and-conditional-probability.md` | `12580cd49c4bd48357d3315df264d447fcbf5b827c4f0f1a38382ea145776b18` |
| `zh/igcse/mathematics/data-and-averages.md` | `c7bfeba9c1493b23a88ec903555e38b76dfb8376eaa7752ac690aa2d57ab7fa0` |
| `zh/igcse/mathematics/sets-and-probability.md` | `b179f937bc31e93d74ca85527d425e8ab167d14aaba0f39924becee625d62afe` |
| `zh/igcse/mathematics/statistical-diagrams.md` | `bb1ea31c9171811375a3b35c3ae8a701a66538e377a81c1c12d19ebff7787fe5` |


## 最终手机图与公式冻结复核（当前权威结论）

2026-10-27，收到 Poincare 明确完成“21图字号修改、density两关系式拆行”的最终冻结后，已实际读取最后源文件及作者记录“手机图内标签修补与最终冻结”和“最终冻结 SHA-256（当前权威清单）”。最终29项作者源清单与实际文件字节全部吻合；另记录作者实施记录自身SHA，合30文件。此前R1/R2中间关闭段继续保留为版本历史，不能将其中“原20图未改”的字节声明套用于本次字号版本。

### 受影响段的实际复核与关闭

- **R1保持关闭。** 再次检查最终8页，原2个茎叶键、12个角度、4个组界命令在每语言均已恢复，未出现原缺命令模式；最终图表页与中文对应公式仍完全配对。
- **R2保持关闭。** 重新读取最终 #retry-density 和 #retry-extension。新直方图继续要求学生按不等宽数据绘图、用面积还原并诊断错高；独立结果为宽4/6/10、密度1.5/1.5/1、面积6/9/10、总25。新P60仍先取累计14.4，再在(10,6)到(20,18)内线性估读17min，未把累计位置误作时间。题前没有正确密度或答案图，提示/答案分别默认关闭，新图仍位于解答内，恢复路由与目标匹配。
- **Density两关系式拆行复核完成。** 最终中英 #unequal-histograms 的密度定义与频数还原分别为两个正常展开的显示公式：frequency density=frequency/class width；frequency=class width×density。它们仍紧接面积/组距解释，未删必要关系、单位或条件；第二式统一使用class width，含义明确。拆行只改变呈现，首轮面积与频数计算证据继续成立。最终对应TeX段由中间74变为75，两语言一致。真实手机MathJax是否消除横滚仍由主执行者复验。
- **单一路线维持。** 最终8页可见标题、正文、来源折叠区及导航没有Core/Extension群体分流；保留基础到不等组距/分位/条件概率的顺序和全部必要任务。旧 #retry-core / #retry-extension 只作稳定锚点，未改链接身份。

### 最终21图：坐标、尺度及缩小标签独立复查

审查者对21个最终SVG重新读取XML、按原任务数据核对数学坐标并实际栅格化，每张均以282px宽查看，21图全部出现在三张按原尺寸拼排的检查页中。此次检查的是最终文件，不是作者截图或旧哈希对应图片；没有打开站点/浏览器。

| 最终viewBox宽度与图组 | 源字号 / 282px下名义字号 | 实际复核 |
| --- | --- | --- |
| 520：18张柱图、散点、饼图、箱线、Venn、累积图及其他基础图 | 22 / 约11.93px | 图例、轴名/单位/刻度、扇区角、集合成员和计数可辨认；未见重叠或裁切 |
| 560：2张树图 | 23 / 约11.58px | 分支颜色事件、1/2/1/3等概率与末端路径概率可辨认，无路径标签混淆 |
| 640：新密度重试图 | 26 / 约11.46px | area及6/9/10分两行，在各自柱内；柱宽/高度、轴标签与面积文字对应清楚 |

数学复查并非只检查字体属性：

- 柱/双柱/堆叠重新由零线和像素比例还原全部频数，堆叠逐段底边/顶边与总数相符。
- 三张直方图重核真实组界、宽度、密度/频数高度和相接关系；新图x=70+25t、y=280−120d，宽100/150/250px、高180/180/120px，仍恢复6/9/10人。
- 两张CF、频数折线及时间折线逐点重建，原校准及数据一致；两张散点的六对点及目测线与正文相符。
- 两张饼图由弧端坐标再算180/120/60及162/126/72度；箱线图的共同轴、箱端/中位/极值，Venn区域成员，树图分支/端点概率与原独立结果一致。
- 全21图的title/desc、viewBox及数学数据保留。没有用新字号掩盖缺数据或删替代文字；新图换行只调整面积标签布局。

该检查支持最终图源与282px栅格下的标签阅读，不等同手机真实网页、深浅主题、键盘或屏幕阅读器验收。主执行者统一网页验收的责任与未做状态不变。

### 最终状态与SHA

本组针对最终冻结源的内容审查通过，**R1/R2无未关闭项**；新增手机图内标签及density拆行的源级复核完成。学校Extension单一路线与基础保留已核。未运行Jekyll、浏览器、全站检查或学生试用，未执行Git提交/推送/发布；本审查只更新自己的review，未改Statistics源。

以下是本次最终关闭依据；收尾再次与文件字节逐项比较，无漂移。修补后的后续任何变化应另记受影响复核，不静默继承本结论。

| 文件 | SHA-256 |
| --- | --- |
| `assets/img/igcse-statistics-bar.svg` | `052149e6096ecafb41b850953ed113c470eebb1f6f5c9c88573b2aaaf63dc413` |
| `assets/img/igcse-statistics-box-check.svg` | `c3776cbbb8ca1c3552a8335d2f249c7ba27eb52984fee6272949dd868c68fbab` |
| `assets/img/igcse-statistics-composite-check.svg` | `12b28e0670b08ef1edc1ab155c7358661101a2874da96a1448b5477936270a83` |
| `assets/img/igcse-statistics-composite.svg` | `f2a4e2c039ae3a434c514215a85fad972cf4a9104112fcaa0f0a3ed167d8962f` |
| `assets/img/igcse-statistics-cumulative-check.svg` | `ec7ebf0aaade73b8e3386840dc0073e34921943322a39cc65b6e3934c064a540` |
| `assets/img/igcse-statistics-cumulative.svg` | `8b257b44ed057531fcaf545500ddc2b4dacabc88c1609d7f15dc57dd67d5eba5` |
| `assets/img/igcse-statistics-density-retry-check.svg` | `80911bdd6d476b9a3633f53f7b2823b7cd0221ffe95aff9b49d8d85b3b615f20` |
| `assets/img/igcse-statistics-density.svg` | `6e9ce170402d56ceff7b2ba746485060b20c883a0b89311b6bd449a167b2220a` |
| `assets/img/igcse-statistics-dual-check.svg` | `84b1cadada063a4fd5309a2a6937ffabe0e65e950e2f0436a4d719c33589c030` |
| `assets/img/igcse-statistics-dual.svg` | `daf078a56524b433f7abcee5de12ce66ffd96666ef79ba7e00cc14cebef49ebe` |
| `assets/img/igcse-statistics-equal-histogram.svg` | `659a2163021c1a1621e6dae1b379d98882f2fc6481458035394e672fc63fd0e4` |
| `assets/img/igcse-statistics-line.svg` | `be8d1f88054d4d977b7f759ddd643dc248958b78adb6f23c9b1b35de5e84c489` |
| `assets/img/igcse-statistics-pie-check.svg` | `b3b3f3b071fe6c5cea5b719108aca271ba9072327a146faf1a839cd2b0b02c35` |
| `assets/img/igcse-statistics-pie.svg` | `8aa5adb6a13d146ee90049c7e51875b8fb6a8090605ae2f0c999e91957fa4045` |
| `assets/img/igcse-statistics-polygon.svg` | `75656308baf3911e0f39c13b6a1351b5d1b15d34827f5a315f2bd3bfd2c34b78` |
| `assets/img/igcse-statistics-scatter-check.svg` | `58f304ca9b28c99c168a2a83a824e339dba128db080f87211ef9e0a9bb73d4a0` |
| `assets/img/igcse-statistics-scatter.svg` | `7e549f2d12f72f645f235555bbcaf9bdb526a989c0fd6ae22824ed963bb0a5e0` |
| `assets/img/igcse-statistics-tree-dependent.svg` | `2d0157e08c8241d52352023fa9b8864f0bb0134a532437512e237fecc3f4090f` |
| `assets/img/igcse-statistics-tree.svg` | `de88f1a713f40f82002ae9ad6934bbd80c4c9fc0ad2e6d70dd67c72b14b12a4a` |
| `assets/img/igcse-statistics-venn-check.svg` | `7542a2f1e0def7e75e216cba574e7365bfb2eab92b8d7151c957237888975dc2` |
| `assets/img/igcse-statistics-venn.svg` | `46a3f60dfc70e8ff4e41bdbf8c0fdffea939bcb40af6b24ec9df236fc43610dc` |
| `docs/agents/implementation-igcse-statistics-2026-10-27.md` | `6f4f429951136278479a0007aa181cc9053c56718137598a09352b8a5a4da4f3` |
| `igcse/mathematics/combined-and-conditional-probability.md` | `f3d8172a1477b096280df8aafa468e63825e21252fdad2d2e1c83e6f44503212` |
| `igcse/mathematics/data-and-averages.md` | `f677f68c4c58fb9f66ba27309735744adb576be1e705d17dc2dbc9139bee393b` |
| `igcse/mathematics/sets-and-probability.md` | `b3466ec40e59a972169378aa17c83208f022cfa4582aa4cb2e5346bc7de7bb8f` |
| `igcse/mathematics/statistical-diagrams.md` | `c8041ff497269b047fde01f22dc6bd96398fecf58c294e018eaccad25855d2ac` |
| `zh/igcse/mathematics/combined-and-conditional-probability.md` | `12580cd49c4bd48357d3315df264d447fcbf5b827c4f0f1a38382ea145776b18` |
| `zh/igcse/mathematics/data-and-averages.md` | `c7bfeba9c1493b23a88ec903555e38b76dfb8376eaa7752ac690aa2d57ab7fa0` |
| `zh/igcse/mathematics/sets-and-probability.md` | `b179f937bc31e93d74ca85527d425e8ab167d14aaba0f39924becee625d62afe` |
| `zh/igcse/mathematics/statistical-diagrams.md` | `685351eb5265a03440572dc471877c65e1eb93e856d3994a7ab5e12010fdf9f2` |

## 附录：main 面包屑最小修补只读复核（2026-10-27）

结论：本次源级复核未发现当前课程的阻断性回归，修补针对中文课面包屑显示 Mathematics 的实际问题成立；最终生成页与视图验收仍由主执行者完成。

- `when "mathematics"` 仅在 `grade: igcse` 时输出课程链接，英文为 IGCSE Mathematics、中文为 IGCSE 数学，分别指向 `/igcse/mathematics/` 与 `/zh/igcse/mathematics/`。当前页仍由原有 `forloop.last` 分支处理；A2 课程关系与计算器专用分支未改。
- IGCSE 阶段链接加既有 `language_prefix`，会同时修正其他中文 IGCSE 页的阶段返回路径；已核对 `/zh/igcse/` 入口及中文课的 `lang`、`translation_of`。一个维护边界是：非 IGCSE 的独立 `mathematics` 路径段现固定显示纯文字，原通用回退可能生成父级链接。现有对应路径仅找到六个 `layout: null` 的旧计算器重定向页，其专用内容不调用面包屑，因此未发现当前可达页面受损；将来若新增此类正常课程路径，应重新检查此回退。
- 新断言从 `site-breadcrumb` 的 nav 内检查双语阶段链接，并对所有主题与 mixed-review 检查课程名称和链接；课程入口自身不要求重复的父级课程链接，处理合理。`node --check scripts/test-igcse-mathematics-content.js` 实际通过；生成 HTML 断言本轮未运行。精确字符串匹配与当前模板一致，后续若仅调整标签内空白需同步断言。
- 本轮仅追加本附录，未修改模板、测试、课程、CSS 或 layout，未构建、未使用浏览器。58 个 article 正文相同及定向 8 视图的证据由主执行者补充，不在此预称通过；既有 Statistics 内容冻结结论与 SHA 清单保持独立。

本次实际读取并在附录写入前复核一致的文件 SHA-256：

| 文件 | SHA-256 |
| --- | --- |
| `_includes/breadcrumb.html` | `89d4e349303ff31f79cc43995dbd4e03a672f8e9aa2bcfce6f311ba8b42b3849` |
| `scripts/test-igcse-mathematics-content.js` | `a9531d26183aa0b4b7ddd10a800f2140e52d6cfc58fcd5293bb20266b0fb4a8f` |
