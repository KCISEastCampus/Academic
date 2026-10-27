# AS physical chemistry：量热法样章与后续三页

日期：2026-10-27。用户指定工作区及分支 `codex/as-chemistry-foundations`；本代理不运行 Git、不构建、不推送、不发布、不修改共享文件或他人页面。首轮制作范围为中英 `energetics-and-calorimetry.md`、`assets/img/chemistry-as-energy-*.svg` 和本记录。续轮用户要求：先修复样章独立审查 F1–F3；先准备 Hess、kinetics、equilibrium 来源与设计卡，审查者明确关闭问题并放行后本轮完成三页双语正文及必要原创图。设计卡须先于各页正文落盘。

## 来源及范围

- 当前资格页 → [specification 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)：已核读正文身份及 p.17 的 3.1.4.1–4；本样章只覆盖 3.1.4.1–2 与 RP2 的直接测量、数据处理和评价。3.1.4.3–4 仍属 AS，但留待 Hess 独立页，不能宣称整个 3.1.4 完成。没有引入 A2 熵、Gibbs、Born–Haber 或定量酸碱平衡。
- [官方 Practical Handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf)，2018，9620，100 页，实读 pp.53–57：无水／水合硫酸铜两次溶解，温度—时间线外推，随后用 Hess 求水合焓；其具体试剂与 Hess 组合是示例，不是 RP2 唯一方案。本页中和量热数据为另行构造，不冒称手册实测或完整复现官方示例。
- 用户本地教材 Lister / Renshaw，OUP 2016，573 页扫描件。实读印刷 pp.81–90（PDF 83–92），Practical 2 pp.522–523（PDF 525–526）。正文前段 PDF 顺序页比印刷页大 2，后段大 3；不能统一偏移。教材 pp.91–103 尚未实读，不冒称已完成 Hess 来源阅读。扫描图仅用于本地私有目读，不复制到仓库或网站。
- 科学性校正：教材 p.86 对 heat 的存储式表述不沿用，heat 表示因温差转移的能量；温度不是总能量。教材 p.523 将溶解固体质量计入溶液，手册 p.57 明定使用水质量近似。本页根据各题给定的受热物与比热容定义选质量，既不照抄简化也不假装来源完全相同。标准温度是 stated temperature，298 K 为常用例，不把它写成所有标准状态唯一温度。
- 沿用现有 `solutions-and-titration` 的 frontmatter、阅读样式、原生折叠和英文 task 标记。全部问题、数据与检查标准为自拟／constructed，不使用官方分值，不复刻教材题图。

## 制作前设计卡

中心问题：温度计读到的是溶液温度，怎样据此为一个明确反应报告可信的每摩尔焓变？

先修：`amount-and-equations` 的质量／摩尔／配平比例与限制试剂；`solutions-and-titration` 的 n=cV、原始读数及两读数不确定度。正文给回补链接。

核心模型：反应为热力学 system，周围溶液及量热器为 thermal surroundings；恒压、只作常规体积功时反应热对应焓变。已知质量且近似均匀温度的受热物 q=mcΔT；忽略杯子吸热和外界交换时 q_rxn≈−q_solution；按指定方程的反应份数归一化。外推只在快速反应、短时间局部平滑冷却／回暖下近似校正；不自动修正杯子热容或不完全反应。

图和数据：原创能量流与焓水平图连接符号；构造原始温度—时间表用于学生亲自作图；示范外推图仅在相应示范后出现，不替独立任务画出答案。示范采用合理约 6.8 K 的等量强酸碱温升；独立任务改变为不等量及吸热溶解。任务要求英文产出，中文页解释与反馈用中文，题干完全一致。

