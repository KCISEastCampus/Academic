# MA05 全课程扩充：独立 Spec／数学正确性复核

日期：2026-10-25。审查者：独立 Codex 审查线程。结论：**本轮已检查的范围内，未发现需要修复的实质性 Spec／数学正确性问题。** 本结论限于下列版本、独立重建与复算范围；不是历史全部题源重新认证，也不是学生学习效果结论。

## 1. 固定版本、追加范围与审查依据

- 用户批准样章基线：`d1e93ecac2b0ea1cb8b295b4f289a208fd250db8`。
- 数学内容审查提交：`3066e46e58050dd7f0e2eab4846657d1aa596701`，提交说明为 Upgrade all MA05 lessons with accessible bilingual learning routes。
- 实际检查的主差异：`git diff d1e93ec...3066e46 -- alevel/a2-mathematics/mechanics.md alevel/a2-mathematics/mechanics zh/alevel/a2-mathematics/mechanics.md zh/alevel/a2-mathematics/mechanics 'scripts/test-mechanics*.js'`。读取改后正文，并回查被删除／替换的旧叙述和题目条件；不是只看统计或作者记录。
- 在本轮扩充范围内，另读 `3066e46..e0d02f3442f666947fac84b9731d2e04a81a13d9` 的两个测试文件修正；再读两个入口的最新反馈 URL 修正。入口数学内容继续以 3066e46 为准，最终工作区入口字节散列另列。
- 依据为 `D:/GitHub/Academic/AGENTS.md`、`docs/agents/course-content-standard.md` v1.1，以及 `docs/agents/implementation-ma05-full-upgrade-2026-10-25.md`。五份 foundations／statics／dynamics／energy-circular／reference 作者记录只帮助定位目标与资料，未将其中“已核验”或答案视为独立证明。

数学正文共 24 个语言页：本轮实读并重建受改动的 22 页英文／中文解释、题目和反馈。受保护 forces 双语页只核对继承身份及散列，未重新认证其全部教学与旧题。对其余页，独立求解所有新增／修订的数学求问，包含六道入口任务、四道保留参考题；对旧题中新解释影响受力、条件或方法的部分另做复算。下文给出可定位证据。

## 2. 按 Spec 的三类结论

| 类别 | 实际适用规则 | 复核结果 |
| --- | --- | --- |
| (a) 缺失／部分实现 | 实施设计：“明确研究对象、方向、理想化和适用区间”；“学生输出：分别完成模型解释、定量求解和条件检验”；长期标准 §1：“每项目标都有可定位的讲解与独立任务”。 | 本轴未发现新增的核心范围遗漏，或只有栏目而无可完成任务的目标。模型、符号、约束和关键新步骤可用声明的 AS／MA03 先修重建。新任务、同目标重试与入口综合实际存在，题目支持所宣称的判断。forces 部分沿用批准基线；真实页面阅读与学生试用不由本记录补证。 |
| (b) 范围扩张 | 实施设计：“范围：OxfordAQA 9660、MA05／M2”；“速查保留参考职责”；AGENTS：“同名物理主题的模型与深度不自动适用于目标数学单元”。 | 未发现把其他资格要求冒充 MA05 必学内容。动量页明确为 AS 回补；倾斜路面倾倒明确为补充；穿珠固定圆导线仅用能量与持续约束，不加入非匀速竖直圆周受力要求。抛体题没有扩入斜面落点或阻力轨迹求解。 |
| (c) 看似实现但实际错误 | AGENTS：“独立推导或核算答案，检查定义域、假设、单位、符号、精度、图像和模型是否共同成立”；“数学力学先说明研究对象、理想化假设、受力与约束，再列方程并解释结果”。 | 未确认实质错误。下列复算特别检查了只能推／只能拉、实际摩擦与上限、积分常量、同一时间、碰撞方向分支、最高点与首次碰撞，以及径向合力。没有仅因算术吻合便接受不可能模型。 |

没有待提交的实质性发现，因而没有需要主线程执行的最小修复项。该结论不将主线程的构建、15 项检查或 96 views 当作独立内容证据。

## 3. 官方范围与本地 QP／MS 实读

在线核对 [OxfordAQA 9660 specification v5.2 正文](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)：36 页，M2.1–7 为 printed 27–30／PDF 26–29（1-based）。没有用本地旧版 specification 的身份代替 v5.2。在线文件本轮未保存字节副本；下方散列清单给实际读取的本地来源。

逐项对应：M2.1→modelling；M2.2→vectors；M2.3→继承 forces、moments、centres；M2.4→Newton；M2.5→projectiles；M2.6→energy；M2.7→circular。核对了三维变加速度、刚体平衡／组合质心／悬挂、抛体分量推导、功率与能量、水平圆／中心引力圆轨道及圆锥摆。保留从分量方程求抛体量的作答要求，没有将成品射程公式当考试替代步骤。

独立打开本地 January 2025 原 QP 和配套 MS；身份为 9660/MA05 Unit M2，21 January 2025，90 分钟，80 分，MS Version 1.0 Final。核对封面与以下配对页，不声称历史题源全量重审：

