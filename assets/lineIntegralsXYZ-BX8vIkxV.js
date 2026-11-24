import{d as e,f as t,h as n,n as r,p as i,r as a}from"./index-BX9zVO2G.js";import{d as o,f as s,u as c}from"./techniques-2ghdpz7U.js";import{a as l,c as u,d,f,i as p,l as m,n as h,o as g,p as _,r as v,t as y,u as b}from"./polynomial-D7OtKEoC.js";import{c as x,s as S}from"./terms-BZIL_b18.js";import{n as C,t as w}from"./fieldDiagram-BszNFGyr.js";var T=String.raw`
<h2 id="what-they-are">What these integrals measure</h2>
<p>
  The <a href="?topic=line-integrals">line integral with respect to arc length</a>, $\int_C f\,ds$, weights $f$ by
  tiny lengths $ds$ along the curve. Replace $ds$ with $dx$ and you weight $f$ by tiny <em>changes in $x$</em> instead:
</p>
<ul>
  <li>Where the curve moves right, $dx > 0$; where it moves left, $dx < 0$; where it moves straight up or down, $dx = 0$.</li>
  <li>So $\int_C P\,dx$ adds up $P$ times the horizontal motion along $C$, with signs. The same goes for $dy$ and $dz$.</li>
</ul>
<p>
  These usually appear together as $\int_C P\,dx + Q\,dy$, which is shorthand for $\int_C P\,dx + \int_C Q\,dy$.
  In physics, this sum is the <strong>work</strong> done by a force $\langle P, Q \rangle$ moving an object along $C$.
</p>

<h2 id="formula">The formula</h2>
<p>Parametrize $C$ as $x = x(t)$, $y = y(t)$, with $t$ running from $a$ to $b$ <strong>in the direction $C$ is traced</strong>. Then $dx = x'(t)\,dt$ and $dy = y'(t)\,dt$:</p>
<div class="formula">
  $$\int_C P\,dx + Q\,dy = \int_a^b \Big[P\big(x(t), y(t)\big)\,x'(t) + Q\big(x(t), y(t)\big)\,y'(t)\Big]\,dt$$
</div>
<p>In three dimensions, add $R\,dz$ with $dz = z'(t)\,dt$:</p>
$$\int_C P\,dx + Q\,dy + R\,dz = \int_a^b \Big[P\,x'(t) + Q\,y'(t) + R\,z'(t)\Big]\,dt$$
<p>
  Compare with arc length, where $ds = \sqrt{x'(t)^2 + y'(t)^2}\,dt$. Here there is <strong>no square root</strong>,
  just one derivative per differential, which usually makes these integrals easier.
</p>

<h2 id="direction-matters">Direction matters</h2>
<p>
  If $-C$ is the same curve traced in the opposite direction, every $dx$, $dy$, $dz$ flips sign, so the integral flips sign:
</p>
<div class="formula">
  $$\int_{-C} P\,dx + Q\,dy = -\int_C P\,dx + Q\,dy \qquad\text{but}\qquad \int_{-C} f\,ds = \int_C f\,ds$$
</div>
<table>
  <thead><tr><th></th><th>$\int_C f\,ds$</th><th>$\int_C P\,dx + Q\,dy$</th></tr></thead>
  <tbody>
    <tr><td>Weights by</td><td>length, always positive</td><td>change in $x$ and $y$, can be negative</td></tr>
    <tr><td>Reversing $C$</td><td>same answer</td><td>answer changes sign</td></tr>
    <tr><td>Integrand in $t$</td><td>$f\big(\mathbf{r}(t)\big)\,|\mathbf{r}'(t)|$</td><td>$P\,x'(t) + Q\,y'(t)$</td></tr>
  </tbody>
</table>
<p>
  How to set up the parametrization and limits so they follow the direction of $C$ is in
  <a href="#parametrizing-and-bounds">Parametrizing and choosing the bounds</a>, part of the recipe below.
</p>

<h2 id="which-to-use" data-toc="Which line integral to use">Which line integral should I use?</h2>
<p>
  Both kinds integrate along a curve, and both start by parametrizing it, so they're easy to mix up.
  The problem almost always tells you which one it wants. Look for these clues:
</p>
<table>
  <thead><tr><th>Clue</th><th>Use $\int_C f\,ds$ (arc length)</th><th>Use $\int_C P\,dx + Q\,dy$</th></tr></thead>
  <tbody>
    <tr>
      <td>Notation</td>
      <td>$ds$ appears</td>
      <td>$dx$, $dy$, $dz$ appear, or $\int_C \mathbf{F} \cdot d\mathbf{r}$</td>
    </tr>
    <tr>
      <td>What's integrated</td>
      <td>one function $f$</td>
      <td>a separate function attached to each differential ($P$ with $dx$, $Q$ with $dy$)</td>
    </tr>
    <tr>
      <td>What it measures</td>
      <td>mass of a wire, center of mass, average value, area of a curtain, arc length</td>
      <td>work done by a force, flow along a curve</td>
    </tr>
    <tr>
      <td>Direction of $C$</td>
      <td>doesn't matter, even if the problem says "from $A$ to $B$"</td>
      <td>matters: reversing $C$ flips the sign</td>
    </tr>
    <tr>
      <td>Factor in the $t$-integral</td>
      <td>the speed $|\mathbf{r}'(t)|$, with its square root</td>
      <td>the plain derivatives $x'(t)$, $y'(t)$, $z'(t)$</td>
    </tr>
    <tr>
      <td>Sign of the answer</td>
      <td>positive whenever $f > 0$</td>
      <td>can be negative even when $P, Q > 0$</td>
    </tr>
  </tbody>
</table>

<h3>Same curve, same function, different answers</h3>
<p>Let $C$ be the segment from $(0, 0)$ to $(1, 1)$, parametrized as $\mathbf{r}(t) = \langle t, t \rangle$, $0 \le t \le 1$. Integrate $x$ three ways:</p>
$$\begin{aligned} \int_C x\,ds &= \int_0^1 t\,\underbrace{\sqrt{1^2 + 1^2}}_{|\mathbf{r}'(t)|}\,dt = \frac{\sqrt{2}}{2} \approx 0.71 \\ \int_C x\,dx &= \int_0^1 t\,\underbrace{(1)}_{x'(t)}\,dt = \frac{1}{2} \\ \int_C x\,dy &= \int_0^1 t\,\underbrace{(1)}_{y'(t)}\,dt = \frac{1}{2} \end{aligned}$$
<p>
  The $ds$ version is bigger because the segment's length, $\sqrt{2}$, is longer than either its horizontal or vertical change, $1$.
  Now trace $C$ backward, from $(1, 1)$ to $(0, 0)$: $\int_C x\,ds$ stays $\tfrac{\sqrt{2}}{2}$, while $\int_C x\,dx$ becomes $-\tfrac{1}{2}$.
</p>

<h3>Quick checklist</h3>
<ol>
  <li><strong>Read the differential.</strong> $ds$ means arc length. $dx$, $dy$, $dz$, or $d\mathbf{r}$ means this page's kind.</li>
  <li><strong>If the problem is in words</strong>, ask what it measures: something spread along the curve (mass, charge, average temperature) uses $ds$; something done by a force as you move along the curve (work) uses $dx$, $dy$, or $\mathbf{F} \cdot d\mathbf{r}$.</li>
  <li><strong>Then set up accordingly:</strong> multiply by the speed $|\mathbf{r}'(t)|$ for $ds$, or by the matching derivative for each of $dx$, $dy$, $dz$. Respect the direction only for the second kind.</li>
</ol>

<h2 id="recipe">The recipe</h2>
<ol>
  <li><strong>Parametrize</strong> each piece of $C$ in the direction it's traced, and note the limits.</li>
  <li><strong>Find the differentials</strong>: $dx = x'(t)\,dt$, $dy = y'(t)\,dt$, $dz = z'(t)\,dt$.</li>
  <li><strong>Substitute</strong> $x(t)$, $y(t)$, $z(t)$ into $P$, $Q$, $R$ and expand.</li>
  <li><strong>Multiply and add</strong>: $P\,x'(t) + Q\,y'(t) + R\,z'(t)$.</li>
  <li><strong>Integrate</strong> from the starting value of $t$ to the ending value. For several pieces, add the results.</li>
</ol>

<h3 id="parametrizing-and-bounds">Parametrizing and choosing the bounds</h3>
<p>
  The limits of the integral are <strong>values of the parameter $t$</strong>, not coordinates of points.
  To find them, ask: <em>what is $t$ at the point where $C$ starts, and what is $t$ where it ends?</em>
</p>
$$\int_C P\,dx + Q\,dy = \int_{t_{\text{start}}}^{t_{\text{end}}} \Big[P\,x'(t) + Q\,y'(t)\Big]\,dt$$
<p>
  The <strong>lower limit is always the start</strong> and the upper limit is always the end, even if the start is the bigger number.
  That's how the integral keeps track of direction.
</p>

<table>
  <thead><tr><th>Curve</th><th>Parametrization and differentials</th><th>Bounds: $t_{\text{start}}$ to $t_{\text{end}}$</th></tr></thead>
  <tbody>
    <tr>
      <td>Segment from $\mathbf{r}_0$ to $\mathbf{r}_1$</td>
      <td>$\mathbf{r}(t) = (1 - t)\mathbf{r}_0 + t\,\mathbf{r}_1$ (<a href="#technique-segment">how this works</a>); each differential is (end $-$ start)$\,dt$ for that coordinate</td>
      <td>$0$ to $1$, with $\mathbf{r}_0$ the starting point</td>
    </tr>
    <tr>
      <td>Graph $y = g(x)$</td>
      <td>$x = t$, $y = g(t)$, so $dx = dt$ and $dy = g'(t)\,dt$</td>
      <td>The $x$-coordinates of the start and end points</td>
    </tr>
    <tr>
      <td>Graph $x = h(y)$</td>
      <td>$y = t$, $x = h(t)$, so $dy = dt$ and $dx = h'(t)\,dt$</td>
      <td>The $y$-coordinates of the start and end points</td>
    </tr>
    <tr>
      <td>Circle of radius $R$</td>
      <td>$\langle R\cos t, R\sin t \rangle$, so $dx = -R\sin t\,dt$ and $dy = R\cos t\,dt$. It moves counterclockwise as $t$ increases.</td>
      <td>The angles of the start and end points, measured counterclockwise from the positive $x$-axis (below)</td>
    </tr>
  </tbody>
</table>
<p>
  <strong>Vertical and horizontal pieces:</strong> on a vertical segment $x$ is constant, so $dx = 0$ and every $P\,dx$ term vanishes.
  On a horizontal segment, $dy = 0$.
</p>

<h4>Angles on a circle of radius $R$</h4>
<table>
  <thead><tr><th>Point</th><th>$(R, 0)$</th><th>$(0, R)$</th><th>$(-R, 0)$</th><th>$(0, -R)$</th></tr></thead>
  <tbody><tr><td>$t$</td><td>$0$ (or $2\pi$)</td><td>$\tfrac{\pi}{2}$</td><td>$\pi$</td><td>$\tfrac{3\pi}{2}$ (or $-\tfrac{\pi}{2}$)</td></tr></tbody>
</table>
<p>Then adjust for direction, since the same point has many angles:</p>
<ul>
  <li><strong>Counterclockwise:</strong> $t_{\text{end}}$ must be <em>larger</em> than $t_{\text{start}}$. If it isn't, add $2\pi$ to it.</li>
  <li><strong>Clockwise:</strong> $t_{\text{end}}$ must be <em>smaller</em> than $t_{\text{start}}$. If it isn't, subtract $2\pi$ from it.</li>
  <li><strong>A full loop</strong> starting at $(R, 0)$: $0$ to $2\pi$ counterclockwise, $2\pi$ to $0$ clockwise.</li>
</ul>

<h4>Examples</h4>
<ul>
  <li>
    $y = x^2$ from $(2, 4)$ to $(-1, 1)$: with $x = t$, the start has $x = 2$ and the end has $x = -1$, so
    $\displaystyle\int_2^{-1}$. Keep the $2$ on the bottom.
  </li>
  <li>
    Counterclockwise on $x^2 + y^2 = 4$ from $(0, 2)$ to $(-2, 0)$: the angles are $\tfrac{\pi}{2}$ and $\pi$, and $\pi$ is larger, so $\displaystyle\int_{\pi/2}^{\pi}$.
  </li>
  <li>
    Clockwise on the same circle from $(0, 2)$ to $(2, 0)$: the angles are $\tfrac{\pi}{2}$ and $0$, and $0$ is smaller, as clockwise requires, so $\displaystyle\int_{\pi/2}^{0}$.
  </li>
  <li>
    Counterclockwise from $(0, -2)$ to $(2, 0)$: the angles are $\tfrac{3\pi}{2}$ and $0$, but counterclockwise needs a larger end, so use
    $0 + 2\pi$: $\displaystyle\int_{3\pi/2}^{2\pi}$. (Starting from $-\tfrac{\pi}{2}$ instead gives $\int_{-\pi/2}^{0}$, the same integral.)
  </li>
</ul>

<h4>Check your bounds</h4>
<p>
  Plug $t_{\text{start}}$ and $t_{\text{end}}$ into $\mathbf{r}(t)$. You should get exactly the starting and ending points of $C$.
  For a circle, also check one value in between to make sure you're going around the right way.
</p>
<p>
  <strong>Compare with $\int_C f\,ds$:</strong> there, direction doesn't matter, so always integrate from the
  <em>smaller</em> value of $t$ to the larger. Since $ds$ is a length, a backward integral would wrongly come out negative.
</p>

<!-- tools -->
<h2 id="worked-examples" data-toc="Worked examples">Worked example: a segment</h2>
<p>Evaluate $\int_C y^2\,dx + xy\,dy$, where $C$ is the segment from $(1, 0)$ to $(3, 2)$.</p>
<p>Parametrize: $\mathbf{r}(t) = (1 - t)\langle 1, 0 \rangle + t\langle 3, 2 \rangle = \langle 1 + 2t,\ 2t \rangle$, $0 \le t \le 1$, so $dx = 2\,dt$ and $dy = 2\,dt$.</p>
$$y^2\,dx = (2t)^2 \cdot 2\,dt = 8t^2\,dt \qquad xy\,dy = (1 + 2t)(2t) \cdot 2\,dt = \left(4t + 8t^2\right)dt$$
$$\int_C y^2\,dx + xy\,dy = \int_0^1 \left(16t^2 + 4t\right)dt = \left[\,\frac{16t^3}{3} + 2t^2\,\right]_0^1 = \frac{16}{3} + 2 = \frac{22}{3}$$

<h2>Worked example: reversing direction</h2>
<p>
  Evaluate $\int_C xy\,dx$, where $C$ is the parabola $y = x^2$ traced from $(1, 1)$ <em>back</em> to $(0, 0)$.
</p>
<p>
  Use $x = t$, $y = t^2$, so $dx = dt$. The curve starts at $x = 1$ and ends at $x = 0$, so $t$ runs from $1$ to $0$:
</p>
$$\int_C xy\,dx = \int_1^0 t \cdot t^2\,dt = \left[\,\frac{t^4}{4}\,\right]_1^0 = 0 - \frac{1}{4} = -\frac{1}{4}$$
<p>
  Traced the other way, from $(0, 0)$ to $(1, 1)$, the answer is $+\tfrac{1}{4}$. Compare: $\int_C xy\,ds$ would be the same positive
  number either way.
</p>

<h2 id="vector-fields" data-toc="Line integrals of vector fields">Line integrals of vector fields</h2>
<p>
  Collect $P$, $Q$, $R$ into a <a href="?topic=vector-fields">vector field</a> $\mathbf{F} = \langle P, Q, R \rangle$ and the differentials into
  $d\mathbf{r} = \langle dx, dy, dz \rangle$. Their dot product is exactly the integrand of this page:
</p>
<div class="formula">
  $$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}\big(\mathbf{r}(t)\big) \cdot \mathbf{r}'(t)\,dt = \int_C P\,dx + Q\,dy + R\,dz = \int_C \mathbf{F} \cdot \mathbf{T}\,ds$$
</div>
<ul>
  <li><strong>The recipe:</strong> substitute $\mathbf{r}(t)$ into $\mathbf{F}$, dot with $\mathbf{r}'(t)$, and integrate over the parameter interval.</li>
  <li>
    <strong>Meaning:</strong> $\mathbf{F} \cdot \mathbf{T}$ is the component of $\mathbf{F}$ along the direction of motion, so the integral adds up how much the field
    pushes along the path.
  </li>
  <li>
    <strong>Work:</strong> if $\mathbf{F}$ is a force, the work it does moving a particle along $C$ is $W = \int_C \mathbf{F} \cdot d\mathbf{r}$. More on the
    <a href="?topic=work-and-force-fields">Work and Force Fields</a> page.
  </li>
  <li>
    <strong>Direction matters:</strong> $\int_{-C} \mathbf{F} \cdot d\mathbf{r} = -\int_C \mathbf{F} \cdot d\mathbf{r}$. Reversing the curve flips $\mathbf{T}$. (By contrast,
    $\int_C f\,ds$ doesn't change.)
  </li>
</ul>
<p><strong>Example.</strong> $\mathbf{F}(x, y) = \langle xy,\ y^2 \rangle$ along $\mathbf{r}(t) = \langle t, t^2 \rangle$, $0 \le t \le 1$:</p>
$$\mathbf{F}\big(\mathbf{r}(t)\big) = \langle t^3, t^4 \rangle, \qquad \mathbf{r}'(t) = \langle 1, 2t \rangle, \qquad \int_0^1 \left(t^3 + 2t^5\right)dt = \frac{1}{4} + \frac{1}{3} = \frac{7}{12}$$
<p>
  <strong>Example (work).</strong> The work done by $\mathbf{F}(x, y, z) = \langle y, z, x \rangle$ along $\mathbf{r}(t) = \langle t, t^2, t^3 \rangle$, $0 \le t \le 1$:
</p>
$$\int_0^1 \langle t^2, t^3, t \rangle \cdot \langle 1, 2t, 3t^2 \rangle\,dt = \int_0^1 \left(t^2 + 2t^4 + 3t^3\right)dt = \frac{1}{3} + \frac{2}{5} + \frac{3}{4} = \frac{89}{60}$$

<h3 id="sign-from-picture">The sign from a picture</h3>
<p>
  Since $\mathbf{F} \cdot \mathbf{T} = |\mathbf{F}|\cos\theta$, a picture of the field and the curve shows the sign without any computing: arrows going
  <strong>with</strong> the direction of motion add a positive amount, arrows going <strong>against</strong> it a negative amount, and arrows
  <strong>perpendicular</strong> to the curve add nothing.
</p>
<div class="figure-row">
  <figure>
    ${C({label:`A counterclockwise rotation field with a circle traced counterclockwise.`,field:(e,t)=>[-t,e],curve:{points:w(1.4),closed:!0}})}
    <figcaption><strong>Positive.</strong> The arrows go around with the circle the whole way.</figcaption>
  </figure>
  <figure>
    ${C({label:`An outward radial field with a circle traced counterclockwise.`,field:(e,t)=>[e,t],curve:{points:w(1.4),closed:!0}})}
    <figcaption><strong>Zero.</strong> Every arrow is perpendicular to the circle.</figcaption>
  </figure>
  <figure>
    ${C({label:`A constant field pointing right with a segment traced from right to left.`,field:()=>[1,0],curve:{points:[[1.6,.6],[.5,.6],[-.6,.6],[-1.6,.6]]}})}
    <figcaption><strong>Negative.</strong> The segment runs against the arrows.</figcaption>
  </figure>
</div>
<p>
  When parts go with the motion and parts against it, compare sizes: longer arrows and longer stretches count more, and symmetric parts can cancel
  exactly. More pictures are on the <a href="?topic=conservative-fields#reading-pictures">Conservative Vector Fields</a> page.
</p>

<h3 id="numerical">When there's no antiderivative</h3>
<p>
  Fields like $\mathbf{F} = \langle e^x, \sin y \rangle$ along curves like $\langle t^2, \sqrt{t} \rangle$ give integrands with no elementary antiderivative. Set
  the integral up exactly, then approximate it with a calculator's numerical integration, and round only at the end.
</p>


<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Writing $dt$ instead of $x'(t)\,dt$.</strong> $dx$ is not $dt$ unless $x = t$.</li>
  <li><strong>Using $ds$'s square root.</strong> $\int P\,dx$ has no $|\mathbf{r}'(t)|$; only arc-length integrals do.</li>
  <li><strong>Ignoring direction.</strong> Parametrize the way $C$ is traced. Going the wrong way flips the sign of the answer.</li>
  <li><strong>"Fixing" backward limits.</strong> If $t$ runs from $1$ to $0$, integrate from $1$ to $0$. Don't swap them back.</li>
  <li><strong>Pairing the wrong derivative.</strong> $P$ goes with $x'(t)$, $Q$ with $y'(t)$, $R$ with $z'(t)$.</li>
</ul>
`,E=e=>String.raw`\left\langle ${e.join(`, `)} \right\rangle`,D={id:`vector-fields`,title:`Line integrals of vector fields`};function O(e,t,n,r=4e3){let i=(n-t)/r,a=e(t)+e(n);for(let n=1;n<r;n++)a+=(n%2==0?2:4)*e(t+n*i);return a*i/3}function k(e,t){let n=u(1);for(let r=0;r<t;r++)n=g(n,e);return n}function ee(e,t){return y(...e.map(([e,n])=>_(n.reduce((e,n,r)=>g(e,k(t[r]??u(0),n)),u(1)),b(e))))}var te=e=>x(e.map(([e,t])=>S(e,t).f)),ne=[{F:([e,t])=>[e*t*t,-e*e],r:e=>[e**3,e*e],interval:[0,1]},{F:([e,t,n])=>[e+t,e*n,t+n],r:e=>[e*e,e**3,-2*e],interval:[0,2]}],A={name:`∫ F · dr along r(t)`,build(t){let{dimension:n,coefficients:r,field:a,interval:o}=i(()=>{let n=e([2,2,3],t),r=[[0,1],[0,0,1],[0,0,0,1],[0,2],[0,-1],[1,1],[1,-1],[0,3],[2,0,1],[0,1,1]],a=Array.from({length:n},()=>e(r,t)),o=[[1,0,0],[0,1,0],[1,1,0],[2,0,0],[0,2,0],[0,0,0]],s=[[1,0,0],[0,1,0],[0,0,1],[1,1,0],[0,1,1],[1,0,1],[0,0,0]],c=Array.from({length:n},()=>i(()=>Array.from({length:e([1,1,2],t)},()=>[e([-2,-1,1,2,3],t),e(n===2?o:s,t)]),e=>new Set(e.map(([,e])=>e.join())).size<e.length)),[l,u]=e([[0,1],[0,2],[-1,1],[1,2],[0,1]],t);return{dimension:n,coefficients:a,field:c,interval:[l,u]}},({coefficients:e,field:t,interval:n})=>{let r=t=>e.map(e=>e.reduce((e,n,r)=>e+n*t**r,0)),i=e=>t.map(t=>t.reduce((t,[n,r])=>t+S(n,r).value(e),0));return ne.some(e=>e.interval.join()===n.join()&&[.3,.8].every(t=>e.r(t).length===r(t).length&&e.r(t).every((e,n)=>Math.abs(e-r(t)[n])<1e-9))&&[[.4,1.1,.7]].every(t=>e.F(t).every((e,n)=>Math.abs(e-i(t)[n])<1e-9)))||new Set(e.map(e=>e.join())).size<e.length}),[s,c]=o,_=[`x`,`y`,`z`].slice(0,n),x=r.map(e=>u(...e)),C=x.map(p),w=a.map(e=>ee(e,x)),T=y(...w.map((e,t)=>g(e,C[t]))),O=v(T),[k,A]=[l(O,b(c)),l(O,b(s))],j=h(k,b(-A.num,A.den)),M=E(a.map(te)),N=E(x.map(e=>m(e))),P=t()<.4,F=e=>a.map(t=>t.reduce((t,[n,r])=>t+S(n,r).value(e),0)),I=e=>x.map(t=>f(l(t,b(e)))),L=[{explanation:String.raw`${P?`Work is the line integral of the force: $W = \\int_C \\mathbf{F} \\cdot d\\mathbf{r}$. `:``}Along $\mathbf{r}(t)$, $\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}\big(\mathbf{r}(t)\big) \cdot \mathbf{r}'(t)\,dt$. First substitute the curve into $\mathbf{F}$.`,tex:String.raw`\mathbf{F}\big(\mathbf{r}(t)\big) = ${E(w.map(e=>m(e)))}`,lessonSection:D},{explanation:`Differentiate the curve.`,tex:String.raw`\mathbf{r}'(t) = ${E(C.map(e=>m(e)))}`},{explanation:`Take the dot product: multiply matching components and add, then simplify.`,tex:String.raw`\mathbf{F}\big(\mathbf{r}(t)\big) \cdot \mathbf{r}'(t) = ${w.map((e,t)=>String.raw`\left(${m(e)}\right)\left(${m(C[t])}\right)`).join(` + `)} = ${m(T)}`},{explanation:`Integrate with the power rule and evaluate.`,tex:String.raw`\int_{${s}}^{${c}} \left(${m(T)}\right)dt = \Big[\,${m(O)}\,\Big]_{${s}}^{${c}} = ${d(j)}`}];return{problem:{promptHtml:P?String.raw`Find the work done by the force field $\mathbf{F}(${_.join(`, `)}) = ${M}$ in moving a particle along $\mathbf{r}(t) = ${N}$, $${s} \le t \le ${c}$.`:String.raw`Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$, where $\mathbf{F}(${_.join(`, `)}) = ${M}$ and $C$ is given by $\mathbf{r}(t) = ${N}$, $${s} \le t \le ${c}$.`,givenTex:String.raw`\mathbf{F} = ${M}, \qquad \mathbf{r}(t) = ${N}, \qquad ${s} \le t \le ${c}`,answerTex:d(j),answerValue:f(j),steps:L},F,r:I,interval:o}}},j=[{name:`constant field pointing right`,F:()=>[1,0]},{name:`constant field pointing up`,F:()=>[0,1]},{name:`constant field pointing down and left`,F:()=>[-1,-.6]},{name:`outward radial field`,F:(e,t)=>[e,t]},{name:`inward radial field`,F:(e,t)=>[-e,-t]},{name:`counterclockwise rotation`,F:(e,t)=>[-t,e]},{name:`clockwise rotation`,F:(e,t)=>[t,-e]},{name:`saddle field`,F:(e,t)=>[e,-t]},{name:`shear field`,F:(e,t)=>[t,0]},{name:`field that grows to the right`,F:e=>[0,e]},{name:`constant field pointing up and right`,F:()=>[1,1]},{name:`horizontal field growing away from the y-axis`,F:e=>[e,0]},{name:`vertical field pointing toward the x-axis`,F:(e,t)=>[0,-t]},{name:`outward spiral`,F:(e,t)=>[e-t,e+t]},{name:`diagonal saddle`,F:(e,t)=>[t,e]}];function M(t){let n=e([`vertical`,`horizontal`,`circle`,`arc`,`quarter`],t),r=t()<.5,i=r?1:-1;if(n===`quarter`){let n=e([1,1.4,1.7],t),a=e([0,Math.PI/2,Math.PI,3*Math.PI/2],t);return{name:`quarter circle traced ${r?`counterclockwise`:`clockwise`}`,r:e=>[n*Math.cos(a+i*e),n*Math.sin(a+i*e)],dr:e=>[-i*n*Math.sin(a+i*e),i*n*Math.cos(a+i*e)],interval:[0,Math.PI/2],closed:!1}}if(n===`vertical`||n===`horizontal`){let a=e([-1.6,-1.2,-.8,-.4,.4,.8,1.2,1.6],t),o=n===`vertical`;return{name:`${o?`vertical`:`horizontal`} segment traced ${o?r?`upward`:`downward`:r?`to the right`:`to the left`}`,r:e=>o?[a,i*e]:[i*e,a],dr:()=>o?[0,i]:[i,0],interval:[-1.5,1.5],closed:!1}}let a=e([1,1.4],t);if(n===`circle`)return{name:`circle traced ${r?`counterclockwise`:`clockwise`}`,r:e=>[a*Math.cos(i*e),a*Math.sin(i*e)],dr:e=>[-i*a*Math.sin(i*e),i*a*Math.cos(i*e)],interval:[0,2*Math.PI],closed:!0};let o=e([0,Math.PI/2,Math.PI,3*Math.PI/2],t);return{name:`half circle traced ${r?`counterclockwise`:`clockwise`}`,r:e=>[a*Math.cos(o+i*e),a*Math.sin(o+i*e)],dr:e=>[-i*a*Math.sin(o+i*e),i*a*Math.cos(o+i*e)],interval:[0,Math.PI],closed:!1}}var N={name:`sign of ∫ F · dr from a picture`,build(t){let{field:n,curve:r,value:a,alongs:o}=i(()=>{let n=e(j,t),r=M(t),i=e=>{let[t,i]=r.r(e),[a,o]=n.F(t,i),[s,c]=r.dr(e);return a*s+o*c};return{field:n,curve:r,value:O(i,r.interval[0],r.interval[1],2e3),alongs:Array.from({length:41},(e,t)=>i(r.interval[0]+(r.interval[1]-r.interval[0])*t/40))}},({value:e})=>Math.abs(e)>1e-9&&Math.abs(e)<.5),s=Math.abs(a)<1e-9?`Zero`:a>0?`Positive`:`Negative`,c=o.every(e=>Math.abs(e)<1e-9),l=o.every(e=>e>-1e-9),u=o.every(e=>e<1e-9),d=c?`Everywhere on C, the arrows are perpendicular to the direction of motion (or zero), so F · T = 0 all along the curve.`:l?`All along C, the arrows point with the direction of motion (the angle between them is under 90°), so every bit of the curve adds a positive amount.`:u?`All along C, the arrows point against the direction of motion (the angle between them is over 90°), so every bit of the curve adds a negative amount.`:s===`Zero`?`Along part of C the arrows go with the motion and along part they go against it, and by symmetry the two parts cancel exactly.`:`Along part of C the arrows go with the motion and along part against it, but the ${s===`Positive`?`with-the-motion`:`against-the-motion`} part is bigger (longer arrows, or more of the curve).`,f=Array.from({length:33},(e,t)=>r.r(r.interval[0]+(r.interval[1]-r.interval[0])*t/(r.closed?33:32))),p=C({label:`The ${n.name}, with a ${r.name} drawn on top; arrowheads on the curve show its direction.`,field:(e,t)=>n.F(e,t),curve:{points:f,closed:r.closed}});return{problem:{promptHtml:String.raw`The figure shows a vector field $\mathbf{F}$ and a curve $C$ (orange, with arrows showing its direction). Is $\int_C \mathbf{F} \cdot d\mathbf{r}$ positive, negative, or zero?`,givenTex:``,figureHtml:p,answerTex:String.raw`\text{${s}}`,choices:[`Positive`,`Negative`,`Zero`],correctChoice:s,steps:[{explanation:String.raw`$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_C \mathbf{F} \cdot \mathbf{T}\,ds$, where $\mathbf{T}$ is the unit tangent in the direction $C$ is traced. At each point, $\mathbf{F} \cdot \mathbf{T} = |\mathbf{F}|\cos\theta$: positive when the arrow goes with the motion, negative against it, zero when perpendicular.`,tex:String.raw`\mathbf{F} \cdot \mathbf{T} = |\mathbf{F}|\cos\theta`,lessonSection:{id:`sign-from-picture`,title:`The sign from a picture`}},{explanation:d,tex:String.raw`\int_C \mathbf{F} \cdot d\mathbf{r} \text{ is ${s.toLowerCase()}}`}]},value:a,field:n.F,curve:r}}},P=[{tex:e=>`e^{${e}}`,f:([e])=>Math.exp(e)},{tex:(e,t)=>String.raw`\sin\left(${t}\right)`,f:([,e])=>Math.sin(e)},{tex:(e,t)=>String.raw`\left(${e}\right)\left(${t}\right)`,f:([e,t])=>e*t},{tex:(e,t)=>String.raw`\frac{${e}}{1 + \left(${t}\right)^2}`,f:([e,t])=>e/(1+t*t)},{tex:e=>String.raw`\ln\left(1 + \left(${e}\right)^2\right)`,f:([e])=>Math.log(1+e*e)},{tex:(e,t)=>String.raw`\sqrt{1 + \left(${e}\right)^2 + \left(${t}\right)^2}`,f:([e,t])=>Math.sqrt(1+e*e+t*t)},{tex:(e,t)=>String.raw`\cos\left(${t}\right)`,f:([,e])=>Math.cos(e)},{tex:(e,t)=>String.raw`\left(${e}\right)^2 - \left(${t}\right)`,f:([e,t])=>e*e-t}],F=[String.raw`e^{x}`,String.raw`\sin y`,`xy`,String.raw`\frac{x}{1 + y^2}`,String.raw`\ln(1 + x^2)`,String.raw`\sqrt{1 + x^2 + y^2}`,String.raw`\cos y`,`x^2 - y`],I=[{tex:`t^2`,f:e=>e*e,dTex:`2t`,df:e=>2*e},{tex:`t^3`,f:e=>e**3,dTex:`3t^2`,df:e=>3*e*e},{tex:String.raw`\sin t`,f:Math.sin,dTex:String.raw`\cos t`,df:Math.cos},{tex:String.raw`\cos t`,f:Math.cos,dTex:String.raw`-\sin t`,df:e=>-Math.sin(e)},{tex:`e^{t}`,f:Math.exp,dTex:`e^{t}`,df:Math.exp},{tex:`t`,f:e=>e,dTex:`1`,df:()=>1},{tex:String.raw`\sqrt{t}`,f:Math.sqrt,dTex:String.raw`\frac{1}{2\sqrt{t}}`,df:e=>1/(2*Math.sqrt(e))}],L={name:`∫ F · dr to four decimal places`,build(t){let{P:n,Q:r,x:a,y:o,interval:s}=i(()=>{let[n,r]=[e(P.map((e,t)=>({...e,name:F[t]})),t),e(P.map((e,t)=>({...e,name:F[t]})),t)],[i,a]=[e(I,t),e(I,t)];return{P:n,Q:r,x:i,y:a,interval:e([[1,2],[.5,1.5],[1,3]],t)}},({P:e,Q:t,x:n,y:r,interval:i})=>{if(e.name===t.name||n.tex===r.tex)return!0;let a=O(i=>e.f([n.f(i),r.f(i)])*n.df(i)+t.f([n.f(i),r.f(i)])*r.df(i),i[0],i[1],200);return!Number.isFinite(a)||Math.abs(a)>200}),[c,l]=s,u=e=>[a.f(e),o.f(e)],d=e=>[n.f(e),r.f(e)],f=O(e=>n.f(u(e))*a.df(e)+r.f(u(e))*o.df(e),c,l);return{problem:{promptHtml:String.raw`Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ correct to four decimal places, where $\mathbf{F}(x, y) = \left\langle ${n.name},\ ${r.name} \right\rangle$ and $\mathbf{r}(t) = \langle ${a.tex}, ${o.tex} \rangle$, $${c} \le t \le ${l}$. (Set up the integral, then use a calculator or computer.)`,givenTex:String.raw`\mathbf{F} = \left\langle ${n.name},\ ${r.name} \right\rangle, \qquad \mathbf{r}(t) = \langle ${a.tex}, ${o.tex} \rangle, \qquad ${c} \le t \le ${l}`,answerTex:f.toFixed(4),answerValue:f,rounding:{decimals:4},steps:[{explanation:String.raw`Substitute $\mathbf{r}(t)$ into $\mathbf{F}$ and dot with $\mathbf{r}'(t) = \langle ${a.dTex}, ${o.dTex} \rangle$.`,tex:String.raw`\int_C \mathbf{F} \cdot d\mathbf{r} = \int_{${c}}^{${l}} \left[${n.tex(a.tex,o.tex,``)}\cdot ${a.dTex===`1`?`1`:`\\left(${a.dTex}\\right)`} + ${r.tex(a.tex,o.tex,``)}\cdot ${o.dTex===`1`?`1`:`\\left(${o.dTex}\\right)`}\right]dt`,lessonSection:D},{explanation:`This has no elementary antiderivative, so approximate it numerically (a calculator's fnInt, or Simpson's rule with many subintervals) and round at the end.`,tex:String.raw`\int_C \mathbf{F} \cdot d\mathbf{r} \approx ${f.toFixed(4)}`}]},F:d,r:u,interval:s}}},R=e=>String.raw`\left(${e}\right)`,z=e=>e.includes(` `)?R(e):e,B={integralTex:`x`,substitutedTex:e=>e,polynomial:e=>e,value:([e])=>e},V={integralTex:`y`,substitutedTex:(e,t)=>t,polynomial:(e,t)=>t,value:([,e])=>e},re={integralTex:`z`,substitutedTex:(e,t,n)=>n,polynomial:(e,t,n)=>n,value:([,,e])=>e},H=[B,V,{integralTex:`xy`,substitutedTex:(e,t)=>R(e)+R(t),polynomial:(e,t)=>g(e,t),value:([e,t])=>e*t},{integralTex:`x^2`,substitutedTex:e=>`${R(e)}^2`,polynomial:e=>g(e,e),value:([e])=>e*e},{integralTex:`y^2`,substitutedTex:(e,t)=>`${R(t)}^2`,polynomial:(e,t)=>g(t,t),value:([,e])=>e*e},{integralTex:`(x + y)`,substitutedTex:(e,t)=>`${z(e)} + ${z(t)}`,polynomial:(e,t)=>y(e,t),value:([e,t])=>e+t},{integralTex:`(x - y)`,substitutedTex:(e,t)=>`${z(e)} - ${R(t)}`,polynomial:(e,t)=>y(e,g(t,u(-1))),value:([e,t])=>e-t}],ie=[B,V,re],U=[`dx`,`dy`,`dz`],W=[`P`,`Q`,`R`];function G(e,t=`C`){let n=e.map((e,t)=>e?String.raw`${e.integralTex}\,${U[t]}`:null).filter(e=>e!==null);return String.raw`\int_{${t}} ${n.join(` + `)}`}function K(e){let t=e.map((e,t)=>e?t:-1).filter(e=>e>=0),n=t.map(e=>`${W[e]}\\,${U[e]}`).join(` + `),r=t.map(e=>String.raw`${W[e]}\big(\mathbf{r}(t)\big)\,${`xyz`[e]}'(t)`).join(` + `);return{explanation:String.raw`Start from the definition. Along $\mathbf{r}(t)$, each differential becomes a derivative times $dt$: $dx = x'(t)\,dt$, $dy = y'(t)\,dt$${e.length===3?String.raw`, $dz = z'(t)\,dt$`:``}.`,tex:String.raw`\int_C ${n} = \int_a^b \left[${r}\right]dt`}}function q(e,t,n,r,i){let a=e.map(e=>m(e)),o=e.map(p),s=t.map((e,t)=>e?t:-1).filter(e=>e>=0),c=s.filter(e=>o[e].length===0),u=s.map(e=>String.raw`${U[e]} &= ${ae(o[e])}`).join(String.raw` \\ `),f=s.map(n=>{let r=t[n],i=m(r.polynomial(e[0],e[1],e[2]??[])),o=r.substitutedTex(a[0],a[1],a[2]??``);return String.raw`${W[n]} &= ${o}${o===i?``:` = ${i}`}`}).join(String.raw` \\ `),_=s.map(n=>g(t[n].polynomial(e[0],e[1],e[2]??[]),o[n])),x=y(..._),S=s.map(n=>R(m(t[n].polynomial(e[0],e[1],e[2]??[])))+R(m(o[n]))).join(` + `),C=v(x),w=l(C,b(r)),T=l(C,b(n)),E=h(w,b(-T.num,T.den));return{steps:[{explanation:`Differentiate each component to get the differentials.`+(c.length>0?String.raw` Here $${c.map(e=>U[e]).join(` = `)} = 0$ because that coordinate doesn't change, so ${c.length===1?`that term contributes`:`those terms contribute`} nothing.`:``),tex:String.raw`\begin{aligned} ${u} \end{aligned}`},{explanation:`Substitute the parametrization into each function and expand.`,tex:String.raw`\begin{aligned} ${f} \end{aligned}`},{explanation:`Multiply each function by the derivative from its differential, add, and simplify.`,tex:String.raw`${i} = \int_{${n}}^{${r}} \left[${S}\right]dt = \int_{${n}}^{${r}} \left(${m(x)}\right)dt`},{explanation:`Integrate with the power rule.`,tex:String.raw`= \Big[\,${m(C)}\,\Big]_{${n}}^{${r}}`},{explanation:n>r?`Evaluate at the upper bound minus the lower bound. The upper bound is smaller here because of the direction C is traced; keep it that way.`:`Evaluate at the upper bound minus the lower bound.`,tex:String.raw`= \left(${m(C,`t`,`${r}`)}\right) - \left(${m(C,`t`,`${n}`)}\right) = \left(${d(w)}\right) - \left(${d(T)}\right) = ${d(E)}`}],value:E}}function ae(e){let t=m(e);return t===`1`?`dt`:t.includes(` `)?String.raw`\left(${t}\right)dt`:String.raw`${t}\,dt`}function J(e,t){return e.map((e,n)=>u(e,t[n]-e))}function Y(e){return`(${e.join(`, `)})`}function X(e,t,n=`C`){let r=J(e,t).map(e=>m(e));return{explanation:String.raw`Parametrize the segment with $\mathbf{r}(t) = (1 - t)\,\mathbf{r}_0 + t\,\mathbf{r}_1$, $0 \le t \le 1$, where $\mathbf{r}_0 = ${Y(e)}$ is the start and $\mathbf{r}_1 = ${Y(t)}$ is the end. This goes in the stated direction.`,tex:String.raw`${n===`C`?``:`${n}:\\ `}\mathbf{r}(t) = (1 - t)\left\langle ${e.join(`, `)} \right\rangle + t\left\langle ${t.join(`, `)} \right\rangle = \left\langle ${r.join(`,\\ `)} \right\rangle, \qquad 0 \le t \le 1`,technique:s}}function Z(t){let n=e([`both`,`both`,`dx`,`dy`],t),r=e(H,t),i=e(H,t);for(;i===r;)i=e(H,t);return[n===`dy`?void 0:r,n===`dx`?void 0:i]}var oe={name:`segment in the plane`,build(t){let n=Z(t),r=()=>e([-3,-2,-1,0,1,2,3],t),{start:a,end:o}=i(()=>({start:[r(),r()],end:[r(),r()]}),({start:e,end:t})=>n.some((n,r)=>n!==void 0&&e[r]===t[r])),s=J(a,o),c=G(n),{steps:l,value:u}=q(s,n,0,1,c);return{problem:{promptHtml:String.raw`Evaluate $${c}$, where $C$ is the line segment from $${Y(a)}$ to $${Y(o)}$.`,givenTex:String.raw`${c}, \qquad C:\ ${Y(a)} \to ${Y(o)}`,answerTex:d(u),answerValue:f(u),steps:[K(n),X(a,o),...l]},pieces:[{position:e=>a.map((t,n)=>t+(o[n]-t)*e),start:0,end:1}],field:e=>n.map(t=>t?t.value(e):0)}}},se={name:`parabola arc`,build(t){let n=Z(t),a=t()<.5,o=e([1,-1,2],t),{from:s,to:c}=i(()=>({from:e([-2,-1,0,1,2],t),to:e([-2,-1,0,1,2],t)}),({from:e,to:t})=>e===t),l=a?`x`:`y`,p=a?String.raw`y = ${r(o).replace(/^-1$/,`-`)}x^2`:String.raw`x = ${r(o).replace(/^-1$/,`-`)}y^2`,h=e=>a?[e,o*e*e]:[o*e*e,e],g=a?[u(0,1),u(0,0,o)]:[u(0,0,o),u(0,1)],_=G(n),{steps:v,value:y}=q(g,n,s,c,_),b=s>c,x=a?b?`right to left`:`left to right`:b?`top to bottom`:`bottom to top`,S={explanation:String.raw`$C$ is a graph, so use $${l}$ itself as the parameter: $${l} = t$. $C$ runs ${x}, from $${l} = ${s}$ to $${l} = ${c}$, so $t$ goes from $${s}$ to $${c}$.`+(b?` The lower limit is larger: that is how the integral records the direction.`:``),tex:String.raw`\mathbf{r}(t) = \left\langle ${m(g[0])},\ ${m(g[1])} \right\rangle, \qquad t: ${s} \to ${c}`};return{problem:{promptHtml:String.raw`Evaluate $${_}$, where $C$ is the arc of the parabola $${p}$ from $${Y(h(s))}$ to $${Y(h(c))}$.`,givenTex:String.raw`${_}, \qquad C:\ ${p},\ ${Y(h(s))} \to ${Y(h(c))}`,answerTex:d(y),answerValue:f(y),steps:[K(n),S,...v]},pieces:[{position:h,start:s,end:c}],field:e=>n.map(t=>t?t.value(e):0)}}},ce={name:`two segments in space`,build(t){let n=[0,1,2].map(()=>e(ie,t)),r=[0,1,2].map(()=>e([0,1,2],t)),a=i(()=>r.map(n=>n+e([-1,0,1,2],t)),e=>e.filter((e,t)=>e!==r[t]).length<2),o=[a[0],a[1],i(()=>e([0,1,2,3,4],t),e=>e===a[2])],s=G(n),c=q(J(r,a),n,0,1,G(n,`C_1`)),l=q(J(a,o),n,0,1,G(n,`C_2`)),u=h(c.value,l.value),p=[{explanation:String.raw`$C$ is made of two segments, so split it: $\int_C = \int_{C_1} + \int_{C_2}$. Work out each piece with the same method.`,tex:String.raw`${s} = ${G(n,`C_1`)} + ${G(n,`C_2`)}`},K(n),X(r,a,`C_1`),...c.steps,{...X(a,o,`C_2`),explanation:String.raw`Now $C_2$, from $\mathbf{r}_0 = ${Y(a)}$ to $\mathbf{r}_1 = ${Y(o)}$. It is vertical: $x$ and $y$ stay fixed and only $z$ changes.`},...l.steps,{explanation:`Add the two pieces.`,tex:String.raw`${s} = ${d(c.value)} + \left(${d(l.value)}\right) = ${d(u)}`}];return{problem:{promptHtml:String.raw`Evaluate $${s}$, where $C$ consists of the line segment from $${Y(r)}$ to $${Y(a)}$ followed by the vertical segment from $${Y(a)}$ to $${Y(o)}$.`,givenTex:String.raw`${s}, \qquad C:\ ${Y(r)} \to ${Y(a)} \to ${Y(o)}`,answerTex:d(u),answerValue:f(u),steps:p},pieces:[{position:e=>r.map((t,n)=>t+(a[n]-t)*e),start:0,end:1},{position:e=>a.map((t,n)=>t+(o[n]-t)*e),start:0,end:1}],field:e=>n.map(t=>t.value(e))}}};function le(e,t){return e===0?`0`:`${e<0?`-`:``}${a(Math.abs(e),t,String.raw`\pi`)}`}var Q=(e,t)=>e===0?``:`${e===1?``:e===-1?`-`:e}${t}`,$=e=>e.filter(e=>e!==``).map((e,t)=>t===0?e:e.startsWith(`-`)?`- ${e.slice(1)}`:`+ ${e}`).join(` `),ue={name:`circle arc`,build(t){let{R:n,arc:a,counterclockwise:s,a:l,b:u}=i(()=>({R:e([1,2,3,4,5],t),arc:e([{name:`quarter`,halfTurns:b(1,2),endTex:String.raw`\frac{\pi}{2}`,endpoint:[0,1]},{name:`half`,halfTurns:b(1),endTex:String.raw`\pi`,endpoint:[-1,0]},{name:`full`,halfTurns:b(2),endTex:String.raw`2\pi`,endpoint:[1,0]}],t),counterclockwise:t()<.5,a:e([-2,-1,0,1,2,3],t),b:e([-2,-1,0,1,2,3],t)}),e=>e.a===0&&e.b===0||e.a===e.b),p=a.endpoint.map(e=>e*n),m=r(n),h=n*n,[g,_]=s?[`0`,a.endTex]:[a.endTex,`0`],v=s?a.halfTurns:b(-a.halfTurns.num,a.halfTurns.den),y=a.name===`full`?String.raw`the circle $x^2 + y^2 = ${h}$, traversed once ${s?`counterclockwise`:`clockwise`} starting at $(${n}, 0)$`:s?String.raw`the ${a.name===`quarter`?`quarter`:`upper half of the`} circle $x^2 + y^2 = ${h}$${a.name===`quarter`?` in the first quadrant`:``}, from $(${n}, 0)$ to $${Y(p)}$`:String.raw`the ${a.name===`quarter`?`quarter`:`upper half of the`} circle $x^2 + y^2 = ${h}$${a.name===`quarter`?` in the first quadrant`:``}, from $${Y(p)}$ to $(${n}, 0)$`,x=$([Q(u,String.raw`y\,dx`),Q(l,String.raw`x\,dy`)]),S={num:h*(l-u)*v.num,den:2*v.den},C=le(S.num,S.den),w=$([Q(l*h,String.raw`\cos^2 t`),Q(-u*h,String.raw`\sin^2 t`)]),T=[K([u===0?void 0:V,l===0?void 0:B]),{explanation:s?String.raw`Use $x = ${m}\cos t$, $y = ${m}\sin t$. This parametrization moves counterclockwise as $t$ increases, so $t$ goes from $0$ to $${a.endTex}$.`:String.raw`Use $x = ${m}\cos t$, $y = ${m}\sin t$. This parametrization moves counterclockwise as $t$ increases, but $C$ is clockwise, so $t$ must go backward: from $${a.endTex}$ to $0$.`,tex:String.raw`\mathbf{r}(t) = \left\langle ${m}\cos t,\ ${m}\sin t \right\rangle, \qquad t: ${g} \to ${_}`},{explanation:`Find the differentials.`,tex:String.raw`dx = -${m}\sin t\,dt, \qquad dy = ${m}\cos t\,dt`},{explanation:String.raw`Substitute: $x\,dy = ${r(h)}\cos^2 t\,dt$ and $y\,dx = -${r(h)}\sin^2 t\,dt$.`,tex:String.raw`${x} = \left(${w}\right)dt`},l===-u?{explanation:String.raw`The two terms have the same coefficient, so use $\sin^2 t + \cos^2 t = 1$: the integrand is the constant $${l*h}$.`,tex:String.raw`\int_C ${x} = \int_{${g}}^{${_}} ${l*h}\,dt = ${l*h}\left(${_} - ${g}\right) = ${C}`,technique:o}:{explanation:String.raw`Rewrite with the power-reducing identities $\cos^2 t = \frac{1 + \cos 2t}{2}$ and $\sin^2 t = \frac{1 - \cos 2t}{2}$, and integrate. $\sin 2t$ is $0$ at every multiple of $\frac{\pi}{2}$, so only the $t$ terms remain.`,tex:String.raw`\int_{${g}}^{${_}} \left(${w}\right)dt = \left[\,${d(b(h*(l-u),2))}\,t ${l+u>=0?`+`:`-`} ${d(b(Math.abs(h*(l+u)),4))}\sin 2t\,\right]_{${g}}^{${_}} = ${C}`,technique:c}],E=Math.PI*f(a.halfTurns);return{problem:{promptHtml:String.raw`Evaluate $\int_C ${x}$, where $C$ is ${y}.`,givenTex:String.raw`\int_C ${x}, \qquad C:\ x^2 + y^2 = ${h},\ \text{${s?`counterclockwise`:`clockwise`}}`,answerTex:C,answerValue:Math.PI*S.num/S.den,steps:T},pieces:[{position:e=>[n*Math.cos(e),n*Math.sin(e)],start:s?0:E,end:s?E:0}],field:([e,t])=>[u*t,l*e]}}};function de(t){return e(fe,t).generate(t)}var fe=[t(`plane-segment`,`Segment in the plane`,[oe]),t(`parabola`,`Parabola arc`,[se]),t(`space-segments`,`Two segments in space`,[ce]),t(`circle`,`Circle arc`,[ue]),{id:`field-integral`,label:`∫ F · dr along r(t) (and work)`,generate:e=>A.build(e).problem},{id:`sign-picture`,label:`Sign of ∫ F · dr from a picture`,generate:e=>N.build(e).problem},{id:`field-numeric`,label:`∫ F · dr to four decimal places`,generate:e=>L.build(e).problem}],pe={...n(`line-integrals-xyz`),lessonHtml:T,techniques:[s,o,c],generateProblem:de,problemTypes:fe};export{pe as lineIntegralsXYZTopic};