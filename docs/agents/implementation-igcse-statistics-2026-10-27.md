# IGCSE Mathematics：统计与概率有界制作记录

日期：2026-10-27。作者写入边界：四个主题的中英文 Markdown、`assets/img/igcse-statistics-*.svg` 与本记录。仅本地制作，不提交、不推送、不发布；其他作者同时工作，不回滚、不修改入口、共享样式、测试或已认可分数样章。已读根 AGENTS、RTK、课程长期标准 v1.1、全课程制作路线、公式指南、分数样章及其双语格式。

最新状态：已按 Gauss 独立审查 R1/R2 修补并按用户新要求改为 Extension 单一路线，等待受影响段的独立复核。最终冻结 SHA 及修补证据在文末；前轮冻结段保留为历史，不代表当前文件身份。未构建、未运行浏览器、未提交 Git。

制作过程：先设计，后写图形统计代表段并作者自检，再扩展；独立交叉审查由主执行者安排。所有新数据、图、示范与练习均自拟，无官方分值，不称实测。`subject: igcse-mathematics`。

## 身份、实际阅读与范围边界

使用公共缓存，不覆盖源文件。以 pypdf regular `page.extract_text()` 实际阅读；未读取巨量空白的 layout 文本。页码以下均为一基 PDF 页码，另列大纲印刷页。

- `specification.pdf` v5.1：PDF p.12（印刷 p.13）N9；PDF pp.23–25（印刷 pp.24–26）S1–S18，已读实际条目。另将 PDF pp.12、23、25 用 Poppler 渲染并查看，确认 Core/Extension 栏。S4 不等组距直方图、累积频数图、箱线图，S5 四分位数/IQR/百分位，S17 独立组合与 S18 条件概率属 Extension；其余上述统计内容为共同基础。
- **提取伪错而非官方错式：** regular extraction 将 N9 的一个交集符号及 S17 交集读成并集。原 PDF p.25 图像清楚显示 `P(A∩B)=P(A)×P(B)`，没有确认排字错误。正文使用正确交集。独立硬币与骰子的 12 个等可能结果中，正面且偶数 3 个，得 3/12=(1/2)(3/6)，而并集为 9/12，独立核算也排除并集乘积。不可把提取结果当官方印刷错误传播。
- 四卷 QP p.1 实际封面均 **Specimen 2018**；URL 中 2016 是文件名，不是考季。未把样卷当成实际考季或统计总体证据。
- `1C-qp.pdf` p.4 Q5 双条形图补画、p.5 Q6 概率语言、p.12 Q12 随机选择与人数、p.20 Q24 Venn；配套 `1C-ms.pdf` p.4 Q5–6、p.7 Q12、p.10 Q24 已实际阅读。Q24 的交集为 {4}，概率 1/12。
- `2C-qp.pdf` pp.13–14 Q14 散点图/相关/最佳拟合线/外推、p.21 Q23 双向概率表；配套 `2C-ms.pdf` p.7 Q14、p.9 Q23 已实际阅读。Q14 p.13 图像已查看：10 点中首试通过 3 人，正强相关，不作因果推断；MS 估计 4 次，外推有风险。Q23 合计 Sport 0.30、相关两格 0.11、200×0.15=30。
- `1E-qp.pdf` p.7 Q9 Venn、p.13 Q15 百分条形/饼图、pp.20–21 Q20 累积频数图纠错、p.26 Q27 不放回至少一蓝；配套 `1E-ms.pdf` p.5 Q9、p.7 Q15、p.11 Q20、p.13 Q27 已实际阅读。Q20 p.20 图像已查看：错用组中点且累积值 46 应为 48。Q27 用补事件独立核算 1−(5/9)(4/8)=13/18，与 MS 一致。Q15 图形细节未作完整视觉重建，不将其具体图形作为本课示范。
- `2E-qp.pdf` p.3 Q4 独立重复硬币、p.6 Q7 双向概率表、p.9 Q10 组中点估计均值、p.17 Q20 不等组距直方图；配套 `2E-ms.pdf` p.4 Q4、p.6 Q7、p.7 Q10、p.12 Q20 已实际阅读。Q10 的 x=34；Q20 密度 1.7、2.4、0.2、0.3 与频数/组距核算一致。

