# IGCSE geometry reasoning 制作记录

日期：2026-10-27。身份：有界作者；仅本地草稿，不提交、不推送、不发布。遵循 AGENTS、course-content-standard v1.1 和主路线记录。四个固定 slug 为 angles-and-polygons、congruence-and-similarity、circles-and-proof、constructions-loci-and-bearings，中英各一页；共享布局、索引、测试及已认可分数样章不编辑。复用 subjects / reading_layout / worked-example / lesson-check，subject 为 igcse-mathematics。

当前课程决策：按用户最新说明，仅制作学校的 Extension 单一路线，包含所需共同基础。下文 Core／Extension 列位用于保留官方来源核对与历史制作证据，不代表两类学生路线。学生页按概念自然递进，不再显示 Core 分流或双群体服务声明。最新冻结以文末“Kuhn 发现修补后最终冻结”为准。

## 实际来源阅读（先于设计与正文）

以缓存 PDF 的 regular `page.extract_text()` 阅读；数学图和层级列另以 Poppler 渲染核对。页码优先写 PDF 实际序号，括号为印刷页。

- specification.pdf，9260 Version 5.1：PDF 18–21（印刷 19–22），G1–G9、G12–G13、G17。上述四页已看渲染，特别核对 Core/Extension 列。G1–G6、G12–G13 为共同基础；G7 全等条件、G8 圆定理、G9 证明及 G17 相似面积体积在 Extension 列。G8 圆词汇、G7 全等相似概念与相似长度为 Core。**相似面积体积是 G17，不是 G18；G18 是弧长扇形，交另一组。**
- 1C QP 封面及 Q10 PDF 10；MS PDF 6：等腰三角形 74° 的两种位置，74/74/32 与 74/53/53。该页提取含 MS 图中数字。
- 2C QP 封面、Q3 PDF 3 / MS PDF 4（D）；Q19–20 PDF 18–19 / MS PDF 8（252°；角度证明要求完整方法）；Q25 PDF 23 / MS PDF 10（交弧、垂直平分线及门的距离限制）。Q20、Q25 已看渲染。
- 1E QP 封面、Q19(a)(b) PDF 18–19 / MS PDF 10：35°，100°；理由需写 centre/circumference。两道题图均已看渲染，确认直径及所对弧。
- 2E QP 封面、Q25–26 PDF 22–23 / MS PDF 14–15：SAS 对应边与夹角 135°；体积 500×1.2³=864。Q25 已看渲染。MS Q26 的容许区间文字 [863,854] 与精确答案相冲突，视为原文疑似排字错误，不沿用到教学反馈。
- 四卷封面实际均为 **Specimen 2018**；网址文件名 2016 不是考季。未声称读过所有题。来源网址以公共 manifest.json 为准，不修改缓存。

## 设计卡与逐能力映射（先于正文）

中心问题：图上有什么确定条件，哪些结论能用理由推出，哪些必须真正画出来？必要先修为四则、简单方程、比例；角理在第一页补齐，全等在第二页建立，圆证明再使用。所有任务自拟，无官方分值；保留英文 Question，双语同题同条件。图为精确教学示意，不代表实测。