| 可观察目标／条目 | 讲解及示范锚点 | 独立证据 | 反馈及新条件重试 |
| --- | --- | --- | --- |
| 判断系统、能量流、符号并画焓水平／3.1.4.1 | system-and-sign | energy-check | retry-energy：由升温转降温 |
| 定义 formation/combustion，写一摩尔方程及状态／3.1.4.1 | standard-enthalpies | definitions-check | retry-definitions：改物质并检查 CO、不正确标准态 |
| 选质量、算 q、限制试剂与每摩尔基准／3.1.4.2 | calorimetry-model、worked-neutralisation | amount-check、transfer-check | retry-amount：逆向求温升及 doubled equation |
| 原始数据作图、选择外推段、判断条件／RP2 | temperature-time、worked-correction | data-check | retry-data：吸热后回暖及外推失效判断 |
| 两读数绝对／百分不确定度与局限／RP2 | uncertainty | uncertainty-check | retry-uncertainty：温差变小，固定偏移抵消 |
| 自主选择方案、解释热损失方向、针对性改进／RP2 | planning-and-evaluation | plan-check、transfer-check | retry-plan：燃烧量热，区分蒸发／不完全燃烧 |

学习流：现象及先修 → 系统与符号 → 标准焓定义 → 完整计算示范 → 不等量独立选择 → 原始读数与外推示范 → 新数据独立处理 → 不确定度与方案评价 → 未标方法综合 → 按错误定位重试，主解和重试解分别折叠。后续学习前再做 transfer-check，不把看解答算掌握。

## 审查后才扩展的设计（未制作页面）

- `hess-and-bond-enthalpies`：3.1.4.3–4。需先实读教材 pp.91–103 及官方相应资料；以同初末态、反向变号／倍乘、formation 与 combustion 环路为原理，比较平均气相键焓近似与指定物质状态的 Hess 值。接 RP2 两次溶解，统一最终溶液组成，正确写 CuSO4(s)+5H2O(l)→CuSO4·5H2O(s)，不沿用手册简写 aq 当作配平水系数。独立画路线、查错、换方向及改变产物水状态；独立审查前不写正文。
- kinetics：3.1.6，教材 pp.105–113 待读。设计 collision/activation energy → Maxwell–Boltzmann 分布（同温浓度改变不改归一化能量分布；升温、催化分别讨论）→ 速率曲线初始斜率与终产量 → 温度、浓度、压强、催化的条件比较。用无标方法图像任务与条件改变重试；不混 A2 rate equations、orders、Arrhenius 定量。
- equilibrium：3.1.7，教材 pp.115–128 待读。动态平衡与封闭系统 → Le Chatelier → 均相 Kc 表达式、平衡量及单位 → 温度和催化剂对 Kc/速率的不同作用 → 工业产率／速率／成本折中；独立由叙述转模型并判断常见过度推论。异相扩展、Kp、Ka、pH 不加入本 AS 样章。

## 验证状态

本地样章已制作，状态为**待独立审查**，不标“内容审查通过”或“技术检查通过”。实际改动为本记录、英文及中文 `energetics-and-calorimetry.md`、`chemistry-as-energy-flow.svg`、`chemistry-as-energy-extrapolation.svg`，共五个指定文件；未修改课程入口、共享样式、脚本或他人页面。

### 作者核算与源码检查（2026-10-27）

