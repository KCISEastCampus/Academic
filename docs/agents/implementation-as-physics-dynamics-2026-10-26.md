# AS Physics 牛顿定律与动量样章实施记录

## 制作前设计卡

日期：2026-10-26。目标资格：OxfordAQA International AS Physics 9630，PH01，3.2.5–3.2.6。两页分别处理“单个物体的合力如何改变运动”和“系统边界怎样决定动量是否守恒”；不据此声称完整 AS 力学或实验课程完成。

先修：向量与力矩课的方向、分量和力平衡；直线运动课的速度、加速度及图像面积；测量课的不确定度。动能公式在第二页直接建立，只用于碰撞分类，不假定已学完整功与能量章节。

核心模型：惯性参考系、质量不变、质点平动；合外力等于动量变化率，恒力才用矩形面积；守恒取决于所选方向的外冲量可忽略。区别接触力与合力，作用反作用与同体平衡，动量守恒与动能守恒。图用于识别受力对象及读取有符号面积；数据均为明确标记的构造数据。

示范：下降减速电梯的称重；粘连小车的系统与能量；反弹球的方向和接触力。独立任务改变求问方向、系统、图像和证据类型。提示与解答分别默认关闭；错误返回具体概念并做新题；第二页末设延后混合任务。

| 目标与条目 | 先修与回补 | 讲解／示范 | 独立产出 | 判据与重试 |
| --- | --- | --- | --- | --- |
| 按受力对象应用三定律，区分速度与加速度，3.2.5 | vectors-and-moments、straight-line-motion | newtons-laws 的 force-model、three-laws、lift-example | steady-check、force-transfer、interaction-check | 对象、力的施力者、方向和方程一致；retry-forces |
| 选择单体／整体列方程并检查模型，3.2.5 | 分量、同加速度约束 | connected-system | connected-check | 内力只在整体抵消；分别求加速度与连接力；retry-connected |
| 用有符号动量处理一维碰撞及爆炸，3.2.6 | newtons-laws、有符号速度 | momentum-and-impulse 的 system、collision-example、collision-types | collision-check、separation-check | 先判外冲量，再检查总动量与动能；retry-momentum |
| 用合力–时间面积求冲量，区分接触力，3.2.6 | 图像面积、第一课第二定律 | impulse、bounce-example | graph-check、later-review | 有符号面积、毫秒换算、重量修正；retry-momentum |
| 评价模型与测量是否相容，3.2.6 的应用 | measurements-and-uncertainties | evidence（明确给出区间判据） | evidence-check | 数值区间及有方向的偏差解释，承认不能证明模型；retry-evidence |
| 不依赖标题选法并用英文论证 | 上述全部 | interaction-check 与 separation-check 的答案提供英文表达示范，后续任务不提供句框 | later-review（下一次学习先做） | 运动学、受力、冲量连接；自拟核查点非官方评分标准 |

## 来源身份与边界

- [当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/)（2026-10-26 核对）链接的[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)正文标 Version 4.4；3.2.5–3.2.6 在印刷第 13 页（PDF 第 12 页）。另一个仍可访问的[官方大纲地址](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf)正文标 Version 5.1。记录身份差异，本样章只采用两者共同的相关范围；不以 URL 日期断言哪份适用于所有考季。
- 读过资格页所链 [PH01 specimen question paper](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9630-PH01-international-as-physics-specimen-paper-2016-v2.pdf) Q01、Q02、Q06 及[配套 mark scheme](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9630-PH01-international-as-physics-mark-scheme-2016-v2.pdf)。试卷正文为 Physics 9630 Paper 1、Specimen 2018、V1.1，不能按文件名称“2016 年真题”。Q06.3–06.5 用于核对动量方向、平均力及接触时间的作答要求。
- Q06 评分材料用 Δp/Δt 近似接触力，忽略球重。本样章全部题目自拟，反弹示范明确计入球重，再解释近似条件；不转录原题、图或官方分值。
- 教学路线依据既有 [course-content-standard.md](course-content-standard.md) 及[本轮跨学科研究](research-science-accessibility-2026-10-26.md)；研究原稿已原样带入本次独立工作区。复用共享 reading_layout、worked-example、lesson-check，不改全站样式。

## 变更范围

新增两课及中文对应页、两张教学 SVG；接入双语入口与抛体课下一步；修正 AS Physics 目录简介；增加局部数值／双语／生成页面核验并接入现有检查流程。保留旧参考笔记锚点。独立工作区基于 da6a642，避免并行数学课程的未提交修改。

## 验收记录

### 内容与目标证据

本次状态：两页双语样章内容审查通过；技术检查结果见下。15 个初试／独立／重试／延后任务与 3 个完整示范均有中英文相同的英文题干。该数量只说明本次实际资产，达标判断以上表的逐项目标证据为依据。

