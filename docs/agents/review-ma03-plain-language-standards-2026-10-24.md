# MA03 通俗化独立审查 — Standards

- 基准及审查时 HEAD：`19db6ca1640fb47fd541b3f8fb3d45d510d41b09`（main / PR111）；本轮未提交改动。
- 范围：`alevel/a2-mathematics/` 与 `zh/alevel/a2-mathematics/` 的 15 课、入口、速查用途说明，共 34 页；另依主代理追加范围审查 3 个检查脚本修补。
- 依据：根 `AGENTS.md`、课程长期标准 v1.1、`docs/MATH_FORMULA_GUIDELINES.md`、`implementation-ma03-plain-language-2026-10-24.md`。仅 Standards 轴。
- 2026-10-24 18:36（Asia/Singapore）初审收尾；18:42 对主代理修复后再次冻结的最终源码完成独立复核。以下记录最终哈希。
- 状态：**Standards 结案：2 项 P2 均已修复并独立复核关闭；当前无未解决发现**。只写本记录，不改课程／测试／其他记录，不构建、不提交。

## 主要发现及处置（少于 400 words）

以下描述初审冻结版的问题；最终版两项均关闭，不是当前仍存在的问题。

1. **[P2] 参数非零条件被写成驻点的必要条件。** `alevel/a2-mathematics/parametric-equations.md:249`、`zh/alevel/a2-mathematics/parametric-equations.md:251`，稳定锚点 `#stationary-points`。新增说明断言水平切线的横向参数变化率必须非零；这把比值公式的适用条件当成几何定义，也与本页 EN172／ZH174 的“两率均零须另查”冲突。反例 `x=t³, y=t⁶`：在零点两个参数导数均零，消参却是 `y=x²`，原点有水平切线。初学者会据此排除有效驻点。最小修正：将这一步限定为“当 dx/dt 非零、可以使用上述比值时”，两率同时为零仍检查曲线或极限；中英文同步。**已关闭：最终 EN249／ZH251 已限定比值适用条件，并明确两率均零时消参或求极限；用该反例独立重建后成立。**

2. **[P2] 智能引号检查漏掉生成 HTML 的独立公式。** `scripts/test-differentiation.js:89`（`smartPrime`；调用 :127）、`scripts/test-differential-equations.js:85`（调用 :123）、`scripts/test-parametric-equations.js:79`（调用 :117）。复用的 `formulae` 只识别美元定界符；现存生成 HTML 将独立公式输出为 `\[...\]`（实读 `_site/alevel/a2-mathematics/differentiation/index.html:1131`）。隔离执行新增函数：`smartPrime('\\[y’=2x\\]')` 返回 false，而旧广域检查返回 true。修补避免了 quantity’s 误报，却失去这一类真实导数错误的检出；现有正例只覆盖美元定界符。最小修正：同时提取实际生成的独立公式定界符，补这一正例，保留正常撇号反例；三脚本一致。**已关闭：最终三个 helper 同时提取美元、方括号及圆括号定界符；独立执行实际 helper 的 21 个正反探针全部符合预期。**

## 实际阅读和重建范围

逐课阅读双语全部改动，联系声明先修、相邻公式／示范步骤、变动提示和解答的折叠边界、恢复表与重试／稍后路线。不是按标题数作结论。下表记录实际重建的代表性完整推理；未改历史题未穷尽重算。

