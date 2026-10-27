# IGCSE 数学 9260：范围核对与概念依赖学习路线

2026-10-26；只读研究快照，源码 HEAD `6c485e8`。本轮只新增本文件。已读根目录 AGENTS、[课程内容长期标准](course-content-standard.md) v1.1 及现有数学中英文入口；以下路线是项目教学建议，不是官方授课顺序，也不是课程完成声明。主代理负责 fractions / decimals / percentages 双语样章与配套 QP / MS 阅读，本轮不重复题目求解、评分核算或样章验收。

## 1. 官方来源与实际阅读范围

从当前 [9260 资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/) 的 Specification 链接进入，实际指向 [9260 官方大纲 PDF](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。没有用搜索结果中的旧上传路径代替当前链接。

PDF 共 31 个物理页。下文“印刷页”指页面页脚，“PDF 页”从封面算第 1 页；例如印刷第 16 页是 PDF 第 15 页，不可直接混用。

| 实际读到的来源 | 定位与确认内容 |
| --- | --- |
| [当前资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/) | 页面标题 9260；Specification 链接；Syllabus summary 与 Assessment。网页无页码。导航同时列有另外的 9233 资格，不能据此把本项目自动迁移到 9233。 |
| [当前大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=1) | 封面 PDF 第 1 页及印刷第 3–4 页／PDF 第 2–3 页：International GCSE Mathematics (9260)，正文页眉 Version 5.1；2016 年 9 月起教学，2018 年 May/June 起考试，英国以外教学与考试。上传路径含 2026/07，不等于正文版本为“2026 新大纲”。 |
| [评估与计算器](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=7) | 印刷第 8–10 页／PDF 第 7–9 页：同层级同考季两卷、时长、分值、科学计算器及禁止类型。 |
| [学科范围](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=10) | 印刷第 11–26 页／PDF 第 10–25 页：N1–N20、A1–A26、G1–G26、S1–S18；Core 与 Extension 两列及说明。读取全文提取，并用保留横向位置的 PDF 提取核对两列；印刷第 16、26 页另作内存渲染目视核对。 |
| [评价目标与权重](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=26) | 印刷第 27–28 页／PDF 第 26–27 页：AO1、AO2 和总评估权重。 |
| [代码与等级](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=28) | 印刷第 29 页／PDF 第 28 页：9260C / 9260E；Extension 正常等级 4–9，另有 allowed grade 3 的规定。 |
| [公式附录](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=30) | 印刷第 31 页／PDF 第 30 页：列出的公式通常不在考试提供，适用层级须回查正文。本轮只核对附录要求与存在，不逐式重新证明。 |

网页工具截图部分失败；直接请求原 PDF 一度返回 403，随后用同一路径的 [download=1 请求](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf?download=1) 成功取得 997,362 字节的 31 页 PDF，在内存提取、渲染，没有保存额外文件。身份及上述页码与资格页所链 PDF 的正文提取一致。文本提取会把交集符号错读为并集；印刷第 26 页图像确认 S17 为交集，不能照抄提取乱码。本记录没有据此宣称所有 PDF 公式均已目视核验。

## 2. Core、Extension、评估与工具边界

**Extension 学习必须包含 Core 基础。** 大纲印刷第 11 页明示全部内容可在 Extension 评估；右栏是增补／深化要求，右栏留空不表示该条目不考 Extension。只摘右栏不能形成完整 Extension 课程。以下是范围摘要，具体制作仍须对照对应条目的两列及 notes。

| 领域与来源页码 | Core 基础 | Extension 的主要增补／深化 |
| --- | --- | --- |
| Number，N1–N20；印刷 11–14／PDF 10–13 | 数序、四则、位值、运算规则、因倍数、整数指数、分数精确运算、标准形式、集合、科学计算器、舍入与精度限制；分数／有限小数／百分数、百分数变化、利息、比与比例 | 分数指数、根式与有理化、上下界计算、循环小数转换、逆百分数及复利公式、指数增长与衰减。Core 的 N15 已包含复利情境，不能把所有复利都标为 Extension。 |
| Algebra，A1–A26；印刷 15–18／PDF 14–17 | 代数记号、代入与简单变形、整式运算和基本因式分解、代数论证、输入输出、坐标与基本函数图像、线性方程、因式分解解二次方程、二元一次联立、建模、单变量线性不等式、线性数列等 | 复杂公式变形、一般二次式分解、代数分式、证明、复合／反函数、垂线、指数／三角图像、A13–A15 微分／切线／驻点、配方与求根公式、一次与二次联立、二维线性与一元二次不等式、二次数列；A18 代数形式的正反比例。 |
| Geometry and measures，G1–G26；印刷 19–23／PDF 18–22 | 基本形与角、对称、全等相似及相似长度、圆的术语、立体视图、比例尺与方位角、尺规作图与轨迹、单位与复合单位、基本周长面积体积、二维直角三角形、单一变换 | 三角形全等条件、圆定理及几何证明、更多立体／组合体／台体、相似面积体积、弧与扇形、三维直角三角形、正余弦定理与三角形面积、组合及负比例变换、G22 向量几何、G23–G26 矩阵与组合变换。Core 平移仍用向量指定，不能写成 Core 完全没有向量。 |
| Statistics and probability，S1–S18；印刷 24–26／PDF 23–25 | 数据类型、表图、等组距直方图、均值／中位数／众数／极差、分布比较、相关与拟合直线；概率尺度、理论与相对频率、期望频数、重复与样本大小、样本空间、互斥完备及 Venn 图 | 不等组距直方图、累计频数、箱线图、四分位数／IQR／百分位数；S17 独立复合事件与树图、S18 条件概率。 |

上述分栏依据 [官方大纲 §3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=10)。微分只按 A13–A15 声明的范围安排；图下面积的估计／解释不能自行扩成 AS 的积分方法课程，矩阵也不能自行扩成逆矩阵或行列式必考内容。

| 项目 | 核对结果 |
| --- | --- |
| Core | 9260C：1C、2C 各 90 分钟、80 分、50%；总分 160。等级 1–5。 |
| Extension | 9260E：1E、2E 各 120 分钟、100 分、50%；总分 200。等级 4–9；刚未达到 4 的学生可获 allowed grade 3，更低为 U，不能宣传为正常 1–9。 |
| 两卷关系 | 同层级、同考季；各卷均可考该层级范围的任意部分，不是按 Number／Algebra 等拆卷。依据印刷第 8–9、28–29 页。 |
| 学科比例 | Core：Number 25–30%、Algebra 25–30%、Geometry 25–30%、Statistics／Probability 15–20%；Extension：依次 20–25%、35–40%、25–30%、10–15%。是整个层级总评估范围，不是每卷或授课时间配额，见印刷第 11 页。 |
| 评价目标 | 两层级总 AO1 约 59–61%，AO2 约 39–41%；AO2 包括解决问题、论证／证明、解释、交流和推断。不要套用其他考试局的 AO1／AO2／AO3 配比，见印刷第 27–28 页。 |
| 计算器 | 印刷第 10 页：所有卷需科学计算器，禁止图形计算器及内置符号代数／微积分计算器；中间计算不提前舍入，π 优先用计算器值，否则按卷首给定值。不能因 A-level 教程已有 fx-CG50 流程而沿用为 9260 考场操作。本轮未核验任何具体科学计算器型号或按键。 |

评估依据：[§2 与计算器要求](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=7)、[主题权重](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=10)、[§4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=26)、[§5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=28)。资格网页介绍中的 Extended 9–1 与其 Assessment、PDF 不一致；采用已核对 PDF 的 Extension 定义，不静默传播冲突。

## 3. 当前仓库资产与确切缺口

这里描述本轮读到的源码，不把旧审计、文件名或正在并行制作的内容当作验收证据。

| 当前资产 | 实际证据 | 缺口及使用边界 |
| --- | --- | --- |
| [英文数学入口](../../igcse/mathematics/index.md) | 四个领域的条目、公式、四组 Quick Check，后接 Revision Resources 和 Topic Test 链接；页首 Extension 卷别、分值及主题权重与本轮大纲核对相符。 | 是速查笔记／资料入口，尚非完整课程。未给从基础开始的依赖路线、逐目标讲解与独立证据。页首“covers Extension content”不能作为已完整覆盖的证据。 |
| [中文数学入口](../../zh/igcse/mathematics/index.md) | 有中文主题名、稳定锚点、`translation_of`，各项链接到英文相应段落。 | 是中文导航，不是完整中文学习正文；不能将中英文入口都存在计作双语课程完成。 |
| Number | 英文列指数、根式、标准形式、集合、上下界及百分数相关条目；Ratio and proportion 下仅列指数增长衰减。 | 共同基础 N1–N5、N16–N19 等缺系统讲解／练习；没有从比、单位率、比例到变化模型的学习链。N12–N15 样章由主代理负责，此处只登记范围，不评价并行成果。 |
| Algebra | 已列复杂变形、分解、函数、微分、方程、不等式、二次数列，Quick Check 只给短题及紧随答案。 | 缺从记号／代入／一次关系到二次／函数的衔接；没有证明如何独立选择方法、检查条件及解释图像的任务证据。列出微分规则不等于已有切线与驻点学习段。 |
| Geometry | 有圆定理清单、立体／相似／扇形条目、三角公式和变换／矩阵／向量摘要。 | 基本角理、作图／轨迹、比例尺方位角、单位、图形推理与模型选择尚未形成学习活动；没有据图重建证明或独立决定三角方法的证据。 |
| Statistics and probability | 列高级统计图、四分位相关词及独立／条件概率，Quick Check 紧随答案。 | 缺基础数据读表、均值与离散程度、分布比较、相关解释、理论／实验概率与抽样变异的学习链；树图及条件概率只有要求摘要，不是完整示范／独立任务。 |
| 现存 PDF | `igcse/mathematics/` 枚举到 17 个 PDF：11 个主题／作业资料（含未在入口链接的 HW_scanned）、Topic Test 与 commentary 两个、revision_papers 下四个。 | 本轮只确认存在及入口链接，没有读 PDF 正文，不能确认作者、卷别年份、题目、答案、评分身份或覆盖。commentary 文件名不能当官方 MS 证据。复用前逐份核对，不删除或覆盖。 |
| 学习活动 | 四组 Quick Check 共 13 题，源码答案紧随题干。 | 可用于复习核对，不能证明无帮助独立作答；未见目标对应表、分层提示、错误回补与重试、跨主题综合及延后回顾任务。 |

本轮没有发现可据以宣布“完整 Core 学习路线”或“完整 Extension 双语课程”的正文。也没有把未读 PDF 中可能存在的教学内容判为不存在：这里的“缺”指当前网页正文未提供，或没有可定位的合格学习证据。

## 4. 建议路线：共同基础后分支，按能力回补

设计卡：中心问题是“怎样从数量、关系、图形和数据判断选用什么方法，并说明结果为什么成立？”目标是独立选择表征／方法、写出可检查推理、解释条件及结果。起点诊断只调用位值、四则、读数和基础图形；发现断点回补对应基础，不假定学生因选 Extension 已掌握 Core。图分别用于数量关系、函数、几何论证和数据解释。示范必须交代选择理由，随后逐步撤去提示；未标方法的综合题检验选法，错误回到具体概念，再做改变条件的重试。来源为上文 9260 范围，实施与验收执行长期标准。

下表是规划层目标对应，不是已编好的任务／评分标准；所有新增讲解、独立任务、提示、反馈与重试位置均为“待制作／待核验”。编号只用于研究中的依赖说明，不拟作为学生页面标题。

| 学习段／官方范围 | 进入前要会什么 | 结束时可观察的独立产出（拟） | 现有起点与回补安排 |
| --- | --- | --- | --- |
| R0 数、运算与精度：N1–N8、N10–N11；印刷 11–13 | 位值、基础四则；先诊断，不会则从这里起步 | 选择精确／近似表示，说明舍入精度，并检查结果量级；Extension 再处理根式、分数指数和上下界 | [Structure and calculation](../../igcse/mathematics/index.md#structure-and-calculation) 可作速查；基础解释与诊断任务待补。 |
| R1 分数、小数与百分数：N12–N15；印刷 13–14 | R0 的分数运算、位值与比例量感 | 识别整体与所比较的量，连接表示、算子和变化；Extension 深化循环小数、逆百分数等 | [现有段落](../../igcse/mathematics/index.md#fractions-decimals-and-percentages) 是摘要；主代理样章在做，具体 QP／MS 与验收以其实际记录为准。 |
| R2 从算术到代数：A1–A8、A19、A22、A23 的基础；印刷 15、17–18 | R0；代数分式进一步用 R1 | 从情境设量、列式和一次方程，说明等价变形、代回检查；能解释恒等与方程区别，再按层级深化分解、证明、公式变形 | [Notation and manipulation](../../igcse/mathematics/index.md#notation-and-manipulation)、[Equations](../../igcse/mathematics/index.md#solving-equations-and-inequalities) 保留作参考；缺入门桥梁时回 R0／R1，不跳到复杂公式。 |
| R3 比、单位率与比例模型：N16–N20、G14，Extension 接 A18；印刷 14、17、21 | R1；代数形式的模型用 R2 | 分清份额、单位率、正反比例及重复变化，选择模型并用单位／极端值检验；不能把所有变化都当正比例 | [Ratio and proportion](../../igcse/mathematics/index.md#ratio-and-proportion) 内容过薄；先补比与单位率，再接增长衰减；误认“整体”回 R1。 |
| R4 坐标、直线与函数初步：A9–A12、A17、A21 的基础；印刷 16–18 | R2；梯度的率意义用 R3 | 在文字、表、图、式之间转换，解释梯度、截距与交点；用图与代数互检线性联立，区分图像读取和精确解 | [Functions, graphs and calculus](../../igcse/mathematics/index.md#functions-graphs-and-calculus) 目前混合不同层级；应先补坐标、直线和函数输入输出。 |
| R5 二次关系、数列及 Extension 函数深化：A9、A12、A16、A20–A26；印刷 16–18 | R2 的分解／方程与 R4 图像 | 联系根、图像及情境；先线性数列，再二次数列；Extension 独立选择配方／公式／联立／不等式方法，并处理复合反函数的条件 | [Equations](../../igcse/mathematics/index.md#solving-equations-and-inequalities)、[Sequences](../../igcse/mathematics/index.md#sequences) 有提纲；任务待补。复合／反函数、二次模型与数列按概念转折分段，不塞成一页。 |
| R6 图形、角、相似与作图：G1–G13；印刷 19–21 | R0；比例尺／相似长度用 R3，代数求角用 R2 | 读／补图、指出适用性质，完成作图或轨迹并解释条件；Extension 再写圆定理及几何证明 | [Properties and constructions](../../igcse/mathematics/index.md#properties-and-constructions) 与角／圆 PDF 可候选复用；先核验 PDF。图形依据不清时回基本角理，不只给定理名称。 |
| R7 测量、面积体积与三角：G14–G20；印刷 21–22 | R1／R3 的比和单位、R6 图形、R2 方程 | 从图中决定长度、面积、体积或三角模型，标明对象与单位并检查结果；Extension 扩到相似面积体积、扇形、非直角／三维问题 | [Mensuration and calculation](../../igcse/mathematics/index.md#mensuration-and-calculation) 及 2D／3D／trigonometry PDF 是候选资料；平方／立方单位和相似比错误回 R3、R6。 |
| R8 变换、向量与矩阵：G21–G26；印刷 23 | R4 坐标、R6 对称相似、R2 运算 | 描述变换并识别不变量；Extension 用向量连接几何，用矩阵作用于点和单位方形，解释组合次序 | [Transformations, matrices and vectors](../../igcse/mathematics/index.md#transformations-matrices-and-vectors) 有提纲及候选 PDF；先做单变换，再用点的像核查矩阵次序。 |
| R9 数据表示与比较：S1–S8；印刷 24–25 | R1；比例与频率用 R3，不等组距图的面积意义接 R7 | 选择合适图表和统计量，用数据比较分布、解释相关及结论边界；Extension 处理频率密度、累计频数及箱线图 | [Presentation and analysis](../../igcse/mathematics/index.md#presentation-and-analysis) 只有高级摘要；基础表图、平均与变异、比较解释待补。图表选择错误回数据类型，不能只重算均值。 |
| R10 集合、概率与条件：N9、S9–S18；印刷 13、25–26 | R1 的分数／整体，能读基础表；不必等 R9 全部学完 | 列样本空间，区分互斥／独立、实验频率／理论概率；Extension 根据条件更新分母并选择树图／表／Venn 图 | [Probability](../../igcse/mathematics/index.md#probability) 仅摘要；先建事件与整体，再处理多步。分母错误回 R1 与样本空间，独立误用回事件条件。 |
| R11 Extension 变化率与微分：A13–A15、A17；印刷 16–17 | R4 梯度及直线方程，R5 多项式／二次图像，R0 指数 | 从平均到局部变化率，连接导数、切线、驻点与图像，用邻近变化检查驻点类型；图下面积按大纲要求处理估计与解释 | [现有函数／微分提纲](../../igcse/mathematics/index.md#functions-graphs-and-calculus) 与 differentiation PDF 仅候选资料。不得从一个微分规则直接跳到分类驻点，也不新增 AS 积分必考要求。 |

最简执行顺序：先做 R0→R1；R2 形成代数基础后接 R3→R4→R5。R6 的基本图形可在 R0 后并行，等比例／代数先修具备再接相似、证明与 R7；R8 需坐标与图形。R9 和 R10 在所列先修具备后即可穿插，不必等微分之后。Extension 学生在各段共同基础后进入对应深化，R11 放在函数／二次关系后。Core 不强制进入右栏专属内容。

每个分支结束都需一个未标方法的连接任务，例如数量与比例、方程与图像、相似与测量、图表与概率；之后的其他分支中再提取旧知识。以上只是任务类型建议，不冒充已提供练习。实际题干、条件、来源、判定依据、错误回补位置和改变条件的重试均须落地；完成后按长期标准逐目标审查，不能用路线表或题量代替。

## 5. 下一步最小实施与交接

1. 先让主代理完成 R1 双语样章，核对其具体官方条目、实际阅读的 QP／MS 页／题号、推理、条件、英文任务与双语对应；本报告不重复或预先批准这些检查。
2. 样章通过内容审查和适用技术检查后，入口才能把它标为可进入的学习页；其余仍明确为“参考笔记／待制作”。保留现有中英文锚点、语言切换和 PDF 链接。
3. 下一小段优先 R3 的“比与单位率”，因为当前比例小节几乎只列 Extension 的指数变化，却是相似、变化模型、统计图和概率的重要先修。先写目标对应表、讲解／独立产出／反馈位置，再选读对应官方 QP／MS；不一次扩成全科重写。
4. R6 的图形论证、R9 的数据解释、R11 的变化率属于不同学习类型，应分别小段试做及独立内容审查；R1 通过不等于这些类型也已合格。现有 PDF 逐份核对后按实际用途复用。
5. 最后补分支综合、后续提取及恢复路径；学生试用单独记录背景、帮助、错误、重试和延后表现，不预设固定题数、课时、正确率或统一版式。

## 6. 检查结果与未验证事项

- 来源与范围：已从当前资格页追到 9260 v5.1 正文，阅读上述范围、层级、评估、工具与公式要求；没有开展 9233 的差异研究，也没有核对目标学生的实际报考考季／层级，不能据本报告决定迁移或报名。
- 学科正确性：本轮核对范围及概念先修，没有制作／独立求解新例题，也没有阅读样章配套 QP／MS；不替代逐题内容审查。现存 17 个 PDF 仅确认文件存在，未审核内容或真题身份。
- 技术检查：仅对本 Markdown 检查本地相对文件链接、标题结构、表格列数、引用位置与改动范围；未改课程／布局／共享样式，未构建全站、做桌面手机阅读验收或运行课程测试。
- 并行状态：研究期间主代理新增样章记录／素材等文件，属于既有并行工作；本轮不写、不回滚、不计作自己的产出。资产判断是读取时快照，合并路线前重读现有页面。
- 学生试用：未进行；未宣称学习活动完整、全范围覆盖或学习效果已验证。
- 交付边界：原研究阶段只新增本研究文档，无提交、推送、发布或外部消息。当前执行者本身是主代理调度的研究代理，独立完成这项限定研究及后续另行授权的样章内容复核；research 技能要求主源核对并保存单份研究记录。本研究代理自身未提供可继续调度后台子代理的工具，故没有再向下分派；这不表示主代理没有调度独立代理，也不表示本研究由样章作者自行代审。后续复核另存指定报告，未另建聊天或写课程正文。
