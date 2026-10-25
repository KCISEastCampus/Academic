# MA05 全课程扩充：独立 Standards 审查记录

日期：2026-10-25。审查轴为项目书面标准及实际改动测试代码的维护判断。作者记录仅用于定位目标和来源；以下结论来自独立阅读课程源码、差异、官方范围及配对 QP/MS，并重建所列学习链。

**结论：**在下列实质核验范围内，未发现可成立的书面标准违例或内容交付阻断项。另有一项 P3 测试代码重复的维护建议，单列为判断型意见。结论限于实际检查的链条与能力；没有把其余全部习题声明为逐题重算，也没有代替 Spec 轴、实际页面验收或学生试用。

**版本与范围。**用户批准的 forces 样章基准为 `d1e93ecac2b0ea1cb8b295b4f289a208fd250db8`；本轮课程冻结提交为 `3066e46e58050dd7f0e2eab4846657d1aa596701`（`Upgrade all MA05 lessons with accessible bilingual learning routes`）。实际课程为九个核心主题、AS momentum bridge、quick-reference 与入口，中英共 24 源文件。指定差异含 22 课程源文件和 12 测试；两份 forces 正文从已认可基准继承，仍读取其关键学习链及核对保护状态。

```text
git diff d1e93ec...3066e46 -- alevel/a2-mathematics/mechanics.md alevel/a2-mathematics/mechanics zh/alevel/a2-mathematics/mechanics.md zh/alevel/a2-mathematics/mechanics scripts/test-mechanics*.js
```

追加检查 `3066e46..e0d02f3442f666947fac84b9731d2e04a81a13d9`，仅含 `scripts/test-mechanics-bilingual.js` 与 `scripts/test-mechanics-chapter10.js`。已静态阅读原范围内 12 份测试的改动及这一追加差异，包括可执行的结构断言和数值/模型校验逻辑；未执行它们。主线程在本轮扩充范围内将两个入口六题的反馈链接细化到实际概念锚点；该追加范围的最终版本与复查证据如下。其余 22 页继续以 `3066e46` 为内容基准。

本审查只写本文件；不编辑课程、测试、共享文件或其他作者记录，不运行构建、浏览器及已有测试，不提交或推送。现有未跟踪 `package.json`、`node_modules/` 与主线程审计产物不纳入改动。

**采用的书面标准。**已读 [AGENTS.md](../../AGENTS.md)、[课程内容长期标准 v1.1](course-content-standard.md)、[公式指南](../MATH_FORMULA_GUIDELINES.md)、[协作规范](codex-collaboration.md)及全课程设计卡。项目有效目录未发现其他 `CODING_STANDARDS.md`、`CONTRIBUTING.md` 或嵌套 `AGENTS.md`；依赖与生成目录不作为本项目课程标准。

| 本次判定依据 | 实际检查方法与结论 |
| --- | --- |
| 长期标准 §1，尤其第 19–21 行：讲解覆盖与独立考查分开；任务调用目标能力 | 对照下表的模型、约束、表示转换、选法和适用性判断，实际求解独立任务。未以目录或题数认定覆盖。 |
| §2，第 27–37 行：入口、学习页和参考各有职责；先修与下一步可找到 | 检查入口学习顺序、各主题先修回补、后续主题以及混合/延后任务；速查明确用于学后查条件，AS bridge 明确其先修身份。 |
| §3，第 41–49 行：仅凭声明先修能重建关键选择；核心解释公开 | 阅读具体示范的对象、方向、几何、方程选择、限制和检查。绳长约束、位移与路程、力矩臂、质心质量矩、运动阶段、功/能量及径向合力均有公开概念解释。 |
| §4，第 55–61 行：改变条件或表征；不得由标题、图注、邻近答案替学生判断 | 检查所列任务的题干、可见标题、相邻内容和相关 alt；独立选法与入口六题采用中性标题。旧的带方法名称 ID 为兼容锚点，不是可见答案标题。所选图的必要描述未被删去，也未替学生给出所考判定。 |
| §5，第 65–71 行：错误原因、修复入口、同目标重试、综合与回顾 | 实际跟随反馈回到讲解，再做条件、表示或求问方向改变的新任务；下表列出对应目标与结果。恢复路径有实际讲解和任务，不止“请复习”一句。 |
| §6，第 79–106、119–121 行；AGENTS 第 90–93 行 | 源码检查主线、完整示范和题目边界；提示/解答分开且默认关闭。比较所列双语链的题目身份、数据、推理和帮助，而非只比较公式数；检查 24 页元数据和共享样式保护。实际重排/键盘验收另由主线程承担。 |
| §7，第 134、143–150 行；AGENTS 第 94 行：独立核验与证据边界 | 明确记录自行重建的范围、版本和结果，技术与学生证据单列。已认可 forces 样章作为本轮基准继承，不能从它推断所有新题自动合格。 |
| AGENTS 第 41–43、52 行；公式指南“显示公式”“长计算过程” | 核对来源身份、自拟题标记、研究对象/假设/受力/约束在方程之前。所读推导的公式、符号、单位及范围相互对应；未用公式渲染测试代替这些判断。 |

