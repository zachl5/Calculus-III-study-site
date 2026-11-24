import{h as e}from"./index-ZzztMt-8.js";import{c as t}from"./techniques-2ghdpz7U.js";import{n,t as r}from"./fieldDiagram-BszNFGyr.js";import{s as i,t as a}from"./problems-gMFTB-Oz.js";var o=String.raw`
<h2 id="what-it-means">What "conservative" means</h2>
<p>
  A vector field $\mathbf{F}$ is <strong>conservative</strong> if it is the gradient of some scalar function $f$:
</p>
<div class="formula">
  $$\mathbf{F} = \nabla f = \left\langle \frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y} \right\rangle \qquad\text{so}\qquad P = \frac{\partial f}{\partial x},\quad Q = \frac{\partial f}{\partial y}$$
</div>
<p>
  The function $f$ is called a <strong>potential function</strong> for $\mathbf{F}$. In three dimensions, $\mathbf{F} = \langle P, Q, R \rangle$
  and $R = \frac{\partial f}{\partial z}$ too. Gravity and the electric force from a fixed charge are conservative; in physics, $-f$ is the potential energy.
  The <a href="?topic=work-and-force-fields">Work and Force Fields</a> page covers those forces, and why "conservative" means energy is conserved.
</p>
<p>
  Not every field is conservative. Most aren't. The rest of this page is about recognizing the ones that are, finding $f$,
  and using it to skip hard line integrals.
</p>

<h2 id="fundamental-theorem" data-toc="The Fundamental Theorem">The Fundamental Theorem for Line Integrals</h2>
<p>If $C$ is a smooth curve from point $A$ to point $B$, given by $\mathbf{r}(t)$ for $a \le t \le b$, then</p>
<div class="formula">
  $$\int_C \nabla f \cdot d\mathbf{r} = f\big(\mathbf{r}(b)\big) - f\big(\mathbf{r}(a)\big) = f(B) - f(A)$$
</div>
<p>
  It's the Fundamental Theorem of Calculus, $\int_a^b F'(x)\,dx = F(b) - F(a)$, moved onto a curve:
  integrating a derivative only needs the antiderivative at the two ends.
</p>
<p>Three big consequences for a conservative field:</p>
<ul>
  <li><strong>Path independence:</strong> every curve from $A$ to $B$ gives the same answer. Only the endpoints matter.</li>
  <li><strong>Closed curves give zero:</strong> if $C$ starts and ends at the same point, $\oint_C \mathbf{F} \cdot d\mathbf{r} = f(A) - f(A) = 0$.</li>
  <li><strong>No parametrizing:</strong> however messy $C$ is, you only need its endpoints.</li>
</ul>
<p>
  Remember from the previous page that $\int_C \mathbf{F} \cdot d\mathbf{r}$ is the same as $\int_C P\,dx + Q\,dy\ (+\,R\,dz)$, so
  this theorem applies to those integrals too.
</p>

<h2 id="the-test" data-toc="Testing whether F is conservative">Testing whether $\mathbf{F}$ is conservative</h2>
<p>
  If $\mathbf{F} = \nabla f$, then $\frac{\partial P}{\partial y} = \frac{\partial^2 f}{\partial y\,\partial x}$ and
  $\frac{\partial Q}{\partial x} = \frac{\partial^2 f}{\partial x\,\partial y}$. Mixed partials are equal (Clairaut's theorem), so those two must match.
  On a domain with no holes, the reverse is also true:
</p>
<div class="formula">
  $$\mathbf{F} = \langle P, Q \rangle \text{ is conservative} \quad\Longleftrightarrow\quad \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$
</div>
<p>In three dimensions, three pairs must match, which is the same as $\operatorname{curl}\mathbf{F} = \mathbf{0}$:</p>
$$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}, \qquad \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}, \qquad \frac{\partial Q}{\partial z} = \frac{\partial R}{\partial y}$$
<p>
  <strong>Pairing tip:</strong> each component is differentiated by the <em>other</em> component's variable. $P$ (the $x$-component)
  is differentiated by $y$, and $Q$ (the $y$-component) by $x$.
</p>

<h3>The fine print: holes in the domain</h3>
<p>The precise statement of the test has conditions on the domain $D$ where $\mathbf{F}$ lives:</p>
<div class="formula">
  <p>
    If $\mathbf{F} = \langle P, Q \rangle$ is defined on an <strong>open, simply connected</strong> region $D$, $P$ and $Q$ have
    continuous first-order partial derivatives on $D$, and $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ at every point of $D$,
    then $\mathbf{F}$ is conservative on $D$.
  </p>
</div>
<p>
  The other direction needs no conditions: if $\mathbf{F}$ is conservative (with continuous partials), the partials always match.
  All of $\mathbb{R}^2$ or $\mathbb{R}^3$ meets every condition, which covers every polynomial or exponential field. The words below
  matter when $\mathbf{F}$ is undefined somewhere, for example where a denominator is $0$.
</p>

<h4>Open and closed regions</h4>
<p>
  A <strong>boundary point</strong> of $D$ is a point where every disk centered there, however small, contains both points in $D$ and points not in $D$.
  The circle $x^2 + y^2 = 1$ is the boundary of the unit disk.
</p>
<ul>
  <li>
    $D$ is <strong>open</strong> if for every point $P$ in $D$, some disk centered at $P$ lies entirely inside $D$.
    Equivalently, $D$ contains <em>none</em> of its boundary points. Example: $x^2 + y^2 < 1$.
  </li>
  <li>
    $D$ is <strong>closed</strong> if it contains <em>all</em> of its boundary points. Example: $x^2 + y^2 \le 1$.
  </li>
</ul>
<p>
  "Closed" is not the opposite of "open." A region can be neither, like $0 < x \le 1$ (it has one edge but not the other), or both:
  $\mathbb{R}^2$ has no boundary points, so it is open and closed at once.
</p>

<h4>Connected and simply connected regions</h4>
<ul>
  <li>
    $D$ is <strong>connected</strong> if any two points in $D$ can be joined by a path that stays in $D$. In other words, $D$ is one piece.
  </li>
  <li>
    A region in the plane is <strong>simply connected</strong> if it is connected <em>and</em> every simple closed curve in $D$ encloses
    only points of $D$. In other words, $D$ is one piece with <strong>no holes</strong>. Equivalently, every loop in $D$ can be shrunk down
    to a point without leaving $D$.
  </li>
</ul>
<div class="figure-row">
  <figure>
    <svg class="field-diagram" viewBox="-2.5 -2.5 5 5" role="img" aria-label="One region with no holes, and a loop inside it that can shrink to a point.">
      <ellipse cx="0" cy="0" rx="2.1" ry="1.6" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="0.05" />
      <circle cx="0.2" cy="0" r="0.9" fill="none" stroke="var(--highlight)" stroke-width="0.07" stroke-dasharray="0.18 0.12" />
      <circle cx="0.2" cy="0" r="0.08" fill="var(--highlight)" />
    </svg>
    <figcaption><strong>Simply connected.</strong> One piece, no holes. Every loop can shrink to a point inside $D$.</figcaption>
  </figure>
  <figure>
    <svg class="field-diagram" viewBox="-2.5 -2.5 5 5" role="img" aria-label="A ring-shaped region with a hole in the middle, and a loop around the hole.">
      <path d="M 2 0 A 2 2 0 1 0 -2 0 A 2 2 0 1 0 2 0 Z M 0.7 0 A 0.7 0.7 0 1 1 -0.7 0 A 0.7 0.7 0 1 1 0.7 0 Z"
        fill="var(--accent)" fill-opacity="0.15" fill-rule="evenodd" stroke="var(--accent)" stroke-width="0.05" />
      <circle cx="0" cy="0" r="1.35" fill="none" stroke="var(--highlight)" stroke-width="0.07" stroke-dasharray="0.18 0.12" />
    </svg>
    <figcaption><strong>Connected, not simply connected.</strong> One piece, but the loop around the hole can't shrink without leaving $D$.</figcaption>
  </figure>
  <figure>
    <svg class="field-diagram" viewBox="-2.5 -2.5 5 5" role="img" aria-label="Two separate regions, with a path between them that has to leave the region.">
      <circle cx="-1.25" cy="-0.3" r="0.95" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="0.05" />
      <circle cx="1.3" cy="0.4" r="0.85" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="0.05" />
      <line x1="-1.25" y1="-0.3" x2="1.3" y2="0.4" stroke="var(--muted)" stroke-width="0.06" stroke-dasharray="0.15 0.12" />
      <circle cx="-1.25" cy="-0.3" r="0.08" fill="var(--muted)" />
      <circle cx="1.3" cy="0.4" r="0.08" fill="var(--muted)" />
    </svg>
    <figcaption><strong>Not connected.</strong> Two pieces: no path joins them inside $D$. So it isn't simply connected either.</figcaption>
  </figure>
</div>
<p>
  <strong>In three dimensions</strong>, "simply connected" means connected with every closed curve shrinkable to a point inside $D$.
  This doesn't always match the 2D intuition of "no holes": $\mathbb{R}^3$ with one point removed <em>is</em> simply connected (a loop can
  slide around the missing point), but $\mathbb{R}^3$ with the $z$-axis removed is not (a loop around the axis is stuck).
</p>

<h4>Open, closed, and simple curves</h4>
<p>Curves use some of the same words with different meanings:</p>
<ul>
  <li>A curve $\mathbf{r}(t)$, $a \le t \le b$, is <strong>closed</strong> if it ends where it starts: $\mathbf{r}(b) = \mathbf{r}(a)$. A curve that isn't closed is often called <strong>open</strong>.</li>
  <li>A curve is <strong>simple</strong> if it doesn't cross itself between its endpoints.</li>
  <li>A <strong>simple closed curve</strong> is both: a circle or a rectangle, but not a figure eight (closed, but it crosses itself).</li>
</ul>
<table>
  <thead><tr><th></th><th>For a region $D$</th><th>For a curve $C$</th></tr></thead>
  <tbody>
    <tr><td><strong>Closed</strong></td><td>contains all of its boundary points</td><td>ends where it starts</td></tr>
    <tr><td><strong>Open</strong></td><td>contains none of its boundary points</td><td>usually just means "not closed"</td></tr>
    <tr><td><strong>Matters for</strong></td><td>whether the test applies: $D$ must be open (and simply connected)</td><td>whether $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ applies: $C$ must be closed</td></tr>
  </tbody>
</table>

<h4>Examples</h4>
<table>
  <thead><tr><th>Region</th><th>Open</th><th>Closed</th><th>Connected</th><th>Simply connected</th></tr></thead>
  <tbody>
    <tr><td>All of $\mathbb{R}^2$</td><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr>
    <tr><td>Open disk $x^2 + y^2 < 1$</td><td>yes</td><td>no</td><td>yes</td><td>yes</td></tr>
    <tr><td>Closed disk $x^2 + y^2 \le 1$</td><td>no</td><td>yes</td><td>yes</td><td>yes</td></tr>
    <tr><td>Right half-plane $x > 0$</td><td>yes</td><td>no</td><td>yes</td><td>yes</td></tr>
    <tr><td>Punctured plane, $(x, y) \ne (0, 0)$</td><td>yes</td><td>no</td><td>yes</td><td>no</td></tr>
    <tr><td>Ring $1 < x^2 + y^2 < 4$</td><td>yes</td><td>no</td><td>yes</td><td>no</td></tr>
    <tr><td>Two disks, $x^2 + y^2 < 1$ or $(x - 3)^2 + y^2 < 1$</td><td>yes</td><td>no</td><td>no</td><td>no</td></tr>
    <tr><td>Overlapping disks, $x^2 + y^2 < 4$ or $(x - 3)^2 + y^2 < 4$ (centers 3 apart, less than 2 + 2)</td><td>yes</td><td>no</td><td>yes</td><td>yes</td></tr>
    <tr><td>Outside a circle, $x^2 + y^2 > 4$</td><td>yes</td><td>no</td><td>yes</td><td>no (the disk inside is a hole)</td></tr>
    <tr><td>Above a parabola, $y > x^2$</td><td>yes</td><td>no</td><td>yes</td><td>yes</td></tr>
    <tr><td>Line removed, $y \ne x + 1$</td><td>yes</td><td>no</td><td>no</td><td>no</td></tr>
    <tr><td>$xy > 1$ (pieces in quadrants I and III)</td><td>yes</td><td>no</td><td>no</td><td>no</td></tr>
  </tbody>
</table>

<h4>Why each condition is there</h4>
<ul>
  <li><strong>Open:</strong> partial derivatives at a point need room to move in every direction, so every point of $D$ needs a little disk around it.</li>
  <li><strong>Connected:</strong> a potential function is built by integrating from one fixed point to every other point, which needs a path to every point.</li>
  <li><strong>Simply connected:</strong> around a hole, a field can circulate while still passing the test. Without holes, it can't.</li>
</ul>

<h4>The classic example</h4>
$$\mathbf{F} = \left\langle \frac{-y}{x^2 + y^2},\ \frac{x}{x^2 + y^2} \right\rangle$$
<p>
  It's defined on the punctured plane, which is open and connected but <strong>not simply connected</strong>: the unit circle encloses the
  origin, which isn't in the domain. $\mathbf{F}$ passes the test at every point of that domain, yet $\oint \mathbf{F} \cdot d\mathbf{r} = 2\pi$
  once around the unit circle, not $0$. So $\mathbf{F}$ isn't conservative there.
</p>
<p>
  On a smaller domain with no hole, such as the right half-plane $x > 0$, it <em>is</em> conservative: $f = \arctan\left(\frac{y}{x}\right)$
  has $\nabla f = \mathbf{F}$ there. Whether a field is conservative depends on the domain, not just the formula.
</p>

<h3>What the facts do and don't tell you</h3>
<ul>
  <li><strong>One loop integral of $0$:</strong> can't tell. Conservative needs $0$ around <em>every</em> closed curve ($\langle y^2, 0 \rangle$ gives $0$ around centered circles but isn't conservative).</li>
  <li><strong>A loop integral that isn't $0$</strong>, or two paths with the same endpoints giving different values: not conservative.</li>
  <li><strong>A closed flow line:</strong> not conservative, since along it $\oint \mathbf{F} \cdot d\mathbf{r} = \int |\mathbf{F}|^2\,dt > 0$.</li>
  <li><strong>$\partial P/\partial y = \partial Q/\partial x$ on a region with a hole:</strong> can't tell from that alone. But two curves with the same endpoints that pass the hole on the <em>same side</em> give the same integral,
  because together they bound a region without the hole.</li>
</ul>

<h2 id="finding-f" data-toc="Finding a potential function">Finding a potential function</h2>
<ol>
  <li><strong>Test</strong> that $\mathbf{F}$ is conservative. If it fails, stop: there is no $f$.</li>
  <li><strong>Integrate $P$ with respect to $x$</strong>, holding $y$ constant. Add $g(y)$, not $C$: the "constant" can depend on $y$.</li>
  <li><strong>Differentiate</strong> that result with respect to $y$, and set it equal to $Q$.</li>
  <li><strong>Solve for $g'(y)$</strong>. Matching terms cancel, and what's left must involve only $y$.</li>
  <li><strong>Integrate</strong> $g'(y)$ to get $g(y)$, now with a true constant $C$.</li>
</ol>
<p>
  In 3D, step 2 gives $+\,g(y, z)$. Matching with $Q$ finds $g$ up to an $h(z)$, and matching with $R$ finds $h(z)$.
  You can also start with $Q$ or $R$ instead of $P$; pick whichever is easiest to integrate.
</p>

<!-- tools -->
<h3>Worked example in 2D</h3>
<p>Find a potential function for $\mathbf{F} = \langle 2xy + 3,\ x^2 + 4y \rangle$.</p>
$$\frac{\partial P}{\partial y} = 2x = \frac{\partial Q}{\partial x} \quad\checkmark$$
$$f = \int (2xy + 3)\,dx = x^2y + 3x + g(y)$$
$$\frac{\partial f}{\partial y} = x^2 + g'(y) = x^2 + 4y \quad\Rightarrow\quad g'(y) = 4y \quad\Rightarrow\quad g(y) = 2y^2 + C$$
$$f(x, y) = x^2y + 3x + 2y^2 + C$$
<p>Check: $\frac{\partial f}{\partial x} = 2xy + 3$ and $\frac{\partial f}{\partial y} = x^2 + 4y$. Both match.</p>

<h3>Worked example in 3D</h3>
<p>Find a potential function for $\mathbf{F} = \langle yz,\ xz + 2y,\ xy \rangle$.</p>
$$\frac{\partial P}{\partial y} = z = \frac{\partial Q}{\partial x}, \qquad \frac{\partial P}{\partial z} = y = \frac{\partial R}{\partial x}, \qquad \frac{\partial Q}{\partial z} = x = \frac{\partial R}{\partial y} \quad\checkmark$$
$$\begin{gathered} f = \int yz\,dx = xyz + g(y, z) \\ \frac{\partial f}{\partial y} = xz + \frac{\partial g}{\partial y} = xz + 2y \quad\Rightarrow\quad g = y^2 + h(z) \end{gathered}$$
$$\frac{\partial f}{\partial z} = xy + h'(z) = xy \quad\Rightarrow\quad h'(z) = 0 \quad\Rightarrow\quad f(x, y, z) = xyz + y^2 + C$$

<h3 id="logs-and-trig">Logs, negative powers, and trig</h3>
<p>
  The same steps work for fields beyond polynomials. Watch the <strong>domain</strong>: $\ln y$ and $y^{-2}$ need $y > 0$, so the field lives on the
  half-plane $y > 0$. That half-plane is open and simply connected, so the test still applies there.
</p>
<p>Example: $\mathbf{F} = \langle \ln y + 2x,\ \frac{x}{y} \rangle$ for $y > 0$.</p>
$$\frac{\partial P}{\partial y} = \frac{1}{y} = \frac{\partial Q}{\partial x} \quad\checkmark, \qquad f = \int (\ln y + 2x)\,dx = x\ln y + x^2 + g(y)$$
$$\frac{\partial f}{\partial y} = \frac{x}{y} + g'(y) = \frac{x}{y} \quad\Rightarrow\quad g'(y) = 0 \quad\Rightarrow\quad f(x, y) = x\ln y + x^2 + C$$
<ul>
  <li><strong>Holding a variable constant:</strong> in $\int \ln y\,dx$, $\ln y$ is a constant, so the answer is $x\ln y$. Likewise $\int y^{-2}\,dx = xy^{-2}$.</li>
  <li><strong>Reverse chain rule:</strong> $\int ye^{xy}\,dx = e^{xy}$ and $\int yze^{xz}\,dx = ye^{xz}$, since the inside's derivative is already there.</li>
  <li><strong>Division:</strong> $\int \frac{y}{x}\,dx = y\ln x$ when $x > 0$.</li>
  <li><strong>Trig:</strong> $\int y^2\cos x\,dx = y^2\sin x$ and $\int \cos y\,dy = \sin y$. A lone $\sin y$ in $f$ shows up only in $Q$, as $\cos y$.</li>
</ul>

<h2 id="using-the-theorem" data-toc="Using the theorem">Using the theorem to evaluate line integrals</h2>
<p>
  Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ for $\mathbf{F} = \langle 2xy + 3,\ x^2 + 4y \rangle$ from the first example, along
  $\mathbf{r}(t) = \langle t^2,\ t + \sin(\pi t) \rangle$, $0 \le t \le 1$.
</p>
<p>
  Parametrizing would mean integrating terms like $t^4\cos(\pi t)$. Instead: $\mathbf{F}$ is conservative with
  $f = x^2y + 3x + 2y^2$, and $C$ runs from $\mathbf{r}(0) = (0, 0)$ to $\mathbf{r}(1) = (1, 1)$, so
</p>
$$\int_C \mathbf{F} \cdot d\mathbf{r} = f(1, 1) - f(0, 0) = (1 + 3 + 2) - 0 = 6$$
<p>
  <strong>Finding A and B.</strong> All the theorem needs from $C$ is where it starts and ends. For a parametrization, plug in the first and last values
  of $t$ (for $\langle 2\cos t, 3\sin t \rangle$, $0 \le t \le \frac{\pi}{2}$, that's $(2, 0)$ and $(0, 3)$). For a curve described in words, such as
  "the arc of the parabola $x = y^2$ from $(1, -1)$ to $(4, 2)$" or "the upper half of $x^2 + y^2 = 9$ from $(-3, 0)$ to $(3, 0)$", the endpoints are
  stated, and for a curve in a picture, read them off. The shape in between never matters.
</p>

<h3>Which method to use</h3>
<table>
  <thead><tr><th>Situation</th><th>Method</th></tr></thead>
  <tbody>
    <tr><td>You're given $f$ and asked for $\int_C \nabla f \cdot d\mathbf{r}$</td><td>Skip the test and the integrating: compute $f(B) - f(A)$ right away</td></tr>
    <tr><td>$\mathbf{F}$ passes the test, open curve</td><td>Find $f$, then compute $f(B) - f(A)$</td></tr>
    <tr><td>$\mathbf{F}$ passes the test, closed curve</td><td>The answer is $0$ (when the domain has no holes)</td></tr>
    <tr><td>$\mathbf{F}$ fails the test</td><td>Parametrize and integrate directly, as on the <a href="?topic=line-integrals-xyz">previous page</a></td></tr>
  </tbody>
</table>

<h2 id="reading-pictures" data-toc="Reading vector field pictures">Reading vector field pictures</h2>
<p>
  Many exam questions show a picture of $\mathbf{F}$ and a curve, and ask about $\int_C \mathbf{F} \cdot d\mathbf{r}$ without any formulas.
  The integrand is a <strong>dot product</strong>: at each point, $\mathbf{F} \cdot d\mathbf{r} = |\mathbf{F}|\,|d\mathbf{r}|\cos\theta$, where
  $\theta$ is the angle between the arrow and the direction you're moving. So the picture tells you the sign.
</p>

<h3>The sign of $\int_C \mathbf{F} \cdot d\mathbf{r}$</h3>
<div class="figure-row">
  <figure>
    ${n({label:`Uniform field pointing right; curve moving left to right, along the arrows.`,field:()=>[1,0],curve:{points:[[-1.9,-.7],[-.7,-.2],[.6,.3],[1.9,.7]]}})}
    <figcaption><strong>Positive.</strong> The curve moves with the arrows: $\theta < 90^\circ$.</figcaption>
  </figure>
  <figure>
    ${n({label:`Uniform field pointing right; curve moving right to left, against the arrows.`,field:()=>[1,0],curve:{points:[[1.9,.7],[.6,.3],[-.7,-.2],[-1.9,-.7]]}})}
    <figcaption><strong>Negative.</strong> The curve moves against the arrows: $\theta > 90^\circ$.</figcaption>
  </figure>
  <figure>
    ${n({label:`Uniform field pointing right; vertical curve moving upward, perpendicular to the arrows.`,field:()=>[1,0],curve:{points:[[.45,-1.9],[.45,1.9]]}})}
    <figcaption><strong>Zero.</strong> The curve crosses the arrows at right angles: $\theta = 90^\circ$.</figcaption>
  </figure>
</div>
<ul>
  <li><strong>Direction matters.</strong> Reversing the curve flips every $d\mathbf{r}$, so it flips the sign.</li>
  <li><strong>Length matters.</strong> Longer arrows contribute more. If parts of the curve go with the arrows and parts go against, compare how strong the field is on each part, and how long each part is.</li>
  <li><strong>Only the component along the curve counts.</strong> Arrows crossing the curve at right angles contribute nothing, however long they are.</li>
</ul>

<h3>Spotting a field that isn't conservative</h3>
<p>
  For a conservative field, every closed loop gives $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$. So if you can find <em>one</em>
  closed loop where the arrows clearly push you along the whole way, $\mathbf{F}$ is not conservative.
</p>
<div class="figure-row">
  <figure>
    ${n({label:`Swirling field circling counterclockwise, with a counterclockwise circle that follows the arrows.`,field:(e,t)=>[-t,e],curve:{points:r(1.35),closed:!0}})}
    <figcaption><strong>Swirl: not conservative.</strong> $\mathbf{F} = \langle -y, x \rangle$. The loop goes with the arrows all the way around, so $\oint > 0$.</figcaption>
  </figure>
  <figure>
    ${n({label:`Field with all arrows pointing right, longer at the top and reversed at the bottom, with a clockwise rectangle.`,field:(e,t)=>[t,0],curve:{points:[[-1.4,1.25],[1.4,1.25],[1.4,-1.25],[-1.4,-1.25]],closed:!0}})}
    <figcaption><strong>Shear: not conservative.</strong> $\mathbf{F} = \langle y, 0 \rangle$. No swirl, but the top edge goes with the arrows and the bottom edge goes with the reversed ones, so $\oint > 0$.</figcaption>
  </figure>
  <figure>
    ${n({label:`Field pointing straight out from the origin, with a circle crossing every arrow at a right angle.`,field:(e,t)=>[e,t],curve:{points:r(1.35),closed:!0}})}
    <figcaption><strong>Radial: conservative.</strong> $\mathbf{F} = \langle x, y \rangle = \nabla\big(\tfrac{1}{2}(x^2 + y^2)\big)$. The circle is perpendicular to every arrow, so $\oint = 0$.</figcaption>
  </figure>
</div>
<p>
  The shear example is the one people miss: the arrows all point the same way, yet the field isn't conservative, because
  their <em>length changes as you move across them</em>. That matches the test: $\frac{\partial P}{\partial y} = 1 \ne 0 = \frac{\partial Q}{\partial x}$.
</p>
<p>
  <strong>A picture can prove a field is not conservative, but not that it is.</strong> Failing to find a loop with nonzero circulation
  isn't proof. When you have the formula, confirm with the test.
</p>

<h3 id="flow-lines">Flow lines</h3>
<p>
  A <strong>flow line</strong> (or streamline) of $\mathbf{F}$ is a curve that follows the arrows: at every point, its velocity is the field there,
  $\mathbf{r}'(t) = \mathbf{F}\big(\mathbf{r}(t)\big)$. It's the path a leaf would take floating along the field.
</p>
<div class="formula">
  <p><strong>A conservative field has no closed flow lines.</strong> (A flow line that just sits at a point where $\mathbf{F} = \mathbf{0}$ doesn't count.)</p>
</div>
<div class="figure-row small-figures">
  <figure>
    ${n({label:`Swirling field with two circular flow lines going counterclockwise around the origin.`,field:(e,t)=>[-t,e],curves:[{points:r(.85),closed:!0},{points:r(1.75),closed:!0}]})}
    <figcaption><strong>Closed flow lines.</strong> $\mathbf{F} = \langle -y, x \rangle$: following the arrows brings you back around. Not conservative.</figcaption>
  </figure>
  <figure>
    ${n({label:`Field pointing straight out from the origin, with three flow lines running straight outward.`,field:(e,t)=>[e,t],curves:[30,150,270].map(e=>{let t=e*Math.PI/180;return{points:[.4,2.15].map(e=>[e*Math.cos(t),e*Math.sin(t)])}})})}
    <figcaption><strong>No closed flow lines.</strong> $\mathbf{F} = \nabla\big(\tfrac{1}{2}(x^2 + y^2)\big)$: the flow lines run straight outward, and $f$ keeps increasing along them.</figcaption>
  </figure>
</div>
<p>
  <strong>Why:</strong> along a flow line, $\mathbf{F} \cdot d\mathbf{r} = \mathbf{F} \cdot \mathbf{r}'(t)\,dt = |\mathbf{F}|^2\,dt$, which is never negative.
  So once around a closed flow line, $\oint_C \mathbf{F} \cdot d\mathbf{r} = \int |\mathbf{F}|^2\,dt > 0$. But a conservative field gives $0$
  around every closed curve, so it can't have one.
</p>
<p>
  Another way to see it: if $\mathbf{F} = \nabla f$, then along a flow line $\frac{d}{dt} f\big(\mathbf{r}(t)\big) = \nabla f \cdot \mathbf{r}'(t) = |\nabla f|^2 \ge 0$.
  The value of $f$ only goes up as you follow the arrows (uphill, as in the contour map below), so you can never arrive back where you started.
</p>
<p>
  <strong>In pictures:</strong> arrows that circle back on themselves mean not conservative. The swirl $\langle -y, x \rangle$ above has
  circles as its flow lines. The reverse doesn't hold: the shear field $\langle y, 0 \rangle$ has no closed flow lines (they're horizontal lines),
  yet it still isn't conservative. No closed flow lines is a requirement, not a proof.
</p>

<h3>Contour maps of $f$</h3>
<div class="figure-row">
  <figure>
    ${n({label:`Circular level curves of f labeled 1 through 4, gradient arrows pointing outward, and a curve from the level 1 circle to the level 4 circle.`,field:(e,t)=>[2*e,2*t],circleContours:[1,2,3,4].map(e=>({radius:Math.sqrt(e),value:String(e)})),curve:{points:[[-.6,-.8],[.3,-1.2],[1.1,-.6],[1.5,.4],[1.2,1.6]]}})}
    <figcaption>Level curves of $f = x^2 + y^2$ with $\nabla f$. The curve starts on $f = 1$ and ends on $f = 4$, so $\int_C \nabla f \cdot d\mathbf{r} = 4 - 1 = 3$.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>When the picture shows level curves of a potential $f$ instead of arrows:</p>
    <ul>
      <li>$\nabla f$ is <strong>perpendicular</strong> to the level curves and points toward <strong>larger</strong> values of $f$.</li>
      <li>Arrows are <strong>longer where the level curves are closer together</strong>, where $f$ changes fastest.</li>
      <li>$\int_C \nabla f \cdot d\mathbf{r}$ is just <strong>(label at the end) − (label at the start)</strong>. The path between doesn't matter.</li>
      <li>A curve that stays on one level curve gives $0$.</li>
    </ul>
  </div>
</div>

<h3 id="table-of-f">A table of values of $f$</h3>
<p>
  The same idea works when $f$ comes as a table: $\int_C \nabla f \cdot d\mathbf{r}$ needs only $f$ at the two ends of $C$. Plug the parameter's first and
  last values into the curve to find the endpoints, look them up, and subtract. The table never has the points in between, and it doesn't need to.
</p>
<p>
  For example, if $C$ is $x = t^3 + 1$, $y = 2t^2$, $0 \le t \le 1$, then $C$ runs from $(1, 0)$ to $(2, 2)$, and
  $\int_C \nabla f \cdot d\mathbf{r} = f(2, 2) - f(1, 0)$, two numbers read straight from the table.
</p>

<h3 id="same-endpoints">Several curves with the same endpoints</h3>
<div class="figure-row">
  <figure>
    ${n({label:`The field F = (y, x) with three curves from (-2, 0) to (1, 2): one bending each way and one wiggling between them.`,field:(e,t)=>[t,e],curves:[{points:Array.from({length:41},(e,t)=>{let n=t/40;return[-2+3*n-1.2*n*(1-n)*2,2*n+1.2*n*(1-n)*2]})},{points:Array.from({length:41},(e,t)=>{let n=t/40,r=.3*Math.sin(3*Math.PI*n);return[-2+3*n-r,2*n+r]})},{points:Array.from({length:41},(e,t)=>{let n=t/40;return[-2+3*n+1.2*n*(1-n)*2,2*n-1.2*n*(1-n)*2]})}],labeledPoints:[{at:[-2,0],text:`(-2, 0)`,offset:[.15,-.32]},{at:[1,2],text:`(1, 2)`,offset:[-.15,.32]}]})}
    <figcaption>$\mathbf{F} = \langle y, x \rangle = \nabla(xy)$, so all three curves give $f(1, 2) - f(-2, 0) = 2 - 0 = 2$.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>When a picture shows several curves that share a start and an end, and asks why $\int_C \mathbf{F} \cdot d\mathbf{r}$ is the same for all of them:</p>
    <ul>
      <li><strong>Why:</strong> $\mathbf{F}$ is conservative, so the integral is $f(\text{end}) - f(\text{start})$. The curves share their ends, so they share the answer.</li>
      <li><strong>Show it:</strong> run the test $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, then find $f$.</li>
      <li><strong>Find the value:</strong> evaluate $f$ at the end, minus $f$ at the start. No curve needs a parametrization.</li>
      <li>
        <strong>When $\mathbf{F}$ is only a picture:</strong> swap the winding curve for the straight segment between its ends, which gives the same answer. Along
        the segment only the part of each arrow along the segment counts. Read it halfway along, comparing with the scale arrow, and multiply by the
        segment's length.
      </li>
    </ul>
  </div>
</div>

<h3>Quick reference</h3>
<table>
  <thead><tr><th>In the picture</th><th>Conclusion</th></tr></thead>
  <tbody>
    <tr><td>Curve mostly moves with the arrows</td><td>$\int_C \mathbf{F} \cdot d\mathbf{r} > 0$</td></tr>
    <tr><td>Curve mostly moves against the arrows</td><td>$\int_C \mathbf{F} \cdot d\mathbf{r} < 0$</td></tr>
    <tr><td>Curve everywhere perpendicular to the arrows</td><td>$\int_C \mathbf{F} \cdot d\mathbf{r} = 0$</td></tr>
    <tr><td>A closed loop that follows the arrows (swirl or shear)</td><td>$\mathbf{F}$ is not conservative</td></tr>
    <tr><td>Two paths with the same endpoints give different signs</td><td>$\mathbf{F}$ is not conservative (not path independent)</td></tr>
    <tr><td>Contour map of $f$</td><td>$\int_C \nabla f \cdot d\mathbf{r} = f(\text{end}) - f(\text{start})$ from the labels</td></tr>
    <tr><td>Table of values of $f$</td><td>Find the endpoints of $C$, then $f(\text{end}) - f(\text{start})$ from the table</td></tr>
    <tr><td>Several curves with the same endpoints</td><td>Same value for all of them when $\mathbf{F}$ is conservative: $f(\text{end}) - f(\text{start})$</td></tr>
  </tbody>
</table>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Writing $+\,C$ instead of $+\,g(y)$</strong> after integrating $P$. It drops every term of $f$ without an $x$.</li>
  <li><strong>Pairing the wrong partials.</strong> The test is $\frac{\partial P}{\partial y}$ vs. $\frac{\partial Q}{\partial x}$, not $\frac{\partial P}{\partial x}$ vs. $\frac{\partial Q}{\partial y}$.</li>
  <li><strong>Using $f(B) - f(A)$ on a field that isn't conservative.</strong> Always test first; the shortcut is only valid for gradient fields.</li>
  <li><strong>Subtracting in the wrong order.</strong> It's $f(\text{end}) - f(\text{start})$. Reversing the curve flips the sign.</li>
  <li><strong>Forgetting to check $f$.</strong> Differentiating your answer takes a few seconds and catches almost every error.</li>
</ul>
`,s={...e(`conservative-fields`),lessonHtml:o,techniques:[t],generateProblem:i,problemTypes:a};export{s as conservativeTopic};