官方 MS 用于核对作答证据及边界；页面不转载这些整题，全部另设自拟题。只用一般四则、分数和比例，不引入方差、标准差、相关系数、回归计算、显著性检验、贝叶斯定理或 fx-CG50 考场许可。

## 先修与逐能力设计卡（写正文前）

共同中心问题：怎样把一组数据或随机情境变成可检查的描述，并避免图形、平均数和概率误导？共同先修是排序、四则、分数与百分数；回补到 `/igcse/mathematics/fractions-decimals-and-percentages/#change-form`、`#find-share`，中文对应 `/zh/`。图形另用角度与坐标，提供本页解释，不依赖猜图。

| 页面、条目与可观察目标 | 讲解/示范与模型条件 | 独立输出锚点（计划） | 判定、反馈与同目标重试 |
| --- | --- | --- | --- |
| data-and-averages：S1–2，识别定性/离散/连续、列表提取及分组 | #data-types / #frequency；频数是次数不是数值 | #practice-data | 说明测量/计数区别；#retry-data，回到定义 |
| 同页 S3：设计读写两向表（离散/连续分组） | #two-way；类别互斥且穷尽、总计核对 | #practice-table | 原始成对记录与边际数一致；#retry-table |
| 同页 S5–7：均值/中位/众数/极差、频数和组中点估计、众数组、分布比较 | #averages / #grouped；总和/个数；组内值未知故估计 | #practice-averages / #practice-grouped | 排序、加权分母、结合中心与离散和情境；#retry-averages / #retry-grouped |
| 同页 S5 Extension：四分位/IQR/百分位 | #quartiles；明确本页原始数据分半约定；百分位从累积图估读 | #practice-quartiles；图页 #practice-cumulative | 中间一半范围、百分位不是分数百分比；#retry-quartiles 与图页 #retry-extension 的新 P60；首轮缺一般百分位重试，经 R2 修补 |
| statistical-diagrams：S4/6，全 Core 图表的选择/画/读 | #recording / #categories / #time / #grouped-graphs；各图键/轴/尺度解释，数据可绘制 | #practice-recording / #practice-categories / #practice-time / #practice-grouped | 提供可画数据与描述性绘图标准，非只报数字；#retry-core |
| 同页 S8：散点、相关强弱、拟合线与估计局限 | #scatter；成对数据、非逐点连线，插值/外推 | #practice-scatter | 图/线/读数+因果限制；#retry-scatter |
| 同页 S4–7 Extension：密度、CF、箱线图、分位与分布比较 | #unequal-histograms / #cumulative / #box-plots；面积=频数；上界累积；相同轴 | #practice-density / #practice-cumulative / #practice-box | 组距/面积、累积位置、五数与中心离散；#retry-density 重画不等组距直方图，#retry-extension 含 P60；首轮面积反推不算完整绘图重试 |
| sets-and-probability：N9 S9–16，集合/补交并/空集与 Venn 概率 | #sets / #venn / #probability-scale；先实际成员再记号，所有区域总数核对 | #practice-sets / #practice-venn / #practice-model | 交/并不混、空集不是 {0}、等可能条件；#retry-sets / #retry-venn |
| 同页 S10–13：理论/实验/期望、重复变异、样本量与偏差 | #experiments；成功/试验次数、np 是长期平均预测 | #practice-experiment | 区分期望与保证；大样本不修复偏样；#retry-experiment |
| 同页 S14–15：单双事件样本空间、互斥穷尽及总和1 | #sample-spaces / #events；表内格必须等可能才可计格 | #practice-space / #practice-events | 有序对、不重复漏项；#retry-events |
| combined-and-conditional-probability：S17 Extension 独立树与表 | #independence / #tree；条件后概率不变；沿路乘、互斥路径加 | #practice-independent / #practice-tree | 不是看到两次就乘原概率；#retry-independent |
| 同页 S18 Extension 条件/不放回树/双向表 | #without-replacement / #conditional-table；分母变为已知组、分支总和1 | #practice-dependent / #practice-conditional | 列举核对、条件分母与事件次序；#retry-conditional |
| 四页保留/综合迁移 | #next-step 连接本组下一主题与 mixed-review/#data-review | 各页 #later-check；综合页由主执行者负责 | 收起答案后作答；回补具体概念；不宣称学生保持效果已验证 |

