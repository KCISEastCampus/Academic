# AS Chemistry 有机反应／机理样章：卤代烷

日期：2026-10-27。状态：卤代烷双语样章独立验收通过；扩展后再次分工，本作者已完成 organic-foundations / alkanes / alkenes / alcohols 四对及九张原创 SVG，四对均已有独立内容 PASS。alcohols 的局部修复已获 Rawls 定点复核关闭；技术整合验收仍由主代理记录。epoxyethane / organic-analysis 已移交主代理，未由本作者写入正文或图。

## 本轮边界与设计卡

- 工作区：`C:/Users/mi/.codex/worktrees/as-physics-newton-momentum/Academic`；从 worktree HEAD 文件只读核对为 `codex/as-chemistry-foundations`，未执行 Git 命令。
- 只新增两版 `halogenoalkanes.md`、`assets/img/chemistry-as-halogenoalkanes-*.svg` 和本记录；不改入口、共享布局／样式、他人文件，不构建、不推送或发布。先完成样章，等待独立审查再分配其余有机内容。
- 中心问题：同一个含 C–X 的分子，为什么会因试剂与条件不同而得到醇、腈、胺或烯烃？怎样用电子对移动和观察证据检验解释？
- 资格：OxfordAQA 9620，International AS，CH02，specification 5.3，3.3.3.1–2；连接 3.3.1 的结构与机理表示、3.1.3 的极性，不延伸为 A2 胺／腈后续反应、光学异构或 SN1/SN2 动力学分类。
- 初学先修：读 C 的四键、O 的常见两键与 N 的三键，数原子、判断总电荷；正文先修桥梁直接回补孤对、部分／形式电荷、缩写结构、邻碳氢、腈的新增碳。未来 `organic-foundations`、`bonding-and-shape` 只作明确待建的文本入口，不制造不可用的必经链接。
- 核心模型：Cδ+–Xδ−；亲核试剂给出孤对成键；离去基团带走 C–X 键电子对；OH− 也可接受邻碳 H+，三个电子对移动形成 C=C。溶剂、温度与底物共同影响竞争，条件表达为倾向，不保证纯产物；模型不宣称所有底物走同一个详细路径。
- 表征：原创 OH− 取代、CN− 取代、NH3 两步机理及消去 SVG；同一陌生底物的无答案练习骨架与折叠区中的独立答案图。所有弯箭从可见孤对或键开始，完整双线箭头表示电子对；图不依赖颜色，提供等价文字说明。
- 示范与支架：已知键数起步 → 明讲电子对模型 → OH− 完整示范 → 学生补图 → CN− 碳端与 NH3 电荷桥梁 → 条件竞争 → 实验证据。每个独立任务有分别折叠的提示和解答，重试题干与重试答案分开。
- 独立考查：新底物完整机理、反向选择延长碳链／不延长的试剂、未指明方法的产物与条件比较、修复错误箭头、实验控制／可支持结论、无句框英语说明。保留无帮助与借助提示的区分；后续回顾为页面内实际新题。
- 来源：当前官方资格页及现链 spec 5.3 正文 p.33 已读取；用户扫描教材 2016 Lister/Renshaw Ch13 印刷 pp.212–220（PDF 顺序 pp.214–222）已逐页目读页脚。教材作教学参考，不替代 OxfordAQA 范围；不复刻其图、题或官方分值，不公开扫描件。

## 目标—证据对应（制作前设计）

