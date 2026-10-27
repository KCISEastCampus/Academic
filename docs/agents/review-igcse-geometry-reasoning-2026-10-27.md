# IGCSE Geometry reasoning 独立审查记录

日期：2026-10-27。审查者为另一组 Algebra 作者；审查仅写本报告，不改 Geometry 源、不构建、不提交。已读课程长期标准 v1.1、AGENTS、主路线、作者记录，并独立重解四主题中英全部现有任务，核对八张 SVG 源及实际渲染图。

最终状态：已对 Hilbert「Kuhn发现修补后最终冻结」的8页、8图及作者记录重新锁SHA并独立复核。G-R1–4、G-R6在本报告锁定最终版关闭；本范围独立内容审查通过。统一网页技术验收及真实学生试用未做，不代表全课程通过。按最新用户要求，课程仅为 Extension 单一路线，保留必要基础；不要求 Core 跳过路线。学生可见分流文字已整理，官方列判断只保留于作者／审查记录。

## 首次发现（最终版均已修复，关闭证据见文末）

### G-R1 · P1：相似独立题的三角形不存在

congruence-and-similarity 的 #practice-lengths，中英题干分别第100、102行：X=38°、Y=72°，故 Z=70°。XY=9 对70°，YZ=12 对38°；较小角反而对较大边，不可能。正弦比应为 sin38°/sin70°≈0.655，不是12/9。机械缩放到8cm不修复条件。须重新选择全套自洽角边数据并重算双语，不能仅交换9与12。

### G-R2 · P2：两处立体表面积／体积组合不可能

同页 #example-volume（英84／中86行）S=32cm²、V=48cm³，及 #retry-scale（英234／中236行）S=81cm²、V=162cm³，不满足闭合立体的一般几何约束 S³≥36πV²。各自允许的最大体积约17.02和68.55cm³。平方／立方缩放算术虽正确，教学模型不存在。该约束是审查者的数据可实现性检查，不新增学生必考定理。建议换成明确可实现的长方体／立方体数据后重算。

### G-R3 · P2：部分已教细项目标没有独立应用证据

angles #quadrilaterals 教平行四边形对角线互相平分、矩形对角线相等等性质；#practice-shapes 只标边／对称轴，#practice-quadrilaterals 只算角，未要求据对角线性质推出结论／辨别反例。#retry-shapes、#retry-quadrilaterals 也不能补足。须补真实独立应用及同目标新重试，不能把已讲解当独立证据。

### G-R4 · P2：同弓角缺同目标新重试

circles #practice-angles 有同弓角，但 #retry-angles 只考中心角与内接对角；其他 retry 亦未重新检验同弦同侧的角选择。须用新点序／弦或改变顶点侧别重试，题目不预给判断，反馈说明弧与同侧条件。

### G-R6 · P2：整理为 Extension 单一路线

四页首段和标题仍有 common Core/Extension、Extension 分层标签。按最新授权移除学生分流／服务声明，保留从基础概念到证明、构造的依赖。无需制作 Core 跳过路径；不能删除圆词汇、角理、比例等必要基础。当前审查只记录，交源作者修订后再验收。

## 已完成的源级与来源检查

首次锁定版八页英文Question、完整TeX序列与锚点中英一致；元数据正确，42个独立／重试题框各有两个默认关闭帮助，无重复锚点、容器缺口与§；当前引用目标存在。此轮源级结果只对应历史版；最终版另行重算和复核如下。

实际阅读 regular page.extract_text：spec PDF18–21并看四页列渲染；1C QP10 Q10/MS6，2C QP3 Q3/MS4、18 Q19及19 Q20/MS8、23 Q25/MS10，1E QP18–19 Q19/MS10，2E QP22–23 Q25–26/MS14–15。另看1C10、1E18–19、2C3/18/19/23、2E22–23实际渲染；8张SVG均渲染并查看。四卷均Specimen2018，文件名2016不是考季。未使用layout文本，未声称读全卷。

## 首次锁定 SHA256（历史版，最终版见文末）

