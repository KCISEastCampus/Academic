# IGCSE 入口、综合与样章承接：独立内容审查

日期：2026-10-27。角色：独立审查者，未参与本轮被审正文制作。结论限于下列 SHA256 对应的本地版本；本报告不是发布批准或全课程验收。

**当前结论见第10节：已按Extension单路复读当前11题，原发现关闭，课程源SHA已刷新。第1–7节为首轮历史，第8–9节为修补过程，均不删除。**

## 1. 结论与边界

**暂不作无保留内容通过。** 10 道综合／延后任务已逐题独立重解，未发现结果、定义域、分支、量纲或概率计算错误；存在两处层级分流问题（F1、F2）、具体反馈／重试定位问题（F3）和返程角度解释断点（F4）。F5 为制作记录与实际任务不一致的较低优先级问题，交付前主执行者已修正并经本审查者复读确认。

本轮只审：

- 英、中两个 `index.md`：课程路径、Core／Extension 提示、考试规则、旧索引 ID 与资料信用。
- 英、中两个 `mixed-review.md`：全部 10 道任务、提示、完整解答、反馈与延后安排。
- 英、中 `fractions-decimals-and-percentages.md`：仅 EN 第 373 行／ZH 第 375 行的课程承接段；附近上下文只用于判断连接是否合理，不重新验收已认可样章。
- 两张新增答案图：`assets/img/igcse-review-clubs.svg`、`assets/img/igcse-review-return-journey.svg`。

已读根 AGENTS、课程内容长期标准 v1.1、公式指南、主制作记录及本地官方缓存。全 IGCSE 数学已获本地制作授权，但本次独立审查边界仍如上；其他作者并行制作的 26 个新主题没有在本轮逐课审查。读取时尚未出现的文件只记为并行制作中的集成待核项，**不报告为最终缺课或最终坏链接**。

全程仅新增本报告；未修改课源、图、测试、制作记录或共享文件。PDF／SVG 仅在内存中栅格查看，没有另存图片；未构建、读取生成站点、启动浏览器、提交 Git、推送或发布。

## 2. 可定位发现与最小修复

优先级：P1＝范围／层级错误，应在对应内容交付前修正；P2＝影响学习证据或初学者恢复路径；P3＝记录准确性。本节均为待作者修复，审查者未代改。

### F1 — P1：入口把矩阵乘法呈现为共同基础，与指定缓存的栏目位置冲突