**独立阅读和重建的学习链。**下表课名对应 `alevel/a2-mathematics/mechanics/<slug>.md` 及同名 `zh/alevel/a2-mathematics/mechanics/<slug>.md`；入口为这两个目录的同级 `mechanics.md`。每行包括概念/示范、学生作答、反馈、重试和后续连接的完整链。中文阅读包括概念桥接与所列任务的提示、解答、返回入口；不是只对齐英文题干。

| 源文件与完整链的定位 | 自行重建的关键证据；反馈与新尝试是否仍检验原困难 |
| --- | --- |
| `mathematical-modelling`：假设表、汽车/拖车及定滑轮示范 → `#rope-check` → `#constraint-retry`、`#system-retry`、`#lift-retry` → `#later-check` / vectors | 分开 light、taut、inextensible；用固定长度推出加速度关系，而非从“轻”推出。制动车辆新题全系统制动力为 850 N，向右为正时杆对拖车为 −150 N；这检验系统边界与压缩杆模型。电梯新题 `540−50g=50a`，加速度向上 1 m/s²，下降速度不决定加速度方向。恢复讲解确实说明绳不能推、松绳后原约束失效。 |
| `vectors-and-kinematics`：速度/加速度、两次积分、`#distance-travelled`、`#meeting-or-crossing` → Q3/Q7、`#meeting-check` → `#meeting-retry`、`#direction-retry`、`#calculus-retry`、`#radial-retry` → later / forces | 原路径在 (1,1) 相交但经过时刻不同；重试于 t=1 相遇，速度点积为 4，故不垂直。路程链重建最终位置 6i、位移 3i、路程 5 m；径向距离导数为 3/5，而速率为 1。两次积分各保留独立常向量；“静止/原点”不自动消去不定积分所得常数。重试分别修复同时性、方向、积分常数和径向分量，未混用成一个泛化“向量错误”。 |
| `forces-equilibrium-and-friction`（继承）：公开摩擦概念及示范 → `#friction-claim` → `#friction-retry`、`#zero-friction-check` → `#wall-check` / moments | 所需摩擦与最大容量分开，静摩擦不自动取 μR；无切向趋势可以为零。竖直墙新情境要求重新确定摩擦方向，不能照抄斜面方向。已认可正文、两图与测试保护文件均与基准相同；没有把旧样章重新改写。 |
| `moments-and-rigid-objects`：垂距、支承/接触条件与完整示范 → `#box-check` → `#retry-change-the-pull-and-the-contact` → `#later-beam-check`；另读 `#q9-wall-and-string` | 水平推箱先在 60 N 滑动，假设倾倒阈值为 80 N。斜拉重试倾倒阈值 `120/(√3+0.6)≈51.5 N`，同时检查正反力及未达到摩擦容量。稍后梁题给 `0≤P≤240 N`。新增墙/绳题重建墙法向力 20 N、摩擦 10 N、地面反力 90 N、质心距离 7/6 m，并换矩心复核。反馈教学生比较可实现的失效条件，重试改变了拉力与接触几何。 |
| `centres-of-mass`：质量矩由力矩建立、对称/挖孔/悬挂示范 → `#joined-body-check` → `#retry-replace-suspension-by-two-supports`、`#cutout-retry` → `#later-body-check` | 反推密度得到 ρ=5；区分面积与真实质量、物体坐标与稳定悬挂姿态。挖孔逆题给 a=5.4 cm、角约 62.2°；后续组合体质心 (2/3,2/3)，两张力 19.6 N、39.2 N。由单点悬挂改为两个向上支承力，仍要求建立质量矩和力矩关系，非仅换数字。 |
| `newtons-laws-of-motion`：对象与阶段讲解、粗糙斜面及连接体示范 → `#independent-task-motion-direction-or-force-direction` → `#stages-retry`、`#connection-retry` → `#later-dynamics-check`；另读 `#example-9-a-mixed-force-record` | 下滑重试加速度为上坡 3.55 m/s²，停止时间 40/71 s、距离 40/71 m；停止后需 2.2 N 下坡静摩擦维持平衡。连接体重试 a=3.92 m/s²、T=11.76 N，落地前速度 √3.92 m/s，之后绳松而桌面物体匀速，旧共同加速度方程失效。混合力记录示范展示非零积分常数。恢复路径教的是阶段、摩擦和约束变化。 |
| `projectiles`：模型/分量、两次过同高和离面示范 → 独立任务及 Q5/Q1 回补 → `#flight-retry`、`#target-retry`、`#obstacle-retry` → `#later-projectile-check` | (10,10) 目标在初速 14 m/s 时导出 `q²−4q+5=0`，无实发射角；不是把负判别式当计算失误。天花板检查 `4.9<5`，但墙处高度 `3.675<4`，所以仍碰墙。屋面后续题用 g=10 得离面速率 10 m/s、向下 30°、飞行 1 s、水平距离 5√3 m、碰地速率 10√3 m/s、与向下竖直成 30°。帮助分别修复落地事件、可达性和约束的同时满足。 |
| `work-and-energy`：公开功的分量、功率与能量账本及完整示范 → `#energy-level-check`、`#independent-method-choice` → `#energy-level-retry`、`#retry-change-the-structure`、`#power-retry` → `#later-check` | 上坡任务 `v²=36−5.9s`，8 m 标记不可达，停止距离 360/59 m。功率重试得到 k=12、稳定速率约 11.0 m/s，减小后功率 6144 W、做功 122880 J。反馈明确势能零点固定、重力只计一次、能量给速率而不直接给方向或时间；新题分别检验反推量、分阶段及变功率关系。 |
| `uniform-circular-motion`：角速度/径向加速度、受力及完整示范 → `#turning-check` → `#friction-retry`、`#pendulum-retry`、`#surface-retry`、`#orbit-retry` → `#later-check` | 同盘临界角速度 √3.92 rad/s；反求半径上限 0.153125 m。实际摩擦 0.384 N，增大摩擦系数只改变容量。圆锥摆深度 0.6 m，0.8 m 绳可行、0.5 m 不可行。给定 R=2mg 符合相应碗几何，不符合 45° 锥面。另重建轨道半径 9×10⁶ m 与离地高度 3×10⁶ m；检查 contact 示范的法向方向。重试确实分别调用径向合力、几何和接触条件。 |
| `momentum-bridge`：有符号冲量、系统边界、能量说明与双向示范 → `#system-check` 和碰撞任务 → `#system-retry`、`#impulse-retry`、`#collision-retry` → `#later-check` / energy | 冲量重试 J=−2+3=1 N·s，末速度 −0.5 m/s、动能变化 −0.75 J，正冲量不自动增加动能。碰撞重试两支速度 (2,2)、(10,−2)，初动能 9 J，候选动能分别 6 J、54 J；后一支还违反分离方向，不能只靠动量接受。弹簧题总动量零而动能 15 J，帮助解释系统、外冲量与内部储能。页面明确是 MA02/M1.4 回补，不把恢复系数新增为 MA05 必修。 |
| 两个 `mechanics.md`：起点、先修与九课路线 → `#mixed-a/b/c` → `#later-a/b/c` 及各题帮助 | 六题均读完并重建。梁/包裹质心 8/3 m、包裹质量上限 8 kg；平台离边速率 4√2 m/s、飞行 1 s；圆盘需摩擦 1.6 N、容量 1.96 N。稍后碰后上坡题动能损失 12 J、上升高度 2/g m。题目要求判断跨阶段模型或约束，标题没有预告方法；延后题确为可作答任务。最终反馈锚点追加复查见末尾。 |
| `quick-reference`：使用说明、各主题条件/回课链接、`#further-questions`、`#sources-and-scope`；包括新中文页 | 定位为学后查阅，不能代替九课首次教学。四道旧补充题明确标“原出处未核定”，没有改称自拟或已确认官方题；解答标为教学核查，不冒充官方评分标准。倾斜道路翻倒题注明为组合复习，非单独声称 M2.7 必考项。中文保留题干、条件与帮助；允许“提示 Hint”等中英标签，不损害中文帮助。未在本审查中重新认证四题原始出处。 |

