# IGCSE Number 六主题独立内容审查

2026-10-27。审查者Kierkegaard在冻结自身几何源稿后，独立通读六主题中英稿、作者记录、相关原始大纲与QP/MS，核算示范、练习和重试。按主执行者安排曾保存检查点、优先修补自身几何稿，再恢复本审查；Number作者随后修补四项发现及Extension单一路线，本审查已复读修补段、独立重算并重新锁定最终SHA。范围不含已认可分数样章；只写本审查文件，不修改Number源、作者记录或SVG，不构建、不提交、不推送、不发布。

**结论：本次六主题源级内容复核未留未解决阻断项。四项原发现已由作者修补并经本审查者复核关闭；不是采信作者“自检通过”。** 本结论只适用于文末实际字节SHA对应的12页和3图，不代表全课程、技术阅读验收或学生学习效果通过。

首轮12页英文Question、完整TeX序列一致，分别100/106/28/43/41/52段。修后再比较为101/106/29/43/44/53（376段），题干段13/13/9/8/11/12，仍有51个独立练习／重试框；不是用这些数量代替能力验收。三张Number SVG已读取、直接栅格化并目视检查。180项分组精确／数值断言及另列端点／容量／舍入／有限显示检查通过；修后面积界、年利率与新比例另行独立精确复算。证明与端点能否取到用代数和区间条件推理，不拿浮点试算充当证明。

## 四项发现与实际修补复核

| 编号／原严重度 | 原发现与最小修复位置（两语言同锚点） | 最终稿亲自复核／状态 |
| --- | --- | --- |
| N-R1／P2 | number-operations #written-methods，原EN74/ZH76：“除数小于1，商更大”不限制正量，下一句负例实际变小；须限定正被除数和0<除数<1 | 现文两语言写明正量条件；负例保留−31.5<−12.6，区分绝对值增大与数值变小。独立以分数计算并核对数轴方向，**关闭** |
| N-R2／P2 | accuracy #practice-bounds考面积乘积界，#retry-bounds原来只有商容量及和差；须补同能力新面积任务 | 现重试用8cm/3cm新记录求矩形面积。独立从[7.5,8.5)、[2.5,3.5)得18.75≤A<29.75；正量使积递增，下端同时可取，上端不取。新问、提示、端点解释均已在两语言，**关闭** |
| N-R3／P2 | percentage #practice-model反求年利率，#retry-model原来只给定利率正推；须有新数据反求 | 重试新增600→636.54、两年、固定正年利率、无资金流。独立得比1.0609、正乘数1.03、年利率3%；600→618→636.54。反馈区分两年6.09%与每年3%，**关闭** |
| N-R4／P2 | ratio #practice-mixture单改配料的新比，#retry-sharing原来仅原配比分配计价；须重试变化后的实际量 | 重试新增原A4/B10后只加2LA。独立得A6/B10=3:5；反馈指出B未变、不是同倍放大，原成本36明确属于加料前，**关闭** |

单一路线新要求也已亲核：最终12页无学生可见Core/Extension分流／标签残留，必要基础和原有任务未被删掉；powers由整数指数连到分数指数与根式，recurring仍承接分数／除法先修，percent仍先逐年再公式。官方列位只在本报告与作者记录用于来源追踪，不服务两类学生。未要求添加Core绕路。

## 首轮被审版本（历史保存点）

开始与中途保存点的12页SHA一致，列于下表，四项发现最初对应此版本。作者此后明确修补，**此表不是最终交付锁定值**；文末最终表及新增核验取代它。保留该历史可追踪发现，不能把旧版结论套给新版。

