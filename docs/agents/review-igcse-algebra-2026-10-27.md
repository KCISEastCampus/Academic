# IGCSE Algebra 独立审查记录

日期：2026-10-27。审查范围为八主题中英 16 页、`assets/img/igcse-algebra-*.svg` 两图及作者最终冻结记录。本轮只更新本报告，不改 Algebra 或已冻结 Statistics 源稿、不构建、不运行网页或浏览器、不提交 Git。

**最终结论：Algebra 八主题独立内容复核完成，A-R1–4 均已复核关闭；最终冻结源未发现尚未解决的数学、目标独立产出或同目标恢复问题。** 已实际阅读八主题中英文并重解全部142个Question所含示范/练习/重试，另核非Question形式的关键公式、图表和解释；逐题账本、目标映射及最终SHA列于下文。此为源级内容审查结论，不是构建、网页阅读或学生学习效果通过。用户确定学校仅开设 Extension，审查按单一路线及必要共同基础判断，不要求第二套 Core 路线或 Core 跳过路径。官方两列只作来源范围证据。

## 首轮发现及修后关闭依据

### A-R1 · P2：英文把负被开方数误写为负平方根（已关闭）

`igcse/mathematics/quadratics-and-simultaneous-equations.md:181`，#formula："A negative square root is not a real number"。负的平方根分支可以是实数，例如 −√4=−2；这里应说负数的平方根不是实数，即 Δ<0。中文对应句正确。请修英文的被开方数条件，保留 ± 的两分支。此处不是答案计算错误。

最终源复核：英文第181行、中文第183行均明确负的是被开方数，Δ<0无实根；−√4=−2 的实数负分支被正确保留。原公式的±、二次根数值和反函数负分支没有被错误删除。独立检查实数平方非负及负分支反例，关闭。

### A-R2 · P2：指数趋零描述没有排除 k=1（已关闭）

`igcse/mathematics/functions-and-graphs.md:261` / `zh/igcse/mathematics/functions-and-graphs.md:263`，#exponential：先允许正数 k 且说明 k=1 恒为 1，紧接着却说所有图像一端趋近零。常数 1 不趋零。应把趋零结论限于 k>1 或 0<k<1，并说明相应方向；保持 k=1 情况。

最终源复核：相同行现分别说明 k>1 时 x 向负方向无界才趋零，0<k<1 时 x 向正方向无界才趋零，k=1恒1、不趋零。独立用幂/倒数关系核方向，并以 k=2、1/2、1 的正负整数输入排错；不是只检查 k=1 这个反例。两语言一致，关闭。

### A-R3 · P2：非标准真实情境图有示范，独立产出未完整对应（已关闭）

`functions-and-graphs` 的 #context-graphs / #practice-context / #retry-context：停车费提供真实情境的完整示范；后两题仅为抽象分段 f(x) 作图和域值域，没有让学生独立从新的真实情境确定/使用分段关系。A17 的非标准真实情境图目标不能只靠停车示范或常规路程图替代。请在同一 Extension 路线增加短的新情境独立作图/解释任务及相应新重试；可与现有分段函数题合并，不需另造 Core 路线。反馈须检查各区间、端点、费用/时间含义及图读数，不只列公式或数值。

旧稿 #context-graphs 的 "Extension notation" 标签不是本项主要缺口；用户已改为单一路线，后续依统一要求整理学生可见层级。不能用删标签代替补独立情境产出。

最终源复核：#practice-context（英文397行/中文399行）现由租车文字自行建式、作图、标端点、求可达费用和反求时长。独立按费用的三项构成重建：不租为0，0<t≤2为6，2<t≤4为6+3+2(t−2)。因此 C(0/2/2.5/4)=0/6/10/13，费用11对应3小时；值域{0,6}∪(9,13]，8和9均不取得。图要有孤立原点、(0,6)空/(2,6)实、(2,9)空/(4,13)实，不能把跳跃填成竖线。

#retry-context（英文657行/中文659行）改为从流量累计水量的新情境，独立重建 V=2+3t、8、8−2(t−4)，区间0–2、2–4、4–7分钟；节点(0,2)/(2,8)/(4,8)/(7,2)连续，域[0,7]、值域[2,8]，未超过10升容量。V(2/4/5)=8/8/6，6升对应4/3及5分钟，均在各自区间。新题须区分流量与体积、累计已有量、水平段与零水量、连续与跳跃，不能照抄前题三段收费式。题前未给分段答案或同数据图，帮助分别关闭；反馈给完整规则、坐标、单位、端点、误因和精确回补。首次与新重试证据均补齐，关闭。

### A-R4 · P3：指数错误的恢复导航指到 variation（已关闭）

英文函数页 #retry 第463行 "Wrong multiplier" 指向 #variation；中文恢复导航也没有 #exponential。指数底数/初值与正反比例常数是不同困难。请给指数错误直接回补 #exponential 并接 #retry-exponential；比例常数错误另保留 #variation。这是精确恢复路径问题，不表示指数重试题不存在。

最终源复核：英文第473行、中文第475行将指数初值/乘数直接回补 #exponential 并接 #retry-exponential，正反比例常数另接 #variation。实际锚点存在、重试使用3ˣ及100(0.8)ᵗ新数据，输出1/9、1/3、1、3、9及100、80、64核算一致。关闭。

## 已完成的范围与版本检查

