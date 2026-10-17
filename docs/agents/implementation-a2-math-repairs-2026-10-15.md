# A2 数学与高等数学修复实施记录（2026-10-15）

本记录对应[总清单](repair-a2-consolidated-backlog-2026-10-15.md)的数学部分。保留资格：普数 OxfordAQA 9660、高数 OxfordAQA 9665；旧 AQA 6360 题作为补充教学题，不表示迁移资格。此记录是本次维护证据，不倒填先前作者的设计或查阅历史。

## 变更范围和验收状态

| 编号 | 已实施内容 | 本子任务的验证 | 合并验收 |
| --- | --- | --- | --- |
| R05 | 双曲函数两语言各四处零元素集合改用 TeX 的 lbrace/rbrace；不改变排除零的范围。 | 双语源码、MathJax 编译；现有 first-order 脚本新增生成 HTML 集合括号回归。 | fresh 构建与实际集合符号显示交主任务核验。 |
| R11 | 普数速查将有理分式与补充除法归入对应主题；合并部分分式；函数类型、复合、反函数及绝对值下的变换形成子级。 | 公式序列双语相同；旧 partial-fractions-extended 锚点以 span 保留。 | 生成标题树、锚点、手机阅读交主任务。 |
| R12 | 数值方法例 4–6 降至 H4，归属于中点法或辛普森法；其他例题层级保留。 | 全部原数学片段和英文题目保留，现有例题计数适配 H4。 | fresh HTML 层级交主任务。 |
| R16 | 普数积分初讲的七行长公式表改成三组显示公式，条件就近；高数弧长与曲面公式移至 Cartesian、parametric、surface 的模型解释旁。 | 双语公式逐项相同并编译；系数、定义域、参数限、绝对值与曲面重复覆盖条件保留。 | 与共享手机表格修复一起检查桌面及手机。 |
| R17 | 仅作短样章试排：双曲函数例 1 紧跟定义，弧长例 1 紧跟 Cartesian 模型。 | 原题、解答和旧锚点保留；其余示范和独立练习不压平。 | 阅读检查和学生试用分开；未声称学习效果已验证。 |
| R23 | 二阶方程七道独立题标题只留题号；根型和共振判断留在提示与解答。提供混合完成顺序，要求解释 CF/PI 后代回检查。 | 原七题及全部数学片段逐字保留；现有解族检查保留，新增标题不泄露分类断言。 | fresh 构建与折叠边界交主任务。 |
| R24 | 六课九题恢复资格、单元、考季、原题号、分值、原卷和配套 MS；各题解答内增加实际核对的要点。 | 实际读到九组 AQA 原卷/MS；来源表见下。 | 页面链接、呈现及双语切换交主任务。 |
| V02 | 反三角 Q8 的 June 2007 MFP2 Q4 原文、2+5 分与 MS 外部重核完成。 | 复用同卷原卷/MS；将本题旧 MS 链接更新为本次实际读到的文件并增加原卷链接。 | 页面呈现交主任务。 |

另将普数速查水平平移说明明确为参数 a 的正负：a > 0 向左，a < 0 向右；中英文使用同一组公式。该项属于说明清晰度，不把旧句追认为数学错向。

## 本次原卷与评分材料证据

官方旧 AQA 站点入口未成功读取。本次实际取得的是 **AQA 编写的原始 PDF，由 Physics & Maths Tutor 镜像托管**；不是引用该站的第三方解题稿。已核对 PDF 正文的资格 Mathematics 6360、MFP2/MFP3、January/June 考季、年份以及 AQA 页脚/版权标识；题号与分值取自文件正文，不由 URL 猜测。下载共 18 个不同 PDF，June 2007 MFP2 的一组同时用于 De Moivre Q7 和 V02。