- 独立物理审查：代理 Erdos 对所有题目重新求解，复核力的对象与方向、系统边界、接触力与合力、碰撞／分离的动量和动能、图像面积与 SVG 坐标、不确定度及偏差方向。结果与正文一致；指出中文示范最初只保留中文题干，已改为保留原样英文题干、中文解释，并对三处更正复核通过。
- 独立学习设计与双语审查：代理 Volta 根据长期标准重建学习路线，核查先修、关键选择、目标任务、答案泄露、反馈与重试。首轮发现连接系统与证据评价没有对应新重试、第一定律独立考查不足、记录误称撤去句框；分别新增 retry-connected、retry-evidence、steady-check 及恒速重试阶段，修正文档中英文支持的实际描述。复核这些改动后，报告本范围无剩余阻断项。
- 三定律的证据是 steady-check 的零合力非零速度、force-transfer 的反向加速度、interaction-check 的不同受力者，不能只据“写出三定律”判定完成。连接系统目标由 connected-check 和更换施力车及方向的 retry-connected 检查。
- 动量目标由 collision-check 分别核对非弹性与弹性结果，separation-check 检查零初总动量与能量来源。冲量目标由 graph-check 检查正负面积和时间单位，再由 retry-momentum 检查反向运动及重力修正。
- 证据目标由相容／不相容两种构造记录、偏差方向预测及区分测量检查；区间重叠明确不当作统计显著性检验或模型证明。later-review 将受力、运动学和平均冲量混合，不标求解方法，并要求独立英文解释。

审查结论限于源文内容和设计；代理代解不是目标学生的学习证据。

### 技术与实际阅读

- Jekyll 全站构建完成；复用本机现有依赖，仅为本次进程指定位置，未改共享配置。Pagefind 搜索索引生成完成（301 页、两个语言索引），新页通过课程入口及搜索索引发现。
- 新增 scripts/test-physics-as-dynamics.js：重新平衡单体／整体受力、重力冲量修正、碰撞动能、分离、区间边界、混合停止情境；检查 SVG 坐标的实际物理尺度，以及全部英文题干／双语锚点／关闭帮助／生成页本地链接。已接入现有 CI。
- 既有 physics-learning-pilots、physics-bilingual、reading-layout、site-language、subject-index-translations、reading-progress、accessibility 检查通过。旧参考笔记锚点与原四课路线仍可用。改动 Markdown 的 markdownlint 及 git diff --check 通过。
- Chromium 实际载入两课双语页面，视口为桌面 1440×1000 与手机 390×844，合计八组；检查 MathJax 无错误、真实 SVG 加载、全部帮助关闭／展开、键盘 Enter、手机菜单中的主题与语言操作、同锚点跨语言定位及展开后整页宽度。桌面正文 720 px；手机文档宽度 390 px，无整页横溢；长公式局部滚动。
- 沿示范题干→受力图→方程→检查→独立题，以及图像任务→提示／答案→数据判断两条路线实际查看截图。手机初次截图过早捕获图片占位，改为等待实际图片解码后重查；这属于验证时序问题。手机图内文字随后放大。末轮截图发现相邻公式块仅换行会被 Kramdown 合并，已在两课双语正文补上块间空行，将电梯模型方程与代入结果分开显示；增加相邻公式块的回归断言并在相同位置复查。另实测图像键盘放大、缩放按钮、Escape 关闭，以及搜索结果能找到两课的对应语言页面。
- 本地截图与八组结果保存在本聊天附件目录 `C:/Users/mi/.codex/visualizations/2026/10/26/01a175fb-77b0-7ce3-a4b2-4e50accd1df4/`，代表截图为 mobile-zh-newtons-laws-figure.png、mobile-zh-momentum-and-impulse-figure.png、mobile-zh-momentum-and-impulse-expanded-dark.png；结果为 physics-reading-results.json。它们支持阅读检查，不替代学科或学习效果证据。

### 交付与剩余缺口

本地分支 codex/as-physics-newton-momentum，独立工作区，不覆盖正在并行制作的数学页。未推送、合并或发布。课程入口改为六课并保留“不完整课程”声明。

学生试用：未进行。真实器材操作、真实手机、完整 WCAG 审计：未进行。当前可交付的是内容与技术均经检查、待学生试用的样章，不能声称学习效果已验证。下一次检查应收集学生在首次任务、错误后新重试及下次混合回顾中的实际作答；实验操作类型另做样章，不能从本次建模与构造数据课推定已完成实验教学升级。化学、生物及 AS 能量／材料／后续主题不在本次实施范围内。