- 实际读过 AGENTS、课程长期标准 v1.1、公式规范、主实施路线、已认可样章和 Algebra 实施记录。使用官方缓存 regular `page.extract_text()`，未读 layout 巨量空白文本。
- specification PDF14–17（印刷15–18），A1–26；另用 PDF15–16 的表格及实际渲染图核对官方列：A9正式域值域/复合反函数、A11过点/垂线、A12指数三角、A13–15、A18及A20配方公式等范围。A17真实情境图和曲线梯度/面积的差别仅记录来源，不再制作两个学习群体。
- 四卷正文身份均 Specimen 2018，文件名2016不是考季。独立阅读 QP/MS 的实际页面：1C QP12 Q13–14、13 Q15、16 Q20、23 Q27，MS7、8、9、11；2C QP2 Q1–2、4 Q5、12 Q13、16–17 Q16、18 Q17、22 Q24、24 Q27，MS4、7、8、10、11；1E QP16 Q17、22–23 Q23、24 Q24、30 Q31，MS9–10、11、12、16；2E QP11 Q12–13、13 Q16、14 Q17、15 Q18、18 Q21、19 Q22、20 Q23、25 Q28，MS7、9–10、11、12、13、16–17。
- 另实际查看渲染图：spec PDF15、16，1E QP16（分式幂与分母）、24（精确二次根），2E QP11（分段规则）。重建 1E Q17(a) 为 4c⁵/(3d³)，Q17(b) 为 (11m−14)/((m+1)(m−4))；Q24 为 −3±√7。并非把文字提取中丢失根号或指数的串直接当原式。其余官方图未逐图重建，保留这个边界。
- 八对页面英文 Question、全部 TeX 序列、锚点顺序一致；元数据/translation_of正确；必需五锚点存在；94个独立/重试题框各有两个默认关闭 details，未发现默认展开答案或嵌套题框；所有当前引用目标与显式锚点可定位。共有142个Question（含48个公开示范）、50个首次独立任务和44个retry；计数不是质量判据。
- 两个SVG的XML/title/desc/viewBox、轴尺度、曲线/切线坐标已独立核对并栅格化查看。直线图 y=2x−1 四点正确；切线图曲线 x²+2x+3、切线6x−1在(2,11)相切，三角形(1,5)到(3,17)给12/2=6。未在网页查看响应大小。
- 初读后作者增补的 expressions #practice-language 因子识别、coordinates #retry-lines 单位与 #retry-directions 水平/竖线、differentiation #retry-stationary 草图均重读重解。没有把此前制作中缺文件列为最终缺课。

## 首轮重点核验摘要（历史，最终逐题账本见下）

| 位置 | 独立核验结果 |
| --- | --- |
| fractions #practice-fractions | (a)(x−2)/(x−3)，排除3,−2；(b)(3−x)/((x−1)(x+1))，排除±1；(c)(x+2)/(x+3)，排除1,−3，−2允许；(d)(x+3)/(x−1)，排除1,−3,−2。限制取自原式及除数非零，非只看化简后分母 |
| fractions #retry-fractions | (x+1)/(x−2)，排除1,2；(2x+1)/(x(x+1))，排除0,−1；(x+3)/(x+2)，排除−2,−3,1 |
| fractions #practice-proof | 奇数2n+1的平方=2(2n²+2n)+1；相邻正偶数2n,2n+2的平方差=4(2n+1)，奇因子保证不能被8整除。任意整数条件成立 |
| equations #practice-region | 顶点(0,1)包括，(0,5)/(4,1)排除；x=0,y=1实线，x+y=5虚线；(1,2)在内，(4,1)不在 |
| equations #practice-quadratic / #retry-quadratic | −1/2≤x≤3；x<−2或x>3；重试x≤−1或x≥5。检验各分区而非只列根 |
| quadratics #practice-formula / #retry-square | (−3±√17)/4≈.281,−1.78；x²+2x+5无实根；2x²+8x+3=2(x+2)²−5。重试根−1±√3与(−1±√7)/3 |
| functions #practice-composite | fg=2x²−5，gf=4x²+4x−2，相等判别式−8无实根；hk=1/(x−3)，排除3 |
| functions #practice-inverse | f逆=(5−x)/2，定义域[−1,7]、值域[−1,3]；g逆=−√x，定义域[0,∞)、值域(−∞,0]，9映到−3。负分支选择由原限制给出 |
| functions #practice-context / #retry-context | 原题domain[−2,3]、range[0,3]，f0=3,f1=3,f2=2；重试domain[−1,3]、range{1}∪[2,4]，f1=2。不跨跳跃连线 |
| sequences #practice-quadratic / #practice-choice / #retry-quadratic | 2n²+n+3，第6项81、第7项108，82不在；n²+n+1，首次差4并不恒定；2n²−n，66为第6项，另一代数项号−11/2不许可 |
| differentiation #practice-stationary / #retry-stationary | p极大(−2,16)、极小(2,−16)，根±√12,0；q驻点拐点(0,4)，x截距−∛4。重试y极小(−1,−2)、极大(1,2)，根±√3,0；z驻点拐点(0,0)。均检查左右导数符号与弯曲变化 |
| differentiation #practice-estimates / #retry-estimates | 切线约2与1m/s²；梯形12.5与16m。完整二次规则支持上弯/高估；只有有限表点时不能据表证明误差方向。题前未给参考切线点，参考点留在关闭解答 |

## 首轮冻结快照 SHA-256（历史身份）

以下为首轮实际读取的文件字节；作者随后执行单一路线改写及A-R1–4修补。保留本表追溯旧发现，当前结论以文末最终SHA为准。