所有 slug 遵循主路线固定名称，每页双语保持 #start #practice #retry #next-step #sources 及对应细分锚点。图页代表段先做等组距/不等组距直方图，检查“频数为什么必须对应面积”，再做读数、绘制、不同组距纠错任务。图必须有真实 SVG 或完整坐标/频数可绘制，答案只在该题关闭的解答中。公开示范不折叠。

## 代表段自检与后续结果

第一段（不等组距直方图）已先完成双语正文、公开示范、独立绘图及纠错题、真实 SVG。作者用 Fraction 独立核算：示范密度 2/5、4/5、2/5，面积还原 4、8、8；独立题 6/5、6/5、4/5，面积还原 6、12、12。已查单位、组界、总数、题前无解答、两个帮助默认关闭、SVG XML 可解析及 subject 字段。仅为作者自检，不称独立审查。按本次有界作者任务继续扩展，独立交叉审查交主执行者安排；最终合格状态仍待该审查及实际阅读验收。


## 首轮作者交接（历史，已由文末修补冻结取代）

四主题 8 份正文和 20 个 SVG 已完成首轮有界制作。主执行者已阅读不等组距代表段并确认面积→密度解释、示范、独立任务/反馈符合样章；这不等于全部内容已独立审查。概念顺序为基础图表→密度→累积图/箱线图；用户现指定全课程仅开设 Extension，不再对学生分流。Number 作者后续审查发现 R1/R2，修补结果与新冻结见文末。

### 实际覆盖及独立产出

- data-and-averages：S1–3 的数据类型、分组/未分组、列表表格提取、两向表；S5 的均值/中位/众数/众数组/极差、频数加权与组中点估计；Extension 四分位/IQR 与百分位概念；S6–7 的中心与分散比较，S13 的总体样本及偏差限制。百分位的实际图上独立计算位于下一页 #practice-cumulative。
- statistical-diagrams：S4 所列全部 Core 图表（tally、pictogram、stem-and-leaf、bar、dual/composite、pie、line、frequency polygon、equal-width histogram、scatter）的选择、作图与解释；S6–8 读图、比较、正负/强弱/无明显直线相关、目测线、内插/外推与因果边界。Extension 不等组距密度、累积频数、箱线图及 S5 分位读数。
- sets-and-probability：N9 集合成员/个数/全集/补交并/空集、Venn；S9–16 的语言与尺度、理论/实验/相对频率/期望、重复变异、大样本及偏差、单事件和连续两事件有序样本空间、互斥与穷尽。
- combined-and-conditional-probability：S17–18 独立交集乘法、树图路径相乘/互斥路径相加、条件分母、放回/不放回、树与表、反向条件、独立与互斥辨析。这些内容与前页基础连续学习，不再设置 Core 跳过路径。
- 每页 #start #practice #retry #next-step #sources 已配对；首轮曾声称每目标都有同目标新重试，但 Gauss R2 指出一般百分位和不等组距绘图恢复证据不足，不能沿用该首轮判断。现已补新任务，见文末。本组与 mixed-review/#data-review 及数/代数/几何回顾对接，不代写主执行者混合页。

