# AS Physics 全课程升级：设计与验收记录

## 制作前设计

目标：OxfordAQA 9630 的 AS 教学内容，PH01 的 3.1–3.3 与 PH02 的 3.4–3.5；Unit 2 数据应用还会调用 Unit 1 原理。范围采用当前资格页链接 Version 4.4 与仍可访问的 Version 5.1 官方 PDF 的逐项核对，不按上传路径推断版本。来源及两版比较单独保存在 research-as-physics-full-scope-2026-10-26.md。原六课继续复核；新增课程不是把入口笔记改名。

中心问题：物体、材料、电路、波与微观过程怎样由可检查的模型解释，怎样用测量区分可信结论和超出证据的判断？按先修依赖组织 19 个学习主题及两个单元综合，而非按每个大纲编号机械分一页。

已有定量建模样章采用 Newton／momentum 的审查经验；新的实验学习类型先制作 emf-and-internal-resistance（RP3），独立审查预测、装置选择、原始数据、图线、不确定度、偏差与改进，再推广到 RP2、RP4、RP5。实验页是准备、决策和数据学习材料；实体操作与学生试用另记。RP1 保留并复核现有 freefall 活动。

每个主题解释必要概念与模型条件，完成连贯示范，安排改变条件／表征／求问方向的英文自拟任务；中文页保留相同题干，解释与反馈用中文。提示与解答分别关闭。重试检验刚修复的困难，后续综合在不标明方法时调用旧知识。图承担受力、装置、图线、波形或能级的具体任务，不追求统一图数；统一复用 reading_layout 和现有学习组件。

## 目标、任务及先修对照（制作前约定）

下表的目标均需由正文和独立任务同时提供证据。新页面目标锚点在制作时落实；最终核对缺失不能以表格存在替代。各页自己的 retry 用于恢复，综合页另作延后提取。

| 条目 | 可观察目标／关键边界 | 学习位置、先修 | 独立证据／恢复 |
| --- | --- | --- | --- |
| 3.1.1 | SI、全套指定前缀、单位与能量转换 | measurements；能量课、光子课补充具体转换 | 单位／数量级任务；unit-1-review、unit-2-review |
| 3.1.2 | 误差类型、合成界限、图线斜率及截距界限 | measurements；代数和图线 | gradient-and-intercept；RP2–5 原始数据任务 |
| 3.1.3 | 有理由的数量级估算 | measurements；比例与几何 | practice-estimate；综合估算 |
| 3.2.1–2 | 分量、合力、力矩、力偶、平衡 | vectors-and-moments；三角比 | 现有图示转换及力矩任务；单元综合 |
| 3.2.3 | 图线与匀加速、RP1 | straight-line-motion；单位／有符号量 | 现有运动和自由落体数据任务 |
| 3.2.4 | 分运动与阻力模型、终端速率 | projectile-motion；直线运动与分量 | 现有目标事件及力模型任务 |
| 3.2.5–6 | 三定律、系统动量及变力冲量 | newtons-laws、momentum-and-impulse | steady-check、connected-check、collision-check、graph-check；对应 retry |
| 3.2.7–8 | 有符号功、变力面积、功率效率和能量收支 | work-energy-power；受力／运动／图像面积 | transfer、power-check、retry；unit-1-review |
| 3.2.9–10 | 密度、弹塑性、应力应变、储能、Young modulus、RP2 | materials-and-young-modulus；能量及测量 | curves、wire-data、retry；单元综合 |
| 3.3.1 | 核散射证据、核素与离子比荷 | atoms-and-particles；电荷与比值在本页建立 | atom-check；retry |
| 3.3.2 | 粒子反粒子、湮灭及成对产生的 MeV 收支 | atoms-and-particles；核素和电荷 | energy-check；retry（不强加 E=mc² 计算或夸克分类） |
| 3.3.3 | 衰变方程含中微子、半衰期图、背景修正、吸收、反平方及用途风险 | radiation-and-safety；粒子、测量 | decay-check、counts-check、choice-check；retry；不使用 A2 指数衰变公式 |
| 3.4.1 | 电流、电势差、电阻的量与测量含义 | charge-current-and-potential；能量 | charge-check、measurement-check；retry |
| 3.4.2 | 导体／灯／二极管 I–V，坐标与电阻解释 | resistance-and-resistivity；电学基础 | characteristic-check；retry |
| 3.4.3 | 几何与电阻率、温度、NTC、超导临界温度及用途 | resistance-and-resistivity；测量与电学基础 | wire-check、temperature-check；retry |
| 3.4.4 | 串并联、节点与回路、功率、串联电池和相同并联电池 | dc-circuits-and-potential-dividers；电学基础 | network-check、cells-check；retry |
| 3.4.5 | 分压、变量电阻／NTC／LDR、负载效应 | dc-circuits-and-potential-dividers；电路 | sensor-check；retry |
| 3.4.6／RP3 | 每库仑能量、内阻、端电压、实验选法、拟合与偏差 | emf-and-internal-resistance；电流电压和测量，回补电路 | circuit-check、data-check、design-check；retry |
| 3.5.1／RP4 | 弹簧和小角摆周期、能量随位移／时间、阻尼、双装置实验 | oscillations-and-resonance；能量、材料、测量 | period-check、practical-check；retry |
| 3.5.2 | 自由／受迫、共振、阻尼与峰宽 | oscillations-and-resonance | resonance-check；retry；不要求 A2 微分方程 |
| 3.5.3–4 | 波速、时空图、相位、横纵波、超声往返、偏振 | progressive-and-stationary-waves；振动 | wave-check、polarisation-check；retry |
| 3.5.5 | 图解叠加、驻波／谐波、弦长张力线密度实验、声与微波 | progressive-and-stationary-waves | string-check、superposition-check；retry |
| 3.5.6／RP5 | 相干／程差、双缝／白光、声与电磁干涉、双装置选法 | interference-and-diffraction；波 | fringe-check、practical-check；retry |
| 3.5.7 | 单缝图样、光栅方程推导与级次上限、用途 | interference-and-diffraction | grating-check；retry |
| 3.5.8 | 折射、全反射、阶跃光纤、包层、两种色散与吸收 | refraction-and-optical-fibres；波／三角比 | ray-check、fibre-check；retry |
| 3.5.9 | 激发／电离、荧光管、能级光谱、X 射线管与医疗 | photons-and-wave-particle-duality；原子／能量 | levels-check、xray-check；retry |
| 3.5.10 | 光子能量、阈频、逸出功、遏止电压及强度比较 | photons-and-wave-particle-duality；电势差与能量 | photoelectric-check；retry |
| 3.5.11 | 电子衍射与德布罗意波长、证据边界 | photons-and-wave-particle-duality；动量 | duality-check；retry |
| 综合与英文输出 | 未标方法的数值、机制、实验评价、后续提取 | unit-1-review、unit-2-review；相应路线 | 混合任务、返回具体修复点；解答中的英文表达示范逐步撤去 |

