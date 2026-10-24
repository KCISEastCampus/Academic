# FM03 通俗表达：Standards 独立内容审查

2026-10-24；基点 `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`。首轮审查四页改文及相连任务；依据[实施规范](implementation-fm03-differential-plain-2026-10-24.md)及用户补充，以下记录最终增量复核，范围为两项修复、关联措辞、中英文一致性与新增测试。

**确定问题（原 P2，已关闭）：**[一阶 EN L39–41](../../alevel/a2-further-mathematics/first-order-differential-equations.md)／[ZH L41–43](../../zh/alevel/a2-further-mathematics/first-order-differential-equations.md)已区分标准化失败与原式无定义；延伸须可微且满足原式。procedure、速查、pitfall 同步修正（EN L87、677、688；ZH L89、679、690），原式确含倒数项的限制仍保留。符合[AGENTS L48](../../AGENTS.md)的除零与定义域要求。

**判断（原非阻断建议，已关闭）：**[二阶 EN L37](../../alevel/a2-further-mathematics/second-order-differential-equations.md)／[ZH L39](../../zh/alevel/a2-further-mathematics/second-order-differential-equations.md)已将条件足够且独立、须实际解常数方程的提醒放回主线，反例继续折叠；符合[课程标准 §3 L43](course-content-standard.md)。

**测试与双语：**[新增测试 L63–65](../../scripts/test-further-first-order.js)在 $x=-1,0,1$ 检查跨零反例。独立核算：$y=x^2/3$ 可微，$y^{\prime}=2x/3$，故 $xy^{\prime}+y=x^2$ 对所有实数成立；数值抽样仅作回归。上述修复中英文语义一致，未发现新增问题。

**范围与限制：**本次增量复核未重复全章审查；新增测试仅静态复核，审查者未重跑主测试、构建或浏览器验收，未做学生试用。审查当时的主任务技术验收对应修复前快照；随后主任务已在最终修复版本重跑，结果见实施记录。十二项 smell 启发式仍无适用发现；双语重复属要求。排除无关改动，仅更新本报告。未关闭发现：0。

**最终 SHA256（原始字节）：**

| 文件 | SHA256 |
| --- | --- |
| [一阶 EN](../../alevel/a2-further-mathematics/first-order-differential-equations.md) | `94fe683c82619befbe016c7b1b0d473b3118a32e376cdd090d55d14644f50a10` |
| [一阶 ZH](../../zh/alevel/a2-further-mathematics/first-order-differential-equations.md) | `85be1d8f5b607ea90014b222c3e7d8a65bbff6c0738868131e3e637a7e6989d4` |
| [二阶 EN](../../alevel/a2-further-mathematics/second-order-differential-equations.md) | `9196b660a1d8b03b503cbc85f95f73581d7cbfab245877c6ac466f71dec4d985` |
| [二阶 ZH](../../zh/alevel/a2-further-mathematics/second-order-differential-equations.md) | `f41149906bc08d5dc43910fd6bbe4cba042d50ac6b356fddc546d9d29f9d98b7` |
| [一阶测试](../../scripts/test-further-first-order.js) | `0499aa41473968c5b3352938d1dab9c57dd825e9ec915ff05559eebdb1074fe4` |