| 页面题号 | 原题身份（AQA 6360） | 原分值 | 实际读到的文件 | 对照要点 |
| --- | --- | --- | --- | --- |
| Roots Q7 | MFP2, January 2006, Q2 | 5 + 5 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202006%20QP%20-%20FP2%20AQA.PDF) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202006%20MS%20-%20FP2%20AQA.PDF) | 系数、平方和恒等式、共轭根；p = −4，q = −2，r = 20。 |
| Induction Q6 | MFP2, June 2006, Q6 | 4 + 4 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202006%20QP%20-%20FP2%20AQA.PDF) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202006%20MS%20-%20FP2%20AQA.PDF) | 第 (a) 问得到 7 × 15ⁿ；第 (b) 问的 n = 2、任意归纳假设、归纳步和结论。 |
| Finite series Q5 | MFP2, June 2010, Q2 | 3 + 5 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202010%20QP%20-%20FP2%20AQA.PDF) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202010%20MS%20-%20FP2%20AQA.PDF) | 部分分式系数 1/2、−1/2；相消首尾项及 894/1225。 |
| Series and limits Q7 | MFP3, January 2013, Q2 | 1 + 4 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20QP%20-%20FP3%20AQA.pdf) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20MS%20-%20FP3%20AQA.PDF) | 两个展开式及相乘；一次项相消，二次项系数 3。 |
| De Moivre Q7 | MFP2, June 2007, Q3 | 5 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF) | 棣莫弗、实虚部、最小正角 π/10。 |
| De Moivre Q8 | MFP2, June 2011, Q7 | 5 + 3 + 3 + 5 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20QP%20-%20FP2%20AQA.pdf) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20MS%20-%20FP2%20AQA.PDF) | 五次幂、五倍角、四个正切根及乘积正号 √5。 |
| Polar Q6 | MFP3, June 2014, Q3 | 4 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20QP%20-%20FP3%20AQA.PDF) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20MS%20-%20FP3%20AQA.PDF) | 4r = 4 + 3x，再平方和整理直角坐标方程。 |
| Polar Q7 | MFP3, June 2013, Q2 | 4 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20QP%20-%20FP3%20AQA.pdf) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20MS%20-%20FP3%20AQA.PDF) | 展开圆方程，得到 r = 12 sinθ − 16 cosθ。 |
| Polar Q8 | MFP3, January 2009, Q3 | 6 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20QP%20-%20FP3%20AQA.PDF) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20MS%20-%20FP3%20AQA.PDF) | 核对原图、积分限 0 至 π、面积积分及结果 13/3。 |
| Inverse trig Q8（V02） | MFP2, June 2007, Q4 | 2 + 5 | [原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF) · [MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF) | 原题是对 x arctan x 求导，再 show 定积分；结论 π/4 − ln√2。 |

Polar Q8：实际查看 January 2009 MFP3 原卷第 3 页的环瓣图，与本课 SVG 的曲线、极点 O、始线和题目区间核对。本课为重绘图，因此来源改标“改编题：题图重绘”；不伪称网页图就是原卷原图。题目的公式、区间、求问和原题 6 分保留。

本次原卷核对不等于取得了所供教材原 PDF。课程内现有教材章节、练习号和印刷页码只保留为索引；未据此声称重新翻阅并认证这些教材定位。Series and limits Q8 的原考试来源及官方分值仍未恢复，继续保持原有“改编教学题、未核实”的标注。

### 文件指纹

以下为实际读取文件的 SHA-256；文件正文在本次本机临时资料目录保存。项目不新增完整试卷副本，不保证临时目录长期存在；上表链接与指纹用于复核身份。