| 源文件（两种语言同名） | 实际重建与条件检查 |
| --- | --- |
| `functions.md` | 限域二次式范围 [2,6]、分段／有限定义域、复合先后顺序；反函数正根选择及定义域／值域互换；有理函数逆算检查一一性。 |
| `modulus-and-transformations.md` | 从旧点 (p,q) 重建 2f(2x−4)−1 的新点 (p/2+2,2q−1)，联系逐步变换表；模方程分类覆盖及候选条件。 |
| `algebraic-fractions-and-division.md` | 三次式除 x+2：商 2x²−x−3、余数 10；比较系数、长除法逐行减法及乘回检验；原分母限制。 |
| `partial-fractions.md` | 重复因式 A=−2、B=4、C=2；假分式积分先保留商 1，再求 −25/8、9/8 两系数和对数原函数，排除 −5、3。 |
| `binomial-series.md` | 重复因式拆分三系数均 1，合并得 3+2x+5x²+4x³；乘积得到 1−1.5x²−x³；范围共同满足且收敛不保证截断精度；√4.08 约 2.01990。 |
| `trigonometric-functions-and-formulae.md` | 4sinθ−3cosθ=5sin(θ−α)，α≈36.8699°；平移后的极值 7、−3 和取得角；变换角区间及余弦方程端点完整性。 |
| `exponential-and-logarithmic-functions.md` | 6% 增长首个整数年 7、15% 衰减首个整数年 6；取对数、不等号反向、相邻整数回代；对数原输入限制。 |
| `differentiation.md` | 隐式 x²+xy+y²=7，保留乘积／链式项，整理得 −(2x+y)/(x+2y)；(1,2) 切线斜率 −4/5、法线 5/4；除数条件。 |
| `parametric-equations.md` | x=t³、y=(t+2)² 的参数求导，t=−2 得 (−8,0) 为极小，t=0 为竖直切线；另用 x=t³、y=t⁶ 验证发现 1。 |
| `integration.md` | 中文全课连续阅读；u=x+2 的全部因子／微分改写、xe^(2x) 分部四量与第二次积分、对数分式及定积分换限 15/4；Q5=(1−ln2)/2、重试 C=ln4−3/4；稍后两题的原函数与定义域。英文全部改动及相应示范衔接亦读。 |
| `integration-applications.md` | 薄片半径及整体平方；横轴旋转 26π/3、纵轴旋转 8π，后者用高度 2–6、半径平方 y−2；有向量与总面积的先分段后相加。 |
| `differential-equations.md` | y′=y(y−2)、y(0)=1：先查平衡解 0、2；分离／部分分式／对数及负比值分支，得 2/(1+e^(2x))；回代导数和 0<y<2。 |
| `numerical-methods.md` | 按原 [1,2] 起步，实际重走 1.1、1.2、1.3、1.4，再 1.31、1.32、1.33；连续／单调条件、两次立方根迭代、1.3245–1.3255 舍入包围；四中点积分 2.625。 |
| `vectors.md` | 垂足完整例：一般点→连接向量→点积为零→λ=2→H=(3,4,5)，距离 √5；在线与垂直双核对，勾股说明最短；区别位置／方向向量。 |
| `mathematical-proof.md` | √3 无理：最简分数、模 3 的全部三类、平方整除推出原数整除、两数公因子矛盾；反例必须同时满足起始条件且使结论失败。 |
| `index.md`、`quick-reference.md` | 双语导读／15 主题说明及速查用途；中文综合 A–C、稍后 A–C 的题面、提示、完整解答和回补，核对方法选择仍留给学生；未重审速查全部历史公式。 |

全课读改动不表示逐字重读全部未改正文。对每课选例，实际把新的解释接回已声明的先修与原有算式；两项发现以外，所读主线未发现需要猜未教术语或被删关键条件才能继续的具体断点。

审查期间初始哈希曾变化的 7 份课文为 functions、algebraic-fractions-and-division、binomial-series 的双语及中文 partial-fractions；已经重新读取其冻结版全部改动，未将旧快照结论直接套用。主作者先冻结的 integration、numerical-methods、index、quick-reference 双语 8 页至本快照哈希一致。

## 只读核对与边界

- 独立只读比较基准与最终 34 页：已有显式 IDs 的顺序、374 个 lesson-check 块的折叠前题面、回补／重试／稍后链接目标均保持，没有例外；DE 双语只增补一个解释段锚点 `separation-why-it-works`。逐课改动阅读未见将新增答案移到独立任务折叠之外。这些是源文保持性证据，不是学生学会的证据。
- 3 个脚本全部最终差异及相邻调用均已读；初审隔离执行三个字符串探针，结案时读取每个实际 helper，再分别执行 4 个错误 TeX／3 个正常文字探针（共 21 个）且结果符合预期；未运行项目测试、未改测试、未构建。实读现有生成 HTML 的公式定界符，仅用于漏检复现，不宣称已完成桌面／手机或键盘阅读验收。
- 主代理告知构建、26 项检查、sourceguard 和浏览器流程的状态，均由主代理另记，本记录不将其转称独立复跑通过。
- 不重查官方 PDF／评分标准的全文及此前历史题，不把作者来源记录当作本次独立实读；本轴不代替 Spec 轴或学生真实试用。未接触无关 AS L01、其测试或证据的内容审查／修改。
- 本轮没有 runtime 产品逻辑改动；双语教学正文不适用代码重复抽象。三个小脚本修补不需引入新共享框架；就具体检出缺口做最小修正。
- 学生试用／学习效果：本审查未实施，不能用数学重建、结构保持或脚本通过代替。

