# MA03 通俗化独立审查 — Spec

审查日：2026-10-24。基准 `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`，比较命令：`git diff 19db6ca -- alevel/a2-mathematics zh/alevel/a2-mathematics`。没有本轮提交；审查对象为工作区。仅写本记录，不修改课程、测试或其他人的记录。

## 主要发现（2 项均已修复；0 项开放；少于 400 词）

1. **S1 / P2 / 实现不当，已关闭。** 原 `smartPrime` 只提取美元定界公式，漏掉生成 HTML 的 `\[…\]`；内存注入 `y’` 可复现漏检，违背用户追加的“保留真导数错误检出”。最小修正是补实际 TeX 定界符及独立公式反例。最终 `scripts/test-differentiation.js:90`、`scripts/test-differential-equations.js:86`、`scripts/test-parametric-equations.js:87` 均已支持美元、`\[…\]`、`\(…\)`；独立正反例与真实 HTML 内存探针通过。未发现课文实际存在该导数错误。

2. **S2 / P2 / 通俗化部分遗漏，已关闭。** DE 原 `#separable-variables` 在首例前使用 `f,g,G,y(x)`，未先说明 G 的原函数身份；初学者先要猜记号，违背用户“特别是初学者”及主记录第 5 行“具体问题 → 简单语言说明意思 → 术语与符号”。最小修正是先解释具体例子的反向链式过程，再给一般论证。最终 `alevel/a2-mathematics/differential-equations.md:35`、`zh/alevel/a2-mathematics/differential-equations.md:37` 先讲 `2xy`；一般论证后置至 `#separation-why-it-works`（英文 79、中文 81 行）并解释 G。依据、非零条件、常数解及常数合并均保留，独立重建正确。

## 结案与修正复核

已向主代理报告初审位置，并在其修正、重新冻结后独立复核。Spec 结案：两项发现均关闭，没有尚待修正的具体发现。结论覆盖下列实际阅读范围，不代表全历史题目重新审计。

S1：读取三脚本相对基准的全部差异，只执行内存中提取的原样 `formulae`／`smartPrime` 及新增断言，没有导入整份检查脚本。美元行内、美元独立、反斜线独立和反斜线行内公式中的错误导数均可检出，公式外普通 `quantity’s` 不误报。另读三课两语现有生成 HTML：原内容通过；在其实际 `\[…\]` 片段中注入 `y’` 后均被检出。此 HTML 只用于核定界符修复，不作为最终课文构建验收。

S2：完整重读英文 35–108 行、中文 37–110 行。先看 `2xy`、除以非零 y、例 1 具体积分，随后才到一般 G 论证。独立重建 `d(ln|y|)/dx=y'/y=2x`，积分得到 `ln|y|=x²+C`，非零分支合并为 `Ae^(x²)`；另验零解。一般段明确 `G'=1/g`，链式式子与具体例子的对应正确。原数学解释后置而未删去，也没有新增折叠组件。

同时复核主代理告知的两处补充修正：中文指数对数 `#natural-logarithms:166` 已直接说“对数是在反过来问指数”，定义域与指数／对数互逆条件保留；这条原为轻微措辞建议。参数页 `#stationary-points` 英文 249／中文 251 行现把求导比率法限定在 `dx/dt≠0`，两个参数导数同时为零时另查曲线或极限。对 `scripts/test-parametric-equations.js:61` 新反例，不只依赖试点：实数范围内 `x=t³` 取遍全部 x，故 `y=t⁶=x²`；原点两率均零，而笛卡尔导数为零且为极小值。该补充数学正确，不冒称是本审查首先发现的问题。

## 实际范围与需求对应

依据用户“普数是人人必学的学科，希望用更简单的语言让大家理解，特别是初学者；扩展到 MA03 所有单元”，以及 `implementation-ma03-plain-language-2026-10-24.md` 的设计卡与保留边界。已读 `AGENTS.md`、长期标准 v1.1、`docs/MATH_FORMULA_GUIDELINES.md` 和主实施记录。三个分组记录仅作实施定位与作者自核参考，没有将它们的全部内容视为本人独立核验。

