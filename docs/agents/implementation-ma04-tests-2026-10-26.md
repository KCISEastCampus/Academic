# MA04 S2.6：假设检验与均值检验

2026-10-26；独占：`hypothesis-testing.md`、`mean-tests.md` 的英中四页及本记录。作者自检；不提交、不切分支、不构建、不改共享样式或测试。入口、跨页整合与实际浏览器验收由主代理负责。

## 正文前设计卡

目标资格：OxfordAQA 9660 v5.2，Unit S2 / MA04，S2.6，印刷第27页（PDF第26页）；资格页及2026/07官方PDF已实际读取，未迁移9760。此前S2.1–S2.5在印刷25–26页。遵循长期标准v1.1、公式指南及认可泊松样章。

第一课中心问题：如果原先的参数说法成立，现在的数据是否反常到值得拒绝它？先修为抽样、参数、二项和泊松概率；前课 estimation。用反证式直觉说明证据而非逻辑证明，建立假设、尾部、统计量、显著性、临界域与p；以精确离散模型展开边界与相邻概率。双尾明确采用每尾至多alpha/2的非随机化等尾分配规则，不声称这是离散检验唯一规则。后课 mean-tests。

第二课中心问题：平均数的差距有多大，才超过抽样本身的波动？先修为第一课、正态、估计与标准误；先解释SE，再分别建立总体正态已知方差的精确z、总体正态未知方差的精确t、大样本一般总体已知/未知方差的近似z。说明独立随机样本、有限方差与“足够大”取决于总体形状；不将n=30写成保证。表片段给足临界值；不依赖未验证机型操作。下一步课程入口#mixed-review。

图与数据：本组不强加SVG；尾部用明确整数集合和概率表、均值用SE单位解释。所有教学情境数据为自拟或明确改编，非实测；不移植官方分值。核心示范正常展开，每道独立/重试/延后题各自lesson-check，提示与答案分别默认关闭。

## 目标—教学—独立—重试映射（正文前确定锚点）

同一锚点在两种语言一致。以下位置分别相对于两课正文。

| 目标与官方范围 | 必要先修/回补 | 讲解与示范 | 独立产出 | 判定、错误恢复与新重试 |
| --- | --- | --- | --- | --- |
| H1：S2.6 参数H0给定值、H1与单/双尾，证据及不拒绝含义 | estimation，参数/统计量；本课#evidence | #evidence、#hypotheses | #task-language | 参数不是样本；方向由事先问题决定；#retry-language |
| H2：显著性、统计量、p、临界值/域、接受域 | 概率与H0下分布 | #decision、#binomial-example | #task-regions | 区分观测概率与尾概率、名义/实际水平；#retry-regions |
| H3：精确二项检验、双尾等尾分配、邻边界 | AS二项条件；#discrete-choice | #binomial-example | #task-binomial | 两边各有可取/不可取相邻概率；#retry-binomial |
| H4：精确泊松检验、区间均值与邻边界 | poisson-distribution；#discrete-choice | #poisson-example | #task-poisson | H0平均次数与观察区间一致、选正确尾；#retry-poisson |
| H5：I/II类错误的情境解释，不求II概率 | #evidence | #errors | #task-errors | 同时说明真实状态与决策；#retry-errors |
| M1：SE的含义、总体与样本均值的分布不同 | estimation、normal-distribution | #standard-error | #task-se | 方差除n、SD除根号n；#retry-se |
| M2：正态已知总体方差选择精确z，单双尾、英文情境结论 | #standard-error、hypothesis-testing | #known-normal、#known-example | #task-known | 不因小样本自动选t，比较相应临界值；#retry-known |
| M3：正态未知总体方差选择t、s²、df、英文结论 | 无偏方差；#standard-error | #unknown-normal、#t-example | #task-unknown | s非sigma；df=n−1，尾部正确；#retry-unknown |
| M4：一般总体大样本已知方差z近似的条件与证据 | CLT；#standard-error | #large-samples、#large-example | #task-large-known | 独立/有限方差/样本足够大及近似标签；#retry-large-known |
| M5：一般总体大样本未知方差z近似、条件不足时拒绝机械选法 | CLT、无偏方差 | #large-samples、#large-example | #task-large-unknown | 用s估SE不使偏态小样本变成精确t；#retry-large-unknown |

两课均以#later-review提供收起示范后的混合提取。每个反馈回到具体概念锚点并指向同目标新任务；独立选法题使用中性标题，不在题目前暴露方法。

## 已实际读取的来源与身份

- `assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf`：28页，封面Friday 17 January 2025，9660/MA04，Unit S2，80分。
- `assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf`：17页，MA04 January 2025最终评分标准。
- Q1(b)(i)(ii)：QP PDF 2–3，MS PDF 4。独算B(50,0.2)的P(X≤5)=0.0480272194、P(X≤6)=0.1033982275、P(X≥15)=0.0607220796、P(X≥16)=0.0308034228；CR≤5或≥16，实际水平0.0788306422；17拒绝。课内重排为完整教学示范，标改编。
- Q1(d)(i)(ii)：QP PDF 4，MS PDF 5。独算Po(4)的P(W=0)=0.0183156389、P(W≤1)=0.0915781944；CR={0}，观察1不拒绝。课内教学示范标改编。
- Q3：QP PDF 10（续答11），MS PDF 9。独算均值220.5、SE=30/√10、z=1.6338434578、右尾p=0.0511458623，低于临界1.644854，不拒绝。课内重述标改编。
- 实际核对QP Q6 PDF16–19与Q8 PDF22–23，二者不是t检验；本卷t题是Q7，QP PDF20–21，配套MS PDF15–16。课内Q7重述标改编，保留全部8个数据、正态条件与方向，补明独立抽样假设。独算结果在正文完成后复核。