## 修复后独立复核 — 已结案

2026-10-24 18:42（Asia/Singapore），主代理确认修复并再次冻结后：

1. **发现 1 关闭。** 重读双语 `#stationary-points`（EN249／ZH251）及 EN165–172／ZH167–174 的导数比值条件。现在只在横向参数导数非零时使用比值，同时为两率均零保留消参／极限检查。独立代数重建反例：对所有实数 t，t⁶=(t³)²，且 t³ 覆盖全部实数，故曲线正是 y=x²；原点斜率零，而两参数导数也零。已读 `scripts/test-parametric-equations.js:61–67` 新反例检查：既查零点的 0/0 不可用，又在非零样本核对比值=2x。样本检查不代替上述一般论证。
2. **发现 2 关闭。** 已读三个脚本相对于基准的全部最终差异，提取当前实际 `formulae` 和 `smartPrime` 函数进行隔离探针。美元单／双定界、生成方括号和圆括号公式内的错误 y’ 都被检出；三类正常 quantity’s 加合法 prime 公式不误报。三个 helper 共 21 个结果一致，无待修缺口。
3. **追加 DE 修复复核。** 连续重读 EN35–95、ZH37–97：先用 2xy/y 与链式法则连接到对 y 的积分，例 1 保留常数解、绝对值、符号和积分常数；例后定义 G 为 1/g 的原函数，并明确例 1 的 g=y、G=ln|y|。变量分离仍限定 g 非零，除去的常数解仍回到原方程检查。两语说明相符，未把引入 G 的工作留给初学者猜。新锚点用于该说明，不增加功能。
4. **中文自然对数首句复核。** 重读 `zh/alevel/a2-mathematics/exponential-and-logarithmic-functions.md:166–180`，从“2 的几次方是 8”到 e 为底、对数与指数等价、正输入条件衔接清楚；与英文含义一致，没有引入额外考试要求。
5. **最终范围核对。** 相对初审冻结哈希，最终只有 DE 双语、parametric 双语、中文 exponential/logarithmic（5 份课文）与三个脚本变化；上述全部重新阅读，其余 29 份已审课文哈希一致。最终只读保持性比较已按“保留已有 ID、允许新增解释锚点”核对，34 页／374 任务块无题面或路线目标差异。

结论只限本次语言修订及追加的三个脚本差异：**无未解决 Standards 发现**。未执行构建、完整项目测试、浏览器或学生试用；这些边界不因两项关闭而改变。

## 最终冻结快照 SHA-256（修复后）

路径前缀分别为 `alevel/a2-mathematics/` 与 `zh/alevel/a2-mathematics/`。这是文件字节哈希，不是提交号。最终快照共 34 页与 3 个脚本；初审位置及问题复现在上方保留。