**双语、先修和保留项。**所列中文链提供自己的概念解释和具体错误反馈，英文题干、单位、条件及求问方向保留。公开解释包括轻绳与绳长、速度和位置方向、垂距与接触边界、质量加权、停止后的摩擦判断、抛体事件时间、势能零点及径向合力；它们不依赖学生打开独立题答案才能首次学到。课程在使用处链接向量、微分、积分及 AS 力学回补，主题末有前后与课程返回路径。抽查公式中绝对值/条件使用 TeX 分隔命令，长推导用显示公式；源码未将所列关键数学步骤仅放在折叠答案里。

24 页 front matter 的 `layout: subjects`、`grade: a2`、`subject: m2`、`mathjax`、阅读布局及中文 `lang`/`translation_of`/`permalink` 已检查。兼容锚点和反馈目标做源码检查；语言切换、目录实际定位和手机重排由主线程页面验收负责。保护文件的基准、冻结提交及当前规范化文本另作相等比较；散列见末尾。共享 CSS/布局无本轮改动。

**书面标准违例。**在以上明确范围内无已证实项。没有把“未逐题重算”“未由本审查运行浏览器”改写成课程缺陷；这些是审查范围。尤其 §6 第 110–121 行的真实阅读要求不能由本表或脚本结果代签。

