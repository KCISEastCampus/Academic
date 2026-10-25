# MA05 能量与匀速圆周运动实施记录

日期：2026-10-25。分组作者在共用工作区 `D:/GitHub/Academic` 直接编辑；分支 `codex/ma05-full-upgrade`，起始 HEAD `d1e93ec`。用户已认可 forces 双语样章，并明确授权本组局部扩充；不另开样章审批。

## 写集与检查边界

- 课程：`alevel/a2-mathematics/mechanics/{work-and-energy,uniform-circular-motion}.md` 及 `zh/` 对应四文件。
- 测试：`scripts/test-mechanics-energy.js`、`scripts/test-mechanics-circular.js`。
- 记录：本文件。保留旧题、公式、条件、旧 ID 和共享组件；只增加本组需要的解释、任务、反馈及路线。
- 不写 CSS/layout、入口、quick-reference、forces 文件或其他组页面，不写共享测试；不构建、不切分支、不提交、不推送、不安装依赖，不修改未跟踪 package/node_modules。
- 已读 AGENTS、RTK、课程内容长期标准 **v1.1**、公式指南、双语 forces 样章。复用 `reading_layout: true`、完整公开 `worked-example`、每题单独 `lesson-check` 与分别默认关闭的 Hint/Solution。
- 入口由主线程维护，本组使用 `/alevel/a2-mathematics/mechanics/#mixed-problems`、`#later-review` 及中文对应路径；本章仍提供可直接作答的同目标新重试。

## 来源身份与本人实际阅读

