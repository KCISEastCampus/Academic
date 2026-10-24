# MA03 微分组独立交叉复审

复审日期：2026-10-23。作者：Gibbs；复审者：geometry/proof 组代理，本轮未参与这六页的编写。工作树：`D:/GitHub/Academic-ma03-numerical`；比较基准：`bb18c70fb93942ffe0f00f2795e9e1d7f89c3ebe`。审查覆盖 differentiation、parametric-equations、differential-equations 英中六页及作者实施记录，最终版本包含 Gibbs 的 TeX prime 补丁。末节 SHA256 绑定本结论。

## 判定与作者待办

**内容审查通过：本轮未发现需要 Gibbs 追加修订的数学、官方范围、核心目标任务、来源身份或双语帮助问题。** 这是针对下列版本的源码与内容判定。三个专题脚本 source-only 通过；独立复算、条件论证与任务审查另外完成，不以脚本通过替代内容审查。

技术事项 **T01 的作者源码修复已确认，主代理技术回归通过**。2026-10-23 用户转达：主代理最终修复构建耗时 26.221 秒，differentiation、parametric-equations、differential-equations 的默认 HTML 专题测试均通过，数学检查与原 prime 断言保留。这些构建和默认 HTML 测试由主代理执行，不计作本复审者独立执行。浏览器实际阅读验收仍在进行，学生试用未完成。本复审者未执行 build、commit 或 push，仅写本报告，未修改课程、专题测试、作者记录、共享样式或布局。

需作者追加修订：**无**。T01 的主代理技术回归已通过；后续浏览器检查若有新发现，另行记录并核对受影响版本，保持原测试。

## Standards：长期标准 v1.1 与项目制作要求

依据本工作树 `AGENTS.md`、`docs/agents/course-content-standard.md` v1.1、`docs/MATH_FORMULA_GUIDELINES.md`。已读六页完整正文、提示、解答和实施记录；对照基准检查受影响内容。采用 Standards／Spec 两条审查线，未把作者的自检结论直接当作独立证据。

| 审查点 | 实际证据与结论 |
| --- | --- |
| 设计与起点 | 实施记录有三页设计卡和 D1–D4、P1–P3、E1–E3 的证据表。六页首部给出学习顺序、具体先修锚点及回补入口。这里只确认记录及内容对应存在，不凭静态文件证明设计卡的历史写入时序。 |
| 连续示范 | Differentiation E3 在首次使用复合指数导数时先讲链式步骤，再保留乘积两项；E8 展开收集导数。Parametric E4 连续对应表、图、点及箭头；E7 展开一般点切线整理。DE 的分离主线说明链式依据，#example-rate 连续演示速率定比例常数、积分、初值定积分常数与回代。 |
| 独立证据与支架撤除 | 原题标题中性化并保留旧 ID；#check-mixed 未指定法则，参数新轨迹要求学生自己作图并反向构造参数，DE 延后题改用相对平衡温度。独立任务的关键条件、方法和结论未由可见题名或相邻示范直接代答。 |
| 帮助边界 | 每个 lesson-check 各有题干、一个默认关闭的提示和另一个默认关闭的解答；源码中无嵌套或跨题包含。题块数为 13／11／9，来自目标需求。不能据题块数推断教学达标。 |
| 错误、恢复与重试 | 规则遗漏→#retry-rules；隐式除零／分类→#retry-geometry；反函数符号与范围→#retry-inverse。参数范围／方向→#retry-trace，参数方向与 0/0→#retry-tangent。DE 失解／分支／原定义域→#retry-solution，常数、速率与非指数模型→#retry-model。均有具体回看入口与新任务。 |
| 延后与下一步 | 各页 #later-review 均可定位；分别在参数方程、积分、数值方法之后返回。下一步说明进入下一主题所需的独立能力，并要求记录帮助使用。 |
| 旧资产和结构 | 基准中文显式旧锚点分别 24／22／18 个全部保留；英文原自动标题 ID 已显式固定。原双语元数据保留，仅目录层级选择调整并增加 reading_layout。六页无标题跳级。原参数抛物线 SVG 未改，用于已完成示范，新独立轨迹仍需学生真实作图；未用压缩速查替代作图任务。 |
| 双语语义与帮助 | 英文题干逐块相同；完整 TeX 序列分别 348／387／390 项相同。另逐段核查中文解释，包括原定义域、主值符号、参数逆向时的极值分类、0/0、负分支、常数解、单位及模型限制；未见删减必要帮助或改变条件。序列相同仅是辅助证据。 |