| 材料 | 类型 | SHA-256 |
| --- | --- | --- |
| roots | QP | `b1280f6f3e175fcdb2a6158caa46bab72cb0aaccb9f2f05cbac5bdd6be40d280` |
| roots | MS | `185669274e9601136016e3df363e81aeddbeba84a9cec88c84a694e54f37e937` |
| induction | QP | `4f19420dd411d406cec759b538f0e291e3c6331ce870f55b22ed97b2a4d930d3` |
| induction | MS | `fdf084792fac47549aa469bc5bdf399d4f68a51801aad9773fb607e936bb9b15` |
| finite | QP | `148f9c11820982b106a4316d384be9d09c08f5e2f12b2e6e2e83d63ca936be4b` |
| finite | MS | `8e46304bddc09787467a9b274d8ad73b9f21c7d99f44397bc2c91aacc6520f47` |
| series | QP | `ab39757c903ac7b9b716e1e658825ee555dac24db839d8636c59b3ef12e5f93c` |
| series | MS | `df30b19961c12f628cfcae3ce569a7da0c4382129740768745376e93de9832c5` |
| demo07 | QP | `f3de194a6138dc97bf4f3040d160b1a246a4db817b39420ff7857c506845ac5c` |
| demo07 | MS | `040b3335c7cb836d0c509d47b754ebc4724cd2248b0a2ee84cfba9d7a9ffdaa8` |
| demo11 | QP | `a5abda4379490c1d3d2c02eb0fb6b2ba7b8eee9b9391ee84241728af605c0c3b` |
| demo11 | MS | `8479fb50063d7bcab987d27342c5bce3c97a41ea60c47a20a27798c646071e43` |
| polar14 | QP | `68b6c238848d41bee6a81c007443679eed54cb94874d7fb19d3852174b3f871f` |
| polar14 | MS | `9011e962a83293c23a35b68804c2e9bb6e02a97b874f4fcd933ad6d0055cda73` |
| polar13 | QP | `f108560e164c7cbe0bfff53a9b4c364522be39ca90014986d4fc9dd5b62b5f54` |
| polar13 | MS | `d96ba53364195468ec702691890078846f1d4479e588d5967e1d9aa64b028b81` |
| polar09 | QP | `9af3541ba6f233ef436173309cdcb06b4b5cbb95844a59435f4a312c5055bef5` |
| polar09 | MS | `d6a5644744c935da4cd8703448fe98f969826195fb45c2b217131991bb14c6b3` |

## 内容和技术核验

- 对分式、积分和弧长的本次版式变更复核公式与条件：标准积分中的内系数、三角函数弧度制、实数幂的允许区间、对数非零条件、sec² 的 cos 非零条件；弧长正速率、旋转半径绝对值、参数追踪与曲面重叠范围均保留。
- Roots、induction、finite series、series and limits、De Moivre、polar、inverse trig、二阶方程及普数数值方法，与本次编辑前基线比较，全部数学片段保留原序列；R24 只补来源和评分材料核对反馈，不修改英文题干或数值。
- 源码层面对本任务涉及的 15 对页面（普数三对及高数全部十二对）检查：全部公式出现序列、https 来源链接顺序和折叠数量中英文一致。使用项目的本地 MathJax 及实际自定义宏，2,487 个不同公式编译无 merror。初次临时检查未加载 cosec 自定义宏而报错，按网站实际宏配置重跑已通过；未将检查器配置问题当成课程错误。
- 修改适用的四个既有脚本：test-pure-consistency、test-numerical-methods 识别合法 H4 子例题；test-further-first-order 捕获生成 HTML 丢失集合括号；test-further-second-order 捕获练习标题预先泄露分类。未更改共享 bilingual 脚本。
- 本次另运行十项适用既有脚本（further-bilingual、roots、induction-series、series-limits、de-moivre、polar、inverse-trig、second-order、pure-consistency、numerical-methods），退出码均为 0。这些脚本中的生成页断言此时读取修复前的构建目录；源码/数学部分的通过有效，但不能据此宣称新排版或 R05 已通过 fresh HTML 验收。first-order 新增集合括号断言留待统一构建后执行。
- 子任务没有独立重建全站、提交或推送。主任务统一进行 fresh Jekyll 构建、适用现有检查、生成 HTML 稳定锚点比较及桌面/手机阅读后，才能把相应编号记为“已验证”。脚本通过不替代人工来源和学科核验。
- 未做学生试用、英文作答测评或学习效果比较。R17 只是一段试排，后续是否推广需试用。

## 主任务最终构建后状态

主任务在最后共享样式修正后完成最终 Jekyll 构建（11.256 秒成功）。最终清单中的数学／高数 19 项独立脚本均在这次新构建上通过，包括首次记录中留待执行的 first-order 生成集合括号断言；不再沿用修复前 `_site` 的状态。具体脚本名与输出保存于总修复记录所引的测试 JSON，以本次实际清单取代前一版汇总计数。全范围 90 页只读结构核查通过，数学基线 30 页的 782 条原标题 ID 记录全部保留。R17 仍只是短样章试排；实际阅读抽样和来源限制见[总修复记录](implementation-a2-repairs-2026-10-15.md)，未做学生试用或学习效果比较。没有提交、推送或发布。