| 能力与条目 | 先修/回补 | 讲解与示范锚点 | 独立产出锚点 | 判断、错误恢复与新重试 |
| --- | --- | --- | --- | --- |
| G1 标点线角、顶点边平面、平行垂直与正规图形 | angles #notation | #notation、#angle-facts | #practice-notation | 自画标注而非背词；#retry-notation |
| G2–G3 相交/平行角理、三角形分类和角和 | #angle-facts、#triangles | #parallel、#example-chain | #practice-angles、#practice-triangles、#practice-quadrilaterals | 每步条件理由；#retry-angles、#retry-triangles、#retry-quadrilaterals |
| G4 推导并反求多边形边数、内外中心角 | #polygons | #example-polygon | #practice-polygons | 区分每角与总和；#retry-polygons |
| G5–G6 特殊四边形性质与反射旋转对称 | #quadrilaterals | #symmetry | #practice-shapes | 画反例、画对称轴及转动；#retry-shapes |
| G7 对应/相似长度，区分全等 | angles #triangles；比例 | similarity #matching、#example-scale | #practice-lengths | 同一放大方向；#retry-lengths |
| G7 Extension 全等条件与完整证明；G9 | #congruence | #example-proof | #practice-proof、#practice-conditions | 对应顺序、SAS夹角、AAA/SSA反例；#retry-proof、#retry-conditions |
| G17 Extension 相似面积体积 | #area-volume | #example-volume | #practice-scale | 先还原长度比再平方/立方；#retry-scale |
| G8 圆词汇和所对弧 | angles #notation | circles #circle-language | #practice-labels | 实际作图与区域标注；#retry-labels |
| G8 Extension 中心/圆周/半圆/同弓/内接四边形 | #angle-theorems、angles #triangles | #example-circle | #practice-angles、#practice-semicircle | 弧、顶点同侧条件；#retry-angles、#retry-semicircle |
| G8 Extension 切半径、等切线、中心垂线平分弦、交替弓形 | similarity #congruence | #tangents-chords、#example-tangents | #practice-tangents、#practice-chord、#practice-alternate | 说明切点、RHS与对应、半弦；#retry-tangents、#retry-chord、#retry-alternate |
| G9 独立完整圆几何证明 | #example-proof | #example-proof（等切线RHS） | #practice-proof（不预给辅助线） | 无数值也能论证；#retry-proof（换结论） |
| G13 尺规五类：复制线段、垂直平分、线上/线外垂线、角平分；另60° | angles #notation、全等理由 | constructions #constructions、#example-construction | #practice-tools | 留交弧，分别真实操作；#retry-tools |
| G13 轨迹交集、边界及最短距离 | #loci | #example-locus、#shortest | #practice-locus | 点/线/角等距对象、交集、最短垂距；#retry-locus |
| G12 地图比例尺、测量、八方和三位bearing | 比例、角理 | #scale-measure、#bearings、#example-bearing | #practice-map、#practice-bearing | 量角器起点北线、顺时针与单位；#retry-map、#retry-bearing |

后续路径：四页互连；各 #next-step 连接下一主题或 mixed-review/#geometry-review，并提供跨 number/algebra/data 分支后再返回的延后任务。重试与首次考查同能力，改变条件或求问方向。无未读教材答案引用，无CAS或机型许可主张。

## 代表段 gate

先制作 circles-and-proof 的等切线完整示范、独立弦证明与新重试，再自检范围、先修、闭合帮助与后续路径。用户已明确由主执行者之后组织独立交叉审查；本作者只记录自检，不将其称为独立审查通过。整批仍为待交叉审查草稿。

代表段作者自检已完成：等切线证明分别核对切点直角、同圆半径、公共斜边、RHS 对应及结论；独立弦证明换成公共直角边与半径斜边；重试改证角平分，不抄原结论。自检数值 116°/58°、42°/69°、优角208°/对角76°均独立核算；提示/解答分别默认关闭。图与题干不含独立题结论；先修链接与 mixed 后续明确。按用户授权继续其余本地草稿，独立交叉审查仍待主执行者。

## 完成与验收

### 实际文件与覆盖

已完成可供交叉审查的本地源稿；没有把“已写完”标成“内容审查通过”或“技术检查通过”。