| 文件 | SHA-256 |
| --- | --- |
| igcse/mathematics/expressions-and-formulae.md | a71f976ea2f94c30e1640cb5bf53da0ce0a5834b497c66ea34331635d5f47788 |
| zh/igcse/mathematics/expressions-and-formulae.md | 896af6f58da2a4c770582b0f7a8382ab000e492ff71af3a4c1cc3fff8e8902d0 |
| igcse/mathematics/algebraic-fractions-and-proof.md | cdc58f67b12799c0cde6672db909645418c4f58c168f4c61990cf884e9a0e18e |
| zh/igcse/mathematics/algebraic-fractions-and-proof.md | e1f7c80231cb242b0506e58f55122d7124126e6d57dddaac563353692f73d424 |
| igcse/mathematics/equations-and-inequalities.md | fc1a9893ac6625721485d2a458eaf261d0ae676c9f97454cda656cc531adf08d |
| zh/igcse/mathematics/equations-and-inequalities.md | 02b574082abf51fc763f4f3d399f9443b8cb6374e65ae5b90144cf7a22b2d21e |
| igcse/mathematics/coordinates-and-lines.md | 242b0d07fb0c81ece7de14703d42f44ebf4659590e048af4c63d6ba754701537 |
| zh/igcse/mathematics/coordinates-and-lines.md | 2ba4f5bdd4d3bf6a7570929afc6c07260b48d68261fb937fe7ee135851b576c4 |
| igcse/mathematics/quadratics-and-simultaneous-equations.md | 74dc1adeb19e9923c79275cd478010a02dbe08325deb9ea80f83633f3d321a1a |
| zh/igcse/mathematics/quadratics-and-simultaneous-equations.md | 2d6aa890779864aa69e8f6465d1856326bb8ef778c4146829e58e3d90f372108 |
| igcse/mathematics/functions-and-graphs.md | 14471bb305fd5569518b684c79916e8ec5c827e94bc287780dc50d39c9958a87 |
| zh/igcse/mathematics/functions-and-graphs.md | 5a8b84e7c974f879e26b090c247725fa1a654a65b2dbdde53bf479748966e679 |
| igcse/mathematics/sequences.md | d6c88f88ca2660230fcaaf4e4237f677822bd276cd503fdb32d7c1be9899d2b4 |
| zh/igcse/mathematics/sequences.md | a8f86f517c0c76213df455f0d093258912381dd9535498a30b3f14e5bb2f79b8 |
| igcse/mathematics/differentiation-and-motion.md | 01f16102346ddf2fb3e6e0e53ebf15e98bbdd7939a4906cd9b07441ec976288a |
| zh/igcse/mathematics/differentiation-and-motion.md | dd4b4c38285649d8cb69bc7f24a45ca29593889f60fa27c3d18f8371379dafde |
| assets/img/igcse-algebra-line.svg | 2b669fe0087aca28dc6e0253485fbe902bd72f28999dc2a6bdffd5a17f536d63 |
| assets/img/igcse-algebra-tangent.svg | a61eb6e4f76a9be209cb4d27f13b4ff8aaae0268bfa1434bf698133e1a50771b |

## 本审查者未做的验收

本审查者没有运行 Jekyll、生成HTML、MathJax网页显示、桌面/手机/键盘/语言切换验收；没有学生试用。SVG临时栅格图和官方PDF临时渲染图放在独立临时产物目录，不写公共缓存或 _site。源级数学审查、图源图片查看不能替代统一技术验收。


## 最终逐题独立核算账本

以下按最终英文题干逐项重建，再与中英解答核对；同数据的两语言合记一项。分式限制从原式定义和除数非零出发，证明按任意整数与一般展开重建，图题同时核点/边界/形状/尺度和解释。有限代值及临时Fraction计算只用于排错，不代替恒等证明、值域证明或全范围结论。共142项，包含48个公开示范、50个首次独立任务、44个新重试；非Question形式的常数导数、三角表、图形单位等也按相关行和下文条件核验。

### expressions-and-formulae

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-letters | C=3n+2，n为正整数；n=4得14。重复收费与一次送货费分开。 |
| #practice-language | C=5+2d，d≥0；项5,2d；2(d+3)的因子2与(d+3)。展开恒等式成立，2d+5=17仅d=6成立，d=0为反例。 |
| #example-substitution | 2(−2)²−3×5=−7；−2²=−4与(−2)²=4须区分。 |
| #practice-substitution | ab=−6，a²−b²=5，2a²=18而(2a)²=36，反例否定恒等关系。 |
| #example-expansion | x²+x−6−2x+2=x²−x−4；x=0两式均−4，展开为一般论证、代值只是排错。 |
| #practice-expansion | 面积x²+3x−4 cm²，x>1保证边长为正；第二式2x²+7x。 |
| #example-three | (x²−1)(x+2)=x³+2x²−x−2。 |
| #practice-three | x³−7x−6；x=0为−6，x=3为0，分别与原因子相符。 |
| #example-factors | (x+3)(x−2)与(x−4)(x+4)；中间项及常数均乘回核对。 |
| #practice-factors | 4x(2x−3)；(x−2)(x−3)；(3x−5)(3x+5)；(3x+2)(2x−1)。最后中间项−3x+4x=x。 |
| #example-rearrange | t=(v−u)/a，a≠0；a=0时只给v=u，不能唯一确定t。 |
| #practice-rearrange | h=2A/b，b>0；r=C/(2π)；h=5cm，代回面积30cm²。 |
| #example-twice | x=(y+2)/(y−3)，y≠3；原x≠1。y=3会要求−3=2，且所得反式不会给x=1。 |
| #practice-twice | x=(1+2y)/(4−y)，y≠4；r=√(V/(πh))，r,h>0要求V>0，半径选正分支。 |
| #practice-indices | 2a²/b³，a,b非零；x²+x³=x⁵在x=1失败；27^(2/3)=9。 |
| #retry-language | C=12+3n，n为非负整数；括号内项n,4，外因子3,(n+4)，展开后项3n,12。分配律证明恒等式。 |
| #retry-substitution | p²−2pq=4−12=−8。 |
| #retry-expansion | 2x²+x−10，负括号改变两项符号。 |
| #retry-three | x³+x²−4x−4。 |
| #retry-factors | 5(x−2)(x+2)；(x−4)(x+2)；(3x+1)(x−2)。 |
| #retry-rearrange | a=(v−u)/t，t≠0；(14−2)/4=3m/s²。 |
| #retry-twice | x=(y+3)/(y−2)，排除y=2；原排除x=1。 |
| #retry-indices | p⁴，p≠0；16^(3/4)=8；p⁷−p³=p³(p⁴−1)，减法不能当同底数除法。 |