| 主题（中英同锚点） | 实际独立/重试/稍后任务 |
| --- | --- |
| data-and-averages | #practice-data, #practice-table, #practice-averages, #practice-grouped, #practice-quartiles, #retry-data, #retry-table, #retry-averages, #retry-grouped, #retry-quartiles, #later-check |
| statistical-diagrams | #practice-recording, #practice-categories, #practice-time, #practice-grouped, #practice-scatter, #practice-patterns, #practice-density, #practice-cumulative, #practice-box, #retry-core, #retry-scatter, #retry-extension（现含 P60）, #retry-density（R2 新增）, #retry-grouped, #later-check |
| sets-and-probability | #practice-sets, #practice-venn, #practice-model, #practice-space, #practice-events, #practice-experiment, #retry-sets, #retry-venn, #retry-events, #retry-experiment, #later-check |
| combined-and-conditional-probability | #practice-independent, #practice-tree, #practice-dependent, #practice-conditional, #practice-independent-table, #retry-independent, #retry-conditional, #later-check |

### 最终源级核验及修补

- 8 页逐对英文 Question 题干、全部 TeX 序列、内容锚点一致；frontmatter、translation_of、本组本地链接、存在目标的跨页锚点、本地图片路径、无重复锚点、无裸 ASCII 数学条件竖线、无控制字符/双重 TeX 转义/行尾空格检查通过。外组尚在制作的路径不据此宣称完整链接验收。
- 每语言 44 个独立/重试/延后题框，提示和解答各自默认关闭，无嵌套题框；共 52 个 Question（含 8 个公开示范）。数字只是防漏手段，不是学习质量证据。
- 20 个 SVG XML 可解析，有 title/desc/viewBox，长方形尺寸非负；坐标、单位、扇区角度、区域与树概率已按源数据核对。未进行网页渲染或实际图内标签阅读验收。
- 用 Fraction、原始列表和可区分筹码的有序枚举独立重算：均值/中位/众数/四分位、分组加权、双向格数、饼图角度、累积估读、Venn 分区、有序样本空间、实验合并比例、三种袋子树端点、条件及反向条件；与正文答案一致。有限群体独立性判断不偷换为总体显著性检验。
- 已修补供审查重看：①分类图独立题原来沿用示范数据，已换成 A=5,3,7 / B=2,6,5，饼图 Walk9/Bus7/Cycle4，并加三个解答区内 SVG；②均值比较 B 改为 6,7,7,7,7,8，避免并列众数约定歧义；③增补 #practice-patterns 四类相关点群、#retry-grouped 的中点/组界及并排/堆叠绘图重试；④Core 饼图完整公开示范加明确边界；⑤条件页 #practice-independent 后半改为偏硬币2/5与独立骰子倍数3，交集2/15、并集3/5，避免只复述示范。
- 首轮只排除了控制字符/双重转义，未发现反斜线完全丢失的命令；因此“转义问题已修补”的首轮表述过宽。Gauss R1 确认每语言18处 mid/circ/le 缺反斜线，已按文末逐项恢复。双语一致不能证明数学命令正确。未改共享样式或测试。

### 首轮正文清单与冻结 SHA-256（历史）

- `igcse/mathematics/data-and-averages.md` — `165b29a38a9358b0b3ae78bb613ff3e49e924bb8295709e9dc9dec4e3556d30b`
- `zh/igcse/mathematics/data-and-averages.md` — `f41d07eeb9a576bf61a20e7c56a5038d0095adf938d2236cd6198a37ddf6982f`
- `igcse/mathematics/statistical-diagrams.md` — `f9dbdb90043aca2f04406a2fd12a70fecfa758b493f33b5e504bb9b7aaa76f4e`
- `zh/igcse/mathematics/statistical-diagrams.md` — `d634ebe51583ed2d823dcce0fae1bd982d56c6cf49c6a1a546aa85f25d7be713`
- `igcse/mathematics/sets-and-probability.md` — `7159d4f6184b45a3dd9a429c29c8b01cf2d6257b55bdaa8e3a749c656ff8b162`
- `zh/igcse/mathematics/sets-and-probability.md` — `fbfaf36a3b8fb71dcf66c60850dc0b4306a4789d55554a2fcc78c3b6031cd6ec`
- `igcse/mathematics/combined-and-conditional-probability.md` — `8c63d60914ef3b3095095756593bade651978885825bfb36ea90709c616c63ef`
- `zh/igcse/mathematics/combined-and-conditional-probability.md` — `27cf3f7c6fa14ead5f7efabfb4f8cce88932cd445b58e79853fa0c6022c28ec4`