| 目标／范围 | 讲解与示范 | 独立产出（预定稳定锚点） | 判定、反馈与重试 |
| --- | --- | --- | --- |
| 解释极性与亲核试剂，包括中性 NH3；3.3.3.1 | `electron-pair-bridge`、`substitution` | `mechanism-check`、`route-check` | 孤对起点、C 部分正电、离去 X−；`retry-mechanism` |
| 画 OH−、CN−、NH3 的机理并核对产物、电荷；3.3.3.1 | `substitution`、`other-nucleophiles` | `mechanism-check`、`route-check`、`retry-routes` | 碳端 CN−、总碳数、烷基铵中间体正电与脱质子；分别回补并重画 |
| 选择条件、解释双重角色并画消去；3.3.3.2 | `competing-pathways`、`elimination` | `conditions-check`、`elimination-check` | 水相／乙醇、温度是倾向；邻碳 C–H 与三个弯箭；`retry-conditions` |
| 由键焓比较匹配底物的速率并评价证据；3.3.3.1，实验为教学支持 | `rate-evidence` | `evidence-check` | 保持骨架／条件、比较 C–X 强弱，不以极性倒置趋势；`retry-evidence` |
| 新条件迁移与英文解释；综合上述范围 | 全页模型 | `mixed-check`、`later-check` | 明示条件、电子来源和模型界线；按错误返回指定段落 |

## 后续记录位置

完成后在此补充实际来源身份、图与答案核对、双语与结构检查、未做的构建／浏览器／独立审查／学生试用。设计表不代表检查已经通过。

## 卤代烷样章交接与独立 gate

- 作者自检：12 个英文 task 块两版逐字相同；23 个显式 h2/h3 ID 同序且唯一；两版各 24 个 details 均默认关闭；显示方程同序一致；div/details 配对、内部锚点与 7 个 SVG 引用存在。7 张 SVG 经 XML/title/desc 检查、Sharp 实际渲染并逐张目读，核对孤对起点、键起点、受体、电荷和骨架；练习答案图仅在关闭的解答区内。提示、中文反馈及条件亦人工对照，未以字数代替语义核验。
- 作者核对范围：当前 spec 5.3 p.33；教材印刷212–220 / PDF214–222逐页目读；CH02 Specimen2018 Q08.2–08.3 的题文与 MS pp.13–15 箭头／电荷说明已读，QP p.17 图形截图读取失败，未称已视觉核对该官方图。Pearson 2015 AS SAM Paper2 Q6(a) PDF72–73 为其他考试局实验补充，未复制其数字。作者未构建、未做浏览器整页阅读。
- 作者检查时页面 SHA256：EN `7d75c1ca4b3080835188467af4048a3e7d771b35de2aa4e07bcdd8b3a1221472`；ZH `4409616b0beb7804b016fcc3bfa74c3e6b987e23eb3cdd1e3cb86e2cd64f5a6d`。
- 主审查者通过当前用户消息报告 **MAIN independent gate PASS**：读完整 EN 与中文关键机理／条件／反馈，独立解题并检查所有 SVG 电子来源、去向及电荷；12 个 task 一致，帮助均关闭；4 条实际阅读路线通过，桌面 NH3 图清晰。无阻断项。主审查者将另写独立记录，不能把作者结构断言冒充该独立审查。
- 本轮获得扩展授权：`organic-foundations`、`alkanes`、`alkenes`、`epoxyethane`、`alcohols`、`organic-analysis` 六个双语模块及必要原创 SVG；覆盖 AS3.3.1–6，含 RP4/5。继续不构建、不执行 Git、不编辑入口／共享文件。真实学生试用与实验均未开展。

## 六模块扩展：正文前设计卡

共用边界：spec5.3 为范围裁决；[全细目来源矩阵](research-as-chemistry-full-scope-2026-10-27.md) §4–6 已读，包括各项教材／手册疑点。下列为本项目教学选择；所有新题自拟、同一英文 task 标记、中文解释／帮助对齐、Hint／Solution 分别默认关闭。每页保留综合与新条件重试，正文完成不等于独立审查通过。

### Organic foundations：结构如何决定“同一种”与“不同种”？

