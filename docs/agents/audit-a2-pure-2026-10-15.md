# A2 Mathematics Pure 全量内容审查（2026-10-15）

## 结论与边界

审查对象是现有 **OxfordAQA Mathematics 9660 / MA03 / Pure Mathematics P2**，不是新版资格 9760。共逐页阅读 **17 个英文源文件及其 17 个中文对应文件，合计 34 页**：15 个学习页、1 个课程入口、1 个速查页，各有两种语言。页内的示范、题目、提示、完整解答及速查公式均在本次阅读范围内；Statistics、Mechanics 不在本分工内。

本轮没有发现能够确证并列为 P1／P2 的数学错误、答案错误、题目条件冲突或中英文公式不一致。这个结论不等于宣称课程已通过全部新制作准则：制作前设计卡及作者查阅评分材料的历史记录不能从正文还原，独立迁移表现也没有经过学生试用。下文保留需要补证或试用的问题，不把推测写成已确认缺陷。

审查基线为 `ff47be7`（`Merge branch 'main' into codex/physics-ph03-content-opt`）及 2026-10-15 当前工作树。本分工没有修改任何课程文件；审查开始和结束时，这 34 个 Pure 文件均不在工作树修改清单内。报告自身是本分工唯一的项目写入。

## 判定依据与已读来源

