---
layout: subjects
title: "Units, area and volume"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/units-area-and-volume/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## Are you measuring a boundary, a surface or a space? {#start}

Paint covers a surface; water fills a space; a fence follows a boundary. The same object can therefore require different calculations. Begin by saying what quantity is wanted and what unit should describe it.

You need multiplication, division, [fractions](/igcse/mathematics/fractions-decimals-and-percentages/#change-form) and simple shapes. Squares and roots are used for sloping lengths; see [Pythagoras](/igcse/mathematics/pythagoras-and-trigonometry/#right-triangles) when that step appears. Start with solids, views, units and plane areas, then connect constant-cross-section volumes with curved solids, frustums, similar areas/volumes and sectors.

All examples, data and tasks are self-written teaching constructions, not measured datasets or official mark allocations.
{:.lesson-meta}

## What makes a solid? {#solids}

A **face** is flat; a **curved surface** is not. An **edge** is where surfaces meet; a **vertex** is a corner or pointed apex. We will explicitly distinguish flat faces from curved surfaces. For circular solids, “circular edge” means the circular boundary where the flat and curved surfaces meet, not a straight line segment.

A cube has six square faces, twelve edges and eight vertices. Count an edge only once even if two faces meet there. A cuboid has the same counts, but its faces are rectangles and its three dimensions need not be equal.

A **prism** repeats the same cross-section along its length, with two congruent parallel ends. A **right triangular prism** has two triangular ends and three rectangular side faces: its joining edges are perpendicular to the end planes. A general prism can have parallelogram side faces. A **pyramid** has one polygon base and triangular side faces meeting at one apex. A cylinder has two circular flat ends and one curved surface; a cone has one circular base and a curved surface ending at an apex. A sphere has one continuous curved surface, no flat faces, no edges and no vertices.

![Two unlabelled solids for the task: solid A is drawn with two triangular ends and connecting edges; solid B has a quadrilateral base and edges meeting at one apex. Hidden edges are dashed.](/assets/img/igcse-geometry-calculation-solids.svg)

## Work independently as you go {#practice}

<div class="lesson-check" markdown="1">

### Read the solids {#check-solids}

**Question:** In the diagram, A is a right prism and B has a square base. Name solids A and B. For each give the number of flat faces, edges and vertices, explaining how you counted the hidden parts. Also state the numbers of flat faces, curved surfaces, circular edges and vertices of a cylinder, a cone and a sphere. How do a cube's faces differ from a general cuboid's?

<details markdown="1">
<summary>Hint</summary>

Count the two ends of A separately; count B's base as well as its side faces.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A is a right triangular prism: 5 flat faces (2 triangles + 3 rectangles), 9 edges (3 on each end + 3 joining), 6 vertices (3 on each end). B is a square-based pyramid: 5 flat faces (base + 4 triangles), 8 edges (4 base + 4 to apex), 5 vertices (4 base + apex). Dashed edges still count. A square base alone does not tell us that B's apex is vertically above its centre.

Cylinder: 2 flat, 1 curved, 2 circular edges, 0 vertices. Cone: 1 flat, 1 curved, 1 circular edge, 1 vertex. Sphere: 0 flat, 1 curved, 0 edges, 0 vertices. A cube's six faces are congruent squares; a general cuboid has three pairs of congruent rectangles. Do not count a sphere's visible outline as an edge: no surfaces meet there.

</details>

</div>

## Look from above or from one side {#views}

A **plan** looks vertically down: keep horizontal positions and discard height. An **elevation** looks horizontally from a stated direction: keep width and visible maximum height, not the total number of cubes along the viewing direction. Draw on a unit grid using straight lines, not perspective sloping lines.

For example, two rows of cube-stack heights, back row (1,2) and front row (2,1), occupy four ground cells. The front elevation has heights (2,2), because the taller stack in each front-to-back line hides the shorter one. The total number of cubes is $1+2+2+1=6$, not the elevation's four visible squares.

The next height map gives **data**, not a finished elevation. Each number is the number of unit cubes in that stack; 0 means no stack. The FRONT and RIGHT arrows fix the directions.

![Height map, back row left to right 1,2,0; front row 2,1,1. FRONT is below the map looking upward; RIGHT is at the right looking left.](/assets/img/igcse-geometry-calculation-views.svg)

<div class="lesson-check" markdown="1">

### Construct three views {#check-views}

**Question:** Using the height map, draw the plan, front elevation and right elevation on unit grids. For the right elevation put the front row on the left of your drawing and the back row on the right. Count the cubes. Would increasing the back-left stack from 1 to 2 change either elevation? Explain.

<details markdown="1">
<summary>Hint</summary>

Plan: mark occupied ground cells. Elevation: compare stacks on each line of sight.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Plan: all three front cells and the first two back cells are occupied; the back-right cell is blank. Front elevation heights left-to-right are (2,2,1). Right elevation heights in the requested front-to-back order are (2,2). There are $1+2+0+2+1+1=7$ cubes. Raising the back-left stack gives 8 cubes but neither elevation changes: each relevant maximum was already 2. Views can hide information; do not claim an exact cube count from elevations alone.

</details>

</div>

## A smaller unit needs more of them {#units}

A metre contains 100 centimetres. A **square metre** is a 100 cm by 100 cm square, so it contains $100^2=10000$ square centimetres. A cubic metre contains $100^3=1000000$ cubic centimetres. Do not use the length conversion factor for an area or volume.

Useful equalities are $1\text{ km}=1000\text{ m}$, $1\text{ m}=100\text{ cm}=1000\text{ mm}$; $1\text{ kg}=1000\text{ g}$ and $1\text{ g}=1000\text{ mg}$. Capacity counts the same space as volume: $1\text{ litre}=1000\text{ cm}^3=1000\text{ ml}$ and $1\text{ ml}=1\text{ cm}^3$. Consequently $1\text{ m}^3=1000\text{ litres}$.

For example, $0.4\text{ m}^2=0.4\times10000=4000\text{ cm}^2$, whereas $0.4\text{ m}^3=400000\text{ cm}^3=400\text{ litres}$. The numerical factors differ because the quantities differ.

Time is not decimal: $1\text{ h}=60\text{ min}=3600\text{ s}$. 21:35 is 9:35 pm; 00:05 is 12:05 am. Noon is 12:00 pm and midnight is 12:00 am. When a journey crosses midnight, finish the first day and then add the next day's minutes. Money uses the currency's named subdivision; here 100 cents = 1 dollar. Keep two decimal places for an amount paid in dollars and cents.

<div class="lesson-check" markdown="1">

### Keep the kind of quantity {#check-units}

**Question:** Convert (a) 2.5 m to mm, (b) 0.06 m² to cm², (c) 0.003 m³ to litres and ml, (d) 450000 mg to kg, (e) 1.2 km² to m². Express 9:35 pm and 12:05 am in 24-hour notation, then find the elapsed time from the first to the second on the next day. A bill is USD 18.75 paid with USD 20: find the change in dollars and cents.

<details markdown="1">
<summary>Hint</summary>

Write the unit equality first. For area, square the length factor.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) 2500 mm; (b) $0.06\times10000=600\text{ cm}^2$; (c) 3 litres = 3000 ml; (d) 450 g = 0.45 kg; (e) $1.2\times1000^2=1200000\text{ m}^2$. Times: 21:35 and 00:05; 145 minutes to midnight plus 5 gives 150 minutes = 2 h 30 min = 2.5 h. Change is USD 1.25 = 125 cents. The clock display 2:30 represents 2.5 hours, not 2.30 hours.

