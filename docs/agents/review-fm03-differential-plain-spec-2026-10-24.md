# FM03 微分方程：Spec 独立内容评审

2026-10-24。基线 `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`；按用户指定的 `git diff HEAD --` 四页路径，审阅最终工作副本及周围任务。仅写本报告。

依据[本轮设计](implementation-fm03-differential-plain-2026-10-24.md)第 3–20 行，对照[认可样段设计](implementation-fm03-hyperbolic-plain-2026-10-24.md)第 5–11 行、[可读性审查](audit-fm03-readability-2026-10-24.md)第 24–30、71–72 行及[长期标准](course-content-standard.md)第 3–6 节。

**确定问题：0。**未发现本次改动造成的要求缺失、错误实现或越界。

**首轮判断与核验（下列行号为首轮快照）：**符合“先讲含义，再给规则”的样段方向，未降低考试深度。

- 一阶 EN 45–75／ZH 47–77：先解释乘数用途，再由乘积法则及链式法则独立重建积分因子。逐段核对原积分链，两版各 39 个含积分的数学表达式均保留；换元、常数、零解和区间说明仍在。Q3 的额外先修已移至题前。
- 二阶 EN 46–208／ZH 48–210：指数的两次求导先于辅助方程，根型表在例 1 后；CF 给零、PI 给右边，再解释相加。独立复算三类根、比较系数、单根／重根及三角共振；重根试探式代入得到 $2Ce^{2x}$，原计算成立。例 7 的衰减乘积极限和完整解条件也成立；边界非唯一说明保留。
- 四页各保留原 28 个显式锚点；一阶 16、二阶 20 条英文任务文本各版未变。逐项对照中英文讲解、提示、反馈与重试，语义支持一致；数学表达式一致仅作辅助证据。

**最终增量复核（2026-10-24）：**仅复核一阶 `standard-form`、求解步骤末句、速查与常见错误，以及二阶条件主线。确定问题仍为 0；修复不损害 Spec，中英文一致。一阶已区分原式含 $1/x$ 时零处无定义，与仅导数系数为零时标准化失效；延伸须可微并满足原式，不预设两侧常数相同。独立解析核算 $y=x^2/3$ 在零处可微，且 $xy^{\prime}+y=2x^2/3+x^2/3=x^2$，支持跨零解。静读新增测试断言，涵盖负值、零和正值，未运行测试。二阶将“条件须足够且独立，实际解常数方程”放回主线，原边界反例保留。未重做全章或浏览器检查。

**限制：**只做内容审查；未重验官方 PDF、构建、浏览器或测试，后者由主任务处理。未审无关改动，未取得学生试用证据，不能据此宣称学习效果。

最终源文件 SHA256（文件原始字节）：

| 文件 | SHA256 |
| --- | --- |
| `alevel/a2-further-mathematics/first-order-differential-equations.md` | `94FE683C82619BEFBE016C7B1B0D473B3118A32E376CDD090D55D14644F50A10` |
| `zh/alevel/a2-further-mathematics/first-order-differential-equations.md` | `85BE1D8F5B607EA90014B222C3E7D8A65BBFF6C0738868131E3E637A7E6989D4` |
| `alevel/a2-further-mathematics/second-order-differential-equations.md` | `9196B660A1D8B03B503CBC85F95F73581D7CBFAB245877C6AC466F71DEC4D985` |
| `zh/alevel/a2-further-mathematics/second-order-differential-equations.md` | `F41149906BC08D5DC43910FD6BBE4CBA042D50AC6B356FDDC546D9D29F9D98B7` |
