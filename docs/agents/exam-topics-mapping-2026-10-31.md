# Academic 与题库扩展映射证据

基准：`origin/main` = `73bb9a1`；任务分支 `codex/academic-exams-expand-20261030`。2026-10-31。仅连接现有讲义，不制作或改写学科内容。

设计：canonical 为题库根目录的 `academic-topics.json`，逐字节复制到 `_data/exam_topics.json`。保留主 `chapter` 和单 `unit`；可选 `chapters` 只放同一单元的真实代码，URL 用逗号连接并编码。`polar-coordinates` 和 `moments` 保持原对象不变。页面有多条映射时在一个轻量组件内分别列链接。

核对资料：本地题库 `dist/data.json`、`dist/mathematics/data.json`、`dist/physics/data.json` 的 `overall` 和物理 `subtopics.overall`，以及下表讲义正文的范围说明、讲解和独立任务。物理只选择讲义声明的 PH01/02/03/04 单元，不把每份试卷中重复列出的先修章节自动扩成新映射；不创建 U5 映射。普数 `M2:M1.4` 是 dist 已有的 MA05 动量先修代码。FS2.2/FS2.3 的边界还核对了 `research-fm04-estimation-pack-2026-10-26.md`，FS2.4 均值检验核对了 `research-fm04-mean-tests-pack-2026-10-26.md`。本轮未重新联网读官方 PDF，也不宣称重新审核既有解答。

结果：128 条映射，127 份不同讲义，254 个中英文页面（包括原有两个试点）。下表每条记录均已检查代码存在、单元一致、中英路径存在及指定锚点存在；内容证据为人工选择的范围与任务概述。代码匹配表示相关题目入口，不表示整章的所有内容都由某一页覆盖。

## as-mathematics

| ID | 现有英文讲义（中文为同一路径加 zh/） | 单元；章节代码 | 范围与任务依据 |
| --- | --- | --- | --- |
| `mathematics-as-algebra` | [Algebra](../../alevel/as-mathematics/algebra.md) | P1; `P1.1` | Exact indices, quadratics, inequalities and independent algebra tasks; scope explicitly P1.1. |
| `mathematics-as-coordinate-geometry` | [Coordinate geometry](../../alevel/as-mathematics/coordinate-geometry.md) | P1; `P1.2` | Line equations, intersections and repeated-root geometry; scope P1.2. |
| `mathematics-as-differentiation` | [Differentiation](../../alevel/as-mathematics/differentiation.md) | P1; `P1.3` | Derivatives, gradients and normals; scope P1.3 and independent checks. |
| `mathematics-as-integration` | [Integration](../../alevel/as-mathematics/integration.md) | P1; `P1.4` | Recovering functions, constants and areas; scope P1.4. |
| `mathematics-as-sequences` | [Sequences and series](../../alevel/as-mathematics/sequences.md) | P1; `P1.5` | Individual terms, sums and limiting totals; scope P1.5. |
| `mathematics-as-circles` | [Circles](../../alevel/as-mathematics/circles.md) | PSM1; `PP1.1` | Circle equations, tangents and normals; MA02 scope PP1.1. |
| `mathematics-as-trigonometry` | [Trigonometry](../../alevel/as-mathematics/trigonometry.md) | PSM1; `PP1.2` | Triangles, radians, sectors, identities and equations; scope PP1.2. |
| `mathematics-as-exponentials-logarithms` | [Exponentials and logarithms](../../alevel/as-mathematics/exponentials-logarithms.md) | PSM1; `PP1.3` | Exponential change, logarithm laws and equations; scope PP1.3. |
| `mathematics-as-probability` | [Further probability](../../alevel/as-mathematics/probability.md) | PSM1; `S1.1` | Events, conditional probability and independence; scope S1.1. |
| `mathematics-as-random-variables` | [Discrete random variables](../../alevel/as-mathematics/random-variables.md) | PSM1; `S1.2` | Probability tables, expectation and variance; scope S1.2. |
| `mathematics-as-binomial` | [Bernoulli and binomial distributions](../../alevel/as-mathematics/binomial.md) | PSM1; `S1.3` | Bernoulli trials and a count of successes; scope S1.3. |
| `mathematics-as-constant-acceleration` | [Constant acceleration](../../alevel/as-mathematics/constant-acceleration.md) | PSM1; `M1.1` | Signed motion, graphs and constant-acceleration models; scope M1.1. |
| `mathematics-as-variable-acceleration` | [Variable acceleration](../../alevel/as-mathematics/variable-acceleration.md) | PSM1; `M1.2` | Integrating acceleration and velocity; scope M1.2. |
| `mathematics-as-forces` | [Forces and Newton’s laws](../../alevel/as-mathematics/forces.md) | PSM1; `M1.3` | Object-specific force diagrams, friction and connected bodies; scope M1.3. |
| `mathematics-as-momentum` | [Momentum and impulse](../../alevel/as-mathematics/momentum.md) | PSM1; `M1.4` | System choice, impulse and signed one-dimensional momentum; scope M1.4. |

## a2-mathematics