图像（均在 assets/img/）：
`igcse-statistics-bar.svg`, `igcse-statistics-box-check.svg`, `igcse-statistics-composite-check.svg`, `igcse-statistics-composite.svg`, `igcse-statistics-cumulative-check.svg`, `igcse-statistics-cumulative.svg`, `igcse-statistics-density.svg`, `igcse-statistics-dual-check.svg`, `igcse-statistics-dual.svg`, `igcse-statistics-equal-histogram.svg`, `igcse-statistics-line.svg`, `igcse-statistics-pie-check.svg`, `igcse-statistics-pie.svg`, `igcse-statistics-polygon.svg`, `igcse-statistics-scatter-check.svg`, `igcse-statistics-scatter.svg`, `igcse-statistics-tree-dependent.svg`, `igcse-statistics-tree.svg`, `igcse-statistics-venn-check.svg`, `igcse-statistics-venn.svg`。

### 保留的验收边界

- 来源与范围：前部列出实际 PDF 页和题号，已分 Core/Extension；S17 已核原图，确认为文字提取伪错。
- 学科/活动：作者独立计算和逐目标自检完成；Number 作者的全四主题独立交叉审查待完成，尚不宣称通过。
- 技术：按并行约定，**未运行 Jekyll 构建、站点服务或浏览器**，不覆盖 _site；生成 HTML、全页手机/桌面与键盘验收由主执行者统一完成。源级检查不称技术验收通过。
- 学生试用：未进行，不宣称学习效果或延后保持已验证。
- 没有提交 Git、推送或发布；只按具体审查意见修补本组段落并刷新对应 SHA，其他作者文件保持不动。


## 独立审查后修补与再次冻结（当前版本）

依据：Gauss 的 docs/agents/review-igcse-statistics-2026-10-27.md R1/R2；同时执行用户最新“仅开设 Extension，保留共同基础、不做两群体”的范围指示。以下取代首轮冻结身份与过宽的作者自检判断；不修改 Gauss 的审查记录，不自行把未复核项关为通过。

### R1：实际数学命令恢复

两语言 statistical-diagrams 各18处：2个茎叶键的 \mid、12个角度的 ^\circ、4个等组距区间的 \le。按具体数学片段恢复，没有替换普通英文单词。逐项读回 2\mid0=20、1\mid2=12、饼图示范/重试角度和四个区间；全八页定向扫描未再出现数字连 mid、裸 ^circ 或数字连 le t。每对 Question、完整TeX序列仍一致。首轮的控制字符/双重转义检查没有覆盖“完全丢命令”，已更正上文表述。公式真实网页显示仍待统一验收。

### R2：恢复证据补齐

