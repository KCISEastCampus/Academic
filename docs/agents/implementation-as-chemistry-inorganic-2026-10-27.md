# AS Chemistry 无机类型样章：Group 2

日期：2026-10-27。工作区：`C:/Users/mi/.codex/worktrees/as-physics-newton-momentum/Academic`；分支 HEAD 文件只读确认 `codex/as-chemistry-foundations`。本轮只写 `alevel/as-chemistry/group-2.md`、中文对应页、必要 `assets/img/chemistry-as-group2-*.svg` 及本记录；不编辑入口、共享布局、检查脚本或其他作者文件，不运行 Git 操作、不构建、不推送发布。样章在独立审查前不得扩展到 periodicity、halogens、qualitative-analysis。

## 范围及实读来源

1. 2026-10-27 从 [OxfordAQA 9620 当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-chemistry-9620/) 的 Specification 链接追踪到 [Version 5.3 PDF](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)。实际核读正文 p.26 §3.2.2.1、p.27 的 RP3 及 A2 起点：Mg–Ba 的半径、第一电离能、熔点与解释；与水反应；Mg 从 TiCl4 提取 Ti；氢氧化物和硫酸盐相对溶解性；Mg(OH)2 医药、Ca(OH)2 农业、CaO/CaCO3 烟气脱硫、酸化 BaCl2 硫酸根检验和 BaSO4 医疗用途。熔点和提钛不可因任务强调定性实验而漏去。
2. RP3 为 Group 2、NH4+ 阳离子及卤离子、OH−、CO3²−、SO4²− 阴离子的简单试管鉴别。当前页只承担 Group 2 与硫酸根部分，并调用碳酸根排干扰；不声称完成完整 RP3。卤素、NH4+ 综合流程等留给后续独立页面，不在本轮创建占位或坏链接。无 A2 配合物、两性氢氧化物机理、Ksp、溶解焓定量或跨 Period 3 氧化物课程。
3. 实读 [OxfordAQA Practical Handbook (2018)](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf) pp.58–60、62–65 的 RP3 范围、试剂与方法；特别 p.64 Tests 1/2（Group 2，少量及过量试剂）、p.65 Test 6（HCl 先、BaCl2 后）。这些是官方实践示例，不是考题、mark scheme 或唯一强制浓度；页面任务全部自拟，无官方分值。
4. 用户教材原路径：`D:/ProgramData/wx_files/xwechat_files/wxid_zi5zliwbv1qz22_ef80/msg/file/2025-09/AQA-Chemistry-Textbook-16 .pdf`。共 573 页，扫描无文字层。本轮用 pypdfium2 渲染并逐页目读 PDF 顺序页 161–165，实见页脚为印刷 159–163：Ch9 §9.1（半径/电离能/熔点、表1、与水反应、提钛、氢氧化物/硫酸盐、酸化硫酸根检验、脱硫、练习）。不把已发现但未读的教材 Practical 3 页码登记为实读。书籍身份沿用已核对的 Lister/Renshaw, OUP 2016。未复印书图或原题；扫描预览仅存于私有本地审阅目录，未放入仓库或网页。
5. [OpenStax Chemistry §18.9](https://openstax.org/books/chemistry/pages/18-9-occurrence-preparation-and-compounds-of-oxygen) 实读 Reaction with Elements / Oxides, Peroxides, and Hydroxides：核对 Mg + O2 产物及氧化物与过氧化物的边界。氧气反应是用户要求的成键补充，不另称 §3.2.2 明列考点；仅用 Mg/O2 建立模型，不把所有 Mg–Ba 燃烧一律写为纯 MO。氧化物遇水转化为氢氧化物，不编造“原氧化物溶解性单调排序”。

### 来源矛盾与模型边界

- 教材 p.160 表1给熔点 Mg 922、Ca 1112、Sr 1042、Ba 998 K，Mg 不服从 Ca→Ba 的简单下降；页面使用这些注明出处的近似数据，并解释金属键模型的条件及晶体结构局限，不能写成 Mg→Ba 全程下降。
- 手册 p.60 样例 Test 2 在初加 H2SO4 的 Mg 盐栏列 slight white precipitate，而最终 excess 为无色溶液；这不能作为“MgSO4 难溶”的证据。当前手册页截图服务报错，已读文字层，未声称视觉确认该表。以 spec 的 Mg–Ba 相对溶解性及教材为范围/化学核验依据；本页构造数据不照抄这一异常，也不推测异常原因。实操异常须保留原始记录、核对污染/试剂和条件再调查。
- 沉淀有无依浓度、加入量和温度；不得用浅/深白色跨未知浓度认定所有 Group 2 阳离子。以受限候选集和并行参考样品训练方法选择，结论限于该集合。

## 制作前设计卡

中心问题：如何用原子模型解释 Group 2 的反应，并用受控试管证据作出不会被碳酸根或污染误导的判断？

先修：原子核/电子层、离子电荷、酸碱、中和、原子与电荷守恒；计量回补使用已有 amount-and-equations / solutions-and-titration。电子排布、金属键与氧化还原在本页给足所需说明，不把尚未制作的页面当已具备先修。

核心模型与条件：外层 ns²→更多内层/半径增大→外电子吸引减弱→电离能降低，为反应性提供解释；这是定性电子模型，不是速率公式。溶解涉及固体与水中离子，反应性趋势不能推出溶解性；反应条件和浓度影响可见现象。Ba²+ + SO4²−→BaSO4 为净离子沉淀；先用不引入硫酸根的稀酸排除 carbonate。

图用途：原创 SVG 用粒子示意区分更多内层与相同外电子数；供主线解释，不呈现未知题分支或答案。不为每个流程堆图；实验决策由学生写出。

示范/撤架：先用熟悉记录区分观察与推断；展开一个完整“混合阴离子样品先酸化后沉淀”的推理示范，再让学生独立选试剂、留对照和写净式；最后换酸、候选与无效对照重试。Hint 与 Solution 分开默认关闭，独立题用中性标题。

| 目标 / 官方范围 | 讲解与示范锚点 | 独立产出锚点 | 自拟判定、典型错误与重试 |
| --- | --- | --- | --- |
| 解释半径、第一电离能和反应性；识别熔点趋势边界 / 3.2.2.1 | electrons-and-reactivity、melting | trend-check、reaction-check | 写出层数→屏蔽/距离→吸引，不说核电荷下降；Ca–Ba 与 Mg 分开；retry-model 换推理方向 |
| 依水/蒸气条件写反应与状态；电子守恒；Mg 提钛 / 3.2.2.1 | water-and-oxygen、titanium | reaction-check | Mg 蒸气产 MgO；Ca 冷水产氢氧化物；Mg 为还原剂；retry-model 检查新金属与气态电离定义 |
| 用相反溶解性趋势解释沉淀及用途；氧化物遇水为反应 / 3.2.2.1 | dissolving-and-reacting、uses | use-check、cation-check | 不以反应性推出溶解性，不以难溶代替中和；结论限受限候选和参考条件；retry-evidence |
| 选择硫酸根检验的试剂、顺序、取样和对照；排 carbonate 干扰；净离子式 / 3.2.2.1、RP3 子集 | sulfate-evidence、worked-test | unknown-check | HCl 先、BaCl2 后；不引入 SO4；先排假阳性，再推断；retry-test 改为错误酸及混合物 |
| 分开观察与推断；处理无效空白、阴性检出限；风险及数据评价 / RP3 子集 | start-here、safe-comparison | observation-check、evidence-check、delayed-check | 无效对照不能多数表决；安全措施针对毒性/飞溅/可燃性；retry-evidence 换阴性对照故障 |

延后回顾：同页 delayed-check，建议后续主题后关闭本页再作答，记录是否用过帮助；不把即刻作答或作者模拟当学生试用。

## 实际制作与检查

状态：**Group 2 双语样章草稿已保存，待独立内容审查；未达到技术验收或学生试用状态。** 本轮实际写入且仅写入以下四个文件：

- `alevel/as-chemistry/group-2.md`
- `zh/alevel/as-chemistry/group-2.md`
- `assets/img/chemistry-as-group2-shells.svg`
- 本记录。

### 作者自检与修正

1. 按官方条目逐项对照正文：半径／第一电离能／熔点、Mg–Ba 与水、Mg 提钛、氢氧化物／硫酸盐及指定用途、BaCl2 检验与酸化均有定位。氧气与氧化物内容标为模型补充，不扩成 A2 Period 3 课程。未把完整 RP3 其余对象计入本页已完成范围。
2. 用单独的元素／电荷清单复核 **17 组反应的原子及净电荷守恒**；Ti 从 +4→0，两个 Mg 各失两个电子，共四电子；Mg/O2 的总失／得电子亦各四。定义中的气态原子、一电子与反应时失去两个外电子分开。反应状态按冷水、加热蒸气、有限水熟化／过量水部分溶解分别说明；工业提钛总式未擅定相态。
3. 发现初稿 cation-check 在题干直接提供两种参考样品完整结果，会把预测变成配对抄写，已撤去这些结果。最终任务由学生选择 NaOH／sulfate，决定是否用 HCl，独立预测双结果，再用参考样品核验。追加 Ca/Sr 氢氧化物与硫酸盐的相反比较，避免只检验 Mg/Ba 两端记忆；解答说明先少量观察、再规定过量的目的，不声称无限浓度下 Ba(OH)2 都不沉淀。
4. 人工对读中英的前提、帮助与反馈：11 组任务逐字保留相同英文题干；16 段数学表达式相同；21 个显式 h2/h3 ID 同序且无重复。中文提示没有比英文额外给出答案。22 个 details 分别为每任务 Hint／Solution，源码均默认关闭；2 个完整示范常规展开。仅检查源码结构，不据此宣称键盘、MathJax 或语言切换实际运行正常。
5. 源码检查：div/details 数量配对；本页出链的本地文件与目标锚点均存在；没有遗留任务占位符、尾随空白或未闭合的显示数学分隔；SVG 可解析为 XML。既有 foundations 检查脚本只涵盖早先四页且依赖生成站点，本轮未用其结果冒充新样章测试。
6. SVG 使用现有 sharp 渲染成私有 PNG 后实际目读：Mg 三层、Ca 四层；各两个带负号外电子；12/20 质子标签与 [Ne]3s²/[Ar]4s² 一致，内层电子未逐个绘出的简化及非比例说明可见。图例不用颜色作为唯一识别。尚未检查嵌入课程后的缩放、深浅主题或手机阅读。没有复制或发布教材图。

### 交接与尚未验收

- 独立内容审查：**未进行**。下一位审查者需独立重建趋势解释、求解 unknown-check/cation-check/retries，检查先修连续性、任务是否真正撤架及浓度／模型边界；本作者自检不能替代该环节。通过前不扩展 periodicity、halogens 或 qualitative-analysis。
- 技术：按用户指令**未构建、未检查生成 HTML、未做桌面／手机实际阅读、键盘、折叠或语言切换运行检查**。后续集中整合时需完成。现阶段只有源码与单独 SVG 目读证据，不称“技术检查通过”。
- 入口与共享文件：均未编辑。本页出链可定位现有先修与课程入口，但入口还没有新增本页链接；需要主任务获授权的集中整合补齐，不把新页标为已纳入课程路线。未建立未完成后续页的坏链接。
- 学生：**未试用，未实操**，未获得真实学习、保持或实验能力证据；构造样品与参考数据不是学校实测。
- Git／发布：未运行 Git 操作，未提交、推送或发布。其他作者文件未编辑；教材扫描预览不在仓库内。

## 本轮 F1/F2 闭环及三页扩展设计（2026-10-27）

Rawls 在 `review-as-chemistry-inorganic-2026-10-27.md` 追加定点复核：**F1/F2 closed，gate PASS**。仅修改原 trend-check、reaction-check、retry-model 的题干、帮助／解答：明确 Ca→Ba 成键解释与 Sr→Ba 同目标重试；同种 Mg 的冷水／蒸汽条件比较及“一分钟无明显气泡”误概念恢复。作者复核 11 个英文任务仍完全配对、22 个关闭帮助保留。修后 EN SHA256 `18bcc3b131cf40365293c40b6ca7d85835e3c8bd8b750515874280bffa49fc2e`，ZH `e9f53f3622f77822902ba0046a88a80506465b17af25d7a0e99c47a37dc12a86`。

主代理提供了样章 EN/ZH 桌面和手机四路实际阅读通过证据；独立审查也登记此来源。本作者没有重新运行浏览器；本次修订后的重排仍由主代理集中检查，不把旧检查冒称修订后新检查。用户明确授权继续 periodicity、halogens、qualitative-analysis 的双语正文及必要原创图；不改共享入口／样式／他人文件，不 Git／构建／发布。每个源文件对完成即交 Rawls 独立审阅，作者继续下一页。

### Periodicity 设计卡

中心问题：为何同一周期半径、第一电离能、熔点有不同形状，哪些转折是模型必须解释的？先修链接 atomic-structure、structure-and-forces；先用给定电子数/排布定位，再讲 s/p/d/f 区、跨 Na–Ar 的有效核吸引和亚层/配对异常，最后用结构切换解释熔点。数据表和原创 IE 图采用教材近似数据；半径区分可比定义，Ar 不硬凑共价半径。示范 Mg/Al 电离转折，独立用 P/S、Al/Si/P4及S8解释，重试不能只背“总体上升”。

| 范围 | 讲解 | 独立任务及恢复 |
| --- | --- | --- |
| 3.2.1.1 s/p/d/f；质子数/位置/排布 | classification | classify-check，mixed-check；retry-periodicity |
| 3.2.1.2 Na–Ar 半径、第一电离能及解释 | radius、ionisation | trend-check（P/S）、mixed-check（Al/Mg）；retry-periodicity（同层/同亚层纠错） |
| 同条熔点与结构/键 | melting | structure-check（Si/P4、S8/Cl2、Na/Al），mixed-check；retry-structure |

### Halogens 设计卡

中心问题：为何卤素沸点向下升高而氧化性减弱，卤离子还原性却增强？先修 redox-equations、structure-and-forces；区分共价键内吸引、分子间色散、元素得电子和离子失电子。讲解并独立比较置换半式；固体 sodium halides 与浓 H2SO4 先酸碱后 redox，依电子守恒重建 SO2/S/H2S 支路。氯水两种反应、cold dilute aqueous NaOH、chlorate(I) 用途及有条件的水处理判断都须被独立任务问到。银盐鉴别在此教全理由和稀/浓 NH3，qualitative-analysis 承担混合选择；不复制漏加 AgNO3 的手册步骤。

| 范围 | 讲解 | 独立任务及恢复 |
| --- | --- | --- |
| 3.2.3.1 电负性/沸点 | molecular-trends | trend-check；retry-halogen |
| 氧化性/置换与卤离子还原性；固体NaX/浓酸 | electron-transfer、concentrated-acid | displacement-check、acid-check；retry-acid |
| AgNO3/HNO3/NH3理由与结果 | halide-evidence | halide-check；retry-test |
| 3.2.3.2 两种氯水反应、NaOH、用途/权衡 | chlorine-water、water-treatment | chlorine-check、decision-check；mixed-check |

### Qualitative analysis 设计卡

中心问题：怎样从有限试剂和原始观察得到可复核的离子判断，而不是把阳性颜色当唯一证明？先修 Group2 和 halogens 的粒子/反应解释，本文保留足够步骤与净式，不只是链接速查。按“先保存样品→分份选择→观察/推断→对照与重试”组织，完整覆盖 RP3 Group2/NH4+、halides/OH−/CO3²−/SO4²−，但不称实际操作已完成。Group2 四种离子用同条件参考比较并承认Ca/Sr重叠，不伪造通用唯一鉴别。

| RP3对象/能力 | 讲解 | 独立任务及恢复 |
| --- | --- | --- |
| NH4+、OH−及指示剂非唯一性 | ammonium-and-alkalinity | gas-check、unknown-salt；retry-gas |
| CO3²−酸放气/石灰水验证与过量CO2 | carbonate | gas-check、sequence-check；retry-carbonate |
| SO4²−、halides酸选择/AgX/NH3 | separate-portions | sequence-check、unknown-salt；retry-sequence |
| Group2沉淀/参考/浓度边界 | cation-evidence | cation-check、unknown-salt；retry-evidence |
| 空白/阳性、取样污染、风险/实操记录 | controls、practical-plan | evidence-check、practical-check、delayed-check；针对控制失效重试 |

### 本次新增的实读来源

直接读本地官方 `spec53.pdf` pp.25–27、50 及 `practical2018.pdf` pp.61、64–66（路径见独立审查报告，身份与本记录原官网链一致）。独立核对全部文字，不把手册 p.61 的 `+HNO3` 表头误当可独自产 AgX，也不复制 p.65(e) 漏加 AgNO3；流程均 HNO3→AgNO3→再比较氨水。后续引用自拟题，不引用未配对的书后旧 AQA 原题分值。

扫描教材本轮逐页目读：印刷 pp.147、148、150、152、153（PDF顺序各+2），以及 pp.165–171、173（各+2）。实际读过的表/正文包括 s/p/d/f 分类、第三周期结构/熔点、半径定义与 Ar 半径比较边界、第一电离趋势、卤素物性/电负性、置换、NaCl/NaBr/NaI浓酸、AgX及两种氯水/碱反应。教材后部页码偏移不能沿用+2：原拟渲染印刷524的 PDF526 页脚实际为523，未据此冒称实读524；RP3页另据页脚核准后再登记。

## 三组扩展正文完成与作者核验（2026-10-27）

已完成 periodicity、halogens、qualitative-analysis 三组中英学习页；各组完成即通知 Rawls 独立审查，作者继续下一组。未改入口、共享布局、脚本或其他作者文件，未运行 Git、构建或发布。主代理祖先线程不能通过本环境的跨线程消息工具接收消息；结果通过最终交接返回，不另建线程或修改共享记录。

### 最终范围、真实任务位置与恢复

下表列实际磁盘 ID，供主代理最终范围表核对；不是仅按目录或栏目声明覆盖。

| 页与范围 | 讲解位置 | 实际独立产出与恢复 |
| --- | --- | --- |
| periodicity，§3.2.1.1 质子数分类、s/p/d/f与周期 | classification | classify-check，retry-periodicity，mixed-check |
| periodicity，§3.2.1.2 Na–Ar半径、第一电离能与异常 | radius，ionisation | trend-check要求P/S轨道图、因果解释和纠错；mixed-check比较Al/Mg两种性质并评价Ar半径定义；retry-periodicity |
| periodicity，熔点与结构／成键 | melting | structure-check直接解释Na/Al、Si/P4、S8/Cl2和Ar；retry-structure修复Si4分子模型与P–P断键错误；mixed-check再比较Al/Si |
| halogens，§3.2.3.1 分子沸点／电负性 | molecular-trends | trend-check；retry-halogen重建粒子与沸腾模型（不冒称该重试再次独立考查电负性） |
| halogens，氧化／还原性、水相置换、固体钠卤盐／浓H2SO4 | electron-transfer，concentrated-acid | displacement-check要求半式、净式与试剂颜色对照；acid-check重建SO2/S/H2S路径；retry-halogen，retry-acid，mixed-check |
| halogens，AgX与酸／稀浓NH3理由 | halide-evidence | halide-check，retry-test，mixed-check |
| halogens，§3.2.3.2 氯水两种反应、冷稀NaOH、chlorate(I)用途及水处理判断 | chlorine-water，water-treatment | chlorine-check写三种条件方程／氧化数；decision-check作有条件评价；mixed-check区分光照褪色与气体身份 |
| qualitative-analysis，RP3 NH4+与OH− | ammonium-and-alkalinity | gas-check，unknown-salt，practical-check，delayed-check；retry-gas分开液滴与气体证据 |
| qualitative-analysis，RP3 CO3²−与CO2过量 | carbonate | practical-check要求完整规划，delayed-check独立判断／写净式；retry-carbonate要求两步石灰水方程与重做方法。unknown-salt本题候选无carbonate，不据此虚报覆盖 |
| qualitative-analysis，RP3 SO4²−／Cl−Br−I−，分样／酸化干扰 | separate-portions | unknown-salt给可检出浓度的受限候选，由学生选路线；sequence-check纠错并写净式；practical-check，delayed-check；retry-sequence |
| qualitative-analysis，RP3 Mg/Ca/Sr/Ba阳离子比较 | cation-evidence | cation-check要求试剂、同条件、少量／过量、净式与浓度局限；practical-check包含四种参照；delayed-check要求处理Ca/Sr重叠。不能从沉淀强度伪造通用唯一鉴别 |
| qualitative-analysis，对照、数据失效、风险与记录 | controls，practical-plan | evidence-check分析三轮空白／参照；practical-check自行设计分样／记录／四项具体风险控制；retry-evidence改变失效条件；delayed-check限制混合物结论 |

### 来源与图的最终口径

- 对前述实读清单补充：印刷pp.151、154也已渲染并目读；Practical 3印刷p.524实际为PDF顺序527，已按页脚核准、实际目读，不能沿用前部+2偏移。未读扫描页不列作已读；扫描图仍只在仓库外私有审阅位置，不进入课程assets。
- Periodicity设计卡原拟“教材近似IE图”，最终实现改为**明确标注的构造、取整训练数值**：500、740、580、790、1010、1000、1250、1520 kJ mol−1。熔点表另列教材近似值及白磷／单斜硫形态。两类数据来源在正文、图标题／描述与替代文字中分清，没有伪称本班实测。
- 原创 `assets/img/chemistry-as-periodicity-ionisation.svg` 作为讲解图，非待作答空图。作者用现有sharp单独渲染为680×360 PNG并实际目读，文字、点和数值未见重叠／裁切；纵坐标、Mg/Al和P/S下降方向与数据一致。连线只引导离散元素阅读。Rawls另有独立图核验记录。嵌入网页后的缩放／主题仍由主代理做实际阅读检查。
- Halogens和qualitative-analysis不用额外装饰图；半式／净式、观察表和分样规划承担表征任务。未复制手册漏加AgNO3的流程；网页明确HNO3→AgNO3→NH3，HCl→BaCl2分别用于不同分样。

### 作者检查与独立审查分开

作者已对四组（含原Group2样章）进行源码配对：英文任务数依次11／6／10／11，全部EN/ZH逐字一致；h2/h3 IDs依次21／12／18／19，均唯一且双语同序；数学表达式按出现顺序一致。每版details数22／12／20／22，全部默认关闭、开闭配对，Hint与Solution分开。div开闭、任务占位符、尾随空白及本地文件／目标锚点均检查；首次发现qualitative先修链接误写`#solubility`，已改为实际`#dissolving-and-reacting`。全部新化学SVG可解析XML。

作者逐式检查原子／净电荷：qualitative的NH4+/OH−、CO3²−/H+、CO2/石灰水、过量CO2生成HCO3−、Mg(OH)2、BaSO4及AgX均守恒，物态与操作条件相容；halogens的SO2/S/H2S支路分别转移2/6/8电子，氯水及冷稀碱的Cl/O氧化数与总式相符。独立未知路线明示候选与检出条件；无限制混合物不能由少数阳性反推纯盐／全部离子。上述是作者核验，不替代独立内容审查或实操。

已直接读Rawls磁盘报告：**Periodicity内容PASS、Halogens内容PASS**，各无待关闭阻断项；Group2 F1/F2继续保持已关闭。Qualitative-analysis已发送完整源文件对，独立审查进行中，最终判定以后续追加为准。

按用户分工，本作者没有运行构建、生成HTML、桌面／手机、键盘、语言切换等运行核验。新三页不能继承旧页面的技术通过状态；由主代理集中完成。未学生试用、未完成实体RP3，不能据此声称已验证学习效果或实验能力。

### Qualitative 定点修订与最终源码复查

Rawls独立审查指出两处局部问题，作者已同步修订中英：`delayed-check`将V限定为本页RP3候选离子范围，并明确其他NH3／CO2来源及其他检验干扰已排除，避免把简单试验推成无限制样品的唯一鉴定；`carbonate`防倒吸说明改为**停止供气或冷却前，先让导管离开石灰水**，删除可能颠倒安全顺序的原措辞。相关提示仍要求报告混合物中检出的物种，不猜纯盐。没有增加题组、实验或额外来源调查。

先前作者自检同时将`unknown-salt`候选限定到规定检验已验证能检出的浓度，并将`cation-check`明确为陈述溶解性趋势、解释浓度匹配理由，而不暗示需在AS推导晶格／水合能理论。上述并未删减RP3对象或用条件替代必要的空白／阳性参照。

最后一次源码复查：三组EN/ZH任务、显式h2/h3 IDs、数学表达式均一致，div/details均配对且默认关闭，没有遗留占位符；所有本地出链文件和目标fragment均存在，**0项失败**。Periodicity／halogens源文件哈希仍与独立PASS报告相同。定点修后qualitative EN SHA256为`b2927ab4b5a57fbe3aea903858cabf3917f03c738b0c4eabb70cbba4e08986f9`，ZH为`bcd136da7fab4621fa57a5fece2d18443714dc0cc84dceedd16d9de5ac193e08`。独立最终判定待Rawls追加，不由作者自称关闭。

### 独立审查最终交接

已再次直接读取Rawls报告末节“追加定点复核：Q1/Q2关闭，RP3内容闭环通过”。**Q1/Q2均独立关闭；qualitative-analysis内容PASS**，报告通过哈希与上列最新磁盘版本完全一致。此前Group2 F1/F2关闭、periodicity PASS和halogens PASS保持有效。至此本任务四对无机学习页均完成独立内容闭环，**无待关闭内容阻断**；本轮新三对已全部完成，不将该子任务冒称整个AS课程已完成。

主代理可按上述实际IDs整合最终范围表和集中技术检查。作者源码检查／原创图单独目读已完成；本轮未构建、未做新三页实际浏览器阅读，未Git／发布、未编辑共享入口或他人文件；实际RP3和学生试用仍未验证。报告中的历史“待修／待审”仅保留过程，以独立报告末节与本节为当前状态。
