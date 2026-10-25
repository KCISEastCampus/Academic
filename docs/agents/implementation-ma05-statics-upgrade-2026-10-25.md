# MA05 静力学分组扩充记录

日期：2026-10-25。分支 `codex/ma05-full-upgrade`，用户指定基准 `d1e93ec`。本记录先于本组正文修改建立；目标和任务定位是实施设计，验证结果另记，不能据此视为已经验收。

## 范围与边界

- 唯一课程写集：英文及 `zh/` 对应目录的 `moments-and-rigid-objects.md`、`centres-of-mass.md`；测试仅 `scripts/test-mechanics-moments.js`、`scripts/test-mechanics-centres.js`；记录仅本文件。
- 已读根 `AGENTS.md`、`RTK.md`、课程内容长期标准 v1.1、公式指南及已认可 forces 双语样章。复用 `reading_layout: true`、公开完整 `worked-example`、每题独立 `lesson-check` 和分别关闭的 Hint / Solution；核心解释在正文。
- 用户授权覆盖样章后的本地扩充；其他线程并行，依指定互斥写集操作，不构建、切分支、提交、推送或改依赖。保留旧题的可靠数据、公式、English Question、原锚点及现有 SVG。
- 资格为 OxfordAQA **Mathematics 9660**，v5.2；M2 全范围 printed 27–30 / PDF 26–29（1-based）。本组覆盖 M2.3 的力矩、刚体静力学与质心，并应用 M2.1 的建模限制；不是 9760，不增加积分求质心。

## 亲自读取的来源与数学证据