</details>

</div>

## “Per” tells you what to divide by {#rates}

Speed is distance per unit time; density is mass per unit volume:

$$v=\frac{d}{t},\qquad \rho=\frac{m}{V}.$$

Match units before dividing. To convert 72 km/h, write $72000/3600=20\text{ m/s}$; both numerator and denominator change. For density, $1\text{ g/cm}^3=1000\text{ kg/m}^3$, because $0.001\text{ kg}/0.000001\text{ m}^3=1000\text{ kg/m}^3$.

<div class="worked-example" markdown="1">

### Time, speed and cost in one journey {#example-rates}

**Question:** A journey of 54 km starts at 23:40 and ends at 00:25 next day. Find its average speed in km/h and m/s. The fare is USD 0.40 per km with no other charge. Find the fare.

There are 20 minutes to midnight and 25 after it: 45 minutes, or $45/60=0.75\text{ h}$. Average speed uses the whole distance and the whole time:

$$v=54/0.75=72\text{ km/h}=20\text{ m/s}.$$

The fare is $54\times0.40=21.60$ dollars. This is a constructed tariff, not a real company's current price. For a separate density calculation, a 2.4 kg sample occupying 3000 cm³ has $m=2400\text{ g}$, so $\rho=2400/3000=0.8\text{ g/cm}^3=800\text{ kg/m}^3$. Density uses mass, not weight in newtons.

</div>

<div class="lesson-check" markdown="1">

### Use the units to explain {#check-rates}

