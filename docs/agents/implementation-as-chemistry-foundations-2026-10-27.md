# AS 化学首批制作：从物质的量到滴定

日期：2026-10-27。范围：OxfordAQA 9620，AS，第一批定量化学学习路线；不是完整 AS 课程。分支：`codex/as-chemistry-foundations`。现有英文 Unit 2 速查笔记及锚点保留。

## 来源身份与使用边界

- 从当前资格页重新追踪下载后，确认官方大纲为 Version 5.3，正文说明教学自 September 2019、AS 考试自 May/June 2020 起；旧 `/oaqaresources/` 文件仍为 4.3，不能当当前下载。本批已对照两版 3.1.2 与 RP1，范围要求相同；新增正文使用 5.3 来源。不据此修改其他学科或既有资格范围。完整 AS 映射见[研究记录](research-as-chemistry-scope-2026-10-27.md)。
- 用户提供的本地扫描教材：Ted Lister / Janet Renshaw，*International A Level Chemistry: AS and A Level*，Oxford University Press，2016 首版，ISBN 978-0-19-837602-6，PDF 共 573 页。封面、版权页和目录已目读；章节顺序不能代替当前大纲范围。
- 本批教材参考位置：Chapter 2，印刷页 31–50；Practical 1，印刷页 521 起。实际目读教材身份页（PDF 1、3–5、7）、Chapter 2 的 PDF 33–41、43–46、48–52，以及 Practical 1 的 PDF 524–526；并非通读全书。官方样卷的实际题号、QP／MS 页面及发现的数值矛盾见研究记录；学习页任务均重新设计，不冒称原题。
- 教材 PDF 留在用户原路径，不提交或公开教材扫描件；网页正文、图与任务重新制作，任务均明确为 self-written / 自拟，不赋官方分值。

## 设计卡与目标对应

中心问题：怎样从可称量、可量取的样品得到可信的粒子数量、反应比例和未知浓度？先修为初中化学的元素符号、化学式、原子守恒与比例运算。新概念直接讲解，初次尝试只调用先修。

| 学习页／条目 | 概念与示范 | 独立产出与判定 | 反馈和重试 |
| --- | --- | --- | --- |
| amount-and-equations：3.1.2 摩尔、质量、粒子、配平、计量、限制物、产率、原子经济性 | 指定实体；质量→mol→系数比→质量；两个反应物比较反应进度；区分实验回收与理论原子分配 | particle-check / batch-check / process-check：独立确定实体、限制物、剩余量及两个百分数的分母 | retry-amount：针对把系数当质量比或只看起始质量的错误；回链 mole-bridge / reaction-ratios |
| formulae-and-gases：3.1.2 经验式、分子式、理想气体 | 质量换原子 mol；分数比整体倍乘；pVT 的 SI 单位与模型条件 | composition-check / gas-check：反推分子式、用两种证据检验相同主张 | retry-formula / retry-gas，变换数据表征和求问方向 |
| solutions-and-titration：3.1.2、RP1 | 溶质物质的量与溶液总体积；定容转移；原始滴定读数→选择→浓度；误差的方向 | preparation-check / sample-check / fault-check：决定方法、从未处理读数推断浓度及评价偏差 | retry-titration；返回选择读数、计量与仪器理由 |
| quantitative-review：本批综合 | 不标方法的混合任务与稍后重做入口 | unknown-check / evidence-check：连接气体、配比、滴定与证据范围 | 根据错误返回上述具体段落；提供新条件的重试 |

图承担的任务：反应前后粒子计数用于建立系数比；滴定装置示意用于解释读数和操作偏差。图明确示意，不伪称实拍或实测。原始数据均标构造数据；实验准备和数据题不能替代真实操作。

## 样章验收与扩展记录

先制作 amount-and-equations 中英文样章，按范围／先修可重建／独立任务与反馈／路线四项进行独立内容审查；修复后才扩展同类定量页。实验类型另审 solutions-and-titration。

首轮审查者 Linnaeus 独立算出六道原始任务，数值无误；发现缺少独立配平、原子经济性题重复已展示结果、百分数目标缺少重试及来源版本过期。已补 `equation-check`，将 `process-check` 改为 MgCO3 数据，并增加乙醇转化的 `retry-process`（产率改变、原子经济性不变和评价边界）。范围来源改为 5.3。样章通过后扩展，后续补入实体与相对质量考查；各轮独立判定及最终源指纹详见[样章审查](review-as-chemistry-sample-2026-10-27.md)。