2026-10-25 直接打开[官方 v5.2 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，核对正文 9660 与 v5.2，读取 M2.3 的力矩、平行力／二维刚体平衡、对称、质点系、组合体和悬挂条目；明确不要求积分法。主线程另已由资格页进入并核对 M2 全文，本组不把其阅读记作自己的阅读。

本组通过 Python `pypdf` **实际读取**两份仓内 PDF 封面与以下完整相关页，而不是沿用旧研究的“已读”声明：

| 材料 | 实际读取页（printed = PDF，均 1-based） | 提取的关键证据 |
| --- | --- | --- |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf` | 封面 1，Q5 10–11，Q6 12–13 | 9660/MA05 Unit M2 Mechanics，21 January 2025，90 min，80 marks；默认计算器答案 2 s.f.，g=9.8；Q5 非均匀杆、粗糙墙／光滑地、水平绳在高 3 m 处；Q6 三质点加薄板与 O 点自由悬挂，(b) 明确 exact form |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf` | 封面 1，Q5 11，Q6 12 | January 2025，Version 1.0 Final；Q5(a) 40 N 与水平合力为零的理由；(b) 两方向的各两个力矩项与 moments about X；Q6(a) 单位面积质量恒定；(b) 四个质量项及精确坐标；(c) 悬挂角与坐标比 |

独立重建的官方关键计算（用于作者核验，页面题目仍全部 Self-written）：

- Q5：墙法向反力 40 N，极限墙摩擦 16 N 向上，地面反力 229 N。关于 X：`25g d cos65° + 40×3 = 40×11sin65° + 16×11cos65°`，故 `d=3.410770837… m`，按卷首为 **3.4 m**。绳力臂是竖直高度 3 m，不是绳在杆上的沿杆距离；非均匀杆不许令 d=5.5。
- Q6：薄板 6 kg 位于 `(0,d/3)`，连同 2、4、7 kg 三质点，总质量 19 kg。`19 xbar=2(-5)+4(5)+7(0)+6(0)=10`；`19 ybar=7d+6d/3=9d`。悬挂后 OG 竖直，`tan5°=(10/19)/(9d/19)`，故 `d=12.70005811… m`，按卷首为 **13 m**。必须保留板的质量项；原物体坐标轴并不在悬挂后继续固定竖直。

## 设计卡：Moments and Rigid Objects

中心问题：力的总和为零时，物体为什么还可能转动，怎样检查每个接触真的能提供算出的力？

先修：force diagram、分力、简单方程和直角三角比值；缺口分别回到 forces 的 `#force-diagrams`、`#the-resultant-of-coplanar-forces` 和 `#friction-and-limiting-equilibrium`。解释从门的转动、作用线和垂足开始，给出 rigid / uniform / light 的实际含义；完整示范保留原八例，几何图用于区分水平／竖直／沿杆距离，不用图替学生完成独立判断。

| 可观察目标（M2.3 / M2.1） | 讲解／示范 | 独立任务 | 判据、恢复与同目标新重试 |
| --- | --- | --- | --- |
| M1 选择垂距、判断转向，辨认非零力的零力矩 | `#the-moment-of-a-force`、例1 | Q1、`#moment-retry` | 单位 N m、一次投影、作用线过矩心为零；回概念／例1，再做沿作用线移动的重试 |
| M2 选择有用矩心，解平行支承或反推重力位置；力平衡和力矩平衡都检验 | `#equilibrium-under-parallel-forces`、例2–3 | Q2、新Q9；`#support-retry` | 标作用位置、说清消去何力、换矩心复核；回例2–3，再用观测反力反求重量和重心 |
| M3 判断失去接触的支承及翻倒条件 | `#a-beam-about-to-tip`、例4 | Q3、原箱体综合任务 | 失去接触处反力为零、保留支点不为零、范围反力非负；回例4，再做原斜绳箱体重试 |
| M4 区别墙／地／钉／铰链方向，求二维刚体受力并解释符号 | 新 `#contact-forces`、例5–7 | Q4–7、新Q9；`#contact-retry` | 按局部接触取法向、合力和矩同时为零；铰链负分量与普通接触负法向分开；回接触表及例6–7，再做更换连接方式的重试 |
| M5 每个接触使用其法向，比较滑动／翻倒的有效边界 | 例8、正文接触限制、箱体综合反馈 | Q8、新Q9、原独立箱体与斜绳重试 | F≤μR / R≥0 / 支承位置同时满足；明确哪个接触 limiting；回摩擦先修和例8，再做改变接触／力方向的任务 |

后续：Centres of Mass；从该课回来做本章 `#later-check`，并接入口 `#mixed-problems` / `#later-review`。

## 设计卡：Centres of Mass

中心问题：怎样用一个点保留整个物体重量的作用，切走或加上质量后该点怎样变化，挂起来又怎样转？

先修：上一课的重力、力矩、坐标和直角三角形；先解释质量矩与重量矩通过共同 g 联系。板、杆、质点各用正确质量；均匀性指单位面积／长度／体积质量而非外形。公开示范原八例；已知三角形重心作为几何结果使用，不制造积分要求。

| 可观察目标（M2.3 / M2.1） | 讲解／示范 | 独立任务 | 判据、恢复与同目标新重试 |
| --- | --- | --- | --- |
| C1 用带符号坐标及质量加权，解释质心与重心模型 | `#centre-of-mass-and-centre-of-gravity`、`#a-system-of-particles`、例1 | Q1、新 `#particles-retry` | 质量矩单位 kg m、总质量正、每坐标独立、坐标与距离分开；回公式由来，再做三维反向坐标的框架 |
| C2 区别形状对称与质量对称，确定均匀体及三角形中心 | `#uniform-bodies-and-symmetry`、例2 | Q2、新 `#triangle-retry` | 说明 uniform、正确中线比例；回对称与例2，再由已知 G 反求三角形顶点并评价不等质量质点说法 |
| C3 分割组合板、扣除孔，避免重复面积与错误负号 | `#composite-laminae`、例3–4 | Q3–4、新 `#cutout-retry` | 同面密度才用面积；孔的分子分母同时减；用正部分分割复核；回例4，再由余板重心反推孔位置 |
| C4 混合板／杆／质点及不同面密度，用实际质量计算或反推未知量 | `#attached-masses-and-different-materials`、例5 | Q5、原悬挂混合任务、原双支承重试 | 各质量同单位、所有部分均计入、正密度；回例5，再做移除粒子并换双支承的同目标任务 |
| C5 从悬点到 G 建立角度，选择 G 在悬点下方的稳定朝向 | `#suspended-bodies`、例6–7 | Q6–7、原独立任务、新切孔重试后半 | 相对悬点取坐标差，分清物体坐标和实验室竖直；回例6，再做新孔板悬挂 |
| C6 由总重量／质心解双支承，与单点悬挂分开 | `#support-by-two-strings`、例8 | Q8、原双支承重试 | 两张力非负，力和矩检验，不强令 G 在某绳正下方；回例8，再反推密度 |

后续：Newton's Laws；学后做本章 `#later-check`，再到入口的混合与稍后提取任务。每题反馈给定位链接与关闭原解答后可做的新任务；用过 Hint 的作答不记为无帮助独立证据。

## 实施与验收状态

**本组源码与测试已冻结，以下为最终状态。** 修改限于下列七个文件；未编辑其他组、共享测试、forces 五文件、CSS、layout、入口或依赖。未新建课程资产；阅读官方图示的临时 PNG 放在仓库外的授权 visualization 目录。

| 文件 | 实际修改 |
| --- | --- |
| `alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md` | 刚体／轻／均匀、垂距由来、矩心选择、各接触方向与限制；完整保留八个示范及旧题条件；增加 Q9、三个针对性重试和下一课后横梁检查；每题独立边界，共 15 个作答任务 |
| `zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md` | 对应数学、English Question、来源、帮助、恢复路径和目标一致；自然中文解释，旧 ID 保留 |
| `alevel/a2-mathematics/mechanics/centres-of-mass.md` | 质量矩与重力矩的关系、带符号坐标、质量对称、三角形中线、减孔理由、实际质量、悬挂稳定朝向与双支承；完整保留八个示范；增加三个重试及下一课后综合任务，共 14 个作答任务 |
| `zh/alevel/a2-mathematics/mechanics/centres-of-mass.md` | 对应概念、数据、英文题干、公式、帮助及课程路线对齐；保留旧 ID |
| `scripts/test-mechanics-moments.js` | 保留原世界坐标受力／多矩心、梯子、铰链、钉、滑动及倾倒数学保护；补新任务及官方 Q5 重建；两语源码结构与完整 TeX 序列；增加 `--source-only`，默认仍严格核验已有 HTML 的公式和全部帮助 |
| `scripts/test-mechanics-centres.js` | 保留原多边形面积矩、各质量矩、旋转稳定朝向及双支承保护；补三维、逆向三角形、用正矩形条验证孔板、综合任务及官方 Q6；与 moments 相同的两语源码／可选已有 HTML 检查 |
| 本记录 | 写正文前的设计卡、逐项目标映射、实际读取页／题／评分点、最终核验与交接限制 |

### 内容自检与数学检查

- M1–M5、C1–C6 均有上述映射中的主线解释、独立作答、判据、具体恢复链接和不同任务的重试；新题均标明 Self-written，不附官方分值。学习页的题名前移除了会直接提示待判断方法的措辞，使用显式旧 ID 保留定位。
- 公开示范中的完整解法不折叠；所有独立任务各有一个 `lesson-check`，Hint 与 Solution 分开且默认关闭。旧练习的反馈连接到具体讲解与同目标任务，不以“请复习”替代路线。
- 数学上用原始位置和力向量检查多个矩心；孔板另分为四个正面积矩形条交叉验证；悬挂检查水平分量为零且质心在下；接触检查法向正负、实际摩擦上限、支承位置、先到达的边界；原题和新增题均完成作者核算。
- 官方 Q5 与 Q6 的重建结果见来源段，已加入测试；Q5 的两处墙力与绳高 3 m、Q6 的薄板质量和 exact form 要求均保留在教学依据中。另实际渲染并查看 QP 10、12 页图示，核对接触朝向、作用点和坐标表。
- 本组全部旧锚点与基准 `d1e93ec` 自动比对，无丢失；现有 SVG 路径及 title / desc、箭头末端保护通过。中英 English Question 全部逐题匹配；行内与显示 TeX **exact sequence** 完全一致：moments **499 / 499**，centres **475 / 475**。
- 只使用仓内 MathJax，解析本组 **522 个去重 TeX 片段**，无 `merror` 或 `data-mjx-error`。没有安装依赖或生成全站。

### 最终测试与整合反馈

| 检查 | 结果 |
| --- | --- |
| `node scripts/test-mechanics-moments.js --source-only` | 通过，最终重跑通过 |
| `node scripts/test-mechanics-centres.js --source-only` | 通过，最终重跑通过 |
| 本组两语全量 TeX、原锚点、English Question 与 MathJax 临时只读自检 | 通过，499 / 475 段两语分别完全一致，522 个去重 TeX 通过解析 |
| `git diff --check -- <本组六个已有文件>` | 通过；只提示现有 Git 的 LF/CRLF 转换设置，无空白错误 |
| `node scripts/test-mechanics-moments.js` | 读取主线程首轮生成的 HTML，通过；本组没有运行构建 |
| `node scripts/test-mechanics-centres.js` | 最小空白修正后读取主线程首轮 HTML，通过；数学断言保留 |

主线程首轮构建（主线程报告 39.343 s）发现 centres 新增质量矩式在 HTML 的精确字符串检查失败。亲自读取两语源和相应 `_site` 文件，确认 Kramdown 已正确输出公式本体，仅去掉 `$$` 内两端空格：源码原为 `$$ (m_1+m_2)\bar x=m_1x_1+m_2x_2. $$`，HTML 为 `\[(m_1+m_2)\bar x=m_1x_1+m_2x_2.\]`。本组只把两语源码规范为无两端空格的 `$$...$$`，没有放宽或删除数学断言。随后上述四个本组 source / 已有 HTML 命令全部通过。主线程保留首轮失败证据，最终整合重建由主线程负责。

### 冻结与待主线程事项

以下 SHA-256 对应最终冻结的六个课程／测试文件；本记录写入后不再修改源码。

```text
6bb1ebddb8a27eab80ba814c868cba0c8ab6fc8f2aa9162c5f19b763e5f0f83a  alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md
4251558b8caddfa3c43bf8b2abc3d2608f76a9d742f7546c30e3f5b1f327f619  alevel/a2-mathematics/mechanics/centres-of-mass.md
bf929cc8b6527517e3319a4f135bce05945905759a02243476e04211be6a4361  zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md
9f0461e0f10a304013f79a2c5a05b7087c64b5f0342668b1dfda40e2ef8fd4a4  zh/alevel/a2-mathematics/mechanics/centres-of-mass.md
e53aef2cd785879eb49ff9da38c8e77e827ef51f2593296d8afa5779a27bc439  scripts/test-mechanics-moments.js
58a85c6dbfa6527514c1077dee10c23e5b3e976fe1729cb0dc9cfb21a8b321a9  scripts/test-mechanics-centres.js
```

本组完成的是课程直接修改、作者内容自检、source/math 及主线程已有 HTML 的限定核验。**不把作者核算称为独立内容审查，也不宣称已有学生学习效果证据。** 依分工交主线程：最终 Jekyll 重建、全局 bilingual / transfer 回归、跨组与入口新锚点验收、桌面／手机实际阅读、键盘与折叠操作、语言切换和主题检查。本组不重复运行全局检查，不提交或推送。学生试用未进行，须单独记录；此项不阻止完成本地交付。
