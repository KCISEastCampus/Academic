# FM01／FM02 双语课程实施与交接

日期：2026-10-22。分支：`codex/five-unit-courses-20261022`。本任务直接编辑共享工作区；未切换分支、提交、推送或运行 Jekyll。

## 交付范围与状态

- 已完成 20 组双语学习页，覆盖 9665 v5.2 的 18 个 AS 官方主题；依据完整阅读的 [课程研究与设计卡](research-fm01-fm02-course-content-2026-10-22.md) 第 3、5、7 节实施。
- 每组包含先修入口、目标、直接讲解、模型条件、示范、补步骤任务、独立选法任务、分开的提示与解答、错误反馈和再尝试。新任务均标 self-written／自拟题，无官方分值。
- 双语入口给出依赖路线、普通 AS 先修诊断与混合出口检查；FM02 明确为同一张试卷内纯数 40、统计 20、力学 20 分。
- 原英文长笔记保留作参考，原始标题未改名。中文参考目录保留实际旧 HTML 的全部 **112 个 h1–h4 ID**，其中 **109 个为 h2–h4**，并以 `hreflang="en"` 指回英文同一片段；明确说明旧正文尚未全文汉化。
- 15 幅 SVG 提供实际坐标图、几何、概率树或过程表示；均有 viewBox、title、desc 及非纯颜色的标注。单位圆、Argand 圆和速度三角形使用相等横纵比例。
- 主代理原有的有理式降次、构造数据身份、完整二分链、Euler 精度四项修正保留。仅在本任务允许的英文参考页内另补：未写完的求和结果、假设性压力关系说明、理想弦波模型身份，以及拦截必须同一时间满足两分量。

课程源已冻结；本记录完成后无后续课程源变更。主代理负责最终内容审查、共享构建、TeX／HTML／链接回归和桌面／手机浏览器验收。

## 覆盖与来源映射

下表课名均为文件 stem；每项各有 `alevel/as-further-mathematics/<stem>.md` 与 `zh/alevel/as-further-mathematics/<stem>.md`。两种语言使用相同显式锚点与英文任务题干，公式序列逐项相同。每页来源节给出下表 QP／MS 的具体页码。

| 设计组 | 文件 stem | 官方范围与实施重点 | 已读官方作答证据 |
| --- | --- | --- | --- |
| A1 | rational-functions | FP1.1；三类有理式、图像、直线交点、符号不等式、值域与降次 | FM01 样卷 Q9，QP 12–13／MS 9 |
| A2 | conics-and-loci | FP1.1、FP1.2；四圆锥曲线、等距轨迹、单次平移／伸缩／反射、重根切线与例外 | FM01 样卷 Q10，QP 14–15／MS 10 |
| A3 | trigonometric-solutions | FP1.6；完整分支、整数周期、相位／频率、非特殊值及失根检查 | FM01 样卷 Q8，QP 11／MS 9 |
| A4 | complex-numbers-and-roots | FP1.3、FP1.4；运算、比较实虚部、共轭条件、模辐角、Argand 轨迹、二次根变换 | FM01 样卷 Q2、4、7，QP 3–6、10–11／MS 4–5、8 |
| A5 | series | FP1.5；标准和、改变下限、步长二消项、部分和极限与发散反例 | FM01 样卷 Q1、6，QP 2、9／MS 4、7 |
| A6 | rates-and-approximations | FP1.7；差商极限、弦切线、相关变化率、单位和局部近似误差 | FM01 样卷 Q5，QP 7–8／MS 6 |
| A7 | improper-integrals | FP1.7；零／无穷端点、收敛发散对照、内部奇点分开检查 | FM01 样卷 Q3，QP 4–5／MS 5 |
| B1 | matrix-algebra | FPP1.1；非方阵及三阶运算、转置、仅二阶求逆、逆序与奇异参数 | FM02 Jun24 Q2、5(b)，QP 4–5、11／MS 5、11 |
| B2 | transformations | FPP1.1；基向量、旋转、一般镜线反射、伸缩、剪切、顺序、面积、含截距不变线族与竖线 | FM02 Jun24 Q2、5，QP 4–5、10–11／MS 5、10–11 |
| B3 | linearisation | FPP1.2；常用对数／倒数／幂次选轴、全点作图拟合、参数反变换、构造数据身份 | FM02 Jun24 Q4，QP 7–9／MS 7–9 |
| B4 | numerical-roots | FPP1.3；连续性、完整二分链及误差界、弦插值、Newton 及失效条件 | FM02 Jun24 Q3，QP 6／MS 6 |
| B5 | euler-method | FPP1.3；同步旧点更新、正负步长、解析比较函数、精度与稳定性边界 | FM02 Jun24 Q1，QP 3／MS 4 |
| S1 | bayes | FS1.1；三来源完整概率树、补事件、联合概率与新样本空间 | FM02 Jun24 Q6，QP 13／MS 12 |
| S2 | discrete-uniform | FS1.2；离散支持集、阶梯 CDF、均值方差推导、取整与整数参数检查 | FM02 Jun24 Q8(b)(i)，QP 17／MS 14–15 |
| S3 | geometric-distribution | FS1.3；独立同概率条件、次数约定、尾概率、两矩推导及 p=1 | FM02 Jun24 Q8(a)，QP 16／MS 14 |
| S4 | generating-functions | FS1.4；Bernoulli／二项／离散均匀／几何四种推导、系数、阶乘矩、独立和 | FM02 Jun24 Q7，QP 14–15／MS 13 |
| S5 | linear-combinations | FS1.5；方差展开、协方差符号、反求相关、多独立变量及可实现性 | FM02 Jun24 Q8(b)(ii)，QP 17／MS 14–15 |
| M1 | relative-motion | FM1.1；直接引入二维向量、合速度三角形、成功拦截、最近点几何／时间端点／零相对速度 | FM02 Jun24 Q9，QP 18／MS 16 |
| M2 | dimensions | FM1.2；定义导量纲与单位、幂指数、变量清单假设、无量纲系数与核验局限 | FM02 Jun24 Q10，QP 19／MS 17 |
| M3 | impulse-and-collisions | FM1.3；变力冲量图和积分、系统外冲量、带符号碰撞、固定墙、恢复系数范围、动能变化 | FM02 Jun24 Q11–12，QP 21–23／MS 18–20 |