## 最终目标与学习证据

下表记录已提供的纸面产出，不表示学生已经完成或掌握。独立题以关闭提示的首次作答为准；先修关系、完整讲解和错误原因见各页相应锚点。

| 官方条目／能力 | 讲解或示范 | 独立任务 | 恢复与后续证据 |
| --- | --- | --- | --- |
| 3.1.2.1 相对质量的参照、式量及单位 | amount：mole-bridge，碳-12参照、CO2／Ca(OH)2 | entity-check：定义 Ar、计算 MgCl2 式量与质量、区分晶格／分子 | 同题后的 CaCl2 重试；原子结构中的同位素丰度计算留在后续 3.1.1，不伪称已覆盖 |
| 3.1.2.2 明确实体并联结质量、mol、粒子数 | mole-bridge；CO2 质量换粒子示范 | particle-check、entity-check | retry-amount、CaCl2 重试；保留单位与下标检查 |
| 3.1.2.3 SI 下的理想气体关系及模型条件 | formulae：gas-model、worked-gas | gas-check、unknown-check | retry-gas：改正体积／逸散条件，区分改变样品量与分子大小 |
| 3.1.2.4 最简比、经验式和分子式 | composition-model、worked-formula | composition-check、evidence-check | retry-formula：分数比整体倍乘；撤回 Mr 后能保留的结论 |
| 3.1.2.5 完整／离子式与反应计量 | reaction-ratios、batch-example、滴定模型 | equation-check、batch-check、sample-check 净离子式、unknown-check | retry-amount；retry-titration 改变反应比与未知物位置 |
| 3.1.2.5 产率、原子经济性与有条件评价 | two-percentages，回收量与理论原子分配的不同 | process-check、route-check | retry-process：回收提高而原子经济性不变；毒性、供热与副产物问题影响判断 |
| 3.1.2.2／5 溶液体积、浓度与稀释 | concentration、配制与滴定示范 | preparation-check、sample-check、later-check | retry-preparation、retry-titration，区分 aliquot 与整瓶 |
| RP1 配制程序与装置选择 | preparing-solution、apparatus-decisions 与示意图 | preparation-check、preparation-procedure | 纠错后闭卷重新解释；retry-preparation 改变定容／稀释条件。仅纸面选择／理由，不是操作认证 |
| RP1 终点、原始读数和一致性判断 | titration-model、raw-data | endpoint-check、sample-check | retry-readings 给新初／末值、粗滴及不一致精滴；不能由数值臆定原因 |
| RP1 不确定度、重复性与偏差方向 | uncertainty-and-bias | uncertainty-check、fault-check、record-check | 新读数界限重试、retry-titration；综合题换未知物后重新判断方向 |
| 综合选法、英文解释与延后复查 | quantitative-review 的先修回链 | unknown／evidence／record／route 四题；later-check 无句型英文解释 | recovery 指向具体失败决策；稍后任务和纸笔记录已提供，实际延后表现待学生试用 |

共有 4 个新主题／回顾页面的中英配对及 2 个入口，共 10 页；30 个 task 标记包含示范、起步、独立任务和重试，不把它们全部统计为独立迁移题。另有相对质量和不确定度的新条件重试。原有有机资料仍是英文参考，未升级部分在两个入口如实标出。

## 独立审查、发现与修复

- Linnaeus：物质的量样章先独立求解，修复配平／百分数目标及反馈问题后允许同类扩展；随后独立核对化学式／气体六题及综合五题。FG1 将 H 的 9.10% 改为 9.1%，使构造数据的精度与目标化学式相容。最后新增的 entity-check 单独复核；E1 指出主答案与重试答案共用折叠区，已分别默认折叠并独立复查关闭。判定及指纹见[内容审查](review-as-chemistry-sample-2026-10-27.md)。
- Kuhn：独立复算滴定，并核读官方手册。首审发现 F1–F3：不确定度独立产出不足、筛选读数没有对应重试、终点颜色／两阶段解释及选择不足。新增 uncertainty-check、retry-readings、endpoint-check，并补 preparation-procedure；复审已关闭所有这些纸面设计缺口。见[实验类型审查](review-as-chemistry-practical-2026-10-27.md)。
- 两位审查均只改报告，课程由主代理整合；既有科学证据只继承未改部分。图像外层的滚动区域和提示属于后续呈现修订，SVG 和科学正文保持不变。不确定度任务的重试解答也单独折叠，复核确认没有改题目或推理。