| 原题与配对页面（均 1-based PDF） | 独立核对的核心方法／结果 |
| --- | --- |
| Q1：QP2–3，MS4–5 | 从驱动力功率而非合力功率出发。由稳速条件得阻力常量 \(k=1750/12^{9/4}\approx6.5295\)，恒速段阻力功约 \(2.35308\times10^6\) J，功率界限速率约 28.393 m/s。 |
| Q3：QP6–7，MS7–8 | 静摩擦不等式给 \(\omega_{\max}=\sqrt{14.7}\approx3.834\)。位置微分得 \(v=(-0.9\sin3t,0.9\cos3t)\)、\(a=(-2.7\cos3t,-2.7\sin3t)\)，实际摩擦向量为质量乘加速度。 |
| Q4：QP8–9，MS9–10 | 两个分量使用同一 \(t\) 消元。按原发射数据解出过 7 m 高度的两个位置约 5.64、14.2 m；两时刻之差约 1.1463 s，遵守原卷精度。 |
| Q5：QP10–11，MS11 | 非均匀杆不能预置中点。墙法向 40 N、向上墙摩擦 16 N、地面反力 229 N；保留水平绳力的 3 m 垂直力臂，得重力位置约 3.41077 m。 |
| Q6：QP12–13，MS12 | 用实际质量矩计入薄板及质点，\(G=(10/19,9d/19)\)；悬挂条件给 \(d=10/(9\tan5^\circ)\approx12.7001\)。区分精确坐标与后续近似。 |
| Q7：QP14–15，MS13–14 | (a) 遵守指定能量法：离边速率约 5.61218；离边速度沿屋面，空中才只受重力。飞行时间约 0.798081 s、水平距离约 3.43109 m；碰地速率约 12.2105 m/s，角度约 20.6151°，参考为向下竖直。 |
| Q8：QP16–17，MS15–16 | 动量大小产生两个带符号分支，不按负号直接拒绝。原题 \(p_Y\) 两个结果为 24.3／29.1；初动能 97.785 J，两分支动能损失 37.296／11.664 J，逐个物体求平方后相加。 |
| Q9：QP18–19，MS17 | 三维合力除以 3，再分别带静止／原点条件积分。得 \(v=(4t^3-3t^2,\,2\sin t+4\cos2t-4,\,3-3e^{-t/3})\)，\(r=(t^4-t^3,\,2-2\cos t+2\sin2t-4t,\,3t+9e^{-t/3}-9)\)；所求位置模约 10.5483 m，3 s.f. 为 10.5 m，不是路程积分。 |

以上用于核对教学方法与条件，未将自拟题赋予官方分值。Q2 与保护 forces 的全量复核不在本轮范围。四道旧参考题的原始出处仍未核定，正文如实标为未核定，没有冒认成这组 January 2025 试题。

## 4. 六道入口任务全部独立复算

路径为 `D:/GitHub/Academic/alevel/a2-mathematics/mechanics.md`，中文对应 `D:/GitHub/Academic/zh/alevel/a2-mathematics/mechanics.md`。英文题干、数据及显示公式逐一比对；两语言求问与条件相同。

| 锚点／英文题目起行 | 独立推理与条件检查 |
| --- | --- |
| `#mixed-a`，57 | 质量矩 \((8\cdot2+4\cdot4)/12=8/3\) m。对 A 取矩：\(3R=8g\cdot2+4g\cdot4\)，故右反力 \(32g/3\)、A 反力 \(4g/3\) N。改用包裹质量 \(m\) 后，\(R_A=g(8-m)/3\)，两普通支承非负要求 \(0\le m\le8\) kg；上界时 A 失去反力。 |
| `#mixed-b`，101 | 平台合功 \((10-2)4=32\) J，\(u^2=32\)。离边后 \(-4.9=-4.9t^2\)，未来落地根为 1 s；距离 \(4\sqrt2\) m，碰地 \(v=(4\sqrt2,-9.8)\) m/s，速率约 11.3。平台加速度 \((4,0)\)，飞行 \((0,-g)\)，不能用一个向量贯穿。 |
| `#mixed-c`，143 | \(r^2=0.64\)，微分得速率 1.6、\(a=-4r\)。所需静摩擦 1.6 N，小于 \(\mu mg=1.96\) N。改到 \(\omega=3\) 所需 3.6 N，不能静止于盘；边界 \(\omega=\sqrt{4.9}\)。3.6 N 是需求量，不能冒充实际可提供的摩擦。 |
| `#later-a`，193 | 分体 \(T=2a\)、\(g-T=a\)，故 \(a=g/3,T=2g/3\)。从静止下降 2 m，\(t=\sqrt{12/g}\approx1.11\) s；张力正。触地出现新接触，不能无碰撞条件地延续旧绳约束。 |
| `#later-b`，229 | 水平外冲量可忽略，\(6=3v\)，碰后 2 m/s。碰撞前后动能 18、6 J，损失 12 J。之后光滑坡上 \(6=3gh\)，\(h=2/g\)；不能把碰撞已转移的 12 J 再用于上坡。 |
| `#later-c`，265 | \(T\cos\theta=mg,T\sin\theta=ml\sin\theta\,\omega^2\)。非零圆才可约去正弦，得 \(\cos\theta=g/(l\omega^2)=0.8\)，\(r=0.75\) m、\(T=4.9\) N、\(\tau=2\pi/\sqrt{9.8}\)。只有竖直分量平衡，水平方向仍有径向合力。 |

## 5. 各课新任务与受改动条件的复算证据

下列各文件均位于 `D:/GitHub/Academic/alevel/a2-mathematics/mechanics/`，中文在 `D:/GitHub/Academic/zh/alevel/a2-mathematics/mechanics/`。同名锚点对照两语言。单位按题干 SI；数值同时检查方向、区间与模型可实现性。表中结果来自本轮重建，不引用作者“已通过”的断言作证明。

### Mathematical modelling、vectors、momentum