| 源文件 | SHA256 |
| --- | --- |
| igcse/mathematics/number-operations.md | 339fe531b571814c968fcd12e756f0752965fa1378dfef1597f92658138cdcd2 |
| zh/igcse/mathematics/number-operations.md | 603d0f6f47c199cb40a284d59ca9f863f5e6ed328deb01455d33dc6964558900 |
| igcse/mathematics/powers-roots-and-standard-form.md | 79cdc2f58171da5541452335617ef2a1c2dc7559d7e79a71031bc3d3eb5b3097 |
| zh/igcse/mathematics/powers-roots-and-standard-form.md | 0f84c5cca1bd16655c045561d01cabd446bb4534f97de0eed7308d45b4ecfff3 |
| igcse/mathematics/accuracy-and-bounds.md | ea19c4284114a2eaf88753406c9a04bfe49920e4a6d5312bcfd16460bf1ff09a |
| zh/igcse/mathematics/accuracy-and-bounds.md | 3b8fb54b58d2766cfe2a8457fcac91fc888733a1927ea4f007047b9da4f930bf |
| igcse/mathematics/recurring-decimals.md | 5d01dc4e464978e159fb87c03f43d390cac4a089e0066adba3c5d3c6b87a1055 |
| zh/igcse/mathematics/recurring-decimals.md | 696b5ee37a30a27d4400bff605bcd25e18a9c5e75d5fcc8ce5272094df95e972 |
| igcse/mathematics/percentage-change.md | 59891c3a50a2fcf34481dd800ac14e565cf07ce43edab2cff7444bbf05bbfa5a |
| zh/igcse/mathematics/percentage-change.md | 86013c7e4afe072b16cc6bf20b4fd0fbeed578651d6e396f902b114e344894a7 |
| igcse/mathematics/ratio-and-proportion.md | 2880029d8175fcacb94541d1b6161579b9a665f59e3cdc1067e9bb19204d1929 |
| zh/igcse/mathematics/ratio-and-proportion.md | b7a6283e35be440bd7968e1658fae1541fe4caac6d0e6e15e4354395578bdfa7 |

## 官方原页与层级：实际阅读证据

公共缓存`specification.pdf`实际正文为OxfordAQA International GCSE Mathematics 9260 Version5.1，SHA256为`d803d6a8ef6e10d530511572269c58586e8fad83ea5aa77fa7a7e0c44745322a`。常规`page.extract_text()`读取PDF10–14、16，不读取layout巨量空白；印刷页码比PDF大1。列位以原PDF文字坐标判断，不以串行文字顺序猜测。

- N1–5、N6整数指数、N7精确分数、N8、N10、N11舍入／估算／限解释、N12有限小数转换、N15百分变化／单复利情境、N16–19、N20数值正反比／重复变化在左列；N6分数指数、N7根式、N11计算界、N12循环转换、N15逆百分与复利公式、N20指数模型、A18在右列。A6同N6分层。此处记录官方Core/Extension来源，全部纳入学校同一Extension学习路线。
- 坐标复核例：PDF11 N6 fractional x342.19、N7 calculate x302.39／surds x389.75在右；N8 x47.27在左。PDF12 N11 apply x47.27、estimation x63.34在左，calculate bounds及N12 recurring x302.39在右。PDF13 N15 reverse、N20 exponential x302.39在右；PDF14 A6 fractional x342.19、PDF16 A18 express x302.39也在右。分界约298。没有沿用此前几何G23/24的错误列位判断。
- 四套QP封面实际均为**Specimen2018**；文件名2016不是考季。题目均为课程自拟、无官方分值；未假称复刻官方题。未采用教材题，不把其他资格深度或计算器许可带入本课。

| 实际读取QP PDF页／题 | 实际读取MS PDF页 | 原题／评分逻辑的独立核对 |
| --- | --- | --- |
| 1C p8 Q9(a,b)；p17 Q21(a,b)；p24 Q28 | p5；p9；p12 | 图上35h→350、单位工资10；252=2²3²7，与672的HCF84；20L按3:2计价61.60。Q9图另实际查看渲染 |
| 2C p4 Q4、p6 Q7、p8 Q9、p19 Q21 | p4、p5、p5、p9 | 27为立方；(7500−1875)/36=156.25；1000/42需取23整件且剩34cm；标准式2.5×10⁶ |
| 1E p12 Q14；p25 Q26 | p7；p13 | 质量标准式比较及差5.338×10²⁴→5.34×10²⁴；实际查看Q26分式8/(3−√5)，独立有理化为6+2√5 |
| 2E p5 Q6；p12 Q14、Q15 | p5；p8 | 分数整体回推240人、40男；9:7差116→总928；1800复利4%逐年1872、1946.88、2024.7552，首次超2000为第3年 |
| 2E pp20–21 Q23；p21 Q24 | p13；p14 | 12000aᵗ、a=.8，8期2013.26592约初值1/6；正量界保守计算1495/75.5后取整19。课程改成每箱独立有界，避免把平均人重当逐人保证 |

循环小数、完整书面四则和分数指数没有在上述已读样卷找到专门题；按实际大纲及独立推导核查，不称这些题已读过。2E Q6只支撑精确分数先修，不冒充循环小数官方题。未声明读完全部QP/MS或验证远程网址可用性。

## 逐能力：实际讲解、独立证据与恢复

下表路径均在中英同名slug，锚点相同；“→”右侧为关闭旧答案后的新重试。主线解释、示范公开；独立题提示和完整解答分别关闭。