| 文件 | SHA256 |
| --- | --- |
| igcse/mathematics/angles-and-polygons.md | 8d7706991e39fe6533c1e8482c2e50a188b4c1bafbb21d341ecc679637fc4090 |
| zh/igcse/mathematics/angles-and-polygons.md | 56d824bf370dc3cb4958127eb3beb0fb7f5b3b6634e2c36dffa1a6b1732767a0 |
| igcse/mathematics/congruence-and-similarity.md | c1af5c375e19817a626abab9c1a382a23324f6f808b782b99dc959372a025b37 |
| zh/igcse/mathematics/congruence-and-similarity.md | e3d465f8b9b0bb64296310c73ccd59b1475bbad8de3bc1d310c886f4b75f3727 |
| igcse/mathematics/circles-and-proof.md | d6ed2fbcc8e687a34a218bdfdb17c030fb562818c1f554d8d34711d0f9572bde |
| zh/igcse/mathematics/circles-and-proof.md | 646cd57eddbf11d770c1cdc8216fc13e940dba1c2ec9b7907ec908e3713f515f |
| igcse/mathematics/constructions-loci-and-bearings.md | e863a9ebdad55e0a89de73e0704157911c7e7bbf5d3890d67d61060d68125c85 |
| zh/igcse/mathematics/constructions-loci-and-bearings.md | d81c84aea13127eb67cd472cb30dee83299e40894c97d7fd6d85be7c2c91902c |
| assets/img/igcse-geometry-reasoning-bearing.svg | 7e89fe75b08de5ebfb9d2ba4a917ca44b626d35726ced800fbeb7c751cd1cc0e |
| assets/img/igcse-geometry-reasoning-bisector.svg | d6e461fe4ca97af0a9c68ba4dca4911fa82833d779266bb83096488f6189c34d |
| assets/img/igcse-geometry-reasoning-circle-angles.svg | f6d8c0937e78d4f6b7d4a55fe66616ad7a32e81d8f9ab43aabd17ceeea273f07 |
| assets/img/igcse-geometry-reasoning-circle-language.svg | c7e0d51e001b5f2589f938559689b9c224a5ea259e0ce7047b9374cc414f48a8 |
| assets/img/igcse-geometry-reasoning-circle-tangent.svg | c1d11bb07816203218fe98afef51beda64a62c04d19e259f1ae4561b0e801b27 |
| assets/img/igcse-geometry-reasoning-notation.svg | d34624c934724cce6262a72262a2617deaf910875c7f09900663468b4f8e09ad |
| assets/img/igcse-geometry-reasoning-parallel.svg | 353723fc39523a312e8370fb5c519a804040e5538df848fb36d238449eae7071 |
| assets/img/igcse-geometry-reasoning-similarity.svg | f57490a60fd2355da454093ee7b1c6459a21a65140bd1b2166691f0b4119564e |
| docs/agents/implementation-igcse-geometry-reasoning-2026-10-27.md | e13dd4c777f6b331506308dcd56580e3acb4c8efb32fdb6ecb8503d5b7926ca6 |

## 工作边界

Algebra A-R1–4已修并重新冻结，待Poincare复核；Geometry reasoning本轮只写本报告，未更改对方源或公共缓存。未运行Jekyll、站点浏览器、HTML／手机桌面／键盘验收，未做学生试用。

## 独立重解账本（已纳入最终修订）

以下逐项覆盖公开示范、首次独立任务和retry；修补处按最终版数据重解。数字一致不替代条件检查；中英题干相同，但已分别读解释与反馈。

