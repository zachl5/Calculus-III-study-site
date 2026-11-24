import{d as e,f as t,g as n,h as r,m as i,p as a}from"./index-BX9zVO2G.js";import{d as o,f as s,u as c}from"./techniques-2ghdpz7U.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,p as g,r as _,t as v,u as y}from"./polynomial-D7OtKEoC.js";import{a as ee,c as b,o as x,p as S,t as te}from"./exact-BXgEHO4p.js";import{c as C,f as w,i as T,l as E,t as D,u as O}from"./poly2-Tsy-oMj3.js";import{c as k,m as ne,o as A}from"./common-DcP4qfG-.js";import{t as j}from"./figure-D8x0X86Y.js";import{n as M,t as N}from"./fieldDiagram-BszNFGyr.js";import{a as P,c as re,l as F,n as ie,o as I,r as ae,s as L,t as oe,u as R}from"./divergence-5VpN7F1A.js";import{t as se}from"./squarePlots-DzRN_nWK.js";import{c as z,d as B,f as V,i as ce,m as le,p as ue,r as de,s as fe,t as pe,u as me}from"./greens-DPRYV6-S.js";var he=M({label:`The field F = ⟨x − y, x + 2y⟩ crossing the circle of radius 2, which runs counterclockwise.`,field:(e,t)=>[e-t,e+2*t],curve:{points:N(2,48),closed:!0}}),ge=M({label:`Upward arrows that get longer going up, with a point P marked.`,field:(e,t)=>[0,1.5+.5*t],labeledPoints:[{at:[.9,0],text:`P`,offset:[.22,.22]}]}),_e=M({label:`Rightward arrows that are longer above P than below it, with a point P marked.`,field:(e,t)=>[1.5+.5*t,0],labeledPoints:[{at:[0,0],text:`P`,offset:[.22,.22]}]}),ve=M({label:`The field F = ⟨x, y²⟩, with P1 above the line y = −1/2 and P2 below it.`,field:(e,t)=>[e,t*t],labeledPoints:[{at:[-1,1.5],text:`P₁`,offset:[.2,.2]},{at:[-1,-1.5],text:`P₂`,offset:[.2,.2]}],denseArrows:!0}),ye=String.raw`
<h2 id="flux" data-toc="Flux across a curve">Flux across a curve</h2>
<div class="figure-row">
  <figure>
    ${he}
    <figcaption>This field crosses the circle outward all the way around, so its outward flux is positive.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>
      Think of $\mathbf{v}$ as the velocity of water flowing in the plane. The <strong>flux</strong> of $\mathbf{v}$ across a curve $C$,
      $\text{Flux}_C(\mathbf{v})$, is the amount of water passing through $C$ per second, counted in the direction of a chosen
      unit normal $\mathbf{n}$. Water crossing the other way counts as negative.
    </p>
    <p>If $C$ is a line segment and $\mathbf{v}$ is constant, only the part of $\mathbf{v}$ along $\mathbf{n}$ carries water across, so</p>
    <div class="formula">$$\text{Flux}_C(\mathbf{v}) = (\mathbf{v} \cdot \mathbf{n})\,L(C)$$</div>
    <p>where $L(C)$ is the length of $C$.</p>
  </div>
</div>
<p>
  <strong>Example.</strong> $\mathbf{v} = \langle 2, 1 \rangle$ across the segment from $(0, 0)$ to $(3, 4)$, with $\mathbf{n}$ on the right as you go.
  The direction of travel is $\langle 3, 4 \rangle$; turning it $90^\circ$ clockwise gives $\langle 4, -3 \rangle$, so
  $\mathbf{n} = \frac{1}{5}\langle 4, -3 \rangle$ and $L(C) = 5$:
</p>
$$\text{Flux}_C(\mathbf{v}) = \left(\tfrac{8 - 3}{5}\right) \cdot 5 = 5$$

<h2 id="computing-flux" data-toc="Flux as an integral">Flux as an integral</h2>
<p>
  When $\mathbf{v}$ isn't constant or $C$ isn't straight, cut $C$ into short pieces, use $(\mathbf{v} \cdot \mathbf{n})\,\Delta s$ on each,
  and add them up with an integral:
</p>
<div class="formula">
  $$\text{Flux}_C(\mathbf{v}) = \int_C \mathbf{v} \cdot \mathbf{n}\,ds = \int_C \mathbf{v} \cdot d\mathbf{n}$$
</div>
<p>
  To compute it, write $\langle v_1, v_2 \rangle^\perp = \langle v_2, -v_1 \rangle$: the vector turned $90^\circ$ <strong>clockwise</strong>, with the
  same length. If $C$ is $\mathbf{r}(t)$, $a \le t \le b$, then $\mathbf{n} = \mathbf{r}'(t)^\perp / |\mathbf{r}'(t)|$ is the unit normal on the right
  of the direction of travel, and since $ds = |\mathbf{r}'(t)|\,dt$, the lengths cancel:
</p>
<div class="formula">
  $$\int_C \mathbf{v} \cdot d\mathbf{n} = \int_a^b \mathbf{v}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)^\perp\,dt$$
</div>
<ol>
  <li><strong>Parametrize</strong> $C$: $\mathbf{r}(t)$, $a \le t \le b$. For a closed curve, go counterclockwise so $\mathbf{r}'^\perp$ points outward.</li>
  <li><strong>Compute</strong> $\mathbf{r}'(t)$ and $\mathbf{r}'(t)^\perp$.</li>
  <li><strong>Substitute</strong> $x(t)$ and $y(t)$ into the formula for $\mathbf{v}$.</li>
  <li><strong>Integrate</strong> $\int_a^b \mathbf{v}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)^\perp\,dt$.</li>
</ol>
<p>
  <strong>Example.</strong> The flux of $\mathbf{v} = \langle x, y \rangle$ outward through the circle of radius $R$ centered at the origin. With
  $\mathbf{r}(t) = \langle R\cos t, R\sin t \rangle$, $0 \le t \le 2\pi$: $\mathbf{r}'(t) = \langle -R\sin t, R\cos t \rangle$, so
  $\mathbf{r}'(t)^\perp = \langle R\cos t, R\sin t \rangle$, and
</p>
$$\text{Flux} = \int_0^{2\pi} \langle R\cos t, R\sin t \rangle \cdot \langle R\cos t, R\sin t \rangle\,dt = \int_0^{2\pi} R^2\,dt = 2\pi R^2$$
<p>
  <strong>In terms of $dx$ and $dy$.</strong> Writing $\mathbf{v} = \langle P, Q \rangle$, $\mathbf{v} \cdot \mathbf{r}'^\perp = P\,y' - Q\,x'$, so
  $\oint_C \mathbf{v} \cdot \mathbf{n}\,ds = \oint_C P\,dy - Q\,dx$. Compare the circulation, $\oint_C P\,dx + Q\,dy$: the flux swaps $dx$ and $dy$
  and puts the minus sign on the $Q\,dx$ term.
