# MA04 泊松分布样章

2026-10-26；基准 main `da6a642`，分支 `codex/ma04-poisson-sample`。依课程内容长期标准 v1.1，先写设计再写正文。用户确认 MA04 有较多选修者，授权制作，不含推送与发布。

## 设计卡

- 中心问题：平均每分钟三次，为什么不代表每分钟恰好三次？怎样求某段时间内出现指定次数的机会？
- 范围：OxfordAQA 9660 v5.2，S2.1 中的模型条件、区间均值、单点和整数尾部概率、均值／方差／标准差。本样章不是整个 S2.1 或 MA04 的完成声明；独立和、二项近似及其矩的联系留待后续。
- 先修：整数、比例、概率补集和离散变量。具体回补到 AS probability#l18、random-variables#l19、binomial#l21。阶乘和 e 的输入含义在本页解释，不预设学生会泊松公式。
- 核心：随机对象为固定区间的计数；恒定平均率及独立发生为模型假设，短区间成批发生可使模型不适合。区分率 r 与区间期望次数 λ=rt。平均数不是必然结果。概率不等式先列允许整数，再计算。
- 表征：用不同时间长度的均值小表连接单位与公式；不编造观测数据或添加不必要图像。
- 示范：先解释计数，再示范区间换算、exactly 与 at least；方法选择和结果解释完整展开。独立题不标解法。
- 学生任务：模型辨认、区间计算、官方题 4(b)(i)(ii)、矩解释；同目标新重试；稍后未标方法的二项／泊松辨认任务。提示与答案分开关闭，原题英文保留。
- 路径：现有统计入口加入样章起点，保留旧英文笔记全部标题和原锚点；新中文入口如实指向尚为英文的其余笔记。共享样式不改。

| 目标 | 教学位置（新页） | 独立证据 | 反馈／重试 |
| --- | --- | --- | --- |
| 根据情境解释适用与不适用 | model | task-model | model → retry-model |
| 定义计数与区间，选择 λ | interval、example-exact | task-interval、official-task | interval → retry-count |
| 把语言转为整数事件并计算 | probability、example-tail | task-interval、official-task | probability → retry-count |
| 解释均值、方差与标准差 | spread | task-spread | spread → retry-spread |
| 隔后在二项与泊松间选法 | later-review 前连接 AS 二项概念 | later-review | 解答附具体回补及新检查问题 |

## 实际读取的来源

从[当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)核对 9660；正文[大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)的 S2.1（印刷第 25 页，PDF 第 24 页），不是新版 9760。

实际读取本地 [January 2025 QP](../../assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf)封面、Q1(c)、Q4，及[配套 MS v1.0 Final](../../assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf)第 4–5、10–11 页。QP 28 页，封面 Friday 17 January 2025 07:00 GMT，9660/MA04 Unit S2，80 marks；MS 17 页，251xMA04/MS。Q4(b)(i)(ii) 为本次原题，QP 第 12–13 页、MS 第 10 页，分别 2／3 分；不使用涉及指数分布的 Q4(c)。其余课堂情境和题目自拟，无官方分值。

实际渲染目检 [QP Q4](audit-assets/ma04-poisson-sample-2026-10-26/ma04-qp-q4.png)及[MS Q4](audit-assets/ma04-poisson-sample-2026-10-26/ma04-ms-q4.png)，避免抽取顺序把公式、严格边界或时间区间读错。Q4(b)(ii) 原英文从 PDF 第 13 页提取；核验目标为 λ=5、8–12、P(X≤12)−P(X≤7)=0.131（3 s.f.）。Q1(c)仅用作以后近似范围依据，本样章不移植其分值。

## 验收状态

### Standards

Nietzsche 独立阅读长期标准、AGENTS、公式指南、设计卡与双语源码；发现 1 项 P2：延后题的题前说明泄露第二情境的二项模型。移入关闭的提示后复查关闭。无其他未解决规范发现；不要求重构双语教材。[完整记录](review-ma04-poisson-standards-2026-10-26.md)。

### Spec／数学