| 目标／官方细项 | 主线与可观察独立任务 → 新重试 |
| --- | --- |
| N1正负整数／小数／分数排序、符号和数轴；N2位值 | number #place-value/#signed-numbers；#practice-order → #retry-order，换表征并解释负数方向 |
| N2正负整数小数书面四则、情境；N3逆运算 | number #written-methods；#practice-arithmetic → #retry-arithmetic，实际要求书面及逆核，不只背顺序 |
| N2/N7正负真假带分数四则 | number #fraction-arithmetic；#practice-fractions → #retry-fractions，负带分数整体取负、先换同单位／倒数 |
| N3括号、幂根、倒数、同级顺序 | number #operation-order；#practice-order-of-operations → 同名retry，分组改变且须解释错误 |
| N4奇偶、质数、因倍数、质分解及HCF/LCM | number #factors-multiples；#practice-factors → #retry-factors，分组与再次同时须自行选法 |
| N5正整数幂及平方／立方／高次实根 | powers #powers-and-roots；#practice-powers → #retry-powers，负号括号及主平方根含义 |
| N6/A6整数／分数指数与条件 | powers #index-laws/#fractional-powers；#practice-indices/#practice-fractional-powers → 对应retry，非零／正底数条件齐全 |
| N7根式精确计算、简化及有理化 | powers #surds；#practice-surds → #retry-surds，平方因子、同类项、共轭及分母非零 |
| N8标准式计算解释；N10显示、输入和合理性 | powers #standard-form/#practice-standard-form → #retry-standard-form；accuracy #estimation/#practice-estimation → #retry-rounding。三角函数操作属三角主题，本报告不称六页覆盖N10全部 |
| N11小数位／有效数字、估算、限及复合界 | accuracy #rounding/#limits/#calculated-bounds；#practice-rounding/#practice-estimation/#practice-limits/#practice-bounds → #retry-rounding/#retry-limits/#retry-bounds，新增乘积端点已复核 |
| N12分数↔循环小数、纯／混循环、精确与近似 | recurring #remainders/#align-tails；#practice-division/#practice-conversion/#practice-reasoning → #retry-division/#retry-conversion。有限小数／百分数转换承接样章，本次不重审样章 |
| N15变化率、相继变化、单复利／贬值、逆百分／公式 | percent #multipliers/#interest/#reverse/#formula-model；#practice-change/#practice-interest/#practice-reverse/#practice-model → 对应四retry；反求年利率新增恢复有效 |
| N16–18比例单位、份额、分配、差、混合情境 | ratio #ratio-parts；#practice-sharing/#practice-mixture → #retry-sharing，原有分配与新增单成分变化均有真实产出 |
| N19单位率、工资和best buy | ratio #unit-rates；#practice-rates → #retry-rates；公斤单位与整数包／最低需求分开判断 |
| N20数值正反比／重复比例、指数增长衰减；A18代数变率 | ratio #direct-inverse/#variation/#exponential；#practice-models/#practice-variation/#practice-growth → 同名retry。模型条件、不变量、画图数据、反求量／因子均实际要求输出 |

## 独立复算账本（含全部示范、练习、重试）

以下均先由题干重算，再比解答。每个锚点下多问分别核对；数值列是可追查的结果记录，不代替页面中的完整推理。