先审作者已冻结的 integration、numerical-methods、index、quick-reference 双语八页，再审其余十三课双语二十六页；作者全部冻结后复核发生变化的代数组及英文指数页。阅读以本轮语言差异、概念主线与关联完整示范／反馈为主，没有逐行重读全部未改正文或重新解全套历史题。下表每行同时覆盖 `alevel/a2-mathematics/` 与 `zh/alevel/a2-mathematics/` 的同名文件；位置优先采用稳定锚点，例题名称用于没有显式 ID 的旧段落。

| 文件 | 实际阅读与独立重建的代表性证据 | 对通俗化及条件的判断 |
| --- | --- | --- |
| `functions.md` | Domain and Range、Composition、Inverse；例 1、3、4 及反函数图像／重试改写。重建平方最低值 2、端值 6 及连续取遍；两种复合的输入检查；正根反函数及双向复合 | 用“放入／得到”解释域和值域，选正根由原输入范围决定，未只靠端点或数值试算说明全范围 |
| `modulus-and-transformations.md` | Modulus Graphs、Combinations、分情况与不等式改写；例 1、3 及例 7 的代数反馈。重建 `2x-4=p` 的新横坐标及 `(2x+1)(x-1)>0` 的两段 | 距离、运算顺序、横向倒数因子均有实质解释；分段条件与全区间理由保留 |
| `algebraic-fractions-and-division.md` | Simplification、Algebraic Division；例 4、5 连同长除法表。重建商 `2x²-x-3`、余数 10；多项式恒等式可代 -2 而原分式不可 | 从整数除法过渡，并说明停止条件比较次数；原分母限制与非零余数条件保留 |
| `partial-fractions.md` | Method、例 1–3、重复因子解释及积分反馈。重组合系数 `2,3` 与 `-2,4,2`；独立恢复三次示范的商和两个对数系数 | 清分母后的代值理由、重复幂项及积分的线性系数补偿都有解释，未将跨极点区间当普通定积分 |
| `binomial-series.md` | `#the-binomial-series`、例 1、2、`#example-repeated-factor` 与 Approximations 改写。重算外因子 1/3、三次系数及重复因子 `A=B=C=1`、展开 `3+2x+5x²+4x³` | 说明 u 是整个式子及无穷部分和含义；有效范围与有限截断精度分开 |
| `trigonometric-functions-and-formulae.md` | 反函数／倒数函数、恒等式与和差角主线；反余弦变换、正割方程、例 6 和后部漏解反馈。重建正弦差角系数 `r=5`、角度与最值 | 首次说明输入／输出及主值范围，选公式有目的；限制区间、定义条件、列全解的证据保留 |
| `exponential-and-logarithmic-functions.md` | 增长衰减、自然对数、解方程主线；例 1、2、4–6、反函数和回顾反馈。重算整年阈值 7／6、负对数反向、对数根 3 与指数替换正值 4 | 固定百分比转换成倍数，对数解释为问指数；原对数真数域与指数正值筛根保留 |
| `differentiation.md` | Standard Derivatives、Products、Composite、Implicit；例 3–5、9 及重试提示。重建产品导数 `xe^(3x)(2+3x)`、嵌套三角的 -6 因子、反正弦正根选择 | 最后一步运算用于选法，内层因子的来源有说明；弧度、原函数域、主值与导数域区别保留 |
| `parametric-equations.md` | `#cartesian-equations`、前三例与 `#stationary-points`／例 8；重建 `t=x/(1+x)`、保留原点、排除 x=-1 及参数可达性的反向证明 | 同一个参数控制两个坐标；驻点分类按 x 增加顺序，且保留 dx/dt 非零条件 |
| `integration.md` | `#choose-a-method`、标准积分、六个示范、Retry B 和 Later B；重建 `u=x+2` 时 x=u-2、`xe^(2x)` 的分部积分、新限 1 到 2 后结果 15/4；Later B 幂为 -1/2，x>-1 | 原函数与 C、为何换元／分部、变量和积分限对应都有实质补充；没有跳过本轮关键桥梁。Later B 在 x=0 的导数核验不依赖除以 du/dx |
| `integration-applications.md` | 三角积分、面积与旋转体主线及例 1、5–8。重建 sin³(2x) 换元的 -1/2；三段面积合为 4；两轴体积分别 26π/3、8π | 说明保留一份正弦的用途、带符号累计与面积区别、薄片半径及积分变量；平方面积和立方体积单位保留 |
| `differential-equations.md` | `#separable-variables` 至例 3、建模例 4、常数解重试、冷却反馈。重建反向链式依据、`Ae^(x²)`、正根 `sqrt(x²+4)`、`2/(1+e^(2x))`，水深和冷却初值与单位 | 数学桥梁成立，零解、除零、分支和模型范围均保留；首次符号顺序已按 S2 修正并复核 |
| `numerical-methods.md` | 定位根、迭代、收敛及中点解释的改写；完整例 1／2、收敛条件、例 4。独立追踪 `1,2 → 1.1…1.4 → 1.31…1.33`，重算迭代两步与 3dp 两个舍入边界，中点近似为 2.625 | 连续性、异号和停止理由不丢失；局部导数判据有范围说明，显示位数不冒充精度证据；Simpson 偶数条要求保留 |
| `vectors.md` | 大小／方向、直线、数量积与垂足主线，例 1、2、5、7 和相关反馈。独立令 `9λ-18=0` 得垂足 `(3,4,5)`、距离 √5，核直线与垂直两条件及勾股最短性 | 移动、分量、单位向量、共用参数的意义清楚；三维坐标、非零方向、顶点角方向和单位条件保留 |
| `mathematical-proof.md` | 命题／条件、直接证明、反证、反例及修改反馈；完整例 1–3。独立核任意奇数表示、模 3 三种余数的覆盖、最简分数与共同因子 3 的冲突 | 区分对所有值证明与有限试数；反例满足前提且使结论失败，必要／充分与 hence 的要求保留 |
| `index.md`、`quick-reference.md` | 双语入口新增任务说明、学习起点及速查用途；对照原主题链接和综合／稍后入口 | 入口简化扩展到十五章正文，速查说明供学后检索，不冒称独立课程 |