位置：[EN index 第 54 行](../../igcse/mathematics/index.md#measure-route)、[ZH index 第 58 行](../../zh/igcse/mathematics/index.md#measure-route)，并结合两页开头“Extension 才是额外内容”的分流说明。

“Multiply matrices; Extension connects vectors…”／“学习矩阵乘法；Extension 再连接向量……”使读者把矩阵乘法归入未标 Extension 的共同部分。

**重要依据冲突：**任务提出“G23/24 Core，G22/25/26 Extension”；但指定缓存 `specification.pdf` 的 PDF 第 22 页、印刷第 23 页原图中，G22、G23、G24、G25、G26 的正文均在右侧 **Extension content** 栏，左侧 Core 栏均为空。审查者实际查看原页及放大图，并以 PDF 文字坐标复核：G23 “multiplications” 起点 x≈302.39，G24 “identity” 起点 x≈317.50；两栏分界 x≈298。这不是纯文本线性提取能够可靠判断的事项。

因此，本报告不能把“G23/24 Core”称为已被该官方缓存证实。上述判断只陈述本轮指定文件的内容，不推断其他大纲版本。官方缓存 SHA256 与 manifest 一致，见第 7 节。

最小修复：在两个入口将本主题明确标为 Extension，并在后续全条目审查中让主执行者处理 G23/24 的依据冲突。若项目刻意将其作为 Core 学生的额外教学，应明确“本地拓展”，避免声称这是该缓存规定的 Core 考试要求；无需在本轮改写整个主题或擅自换资格。

### F2 — P1：逆百分数延后题漏标 Extension

位置：[EN mixed 第 274–290 行 `later-price`](../../igcse/mathematics/mixed-review.md#later-price)、[ZH 第 276–292 行](../../zh/igcse/mathematics/mixed-review.md#later-price)。

给出最终 96 yuan，要求反求连续涨跌前原价，包含 **reverse percentage problems**。指定大纲 PDF 第 13 页、印刷第 14 页 N15 原图将该能力列在 Extension 栏；当前题名没有 Extension，而入口及综合开头明确要求依标签分流。题目算术正确，问题在范围标记。

最小修复：两语言该题标题补 Extension；如需保留 Core 延后任务，可另将现有任务中给定原价、求最终值／解释基准的部分用于 Core，但不能把现有反推任务整体称为 Core。无需修改答案 100 yuan。

### F3 — P2：十题统一返回主题开头，没有把诊断连接到具体讲解与匹配重试

位置：EN mixed 第 48、76、108、142、172、202、232、264、292、326 行，以及 `retry` 第 332–334 行；ZH 对应均为 EN 行号＋2。

所有反馈均为“the matching topic／对应主题”→某页 `#start`→“做那页的新重试”。这提供了主题方向，但没有说明这次错的是哪种判断、该看哪段、做哪一道新题。多目标综合尤其明显：花园可能错在长度／面积比例、补集或折扣，单一 ratio 入口不能分别定位这些错误；延后 B 同时考驻点分类与切线，不能用同一主题开头代替两种恢复路径。

这一问题不是因并行文件未写完才成立。已存在的目标页本身已有具体位置，例如：

| 综合错误 | 已实际读到的讲解位置 | 已存在的相应重试 |
| --- | --- | --- |
| board：舍入端点／组合面积界限 | accuracy-and-bounds 的 `#limits`／`#calculated-bounds` | `#retry-limits`／`#retry-bounds` |
| times：平均数或离散程度不能推出“总是更快” | data-and-averages 的 `#averages`、`#example-averages` | `#retry-averages` |
| later-extension：驻点分类 | differentiation-and-motion 的 `#stationary` | `#retry-stationary` |
| later-extension：切线截距／斜率 | differentiation-and-motion 的 `#tangent` | `#retry-tangent` |

最小修复：仅替换综合页中对应反馈句，使用实际错误条件→具体概念锚点→匹配重试锚点；中英保持同等帮助。其他并行主题落盘后再确定其准确锚点，当前不编造锚点或判定缺课。以上目标页只为检查恢复入口而局部读取，未作整课质量结论。

### F4 — P2：返程解答中的 θ 没有定义，也没有画在答案图上

位置：EN mixed 第 196–200 行／ZH 第 198–202 行，及 `igcse-review-return-journey.svg` 第 7–18 行。

图的路线、距离、北向、返程箭头、233° 和“Not to scale”均正确。但算式直接写 `tan θ=4/3`，图上没有 θ，也没有文字说明 θ 是终点 F 处“向南射线与西南返程之间”的角。初学者无法据图确认为什么取 4/3 而不是 3/4，以及为什么接着加 180°；答案图上的 233° 字样只给结果，不能补上这一选择。

最小修复：在答案图标出 F 处向南方向及它与 FS 间的 θ，并在中英解答各补一句 θ 的定义、对边 4 km／邻边 3 km，以及从北顺时针先到南的 180°。图仍放在关闭的解答内，保留现有无障碍描述，避免把完整答案移到题干前。

### F5 — P3，已修并复查：综合设计卡的矩阵次序任务未出现在实际十题中

位置：主制作记录第 34–36 行“综合与延后回顾设计（先于正文）”，以及综合页 `later-review`。

设计卡写“Extension 导数、矩阵次序”，实际延后题只有逆百分数与微分分类／切线，没有矩阵运算或变换次序任务。这不证明全课程 G26 缺课，也不要求本页机械增加题量；只是不能把设计卡里的矩阵延后提取写成已实施证据。

最小修复：主执行者将设计卡描述改为实际十题的内容，或明确标为后续待安排。若另处已有该延后任务，应给准确位置，不将并行作者尚未完成的文件视为现成证据。

交付前复查：主执行者并行更新了主记录，将上述文字改为“Extension 导数及驻点类型”，已不声称本页有矩阵次序任务。本审查者重新读取该段，确认本项记录差异已消除；新记录 SHA256 为 `f4461f6cb8b2bc4743c36cf3149c287b41019a1962edd8048d8f083c4a446d84`。本轮课程与两幅图的表列哈希没有改变，F1–F4 仍待修。修改主记录的不是本审查者。

## 3. 十道任务的独立数学核验

以下从题设重新列式，再与两语言答案逐题比较；另用独立精确分数／数值断言交叉核算。断言仅在内存运行，未新增或调用仓库测试。数学通过不抵消第 2 节的学习设计及层级发现。

| 任务／锚点；EN／ZH 题干行 | 独立重解、条件与检查 | 结论 |
| --- | --- | --- |
| garden；28／30 | 真实边长 6×200 cm＝12 m、4×200 cm＝8 m，面积 96 m²；池塘占 3/8，草皮占 5/8，需 60 m²；原费用 60×15＝900 yuan，折后 900×0.88＝792 yuan。面积尺度为长度尺度的平方，不能将 24 cm² 仅乘 200。价格单位 yuan/m² 与面积相消。 | 答案正确，情境数据自拟身份明确。 |
| board；58／60 | 正长度 l∈[2.35,2.45)、w∈[1.75,1.85)，乘积对两个输入均递增，故 A∈[4.1125,4.5325) m²。上端为不取到的上界，仍存在 A＞4.4；取 l＝2.44、w＝1.84，得 4.4896 m²。无重叠／浪费的理想假设下仍不能保证覆盖。 | 区间端点、保证判定及反例均正确；Extension 合理。 |
| tickets；88／90 | 令 a、s 为成人、学生票数，a+s＝32，8a+5s＝199；代入 s＝32−a，得 3a＝39，a＝13、s＝19。均为非负整数；两总数分别验算为 32 与 199 yuan。 | 正确。 |
| restricted；118／120 | f(x)＝(x−2)²−3，x≥2，所以值域 [−3,∞)。由 y+3＝(x−2)² 且 x−2≥0，取非负平方根；反函数为 2+√(x+3)，定义域 x≥−3，输出≥2。f(x)＝6 的代数候选为 −1、5，原域排除 −1；f(5)＝6。原函数在指定右半支一一对应，逆成立。 | 分支、原域／逆域及根检查正确。 |
| models；154／156 | 原体积 4×3×2＝24 cm³；总表面积 2(12+8+6)＝52 cm²。新边长 6、4.5、3 cm，体积 81 cm³，表面积 2(27+18+13.5)＝117 cm²。与长度因子 k＝1.5、面积 k²＝2.25、体积 k³＝3.375 相符。 | 正确；相似面积／体积关系的 Extension 标记合理。没有必要强加另一幅图才能算出本题。 |
| journey；182／184 | 取起点 S=(0,0)、终点 F=(4,3) km，返程向量 (−4,−3)，距离 √(4²+3²)＝5 km。相对正南偏西角为 arctan(4/3)≈53.1301°，从北顺时针方位角 180°＋53.1301°≈233.1301°，最近整数三位角为 233°。西南象限与结果一致。 | 数学及图中结果正确；推理可追踪问题见 F4。 |
| times；214／216 | A 总和 20、均值 4 min、中位数 3 min、极差 6 min；B 总和 20、均值 4 min、中位数 4 min、极差 2 min。B 的样本波动较小，但典型等待没有因此更快，更不能推出“总是”；每组仅 5 次且抽样方式未知，不能推广。 | 计算及证据边界正确；未把离散程度当作速度因果证明。 |
| clubs；242／244 | 交集 5，C only＝8−5＝3，S only＝12−5＝7，neither＝20−(3+5+7)＝5，总计 20。限定在骑车者中均匀抽样，P(S∣C)＝5/8；全体样本空间下 P(C∩S)＝5/20＝1/4，而 P(C)P(S)＝(8/20)(12/20)＝6/25，二者不等，故不独立。也可比较 5/8≠12/20。 | 分母更新、集合计数、独立性检验均正确；Extension 合理。 |
| later-price；276／278 | 原价 P＞0，最终 P×1.2×0.8＝0.96P＝96，故 P＝100 yuan；中间 120，降价 24，终价 96。下降针对新的整体，不相消，净降 4%，不是减少 4 个价格单位的一般规律。 | 数学正确；逆百分数层级漏标见 F2。 |
| later-extension；302／304 | y′＝3x²−3＝3(x−1)(x+1)，零点 −1、1，函数值 2、−2。导数在 (−∞,−1)、(−1,1)、(1,∞) 上依次为正、负、正，故 (−1,2) 为局部极大、(1,−2) 为局部极小；非全实域上的绝对最大／最小。x＝0 时过 (0,0)，斜率 −3，切线 y＝−3x。对 y＝x³，y′＝3x² 两侧为正，原点不是极值；弯曲方向改变，属驻点拐点。 | 正确。题干明确指定检查梯度符号，所以其证据是分类与解释，不单独声称检验“完全未提示的选法”。符号分区已足以支持本题结论，未把未要求的另绘曲线判为硬性缺项。 |

## 4. 官方来源实际阅读与适用范围

读的是本地指定缓存，不以文件 URL 中的“2016”或版权年份代替 PDF 正文身份。QP 封面为 **Oxford AQA International GCSE Mathematics Extension Paper 1E (9260/1E), Specimen 2018, 2 hours, 100 marks**；MS 封面为 **Mathematics (9260), Paper 1 – Extension Tier, Mark Scheme, Specimen 2018**。PDF 页码以下均从文件第一页计数。

| 实际读过的 QP／MS | 审查者重新推导及与评分证据的核对 | 对本轮任务的支持边界 |
| --- | --- | --- |
| Q6：QP p.4；MS p.4 | 同一铁丝先围边长 15.7 cm 正方形、再围圆，守恒量为周长 4×15.7＝62.8 cm；62.8＝πd，d＝62.8/π≈19.9899 cm。MS 先周长、再圆周关系、再求直径，接受 19.9–20 cm。原题 4 marks。 | 支持检查“先识别保持量，再选式及单位”的证据链；不是 garden 或 models 的原题。 |
| Q7：QP p.5；MS p.5 | 252＝2²×3²×7；672＝2⁵×3×7。HCF 取公共素因数的较小指数，得 2²×3×7＝84。MS (a) 为 2 marks、(b) 为 1 mark，结果一致。 | 只支持数的结构与解释要求；不能据此说综合十题已经考查了质因数／HCF。 |
| Q10：QP p.8；MS p.6 | 半径 40 cm、深 150 cm，V＝π×40²×150＝240000π cm³＝240π L≈753.982 L；以 0.2 L/s 注水需 1200π s≈3769.911 s≈62.8319 min＞60 min。MS 接受体积→升→时间，也接受与 1 h＝3600 s／720 L 比较的等价证据。原题 4 marks。 | 支持单位、模型与“是否保证／超过”的比较，不是 board 的原题，也不能移植官方分值。 |

实际查看了以上题页和评分页的栅格图，并重新读取 PDF 文字；不是只检索关键词或复述制作记录。Q7 上标按原图读作 2⁵，未把线性提取的“25”当作二十五。未使用 Q11 的提取乱码。

指定大纲正文页眉确认为 Version 5.1；其 PDF pp.7–9（印刷 pp.8–10）支持：Core 两卷各 90 min／80 marks，Extension 两卷各 120 min／100 marks；同层级、同考季；各卷需科学计算器，图形及内置符号代数／微积分计算器禁用。当前入口的时长、分数、同层级与计算器限制没有实质错误，未把 A-level 的 fx-CG50 流程冒充 IGCSE 许可。入口没有逐项列出所有考试行政细则，本轮不把这种摘要当作完整考务手册。

综合页明确全部自拟、无官方分值；没有冒称上述 Q6/Q7/Q10 原题或改编题。来源区的跨条目串联不等于每个列出的编号均已完整考查；例如本页并不独立完成 N1–N20 或 G1–G26 的覆盖验收。全条目能力映射留给后续任务。

## 5. 双语、图形、入口与承接核查

- **English Question 与 TeX：**逐题语义比较后，以只读提取复核：两语言 10 条完整 English Question 字符相同；36 段数学片段（行内及显示）字符相同，含数值、平方根条件、单位、概率 `\mid` 及导数符号。两幅 Markdown 图引用连同替代文字也相同。中文解释与英文在同一题上给予同等结论和提示；没有发现数据、条件、答案漂移。未运行 MathJax 渲染，不能将源码一致称为渲染通过。
- **提示／解答与不泄露：**每页 20 个任务帮助折叠区（10 个提示＋10 个解答），另 1 个范围折叠区，均无 `open`。十题标题没有预先给出完整算法或数值答案；两张答案图及含答案的 alt 均置于对应解答内，未为避免泄露删减必要替代文字。源码边界闭合、题框相互独立；键盘、屏幕阅读器及实际浏览器默认状态未核。
- **社团图：**已实际栅格查看，并核 SVG 的 title／desc、集合圆位置、四区域标签。3／5／7／5 分别位于仅骑车／交集／仅游泳／两者皆不；总人数 20，文字与公式一致，不依赖颜色区分。矩形作为全集边界；两语言共享英文图标，未冒充实测。
- **返程图：**已实际栅格查看；S 在左下、F 在右上，去程先东后北，返程箭头从 F 指向 S，直角标记正确，北向位于 F，5 km 与 233° 正确，图注明不按比例。标注的 4 km／3 km 与像素长度比例不同已经由该说明限定，不据此指控数值错误。角度反馈断点见 F4。
- **旧入口：**按既存 `previous-index-anchors.json` 的清单逐项检查：EN 31／31、ZH 31／31 的旧 ID 均保留且无同名重复。与 Git HEAD 的原有相对 PDF 链接比较，EN 原有 12 条链接的地址及次序均未改变；新增官方大纲链接不混入旧资源统计。资源目录实际有 17 个 PDF，本轮只核保留路径／数量，不阅读或鉴定这 17 份的内部身份。EN Lynn 原信用仍在，ZH 明确 PDF 由 Lynn 提供。旧速查／近邻答案降入参考区并已解释用途，未称独立考查。
- **链接与语言元数据：**两语言入口／综合页沿用 subjects、reading_layout、mathjax、study_page；ZH 有 lang、translation_of；综合题目锚点对应。共享语言切换源码保留 hash，入口旧 ID 源码存在；未据此宣布折叠区深链接或切换后的实际滚动已通过浏览器验收。
- **样章承接段：**EN 第 373 行／ZH 第 375 行均先返回课程起点，再引向 percentage-change 的 `#start`，需要补分数运算时引向 number-operations 的 `#start`，并保留旧分数资料锚点。方向与样章已声明“不讲完整分数运算、百分比变化”的边界相符；中英文帮助一致。percentage-change 仍在并行制作，目标内容与落地锚点须主执行者最终集成核对，本轮不判为最终断链。本次不以整文件新哈希替代与旧冻结正文的逐字比较，也不重新背书样章全部正文。

## 6. 设计卡、制作状态与后续验收

已读主记录“范围和设计卡”及“综合与延后回顾设计（先于正文）”：包含中心问题、先修、各分支连接、独立任务、提示／解答、反馈与来源。按本任务提供的时序，综合设计卡先于正文存在；本轮实际看到的是本地工作文件，不用未提交文件的修改时间冒充可独立追溯的历史版本证明。矩阵次序的记录落差单列 F5。

主记录明确仍在制作、技术待验收、没有全课程学生证据，本轮不将制作中状态说成最终范围缺漏。独立内容发现应由主执行者处理后，仅复查受影响段与新 SHA256；本次只写报告，不代作者修复。

后续仍需分别完成：

1. F1/F2 的层级依据和标签、F3/F4 的可执行反馈与图文推理；F5 的记录对齐已经复查，无需再次处理。
2. 并行主题完成后的实际路径／锚点接通；90 编号下的细项覆盖由后续全条目审查处理，本报告不能替代。
3. 作者负责适用技术检查、生成 HTML、桌面／手机明暗阅读与键盘操作；本轮按用户要求不执行。
4. 真实学生首次作答、提示使用、重试与延后保持尚无本轮独立观察；内容核算通过不能宣布学习效果已验证。

## 7. 被审源 SHA256

以下为直接对文件原始字节取 SHA256，首次统一快照时间 **2026-10-27 08:00:24（本机时间，Asia/Singapore）**；写报告前复核与该快照一致，交付前再次复核时，仅主制作记录因修复 F5 发生变化，新哈希和复读结果已补记在 F5，其余表列文件均未改变。哈希锁定“实际审过哪一版”，不代表源文件由审查者冻结、提交或阻止其他作者继续编辑。发现位置的行号对应这些字节版本。

| 文件（相对仓库根） | SHA256 |
| --- | --- |
| `AGENTS.md` | `f35107a5e62cd5ab79ce0d2affa0e52a77a19a65e225e9b4279ae492d9650653` |
| `docs/agents/course-content-standard.md` | `887c470bccb0dc7789688557b69667d0955923cc619a5133a6deab34351b5ec7` |
| `docs/MATH_FORMULA_GUIDELINES.md` | `d83bbd9523b70d833dfbe511e0be966baca36b0ee4bdd04040222620bc7843d1` |
| `docs/agents/implementation-igcse-mathematics-rollout-2026-10-27.md` | `e4aea9d4f47a9192322f3a8e7e4ac8017d10c7640ad444601ba926ef400cb96c` |
| `igcse/mathematics/index.md` | `47a207a3944523c77a7946031b23bbbef57b9593b945a0d9a951745d2bf92877` |
| `zh/igcse/mathematics/index.md` | `877f9bed34ea1734ec492d0f6bc69c161e870831bc291afb759098356c0fd6b3` |
| `igcse/mathematics/mixed-review.md` | `b8bd9aca0a955dda218030162b60b4cfeab6500ec6395877cdc7cedbe10f9c7d` |
| `zh/igcse/mathematics/mixed-review.md` | `d6179d62c7472c1d3830897ec8554026fcad784bee13629810c0d9ab912ce8c0` |
| `igcse/mathematics/fractions-decimals-and-percentages.md` | `b57e5450259515745b5b22c9fd02b58fca450c7650b3ef21af73284e59b079b2` |
| `zh/igcse/mathematics/fractions-decimals-and-percentages.md` | `b1ba45fb1941ad73e765d1c901b8d0ba7c7f40956ff077b6da89c523d32ae0ff` |
| `assets/img/igcse-review-clubs.svg` | `7ed9b32e39606f57f1a566053662780d56f5bcd122a0edda888232bf28191956` |
| `assets/img/igcse-review-return-journey.svg` | `7ab11ab390a0ff1d016c139e96772c7fa94e6f3cbe0ec49d81927a179e164296` |
| `docs/agents/audit-assets/igcse-mathematics-sample-2026-10-26/previous-index-anchors.json` | `2c83abdf6a049030a4f6b8e875532429ba1633e751b413be5a46dc0e881be738` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/sources/specification.pdf` | `d803d6a8ef6e10d530511572269c58586e8fad83ea5aa77fa7a7e0c44745322a` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/sources/1E-qp.pdf` | `92ea5da304622e9b6e4bf6ef437183c80bfef5bac7cd92b6b7f99ed762c637a1` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/sources/1E-ms.pdf` | `4faa3a707eed12f1926e7e7af4da587ebca7e2c8d981299122117c5b307bcef2` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/sources/manifest.json` | `419aea17b34d03f0db184682310181d0343380bfd6ff7a61a649da6865395662` |

补充：为 F3 局部读取的三个目标页当时 SHA256 如下；只证明局部恢复入口的读取版本，不扩张为整课审查。

| 文件 | SHA256 |
| --- | --- |
| `igcse/mathematics/accuracy-and-bounds.md` | `b092c7253540452aa387dccbd76483112c6c9da849538ca080833e63c96de683` |
| `igcse/mathematics/data-and-averages.md` | `c88c346aa30917c3bc98b4a0d6b889023ef1ecfff79ce8ccfdb2af976a443212` |
| `igcse/mathematics/differentiation-and-motion.md` | `f617920085f32d2a2bc849be789edda06ef369c54094c6d4f0945f2995fcc373` |

未做：全条目审查、构建／浏览器／学生试用、Git 提交或发布。风险：被审源若继续变化，本报告只适用于表列版本；须修复并复核发现后再作相应内容通过判定。

## 8. 修复后独立复核（2026-10-27，第二轮）

本节为修复后状态；第 1–7 节保留首轮发现、原数学重解与旧哈希，不回写历史。此次仅追加本报告；课源、SVG、路由及被链接主题均只读。主执行者告知其已亲自用 Poppler 查看大纲 PDF22；这是代理协作消息，不是用户对题目的直接事实反馈。本审查者将其记为作者复查，而非冒充自己的新增操作；本审查者首轮已独立看过同一原页并核过坐标。

**当前结论：F1、F2、F4 在本轮边界内关闭；F5 维持已修；F3 的链接定位修复成立，但两条新重试尚未检验所诊断的同一能力，故 F3 部分修复、暂不整体关闭。** 来源目标陆续落盘，不以制作中暂未出现的文件作最终断链结论。后续全条目初审另记 [scope 审查](review-igcse-scope-2026-10-27.md)，不扩张本报告的整课验收边界。

### 8.1 按原发现复核

| 发现 | 实际复读／查看与判断 | 新状态 |
| --- | --- | --- |
| F1 层级 | EN index 第 54 行、ZH 第 58 行均改为整体 Extension；course-route.json 对应双语描述一致，已不把矩阵乘法放在共同基础。G22–26 全部 Extension 的官方判定没有改变。矩阵作者正在修正文，本轮不据入口修复就宣布该整课通过。 | 本轮入口问题关闭 |
| F2 逆百分数 | EN `later-price` 第 276 行／ZH 第 278 行标题均补 Extension。两语言英文题干、乘数链、原价 100 yuan、净降 4% 均保持一致。 | 关闭 |
| F3 定位 | 十题解答后现均按具体错误分别链接概念与命名新任务；多目标题分流已补。已读取实际目标题，见下表。一次读取时 functions 页尚在制作，随后落盘并补核 `#inverse`、`#retry-inverse`，不沿用早先暂缺状态。 | 定位修复；同目标重试仍有下述两处残留 |
| F4 角定义／图 | EN 第 196 行、ZH 第 198 行均定义 F 处“南向与 FS”的 θ，指出 4 km 对边、3 km 邻边，先从北顺时针到南再转 θ。SVG 新增南向箭头、South、θ 弧；title／desc 描述其含义。已实际栅格查看原生 360 px 宽及 540 px 宽，两种尺寸的标签和弧均可辨认，没有裁切或相互遮挡。 | 关闭 |
| F5 设计卡 | 此次读取主记录仍为已纠正的“Extension 导数及驻点类型”；原记录问题不再重开。 | 维持关闭 |

### 8.2 F3 实际任务核读及残留

以下不只是检查字符串锚点：已读取概念和目标任务题干，中文页相应锚点均存在，双语的反馈错误类型与帮助程度一致。目标页只按本表局部读取，不据此宣布目标整课正确。

| 综合任务 | 已核读的概念→新任务 | 与原错误的关系 |
| --- | --- | --- |
| garden | constructions `#scale-measure→#retry-map`；fractions `#find-part→#retry-part`；percentage-change `#multipliers→#retry-change` | 整体／补集、折扣两支匹配；面积尺度分支见 R1 |
| board | accuracy `#limits→#retry-limits`、`#calculated-bounds→#retry-bounds` | 舍入端点与保证量分开；新的质量区间／容量保证题对应错误 |
| tickets | equations `#model→#retry-equations`；quadratics `#simultaneous→#retry-simultaneous` | 分别重建情境列式与“两式同一对解”，匹配 |
| restricted | functions `#inverse→#retry-inverse` | 目标题反求受限线性函数并判断全实域平方函数是否有单值逆，能重查输入输出与限域；概念明确平方根分支由原域选定 |
| models | units `#scaling→#retry-scale`、`#prisms→#retry-prism` | 分别改变求问方向检查幂次、外露表面，非回抄原结果。后续 scope 初审另核这些新主题中的模型条件，不能把“目标匹配”当“整题数学通过” |
| journey | constructions `#bearings→#retry-bearing`；trigonometry `#ratios→#retry-ratios` | 重查北向起算／反向及边角关系，匹配 |
| times | data `#averages→#retry-averages` | 新的偏态等待列表要求选典型量并补充离散信息，能重查“波动小”与“每次更快”之别 |
| clubs | combined `#conditional-table→#retry-conditional`、`#independence→#retry-independent` | 条件后参考群体可重查；独立性分支见 R2 |
| later-price | percentage-change `#reverse→#retry-reverse` | 由涨后总价反求原量，再验算，匹配 |
| later-extension | differentiation `#stationary→#retry-stationary`、`#tangent→#retry-tangent` | 新的负三次函数检查分类，新二次函数检查点／斜率与截距，匹配 |

**R1（F3 残留，P2）：面积误用长度比例后的新任务仍只考长度。** garden 反馈明说“scaled area as though it were a length／把面积按长度比例放大”，但所指 `constructions-loci-and-bearings/#retry-map`（EN 第 237 行／ZH 第 239 行）只问 1.4 km 画多长、4.5 cm 对应多长，没有面积或两个维度。学生可以把这两问全做对，仍把图上面积乘一次比例。最小修复：保留现有长度回补，但再给一个 Core 可做的新长方形地图面积任务／已有等效任务的准确位置；要求先还原两条边再求面积。不能仅凭当前长度题成功，就记录面积尺度错误已经修复；不必为此把 garden 整体升级 Extension。

**R2（F3 残留，P2）：独立性诊断后没有实际检验独立性的任务。** clubs 的错误是未经核验便假定独立，当前 `#retry-independent`（EN 第 255 行／ZH 第 257 行）的题干却直接给“Independent machines…”，要求算树并陈述使用共同分支概率的假设；它检验在已知独立时计算，不能检验从数据判断是否独立。最小修复可直接复用已经落盘的 `combined-and-conditional-probability/#practice-independent-table`（EN 第 223 行／ZH 第 225 行）：30 张卡片四格 6、4、12、8，须先建表再判断独立，结论与原 clubs 不同，是真正新的检验。独立核算该候选目标：P(even∣red)=6/10=18/30=P(even)，或 6/30=(10/30)(18/30)，故独立；6 张同时满足，故不是互斥。只需改反馈目标，不需增加依赖或新系统。

### 8.3 双语、图文与数学回归边界

- 两语言 10 条 English Question 仍逐字一致；数学片段现在各 37 段且完全一致，新增片段为角定义中的 θ。首轮十题数值及条件仍在，重点重算返程 5 km、θ≈53.1301°、方位角≈233.1301°；没有因图文修复改变答案。
- 已逐项比较十条双语反馈的错误条件与链接；规范化 `/zh/` 后目标链接顺序一致。相同英文题干／公式不替代本节对中文解释的实际比较。
- 新 SVG 的 desc 说明 θ 从南向量至西南返程 FS，bearing=180°+θ，并标 Not to scale。南箭头位于 F 向下的同一竖直线上，θ 弧连接向南与 FS；弧角不要求用像素测量等于 53.13°，因为图明确不按比例。
- Markdown img 的替代文字保留原有路线与北向说明，紧邻正文补全角定义；SVG 自带 desc 也补全 θ。两语言均可从文字获得图中的新增数学信息；未删减替代文字来隐藏答案。
- 两张答案图仍在各自默认关闭的解答内，没有把角度、分区人数或解法移到学生独立作答之前。社团图字节未变，本轮不虚称重画。
- 没有启动浏览器、MathJax、构建或键盘／屏幕阅读器验收；栅格图可读不等于真实手机页面重排通过。未进行新学生试用。

### 8.4 本轮实际读取版本的新 SHA256

快照时间：**2026-10-27 08:19:10（Asia/Singapore）**。这些哈希与第 7 节旧版本分开保存；目标课源的哈希只支持局部反馈核读。

| 文件 | SHA256 |
| --- | --- |
| `igcse/mathematics/index.md` | `a67c7d32764d9b33aa8210cd4d211ff5d29693d0e02b4752fa36975ef24e3caf` |
| `zh/igcse/mathematics/index.md` | `ba66ad650af82d64bd00d1fb5c55f767e5392c891309d57abde758245d409caa` |
| `igcse/mathematics/mixed-review.md` | `5df1ffc9582cf83c2a2649bf83198d4731cb7d98af9d0e4d22c2ed49d5bce721` |
| `zh/igcse/mathematics/mixed-review.md` | `f146c87064589a4700f9f604635e886999b6971ffee7c0b8fecb58914a32a471` |
| `assets/img/igcse-review-return-journey.svg` | `d6daadc9acf8424b3626189b2f8338ebdd61521a5717d0b63b76cdc2c0c94edb` |
| `assets/img/igcse-review-clubs.svg` | `7ed9b32e39606f57f1a566053662780d56f5bcd122a0edda888232bf28191956` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/course-route.json` | `2b785e66210c11026b8e4aebf5bc70f6c704bac096518b08148ba6f4128ebb76` |
| `igcse/mathematics/constructions-loci-and-bearings.md` | `e863a9ebdad55e0a89de73e0704157911c7e7bbf5d3890d67d61060d68125c85` |
| `zh/igcse/mathematics/constructions-loci-and-bearings.md` | `d81c84aea13127eb67cd472cb30dee83299e40894c97d7fd6d85be7c2c91902c` |
| `igcse/mathematics/fractions-decimals-and-percentages.md` | `b57e5450259515745b5b22c9fd02b58fca450c7650b3ef21af73284e59b079b2` |
| `zh/igcse/mathematics/fractions-decimals-and-percentages.md` | `b1ba45fb1941ad73e765d1c901b8d0ba7c7f40956ff077b6da89c523d32ae0ff` |
| `igcse/mathematics/percentage-change.md` | `59891c3a50a2fcf34481dd800ac14e565cf07ce43edab2cff7444bbf05bbfa5a` |
| `zh/igcse/mathematics/percentage-change.md` | `86013c7e4afe072b16cc6bf20b4fd0fbeed578651d6e396f902b114e344894a7` |
| `igcse/mathematics/accuracy-and-bounds.md` | `ea19c4284114a2eaf88753406c9a04bfe49920e4a6d5312bcfd16460bf1ff09a` |
| `zh/igcse/mathematics/accuracy-and-bounds.md` | `3b8fb54b58d2766cfe2a8457fcac91fc888733a1927ea4f007047b9da4f930bf` |
| `igcse/mathematics/equations-and-inequalities.md` | `fc1a9893ac6625721485d2a458eaf261d0ae676c9f97454cda656cc531adf08d` |
| `zh/igcse/mathematics/equations-and-inequalities.md` | `02b574082abf51fc763f4f3d399f9443b8cb6374e65ae5b90144cf7a22b2d21e` |
| `igcse/mathematics/quadratics-and-simultaneous-equations.md` | `74dc1adeb19e9923c79275cd478010a02dbe08325deb9ea80f83633f3d321a1a` |
| `zh/igcse/mathematics/quadratics-and-simultaneous-equations.md` | `2d6aa890779864aa69e8f6465d1856326bb8ef778c4146829e58e3d90f372108` |
| `igcse/mathematics/functions-and-graphs.md` | `14471bb305fd5569518b684c79916e8ec5c827e94bc287780dc50d39c9958a87` |
| `zh/igcse/mathematics/functions-and-graphs.md` | `5a8b84e7c974f879e26b090c247725fa1a654a65b2dbdde53bf479748966e679` |
| `igcse/mathematics/units-area-and-volume.md` | `3013491a34d3896eabe8351f4c0d1a738f0f3c0e2d8700cc7149d5509b982ade` |
| `zh/igcse/mathematics/units-area-and-volume.md` | `a0374053d42b2283e985cf4992d44bd9aefc80b97a939bbc666b392809501761` |
| `igcse/mathematics/pythagoras-and-trigonometry.md` | `ad471a1f0d60fa9f62768376c9ef42c93f0e542eccb73efcf8a37788f1c578f2` |
| `zh/igcse/mathematics/pythagoras-and-trigonometry.md` | `acd4aed1e9029c15e8e389e25f1934c9dacd929887a9f682133662bc977b4d79` |
| `igcse/mathematics/data-and-averages.md` | `165b29a38a9358b0b3ae78bb613ff3e49e924bb8295709e9dc9dec4e3556d30b` |
| `zh/igcse/mathematics/data-and-averages.md` | `f41d07eeb9a576bf61a20e7c56a5038d0095adf938d2236cd6198a37ddf6982f` |
| `igcse/mathematics/combined-and-conditional-probability.md` | `8c63d60914ef3b3095095756593bade651978885825bfb36ea90709c616c63ef` |
| `zh/igcse/mathematics/combined-and-conditional-probability.md` | `27cf3f7c6fa14ead5f7efabfb4f8cce88932cd445b58e79853fa0c6022c28ec4` |
| `igcse/mathematics/differentiation-and-motion.md` | `f27290b658fa79fa47f5684bc7f840d234ace76e4fafeb38fd982f1364bbf072` |
| `zh/igcse/mathematics/differentiation-and-motion.md` | `80682010edc017ed3de4bd1d877c923ad989000b5b4bf0c0a7feab655f3f2f98` |

当前仍需：F3 的 R1/R2 修复及相同位置复查；技术与学生证据仍待作者后续验收。此次只追加报告，未改被审材料。

## 9. R1/R2 修复后的最终有界复核（2026-10-27，第三轮）

本节取代第 8 节尚未关闭 R1/R2 的当前状态，但保留第 8 节作为真实历史。**原发现 F1–F4 均已修复并在各自边界内复核通过，F5 维持已修。** 本结论只关闭原有发现，不替代后续 [90 条目 scope 审查](review-igcse-scope-2026-10-27.md) 对其他主题的新发现及整体课程交付判断。

- **R1：关闭。** garden 反馈保留比例尺概念与长度重试，并进一步指向本页 `#retry-map-area`（EN 第 340 行／ZH 第 342 行）。这是新自拟任务，给周长和一边，须先恢复缺边，改变了原题直接给两边的表征；学生仍需独立决定怎样求实际面积，标题没有给结果。两语言分别关闭提示／解答。独立重解：2(4+w)=12，所以 w=2 cm；4 cm×500=2000 cm=20 m，2 cm×500=1000 cm=10 m，真实面积 20×10=200 m²。另一核验为 8 cm²×500²=2000000 cm²=200 m²，不能只乘一次 500。反向分别换回 4 cm、2 cm；单位与两条边一致。正文和两语言题干、提示、TeX、结果一致，已能检验原面积尺度错误。
- **R2：关闭。** clubs 独立性反馈现在两语言均直接指 `combined-and-conditional-probability/#practice-independent-table`，不再以已给 Independent 的树计算充当检验独立性。该目标四格 6、4、12、8 已实际读核，独立判断及独立算式见第 8.2 节；本轮复核链接、题干与相应中文位置一致。
- **设计记录：**已实际读取主记录第 38 行“复核后的补充设计”，明确要求面积新题先恢复两边、再求面积，并撤销“给独立条件的计算题”作为独立性误判恢复。主执行者说明其先补设计再写正文；本审查者确认当前设计与任务一致，不以文件修改时间独立证明协作消息所述时序。
- **双语及回归：**全综合页现为 10 道原任务＋1 道新增恢复任务，共 11 条 English Question，逐字一致；两语言各 40 段数学片段完全一致。θ 正文、南向箭头与 θ 弧未回退，返程 SVG 与第 8 节哈希相同。未发现新题或其提示／答案在默认打开区泄露结果。
- **归因更正：**按主执行者澄清，第 8 节首段已改为“主执行者告知”。该信息来自代理协作，不是用户对题目的直接事实反馈；与本审查者亲自读源、看图和重解的证据分开。
- **技术边界：**主执行者报全部 29 页面身份／58 双语源已落盘、初建及 6 项测试通过；本审查者没有复跑，亦不将这些技术证据当作官方细项已教、独立任务有效或学生掌握的证据。scope 审查中发现的目标主题问题须另行处理；本节不为矩阵正文或被链接主题整课背书。

本轮最终复核快照 **2026-10-27 08:25:32（Asia/Singapore）**：

| 文件 | 新 SHA256 |
| --- | --- |
| `docs/agents/implementation-igcse-mathematics-rollout-2026-10-27.md` | `d405e320ed73be8d133344c169c8773d5b02db46b6f7641a6c3b3feeae6eb75d` |
| `igcse/mathematics/index.md` | `a67c7d32764d9b33aa8210cd4d211ff5d29693d0e02b4752fa36975ef24e3caf` |
| `zh/igcse/mathematics/index.md` | `ba66ad650af82d64bd00d1fb5c55f767e5392c891309d57abde758245d409caa` |
| `igcse/mathematics/mixed-review.md` | `1ecd7adb3d1b7f6935c0d6740a2f55d9b1f482ce3b77c1d1a0aaec6a0f71c1f6` |
| `zh/igcse/mathematics/mixed-review.md` | `399d8809ee262229025e967dcd491ed8b04a1cf50320f562e596b996d28cebb8` |
| `assets/img/igcse-review-return-journey.svg` | `d6daadc9acf8424b3626189b2f8338ebdd61521a5717d0b63b76cdc2c0c94edb` |
| `assets/img/igcse-review-clubs.svg` | `7ed9b32e39606f57f1a566053662780d56f5bcd122a0edda888232bf28191956` |
| `igcse/mathematics/combined-and-conditional-probability.md` | `8c63d60914ef3b3095095756593bade651978885825bfb36ea90709c616c63ef` |
| `zh/igcse/mathematics/combined-and-conditional-probability.md` | `27cf3f7c6fa14ead5f7efabfb4f8cce88932cd445b58e79853fa0c6022c28ec4` |

未执行构建、浏览器、Git 提交／发布或学生试用；本审查者只改审查报告。原入口／综合发现关闭，与后续 scope 新问题仍须修复是不同的结论。
## 10. Extension单一路线：当前11题最终有界复核

本节是当前入口／综合结论；第1–9节及原10题版本、F1–F5和修复历史均保留。用户最终只开设Extension：不再要求Core学生分流或逐题Extension标签。F1/F2先前的范围核对及当时修补是真实历史，但其双群体标注判据不作为当前验收条件；G22–26官方右列判断仍成立。

已实际复读当前中英入口的起点、全部主题路线、考试说明、旧资料区，综合页当前全部11道题及中译解释／反馈，并复读样章的承接段及新增Extension来源说明。入口只提供一条路线，基础概念与回补保留；综合删除逐题分层但没有删除原任务，新增面积恢复仍在。样章的1C来源保持真实身份，没有冒称Extension原卷题。本结论不扩大为样章整课重新验收。

当前综合11题的独立核验保留如下可检查结果；其中前10题此前已逐题独立重解，本次按当前题干及限制复读核对，第11题另外重解。

| 题目锚点 | 独立核验结果／必要条件 |
| --- | --- |
| garden | 实际12×8=96 m²，草地60 m²，原价900、折后792元；长度因子作用于两边 |
| board | 长[2.35,2.45)、宽[1.75,1.85)，面积[4.1125,4.5325) m²；2.44×1.84=4.4896是反例，4.4不能保证 |
| tickets | 成人13、学生19；人数32及收入199均满足，非负整数条件成立 |
| restricted | f=(x−2)²−3，x≥2，值域[−3,∞)；反函数2+√(x+3)，输入≥−3；候选−1被排除，只留5 |
| models | 原长方体V24 cm³、S52 cm²；新边6/4.5/3，V81 cm³、S117 cm²，模型可实现 |
| journey | 5 km；F处向南到FS为θ，tanθ=4/3；先180°再θ，约233°，西南象限合理 |
| times | A/B均值均4 min，中位3/4、极差6/2；低波动不证明总更快，五次样本与抽样局限保留 |
| clubs | Venn四区3/5/7/5，$P(S\mid C)=5/8$；1/4≠6/25，所以不独立；抽选群体改变分母 |
| later-price | 原价100，先120后96，不能抵消，净降4% |
| later-extension | 极大(−1,2)、极小(1,−2)，切线y=−3x；x³在原点是驻点拐点，左右梯度正且弯曲改变 |
| retry-map-area | 周长2(4+w)=12得w2 cm；20 m×10 m=200 m²，面积不能只乘500一次 |

全页11条English Question与40段TeX两语言分别一致；关闭提示／解答安排未回退。已人工核对θ的中译、条件／解集和数据解释；不是只凭式子序列相同认定双语正确。源级核对入口／综合／样章承接所用的本地链接及锚点未发现失效，31个旧index显式ID两语言均保留，英文12个旧相对PDF链接与Lynn署名仍在。此处未重新鉴定旧PDF内部内容。

**F3最终状态：关闭原发现及其R1/R2。** 当前garden仍指面积新任务，clubs仍指新四格表独立性判断。独立性目标当前表仍6/4/12/8、总30，6/10=18/30，确实独立且不互斥。其他错误诊断仍分别指实际概念与新retry，多目标链接分开。链接目标整课不在原entry边界；scope新增SC-1现也已用units两道立方体新题独立核过模型、比例、结果和双语后关闭，详见scope第6节，不留原本“不可能立体”的恢复障碍。五组其他整课任务／重试缺口仍由各独立审查承担，不能据本节把所有恢复目标整课标通过。

两张答案SVG SHA与第8/9节一致，继承此前实际360/540px栅格查看证据：南向箭头、θ弧、4/3边标清晰，描述与正文一致；clubs四区与正文相符。两图及其alt均在关闭解答内，不提前提供独立作图答案。未再启动浏览器或将栅格检查称为网页阅读验收。

**当前结论：入口／综合自身11题、原发现及样章承接变更在上述边界内关闭；学校Extension单路要求已落实。** 全课程90条的映射结论和交叉审查边界见[scope第6节](review-igcse-scope-2026-10-27.md)；本节不是全课逐题重审、技术通过或学习效果声明。

当前课程源快照 **2026-10-27T08:43:47.320249（Asia/Singapore）**，此表取代第9节作为当前入口字节身份；旧表继续保留。作者／审查报告和mainrecord以后追加关闭／技术结果不需要与本表互锁，也不使课程源结论自动失效。只有实际课程源、任务、映射或相关图片改变才按影响复核。

| 文件 | 当前 SHA256 |
| --- | --- |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/syllabus-coverage.json` | `9894f8cb01922e3f4a82762dc572a423c771b01148f34604155316c22ac42de2` |
| `docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/course-route.json` | `066fe8a8e8c3d3ec77b6d9faf2490f7439269bd7a18b65640dbec0d78c43ebf7` |
| `igcse/mathematics/fractions-decimals-and-percentages.md` | `bbec42deb10eb632b896319ca480154eeb5252a72a6e00f5c83a9a27be5fa865` |
| `zh/igcse/mathematics/fractions-decimals-and-percentages.md` | `74581e78c642ebe0fed185fc11f86bc4ba111730575a3a0c11e4fdb3be2fdf60` |
| `igcse/mathematics/index.md` | `8881e8840231a335c2dfb1130973592507cf79ae4ed4a1c3abd6d986fb36ddd5` |
| `zh/igcse/mathematics/index.md` | `daef8d5f1ee5d6449b990e6e37ee352cce18240afbe88ea07e6f3ade3c020275` |
| `igcse/mathematics/mixed-review.md` | `b0f98fb3d85147847a7613f8a61c5de5d1b74e6f49730cf52f570d8f691123be` |
| `zh/igcse/mathematics/mixed-review.md` | `fab99876dd8888d5323c5ab69244e6b68d00ed2bfe7e9ccbf8c4df49cc65d717` |
| `assets/img/igcse-review-return-journey.svg` | `d6daadc9acf8424b3626189b2f8338ebdd61521a5717d0b63b76cdc2c0c94edb` |
| `assets/img/igcse-review-clubs.svg` | `7ed9b32e39606f57f1a566053662780d56f5bcd122a0edda888232bf28191956` |

只更新两份审查报告；未构建_site、运行测试／浏览器、改课源或提交Git。本次报告冻结不阻止主执行者按授权继续技术验收或追加实施记录。