- 13 个任务含 7 个主任务／综合任务及 6 个新条件重试；中英 task 身份、英文题文、数据和条件逐字一致。全部 h2/h3 显式 IDs 顺序一致且无重复。逐项对读解释、提示、解答与恢复路径，未用英文整页替代中文说明。
- 每页 26 个原生 details，Hint 与 Solution 分开、默认关闭，主解与 retry solution 不共用折叠；15 个内容容器（含两完整示范）开闭匹配。检查源码锚点、现有本地回补链接及图文件存在；不是生成 HTML 检查。未新增指向不存在 Hess 页的链接，也未擅自把样章接入共享入口。
- 用能量守恒和限制量重新计算：示范 2842.4 J、−56.848 kJ mol−1；未校正 −56.012；不等量任务 1128.6 J、−56.43；KCl 溶解 +17.0258088，未校正 +14.4064536；反求温升 4.54545… K（3 s.f. 为 4.55 K）；燃烧表观值 −836。最终有效数字与中间未舍入值分开。
- 用各原始点独立作最小二乘直线，重新得到示范 26.8 °C、独立任务 27.8 °C，以及回暖重试 19.0 °C 的混合时刻估计；相应温差 6.8、6.8、−3.0 K。两读数 ±0.2 K、2.94%、10%、2.5%、12.5% 亦重新核算。燃烧题的 −836 是学生应评价其理想假设的表观值，不冒充乙醇标准燃烧焓。
- 作者复核反应原子、电荷、物态、一摩尔对象、方向和模型适用条件；KCl 主任务给定整溶液热容模型，不套手册水质量近似。不同初温、反应持续、探头滞后、拟合弯曲、量热器热容与系统交换的影响分别说明。两读数估计不冒充拟合后的总不确定度。
- 两 SVG 通过 XML 解析，含 title/desc、箭头和文字标识，不依赖颜色区分；逐点检查示范图坐标与温度表一致。已把**图本身**渲染为原尺寸及 340 px 宽图并目读，无裁切、文字重叠或符号丢失；原图和窄图截图在本地私有可视化目录，不存进仓库。这个检查不等于真实网页手机阅读验收。

### 明确未验证及交接

独立学科审查未进行；需审查者独立求解任务、重建示范、核对目标矩阵及中英帮助对齐，再记录问题及最终结论。按用户要求本轮不构建、不运行 Git，因此生成 HTML、Jekyll 适用检查、真实桌面／手机阅读、语言切换与键盘交互均待整合者验证；源码检查不能代替这些验收。学生试用与真实 RP2 实操均未进行。

仅有作者核算，仍需独立审查确认标准焓定义、反应量基准、数据处理及误差方向；审查通过前，不扩展 kinetics、equilibrium 或 Hess 页。当前样章没有接入课程索引，整合者须在获得样章结论后按实际进度接入；不应称 AS 全课程或整个 3.1.4 已完成。

## Sagan F1–F3 修复与读回复查请求

已读取 `review-as-chemistry-physical-2026-10-27.md`。以下为作者修复，**不自行关闭独立发现**；请 Sagan 读回两版及帮助并在自己的审查记录给明确门槛结论。

- F1，`retry-plan`，EN task 起始行 287 / ZH 289：保留 0.460 g、200.0 g、10.0 K 和 −836 算术，题干改成 apparatus-based apparent estimate；取消把完全燃烧／完全捕热／无蒸发／杯热容可忽略当作事实的设定。学生须直接指出这四项不能由读数确证，解答明确不认证该表观数为乙醇真实完全燃烧焓；Hint 与后续烟炱／蒸发解释同步。
- F2，`energy-check`，EN task 行31 / ZH33：新增敞口情况下恒压、仅通常PV功与校正能量账户的独立判断；`retry-energy`，EN222 / ZH224：比较敞口降温和刚性密闭、带未测电输入的报告，要求判断把热量称ΔH的证据。两版提示、解答及针对性恢复反馈已同步。
- F3，EN `calorimetry-model`：`c means specific heat capacity`，与 J g−1 K−1 及中文比热容一致。
- 作者读回：13组英文task仍逐字对齐，26个帮助折叠保持分开且默认关闭；−836算术不变。未改SVG、共享样式或其他作者页面。
- 新 SHA256：EN `4e7eba33f844eef4d960b1c8c51d25f368e1d5a0a29f8b4e68faa9e0fcc917d4`；ZH `6255571941f5a2a138facbd96df77257f8238be0f0aeddc52fc771679561c259`。SVG 指纹保持审查记录所列。
- 用户已报告主代理对样章英文／中文、桌面／手机实际阅读全部通过；本代理不重复构建，不把这项报告扩展为新三页已验收。
- 当前扩展门槛：等 Sagan 对上述修复明确关闭／放行，尚不写后三页正文。