| 页面 | 示范／概念例的复算 | 首次独立任务结果 | 新重试结果 |
| --- | --- | --- | --- |
| number-operations | 27.68+4.57=32.25；30.02−4.57=25.45；3.24×1.5=4.86；12.6/.4=31.5，负例−31.5；分数四则11/12、5/12、1/2、−2；顺序12、2；HCF/LCM24,36为12/72 | #practice-order：−.4=−2/5<−3/8<.04，位值.04、704.6；#practice-arithmetic：−11、−11、24、−8、余额11、−2.82、14；#practice-fractions：−1/12、11/6、−1/6、−6；#practice-order-of-operations：8、17、−5/4；#practice-factors：12袋各4红5蓝、240s，48=2⁴3、60=2²35及1/2/9/10分类正确 | #retry-order：−.7<−.68、位值.07、.705；#retry-arithmetic：12.03、11.25、−3.84、−24；#retry-fractions：1/12、−23/12、2/3、−1/2；#retry-order-of-operations：14、6、倒数−1/4；#retry-factors：90cm、6包各3/5，15/17/18分类正确，17质数理由可检查 |
| powers-roots-and-standard-form | 指数128、8、64、1、1/8；标准式1200、30000、367000；16³⁄⁴=8、27⁻²⁄³=1/9；√72=6√2、根式和7√2、根式积6；3/√5=3√5/5；4/(3−√2)=(12+4√2)/7≈2.5224 | #practice-powers：−64、−16、12、−4、5；64=2⁶=4³、81=3⁴；#practice-indices：x⁻²、1、1/9、2¹²；#practice-standard-form：.000064、4×10⁴、3×10⁹、3.4×10⁶；#practice-fractional-powers：27、1/4、(√a)⁵、a²；#practice-surds：3√2、12、5√3/3、6−3√3，√13≠5的反证有效 | #retry-powers：25、−25、−6、4、125=5³；#retry-indices：y⁻²，y=2的和12≠32；#retry-standard-form：8.1×10⁻⁶、2×10⁴、3×10⁻⁶；#retry-fractional-powers：1/16、32、√b；#retry-surds：9√3、2√7/7、(15−5√2)/7 |
| accuracy-and-bounds | .004786两种精度均.0048；23.746对应24/23.7460；9.96两有效位1.0×10¹；估算2、实际约2.03179；2.4标签区间[2.35,2.45)；容量保证14箱，15箱各3.4kg为有效反例 | #practice-rounding：.0305／.030；#practice-estimation：估4、实际3.979507…→3.98，398.7不合理；#practice-limits：[8.15,8.25)，8.25不取；#practice-bounds：面积[51.75,68.75)，和[16,18)，差(6,8)，商(23/11,25/9)，闭／开端点解释正确 | #retry-rounding：.0061两种精度、估300、实际294.581…→295；#retry-limits：[.0595,.0605)，上端不取；#retry-bounds：22瓶保证，23×.849>19.5反例；和[10,12)，差(4,6)，新增面积[18.75,29.75) |
| recurring-decimals | 3/8=.375；7/12=.58后循环3，余数10→4→4；.27循环=3/11；.1后循环6=1/6，两个移位尾巴对齐 | #practice-division：5/6=.8后循环3、7/11=.63循环；.6364×11=7.0004所以不精确；#practice-conversion：.36循环=4/11、.2后循环36=13/55；#practice-reasoning：.1后循环8=17/90，.9循环=1，所需消尾论证完整 | #retry-division：13/15=.8后循环6，.867×15=13.005非精确；#retry-conversion：.18循环=2/11、.3后循环18=7/22，两移位相减与约分正确 |
| percentage-change | 80×.85×1.1=74.8、总−6.5%；40%→50%为10百分点／相对25%；1000单利3年1300/利息300，复利1331/331；逆96/.8=120；1500×1.03逐年1545、1591.35、1639.0905，首次超1600第3年 | #practice-change：降25%、回升33⅓%、6百分点／20%；#practice-interest：880/利息80，882/82，贬值722；#practice-reverse：原80、最终90、总+12.5%，25%作用于72；#practice-model：年率10%，另笔1080→1166.4→1259.712，首次超1200第3年 | #retry-change：198、总−1%，降10百分点／20%；#retry-interest：单利48、复利48.96；#retry-reverse：138/1.15=120；#retry-model：550→605→665.5、首次第3年、利息165.5；新增600→636.54反求3%已精确核验 |
| ratio-and-proportion | 20L分12/8；差6给18/12总30；工资12/h、7h84；6/kg对5.5/kg；笔记本8本20；工人8人3h且固定工作量；直线y=2x／反比12/x点值；40重复1.5得90；变率示例k2.5／90；指数200→300→450→675 | #practice-sharing：3:2及3/5，120分24/36/60，差12得30/18；#practice-mixture：15/9成本57，加B后15:17；#practice-rates：4.8/kg对4.5/kg，最低750g选A，工资84；#practice-models：P在x3时9、Q时4，图含所需坐标，泵15h、重复.75得45；#practice-variation：y4.5x给x10，z72/x给x1.6；#practice-growth：因子1.1、N₄732.05≈732，衰减因子.8 | #retry-sharing：2:3及2/5，84分24/60，差21得14/35，原液4/10成本36，新增A后3:5；#retry-rates：4.4/kg对4/kg，至少2kg分别4小包8.8对2大包12，工资36；#retry-models：28.8、4h、72；#retry-variation：u8x给x5、v72/x给x1.8；#retry-growth：300×1.2³=518.4、100×.9³=72.9 |

另外单独检查：开方主值与解方程±分开；立方负根成立；所有分数指数变量均正，负整数指数／分母变量非零；有理化每一步乘1、共轭分母不为0；分数与小数比较没有因负号反向出错。和差积商界分别由正量单调性决定，差／商的两端不可取有具体理由，容量最大整件数不是只做一次四舍五入。循环小数用相同非零余数或对齐无限尾论证，非有限显示猜测；0.999…不当成“很接近1”。复利阈值检验前一期、正乘数及期间一致；正反变率、指数与实际数据推断的条件均说明，两个端点不能证明自然规律。未发现新数学／条件错误。