未发现尚待作者处理的 Standards 内容阻断项。最终 HTML 中的版式、目录选择、提示控件键盘操作、语言切换及手机重排另见未验收项。

## Spec：官方范围、来源身份与评分过程

从[当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)核对目标为 9660/MA03；实读[大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，PDF 36 页。P2.3 位于印刷 p22，P2.6 p23，P2.8 p24。范围为笛卡尔／参数双向转换、标准及组合求导、简单隐式／参数求导、一般点切法线、一阶可分离方程及应用；增长衰减另联系 P2.5。参数与隐式二阶导数不要求，正文没有将它们设为必学方法。反三角导数保留作原有推导，并明确不冒称 P2.6 独立枚举的必背清单。

官方出版物采用可核验镜像：[January 2025 MA03 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf)、[配套 MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)。本次读取本工作树既有 PDF 缓存，QP 32 页、MS 22 页；封面核对 9660/MA03、Unit P2、13 January 2025、QP 总分 120，MS January 2025 Version 1.0 Final。未使用资格页误指 FM01 的 sample 链接。

| 实读位置 | 本次核对的过程及边界 |
| --- | --- |
| Q3：QP pp6–7；MS p7 | 图像与文本均读。核对链式内层因子、乘积两项、商的顺序及要求的因式整理。不能把只给最终导数当作满足 show 的全部证据。 |
| Q11：QP pp20–21；MS p17 | QP p20 和 MS p17 看图，QP p21 文本阅读。核对指数／混合乘积隐式求导、收集导数、驻点条件、代回原曲线求精确坐标。 |
| Q12(b)：QP p23；MS p19 | 图像与文本均读。核对分离、两个积分、常数、代入条件、解出指定变量。课程新题另行核验原方程定义域和分支，没有机械照搬官方答案的简写作为全部条件论证。 |
| Q13：QP pp24–25；MS p20 | QP p24 和 MS p20 看图，QP p25 文本阅读。核对两个参数导数、比率、同一参数的坐标、切线及消参。 |

六页题目均明确标为自拟，情境数据不冒充实测；未将官方分值分配给自拟题。实施记录的实读范围与上述 PDF 题号、页码及过程匹配。本次只对所列材料声称核对，未检查其他考季或教材页码内容。

### 逐目标独立内容核验

| 目标 | 讲解→独立任务→恢复证据 | 复算／条件结论 |
| --- | --- | --- |
| D1 组合求导 | E1–5 → Q1–4、#check-mixed(a) → #retry-rules | 混合题结果为 exp(x²)(2x²−1)/x²，原域 x≠0；新重试两题分别为 2x sin(1/x)−cos(1/x)、(1−2 ln x)/x³，原域分别 x≠0、x>0。 |
| D2 倒数导数、直线、显式驻点 | E6–7 → Q2、Q5–6、#later-review(a) → #retry-geometry | x² exp(−x) 的驻点 (0,0) 极小、(2,4 exp(−2)) 极大，法线 x=0、x=2。圆在 (3,0) 切线竖直、法线水平；x³ 的驻点拐点由非极值与凹凸变号共同确认。 |
| D3 隐式及一般点 | E8 → Q7、#check-mixed(b) → 几何重试 | 对 x²+2xy+3y²=6，梯度系数为 a+b、a+3b。所给切／法线经过同一点、方向正交；系数同时为零仅给原点，原曲线不含该点。a+3b=0 时确为竖直切线，不能作有限斜率除法。 |
| D4 反三角推导与范围 | E9 → Q8、#later-review(b) → #retry-inverse | arccos(2x−1) 的函数域 [0,1]，导数 −1/√(x(1−x)) 仅在 (0,1) 有限；ln(sin x) 要求 sin x>0；arcsin(x/2) 的函数域与有限导数区间分别为 [−2,2] 与 (−2,2)。 |
| P1 双向转换、范围与方向 | E1–4、反向构造段 → Q1–2、#check-curve → #retry-trace | 新轨迹 x=(y−2)²、0≤y≤3；依次经过 (4,0)、(0,2)、(1,3)。反向构造 x=u²、y=2u、0≤u≤2 恰覆盖指定弧段。左半椭圆从 (0,3) 经 (−4,0) 到 (0,−3)，端点包含。 |
| P2 参数导数与一般点直线 | E5–7 → Q3、Q6、#check-general → #retry-tangent | x=2 cos t、y=3 sin t 的切线 3x cos a+2y sin a=6；法线 2 sin a(x−2 cos a)−3 cos a(y−3 sin a)=0。用参数速度独立核验方向、正交和两个轴点；速度不同时为零。原法线再交点题的第二交点也独立复核。 |
| P3 驻点、方向与退化 | E5、E8 → Q4–5、#later-review → #retry-tangent | x=−t 的重试按 x 增大分类：(−1,−2) 极小、(1,2) 极大。两导数为零的直线参数化仍有非零斜率。延后题 t=±1 水平、t=0 竖直，点和切／法线均正确；表、范围及在 (3,0) 自交的两参数与 y²=x(x−3)² 一致。 |
| E1 分离、条件、常数解 | E1–3 → Q1–2、#retry-solution | 负分支 −√(9−x²) 在含 0 的最大区间 (−3,3) 满足原式，端点 y=0 不能补入。另题常数 y=1 必须单独检查；非恒定解族不满足该初值。保留对数绝对值与初值后的符号选择。 |
| E2 建模、两种常数与单位 | E4、#example-rate → Q3–4、#retry-model | 排水 V=6/(2t+1)，k=1/3 L⁻¹ min⁻¹，所给速率为负导数；体积不会有限时归零。平方速率质量 m=18/(t+1)，k=1/18 g⁻¹ h⁻¹，连续减半分别耗时 1、2 小时。堆高 (8t+1)^(1/4)、到 3 m 用 10 min、k 单位 m⁴ min⁻¹ 均正确。 |
| E3 增长衰减与预测 | E5–6 → Q5–6、#later-review → #retry-model | 精确对数、百分比基数、剩余／减少量正确。冷却解 T=20+60 exp(−(ln 2)t/2)，T=35 在 4 min；在 t≥0 上 20<T≤80，不能到 10。采用温差及相应物理假设，未外推成无条件真实规律。 |

以上先从题干独立推导并核查分支、零系数、符号变化、坐标和单位，再用内存中的独立五点差分／原方程残差、参数方向正交与精确有理算术辅助交叉检查；合计 77 个抽样点通过。抽样只用于查算术或符号差错，全区间、端点排除与恒定解论证来自独立数学推理。新增答案逐题核算，原题亦检查其保留推导与结论。未调用 CAS 或声称计算器按键已验收。

## T01：导数 prime 被 smart punctuation 改写

- **发现来源与影响：**用户转达主代理统一 HTML 测试发现。复审亦在补丁前 `_site/alevel/a2-mathematics/differentiation/index.html` 1133、1453、1599 附近以及 DE HTML 1097、1401、1465 附近读到弯引号，例如应为导数的 y 后出现 U+2019。它会损害公式含义／渲染，不能靠删除测试消除。
- **作者修复：**Gibbs 在 differentiation 英中页和 DE 英中页将数学块的一阶导数改为显式 `^{\prime}`；已有二阶 `^{\prime\prime}` 保留。参数方程无须修改。修复涉及函数、复合表达式和 V、m、T 等速率符号；保留原测试和普通英文撇号。实施记录第 76 行起记载该修复。
- **本轮复查：**重新完整扫描六页数学块，未发现 ASCII 导数撇号或弯引号；双语公式序列仍逐项一致，三个 source-only 脚本重新退出 0。修复后数学含义、目标、条件、帮助与来源判定不变。以末节补丁后 hash 冻结。
- **主代理技术回归（用户转达，非复审者独立执行）：**2026-10-23 主代理最终修复构建完成，耗时 26.221 秒；differentiation、parametric-equations、differential-equations 三个默认 HTML 专题测试均通过，数学检查与原 prime 断言保留。T01 标为“作者源码修复已确认；主代理技术回归通过”。此前独立审查读到的是补丁前 HTML，该历史发现不作为修复后的失败证据。浏览器检查仍在进行；本项通过不代表真实 MathJax、桌面／手机和交互阅读验收已完成。

## 运行检查与未验收项

本次在目标工作树实际运行，三个命令均在 prime 补丁后再次退出 0：

```powershell
node scripts/test-differentiation.js --source-only
node scripts/test-parametric-equations.js --source-only
node scripts/test-differential-equations.js --source-only
```

另执行六页相对 bb18c70 的 `git diff --check`，通过；只读核查六页源链接目标及锚点存在、旧 ID 保留、元数据、标题顺序、数学块非 ASCII 竖线用法、逐题帮助边界。数学独立核验在内存中执行，未创建辅助文件。专题脚本仅作辅助阅读与执行，不在本轮写入范围。

主代理技术回归结果另由用户于 2026-10-23 转达：最终修复构建 26.221 秒，三个默认 HTML 专题测试通过，数学与原 prime 断言保留。本复审未独立运行这些构建或默认 HTML 测试，未据此扩大原有独立核验范围。

尚未验收或未获结果：全局检查、真实 MathJax、桌面／手机重排、键盘折叠操作、目录和语言切换的实际定位。浏览器检查仍在进行，等待主代理记录；本报告不以旧 `_site` 或源码测试替代实际阅读证据。学生试用未进行，不能据内容审查推断学习效果。

## 最终版本 SHA256

以下七项在写报告前重新读取，主代理技术回归状态更新时再次核对均未改变；已等 Gibbs 的 prime 补丁及最终冻结记录落盘，参数方程两页保持初始冻结 hash。后续若改变任一正文或帮助／条件，应重核受影响结论。报告本身不写入自己的 hash，避免自引用。

| 文件 | SHA256 |
| --- | --- |
| `alevel/a2-mathematics/differentiation.md` | `b4e0a6f0183f114e86de3c1136b046a9e076bc3a29a4dec97076eaead02a7d10` |
| `alevel/a2-mathematics/parametric-equations.md` | `7add90f30eed90b8c61a0b6dd1195bfba3b0486333592848c5c8106931d66637` |
| `alevel/a2-mathematics/differential-equations.md` | `6599ea0ae0b3cfa7bf79052987abafbc0dc1237ae0f02899aaa0ac504601579e` |
| `zh/alevel/a2-mathematics/differentiation.md` | `80b2f212a2f69c27f8c832a298fc8ae9ab5fc098c05de017b1ef79f5b8186ed2` |
| `zh/alevel/a2-mathematics/parametric-equations.md` | `ff2a0e39ea5e7337b0bdfd7e5216a8b34226b079b4c4a18bd7ae15652c8419b9` |
| `zh/alevel/a2-mathematics/differential-equations.md` | `46389cbb6d82eca2fbe0861edb6642a6edac2ea4c1b54612096ad72b4cfa7188` |
| `docs/agents/implementation-ma03-differential-rollout-2026-10-23.md` | `d5d38b76214cb5fd156b75b40c548859d66a2cfbcab54ffbb72f0bf1c47ed3b7` |
