# MA04 泊松补全与指数分布：制作记录

2026-10-26；依据课程长期标准 v1.1。独占五个文件：中英文 `poisson-distribution.md`、中英文 `exponential-distribution.md`、本记录。保留泊松已认可主线、原题和全部旧锚点。不提交、不切分支、不构建、不改共享 CSS、测试、依赖或他人文件。

## 正文前设计卡

资格：OxfordAQA Mathematics 9660 v5.2，MA04 / S2；不是 9760。已打开当前资格页及其官方 PDF，核对正文版本与 S2.1（印刷 25 / PDF 24）、S2.3（印刷 26 / PDF 25）。

泊松中心问题：怎样把几个计数合并，以及何时能用泊松简化大量小概率试验？先修是已认可主线与 AS 二项分布；独立和用结果不证明，二项极限用固定 np 的均值方差解释，不要求正式分布极限证明。保留计数条件、区间换算、整数事件、均值方差原有独立题和重试。新增累计表解释、完整合并与近似示范，独立题须判断是否可以合并或近似，不在题标题指定方法。

指数中心问题：同一事件流，怎样从“数几次”转向“还要等多久”？先修是泊松零次数、连续密度面积、定积分、指数与对数；前驱 continuous-random-variables，后继 normal-distribution，只链接正文起点。用率 r 表示单位时间事件数，lambda=rt 只表示所选区间均值。核心是零事件桥、CDF、密度积分、均值方差标准差、反求率及等待阈值。CDF 从零事件建立，密度积分展示原函数及上下限；矩引用大纲允许的结果，不强迫超纲证明。正文不加入记忆性拓展，以免挤占核心学习路线。

图与数据：使用构造情境，明确自拟；不伪称实测。不增加仅作装饰的图；连续面积的含义与积分边界直接联系。提示与答案分别默认关闭，每题自己的 lesson-check；示范正常展开，长式按手机答案框分行。

## 目标—教学—独立—重试映射（先于正文确定）

以下锚点在两版保持一致；独立输出后按答案中的具体错误回到教学锚点。

| 目标与范围 | 教学 / 示范 | 独立产出 | 判断与同目标重试 |
| --- | --- | --- | --- |
| S2.1 条件、区间、整数事件、矩（保留） | model / interval / probability / spread | task-model / task-interval / official-task / task-spread | 旧 retry-model / retry-count / retry-spread 保留 |
| S2.1 独立泊松和及条件 | independent-sums / example-sum | task-sum | 总量分布与零事件概率；识别共同事件造成依赖 → retry-sum |
| S2.1 二项极限、近似条件、公式与累计表 | binomial-limit / example-approx / table-use | task-approx | n大p小、参数np、整数边界、近似号 → retry-approx |
| S2.1 从二项矩解释泊松矩 | moments-limit | task-limit | 固定np、方差中的1-p、SD平方根 → retry-limit |
| S2.3 等待变量与适用条件、零次数桥 | waiting-model / zero-bridge / example-wait | task-bridge | 区分次数和时间、单位一致、常率独立单次 → retry-bridge |
| S2.3 CDF、密度与积分概率 | cdf-density / example-area | task-area | 面积非高度、上下限与累计差、连续端点 → retry-area |
| S2.3 均值方差SD及反求率 | moments / example-moments | task-moments | 率与平均等待互为倒数、方差单位平方 → retry-moments |
| S2.3 指定概率反求等待阈值 | quantiles / example-quantile | task-quantile | 尾部/累计方向、对数与正阈值 → retry-quantile |
| 两课连接、延后独立选法 | 已有主线与本轮新增 | later-review 各自独立题框 | 不给模型名，答案指具体回补和相应重试 |

## 实际来源阅读

- 当前资格页：<https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/>
- v5.2 大纲：<https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf>
- 本地 `assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf`：pypdf 确认 28 页；封面 9660/MA04 Unit S2，17 January 2025，80 marks。实际读取 Q1(c) PDF 3；Q4 全部 PDF 12–13。
- 配套 `assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf`：17 页，Version 1.0 Final；实际读取 PDF 4–5（Q1c）、10–11（Q4）。Q1c 要求 n 大、p 小，80×0.05=4。Q4a 概率比约去指数后 lambda³=125/8，lambda=2.5；Q4bi=0.0293，bii 新均值5、累计差=0.131；Q4c 率1/3每分钟、等待超过5分钟=exp(-5/3)=0.189。
- 泊松原题 Q4(b)(i)(ii) 原样保留。指数课采用 Q4(c) 的完整共享情境与该小问，标明原题及实际配套 MS；其余为自拟，不借用官方分值。

