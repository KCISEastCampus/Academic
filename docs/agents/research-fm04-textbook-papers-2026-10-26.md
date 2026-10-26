# FM04 教材、真题研究与首样章设计

日期：2026-10-26。目标资格为 OxfordAQA 9665 v5.2，FS2 / FM04。官方范围、现有资产及完整路线见[独立范围研究](research-fm04-scope-route-2026-10-26.md)。本记录先于样章正文建立；只制作起步样章，不将其称为全部 FS2.1 或 FM04。

## 实际材料与身份

- 用户提供的扫描教材：*International A Level Further Mathematics with Statistics, AS and A Level*，Brian Gaulter、Mark Gaulter、Brian Jefferson、John Rayneau，Oxford University Press，2017，ISBN 978-0-19-837599-9。共506 PDF页；已实际看封面、版权、目录及印刷370–374页（PDF374–378）。矩母函数在第29章；估计量、区间估计、进一步检验在30–33章。扫描没有可提取正文；通过逐页图像阅读，未把全书上传网站。
- Google Drive [January 2025 QP](https://drive.google.com/file/d/1d0uWUyBn-BuKFxO9vIB5HCFHUZSjwJgu/view)及[对应 MS](https://drive.google.com/file/d/1KTx2ZmsUj2YMpUEycJwAQeekCh1aXy1-/view)：正文为9665/FM04，Thursday 16 January 2025，90分钟、80分；QP24页，MS18页、Version1.0 Final。读取QP正文，重点复核Q8及MS17–18页。原始QP第16页图像确认条件是 $\lvert t\rvert<1/\sqrt q$，不是文本提取所显示的单侧范围。
- Q8(a)评分要求一阶求导、在零点识别均值，二阶求导识别二阶矩并结合方差。Q8(b)要求从连续期望积分推出指数分布MGF，再利用变换、独立性乘积和参数匹配。MS允许的省略不代表教学中可省掉存在域解释；差的MGF需要两侧范围交集。
- Google Drive [June 2025 QP](https://drive.google.com/file/d/1FTxQ-X2OSM6MRZHAAKbTk8-Gp1Vqx7z4/view)及[MS](https://drive.google.com/file/d/1VRTlOTfUIP2agmgWRMxOBJLAUS1AwvQA/view)：归档名202505，正文实际是Wednesday 4 June 2025。已读Q2及MS5–6页的可读文本：分段密度积分、分部积分与上下限、独立变量MGF乘积。尚未逐页视觉核验这组，故不在样章转载其原题或称已完整复核全卷。

归纳：先建立定义与零点求导，再学连续积分、标准分布和独立和，有教材与真题依据。不能只列三个MGF公式；考试要求展示推导及条件。本样章所有示范和任务自拟，不转录官方题干、不挪用官方分值；教材用于理解顺序，不复制正文或图片。

## 设计卡（写正文前）

中心问题：怎样把一张概率表写成函数，再从它找回均值和方差？为什么重复同一变量与相加独立副本不同？

先修：有限概率表、期望、方差、指数函数与链式求导；PGF是可选连接，不能要求首次读者已经会MGF。通过AS离散均匀示范、PGF矩、线性组合回补。核心范围是FS2.1a离散部分、FS2.1b及FS2.1d的有限独立和；连续定义先说明，连续推导、Poisson/exponential/normal作为明确待建后续。

用自拟二点分布先逐项建表，随后完整求导并直接期望交叉检查。解释变量t是可选择的函数输入，不是时间或随机结果；零点的指数权重都是1。有限例子对所有实t存在；一般MGF需要零点附近开区间内有限，$M(0)=1$只是必要检查。

| 目标 | 教学与示范 | 独立证据 | 反馈与新重试 |
| --- | --- | --- | --- |
| 从概率分布建立MGF | `#meaning`、`#example`权重表 | `#task-a`含负值三点分布 | `#retry-a`换成反向读取函数、恢复概率并求矩 |
| 用零点导数求矩和方差 | `#moments`、完整示范直接复核 | `#task-a`均值、二阶矩、方差 | 回到导数与方差区别；`#retry-a`新支撑集 |
| 推出并使用仿射性质 | `#transform`从定义推导 | `#task-b`负系数变换、均值方差检查 | `#retry-b`把新变量写回原变量后重算 |
| 识别独立和与同一变量重复 | `#sums`联合概率因式分解，数值二点反例 | `#task-c`比较两种构造 | `#retry-c`新二点构造，比较函数和方差 |
| 稍后混合提取 | `#later-review`反向识别支撑、变换、独立性 | 闭卷新任务与单独提示/解答 | 根据错误回到上述具体段落，不以看完答案算掌握 |

样章入口为独立的FM04统计目录，明确只有起步页可学；不改变FM03纯数入口或将MA04标作高等统计。复用共享reading布局、worked-example和lesson-check，不新增CSS或依赖。中英文题干、数据、条件、数学推理和帮助对齐。

## 验收状态

设计与实际资料阅读已完成。正文、独立审查、构建和页面阅读检查待完成。学生尚未试用；不主张学习效果或全课程覆盖。MA03/MA04发布范围仍等待用户澄清，FM04仅授权本地制作。