| 文件（以下各有 `igcse/mathematics/` 与 `zh/igcse/mathematics/` 两份） | 范围 | 独立产出与新重试的具体锚点 |
| --- | --- | --- |
| angles-and-polygons.md | G1–G6、三角形／四边形角理 | [标图](/igcse/mathematics/angles-and-polygons/#practice-notation)／[新标图](/igcse/mathematics/angles-and-polygons/#retry-notation)；[角理](/igcse/mathematics/angles-and-polygons/#practice-angles)／[新角理](/igcse/mathematics/angles-and-polygons/#retry-angles)；[三角形分类与两种情况](/igcse/mathematics/angles-and-polygons/#practice-triangles)／[新三角形](/igcse/mathematics/angles-and-polygons/#retry-triangles)；[多边形](/igcse/mathematics/angles-and-polygons/#practice-polygons)／[反求边数](/igcse/mathematics/angles-and-polygons/#retry-polygons)；[特殊图形与对称作图](/igcse/mathematics/angles-and-polygons/#practice-shapes)／[从对称条件作图](/igcse/mathematics/angles-and-polygons/#retry-shapes)；[四边形角](/igcse/mathematics/angles-and-polygons/#practice-quadrilaterals)／[新四边形](/igcse/mathematics/angles-and-polygons/#retry-quadrilaterals) |
| congruence-and-similarity.md | G7、G9、Extension G17 | [对应与相似长度、镜像全等判断](/igcse/mathematics/congruence-and-similarity/#practice-lengths)／[反向缩放](/igcse/mathematics/congruence-and-similarity/#retry-lengths)；[充分条件与SSA实际构图](/igcse/mathematics/congruence-and-similarity/#practice-conditions)／[新反例](/igcse/mathematics/congruence-and-similarity/#retry-conditions)；[完整证明](/igcse/mathematics/congruence-and-similarity/#practice-proof)／[AAS新证明](/igcse/mathematics/congruence-and-similarity/#retry-proof)；[体积还原长度及面积](/igcse/mathematics/congruence-and-similarity/#practice-scale)／[面积还原长度及体积](/igcse/mathematics/congruence-and-similarity/#retry-scale) |
| circles-and-proof.md | G8–G9 | [圆词汇实际画图](/igcse/mathematics/circles-and-proof/#practice-labels)／[新边界图](/igcse/mathematics/circles-and-proof/#retry-labels)；[中心／圆周／同弓／内接四边形](/igcse/mathematics/circles-and-proof/#practice-angles)／[优角与对角](/igcse/mathematics/circles-and-proof/#retry-angles)；[半圆](/igcse/mathematics/circles-and-proof/#practice-semicircle)／[新直径条件](/igcse/mathematics/circles-and-proof/#retry-semicircle)；[切点与等切线](/igcse/mathematics/circles-and-proof/#practice-tangents)／[反向角条件](/igcse/mathematics/circles-and-proof/#retry-tangents)；[弦平分](/igcse/mathematics/circles-and-proof/#practice-chord)／[半弦求整弦](/igcse/mathematics/circles-and-proof/#retry-chord)；[交替弓形](/igcse/mathematics/circles-and-proof/#practice-alternate)／[反向切线射线](/igcse/mathematics/circles-and-proof/#retry-alternate)；[独立完整弦证明](/igcse/mathematics/circles-and-proof/#practice-proof)／[独立角平分证明](/igcse/mathematics/circles-and-proof/#retry-proof) |
| constructions-loci-and-bearings.md | G12–G13 | [逐项实际尺规操作](/igcse/mathematics/constructions-loci-and-bearings/#practice-tools)／[新三角形与作图](/igcse/mathematics/constructions-loci-and-bearings/#retry-tools)；[轨迹交集／线的定距／角等距／最短距离](/igcse/mathematics/constructions-loci-and-bearings/#practice-locus)／[新区域／双分支／垂距](/igcse/mathematics/constructions-loci-and-bearings/#retry-locus)；[纸上比例图、尺量与量角](/igcse/mathematics/constructions-loci-and-bearings/#practice-map)／[反向地图比例](/igcse/mathematics/constructions-loci-and-bearings/#retry-map)；[八方、三位数、反向与实际画路线](/igcse/mathematics/constructions-loci-and-bearings/#practice-bearing)／[描述转方位角](/igcse/mathematics/constructions-loci-and-bearings/#retry-bearing) |

中文页面使用 `/zh/igcse/mathematics/{slug}/` 与相同锚点；所有学习页都提供 start / practice / retry / next-step / sources。来源不占主阅读路线，集中在默认关闭的参考区。所有必要概念和完整示范公开，不藏在参考区。

新增 SVG（全部位于 assets/img/，前缀 `igcse-geometry-reasoning-`）：notation、parallel、similarity、circle-language、circle-angles、circle-tangent、bisector、bearing。共8张，含 SVG title、desc、viewBox、独立白底与文字标注。图只给已知条件；独立作图使用题干可重画的数据，解答未嵌入题图。手机实际阅读仍待统一验收。

### 实际核算与作者检查（首次版本；已由后文纠正）

注意：首次作者检查未检查角边及S/V共同可实现性，G-R1、G-R2所涉数据与结论已撤回，以文末实际模型重算为准。

- **代表证明与另外两类完整证明：**作者重新逐行重建等切线 RHS、弦平分 RHS、角平分的 SSS，以及平行四边形 AC 的 SAS 证明；分别检查斜边／公共边、对应顺序、夹角和理由。只声明作者自检。主执行者随后反馈圆代表段的条件与证明开端可追踪，正式另一组独立复核尚未完成。
- **数值与反例：**独立计算角和125°、115°；等腰40°两种情况为40/70/70与40/40/100，64°重试为64/58/58与64/64/52；15边形内角156°、中心24°、角和2340°；风筝84/116剩余两角各80°；圆切线116°和58°、反向42°和69°；同弧优角208°与内接对角76°。面积32×2.5²=200、体积48×2.5³=750；体积比27先还原长度3，再面积9；面积比4/9先还原长度2/3，162×(2/3)³=48。SSA反例用两正根8cos30°±3独立核验两解，正文要求学生用圆规实际构图，不把三角函数当此页先修。
- **作图与方位：**等距8 cm两端且定距5 cm的交点距底线3 cm；另一等距6 cm例的垂足距端点3 cm，区分半径大于／等于／小于3的交点数。纸上6 cm向东、8 cm向北，直达10 cm，实地1000 m，经B1400 m，方位角atan(6/8)=36.869…°，取037°，反向217°；比例1:10000。其它反向方位305→125、035→215及比例1:20000的1.4 km→7 cm／4.5 cm→900 m核算。实际纸笔操作是学生任务，作者没有声称学生已做或物理绘图精度已验证。
- **双语源级逐项检查：**8页英文 Question 完全一致；TeX出现的完整序列逐式相等（不是仅比较数量）；锚点序列相等、中文 translation_of 正确。最终每种语言的公式片段数为79／37／51／15。圆词汇段曾因自然语言重排导致相同公式顺序不同，已调整中文句序并复查通过。
- **任务与恢复路径：**每个 lesson-check 含一个公开题干和分别默认关闭的提示、解答；检查容器闭合、无默认open、无重复ID、五个公共锚点、所有页内链接存在。最初少半圆独立题、四边形角独立题与三角形新重试，已补齐；裸井号回补文本已全部改为可点击的具体概念／任务链接。题量只用于交接盘点，不据此判定覆盖或学习效果。
- **SVG源与图像检查：**8个 XML 均可解析，检查 title/desc/viewBox/role；用现有 sharp 渲染8图拼图后实际查看，确认圆、切线、交弧、侧名、平行线角编号、旋转相似的对应及标注。未打开站点浏览器，未运行 Jekyll，不将该拼图称为网页验收。
- **跨组路径：**四页互链及 mixed-review 的 number/algebra/geometry/data 指定锚点在检查时已有源文件；相似页的 units-area-and-volume/#start 在本次路径检查时仍待另一组源稿。未修改其他组文件，统一冻结后须重查所有跨页链接及中文配对。

### 状态与尚欠项

1. 来源身份、相关范围列、上述实际题／MS页：已读并在本记录列明；没有声称完整阅读全部四卷或教材。
2. 本组8页、8图和本记录：源稿完成，作者检查通过，**待另一组独立内容复核**。教材边界：未依赖未读教材；额外复制线段／角是构造支架，不列作新增必考要求；不引入弦切角以外的割线乘积、圆幂、圆外接圆内切圆等额外要求；无fx-CG50许可主张。
3. **技术尚欠：**按主执行者明确指示，本作者不运行全站Jekyll、不操作站点浏览器、不写_site。统一冻结后由主执行者完成构建、适用现有检查、生成HTML、MathJax、桌面／手机、键盘、折叠帮助、明暗主题、语言切换与跨组路径验收。本轮不预称技术通过。
4. **学生试用未进行**；没有学生无帮助作答、真实尺规图、纠错后重试及延后保持证据。
5. 不提交Git，不推送／发布，不改索引／共享样式／测试／已认可分数样章／公共缓存，也不回滚其他作者文件。后续主执行者可以据此分派独立交叉审查。

## 作者源稿冻结（首次版本，已由文末最终冻结替代）

8页最终题干／TeX序列／锚点配对、闭合帮助与页内链接复查通过。以下为文件实际字节 SHA256；从此转入另一组独立审查，不再修改本组源页或SVG。主执行者如修订，须重新检查受影响项。

| 文件 | SHA256 |
| --- | --- |
| igcse/mathematics/angles-and-polygons.md | `8d7706991e39fe6533c1e8482c2e50a188b4c1bafbb21d341ecc679637fc4090` |
| zh/igcse/mathematics/angles-and-polygons.md | `56d824bf370dc3cb4958127eb3beb0fb7f5b3b6634e2c36dffa1a6b1732767a0` |
| igcse/mathematics/congruence-and-similarity.md | `c1af5c375e19817a626abab9c1a382a23324f6f808b782b99dc959372a025b37` |
| zh/igcse/mathematics/congruence-and-similarity.md | `e3d465f8b9b0bb64296310c73ccd59b1475bbad8de3bc1d310c886f4b75f3727` |
| igcse/mathematics/circles-and-proof.md | `d6ed2fbcc8e687a34a218bdfdb17c030fb562818c1f554d8d34711d0f9572bde` |
| zh/igcse/mathematics/circles-and-proof.md | `646cd57eddbf11d770c1cdc8216fc13e940dba1c2ec9b7907ec908e3713f515f` |
| igcse/mathematics/constructions-loci-and-bearings.md | `e863a9ebdad55e0a89de73e0704157911c7e7bbf5d3890d67d61060d68125c85` |
| zh/igcse/mathematics/constructions-loci-and-bearings.md | `d81c84aea13127eb67cd472cb30dee83299e40894c97d7fd6d85be7c2c91902c` |
| assets/img/igcse-geometry-reasoning-bearing.svg | `7e89fe75b08de5ebfb9d2ba4a917ca44b626d35726ced800fbeb7c751cd1cc0e` |
| assets/img/igcse-geometry-reasoning-bisector.svg | `d6e461fe4ca97af0a9c68ba4dca4911fa82833d779266bb83096488f6189c34d` |
| assets/img/igcse-geometry-reasoning-circle-angles.svg | `f6d8c0937e78d4f6b7d4a55fe66616ad7a32e81d8f9ab43aabd17ceeea273f07` |
| assets/img/igcse-geometry-reasoning-circle-language.svg | `c7e0d51e001b5f2589f938559689b9c224a5ea259e0ce7047b9374cc414f48a8` |
| assets/img/igcse-geometry-reasoning-circle-tangent.svg | `c1d11bb07816203218fe98afef51beda64a62c04d19e259f1ae4561b0e801b27` |
| assets/img/igcse-geometry-reasoning-notation.svg | `d34624c934724cce6262a72262a2617deaf910875c7f09900663468b4f8e09ad` |
| assets/img/igcse-geometry-reasoning-parallel.svg | `353723fc39523a312e8370fb5c519a804040e5538df848fb36d238449eae7071` |
| assets/img/igcse-geometry-reasoning-similarity.svg | `f57490a60fd2355da454093ee7b1c6459a21a65140bd1b2166691f0b4119564e` |

## Extension 单一路线冻结（措辞版，已由文末修补冻结替代）

2026-10-27，按学校仅开设 Extension 的最新指示重新开放本组冻结，仅调整八份中英源稿的课程路线措辞：删除起点、主题标题、回补链接显示文字及折叠参考区中的 Core／Extension 分流或服务声明，按“对应长度→充分条件证明→面积体积”和“圆词汇→角定理→完整证明”自然递进。所有必要共同基础、独立任务、新重试、完整反馈与后续混合回顾均保留。官方列位核对只留本记录作为来源证据。

本次检查：改写前逐文件核对首次冻结 SHA；改写前后英文 Question、完整 TeX 序列及稳定锚点逐项相等，双语之间也逐项相等；图与数学条件没有改动。再次检查八页 frontmatter、五个公共锚点、重复 ID、页内恢复链接、div/details 配对与帮助默认关闭，均通过。八图 XML 可解析、实际字节 SHA 与首次冻结相同；沿用前轮图像检查，不声称本轮重做网页验收。

本次每种语言 Question／TeX 片段数量（仅盘点，不代替能力证据）：angles-and-polygons: 14／79；congruence-and-similarity: 11／37；circles-and-proof: 17／51；constructions-loci-and-bearings: 11／15。

本组源稿再次冻结，以下16个内容／图片源文件为最新实际字节 SHA256，替代首次冻结表。另一组独立内容复核、主执行者统一构建／生成 HTML／手机桌面与键盘验收、真实学生试用仍未完成；本轮不构建、不操作站点浏览器、不提交、不推送／发布。Geometry calculation 的 R1–R5 等作者修补仍待其最终冻结后另行独立读取、重算；R6 已在自己的审查报告改按单一路线衔接复核，未预称关闭。

| 文件 | 最终 SHA256 |
| --- | --- |
| igcse/mathematics/angles-and-polygons.md | `829df517b92d829a23a3cc33a7ffac95e8447cce7619ba9aa9ca2a86677ad8e0` |
| zh/igcse/mathematics/angles-and-polygons.md | `8ea686432bf86aa1521f898e752e891c2b67c7caa6aec0d293229e7deca1ff9a` |
| igcse/mathematics/congruence-and-similarity.md | `24e3f70f644a909deeb4dcd0c4ebd3c6a28625f108e10caa5ddd114889bf024a` |
| zh/igcse/mathematics/congruence-and-similarity.md | `707532d050d0312f767e517761970f0af1f84f053f3ac7d93ab82100ab29c68e` |
| igcse/mathematics/circles-and-proof.md | `b04e100be71d2b9581498873995ef81436098d806efdbf4f72d7f50e7e072142` |
| zh/igcse/mathematics/circles-and-proof.md | `e19c4be1411b6d4a4d9094bb96a6ce0262ce1793b83885d8b2a03d589bc3af6a` |
| igcse/mathematics/constructions-loci-and-bearings.md | `99d61ffa4469d3a5c0267c509d149304d0c10fd2643b5fb4232b8ff48d2adb5b` |
| zh/igcse/mathematics/constructions-loci-and-bearings.md | `9773326669a9be66c4668ed3c938c4b89365aa19be7b7ce702d020a9a344a383` |
| assets/img/igcse-geometry-reasoning-bearing.svg | `7e89fe75b08de5ebfb9d2ba4a917ca44b626d35726ced800fbeb7c751cd1cc0e` |
| assets/img/igcse-geometry-reasoning-bisector.svg | `d6e461fe4ca97af0a9c68ba4dca4911fa82833d779266bb83096488f6189c34d` |
| assets/img/igcse-geometry-reasoning-circle-angles.svg | `f6d8c0937e78d4f6b7d4a55fe66616ad7a32e81d8f9ab43aabd17ceeea273f07` |
| assets/img/igcse-geometry-reasoning-circle-language.svg | `c7e0d51e001b5f2589f938559689b9c224a5ea259e0ce7047b9374cc414f48a8` |
| assets/img/igcse-geometry-reasoning-circle-tangent.svg | `c1d11bb07816203218fe98afef51beda64a62c04d19e259f1ae4561b0e801b27` |
| assets/img/igcse-geometry-reasoning-notation.svg | `d34624c934724cce6262a72262a2617deaf910875c7f09900663468b4f8e09ad` |
| assets/img/igcse-geometry-reasoning-parallel.svg | `353723fc39523a312e8370fb5c519a804040e5538df848fb36d238449eae7071` |
| assets/img/igcse-geometry-reasoning-similarity.svg | `f57490a60fd2355da454093ee7b1c6459a21a65140bd1b2166691f0b4119564e` |

## Kuhn 发现修补设计卡（先于本轮正文修改）

2026-10-27。重新开放冻结处理 review-igcse-geometry-reasoning-2026-10-27.md 中 G-R1–4 与 G-R6；不修改审查者报告。此前作者检查漏掉角边共同成立与立体可实现性，承认该检查不足；此次用实际几何模型核验，不仅做缩放算术。

| 发现／目标 | 修补设计与条件 | 独立产出、反馈与重试 |
| --- | --- | --- |
| G-R1：AA对应与可实现角边 | #practice-lengths 改为9–12–15实际直角三角形，另一三角形给直角与一个对应等角、WU=6；不用根式或三角比作此页新增先修，旋转对应仍需学生判断 | 同锚点保留角匹配、长度及镜像判断，完整解答核对应；#retry-lengths反向缩放保留 |
| G-R2：相似面积体积实际模型 | #example-volume使用闭合4×2×1长方体；#retry-scale使用闭合9×6×3与6×4×2长方体。另将#practice-scale明确为实际可实现的闭合长方体 | 面积与体积分别核算后再缩放；独立题从体积恢复边和面积，retry从面积恢复体积；给出可重建尺寸检查 |
| G-R3：对角线性质实际应用 | 在#quadrilaterals加一个公开示范，说明先认图形再认整条或半条；新增#practice-diagonals与#retry-diagonals | 平行四边形互平分、矩形等对角线、菱形垂直及平分角、风筝形仅一条平分另一条都要求画图／标记／理由；新retry含反求代数及纠错 |
| G-R4：同弓角新retry | 新增#retry-same-segment，给新圆上点序与弦两侧顶点，不指定方法 | 学生画图并找同弦同侧与异侧角；关闭反馈说明所对弧、补角和不可盲搬，#practice-angles链接对应retry |
| G-R6：单一路线 | 已在上轮八页移除Core/Extension学生分流；Kuhn报告锁定的是更早版本 | 最终复查八页无分流文本，必要基础不删，列位只留作者/审查记录 |
| 手机切线图反馈 | circle-tangent两幅图竖排，窄viewBox，保持各圆/切点/切线坐标关系；其余七图核实际缩放 | SVG题图不添加独立题结论，双语图注按上/下更新；渲染实际查看，待Kuhn复核，网页验收仍由主执行者负责 |


## Kuhn 发现修补后最终冻结

2026-10-27。本次仅修改自己八份主题源稿中的受影响六页、八个指定SVG及本记录。G-R1–4均已作者修补、独立于原答案重新计算；这不是Kuhn复核关闭。G-R6单一路线已在上轮修正，报告所锁旧SHA早于措辞修订，现重新扫描八页确认无学生可见Core/Extension分流，不删除必要基础。未更改Kuhn审查报告、其他作者源、入口、共享样式或测试。

| 发现 | 实际修补、数学核验与交接 |
| --- | --- |
| G-R1 | similarity #practice-lengths使用9–12–15实际直角三角形，配另一三角形U为直角、W=X、WU=6；对应X→W/Y→U/Z→V，因子2/3，UV=8、WV=10。作者以X=(0,9)、Y=(0,0)、Z=(12,0)及W=(0,6)、U=(0,0)、V=(8,0)核实所有长度和直角；两斜角由相同直角边比确定，未再给不相容角度。不用正弦定理作学生先修。两语言英文题干与TeX完全配对。 |
| G-R2 | #example-volume为闭合4×2×1长方体，六面S=28、V=8；放大2.5得到10×5×2.5，直接核算S=175、V=125。#practice-scale也明确为该实际小长方体，体积8→216还原k=3，得到12×6×3，最长棱12、S=252。#retry-scale大体9×6×3，S=198、V=162；小体S=88给k=2/3，得到6×4×2，直接S=88、V=48。平方/立方缩放与直接六面/三维乘积分别一致。旧32/48与81/162模型撤回，不将审查用等周不等式加入学生必考内容。 |
| G-R3 | angles新增公开#example-diagonals，再给#practice-diagonals与#retry-diagonals真实作图、记号与理由；覆盖平行四边形互平分、矩形等对角线、菱形垂直/平分角、风筝形单向平分。首次12/8、9、38°/90°、4/90°及EJ≠JG；新retry反求x=5、AC18/BD12、PR16、62°/90°、FH6/EG8。反例9.6×12.8非正方形矩形对角线16实际成立；两风筝形分别可用E=(0,7)、G=(0,-3)、F=(-4,0)、H=(4,0)，以及E=(0,6)、G=(0,-2)、F=(-3,0)、H=(3,0)实现。反馈给图上半段/角的具体标记，不能仅靠数字。 |
| G-R4 | circles新增#retry-same-segment，圆上点序P,Q,T,R,S，已知QPR42°，学生自行作图选择QSR42°、QTR138°。解答说明P/S在弦QR同侧、T在异侧以及两段弧；首次#practice-angles反馈链接该新retry。作者用单位圆极角0°/50°/90°/134°/250°独立点积重算三角42/42/138，故点序与数据可实现。 |
| 手机图反馈 | circle-tangent改320×520竖排，两panel只整体平移，原圆/半径/切点/切线/直角标几何关系保持；字24单位，300px内容宽下22.5px。题干right-hand改lower，双语替代文字上/下同步。circle-angles原三幅小图同样受缩放影响，改260×730竖排24单位标签，300px宽下约27.7px。其他图只改标签字号或去空白：notation/parallel30，similarity/bisector28，circle-language26并把E字移开切线，bearing裁掉横向空白到viewBox宽360，形状坐标不改。在300px内容宽全部8图已实际渲染查看；最小标签约14.5px，没有按10px标签交付。图片源图检查不是手机网页验收。 |

本轮完整源检：8页Question、完整TeX和锚点序列逐项双语一致；各页Question/TeX片段数量（仅交接盘点）为17/98、11/47、18/53、11/15，最终实际数以本轮检查输出为准；frontmatter、五公共锚点、本页恢复链接、容器闭合、帮助默认关闭及8个SVG XML均通过。没有把任务计数当作学习证据。独立复核仍交Kuhn，统一Jekyll/HTML/MathJax/手机桌面/键盘验收交主执行者，学生试用未做。

从本段写入起，本组8页及8图最终冻结，以下为实际字节SHA256。后续只继续自己负责的geometry-calculation最终独立review，另纳入Avicenna SC-1：units #check-scale/#retry-scale实际S/V可实现性；不得沿用旧数据计算通过为新模型背书。不构建、不提交、不推送或发布。

| 文件 | 最终 SHA256 |
| --- | --- |
| igcse/mathematics/angles-and-polygons.md | `4ebf70dd15546db0638ded33de3332861a4908af998a070ce6242d1ee3114497` |
| zh/igcse/mathematics/angles-and-polygons.md | `b0c7b0749ffffff2bf7b820a666d96271aad9acc6f8ce8c314937ebb985fa29f` |
| igcse/mathematics/congruence-and-similarity.md | `bab5e23f97f8305d776f79ca36ae711dd2987f975c24c45ea2fc17189a37083b` |
| zh/igcse/mathematics/congruence-and-similarity.md | `3bf84e1a1814a4203829d1a289fb2725d70f23eb7af65a134bcda0e4ba7bc1dd` |
| igcse/mathematics/circles-and-proof.md | `59f26fe827d521412b0246eb82311951494d63bc1b07afea3afefcd011db7e64` |
| zh/igcse/mathematics/circles-and-proof.md | `7d370c50cf7c1178b6cdf258670c49bb65f1cb94a2fd94a9f33fc19d6a01a84d` |
| igcse/mathematics/constructions-loci-and-bearings.md | `99d61ffa4469d3a5c0267c509d149304d0c10fd2643b5fb4232b8ff48d2adb5b` |
| zh/igcse/mathematics/constructions-loci-and-bearings.md | `9773326669a9be66c4668ed3c938c4b89365aa19be7b7ce702d020a9a344a383` |
| assets/img/igcse-geometry-reasoning-bearing.svg | `df262d2075b08929d5bed38cb8e495487b3651ba97c3726c3fd109d88a3064f3` |
| assets/img/igcse-geometry-reasoning-bisector.svg | `2a5fd9884664d75903e7f612e40d213200f8e26c33bc9a241b7cbd76ae4b02ba` |
| assets/img/igcse-geometry-reasoning-circle-angles.svg | `b1ff833bc94879e4f547376aa474907cecbd8081b2d0754c10b4616db08b16b7` |
| assets/img/igcse-geometry-reasoning-circle-language.svg | `1e515fef1140d9a46b533a9a00b9227968dac7fd69b87d2c419c6152e0f8cd50` |
| assets/img/igcse-geometry-reasoning-circle-tangent.svg | `d3a634f34a76aada4d988ac830dcae81bc1106508641e36a899192ce09d09855` |
| assets/img/igcse-geometry-reasoning-notation.svg | `0c03e3ba46288abd2e6b470ac7ee96d86e05ed664e11397939c95725e3108171` |
| assets/img/igcse-geometry-reasoning-parallel.svg | `b924008fcf0203ebcef71c82d59806fc2eb9e6ce019225edb9423879a97546b3` |
| assets/img/igcse-geometry-reasoning-similarity.svg | `1b5b16d76794b733035b08041619a331d0d443a584693481f564c3294b34dc0f` |
