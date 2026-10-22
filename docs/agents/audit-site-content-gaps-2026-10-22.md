# Academic 课程内容缺口盘点（2026-10-22）

本报告保留本轮制作前的缺口基线。MA05、MA01／MA02、FM01／FM02 后续已完成本地补建，尚未发布；最新实施与验收见[五单元课程建设记录](implementation-five-units-2026-10-22.md)，不把本地完成等同于线上已更新。

## 范围与判定口径

本轮检查当前网站已开设的数学、高等数学、物理、化学、生物及经济学，覆盖 AS、A2、IGCSE。没有把学校可能开设而网站未承诺提供的其他学科列作必补项。

基线：本地 `main` 为 `350879e87d0e2db5207c20d48d6e7ee553866053`；盘点期间只读获取到远端 `main` 更新为 `483f65bba4a2ad12df09aa656fcb09f56597fa4e`。两者差异为已合并的 [PR #107](https://github.com/KCISEastCampus/Academic/pull/107)，其 IG 重心／力矩与 AS 抛体运动已纳入本报告。FM03 的 [PR #108](https://github.com/KCISEastCampus/Academic/pull/108) 已在两基线中。

判定分为三类，不给缺乏依据的全站完成率：

- **范围缺口**：尚未找到对应官方单元或主题的教学路线。
- **课程形态缺口**：已有笔记、示范或资料，但尚未构成概念解释、支架尝试、独立选法、反馈和再尝试的完整路线。
- **语言缺口**：有英文正文，中文入口仅为目录或跳转；不能把目录称作汉化课程。

按主题和任务判定覆盖，不要求每个大纲条目恰好对应一个网址。计算器扩展、速查页、分卷入口不重复计作学科新课。资格继续按站内现行 OxfordAQA 代码，不因官网出现新版资格就自动迁移。

## A2：哪些确实还缺，哪些已经有

| 课程 | 当前可确认的内容 | 主要待补工作 | 缺口性质 |
| --- | --- | --- | --- |
| 数学纯数学 MA03 | 15 节中英学习课，另有入口与速查 | 本次未发现整单元空白；继续做细项覆盖、迁移练习及学生试用 | 深度核验 |
| 数学力学 MA05 | 9 节英文学习课及速查 | 中文概念讲解、提示、反馈与对应任务；不需重造英文课程 | 语言 |
| 数学统计 MA04 | 一篇英文笔记，已有 S2.1–S2.6 六个主题及若干例题 | 将分布、估计、检验组织为双语学习路线，增加独立选法、诊断与再尝试 | 课程形态＋语言 |
| 高数纯数学 FM03 | 16 节中英学习课，覆盖 FP2.1–FP2.14 | 本次未发现整块缺课；向量、矩阵、方程组已上线 | 深度核验 |
| 高数统计 FM04／FS2 | 未找到正式学科课程入口或学习路线 | 建立统计选修课程；矩母函数、估计量、估计、进一步假设检验等 | 范围 |
| 高数力学 FM05／FM2 | 有 fx-CG50 扩展任务，尚非整门学科课程 | 建立力学选修课程；竖直圆周、斜面抛体、弹性绳／弹簧、二维碰撞、微分方程与 SHM 等 | 范围 |
| 物理 PH03 | 11 节中英学习课及速查 | 本次未发现主主题整块空白；不再把磁场、感应、交流电报成未制作 | 深度核验 |
| 物理 PH04 | 热学、核半径、质量与结合能 3 节中英课 | 裂变／反应堆安全、聚变；转动动力学及风能、太阳能、水电等能源主题和 RP10 | 范围 |
| 物理 PH05 | 其他课中已有实验与数据分析任务 | 尚缺跨 AS/A2 的综合实验、设计及分析路线 | 综合训练 |
| 化学 CH03 | 热力学、电极电势、酸碱缓冲、第三周期、过渡金属、溶液离子反应 6 节中英课 | 本次未发现六个主主题整块空白 | 深度核验 |
| 化学 CH04 | 尚无正式学习路线 | 速率方程／RP8、Kp、A2 有机及分析主题；包括光学异构、羰基与羧酸衍生物、芳香化学、胺、聚合物、蛋白质、合成、NMR、色谱／RP10 | 范围 |
| 化学 CH05 | CH03 已有 RP6／7／9 的准备与分析 | 尚缺贯通 Units 1–4 的实验设计、数据评价及综合训练路线 | 综合训练 |
| 生物 BL03–BL05 | BL03 七课、BL04 七课、BL05 三类技能课，中英配对；另有桥接与分卷入口 | 本次未发现整卷空白；优先做陌生数据、跨主题迁移和试用修订 | 深度核验 |
| 经济学 A2 | 未找到 A2 课程入口 | 若网站目标包含完整 A-level Economics，需建设 Units 3–4 课程及论证／评价训练 | 范围 |

**选修边界：**数学 A2 是 S2 或 M2，高数 A2 是 FS2 或 FM2；应先补学校实际选择的路线，不能说所有学生都必须同时修完两条。[数学 9660 官方资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)；[高数 9665 官方资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)。

源码依据：[MA03](../../alevel/a2-mathematics/index.md)、[MA05](../../alevel/a2-mathematics/mechanics.md)、[MA04](../../alevel/a2-mathematics/statistics.md)、[FM03](../../alevel/a2-further-mathematics/index.md)、[计算器力学扩展](../../alevel/fx-cg50/further-mechanics/index.md)、[A2 物理](../../alevel/a2-physics/index.md)、[A2 化学](../../alevel/a2-chemistry/index.md)、[A2 生物](../../alevel/a2-biology/index.md)、[学科导航](../../_data/subjects.yml)。

### 科学单元边界与来源

- **物理：**PH04 尚缺 §3.12.3–3.12.5、§3.13.1–3.13.4；已有圆周运动不能替代转动动力学，已有结合能计算不能替代反应堆／聚变条件教学。PH05 是贯穿全内容的实践能力，不能另造一套“第五单元新知识”。依据 [9630 当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/)及其所链 [v4.4 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)，并比对 [PH03 实施映射](implementation-ph03-final-chapters-2026-10-21.md)及 [PH04 核能样章记录](implementation-ph04-nuclear-sample-2026-10-21.md)。
- **化学：**CH04 范围为 §3.1.11–3.1.12、§3.3.7–3.3.16；过渡金属催化、自催化与相关图像仍在 CH03，当前已有，不能误报缺失。CH05 同样属于全课程实验与综合能力。依据 [9620 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-chemistry-9620/)及 [v5.3 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)。
- **生物：**BL03 覆盖 §3.3.1–3.3.8，BL04 覆盖 §3.4.1–3.4.10，BL05 已有实验设计、数据／统计和综合写作。当前 [9610 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/)所链 [v4.2 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-biology-specification.pdf)与课程使用的另一[官方 v5.1 文件](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf)存在版本差异，入口已披露；未确定学校目标考季适用版本，不能据本轮宣称逐细项完整。

## AS 与 IGCSE：从资料入口到学习课程的缺口

| 阶段／课程 | 当前内容形态 | 应补内容 |
| --- | --- | --- |
| AS 数学 | P1／PSM1 一篇英文概述；中文是指向英文的目录 | 按先修关系分段的概念、示范、独立应用及反馈；中文正文 |
| AS 高数 | FP1／FPSM1 一篇较长英文笔记，已有许多演算例题 | 分段学习路线、独立选法与错误反馈；中文入口及正文。不能说当前完全没有示范 |
| AS 化学 | 主要为有机 Chapters 11–15 的英文笔记，不能视为完整 Unit 2；无中文对应入口 | Unit 1；Unit 2 的速率、平衡／Kc、有机分析及相应实验内容；双语课程及独立任务 |
| AS 生物 | Unit 2 英文笔记，入口明确 Unit 1 未纳入；无中文对应入口 | Unit 1；Unit 2 学习活动、实验／数据与英文机制表达训练；中文正文 |
| AS 物理 | 4 节中英课：测量误差、向量力矩、直线运动、抛体；其余为中英复习笔记 | 将余下力学、材料、原子／辐射、电学、波及粒子主题升级成学习路线，完善实验与反馈 |
| AS 经济 | 8 个 PDF 导图链接，页面编号 1–5、7–9 | 第 6 主题入口；概念与图像、情境应用、数据回应、论证与评价活动；中文讲解 |
| IG 数学 | Extension 英文摘要、4 处 Quick Check 和 PDF 资源；中文为目录 | 9260 对应范围核对、连续学习与迁移任务、提示反馈及中文正文 |
| IG 物理 | 4 节中英课：运动图像、力与运动、弹簧、重心稳定性与力矩；其余为中英复习笔记 | 其余主题逐步升级为双语学习课和实验／数据任务 |
| IG 化学、生物 | 各一篇覆盖多主题的英文参考笔记，中文为目录 | 概念与表征／机制相连的学习活动、独立题、反馈及真正的中文讲解 |

本表没有把“笔记覆盖多主题”当成“每个条目已经详尽”，也没有把未独立成课的内容称为完全没出现。AS 生物／化学的确切细项和 IG 三科仍需制作前的逐项映射；本轮给出明确整块缺失与课程形态，不承诺所有笔记均经学科逐题复核。

AS 化学 Unit 1 需系统建设原子结构、物质的量、键合、能量、氧化还原及相应无机基础；Unit 2 的速率、平衡／Kc 和有机分析不能由有机五章替代。AS 生物 Unit 1 需系统建设生物分子、细胞、酶、膜运输、气体交换、DNA／蛋白质合成、减数分裂及多样性等内容；Unit 2 零散涉及部分先修不等于完整 Unit 1。范围依据上述 [9620 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)与 [9610 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-biology-specification.pdf)。IG 三科主题清单与 [9203 物理](https://www.oxfordaqa.com/qualification/international-gcse-physics-9203/)、[9202 化学](https://www.oxfordaqa.com/qualification/international-gcse-chemistry-9202/)、[9201 生物](https://www.oxfordaqa.com/qualification/international-gcse-biology-9201/)官方摘要对照；没有据此认证所有细项齐全。

源码依据：[AS 数学](../../alevel/as-mathematics/index.md)、[中文目录](../../zh/alevel/as-mathematics/index.md)、[AS 高数](../../alevel/as-further-mathematics/index.md)、[AS 化学](../../alevel/as-chemistry/index.md)、[AS 生物](../../alevel/as-biology/index.md)、[AS 物理](../../alevel/as-physics/index.md)、[AS 经济](../../alevel/as-economics/index.md)、[IG 数学](../../igcse/mathematics/index.md)、[IG 物理](../../igcse/physics/index.md)、[IG 化学](../../igcse/chemistry/index.md)、[IG 生物](../../igcse/biology/index.md)。本地物理入口仍为旧版本时，以 [最新 AS 入口](https://github.com/KCISEastCampus/Academic/blob/483f65bba4a2ad12df09aa656fcb09f56597fa4e/alevel/as-physics/index.md)和 [最新 IG 入口](https://github.com/KCISEastCampus/Academic/blob/483f65bba4a2ad12df09aa656fcb09f56597fa4e/igcse/physics/index.md)为准。

**经济学的编号不能混淆：**网页的 1–9 是主题顺序，不是九个正式考试单元。第 6 主题“宏观经济表现的衡量”在官方 AS Unit 2 中；本地没有第 6 个 PDF 文件或入口，但尚未逐页审读其余 PDF，因此只能确认专门入口／资源缺失，不能断言其他导图从未涉及任何相关概念。A2 另为 Units 3–4，涉及企业行为与收入分配、发展与全球经济。[9640 官方范围](https://www.oxfordaqa.com/qualification/international-as-and-a-level-economics-9640/)。

## 建议制作顺序

1. **优先补 A2 的明确课程范围缺口。** 物理先接已有核能样章完成裂变／安全／聚变，再做转动与能源；化学从 CH04 速率／RP8、Kp 入手，再按有机先修链展开。PH05／CH05 组织已有任务并补缺少的综合考查，避免复制笔记。
2. **若继续当前高数建设，下一步转向学校实际选修的 FM04 或 FM05。** FM03 已不需要再安排一轮“补全其他单元”；计算器资料可作扩展，不能代替学科路线。MA04 可作为另一批完整升级，MA05 主要补中文。
3. **AS 先补化学／生物 Unit 1，再完成其余内容与双语活动。** 已有 IG／AS 物理样章可逐批推广；数学和高数保留现有可用笔记与例题，增加任务链，不必为了统一外观整页重写。
4. **经济学独立立项，IG 按教学进度逐主题建设。** 经济从一小段概念—图像—情境—评价样章试用，再扩展；IG 三科与数学同样先验证小样章。没有实际授课／备考安排依据，不能把所有学科硬排成唯一先后次序。

## 导航需要同步的状态

[subjects.yml](../../_data/subjects.yml) 的 A2 物理仍写“PH03 部分学习页；PH04 热学”，已落后于 PH03 全主题路线和 PH04 两个核能样章。AS／IG 物理描述仍仅称笔记或中文目录，遗漏各 4 节中英学习课。AS 化学“仅 Unit 2”也容易被理解为整个 Unit 2，宜明确为“Unit 2 部分有机笔记”。这是课程状态说明，不是新增知识章。

## 验证状态与限制

- 已枚举课程目录、语言配对及导航，检查关键正文／任务形态，并由两组并行研究核查科学三科。已重新读取当前官方资格资料；历史报告只用于定位，不直接沿用旧缺口或旧错误。
- 已在真实浏览器读取线上 A-level 导航、FM03 中文目录、A2 物理、A2 化学、AS／IG 物理及 AS 经济入口；AS 抛体和 IG 重心新增路线均已在线列出。普通 HTTP 批量读取遭遇 403，不能据此判网站故障；浏览器核查成功。本轮未对全站每个链接做线上可达性验收。
- 本次仅新增这份盘点报告；未改课程正文、提交、推送或发布。仅文档变更检查文档与差异，不重建全站。
- 没有重算全站每道题、逐张核验图像、完整比较所有大纲细项与版本，也没有开展学生试用或实物实验。已存在课程路线不等于学习效果经过验证；准备制作某单元时仍须核对目标考季、原题及配套评分材料。