## 阅读验收与技术状态

最终构建：Jekyll 成功；Pagefind 1.5.2 建立两语言搜索索引。新增数值／双语／生成 HTML 检查与 15 项相关既有检查全部通过，共 16 项：site-language、subject-index-translations、search-language、search-excerpts、search-interaction、frontend-loading、frontend-ux、reading-layout、reading-progress、accessibility、image-modal、chemistry-ch03、physics-as-dynamics、toc-refresh、back-to-top，加本批 chemistry-as-foundations。

两个已有预期同步：主页卡片改为新中文化学入口；CH03 检查原先假设科目名称与 icon 必须相邻，现改为在同一 a2chemistry 数据块内检查字段，兼容已存在的 stage／description，没有改 A2 课程内容或共享运行逻辑。新增化学检查已接入现有 Tests 工作流；本轮未推送，不能称远程 CI 已运行。

| 阅读位置 | 实际检查与修订 | 最终证据 |
| --- | --- | --- |
| 两个入口与四页主线 | 从入口能找到先修、下一步、综合及返回；提示与答案分开关闭 | Chromium 桌面 1440×1000、手机宽度 390×844，8 个学习 URL 共 16 个阅读视图；两入口分别检查 |
| 示范和独立尝试 | 题干、选择理由、分步方程、检查、下一次尝试连续可读；浅／深主题截图 | 已目读中文手机滴定、英文桌面气体和化学式等代表性截图；公式无 MathJax 错误，展开全部答案后页面不横向溢出 |
| 折叠、语言与搜索 | Enter 打开／关闭提示，切换语言保留目标锚点；搜索能发现各页 | 最终 16 阅读视图均通过；中文检索使用可命中的分词，未声称任意中文完整标题都支持精确匹配 |
| 滴定图 | 初版按整图缩放会让手机标签过小；改为可聚焦的局部横向滚动区，保持 720 px 图宽，给滚动／放大提示 | 桌面与 390 px 浏览器实查；手机方向键能横向查看，整页无横溢；点击图放大、Escape 关闭通过；两语言／两尺寸分别打开实体题与不确定度题的主解答，确认重试内容仍不可见。SVG 内容未改 |
| 旧英文有机参考 | 原正文及旧锚点保留在英文入口的折叠区；中文参考链接明确指定英文，避免自动本地化 | 5 个章链接检查；实际点击烯烃能打开英文旧锚点并展开；切回中文同章参考入口可定位。其他旧子节仍在英文原网址可用，中文不声称有对应译文 |

本机验收附件位于 `C:/Users/mi/.codex/visualizations/2026/10/26/01a175fb-77b0-7ce3-a4b2-4e50accd1df4/chemistry-2026-10-27/`：`reading-results.json`、`navigation-figure-results.json`、对应截图与 `source-manifest-final.json`。这些是本机检查产物，不是教材公开副本，也不是学生作答。

## 交付边界

- 来源与范围：用户教材身份及所用页目读；当前 5.3 大纲、3.1.2 与 RP1 限定范围和官方手册已核对。只完成首批定量化学路线，不是完整 AS；未制作其余主题或 RP2–5，也未通读全书或建立完整历年题库。
- 内容：量化、实验准备／数据分析和综合任务已独立审查；逐项目标与任务对应见上。网页任务、构造读数、SVG 和反馈为本项目制作，不赋官方分值。
- 技术：本地构建、16 项相关检查、桌面／手机浏览器阅读及图像／语言跳转通过；未运行全部其他学科测试或远程 CI，没有完整读屏、实体手机或全 WCAG 人工审查。
- 学生试用与真实实验：均未进行；没有学习效果、延后保持或实操能力证据。正式仪器活动由教师按中心风险评估组织。
- 发布：变更仅保存在 `codex/as-chemistry-foundations` 的本地工作区；尚未推送、合并或部署。