- 新增中英 #retry-density。题给自拟新组界0/4/10/20分钟，频数6/9/10，要求画有轴/尺度的直方图、用面积还原，并诊断直接以频数作密度高度的错误。题前没有正确高度或解答图。提示与解答分别关闭。
- 作者另用 Fraction 从原频数除组距重算密度3/2、3/2、1；面积4×1.5=6、6×1.5=9、10×1=10，总25。直接用频数作高则面积24/54/100，不能保持人数。解答明确柱宽比4:6:10、相接组界、密度轴单位和零线、首两柱等高但人数不同。
- 新增解答区内 assets/img/igcse-statistics-density-retry-check.svg。按x=70+25t、y=280−120d独立核XML坐标：宽100/150/250px、高180/180/120px。临时栅格化并实际查看，轴、组界、密度刻度、面积标签可读；图和其替代文字均在关闭解答内。未在网页/手机查看。
- #retry-extension 保留旧稳定锚点和原有恢复任务，再问第60百分位。新英文 Question 两语言相同。独立从总24求累计位置0.6×24=14.4，位于(10,6)与(20,18)间，线性读数10+(14.4−6)/(18−6)×10=17min。解答说明先取累计人数再读时间、14.4是位置而非观察到部分人、组内均匀假设与估计边界。
- 恢复导航现在分别直达密度/累积图/箱线图，再连 #retry-density 或 #retry-extension；英文亦补 #retry-grouped 导航，与中文对应。四页本组目标无删除，仍须 Gauss 对新恢复产出独立重解后确认。

### Extension 单一路线

已整理四主题全部8页的标题、开头、正文、练习导航、下一步及折叠来源说明：删除面向学生的 Core/Extension 分流与跳过说明，主题按基础概念→密度/分位/条件概率自然推进。数据记录、平均数、所有基本图种、集合、单次概率等必要基础及任务全部保留；集合页统一接组合与条件概率，之后混合回顾。官方列归属仍在本作者记录及独立审查中保留，作为来源证据。#retry-core、#retry-extension 是既有稳定URL身份，保留以免断链；可见标题不再按层级分人。没有改入口、data、mixed、全局测试或其他作者源。

### 本轮实际源级检查与状态

8页完整Question/TeX/锚点配对、必需五锚点、元数据和translation_of、当前本地图片及学习链接、默认关闭的独立提示/解答、重复锚点、控制字符、上述缺命令模式检查完成。当前每语言45个独立/重试/延后框、53个Question（含8个公开示范），图像为21个；数量只作防漏。新图XML与数值/尺度实际核验及栅格图查看完成；其余20图未修改。其他作者源稿继续变化，不据此称全站链接或技术通过。

本轮变更：8个统计MD（R1/R2仅图表页；其余只改单路线文字）、1个新增SVG、本作者记录；Algebra审查进展已另存自己的审查记录，未改Algebra源。当前再次冻结，只按独立审查具体意见修补。**R1/R2为作者已修、待Gauss独立复核**；技术/网页/学生验收仍未进行。没有Jekyll、浏览器、_site写入、提交、推送或发布。

### R1/R2 修补快照 SHA-256（后续图内标签修补见下）

| 文件 | SHA-256 |
| --- | --- |
| igcse/mathematics/data-and-averages.md | f677f68c4c58fb9f66ba27309735744adb576be1e705d17dc2dbc9139bee393b |
| zh/igcse/mathematics/data-and-averages.md | c7bfeba9c1493b23a88ec903555e38b76dfb8376eaa7752ac690aa2d57ab7fa0 |
| igcse/mathematics/statistical-diagrams.md | 86a1b3daa2a2d879eb620124a9f0ec79804e0cd0f4c268490fb87158b22433f2 |
| zh/igcse/mathematics/statistical-diagrams.md | bb1ea31c9171811375a3b35c3ae8a701a66538e377a81c1c12d19ebff7787fe5 |
| igcse/mathematics/sets-and-probability.md | b3466ec40e59a972169378aa17c83208f022cfa4582aa4cb2e5346bc7de7bb8f |
| zh/igcse/mathematics/sets-and-probability.md | b179f937bc31e93d74ca85527d425e8ab167d14aaba0f39924becee625d62afe |
| igcse/mathematics/combined-and-conditional-probability.md | f3d8172a1477b096280df8aafa468e63825e21252fdad2d2e1c83e6f44503212 |
| zh/igcse/mathematics/combined-and-conditional-probability.md | 12580cd49c4bd48357d3315df264d447fcbf5b827c4f0f1a38382ea145776b18 |
| assets/img/igcse-statistics-density-retry-check.svg | 94cf7a0de91f60970c4b608a2ff52a6b3f710f3c4f5bd1c1d9fb47228763efd6 |