**Question:** (a) A vehicle travels 150 km in 2 h 30 min. Find its average speed in km/h and m/s. (b) A material has density 2.7 g/cm³ and volume 200 cm³. Find its mass in kg; then find the volume in cm³ of 1.35 kg of the same material. (c) At the stated teaching exchange rate EUR 1 = USD 1.20, an item costs EUR 15. Find the USD cost and change from USD 20.

<details markdown="1">
<summary>Hint</summary>

Rearrange the defining ratio instead of guessing multiplication or division.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) $150/2.5=60\text{ km/h}$; $60000/3600=16.7\text{ m/s}$ to 3 significant figures. (b) $m=\rho V=2.7(200)=540\text{ g}=0.54\text{ kg}$; $V=m/\rho=1350/2.7=500\text{ cm}^3$. (c) $15(1.20)=18.00$ USD, change USD 2.00. A higher density at the same volume means greater mass; multiplying mass by density would have the wrong units for volume.

</details>

</div>

## Build area by cutting and rearranging {#flat-shapes}

A rectangle has area length × width. A parallelogram can be cut at one end and moved into a rectangle, so its area is **base × perpendicular height**, not base × sloping side. A triangle is half a parallelogram with the same base and height.

Two matching trapezia can form a parallelogram whose base is the sum of their parallel sides a and b. Thus

$$A_{\text{triangle}}=\tfrac12 bh,\qquad
A_{\text{parallelogram}}=bh,\qquad
A_{\text{trapezium}}=\tfrac12(a+b)h.$$

For a circle of radius r and diameter $d=2r$,

$$C=2\pi r=\pi d,\qquad A=\pi r^2.$$

Circumference is a length; area counts square units. Leave $\pi$ in an exact answer unless a decimal approximation is asked for.

A composite shape can be split into pieces with no gaps or overlaps, or completed and the missing piece subtracted. Its perimeter follows only the outside boundary, not the cuts you invented.

<div class="worked-example" markdown="1">

### Cut out a corner {#example-flat}

**Question:** An 8 cm by 6 cm rectangle loses a 2 cm by 3 cm rectangle from its top-right corner. Find the remaining area and perimeter.

The whole area is 48 and the missing area is 6, giving $48-6=42\text{ cm}^2$. For the perimeter, sketch the six boundary segments. Starting at the bottom-left and going anticlockwise along the bottom, their lengths are 8,3,2,3,6,6:

$$P=8+3+2+3+6+6=28\text{ cm}.$$

The removed outer segments (2 and 3) have been replaced by inner segments of the same lengths. The perimeter has not fallen with the area. This works for this corner cut, not for every cut-out shape.

</div>

The next diagram has a rectangle and a semicircle attached along a shared diameter. The dashed join lies inside the final shape.

![Rectangle 6 cm long and 4 cm high with a semicircle attached on the right along its 4 cm diameter. The shared diameter is dashed.](/assets/img/igcse-geometry-calculation-composite.svg)

<div class="lesson-check" markdown="1">

### Choose the boundary and the height {#check-flat}

**Question:** (a) A triangle has base 6 cm and perpendicular height 4 cm. A parallelogram has base 7 cm, sloping side 5 cm and perpendicular height 3 cm. A trapezium has parallel sides 4 cm and 10 cm and perpendicular height 3 cm. Find their areas, explaining which lengths you used. (b) Find the exact area and perimeter of the rectangle-and-semicircle diagram.

<details markdown="1">
<summary>Hint</summary>

Do not include the shared diameter in the outside perimeter.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) Areas are $\frac12(6)(4)=12\text{ cm}^2$, $7(3)=21\text{ cm}^2$, and $\frac12(4+10)(3)=21\text{ cm}^2$. The 5 cm sloping side is not the perpendicular height. (b) Radius $=4/2=2\text{ cm}$. Area $=6(4)+\frac12\pi(2^2)=24+2\pi\text{ cm}^2$. Outside perimeter $=6+6+4+\pi(2)=16+2\pi\text{ cm}$. Counting the dashed diameter adds an internal segment that is not on the boundary.

</details>

</div>

## Stack equal cross-sections {#prisms}

If a solid has constant cross-section area A throughout perpendicular length h, its volume is

$$V=Ah.$$

Think of equal thin layers filling the same area at each step. This works for cuboids, prisms and cylinders; not for a cone or pyramid that narrows towards an apex. A cylinder has $A=\pi r^2$, hence $V=\pi r^2h$.

Surface area counts the exposed faces. A closed cuboid has $2(lw+lh+wh)$. A closed cylinder has two circles plus the curved rectangle obtained by unrolling its side:

$$S_{\text{cylinder}}=2\pi r^2+2\pi rh.$$

The rectangle is h high and one circumference long. If there is no lid, remove one circular area; do not change the volume formula.