## 三页正文前设计卡与放行

已读 Sagan 报告追加结论：F1–F3 全部关闭，明确允许制作后三页草稿。放行只适用于制作组织方式，后三页仍各自待独立审查。用户随后明确要求本轮完成六个中英源文件；不再改已审量热内容，最后只补实际导航。

来源实际目读补充：教材印刷 pp.91–96、98–101（PDF93–98、100–103），pp.105–113（PDF107–115），pp.115–120、122–128（PDF117–122、124–130）；没有把未目读的97、102–103、121页记为已读。重新读现行5.3官方正文 pp.17–20，完整核对3.1.4.3–4、3.1.6.1–5、3.1.7.1–2。教材章节边注旧编号与现行大纲不同，按现行编号映射。教材所列旧AQA题仅作为范围／任务风格参考，不复制为本页官方题，没有宣称读取其配套MS。

### Hess and bond enthalpies：先统一路线的起终态

中心问题：不能直接测的反应热，怎样从可测路线算出，并判断结果究竟有多精确？先修：量热页的符号／物态／每摩尔对象、配平及共价键表示；正文提供回补。

模型：焓为状态量，同起终态路线总焓变相同；逆式变号、倍式倍乘。生成循环由共同元素出发，燃烧循环到共同完全氧化产物，必须保留物态和氧气补足。mean bond enthalpy为气相一摩尔某类键断裂的平均焓，断键吸收−成键释放给近似ΔH。不能把原子化路线当实际机理。

| 目标／官方条目 | 讲解／示范 | 独立任务 | 反馈／新条件重试 |
| --- | --- | --- | --- |
| 说明Hess、反向倍乘与相消／3.1.4.3 | route-model、worked-formation | route-check | retry-route：变为逆向双倍目标 |
| 生成及燃烧数据选路线／3.1.4.3 | formation-route、combustion-route | combustion-check、report-check | retry-combustion：未知生成焓、改求问方向 |
| RP2两次溶解为何可合成／3.1.4.3连接RP2 | dissolution-cycle | dissolution-check | retry-dissolution：最终组成不同不能直接相减 |
| 定义平均键焓、数键、估算及限制／3.1.4.4 | bond-model、worked-bonds | bond-check、report-check | retry-bonds：给ΔH反求未知键并改产品物态 |

原图用途：共同元素／共同燃烧产物两种循环的箭头方向示范，独立任务不附已完成循环。所有练习为自拟；数据为题给圆整值／构造练习值，不称测量或精确数据库值。检验方程与单位、相消、状态及差值；不教Born–Haber或熵。

### Kinetics：区分“更快”与“更多”

中心问题：哪个微观改变能解释速率曲线，哪些改变只影响碰撞而不影响能量分布？先修：浓度、物质的量、图像斜率、放热与活化能的不同；活化能在正文直接建立。

模型：足够能量和适当取向的有效碰撞；Ea为反应所需最低能量。同粒子数MB能量概率密度曲线总面积相同，升温峰变低向右、高能尾增大；催化只改变较低能垒、同温曲线不变，反应中可参与但最终再生。恒温压缩气体提高数密度与碰撞频率，不使平均能量或Ea改变。不由AS定性描述推导速率级数。

| 目标／条目 | 讲解／示范 | 独立任务 | 重试 |
| --- | --- | --- | --- |
| 定义速率、区分阶段速率与最终量／3.1.6.3 | reading-rate、worked-rate | rate-check | retry-rate：同终量不同曲线与改变收集温度 |
| 碰撞、Ea、方向与ΔH区别／3.1.6.1 | collision-model | collision-check | retry-collision：放热但很慢 |
| 自画MB曲线、解释升温／3.1.6.2–3 | distribution、temperature | temperature-check | retry-temperature：降温并辨认纵轴面积 |
| 浓度／恒温压强影响／3.1.6.4 | concentration-pressure | conditions-check | retry-conditions：加惰性气体定容，对比压缩 |
| 催化剂、MB与替代路径／3.1.6.5 | catalysts | catalyst-check、report-check | retry-catalyst：同温两门槛与不变终产量 |