## 影响范围

仅 AS Physics 双语页、对应图、课程简介、检查脚本与本任务文档。保留旧入口锚点及共享布局，旧参考笔记降为速查资料并链接新课。新增13个主题、2个综合；既有六课按本轮结果修补。未授权发布。内容、技术和学生使用三类证据分别记录，后续补验收结果。

## 本轮实际完成与验收

本地完成 19 个双语学习主题、2 个双语单元综合及两个课程入口；沿测量、力学、材料、原子／辐射、电学、振动／波／光与量子的先修路线前进。旧入口参考笔记与锚点保留，不再把参考列表当学习路线。导航、语言切换、阅读布局和折叠区复用现有组件，未增加依赖或全站样式。课程简介与 CI 的物理检查已同步。

### 逐目标的实际学习证据

下表中的页名是 alevel/as-physics/ 与 zh/alevel/as-physics/ 下的同名文件；任务名可在源码 task 标记处定位。讲解、可独立作答的任务、改变条件的恢复以及后续综合一起构成内容验收依据，页数／构建／题数本身不代表学会。

| 范围 | 实际产出及判定点 |
| --- | --- |
| 3.1.1–3 | measurements 的单位、校准、保守界限、散布示范与 scatter-check：学生自行画棒、检查全部区间，得到斜率 0.900–1.08333 V/N、截距 0.35–0.75 V；retry-graph-and-powers 换图与密度关系。photons 的 units-check 检验 keV/J、kWh/J、面积前缀；unit1-1 由学生选择并论证房间尺度。 |
| 3.2.1–2 | vectors 的分量、节点、支承和力偶；moment-transfer-check 明定力矩参考端，比较同力矩与不同合力；retry-quadrant-contact 改象限、角参照和接触条件。unit1-2 检验新梁与失去接触的极限。 |
| 3.2.3 / RP1 | straight-line 的曲线切线与梯形面积、有限接触反弹图、原始重复计时、双轴误差矩形及自由截距。curved-graph-check 得 3.0 m/s、4.0 m/s、9.5 m；raw-freefall-check 的斜率界限 4.78758–5.01701 m/s² 均穿过三矩形；retry-freefall-bias 区分距离偏移、单点估计与强迫过原点。 |
| 3.2.4 | projectile 连接轨迹、分运动图与目标时间，提供先修二次方程恢复；friction-lift-task 及独立 retry-friction-lift 要求相互作用对象、方向和模型变化。unit1-3 换成不同落地平面并解释升力条件。 |
| 3.2.5–6 | Newton 逐对象受力、内部约束、相互作用伙伴；momentum 选系统、有符号冲量、地板力与重力修正、弹性判别及不确定区间。unit1-4 改为由实测共速反推外冲量：−0.20 N s；新地板接触为 41.5 N，并区分能量损失与动量失配原因。 |
| 3.2.7–8 | work-energy-power 的斜力、变力面积、机械／电能预算、kWh、功率效率。variable-force-retry 包含负力段，功 11 J、末速 3.46 m/s，并比较力—时间轴；power-retry 的 30 W、50%、120 W 与另一声明 75% 检验条件一致性。unit1-motor 延后混合斜功、20 W、50% 和接触检查。 |
| 3.2.9–10 / RP2 | materials 连接密度、应力应变、比例／弹性／断裂、加载卸载和金属丝实验。wire-data 处理原始位置与直径误差；nonlinear-retry 分别得加载 0.040 J、回收 0.024 J；stress-strain-check 直接读初始 E = 2.0×10¹¹ Pa、断裂 300 MPa 并比较脆性。 |
| 3.3.1–2 | atoms 区分散射观察与核模型推断、核素／离子及粒子反粒子。核／离子比荷任务与 specific-particles-check 形成对照，独立 specific-charge-retry 检验正电子及负离子；particle-retry 已给 Z。湮灭与成对产生比较两个静能、动能及反冲，不强加 A2 的质量能计算。 |
| 3.3.3 | radiation 的核变化、随机性、背景、半衰期、反平方与风险用途。graph-half-life-task 要求从图扣背景并读多次减半；beta-retry 包含新 β± 和各自中微子；absorber-data-check 由吸收记录辨认成分且承认灵敏度限制。unit1-7 延后混合核素与计数。 |
| 3.4.1–3 | charge 页区分电荷循环与每库仑能量、错接仪表及有限电压表；resistance 页连接坐标换向、工作点与局部斜率、电阻率几何、接触截距、NTC、自热、超导与应用。改变几何、温度和测量电流的 retry 检验相应误解。 |
| 3.4.4–5 | circuits 页按节点与回路处理串并联、功率、传感分压及负载。电池并联题在作答前明确相同小内阻极限的等分假设，理想电源本身不确定分流。divider retry 用 8 kΩ 负载，得到 3.20 V、1.20 mA、0.800／0.400 mA，能诊断错误等分。unit2-1、2 混合内阻和仪表负载。 |
| 3.4.6 / RP3 | emf 先按每库仑能量建模，再由同时 V、I 记录拟合；学生重建设备、选负载／仪表、估全区间极端线并测试随时间漂移。独立审查先通过此实验样段才扩展同类；retry 的界限只针对早期三点，不把漂移点混入固定参数模型。unit2-3 重新比较时间与电流的混杂。 |
| 3.5.1–2 / RP4 | oscillations 连接周期、平衡位置能量、阻尼与共振。RP4 含弹簧和小角摆，两套原始／处理记录与不同图轴；energy-displacement 另画 U、K 对 x，resonance-retry 换驱动频率并解释稳定输入。图从同一 cos、cos²、sin² 模型生成，逐点检验 U∝x² 与总能量。 |
| 3.5.3–5 | progressive 页区分时空图、横纵波、超声往返、电磁场振动及真空同速。stationary-formation-task 用三时刻反向分波重建驻波、区分暂时零与持续节点；phase-sound-check 检验相位和相邻压强振幅极小，区分位移波腹。弦实验固定 n，或改画 f/n；另解释声／微波和偏振。 |
| 3.5.6–7 / RP5 | interference 页含相干条件、声程差、白光和单缝预测；derive-grating 要关闭公式重建垂线并推导 d sinθ=nλ。RP5 含双缝与光栅的独立装置、测量、作图、误差与激光控制；区分数学掠射极限与有限角可见级次。 |
| 3.5.8 | refraction 页用法线角、频率保持、临界角和折射率次序逐条件判断；step-index 纤芯／包层模型及 material/modal dispersion、吸收分别解释并由 fibre-check/retry 检验，不把变暗和脉冲展宽混为一谈。 |
| 3.5.9–11 | photons 页连接 eV、激发／电离、离散光谱、荧光管、X 射线连续与特征谱、光电阈值／强度／遏止电压、电子衍射。tube-and-transition-check 要英文机制链与新跃迁 414 nm；duality-check 从动量连到衍射角。quantum-retry 使用额外选择性吸收证据，不把一次指定跃迁冒称禁止中间能量的证据。xray-duality-retry 分别恢复管电压与电子波长的推断。 |
| 综合及英文表达 | unit-1-review 与 unit-2-review 共 17 个混合任务，提示各给第一步而非统一套话。要求在下一次学习关闭正文再选模型；多部分题有对应恢复链接，RP3/4/5 按学生所选方法返回。英文题干与要求在中文页完整保留；机制、限制与判断有英文输出机会。 |

