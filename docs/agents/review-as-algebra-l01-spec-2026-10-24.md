# AS 代数 L01：Spec 独立审查

2026-10-24；基线／HEAD：`19db6ca1640fb47fd541b3f8fb3d45d510d41b09`，无新增提交。审查指定四文件工作区 diff，以 [设计卡](implementation-as-algebra-l01-2026-10-24.md)、[原审查](audit-as-mathematics-standard-2026-10-24.md)及长期标准 v1.1 为依据。仅写本报告。

## 发现与关闭（Spec S1 已关闭；Standards P2 追补核验通过）

**S1（P2，已关闭）：根式目标原缺提取平方因子的独立证据。** 设计卡第 16 行要求“根式化简、有理化与精确比较”；初稿 B／重试 B 的根数均已化简，无法验证提因子能力。最终源码已作最小修补：独立 B（英文 `algebra.md:171,183–192`／中文 `algebra.md:173,185–194`）纳入 $\sqrt{12}$；重试 B（英文 `algebra.md:235,253–261`／中文 `algebra.md:237,255–263`）纳入 $\sqrt{28},\sqrt{12}$。重读并独算如下，题干、比较方向、原分母核验及双语帮助一致，计算脚本相应断言已更新。未发现新的 Spec 缺项、错误实现或越界升级；本轴未关闭 0 项。

**Standards P2（主任务要求追补复核，修复通过）：拆和错误已有同目标重试。** 最终重试 B 题干（英文 235／中文 237）先要求判断 $\sqrt{7+3}=\sqrt7+\sqrt3$ 并给精确理由，再做原有化简。解答（英文 247–251／中文 249–253）给出正确的平方比较；学生须先作判断，提示与解答仍分别默认关闭，题名中性、无新增题框。已满足长期标准 §5“重试应检验刚修复的困难”。仅独立核验此项关闭，不代替 Standards 轴整份报告。

## 实际独立核算

逐题重建 L01 七个题干及后续混合题，并逐项阅读两种语言的提示、解释、条件和检查：

- 概念与指数示范：$8^{2/3}=4$，$8^{-2/3}=1/4$；$\sqrt[3]{a^2}/a=a^{2/3-1}=a^{-1/3}$，$a=8$ 时原式 $4/8=1/2$。
- 带支架题：$\sqrt x/x^2=x^{-3/2}$，$x=4$ 时原式 $2/16=1/8$。
- 根式示范：$\sqrt{50}-\sqrt8=5\sqrt2-2\sqrt2=3\sqrt2$；$3/(\sqrt5+\sqrt2)=\sqrt5-\sqrt2$，乘回原分母得 $5-2=3$。
- 独立 A：$5/6-2/3=1/6$，故 $k=1/6$；$x^{1/6}=2\iff x=64$，原式 $32/16=2$。正数范围取六次幂可逆，解唯一。
- 独立 B：$\sqrt{12}=2\sqrt3$，首式 $1/[2(\sqrt3-1)]=(\sqrt3+1)/4$。第二式减第一式为 $(\sqrt3+1)/12>0$，因此**第二式更大**。原分母及共轭非零；这同时考查提因子、有理化及带符号依据的精确比较。
- 重试 A：$t^{3/4-5/4}=t^{-1/2}$，由 $1/\sqrt t=1/3$ 唯一得到 $t=9$；原根式比值为 $3\sqrt3/(9\sqrt3)=1/3$。
- 重试 B：$(\sqrt7+\sqrt3)^2=7+3+2\sqrt{21}>10=(\sqrt{7+3})^2$；两个值为正，故 $\sqrt7+\sqrt3>\sqrt{7+3}$，所声称等式为假。原分母为 $2(\sqrt7-\sqrt3)>0$，故 $2/(\sqrt{28}-\sqrt{12})=1/(\sqrt7-\sqrt3)=(\sqrt7+\sqrt3)/4$。乘回**原**分母得 $2(7-3)/4=2$；先提因子再有理化与独立 B 同目标。
- 混合题（英文 499–517／中文 501–519）：原式要求 $x>0$，再由 $\sqrt x=x-2$ 得 $x>2$。平方产生 $(x-1)(x-4)=0$；$x=1$ 给出 $1=-1$，舍去；$x=4$ 给出 $2=2$。替代法令 $u=\sqrt x>0$，$(u-2)(u+1)=0$，仅留 $u=2$，同得唯一解 $x=4$。