## 双语、图及尚欠边界

12页所有英文Question及完整公式顺序逐式一致，修补涉及的中文条件／反馈另读，未拿公式相同代替译文审查。三SVG源码和XML检查后用sharp直接栅格化查看：整数数轴等距、舍入图2.35实点／2.45空点、比例图3+2等份，与正文一致；替代文字未提前泄露独立题结果。比例画图题有完整坐标数据及可重建的线／曲线反馈，不需从不可读示意图猜值。

源检：每页frontmatter subject为igcse-mathematics，中文lang／translation_of与permalink配对；五个公共锚点、无重复ID、本页回补链接、div/details配对及提示／解答分别默认关闭均核对。原框数不因追加子问虚增；后续mixed链接为约定锚点，此处不越界重审全课程mixed内容。

**未做：**Jekyll、_site、适用全站测试、生成HTML／MathJax、桌面／手机／深浅主题／键盘／语言切换／远程链接可用性；也没有实际计算器机型按键验收、学生试用或延后保持数据。由主执行者统一验收；这些未完成状态不因本次内容复核而关闭。未将fx-CG50或CAS作者核算当IGCSE许可。

## 最终被审源SHA256

修补后实际重新读取字节，12页、3图均与Number作者最终冻结表相符。作者记录只作变更定位；下列核算、逐式与任务证据由本审查者完成。任何后续源改动需重新核查受影响项。

| 最终源文件 | SHA256 |
| --- | --- |
| igcse/mathematics/number-operations.md | f33030a781ce730f07571ce5be12d9f0cd213fdbafa01aff4102dd32b754b42e |
| zh/igcse/mathematics/number-operations.md | b637aa1d10d449cff0d3beebac0cb577aa2ed4bb2c99e73df9a1bf497f6a7353 |
| igcse/mathematics/powers-roots-and-standard-form.md | c9db2208d143f842882a1a9c77e8c9ea4c5b30fd0ecd4c91ba68bd8a38126e73 |
| zh/igcse/mathematics/powers-roots-and-standard-form.md | b6b1a4503c1432322ce3fbdb6c37173839f25e13b239008c2c604950e68865df |
| igcse/mathematics/accuracy-and-bounds.md | 072fc821a0d2f8f04a377a137c72a1830a85d6471fa932975812ab4e051afd2a |
| zh/igcse/mathematics/accuracy-and-bounds.md | c34ef7e9d5bc1f08e8517a0c5ed34dff39d5eeb7c37817bf608661fe7cace449 |
| igcse/mathematics/recurring-decimals.md | 3b80b35e0077eab72a29033c768f9b673bddd88929a32c3d960be1f412b14512 |
| zh/igcse/mathematics/recurring-decimals.md | eba5cce7cdce27aa692acd86c7dcdd3424b932fbc0e66c67e730762f7f2426a8 |
| igcse/mathematics/percentage-change.md | 03c1048bc009552b591c1611fa23f83129a07faa7580a63d602654640826ee7e |
| zh/igcse/mathematics/percentage-change.md | 3b51c9e8678ce7c851ed1ae256cb68dd2add1b28f720a9d5a2299d618e9ca458 |
| igcse/mathematics/ratio-and-proportion.md | b0e5e8bedd6fb206c0eacd23af5fc9fc1ee31c05eed820d28d3874a6600dbf1d |
| zh/igcse/mathematics/ratio-and-proportion.md | 8f24e3d4f22d4cbd000dad768f54d244b16b3a1353b57b9d97919c63cda78d85 |
| assets/img/igcse-number-integer-line.svg | 3bbd717a4042f1f20f0865c73a88f4de15f0a5f9de0a6d1d347eb525fc2dd0cc |
| assets/img/igcse-number-rounding-interval.svg | a70e6c1af2c97fefc600deeeaebfd25c59326c0493ef2c0e1010e79074bcdf92 |
| assets/img/igcse-number-ratio-parts.svg | 10addbc3df8477fdbd829f6643444c3b5c07a45a133d743d64663a0342b1b1b9 |
| docs/agents/implementation-igcse-number-2026-10-27.md（交接记录） | 086e1d6e9e346bc420bb4680b74aa217412f5ed935d0fa051cad647f23e6f8b9 |

本报告已完成交付；Number四项发现及单路线核对关闭，后续统一技术验收／学生试用仍未完成。自身几何稿另由Hilbert复查，本报告不审查或自行批准自己的几何修补。