### 独立内容审查及回修

三位独立代理实际求解／重建解释；没有把机械脚本当内容审查。

- 原六课审查保存在 review-as-physics-existing-2026-10-26.md。R1–R6 的散布、曲线、原始 RP1、力矩参照、摩擦／升力、先修与恢复均修复；针对性复查确认数值和双语一致。
- 能量、材料、原子、辐射及电学基础：补变力与非线性面积恢复、Z 资料、β± 新题与半衰期图后通过；新增比荷、应力应变、吸收和延后功率任务由课程覆盖审查再次核算。
- RP3 先经历两次修订后通过；后续电学三页修复并联电池假设及非等支路 retry 后通过。
- 振动／波／光：修正共同振动模型图、独立位移能量图、反向分波、固定谐波级次、电磁真空速率、光栅推导及声／单缝任务后通过。SVG 几何亦重建核验。
- 量子：补固定晶体的衍射变化、把选择性光谱证据与指定跃迁的算术分开后通过。
- 两次综合与全课程目标复查：修复新数据反推、具体提示、分题恢复和新类型输出。最后的相邻压强振幅极小、相位模 360°、独立比荷／功率恢复及 22 个链接，针对性复查无剩余内容阻塞。

这些是当前材料的学科与设计审查；不能据此宣称学生已经形成理解或能完成真实实验。