原创MB图只示范同数目两温度及同温两个Ea；横轴molecular energy，纵轴probability density，面积为1；用归一化分布取样生成形状，不放伪测量。原始构造产气表让学生独立作图与比较；所有温压与反应物量条件写清，实验设计不是RP8完成。禁止rate orders／Arrhenius定量。

### Equilibrium：动态不变、改变组成与常数各指什么

中心问题：为什么反应持续进行时浓度可以不变，改变条件又怎样影响组成与Kc？先修：速率、浓度、配平比例、焓符号；Kc为本AS必教，不因大学热力学表达而引入活动度或Kp。

模型：封闭且条件稳定的可逆反应正逆速率相等，浓度恒定而非相等。Le Chatelier只作方向预测；变浓度／体积与重新平衡分开。Kc用平衡浓度和系数幂次，课堂浓度表达单位随方程改变；温度改变Kc，催化与浓度不改变同温Kc。工业平衡产率与达到速度、能耗及设备成本权衡。

| 目标／条目 | 讲解／示范 | 独立任务 | 重试 |
| --- | --- | --- | --- |
| 动态平衡、速率与浓度表征／3.1.7.1 | dynamic-model | dynamic-check | retry-dynamic：相等浓度但速率不等 |
| 温度／压强／浓度与催化／3.1.7.1 | disturbances、worked-change | conditions-check | retry-conditions：等气体系数与反向吸热 |
| Kc表达式、单位、平衡浓度／3.1.7.2 | kc-model、worked-kc | kc-check | retry-kc：体积不相消及反向表达 |
| 初始量到平衡量及相关反算／3.1.7.2 | amount-table、worked-composition | composition-check | retry-composition：加入初始产物，限根 |
| Kc温度依赖及工业折中／3.1.7.1–2 | kc-and-conditions、industry | industrial-check、report-check | retry-industry：改为吸热、增加设备约束 |

图用途：原创正逆速率随时间趋同示意，不泄露独立图任务。构造浓度／物质的量数据先核守恒、体积、可能根；工业给定约束不伪称当前工厂最优参数。所有物种保持同相，不引入异相Kc或Kp、Ka、弱酸pH。主答案和重试答案保持独立折叠。

### Hess 已有正文，可交独立审查

已落盘中英 `hess-and-bond-enthalpies.md` 与 `chemistry-as-energy-hess-routes.svg`。请 Sagan 审查9个任务（route/combustion/dissolution/bond/report及4个针对性重试）、生成／燃烧箭头方向和水态切换。作者预期数值：−41.2、−137、−77.0、−125、液态水目标+2.8、反向双倍−5.6、甲醇生成−238.6、反求H–Br366；这些仅为作者答案，不替代独立复算。后续kinetics链接在下一对源文件落盘后检查；暂不称全技术通过。

### Kinetics 已有正文，可交独立审查

已落盘中英 `kinetics.md` 与 `chemistry-as-kinetics-distribution.svg`。11项任务含6项主任务／综合与5项条件重试，覆盖3.1.6.1–5：速率含义、区间速率与初速区别、Ea及取向、亲自画不同温度MB、浓度／气压条件、催化与同温双门槛。构造气体体积表固定收集温压，区分更快与更多；定容惰性气体与恒温压缩分别解释。原图纵轴是概率密度，总面积1，不把峰高当粒子总量，有限窗口不是能量上限。取样的3D平动能MB密度总面积数值积分均约1，曲线只作示意，不教其大学公式。请Sagan按正文独立审查；未标技术／内容通过。

### Hess H1 图箭头修复，申请 Sagan 渲染读回