Peirce 独立核验五项目标与任务，实际阅读本地官方 QP／MS，逐题独立求解并核对双语条件与帮助。亦发现同一项选法泄露，复查关闭；没有其他未解决内容发现。[独算表及边界](review-ma04-poisson-spec-2026-10-26.md)。

两份审查对应提示修补后的内容；后续仅把原有等式分行，未改题目、数字、条件或解法，重复数学／双语检查并实际复验。旧英文参考正文在原有 `# S2 (Statistics)` 之后逐字保留，旧主题入口不删除。中文首页卡片和 MA03 末尾的统计链接现在进入如实标明范围的中文统计入口。

### 技术与阅读

- 最终 Jekyll 构建 25.390 秒成功；Pagefind 1.5.2 生成 300 页、两语言、46,763 词。这里只核实索引生成，未宣称新增完整搜索交互测试。
- 十项适用检查通过：[结果](audit-assets/ma04-poisson-sample-2026-10-26/test-results.json)。包括新 MA04 概率／矩自检、英文题干与数学表达对齐、生成题框／关闭帮助／锚点与本地路径，以及共享入口、语言、阅读、AS 先修与搜索相关检查。最终仅调整公式分行后，再次通过新 MA04 检查及双语 Markdownlint。
- 新 `test-ma04-poisson.js` 接入现有 CI；此为本地通过，不表示远程 CI 已运行。共享首页测试的目的地快照相应更新为新中文统计入口，没有删掉断言。
- 初查新 MA04 测试把解释性单字母出现次数当作数学差异；改为公式集合比较、英文题干仍逐行匹配，另由独立审查核对语义。新增中文入口使旧首页快照失败；只更新该目的地。
- 初次实际路径脚本的语言切换通配符同时匹配旧中文地址，过早读取了即将销毁的页面；改为完整英文 URL 等待。截图的回顶亦改为即时滚动。它们是验收脚本错误，不作为网站缺陷。
- 人工手机截图和宽度检查发现六个展开解答显示式超出局部题框。将连续等号或累计概率差分行；主线、答案和方法保留。最终截图与宽度结果见下方证据。截图只在长组件捕获时隐藏固定导航、两种进度条和回顶控件，正常首屏不隐藏，不改站点 CSS。

最终[浏览器结果](audit-assets/ma04-poisson-sample-2026-10-26/browser-results.json)：中英文入口与学习页 × 390／1365 px × 浅／深色，共 16 视图，均 HTTP 200；默认帮助关闭，实际 Enter 打开／关闭，全部展开后公式错误、页面横向溢出与样章局部长式溢出均为 0。四条实际路径通过：首页→中文入口→样章、语言切换保留题目片段、解答→新重试、重试→具体回补。未将旧英文参考页全部长公式升级为样章标准。

已目检[手机首屏](audit-assets/ma04-poisson-sample-2026-10-26/zh-390-start.png)、[连续完整示范](audit-assets/ma04-poisson-sample-2026-10-26/zh-390-example.png)、[手机原题与展开解答](audit-assets/ma04-poisson-sample-2026-10-26/zh-390-official-expanded.png)和[桌面深色完整示范](audit-assets/ma04-poisson-sample-2026-10-26/zh-1365-dark-example.png)。[初始长式截图](audit-assets/ma04-poisson-sample-2026-10-26/initial-zh-390-official-expanded.png)仅用于记录被修复的局部裁切和截图进度条遮挡，不作为最终验收画面。[最终源码／HTML 清单](audit-assets/ma04-poisson-sample-2026-10-26/source-manifest.json)锁定可复查的工作区版本。

预览为 `http://127.0.0.1:8839/zh/alevel/a2-mathematics/statistics/poisson-distribution/`。内容审查和技术检查通过，保持待学生试用。

### 学生试用及未完成范围

用户确认有较多 MA04 选修者，但本样章尚未获得学生实际作答、提示使用、重试或延后表现，状态为待学生试用。没有实体验证手机／计算器或完整屏幕阅读器／WCAG符合性审查。未重新审核全套旧统计笔记或全 MA04 官方题，不继承为已完成课程。

只制作并本地验收，不推送、不创建 PR、不发布。既有未跟踪 `package.json` 与 `node_modules/` 保留，没有添加依赖或修改共享布局／样式。