### algebraic-fractions-and-proof

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-numeric | (x+10)/12；4x/5。公分母保留整个减号，除法乘倒数。 |
| #practice-numeric | x/2；(4−x)/6；3x/10；2x/3，分别对应加减乘除。 |
| #example-cancel | (x−3)/(x−2)，原分母(x+3)(x−2)，故x≠−3,2，已约掉的−3仍排除。 |
| #example-operations | (5x+1)/((x−1)(x+2))，x≠1,−2；分子为2(x+2)+3(x−1)。 |
| #example-division | (x+2)(x+3)/(x+1)，x≠−1,−3,2；最后的2来自原除数不能为零。 |
| #practice-fractions | (a)(x−2)/(x−3)，排除3,−2；(b)(3−x)/((x−1)(x+1))，排除±1；(c)(x+2)/(x+3)，排除1,−3而−2允许；(d)(x+3)/(x−1)，排除1,−3,−2。 |
| #example-equivalence | 4(x−2)+3x=4x−8+3x=7x−8，分配律对每个实数成立，不用有限代值代替证明。 |
| #practice-argument | (x+2)²−x²=x²+4x+4−x²=4x+4；错误声明漏4x，x=1给9≠5。 |
| #example-proof | 任取整数n，相邻数n,n+1之和2n+1，按奇数定义得结论。 |
| #practice-proof | (a)任意奇数2n+1，平方=2(2n²+2n)+1，括号为整数。(b)相邻正偶数2n,2n+2，n≥1，较大平方减较小平方=8n+4=4(2n+1)；为4倍且奇因子不能再除2，故不为8倍。 |
| #retry-numeric | (4x+1)/4；−3/4；3x/2；3x/2。 |
| #retry-fractions | (x+1)/(x−2)，排除1,2；(2x+1)/(x(x+1))，排除0,−1；(x+3)/(x+2)，排除−2,−3,1。 |
| #retry-argument | 非恒等式；一般展开为x²−1，x=0也给−1≠1。 |
| #retry-proof | 任意相邻整数n,n+1中必一偶数：按n偶/奇两情况都给乘积含2因子。相邻奇数2n+1,2n+3之和4n+4=4(n+1)，任意整数n成立。 |

### equations-and-inequalities

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-balance | x=5；原两边均21，同做等式变换而非只搬项。 |
| #practice-equations | x=3；2(x+1)=2x+2为全部实数；2(x+1)=2x+3无解。 |
| #example-model | 2w+2(w+3)=26，w=5，长8，单位cm，周长代回26。 |
| #practice-model | 8+3n=20+n，n=6；10节时A38、B30，B较便宜。 |
| #example-graph | 表x0,1,2,3对应1,3,5,7及6,5,4,3；交点(5/3,13/3)，x≈1.7。 |
| #practice-graph | 两行0.4,1.9,3.4,4.9与4.1,3.4,2.7,2；x=37/22≈1.7，y=1286/440≈2.92。图读横坐标、不把y当解。 |
| #example-inequality | x≤−2；−2实心、向左，除−3须翻向。 |
| #practice-inequality | −2<x≤2，左空右实；x>−3，给定窗口整数−2,−1,0,1,2。 |
| #example-region | 三角形顶点(0,0),(4,0),(0,4)，三边实线全含；(0,0)测试确定斜线下方。 |
| #practice-region | 在x=0右侧、y=1上侧、x+y=5下侧；前两边实、斜边虚。顶点(0,1)含，(0,5)/(4,1)不含；(1,2)与(0,1)在内，(4,1)不在。 |
| #example-quadratic | (x−3)(x+2)>0，x<−2或x>3；两根空心，乘积符号在外侧为正。 |
| #practice-quadratic | 2x²−5x−3≤0得−1/2≤x≤3；−x²+x+6<0得x<−2或x>3。分别闭端点和开端点，负首项不沿用同一符号模式。 |
| #retry-equations | 5(x−2)=2x+8得x=6；矩形2w+2(w+2)=20，宽4、长6cm。 |
| #retry-graph | 0.8x+1=4−0.3x得x=30/11≈2.7，y=35/11≈3.18；两直线表和交点尺度相符。 |
| #retry-inequality | x≥−2；−2≤x<3。数轴分别实点向右、左实右空区间。 |
| #retry-region | x≥1、0<y≤4−x；(1,3)在内，(2,0)不在。x=1/斜边实，y=0虚，底部两角排除。 |
| #retry-quadratic | x≤−1或x≥5，根包含且两外区间全部为解；仅给−1,5漏无穷多个解。 |

### coordinates-and-lines

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-coordinate | A(−3,2)在II，B(2,−3)在IV，C(0,−2)在负y轴；横坐标先行。 |
| #practice-points | P,Q,R,S依次I,II,III,IV；T负x轴。P/S同x2，Q/R同x−2；P/Q同y3，R/S同y−3。 |
| #example-gradient | (180−100)/(30−10)=4L/min，正值表示每分钟增加4L。 |
| #example-line | x−1,0,1,2给y−3,−1,1,3；直线m2，截距(0,−1),(1/2,0)，尺度与SVG四点相符。 |
| #practice-lines | y值6,3,0,−3，m−3，截距(0,6),(2,0)；平行y=−3x−4。水量梯度(19−7)/(6−2)=3L/h。 |
| #example-points | 斜率−2；y=−2x+1，两给定点都满足。 |
| #practice-equation | 两点直线y=−2x+6；平行过点直线y=3x+9，不能抄旧截距−7。 |
| #example-perpendicular | m=−1/2，y=−x/2+3；过(4,1)且斜率乘积−1。 |
| #practice-perpendicular | y=x/2−2；垂直y=4的为x=2，垂直x=−3的为y=−1；竖线斜率未定义。 |
| #retry-points | A在III、B在I、C在II、D正y轴；B/C同y2，所以水平。 |
| #retry-lines | x−3,−2,−1,0,1给y−2,0,2,4,6；m2，截距(0,4),(−2,0)，平行例y=2x−1。另线4L/h。 |
| #retry-equation | y=2x+1；过(0,5)的垂线y=−x/2+5，乘积−1。 |
| #retry-directions | 垂直水平y=−5者x=−3，斜率未定义；垂直竖线x=7者y=2，斜率0。两者均过(−3,2)。 |