先修：元素常见价态、数原子与键；桥梁解释省略 H 的键线式及孤对。核心：官能团、同系物、结构表示及名称，结构异构／E/Z 的连接与空间区别；反应表示是电子移动模型。图用途：键线式↔全展开；优先级与固定 C=C 平面；把错误箭头变成可判定练习。示范先命名／转换再判断异构；独立任务换问向，不给异构类别答案；重试改变支链和 CIP 竞争原子。来源：S31–32，教材Ch11。

| 官方目标 | 讲解／示范锚点 | 独立证据锚点 | 判定与恢复 |
| --- | --- | --- | --- |
| 3.3.1.1 六种表示、同系物／官能团、每链／环≤6C命名 | `representations`、`naming` | `representation-check`、`naming-check` | 原子／价态与定位；`retry-structure` |
| 3.3.1.2 自由基点与平衡步骤，电子对机理箭头 | `mechanism-language` | `arrow-check` | 自由基不强制弯箭；键／孤对起点与净电荷；`retry-arrows` |
| 3.3.1.3 链／位置／官能团异构、立体异构、E/Z/CIP | `isomers`、`ez` | `isomer-check`、`ez-check` | 同分子式不同连接，先判资格再定优先级；`retry-ez` |

### Alkanes：从原油分离到选择性化学改变

先修：分子间作用、共价键、原子守恒；直接回补沸腾不等于断共价键。核心：分馏物理分离；裂解与经济需求；燃烧／污染来源；链反应自由基再生。图用途：分馏温度与馏分趋势，不将馏分假装纯物质；链反应示范用步骤方程而非不必要鱼钩。独立：需求选工艺、污染治理配平、陌生卤素链步骤、重试诊断不守恒。来源：S32–33，Ch12；不要求裂解机理。

| 官方目标 | 讲解锚点 | 独立证据锚点 | 判定与恢复 |
| --- | --- | --- | --- |
| 3.3.2.1 饱和烃、原油与分馏 | `fractionation` | `fraction-check` | 沸点／分子间力／温度联系；`retry-refinery` |
| 3.3.2.2 热／催化裂解条件、产物及经济原因 | `cracking` | `process-check` | 碳氢守恒，按给定需求权衡；`retry-refinery` |
| 3.3.2.3 完全／不完全燃烧、NOx/CO/C/烃/SO2与治理 | `combustion`、`pollution` | `emissions-check` | 污染来自何处、催化器与脱硫用途不同；`retry-emissions` |
| 3.3.2.4 甲烷氯化链步骤 | `radical-chain` | `chain-check` | UV、点、传播再生、终止；`retry-chain` |

### Alkenes：电子密度如何决定加成与聚合？

先修：foundations E/Z／CIP及机理语言、halo电子对；核心 C=C 高电子密度、亲电试剂、碳正离子稳定性，聚合改变键而不丢侧基。图用途：HBr两路径、H2SO4两步、Br2以科学自洽桥式中间体说明，以及未带答案的待补底物；聚合链进出括号。独立题要包含三种试剂完整机理和主要／次要路径，不只产物填表。来源：S34、Ch14；Br2须说明介质，水相溴检验现象不直接冒充无水二溴加成配方。

| 官方目标 | 讲解锚点 | 独立证据锚点 | 判定与恢复 |
| --- | --- | --- | --- |
| 3.3.4.1 双键／高电子密度 | `double-bond` | `addition-check` | 双键电子对为来源；`retry-addition` |
| 3.3.4.2 HBr/H2SO4/Br2机理、溴检验及主要／次要物 | `electrophilic-addition`、`three-reagents` | `addition-check`、`reagent-check` | 箭头、碳正离子／溴鎓电荷、介质和路径；`retry-addition` |
| 3.3.4.3 聚合物三方向互译与IUPAC、不活泼、PVC用途／增塑剂、科学发展及分子间力 | `polymers` | `polymer-check`、`materials-check` | 主链双键打开、侧基保留、证据有限；`retry-polymer` |
| 3.3.4.4 与独立epoxyethane页相连 | `next-step` | 该页完整证据 | 不把另页当删除范围的理由 |