| 主题／任务锚点 | 重新计算或重建的关键证据 |
| --- | --- |
| angles #example-chain／#example-polygon | 等腰底角68°，同向CD使BCD为112°；150°内角→30°外角→12边，中心30°、总和1800° |
| #practice-notation／#retry-notation | PQR顶点Q、p=QR；平行箭头／垂直方框／立方体点边面有效。重试直角Y、YXZ顶点X、z=XY，直角三角形不能正三角形 |
| #practice-angles／#retry-angles | 2=63时4/6/8=63，3/5=117，点角x=125；交线128→128/52/52，未给平行不能移交对应角；等腰顶角128→26/26，点角y=115 |
| #practice-triangles／#retry-triangles | 40→40/70/70或40/40/100；另90/45/45和110/40/30分类成立。64→64/58/58或64/64/52，两者皆锐角；50/60/70为锐角不等边 |
| #practice-polygons／#retry-polygons | 外角24→15边、内156、中心24、总2340；外50→7.2不是整数故不存在。总1260→9边，规则时140/40/40 |
| #practice-shapes／#retry-shapes | 六图反射轴2/2/4/0/1/0，旋转阶2/2/4/2/1/1；60/120菱形反驳均为正方形。重试普通风筝／非矩形等腰梯形满足一轴一阶；斜平行四边形满足零轴二阶 |
| #practice-quadrilaterals／#retry-quadrilaterals | 平行四边形68→112/68/112；风筝84/116→80/80，等角为Q/S。菱形B124→A/C56、D124；等腰梯形P72→Q72、R/S108。另新增对角线任务已核见下一行 |
| #example-diagonals／#practice-diagonals／#retry-diagonals | 示范AC14→BD14→BO7，矩形才保证四半段同长；首次AC12/BD8、矩形QO9且不必垂直、菱形38与90、风筝JH4及EJF90且7≠3。重试x=5→AC18/BD12，矩形PR16并以9.6×12.8为非正方形反例，菱形62与90，风筝FH6/EG8且仅EG平分FH。逐图标记和理由必需；两风筝有明确可实现坐标，未假定互相平分 |
| similarity #example-scale／#retry-lengths | 3/4/5放大2→6/8/10，边对应按顶点顺序；重试15/21缩为5/7，周长也乘1/3 |
| #example-proof | AB=AC、BM=CM、AM公共→ABM≅ACM（SSS），对应BAM=MAC；未假定待证角或垂直 |
| #example-volume／#practice-scale／#retry-scale | 最终示范4×2×1给S28/V8，2.5倍为10×5×2.5、S175/V125；独立题体积8→216得k3，最长边12、S252，对应12×6×3；重试9×6×3给S198/V162，S88得k2/3，对应6×4×2与V48。六面与三维乘积分别核算，相似条件必需 |
| #practice-lengths | 9²+12²=15²与6²+8²=10²均成立。两直角Y/U、给定X=W→AA，X/Y/Z对应W/U/V，因子2/3→UV8、WV10；大小不同不全等，原长镜像全等。不再附不相容斜角，学生无需用正弦定理核数据 |
| #practice-conditions／#retry-conditions | (i)SSS(ii)SAS(iii)ASA(iv)RHS，AAA只定形。SSA：B距30°射线4cm，AC=8cos30°±3均正，确有两个位置；需留交弧。4/6/8与6/9/12比例1.5但不全等；AB6、A50°、AC4或7给两个有效反例 |
| #practice-proof／#retry-proof | 平行四边形AB=CD、AC公共、BAC=DCA为平行内错角→ABC≅CDA（SAS），BCA=DAC；也可SSS。重试第三角70，BC=EF7；AAS或转ASA，AC=DF。对应条件均闭合 |
| circles #example-circle | AC确为直径→ABC90，BCA56；A/D同侧于BC，BDC=BAC34；点序保证所用弧正确 |
| #example-proof／#example-tangents | 外点P的两切点A/B，OA/OB为等半径，OP公共斜边，两个切点直角→RHS→PA=PB；并非借待证等切线。另下图切线射线TAB58与C的同弦异侧段匹配→ACB58，反射线角122 |
| #practice-labels／#retry-labels | 半径3→直径6且过心；非直径弦两端在圆上；扇形两半径＋弧、弓形一弦＋弧。重试相同弧PQ两种区域名称正确，PQ是否直径取决于过O |
| #practice-angles／#retry-angles | 小弧AB对应中心76、同弓ADB38；内接BAD112→BCD68。重试圆周104对应优角208，不取小角152；内接对角76。新增#retry-same-segment：P,Q,T,R,S点序，QPR42→QSR42、QTR138，P/S同侧、T异侧；弧QTR84°与另一弧276°对应，已用单位圆点独立点积复算 |
| #practice-tangents／#retry-tangents | 四边形切点各90，APB64→非优AOB116；等切线三角形底58。反向AOB138→APB42，底69；未把半径与切线段当等长 |
| #practice-chord／#retry-chord | 从心垂弦保证18的一半各9；任意垂线不够。半弦7.5→整弦15，关键是来自中心且垂直 |
| #practice-alternate／#retry-alternate | TAB与ACB同为47（C/T分居弦AB两侧），反射线133；反射线给119→TAB61→ACB61。两次均先选射线，未无条件复制邻角 |
| #practice-proof／#retry-proof | 学生须自行补OA/OB，不可引用待证弦平分定理：OMA/OMB直角、半径斜边相等、OM公共→RHS→AM=MB。重试外点切线图同样RHS给APO=OPB→OP平分APB；不能假设对称 |
| #practice-semicircle／#retry-semicircle | EF直径且G在圆周→EGF90、GEF63；仅弦不能保证。JK直径且L圆周→JLK90、JKL49；圆内任意点不足 |
| constructions #example-construction | 先构造三等边60°，再以等弧／SSS平分得30°；测角仅检查，不可代交弧 |
| #example-locus | AB6→中点距A3，半径5与垂直平分线交两点，高4；半径3单点，小于3无点，取全部交集 |
| #example-bearing | 出发北线064加半周得244，方向东北反向西南；116不是返回方向 |
| #practice-tools／#retry-tools | 复制5.5、7cm线段中点3.5，线上／线外垂直90，70平分35，复制70、构造60、三边4；任务要求实际分幅图与交弧。重试6/5/5等腰三角形高与角平分同线，由中点SSS解释；新复制4.2／线上垂线／复制60再平分30 |
| #practice-locus／#retry-locus | AB8、PA=PB=5交点高3，只保留上方。到竖无限线2cm为两支平行线，斜距为直角三角形斜边较长；60角内等距为30平分射线。重试A比B近且≤4：半径4圆盘∩A侧开半平面，可用圆周含、垂直平分线排除；最短垂线；定距3的两支／两相交直线的双平分线齐全 |
| #practice-map／#retry-map | 纸上6东8北→直距10cm=1000m，经B1400m；北起顺时针atan(6/8)≈36.870→037，返回217；比例1:10000。重试1:20000，1.4km=7cm，4.5cm=900m；须实际画7cm再量 |
| #practice-bearing／#retry-bearing | E090/SW225/NW315；305反向125，135向东南且学生画4cm。北偏东35→035，反向215；南180反向000；其余N000/NE045/SE135/W270 |