### quadratics-and-simultaneous-equations

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-roots | (x−3)(x+2)=0，x=3或−2；零乘积与因子各自为零连接。 |
| #practice-roots | 3,4；0,4；−3/2,1。原式代回均零，不能除x丢0。 |
| #example-sketch | x−2至4的y为5,0,−3,−4,−3,0,5；根−1,3，y截距−3，顶点(1,−4)，对称x=1，向上平滑抛物线。 |
| #practice-graph | x−3至2的y为2,−2,−4,−4,−2,2；根(−1±√17)/2≈−2.6,1.6，顶点(−1/2,−17/4)，对称x=−1/2。 |
| #example-square | (x+3)²−4；顶点(−3,−4)，根−5,−1；补9后须减回9。 |
| #practice-square | (x−2)²−5；顶点(2,−5)、对称x2、根2±√5；x1,3的高度都−4。 |
| #example-formula | x=−2±√3，根号内12，a=1且整个分子除2。 |
| #practice-formula | (−3±√17)/4≈0.281,−1.78（3s.f.）；x²+2x+5判别式−16，无实根；2x²+8x+3=2(x+2)²−5。 |
| #example-simultaneous | (4,3)，两直线y=11−2x与y=x−1交在此；同一对值满足两式。 |
| #practice-simultaneous | 2p+3q=19、3p+q=18，p5、q3美元；价格坐标交点(5,3)，代回19/18。 |
| #example-line-curve | x²−4x+2=0，配对(2+√2,3+√2)与(2−√2,3−√2)，符号须同向。 |
| #practice-line-curve | (4,11),(−1,1)，分别满足y=2x+3与y=x²−x−1。 |
| #example-model | x(x+2)=15得x3或−5，正长度只留3，边3cm与5cm。 |
| #practice-model | 小数x与大数x+3，x(x+3)=40得5或−8；只留正数5,8，−8/−5不合条件。 |
| #retry-graph | y值5,0,−3,−4,−3,0,5；根±2，顶点(0,−4)，对称x0。 |
| #retry-square | (x+1)²−3，根−1±√3，顶点(−1,−3)；3x²+2x−2的根(−1±√7)/3。 |
| #retry-simultaneous | (3,2)，y=8−2x与y=x−1相交，代回8及1。 |
| #retry-line-curve | 配对((1+√17)/2,(5+√17)/2)与((1−√17)/2,(5−√17)/2)。 |
| #retry-model | w(w+1)=20，w4或−5，正长度宽4长5cm。 |

### functions-and-graphs

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-machine | 输出3(−2)−4=−10；输出8时输入4，逆序先加4再除3。 |
| #practice-machine | 输出2(−3+5)=4；输出18时输入4；一般输出2(x+5)=2x+10。 |
| #example-domain | 定义域[−2,3]，值域[0,9]，最小值在区间内部x0，不只用两端。 |
| #practice-domain | f定义域[−1,3]、值域[0,4]；1/x的定义域和值域都排除0；正输入同时给±√x不满足一输入一输出。 |
| #example-composite | fg=x²−4x+5，gf=x²−1；fg(3)=2，gf(3)=8，顺序不可交换。 |
| #practice-composite | fg=2x²−5，gf=4x²+4x−2；相等给2x²+4x+3=0，判别式−8无实根。hk=1/(x−3)，域排除3。 |
| #example-inverse | f原域[1,5]、值域[−1,11]；f逆=(x+4)/3，域[−1,11]、值域[1,5]，双向代回复原。 |
| #practice-inverse | f原域[−1,3]、值域[−1,7]；逆(5−x)/2，域[−1,7]、值域[−1,3]。g原域x≤0，逆−√x，逆域x≥0、值域≤0；9映到−3。 |
| #example-families | x³在−2,−1,0,1,2给−8,−1,0,1,8，平滑过原点；1/x在−2,−1,−1/2,1/2,1,2给−1/2,−1,−2,2,1,1/2，分两支、不跨0，两轴为渐近线。 |
| #practice-families | x−2,−1,0,1,2：一次y−4,−3,−2,−1,0；二次2,−1,−2,−1,2；三次−10,−3,−2,−1,6；2/x为−1,−2,未定义,2,1。一次常斜率，二次顶点(0,−2)，倒数0禁用。截距分别(2,0)/(0,−2)、(±√2,0)/(0,−2)、(∛2,0)/(0,−2)、无。 |
| #example-exponential | 2ˣ表1/4,1/2,1,2,4,8；每步乘2非等差，正值曲线经过(0,1)。 |
| #practice-exponential | (1/2)ˣ表4,2,1,1/2,1/4,1/8；a=1/2（a>0），初值80，t3时10。衰减模型不能取负底数。 |
| #practice-trigonometric | sin零点−180,0,180,360,540°，极大90/450°，极小−90/270°；cos零点−90,90,270,450°，极大0/360°，极小−180/180/540°。极值±1，周期360°、值域[−1,1]；sin(−90°)=−1，cos450°=0。 |
| #practice-tangent-graph | 零点−180,0,180,360°；渐近线−90,90,270°；y1在−135,45,225°，y−1在−45,135,315°。tan(−135°)=1，tan270°因cos270°=0未定义；周期180°，各支递增，值域全实数。 |
| #example-context | 停车C(0.5)=3、C(3)=7；(0,3)空至(1,3)实，再线至(4,9)实，t0排除，连接点含且无跳跃。 |
| #practice-context | 新租车C=0于t0，6于0<t≤2，9+2(t−2)于2<t≤4。C0/2/2.5/4=0/6/10/13；域[0,4]，值域{0,6}∪(9,13]；11美元在t3，8不可能。孤立原点、(0,6)/(2,9)空，(2,6)/(4,13)实，不补跳跃竖线。 |
| #example-variation | y=k/x，k24，x8时y3；固定乘积而非固定比值。 |
| #practice-variation | (a)y=3x²，x3时27；(b)y=24/x，x,y>0，x8时3cm。 |
| #retry-machine | (x−3)²在输入1时为4；输出4有输入1与5，不能只取一个平方根分支。 |
| #retry-domain | 域[−3,2]时x²+1的值域[1,10]，最小值来自内部x0，两端输出10与5不足。 |
| #retry-composite | fg=2x+1，gf=2x+2；hk=1/(x+2)，排除−2；kh=1/x+2，排除0。 |
| #retry-inverse | 逆(x−1)/4，逆域[1,9]、值域[0,2]；全实数上的x²非一一对应，不能有单值逆。 |
| #retry-families | x³+1在−2,−1,−.5,.5,1,2给−7,0,.875,1.125,2,9，另有(0,1)；截距(−1,0)/(0,1)。−1/x对应.5,1,2,−2,−1,−.5，无截距，渐近线x0/y0，跨0不连接。 |
| #retry-exponential | 3ˣ表1/9,1/3,1,3,9；截距(0,1)，无横截距，x向负无界趋零；100(0.8)ᵗ在t0,1,2为100,80,64。 |
| #retry-trigonometric | sin在0/180/360°为0，90°极大1、270°极小−1；tan零0/180/360°，渐近线90/270°，分支不连接。sin810°=1、cos(−180°)=−1、tan405°=1；两值域分别[−1,1]、全实数。 |
| #retry-context | 新水箱V=2+3t于0≤t≤2，8于2<t≤4，8−2(t−4)于4<t≤7；节点(0,2),(2,8),(4,8),(7,2)连续。V2/4/5=8/8/6，6升在4/3及5分钟；域[0,7]、值域[2,8]，平段为体积不变，非空箱，始终低于10升容量。 |
| #retry-variation | y=32/x²，x4时2；z=5x。平方反比与一次正比不混用。 |