| 文件／锚点 | 复算／解释结果 |
| --- | --- |
| mathematical-modelling.md `#model-retry` | 恒定速度给 \(a=0\)，下正时 \(mg-D=0\)。可保留质点的平移模型，须修订忽略阻力的假设；观察不能给出一般阻力定律。 |
| 同页 `#system-retry` | 整体 \(-B-100-50=1000(-1)\)，\(B=850\) N。单独拖车 \(f-50=-200\)，杆向左推 150 N；前方柔绳只能向右拉，不能替代压杆。回代牵引车 \(150-100-850=-800\)。 |
| 同页 `#lift-retry` | 乘客上正：\(540-50g=50a\)，加速度向上 1 m/s²；已知向下速度，所以减速。秤读数是乘客支持力，不是作用于升降机的缆绳张力。 |
| 同页 `#later-model-task` | 平动可由质量和合外力预测；倾倒还要宽度、质心和接触位置。质点化遗漏这些转动几何，不能直接用来预测倾倒。 |
| 同页 `#rope-check`／`#constraint-retry` | 将共同加速度限于绳仍绷紧的固定连接阶段；制动若要求压缩作用，绳模型失效，刚性杆可以传递该力。两物体分图上的连接力不能重复加入整体方程。 |
| vectors-and-kinematics.md `#distance-example` | \(x=(t-1)^2\)，端点同为 1，位移 0；在 \(t=1\) 折返，路程 \(1+1=2\) m。分别积分两段速率也得 2。 |
| 同页 `#meeting-retry` | 积分得到 \(r_A=(t,t^2),r_B=(2-t,1)\)。共同时间为 1 s，位置 (1,1)；该时 \(v_A=(1,2),a_A=(0,2)\)，内积 4，非垂直。与旧题“路径相交但时刻不同”严格区分。 |
| 同页 `#direction-check`／`#direction-retry` | 第一题 \(v(1)=(-1,4)\)、速率 \(\sqrt{17}\)，方向 104.0°；位置为 (0,5)，不能替代速度方向。第二题 \(v=(-3,-4)\)、速率 5，第三象限角 233.1°。 |
| 同页 `#rest-retry` | 两分量 \(t-1,t^2-1\) 在 \(t=1\) 同时为零；速率非负且取得 0，故为全域最小。零速度无方向。 |
| 同页 `#calculus-retry` | 先除质量得 \(a=(2t,2\cos2t,e^{-t})\)。两次积分和两个零条件给 \(v=(t^2,\sin2t,1-e^{-t})\)、\(r=(t^3/3,(1-\cos2t)/2,t+e^{-t}-1)\)。\(r(1)=(1/3,(1-\cos2)/2,e^{-1})\)，模约 0.865 m；不等同曲线路程。 |
| 同页 `#distance-retry`／`#radial-retry` | 前者最终坐标 6、位移 3、路程 5 m，须在 \(t=1\) 分段。后者 \(v=(1,0)\)，速率 1，而 \(t=0\) 时离原点距离变化率为 \(3/5\)；两秒路程 2 m。 |
| momentum-bridge.md `#system-check` | 对 A，B 的冲量和电动机冲量均外在；对 A+B，碰撞冲量内部抵消，电动机冲量仍外在且非零。光滑不足以保证这对小车的总动量守恒。 |
| 同页 `#system-retry` | \(2(-3)+3v_B=0\)，\(v_B=2\)。总动能由 0 增为 15 J，来自弹簧储能；A 单独的动量改变。没有误用被动碰撞的“动能不能增加”限制。 |
| 同页 `#impulse-retry` | 力时面积 \(-2(1)+\tfrac12(2)(3)=1\) Ns。\(1=2(v+1)\)，\(v=-0.5\)；\(\Delta KE=-0.75\) J。正冲量并不保证速率或动能增加。 |
| 同页 `#collision-retry` | 初动量 6、动能 9。\(v_B=\pm2\) 给 \((v_A,v_B)=(2,2)\) 或 \((10,-2)\)，末动能 6 或 54 J。只第一分支符合无储能释放，损失 3 J；共同速度容许接触运动，不要求碰后必定分离。 |

### Moments、centres、Newton