已读报告最新 Hess 段，确认 H1 仍阻断，不沿用摘要中的 PASS。原SVG每个含两个M子路径的path仅末子路径得到marker-end。最小修复为将两组对角线分别拆成两个独立path，各自保留marker-end；共四条对角箭头，坐标／文字／正文均未改。请Sagan对修后SVG重新渲染核对四个箭尖，再在自己的报告明确关闭H1；作者不代关。

## 最终交接与编辑冻结（2026-10-27）

本节更新前文的历史制作／待审状态。实际已写成四个主题的中英学习页，共八个源文件：`energetics-and-calorimetry.md`、`hess-and-bond-enthalpies.md`、`kinetics.md`、`equilibrium.md`，分别位于 `alevel/as-chemistry/` 与 `zh/alevel/as-chemistry/`。不是只有后三页，也不据此宣称全部 AS 化学已验收。

按用户最后交接要求，作者立即停止编辑 equilibrium EN／ZH 与 `assets/img/chemistry-as-equilibrium-rates.svg`。主代理接手 E1 中文单位、E2 速率图、E3 抽象反应三项收尾；作者不再覆盖这些文件。本次只补本实施记录，不运行 Git／构建，不修改共享文件及审查者报告。交接时只读确认速率图已存在，长度 6,661 字节；路径即上述 assets 文件，交由主代理保留并核验，不以存在代替实际渲染验收。

### 实际已读来源汇总

- OxfordAQA 9620 specification 5.3，正文 pp.17–20：3.1.4.1–4、3.1.6.1–5、3.1.7.1–2；沿用 AS 范围，不加入 A2 内容。
- 官方 Chemistry Practical Handbook 4.2（2018），实读 pp.53–57，RP2 两次溶解、温度—时间外推及 Hess 组合。构造量热数据不冒称手册实测。
- Lister／Renshaw 2016 用户私有扫描教材：印刷 pp.81–90（PDF83–92）、91–96及98–101（PDF93–98及100–103）、105–113（PDF107–115）、115–120及122–128（PDF117–122及124–130）、Practical 2 pp.522–523（PDF525–526）。未目读的97、102–103、121页不列为已读；扫描件及私有目读图不公开。
- 已读项目课程内容标准、公式指南、AS chemistry 范围研究及现有首批学习页；本记录中三页设计卡及目标／任务／重试映射先于正文，题目均为自拟／constructed，不赋官方分值。

### 目标证据与独立审查边界

量热页13项任务、Hess页9项、kinetics页11项、equilibrium页11项；具体目标与独立任务／新条件重试对应见前文各设计卡及 Sagan 独立报告。equilibrium 的实际证据为 `dynamic-check`／`retry-dynamic`、`conditions-check`／`retry-conditions`、`kc-check`／`retry-kc`、`composition-check`／`retry-composition`、`industrial-check`／`retry-industry`，另有 `report-check` 要求比较压缩前、瞬时与重新平衡后的状态。任务数量仅用于定位，不代替逐项目标审查。

已实际读回 `review-as-chemistry-physical-2026-10-27.md`：Sagan 明确关闭样章 F1–F3 并放行扩展；第五轮明确关闭 H1／K1，Hess 与 kinetics 双语独立内容审查通过。第六轮认可 equilibrium 的正文模型、目标覆盖与计算，但完整页面对仍待 E1／E2／E3 关闭。最终独立 gate 由 Sagan 在其报告读回关闭，作者不代关，不根据摘要或文件已写成宣称全验收。主代理接手的修复完成情况以实际文件及随后独立报告为准。

主代理已报告样章桌面／手机 ENZH 阅读通过、kinetics 已纳入浏览器样本且暂未发现渲染问题，以及15项共享检查通过；这些为主代理报告，不冒充作者亲自完成，也不延伸为 equilibrium 最终通过。最终构建、课程检查、生成 HTML 与实际阅读由主代理整合；学生试用及真实实验均未开展。作者工作至此冻结，仅交付本记录，不再继续编辑课程页或图。