<div class="worked-example" markdown="1">

### A triangular prism {#example-prism}

**Question:** A closed right prism is 8 cm long. Its cross-section is a right triangle with sides 3,4,5 cm. Find volume and surface area.

The cross-section area is $\frac12(3)(4)=6\text{ cm}^2$, so $V=6(8)=48\text{ cm}^3$. For the outside, count two triangular ends and three rectangles:

$$S=2(6)+8(3)+8(4)+8(5)=108\text{ cm}^2.$$

Equivalently, side area is length × cross-section perimeter. Volume uses cross-section **area**; side surface area uses its **perimeter**.

</div>

<div class="lesson-check" markdown="1">

### What is exposed? {#check-prism}

**Question:** (a) A closed right triangular prism has cross-section sides 5,12,13 cm (5 and 12 are perpendicular) and length 10 cm. Find volume and surface area. (b) An open cylindrical container has internal radius 2 cm and depth 5 cm. Ignoring wall thickness, find capacity in cm³ and ml, and area of material (base and curved side only).

<details markdown="1">
<summary>Hint</summary>

List the faces before adding their areas.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) Cross-section $=\frac12(5)(12)=30\text{ cm}^2$. Volume $=30(10)=300\text{ cm}^3$; surface $=2(30)+10(5+12+13)=360\text{ cm}^2$. (b) Capacity $=\pi(2^2)(5)=20\pi\text{ cm}^3=20\pi\text{ ml}$. Material $=\pi(2^2)+2\pi(2)(5)=24\pi\text{ cm}^2$. Adding a top circle describes a closed container, not this open one.

</details>

</div>

## Shapes that taper or curve {#solids-extension}

A pyramid with base area A and **perpendicular** height h has $V=\frac13Ah$. For a cone, the base is a circle. Its slant height l belongs to its surface, not to its perpendicular volume height:

$$V_{\text{cone}}=\tfrac13\pi r^2h,\qquad
S_{\text{cone, closed}}=\pi rl+\pi r^2.$$

For a right circular cone, $l=\sqrt{h^2+r^2}$. The curved surface opens into a sector: its arc is the base circumference $2\pi r$ and its radius is l, giving curved area $\frac12(2\pi r)l=\pi rl$. A pyramid's lateral area is the sum of its triangular face areas. In a right square pyramid of base side s, each triangular face has base s and slant height $\sqrt{h^2+(s/2)^2}$. Do not use the apex-to-corner edge as that face's perpendicular height.

For a sphere:

$$V_{\text{sphere}}=\tfrac43\pi r^3,\qquad S_{\text{sphere}}=4\pi r^2.$$

A hemisphere has half the sphere's volume and half its curved area. If its flat circular base is also exposed, add $\pi r^2$, making total area $3\pi r^2$.

<div class="worked-example" markdown="1">

### Join solids without counting the join twice {#example-composite}

**Question:** A hemisphere of radius 2 cm sits on a cylinder of radius 2 cm and height 5 cm, with their circular faces joined. Find the volume and the total external surface area of the closed solid.

The two volumes occupy different spaces, so add them:

$$V=\pi(2^2)(5)+\tfrac23\pi(2^3)=20\pi+\tfrac{16}3\pi=\tfrac{76}3\pi\text{ cm}^3.$$

The join is internal. Outside there is the curved cylinder, the curved hemisphere and one bottom circle:

$$S=2\pi(2)(5)+2\pi(2^2)+\pi(2^2)=32\pi\text{ cm}^2.$$

Adding both complete surface areas would count the joined circle twice. The solid's total height is 7 cm, but the cylinder height in its own formula remains 5 cm.

</div>

<div class="lesson-check" markdown="1">

### Choose the surfaces {#check-composite}

**Question:** Find exact volume and total external surface area for each closed object: (a) sphere radius 3 cm; (b) right square pyramid with base side 6 cm and perpendicular height 4 cm; (c) right circular cone radius 3 cm and perpendicular height 4 cm; (d) cylinder radius 3 cm and height 4 cm joined to a hemisphere of radius 3 cm at one end. Include sketches showing the lengths and exposed surfaces.

<details markdown="1">
<summary>Hint</summary>

Find slant heights for the cone and pyramid; don't paint internal joins.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) $V=\frac43\pi(3^3)=36\pi\text{ cm}^3$, $S=4\pi(3^2)=36\pi\text{ cm}^2$: the equal numerical coefficients do not make the units equal.

(b) Face slant height $\sqrt{4^2+3^2}=5$. $V=\frac13(6^2)(4)=48\text{ cm}^3$; $S=6^2+4[\frac12(6)(5)]=96\text{ cm}^2$.