| 文件／锚点 | 复算／条件结果 |
| --- | --- |
| moments-and-rigid-objects.md `#q9-wall-and-string` | 光滑地面无水平力，墙法向 \(S=20\)、墙摩擦 \(H=10\)、地反力 \(R=90\) N。对 A：\(100d(3/5)+20(2)-20(4)-10(3)=0\)，\(d=7/6\) m。水平绳力臂是竖直 2 m；非均匀杆不能放中点。 |
| 同页 `#moment-retry` | 向上 10 N 沿同一作用线 \(x=2\) 移动，力矩仍为逆时针 20 Nm；原点处向下 10 N 消去合力而不消去力矩，不能平衡。 |
| 同页 `#support-retry` | \(W+20=70+50\)，梁自身 \(W=100\) N；\(4(50)=100x+4(20)\)，\(x=1.2\) m。另一个矩心回代成立，没有把附加载荷并入梁本身质量。 |
| 同页 `#contact-retry` | 对铰链取矩给绳张力 200 N；铰链分量为向右 \(100\sqrt3\)、向下 20 N。铰链可提供，下面的搁板＋左侧光滑挡块组合不能提供向下分量。 |
| 同页 `#later-beam-check` | 对 \(x=1\) 的支点：\(4R_5=80+5P\)，\(R_1=(240-P)/4\)。允许 \(0\le P\le240\) N；上界 \(R_1=0,R_5=320\) N。分布重量与质心总重力二选一，不能重复。 |
| 同页 `#box-check`／`#retry-change-the-pull-and-the-contact` | 旧独立题滑动界限 60 N，早于假定倾倒 80 N；70 N 时虽合力位置仍在底内，摩擦已不够。改变拉绳后，\(N=200-T/2\)，倾倒 \(T=120/(\sqrt3+0.6)\approx51.5\)，滑动候选 \(120/(\sqrt3/2+0.3)\approx103\) N；先倾倒时反力正、摩擦未极限。 |
| centres-of-mass.md `#particles-retry` | 带符号质量矩给 \(G=(-1/5,-4/5,1)\)；平面距离另取相应坐标绝对值。不先把负坐标取正。 |
| 同页 `#triangle-retry` | 三角薄板顶点反求 \(C=(-3,6)\)。这是均匀面积分布的重心结论；顶点质量 1、1、2 的反例给 (0,3)，不等于 (1,2)。 |
| 同页 `#cutout-retry` | \(32(4)-4a=28(3.8)\)，孔中心 \(a=5.4\) cm。孔边界 x=4.4–6.4、y=1–3，在原矩形内；悬挂从 P 量差得 \(\tan\theta=3.8/(4-2)=1.9\)，约 62.2°，选择 G 在 P 下方。 |
| 同页 `#later-body-check` | 实际质量矩得 \(G=(2/3,2/3)\)。单点悬挂 \(\tan\theta=(8/3)/(4/3)=2\)；改两绳时用竖直力与矩平衡，张力 19.6、39.2 N，不能继续套单点共线条件。 |
| 同页 `#joined-body-check`／`#retry-replace-suspension-by-two-supports` | 原诊断得 \(\rho=5\)、\(G=(12/7,8/7)\)。移去质点改两支承后，张力比给 \(\bar x=4/3\)，实际质量矩仍给 \(\rho=5\)，但 \(G=(4/3,1)\)、总质量 24；张力 156.8、78.4 N，不能沿用 28 kg。 |
| newtons-laws-of-motion.md `#body-check` | 小车水平合力向右 8 N，\(a=4\) 向右；向左运动时初始减速。手受到的小车反作用力属于另一物体，不加入小车图抵消。竖直两力均 19.6 N。 |
| 同页 `#example-9-a-mixed-force-record` | 质量 3，合力除质量后与上面的 calculus-retry 相同。独立积分得 \(r=(t^3/3,(1-\cos2t)/2,t+e^{-t}-1)\)。静止不表示所有积分常量为零，第二次用另一组常量；回代 \(r(0)=v(0)=0,3r''=F\)。 |
| 同页 `#stages-retry` | 上坡为正，下滑初速 -2；法向 \(R=9.8\sqrt3\)、滑动摩擦向上 4.9 N，\(a=(12+4.9-9.8)/2=3.55\)。停时 \(40/71\) s，位移 \(-40/71\) m；停后摩擦向下 2.2 N，低于上限，可静止。 |
| 同页 `#connection-retry` | 触地前 \(a=3.92,T=11.76\)，下降 0.5 m 后 \(v^2=3.92\)。题目明确 B 留在地面，A 继续朝滑轮运动使绳松，水平合力为零，之后速率约 1.98 不变，直到下一个事件。 |
| 同页 `#vector-retry` | 常合力除质量，逐分量得 \(r(1)=(3,3,-1/2)\)、\(v(1)=(2,2,0)\)，位移 (2,1,1/2)。k 速度为零并不要求 k 加速度为零。 |
| 同页 `#record-retry` | 给的是速度，只求导一次；在 0 时合力 (0,-2,4) N，大小 \(\sqrt{20}\)。位置记录才需两次导数。 |
| 同页 `#later-dynamics-check` | 上正，\(a=-2\)、\(T-49=-10\)，\(T=39\) N；1 s 时仍上行 1 m/s，并非平衡。记录只在题定区间有效，不自行延长到停后。 |
| 同页原停止诊断及 `#retry-use-a-force-record-in-space` | 上滑题 \(a=-4.35,t=20/29,s=30/29\)，停后所需向上静摩擦 3.8<4.9 N。空间题用 t=1 的两组条件：\(r(2)=(10/3,3,7),v(2)=(3,-1,11)\)，相对 1 s 位置的位移模 \(2\sqrt{85}/3\)，不冒称曲线路程。 |

### Projectiles、energy、circular