### sequences

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-rules | 4,7,10,13,16；tₙ=3n+1，从第1项开始，不把首项当n0。 |
| #practice-rules | (a)7,4,1,−2,−5，tₙ=10−3n；(b)n²−1给0,3,8,15，第10项99。直接规则用项号，非以前项为输入。 |
| #example-families | 第6个三角数21、平方数36、立方数216；36是第6个平方数。 |
| #practice-families | 各下一项15,25,125；第8项36,64,512；64为第8个平方数和第4个立方数。 |
| #example-linear | tₙ=4n+1；101对应n25，正整数项号所以属于。 |
| #practice-linear | tₙ=3n+5，第50项155；152对应n49，153对应148/3非整数不属；第二列24−4n。 |
| #example-quadratic | 二阶差2，tₙ=n²+2n+1=(n+1)²；减n²剩2n+1。 |
| #practice-quadratic | 二阶差4，tₙ=2n²+n+3；第6项81、第7项108。tₙ₊₁−tₙ=4n+3>0，82夹在相邻项间，故不属。 |
| #practice-choice | 二阶差2，tₙ=n²+n+1；首阶差4,6,8,10不恒定，所以“总加4”从第二步就失败。 |
| #retry-rules | 加倍列2,4,8,16,32；3n−2列1,4,7,10,13，第20项58；乘前项与乘项号含义不同。 |
| #retry-families | 第7三角数28、平方数49、立方数343；125为第5立方数，不是平方数。 |
| #retry-linear | tₙ=19−5n；第8项−21；−36对应n11，属于。 |
| #retry-quadratic | tₙ=2n²−n；等于66的根n6或−11/2，仅6为正整数，所以属于第6项。 |

### differentiation-and-motion

| 任务锚点 | 独立结果与判据 |
| --- | --- |
| #example-motion | 三段速度3,0,4m/s；总距离20m、总时间9s，平均20/9m/s，休息3s仍计总时。 |
| #practice-motion | 三段5,0,2m/s，停2s；总距离21、时间8，平均21/8=2.625m/s；图逐点上升/平/上升。 |
| #example-derivative | 先展开x²+2x+3，导数2x+2，x2处斜率6，非高度11。 |
| #practice-derivative | 先展开2x³−6x+5，导数6x²−6；x−1处高度9、斜率0。 |
| #example-tangent | 点(2,11)、斜率6，切线y=6x−1；切线三角形点(1,5),(3,17)给12/2=6。 |
| #practice-tangent | 曲线x−1处高度2，导数3x²−2给斜率1，切线y=x+3。 |
| #example-stationary | 导数3(x−1)(x+1)，符号+,−,+；极大(−1,2)、极小(1,−2)；根−√3,0,√3。按两转折和三截距画平滑三次。 |
| #practice-stationary | p导数3(x−2)(x+2)，极大(−2,16)、极小(2,−16)，根−√12,0,√12。q导数3x²，两侧正且斜率先减至0后增，驻点拐点(0,4)，x截距−∛4；不能把零导数都判最小值。 |
| #example-estimates | 梯形面积1/2+5/2+13/2=9.5m；只知表点不能断定间隔内弯曲，误差方向须附加全段上弯条件。 |
| #practice-estimates | 半秒表1,1.25,2,3.25,5,7.25,10；t1切线v=2t，约2m/s²；1秒梯形1.5+3.5+7.5=12.5m。二次上弯时弦高于曲线，估计偏大；切线上的t0值不是初始速度。 |
| #practice-area | 三段加速度1.5,0,−3m/s²；面积12+18+6=36m，非负速度保证面积为距离。 |
| #retry-motion | 三段4,0,3m/s，总20m/10s=2m/s，停4s；保留休息时间。 |
| #retry-derivative | (x+1)(x²−x+1)+7=x³+8，导数3x²，x−2处斜率12。 |
| #retry-tangent | 点(1,1)、斜率3，切线y=3x−2。 |
| #retry-stationary | y导数3−3x²，符号−,+,−；极小(−1,−2)、极大(1,2)，根−√3,0,√3。z导数−3x²，两侧负且弯曲改变，(0,0)为下降的驻点拐点，非极值。 |
| #retry-estimates | 半秒表1,1.125,1.5,2.125,3,4.125,5.5,7.125,9；t1切线v=t+0.5，约1m/s²；宽2梯形4+12=16m。仅t0,2,4三点不足判误差方向，完整二次规则才支持上弯/高估。 |


## A1–26 最终独立产出与恢复核验

以下只记任务实际要求；独立题有支架不等于迁移题，公开示范本身不算独立产出。八页均有具体概念回补、同目标新retry，以及 #next-step 的稍后任务和 mixed-review/#algebra-review 链接。链接与模拟解题不能证明学生已保持或迁移。