(c) Slant height 5; $V=\frac13\pi(3^2)(4)=12\pi\text{ cm}^3$; $S=\pi(3)(5)+\pi(3^2)=24\pi\text{ cm}^2$.

(d) $V=36\pi+18\pi=54\pi\text{ cm}^3$; external $S=24\pi+18\pi+9\pi=51\pi\text{ cm}^2$. Your sketch must exclude the common circle and include the cylinder's bottom. A cone's slant height is not its volume height.

</details>

</div>

## A frustum is what remains after a parallel cut {#frustums}

A cut parallel to the base removes a smaller **similar** cone or pyramid. The remaining lower part is a **frustum**. Volume is whole minus removed part. Surface area needs a fresh list of exposed surfaces: the new top is now exposed. Subtracting complete surface areas blindly will not give the right list.

<div class="worked-example" markdown="1">

### A cone frustum {#example-cone-frustum}

**Question:** A right cone has radius 6 cm and perpendicular height 8 cm. A parallel cut removes a smaller cone with radius 3 cm. Find the remaining frustum's volume and total surface area.

The radius ratio is $3/6=1/2$, so the small cone's height is 4 and its slant height is half the full cone's. The full slant height is $\sqrt{6^2+8^2}=10$; the small one is 5.

$$V=\tfrac13\pi(6^2)(8)-\tfrac13\pi(3^2)(4)=96\pi-12\pi=84\pi\text{ cm}^3.$$

The curved area is the difference of curved areas. Add the two exposed circular ends:

$$S=[\pi(6)(10)-\pi(3)(5)]+\pi(6^2)+\pi(3^2)=90\pi\text{ cm}^2.$$

The frustum's perpendicular height is $8-4=4$, and its slant height is $10-5=5$. These are different lengths.

</div>

<div class="worked-example" markdown="1">

### A pyramid frustum {#example-pyramid-frustum}

**Question:** A right square pyramid has base side 12 cm and height 8 cm. Remove the similar top pyramid whose base side is 6 cm. Find the frustum's volume and total surface area.

The length scale is again $1/2$, so the small height is 4. Full face slant height $=\sqrt{8^2+6^2}=10$; small face slant height = 5.

$$V=\tfrac13(12^2)(8)-\tfrac13(6^2)(4)=384-48=336\text{ cm}^3.$$

Four full triangular side faces have area $4[\frac12(12)(10)]=240$. The four small ones have area 60. Their difference is the frustum's four trapezium faces. Add bottom and top:

$$S=(240-60)+12^2+6^2=360\text{ cm}^2.$$

A direct check uses each trapezium's parallel sides 12 and 6 and **face** height $10-5=5$: $4[\frac12(12+6)(5)]=180$, the same lateral area. Using the vertical frustum height 4 would undercount the sloping face area.

</div>

<div class="lesson-check" markdown="1">

### Recover the missing whole {#check-frustums}

**Question:** (a) A right cone frustum has bottom radius 4 cm, top radius 2 cm and perpendicular height 3 cm. Reconstruct the full cone and find exact volume and total surface area. (b) A right square-pyramid frustum has bottom side 8 cm, top side 4 cm and perpendicular height 3 cm. Do the same. The top and bottom planes are parallel in both.

<details markdown="1">
<summary>Hint</summary>

Similarity relates full height to removed height; their difference is the given 3 cm.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Both have small/full length ratio $1/2$. If full height is H, then $H-H/2=3$, so $H=6$ and small height = 3.

(a) Full slant height $=\sqrt{6^2+4^2}=2\sqrt{13}$, small slant height $=\sqrt{13}$. $V=\frac13\pi(4^2)(6)-\frac13\pi(2^2)(3)=28\pi\text{ cm}^3$. Curved area is $\pi(4)(2\sqrt{13})-\pi(2)(\sqrt{13})=6\pi\sqrt{13}$. Add caps: $S=(20+6\sqrt{13})\pi\text{ cm}^2$.

(b) Full and small face slant heights are $2\sqrt{13}$ and $\sqrt{13}$. $V=\frac13(8^2)(6)-\frac13(4^2)(3)=112\text{ cm}^3$. Lateral area $=4[\frac12(8+4)\sqrt{13}]=24\sqrt{13}$, so $S=80+24\sqrt{13}\text{ cm}^2$. A sketch should show the removed apex above the top plane, not inside the 3 cm frustum.

</details>

</div>

## Similar lengths do not give the same area ratio {#scaling}

