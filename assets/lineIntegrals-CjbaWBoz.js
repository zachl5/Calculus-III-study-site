import{c as e,d as t,f as n,h as r,i,l as a,n as o,o as s,p as c,r as l,u}from"./index-BX9zVO2G.js";import{d,f,p,u as m}from"./techniques-2ghdpz7U.js";import{a as h,c as g,d as _,f as v,l as y,n as b,o as x,p as S,r as C,s as w,t as ee,u as T}from"./polynomial-D7OtKEoC.js";import{c as E,s as te}from"./terms-BZIL_b18.js";import{n as D,t as O}from"./gridPlot-DqYyFITy.js";var k=String.raw`
<h2 id="what-it-measures">What a line integral measures</h2>
<p>
  An ordinary integral $\int_a^b f(x)\,dx$ adds up the values of $f$ along an interval of the $x$-axis.
  A <strong>line integral</strong> $\int_C f\,ds$ adds up the values of $f$ along a <em>curve</em> $C$, weighting each value
  by a small piece of length $ds$ along the curve.
</p>
<p>The same integral answers several different questions, depending on what $f$ stands for:</p>
<ul>
  <li><strong>$f = 1$:</strong> $\int_C 1\,ds$ is just the <a href="?topic=arc-length">arc length</a> of $C$.</li>
  <li><strong>$f$ is a density</strong> (mass per unit length of a wire): $\int_C \rho\,ds$ is the wire's <strong>mass</strong>.</li>
  <li><strong>$f \ge 0$ is a height</strong> above a curve in the $xy$-plane: $\int_C f\,ds$ is the <strong>area of a curtain</strong>
    hanging from the graph of $f$ down to $C$.</li>
</ul>

<h2 id="formula">The formula</h2>
<p>Parametrize $C$ as $\mathbf{r}(t)$ for $a \le t \le b$. Then $ds = |\mathbf{r}'(t)|\,dt$, the same speed factor from arc length:</p>
<div class="formula">
  $$\int_C f(x, y)\,ds = \int_a^b f\big(x(t), y(t)\big)\sqrt{\big(x'(t)\big)^2 + \big(y'(t)\big)^2}\,dt$$
</div>
<p>In three dimensions, add the $z$ terms:</p>
$$\int_C f(x, y, z)\,ds = \int_a^b f\big(\mathbf{r}(t)\big)\,|\mathbf{r}'(t)|\,dt$$
<p>
  In words: <strong>replace every $x$, $y$, $z$ in $f$ with its formula in $t$, multiply by the speed, and integrate over $t$.</strong>
</p>

<h2 id="why-it-works">Why it works</h2>
<p>
  Chop $C$ into many small arcs with lengths $\Delta s_1, \Delta s_2, \ldots, \Delta s_n$. Pick a point $P_i$ on each arc
  and form the sum $\sum f(P_i)\,\Delta s_i$: each value of $f$ times the length of curve it represents.
  As the arcs shrink, this sum approaches $\int_C f\,ds$.
</p>
<p>
  From arc length, a small piece of curve traced over time $\Delta t$ has length $\Delta s \approx |\mathbf{r}'(t)|\,\Delta t$.
  Substituting that into the sum turns it into an ordinary integral in $t$, which is the formula above.
</p>

<h2 id="parametrizing" data-toc="Parametrizing common curves">Parametrizing common curves</h2>
<p>Most problems describe $C$ in words, so the first job is to write it as $\mathbf{r}(t)$. These cover nearly every textbook problem:</p>
<table>
  <thead><tr><th>Curve</th><th>Parametrization</th><th>Speed $|\mathbf{r}'(t)|$</th></tr></thead>
  <tbody>
    <tr>
      <td>Segment from $\mathbf{r}_0$ to $\mathbf{r}_1$</td>
      <td>$\mathbf{r}(t) = (1 - t)\mathbf{r}_0 + t\,\mathbf{r}_1$, $0 \le t \le 1$ (<a href="#technique-segment">how this works</a>)</td>
      <td>$|\mathbf{r}_1 - \mathbf{r}_0|$, the segment's length</td>
    </tr>
    <tr>
      <td>Circle $x^2 + y^2 = R^2$</td>
      <td>$\langle R\cos t, R\sin t \rangle$, $0 \le t \le 2\pi$</td>
      <td>$R$</td>
    </tr>
    <tr>
      <td>Upper half of that circle</td>
      <td>same, with $0 \le t \le \pi$</td>
      <td>$R$</td>
    </tr>
    <tr>
      <td>Quarter circle in quadrant I</td>
      <td>same, with $0 \le t \le \tfrac{\pi}{2}$</td>
      <td>$R$</td>
    </tr>
    <tr>
      <td>Graph $y = g(x)$</td>
      <td>$\langle x, g(x) \rangle$, using $x$ as the parameter</td>
      <td>$\sqrt{1 + \big(g'(x)\big)^2}$</td>
    </tr>
    <tr>
      <td>Vertical segment $x = c$</td>
      <td>$\langle c, y \rangle$, using $y$ as the parameter</td>
      <td>$1$, so $ds = dy$</td>
    </tr>
  </tbody>
</table>
<p>
  <strong>Direction doesn't matter</strong> for $\int_C f\,ds$: traversing $C$ backward gives the same value, because $ds$ is
  always a positive length. (That changes for the line integrals with $dx$, $dy$, or vector fields that come later.)
</p>
<p>
  <strong>Not sure whether a problem wants $ds$ or $dx$ and $dy$?</strong> See
  <a href="?topic=line-integrals-xyz#which-to-use">which line integral to use</a> on the next page.
</p>

<h2 id="recipe">The recipe</h2>
<ol>
  <li><strong>Parametrize</strong> $C$ as $\mathbf{r}(t)$, $a \le t \le b$, tracing it exactly once.</li>
  <li><strong>Find $ds$</strong>: compute $\mathbf{r}'(t)$ and its length, so $ds = |\mathbf{r}'(t)|\,dt$.</li>
  <li><strong>Substitute</strong> the components of $\mathbf{r}(t)$ into $f$, so everything is in terms of $t$.</li>
  <li><strong>Integrate</strong> $f\big(\mathbf{r}(t)\big)\,|\mathbf{r}'(t)|$ from $a$ to $b$.</li>
</ol>

<h3>Choosing the bounds</h3>
<p>
  The limits are <strong>values of the parameter $t$</strong> at the two ends of $C$, not coordinates. For $\int_C f\,ds$,
  <strong>always integrate from the smaller $t$ to the larger</strong>: $ds$ is a length, so direction doesn't matter, and a
  backward integral would wrongly flip the sign.
</p>
<table>
  <thead><tr><th>Curve</th><th>Bounds</th></tr></thead>
  <tbody>
    <tr><td>Segment, $\mathbf{r}(t) = (1 - t)\mathbf{r}_0 + t\,\mathbf{r}_1$</td><td>$0 \le t \le 1$, with either endpoint as $\mathbf{r}_0$</td></tr>
    <tr><td>Graph $y = g(x)$, with $x$ as the parameter</td><td>The $x$-coordinates of the endpoints, smaller first</td></tr>
    <tr><td>Graph $x = h(y)$, with $y$ as the parameter</td><td>The $y$-coordinates of the endpoints, smaller first</td></tr>
    <tr><td>Given $\mathbf{r}(t)$ and endpoints</td><td>Solve the simplest component for $t$ at each endpoint, then check the others</td></tr>
    <tr><td>Circle $\langle R\cos t, R\sin t \rangle$</td><td>The angles that cover exactly the part of the circle described (table below)</td></tr>
  </tbody>
</table>

<h4>Common pieces of a circle</h4>
<table>
  <thead><tr><th>Piece</th><th>Bounds</th><th>Piece</th><th>Bounds</th></tr></thead>
  <tbody>
    <tr><td>Whole circle</td><td>$0 \le t \le 2\pi$</td><td>Quarter, quadrant I</td><td>$0 \le t \le \tfrac{\pi}{2}$</td></tr>
    <tr><td>Upper half ($y \ge 0$)</td><td>$0 \le t \le \pi$</td><td>Quarter, quadrant II</td><td>$\tfrac{\pi}{2} \le t \le \pi$</td></tr>
    <tr><td>Lower half ($y \le 0$)</td><td>$\pi \le t \le 2\pi$</td><td>Quarter, quadrant III</td><td>$\pi \le t \le \tfrac{3\pi}{2}$</td></tr>
    <tr><td>Left half ($x \le 0$)</td><td>$\tfrac{\pi}{2} \le t \le \tfrac{3\pi}{2}$</td><td>Quarter, quadrant IV</td><td>$\tfrac{3\pi}{2} \le t \le 2\pi$</td></tr>
    <tr><td>Right half ($x \ge 0$)</td><td>$-\tfrac{\pi}{2} \le t \le \tfrac{\pi}{2}$</td><td></td><td></td></tr>
  </tbody>
</table>
<p>
  <strong>The right half is the classic trap.</strong> Its ends are at angles $\tfrac{\pi}{2}$ and $\tfrac{3\pi}{2}$, but
  $\tfrac{\pi}{2} \le t \le \tfrac{3\pi}{2}$ is the <em>left</em> half. Going through $t = 0$, the point $(R, 0)$, requires starting
  below zero: $-\tfrac{\pi}{2} \le t \le \tfrac{\pi}{2}$ (or equivalently $\tfrac{3\pi}{2} \le t \le \tfrac{5\pi}{2}$).
</p>

<h4>Check your bounds</h4>
<ul>
  <li>Plug both limits into $\mathbf{r}(t)$: you should get the two endpoints of $C$.</li>
  <li>Plug in one value in between: it should land on the part of $C$ you mean, for example a point with $x > 0$ for the right half.</li>
  <li>Make sure the interval traces $C$ only once. $0 \le t \le 4\pi$ goes around a circle twice and doubles the answer.</li>
  <li>For a curve in pieces, each piece gets its own parametrization and its own bounds.</li>
</ul>

<!-- tools -->
<h2 id="worked-examples" data-toc="Worked examples">Worked example: a semicircle</h2>
<p>Evaluate $\int_C (1 + xy^2)\,ds$, where $C$ is the right half of the unit circle $x^2 + y^2 = 1$.</p>
<p>
  Parametrize with $x = \cos t$, $y = \sin t$. The right half ($x \ge 0$) runs from the bottom of the circle to the top,
  so $-\tfrac{\pi}{2} \le t \le \tfrac{\pi}{2}$. The speed is $\sqrt{\sin^2 t + \cos^2 t} = 1$, so $ds = dt$.
</p>
$$\int_C (1 + xy^2)\,ds = \int_{-\pi/2}^{\pi/2} \left(1 + \cos t\,\sin^2 t\right)dt = \Big[\,t\,\Big]_{-\pi/2}^{\pi/2} + \left[\,\frac{\sin^3 t}{3}\,\right]_{-\pi/2}^{\pi/2} = \pi + \frac{2}{3}$$
<p>The second piece uses $u = \sin t$, $du = \cos t\,dt$, the same kind of substitution the practice problems walk through step by step.</p>

<h2>Worked example: a curve in two pieces</h2>
<p>
  Evaluate $\int_C (x + y)\,ds$, where $C$ runs along the $x$-axis from $(0, 0)$ to $(2, 0)$, then straight up to $(2, 3)$.
</p>
<p>
  When $C$ is made of smooth pieces $C_1, C_2, \ldots$, integrate over each piece separately and add:
  $\int_C f\,ds = \int_{C_1} f\,ds + \int_{C_2} f\,ds$.
</p>
<ul>
  <li>
    $C_1$: $\mathbf{r}(x) = \langle x, 0 \rangle$, $0 \le x \le 2$, so $ds = dx$ and $y = 0$:
    $\displaystyle\int_{C_1} (x + y)\,ds = \int_0^2 x\,dx = 2$.
  </li>
  <li>
    $C_2$: $\mathbf{r}(y) = \langle 2, y \rangle$, $0 \le y \le 3$, so $ds = dy$ and $x = 2$:
    $\displaystyle\int_{C_2} (x + y)\,ds = \int_0^3 (2 + y)\,dy = 6 + \frac{9}{2} = \frac{21}{2}$.
  </li>
</ul>
$$\int_C (x + y)\,ds = 2 + \frac{21}{2} = \frac{25}{2}$$

<h2 id="mass-and-center-of-mass" data-toc="Mass and center of mass">Mass and center of mass of a wire</h2>
<p>
  Picture a thin wire bent into the shape of $C$, with <strong>linear density</strong> $\rho(x, y)$ (mass per unit length) that can vary along it.
  A tiny piece of length $ds$ has mass about $\rho\,ds$, so adding them up gives the mass:
</p>
<div class="formula">
  $$m = \int_C \rho(x, y)\,ds$$
</div>
<p>
  The <strong>center of mass</strong> $(\bar{x}, \bar{y})$ is the balance point: the average position along the wire, weighted by mass.
  The integrals in the numerators are called <strong>moments</strong>:
</p>
$$\bar{x} = \frac{1}{m}\int_C x\,\rho(x, y)\,ds \qquad \bar{y} = \frac{1}{m}\int_C y\,\rho(x, y)\,ds$$
<p>In three dimensions, add $\bar{z} = \tfrac{1}{m}\int_C z\,\rho\,ds$, with $\rho(x, y, z)$.</p>

<h3>Use symmetry first</h3>
<p>
  If the wire <em>and</em> its density are both symmetric about a line, the center of mass lies on that line.
  For example, a semicircle centered at the origin with density depending only on $y$ is symmetric about the $y$-axis, so $\bar{x} = 0$
  without any integration. Symmetry of the shape alone isn't enough: a density like $\rho = x + 2$ breaks it.
</p>

<h3>When $\bar{x}$ or $\bar{y}$ is $0$</h3>
<p>
  Since $\bar{x} = \frac{1}{m}\int_C x\rho\,ds$ and the mass $m$ is positive, $\bar{x} = 0$ exactly when the moment
  $\int_C x\,\rho\,ds = 0$. Likewise $\bar{y} = 0$ exactly when $\int_C y\,\rho\,ds = 0$. Symmetry is the usual way to see that a moment is $0$
  without computing it.
</p>

<h4>$\bar{x} = 0$: symmetric about the $y$-axis</h4>
<p>Both of these must hold:</p>
<ol>
  <li><strong>The wire is symmetric about the $y$-axis:</strong> whenever $(x, y)$ is on $C$, so is its mirror image $(-x, y)$.</li>
  <li><strong>The density is symmetric too:</strong> $\rho(-x, y) = \rho(x, y)$. Any density that depends only on $y$ (or on $x^2$) works, as does a constant.</li>
</ol>
<p>
  <strong>Why it works:</strong> the points of $C$ come in mirror pairs $(x, y)$ and $(-x, y)$ with the same density and the same small length $ds$.
  Their contributions to $\int_C x\rho\,ds$ are $x\rho\,ds$ and $-x\rho\,ds$, which cancel. Every pair cancels, so the moment is $0$.
</p>

<h4>$\bar{y} = 0$: symmetric about the $x$-axis</h4>
<p>
  The same idea with the roles swapped: $C$ contains $(x, -y)$ whenever it contains $(x, y)$, and $\rho(x, -y) = \rho(x, y)$.
  Then the contributions $y\rho\,ds$ and $-y\rho\,ds$ cancel in pairs.
</p>

<h4>Both are $0$: the center of mass is the origin</h4>
<ul>
  <li><strong>Symmetric about both axes</strong>, with density symmetric both ways: for example, a full circle or an ellipse centered at the origin with constant density.</li>
  <li>
    <strong>Symmetric through the origin</strong> (point symmetry): whenever $(x, y)$ is on $C$, so is $(-x, -y)$, and $\rho(-x, -y) = \rho(x, y)$.
    The pairs cancel in both moments at once. This works even without symmetry about either axis, like a segment from $(-3, 1)$ to $(3, -1)$ with constant density.
  </li>
</ul>
<p>
  The wire doesn't need to pass through the origin. A circle centered at the origin has its center of mass there, at a point that isn't on the wire.
</p>

<h4>Common cases</h4>
<table>
  <thead><tr><th>Wire (centered at the origin)</th><th>Density</th><th>$\bar{x}$</th><th>$\bar{y}$</th></tr></thead>
  <tbody>
    <tr><td>Full circle or ellipse</td><td>constant</td><td>$0$</td><td>$0$</td></tr>
    <tr><td>Upper semicircle ($y \ge 0$)</td><td>constant, or depends only on $y$</td><td>$0$</td><td>positive</td></tr>
    <tr><td>Right semicircle ($x \ge 0$)</td><td>constant, or depends only on $x$</td><td>positive</td><td>$0$</td></tr>
    <tr><td>Quarter circle in quadrant I</td><td>constant</td><td colspan="2">equal to each other (symmetric about $y = x$), both positive</td></tr>
    <tr><td>Full unit circle</td><td>$\rho = 1 + x$</td><td>$\tfrac{1}{2}$</td><td>$0$</td></tr>
  </tbody>
</table>

<h4>When density breaks the symmetry</h4>
<p>
  The last row shows why condition 2 matters. The unit circle is symmetric about both axes, but $\rho = 1 + x$ is heavier on the right.
  With $x = \cos t$, $y = \sin t$, and $ds = dt$:
</p>
$$\begin{aligned} m &= \int_0^{2\pi} (1 + \cos t)\,dt = 2\pi \\ \int_C x\rho\,ds &= \int_0^{2\pi} \cos t\,(1 + \cos t)\,dt = 0 + \pi = \pi \\ \bar{x} &= \frac{\pi}{2\pi} = \frac{1}{2} \end{aligned}$$
<p>
  Meanwhile $\rho = 1 + x$ doesn't change when $y$ flips sign, so the symmetry about the $x$-axis survives and $\bar{y} = 0$:
  $\int_0^{2\pi} \sin t\,(1 + \cos t)\,dt = 0$.
</p>

<h4>Fine print</h4>
<ul>
  <li><strong>Symmetry is enough, but not required.</strong> A moment can also come out to $0$ by coincidence. Without symmetry, compute the integral to be sure.</li>
  <li><strong>The same holds for any line of symmetry,</strong> not just the axes: the center of mass lies on every line that is a mirror line for both the wire and its density.</li>
  <li><strong>In 3D</strong>, $\bar{z} = 0$ when the wire is symmetric across the $xy$-plane and $\rho(x, y, -z) = \rho(x, y, z)$.</li>
</ul>

<h3>Example: a quarter circle</h3>
<p>
  A wire with constant density $\rho = k$ lies along the quarter circle $x^2 + y^2 = 1$ in the first quadrant.
  Parametrize with $\langle \cos t, \sin t \rangle$, $0 \le t \le \tfrac{\pi}{2}$, so $ds = dt$.
</p>
$$m = \int_0^{\pi/2} k\,dt = \frac{\pi k}{2} \qquad \int_C x\rho\,ds = \int_0^{\pi/2} k\cos t\,dt = k\Big[\sin t\Big]_0^{\pi/2} = k$$
$$\bar{x} = \frac{k}{\pi k / 2} = \frac{2}{\pi} \approx 0.64$$
<p>
  The wire is symmetric about the line $y = x$, so $\bar{y} = \bar{x} = \tfrac{2}{\pi}$.
  The center of mass is at $\left(\tfrac{2}{\pi}, \tfrac{2}{\pi}\right)$. That point is <em>not on the wire</em>,
  which is normal for curved wires.
</p>

<h3>How density moves the center of mass</h3>
<p>
  When density is constant, $k$ cancels and the center of mass depends only on the shape (this point is called the <strong>centroid</strong>).
  When density varies, the center of mass shifts toward the heavier part. On a semicircle of radius $R$:
</p>
<ul>
  <li>Constant density: $\bar{y} = \tfrac{2R}{\pi} \approx 0.64R$.</li>
  <li>Density $\rho = ky$, heavier at the top: $\bar{y} = \tfrac{\pi R}{4} \approx 0.79R$, higher.</li>
  <li>Density $\rho = k(R - y)$, heavier at the base: $\bar{y} \approx 0.38R$, lower.</li>
</ul>

<h3>Average value along a curve</h3>
<p>The same idea gives the average value of any function along a curve of length $L$:</p>
$$f_{\text{avg}} = \frac{1}{L}\int_C f\,ds$$
<p>
  For example, the average height $y$ on the upper half of the unit circle is $\tfrac{1}{\pi}\int_0^{\pi} \sin t\,dt = \tfrac{2}{\pi}$,
  which matches $\bar{y}$ for constant density. With constant density, the center of mass is just the average position.
</p>

<h2 id="from-a-picture" data-toc="Reading ∫ f ds from a picture">Reading $\int_C f\,ds$ from a picture</h2>
<p>
  Sometimes $f$ comes as a contour map instead of a formula. Since $\int_C f\,ds$ adds up $f$ times small lengths of $C$, two things decide it: the values
  of $f$ along $C$, and how long $C$ is.
</p>
<div class="figure-row">
  <figure>
    ${O({label:`Horizontal level curves f = -1 through f = 3, one per grid line, and a segment C from (1, 1) to (3, 3).`,size:4,levelCurves:[-1,0,1,2,3].map(e=>({points:[[-1,e+1],[5,e+1]],text:`f = `+e})),curve:[[1,1],[2,2],[3,3]]})}
    <figcaption>$f = 0$ at the start of $C$ and $f = 2$ at its end. Its average is $1$, and $L = \sqrt{2^2 + 2^2} \approx 2.83$, so $\int_C f\,ds \approx 2.83$.</figcaption>
  </figure>
  <div class="figure-notes">
    <ul>
      <li>
        <strong>Direction doesn't matter.</strong> $ds$ is a length, always positive, so ignore the arrows on $C$. (For $\int_C \mathbf{F} \cdot d\mathbf{r}$ they matter a
        lot.)
      </li>
      <li>
        <strong>The sign:</strong> if $f > 0$ on all of $C$, the integral is positive; if $f < 0$ on all of it, negative. If $f$ changes sign, compare the two parts,
        both how long each is and how far from $0$ $f$ gets. A curve along the level curve $f = 0$ gives exactly $0$.
      </li>
      <li>
        <strong>An estimate:</strong> $\int_C f\,ds \approx (\text{average of } f \text{ on } C) \times L$. Read $L$ from the grid (a half circle of radius $r$ has
        $L = \pi r$), and use $f$ halfway along $C$ as the average. That's exact when $f$ changes steadily along a straight $C$, and close otherwise.
      </li>
    </ul>
  </div>
</div>

<h2 id="numerical" data-toc="When there's no antiderivative">When there's no antiderivative</h2>
<p>
  The speed $|\mathbf{r}'(t)|$ is a square root, so most curves give integrands with no elementary antiderivative. For example,
  $\int_C xe^y\,ds$ along $\mathbf{r}(t) = \langle t, t^2 \rangle$ becomes $\int te^{t^2}\sqrt{1 + 4t^2}\,dt$. Do the setup exactly, then
  hand the single-variable integral to a calculator's numerical integration (fnInt, or Simpson's rule with many subintervals) and
  round only at the end.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Forgetting $ds$.</strong> $ds$ is $|\mathbf{r}'(t)|\,dt$, not $dt$. Leaving out the speed only works when the speed is $1$.</li>
  <li><strong>Leaving $x$ and $y$ in the integrand.</strong> Every variable in $f$ must be replaced by its formula in $t$ before integrating.</li>
  <li><strong>Wrong interval for part of a circle.</strong> The upper half is $0 \le t \le \pi$, not $0 \le t \le 2\pi$. Check the endpoints land where the curve starts and stops.</li>
  <li><strong>Treating a piecewise curve as one piece.</strong> A corner means a new piece with its own parametrization and its own $ds$.</li>
  <li><strong>Dividing by length instead of mass.</strong> For center of mass, divide the moment by $m = \int_C \rho\,ds$. Dividing by the length only works when density is constant.</li>
</ul>
`,A=({p:e,q:t,r:n})=>e+t/Math.PI+n*Math.PI;function j(e){for(let t of[1,2,3,4,6,8]){let n=Math.round(e*t);if(Math.abs(n/t-e)<1e-9){let e=Math.abs(n);return{sign:Math.sign(n),tex:t===1?`${e}`:`\\frac{${e}}{${t}}`}}}return{sign:Math.sign(e),tex:`${Math.abs(e)}`}}function ne(e){let t=[],n=(e,n)=>{if(Math.abs(e)<1e-12)return;let{sign:r,tex:i}=j(e),a=n(i);t.push(t.length===0?r<0?`-${a}`:a:`${r<0?` - `:` + `}${a}`)};return n(e.p,e=>e),n(e.q,e=>e===`1`?`\\frac{1}{\\pi}`:e.startsWith(`\\frac`)?e.replace(/\}\{(\d+)\}$/,`}{$1\\pi}`):`\\frac{${e}}{\\pi}`),n(e.r,e=>e===`1`?`\\pi`:e.startsWith(`\\frac`)?e.replace(/^\\frac\{(\d+)\}/,`\\frac{$1\\pi}`):`${e}\\pi`),t.length===0?`0`:t.join(``)}function re(e){let n=t([1,2,3],e),r=t([1,2,-1,3],e),i=e()<.35,a=t([1,2,4],e),o=a*Math.PI/2,s=a===1?`\\frac{\\pi}{2}`:a===2?`\\pi`:`2\\pi`,c=e=>e===1?``:e===-1?`-`:`${e}`,l=e=>i?[n*Math.sin(e),r*e,n*Math.cos(e)]:[n*Math.cos(e),n*Math.sin(e),r*e],u=i?`\\langle ${c(n)}\\sin t,\\ ${c(r)}t,\\ ${c(n)}\\cos t \\rangle`:`\\langle ${c(n)}\\cos t,\\ ${c(n)}\\sin t,\\ ${c(r)}t \\rangle`,d=n*n+r*r,[f,p,m]=i?[`z`,`x`,`y`]:[`x`,`y`,`z`],h=Math.round(Math.sin(o)),g=t([1,2,3,-1],e),_=[{fTex:m,f:e=>i?e[1]:e[2],alongTex:`${c(r)}t`,average:{p:0,q:0,r:r*a/4}},{fTex:`${f} ${g<0?`-`:`+`} ${Math.abs(g)}`,f:e=>(i?e[2]:e[0])+g,alongTex:`${c(n)}\\cos t ${g<0?`-`:`+`} ${Math.abs(g)}`,average:{p:g,q:a===1?2*n*h:0,r:0}},{fTex:`${f}^2`,f:e=>(i?e[2]:e[0])**2,alongTex:`${n===1?``:n*n}\\cos^2 t`,average:{p:n*n/2,q:0,r:0}},{fTex:`${p}${f}`,f:e=>i?e[0]*e[2]:e[0]*e[1],alongTex:`${n===1?``:n*n}\\sin t\\cos t`,average:{p:0,q:a===1?n*n:0,r:0}}],v=t(_,e),y=A(v.average),b=Number.isInteger(Math.sqrt(d))?`${Math.sqrt(d)}`:`\\sqrt{${d}}`;return{r:l,f:v.f,T:o,problem:{promptHtml:`Let $C$ be the curve $\\mathbf{r}(t) = ${u}$ for $0 \\le t \\le ${s}$. Find the average value of $f(x, y, z) = ${v.fTex}$ along $C$.`,givenTex:``,answerTex:ne(v.average),answerValue:y,steps:[{explanation:`The average of $f$ along $C$ is $\\int_C f\\,ds$ divided by the length of $C$. Both use the speed $|\\mathbf{r}'(t)|$.`,tex:String.raw`\text{average} = \frac{\int_C f\,ds}{\int_C ds} = \frac{\int_0^{${s}} f(\mathbf{r}(t))\,|\mathbf{r}'(t)|\,dt}{\int_0^{${s}} |\mathbf{r}'(t)|\,dt}`,lessonSection:{id:`mass-and-center-of-mass`,title:`Mass and center of mass of a wire`}},{explanation:`This curve has constant speed, so the speed cancels: the average along the curve is the average of $f(\\mathbf{r}(t))$ over the $t$-interval.`,tex:String.raw`|\mathbf{r}'(t)| = \sqrt{${n*n} + ${r*r}} = ${b} \quad\Rightarrow\quad \text{average} = \frac{1}{${s}}\int_0^{${s}} f(\mathbf{r}(t))\,dt`},{explanation:`On the curve, $f(\\mathbf{r}(t)) = ${v.alongTex}$. Integrate over $[0, ${s}]$ and divide by $${s}$. (So $\\int_C f\\,ds = ${b} \\cdot ${s} \\cdot (\\text{average})$ and the length is $${b} \\cdot ${s}$.)`,tex:String.raw`\frac{1}{${s}}\int_0^{${s}} ${v.alongTex}\,dt = ${ne(v.average)}${Number.isInteger(y)?``:` \\approx ${Math.round(y*1e4)/1e4}`}`}]}}}var ie=[{build:re}],M=()=>[T(0),T(0),T(0),T(0)],N=(e,t)=>M().map((n,r)=>r===t?e:n),P=(...e)=>M().map((t,n)=>e.reduce((e,t)=>b(e,t[n]),T(0))),F=(e,t)=>e.map(e=>w(e,t)),I=e=>e.reduce((e,t,n)=>e+v(t)*Math.PI**n,0);function L(e){let t=e.map((e,t)=>({c:e,k:t})).filter(({c:e})=>e.num!==0).map(({c:e,k:t})=>{let n=t===0?``:t===1?String.raw`\pi`:String.raw`\pi^${t}`,r=T(Math.abs(e.num),e.den),i=t>0&&r.num===1&&r.den===1?``:_(r),a=t>0&&r.den!==1?String.raw`\frac{${r.num===1?``:r.num}${n}}{${r.den}}`:`${i}${n}`;return{negative:e.num<0,text:a}});return t.length===0?`0`:t.map(({negative:e,text:t},n)=>n===0?`${e?`-`:``}${t}`:`${e?`-`:`+`} ${t}`).join(` `)}function ae(t){let{outside:n,inside:r}=e(t);return{tex:r===1?n===1?``:`${n}`:`${n===1?``:n}\\sqrt{${r}}`,outside:n,inside:r}}function oe(e,t){let{outside:n,inside:r}=ae(t),i=F(e,T(n));if(r===1)return L(i);let a=L(i);return a.includes(` `)?String.raw`\sqrt{${r}}\left(${a}\right)`:a===`1`?String.raw`\sqrt{${r}}`:a===`-1`?String.raw`-\sqrt{${r}}`:String.raw`${a}\sqrt{${r}}`}var R=e=>/\s[+-]\s/.test(e)?String.raw`\left(${e}\right)`:e,z=String.raw`\int_C f\,ds = \int_a^b f\big(\mathbf{r}(t)\big)\,|\mathbf{r}'(t)|\,dt`,B=e=>[0,1,0,-1][(e%4+4)%4],V=e=>[1,0,-1,0][(e%4+4)%4],H=e=>e===0?`0`:l(e,2,String.raw`\pi`);function se(e,t){return{one:N(T(t-e,2),1),cos:N(T(B(t)-B(e)),0),sin:N(T(V(e)-V(t)),0),cosSin:N(T(B(t)**2-B(e)**2,2),0),cos2:N(T(t-e,4),1),sin2:N(T(t-e,4),1)}}function U(e,t,n){let r=se(t,n);return{one:F(r.one,T(e)),x:F(r.cos,T(e*e)),y:F(r.sin,T(e*e)),xy:F(r.cosSin,T(e**3)),x2:F(r.cos2,T(e**3)),y2:F(r.sin2,T(e**3))}}var W=[{key:`one`,body:``,trig:``,value:()=>1},{key:`x`,body:`x`,trig:String.raw`\cos t`,value:([e])=>e},{key:`y`,body:`y`,trig:String.raw`\sin t`,value:([,e])=>e},{key:`xy`,body:`xy`,trig:String.raw`\cos t\sin t`,value:([e,t])=>e*t},{key:`x2`,body:`x^{2}`,trig:String.raw`\cos^2 t`,value:([e])=>e*e},{key:`y2`,body:`y^{2}`,trig:String.raw`\sin^2 t`,value:([,e])=>e*e}],ce={one:`t`,x:String.raw`\sin t`,y:String.raw`-\cos t`,xy:String.raw`\tfrac{1}{2}\sin^2 t`,x2:String.raw`\tfrac{t}{2} + \tfrac{\sin 2t}{4}`,y2:String.raw`\tfrac{t}{2} - \tfrac{\sin 2t}{4}`};function G(e,t,n){return[{explanation:String.raw`Parametrize the arc: $x = ${e===1?``:e}\cos t$, $y = ${e===1?``:e}\sin t$, with $t$ from $${H(t)}$ to $${H(n)}$. The speed is the radius, so $ds = ${e===1?``:e}\,dt$.`,tex:String.raw`\mathbf{r}(t) = \left\langle ${e===1?``:e}\cos t,\ ${e===1?``:e}\sin t \right\rangle, \qquad |\mathbf{r}'(t)| = \sqrt{${e*e}\sin^2 t + ${e*e}\cos^2 t} = ${e}`,technique:d}]}var K=(e,t)=>`(${e*V(t)}, ${e*B(t)})`,le={name:`circle arc (general)`,build(e){let n=t([1,2,3,4],e),r=t([0,1,2,3,-1],e),i=r+t([1,2],e),a=c(()=>W.map(()=>e()<.45?t([-3,-2,-1,1,2,3,4],e):0),e=>e.filter(e=>e!==0).length<2||e.filter(e=>e!==0).length>3),o=U(n,r,i),s=W.map((e,t)=>({basis:e,c:a[t]})).filter(({c:e})=>e!==0),l=P(...s.map(({basis:e,c:t})=>F(o[e.key],T(t)))),u=E(s.map(({basis:e,c:t})=>({coef:t,body:e.body}))),d=E(s.map(({basis:e,c:t})=>({coef:t*n**(e.key===`one`?1:e.key.length===1?2:3),body:e.trig}))),f=s.map(({basis:e,c:t})=>{let r=t*n**(e.key===`one`?1:e.key.length===1?2:3);return String.raw`\int ${E([{coef:r,body:e.trig===``?``:e.trig}])}\,dt &\to ${r===1?``:r===-1?`-`:r}\left[${ce[e.key]}\right] = ${L(F(o[e.key],T(t)))}`}),p=[{explanation:`Start from the formula for a line integral with respect to arc length.`,tex:z},...G(n,r,i),{explanation:`Substitute x and y, and multiply by ds = ${n} dt.`,tex:String.raw`\int_C ${R(u)}\,ds = \int_{${H(r)}}^{${H(i)}} \left(${d}\right)dt`},{explanation:String.raw`Integrate each term. $\cos^2 t$ and $\sin^2 t$ use the power-reducing identities, and $\sin 2t$ is $0$ at multiples of $\frac{\pi}{2}$.`,tex:String.raw`\begin{aligned} ${f.join(String.raw` \\ `)} \end{aligned}`,technique:s.some(({basis:e})=>e.key===`x2`||e.key===`y2`)?m:void 0},{explanation:`Add them.`,tex:String.raw`\int_C ${R(u)}\,ds = ${L(l)}`}];return{problem:{promptHtml:String.raw`Evaluate $\int_C ${R(u)}\,ds$, where $C$ is the arc of the circle $x^2 + y^2 = ${n*n}$ from $${K(n,r)}$ to $${K(n,i)}$, counterclockwise.`,givenTex:String.raw`\int_C ${R(u)}\,ds, \qquad C:\ x^2 + y^2 = ${n*n},\ ${K(n,r)} \to ${K(n,i)}`,answerTex:L(l),answerValue:I(l),steps:p},pieces:[{position:e=>[n*Math.cos(e),n*Math.sin(e)],start:r*Math.PI/2,end:i*Math.PI/2}],integrand:e=>s.reduce((t,{basis:n,c:r})=>t+r*n.value(e),0)}}};function ue(e,t){let n=g(1);for(let r=0;r<t;r++)n=x(n,e);return n}var de=[[3,4,0,5],[6,8,0,10],[5,12,0,13],[1,2,2,3],[2,3,6,7],[1,4,8,9],[4,4,7,9],[2,6,9,11]],fe={name:`line segment (general)`,build(e){let n=t(de,e),r=n[2]===0?2:3,i=n[3],a=t(r===2?[[0,1],[1,0]]:[[0,1,2],[2,0,1],[1,2,0],[0,2,1]],e).map(r=>n[r]*t([1,-1],e)),o=a.map(()=>t([-2,-1,0,1,2,3],e)),s=o.map((e,t)=>e+a[t]),l=r===2?[[1,0,0],[0,1,0],[1,1,0],[2,0,0],[0,2,0],[0,0,0]]:[[1,0,0],[0,1,0],[0,0,1],[1,1,0],[0,1,1],[1,0,1],[0,0,0]],u=c(()=>Array.from({length:t([1,2],e)},()=>[t([-2,-1,1,2,3],e),t(l,e)]),e=>new Set(e.map(([,e])=>e.join())).size<e.length),d=o.map((e,t)=>g(e,a[t])),p=ee(...u.map(([e,t])=>S(t.reduce((e,t,n)=>x(e,ue(d[n]??g(0),t)),g(1)),T(e)))),m=C(p),D=b(h(m,T(1)),w(T(-1),h(m,T(0)))),O=w(D,T(i)),k=E(u.map(([e,t])=>te(e,t).f)),A=e=>`(${e.join(`, `)})`,j=[{explanation:`Start from the formula for a line integral with respect to arc length.`,tex:z},{explanation:String.raw`Parametrize the segment from $${A(o)}$ to $${A(s)}$ with $\mathbf{r}(t) = \mathbf{r}_0 + t(\mathbf{r}_1 - \mathbf{r}_0)$, $0 \le t \le 1$. The speed is the segment's length.`,tex:String.raw`\mathbf{r}(t) = \left\langle ${d.map(e=>y(e)).join(`, `)} \right\rangle, \qquad |\mathbf{r}'(t)| = \sqrt{${a.map(e=>e*e).join(` + `)}} = ${i}`,technique:f},{explanation:`Substitute into f, expand, and multiply by ds = (length) dt.`,tex:String.raw`\int_C ${R(k)}\,ds = ${i}\int_0^1 \left(${y(p)}\right)dt`},{explanation:`Integrate with the power rule and evaluate.`,tex:String.raw`= ${i}\Big[\,${y(m)}\,\Big]_0^1 = ${i}\left(${_(D)}\right) = ${_(O)}`}];return{problem:{promptHtml:String.raw`Evaluate $\int_C ${R(k)}\,ds$, where $C$ is the line segment from $${A(o)}$ to $${A(s)}$.`,givenTex:String.raw`\int_C ${R(k)}\,ds, \qquad C:\ ${A(o)} \to ${A(s)}`,answerTex:_(O),answerValue:v(O),steps:j},pieces:[{position:e=>o.map((t,n)=>t+a[n]*e),start:0,end:1}],integrand:e=>u.reduce((t,[n,r])=>t+te(n,r).value([...e,0,0].slice(0,3)),0)}}},pe={name:`helix (general)`,build(e){let n=t([1,2,3,4],e),r=t([1,2,3,4],e),i=t([1,2,3,4],e),a=e()<.4,o=[{body:``,integral:N(T(i,2),1),value:()=>1,piece:`1`},{body:`z`,integral:N(T(r*i*i,8),2),value:e=>e[2],piece:`${r}t`},{body:`x^{2}`,integral:N(T(n*n*i,4),1),value:e=>e[0]**2,piece:`${n*n}\\cos^2 t`},{body:`y^{2}`,integral:N(T(n*n*i,4),1),value:e=>e[1]**2,piece:`${n*n}\\sin^2 t`},{body:`z^{2}`,integral:N(T(r*r*i**3,24),3),value:e=>e[2]**2,piece:`${r*r}t^2`}],s=c(()=>o.map(()=>e()<.45?t(a?[1,2,3]:[-2,-1,1,2,3],e):0),e=>e.filter(e=>e!==0).length<2||e.filter(e=>e!==0).length>3),l=o.map((e,t)=>({term:e,c:s[t]})).filter(({c:e})=>e!==0),u=P(...l.map(({term:e,c:t})=>F(e.integral,T(t)))),f=n*n+r*r,p=E(l.map(({term:e,c:t})=>({coef:t,body:e.body}))),h=H(i),g=String.raw`\mathbf{r}(t) = \left\langle ${n===1?``:n}\cos t,\ ${n===1?``:n}\sin t,\ ${r===1?``:r}t \right\rangle,\ 0 \le t \le ${h}`,_=oe(u,f),v=[{explanation:a?`The mass of a wire is the integral of its density with respect to arc length.`:`Start from the formula for a line integral with respect to arc length.`,tex:a?String.raw`m = \int_C \rho\,ds = \int_a^b \rho\big(\mathbf{r}(t)\big)\,|\mathbf{r}'(t)|\,dt`:z},{explanation:String.raw`Find the speed; $\sin^2 t + \cos^2 t = 1$ makes it a constant.`,tex:String.raw`|\mathbf{r}'(t)| = \sqrt{${n*n}\sin^2 t + ${n*n}\cos^2 t + ${r*r}} = \sqrt{${f}}`,technique:d},{explanation:String.raw`Substitute $x = ${n}\cos t$, $y = ${n}\sin t$, $z = ${r}t$, and pull out the constant speed.`,tex:String.raw`\sqrt{${f}}\int_0^{${h}} \left(${E(l.map(({term:e,c:t})=>({coef:t,body:e.piece===`1`?``:e.piece})))}\right)dt`},{explanation:String.raw`Integrate term by term. Over a multiple of $\frac{\pi}{2}$, $\cos^2 t$ and $\sin^2 t$ each integrate to half the length.`,tex:String.raw`\int_0^{${h}} \left(\cdots\right)dt = ${L(u)}`,technique:l.some(({term:e})=>e.body===`x^{2}`||e.body===`y^{2}`)?m:void 0},{explanation:`Multiply by the speed.`,tex:String.raw`${a?`m`:String.raw`\int_C ${R(p)}\,ds`} = ${_}`}];return{problem:{promptHtml:a?String.raw`A thin wire has the shape of the helix $${g}$, and its density is $\rho(x, y, z) = ${p}$. Find its mass.`:String.raw`Evaluate $\int_C ${R(p)}\,ds$, where $C$ is the helix $${g}$.`,givenTex:String.raw`${a?String.raw`\rho = ${p}`:String.raw`\int_C ${R(p)}\,ds`}, \qquad ${g}`,answerTex:_,answerValue:I(u)*Math.sqrt(f),steps:v},pieces:[{position:e=>[n*Math.cos(e),n*Math.sin(e),r*e],start:0,end:i*Math.PI/2}],integrand:e=>l.reduce((t,{term:n,c:r})=>t+r*n.value(e),0)}}};function me(t){let{outside:n,inside:r}=e(t);return r===1?`${t*n}`:String.raw`${t*n}\sqrt{${r}}`}var he={name:`parabola then segment (general)`,build(e){let{a:n,X:r,c:i,second:a}=u(()=>{let n=t([1,2,3],e);return{a:t([1,2,3,4],e),X:n,c:t([1,2,3,4,5,6],e),second:t([{kind:`vertical`,amount:t([1,2,3,-1,-2],e)},{kind:`horizontal`,amount:t([1,2,-1],e)}],e)}},e=>e.a===1&&e.X===1&&e.c===2&&e.second.kind===`vertical`&&e.second.amount===1),o=[r,n*r*r],s=a.kind===`vertical`?[r,o[1]+a.amount]:[r+a.amount,o[1]],c=1+4*n*n*r*r,d=T(i,12*n*n),f=v(d)*(c**1.5-1),m=a.kind===`vertical`?T(i*r*Math.abs(a.amount)):T(i*Math.abs(s[0]**2-r*r),2),h=String.raw`${l(i,12*n*n)}\left(${me(c)} - 1\right)`,g=`${h} + ${_(m)}`,y=`${i===1?``:i}x`,b=`y = ${n===1?``:n}x^2`,x=[{explanation:`C has two smooth pieces, so split the integral.`,tex:String.raw`\int_C ${y}\,ds = \int_{C_1} ${y}\,ds + \int_{C_2} ${y}\,ds`},{explanation:String.raw`$C_1$ is the graph of $${b}$, so use $x$ as the parameter: $ds = \sqrt{1 + (${2*n}x)^2}\,dx$.`,tex:String.raw`\int_{C_1} ${y}\,ds = \int_0^{${r}} ${y}\sqrt{1 + ${4*n*n}x^2}\,dx`},{explanation:String.raw`Substitute $u = 1 + ${4*n*n}x^2$, $du = ${8*n*n}x\,dx$, and change the bounds to $u = 1$ and $u = ${c}$.`,tex:String.raw`= \frac{${i}}{${8*n*n}}\int_1^{${c}} u^{1/2}\,du = \frac{${i}}{${8*n*n}}\cdot\frac{2}{3}\Big[\,u^{3/2}\,\Big]_1^{${c}} = ${h}`,technique:p},a.kind===`vertical`?{explanation:String.raw`$C_2$ is vertical, so $x = ${r}$ is constant and $ds = |dy|$: the integral is $${i} \cdot ${r}$ times its length $${Math.abs(a.amount)}$.`,tex:String.raw`\int_{C_2} ${y}\,ds = ${i*r} \cdot ${Math.abs(a.amount)} = ${_(m)}`}:{explanation:String.raw`$C_2$ is horizontal, so $ds = |dx|$, with $x$ from $${r}$ to $${s[0]}$.`,tex:String.raw`\int_{C_2} ${y}\,ds = \int_{${Math.min(r,s[0])}}^{${Math.max(r,s[0])}} ${y}\,dx = ${_(m)}`},{explanation:`Add the two pieces.`,tex:String.raw`\int_C ${y}\,ds = ${g}`}];return{problem:{promptHtml:String.raw`Evaluate $\int_C ${y}\,ds$, where $C$ consists of the arc of the parabola $${b}$ from $(0, 0)$ to $(${o.join(`, `)})$, followed by the line segment from $(${o.join(`, `)})$ to $(${s.join(`, `)})$.`,givenTex:String.raw`\int_C ${y}\,ds, \qquad C = C_1 \cup C_2`,answerTex:g,answerValue:f+v(m),steps:x},pieces:[{position:e=>[e,n*e*e],start:0,end:r},a.kind===`vertical`?{position:e=>[r,e],start:Math.min(o[1],s[1]),end:Math.max(o[1],s[1])}:{position:e=>[e,o[1]],start:Math.min(r,s[0]),end:Math.max(r,s[0])}],integrand:([e])=>i*e}}};function ge(e,t){let n=[...e,...t].map(e=>e.den).reduce((e,t)=>e*t/i(e,t),1),[r,a]=[F(e,T(n)),F(t,T(n))],o=[...r,...a].map(e=>e.num).reduce((e,t)=>i(e,t),0)||1,[s,c]=[F(r,T(1,o)),F(a,T(1,o))];return s.every(e=>e.num===0)?`0`:String.raw`\frac{${L(s)}}{${L(c)}}`}var _e={name:`center of mass (general)`,build(e){let n=[{name:`the upper half of the circle`,q0:0,q1:2},{name:`the right half of the circle`,q0:-1,q1:1},{name:`the first-quadrant quarter of the circle`,q0:0,q1:1}],{R:r,arc:i,a,b:o,variable:s,ask:l}=c(()=>({R:t([1,2,3,4,5],e),arc:t(n,e),a:t([1,2,3,4,6],e),b:t([0,1,2,3],e),variable:t([`x`,`y`],e),ask:t([`x`,`y`],e)}),e=>Math.min(...Array.from({length:21},(t,n)=>{let r=(e.arc.q0+(e.arc.q1-e.arc.q0)*n/20)*Math.PI/2;return e.a+e.b*(e.variable===`x`?e.R*Math.cos(r):e.R*Math.sin(r))}))<=0),u=U(r,i.q0,i.q1),d=P(F(u.one,T(a)),F(s===`x`?u.x:u.y,T(o))),f=l===`x`?P(F(u.x,T(a)),F(s===`x`?u.x2:u.xy,T(o))):P(F(u.y,T(a)),F(s===`x`?u.xy:u.y2,T(o))),p=o===0?`${a}`:`${a} + ${o===1?``:o}${s}`,h=ge(f,d),g=l===`x`?String.raw`\bar{x}`:String.raw`\bar{y}`,_=[{explanation:String.raw`The center of mass of a wire is $\bar{x} = \frac{1}{m}\int_C x\rho\,ds$, $\bar{y} = \frac{1}{m}\int_C y\rho\,ds$, with mass $m = \int_C \rho\,ds$.`,tex:String.raw`${g} = \frac{\int_C ${l}\,\rho\,ds}{\int_C \rho\,ds}`,lessonSection:{id:`mass-and-center-of-mass`,title:`Mass and center of mass of a wire`}},...G(r,i.q0,i.q1),{explanation:`Find the mass by integrating the density.`,tex:String.raw`m = \int_C \left(${p}\right)ds = ${L(d)}`},{explanation:`Find the moment: integrate ${l} times the density.`,tex:String.raw`\int_C ${l}\left(${p}\right)ds = ${L(f)}`,technique:s===`x`&&l===`x`||s===`y`&&l===`y`?m:void 0},{explanation:`Divide.`,tex:String.raw`${g} = ${h}`}],v={promptHtml:String.raw`A thin wire lies along ${i.name} $x^2 + y^2 = ${r*r}$ and has density $\rho(x, y) = ${p}$. Find $${g}$, the ${l}-coordinate of its center of mass.`,givenTex:String.raw`\rho = ${p}, \qquad x^2 + y^2 = ${r*r}`,answerTex:h,answerValue:I(f)/I(d),steps:_},y=e=>a+o*(s===`x`?e[0]:e[1]);return{problem:v,pieces:[{position:e=>[r*Math.cos(e),r*Math.sin(e)],start:i.q0*Math.PI/2,end:i.q1*Math.PI/2}],integrand:e=>(l===`x`?e[0]:e[1])*y(e),weight:y}}},ve=[{tex:String.raw`xy\tan^{-1} z`,f:([e,t,n])=>e*t*Math.atan(n),dims:3},{tex:String.raw`\sin(xy)`,f:([e,t])=>Math.sin(e*t),dims:2},{tex:String.raw`xe^{y}`,f:([e,t])=>e*Math.exp(t),dims:2},{tex:String.raw`\sqrt{1 + x^2}`,f:([e])=>Math.sqrt(1+e*e),dims:2},{tex:String.raw`z\ln(1 + x^2 + y^2)`,f:([e,t,n])=>n*Math.log(1+e*e+t*t),dims:3},{tex:String.raw`x^2 + \cos y`,f:([e,t])=>e*e+Math.cos(t),dims:2},{tex:String.raw`yz e^{x}`,f:([e,t,n])=>t*n*Math.exp(e),dims:3}],ye=[{tex:[`t^2`,`t^3`,String.raw`\sqrt{t}`],r:e=>[e*e,e**3,Math.sqrt(e)]},{tex:[`t`,`t^2`,`t^3`],r:e=>[e,e*e,e**3]},{tex:[String.raw`\cos t`,String.raw`\sin t`,`t`],r:e=>[Math.cos(e),Math.sin(e),e]},{tex:[`e^{t}`,`t`,`t^2`],r:e=>[Math.exp(e),e,e*e]},{tex:[`1 + t`,`t^2`,`2t`],r:e=>[1+e,e*e,2*e]}];function be(e,t,n,r=4e3){let i=(n-t)/r,a=e(t)+e(n);for(let n=1;n<r;n++)a+=(n%2==0?2:4)*e(t+n*i);return a*i/3}var xe={name:`∫ f ds to four decimal places`,build(e){let{piece:n,curve:r,interval:i,c:a,r:o,f:s,answer:l}=c(()=>{let n=u(()=>({piece:t(ve,e),curve:t(ye,e),interval:t([[1,2],[.5,1.5],[1,3],[.2,1],[.5,2],[1,1.5],[2,3]],e),c:t([1,1,2,3,4,5],e)}),e=>e.c===1&&e.piece.tex===String.raw`xy\tan^{-1} z`&&e.curve.tex[2]===String.raw`\sqrt{t}`&&e.interval.join()===`1,2`),r=e=>n.curve.r(e).slice(0,n.piece.dims),i=e=>n.c*n.piece.f([...e,0]),a=1e-6,o=e=>Math.hypot(...r(e+a).map((t,n)=>(t-r(e-a)[n])/(2*a)));return{...n,r,f:i,answer:be(e=>i(r(e))*o(e),n.interval[0],n.interval[1])}},e=>!(Math.abs(e.answer)<=200&&Math.abs(e.answer)>=.05)),d=n.dims,f=a===1?n.tex:`${a}${R(n.tex)}`,p=r.tex.slice(0,d);return{problem:{promptHtml:String.raw`Evaluate $\int_C ${R(f)}\,ds$ correct to four decimal places, where $C$ is $\mathbf{r}(t) = \left\langle ${p.join(`, `)} \right\rangle$, $${i[0]} \le t \le ${i[1]}$. (Set up the integral, then use a calculator or computer.)`,givenTex:String.raw`\int_C ${R(f)}\,ds, \qquad \mathbf{r}(t) = \left\langle ${p.join(`, `)} \right\rangle,\ ${i[0]} \le t \le ${i[1]}`,answerTex:l.toFixed(4),answerValue:l,rounding:{decimals:4},steps:[{explanation:`Set up the integral: substitute r(t) into f, and multiply by the speed |r'(t)|.`,tex:z},{explanation:`The integrand has no elementary antiderivative, so approximate it numerically (a calculator's fnInt, or Simpson's rule with many subintervals) and round at the end.`,tex:String.raw`\int_C ${R(f)}\,ds \approx ${l.toFixed(4)}`}]},pieces:[{position:o,start:i[0],end:i[1]}],integrand:s}}},q=4,J=(e,t,n=61)=>Array.from({length:n},(r,i)=>e+(t-e)*i/(n-1)),Se=[e=>{let[n,r]=c(()=>[t([-1,-.5,0,.5,1,1.5],e),t([-1,-.5,0,.5,1,1.5],e)],([e,t])=>e===0&&t===0),i=t([-4,-3,-2,-1,0,1,2],e);return{f:(e,t)=>n*e+r*t+i,level:e=>Math.abs(r)>=Math.abs(n)?J(-1,5).map(t=>[t,(e-i-n*t)/r]):J(-1,5).map(t=>[(e-i-r*t)/n,t])}},e=>{let[n,r,i,a]=[t([.15,.25,.4],e),t([0,4,2],e),t([1,-1],e),t([-3,-2,-1,0,1,2],e)];return{f:(e,t)=>i*(t-n*(e-r)**2)+a,level:e=>J(-1,5).map(t=>[t,(e-a)/i+n*(t-r)**2])}},e=>{let n=t([[0,0],[4,0],[0,4],[4,4],[-1,2],[2,-1],[5,2]],e),[r,i]=[t([1,-1],e),t([-4,-3,-2,-1,0,1,2,3],e)];return{f:(e,t)=>i+r*Math.hypot(e-n[0],t-n[1]),level:e=>{let t=(e-i)/r;return t<=0?[]:J(0,2*Math.PI,121).map(e=>[n[0]+t*Math.cos(e),n[1]+t*Math.sin(e)])}}}];function Y(e){let t=J(0,q,21).flatMap(t=>J(0,q,21).map(n=>e.f(t,n))),[n,r]=[Math.ceil(Math.min(...t)),Math.floor(Math.max(...t))],i=r-n>8?2:1,a=[];for(let t=n+(n%i+i)%i;t<=r;t+=i){let n=e.level(t);n.length>0&&D(n,q)&&a.push({k:t,curve:{points:n,text:`f = ${t}`}})}return a}var Ce=(e,t,n,r)=>J(n,r,201).map(n=>[e[0]+t*Math.cos(n),e[1]+t*Math.sin(n)]),we=[e=>{let n=[t([1,2,3],e),t([1,2,3],e)],r=t([1,1.5],e),i=t([0,1,2,3],e),a=i*Math.PI/2+Math.PI/2,o=Ce(n,r,a,a+Math.PI);return{kind:`semicircle ${n.join()} ${r} ${i}`,points:e()<.5?o:o.reverse(),length:Math.PI*r,lengthTex:String.raw`C \text{ is half of a circle of radius } ${r}\text{, so } L = ${r===1?``:r}\pi \approx ${(Math.PI*r).toFixed(2)}`}},e=>{let n=t([1,2],e),r=[t([1,2,3],e),t([1,2,3],e)],i=t([1,3,5,7],e)*Math.PI/4,a=Ce(r,n,i-Math.PI/4,i+Math.PI/4);return{kind:`quarter ${r.join()} ${n}`,points:e()<.5?a:a.reverse(),length:Math.PI*n/2,lengthTex:String.raw`C \text{ is a quarter of a circle of radius } ${n}\text{, so } L = \tfrac{${n===1?``:n}\pi}{2} \approx ${(Math.PI*n/2).toFixed(2)}`}},e=>{let{from:n,to:r}=c(()=>({from:[t([0,1,2,3,4],e),t([0,1,2,3,4],e)],to:[t([0,1,2,3,4],e),t([0,1,2,3,4],e)]}),({from:e,to:t})=>Math.hypot(t[0]-e[0],t[1]-e[1])<2),[i,a]=[r[0]-n[0],r[1]-n[1]],o=Math.hypot(i,a),s=Number.isInteger(o)?`${o}`:String.raw`\sqrt{${i*i+a*a}} \approx ${o.toFixed(2)}`;return{kind:`segment ${n.join()} ${r.join()}`,points:J(0,1,101).map(e=>[n[0]+i*e,n[1]+a*e]),length:o,lengthTex:String.raw`C \text{ runs from } (${n.join(`, `)}) \text{ to } (${r.join(`, `)})\text{, so } L = \sqrt{${i*i} + ${a*a}} = ${s}`}},e=>{let n=[t([1,2,3],e),t([1,2,3],e)],r=[n[0]+t([-2,-1,1],e),n[1]],i=[n[0],n[1]+t([-2,-1,1],e)],[a,o]=e()<.5?[r,i]:[i,r],s=(e,t)=>J(0,1,51).map(n=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n]),c=Math.abs(r[0]-n[0])+Math.abs(i[1]-n[1]);return{kind:`corner ${a.join()} ${n.join()} ${o.join()}`,points:[...s(a,n),...s(n,o).slice(1)],length:c,lengthTex:String.raw`C \text{ is two grid segments, of lengths } ${Math.abs(a[0]-n[0])+Math.abs(a[1]-n[1])} \text{ and } ${Math.abs(o[0]-n[0])+Math.abs(o[1]-n[1])}\text{, so } L = ${c}`}}],Te=([e,t])=>Math.min(e,t,q-e,q-t)>=.2;function X(e,t){let n=0;for(let r=1;r<e.length;r++){let[i,a]=[e[r-1],e[r]];n+=(t(i)+t(a))/2*Math.hypot(a[0]-i[0],a[1]-i[1])}return n}function Ee(e){let t=X(e,()=>1),n=0;for(let r=1;r<e.length;r++)if(n+=Math.hypot(e[r][0]-e[r-1][0],e[r][1]-e[r-1][1]),n>=t/2)return e[r];return e[e.length-1]}var Z=e=>String(Math.round(e*10)/10+0),De={explanation:String.raw`$\int_C f\,ds$ adds up $f$ times small lengths of $C$. Lengths are positive, so the arrows on $C$ don't matter here: only the values of $f$ along $C$ do.`,tex:String.raw`\int_C f\,ds \approx (\text{average of } f \text{ on } C) \times (\text{length of } C)`,lessonSection:{id:`from-a-picture`,title:`Reading ∫ f ds from a picture`}};function Oe(e,t){return O({label:`A contour map of f with labeled level curves and a curve C drawn with arrows.`,size:q,levelCurves:Y(e).map(({curve:e})=>e),curve:t.points})}function ke(e,t){let n=[[]];for(let t of e.level(0))Math.min(t[0],t[1],q-t[0],q-t[1])>=.4?n[n.length-1].push(t):n[n.length-1].length>0&&n.push([]);let r=n.reduce((e,t)=>t.length>e.length?t:e);if(r.length<10)return;let i=Math.floor(t()*(r.length/3)),a=r.slice(i,i+Math.max(8,Math.floor(r.length/2))),o=X(a,()=>1);return o<1.2?void 0:{kind:`on the zero level`,points:a,length:o,lengthTex:``}}var Ae={name:`sign of ∫ f ds from a contour map`,build(e){let{fn:n,curve:r,value:i}=c(()=>{let n=t(Se,e)(e),r=(e()<1/7?ke(n,e):void 0)??t(we,e)(e),i=r.kind===`on the zero level`;return{fn:n,curve:r,value:i?0:X(r.points,([e,t])=>n.f(e,t)),onZero:i}},({fn:e,curve:t,value:n,onZero:r})=>{if(!t.points.every(Te)||Y(e).length<3)return!0;if(r)return!1;let i=X(t.points,([t,n])=>Math.abs(e.f(t,n)));return Math.abs(n)<.25*i||i<.6}),a=i===0?`Zero`:i>0?`Positive`:`Negative`,o=r.points.map(([e,t])=>n.f(e,t)),[s,l]=[Math.min(...o),Math.max(...o)],u=[De,{explanation:i===0?String.raw`$C$ lies along the level curve $f = 0$, so $f = 0$ at every point of $C$, and so is the integral.`:s>=0?String.raw`Read the levels $C$ crosses: $f$ runs from about $${Z(s)}$ to $${Z(l)}$ along $C$, so $f \ge 0$ on all of $C$. Every piece adds a positive amount.`:l<=0?String.raw`Read the levels $C$ crosses: $f$ runs from about $${Z(s)}$ to $${Z(l)}$ along $C$, so $f \le 0$ on all of $C$. Every piece adds a negative amount.`:String.raw`$f$ runs from about $${Z(s)}$ to $${Z(l)}$ along $C$: positive on part of it and negative on the rest. Compare the two parts, both how long each is and how far from $0$ $f$ gets there. The ${i>0?`positive`:`negative`} part wins.`,tex:String.raw`\int_C f\,ds ${i===0?`= 0`:i>0?`> 0`:`< 0`}`}];return{problem:{promptHtml:String.raw`The figure shows a contour map of a function $f$ and a curve $C$. Is $\int_C f(x, y)\,ds$ positive, negative, or zero?`,givenTex:``,figureHtml:Oe(n,r),answerTex:String.raw`\text{${a}}`,choices:[`Positive`,`Negative`,`Zero`],correctChoice:a,steps:u},value:i,fn:n,curve:r}}},je={name:`estimate ∫ f ds from a contour map`,build(e){let n=c(()=>{let n=t(Se,e)(e),r=t(we,e)(e),i=X(r.points,([e,t])=>n.f(e,t)),a=Ee(r.points),o=n.f(a[0],a[1])*r.length;return{fn:n,curve:r,value:i,middle:a,estimate:o,spacing:[1,2,3,5].map(t=>({s:t,key:e()})).sort((e,t)=>e.key-t.key).map(({s:e})=>e).find(e=>{let t=Math.round(i/e);return Math.abs(t)<=3&&Math.abs(i/e-t)<=.25&&Math.round(o/e)===t&&Math.abs(o/e-t)<=.35})}},({fn:e,curve:t,spacing:n})=>n===void 0||!t.points.every(Te)||Y(e).length<3||t.kind.startsWith(`semicircle 3,2 1 0`)&&n===3),{fn:r,curve:i,value:a,middle:o,estimate:s}=n,l=n.spacing,u=l*Math.round(a/l)+0,d=[-3,-2,-1,0,1,2,3].map(e=>String(e*l+0)),[f,p]=[i.points[0],i.points[i.points.length-1]],m=[De,{explanation:`Measure C on the grid.`,tex:i.lengthTex},{explanation:String.raw`Read $f$ from the level curves: about $${Z(r.f(...f))}$ at one end of $C$ and $${Z(r.f(...p))}$ at the other. Halfway along $C$, at about $(${Z(o[0])}, ${Z(o[1])})$, $f \approx ${Z(r.f(...o))}$: a good stand-in for its average.`,tex:String.raw`\text{average of } f \text{ on } C \approx ${Z(r.f(...o))}`},{explanation:`Multiply, and pick the closest choice. (The exact value is about ${Z(a)}.)`,tex:String.raw`\int_C f\,ds \approx ${Z(r.f(...o))} \times ${i.length.toFixed(2)} \approx ${Z(s)} \quad\Rightarrow\quad ${u}`}];return{problem:{promptHtml:String.raw`The figure shows a contour map of a function $f$ and a curve $C$. Which value is closest to $\int_C f(x, y)\,ds$?`,givenTex:``,figureHtml:Oe(r,i),answerTex:String(u),choices:d,correctChoice:String(u+0),steps:m},value:a,spacing:l,correct:u}}},Me=String.raw`\int_C f(x, y)\,ds = \int_a^b f\big(x(t), y(t)\big)\,|\mathbf{r}'(t)|\,dt`,Ne=String.raw`\int_C f(x, y, z)\,ds = \int_a^b f\big(\mathbf{r}(t)\big)\,|\mathbf{r}'(t)|\,dt`;function Q(e){return{explanation:String.raw`Start from the formula for a line integral with respect to arc length. The factor $|\mathbf{r}'(t)|\,dt$ is $ds$.`,tex:e}}function Pe(e){let t=o(e);return[{explanation:String.raw`Parametrize the circle of radius $${e}$. The upper half ($y \ge 0$) is traced once by $0 \le t \le \pi$.`,tex:String.raw`\mathbf{r}(t) = \left\langle ${t}\cos t,\ ${t}\sin t \right\rangle, \qquad 0 \le t \le \pi`},{explanation:String.raw`Differentiate and find the speed. Factor out $${e*e}$, then use $\sin^2 t + \cos^2 t = 1$.`,tex:e===1?String.raw`\mathbf{r}'(t) = \left\langle -\sin t,\ \cos t \right\rangle, \qquad |\mathbf{r}'(t)| = \sqrt{\sin^2 t + \cos^2 t} = 1, \qquad ds = dt`:String.raw`\mathbf{r}'(t) = \left\langle -${t}\sin t,\ ${t}\cos t \right\rangle, \qquad |\mathbf{r}'(t)| = \sqrt{${e*e}\left(\sin^2 t + \cos^2 t\right)} = ${e}, \qquad ds = ${e}\,dt`,technique:d}]}var Fe=e=>t=>[e*Math.cos(t),e*Math.sin(t)],Ie={name:`semicircle`,build(e){let{a:n,R:r}=u(()=>({a:t([1,2,3],e),R:t([1,2,3],e)}),e=>e.a===2&&e.R===1),i=r**3,a=r**4,s=String.raw`${o(n*r)}\pi + ${l(2*a,3)}`,c=String.raw`x^2 + y^2 = ${r*r}`,d=String.raw`${n} + ${o(i)}\cos^2 t\,\sin t`,f=[Q(Me),...Pe(r),{explanation:String.raw`Substitute $x = ${o(r)}\cos t$ and $y = ${o(r)}\sin t$ into $f$.`,tex:String.raw`f\big(\mathbf{r}(t)\big) = ${n} + \left(${o(r)}\cos t\right)^2\left(${o(r)}\sin t\right) = ${d}`},{explanation:r===1?`Set up the integral.`:String.raw`Set up the integral and distribute the $${r}$ from $ds$.`,tex:r===1?String.raw`\int_C f\,ds = \int_0^{\pi} \left(${d}\right)dt`:String.raw`\int_C f\,ds = \int_0^{\pi} \left(${d}\right) ${r}\,dt = \int_0^{\pi} \left(${n*r} + ${a}\cos^2 t\,\sin t\right)dt`},{explanation:`Split into two integrals.`,tex:String.raw`= ${o(n*r)}\int_0^{\pi} dt + ${o(a)}\int_0^{\pi} \cos^2 t\,\sin t\,dt`},{explanation:String.raw`The first integral is just the length of the interval: $\int_0^{\pi} dt = \pi$.`,tex:String.raw`${o(n*r)}\int_0^{\pi} dt = ${o(n*r)}\Big[\,t\,\Big]_0^{\pi} = ${o(n*r)}\pi`},{explanation:String.raw`For the second, substitute $u = \cos t$, so $du = -\sin t\,dt$. The bounds become $u = \cos 0 = 1$ and $u = \cos\pi = -1$. Flipping the bounds absorbs the minus sign.`,tex:String.raw`\int_0^{\pi} \cos^2 t\,\sin t\,dt = -\int_1^{-1} u^2\,du = \int_{-1}^{1} u^2\,du = \left[\,\frac{u^3}{3}\,\right]_{-1}^{1} = \frac{1}{3} - \left(-\frac{1}{3}\right) = \frac{2}{3}`,technique:p},{explanation:`Combine the two parts.`,tex:String.raw`\int_C f\,ds = ${o(n*r)}\pi + ${o(a)}\cdot\frac{2}{3} = ${s}`}];return{problem:{promptHtml:String.raw`Evaluate $\int_C \left(${n} + x^2 y\right)ds$, where $C$ is the upper half of the circle $${c}$.`,givenTex:String.raw`\int_C \left(${n} + x^2 y\right)ds, \qquad C:\ ${c},\ y \ge 0`,answerTex:s,answerValue:n*r*Math.PI+2*a/3,steps:f},pieces:[{position:Fe(r),start:0,end:Math.PI}],integrand:([e,t])=>n+e*e*t}}},Le={name:`line segment`,build(n){let{p:r,q:i,r:c,usesExponential:d}=u(()=>({p:t([1,2,3],n),q:t([1,2],n),r:t([1,2,3],n),usesExponential:n()<.5}),e=>e.usesExponential&&e.p===1&&e.q===2&&e.r===3),m=i*c,h=r*r+i*i+c*c,{outside:g,inside:_}=e(h),v=s(1,h),y=_===1?``:String.raw`\sqrt{${_}}`,b=d?`xe^{yz}`:`(x + yz)`,x=[`${o(r)}t`,`${o(i)}t`,`${o(c)}t`],S=[Q(Ne),{explanation:String.raw`Parametrize the segment with $\mathbf{r}(t) = (1 - t)\,\mathbf{r}_0 + t\,\mathbf{r}_1$, $0 \le t \le 1$, where $\mathbf{r}_0 = (0, 0, 0)$ is the start and $\mathbf{r}_1 = (${r}, ${i}, ${c})$ is the end.`,tex:String.raw`\mathbf{r}(t) = (1 - t)\langle 0, 0, 0 \rangle + t\langle ${r}, ${i}, ${c} \rangle = \left\langle ${x.join(`,\\ `)} \right\rangle, \qquad 0 \le t \le 1`,technique:f},{explanation:`Differentiate and find the speed. A segment has constant speed.`,tex:String.raw`\mathbf{r}'(t) = \langle ${r}, ${i}, ${c} \rangle, \qquad |\mathbf{r}'(t)| = \sqrt{${r*r} + ${i*i} + ${c*c}} = ${v===`\\sqrt{${h}}`?v:String.raw`\sqrt{${h}} = ${v}`}`}],C,w;if(d){let e=l(r*g,2*m,y);C=String.raw`${a(e,String.raw`\left(e^{${m}} - 1\right)`)}`,w=r*Math.sqrt(h)*(Math.exp(m)-1)/(2*m),S.push({explanation:String.raw`Substitute $x = ${x[0]}$, $y = ${x[1]}$, $z = ${x[2]}$ into $f$. The exponent becomes $(${x[1]})(${x[2]}) = ${o(m)}t^2$.`,tex:String.raw`f\big(\mathbf{r}(t)\big) = ${x[0]}\,e^{${o(m)}t^2}`},{explanation:`Set up the integral and pull the constants out front.`,tex:String.raw`\int_C xe^{yz}\,ds = \int_0^1 ${x[0]}\,e^{${o(m)}t^2}\cdot ${v}\,dt = ${s(r,h)}\int_0^1 t\,e^{${o(m)}t^2}\,dt`},{explanation:String.raw`Substitute $u = ${o(m)}t^2$. Its derivative contains the $t$ in front of the exponential. Change the bounds too.`,tex:String.raw`u = ${o(m)}t^2, \qquad du = ${2*m}t\,dt \;\Rightarrow\; t\,dt = \tfrac{1}{${2*m}}\,du, \qquad t = 0 \to u = 0, \quad t = 1 \to u = ${m}`,technique:p},{explanation:`Rewrite in terms of u and simplify the constant.`,tex:String.raw`= ${s(r,h)}\cdot\frac{1}{${2*m}}\int_0^{${m}} e^u\,du = ${e===`1`?``:e}\int_0^{${m}} e^u\,du`},{explanation:String.raw`Integrate and evaluate. Note $e^0 = 1$.`,tex:String.raw`= ${e===`1`?``:e}\Big[\,e^u\,\Big]_0^{${m}} = ${C}`})}else C=l((3*r+2*m)*g,6,y),w=Math.sqrt(h)*(3*r+2*m)/6,S.push({explanation:String.raw`Substitute $x = ${x[0]}$, $y = ${x[1]}$, $z = ${x[2]}$ into $f$.`,tex:String.raw`f\big(\mathbf{r}(t)\big) = ${x[0]} + (${x[1]})(${x[2]}) = ${x[0]} + ${o(m)}t^2`},{explanation:`Set up the integral and pull the constant speed out front.`,tex:String.raw`\int_C (x + yz)\,ds = ${v}\int_0^1 \left(${x[0]} + ${o(m)}t^2\right)dt`},{explanation:`Integrate with the power rule.`,tex:String.raw`= ${v}\left[\,\frac{${r}t^2}{2} + \frac{${m}t^3}{3}\,\right]_0^1`},{explanation:`Evaluate at the upper bound minus the lower bound, then combine the fractions over 6.`,tex:String.raw`= ${v}\left(${l(r,2)} + ${l(m,3)}\right) = ${v}\cdot\frac{${3*r+2*m}}{6} = ${C}`});return{problem:{promptHtml:String.raw`Evaluate $\int_C ${b}\,ds$, where $C$ is the line segment from $(0, 0, 0)$ to $(${r}, ${i}, ${c})$.`,givenTex:String.raw`\int_C ${b}\,ds, \qquad C:\ (0, 0, 0) \to (${r}, ${i}, ${c})`,answerTex:C,answerValue:w,steps:S},pieces:[{position:e=>[r*e,i*e,c*e],start:0,end:1}],integrand:d?([e,t,n])=>e*Math.exp(t*n):([e,t,n])=>e+t*n}}},Re={name:`helix`,build(e){let{a:n,variant:r}=u(()=>({a:t([1,2,3],e),variant:t([`y sin z`,`x cos z`,`mass`],e)}),e=>e.a===1&&e.variant===`y sin z`),i=n*n+1,a=s(1,i),c=String.raw`\mathbf{r}(t) = \left\langle ${o(n)}\cos t,\ ${o(n)}\sin t,\ t \right\rangle, \quad 0 \le t \le 2\pi`,l=[r===`mass`?{explanation:String.raw`The mass of a wire is the line integral of its density: $m = \int_C \rho\,ds$.`,tex:String.raw`m = \int_C \rho(x, y, z)\,ds = \int_a^b \rho\big(\mathbf{r}(t)\big)\,|\mathbf{r}'(t)|\,dt`}:Q(Ne),{explanation:String.raw`Differentiate and find the speed. ${n===1?``:String.raw`Factor $${n*n}$ out of the sine and cosine terms, then `}use $\sin^2 t + \cos^2 t = 1$.`,tex:String.raw`\mathbf{r}'(t) = \left\langle -${o(n)}\sin t,\ ${o(n)}\cos t,\ 1 \right\rangle, \qquad |\mathbf{r}'(t)| = \sqrt{${o(n*n)}\left(\sin^2 t + \cos^2 t\right) + 1} = ${a}`,technique:d}],f,p,h,g,_;if(r===`mass`)f=String.raw`A thin wire is bent into the shape of the helix below. Its density at each point is $\rho(x, y, z) = z$. Find the mass of the wire.`,p=String.raw`${c}, \qquad \rho = z`,h=s(2,i,String.raw`\pi^2`),g=2*Math.PI**2*Math.sqrt(i),_=([,,e])=>e,l.push({explanation:String.raw`On the helix, $z = t$, so $\rho\big(\mathbf{r}(t)\big) = t$. Set up the integral.`,tex:String.raw`m = \int_0^{2\pi} t \cdot ${a}\,dt = ${a}\int_0^{2\pi} t\,dt`},{explanation:`Integrate with the power rule and evaluate.`,tex:String.raw`= ${a}\left[\,\frac{t^2}{2}\,\right]_0^{2\pi} = ${a}\cdot\frac{(2\pi)^2}{2} = ${a}\cdot 2\pi^2 = ${h}`});else{let e=r===`y sin z`,t=e?String.raw`\sin`:String.raw`\cos`,u=e?`y`:`x`;f=String.raw`Evaluate $\int_C ${u}${t} z\,ds$, where $C$ is the helix below.`,p=String.raw`\int_C ${u}${t} z\,ds, \qquad ${c}`,h=s(n,i,String.raw`\pi`),g=n*Math.PI*Math.sqrt(i),_=e?([,e,t])=>e*Math.sin(t):([e,,t])=>e*Math.cos(t);let d=s(n,i);l.push({explanation:String.raw`Substitute $${u} = ${o(n)}${t} t$ and $z = t$ into $f$.`,tex:String.raw`f\big(\mathbf{r}(t)\big) = \left(${o(n)}${t} t\right)${t} t = ${o(n)}${t}^2 t`},{explanation:`Set up the integral and pull the constants out front.`,tex:String.raw`\int_C ${u}${t} z\,ds = \int_0^{2\pi} ${o(n)}${t}^2 t \cdot ${a}\,dt = ${d}\int_0^{2\pi} ${t}^2 t\,dt`},{explanation:String.raw`Rewrite $${t}^2 t$ with the power-reducing identity.`,tex:String.raw`= ${d}\int_0^{2\pi} \frac{1 ${e?`-`:`+`} \cos 2t}{2}\,dt`,technique:m},{explanation:String.raw`Integrate. The antiderivative of $\cos 2t$ is $\tfrac{1}{2}\sin 2t$, and $\sin 4\pi = \sin 0 = 0$.`,tex:String.raw`= ${d}\left[\,\frac{t}{2} ${e?`-`:`+`} \frac{\sin 2t}{4}\,\right]_0^{2\pi} = ${d}\left(\pi - 0\right) = ${h}`})}return{problem:{promptHtml:f,givenTex:p,answerTex:h,answerValue:g,steps:l},pieces:[{position:e=>[n*Math.cos(e),n*Math.sin(e),e],start:0,end:2*Math.PI}],integrand:_}}},ze={name:`piecewise curve`,build(n){let{k:r,m:i,h:a}=u(()=>({k:t([2,3,4,6],n),m:t([1,2],n),h:t([1,2,3],n)}),e=>e.k===2&&e.m===1&&e.h===1),o=i*i,c=o+a,d=1+4*i*i,{outside:f,inside:m}=e(d),h=s(d*f,m),g=String.raw`\frac{${h} - 1}{${12/r}}`,_=r*i*a,v=String.raw`${g} + ${_}`,y=[{explanation:String.raw`$C$ is made of two smooth pieces, so split the integral into one integral over each piece.`,tex:String.raw`\int_C ${r}x\,ds = \int_{C_1} ${r}x\,ds + \int_{C_2} ${r}x\,ds`},{explanation:String.raw`$C_1$ is the graph of $y = x^2$, so use $x$ itself as the parameter.`,tex:String.raw`C_1:\ \mathbf{r}(x) = \left\langle x,\ x^2 \right\rangle, \qquad 0 \le x \le ${i}`},{explanation:`Differentiate and find ds.`,tex:String.raw`\mathbf{r}'(x) = \langle 1,\ 2x \rangle, \qquad ds = |\mathbf{r}'(x)|\,dx = \sqrt{1 + 4x^2}\,dx`},{explanation:`Set up the integral over the first piece.`,tex:String.raw`\int_{C_1} ${r}x\,ds = \int_0^{${i}} ${r}x\sqrt{1 + 4x^2}\,dx`},{explanation:String.raw`Substitute $u = 1 + 4x^2$. Its derivative $8x$ matches the $x$ in front of the root. Change the bounds too.`,tex:String.raw`u = 1 + 4x^2, \qquad du = 8x\,dx \;\Rightarrow\; x\,dx = \tfrac{1}{8}\,du, \qquad x = 0 \to u = 1, \quad x = ${i} \to u = ${d}`,technique:p},{explanation:String.raw`Integrate with the power rule: $\int u^{1/2}\,du = \tfrac{2}{3}u^{3/2}$, and $\tfrac{${r}}{8}\cdot\tfrac{2}{3} = ${l(r,12)}$.`,tex:String.raw`\int_{C_1} ${r}x\,ds = \frac{${r}}{8}\int_1^{${d}} u^{1/2}\,du = \frac{${r}}{8}\cdot\frac{2}{3}\Big[\,u^{3/2}\,\Big]_1^{${d}} = ${l(r,12)}\left(${d}^{3/2} - 1\right)`},{explanation:String.raw`Simplify: $${d}^{3/2} = ${d}\sqrt{${d}} = ${h}$.`,tex:String.raw`\int_{C_1} ${r}x\,ds = ${g}`},{explanation:String.raw`$C_2$ is vertical: $x$ stays at $${i}$ while $y$ goes from $${o}$ to $${c}$. Use $y$ as the parameter, so $ds = dy$.`,tex:String.raw`C_2:\ \mathbf{r}(y) = \left\langle ${i},\ y \right\rangle, \quad ${o} \le y \le ${c}, \qquad |\mathbf{r}'(y)| = |\langle 0, 1 \rangle| = 1`},{explanation:String.raw`On $C_2$, the integrand is the constant $${r} \cdot ${i} = ${r*i}$.`,tex:String.raw`\int_{C_2} ${r}x\,ds = \int_{${o}}^{${c}} ${r*i}\,dy = ${r*i}\Big[\,y\,\Big]_{${o}}^{${c}} = ${r*i}\left(${c} - ${o}\right) = ${_}`},{explanation:`Add the two pieces.`,tex:String.raw`\int_C ${r}x\,ds = ${v}`}];return{problem:{promptHtml:String.raw`Evaluate $\int_C ${r}x\,ds$, where $C$ consists of the arc $C_1$ of the parabola $y = x^2$ from $(0, 0)$ to $(${i}, ${o})$, followed by the vertical line segment $C_2$ from $(${i}, ${o})$ to $(${i}, ${c})$.`,givenTex:String.raw`\int_C ${r}x\,ds, \qquad C = C_1 \cup C_2`,answerTex:v,answerValue:r*(d**1.5-1)/12+_,steps:y},pieces:[{position:e=>[e,e*e],start:0,end:i},{position:e=>[i,e],start:o,end:c}],integrand:([e])=>r*e}}},Be={name:`center of mass`,build(e){let{R:n,density:r}=u(()=>({R:t([1,2,3,4],e),density:t([`uniform`,`height`,`distance from top`],e)}),e=>e.R===1&&e.density===`distance from top`),a=o(n),s=String.raw`x^2 + y^2 = ${n*n}`,c,d,f,p,h,g,_,v,y,b=!1;if(r===`uniform`)c=String.raw`has constant density $\rho = k$`,d=`k`,f=`k`,p=String.raw`m = \int_0^{\pi} k \cdot ${n}\,dt = ${o(n)}k\Big[\,t\,\Big]_0^{\pi} = ${o(n)}\pi k`,h=String.raw`\int_C y\rho\,ds = \int_0^{\pi} \left(${a}\sin t\right) k \cdot ${n}\,dt = ${o(n*n)}k\Big[-\cos t\Big]_0^{\pi} = ${o(n*n)}k\big(1 - (-1)\big) = ${2*n*n}k`,g=String.raw`\bar{y} = \frac{${2*n*n}k}{${o(n)}\pi k}`,_=String.raw`\frac{${2*n}}{\pi}`,v=2*n/Math.PI,y=()=>1;else if(r===`height`)c=String.raw`has density proportional to its distance from the $x$-axis, $\rho(x, y) = ky$`,d=`ky`,f=String.raw`${o(n)}k\sin t`,p=String.raw`m = \int_0^{\pi} ${o(n)}k\sin t \cdot ${n}\,dt = ${o(n*n)}k\Big[-\cos t\Big]_0^{\pi} = ${o(n*n)}k\big(1 - (-1)\big) = ${2*n*n}k`,h=String.raw`\int_C y\rho\,ds = \int_0^{\pi} \left(${a}\sin t\right)\left(${o(n)}k\sin t\right) ${n}\,dt = ${o(n**3)}k\int_0^{\pi} \sin^2 t\,dt = ${o(n**3)}k \cdot \frac{\pi}{2} = ${l(n**3,2,String.raw`\pi k`)}`,b=!0,g=String.raw`\bar{y} = \frac{${l(n**3,2,String.raw`\pi k`)}}{${2*n*n}k}`,_=l(n,4,String.raw`\pi`),v=Math.PI*n/4,y=([,e])=>e;else{c=String.raw`is thicker near its base than near the top: its density is proportional to its distance from the line $y = ${n}$, so $\rho(x, y) = k(${n} - y)$`,d=String.raw`k(${n} - y)`,f=String.raw`k\left(${n} - ${a}\sin t\right) = ${o(n)}k(1 - \sin t)`,p=String.raw`m = \int_0^{\pi} ${o(n)}k(1 - \sin t) \cdot ${n}\,dt = ${o(n*n)}k\Big[\,t + \cos t\,\Big]_0^{\pi} = ${o(n*n)}k\big((\pi - 1) - (0 + 1)\big) = ${o(n*n)}k(\pi - 2)`,h=String.raw`\int_C y\rho\,ds = \int_0^{\pi} \left(${a}\sin t\right) ${o(n)}k(1 - \sin t) \cdot ${n}\,dt = ${o(n**3)}k\left(\int_0^{\pi} \sin t\,dt - \int_0^{\pi} \sin^2 t\,dt\right) = ${o(n**3)}k\left(2 - \frac{\pi}{2}\right)`,b=!0,g=String.raw`\bar{y} = \frac{${o(n**3)}k\left(2 - \frac{\pi}{2}\right)}{${o(n*n)}k(\pi - 2)} = \frac{${o(n)}\left(2 - \frac{\pi}{2}\right)}{\pi - 2}`;let e=i(n,2),t=n/e===1?String.raw`4 - \pi`:String.raw`${n/e}(4 - \pi)`,r=2/e==1?String.raw`\pi - 2`:String.raw`2(\pi - 2)`;_=String.raw`\frac{${t}}{${r}}`,v=n*(4-Math.PI)/(2*(Math.PI-2)),y=([,e])=>n-e}let x=[{explanation:String.raw`The center of mass of a wire uses the mass $m$ and the moments, all line integrals with respect to arc length.`,tex:String.raw`m = \int_C \rho\,ds, \qquad \bar{x} = \frac{1}{m}\int_C x\rho\,ds, \qquad \bar{y} = \frac{1}{m}\int_C y\rho\,ds`},{explanation:String.raw`Use symmetry first. The semicircle and its density are both symmetric about the $y$-axis, so $\bar{x} = 0$. Only $\bar{y}$ needs computing.`,tex:String.raw`\bar{x} = 0`},...Pe(n),{explanation:String.raw`Write the density in terms of $t$ using $y = ${a}\sin t$.`,tex:String.raw`\rho\big(\mathbf{r}(t)\big) = ${f}`},{explanation:String.raw`Find the mass.`,tex:p},{explanation:b?String.raw`Find the moment $\int_C y\rho\,ds$. Use $\int_0^{\pi} \sin^2 t\,dt = \tfrac{\pi}{2}$ from the power-reducing identity${r===`distance from top`?String.raw`, and $\int_0^{\pi} \sin t\,dt = 2$`:``}.`:String.raw`Find the moment $\int_C y\rho\,ds$.`,tex:h,technique:b?m:void 0},{explanation:String.raw`Divide the moment by the mass. The constant $k$ cancels, so the answer doesn't depend on it.`,tex:String.raw`${g} = ${_}`}];return{problem:{promptHtml:String.raw`A thin wire has the shape of the semicircle $${s}$, $y \ge 0$, and ${c}. Find the $y$-coordinate $\bar{y}$ of its center of mass.`,givenTex:String.raw`\bar{y} = \frac{1}{m}\int_C y\,\rho\,ds, \qquad \rho = ${d}, \qquad C:\ ${s},\ y \ge 0`,answerTex:_,answerValue:v,steps:x},pieces:[{position:Fe(n),start:0,end:Math.PI}],integrand:e=>e[1]*y(e),weight:y}}};function Ve(e){return t($,e).generate(e)}var $=[n(`semicircle`,`Circle arc`,[Ie,le,le]),n(`line-segment`,`Line segment`,[Le,fe,fe]),n(`helix`,`Helix (and mass)`,[Re,pe,pe]),n(`average`,`Average value of f along a curve`,ie),n(`piecewise`,`Curve in two pieces`,[ze,he,he]),n(`center-of-mass`,`Center of mass of a wire`,[Be,_e,_e]),n(`numeric`,`∫ f ds to four decimal places`,[xe]),{id:`sign-picture`,label:`Sign of ∫ f ds from a contour map`,generate:e=>Ae.build(e).problem},{id:`estimate-picture`,label:`Estimate ∫ f ds from a contour map`,generate:e=>je.build(e).problem}],He={...r(`line-integrals`),lessonHtml:k,techniques:[f,d,p,m],generateProblem:Ve,problemTypes:$};export{He as lineIntegralsTopic};