主根、实数范围、负指数及等价／单向变形的处理正确。新改动的双语题干一致，帮助的语义和强度相当；上述核算不依赖课程脚本。

最终三处概念／示范多行 `aligned`（英文 39、117、126；中文 41、119、128）及两处修订解答的环境、分行、对齐与等号连接已读源码复核，未改变数学意义；不据此代替实际手机排版检查。

## 路线、保留范围与来源

两种语言均可从入口 `#learning-route` 进入代数 L01，再到 L02；L02 后新增返回混合题，再连 L03／L05、坐标几何与微分 `#l06-scaffold`。微分目标题独立核算为 $3x^{-2}-2x^{1/2}\mapsto-6x^{-3}-x^{-1/2}$（$x>0$）；它如实保留“带支架”身份，不能用作新的无帮助证据。未要求本轮修复其他课程缺口。

去掉指定新增导航、统一换行后，六个中英文 L02/L03/L05 段落分别与基线全文相同；没有额外课程升级。未将保留性检查扩大为旧课全面重新认证。

在线核对[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=10)正文为 9660 v5.2，P1.1 包括有理指数、根式化简及分母有理化。目读现有 QP 第 2–3 页与 MS 第 5 页来源图：Q1(a) 独算 $(25m^2/16)^{-3/2}=64m^{-3}/125$（$m>0$）；Q1(b) 独算 $3^{6y-x}=3^{-5/2}$，得 $y=x/6-5/12$，与所读 MS 一致。未重读 MS 第 4 页，也未认证来源图与 PDF 的生成关系或线上 QP/MS 字节一致性。

## 本次读取版本：SHA-256

路径均相对仓库；`EN/ZH` 分别指 `alevel/as-mathematics/`、`zh/alevel/as-mathematics/`。

| 来源 | SHA-256 |
| --- | --- |
| EN `algebra.md` | `59cca5e8ebb8d2aa459baeda24cf93f7d88da498bb8b2c7a6e0626b21d0b2d9c` |
| ZH `algebra.md` | `559c01157a9a91d1774eeb4e327dc14d8f8b734be840733337f98ff45eb1f164` |
| `scripts/test-as-mathematics-content.js` | `bfe6d9abeb9b1a592954cf128150fd9fee2a0430765c216d0d37e08ca2022e57` |
| `scripts/test-as-mathematics-calculations.js` | `209145c12fa1286521c7436d30b2575e8ed6625b6b52a7628c541ae4f6acff7c` |
| `docs/agents/implementation-as-algebra-l01-2026-10-24.md` | `1d4e9de114eaae789c1c3775a0b72508b408d5feb5f0d77ad18957019b6a5a4c` |
| `docs/agents/course-content-standard.md` | `887c470bccb0dc7789688557b69667d0955923cc619a5133a6deab34351b5ec7` |
| `docs/agents/audit-as-mathematics-standard-2026-10-24.md` | `f83fe4775866b717a23c605a7f9f09b92e301011f70e785e1cefeac9de48a8d1` |
| EN `index.md` | `43be2955f67753b540233c4b62402952b44c5ab70567e127f8b5115cbdf8ea52` |
| ZH `index.md` | `d1b96900169b4c4541549c8fdfe42e542ece19df4666d18f03b9c77c393d7785` |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf` | `2ff28edd42878e473aaecafffa27bef01ef93f072db505cbddabd786f2c195d8` |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf` | `99e892f5c5ca01299ba9dc1f244f66551d015d7526eebbc20ca5159b0bbd3c9e` |

边界：未运行构建、浏览器或课程检查脚本；未做学生试用、延后学习效果或完整无障碍审查。技术检查由主任务负责；本报告不替代其结果，也不表示整课／全 AS 已验收。