</p>
<p>
  <strong>Example.</strong> The outward flux of $\mathbf{F} = \langle x - y, x + 2y \rangle$ across the circle $x^2 + y^2 = 4$ (the picture above). With
  $x = 2\cos t$, $y = 2\sin t$, $dx = -2\sin t\,dt$, and $dy = 2\cos t\,dt$:
</p>
$$\begin{aligned} P\,dy &= (2\cos t - 2\sin t)(2\cos t)\,dt = \left(4\cos^2 t - 4\sin t\cos t\right)dt \\ -Q\,dx &= -(2\cos t + 4\sin t)(-2\sin t)\,dt = \left(4\sin t\cos t + 8\sin^2 t\right)dt \end{aligned}$$
<p>The $\sin t\cos t$ terms cancel, and $\cos^2 t$ and $\sin^2 t$ each integrate to $\pi$ over a full turn:</p>
$$\oint_C \mathbf{F} \cdot \mathbf{n}\,ds = \int_0^{2\pi} \left(4\cos^2 t + 8\sin^2 t\right)dt = 4\pi + 8\pi = 12\pi$$
<!-- tools -->

<h2 id="incompressible" data-toc="Incompressible fluids">Incompressible fluids</h2>
<p>
  Could $\mathbf{v} = \langle x, y \rangle$ be the velocity of water in a real (2D) river, flowing steadily? <strong>No.</strong> Its flux out of the circle
  of radius $R$ is $2\pi R^2$ per second, but the disk inside holds only $\pi R^2$ of water: it would all flow out in half a second.
</p>
<p>
  Water is an <strong>incompressible fluid</strong>: its volume stays (very nearly) the same when the pressure changes. So in a stable flow, as much
  water flows into any region as flows out:
</p>
<div class="formula">
  $$\text{For stable flow of an incompressible fluid:} \quad \oint_C \mathbf{v} \cdot d\mathbf{n} = 0 \text{ for every closed curve } C$$
</div>

<h2 id="flux-form" data-toc="The Divergence Theorem">The Divergence Theorem in 2D</h2>
<p>
  Since $\mathbf{v} \cdot \mathbf{w}^\perp = -\mathbf{v}^\perp \cdot \mathbf{w}$, the flux is an ordinary line integral:
  $\int_C \mathbf{v} \cdot d\mathbf{n} = -\int_C \mathbf{v}^\perp \cdot d\mathbf{r}$. For $\mathbf{v} = \langle P, Q \rangle$ and $C = \partial D$,
  that's $\oint_C \langle -Q, P \rangle \cdot d\mathbf{r}$, and Green's Theorem turns it into a double integral:
</p>
<div class="formula">
  $$\oint_{\partial D} \mathbf{v} \cdot d\mathbf{n} = \iint_D \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}\right)dA$$
</div>
<p>
  Here $\mathbf{n}$ is the <strong>outward</strong> normal to $D$. The integrand is the <strong>divergence</strong> of $\mathbf{v}$ (next section): the total flux
  out of $C$ is the total divergence inside it. It's also called the flux form of Green's Theorem; side by side with the circulation form:
</p>
$$\oint_C \mathbf{F} \cdot \mathbf{n}\,ds = \iint_D \operatorname{div}\mathbf{F}\,dA \qquad\qquad \oint_C \mathbf{F} \cdot \mathbf{T}\,ds = \iint_D (\operatorname{curl}\mathbf{F}) \cdot \mathbf{k}\,dA$$
<p>
  The same conditions as Green's Theorem apply: $C$ is a piecewise-smooth simple closed curve bounding $D$, and $P$ and $Q$ have continuous partial
  derivatives on $D$. For a region with a hole, the boundary includes the inner curve, where the outward normal points <em>into</em> the hole.
</p>
<p>
  <strong>Example.</strong> The circle example again: $\operatorname{div}\mathbf{F} = 1 + 2 = 3$, a constant, so the flux is $3$ times the area of the disk:
</p>
$$\oint_C \mathbf{F} \cdot \mathbf{n}\,ds = \iint_D 3\,dA = 3 \cdot 4\pi = 12\pi$$
<p>
  <strong>Example.</strong> $\mathbf{F} = \langle x^2 + e^{-y^2}, \; xy \rangle$ across the rectangle with vertices $(0, 0)$, $(3, 0)$, $(3, 2)$, $(0, 2)$. The
  $e^{-y^2}$ would be hard along $C$, but it depends only on $y$, so it's gone from $\operatorname{div}\mathbf{F} = 2x + x = 3x$:
</p>
$$\begin{aligned} \oint_C \mathbf{F} \cdot \mathbf{n}\,ds &= \int_0^2\int_0^3 3x\,dx\,dy \\ &= \int_0^2 \frac{27}{2}\,dy = 27 \end{aligned}$$

<h2 id="divergence" data-toc="Divergence">Divergence</h2>
<p>
  The <strong>divergence</strong> of $\mathbf{v} = \langle P, Q \rangle$ adds each component's derivative with respect to its own variable. It's a scalar.
  With $\nabla = \left\langle \frac{\partial}{\partial x}, \frac{\partial}{\partial y} \right\rangle$, it's a dot product:
</p>
<div class="formula">
  $$\operatorname{div}\mathbf{v} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} = \nabla \cdot \mathbf{v} \qquad \text{in space: } \operatorname{div}\mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$
</div>
<p>
  By the Divergence Theorem, $\operatorname{div}\mathbf{v}$ at a point is the flux out of a tiny region around it, per unit area:
</p>
<ul>
  <li>$\operatorname{div}\mathbf{v} > 0$ at a point: a <strong>source</strong>. More fluid leaves a small region around it than enters.</li>
  <li>$\operatorname{div}\mathbf{v} < 0$: a <strong>sink</strong>. More enters than leaves.</li>
  <li>
    $\operatorname{div}\mathbf{v} = 0$ everywhere: whatever flows in flows out. For an incompressible fluid the flux across every closed curve is $0$,
    so $\iint_D \operatorname{div}\mathbf{v}\,dA = 0$ for every region $D$, and that forces
    <strong>$\operatorname{div}\mathbf{v} = 0$ for a stable flow of an incompressible fluid</strong>. ($\langle x, y \rangle$ has divergence $2$: not water.)
  </li>
</ul>
<p>
  <strong>Example.</strong> For $\mathbf{F} = \langle x^2y, \; xy^3 - y \rangle$, $\operatorname{div}\mathbf{F} = 2xy + 3xy^2 - 1$. At $(1, -1)$ it's
  $-2 + 3 - 1 = 0$. In space, $\mathbf{F} = \langle x^2z, \; xy^2, \; yz^3 \rangle$ has $\operatorname{div}\mathbf{F} = 2xz + 2xy + 3yz^2$.
</p>
<p>
  <strong>Curl.</strong> The other derivative of a field in 16.5 is the <strong>curl</strong>, a vector that measures rotation:
</p>
$$\operatorname{curl}\mathbf{F} = \nabla \times \mathbf{F} = \left\langle \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\; \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\; \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle$$
<p>
  For example, $\mathbf{F} = \langle yz, \; x^2, \; xz \rangle$ has $\operatorname{curl}\mathbf{F} = \langle 0, \; y - z, \; 2x - z \rangle$. If
  $\operatorname{curl}\mathbf{F} = \mathbf{0}$, $\mathbf{F}$ is <strong>irrotational</strong>, and on all of $\mathbb{R}^3$ that means $\mathbf{F}$ is
  conservative. For a field in the plane, $P$ and $Q$ don't depend on $z$ and $R = 0$, so only the last component is left:
  $\operatorname{curl}\mathbf{F} = (Q_x - P_y)\,\mathbf{k}$, the integrand in Green's Theorem from 16.4.
</p>

<h2 id="stretch" data-toc="Stretch factor">Divergence as a stretch factor</h2>
<p>
  A flow moves things around: drop a piece of wood in at $(x, y)$, and $t$ seconds later it's at $T_t(x, y)$. For a short time $\Delta t$, each
  point moves about $\Delta t$ times its velocity:
</p>
$$T_{\Delta t}(x, y) \approx \left(x + \Delta t\,P(x, y), \; y + \Delta t\,Q(x, y)\right)$$
<p>Its Jacobian, the factor it stretches areas by, is about $1$ plus $\Delta t$ times the divergence:</p>
$$J(T_{\Delta t}) \approx \begin{vmatrix} 1 + \Delta t\,P_x & \Delta t\,P_y \\ \Delta t\,Q_x & 1 + \Delta t\,Q_y \end{vmatrix} = 1 + \Delta t\,(P_x + Q_y) + (\Delta t)^2(P_xQ_y - P_yQ_x) \approx 1 + \Delta t\,\operatorname{div}\mathbf{v}$$
<p>
  So a small patch near a point grows when $\operatorname{div}\mathbf{v} > 0$ and shrinks when it's negative, and keeps its area when it's $0$: an
  incompressible fluid can't be stretched.
</p>
<p>
  <strong>Example.</strong> In the flow $\mathbf{v} = \langle x^2, \; xy \rangle$ (cm/s), $\operatorname{div}\mathbf{v} = 2x + x = 3x$, which is $3$ at $(1, 2)$. A 4 cm²
  patch of dye there covers about $(1 + 0.1 \cdot 3) \cdot 4 = 5.2$ cm² a tenth of a second later.
</p>

<h2 id="pictures" data-toc="Reading a picture">Reading divergence and curl from a picture</h2>
<div class="figure-row">
  <figure>
    ${ge}
    <figcaption>Arrows that get longer in the direction they point: $\operatorname{div}\mathbf{F} > 0$ at $P$.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>
      <strong>Divergence:</strong> picture a small box around $P$. If the arrows get <em>longer</em> in the direction they point, fluid leaves the
      box faster than it enters, so $\operatorname{div}\mathbf{F} > 0$. If they get shorter, $\operatorname{div}\mathbf{F} < 0$. If their length
      only changes <em>sideways</em> to the flow, or doesn't change, $\operatorname{div}\mathbf{F} = 0$.
    </p>
    <p>Here $\mathbf{F} = \langle 0, 1.5 + 0.5y \rangle$, so $\operatorname{div}\mathbf{F} = 0.5$: positive, as the picture shows.</p>
  </div>
</div>
<div class="figure-row">
  <figure>
    ${ve}
    <figcaption>$\mathbf{F} = \langle x, y^2 \rangle$: $P_1$ is a source and $P_2$ is a sink.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>
      <strong>Sources and sinks.</strong> Near $P_1$, the arrows leaving a small box are longer than the ones arriving, so the net flow is outward and
      $P_1$ is a source. Near $P_2$, the arrows arriving are longer, so the net flow is inward and $P_2$ is a sink.
    </p>
    <p>
      To check with the formula: $\operatorname{div}\mathbf{F} = 1 + 2y$. At $P_1$, $y > 0$, so $\operatorname{div}\mathbf{F} > 0$; at $P_2$,
      $y < -1$, so $\operatorname{div}\mathbf{F} < 0$. The same formula tells you where the divergence is positive: here, above the line $y = -\frac{1}{2}$.
    </p>
  </div>
</div>
<div class="figure-row">
  <figure>
    ${_e}
    <figcaption>Arrows longer above $P$ than below: a paddle wheel at $P$ turns clockwise, so $\operatorname{curl}\mathbf{F}$ points into the page.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>
      <strong>Curl:</strong> picture a small paddle wheel at $P$. If the flow pushes harder on one side than the other, the wheel turns.
      Counterclockwise means $\operatorname{curl}\mathbf{F}$ points out of the page ($\mathbf{k}$); clockwise means into the page ($-\mathbf{k}$);
      no turning means $\operatorname{curl}\mathbf{F} = \mathbf{0}$ (right-hand rule: curl your fingers the way the wheel turns).
    </p>
    <p>Here $\mathbf{F} = \langle 1.5 + 0.5y, 0 \rangle$, so $Q_x - P_y = -0.5$ and $\operatorname{curl}\mathbf{F} = -0.5\,\mathbf{k}$. Its divergence is $0$: the length changes across the flow, not along it.</p>
  </div>
</div>

<h2 id="flow-rate" data-toc="Fluid flowing out of a region">Fluid flowing out of a region</h2>
<p>
  If $\mathbf{F}$ is a fluid's velocity, the outward flux across the boundary of $D$ is the net rate fluid flows out of $D$, in area per unit time.
  The rate it flows <em>in</em> is the negative. By the Divergence Theorem, that rate is the total divergence over $D$, so an
  incompressible fluid ($\operatorname{div}\mathbf{F} = 0$) has no net flow into or out of any region.
</p>
<p>
  <strong>Example.</strong> For $\mathbf{F} = \langle 2x - y, \; x^2 - y \rangle$, $\operatorname{div}\mathbf{F} = 2 - 1 = 1$, so fluid leaves the quarter
  disk $x^2 + y^2 \le 9$, $x \ge 0$, $y \ge 0$ at the rate of its area, $\frac{9\pi}{4}$, and flows in at the rate $-\frac{9\pi}{4}$.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Turning $\mathbf{r}'$ the wrong way.</strong> $\langle x', y' \rangle^\perp = \langle y', -x' \rangle$ turns clockwise, which points outward when $C$ runs counterclockwise. $\langle -y', x' \rangle$ points inward and flips the sign.</li>
  <li><strong>The sign in $P\,dy - Q\,dx$.</strong> With $C$ counterclockwise, this gives the <em>outward</em> flux. $Q\,dx - P\,dy$ is the inward flux.</li>
  <li><strong>Forgetting $L(C)$</strong> for a constant field across a segment, or using $\mathbf{r}'^\perp$ without dividing by its length when you need the unit normal $\mathbf{n}$.</li>
  <li><strong>Mixing up divergence and curl.</strong> Flux uses $\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}$ (each component with its own variable, added). Circulation uses $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$.</li>
  <li><strong>Treating divergence as a vector.</strong> $\operatorname{div}\mathbf{F}$ is a number at each point; $\operatorname{curl}\mathbf{F}$ is a vector.</li>
  <li><strong>Reading length changes the wrong way in a picture.</strong> Divergence comes from length changing <em>along</em> the flow; curl from length changing <em>across</em> it.</li>
  <li><strong>Using the Divergence Theorem on a curve that isn't closed</strong>, or around a point where $\mathbf{F}$ isn't defined.</li>