## 检查状态

作者制作与自检完成，2026-10-26 冻结。冻结后本作者不再编辑这五个文件；“冻结”表示停止作者写入，不表示独立审查或技术验收已经通过。

- 范围：泊松补齐独立和、二项极限/近似、矩的极限解释与累计表使用；原有计数条件、区间、概率、矩和 Q4(b)(i)(ii) 保留。指数覆盖 S2.3 全部条目，补反求时间应用，不强制记忆性或矩证明。
- 学科作者复算：Q4(a) 的概率比在 lambda=2.5 时为 125/2688；Q4(b)(i)=0.029252688076961072，(ii)=0.13135282244257027；Q4(c)=0.18887560283756183。Q1(c) 的 80×0.05=4 与 MS 一致。新增近似示范：精确二项值 0.5945365770009255，泊松值 0.5939941502901619；指数示范/独立/延后区间值分别 0.302440604864197、0.38340049956420363、0.23254415793482963；反求门槛及中位数另用对数独算。矩极限检查保持 np 固定，有限模型的方差仍含 1-p。
- 双语作者核对：两课分别全部 `Question:` 题干一致，全部行内及显示 TeX 按出现顺序一致；官方题英文共享情境和后续小问也逐段对应。中文说明解释变量含义、单位、条件、选法和检查，不只对译术语。
- 源码检查：两课中英文同页锚点唯一、引用可定位；泊松全部 18 个旧显式锚点保留。每个独立题及重试都有自己的 lesson-check，内含两个分别默认关闭的提示/答案；没有题框/答案框嵌套。HTML 容器和 TeX 括号配对正常，无控制字符；长答案公式按步骤分行，指数重试中跨越负时间的区间另拆一行。
- 链接检查：课程链接只到现有页面或本轮七课；本轮跨课不猜片段。已有 AS 回补片段实际在目标源码中存在；试卷和 MS 本地文件存在。相邻课程正文起点链接由主代理整合七课后验收。
- 教学阅读作者检查：两个来源先换区间均值再合并；二项近似先查原模型再查 n/p；指数先定义变量和单位，再用零事件、面积或累计差选法。新独立题标题保持中性，提示及答案关闭；答案分别指向具体概念和新重试，later-review 检查换情境后的选法。只有作者自检，尚无独立审查证据。
- 未执行：用户明确排除的 git 提交/切分支、构建、仓库测试、共享样式/测试修改与依赖变动均未执行。生成 HTML、桌面/手机真实重排、深浅主题、键盘及语言切换未检，由主代理接续；源码分行不能代替 274 px 答案框的实测。学生试用未进行，不宣称学习效果。

### 冻结正文校验值（SHA-256）

| 文件 | SHA-256 |
| --- | --- |
| alevel/a2-mathematics/statistics/poisson-distribution.md | `0a8888becc41c37952ab81222cf6c096f8a3550a22572da38c3eade611d96c87` |
| zh/alevel/a2-mathematics/statistics/poisson-distribution.md | `2d5bd5944cb3f55daf7407ac0347b843fd012dcac0ccd0b6926cb666f3885ad3` |
| alevel/a2-mathematics/statistics/exponential-distribution.md | `c3ec38073661702882494b84beecf70dcba6a44db30f8a03b3ce128d152608e1` |
| zh/alevel/a2-mathematics/statistics/exponential-distribution.md | `fe0d99cdcb1897fae7acc4644e8b2b87ec5dcafa98ad6ed6e7597ccef91393e7` |

后续任务：用户要求独立审查其他作者的 hypothesis-testing / mean-tests，重点 S2.6 逐条覆盖、独算、题目泄露和复核条件；须等待用户确认作者冻结后才开始，目前未开始该审查。

## 独立审查 F1 后的恢复补齐（主代理）

两版 retry-bridge 保留距离／计数计算，新增另一电缆同平均数但成簇缺陷的过程判断。学生须重新判断恒定率／独立／单次发生条件，不能靠给定 Poisson process 完成模型恢复。解答说明平均数不足以证明模型，回补 waiting-model，并连接另一种过程的泊松条件新题。修改等待原审查者复核，不继承旧冻结哈希。