If all lengths scale by k, two perpendicular lengths in an area each gain k, so area gains $k^2$. Three dimensions in a volume each gain k, so volume gains $k^3$. These relations need **similar** figures or solids; doubling just one dimension is not a similarity enlargement.

For instance, if two similar solids have corresponding lengths in ratio $3:5$, their areas are in ratio $9:25$ and volumes in ratio $27:125$. To recover a length ratio from area, take its square root; from volume, take its cube root. Keep the direction of “larger divided by smaller” consistent.

<div class="lesson-check" markdown="1">

### Recover a scale from area {#check-scale}

**Question:** Two cubes have total surface areas 54 cm² and 96 cm². The smaller cube has volume 27 cm³ and edge length 3 cm. Use the area ratio to find the length scale factor, then find the larger volume and edge length, explaining both powers.

<details markdown="1">
<summary>Hint</summary>

First find the length factor, not the volume factor.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Area factor $96/54=16/9$, so length factor $k=4/3$. The larger edge is $3(4/3)=4\text{ cm}$. Volume factor is $k^3=64/27$, so larger volume $=27(64/27)=64\text{ cm}^3$. Multiplying 27 by $16/9$ applies an area factor to a volume. Check the actual cubes: $6(3^2)=54$, $3^3=27$, $6(4^2)=96$ and $4^3=64$.

</details>

</div>

## A sector is a share of a full turn {#sectors}

A sector is bounded by two radii and the arc between them. An angle $\theta$ degrees at the centre occupies $\theta/360$ of a whole circle, so

$$
L_{\text{arc}}=\frac{\theta}{360}(2\pi r),
\qquad A_{\text{sector}}=\frac{\theta}{360}(\pi r^2).
$$

The arc length alone is not the sector's perimeter: add the two radii. A sector is not the same as a segment cut off by a chord.

<div class="worked-example" markdown="1">

### One third of a circle {#example-sector}

**Question:** A sector has radius 6 cm and central angle 120°. Find its exact arc length, area and perimeter.

The fraction is $120/360=1/3$. Arc length $=(1/3)(12\pi)=4\pi\text{ cm}$; area $=(1/3)(36\pi)=12\pi\text{ cm}^2$; perimeter $=12+4\pi\text{ cm}$. The same fraction applies to arc and area, but their units differ. To find an unknown angle, divide the given arc by the full circumference (or given area by the full disk area), then multiply by 360°.

</div>

<div class="lesson-check" markdown="1">

### An angle and a reverse question {#check-sector}

**Question:** (a) A sector has radius 8 cm and angle 135°. Find its exact arc length and area. (b) Another sector has radius 9 cm and arc length $3\pi$ cm. Find its central angle, area and perimeter. Sketch both sectors and label the radii.

<details markdown="1">
<summary>Hint</summary>

Compare the given length to the whole circumference.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) Fraction $135/360=3/8$. Arc $=(3/8)(16\pi)=6\pi\text{ cm}$, area $=(3/8)(64\pi)=24\pi\text{ cm}^2$. (b) Fraction $3\pi/(18\pi)=1/6$; angle $=60^\circ$. Area $=(1/6)(81\pi)=\frac{27}2\pi\text{ cm}^2$; perimeter $=18+3\pi\text{ cm}$. Your arc should join the far ends of the radii; the straight chord between them is not that arc.

</details>

</div>

## Find the error, then close the old answer {#retry}