| 文件 | English SHA-256 | 中文 SHA-256 |
| --- | --- | --- |
| `algebraic-fractions-and-division.md` | `A1D4DB9AEB6E6A436C9EEBE031BC56A0859F1573874C26601F77732067960DFB` | `DA95CFE1C282F3640B9F880F9EF50222A957E3261349C39454193D0E61C9165B` |
| `binomial-series.md` | `00981B91432B7CEAA69E1A5C0173B67CC88707509151D6A31AA32C91FB004A4A` | `A9ABAFC44A4E2A5133359536FC9855D77F1ED8F0F4496904AC33D1A8D75811D8` |
| `differential-equations.md` | `7726D42B92F9675177A1267755DD79D0F26DDAF9C06252266C97BBFE6E7A2CFD` | `2AE86967AC0E0F3CD7E7C2CF3478E053BB1ECE851BE1AF06866333F4E20CBE60` |
| `differentiation.md` | `538D5C6B3D4A59B80A7B396D8710C4676E727FB5876BC0D2FB3E7AB459F9DD77` | `49AF1C5E1B01389623B4CE1767709755BB115D221A3FB5453FDE27810B3D9D27` |
| `exponential-and-logarithmic-functions.md` | `FD195E63312DE9D79F2CC2510E3B6E6929AC7C4EBC0686B89704CB52817DD4B4` | `333736BBB6F26351F47D6690A678D5557DF0197D1A7B78F48DB9DC31C9D67767` |
| `functions.md` | `02AC180E72C5A331DEA8A433774E1C3DAFF7978FB5C1B1D2C2ED6764340138B3` | `DD23542A5AB216BC175463EFFFE8852C39762C30106FF05F81443B25571025CF` |
| `index.md` | `CED750A088E7EBF6C728A39D0995E32046C4F212F95DF3514794E582448C109F` | `5A175D97C5023B8525A18887728ABC1F5DD854E1C45341D5BE468EB59484770B` |
| `integration-applications.md` | `1FB5C82373A35E3B4FD40E9A93D518D14EC8CBF5A630A2BA6858B18E9C8F9159` | `5CD28A9DD821AEFE4CA54B63D9C089E393E2EA2BD0C831DFEF0CBE2B0336B1F4` |
| `integration.md` | `7D730A1A935AA44FFFB6D25B9D30C579DD543D312ABA11FD0F67BE2DF876E5E6` | `D7CC14573B3C07F170F432BBC9501AC8E978190DFD3ADCAE917475BD6C4672E0` |
| `mathematical-proof.md` | `C109780273303C84C28D3F5B37B1CDAE00CFA5645D8327C153FDE6353D99F9F1` | `C6D28C98060F1C4BA874BB2615429FA9E8504A294ACB13B8E1E04015580C1EB8` |
| `modulus-and-transformations.md` | `1DC841C7778EBDEA0F7DD37E321BDFC6878AFADDB2A4F3C6DBF7222136C6DC01` | `376E723CA5ECEBA0437557885D012FE051CE269090F465075533D42D4FBB6319` |
| `numerical-methods.md` | `A82494E27462EFC09F204C3E0BBC04842D707A6B18A155C456BED019D3C6A3EB` | `C31B994547F00C570D206F5D028212DBB487EFEBD15ECBAB8BA2B5464521D6AD` |
| `parametric-equations.md` | `7199774A73EF015CCA1474EAFA9616F41BC1359D55EE8CD1A3F3D2FCAF06CBD0` | `2A749021C617D0053898CC138B5BC1692F40AF12024222C1F056CA02D65E670C` |
| `partial-fractions.md` | `528952E2584336BDFFDC41828BAE8ACFA07C6894C874580DAA3EDE098B818029` | `868679593DEE21AC5EB074937545B3066A1F61E85375D094B08FBA2F7EED269C` |
| `quick-reference.md` | `D94F9B71F3EC5D490B7B9EBD16CE954C1282A7159B99CDF7194350AD74CD654B` | `4311523B8F3FEDCE8699B056BC911E4B1C790BB03102BD407088BF1C03123D28` |
| `trigonometric-functions-and-formulae.md` | `E955F94EB779B6340D37A325F98B9E7060AE87E30B80B5E7C0A2C0067625F6C8` | `9E6F081360591328C472433DF604E7EDECCB7C236CCB22096C33AAFC1A6230C6` |
| `vectors.md` | `0E594F3FA04FD3BAD75E8D1DC1AF9058AC1B331F163C28757251855D4E943685` | `07C7B144710A79D3BD993FA8FCB53AF6CCA7C6F5AC180FA393BEBC62CFA5C1F4` |

| 检查脚本 | SHA-256 |
| --- | --- |
| `scripts/test-differential-equations.js` | `47C45B0180B91692D7C16BBF07F6336E22F9A9C74FCA2604BAA0BDD0CD6A8B2E` |
| `scripts/test-differentiation.js` | `33CE94DF463746AD179CC5ABB061A555E386179AEE9E7A5518DDA9DE555F851C` |
| `scripts/test-parametric-equations.js` | `5D6FE66B6A4E838F6E62B1EC9BC6E956F7D9308BC2E8C173EBEC81B626E8B0E8` |