### Epoxyethane：小环为何能开环，催化剂到哪里去了？

先修：孤对、电荷、受质子后氧的键数；桥梁解释醚与三元环。核心：乙烯／O2／Ag部分氧化及工艺危险；环张力；酸催化水／醇进攻与再生酸。图必须分别完整表现质子化、开环与脱质子；OH−不得加入酸性主路径。独立：把水改ROH并追踪两个O、修复混合酸碱图、工业与用途权衡；改变醇重试。来源：S34，教材234–235及OpenStax18.5科学交叉核验；不引入不对称环氧化物高级区域／立体化学。

| 官方目标 | 讲解锚点 | 独立证据锚点 | 判定与恢复 |
| --- | --- | --- | --- |
| 3.3.4.4 乙烯部分氧化及风险 | `production` | `process-check` | 2C2H4+O2→2C2H4O、Ag、放热／易燃／毒性；`retry-process` |
| 高反应性、水与醇开环式／机理 | `ring-strain`、`water-opening`、`alcohol-opening` | `opening-check`、`repair-check` | 完整三步、O来源、电荷、酸再生；`retry-opening` |
| 产品经济环境重要性，surfactants/antifreeze | `uses` | `use-check` | 结构／作用／用途与毒性／环境不等于无害；综合英文评价 |

### Alcohols：控制反应与分离，才能控制产物

先修：官能团、温度／沸点、碳骨架；回补[O]为计量记号。核心：一级／二级／三级由带OH碳邻居判断；氧化与蒸馏／回流联系；酸催化脱水与再生；RP4真实装置决策。图用途：可纠错的蒸馏／回流示意，脱水完整机理；独立：结构→产品／现象、装置改错／数据、Tollens/Fehling判据、脱水新底物；非石油碳源评价。来源S35、Ch15、H67–70，统一酸化K2Cr2O7(VI)而不拼接Na/K配方。

| 官方目标 | 讲解锚点 | 独立证据锚点 | 判定与恢复 |
| --- | --- | --- | --- |
| 3.3.5.1 分类与氧化式 | `classification`、`oxidation` | `oxidation-check` | 带OH碳上H与氧化位点、式守恒；`retry-oxidation` |
| 方法选择及Fehling/Tollens鉴别 | `control-product`、`tests` | `method-check`、`test-check` | 蒸出避免继续氧化、观察不是结论；`retry-analysis` |
| 3.3.5.2 脱水及非石油聚合单体 | `dehydration`、`carbon-source` | `dehydration-check`、`source-check` | 酸再生／水离去／β-H，条件性环境论证；`retry-dehydration` |
| RP4从反应中蒸馏 | `rp4` | `apparatus-check` | 蒸气测温、冷凝水下入上出、开放出口、冷接收／证据限度 |

### Organic analysis：观察能排除什么，仍不能证明什么？

先修：前述官能团与试剂；回补醛／酮／羧酸结构及IR坐标。核心：RP5反应鉴别、精确质量候选排除、IR峰与缺失峰及指纹对照；多证据论证。原创IR构造光谱明确非实测／不按仪器谱自称实测；数据册范围来自本资格官方数据册，不给无来源固定峰宽。独立：新鲜aliquot测试次序、阴性限制、同标称Mr候选、完整必要谱区／指纹比较、杂质检测限制、温室吸收机制；重试更换候选／观察。来源S35–36、Ch16、H71–73、官方Chemistry data booklet；不教系统碎裂、NMR、色谱。