其余20个SVG与Gauss原审查SHA逐一比较一致，继续沿用原审查版本身份。记录自身不作自引用哈希。

## 手机图内标签修补与最终冻结

主执行者实际手机截图发现示范容器内图宽约282px时，520宽viewBox的16px标签只剩约8.7px。按新指示对全部21个统计SVG逐张处理：520宽图字号22（282px显示时约11.93px），560宽树图字号23（约11.58px），640宽新重试图字号26（约11.46px）。没有增加SVG外部宽度、改viewBox尺寸或共享CSS；不会靠扩大整页图宽获得字号。

新重试图内三个“area = 数值”改为两行tspan，避免窄柱中横排太长。其余图在既有留白内增大字体。每图改前/改后逐项比较path/circle/rect/line/polygon/polyline/ellipse几何属性，全部相同：柱宽/高、组界、累计点、拟合线、扇区弧、箱线、Venn圈和树路径没有漂移。所有title/desc仍保留；示范和独立题解答图的位置没有移动。

实际把21图各自以282px宽栅格化，并逐张查看四张原尺寸对照页，覆盖density、两张CF、等组距直方、频数折线、柱/双柱/堆叠、散点、pie、box、Venn及两棵树。轴名/单位/刻度、图例、扇区角、成员和概率标签可读，未见文字重叠或边界裁切；新图area两行完整。此为独立SVG缩放图片查看，**未打开站点或浏览器，也不冒称主执行者手机实页验收已通过**。实际网页约束仍由主执行者统一核查。

复核交接给 Gauss：请针对下列最终SHA复核 R1数学命令、R2 #retry-density/#retry-extension 的独立重试，以及全部21图的坐标/轴标签和图内字号。原20图数学几何相同的证据可继承，字号/文字布局为本轮新变更，不能用旧图SHA声称已复核。四主题现在全部为Extension单一路线；基础内容与所有目标保留，旧锚点保持稳定。作者稿再次冻结，R1/R2及图内标签为“作者已修，待Gauss复核”。技术与学生试用仍未通过/未进行。未构建、未运行浏览器、未改_site、未提交/推送/发布。


补充手机公式修补：主执行者连续示范截图发现密度定义两关系同一显示行导致横滚；现中英 #unequal-histograms 将“频数密度=频数/组距”和“频数=组距×密度”拆为两个独立显示公式，仍在默认展开的核心讲解。数学关系与单位不变，不改CSS、不删公式；以下两页SHA已刷新。实际手机MathJax显示仍交统一复验。

### 最终冻结 SHA-256（当前权威清单）