| 文件／锚点 | 复算／条件结果 |
| --- | --- |
| projectiles.md `#release-check` | 两粒子加速度 (0,-g)，竖直数据相同；\(19.6=4.9t^2\) 给共同 2 s，水平距离 18、36 m。质量约去不等于真实物体必无空气阻力。 |
| 同页 `#flight-retry` | \(y(4)=0\) 给 \(u_y=19.6\)，\(x(4)=32\) 给 \(u_x=8\)。最高点 t=2、高 19.6；\(y=4.9t(4-t)>0\) 在飞行内部成立。 |
| 同页 `#target-retry` | 消同一 t，再设 \(q=\tan\theta\)：\(10=10q-2.5(1+q^2)\)，判别式 -4，无实角。完成平方得该 x 处 \(y\le7.5<10\)，独立验证不可达。 |
| 同页 `#obstacle-retry` | 原自由轨迹最高 4.9<天花板 5 m；墙处 t=1.5、高 3.675<4 m，先撞墙，不能继续算到无障碍的 2 s 落地。 |
| 同页 `#later-projectile-check` | g=10，屋顶下降 5 m，离边速率 10，沿切线 \(u=(5\sqrt3,-5)\)。空中 \(-10=-5t-5t^2\)，只取未来根 1 s；水平 \(5\sqrt3\)，碰地 \((5\sqrt3,-15)\)、速率 \(10\sqrt3\)，与向下竖直 30°。总落差 15 m 的能量检查给同一 \(v^2=300\)。 |
| 同页原 `#independent-method-choice`／`#retry-change-the-structure` | 高度诊断须用相对发射点 9.8 m，两根 1、2 s 都早于 \((3+\sqrt{13})/2\) 的首次触地；速度 (8,±4.9)，最高点速率仍为 8。水平反求题 t=2、\(u_x=9\)、碰地 (9,-19.6)，没有将水平速度当加速度。 |
| work-and-energy.md `#energy-level-check` | 两速率均 5、动能各 25 J。升高 2 m，机械能增加 39.2 J；改固定零点同时移两能量，不改差值。需要非重力能量输入，不可宣称守恒。 |
| 同页 `#work-retry` | 返回向左，力与位移夹角 150°；拉力功 \(-15\sqrt3\)、摩擦功 -8 J，总功负。法向 \(2g-15\sin30^\circ=12.1>0\)，接触可保持。 |
| 同页 `#energy-level-retry` | 两处动能均 50 J，高度下降 2 m，使 \(\Delta ME=-19.6\) J。更换零点不修复能量差，所报记录不符固定光滑轨道且仅重力做功的模型。 |
| 同页 `#power-retry` | 给定瞬间 \(D=1600\)，\(D-k10^2=1000(0.4)\)，\(k=12\)。满功率稳速 \(v^3=4000/3\)；8 m/s 匀速 20 s 时阻力 768 N、路程 160 m、克服阻力功 122880 J，所需 6144 W<16 kW，降低功率后的匀速段成立。 |
| 同页 `#conservation-retry` | 初速度 (5,12)，最高点保留水平速率 5，\(H=12^2/(2g)=360/49\)。返回同高速率 13；能量不能单独决定方向或时间。 |
| 同页原独立题、分段重试与 Q8 | 上滑 \(v^2=36-5.9s\)，首次停于 \(360/59\) m，8 m 标记在该阶段不可达；不能对负 \(v^2\) 取绝对值。下滑后光滑连接题离坡 \(v^2=15.6\)，只在题设无损连接下保留速率。穿珠圆导线能量临界初速 5.6 m/s；等号仅渐近顶部，要越顶须严格更大，不冒称开放轨道持续接触。 |
| uniform-circular-motion.md `#turning-check` | 张力为唯一水平真实力，所需 1.6 N；各时张力垂直速度，一周功为 0。动能不变不意味着合力零，不额外添加“向心力”。 |
| 同页 `#rotation-retry` | \(\omega=2\pi/0.8=2.5\pi\)，75 rpm；两线速率 \(0.75\pi,1.5\pi\)，外点加速度两倍；逆时针最左点速度向下、加速度向右。 |
| 同页 `#vector-retry` | 轨迹中心 (2,-1)、半径 0.5；\(v=(-2\sin4t,2\cos4t)\)、\(a=(-8\cos4t,-8\sin4t)\)，\(F=(-3.2\cos4t,-3.2\sin4t)\)。\(a=-16(r-c)\)，模 8 但向量不恒定，\(a\cdot v=0\)。 |
| 同页 `#radial-retry` | 拟议张力 \(0.3(3.2)^2/0.6=5.12>4.5\) N；允许速率边界 3 m/s，反力 2.94 N。水平张力不承担重力；断绳最初沿切线。 |
| 同页 `#friction-retry` | \(R=1.96\)、极限摩擦 0.49，\(r_{\max}=0.153125\) m。0.12 m 处实际摩擦 0.384、0.20 m 处需要 0.64 N；提高系数改变上限，不自动增大同一运动的实际摩擦。 |
| 同页 `#pendulum-retry` | \(h=g/\omega^2=0.6\) m；0.8 m 绳可行，\(r=\sqrt{0.28},T=0.2(0.8)(49/3)=2.613\ldots\) N；0.5 m 绳需余弦 1.2，改变质量不能补救几何矛盾。 |
| 同页 `#cone-check` | 母线与竖直 60°，法向与竖直 30°；\(R\sin60^\circ=0.2g\)，\(R=3.92/\sqrt3\)，\(\omega^2=24.5/\sqrt3\)，\(z=0.4/\sqrt3\)。学生错用反力角的余弦。 |
| 同页 `#surface-retry` | 碗内 R=2mg、深 0.3／球半径 0.6，竖直分量等于 mg，\(r=\sqrt{0.27},\omega^2=g/0.3\)，可行。45°圆锥内同一 R 的竖直分量为 \(\sqrt2mg\)，任何角速率都不能修复此水平圆模型。 |
| 同页 `#orbit-retry` | 中心向加速度 4、速率 6000，轨道半径 \(v^2/4=9\times10^6\) m，减星体半径后高度 \(3\times10^6\)；\(\omega=1/1500,\tau=3000\pi\)。不用地表 g，也不加支持力。 |
| 同页保留 Q8／Q9／Q11 | 接触式 \(R=m(g-h\omega^2)\)：Q8 在 \(\omega=4\) 给 R=-0.88 N，明确模型失效；Q9 两半径分别列式，内段 5.6 N、外段 3.2 N，外段对内粒子作用向外须减；Q11 使用给定轨道 g=9，轨道半径 \(6.6\times10^6\) m。 |

另核对圆锥摆约去 \(\sin\theta\) 的非零半径条件、球碗 \(0<d<a\)、高处固定端接触的 \(R\ge0\)、绳张力非负及断裂上限。抛体保留严格天花板条件的开区间：30°是触碰边界，允许轨迹没有取得该最大角／射程；不是把极限值冒充无碰撞最大值。

## 6. 四道保留参考题全部独立求解

文件 `D:/GitHub/Academic/alevel/a2-mathematics/mechanics/quick-reference.md`，中文对应同名页。实际查看三张原图：MA05_example_q1.png、MA05-circular-motion.png、MA05-centre-of-mass.png，核对图示点位与文字。