1. 从 [9660 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)点击 specification，核对 [PDF 正文 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。M2 全范围为 **printed 27–30 / PDF 26–29（1-based）**；本组 M2.6 为 printed 29 / PDF 28，M2.7 为 printed 30 / PDF 29。不是 9760。主线程提供的页码校正与本人读取的正文一致。
2. 本人使用 bundled Python **pypdf** 读取本地 `assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf`（24 页）与配对 `...-mark-scheme.pdf`（17 页）。QP 封面：Tuesday 21 January 2025、9660/MA05 Unit M2 Mechanics、90 分钟、80 分、默认计算器答案两位有效数字、题内另有精度依题意、g=9.8。MS 封面：January 2025、Version 1.0 Final；另读 MS PDF 3 的缩写说明。未声称本轮重新下载本地真题。

| 实际读过的题与页面（PDF 1-based，题卷印刷页同 PDF） | 配对 MS 页面 | 需保留的关键方法／条件 |
| --- | --- | --- |
| Q1(a)–(c)，QP 2–3 | MS 4–5 | P=Dv 的 D 是驱动力；R=kv^(9/4)，用 P/v−R=ma；show k=6.53 前保留至少 4sf 或精确值；恒速段阻力功为 Rvt；最大稳定速率用合力为零 |
| Q3(a)、(b)(i)(ii)，QP 6–7 | MS 7–8 | 竖直 R=mg；不滑动需要 mrω²≤μmg，只在界限取等号；show ω=3.83 先给未舍入值；位置逐项求导后 F=ma，摩擦为实际水平向量 |
| Q7(a)–(c)，QP 14–15 | MS 13–14 | 光滑屋顶、无空气阻力，2.5sin40° 是竖直落差；(a) 明确指定能量法；离开后另立抛体阶段，不把屋顶反力延续；(c) 相对向下竖直的方向须用速度分量，能量只能给速率 |
| Q8(a)–(c)，QP 16–17 | MS 15–16 | 初末动量带方向，X 的末动量可正可负；分别求两个球动能并相加；动量守恒不推出动能守恒；不引入恢复系数必修 |

研究记录仅帮助定位，本轮上述 QP/MS 页已本人直接读取。页面中的题目仍为 **Self-written / 自拟题**，无官方分值。保留旧自拟题的三位有效数字约定，与真题默认两位有效数字分开。

## 写正文前的设计卡

### Work and Energy

中心问题：不用逐秒追踪运动，怎样判断一个力转移了多少能量、物体能否到达某处，以及发动机在当时能怎样改变运动？

先修：解简单方程、直角三角形、速度向量的大小、Newton 第二定律、摩擦方向；碰撞综合另回动量桥接。回补链接落到本页的角度／能量账本及 forces、vectors、Newton 的具体段落。

核心模型与条件：质点，地表恒定 g，固定零势能面；恒力的功只取沿位移分量；选择全力功=ΔKE 或非重力功=Δ(KE+PE)，重力只计一次。滑动摩擦和发动机是机械能转移；P=Dv 是当时驱动力的功率，v>0 才可除以 v。光滑固定导线的约束力不做功；穿珠与单侧接触不同。竖直导线只做能量，不作为非匀速竖直圆周受力必考。

表征用途：保留斜拉分量图、斜坡高度图、穿珠图，分别服务夹角、垂直高度、约束；不用新装饰资产。八个旧示范公开呈现选法、关键步骤、结果与检查，随后学生作答。提示只指方向，完整解答另折叠。

| 目标／范围 | 讲解与示范 | 独立产出 | 判据、回补与同目标新重试 |
| --- | --- | --- | --- |
| E1 恒力功的夹角、正负与 by/against（M2.6） | `#work-done-by-a-force`、Example 1 | Q1 | 夹角从位移量起，阻力功为负、克服阻力为正；错则回该段，做 `#work-retry` 的反向位移 |
| E2 由向量速率求 KE、选择固定 PE 零点并解释不变量（M2.6） | `#kinetic-and-potential-energy`、Example 5 | Q7、`#energy-level-check` | KE 非负，PE 可负，改变零点不改差值；回该段后做 `#energy-level-retry`，换零点与运动方向但保持比较对象 |
| E3 全力功与机械能账本、摩擦／重力／驱动、分阶段及可达性（M2.6，连接 M2.4） | `#the-work-energy-principle`、Examples 6–7 | Q2、Q3、Q5、Q6、`#independent-method-choice` | 重力只计一次，滑动方向与功号一致，负 v² 拒绝该阶段；回账本与对应示范，再做 `#stage-retry` |
| E4 判定机械能守恒、求高度／速率并识别约束与方法局限（M2.6） | `#conservation-of-mechanical-energy`、Example 8 | Q7、Q8 | 明确哪些力不做功；能量不单独给方向／时间／接触；回守恒段后做 `#conservation-retry` 的非竖直抛体 |
| E5 平均／瞬时功率、驱动力与合力、定功率稳定速率（M2.6，连接 M2.4） | `#power`、`#vehicles-on-inclined-roads`、Examples 2–4 | Q4 与其新增恒速时间段 | 正确区分 P=Dv 与 mav；平均用总功除时间，稳态令 a=0；回功率段后做 `#power-retry` 的变阻力与反求速度 |

下一课明确接匀速圆周，以“合力存在但不增加 KE”提取本页；完成下一课后再做本章 `#later-check`，并接入口混合题／稍后回顾。各目标的任务分别核查，不以总题数代替覆盖。

### Uniform Circular Motion

中心问题：速率没有增加，为什么仍需要力？怎样从真实受力判断某个圆周运动能否维持？

先修：力分解、静摩擦上限、F=ma、三角形、分量微积分、能量课的“速率与速度”区别。核心概念直接展开，先用切线速度与指向圆心的变化建立径向加速度，再列力方程。

核心模型与条件：地面惯性参照系；水平匀速圆周的竖直合力为零、径向合力为 mrω²；向心合力不另加一股力。绳只能拉、轻绳与光滑孔的同绳张力、静摩擦需求不超过上限、支持面只能推。圆锥摆要 r>0 与 lω²>g；球碗和圆锥区分几何中心、轨道半径与法向方向。中心引力圆轨道不用地表竖直平衡。

表征用途：保留切向速度／径向加速度、圆锥摆、球碗、升起接触、圆锥原图；每幅图与对应分量方程相邻。保留九个旧示范和十一道旧题，扩充独立解释与同目标重试，不把所有课做成统一固定栏目数。

| 目标／范围 | 讲解与示范 | 独立产出 | 判据、回补与同目标新重试 |
| --- | --- | --- | --- |
| C1 转数／周期换角速率，区分角速度与线速率（M2.7） | `#angular-speed-and-angular-velocity`、Example 1 | Q1、Q9 | rad/s、r 到转轴、同 ω 不同 v；回该段做 `#rotation-retry`（由周期反求并比较不同半径） |
| C2 匀速仍加速、以位置／速度／加速度证明圆与方向（M2.7） | `#radial-acceleration`、Example 2 | Q2、`#turning-check` | 定距证明圆、恒模证明匀速，向心方向相对圆心；回该段及向量先修，做 `#vector-retry`（由位置求导） |
| C3 选择真实力、分开竖直与径向、绳与断裂约束（M2.7/M2.3） | `#forces-in-a-horizontal-circle`、`#connected-particles-and-different-radii`、Examples 3、5 | Q3、Q5、Q9 | 不加“向心力”，不误设 P 平衡，外绳对内粒子向外；回对应段后做 `#radial-retry`，检查线速率建议与断裂 |
| C4 静摩擦需要量、上限与可行范围（M2.7/M2.3） | `#friction-and-road-bends`、Example 4 | Q4、`#independent-method-choice` | 需求与 μR 分开，检查两侧边界，不以质量比较安全；回摩擦段做 `#friction-retry`（反求允许半径） |
| C5 圆锥摆几何、分量与非零半径条件（M2.7） | `#the-conical-pendulum`、Example 6 | Q6 | r=l sinθ，T cosθ=mg，不接受 cosθ>1 或 r=0；回该段做 `#pendulum-retry`（固定 ω 比较绳长） |
| C6 法向方向、曲面几何及单侧接触限制（M2.7 应用） | 球碗／接触／圆锥段、Examples 7–9 | Q7、Q8、Q10、`#cone-check` | 正确分量与几何，R≥0，升起用 R=0；回对应段做 `#contact-retry` 和 `#surface-retry`，不把整组摩擦错误交给不同目标的接触题 |
| C7 中心引力圆轨道与半径（M2.7） | `#circular-orbits` | Q11 | 半径从中心起算，用轨道处 g，只有引力不另加支承力；回该段做 `#orbit-retry`（由速率与加速度反求高度） |

本章完成后接入口混合题；稍后回顾从 `#later-check` 开始，提取零功／非零合力并回到入口 `#later-review`。各应用属于同一径向牛顿定律的迁移，不把球碗／圆锥命名为新增官方必考模块。

## 最终实施与本组核验

**状态：本组源码与测试已完成并冻结。** 设计卡和目标映射先写入，再修改课程。以下是实际完成结果，不能替代独立内容审查或全局浏览器验收。

### 实际改动

本组只修改以下 7 个仓库文件：

1. `alevel/a2-mathematics/mechanics/work-and-energy.md`
2. `zh/alevel/a2-mathematics/mechanics/work-and-energy.md`
3. `alevel/a2-mathematics/mechanics/uniform-circular-motion.md`
4. `zh/alevel/a2-mathematics/mechanics/uniform-circular-motion.md`
5. `scripts/test-mechanics-energy.js`
6. `scripts/test-mechanics-circular.js`
7. 本实施记录。

- 能量页保留 8 个原示范、8 道原练习、原综合与分阶段重试；补充反向位移、两处零点对齐、变阻力功率和非竖直抛体。共 **8 个公开 worked-example、15 个各自独立的 lesson-check**。
- 圆周页保留 9 个原示范、11 道原练习、原转盘综合与接触重试；补充速度改变方向的解释、由位置求导、断绳限制、反求允许半径、比较两条绳、圆锥独立题、法向反力观测检验及反求轨道高度。共 **9 个公开 worked-example、22 个 lesson-check**。
- 四页启用阅读布局；核心概念直接展开。每道学生任务只有一对独立、默认关闭的提示／解答，题干在先；题标题用情境语言。保留全部旧显式／原自动 ID，增加恢复锚点，`stage-retry` 与 `contact-retry` 是原重试 ID 的补充别名。
- 每道原练习解答后都有回到具体讲解的链接及同目标新重试。新题反馈指出错误原因、检查或回补位置。保留原图和替代文字，没有新增课程资产或共享样式。
- 来源区移到页末，记录实际 QP/MS 页码、范围与精度区别。QP 2、6、14、16 另用 Poppler 渲染并亲自视觉核对：Q1 指数为 9/4、Q3 半径 0.3m 与转轴、Q7 屋顶 2.5m／40° 与离屋顶后 6m 竖直落差、Q8 两球初动量同向。图像仅作来源核验，保存在本机 visualization 目录，不加入课程。
- 下一步接圆周课／入口混合题，延后任务指向本页的具体新任务及入口 `#later-review`。入口与跨组页面由主线程维护。

### 数学核查

保留原两项脚本中全部数值、导数、能量／牛顿交叉核查和几何／可行性断言。只把尾部依赖 `_site` 的旧 HTML 数量检查改成源码结构约束，并补入新任务核算；没有删除数学保护。

| 核查对象 | 独立核算／模型检查结果 |
| --- | --- |
| January 2025 Q1 | k≈6.5295；18m/s 恒速 30s 的阻力功≈2,353,082.432J；最大稳定速率≈28.39304389m/s；分别由 P/v−R=ma、Rvt、合力为零核验 |
| January 2025 Q3 | 最大角速率≈3.834057903rad/s，检查界限两侧；ω=3 的加速度大小 2.7m/s²、实际摩擦大小 54N，小于上限 88.2N；分量向量与配对 MS 一致 |
| January 2025 Q7 | 竖直落差 2.5sin40°；离屋顶速率≈5.612182541m/s；再用离屋顶后的 6m 落差得撞地速率≈12.21051157m/s；角度不由能量单独给出 |
| January 2025 Q8 | 初总 KE=97.785J；两个末动量分支分别给末总 KE=60.489J、86.121J，损失 37.296J、11.664J；同时检查带方向总动量一致 |
| 能量新题 | 返回路段总功=−15√3−8≈−34.0J，竖直 R=12.1N>0；零点变更不改 ΔME；变阻力 k=12、最大稳定速率≈11.0m/s，8m/s 段需 6144W<16000W；非竖直抛体最高点仍有 5m/s，最大升高=360/49m |
| 圆周新题 | 位移向量用有限差分交叉核对速度，验证定距、恒速、a·v=0 和相对圆心的加速度；3.2m/s 拟议运动需要 5.12N>4.5N，边界线速率 3m/s；允许半径 0.153125m，检查边界两侧 |
| 几何与轨道 | 圆锥摆要求深度 0.6m，0.8m 绳可行、0.5m 绳不可行；60° 圆锥 R≈2.26N、ω≈3.76rad/s、z≈0.231m；报告的 R=2mg 在所给球碗可行，在45°圆锥不满足竖直平衡；反求卫星 r=9×10⁶m、高度3×10⁶m，周期3000πs |

作者已重新走读关键推理、方向、系统、约束和目标任务对应。这里只能标记为**作者自检完成**，未另调独立审查者，不标“独立内容审查通过”。穿珠阈值原有“渐近到顶、通过需更大初速”条件完整保留；未将非匀速竖直圆周受力当作 MA05 必修。

### 实际测试结果

执行以下两项，均 **exit 0**：

```text
node scripts/test-mechanics-energy.js
work-and-energy: bilingual 380 TeX fragments, 290 unique TeX renders,
15 task boundaries; original/new numerical/model and source structure checks passed.

node scripts/test-mechanics-circular.js
uniform-circular-motion: bilingual 495 TeX fragments, 363 unique TeX renders,
22 task boundaries; original/new numerical/model and source structure checks passed.
```

使用与共享 bilingual 脚本完全相同的数学提取正则，**完整序列逐段 deepEqual**，不是只比数量。主线程提醒后修复能量中文缺少的两处行内符号与圆周中文两处顺序差异，保持自然中文。英文 `Question` 行及完整旧练习题干、分段英文条件均匹配。

其他源码检查：原锚点与本页恢复链接存在、显式 ID 不重复、图路径与双语图序列一致、SVG title/desc 保留、每题提示／解答各自闭合且不嵌套、示范没有折叠答案、题干帮助前没有 boxed 答案。MathJax 使用仓库现有 vendor 运行 Node 转换，检查 merror／data-mjx-error；不读生成 HTML，不安装依赖。

限定六个源码／测试文件的 `git diff --check` 已通过。没有运行共享 bilingual/transfer 或全站测试。

### 冻结点与主线程剩余验收

课程／测试冻结 SHA-256：

| 文件 | SHA-256 |
| --- | --- |
| EN work-and-energy | `AA87EB7551E12E0060E04F114585442DDD3E7483D9CCEFDCEA850ABC83B847EA` |
| ZH work-and-energy | `C59C0B0389E67E3936A105FEC15F7DC210F1DFB6AF13B32BE890BF86B309DA41` |
| EN uniform-circular-motion | `E0B58BC82AD055BDACE913C4DE78FD921F4BCFF58E39C2725F58C632EC5C5B43` |
| ZH uniform-circular-motion | `5EBCF512A384CA17B159758DE39C6142F3EDF760898C8732CB90FA21E877DCD9` |
| test-mechanics-energy.js | `789193886E01A44CE4900C967472D50844866B4F17929429AAC9C20823D9D366` |
| test-mechanics-circular.js | `51B743BF77F5BAC71A4B33B95769EE16CBA8567922F86F18B4D5FDB0D4C36A7A` |

本组无已知未完成课程目标；**尚待主线程**进行独立内容审查、构建、生成 HTML、桌面／手机、键盘、语言切换、跨组链接及共享整合测试。用户明确要求本组不等待这些工作，故不重复执行，也不写成通过。所有英文／中文源码数值、题干与帮助的一致性已在冻结前检查。

学生试用未进行；作者模拟解题和源码／MathJax 通过不能作为学生学习效果证据。未提交、推送或发布。冻结后本组停止改动以上课程与测试，后续由主线程整合。