| 官方目标 | 页及首次独立证据 | 新重试及判定 |
| --- | --- | --- |
| A1 字母表示数与过程 | expressions #practice-language 的固定/按公里收费 | #retry-language 换会员/访问规则，必须分清一次费与重复费 |
| A2 代入及简单/复杂变形、subject两次 | expressions #practice-substitution / #practice-rearrange / #practice-twice | 对应 #retry-substitution / #retry-rearrange / #retry-twice；负数括号、同做运算、分母非零、根分支 |
| A3 式/方程/公式/恒等式/不等式、项/因子 | expressions #practice-language；不等式在 equations #practice-inequality 使用 | #retry-language / #retry-inequality；区分是否对所有允许输入成立，因子不是加法项 |
| A4 同类项、两/三二项式展开 | expressions #practice-expansion / #practice-three | #retry-expansion / #retry-three；逐项相乘、负括号及一般展开，非只换数代入 |
| A5 公因式、二次、非首一与平方差 | expressions #practice-factors | #retry-factors 同含公因式/首一/非首一；乘回检查中间系数和常数 |
| A6 整数及分数指数乘除 | expressions #practice-indices，完整规则连接 Number powers-roots-and-standard-form | #retry-indices；乘除与加减分辨、非零条件；不把本组短连接当作另造完整Number课程 |
| A7 数字/代数分母有理式四则 | fractions #practice-numeric / #practice-fractions | #retry-numeric / #retry-fractions；原式定义及除数非零，消因子不消原限制 |
| A8 等价论证及证明 | fractions #practice-argument / #practice-proof | #retry-argument / #retry-proof；任意整数、奇偶一般式、完整原因，代值不当证明 |
| A9 输入输出、函数定义/域值域/复合/逆 | functions #practice-machine / #practice-domain / #practice-composite / #practice-inverse | 四个同名retry；原输入限制传到复合，逆域值域交换，平方逆由限域选分支 |
| A10 四象限坐标 | coordinates #practice-points | #retry-points；轴点不放象限，同x/同y与方向联系 |
| A11 直线作图/率/截距/平行/过点/垂线 | coordinates #practice-lines / #practice-equation / #practice-perpendicular | #retry-lines / #retry-equation / #retry-directions；单位、点回代、负倒数和水平/竖线例外 |
| A12 一次/二次/三次/倒数/指数/任意度数三角图 | functions #practice-families / #practice-exponential / #practice-trigonometric / #practice-tangent-graph | #retry-families / #retry-exponential / #retry-trigonometric；坐标/渐近线/周期/端点充分可画，三角图包含负角与超过一周 |
| A13 化简后多项式梯度函数 | differentiation #practice-derivative | #retry-derivative；展开后逐项，常数导数零，非负整次范围，无链式/商法则必考扩展 |
| A14 切线方程 | differentiation #practice-tangent | #retry-tangent；原式给点、导数给斜率，代回相切点 |
| A15 极大/极小/驻点拐点及草图 | differentiation #practice-stationary | #retry-stationary；左右符号与弯曲变化，须带截距和驻点坐标；零斜率不自动极值 |
| A16 二次根/截距/顶点/对称、配方识别 | quadratics #practice-graph / #practice-square | #retry-graph / #retry-square；两图表和对称、精确根与顶点各自解释 |
| A17 非标准情境图、运动图、率、曲线梯度/面积 | functions 新 #practice-context；coordinates #practice-lines；differentiation #practice-motion / #practice-estimates / #practice-area | 新 #retry-context；coordinates #retry-lines；differentiation #retry-motion / #retry-estimates。区间/跳跃/累计量、单位、选切线点、面积与斜率区别均实际产出 |
| A18 正反变关系表达求值 | functions #practice-variation | #retry-variation；从已知对求常数，不把趋势猜测当正反比例公式 |
| A19 一次方程代数与图估 | equations #practice-equations / #practice-graph | #retry-equations / #retry-graph；括号和两边未知、全体/无解、图读数近似而非显示多位 |
| A20 二次因式/图/配方/公式 | quadratics #practice-roots / #practice-graph / #practice-square / #practice-formula | #retry-graph / #retry-square；包含非首一、无实根、精确和指定精度，两根不遗漏 |
| A21 两一次及一次二次联立、图法 | quadratics #practice-simultaneous / #practice-line-curve | #retry-simultaneous / #retry-line-curve；同一对解满足两式、配对根及图交点 |
| A22 文字/几何列式求解与解释 | expressions #practice-language；equations #practice-model；quadratics #practice-simultaneous / #practice-model | 对应收费新题、#retry-equations / #retry-model；单位、正长度、被舍根与原情境条件 |
| A23 一次/二维/二次不等式及数轴/区域 | equations #practice-inequality / #practice-region / #practice-quadratic | 三个同名retry；负乘除翻向、空实点、虚实边、根分区，非只报边界 |
| A24 项到项/位置到项 | sequences #practice-rules | #retry-rules 换加倍与直接线性规则；用项号而非把前项误当输入 |
| A25 三角/平方/立方/等差及二次序列 | sequences #practice-families / #practice-linear / #practice-quadratic / #practice-choice | #retry-families / #retry-linear / #retry-quadratic；命名数族、位置、差分和方法选择 |
| A26 线性/二次nth term | sequences #practice-linear / #practice-quadratic / #practice-choice | #retry-linear / #retry-quadratic；推导式、首项检查、成员正整数项号；声明模型类别后才推规律 |

基础阅读与独立性复核：字母先从收费、斜率先从每单位变化、复合先从输出接输入、切线先分清高度与斜率。必要示范直接展开。94个独立/重试框在源中均把提示和完整解答分别关闭；没有同数据答案图或切线参考点置于独立题前。明确要求某种方法的程序练习只算相应熟练证据；数列 #practice-choice、文字建模、新收费/水箱及延后混合路径提供选法/换表征的任务，未把每题都称无支架迁移。中文保留英文题干、数学与条件，概念/反馈不只译术语。

图的反馈并非只报根或斜率：数轴空实点/箭头、区域虚实线及角是否包含、曲线表点/顶点/渐近线/波形、运动图各段和单位均能据此检查纸上图。切线估读题先让学生自己画线选点，参考点留在解答；作者给的范围明确仅作手绘自检，不冒称官方容差。技术折叠行为、实际纸笔作图及学生读图仍不在本次已验证范围。

估计误差另核：对二次v=t²+c，区间[a,b]内弦高减曲线高=(t−a)(b−t)≥0；0.5t²+c时为其一半。因此给完整二次规则的两题确为上估；仅给0/1/2/3表值的示范不能由有限点推出间隔内形状。该论证用于复核，不要求学生使用AS积分，也没有把积分加为9260必考内容。

## 已重审差异与版本继承