1. **`#equilibrium`，L326**：由切线几何 \(AT=a\cot\theta=4a/3\)。倾角减小时杆脚向左、接触处杆沿自身向下，所以地摩擦向右、圆柱处沿杆向上。对 A 取矩，切点摩擦无矩，得 \(R_T=3W/5\)。竖直得 \(R_A=(13-9\mu)W/25\)，水平为 \(\mu R_A+\mu R_T(4/5)=R_T(3/5)\)。因此 \(9\mu^2-25\mu+9=0\)，只 \((25-\sqrt{301})/18\approx0.425\) 满足题给 \(0<\mu<1\)。两法向正，回代两方向合力及力矩为零。
2. **`#circular-motion`，L389**：外接触点相对 G 为 \((d\cos\theta+h\sin\theta,\ d\sin\theta-h\cos\theta)\)。合接触力水平向内 \(mv^2/r\)、竖直向上 mg；对 G 的截面力矩为零，得 \(mg(d\cos\theta+h\sin\theta)=(mv^2/r)(h\cos\theta-d\sin\theta)\)。因此题给表达式成立，须正分母且摩擦足够。检查 \(\theta=0\) 得 \(v^2=rgd/h\)。没有把接触力误画成纯法向，也没有把运动中的接触点当静止矩心遗漏惯性效果。
3. **`#projectile-motion`，L437**：取发射点为原点，\(t=D/(u\cos\alpha)\) 代入 \(-H=u\sin\alpha\,t-gt^2/2\)，得 \(u^2=gD^2/[2(H+D\tan\alpha)\cos^2\alpha]\)。向上发射 \(0<\alpha<90^\circ\)，顶部时间 \(u\sin\alpha/g\)，早于地面正根；最大离地高度 \(H+u^2\sin^2\alpha/(2g)=H+D^2\tan^2\alpha/[4(H+D\tan\alpha)]\)。未漏 H，分母与飞行时间为正。
4. **`#centres-of-mass-1`，L484**：从图 \(O'=(3a,0),X=(0,12a),Q=(12a,0)\)。孔在原圆内；剩余质量 \(M=108\rho\pi a^2\)，薄板质心 x=-a。加质点后 \(x_G/a=(-M+12m)/(M+m)\)。P 高于 Q 要顺时针转 \(\tan\theta=5/12\)；转后 XG 水平分量 \(x_G\cos\theta-12a\sin\theta=0\)，所以 \(x_G=5a\)，\(m/M=6/7\)。转后向下距离 \(13a>0\)，验证稳定朝向而非上方平衡。

## 7. 双语、反馈与附加测试差异

实读中文概念／反馈是否改变研究对象、力方向、假设、所求与结论，未见实质偏移。另独立做文本对照作为补充：169 行带 Question 标识的英文题干全部保留，六道入口完整英文题干及四道参考题的英文条件逐段相同；22 个受审页配对的 696 组显示公式按首尾空白规范化后逐项相同。长题的后续英文指令及中文解释也阅读过，未仅凭公式数量宣布双语对齐。

最新两个入口在 L91、133、179、219、255、291 每语言修改 11 个反馈 URL，共 22 个。独立比较确认变动只在链接目标，题干、数值、条件、答案及其余文字不变；其余 22 页与 3066e46 文本一致。目标锚点逐个在源码定位并读其含义：

| 任务 | 对应实际概念锚点（两语言一致） |
| --- | --- |
| mixed-a | moments `#equilibrium-under-parallel-forces`；centres `#a-system-of-particles` |
| mixed-b | energy `#the-work-energy-principle`；projectiles `#projection-from-a-height` |
| mixed-c | vectors `#velocity-and-acceleration`；circular `#forces-in-a-horizontal-circle` |
| later-a | modelling `#connected-bodies`；Newton `#connected-particles` |
| later-b | momentum `#choose-the-system-before-conserving-momentum`；energy `#the-work-energy-principle` |
| later-c | circular `#the-conical-pendulum` |

这项确认是源内容与恢复目标的一致性检查，不冒称重新完成点击或手机阅读验收。

追加测试提交只改两文件、4 行增加／3 行删除：

- `scripts/test-mechanics-bilingual.js:33`：每个中文 summary 必须含中文，允许同时保留 Hint／Solution 等英文；没有放宽成英文标签即可。
- 同文件 L52：比较 `formula.trim()`，仅忽略显示公式边缘空白；内部 TeX 字符仍需完整出现。
- `scripts/test-mechanics-chapter10.js:186`：self-written 身份断言改为大小写不敏感，仍要求存在身份标识。

未发现这些追加行改变数学验收含义的实质问题。没有运行仓库测试，也没有将其成功作为上文复算证明。另以本轮独立列式的题干数据在内存完成 46 个数值／合力残差核对；它们只辅助算术，不能取代前面的模型与分支论证，未写入或修改测试脚本。

## 8. 实际边界与未做项

- 源码阅读覆盖下方清单所列 22 个受改页；新增／修订任务、入口六题及参考四题按本记录独立重建。保留 hard cases 的核查见对应表。
- forces 两语言、两张获准样章图与 forces 测试，以及 reading.css、home.css、subjects 布局，已与批准基线核对：工作区字节匹配原保护清单，文本与 d1e93ec 一致。Git LF 与 Windows CRLF 的散列差异单独说明，不据此声称文件被改。
- 不重建、不跑 15 项检查、不复做 96 views；这些技术工作由主线程记录。本线程未测试实际键盘／手机阅读或学生真实作答。
- 没有重新审计全部历史题源、全部教材页或其他考季；旧参考题出处未核定的状态保持。未新增教学范围、发布、推送或提交。
- 本线程唯一写入文件为本记录。既有 package.json／node_modules、课程、测试、共享文件及 Git 状态未由本线程修改。

## 9. 最终源身份与 SHA-256

散列约定：24 个课程文件表使用 **3066e46 的 Git blob 字节**；最终两个入口另列工作区实际字节。英文 quick-reference 工作区采用 CRLF，其字节散列为 `03270971d8b015525f9ec08ec3831a0294702649add5291dca0845f4bf4505bd`，与冻结 blob 在统一 LF 后逐字相同。其余非入口课程工作区与冻结内容相同。文档／本地 QP、MS、图及附加测试散列均注明实际读取版本。

记录写入时 HEAD：`c858455092ddddae6de808c944cb9357338fde4d`。入口反馈修正按已读取工作区版本审查（见下表），不将它伪称为 3066e46 的原始字节。

### 课程冻结版本

| 文件（仓库根 D:/GitHub/Academic/） | SHA-256（3066e46 blob） |
| --- | --- |
| `alevel/a2-mathematics/mechanics.md` | `8679a0c35b161fe22c900158c62c204beaaa1f78f927df2806a2eb5b8348555a` |
| `zh/alevel/a2-mathematics/mechanics.md` | `60a0a2571d22f0c8ea13aa48ec60fdfb214438d3257eb097485889db6335d169` |
| `alevel/a2-mathematics/mechanics/mathematical-modelling.md` | `64ef32fc17b971c8e0fba9eb0226c07ef7641c59308cc530945ce55b07abf473` |
| `zh/alevel/a2-mathematics/mechanics/mathematical-modelling.md` | `56dbdbfd7b4985f1c38384f5db3d612172e11a1a9a2a80b6189ab376bb9e9253` |
| `alevel/a2-mathematics/mechanics/vectors-and-kinematics.md` | `e1e989f4a6582fcce0887e7dad35d50a492d4c1e3590242b6d6d0ef9cab02108` |
| `zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics.md` | `da8418182236a5505b092ef97e4b3e234a6caabfdfdf04053707775696761d9f` |
| `alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md` | `f77e4abcfbfdef62abffa7fe59c428250e294c117e13a40af1f0465c59e8e680` |
| `zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md` | `b021cc1c613ff871b57843b0da839470bca68e3d83bba8e6c481c9af438468a6` |
| `alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md` | `6bb1ebddb8a27eab80ba814c868cba0c8ab6fc8f2aa9162c5f19b763e5f0f83a` |
| `zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md` | `bf929cc8b6527517e3319a4f135bce05945905759a02243476e04211be6a4361` |
| `alevel/a2-mathematics/mechanics/centres-of-mass.md` | `4251558b8caddfa3c43bf8b2abc3d2608f76a9d742f7546c30e3f5b1f327f619` |
| `zh/alevel/a2-mathematics/mechanics/centres-of-mass.md` | `9f0461e0f10a304013f79a2c5a05b7087c64b5f0342668b1dfda40e2ef8fd4a4` |
| `alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md` | `a1dcffce386ddb67a06bc21bc078b03162d3b82827c9b774824055234a6d1353` |
| `zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md` | `62c2692691ec86905dea51ae8d6b138f6627915385b45bd45a62808a5f2400e5` |
| `alevel/a2-mathematics/mechanics/projectiles.md` | `1ae919c172546288b0c5361155761ff62066af967eb2f56a6baab89a4c0a796c` |
| `zh/alevel/a2-mathematics/mechanics/projectiles.md` | `c0245eb5031681dc604e2b30abe8aeff935f5785f89c66472a262b7947631a7b` |
| `alevel/a2-mathematics/mechanics/work-and-energy.md` | `aa87eb7551e12e0060e04f114585442ddd3e7483d9ccefdcea850abc83b847ea` |
| `zh/alevel/a2-mathematics/mechanics/work-and-energy.md` | `c59c0b0389e67e3936a105fec15f7dc210f1dfb6af13b32be890bf86b309da41` |
| `alevel/a2-mathematics/mechanics/uniform-circular-motion.md` | `e0b58bc82ad055bdace913c4de78fd921f4bcff58e39c2725f58c632ec5c5b43` |
| `zh/alevel/a2-mathematics/mechanics/uniform-circular-motion.md` | `5ebcf512a384ca17b159758de39c6142f3edf760898c8732cb90fa21e877dcd9` |
| `alevel/a2-mathematics/mechanics/momentum-bridge.md` | `d404cd19edba00434f84464d1d336878801aa935bc1f422ce7b46a64059ef675` |
| `zh/alevel/a2-mathematics/mechanics/momentum-bridge.md` | `eaeb451eb1d646a58fff2e06ea23f8b3d9ef789e835f71cd763f5ef7f4144f55` |
| `alevel/a2-mathematics/mechanics/quick-reference.md` | `6915934d768d5384b557e786bcd8f9567157068b46a9e20d0636803bf68c7d95` |
| `zh/alevel/a2-mathematics/mechanics/quick-reference.md` | `d9107ed0ef81293616812cdb8048bd0d50d1f92b415c43f1c0b35108bdfae9b8` |

### 最终入口工作区版本

| 文件 | SHA-256 |
| --- | --- |
| `alevel/a2-mathematics/mechanics.md` | `d663e50ca4dca90d382dbc562f4a5f8a1a43f1bc42edb6753c246cc1fe923e86` |
| `zh/alevel/a2-mathematics/mechanics.md` | `3071220f04234588752309790c1e50aeb8d01722e05e3b0afc2bdabb4c4d364b` |

### 本地依据与实际读取资料

| 文件 | SHA-256（实际读取字节） |
| --- | --- |
| `AGENTS.md` | `f35107a5e62cd5ab79ce0d2affa0e52a77a19a65e225e9b4279ae492d9650653` |
| `docs/agents/course-content-standard.md` | `887c470bccb0dc7789688557b69667d0955923cc619a5133a6deab34351b5ec7` |
| `docs/agents/implementation-ma05-full-upgrade-2026-10-25.md` | `2f4fce4f7e9cef0ca3af8fb9498a09fa40ff9494625bb8af907ab45ef158f58a` |
| `docs/agents/implementation-ma05-foundations-upgrade-2026-10-25.md` | `267bc1a8286f004f04cde2c4f8cec3ff90f01d14fbe1e75cb6ce744b5bd48a81` |
| `docs/agents/implementation-ma05-statics-upgrade-2026-10-25.md` | `a7145767180a7c13084d418dbf8b8d28700ddde40c38f2f5725ee04a8cfab091` |
| `docs/agents/implementation-ma05-dynamics-upgrade-2026-10-25.md` | `28113022b573497e9cce0882168f9845e6024a7f97702671a62f1097662ae46e` |
| `docs/agents/implementation-ma05-energy-circular-upgrade-2026-10-25.md` | `3f20847dddd47f35c1424b1b18427308e6714c308c3a39f26e05da012aa2aba9` |
| `docs/agents/implementation-ma05-reference-upgrade-2026-10-25.md` | `aa3466e4d12d30012b968aa008d422f79382356b4fe5a996bb2624b197e9fb80` |
| `docs/agents/audit-assets/ma05-full-upgrade-2026-10-25/baseline.json` | `52f3f79f9764719796fe6a0f921caafee3f040384fabc8ca59250bfa761f96d2` |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf` | `ef179fa0ad6b941f0621d2c5f7c9250aa2401a5fecae2efdd03b7bff5a40c15f` |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf` | `905ddb74a79246b3728f7f0800e46a05a8d1066ccc9bedb0793bef07a8342195` |
| `assets/img/a2-math-mech/MA05_example_q1.png` | `1e28c6a81b1198f36674dcca6fbfa322ea8231ddf30facb8c92de02f52f2c2ac` |
| `assets/img/a2-math-mech/MA05-circular-motion.png` | `6e3c526979b26301a80180178cea1e41eacf56ed76e7dfbe339b883b28cbc3d1` |
| `assets/img/a2-math-mech/MA05-centre-of-mass.png` | `07ef45b7fbddef87924208cdb1d81d5131fb39ec3f2ddb6c93f6c7d956d6090a` |

### 追加测试的版本

| 文件 | 3066e46 blob SHA-256 | 已读工作区 SHA-256 |
| --- | --- | --- |
| `scripts/test-mechanics-bilingual.js` | `633408b5587fbb498216ab4cf92b0e24c53d5cd9d47779f93712ae1bb2642216` | `c9dbbc6906fe7459541a5edf1ca5b5672008927c31646068fe6a1354d7d5218a` |
| `scripts/test-mechanics-chapter10.js` | `f52a8fb31c00a91e7b02de0f56ce99aca5b1844923cbf6a5536ff820d531fe94` | `b3231511d3025d42bc3645bd4bc927eaf229c7e59294138cad873da83c7a3c9e` |

### 受保护文件的批准基线对照

| 文件 | d1e93ec blob SHA-256 | 本轮工作区 SHA-256（匹配原保护记录） |
| --- | --- | --- |
| `alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md` | `f77e4abcfbfdef62abffa7fe59c428250e294c117e13a40af1f0465c59e8e680` | `f77e4abcfbfdef62abffa7fe59c428250e294c117e13a40af1f0465c59e8e680` |
| `zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md` | `b021cc1c613ff871b57843b0da839470bca68e3d83bba8e6c481c9af438468a6` | `b021cc1c613ff871b57843b0da839470bca68e3d83bba8e6c481c9af438468a6` |
| `assets/img/a2-math-mech/force-components-sample.svg` | `6eac7323645b49d5567668016d6b699f8a27d42867b837110d794dc2a9c94080` | `6eac7323645b49d5567668016d6b699f8a27d42867b837110d794dc2a9c94080` |
| `assets/img/a2-math-mech/wall-friction-feedback.svg` | `47ca0485a3dc87d7d8322c88386a0480667749ba0a35e70d99abcd3e882ee100` | `47ca0485a3dc87d7d8322c88386a0480667749ba0a35e70d99abcd3e882ee100` |
| `scripts/test-mechanics-forces.js` | `2f586f39b47a9591a2fba1c95c63fb609fdf9f023e8ba5fada3a535b35be97a9` | `3a589c0d27449d8eabed329e0cd47c908f9673a5a019a6681aaeb756218df3ce` |
| `assets/css/reading.css` | `71c3c526914dfa2676479c8a8579e323a2731f3f62cbb339117e8d1e83e20b08` | `177c376f70a9685f629b177f24c7641cdd08449d49869a29785775126997f72a` |
| `assets/css/home.css` | `81c09234ab53bb04c8d99b25c5665633f5e24330153c0d960289d11428ed9904` | `cffd04e3d4fee69faa20a2414bcf2f54880c13f9eee1a63e570c745726a95748` |
| `_layouts/subjects.html` | `4c88ebadb6bfe3f2099664ea7f4d84217731db69c59543f768358510a0112258` | `293db2c33a7e9d0858caf551013030cb136af11b7aaf6f97397c90c0ad7d940e` |

### 实读范围索引

下面数量只界定实际读过的任务框，不作为学习质量或效果指标。两语言按同一内容逐项对照；forces 未包含在此重新认证范围。

| 英文源文件（中文同名） | 已读完整示范框 | 已读学生任务框 |
| --- | --- | --- |
| `alevel/a2-mathematics/mechanics.md` | 0 | 6 |
| `alevel/a2-mathematics/mechanics/mathematical-modelling.md` | 4 | 11 |
| `alevel/a2-mathematics/mechanics/vectors-and-kinematics.md` | 7 | 16 |
| `alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md` | 8 | 15 |
| `alevel/a2-mathematics/mechanics/centres-of-mass.md` | 8 | 14 |
| `alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md` | 9 | 16 |
| `alevel/a2-mathematics/mechanics/projectiles.md` | 8 | 15 |
| `alevel/a2-mathematics/mechanics/work-and-energy.md` | 8 | 15 |
| `alevel/a2-mathematics/mechanics/uniform-circular-motion.md` | 9 | 22 |
| `alevel/a2-mathematics/mechanics/momentum-bridge.md` | 2 | 8 |
| `alevel/a2-mathematics/mechanics/quick-reference.md` | 3 | 4 |