### 技术与实际阅读验收

- Jekyll 构建成功；Pagefind 生成双语索引，当前索引 331 页。课程数与索引页数只用作产物核对。
- 14 项适用回归通过：physics-learning-pilots、physics-as-dynamics（现覆盖全部 21 个学习／综合页）、physics-bilingual、reading-layout、site-language、subject-index-translations、reading-progress、accessibility、search-language、search-excerpts、search-interaction、frontend-loading、frontend-ux、image-modal。旧检查不再固定题／图总数，仍要求保留原任务、全部帮助渲染、描述与稳定图尺寸；新增内容由全课程检查覆盖。
- 全课程检查逐页核对英文任务条件、双语稳定 ID、初始关闭的提示／答案、生成 HTML、实际链接／锚点及入口可发现性；独立算式检验能量、带负段面积、内阻全区间线、波长与小量单位等。振动 SVG 逐点核对位移、势能与动能关系。
- 浏览器检查完成 21 页 × 2 语言 × 2 尺寸 = 84 条阅读路线：1440×1000 桌面与 390×844 手机视口。每页检查 MathJax、全部展开后的整页横向尺寸、图像完成加载／解码／淡入、键盘开关帮助、深浅主题、语言切换保留锚点及搜索发现。原 Newton／momentum 样章另保留图像缩放与 Esc 关闭的键盘验收。
- 实际查看了振动图与示范、驻波三快照、手机内阻深色展开、手机光电公式等截图。发现裸下标 E_max／V_s 后改为数学排版，并在最终版本针对两课双语／两尺寸复查。长表可局部滚动，未见整页横向溢出；没有删替代文字来隐藏答案。
- 搜索的检查记录实际成功查询。部分中文完整标题（例如“抛体运动”）不稳定命中，分词关键词（如“运动”）可找到目标课；这是现有 Pagefind 分词／检索边界，未把完整标题查询宣称为全部通过。课程入口和稳定链接可直接访问所有主题。
- 全部 AS Markdown 与相关文档的现有 lint、Git diff 空白检查通过。仅有本机 LF/CRLF 提示，不代表页面错误。

自动化结果与代表截图在本任务可视化目录：as-physics-regression-results.json、as-physics-course-reading-results.json、course-*-light.png／dark.png；它们不打包为站点课程内容。构建产物、临时检查工具和依赖未加入课程源文件。

### 状态与边界

课程内容、双语路线和本地技术／阅读验收完成。未推送、创建发布、合并或部署；当前工作保留在独立工作区，未修改并行的数学任务分支。

尚无学生试用／保持测验、教师实体课堂验收、真实仪器实验、真实手机与完整 WCAG 人工审计。网站提供准备、选法、数据分析与修复活动；不能替代真实实验能力证据，也不能宣称学习效果已验证。后续用具体学生错答与器材观察继续修订。