| 官方目标 | 讲解锚点 | 独立证据锚点 | 判定与恢复 |
| --- | --- | --- | --- |
| 3.3.6.1及RP5四类检验 | `test-design` | `unknown-check` | 试剂／现象／推断、对照和干扰；`retry-tests` |
| 3.3.6.2精确质量定分子式 | `exact-mass` | `mass-check` | 给定原子精确质量算各式并排除；`retry-mass` |
| 3.3.6.3IR官能团、指纹及杂质 | `infrared`、`fingerprints` | `spectrum-check` | 波数／透过率、出现／缺失、参考对照，不能证明绝对纯；`retry-spectrum` |
| CO2/CH4/H2O键吸收与变暖 | `atmosphere` | `climate-check` | IR能量吸收／转移与能量平衡，不与臭氧洞混同；英文证据评价 |

## 扩展来源阅读／实施状态

实际逐页目读已完成，不再仅是“已渲染”：Ch11 印刷182–195 / PDF184–197；Ch12 196–211 / PDF198–213；Ch14烯烃222–233 / PDF224–235、环氧234–237 / PDF236–239；Ch15 238–247 / PDF240–249；Ch16 248–257 / PDF250–259。逐页核查页脚，此段均 PDF=印刷+2，不套用于全书后段。教材名称为 *International A Level Chemistry: AS and A Level*，Lister / Renshaw，2016。目录映射本身不是阅读证据，以上为实际正文及练习页阅读。

私有联系页位置为 `C:/Users/mi/.codex/visualizations/2026/10/26/01a175fb-77b0-7ce3-a4b2-4e50accd1df4/chemistry-private-source/`，`foundations-1..7.jpg`、`alkanes-1..8.jpg`、`alkenes-1..6.jpg`、`epoxyethane-1..2.jpg`、`alcohols-1..5.jpg`、`analysis-1..5.jpg`。这些扫描渲染仅作本机阅读，未放入仓库／网页，不在学生页链接或分发。

已实读当前官方 spec5.3 有机 pp.31–36、官方手册 RP4 pp.67–70 / RP5 pp.71–73、9620 data booklet 的 Table A（PDFp3）。手册 RP4 钾／钠矛盾按大纲统一酸化 K2Cr2O7(VI)；未采用旧处置文字。OpenStax18.5用于酸催化环氧开环科学核查；后续该页由主代理编写。新增实读 OpenStax8.2 仅交叉核对 Br2 的溴鎓桥模型，采用原创图，不复制图／题，不把大学立体化学要求加入 AS。溴水检验与干燥非水 Br2 加成的产物推断在正文分开。

### 最终分工与实际产出

用户在扩展中明确将 `epoxyethane`、`organic-analysis` 两对及其 SVG 移交主代理。本作者立即确认这两对当时未写任何文件，并在之后停止编辑；本记录保留先前六模块设计卡作为设计历史，不冒称六模块均由本作者实现。RP5最终正文／图与全3.3.1–6总覆盖由主代理整合检查。本作者不改入口／共享文件，不构建、不运行 Git、不推送发布。

| 本作者模块 | 实际英文 task 数／两语一致 | 主要独立证据及恢复 | 原创图 |
| --- | --- | --- | --- |
| organic-foundations / 3.3.1.1–3 | 10；18个同序h2/h3 ID | 六表示转换、双向命名／环、结构异构／E/Z及CIP下一层平手、修复箭头／点、不同条件重试与英文综合；`representation-check`、`naming-check`、`isomer-check`、`ez-check`、`arrow-check`、`retry-*`、`mixed-check` | representations、ez；待判E/Z骨架只给输入，答案在关闭解答 |
| alkanes / 3.3.2.1–4 | 9；17个同序ID | 分馏解释、热／催化选工艺与配平、燃烧／NOx/CO/C/烃/SO2来源与不同治理、乙烷新链反应；`fraction-check`、`process-check`、`emissions-check`、`chain-check`、各重试及英文炼厂brief | column；不把馏分画成纯物质 |
| alkenes / 3.3.4.1–3 | 9；19个同序ID | 2-methylpropene两条HBr完整路径、but-1-ene的硫酸与Br2完整机理、溴水证据限制、聚合三方向互译／IUPAC、PVC／增塑剂构造证据及迁移重试；`addition-check`、`reagent-check`、`evidence-check`、`polymer-check`、`materials-check`及重试 | hbr、sulfate、bromine、polymer；侧基保留，出链键跨括号 |
| alcohols / 3.3.5.1–2与RP4 | 11；21个同序ID | 一级二级三级／[O]式、蒸馏回流选择、两种醛检验独立产出及阴性限制、装置纠错与构造馏分数据、三级醇完整脱水与再生酸／二级β位重试、非石油路线英文权衡；`classification-check`、`oxidation-check`、`method-check`、`apparatus-check`、`test-check`、`dehydration-check`等 | distillation、dehydration；H3O+一致再生，不制造稳定一级乙醇正离子 |