## 八条圆定理与任务核对

| 官方G8定理 | 条件／弧与射线检查 | 实际独立任务 → 新重试 |
| --- | --- | --- |
| 中心角为圆周角两倍 | 同一所对弧；圆周顶点不在该弧；可用优角 | #practice-angles → #retry-angles（208优角） |
| 半圆周角90° | 一边是过心直径、顶点在圆周且不同于两端 | #practice-semicircle → #retry-semicircle |
| 同弓角相等 | 同弦、两顶点在弦同侧，不能换成异侧 | #practice-angles → #retry-same-segment（新点序／跨弦侧别，42与138） |
| 内接对角互补 | 四顶点同圆且按题述顺序，所对两弧凑全圆 | #practice-angles → #retry-angles |
| 半径垂直切线 | 半径连到真正切点，而非附近任意点 | #practice-tangents／#practice-proof → #retry-tangents／#retry-proof |
| 同外点两切线等长 | P为同一个外点、A/B为两个接触点，等的是有限段 | #practice-tangents → #retry-tangents；RHS公开证明未循环 |
| 中心到弦垂线平分弦 | 必须来自中心并垂直，不能省任一条件 | #practice-chord／#practice-proof → #retry-chord |
| 弦切角／交替弓形 | A切点、AB弦，C和所选T在AB异侧；反射线取补角 | #practice-alternate → #retry-alternate |

## 图、学习依赖与范围