| 变更 | 独立重审范围与结果 |
| --- | --- |
| 初读至首轮冻结的补充 | expressions因子识别；coordinates新斜率单位及水平/竖垂线retry；differentiation驻点retry的截距与草图。已按实际题干重解，结果列于完整账本，不因曾经制作中缺文件而报告最终缺课 |
| 首轮后16页统一单一路线 | 重新检查最终16页的学生可见说明、任务及导航；Core/Extension分流零残留。字母、四则、图像、运动、等差等共同基础和原有目标仍在；Question总数142、独立/重试框94，只有两个抽象情境题被新真实情境题替换。题数仅为防漏，目标是否实际产出另见上表 |
| quadratics两语言 #formula | 逐句核负被开方数/负分支；±、判别条件、数值根及反函数分支教学保留，A-R1关闭 |
| functions两语言 #exponential | 逐句核正底数、两种趋零方向及k1例外；原指数表与模型重解，A-R2关闭 |
| functions两语言 #practice-context / #retry-context | 独立从租车文字收费和水箱净流量重建全部分段规则、端点、域值域、图读数/逆问题、单位和限制；不沿用首轮抽象分段题输出作为新题证据。新任务内容和关闭反馈支持目标恢复，A-R3关闭 |
| functions两语言 #retry | 指数初值/乘数精确回补 #exponential→#retry-exponential，变关系仍回 #variation；实际目标及新数据核对，A-R4关闭 |
| 两个Algebra SVG | SHA与首轮完全相同；继承本审查者已做的XML/数学坐标/实际栅格图查看证据。没有仅用文件存在代替实际图核验；不声称网页响应尺寸已独立验收 |

最终源级检查重新从磁盘读取全部18源：与Kuhn作者记录文末“最终SHA256”逐一匹配；16页英文Question、完整TeX序列、锚点同序；frontmatter/translation_of、五公共锚点、当前本地图片/跨页目标与显式锚点、div/details闭合、默认关闭、控制字符检查完成。新收费/水箱另用Fraction核边界与反求时刻，值域用区间单调性/常数及并集完整推出，未用抽样替代全范围证明。

本审查者只更新本报告；未改Algebra或Statistics源，未构建、未运行浏览器、未提交Git。用户另告知主执行者已完成build及17项检查；这是主执行者的技术验收证据，本报告不冒称由本审查者执行，也不用它替代数学/教学独立审查。学生真实作答、恢复成功和延后保持仍未组织，不宣称学习效果通过。

## 最终结论与关闭状态

八主题已完成独立内容复核。A-R1、A-R2、A-R3、A-R4全部关闭，当前审查范围没有待作者修补的未解决发现。源级数学、双语、目标任务、反馈恢复与实际SVG数学核验以以下18源SHA为准；后续若源再修改，应只继承未受影响证据并复核对应段。基础先修、非负整次微分、度制三角和估计边界符合9260 v5.1；没有添加AS积分、链式法则、回归或fx-CG50考场许可要求。

### 最终18源 SHA-256（本次最终复核版本）

| 文件 | 最终 SHA-256 |
| --- | --- |
| igcse/mathematics/expressions-and-formulae.md | f353ae39f68e8f0a0babb7dbe15c4118a63dfd81943cd62b2036c3dc149d668b |
| zh/igcse/mathematics/expressions-and-formulae.md | 73edcf6229ab82ed4eec9c4fbd4656279b392a11553b6cb3a65b9894577e2319 |
| igcse/mathematics/algebraic-fractions-and-proof.md | 852eec95b4d14540446f14f3e22ff2fdcb4a743c02edcd97d13c870e204bcd50 |
| zh/igcse/mathematics/algebraic-fractions-and-proof.md | 757692c1482e947eb44e82d91111bea45c9d681dc6df75b14babfd651a26850a |
| igcse/mathematics/equations-and-inequalities.md | 6eb366bff501571413bea7603701fba6a8bd1e18ac65b4ee811f202e94ffe1f9 |
| zh/igcse/mathematics/equations-and-inequalities.md | 1e875d4edff45aa917c0255c46c9b6684d32b7984fbf2b36a634624c1d44d0cd |
| igcse/mathematics/coordinates-and-lines.md | 84ee2c576c0fc259d8370c199f68249de0629553c6dee8348d105e87f8bcba99 |
| zh/igcse/mathematics/coordinates-and-lines.md | e4b3cc073be719223a894fc71785c59f5cd4ba3077347819126b6d359d7fd2e2 |
| igcse/mathematics/quadratics-and-simultaneous-equations.md | 290d565cca033c355a90b82681b1daa2b206a31729eba5b1bb34e5700a0d4a36 |
| zh/igcse/mathematics/quadratics-and-simultaneous-equations.md | 8ad94cff9c480b8ea39d7181ed1f2ac517c034dc08a23ab22ec0918aaa1544cd |
| igcse/mathematics/functions-and-graphs.md | 5022dc555bd143b0b604c0554a03cc9dcd0c9682e9a90bd1f9be1fe02d29bcc0 |
| zh/igcse/mathematics/functions-and-graphs.md | 75de41b0e2535becda2a5217933072ddfca04501ca3da4475c20d2f5af584826 |
| igcse/mathematics/sequences.md | f8baaee4f01a5b9f238f6e1b01dc8fd4d35b7f0ee0720a09490a968544a4a0d0 |
| zh/igcse/mathematics/sequences.md | 93de84fd52998928f365bd9e72a2007d07e53c73469fa35761d8b051ed4dcf55 |
| igcse/mathematics/differentiation-and-motion.md | d22142b58a421b812cd6dd3eaf3731798b48f052619f61c0953eea1e286f9376 |
| zh/igcse/mathematics/differentiation-and-motion.md | 86b2d0402117ab4c8a1b652a14eeef6abc5487e1b8ef21aff5c1955d49d49fac |
| assets/img/igcse-algebra-line.svg | 2b669fe0087aca28dc6e0253485fbe902bd72f28999dc2a6bdffd5a17f536d63 |
| assets/img/igcse-algebra-tangent.svg | a61eb6e4f76a9be209cb4d27f13b4ff8aaae0268bfa1434bf698133e1a50771b |

以上为实际完整文件字节SHA-256；首轮历史表不再作为当前文件身份。作者实施记录和本审查报告自身不在18源清单内。
