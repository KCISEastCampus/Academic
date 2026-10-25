# AS 代数 L01 独立审查：Standards

审查日期：2026-10-24；审查者：独立内容审查代理。基线与 HEAD 均为 `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`，无新增提交。对照主任务限定的四文件的 working diff，另读未跟踪的[制作记录](implementation-as-algebra-l01-2026-10-24.md)。依据：[AGENTS](../../AGENTS.md)、[长期标准 v1.1](course-content-standard.md)、[公式指南](../MATH_FORMULA_GUIDELINES.md)。仅写本报告。

## 发现与关闭（最终开放 0 项）

**原 P2 已关闭：纠错后的重试现已检验平方根拆和错误。** [英文第 202 行](../../alevel/as-mathematics/algebra.md#l01-diagnosis)、[中文第 204 行](../../zh/alevel/as-mathematics/algebra.md#l01-diagnosis)仍指向重试 B；最终题干（英文第 235 行、中文第 237 行，`#l01-retry`）已先要求判断 `√(7+3)=√7+√3` 并给出精确理由，再提取平方因子、有理化及乘回。独立展开得 `(√7+√3)²=10+2√21>10=(√(7+3))²`，所以所声称两值不等；正文也明确两值为正。此处已落实长期标准 §5 第 65–71 行“重试应检验刚修复的困难”。提示与答案仍分别默认关闭，中性标题未透露判断结论，双语帮助等价。

最终所审 L01 与前后连接没有遗留 Standards 发现；未发现 P1 正确性问题或需要另报的代码气味判断。成对双语正文不作为重复代码处理。此结论不扩展到整门课程或学习效果。

## 实际独立核验

逐题重建 L01：示范得 `a^(−1/3)`、`3√2`、`√5−√2`；支架题得 `x^(−3/2)`、值 `1/8`；任务 A 得 `k=1/6,x=64`；重试 A 得 `t^(−1/2),t=9`。逐项核对正底数、主根、非零共轭式及原式代回。

**追补修复复核：平方因子提取的独立证据已补齐。** 重新读取并独算最终任务 B（英文第 171–192 行、中文第 173–194 行）：`√12=2√3`，第一式为 `(√3+1)/4`，所以第二式较大，第二减第一为 `(√3+1)/12>0`。重试 B 提取 `√28=2√7,√12=2√3`，得到 `(√7+√3)/4`；乘回原分母得 `2(7−3)/4=2`。主任务转交的 S1 修复在独立平方因子提取这一项已核实；与原 P2 的关闭分别判断，没有合并两轴结论。

重读三处改为 `aligned` 的概念／示范（英文第 39–43、117–122、126–131 行及中文对应段），等式意义未变；连同更新任务 B、重试 B 共五处环境均配对。源码自检确认最终英文题干和全部 TeX 双语一致；未将此静态检查当作手机呈现验收。

混合题由原式得 `x>0`，化简后解须 `x>2`；平方得候选 `1,4`，原式只接受 `4`。另以 `u=√x>0` 重算，结果相同。核对 L01→L02→回顾→多项式的源码路线；后续求导链接明确指向带支架题，没有将其计作独立证据。按声明的先修检查概念桥梁；逐段对照双语题干、条件、解答与提示含义，未发现帮助差异或方法标题泄露。

只读重核仓存 MA01 January 2025 QP 封面及第 2–3 页、配套 MS 封面及第 4–5 页，并目读已有 QP 第 2–3 页、MS 第 5 页图。独算 Q1(a) 为 `64m^(−3)/125`；Q1(b) 为 `6y−x=−5/2`，故 `y=x/6−5/12`，与 MS Version 1.0 Final（251xMA01/MS）一致。引用仅支持指数方法证据；自拟题及非官方分值身份清楚，不把它当根式题的官方评分标准。

## 所审快照（SHA-256）

以下为读取时实际文件字节哈希；后续修改须另行复查。

| 文件／来源 | SHA-256 |
| --- | --- |
| `alevel/as-mathematics/algebra.md` | `59cca5e8ebb8d2aa459baeda24cf93f7d88da498bb8b2c7a6e0626b21d0b2d9c` |
| `zh/alevel/as-mathematics/algebra.md` | `559c01157a9a91d1774eeb4e327dc14d8f8b734be840733337f98ff45eb1f164` |
| `scripts/test-as-mathematics-content.js` | `bfe6d9abeb9b1a592954cf128150fd9fee2a0430765c216d0d37e08ca2022e57` |
| `scripts/test-as-mathematics-calculations.js` | `209145c12fa1286521c7436d30b2575e8ed6625b6b52a7628c541ae4f6acff7c` |
| `docs/agents/implementation-as-algebra-l01-2026-10-24.md` | `1d4e9de114eaae789c1c3775a0b72508b408d5feb5f0d77ad18957019b6a5a4c` |
| `docs/agents/course-content-standard.md`（v1.1） | `887c470bccb0dc7789688557b69667d0955923cc619a5133a6deab34351b5ec7` |
| `AGENTS.md` | `f35107a5e62cd5ab79ce0d2affa0e52a77a19a65e225e9b4279ae492d9650653` |
| `docs/MATH_FORMULA_GUIDELINES.md` | `d83bbd9523b70d833dfbe511e0be966baca36b0ee4bdd04040222620bc7843d1` |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf` | `2ff28edd42878e473aaecafffa27bef01ef93f072db505cbddabd786f2c195d8` |
| `assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf` | `99e892f5c5ca01299ba9dc1f244f66551d015d7526eebbc20ca5159b0bbd3c9e` |

指定命令 `git diff 19db6ca1640fb47fd541b3f8fb3d45d510d41b09 -- alevel/as-mathematics/algebra.md zh/alevel/as-mathematics/algebra.md scripts/test-as-mathematics-content.js scripts/test-as-mathematics-calculations.js` 的最终所审输出为 38593 字节，SHA-256：`7d08dcb82dfa30d29ae95e67a37e586ac402ec91c0d17859230502a5aa524aff`。

## 边界

未重取线上大纲：9660 v5.2／P1.1 的当前资格核验沿用制作记录；未认证线上文件与仓存 PDF 字节一致。未复审 L02／L03／L05 既有数学内容、其他课程或整份原卷。仅静读两份脚本，不重复工具覆盖的发现，不以数值抽样代替全范围推理。

未运行构建、浏览器或测试脚本；技术验收由父任务负责。本审查未修改课程、测试或既有审计，未提交、推送、建 PR 或合并。没有真实学生试用，独立作答、重试修复及延后保留效果均尚未验证。