- 八张最终SVG已独立读XML并各以300px宽渲染实际查看；初版两张拼图仅作历史检查。notation侧名a/b/c与顶点对边正确；parallel的1–8位置与角理正确；similarity的3–4–5与旋转6–8–10边对应正确。circle-language的直径／半径／弦／扇弓形分区正确；circle-angles三种示意未标未知数答案；circle-tangent半径／切线垂直、同外点及下图C/T侧别正确；bisector两等半径弧与中点垂线匹配；bearing从A北线顺时针到东北AB，B北线平行。
- 图为教学示意，不要求从像素估数。切线下图复用于47°／61°新数据，只用于拓扑和射线选择，来源已说明不作测量；不能用其58°外观读出新题数值。公开相似示范图给QR=8，不是独立题XYZ的数据，未泄露独立数值。构造图仅示范，独立图必须学生按新数据重画；题干、可读数据、纸笔产出和反馈完整，不能仅填数字算完成。
- 基础含义依赖为点线角／三角形→对应相似／充分条件→圆弧与证明；构造理由借等距、SSS与直角三角形，方位借北线／局部平面平行。单一路线应保留这些先修，不将基础另列为Core课程。学习恢复均指向具体概念，下一步接mixed并安排学另一分支后回做；外组mixed本体未在本报告作完整题目审查。
- 核范围G1–G9、G12–G13、G17；G10–11立体识图、G14–16计算、G18弧长扇形等由其他组承担。G7长度相似／概念与基础角理是Extension所需基础；正式全等条件、圆定理／证明与相似面积体积属官方Extension列。G17编号正确，不混成G18；本组未新增圆幂、割线乘积或积分。复制线段／角为尺规支架，不另宣称必考条目。


## 官方材料身份与源封存补核

9个官方PDF的实际SHA均与公共manifest.json一致；未覆盖缓存。四份QP封面regular提取复核Specimen 2018。补看1C PDF10的等腰两种74°位置，及2C PDF18 Q19北起072°、反向252°原图；主线G13标准作图列及G17范围列此前已实际查看。2E MS Q26文字区间[863,854]有排字疑点，精确500×1.2³=864成立；教学未沿用该区间。上述是本次实际读页范围，不等于读过四卷所有题或未获取的教材。

## 最终差异复核与发现关闭

| 项目 | 最终版独立复核结论 |
| --- | --- |
| G-R1（P1） | 关闭。9–12–15直角模型与6–8–10对应三角形可实现，AA、顶点顺序、缩放与镜像判断均成立；中英源和解答已分别读回 |
| G-R2（P2） | 关闭。三处立体题现均为明确闭合长方体：示范S28/V8→175/125，独立题12×6×3→S252/V216，retry9×6×3→6×4×2→S88/V48。直接计算与缩放独立一致；未把审查用一般不等式加作学生要求 |
| G-R3（P2） | 关闭。新增公开示范及两项独立图任务，分别检验互平分、等对角线、菱形垂直／平分角、风筝仅一向平分；重试改变求问并增加反例判断，帮助与解答独立关闭 |
| G-R4（P2） | 关闭。#retry-same-segment未预给所用定理，要求画图、选顶点侧别、找两角及反驳一概相等；42/42/138与点序可实现，反馈解释两弧，恢复路径可点击 |
| G-R6（单一路线） | 关闭。八学生页Core/Extension分流文字零残留，原有基础词汇、角理、比例、所有原任务保留，按基础→证明／构造自然递进；官方列位仍可在记录追溯，无需Core跳过路径 |
| SVG差异 | 八图字号／留白调整；两张圆图由横排改竖排，切线题英文lower与中文上下图同步。300px源图实际查看标注可读，无裁切、遮挡关键点或独立答案泄露；这是源图片检查，网页重排仍未验收 |

对全部改动后的八页再次做Question、完整TeX序列、稳定锚点双语比对、元数据、默认关闭帮助、容器与本页／当前跨页路径检查，均通过。每种语言四页Question数量17/11/18/11，TeX片段98/47/53/15；45个独立／retry题框均各有两段关闭帮助。题量只作差异盘点，不作为课程质量依据。新增示范与三个题框已实际逐题重解，原有推理沿用本报告重建证据，路线文字改写未删基础任务。