**判断型意见 J1，P3，Duplicated Code。**[energy 测试第 121 行](../../scripts/test-mechanics-energy.js#L121)起的 task-panel 验证与 [circular 测试第 143 行](../../scripts/test-mechanics-circular.js#L143)起的验证重复：同一个 `<details>` 提取式，以及两个面板、标签、非空、非嵌套和题干先于帮助的同组断言。两份均为本次实际新增的可执行测试逻辑，和双语教学正文重复无关。这是观察到的维护重复，没有据此声称现有测试行为错误，也不是仓库明文禁止的违例。最小建议：只把这组共同结构规则收为一个小的共享校验函数；题数、锚点、数值/模型验算继续留在各课测试。无需为此引入新框架、类型体系或通用配置层。其余所列 smell 未发现足够证据形成独立可行动项。主线程将本建议作为非阻断维护项延期处理。

**附加测试提交的具体判断。**已读完整 `3066e46..e0d02f3` 差异，不运行测试：

- [bilingual 第 52 行](../../scripts/test-mechanics-bilingual.js#L52)改用 `formula.trim()` 比对生成 HTML，只忽略显示数学片段首尾空白，内部数学文本仍须保留。
- [bilingual 第 33 行](../../scripts/test-mechanics-bilingual.js#L33)逐个中文 `<summary>` 要求至少一个 CJK 字符，允许附英文；这只检查有中文，不声称能验证中文帮助的语义质量。该语义由上面的实际双语阅读另查。
- [chapter10 第 186 行](../../scripts/test-mechanics-chapter10.js#L186)用 `/self-written/i`，仅放宽身份标记的大小写，没有取消身份断言。

未发现这三处产生实质性标准退化。测试仍只能提供其断言范围内的结构证据。

**官方来源的实际阅读。**通过官方 [9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)正文核对资格、版本及 M2.1–7，printed 27–30 / PDF 26–29（均 1-based），没有因 9760 出现而迁移范围。远程 v5.2 通过网页工具阅读，本审查没有取得其原始字节散列。仓库两份旧 specification PDF 正文为 v5.1，没有用它们替代这次 v5.2 范围证据。

直接读取本地 January 2025 配对文件并核对封面：9660/MA05、21 January 2025、90 分钟、80 分；MS 为 Version 1.0 Final。

| 文件 | 实际读取的 PDF 页（1-based） | 用途与边界 |
| --- | --- | --- |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf` | 1、2、3、6、7、8、9、10、12、14、16、17、18 | 核对身份和 Q1、Q3–Q9 所涉及功率、圆周向量、分量/过高时刻、受力/力矩、质心/悬挂、屋面后抛体、碰撞候选解及两次积分的方法背景。没有声称逐页读完整卷。 |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf` | 1、4、5、7、8、9、10、11、12、13、14、15、16、17 | 配对查看相关方法、条件、分支和检查要求，不将自拟任务的检查点当官方分值。阅读为文本提取；公式上标提取有局限，未把它声明为独立 PDF 图形/排版验收。 |

本轮设计卡及 foundations/statics/dynamics/energy-circular/reference 五份实施记录的目标、来源和定位段用于导航。它们的作者复核声明不计入本审查的独立求解证据。

**技术与试用的状态。**主线程/用户报告：同一源码构建 23.742 s，十五项适用检查通过（13 mechanics + frontend + heading）；另报告阅读核对 13 张实际截图，96 views、389 targets、592 个旧正文 IDs、24 页公式滚动及一个中文宽表键盘滚动通过。上述数字不是本审查独立执行的结果，且入口随后细化反馈链接后的主线程技术复查应以其最终记录为准。学习效果仍无本轮目标学生真实作答证据；forces 样章的既有用户阅读认可不扩大为整套课程的学生效果验证。

**最终两个入口的追加复查。**在 `HEAD=e0d02f3442f666947fac84b9731d2e04a81a13d9` 时读取主线程已写入的工作区两页。对比 `3066e46`，每页仅六行反馈中的 URL 新增 fragment：两页共 12 行、22 个链接；去除这些 fragment 后与冻结正文逐字节相同（换行先统一为 LF）。题干、数学、目标、反馈解释及元数据未变。其余 22 页同样规范化后与冻结 Git blob 全部相同。

重新读六组反馈及 10 个不同概念目标的中英文正文，共 20 个落点；不是只检查 ID 存在。前表的六题独立复算继续适用，追加结果如下：

| 入口任务 | 最终目标（同名中英路径） | 实际读到的恢复教学 |
| --- | --- | --- |
| `#mixed-a` | `moments-and-rigid-objects/#equilibrium-under-parallel-forces`；`centres-of-mass/#a-system-of-particles` | EN 第 78 / ZH 第 80 行起解释选支点、保留力平衡和换矩心复核；EN 39 / ZH 41 行起从等效重力矩推出质量加权坐标，明确质量矩单位及符号。符合转动平衡/加权位置的两种错误。 |
| `#mixed-b` | `work-and-energy/#the-work-energy-principle`；`projectiles/#projection-from-a-height` | EN 287 / ZH 289 行起对照两种能量账本，明确重量与势能不得重复计；EN 170 / ZH 172 行起规定以发射点为原点时落地 y=−h、先找实际落地时刻。对应反馈所说的重复计重力与落地高度错误。 |
| `#mixed-c` | `vectors-and-kinematics/#velocity-and-acceleration`；`uniform-circular-motion/#forces-in-a-horizontal-circle` | EN 63 / ZH 65 行起解释逐分量求导、速度模与距离导数不同；EN 130 / ZH 132 行起讲地面惯性系、真实力与径向合力，不能因速率恒定令合力为零。对应求导与方向/受力错误。 |
| `#later-a` | `mathematical-modelling/#connected-bodies`；`newtons-laws-of-motion/#connected-particles` | EN 67 / ZH 69 行起区分系统内外力和单个物体受力；EN 157 / ZH 159 行起讲分体标量方程、绳长约束、张力/反力条件及触地后失效。不是只返回牛顿定律公式。 |
| `#later-b` | `momentum-bridge/#choose-the-system-before-conserving-momentum`；`work-and-energy/#the-work-energy-principle` | EN 57 / ZH 59 行起说明外冲量条件、统一方向和动能与动量不同；能量目标还明确换阶段后重新记账。对应碰撞后错误沿用原动能及系统/符号问题。 |
| `#later-c` | `uniform-circular-motion/#the-conical-pendulum` | EN 242 / ZH 244 行起解释半径 l sinθ、竖直/水平张力分量、非零圆半径条件及深度关系；可直接修复半径和力方向错误。 |

最终两页的 LF 规范化 SHA-256：

```text
d663e50ca4dca90d382dbc562f4a5f8a1a43f1bc42edb6753c246cc1fe923e86  alevel/a2-mathematics/mechanics.md
3071220f04234588752309790c1e50aeb8d01722e05e3b0afc2bdabb4c4d364b  zh/alevel/a2-mathematics/mechanics.md
```

这两份入口内容通过本次追加 Standards 核验；技术验收保持由主线程在其最终版本上记录。后续若仅产生提交而正文散列相同，可用上述散列识别已审内容。

**复核清单与散列。**下面的记录由实际文件/提交内容生成，不采用作者提供的散列作为独立证明。课程与测试使用明确提交的 Git blob 字节 SHA-256；当前 Windows CRLF 文件另按 LF 规范化核对，不将换行差异当内容改动。未提交的设计/作者记录按当前文件原始字节计算，并标明该身份。

**24 份课程源文件在 `3066e46` 的 Git blob SHA-256。**两个最终入口追加散列见上节，其余 22 份当前内容与下表一致。

```text
8679a0c35b161fe22c900158c62c204beaaa1f78f927df2806a2eb5b8348555a  alevel/a2-mathematics/mechanics.md
4251558b8caddfa3c43bf8b2abc3d2608f76a9d742f7546c30e3f5b1f327f619  alevel/a2-mathematics/mechanics/centres-of-mass.md
f77e4abcfbfdef62abffa7fe59c428250e294c117e13a40af1f0465c59e8e680  alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md
64ef32fc17b971c8e0fba9eb0226c07ef7641c59308cc530945ce55b07abf473  alevel/a2-mathematics/mechanics/mathematical-modelling.md
6bb1ebddb8a27eab80ba814c868cba0c8ab6fc8f2aa9162c5f19b763e5f0f83a  alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md
d404cd19edba00434f84464d1d336878801aa935bc1f422ce7b46a64059ef675  alevel/a2-mathematics/mechanics/momentum-bridge.md
a1dcffce386ddb67a06bc21bc078b03162d3b82827c9b774824055234a6d1353  alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md
1ae919c172546288b0c5361155761ff62066af967eb2f56a6baab89a4c0a796c  alevel/a2-mathematics/mechanics/projectiles.md
6915934d768d5384b557e786bcd8f9567157068b46a9e20d0636803bf68c7d95  alevel/a2-mathematics/mechanics/quick-reference.md
e0b58bc82ad055bdace913c4de78fd921f4bcff58e39c2725f58c632ec5c5b43  alevel/a2-mathematics/mechanics/uniform-circular-motion.md
e1e989f4a6582fcce0887e7dad35d50a492d4c1e3590242b6d6d0ef9cab02108  alevel/a2-mathematics/mechanics/vectors-and-kinematics.md
aa87eb7551e12e0060e04f114585442ddd3e7483d9ccefdcea850abc83b847ea  alevel/a2-mathematics/mechanics/work-and-energy.md
60a0a2571d22f0c8ea13aa48ec60fdfb214438d3257eb097485889db6335d169  zh/alevel/a2-mathematics/mechanics.md
9f0461e0f10a304013f79a2c5a05b7087c64b5f0342668b1dfda40e2ef8fd4a4  zh/alevel/a2-mathematics/mechanics/centres-of-mass.md
b021cc1c613ff871b57843b0da839470bca68e3d83bba8e6c481c9af438468a6  zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md
56dbdbfd7b4985f1c38384f5db3d612172e11a1a9a2a80b6189ab376bb9e9253  zh/alevel/a2-mathematics/mechanics/mathematical-modelling.md
bf929cc8b6527517e3319a4f135bce05945905759a02243476e04211be6a4361  zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md
eaeb451eb1d646a58fff2e06ea23f8b3d9ef789e835f71cd763f5ef7f4144f55  zh/alevel/a2-mathematics/mechanics/momentum-bridge.md
62c2692691ec86905dea51ae8d6b138f6627915385b45bd45a62808a5f2400e5  zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md
c0245eb5031681dc604e2b30abe8aeff935f5785f89c66472a262b7947631a7b  zh/alevel/a2-mathematics/mechanics/projectiles.md
d9107ed0ef81293616812cdb8048bd0d50d1f92b415c43f1c0b35108bdfae9b8  zh/alevel/a2-mathematics/mechanics/quick-reference.md
5ebcf512a384ca17b159758de39c6142f3edf760898c8732cb90fa21e877dcd9  zh/alevel/a2-mathematics/mechanics/uniform-circular-motion.md
da8418182236a5505b092ef97e4b3e234a6caabfdfdf04053707775696761d9f  zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics.md
c59c0b0389e67e3936a105fec15f7dc210f1dfb6af13b32be890bf86b309da41  zh/alevel/a2-mathematics/mechanics/work-and-energy.md
```

**12 份实际改动测试在 `3066e46` 的 Git blob SHA-256。**

```text
633408b5587fbb498216ab4cf92b0e24c53d5cd9d47779f93712ae1bb2642216  scripts/test-mechanics-bilingual.js
58a85c6dbfa6527514c1077dee10c23e5b3e976fe1729cb0dc9cfb21a8b321a9  scripts/test-mechanics-centres.js
f52a8fb31c00a91e7b02de0f56ce99aca5b1844923cbf6a5536ff820d531fe94  scripts/test-mechanics-chapter10.js
51b743bf77f5bac71a4b33b95769ee16cba8567922f86f18b4d5fdb0d4c36a7a  scripts/test-mechanics-circular.js
789193886e01a44ce4900c967472d50844866b4f17929429aac9c20823d9d366  scripts/test-mechanics-energy.js
e53aef2cd785879eb49ff9da38c8e77e827ef51f2593296d8afa5779a27bc439  scripts/test-mechanics-moments.js
90240e39317a4eb33b15799c7afd25fd9606cfb852a934091b94cd50f7b38d06  scripts/test-mechanics-momentum.js
b739a08e3d63deffa71fc182a389167428f14a5cc9a156b853acc02bdf477513  scripts/test-mechanics-newton.js
0fb4f5a103a4fe0ec35b61a3d81670987bd154efee1818bdeca4096a7c613080  scripts/test-mechanics-projectiles.js
126f35628ec3ea039a915e821c544a863fee539c9bef0cb3480c8efdfd76005a  scripts/test-mechanics-transfer-foundations.js
a95e521e87e8db867e7e0c033885dc4f14936b86983f6f32d91d01fbc1ce9cd3  scripts/test-mechanics-transfer-motion.js
772eac707dcfc4d895f9af5c25de25e2459dea86147facc68a7b2639c9c83967  scripts/test-mechanics-transfer-statics.js
```

**附加提交 `e0d02f3` 的最终两份测试 Git blob SHA-256。**其余 10 份改动测试与上表相同。

```text
bd032e8e8f2006d13c3e425aa6441cab0364bb5ba799d70988eee6fc4e8fd859  scripts/test-mechanics-bilingual.js
9eb09b3dd80b26efe1e3a59f5bd504cc9dfb3d88baf4e8e111b3bc6842bebf1f  scripts/test-mechanics-chapter10.js
```

**保护文件。**下列 SHA-256 分别从基准与冻结 Git blob 重算，相互相同；当前 LF 规范化内容也相同。前两份正文在课程清单中再次列出以便核对保护边界。

```text
f77e4abcfbfdef62abffa7fe59c428250e294c117e13a40af1f0465c59e8e680  alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md
b021cc1c613ff871b57843b0da839470bca68e3d83bba8e6c481c9af438468a6  zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md
6eac7323645b49d5567668016d6b699f8a27d42867b837110d794dc2a9c94080  assets/img/a2-math-mech/force-components-sample.svg
47ca0485a3dc87d7d8322c88386a0480667749ba0a35e70d99abcd3e882ee100  assets/img/a2-math-mech/wall-friction-feedback.svg
2f586f39b47a9591a2fba1c95c63fb609fdf9f023e8ba5fada3a535b35be97a9  scripts/test-mechanics-forces.js
71c3c526914dfa2676479c8a8579e323a2731f3f62cbb339117e8d1e83e20b08  assets/css/reading.css
81c09234ab53bb04c8d99b25c5665633f5e24330153c0d960289d11428ed9904  assets/css/home.css
4c88ebadb6bfe3f2099664ea7f4d84217731db69c59543f768358510a0112258  _layouts/subjects.html
```

**本次依据文件。**以下四份为 `3066e46` Git blob；与当前 LF 规范化文件相同。

```text
3cb5d9a986d113397e3287c862a2a2060b5d522ffc5a67790edf52527daa371b  AGENTS.md
76d7a62f176de360c777cd88961632523cfbadebfbf497fd0f248af4a0991d4a  docs/agents/course-content-standard.md
486f4eda710dab155d11a507b9da3b0feb93506ef26354e06b9668463872479a  docs/MATH_FORMULA_GUIDELINES.md
a380c1035eda752560af44409188c43b8311132507a00d49def2c853d741be43  docs/agents/codex-collaboration.md
```

**设计/作者记录定位资料。**以下为最终记录时的工作区原始字节 SHA-256；读取其设计、目标映射及来源定位部分，不把整份记录中的作者验收结论视作独立证据。

```text
2f4fce4f7e9cef0ca3af8fb9498a09fa40ff9494625bb8af907ab45ef158f58a  docs/agents/implementation-ma05-full-upgrade-2026-10-25.md
267bc1a8286f004f04cde2c4f8cec3ff90f01d14fbe1e75cb6ce744b5bd48a81  docs/agents/implementation-ma05-foundations-upgrade-2026-10-25.md
a7145767180a7c13084d418dbf8b8d28700ddde40c38f2f5725ee04a8cfab091  docs/agents/implementation-ma05-statics-upgrade-2026-10-25.md
28113022b573497e9cce0882168f9845e6024a7f97702671a62f1097662ae46e  docs/agents/implementation-ma05-dynamics-upgrade-2026-10-25.md
3f20847dddd47f35c1424b1b18427308e6714c308c3a39f26e05da012aa2aba9  docs/agents/implementation-ma05-energy-circular-upgrade-2026-10-25.md
aa3466e4d12d30012b968aa008d422f79382356b4fe5a996bb2624b197e9fb80  docs/agents/implementation-ma05-reference-upgrade-2026-10-25.md
```

**配对官方本地 PDF 原始字节 SHA-256。**

```text
ef179fa0ad6b941f0621d2c5f7c9250aa2401a5fecae2efdd03b7bff5a40c15f  assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf
905ddb74a79246b3728f7f0800e46a05a8d1066ccc9bedb0793bef07a8342195  assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf
```

最终复核：本记录已回读；仅对本文件执行差异空白检查。22 份冻结源、两份最终入口、12 份改动测试及 8 份保护文件的版本/内容比较如上，未执行课程测试、构建或浏览器，也没有新增学生试用结论。