</ul>
`,H=String.raw`\oint_C \mathbf{F} \cdot \mathbf{n}\,ds`;function U(e,t){let{value:n,steps:r}=e.integrate(t),i=A(O(t,[`x`,`y`]));return{answer:n,steps:[{explanation:`$C$ is the boundary of the region $D$${e.shape===`polygon`?` inside it`:``}, and $\\mathbf{n}$ points out of $D$, so the Divergence Theorem (the flux form of Green's Theorem) turns the flux into a double integral of the divergence.`,tex:String.raw`${H} = \iint_D \operatorname{div}\mathbf{F}\,dA = \iint_D ${i}\,dA`,lessonSection:R.theorem},...r]}}function be(t){let n=()=>e([[1,1],[2,1],[3,1],[1,2],[2,2]],t);return e([()=>({region:V(e([1,2,3],t),e([1,2,3],t)),maxTerms:2}),()=>({region:ue(...n()),maxTerms:1}),()=>({region:fe(...n()),maxTerms:1}),()=>({region:me(e([1,2],t)),maxTerms:1}),()=>({region:z(e([1,2,3],t)),maxTerms:2}),()=>({region:le(...e([[1,2],[1,3],[2,3]],t)),maxTerms:2}),()=>({region:B(e([1,2,3],t)),maxTerms:2})],t)()}function xe(t){let n=t()<.5,[r,i]=n?[e([1,2,3],t),e([1,2],t)]:[e([1,2],t),e([1,2],t)],a=n?V(r,i):ue(r,i),o=n?de(r,i):ce(r,i),{P:c,Q:l,div:u,divStep:f}=P(t,!1,[1,2,3,-1],1),p=re(c,l),h=o.map(e=>pe(e,w(l.poly,-1),c.poly)),g=h.reduce((e,{value:t})=>m(e,t),y(0)),_=U(a,u),v=[{explanation:`(a) Directly. Going around $C$ counterclockwise, the outward normal makes $\\mathbf{F} \\cdot \\mathbf{n}\\,ds = P\\,dy - Q\\,dx$. Go around one side at a time: write $x$ and $y$ in terms of one variable, along with $dx$ and $dy$, and substitute.`,tex:String.raw`${H} = ${p}`,lessonSection:R.direct,technique:s},...h.map(({step:e})=>e),{explanation:`Add the sides.`,tex:String.raw`${H} = ${h.map(({value:e})=>A(d(e))).join(` + `)} = ${d(g)}`},{...f,explanation:`(b) With the Divergence Theorem. ${f.explanation}`},..._.steps,{explanation:`Both methods give the same flux.`,tex:String.raw`${H} = ${b(_.answer)}`}];return{problem:k(`Find the outward flux of $\\mathbf{F}$ across $C$ by two methods: (a) directly, and (b) using the Divergence Theorem. $C$ is ${a.curveText}.`,I(c,l),_.answer,b(_.answer),v,a.figure(!1)),field:F(L(c,l)),pieces:a.loops.flat()}}function Se(e){let{region:t,maxTerms:n}=be(e),{P:r,Q:i,div:a,divStep:o}=P(e,!0,void 0,n),{answer:s,steps:c}=U(t,a);return{problem:k(`Use the Divergence Theorem to find the outward flux of $\\mathbf{F}$ across $C$, where $C$ is ${t.curveText}.`,I(r,i),s,b(s),[o,...c,{explanation:`So the outward flux is`,tex:String.raw`${H} = ${b(s)}`}],t.figure(!1)),field:F(L(r,i)),pieces:t.loops.flat()}}function Ce(t){let n=e([()=>V(e([1,2,3],t),e([1,2,3],t)),()=>z(e([1,2,3],t)),()=>B(e([1,2,3],t)),()=>le(...e([[1,2],[1,3],[2,3]],t))],t)(),r=t()<.4,{P:i,Q:a,div:o,divStep:s}=P(t,!1),{answer:c,steps:l}=U(n,o),u=r?S(c,y(-1)):c,d={explanation:r?`Fluid flowing out of $D$ crosses its boundary in the direction of the outward normal, so the rate it flows out is the outward flux $\\oint_C \\mathbf{F} \\cdot \\mathbf{n}\\,ds$. The rate it flows in is the negative of that.`:`Fluid flowing out of $D$ crosses its boundary in the direction of the outward normal, so the net rate it flows out is the outward flux $\\oint_C \\mathbf{F} \\cdot \\mathbf{n}\\,ds$.`,tex:r?String.raw`\text{rate in} = -${H}`:String.raw`\text{rate out} = ${H}`,lessonSection:R.flow},f=r?{explanation:`Flip the sign for the rate in.`,tex:String.raw`\text{rate in} = -${A(b(c))} = ${b(u)}`}:{explanation:`So the net rate out is`,tex:String.raw`\text{rate out} = ${b(u)}`};return{problem:k(`A fluid flows in the plane with velocity field $\\mathbf{F}$. Use the Divergence Theorem to find the net rate at which the fluid flows ${r?`into`:`out of`} the region $D$, where the boundary of $D$ is ${n.curveText}. (A negative answer means it flows the other way.)`,I(i,a),u,b(u),[d,s,...l,f],n.figure(!1)),field:F(L(r?{poly:w(i.poly,-1),extra:null}:i,r?{poly:w(a.poly,-1),extra:null}:a)),pieces:n.loops.flat()}}var we=[{build:xe}],Te=[{build:Se}],Ee=[{build:Ce}],De=[`Positive`,`Negative`,`Zero`];function Oe(t){let n=e([1,-1,0],t),r=a(()=>ie(t),e=>Math.sign(e.div)!==n),i=e([[0,0],[.9,.9],[-.9,.9],[.9,-.9],[-.9,-.9],[.9,0],[0,-.9]],t),o=.75,s=De[n>0?0:n<0?1:2],c=N(o,48).map(([e,t])=>[e+i[0],t+i[1]]),l=r.divReason.replace(/a small box (around|at) \$P\$/g,`any small box`);return{field:r,center:i,radius:o,problem:{promptHtml:`The vector field $\\mathbf{F}$ is shown in the $xy$-plane, with the circle $C$ drawn on it. Let $\\mathbf{n}$ be the outward-pointing normal to $C$ in the plane. Is the 2D flux $\\displaystyle\\oint_C \\mathbf{F} \\cdot \\mathbf{n}\\,ds$ positive, negative, or zero?`,givenTex:``,figureHtml:M({label:`A vector field in the plane with a circle C drawn on it.`,field:r.F,curve:{points:c,closed:!0,noArrows:!0}}),choices:De,correctChoice:s,wrongChoiceHint:`By the Divergence Theorem in 2D, the outward flux is the integral of div F over the disk inside C. What is the sign of div F there?`,answerTex:String.raw`\text{${s}}`,steps:[{explanation:`By the Divergence Theorem in 2D, the outward flux across $C$ is the integral of $\\operatorname{div}\\mathbf{F}$ over the disk $R$ inside it. So you only need the sign of $\\operatorname{div}\\mathbf{F}$ inside $C$.`,tex:String.raw`\oint_C \mathbf{F} \cdot \mathbf{n}\,ds = \iint_R \operatorname{div}\mathbf{F}\,dA`,lessonSection:R.theorem},{explanation:`Read the divergence from the arrows. ${l} This pattern is the same everywhere in the picture, so $\\operatorname{div}\\mathbf{F}$ is ${s.toLowerCase()} all over the disk, and so is the flux.`,tex:String.raw`\operatorname{div}\mathbf{F} ${n>0?`> 0`:n<0?`< 0`:`= 0`} \quad\Rightarrow\quad \oint_C \mathbf{F} \cdot \mathbf{n}\,ds ${n>0?`> 0`:n<0?`< 0`:`= 0`}`,lessonSection:R.pictures}]}}}var ke=[{build:Oe}],W=[`x`,`y`],G=(e,t)=>String.raw`\left\langle ${e},\ ${t} \right\rangle`,K=([e,t])=>`(${e}, ${t})`,q=(e,t,n=String.raw`\mathbf{v}`)=>String.raw`${n}(x, y) = ${G(O(e,W),O(t,W))}`,J=(e,t)=>D(C(e,0),C(t,1));function Ae(e,t,n){return{explanation:n,tex:String.raw`\operatorname{div}\mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} = ${O(C(e,0),W)} ${Y(O(C(t,1),W))} = ${O(J(e,t),W)}`,lessonSection:R.divergence}}var Y=e=>e.startsWith(`-`)?`- ${e.slice(1)}`:`+ ${e}`,je=[[3,4],[4,3],[-3,4],[4,-3],[0,2],[0,3],[2,0],[-3,0],[0,-2],[-4,3]];function Me(t){let{v:n,A:r,d:i,flux:o}=a(()=>{let n=[e([-3,-2,-1,0,1,2,3],t),e([-3,-2,-1,0,1,2,3],t)],r=[e([-2,-1,0,1],t),e([-2,-1,0,1],t)],i=e(je,t);return{v:n,A:r,d:i,flux:n[0]*i[1]-n[1]*i[0]}},({flux:e})=>e===0),s=[r[0]+i[0],r[1]+i[1]],c=Math.hypot(...i),l=[i[1],-i[0]],u=y(o,c),f=ne(r,s),p=[{explanation:`$C$ is a straight segment and $\\mathbf{v}$ is constant, so the flux is $\\mathbf{v} \\cdot \\mathbf{n}$ times the length of $C$. The direction of travel is $B - A$; turning it $90^\\circ$ clockwise ($\\langle a, b \\rangle^\\perp = \\langle b, -a \\rangle$) gives the normal on the right, and dividing by its length makes it a unit normal.`,tex:String.raw`B - A = ${G(String(i[0]),String(i[1]))}, \quad (B - A)^{\perp} = ${G(String(l[0]),String(l[1]))}, \quad L(C) = ${c}, \quad \mathbf{n} = \tfrac{1}{${c}}${G(String(l[0]),String(l[1]))}`,lessonSection:R.flux},{explanation:`Dot $\\mathbf{v}$ with $\\mathbf{n}$, then multiply by the length.${o<0?` It's negative: the water crosses $C$ toward the left side, against $\\mathbf{n}$.`:``}`,tex:String.raw`\text{Flux}_C(\mathbf{v}) = (\mathbf{v} \cdot \mathbf{n})\,L(C) = ${d(u)} \cdot ${c} = ${o}`}];return{problem:k(`Water flows across the plane with constant velocity $\\mathbf{v}$ (in m/s). Let $C$ be the segment from $A = ${K(r)}$ to $B = ${K(s)}$, with unit normal $\\mathbf{n}$ on the right as you go from $A$ to $B$. Find $\\text{Flux}_C(\\mathbf{v})$, the area of water crossing $C$ per second in the direction of $\\mathbf{n}$.`,String.raw`\mathbf{v} = ${G(String(n[0]),String(n[1]))}`,x(y(o)),String(o),p,j({loops:[[f]],points:[r,s],ariaLabel:`The segment C from ${K(r)} to ${K(s)}, with an arrow showing the direction of travel.`})),field:F(()=>n),pieces:[f]}}function X(e,t){return e===0?``:`${e===1?``:e===-1?`-`:e}${t}`}function Z(e){let t=e.filter(e=>e!==``);return t.length===0?`0`:t.map((e,t)=>t===0?e:Y(e)).join(` `)}var Ne=[{name:`full`,end:String.raw`2\pi`,t1:2*Math.PI,half:y(1),sinCos:y(0),words:e=>`the circle $x^2 + y^2 = ${e*e}$, traced counterclockwise (here $\\mathbf{n}$ is the outward normal)`},{name:`half`,end:String.raw`\pi`,t1:Math.PI,half:y(1,2),sinCos:y(0),words:e=>`the upper half of the circle $x^2 + y^2 = ${e*e}$, from $(${e}, 0)$ to $(${-e}, 0)$ (here $\\mathbf{n}$ points away from the origin)`},{name:`quarter`,end:String.raw`\frac{\pi}{2}`,t1:Math.PI/2,half:y(1,4),sinCos:y(1,2),words:e=>`the quarter of the circle $x^2 + y^2 = ${e*e}$ in the first quadrant, from $(${e}, 0)$ to $(0, ${e})$ (here $\\mathbf{n}$ points away from the origin)`}];function Pe(t){let n=e([1,2,3],t),r=e(Ne,t),i=[-2,-1,0,1,2,3],{a:o,b:s,c,d:l,answer:u}=a(()=>{let[a,o,s,c]=[0,1,2,3].map(()=>e(i,t)),l=n*n;return{a,b:o,c:s,d:c,answer:te(ee(y(l*(a+c)*r.half.num,r.half.den)),x(y(l*(o+s)*r.sinCos.num,r.sinCos.den)))}},({a:e,b:t,c:n,d:r,answer:i})=>e===0&&t===0||n===0&&r===0||[...i.values()].every(({c:e})=>e.num===0)),f=E([o,1,0],[s,0,1]),p=E([c,1,0],[l,0,1]),m=n*n,h={at:e=>[n*Math.cos(e),n*Math.sin(e)],t0:0,t1:r.t1},g=String.raw`\cos t`,_=String.raw`\sin t`,v=n===1?``:String(n),S=(e,t)=>e===0?``:X(m*e,t),C=d(r.half),w=e=>e===0?``:`${d(y(m*e*r.half.num,r.half.den))}\\pi`.replace(/^1\\pi/,`\\pi`).replace(/^-1\\pi/,`-\\pi`),D=[{explanation:`Parametrize $C$.`,tex:String.raw`\mathbf{r}(t) = ${G(`${v}${g}`,`${v}${_}`)}, \quad 0 \le t \le ${r.end}`,lessonSection:R.direct},{explanation:`Find $\\mathbf{r}'(t)$, and turn it $90^\\circ$ clockwise: $\\langle x', y' \\rangle^\\perp = \\langle y', -x' \\rangle$. Going counterclockwise around the origin, this points away from it, the direction $\\mathbf{n}$ points.`,tex:String.raw`\mathbf{r}'(t) = ${G(`-${v}${_}`,`${v}${g}`)}, \quad \mathbf{r}'(t)^{\perp} = ${G(`${v}${g}`,`${v}${_}`)}`},{explanation:`Substitute $x = ${v}\\cos t$ and $y = ${v}\\sin t$ into $\\mathbf{v}$.`,tex:String.raw`\mathbf{v}(\mathbf{r}(t)) = ${G(Z([X(n*o,g),X(n*s,_)]),Z([X(n*c,g),X(n*l,_)]))}`},{explanation:`Dot it with $\\mathbf{r}'(t)^\\perp$.`,tex:String.raw`\mathbf{v}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)^{\perp} = ${Z([S(o,String.raw`\cos^2 t`),S(s+c,String.raw`\sin t\cos t`),S(l,String.raw`\sin^2 t`)])}`},{explanation:`Integrate. From $0$ to $${r.end}$, $\\cos^2 t$ and $\\sin^2 t$ each integrate to $${C===`1`?``:C}\\pi$${r.name===`quarter`?`, and $\\sin t\\cos t$ integrates to $\\frac{1}{2}$`:`, and $\\sin t\\cos t$ integrates to $0$`}.`,tex:String.raw`\text{Flux}_C(\mathbf{v}) = \int_0^{${r.end}} \mathbf{v}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)^{\perp}\,dt = ${Z([w(o),r.name===`quarter`?d(y(m*(s+c),2)).replace(/^0$/,``):``,w(l)])} = ${b(u)}`}];return{problem:k(`Find the flux of $\\mathbf{v}$ across $C$, $\\int_C \\mathbf{v} \\cdot \\mathbf{n}\\,ds$, where $C$ is ${r.words(n)} and $\\mathbf{n} = \\mathbf{r}'(t)^\\perp / |\\mathbf{r}'(t)|$ is the unit normal on the right of the direction of travel.`,q(f,p),u,b(u),D,j({loops:[[h]],ariaLabel:`The curve C: ${r.words(n).replace(/\$/g,``)}, with arrows showing the direction of travel.`})),field:F((e,t)=>[T(f,e,t),T(p,e,t)]),pieces:[h]}}function Fe(e,t,n){let r=(e,t)=>Array.from({length:t},()=>e).reduce(h,u(1));return v(...e.map(e=>g(h(r(t,e.i),r(n,e.j)),e.c)))}function Ie(t){let[n,r]=e([[0,0],[1,0],[0,1],[2,0],[1,1],[0,2]],t);return E([e([1,2,3,-1,-2],t),n,r])}function Le(t){let n=e([1,2],t),r=e([()=>({x:u(0,1),y:u(0,0,1),end:n,words:`the parabola $y = x^2$ from $(0, 0)$ to $(${n}, ${n*n})$`,rTex:G(`t`,`t^2`)}),()=>({x:u(0,0,1),y:u(0,1),end:n,words:`the parabola $x = y^2$ from $(0, 0)$ to $(${n*n}, ${n})$`,rTex:G(`t^2`,`t`)}),()=>{let n=[e([-1,0,1],t),e([-1,0,1],t)],r=e([[2,1],[1,2],[2,-1],[-1,2],[3,0],[0,2],[1,1]],t),i=[n[0]+r[0],n[1]+r[1]];return{x:u(n[0],r[0]),y:u(n[1],r[1]),end:1,words:`the segment from $${K(n)}$ to $${K(i)}$`,rTex:G(p(u(n[0],r[0])),p(u(n[1],r[1])))}}],t)(),i=f(r.x),o=f(r.y),{P:s,Q:c,Pt:m,Qt:ee,integrand:b,value:S}=a(()=>{let e=Ie(t),n=Ie(t),a=Fe(e,r.x,r.y),s=Fe(n,r.x,r.y),c=v(h(a,o),g(h(s,i),y(-1)));return{P:e,Q:n,Pt:a,Qt:s,integrand:c,value:l(_(c),y(r.end))}},({P:e,Q:t,value:n})=>n.num===0||e[0].i+e[0].j===0&&t[0].i+t[0].j===0),te=e=>r.x.reduce((t,n,r)=>t+n.num/n.den*e**r,0),C=e=>r.y.reduce((t,n,r)=>t+n.num/n.den*e**r,0),w={at:e=>[te(e),C(e)],t0:0,t1:r.end},E=_(b),D=[{explanation:`Parametrize $C$.`,tex:String.raw`\mathbf{r}(t) = ${r.rTex}, \quad 0 \le t \le ${r.end}`,lessonSection:R.direct},{explanation:`Find $\\mathbf{r}'(t)$, and turn it $90^\\circ$ clockwise: $\\langle x', y' \\rangle^\\perp = \\langle y', -x' \\rangle$. That's the normal on the right of the direction of travel.`,tex:String.raw`\mathbf{r}'(t) = ${G(p(i),p(o))}, \quad \mathbf{r}'(t)^{\perp} = ${G(p(o),p(g(i,y(-1))))}`},{explanation:`Substitute $x(t)$ and $y(t)$ into $\\mathbf{v}$.`,tex:String.raw`\mathbf{v}(\mathbf{r}(t)) = ${G(p(m),p(ee))}`},{explanation:`Dot it with $\\mathbf{r}'(t)^\\perp$ and expand.`,tex:String.raw`\mathbf{v}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)^{\perp} = ${p(b)}`},{explanation:`Integrate.`,tex:String.raw`\text{Flux}_C(\mathbf{v}) = \int_0^{${r.end}} \left(${p(b)}\right)dt = \Big[${p(E)}\Big]_0^{${r.end}} = ${d(S)}`}];return{problem:k(`Find the flux of $\\mathbf{v}$ across $C$, $\\int_C \\mathbf{v} \\cdot \\mathbf{n}\\,ds$, where $C$ is ${r.words} and $\\mathbf{n} = \\mathbf{r}'(t)^\\perp / |\\mathbf{r}'(t)|$ is the unit normal on the right of the direction of travel.`,q(s,c),x(S),d(S),D,j({loops:[[w]],ariaLabel:`The curve C: ${r.words.replace(/\$/g,``)}, with an arrow showing the direction of travel.`})),field:F((e,t)=>[T(s,e,t),T(c,e,t)]),pieces:[w]}}var Q=[`A`,`B`,`C`,`D`];function Re(t){let{c:n,i:r,j:i}=a(()=>({c:e([1,2,3,-1,-2],t),i:e([1,1,2],t),j:e([0,0,1],t)}),({c:e,i:t,j:n})=>e*t%(n+1)!==0),o=t()<.6?[e([[1,0,1],[2,0,2],[-1,0,2],[3,0,0]],t)]:[],s=t()<.6?[e([[1,1,0],[-2,2,0],[1,2,0],[-1,0,0]],t)]:[];return{P:E([n,r,i],...o),Q:E([-n*r/(i+1),r-1,i+1],...s)}}function ze(t){let r=Re(t),a=[{P:r.P,Q:w(r.Q,-1)},{P:r.Q,Q:r.P},{P:D(r.P,E([e([1,2,-1],t),1,0])),Q:r.Q},{P:r.P,Q:D(r.Q,E([e([1,3,-2],t),0,1]))},{P:E([1,1,0]),Q:E([1,0,1])},{P:E([1,2,0]),Q:E([1,0,2])}],o=e=>G(O(e.P,W),O(e.Q,W)),s=new Set([o(r)]),c=i(a,t).filter(e=>J(e.P,e.Q).length===0||s.has(o(e))?!1:(s.add(o(e)),!0)),l=i([r,...c.slice(0,3)],t),u=l.indexOf(r),d=n(`<ul class="integral-options">${l.map((e,t)=>`<li><strong>${Q[t]}.</strong> $\\mathbf{v} = ${o(e)}$</li>`).join(``)}</ul>`),f=[{explanation:`In a stable flow of an incompressible fluid, as much fluid leaves any region as enters it, so the flux across every closed curve is $0$. By the Divergence Theorem, $\\iint_D \\operatorname{div}\\mathbf{v}\\,dA = 0$ for every region $D$, which means $\\operatorname{div}\\mathbf{v} = 0$ everywhere. Find $\\operatorname{div}\\mathbf{v} = P_x + Q_y$ for each choice.`,tex:String.raw`\operatorname{div}\mathbf{v} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}`,lessonSection:R.incompressible},{explanation:`Only ${Q[u]} has divergence $0$ everywhere.`,tex:String.raw`\begin{aligned} ${l.map((e,t)=>String.raw`\text{${Q[t]}:}\ \operatorname{div}\mathbf{v} &= ${O(C(e.P,0),W)} ${Y(O(C(e.Q,1),W))} = ${O(J(e.P,e.Q),W)}`).join(String.raw` \\ `)} \end{aligned}`}];return{problem:{promptHtml:`Which of these could be the velocity field of a stable flow of an incompressible fluid, like water, in the plane?`,givenTex:``,figureHtml:d,answerTex:String.raw`\text{${Q[u]}}`,choices:Q.slice(0,l.length),correctChoice:Q[u],wrongChoiceHint:`That field's divergence isn't 0 everywhere, so some region would gain or lose fluid. Find P_x + Q_y for each choice.`,steps:f},options:l,correct:u}}function Be(t){let n=n=>E(...Array.from({length:t()<.5?2:1},()=>{let r=[e([0,1],t),e([0,1],t)];return r[n]=e([1,2],t),[e([1,2,3,-1,-2],t),r[0],r[1]]})),r=e([2,4,5,10],t),i=e([5,10,20],t),o=i/100,{P:s,Q:c,point:l,div:u}=a(()=>{let r=n(0),i=n(1),a=[e([-1,1,2],t),e([-1,1,2],t)];return{P:r,Q:i,point:a,div:T(J(r,i),...a)}},({div:e})=>e===0||Math.abs(e)>8||100+i*e<=0),d=y(100+i*u,100),f=y(r*(100+i*u),100),p=e=>String(Math.round(e.num/e.den*1e4)/1e4),m=[{explanation:`In a short time $\\Delta t$, the flow moves each point $(x, y)$ to about $T_{\\Delta t}(x, y) = (x + \\Delta t\\,P, \\; y + \\Delta t\\,Q)$. Its Jacobian, the stretch factor for areas, is about $1 + \\Delta t\\,\\operatorname{div}\\mathbf{v}$, so a small patch's area gets multiplied by that.`,tex:String.raw`\text{new area} \approx \left(1 + \Delta t\,\operatorname{div}\mathbf{v}\right) \cdot \text{old area}`,lessonSection:R.stretch},{explanation:`Find $\\operatorname{div}\\mathbf{v} = P_x + Q_y$.`,tex:String.raw`\operatorname{div}\mathbf{v} = ${O(C(s,0),W)} ${Y(O(C(c,1),W))}`,lessonSection:R.divergence},{explanation:`At the patch's center, $${K(l)}$:`,tex:String.raw`\operatorname{div}\mathbf{v}${K(l)} = ${u}`},{explanation:`Multiply the area by the stretch factor.${u<0?` The divergence is negative, so the patch shrinks.`:` The divergence is positive, so the patch spreads out.`}`,tex:String.raw`\text{new area} \approx \left(1 + ${o} \cdot ${u<0?`(${u})`:u}\right) \cdot ${r} = ${p(d)} \cdot ${r} = ${p(f)}\text{ cm}^2`}];return{problem:{promptHtml:`A fluid flows in the plane with velocity field $\\mathbf{v}$, in cm/s. A small patch of dye with area $${r}$ cm² is centered at $${K(l)}$. Use the stretch factor of the flow to estimate the patch's area $${o}$ seconds later, in cm².`,givenTex:q(s,c),answerTex:p(f),answerValue:f.num/f.den,steps:m},P:s,Q:c,point:l,area:r,dt:o}}var $=[`P₁ is a source, P₂ is a sink`,`P₁ is a sink, P₂ is a source`,`Both are sources`,`Both are sinks`];function Ve(t){let n=e($,t),r=n===$[0]?[1,-1]:n===$[1]?[-1,1]:n===$[2]?[1,1]:[-1,-1],i=[-1.5,-1,1,1.5],{P:o,Q:s,p1:c,p2:l,d1:u,d2:d}=a(()=>{let[n,r]=[e([-1,0,1],t),e([-1,0,1],t)],[a,o]=e([[0,1],[1,0],[1,1],[0,-1],[-1,0],[1,-1]],t),s=E([n,1,0],[a,2,0]),c=E([r,0,1],[o,0,2]),l=[e(i,t),e(i,t)],u=[e(i,t),e(i,t)],d=J(s,c);return{P:s,Q:c,p1:l,p2:u,d1:T(d,...l),d2:T(d,...u)}},({P:e,Q:t,p1:n,p2:i,d1:a,d2:o})=>Math.sign(a)!==r[0]||Math.sign(o)!==r[1]||Math.abs(a)<1||Math.abs(o)<1||Math.hypot(n[0]-i[0],n[1]-i[1])<1.4||[n,i].some(n=>Math.hypot(T(e,...n),T(t,...n))<.5)),f=(e,t)=>[T(o,e,t),T(s,e,t)],p=e=>e>0?`a source`:`a sink`,m=[{explanation:`From the picture: draw a small box around each point and compare the arrows. At a source, the arrows leaving the box are longer than the ones arriving, so more fluid flows out than in and the net flow is outward. At a sink, the arrows arriving are longer, so the net flow is inward.`,tex:``,lessonSection:R.pictures},Ae(o,s,`To check, the field in the picture is $${q(o,s,`\\mathbf{F}`)}$. Find its divergence.`),{explanation:`Evaluate at each point. Positive divergence means a source, negative a sink: $P_1$ is ${p(u)} and $P_2$ is ${p(d)}.`,tex:String.raw`\operatorname{div}\mathbf{F}${K(c)} = ${u}, \qquad \operatorname{div}\mathbf{F}${K(l)} = ${d}`}];return{problem:{promptHtml:`A vector field $\\mathbf{F}$ is shown. Are the points $P_1$ and $P_2$ sources or sinks? Decide from the picture.`,givenTex:``,figureHtml:M({label:`A vector field in the plane with points P1 at ${K(c)} and P2 at ${K(l)} marked.`,field:f,labeledPoints:[{at:c,text:`P₁`,offset:[.2,.2]},{at:l,text:`P₂`,offset:[.2,.2]}],denseArrows:!0}),answerTex:String.raw`\text{${n.replace(/₁/g,`1`).replace(/₂/g,`2`)}}`,choices:[...$],correctChoice:n,wrongChoiceHint:`Look at a small box around each point: if the arrows leaving it are longer than the ones arriving, more flows out, so it's a source.`,steps:m},F:f,points:[c,l]}}var He=[`div F > 0 for y > 0; div F < 0 for y < 0`,`div F > 0 for x < 0; div F < 0 for x > 0`,`div F > 0 for x > 0; div F < 0 for x < 0`,`div F > 0 for y < 0; div F < 0 for y > 0`],Ue=[`div F > 0 for y > −x; div F < 0 for y < −x`,`div F > 0 for y > x; div F < 0 for y < x`,`div F > 0 for y < x; div F < 0 for y > x`,`div F > 0 for y < −x; div F < 0 for y > −x`];function We(t){let n=e([`y`,`x`,`diagonal`],t),r,i,o,s,c,l,u;if(n===`diagonal`){let n=e([2,4],t),[a,d]=[e([1,-1],t),e([1,-1],t)];r=E([a,n,0]),i=E([d,0,n]),s=Ue;let f=a===d?a>0?0:3:a>0?2:1;o=Ue[f],c=[[1,1],[-1,1],[1,-1],[-1,-1]][f],l=[-c[0],-c[1]];let p=n===2?``:`^3`,m=a===d?`x${p} + y${p}`:`x${p} - y${p}`;u=`$\\operatorname{div}\\mathbf{F}$ is a ${a>0?`positive`:`negative`} multiple of $${m}$${n===4?` (and $x^3$ has the same sign as $x$)`:``}, and $${m} > 0$ exactly when $${a===d?`y > -x`:`y < x`}$.`}else{let{c1:d,c2:f,k:p}=a(()=>{let r=e([1,2,-1],t),i=e([1,-1,2],t);return{c1:r,c2:i,k:n===`y`?r+2*i:2*r+i}},({k:e})=>e===0),m=t()<.5?[e([[1,0,1],[-1,0,2],[2,0,0]],t)]:[],h=t()<.5?[e([[1,1,0],[-1,2,0],[1,0,0]],t)]:[];r=E(n===`y`?[d,1,1]:[d,2,0],...m),i=E(n===`y`?[f,0,2]:[f,1,1],...h),s=He,o=He[n===`y`?p>0?0:3:p>0?2:1];let g=n===`y`?`y`:`x`;c=n===`y`?[.5,Math.sign(p)]:[Math.sign(p),.5],l=n===`y`?[.5,-Math.sign(p)]:[-Math.sign(p),.5],u=`$\\operatorname{div}\\mathbf{F} = ${p===1?``:p===-1?`-`:p}${g}$ has the sign of $${p>0?g:`-${g}`}$.`}let d=(e,t)=>[T(r,e,t),T(i,e,t)],f=[{explanation:`From the plot: where the arrows get longer in the direction they point, more fluid leaves a small box than enters, so $\\operatorname{div}\\mathbf{F} > 0$; where they get shorter, $\\operatorname{div}\\mathbf{F} < 0$.`,tex:``,lessonSection:R.pictures},Ae(r,i,`To check, find $\\operatorname{div}\\mathbf{F}$.`),{explanation:`${u} So: ${o}.`,tex:``}];return{problem:{promptHtml:`A vector field $\\mathbf{F}$ and its plot are shown. Use the plot to guess where $\\operatorname{div}\\mathbf{F} > 0$ and where $\\operatorname{div}\\mathbf{F} < 0$, then calculate $\\operatorname{div}\\mathbf{F}$ to check your guess.`,givenTex:q(r,i,String.raw`\mathbf{F}`),figureHtml:M({label:`A plot of the vector field F.`,field:d,denseArrows:!0}),answerTex:String.raw`\text{${o.replace(/−/g,`-`)}}`,choices:[...s],correctChoice:o,wrongChoiceHint:`Compute div F = P_x + Q_y and find which side of the line it's positive on.`,steps:f},P:r,Q:i,positiveAt:c,negativeAt:l}}var Ge=[{build:Me}],Ke=[{build:Pe},{build:Le}],qe=[{build:ze}],Je=[{build:Be}],Ye=[{build:Ve}],Xe=[{build:We}],Ze=[t(`constant-segment`,`Flux of a constant field across a segment`,Ge),t(`curve`,`Flux across a curve, directly`,Ke),t(`two-ways`,`Flux directly and with the Divergence Theorem`,we),t(`flux-form`,`Flux with the Divergence Theorem`,Te),t(`flow-rate`,`Fluid flowing out of a region`,Ee),t(`incompressible`,`Which field could be an incompressible flow?`,qe),t(`divergence`,`Divergence at a point`,oe),t(`stretch`,`A patch's area a moment later (stretch factor)`,Je),t(`picture`,`Divergence and curl from a picture`,ae),t(`flux-circle`,`Sign of the flux out of a circle drawn on a field`,ke),t(`div-not-constant`,`Which plot's divergence isn't constant?`,[se]),t(`sources-sinks`,`Sources and sinks from a picture`,Ye),t(`sign-region`,`Where div F is positive or negative`,Xe)];function Qe(t){return e(Ze,t).generate(t)}var $e={...r(`flux-divergence`),lessonHtml:ye,techniques:[s,o,c],generateProblem:Qe,problemTypes:Ze};export{$e as fluxTopic};