最终修补另做35次数值／坐标条件检查：直角边长、五个长方体六面／体积、对角线、非正方形矩形及两风筝坐标、同弓三角点积。一般SSS／SAS／RHS证明与最短距理由另逐行核验，不把抽样说成证明。8个SVG XML/title/desc/viewBox可解析；9份官方PDF封存SHA未变。未发现本范围新的内容阻断项。

以下16个内容文件与作者最终冻结表逐一相符；作者记录本身也锁定。报告收尾将再读字节核对，若更改只继承未受影响证据。

| 文件 | 最终 SHA256 |
| --- | --- |
| igcse/mathematics/angles-and-polygons.md | 4ebf70dd15546db0638ded33de3332861a4908af998a070ce6242d1ee3114497 |
| zh/igcse/mathematics/angles-and-polygons.md | b0c7b0749ffffff2bf7b820a666d96271aad9acc6f8ce8c314937ebb985fa29f |
| igcse/mathematics/congruence-and-similarity.md | bab5e23f97f8305d776f79ca36ae711dd2987f975c24c45ea2fc17189a37083b |
| zh/igcse/mathematics/congruence-and-similarity.md | 3bf84e1a1814a4203829d1a289fb2725d70f23eb7af65a134bcda0e4ba7bc1dd |
| igcse/mathematics/circles-and-proof.md | 59f26fe827d521412b0246eb82311951494d63bc1b07afea3afefcd011db7e64 |
| zh/igcse/mathematics/circles-and-proof.md | 7d370c50cf7c1178b6cdf258670c49bb65f1cb94a2fd94a9f33fc19d6a01a84d |
| igcse/mathematics/constructions-loci-and-bearings.md | 99d61ffa4469d3a5c0267c509d149304d0c10fd2643b5fb4232b8ff48d2adb5b |
| zh/igcse/mathematics/constructions-loci-and-bearings.md | 9773326669a9be66c4668ed3c938c4b89365aa19be7b7ce702d020a9a344a383 |
| assets/img/igcse-geometry-reasoning-bearing.svg | df262d2075b08929d5bed38cb8e495487b3651ba97c3726c3fd109d88a3064f3 |
| assets/img/igcse-geometry-reasoning-bisector.svg | 2a5fd9884664d75903e7f612e40d213200f8e26c33bc9a241b7cbd76ae4b02ba |
| assets/img/igcse-geometry-reasoning-circle-angles.svg | b1ff833bc94879e4f547376aa474907cecbd8081b2d0754c10b4616db08b16b7 |
| assets/img/igcse-geometry-reasoning-circle-language.svg | 1e515fef1140d9a46b533a9a00b9227968dac7fd69b87d2c419c6152e0f8cd50 |
| assets/img/igcse-geometry-reasoning-circle-tangent.svg | d3a634f34a76aada4d988ac830dcae81bc1106508641e36a899192ce09d09855 |
| assets/img/igcse-geometry-reasoning-notation.svg | 0c03e3ba46288abd2e6b470ac7ee96d86e05ed664e11397939c95725e3108171 |
| assets/img/igcse-geometry-reasoning-parallel.svg | b924008fcf0203ebcef71c82d59806fc2eb9e6ce019225edb9423879a97546b3 |
| assets/img/igcse-geometry-reasoning-similarity.svg | 1b5b16d76794b733035b08041619a331d0d443a584693481f564c3294b34dc0f |
| docs/agents/implementation-igcse-geometry-reasoning-2026-10-27.md | 74fab14c4edb9f51f50f18aa182076d0b2af9ee4211f825039a7cda17590799a |

最终交接：本范围独立内容审查通过，报告中的首次发现不再是当前源稿待修项。主执行者仍须统一构建、生成HTML、MathJax、桌面／手机、键盘、语言切换及跨组完整路径检查；未做学生真实作答／纸笔构造／延后保持试用，不能宣称学习效果。未提交Git、推送或发布。