没有发现另需报告的越界功能、官方关键作答证据删除或数学内容削减。此结论限于本轮差异和以上独立重建范围；不预判 Standards 轴。

## 实际读过的官方材料

从 [9660 当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)核对 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)正文身份：9660、v5.2、36 个 PDF 页。实际阅读 P2 概述的论证／反证／反例要求及 P2.1–P2.10 相应条目，重点核积分、简单可分离微分方程、迭代与数值积分、向量方法；未迁移资格。

使用 pypdf 在内存中读本地 January 2025 QP／MS，未生成文件：

- `assets/pdf/fx-cg50/references/oxfordaqa-ma03-2025-january-question-paper.pdf`：封面核 9660/MA03、2025-01-13、120 分、32 页；Q2 的 PDF 4–5 页、Q8 的 16 页、Q10 的 18–19 页、Q13 的 24–25 页。
- 同目录 `oxfordaqa-ma03-2025-january-mark-scheme.pdf`：封面核 January 2025、Version 1.0 Final、251xMA03/MS、22 页；对应 PDF 5–6、13、15–16、20 页。核对中点位置及宽度、异号结论、分部积分的完整组合与积分限、指数负根排除、参数斜率及点代入所需证据。

PDF 文本抽取的上下标／图形排列不完整，本次没有声称审过 Q10 图形所有细节或复算整套官方题。这里使用官方材料核方法证据；本站自拟题没有被冠以官方题号或官方分值。

## 只读检查与边界

最终冻结后在内存中重新比较 34 页与基准：216 条带标记的 English Question 行逐条保留；front matter 不变；原 905 个显式 `{#…}` ID 的逐页相对顺序保留，DE 两语各新增 `separation-why-it-works`，最终 907 个。17 对双语页的 **5338 对**美元定界数学片段逐序一致（两语合计 10676 段；此前 5326 为修复前配对数）。按去空白后的显示公式多重集合比较，原式没有缺失；代数除法双语各新增整数类比 `17=5×3+2` 一块，DE 双语各新增 `(1/y)(dy/dx)=2x` 一块。一般 G 公式的移动已人工复核，未把集合相同当作阅读顺序证据。