### 作者自检、独立复核与局限

四对共39个英文 task 两版逐字相同；h2/h3 ID 同序唯一；每语78个 details 分别为Hint与Solution，均无open属性。显示公式、图片引用同序；内部锚点、当前本地跨页链接及语言前缀检查完成，无缺图／断本地链接；div/details及task标记配对，无替换字符。前置桥梁、试剂／溶剂／加热条件、提示与答案反馈已人工对照；结构断言不代替这些语义检查。

九张图均做 XML/title/desc 核查并用 Sharp 实际渲染目读；每支电子箭单独path、单独marker-end，不把多段M放在只有一个末端箭尖的path中。逐步重数碳四键、正碳三键、氧质子化／失水电荷、阴离子供对与总电荷；各构造方程按原子核算。聚合图出链键、Displayed与H标签、HBr/Br2标题与δ、硫酸产物与直箭的重叠均按独立反馈局部修复后重新渲染，未以删alt隐藏答案。

主代理实际全文读并独立解题、核源码及Chromium逐图目读后报告前三对 **内容PASS**，见其独立记录 [review-as-chemistry-organic-expansion-2026-10-27.md](review-as-chemistry-organic-expansion-2026-10-27.md)。本作者未改该审查文件。随后已按用户指示冻结这三对正文／图。

Rawls独立审alcohols后提出：Fehling原先可被“任给一种检验”绕过；蒸馏头／冷凝水套连通表达不清；第二步失水箭落在H附近；butan-1-ol题反馈误沿用ethanol杂质。现均作定点修复：同一任务要求Tollens与Fehling分别给条件／观察；温度计穿塞封闭蒸馏头但侧口连通，冷凝内管与水套四条边界分开、冷却水接夹套，接收器通气；失水箭明确落O；两语改未反应butan-1-ol。两图再次渲染目读，39task结构检查重跑无失败。

随后收到 Rawls 独立定点复核 **Alcohols EN/ZH §3.3.5.1–2 + RP4 内容PASS**，A1–A4全部关闭；已只读核实其追加报告 [review-as-chemistry-inorganic-2026-10-27.md](review-as-chemistry-inorganic-2026-10-27.md) 的 Alcohols 段。本作者未编辑该独立报告。Rawls报告与当前本机原始文件SHA256逐项相同：EN `24462f03d5f8eb25da27fb00ef9596d8e09748743ac5d51efe9b6a998e012447`；ZH `39a6424357adc628e6b3e2cc9b7f6c250d4ed55e5bc277ed8b03586530d68b34`；dehydration图 `20b172b4504999fd81603556fe003e85c7cfc5010eade8de3ffc36db9191f5b3`；distillation图 `c71ec756387764231571fa1cf40d43831877282dbf3abf45e685480631849da5`。内容通过不继承为HTML／浏览器、真实实操或学生学习效果通过。

作者渲染及检查摘要仅存本机 `organic-four-review/`（与上述私有目录同级），不是浏览器整页证据。作者遵用户要求未构建／运行网页；主代理另负责最终构建、桌面手机整页阅读和总范围交叉审查。真实学生试用、延后保持、RP4/5 hands-on 均未进行，未称学习效果已验证。