以上按用户指定Python与pypdf读取，stdout设UTF-8；不凭文件标题推断试题。大纲与题目不要求计算II类错误概率，本组不添加该要求。

Q7十进制独算：Σx=71.87，Σx²=645.6661，均值8.98375；离差平方和0.0039875，s²=319/560000，估计SE=0.00843832667908，t=−1.92573724839；df=7，−1.894579为5%下尾边界，拒绝。没有把用s²代替总体方差后的均值分布误称精确已知方差正态分布；使用正态总体下精确t结果。

## 作者完成与源码复核

四页已写完。每课11个互不嵌套的独立题框（5个目标任务、5个同目标新重试、1个延后任务）；这只是结构记录，不是以题数代替目标验收。hypothesis-testing另有2个正常展开示范；mean-tests另有3个展开示范，其中大样本示范分已知/未知方差两种情境。

- 双语hypothesis-testing各13条完整相同的`Question:`、19段相同TeX；双语mean-tests各14条相同`Question:`、23段相同TeX。题目条件、数值、可用帮助、方法及结论逐段对应；英文情境结论在中文答案中保留并解释。
- 全部同页片段目标存在且唯一；22个/23个稳定锚点在英中对应。全部题框各有1道题、2个分别关闭的提示/答案；section、details、div开闭配对。没有新增脚本、依赖、共享样式或测试文件。
- 独算核对Q1双尾边界及实际水平、精确泊松边界、全部自拟二项/泊松表值、双尾p。独立任务#task-binomial补上双尾p=0.0818504，#retry-binomial改为新的对称分布B(10,0.5)：CR≤1或≥9、实际水平0.021484375，观察8的双尾p=0.109375，不拒绝；同目标再次检验分尾、相邻边界、实际概率及p，而不只换数字。
- Q3用erfc独算正态尾；Q7用Decimal原始数据和离差平方和复算。其他均值任务分别为z=−1.2、t=2.108185（9df双尾不拒绝）、z=2、z=−2；新重试为z=3、t=−2.449490（5df下尾拒绝）、z=−2、z=2。
- 本课所有z临界值用erfc核对；t表5/7/9df、0.05/0.025上尾，用标准库gamma写出的t密度与20000区间Simpson积分独立核验，尾概率误差小于6×10⁻⁸；未安装scipy或其他依赖。
- 按窄屏分开二项模型名与概率式，将概率乘积分行，均值答案中的s与SE分行；这属于预防性源码调整，不是274px实测结果。

H1–H5及M1–M5的讲解、独立任务、同目标新重试全部按上表落位；均值独立题使用中性标题，分别要求自己选方法、写条件和英文情境结论。总体不正态小样本的限制在#task-large-known、#task-large-unknown及#review-methods被独立检验。入口综合/延后题由主代理制作，本组仅连接其已约定#mixed-review、#later-review。

### 稳定锚点供交叉审查

`hypothesis-testing`：evidence、hypotheses、decision、discrete-choice、binomial-example、poisson-example、errors、practice、task-language、task-regions、task-binomial、task-poisson、task-errors、retry、retry-language、retry-regions、retry-binomial、retry-poisson、retry-errors、later-review、review-decision、next-step。

`mean-tests`：standard-error、critical-values、known-normal、known-example、unknown-normal、t-example、large-samples、large-example、practice、task-se、task-known、task-unknown、task-large-known、task-large-unknown、retry、retry-se、retry-known、retry-unknown、retry-large-known、retry-large-unknown、later-review、review-methods、next-step。

### 作者冻结快照

2026-10-26，作者冻结上述四页及本记录；冻结意为停止作者编辑，供主代理确认与交叉审查，并非文件只读属性。未git提交/切分支；未运行构建或既有测试。冻结时四页SHA256：

| 文件（统计目录下） | SHA256 |
| --- | --- |
| alevel/.../hypothesis-testing.md | `3cf63d333aa750e26cdad90a760a04269ea058047c7abe226619759945beb355` |
| zh/alevel/.../hypothesis-testing.md | `aebcdcb5476d769e47058e198be73f17013ddd9d6b21a0500458d909d6b7c654` |
| alevel/.../mean-tests.md | `562d08a524ec54345a77ca0ed7e39c25beb437d73450de0a0335a0404c6fbb4a` |
| zh/alevel/.../mean-tests.md | `ea5e7a6fa6e452c3ca2856541e3b776e5b9a0441745ceaf94cf9444266eacc17` |

后续独立审查Poisson/exponential由用户另行确认作者冻结后才开始；当前尚未开始，不预先给出审查结论。

## 验收状态

作者内容及双语源码复核完成并冻结，待交叉独立审查，不冒充独立审查通过。构建、生成HTML、桌面/手机、主题、键盘、语言切换、学生试用均待主代理整合后核验；分行按约274px答案框预防设计，不据源码声称浏览器实测通过。