- 当前 [OxfordAQA Mathematics 9660 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)及其 [官方大纲 PDF](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)：核对正文身份为 9660、Version 5.2，阅读 §3.3 及 P2.1–P2.10（印刷页 19、21–24）。课程内容按这些条目映射，未将新资格要求倒套入现有课程。
- 官方 [A-level Mathematics command words](https://www.oxfordaqa.com/oaqaresources/maths/assessment/a-level-maths-command-words.pdf)：核对 `deduce`、`prove`、`show`、`sketch` 等任务证据要求。
- 本地保存的 [January 2025 MA03 question paper](../../assets/pdf/fx-cg50/references/oxfordaqa-ma03-2025-january-question-paper.pdf)与 [对应 final mark scheme](../../assets/pdf/fx-cg50/references/oxfordaqa-ma03-2025-january-mark-scheme.pdf)。已核对封面资格、单元、考季及评分文件身份，并阅读试卷所有题目和评分标准全部页。重点比较 Q1–Q14 的方法分、给定结果题的中间步骤、区间内解的完整性、参数限制、积分方法与模型计算。PDF 文本抽取存在公式排版丢位，未把抽取文本当作公式视觉核验。
- 根 `AGENTS.md`、`C:/Users/mi/.codex/RTK.md`、`docs/MATH_FORMULA_GUIDELINES.md` 及本项目新跨学科制作研究记录。

现有页面常用的 `2023/10` 官方大纲 URL 也在本次重新访问过；它当前返回同样的 9660 Version 5.2 文件。因此没有仅因 URL 路径年份而判定页面使用旧范围。

## 全页覆盖表

以下路径均以仓库根目录为起点。每行的英文和中文均已读全文，并核对正文目标、概念条件、示范、练习、提示和解答；“通过”只表示本轮没有发现确证内容错误，不表示工程检查或学习效果验收完成。所有涉及运算的示范与练习均作了独立手算；数值项另用 Python 复算。

| 页面（英文 / 中文） | 范围与独立核验的关键证据 | 本轮结论 |
| --- | --- | --- |
| [index](../../alevel/a2-mathematics/index.md) / [中文](../../zh/alevel/a2-mathematics/index.md) | MA03 学习入口、15 个学习页、速查链接、P2.1–P2.10 映射；不是将 Statistics／Mechanics 混称 Pure。 | 范围与链接安排合理；不能从入口断言学生已掌握全部条目。 |
| [functions](../../alevel/a2-mathematics/functions.md) / [中文](../../zh/alevel/a2-mathematics/functions.md) | 定义域、值域、分段、复合及反函数限制；有理反函数为 `(3x+1)/(x−2)`；Q6 分段函数值域为全体实数，有限集合像 `{0,1,2,4}`。 | 通过；没有漏掉反函数分支限制。 |
| [modulus-and-transformations](../../alevel/a2-mathematics/modulus-and-transformations.md) / [中文](../../zh/alevel/a2-mathematics/modulus-and-transformations.md) | `f(2x−4)` 点映射、分段检验、双绝对值不等式；`∣x+2∣<3∣x∣` 为 `x<−1/2` 或 `x>1`；Q6 为 `x≤−1` 或 `x≥1/3`。 | 通过；变换顺序与定义域条件自洽。 |
| [algebraic-fractions-and-division](../../alevel/a2-mathematics/algebraic-fractions-and-division.md) / [中文](../../zh/alevel/a2-mathematics/algebraic-fractions-and-division.md) | 约分保留原式排除值；长除法逐项回乘；三次式因式分解；Q5 商 `x+2`、余式 `4x+6`，再分解得到 `5/(x−1)−1/(x+1)`。 | 通过；不是只校对最终答案。 |
| [partial-fractions](../../alevel/a2-mathematics/partial-fractions.md) / [中文](../../zh/alevel/a2-mathematics/partial-fractions.md) | 不同／重复线性因式、先除法；重复因式例题回并得到原分子；`−5/((4x−1)(3x−2))` 分解符号正确；Q4 定积分为 `5 ln 2 / 3`。 | 通过；题目自拟身份明确，未冒称官方题。 |
| [binomial-series](../../alevel/a2-mathematics/binomial-series.md) / [中文](../../zh/alevel/a2-mathematics/binomial-series.md) | 负数与分数指数、重写后的收敛条件、乘积截断阶数；`(1+x)√(1−2x)=1−3x²/2−x³+…`；近似值及范围／精度区别。 | 通过；没有把收敛区间当作误差保证。 |
| [trigonometric-functions-and-formulae](../../alevel/a2-mathematics/trigonometric-functions-and-formulae.md) / [中文](../../zh/alevel/a2-mathematics/trigonometric-functions-and-formulae.md) | 反函数主值、倒数函数定义域、恒等式条件、R 形式与相位象限、完整区间解；`sin 2x=sin x` 的五个允许解；Q7 `cos 2x=sin x` 的三解。 | 通过；没有用约分丢失零值解。 |
| [exponential-and-logarithmic-functions](../../alevel/a2-mathematics/exponential-and-logarithmic-functions.md) / [中文](../../zh/alevel/a2-mathematics/exponential-and-logarithmic-functions.md) | 对数定义域、指数反函数、离散复利与连续模型；增长／衰减门槛分别核算后按题意取整，含 7、6、10、7、14 年的例题结果。 | 通过；取整方向与情境一致。 |
| [differentiation](../../alevel/a2-mathematics/differentiation.md) / [中文](../../zh/alevel/a2-mathematics/differentiation.md) | 链式／乘商法则、隐式与反函数求导、切线／法线及垂直切线；`x=y²+2y` 在 `(3,1)` 斜率 `1/4`，在 `y=−1` 为 `x=−1`；反三角导数适用区间。 | 通过；不将分母为零的导数表达式直接当一般斜率。 |
| [parametric-equations](../../alevel/a2-mathematics/parametric-equations.md) / [中文](../../zh/alevel/a2-mathematics/parametric-equations.md) | 消参后的限制、走向、切法线、零比零辨析；`x=t³,y=t³` 在 `t=0` 仍为斜率 1；两道法线再交点分别 `(9,−6)`、`(81,−36)`。 | 通过；消参没有自动丢掉原参数约束。 |
| [integration](../../alevel/a2-mathematics/integration.md) / [中文](../../zh/alevel/a2-mathematics/integration.md) | 先化简、反链式、换元、分部、对数形式与部分分式；逐项求导回验；`∫x(x+2)^6 dx=(x+2)^8/8−2(x+2)^7/7+C`，定积分 Q6 为 `15/4`。 | 通过；存在选法活动，不能称其只有代入训练。独立迁移强度见待核对项。 |
| [integration-applications](../../alevel/a2-mathematics/integration-applications.md) / [中文](../../zh/alevel/a2-mathematics/integration-applications.md) | 三角恒等式积分、带符号积分与几何总面积、两曲线面积、绕两轴体积；`x²−4` 在 `[-3,3]` 的积分 `−6`、总面积 `46/3`；Q7 体积 `π²/8`、`9π/2`。 | 通过；区域、平方及轴的选择一致。 |
| [differential-equations](../../alevel/a2-mathematics/differential-equations.md) / [中文](../../zh/alevel/a2-mathematics/differential-equations.md) | 分离前检查常数解、积分常数及初值、物理解限制；`dy/dx=y(y−2), y(0)=1` 得 `2/(1+e^(2x))`；变深度模型、倍增／半衰期各自回代。 | 通过；没有用非法除法抹去平衡解。 |
| [numerical-methods](../../alevel/a2-mathematics/numerical-methods.md) / [中文](../../zh/alevel/a2-mathematics/numerical-methods.md) | 连续性和变号括根、区间与舍入、迭代收敛、mid-ordinate 与 Simpson；`x³−x−1` 的根约 `1.324717…`，三位小数 `1.325`；多网格结果另作数值复算。 | 通过；邻近迭代值不是独立误差证明，正文已作区分。 |
| [vectors](../../alevel/a2-mathematics/vectors.md) / [中文](../../zh/alevel/a2-mathematics/vectors.md) | 方向、共线、直线交点／异面、点积、锐角、投影垂足与距离；`P=(5,3,5)` 的垂足 `(3,4,5)`、距离 `√5`；Q6 点本已在线上，答案 0 正确。 | 通过；不能将刻意设置的零距离当算错。 |
| [mathematical-proof](../../alevel/a2-mathematics/mathematical-proof.md) / [中文](../../zh/alevel/a2-mathematics/mathematical-proof.md) | 必要／充分、量词、反例、直接证明、反证法；`√3` 无理性中的整除理由；整数 `x²≥x` 与实数反例 `x=1/2`。 | 通过；未用有限试算代替证明。 |
| [quick-reference](../../alevel/a2-mathematics/quick-reference.md) / [中文](../../zh/alevel/a2-mathematics/quick-reference.md) | 全部速查公式、范围限制、除法例题、积分／数值／向量公式及学习页回链；`x=t+1/t,y=t−1/t` 得 `x²−y²=4`，两支均可取到。 | 通过；其定位是速查页，未因缺少学习页结构而判错。中文一句位移说明可更明确，见待核对项。 |

## 确证问题

**P1：0 项；P2：0 项。** 未发现可凭本轮证据复现的错误答案、错误数学命题、错误范围归属或中文内容缺失。没有用缺少某个固定栏目、固定题数、图数、字数或页数作为缺陷。

## 待补证／待试用事项（不计入确证问题）

### C1 — 制作过程与评分来源的追溯记录不足

- 定位：多数学习页末尾仅给出大纲；例如 [partial-fractions.md:288](../../alevel/a2-mathematics/partial-fractions.md#L288) 提示读者使用 MA03 真题及其评分标准，但不是本页作者实际使用的考季／题号清单。两个明确采用大纲示例的学习页已标明该身份，不能混称真题。
- 已证实的是：**正文中不足以追溯作者实际读过哪些配套评分材料**。不能据此断言作者没有读过，更不能将所有自拟题判为违规。
- 本轮使用 January 2025 MA03 QP／MS 作了独立外部对照，确认现有解答风格对方法步骤、给定结果、区间与参数限制的处理没有暴露冲突；它不等于补造原作者的制作记录。
- 建议：下一次维护时保留简短设计卡／来源记录，明确资格、考季、题号、实际查阅的 MS 和自拟题对照目标。不要给自拟解答补上伪官方分值。

### C2 — 综合选法能力需要试用或进一步独立考查

- 定位：[integration.md:39](../../alevel/a2-mathematics/integration.md#L39) 已有先选方法的三题活动，不能说页面没有选法训练；[integration.md:186](../../alevel/a2-mathematics/integration.md#L186)、[integration.md:208](../../alevel/a2-mathematics/integration.md#L208)、[integration.md:230](../../alevel/a2-mathematics/integration.md#L230)、[integration.md:264](../../alevel/a2-mathematics/integration.md#L264) 等练习标题仍提供不同强度的策略提示；[integration.md:323](../../alevel/a2-mathematics/integration.md#L323) 的完成目标包括选法。
- 同一页内已经有渐撤提示、纠错与求导检查，因此这里只保留“**最后能否在撤去标题暗示后独立选法**”这一试用问题。没有学生作答证据，不能从页面安排直接推断学生迁移失败。
- 参考对照：本轮读到的 January 2025 MA03 Q8 不预先指定 `ln(2x+1)` 的积分方法，而 Q12 明确指定换元；二者要求不同，学生需要识别这种差别。
- 建议：样章试用时使用一小段不以方法命名、改变求问方向或组合两种方法的混合题；保留首答与修订证据。此项不要求每页再增加相同数量题目。

### C3 — 中文速查的水平位移一句可以消除指代歧义

- 定位：[zh/…/quick-reference.md:119](../../zh/alevel/a2-mathematics/quick-reference.md#L119)：`y=f(x+a)` 对应“水平平移 −a 个单位，正值向右、负值向左”。
- 按“正值”指位移 `−a` 解释，该句正确，故**不列为错向平移**；但学生可能误把它理解成参数 `a` 的正负。
- 建议：下次改写时直接写清“`a>0` 向左平移 `a`；`a<0` 向右平移 `−a`”，并保留点映射解释。学习页的变换说明和计算本次核验正确。

## 本轮检查记录

### 源内容与数学

- 逐页读完 34 个源文件；独立核算所有示范、练习及速查例子，不只对照现成答案。
- 手算检查定义域、分支、除零、端点、恒等变形、区间完整性、积分常数、参数限制、几何面积和体积、模型单位与取整方向。
- Python 标准库复算容易因显示位数误判的数值项：增长门槛、R 形式相位、倍增／半衰期、固定点迭代、mid-ordinate 和 Simpson。举例：

| 计算 | 独立结果 |
| --- | --- |
| `x₀=0.5, xₙ₊₁=1/(1+xₙ²)` | `0.8, 0.6097560976, 0.7289679098` |
| `∫₀² x² dx`，mid-ordinate，`n=4,8` | `2.625, 2.65625` |
| `∫₀² eˣ dx`，Simpson，`n=4,8` | `6.3912101867, 6.3891937254` |
| `∫₁³ ln x dx`，mid-ordinate，`n=4,8` | `1.3026452336, 1.2975640130` |
| `log(1.2)/log(1.07/1.04)` | `6.4112093490`，故题设最小整数为 7 |
| `4 ln 2 / ln 1.2`，`5 ln 2 / ln(4/3)` | `15.2071360677`、`12.0471041983` |

### 双语与题目身份

- 对 17 对源文件逐对提取 TeX，**3,809 个英文 TeX 片段与中文对应片段的顺序、内容完全一致**；这只是对齐证据，数学正确性仍由独立核算支持。
- 17 对文件的 `<details>` 数量全部对应；共 93 行带 `**Question:**` 的英文题干均逐字保留于中文页。
- 逐页阅读中文说明，检查其条件、提示和反馈是否与英文及公式吻合。`partial-fractions` 使用没有 `Question` 标签的题目，已另行人工阅读，并未被上述正则漏检当作已检查。
- 自拟题未冒用官方题号；实际标成大纲示例的题目已与大纲对照。没有发现以汉化为名改动数据或答案。

### 图与交付状态

- 识别并检查九个共享 SVG 的数学任务与页面连接；对手写的小型 SVG 检查坐标／标注，对较大的绘图导出 SVG 只作了源结构和关联内容核对。**本分工没有完成九图逐张桌面／手机视觉验收**。
- 没有在本分工内重建全站；主审已报告本轮 fresh Jekyll build 通过，并负责生成 HTML、桌面／手机、公式、键盘操作及折叠交互检查。那部分结果应以主审的实际记录为准，本报告不借用构建成功宣称视觉验收完成。
- 没有运行学生课堂试用；不能宣称“学习效果已验证”。

## 未查范围与限制

- 本分工不含 A2 Mathematics Statistics／Mechanics，不含 AS、Further Mathematics、Physics、Chemistry，也不含这些页面之外的用户私人题库。
- 页末泛称“去做历年 MA03”的全部历年试卷没有逐份重做；本轮实际读过的是上述 January 2025 配对 QP／MS。未访问到的官方 example-responses PDF 不计入已读来源。
- 自动 TeX 对齐不能证明 Markdown／MathJax 渲染正确，SVG 源核对不能代替手机可读性检查；这些工程验收与本报告的内容正确性分开记录。
- 历史创作时是否先写设计卡、先查 MS，以及学生真正能否独立输出英文论证，目前没有足够证据。建议将补充记录与小段试用作为后续验收，而不是把本轮“未发现确证错误”改写为无条件合格。

## 补充：现有检查复跑（2026-10-15）

在主审本轮 fresh `_site` 上并行运行以下 11 项既有检查，逐项核对完整输出及退出码：**11 通过，0 失败，全部退出码为 0**。未新增测试、改动课程或重建站点。下表 `node` 实际使用 `C:/Program Files/nodejs/node.exe`，工作目录为 `D:/GitHub/Academic`。

| 命令 | 结果与主要覆盖 |
| --- | --- |
| `node scripts/test-pure-consistency.js` | 通过；17 个英文入口／学习页／速查页的内容、链接、书签及选定数学断言；MathJax 初始锚点模拟回归也通过。输出盘点为 15 学习页、97 示范、90 编号练习。 |
| `node scripts/test-binomial-series.js` | 通过；系数、乘积、有效范围、取整及 12 个练习折叠区。 |
| `node scripts/test-exponential-logarithmic.js` | 通过；门槛、符号、定义域、方程、反函数、模型转换及 14 个折叠区。 |
| `node scripts/test-differentiation.js` | 通过；25 个导数核验、倒数／隐函数梯度、驻点及 16 个折叠区。 |
| `node scripts/test-differential-equations.js` | 通过；11 类解、给定条件、模型预测、常数解及 12 个练习折叠区。 |
| `node scripts/test-integration-applications.js` | 通过；7 个求导核验、11 个定积分结果、课程链接、英文内容及 14 个练习折叠区。 |
| `node scripts/test-parametric-equations.js` | 通过；梯度、限制、交点及生成 HTML 的指定标记。 |
| `node scripts/test-numerical-methods.js` | 通过；根区间、显示迭代值、收敛／发散、中点／Simpson、3 个细分比较及 12 个练习折叠区。 |
| `node scripts/test-vectors.js` | 通过；长度、单位向量、中点、直线、交点、角、垂足、距离；Vectors／Quick Reference／Modulus 的列向量换行保留。 |
| `node scripts/test-trigonometry.js` | 通过；方程、区间、恒等式、形式、极值及 16 个折叠区。 |
| `node scripts/test-bilingual.js` | 通过；17 对数学 Pure 页面及额外 6 对学科入口；另验证未汉化 Mechanics 入口不显示切换链接。 |

先全文阅读 `test-bilingual.js` 再执行：它**不是通站检查，也不只限于 Pure**；额外入口为 AS Physics、AS Mathematics、IGCSE Biology／Chemistry／Mathematics／Physics。它比较 TeX、选定英文题干、标题／锚点、折叠区、链接与控件文本，不能证明中文语义或数学正确性。

各数学脚本主要核对预置表达式／答案、有限取点、有限差分／数值积分与静态 HTML 标记，不能自动证明全范围命题或穷尽正文答案；上述例题／练习数量是库存及回归断言，不是独立证明数量或统一题数要求。输出中的 rendering／disclosures 指静态标记、计数及 TeX 保留；MathJax 初始锚点与语言切换回归使用模拟环境，不能代替浏览器中的公式排版、键盘操作、手机阅读和语言偏好组合检查，也不能代替官方评分材料核验、真实计算器操作或学生试用。