### 来源身份与边界

- 资格与范围：[当前 9665 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)及其 [specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)，不是新版 9765。研究报告已记录 PDF 正文身份、条目与页码；本次再次读取当前资格页。
- FM01：官网配对的 [specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) 与 [specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf)。QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3、页脚版本不统一；MS 版权 2017，属于样卷，不能称某正式考季 Final MS。研究实际读过 Q1–10 与对应 MS。本轮沿用该实读台账，不宣称重新获取正式考季试卷。
- FM02：仓库 [June 2024 QP](../../assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) 与 [Version 1.0 Final MS](../../assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf)，实际考试日 16 May 2024；研究实际读过 Q1–12 与对应 MS。哈希及原页核验范围见研究 §5.2。
- 新题未复制官方题干或借用官方分值。四种指定 PGF 推导优先完成，旧 Poisson 例保留作附加参考；归纳法、De Moivre、三阶求逆与特征值不作为 FM01 核心。

## 计算核对与专项检查

运行结果：

1. `node scripts/test-as-further-calculations.js`：**通过**，338 项数值／代数比较，另有矩阵、概率、量纲与模型断言。覆盖每个设计组的代表性新计算，包括有限和直接累加、变力积分数值独立核对、复数变换根代回、切点代回、矩阵逆的单位矩阵检查、PGF 卷积及几何矩直接概率求和。
2. `node scripts/test-as-further-course.js`：**通过**，20 对课页／18 个主题；逐项比较两种语言的公式序列、显式 ID、英文 scaffold／independent／retry 题干；检查双语元数据、路线、分开折叠、来源、SVG 可访问元数据及 112 个旧锚点和英文参考链接。英文课页禁止 CJK；不把根入口的既有内容误当全部已翻译。
3. 本任务全部 42 个课程 Markdown 文件：使用仓库现有 markdownlint 配置检查，**通过**。本交接文档同样检查。
4. `git diff --check` 针对允许范围：**通过**。全部 15 幅 SVG 使用 XML 解析器检查格式及 viewBox，**通过**。

代表性独立结果：

- 有理函数极值 `(1,-1)`、`(-2,1/2)`；降次高度 1 可在 `x=-1/2` 取得。约分题仍排除两个原禁值，值域还排除空点高度。
- 两组抛物线切线分别在 `(1,±2)` 与 `(4,±4√2)` 接触；新复数根方程为 `4w²−15w+18=0`。
- 步长二消项无限和 `3/4`；下限 3 的消项无限和 `1/3`，有限式明确整数 `n≥3`。
- 二分五轮保留 `[1.3125,1.34375]`，中点 `1.328125`、误差上界 `0.015625`；没有把外部求根值当作五轮产物。
- Euler 自拟例 `y'=x-y` 在步长 0.2／0.1 下到 x=0.4 分别得 `0.68`／`0.7122`；给定精确比较函数终值约 `0.740640092`，只说明本例比较，不承诺普适误差界。
- PGF 独立和示例的概率 `P(Z=2)=0.18`、均值 `3.1`、方差 `0.57`；由差方差反求的不可实现相关明确排除。
- 拦截例时间 `2√3` s；另一组最近距离为 `√2` m，限制到前两秒后为 `2√5` m；变力墙碰撞冲量 2 N s，允许入射速率区间 `[1,2]` m s⁻¹。

数值有限截断检查不替代极限证明；不等式、定义域、统计条件和物理系统边界也已在课文中写出。专项检查不是所有官方试卷的完整重解或学生学习效果试验。

## 改动文件清单

- 上表 20 个 stem，在中英文各一份，共 40 个学习页。
- `alevel/as-further-mathematics/index.md`、`zh/alevel/as-further-mathematics/index.md`。
- `alevel/as-further-mathematics/diagrams/` 下 15 幅：`rational.svg`、`conics.svg`、`conic-tangents.svg`、`trig.svg`、`argand.svg`、`secant.svg`、`improper.svg`、`shear.svg`、`linearisation.svg`、`numerical.svg`、`euler.svg`、`bayes.svg`、`uniform.svg`、`relative.svg`、`impulse.svg`。
- `scripts/test-as-further-course.js`、`scripts/test-as-further-calculations.js`。
- 本文件 `docs/agents/implementation-fm01-fm02-2026-10-22.md`。

合计 60 个交付文件（包含修改的英文入口）。临时 `_authoring.py` 已删除；无新增运行依赖、布局、配置或其他课程改动。

## 主代理仍需完成

- 在共享源冻结后统一 Jekyll 构建，运行最终版本对应的 TeX、生成 HTML、内部链接、语言切换及共享回归检查。旧锚点 fixture 来自既有生成 HTML；仍需最终构建核对实际渲染结果。
- 桌面与手机实际阅读、SVG 标注与公式溢出、折叠与键盘操作、替代文字及语言切换保留片段的浏览器验收。SVG XML 合法不代表视觉验收完成。
- 教师／学生试用尚未进行；无课时或学习效果验证。未实际操作计算器、考试模式或 CAS 工具，不新增许可或机型验证结论。
- FM01 正式考季原卷仍未获取；当前公式册全文、考官报告等未扩展审计。来源边界沿用研究记录，不冒称完成。