| 文件 | SHA-256 |
| --- | --- |
| igcse/mathematics/data-and-averages.md | f677f68c4c58fb9f66ba27309735744adb576be1e705d17dc2dbc9139bee393b |
| zh/igcse/mathematics/data-and-averages.md | c7bfeba9c1493b23a88ec903555e38b76dfb8376eaa7752ac690aa2d57ab7fa0 |
| igcse/mathematics/statistical-diagrams.md | c8041ff497269b047fde01f22dc6bd96398fecf58c294e018eaccad25855d2ac |
| zh/igcse/mathematics/statistical-diagrams.md | 685351eb5265a03440572dc471877c65e1eb93e856d3994a7ab5e12010fdf9f2 |
| igcse/mathematics/sets-and-probability.md | b3466ec40e59a972169378aa17c83208f022cfa4582aa4cb2e5346bc7de7bb8f |
| zh/igcse/mathematics/sets-and-probability.md | b179f937bc31e93d74ca85527d425e8ab167d14aaba0f39924becee625d62afe |
| igcse/mathematics/combined-and-conditional-probability.md | f3d8172a1477b096280df8aafa468e63825e21252fdad2d2e1c83e6f44503212 |
| zh/igcse/mathematics/combined-and-conditional-probability.md | 12580cd49c4bd48357d3315df264d447fcbf5b827c4f0f1a38382ea145776b18 |
| assets/img/igcse-statistics-bar.svg | 052149e6096ecafb41b850953ed113c470eebb1f6f5c9c88573b2aaaf63dc413 |
| assets/img/igcse-statistics-box-check.svg | c3776cbbb8ca1c3552a8335d2f249c7ba27eb52984fee6272949dd868c68fbab |
| assets/img/igcse-statistics-composite-check.svg | 12b28e0670b08ef1edc1ab155c7358661101a2874da96a1448b5477936270a83 |
| assets/img/igcse-statistics-composite.svg | f2a4e2c039ae3a434c514215a85fad972cf4a9104112fcaa0f0a3ed167d8962f |
| assets/img/igcse-statistics-cumulative-check.svg | ec7ebf0aaade73b8e3386840dc0073e34921943322a39cc65b6e3934c064a540 |
| assets/img/igcse-statistics-cumulative.svg | 8b257b44ed057531fcaf545500ddc2b4dacabc88c1609d7f15dc57dd67d5eba5 |
| assets/img/igcse-statistics-density-retry-check.svg | 80911bdd6d476b9a3633f53f7b2823b7cd0221ffe95aff9b49d8d85b3b615f20 |
| assets/img/igcse-statistics-density.svg | 6e9ce170402d56ceff7b2ba746485060b20c883a0b89311b6bd449a167b2220a |
| assets/img/igcse-statistics-dual-check.svg | 84b1cadada063a4fd5309a2a6937ffabe0e65e950e2f0436a4d719c33589c030 |
| assets/img/igcse-statistics-dual.svg | daf078a56524b433f7abcee5de12ce66ffd96666ef79ba7e00cc14cebef49ebe |
| assets/img/igcse-statistics-equal-histogram.svg | 659a2163021c1a1621e6dae1b379d98882f2fc6481458035394e672fc63fd0e4 |
| assets/img/igcse-statistics-line.svg | be8d1f88054d4d977b7f759ddd643dc248958b78adb6f23c9b1b35de5e84c489 |
| assets/img/igcse-statistics-pie-check.svg | b3b3f3b071fe6c5cea5b719108aca271ba9072327a146faf1a839cd2b0b02c35 |
| assets/img/igcse-statistics-pie.svg | 8aa5adb6a13d146ee90049c7e51875b8fb6a8090605ae2f0c999e91957fa4045 |
| assets/img/igcse-statistics-polygon.svg | 75656308baf3911e0f39c13b6a1351b5d1b15d34827f5a315f2bd3bfd2c34b78 |
| assets/img/igcse-statistics-scatter-check.svg | 58f304ca9b28c99c168a2a83a824e339dba128db080f87211ef9e0a9bb73d4a0 |
| assets/img/igcse-statistics-scatter.svg | 7e549f2d12f72f645f235555bbcaf9bdb526a989c0fd6ae22824ed963bb0a5e0 |
| assets/img/igcse-statistics-tree-dependent.svg | 2d0157e08c8241d52352023fa9b8864f0bb0134a532437512e237fecc3f4090f |
| assets/img/igcse-statistics-tree.svg | de88f1a713f40f82002ae9ad6934bbd80c4c9fc0ad2e6d70dd67c72b14b12a4a |
| assets/img/igcse-statistics-venn-check.svg | 7542a2f1e0def7e75e216cba574e7365bfb2eab92b8d7151c957237888975dc2 |
| assets/img/igcse-statistics-venn.svg | 46a3f60dfc70e8ff4e41bdbf8c0fdffea939bcb40af6b24ec9df236fc43610dc |