Use the error to choose a repair. Counts or shapes: [solids](#solids); hidden stacks: [views](#views); powers of units or clocks: [units](#units); multiplication/division choice: [rates](#rates); sloping heights or internal boundaries: [plane area](#flat-shapes); exposed faces: [prisms](#prisms) or [curved solids](#solids-extension); removed tops: [frustums](#frustums); wrong scaling power: [similarity](#scaling); arc mistaken for perimeter: [sectors](#sectors).

Close earlier solutions and attempt the matching new task. Record the error and whether you needed a hint, not only the corrected number.

<div class="lesson-check" markdown="1">

### A new solid and a new view {#retry-views}

**Question:** A right pentagonal prism has pentagon ends. Count its flat faces, edges and vertices and explain. A new cube-height map has back row (0,1,2) and front row (1,2,1), from left to right. Draw its plan and front elevation, then its right elevation with front row shown on the left. Count its cubes.

<details markdown="1">
<summary>Hint</summary>

Each end contributes five vertices; join corresponding vertices. For the views use occupied cells and maxima.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The prism has 7 flat faces (2 pentagons + 5 rectangles), 15 edges (5+5+5), 10 vertices. The plan occupies the last two back cells and all three front cells. Front heights are (1,2,2); right heights in front-to-back order are (2,2). Cube count $=0+1+2+1+2+1=7$. The pentagonal ends are flat, not curved because they have more than four sides.

</details>

</div>

<div class="lesson-check" markdown="1">

### Area, capacity and a clock {#retry-units}

**Question:** Convert 35000 cm² to m², 750 ml to cm³ and litres, and 1.8 kg to mg. A journey runs from 11:50 am to 1:20 pm: write the two times in 24-hour notation and give the duration in minutes and decimal hours. Write 405 cents in dollars.

<details markdown="1">
<summary>Hint</summary>

Do not use a factor of 100 for square centimetres to square metres.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$35000/10000=3.5\text{ m}^2$; 750 ml = 750 cm³ = 0.75 litres; 1.8 kg = 1800000 mg. Times 11:50 and 13:20, duration 90 min = 1.5 h. 405 cents = 4.05 dollars. 1.30 h would mean 1 h 18 min, not 1 h 30 min.

</details>

</div>

<div class="lesson-check" markdown="1">

### Reverse the rate {#retry-rates}

**Question:** At a constant 12 m/s, how far does a runner travel in 2 min 30 s? Give metres and kilometres. A uniform sample has mass 360 g and volume 120 cm³. Find density in g/cm³ and kg/m³. At the stated rate USD 1 = 7.20 units of currency X, convert 54 units of X to USD.

<details markdown="1">
<summary>Hint</summary>

Use seconds with m/s. To undo a currency conversion, reverse the operation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Time = 150 s; distance $=12(150)=1800\text{ m}=1.8\text{ km}$. Density $=360/120=3\text{ g/cm}^3=3000\text{ kg/m}^3$. Currency amount $=54/7.20=7.50$ USD. Multiplying 54 by 7.20 would convert in the wrong direction.

</details>

</div>

<div class="lesson-check" markdown="1">

### Draw a different cut {#retry-flat}

**Question:** A 10 cm by 6 cm rectangle has a 4 cm by 2 cm rectangular notch removed from the middle of its top edge, not from a corner. Draw it and find area and perimeter. Also find the area of a trapezium with parallel sides 5 cm and 9 cm and perpendicular height 4 cm.

<details markdown="1">
<summary>Hint</summary>

Trace the notch's two extra vertical boundaries.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Area $=60-8=52\text{ cm}^2$. Perimeter $=2(10+6)+2(2)=36\text{ cm}$. The removed horizontal 4 cm is replaced by a horizontal 4 cm notch floor, and two new 2 cm sides increase the perimeter. Trapezium area $=\frac12(5+9)(4)=28\text{ cm}^2$. This explains why the earlier corner-cut perimeter result is not a rule for all cut-outs.

</details>

</div>

<div class="lesson-check" markdown="1">

### Capacity and material {#retry-prism}

**Question:** A rectangular box is 8 cm long, 5 cm wide and 3 cm deep, with no lid. Ignoring wall thickness, find its capacity in ml and the area of material. Then find the volume of a prism whose trapezium cross-section has parallel sides 3 cm and 7 cm, perpendicular separation 4 cm, and prism length 9 cm.

<details markdown="1">
<summary>Hint</summary>

One base and four sides; for the other prism find the cross-section first.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Box capacity $=8(5)(3)=120\text{ cm}^3=120\text{ ml}$. Material $=8(5)+2(8)(3)+2(5)(3)=118\text{ cm}^2$. Cross-section $=\frac12(3+7)(4)=20\text{ cm}^2$, so prism volume $=20(9)=180\text{ cm}^3$. The prism length 9 is not the trapezium's height 4.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recheck the exposed faces {#retry-solids}

**Question:** (a) Find volume and total surface area of a closed hemisphere radius 2 cm. (b) Do the same for a cone with radius 5 cm and perpendicular height 12 cm. (c) A full right square pyramid has base side 8 cm, height 3 cm. Find its volume and total surface area. (d) A parallel cut of the cone in (b) removes a similar cone of radius 2.5 cm: find the remaining frustum's volume and total surface area. (e) Make the same parallel halfway cut in the pyramid in (c), leaving a top square of side 4 cm: find the frustum's volume and total surface area.

<details markdown="1">
<summary>Hint</summary>

For each closed object list the caps and curved or sloping surfaces; halved lengths give one eighth volume.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) $V=\frac23\pi(2^3)=\frac{16}3\pi\text{ cm}^3$; $S=3\pi(2^2)=12\pi\text{ cm}^2$. The disk contributes $4\pi$ of that area.

(b) Slant height $=\sqrt{5^2+12^2}=13$; $V=100\pi\text{ cm}^3$, $S=65\pi+25\pi=90\pi\text{ cm}^2$.