最终差异内其余页按上表阅读并重建，没有扩大到全部未改题目的重新求解。三脚本完整差异已读，新增参数反例已独立解析；没有把有限试点当作全范围证明。没有逐条独立重验作者记录所列的全部技术结果，亦未审其原有全部测试断言或所有旧图形。

## 最终文件 SHA256

采集时间：2026-10-24T18:44:32+08:00。基准与当时 HEAD 均为 `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`。以下为 34 份课程源码及 3 份脚本的实际文件字节哈希；不包含构建产物、作者记录和无关 dirty 文件。2026-10-24T18:48:07+08:00 再次读取全部 37 份文件与本表比较，全部一致；HEAD 仍为基准。

| 路径 | SHA256 |
| --- | --- |
| `alevel/a2-mathematics/algebraic-fractions-and-division.md` | `a1d4db9aeb6e6a436c9eebe031bc56a0859f1573874c26601f77732067960dfb` |
| `alevel/a2-mathematics/binomial-series.md` | `00981b91432b7ceaa69e1a5c0173b67cc88707509151d6a31aa32c91fb004a4a` |
| `alevel/a2-mathematics/differential-equations.md` | `7726d42b92f9675177a1267755dd79d0f26ddaf9c06252266c97bbfe6e7a2cfd` |
| `alevel/a2-mathematics/differentiation.md` | `538d5c6b3d4a59b80a7b396d8710c4676e727fb5876bc0d2fb3e7ab459f9dd77` |
| `alevel/a2-mathematics/exponential-and-logarithmic-functions.md` | `fd195e63312de9d79f2cc2510e3b6e6929ac7c4ebc0686b89704cb52817dd4b4` |
| `alevel/a2-mathematics/functions.md` | `02ac180e72c5a331dea8a433774e1c3daff7978fb5c1b1d2c2ed6764340138b3` |
| `alevel/a2-mathematics/index.md` | `ced750a088e7ebf6c728a39d0995e32046c4f212f95df3514794e582448c109f` |
| `alevel/a2-mathematics/integration-applications.md` | `1fb5c82373a35e3b4fd40e9a93d518d14ec8cbf5a630a2ba6858b18e9c8f9159` |
| `alevel/a2-mathematics/integration.md` | `7d730a1a935aa44fffb6d25b9d30c579dd543d312aba11fd0f67be2df876e5e6` |
| `alevel/a2-mathematics/mathematical-proof.md` | `c109780273303c84c28d3f5b37b1cdae00cfa5645d8327c153fde6353d99f9f1` |
| `alevel/a2-mathematics/modulus-and-transformations.md` | `1dc841c7778ebdea0f7dd37e321bdfc6878afaddb2a4f3c6dbf7222136c6dc01` |
| `alevel/a2-mathematics/numerical-methods.md` | `a82494e27462efc09f204c3e0bbc04842d707a6b18a155c456bed019d3c6a3eb` |
| `alevel/a2-mathematics/parametric-equations.md` | `7199774a73ef015cca1474eafa9616f41bc1359d55ee8cd1a3f3d2fcaf06cbd0` |
| `alevel/a2-mathematics/partial-fractions.md` | `528952e2584336bdffdc41828bae8acfa07c6894c874580daa3ede098b818029` |
| `alevel/a2-mathematics/quick-reference.md` | `d94f9b71f3ec5d490b7b9ebd16ce954c1282a7159b99cdf7194350ad74cd654b` |
| `alevel/a2-mathematics/trigonometric-functions-and-formulae.md` | `e955f94eb779b6340d37a325f98b9e7060ae87e30b80b5e7c0a2c0067625f6c8` |
| `alevel/a2-mathematics/vectors.md` | `0e594f3fa04fd3bad75e8d1dc1af9058ac1b331f163c28757251855d4e943685` |
| `scripts/test-differential-equations.js` | `47c45b0180b91692d7c16bbf07f6336e22f9a9c74fca2604baa0bdd0cd6a8b2e` |
| `scripts/test-differentiation.js` | `33ce94df463746ad179cc5abb061a555e386179aee9e7a5518dda9de555f851c` |
| `scripts/test-parametric-equations.js` | `5d6fe66b6a4e838f6e62b1ec9bc6e956f7d9308bc2e8c173ebec81b626e8b0e8` |
| `zh/alevel/a2-mathematics/algebraic-fractions-and-division.md` | `da95cfe1c282f3640b9f880f9ef50222a957e3261349c39454193d0e61c9165b` |
| `zh/alevel/a2-mathematics/binomial-series.md` | `a9abafc44a4e2a5133359536fc9855d77f1ed8f0f4496904ac33d1a8d75811d8` |
| `zh/alevel/a2-mathematics/differential-equations.md` | `2ae86967ac0e0f3cd7e7c2cf3478e053bb1ece851be1af06866333f4e20cbe60` |
| `zh/alevel/a2-mathematics/differentiation.md` | `49af1c5e1b01389623b4ce1767709755bb115d221a3fb5453fde27810b3d9d27` |
| `zh/alevel/a2-mathematics/exponential-and-logarithmic-functions.md` | `333736bbb6f26351f47d6690a678d5557df0197d1a7b78f48db9dc31c9d67767` |
| `zh/alevel/a2-mathematics/functions.md` | `dd23542a5ab216bc175463efffe8852c39762c30106ff05f81443b25571025cf` |
| `zh/alevel/a2-mathematics/index.md` | `5a175d97c5023b8525a18887728abc1f5dd854e1c45341d5be468eb59484770b` |
| `zh/alevel/a2-mathematics/integration-applications.md` | `5cd28a9dd821aefe4ca54b63d9c089e393e2ea2bd0c831dfef0cbe2b0336b1f4` |
| `zh/alevel/a2-mathematics/integration.md` | `d7cc14573b3c07f170f432bbc9501ac8e978190dfd3adcae917475bd6c4672e0` |
| `zh/alevel/a2-mathematics/mathematical-proof.md` | `c6d28c98060f1c4ba874bb2615429fa9e8504a294acb13b8e1e04015580c1eb8` |
| `zh/alevel/a2-mathematics/modulus-and-transformations.md` | `376e723ca5eceba0437557885d012fe051ce269090f465075533d42d4fbb6319` |
| `zh/alevel/a2-mathematics/numerical-methods.md` | `c31b994547f00c570d206f5d028212dbb487efebd15ecbab8ba2b5464521d6ad` |
| `zh/alevel/a2-mathematics/parametric-equations.md` | `2a749021c617d0053898cc138b5bc1692f40af12024222c1f056ca02d65e670c` |
| `zh/alevel/a2-mathematics/partial-fractions.md` | `868679593dee21ac5eb074937545b3066a1f61e85375d094b08fba2f7eed269c` |
| `zh/alevel/a2-mathematics/quick-reference.md` | `4311523b8f3fedce8699b056bc911e4b1c790bb03102bd407088bf1c03123d28` |
| `zh/alevel/a2-mathematics/trigonometric-functions-and-formulae.md` | `9e6f081360591328c472433df604e7edeccb7c236ccb22096c33aafc1a6230c6` |
| `zh/alevel/a2-mathematics/vectors.md` | `07c7b144710a79d3bd993fa8fcb53af6cca7c6f5ac180fa393bebc62cfa5c1f4` |


## 技术验收与学生试用边界

本代理未构建、未运行整份既有检查、未做浏览器验收、未审 AS L01／其测试／证据、未改课程和测试、未提交。主代理最终报告：构建 35.468 秒、受影响六检查重跑、34 页 lint、128 视图零失败、503 链接零错，最后 5 个 HTML 变化后保留 108 视图并重跑 20，实际读过最终 DE 及驻点手机截图；Standards 已独立结案并核对 37 个最终哈希。这些是主代理／Standards 的验收状态，不冒称本代理独立执行。未开展学生试用，不宣称初学者学习效果已经验证，也不以数学片段配对或脚本数目替代内容判断。