| ID | 现有英文讲义（中文为同一路径加 zh/） | 单元；章节代码 | 范围与任务依据 |
| --- | --- | --- | --- |
| `mathematics-a2-algebraic-fractions-and-division` | [Algebraic Fractions and Algebraic Division](../../alevel/a2-mathematics/algebraic-fractions-and-division.md) | P2; `P2.1` | Factorisation, algebraic division and rational simplification; scope P2.1. |
| `mathematics-a2-functions` | [Functions, Composite Functions and Inverse Functions](../../alevel/a2-mathematics/functions.md) | P2; `P2.1` | Domains, ranges, inverse and composite functions; scope P2.1. |
| `mathematics-a2-modulus-and-transformations` | [Modulus Functions and Transformations](../../alevel/a2-mathematics/modulus-and-transformations.md) | P2; `P2.1` | Modulus, graph transformations and valid branches; scope P2.1. |
| `mathematics-a2-partial-fractions` | [Partial Fractions](../../alevel/a2-mathematics/partial-fractions.md) | P2; `P2.1`, `P2.7` | The lesson explicitly teaches decomposition and its use in integration, with tasks in both; scope P2.1/P2.7. |
| `mathematics-a2-binomial-series` | [Binomial Series](../../alevel/a2-mathematics/binomial-series.md) | P2; `P2.2` | Normalising binomial expansions, validity intervals and coefficients; scope P2.2. |
| `mathematics-a2-parametric-equations` | [Parametric Equations](../../alevel/a2-mathematics/parametric-equations.md) | P2; `P2.3`, `P2.6` | Eliminating a parameter, tracing a curve and parametric differentiation; header explicitly P2.3/P2.6. |
| `mathematics-a2-trigonometric-functions-and-formulae` | [Trigonometric Functions and Formulae](../../alevel/a2-mathematics/trigonometric-functions-and-formulae.md) | P2; `P2.4`, `P2.1`, `P2.3` | Reciprocal/inverse graphs, identities and parametric connections are explicitly included in the scope and tasks. |
| `mathematics-a2-exponential-and-logarithmic-functions` | [Exponential and Logarithmic Functions](../../alevel/a2-mathematics/exponential-and-logarithmic-functions.md) | P2; `P2.5`, `P2.1` | Exponential/log models plus taught inverse/composite/graph connections; explicit scope P2.5/P2.1. |
| `mathematics-a2-differentiation` | [Differentiation](../../alevel/a2-mathematics/differentiation.md) | P2; `P2.6` | Product, quotient, chain and implicit differentiation; primary header P2.6. |
| `mathematics-a2-integration` | [Integration — Choosing a Method](../../alevel/a2-mathematics/integration.md) | P2; `P2.7` | Choosing substitution, parts and other integration methods; explicit P2.7. |
| `mathematics-a2-integration-applications` | [Integration — Trigonometric Integrals and Applications](../../alevel/a2-mathematics/integration-applications.md) | P2; `P2.7`, `P2.4` | Trigonometric identities used in integration and volume tasks; explicit scope P2.7/P2.4. |
| `mathematics-a2-differential-equations` | [Differential Equations](../../alevel/a2-mathematics/differential-equations.md) | P2; `P2.8` | Separation, initial conditions and rate modelling; header P2.8. |
| `mathematics-a2-numerical-methods` | [Numerical Methods](../../alevel/a2-mathematics/numerical-methods.md) | P2; `P2.9` | Root brackets, iterations and Newton-Raphson checks; explicit scope P2.9. |
| `mathematics-a2-vectors` | [Vectors](../../alevel/a2-mathematics/vectors.md) | P2; `P2.10` | Vector lines, direction, magnitude, angles and consistent parameters; explicit scope P2.10. |
| `mathematics-a2-statistics-poisson-distribution` | [Poisson distribution: counting events](../../alevel/a2-mathematics/statistics/poisson-distribution.md) | S2; `S2.1` | Counts in fixed intervals, Poisson conditions and changing the mean; explicit S2.1. |
| `mathematics-a2-statistics-continuous-random-variables` | [Continuous random variables: probability as area](../../alevel/a2-mathematics/statistics/continuous-random-variables.md) | S2; `S2.2` | Density normalisation, probabilities, expectation and variance; explicit S2.2. |
| `mathematics-a2-statistics-exponential-distribution` | [Exponential distribution: how long until the next event?](../../alevel/a2-mathematics/statistics/exponential-distribution.md) | S2; `S2.3` | Waiting times, survival probabilities and model conditions; explicit S2.3. |
| `mathematics-a2-statistics-normal-distribution` | [Normal distribution: distance from the mean](../../alevel/a2-mathematics/statistics/normal-distribution.md) | S2; `S2.4` | Standardisation, inverse probabilities and binomial approximation; explicit S2.4. |
| `mathematics-a2-statistics-estimation` | [Estimation: what can one sample tell us?](../../alevel/a2-mathematics/statistics/estimation.md) | S2; `S2.5` | Random samples, estimators, sampling variance and CLT; explicit S2.5. |
| `mathematics-a2-statistics-hypothesis-testing` | [Hypothesis testing: is the result unusual enough?](../../alevel/a2-mathematics/statistics/hypothesis-testing.md) | S2; `S2.6` | Null/alternative, tails and binomial/Poisson decision rules; explicit S2.6. |
| `mathematics-a2-statistics-mean-tests` | [Mean tests: how far is far enough?](../../alevel/a2-mathematics/statistics/mean-tests.md) | S2; `S2.6` | Standard error and one-population mean testing; explicit S2.6. |
| `mathematics-a2-mechanics-mathematical-modelling` | [Mathematical Modelling](../../alevel/a2-mathematics/mechanics/mathematical-modelling.md) | M2; `M2.1` | Assumptions, connected bodies and lifts; explicit M2.1, force algebra is prerequisite use. |
| `mathematics-a2-mechanics-vectors-and-kinematics` | [Vectors and Kinematics](../../alevel/a2-mathematics/mechanics/vectors-and-kinematics.md) | M2; `M2.2` | Position, displacement, variable acceleration and trajectory; explicit M2.2, Newton force equations are a connection. |
| `mathematics-a2-mechanics-forces-equilibrium-and-friction` | [Forces, Equilibrium and Friction](../../alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md) | M2; `M2.3` | Particle equilibrium, friction and contact constraints; explicit M2.3. |
| `mathematics-a2-mechanics-moments-and-rigid-objects` | [Moments and Rigid Objects in Equilibrium](../../alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md) | M2; `M2.3` | Rigid-body moments, support reactions and tipping; explicit M2.3. |
| `mathematics-a2-mechanics-centres-of-mass` | [Centres of Mass](../../alevel/a2-mathematics/mechanics/centres-of-mass.md) | M2; `M2.3` | Discrete/composite centres and gravity, without integration; explicit M2.3. |
| `mathematics-a2-mechanics-newtons-laws-of-motion` | [Newton's Laws of Motion](../../alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md) | M2; `M2.4` | Resultant force, connected-body motion and contact limits; explicit M2.4. |
| `mathematics-a2-mechanics-projectiles` | [Projectiles](../../alevel/a2-mathematics/mechanics/projectiles.md) | M2; `M2.5` | Component equations and projectile conditions; explicit M2.5. |
| `mathematics-a2-mechanics-work-and-energy` | [Work and Energy](../../alevel/a2-mathematics/mechanics/work-and-energy.md) | M2; `M2.6` | Work, energy budgets, power and conservation conditions; explicit M2.6. |
| `mathematics-a2-mechanics-uniform-circular-motion` | [Uniform Circular Motion](../../alevel/a2-mathematics/mechanics/uniform-circular-motion.md) | M2; `M2.7` | Radial acceleration and horizontal/gravitational circular models; explicit M2.7. |
| `mathematics-a2-mechanics-momentum-bridge` | [AS Momentum Bridge — Direction and Energy](../../alevel/a2-mathematics/mechanics/momentum-bridge.md) | M2; `M2:M1.4`, `M2.6` | MA05 prerequisite momentum and energy comparison tasks; dist has the explicit M2:M1.4 prerequisite ID, so both codes stay in M2. |

## as-further-mathematics

| ID | 现有英文讲义（中文为同一路径加 zh/） | 单元；章节代码 | 范围与任务依据 |
| --- | --- | --- | --- |
| `further-math-as-rational-functions` | [Rational functions: graphs and range](../../alevel/as-further-mathematics/rational-functions.md) | FP1; `FP1.1` | Rational forms, asymptotes, intersections and range; explicit FP1.1. |
| `further-math-as-conics-and-loci` | [Conics, loci and tangencies](../../alevel/as-further-mathematics/conics-and-loci.md) | FP1; `FP1.2`, `FP1.1` | Four conics, transformations, intersections and distance loci; explicit FP1.1/FP1.2. |
| `further-math-as-complex-numbers-and-roots` | [Complex numbers, Argand diagrams and roots](../../alevel/as-further-mathematics/complex-numbers-and-roots.md) | FP1; `FP1.3`, `FP1.4` | Complex arithmetic, Argand geometry and new quadratics from old roots; explicit FP1.3/FP1.4. |
| `further-math-as-series` | [Finite sums and infinite-series limits](../../alevel/as-further-mathematics/series.md) | FP1; `FP1.5` | Square/cube sums, differences and infinite-sum limits; explicit FP1.5. |
| `further-math-as-trigonometric-solutions` | [Complete trigonometric solutions](../../alevel/as-further-mathematics/trigonometric-solutions.md) | FP1; `FP1.6` | Complete trigonometric solutions and non-special values; explicit FP1.6. |
| `further-math-as-rates-and-approximations` | [From secants to rates and approximations](../../alevel/as-further-mathematics/rates-and-approximations.md) | FP1; `FP1.7` | Chord-to-tangent limits, connected rates and small changes; explicit FP1.7. |
| `further-math-as-improper-integrals` | [Improper integrals: convergence or divergence](../../alevel/as-further-mathematics/improper-integrals.md) | FP1; `FP1.7` | Singular endpoints, convergence and split integrals; explicit FP1.7. |
| `further-math-as-matrix-algebra` | [Matrix algebra and inverse order](../../alevel/as-further-mathematics/matrix-algebra.md) | FPSM1; `FPP1.1` | Matrix operations, inverses and transformation matrices; scope FPP1.1. |
| `further-math-as-transformations` | [Transformations and affine invariant lines](../../alevel/as-further-mathematics/transformations.md) | FPSM1; `FPP1.1` | Basis images, shear, area and inverse transformations; scope FPP1.1. |
| `further-math-as-linearisation` | [Linearisation, plotting and fitting](../../alevel/as-further-mathematics/linearisation.md) | FPSM1; `FPP1.2` | Linear graphs and interpretation of transformed axes; scope FPP1.2. |
| `further-math-as-numerical-roots` | [Numerical roots with traceable updates](../../alevel/as-further-mathematics/numerical-roots.md) | FPSM1; `FPP1.3` | Root approximation and Newton iterations; scope FPP1.3. |
| `further-math-as-euler-method` | [Euler updates and their limits](../../alevel/as-further-mathematics/euler-method.md) | FPSM1; `FPP1.3` | Repeated Euler slope updates and approximation limits; scope FPP1.3. |
| `further-math-as-bayes` | [Bayes: changing the sample space](../../alevel/as-further-mathematics/bayes.md) | FPSM1; `FS1.1` | Conditional direction, population reconstruction and Bayes; scope FS1.1. |
| `further-math-as-discrete-uniform` | [Discrete uniform probabilities and moments](../../alevel/as-further-mathematics/discrete-uniform.md) | FPSM1; `FS1.2` | Equally likely integer values, mean and variance; scope FS1.2, distinct from continuous uniform. |
| `further-math-as-geometric-distribution` | [Geometric trials and moment derivations](../../alevel/as-further-mathematics/geometric-distribution.md) | FPSM1; `FS1.3` | First-success trials, support, mean and variance; explicit FS1.3. |
| `further-math-as-generating-functions` | [Probability generating functions](../../alevel/as-further-mathematics/generating-functions.md) | FPSM1; `FS1.4` | Probability generating functions, factorial moments and sums; scope FS1.4. |
| `further-math-as-linear-combinations` | [Linear combinations and covariance](../../alevel/as-further-mathematics/linear-combinations.md) | FPSM1; `FS1.5` | Squared variance coefficients, independence and covariance; scope FS1.5. |
| `further-math-as-relative-motion` | [Vectors, interception and closest approach](../../alevel/as-further-mathematics/relative-motion.md) | FPSM1; `FM1.1` | Constant-velocity frames, interception and closest approach; explicit FM1.1, no two-dimensional collisions. |
| `further-math-as-dimensions` | [Dimensions, units and model limits](../../alevel/as-further-mathematics/dimensions.md) | FPSM1; `FM1.2` | Dimensional derivations and their limits; explicit FM1.2. |
| `further-math-as-impulse-and-collisions` | [Variable-force impulse and collisions](../../alevel/as-further-mathematics/impulse-and-collisions.md) | FPSM1; `FM1.3` | One-dimensional collisions, impulse and restitution; explicit FM1.3. |

## a2-further-mathematics

| ID | 现有英文讲义（中文为同一路径加 zh/） | 单元；章节代码 | 范围与任务依据 |
| --- | --- | --- | --- |
| `further-math-a2-roots-and-polynomials` | [Roots and Polynomials](../../alevel/a2-further-mathematics/roots-and-polynomials.md) | FP2; `FP2.1` | Cubic/quartic roots, coefficients and transformed roots; lesson explicitly FP2.1. |
| `further-math-a2-de-moivres-theorem` | [De Moivre's Theorem](../../alevel/a2-further-mathematics/de-moivres-theorem.md) | FP2; `FP2.2` | Powers, roots and trigonometric identities using De Moivre; explicitly FP2.2. |
| `polar-coordinates` | [Polar coordinates](../../alevel/a2-further-mathematics/polar-coordinates.md) | FP2; `FP2.3` | Coordinate/equation conversion, positive-radius sketches, intersections and region integrals; existing pilot, explicitly FP2.3. |
| `further-math-a2-proof-by-induction` | [Proof by Induction](../../alevel/a2-further-mathematics/proof-by-induction.md) | FP2; `FP2.4` | Base case, induction hypothesis and step across series/divisibility/matrices; explicitly FP2.4. |
| `further-math-a2-finite-series` | [Finite Series](../../alevel/a2-further-mathematics/finite-series.md) | FP2; `FP2.5` | Partial fractions and telescoping finite sums; explicitly FP2.5. |
| `further-math-a2-series-and-limits` | [Series and Limits](../../alevel/a2-further-mathematics/series-and-limits.md) | FP2; `FP2.6` | Convergence, power series, limits and approximations; explicitly FP2.6. |
| `further-math-a2-inverse-trigonometric-functions` | [Calculus of Inverse Trigonometric Functions](../../alevel/a2-further-mathematics/inverse-trigonometric-functions.md) | FP2; `FP2.7` | Inverse-trigonometric graphs, derivatives and standard integrals; explicitly FP2.7. |
| `further-math-a2-arc-length-and-surface-area` | [Arc Length and Surface Area](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md) | FP2; `FP2.8` | Cartesian/parametric arc length and surface about x-axis; explicitly FP2.8 with the stated nonnegative-radius scope. |
| `further-math-a2-hyperbolic-functions` | [Hyperbolic Functions](../../alevel/a2-further-mathematics/hyperbolic-functions.md) | FP2; `FP2.9` | Hyperbolic definitions, six graphs, inverses and calculus; explicitly FP2.9. |
| `further-math-a2-first-order-differential-equations` | [First-order Differential Equations](../../alevel/a2-further-mathematics/first-order-differential-equations.md) | FP2; `FP2.10` | Linear first-order equations, integrating factors and conditions; explicitly FP2.10. |
| `further-math-a2-second-order-differential-equations` | [Second-order Differential Equations](../../alevel/a2-further-mathematics/second-order-differential-equations.md) | FP2; `FP2.11` | Auxiliary equation, CF, PI selection/overlap and conditions; explicitly FP2.11. |
| `further-math-a2-vector-products-and-coplanarity` | [Vector Products and Coplanarity](../../alevel/a2-further-mathematics/vector-products-and-coplanarity.md) | FP2; `FP2.12` | Cross/triple products and coplanarity; explicitly FP2.12. |
| `further-math-a2-lines-and-planes` | [Lines and Planes](../../alevel/a2-further-mathematics/lines-and-planes.md) | FP2; `FP2.12` | Spatial line/plane forms, intersections, angles and distances; explicitly FP2.12. |
| `further-math-a2-matrix-algebra` | [Matrix Algebra and Three-dimensional Transformations](../../alevel/a2-further-mathematics/matrix-algebra.md) | FP2; `FP2.13` | Matrix dimensions/order, transformations and inverse conditions; explicitly FP2.13. |
| `further-math-a2-eigenvalues-and-eigenvectors` | [Eigenvalues and Eigenvectors](../../alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md) | FP2; `FP2.13` | Eigenvectors, eigenvalues and invariant directions; explicit FP2.13, not a fabricated eigenvalue chapter. |
| `further-math-a2-linear-equations` | [Linear Equations and Three Planes](../../alevel/a2-further-mathematics/linear-equations.md) | FP2; `FP2.14` | Three-plane systems, ranks/parameters and solution cases; explicitly FP2.14. |
| `further-math-a2-statistics-moment-generating-functions` | [Moment generating functions: find the mean and spread](../../alevel/a2-further-mathematics/statistics/moment-generating-functions.md) | FS2; `FS2.1` | Finite-distribution MGFs, moments and independent sums; explicit FS2.1. |
| `further-math-a2-statistics-standard-mgfs` | [Continuous and standard MGFs: derive and check the range](../../alevel/a2-further-mathematics/statistics/standard-mgfs.md) | FS2; `FS2.1` | Continuous/standard MGFs, existence domains and sums; course FS2.1 route and taught derivations. |
| `further-math-a2-statistics-estimators` | [Estimators: compare rules before choosing](../../alevel/a2-further-mathematics/statistics/estimators.md) | FS2; `FS2.2` | Bias, consistency, efficiency and combined estimator rules; source research confirms FS2.2. |
| `further-math-a2-statistics-confidence-intervals` | [Confidence intervals: put uncertainty around a mean](../../alevel/a2-further-mathematics/statistics/confidence-intervals.md) | FS2; `FS2.3` | Normal/t mean intervals, coverage, inversion and sample-size planning; source research confirms FS2.3. |
| `further-math-a2-statistics-test-power` | [Test power: will the rule detect a change?](../../alevel/a2-further-mathematics/statistics/test-power.md) | FS2; `FS2.4` | Fixed critical rule and misses under a specified alternative; explicit FS2.4 power item. |
| `further-math-a2-statistics-comparing-means` | [Comparing independent means: choose the right uncertainty](../../alevel/a2-further-mathematics/statistics/comparing-means.md) | FS2; `FS2.4` | Independent two-sample z and pooled t testing with conditions; FS2.4 mean-test research. |
| `further-math-a2-statistics-paired-tests` | [Paired tests: one difference from each pair](../../alevel/a2-further-mathematics/statistics/paired-tests.md) | FS2; `FS2.4` | Normal paired differences and a single mean test; FS2.4 paired-test research. |
| `further-math-a2-statistics-variance-tests` | [Variance tests: compare population spread](../../alevel/a2-further-mathematics/statistics/variance-tests.md) | FS2; `FS2.4` | One-variance chi-square and two-variance F tests; further hypothesis testing, not ordinary S2.6. |
| `further-math-a2-statistics-goodness-of-fit` | [Goodness of fit: compare counts with a model](../../alevel/a2-further-mathematics/statistics/goodness-of-fit.md) | FS2; `FS2.4` | Expected frequencies, pooling, fitted parameters and chi-square fit; further hypothesis testing. |
| `further-math-a2-statistics-association-tests` | [Association tests: compare two classifications](../../alevel/a2-further-mathematics/statistics/association-tests.md) | FS2; `FS2.4` | Contingency tables, independence, df and Yates correction; further hypothesis testing. |

## as-physics

| ID | 现有英文讲义（中文为同一路径加 zh/） | 单元；章节代码 | 范围与任务依据 |
| --- | --- | --- | --- |
| `physics-as-measurements-and-uncertainties` | [Measurements and Uncertainties](../../alevel/as-physics/measurements-and-uncertainties.md) | U1; `U1:3.1.1`, `U1:3.1.2`, `U1:3.1.3` | PH01 stated scope 3.1.1-3.1.3; SI, uncertainty and estimation tasks. Do not duplicate onto every paper's synoptic prerequisite list. |
| `moments` | [Moments](../../alevel/as-physics/vectors-and-moments.md#moments) | U1; `U1:3.2.2` | Existing Moments pilot, same stable ID, chapter and moment anchor. |
| `physics-as-scalars-and-vectors` | [Scalars and vectors](../../alevel/as-physics/vectors-and-moments.md#components) | U1; `U1:3.2.1` | Components, vector addition and point equilibrium are taught and independently tested before the moments section. |
| `physics-as-straight-line-motion` | [Straight-line Motion and Uniform Acceleration](../../alevel/as-physics/straight-line-motion.md) | U1; `U1:3.2.3` | PH01 motion graphs, uniform acceleration and RP1; explicit 3.2.3. |
| `physics-as-projectile-motion` | [Projectile Motion](../../alevel/as-physics/projectile-motion.md) | U1; `U1:3.2.4` | PH01 independent components and qualitative resistance; explicit 3.2.4. |
| `physics-as-newtons-laws` | [Newton’s Laws — Choose the Object Before the Equation](../../alevel/as-physics/newtons-laws.md) | U1; `U1:3.2.5` | PH01 force models and Newton laws; explicit 3.2.5. |
| `physics-as-momentum-and-impulse` | [Momentum and Impulse — What Changes Across a Collision?](../../alevel/as-physics/momentum-and-impulse.md) | U1; `U1:3.2.6` | PH01 one-dimensional collisions, explosions and variable-force impulse; explicit 3.2.6. |
| `physics-as-work-energy-power` | [Work, Energy and Power](../../alevel/as-physics/work-energy-power.md) | U1; `U1:3.2.7`, `U1:3.2.8` | Work, power, efficiency and conservation-energy tasks; explicit 3.2.7-3.2.8. |
| `physics-as-materials-and-young-modulus` | [Materials, Elastic Energy and Young Modulus](../../alevel/as-physics/materials-and-young-modulus.md) | U1; `U1:3.2.9`, `U1:3.2.10` | Solid properties, stress/strain, modulus and RP2; explicit 3.2.9-3.2.10. |
| `physics-as-atoms-and-particles` | [Atoms, Nuclei and Antiparticles](../../alevel/as-physics/atoms-and-particles.md) | U1; `U1:3.3.1`, `U1:3.3.2` | Atomic constituents, specific charge and elementary-particle evidence; explicit 3.3.1-3.3.2. |
| `physics-as-radiation-and-safety` | [Radioactivity — Background, Decay and Decisions](../../alevel/as-physics/radiation-and-safety.md) | U1; `U1:3.3.3` | Nuclear changes, detection, background and radiation safety; explicit 3.3.3. |
| `physics-as-charge-current-and-potential` | [Charge, Current and Potential Difference](../../alevel/as-physics/charge-current-and-potential.md) | U2; `U2:3.4.1` | Charge/current/potential ratios and energy per charge; explicit 3.4.1. |
| `physics-as-resistance-and-resistivity` | [Resistance, Characteristics and Resistivity](../../alevel/as-physics/resistance-and-resistivity.md) | U2; `U2:3.4.2`, `U2:3.4.3` | I-V characteristics and geometry/material resistivity; explicit 3.4.2-3.4.3. |
| `physics-as-dc-circuits-and-potential-dividers` | [DC Circuits and Potential Dividers](../../alevel/as-physics/dc-circuits-and-potential-dividers.md) | U2; `U2:3.4.4`, `U2:3.4.5` | Circuit connections, potential dividers, sensors and loading; explicit 3.4.4-3.4.5. |
| `physics-as-emf-and-internal-resistance` | [Cells Under Load — emf, Internal Resistance and RP3](../../alevel/as-physics/emf-and-internal-resistance.md) | U2; `U2:3.4.6` | Energy per charge, emf, internal resistance and RP3 records; explicit 3.4.6. |
| `physics-as-oscillations-and-resonance` | [Oscillations and Resonance](../../alevel/as-physics/oscillations-and-resonance.md) | U2; `U2:3.5.1`, `U2:3.5.2` | Spring/pendulum, free/forced oscillation, resonance and RP4; explicit 3.5.1-3.5.2. |
| `physics-as-progressive-and-stationary-waves` | [Progressive and Stationary Waves](../../alevel/as-physics/progressive-and-stationary-waves.md) | U2; `U2:3.5.3`, `U2:3.5.4`, `U2:3.5.5` | Wave graphs, transverse/longitudinal modes and standing waves; explicit 3.5.3-3.5.5. |
| `physics-as-interference-and-diffraction` | [Interference and Diffraction](../../alevel/as-physics/interference-and-diffraction.md) | U2; `U2:3.5.6`, `U2:3.5.7` | Coherence, double slit, grating and RP5; explicit 3.5.6-3.5.7. |
| `physics-as-refraction-and-optical-fibres` | [Refraction and Optical Fibres](../../alevel/as-physics/refraction-and-optical-fibres.md) | U2; `U2:3.5.8` | Refraction, TIR and fibre pulse limitations; explicit 3.5.8. |
| `physics-as-photons-and-wave-particle-duality` | [Photons and Wave–Particle Duality](../../alevel/as-physics/photons-and-wave-particle-duality.md) | U2; `U2:3.5.9`, `U2:3.5.10`, `U2:3.5.11` | Atomic collisions/levels, photoelectric data and matter waves; explicit 3.5.9-3.5.11. |
| `physics-as-unit-1-review` | [Unit 1: Mixed Review](../../alevel/as-physics/unit-1-review.md) | U1; `U1:3.1.2`, `U1:3.1.3`, `U1:3.2.2`, `U1:3.2.4`, `U1:3.2.6`, `U1:3.2.7`, `U1:3.2.8`, `U1:3.2.9`, `U1:3.2.10`, `U1:3.3.1`, `U1:3.3.2`, `U1:3.3.3` | Task IDs unit1-1 through unit1-8 and unit1-motor directly test estimates, beam moments, projectile, impulse, wire energy/modulus, uncertainty, decay and particles. Only those tested subtopics are selected. |
| `physics-as-unit-2-review` | [Unit 2: Mixed Review](../../alevel/as-physics/unit-2-review.md) | U2; `U2:3.4.2`, `U2:3.4.4`, `U2:3.4.5`, `U2:3.4.6`, `U2:3.5.1`, `U2:3.5.2`, `U2:3.5.3`, `U2:3.5.5`, `U2:3.5.6`, `U2:3.5.7`, `U2:3.5.8`, `U2:3.5.9`, `U2:3.5.10`, `U2:3.5.11` | Task IDs unit2-1 through unit2-8 test cell/circuit/divider, NTC, oscillators, string/grating/slits/fibre and photon/matter-wave evidence. AS prerequisites are not promoted to a second unit mapping. |

## a2-physics

| ID | 现有英文讲义（中文为同一路径加 zh/） | 单元；章节代码 | 范围与任务依据 |
| --- | --- | --- | --- |
| `physics-a2-circular-motion` | [Circular Motion](../../alevel/a2-physics/circular-motion.md) | U3; `U3:3.6.1` | PH03 angular motion, radial acceleration and force equations; explicit 3.6.1. |
| `physics-a2-simple-harmonic-motion` | [Simple Harmonic Motion](../../alevel/a2-physics/simple-harmonic-motion.md) | U3; `U3:3.6.2` | PH03 SHM condition, graphs, phase and energy; explicit 3.6.2. AS damping is a connection, not a second-unit target. |
| `physics-a2-gravitational-fields-and-satellites` | [Gravitational Fields and Satellites](../../alevel/a2-physics/gravitational-fields-and-satellites.md) | U3; `U3:3.7.1`, `U3:3.7.2`, `U3:3.7.3`, `U3:3.7.4` | PH03 force/field/potential plus orbits and satellites; explicit 3.7.1-3.7.4. |
| `physics-a2-electric-fields` | [Electric Fields](../../alevel/a2-physics/electric-fields.md) | U3; `U3:3.8.1`, `U3:3.8.2`, `U3:3.8.3` | PH03 Coulomb force, field strength and potential; explicit 3.8.1-3.8.3, excludes next lesson's capacitance. |
| `physics-a2-capacitance` | [Capacitance](../../alevel/a2-physics/capacitance.md) | U3; `U3:3.8.4` | PH03 capacitance, plate/dielectric models and stored energy; explicitly 3.8.4, resistor transients are next lesson. |
| `physics-a2-capacitor-charge-and-discharge` | [Capacitor Charge and Discharge](../../alevel/a2-physics/capacitor-charge-and-discharge.md) | U3; `U3:3.9.1` | PH03 resistor transients, time constant, logarithms and RP6; explicit 3.9.1. |
| `physics-a2-radioactive-decay` | [Radioactive Decay](../../alevel/a2-physics/radioactive-decay.md) | U3; `U3:3.9.2` | PH03 exponential activity, background-corrected records and half-life; explicitly 3.9.2, excludes PH04 nuclear energy. |
| `physics-a2-magnetic-fields-and-moving-charges` | [Magnetic Fields and Moving Charges](../../alevel/a2-physics/magnetic-fields-and-moving-charges.md) | U3; `U3:3.10.1`, `U3:3.10.2` | PH03 current force, moving charge and selector/orbit models; explicit 3.10.1-3.10.2. |
| `physics-a2-electromagnetic-induction` | [Electromagnetic Induction](../../alevel/a2-physics/electromagnetic-induction.md) | U3; `U3:3.10.3`, `U3:3.10.4` | PH03 flux/linkage and signed Faraday/Lenz changes; explicit 3.10.3-3.10.4. |
| `physics-a2-alternating-current` | [Alternating Current](../../alevel/a2-physics/alternating-current.md) | U3; `U3:3.10.5` | PH03 sinusoidal peak/rms and resistive power; explicit 3.10.5, no impedance extension. |
| `physics-a2-transformers-and-power-transmission` | [Transformers and Power Transmission](../../alevel/a2-physics/transformers-and-power-transmission.md) | U3; `U3:3.10.6` | PH03 common flux, turns/current ratios, transmission and RP7; explicit 3.10.6. |
| `physics-a2-thermal-physics` | [Thermal Physics](../../alevel/a2-physics/thermal-physics.md) | U4; `U4:3.11.1`, `U4:3.11.2`, `U4:3.11.3`, `U4:3.11.4` | The existing lesson explicitly targets PH04 3.11.1-3.11.4 and RP8/9; do not misroute to U2's repeated thermal IDs. |
| `physics-a2-nuclear-radius` | [Nuclear Radius](../../alevel/a2-physics/nuclear-radius.md) | U4; `U4:3.12.1` | PH04 closest approach, radius estimates and electron diffraction; explicit 3.12.1. |
| `physics-a2-mass-and-binding-energy` | [Mass and Binding Energy](../../alevel/a2-physics/mass-and-binding-energy.md) | U4; `U4:3.12.2` | PH04 mass defect, rest energy and binding curve; explicit 3.12.2, reactor/fusion lessons remain absent. |

## 未映射的已有页面与未提供范围

| 页面 | 原因 |
| --- | --- |
| [alevel/as-mathematics/index.md](../../alevel/as-mathematics/index.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/a2-mathematics/index.md](../../alevel/a2-mathematics/index.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/a2-mathematics/mathematical-proof.md](../../alevel/a2-mathematics/mathematical-proof.md) | P2 introduction proof skills have no separate dist syllabus ID; do not substitute the unrelated FP2.4 induction code. |
| [alevel/a2-mathematics/mechanics/quick-reference.md](../../alevel/a2-mathematics/mechanics/quick-reference.md) | Older broad reference notes; retain their existing links to the guided lessons instead of claiming a focused post-practice match. |
| [alevel/a2-mathematics/mechanics.md](../../alevel/a2-mathematics/mechanics.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/a2-mathematics/quick-reference.md](../../alevel/a2-mathematics/quick-reference.md) | Older broad reference notes; retain their existing links to the guided lessons instead of claiming a focused post-practice match. |
| [alevel/a2-mathematics/statistics.md](../../alevel/a2-mathematics/statistics.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/as-further-mathematics/index.md](../../alevel/as-further-mathematics/index.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/a2-further-mathematics/index.md](../../alevel/a2-further-mathematics/index.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/a2-further-mathematics/statistics/index.md](../../alevel/a2-further-mathematics/statistics/index.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/as-physics/index.md](../../alevel/as-physics/index.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/a2-physics/index.md](../../alevel/a2-physics/index.md) | Course entrance / route with embedded legacy notes; individual guided lessons supply the mapped teaching destinations. Existing pilot entrance links remain. |
| [alevel/a2-physics/quick-reference.md](../../alevel/a2-physics/quick-reference.md) | Older broad reference notes; retain their existing links to the guided lessons instead of claiming a focused post-practice match. |

IGCSE 页面对应另一资格，未与 A-level 9660/9665/9630 题库混配。当前 main 没有 FM2 的独立讲义，也没有 PH04 反应堆、裂变／聚变及 3.13 能源的完整独立讲义；本轮不制造页面来补 ID。主 `mathematical-proof` 的直接证明、反证与反例属于普数 P2 引言，没有可单独选择的 dist ID，因此跳过。

## 内容保留与交接验证

每个新入口只在原页面末尾加入 `{% include exam_topic_practice.html %}`；两份原有试点的位置保持不变。原课文、英文题干、来源标签、图片、语言元数据、目录锚点和提示／解答关闭状态不改。课程入口已有试点链接保留，未把一个试点链接机械复制为整个课程的覆盖声明。

夜间约束：不再提权、不请求审批、不发布、不 push、不写生产 DB。本地 Node 源码测试可读取实际 dist 验证所有 codes；Jekyll／真实 Liquid／浏览器若普通权限无法运行，留待明早，不以旧 `_site` 当作新构建。验证结果与待执行命令见 README 的联动开发说明。学生试用和外部草稿持久化端到端验证不在本轮完成声明内。

### 本轮实际检查与冻结

- canonical 与 Academic 数据副本逐字节相同，SHA-256：`3d6a40883ca11c16dc71cd6c0998803e80b3f1b19517238b3ed6474c5a16406a`。向主线程报告冻结后没有再修改 canonical；本轮最终 Academic 源码也已冻结，可审阅未提交差异。
- `test-exam-topic-integration.js --source-only --canonical=… --exam-root=…` 通过：128 条映射、254 个中英文路径、25 条多章项；每个代码均在真实 dist 中存在且单元一致，证据表、稳定试点、语言与锚点、全部反馈关闭和入口在反馈之后均通过。
- 对照 `73bb9a1` 检查 280 个中英文页面：250 页仅追加一行共享 include，其余 30 页原样。去掉新增 include 后，全部原始文本（统一比较 CRLF/LF）逐字一致；包含原有四个试点课页和未映射页面。证据文档 141 个本地链接及指定锚点均存在；`git diff --check` 通过。
- 无需构建的八个既有脚本通过：`test-as-further-calculations.js`（888 项比较及模型断言）、`test-further-retry.js`（11 对）、`test-ma04-calculations.js`、`test-fm04-calculations.js`、`test-accessibility.js`、`test-theme-init.js`、`test-reading-progress.js`、`test-toc-refresh.js`。这些检查各有范围，不冒充新的生成 HTML 或浏览器验收。
- 普通权限执行 `D:/Ruby34-x64/bin/ruby.exe --version` 返回 Windows `-1073741790`，未请求提权。因此本轮新的 Jekyll 构建、真实 Ruby Liquid fixtures 和桌面／手机浏览器检查尚未执行。明早从本克隆设置 `$env:BUNDLE_IGNORE_CONFIG='true'` 后执行 `bundle exec jekyll build --trace`，再运行完整 `node scripts/test-exam-topic-integration.js`，最后按 README 预览多章和同页多映射。旧 `_site` 不作为本扩展验收结果。