(c) Face slant height $=\sqrt{3^2+4^2}=5$; $V=64\text{ cm}^3$, $S=64+4[\frac12(8)(5)]=144\text{ cm}^2$.

(d) Small cone has height 6, slant height 6.5, volume $12.5\pi$. Frustum volume $=87.5\pi\text{ cm}^3$. Curved area $=65\pi-16.25\pi=48.75\pi$; two caps contribute $25\pi+6.25\pi$. Total $S=80\pi\text{ cm}^2$.

(e) Small pyramid has height 1.5, face slant height 2.5, volume 8 and lateral area 20. Frustum volume $=64-8=56\text{ cm}^3$. Lateral area $=80-20=60$; caps $=64+16$, so $S=140\text{ cm}^2$. In both cuts, subtract lateral areas, then add both exposed ends.

</details>

</div>

<div class="lesson-check" markdown="1">

### Start with volume this time {#retry-scale}

**Question:** Two cubes have volumes 64 cm³ and 216 cm³. The smaller has total surface area 96 cm² and edge length 4 cm. Use the volume ratio to find the length scale factor, then find the larger edge length and total surface area.

<details markdown="1">
<summary>Hint</summary>

Take a cube root to recover the length factor.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Volume factor $216/64=27/8$, length factor $k=3/2$. Edge $=4(3/2)=6\text{ cm}$. Area $=96(3/2)^2=216\text{ cm}^2$. Using a square root of the volume ratio gives the wrong length factor. Check the cubes themselves: $4^3=64$, $6(4^2)=96$, $6^3=216$ and $6(6^2)=216$. The larger area and volume share a numerical value but have different units.

</details>

</div>

<div class="lesson-check" markdown="1">

### Start with area {#retry-sector}

**Question:** A sector of radius 10 cm has area $20\pi$ cm². Find its central angle, arc length and perimeter. Explain why the arc and perimeter differ.

<details markdown="1">
<summary>Hint</summary>

Use the share of the full disk first.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Fraction $20\pi/(100\pi)=1/5$. Angle $=72^\circ$, arc $=(1/5)(20\pi)=4\pi\text{ cm}$, perimeter $=20+4\pi\text{ cm}$. The two straight radii add 20 cm to the arc length.

</details>

</div>

## Use these ideas somewhere else {#next-step}

Continue to [triangle calculations](/igcse/mathematics/pythagoras-and-trigonometry/#start), where [3D triangles](/igcse/mathematics/pythagoras-and-trigonometry/#space) connect projections with slant heights. Then study [transformations](/igcse/mathematics/transformations/#start). After another topic, return to the task below and then [mixed geometry review](/igcse/mathematics/mixed-review/#geometry-review).

<div class="lesson-check" markdown="1">

### A later mixed problem {#later-check}

**Question:** A closed cylindrical tank has radius 20 cm and height 50 cm. Water enters at 0.1 litres per second. How long will an empty tank take to fill, to the nearest second? Is it less than 10 minutes? Find the exact external surface area. Ignore pipe openings and wall thickness.

<details markdown="1">
<summary>Hint</summary>

Keep volume, capacity, filling time and surface area as separate quantities.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Volume $=\pi(20^2)(50)=20000\pi\text{ cm}^3=20\pi\text{ litres}$. Time $=20\pi/0.1=200\pi\text{ s}\approx628\text{ s}$. Since $200\pi>600$, it takes more than 10 minutes. Surface area $=2\pi(20^2)+2\pi(20)(50)=2800\pi\text{ cm}^2$. The exact comparison should precede rounding; cm² cannot be converted to litres.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Official scope and the pages actually read</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1: G10–11 [specification PDF 19, printed 20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19); G14–16 [PDF 20, printed 21](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=20); G17–18 [PDF 21, printed 22](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=21). The lesson covers units, plane areas, constant-cross-section volumes, sphere/pyramid/cone/composite/frustum mensuration, similar areas/volumes and sectors. G12 bearings and scale drawings are in the separate construction lesson.

Actual QP/MS reading: Specimen 2018 1C Q25, [QP PDF 21](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=21)/[MS PDF 11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11) for capacity/time; 2C Q10 and Q12, QP PDF 9 and 12/MS PDF 5–6 for units and mass-volume proportion; 1E Q29, QP PDF 28/MS PDF 14 for cone volume; 2E Q26, [QP PDF 23](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=23)/[MS PDF 15](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=15) for cubed length scale. All questions on this page are self-written; no official marks are assigned. The covers identify Specimen 2018, not a 2016 examination sitting. Curved-edge counts are stated using the convention explained in the lesson.

</details>
