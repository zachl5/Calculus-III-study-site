import{d as e,f as t,h as n,p as r}from"./index-ZzztMt-8.js";import{c as i}from"./techniques-2ghdpz7U.js";import{u as a}from"./polynomial-DkCx2WfM.js";import{c as o}from"./terms-BZIL_b18.js";import{a as s,c}from"./exact-CWz9QflX.js";import{n as l}from"./problems-gMFTB-Oz.js";import{c as u,d,f,l as p}from"./poly3-gNgVuBoR.js";import{a as m,s as h}from"./common-DLuU6anG.js";import{r as g}from"./curl-C6dCm169.js";import{t as _}from"./common-C_c-e9Fi.js";import{i as v}from"./common-CX_ys3GA.js";var y=String.raw`
<h2 id="conservative-in-3d" data-toc="Conservative fields in 3D">Conservative fields in 3D</h2>
<p>
  A vector field $\mathbf{F} = \langle P, Q, R \rangle$ is <strong>conservative</strong> if $\mathbf{F} = \nabla f$ for some function $f(x, y, z)$, called a
  <strong>potential function</strong>. That means three equations at once:
</p>
<div class="formula">
  $$\frac{\partial f}{\partial x} = P, \qquad \frac{\partial f}{\partial y} = Q, \qquad \frac{\partial f}{\partial z} = R$$
</div>
<p>
  This is the same idea as the <a href="?topic=conservative-fields">Conservative Vector Fields</a> page, now with a third variable. What's new in 3D is the test: in the plane it was
  $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$; in space it's $\operatorname{curl}\mathbf{F} = \mathbf{0}$, and Stokes' Theorem explains why it works.
</p>

<h2 id="fundamental-theorem" data-toc="The Fundamental Theorem">The Fundamental Theorem for Line Integrals</h2>
<p>If $C$ is a smooth curve from $A$ to $B$ and $\mathbf{F} = \nabla f$ with $\nabla f$ continuous, then</p>
<div class="formula">
  $$\int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$$
</div>
<ul>
  <li><strong>Path independence:</strong> every curve from $A$ to $B$ gives the same answer.</li>
  <li><strong>Closed curves give zero:</strong> if $C$ ends where it starts, $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$.</li>
  <li><strong>No parametrizing:</strong> however messy $\mathbf{r}(t)$ is, only its endpoints $\mathbf{r}(a)$ and $\mathbf{r}(b)$ matter.</li>
</ul>
<p>
  So a line integral of a conservative field takes three steps: check that $\mathbf{F}$ is conservative, find $f$, and subtract $f$ at the ends. For example, with the field below,
  $f = x^2 z + xy + 3yz^2$, and along any curve from $(0, 0, 0)$ to $(1, 2, 1)$, $\int_C \mathbf{F} \cdot d\mathbf{r} = f(1, 2, 1) - f(0, 0, 0) = (1 + 2 + 6) - 0 = 9$.
</p>

<h2 id="curl-test" data-toc="The test: curl F = 0">The test: $\operatorname{curl}\mathbf{F} = \mathbf{0}$</h2>
<p>
  If $\mathbf{F} = \nabla f$, then $\operatorname{curl}\mathbf{F} = \operatorname{curl}(\nabla f) = \mathbf{0}$: the mixed partials of $f$ cancel in pairs. The converse is the useful part:
</p>
<div class="formula">
  If $\mathbf{F}$ is defined on all of $\mathbb{R}^3$ (or any simply connected region) and its components have continuous partial derivatives, then
  $\operatorname{curl}\mathbf{F} = \mathbf{0}$ means $\mathbf{F}$ is conservative.
</div>
<p>
  <strong>Why it works.</strong> Take any closed curve $C$ in the region and a surface $S$ it bounds. By Stokes' Theorem,
  $\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S \operatorname{curl}\mathbf{F} \cdot d\mathbf{S} = \iint_S \mathbf{0} \cdot d\mathbf{S} = 0$. Every closed curve gives $0$, so line integrals are
  path independent, and that makes $\mathbf{F}$ conservative. The surface $S$ has to exist inside the region, which is where simply connected comes in (below).
</p>
<p>
  Setting each component of $\operatorname{curl}\mathbf{F} = \left\langle R_y - Q_z,\ P_z - R_x,\ Q_x - P_y \right\rangle$ to $0$ gives three pairs to compare:
</p>
<div class="formula">
  $$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}, \qquad \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}, \qquad \frac{\partial Q}{\partial z} = \frac{\partial R}{\partial y}$$
</div>
<p>
  <strong>Example.</strong> $\mathbf{F} = \langle 2xz + y, \; x + 3z^2, \; x^2 + 6yz \rangle$. Then $P_y = 1 = Q_x$, $P_z = 2x = R_x$, and $Q_z = 6z = R_y$. All three match, so
  $\mathbf{F}$ is conservative. On the other hand $\langle z, x, y \rangle$ has $P_y = 0$ but $Q_x = 1$, and in fact its curl is $\langle 1, 1, 1 \rangle$, so it isn't. One pair failing is enough.
</p>

<!-- tools -->

<h2 id="finding-f" data-toc="Finding f in 3D">Finding $f$ in 3D</h2>
<p>Integrate one component at a time, and let each "constant" of integration depend on the variables you held constant:</p>
<ol>
  <li>Integrate $P$ with respect to $x$: $f = \int P\,dx + g(y, z)$.</li>
  <li>Differentiate with respect to $y$, set it equal to $Q$, and solve for $\frac{\partial g}{\partial y}$. Integrate in $y$: $g = \ldots + h(z)$.</li>
  <li>Differentiate the $f$ so far with respect to $z$, set it equal to $R$, and solve for $h'(z)$. Integrate, with a true constant $C$.</li>
</ol>
<p><strong>Example.</strong> For $\mathbf{F} = \langle 2xz + y, \; x + 3z^2, \; x^2 + 6yz \rangle$ from above:</p>
$$\begin{aligned}
f &= \int (2xz + y)\,dx = x^2 z + xy + g(y, z) \\
\frac{\partial f}{\partial y} &= x + \frac{\partial g}{\partial y} = x + 3z^2 \quad\Rightarrow\quad \frac{\partial g}{\partial y} = 3z^2 \quad\Rightarrow\quad g = 3yz^2 + h(z) \\
\frac{\partial f}{\partial z} &= x^2 + 6yz + h'(z) = x^2 + 6yz \quad\Rightarrow\quad h'(z) = 0 \quad\Rightarrow\quad h = C \\
f(x, y, z) &= x^2 z + xy + 3yz^2 + C
\end{aligned}$$
<p>
  Check by differentiating: $f_x = 2xz + y$, $f_y = x + 3z^2$, $f_z = x^2 + 6yz$. If at some step a variable that shouldn't be there is left over (an $x$ in $\frac{\partial g}{\partial y}$,
  say), the field wasn't conservative after all.
</p>

<h2 id="simply-connected" data-toc="Why the region matters">Why the region matters</h2>
<p>
  A region is <strong>simply connected</strong> if it's in one piece and every closed curve in it can shrink to a point without leaving it. Then every closed curve bounds a surface
  inside the region, and the Stokes argument above works.
</p>
<ul>
  <li><strong>Simply connected:</strong> all of $\mathbb{R}^3$, a ball, a half-space like $x > 0$, and even $\mathbb{R}^3$ minus one point: a loop can slide off to the side of a missing point. (In the plane, a missing point <em>does</em> make a hole; in space it doesn't.)</li>
  <li><strong>Not simply connected:</strong> $\mathbb{R}^3$ minus a whole line, like the $z$-axis, or a solid torus (a doughnut). A loop around the line or through the doughnut's hole is stuck.</li>
</ul>
<p>
  <strong>The swirl.</strong> $\mathbf{S} = \left\langle \frac{-y}{x^2 + y^2}, \frac{x}{x^2 + y^2}, 0 \right\rangle$ is defined everywhere except the $z$-axis. Its curl is $\mathbf{0}$ there:
  only the third component could be nonzero, and $\frac{\partial}{\partial x}\frac{x}{x^2 + y^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2} = \frac{\partial}{\partial y}\frac{-y}{x^2 + y^2}$. But around the circle
  $\mathbf{r}(t) = \langle a\cos t, a\sin t, c \rangle$,
</p>
$$\oint_C \mathbf{S} \cdot d\mathbf{r} = \int_0^{2\pi} \frac{(-a\sin t)(-a\sin t) + (a\cos t)(a\cos t)}{a^2}\,dt = \int_0^{2\pi} 1\,dt = 2\pi \neq 0$$
<p>
  So $\mathbf{S}$ isn't conservative, even though its curl is $\mathbf{0}$: the missing $z$-axis is a hole, and the test doesn't apply. What a closed curve gives depends only on how many
  times it winds around the axis:
</p>
<ul>
  <li>$2\pi$ for each counterclockwise turn around the $z$-axis (seen from above), and $-2\pi$ for each clockwise turn, whatever the curve's shape, radius, or height. (Between the curve and a small circle around the axis the curl is $\mathbf{0}$, so Stokes' Theorem makes the two integrals equal.)</li>
  <li>$0$ for a curve that doesn't go around the axis, such as a circle that stays in the half-space $x > 0$. On a region like that with no hole, $\mathbf{S} = \nabla\theta$ with $\theta = \tan^{-1}(y/x)$.</li>
</ul>
<p>
  If $\mathbf{F} = k\mathbf{S} + \nabla g$, the gradient part gives $0$ around every closed curve, so $\oint_C \mathbf{F} \cdot d\mathbf{r}$ is $2\pi k$ times the number of turns.
</p>

<h2 id="is-it-a-curl" data-toc="Is a field the curl of something?">Is a field the curl of something?</h2>
<p>
  The other identity, $\operatorname{div}(\operatorname{curl}\mathbf{G}) = 0$, answers a different question: given $\mathbf{H}$, is there a $\mathbf{G}$ with
  $\operatorname{curl}\mathbf{G} = \mathbf{H}$?
</p>
<ul>
  <li>If $\operatorname{div}\mathbf{H} \neq 0$, <strong>no</strong>: every curl has divergence $0$.</li>
  <li>If $\operatorname{div}\mathbf{H} = 0$ on all of $\mathbb{R}^3$, <strong>yes</strong>: such a $\mathbf{G}$ exists (you're not asked to find it).</li>
</ul>
<p>
  Only each component's derivative in its <em>own</em> variable matters: $\operatorname{div}\mathbf{H} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$.
</p>
<p>
  <strong>Examples.</strong> $\mathbf{H} = \langle xy, yz, xz \rangle$ has $\operatorname{div}\mathbf{H} = y + z + x \neq 0$, so it isn't a curl. $\mathbf{H} = \langle e^{yz}, \; x^2 z, \; xy \rangle$ has
  divergence $0 + 0 + 0 = 0$, since no component involves its own variable, so it is one. Watch for terms that cancel: $\mathbf{H} = \langle x\sin z, \; x^2 z, \; \cos z \rangle$ has
  $\operatorname{div}\mathbf{H} = \sin z + 0 - \sin z = 0$, so it's a curl too.
</p>
<p>
  Side by side: $\operatorname{curl}\mathbf{F} = \mathbf{0}$ is the test for $\mathbf{F} = \nabla f$, and $\operatorname{div}\mathbf{H} = 0$ is the test for $\mathbf{H} = \operatorname{curl}\mathbf{G}$.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Checking only one pair.</strong> In 3D all three pairs must match; $P_y = Q_x$ alone isn't enough.</li>
  <li><strong>Using a constant instead of a function.</strong> After integrating $P$ in $x$, the leftover is $g(y, z)$, not $C$.</li>
  <li><strong>Trusting curl $\mathbf{F} = \mathbf{0}$ on a region with a hole.</strong> If $\mathbf{F}$ isn't defined on a whole line (like the $z$-axis), a curve around it can give a nonzero answer.</li>
  <li><strong>Mixing up the two tests.</strong> Curl decides whether $\mathbf{F}$ is a gradient; divergence decides whether $\mathbf{H}$ is a curl.</li>
  <li><strong>Subtracting in the wrong order.</strong> $\int_C \nabla f \cdot d\mathbf{r} = f(\text{end}) - f(\text{start})$.</li>
</ul>
`,b={meaning:{id:`conservative-in-3d`,title:`Conservative fields in 3D`},theorem:{id:`fundamental-theorem`,title:`The Fundamental Theorem for Line Integrals`},test:{id:`curl-test`,title:`The test: curl F = 0`},finding:{id:`finding-f`,title:`Finding f in 3D`},holes:{id:`simply-connected`,title:`Why the region matters`},isCurl:{id:`is-it-a-curl`,title:`Is a field the curl of something?`}},x=g.filter(([e,t,n])=>e+t+n===2),S=String.raw`\mathbf{S} = \left\langle \frac{-y}{x^2 + y^2}, \frac{x}{x^2 + y^2}, 0 \right\rangle`,C=String.raw`\oint_C \mathbf{S} \cdot d\mathbf{r} = \int_a^b \mathbf{S}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\,dt`;function w({a:e,clockwise:t,zTex:n,zPrimeTex:r,turns:i},a){let o=e===`1`?``:e,s=e===`a`?`a^2`:`${Number(e)**2}`,c=e=>s===`1`?e:String.raw`\frac{${e}}{${s}}`,l=t?`-`:``,u=i===1?String.raw`2\pi`:String.raw`${2*i}\pi`,d=(t?`-`:``)+u,f=String.raw`\mathbf{r}(t) = \left\langle ${o}\cos t, ${l}${o}\sin t, ${n} \right\rangle`,p=String.raw`\mathbf{r}'(t) = \left\langle -${o}\sin t, ${l}${o}\cos t, ${r} \right\rangle`,m=String.raw`\mathbf{S}(\mathbf{r}(t)) = \left\langle ${c(`${t?``:`-`}${o}\\sin t`)}, ${c(`${o}\\cos t`)}, 0 \right\rangle`,h=t?String.raw`&= ${c(String.raw`(${o}\sin t)(-${o}\sin t)`)} + ${c(String.raw`(${o}\cos t)(-${o}\cos t)`)} + 0 \cdot ${r} \\ &= -(\sin^2 t + \cos^2 t) = -1`:String.raw`&= ${c(String.raw`(-${o}\sin t)(-${o}\sin t)`)} + ${c(String.raw`(${o}\cos t)(${o}\cos t)`)} + 0 \cdot ${r} \\ &= \sin^2 t + \cos^2 t = 1`;return[{explanation:`Find $\\oint_{${a}} \\mathbf{S} \\cdot d\\mathbf{r}$ with the line integral formula. Parametrize the curve and differentiate, for $0 \\le t \\le ${u}$.`,tex:String.raw`\begin{aligned} ${C} \\ ${f} \\ ${p} \end{aligned}`,lessonSection:b.theorem},{explanation:`Substitute $\\mathbf{r}(t)$ into $${S}$. On this curve $x^2 + y^2 = ${s===`1`?`\\cos^2 t + \\sin^2 t = 1`:`${s}(\\cos^2 t + \\sin^2 t) = ${s}`}$.`,tex:m},{explanation:`Dot it with $\\mathbf{r}'(t)$. The third component of $\\mathbf{S}$ is $0$, so the height doesn't matter.`,tex:String.raw`\begin{aligned} \mathbf{S}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) ${h} \end{aligned}`},{explanation:`Integrate over the whole curve.`,tex:String.raw`\oint_{${a}} \mathbf{S} \cdot d\mathbf{r} = \int_0^{${u}} ${t?`(-1)`:`1`}\,dt = ${d}`}]}function T(t){let n=e([`centered`,`wavy`,`offset`],t),r=e([0,1,2,-1],t);if(n===`centered`){let n=e([1,2,3],t),i=t()<.6;return{text:String.raw`the circle $x^2 + y^2 = ${n*n}$, $z = ${r}$, oriented ${i?`counterclockwise`:`clockwise`} as viewed from above`,winding:i?1:-1,swirlSteps:w({a:`${n}`,clockwise:!i,zTex:`${r}`,zPrimeTex:`0`,turns:1},`C`),piece:{r:e=>[n*Math.cos(e),(i?n:-n)*Math.sin(e),r],range:[0,2*Math.PI]}}}if(n===`wavy`){let n=e([1,2,3],t),[i,a]=[e([2,3,4],t),e([1,1,2],t)],o=n===1?``:`${n}`,s=String.raw`${r===0?``:`${r} + `}\sin ${i}t`;return{text:String.raw`the curve $\mathbf{r}(t) = \left\langle ${o}\cos t, ${o}\sin t, ${s} \right\rangle$, $0 \le t \le ${a===1?`2`:`4`}\pi$`,winding:a,swirlSteps:w({a:`${n}`,clockwise:!1,zTex:s,zPrimeTex:String.raw`${i}\cos ${i}t`,turns:a},`C`),piece:{r:e=>[n*Math.cos(e),n*Math.sin(e),r+Math.sin(i*e)],range:[0,2*Math.PI*a]}}}let[i,a]=e([[1,2],[1,3],[2,3],[3,1],[3,2],[4,2],[2,1]],t),o=String.raw`the circle $(x - ${i})^2 + y^2 = ${a*a}$, $z = ${r}$, oriented counterclockwise as viewed from above`,s={r:e=>[i+a*Math.cos(e),a*Math.sin(e),r],range:[0,2*Math.PI]};return i<a?{text:o,winding:1,swirlSteps:[{explanation:`This circle isn't centered on the $z$-axis, so $\\mathbf{S}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t)$ is a hard integral. But $C$ does go around the axis, since its $x$ runs from $${i} - ${a} = ${i-a}$ to $${i+a}$. Put a small circle $C_a$: $x^2 + y^2 = a^2$, $z = ${r}$, counterclockwise, inside $C$ (any $a < ${a-i}$ works). The flat region $D$ between them misses the axis, so Stokes' Theorem applies on it, and $\\operatorname{curl}\\mathbf{S} = \\mathbf{0}$ there. So the two line integrals are equal.`,tex:String.raw`\oint_C \mathbf{S} \cdot d\mathbf{r} - \oint_{C_a} \mathbf{S} \cdot d\mathbf{r} = \iint_D \operatorname{curl}\mathbf{S} \cdot \mathbf{n}\,dS = 0`,lessonSection:b.holes},...w({a:`a`,clockwise:!1,zTex:`${r}`,zPrimeTex:`0`,turns:1},`C_a`),{explanation:`So $C$ gives the same as the small circle.`,tex:String.raw`\oint_C \mathbf{S} \cdot d\mathbf{r} = \oint_{C_a} \mathbf{S} \cdot d\mathbf{r} = 2\pi`}],piece:s}:{text:o,winding:0,swirlSteps:[{explanation:`$C$ doesn't go around the $z$-axis: its $x$ runs from $${i} - ${a} = ${i-a}$ to $${i+a}$, so it stays in the region $x > 0$. That region has no hole, and there $\\mathbf{S}$ has a true potential, $\\theta = \\tan^{-1}(y/x)$. Check it with the gradient $\\nabla\\theta = \\left\\langle \\theta_x, \\theta_y, \\theta_z \\right\\rangle$ and the chain rule.`,tex:String.raw`\begin{aligned} \frac{\partial\theta}{\partial x} &= \frac{1}{1 + y^2/x^2} \cdot \left(-\frac{y}{x^2}\right) = \frac{-y}{x^2 + y^2} \\ \frac{\partial\theta}{\partial y} &= \frac{1}{1 + y^2/x^2} \cdot \frac{1}{x} = \frac{x}{x^2 + y^2} \\ \frac{\partial\theta}{\partial z} &= 0 \end{aligned}`,lessonSection:b.holes},{explanation:`So $\\mathbf{S} = \\nabla\\theta$ along $C$. By the Fundamental Theorem for Line Integrals, the integral is $\\theta$ at the end minus $\\theta$ at the start, and a closed curve ends where it starts.`,tex:String.raw`\oint_C \mathbf{S} \cdot d\mathbf{r} = \oint_C \nabla\theta \cdot d\mathbf{r} = \theta(\mathbf{r}(b)) - \theta(\mathbf{r}(a)) = 0`,lessonSection:b.theorem}],piece:s}}var E=(e,t)=>String.raw`\frac{${e===1?``:e===-1?`-`:e}${t}}{x^2 + y^2}`,D=(e,t)=>t===`0`?e:t.startsWith(`-`)?`${e} - ${t.slice(1)}`:`${e} + ${t}`;function O(t){let n=e([1,2,3,-1,-2],t),r=t()<.75?h(t,x,[1,2,3,-1,-2],2):new Map,i=[0,1,2].map(e=>u(r,e)),o=i.map(e=>e.size===0?`0`:d(e)),l=T(t),p=s(a(2*n*l.winding)),m=c(p),g=c(s(a(2*l.winding))),v=String.raw`\mathbf{F}(x, y, z) = \left\langle ${D(E(-n,`y`),o[0])},\ ${D(E(n,`x`),o[1])},\ ${o[2]} \right\rangle`,y=r.size>0,C=n===1?``:n===-1?`-`:`${n}`,w=[{explanation:(y?`Write $\\mathbf{F} = ${C}\\mathbf{S} + \\nabla g$ with $g = ${d(r)}$ and `:`Write $\\mathbf{F} = ${C}\\mathbf{S}$ with `)+`the swirl $${S}$. `+(y?`A gradient always has curl $\\mathbf{0}$, since its mixed partials are equal. `:``)+`For $\\mathbf{S} = \\langle P, Q, R \\rangle$, use the curl formula. Nothing depends on $z$ and $R = 0$, so the first two components are $0$.`,tex:String.raw`\operatorname{curl}\mathbf{S} = \left\langle \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle = \left\langle 0,\ 0,\ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle`,lessonSection:b.test},{explanation:`Find the last component with the quotient rule. The two partials are equal, so $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ everywhere $\\mathbf{F}$ is defined.`,tex:String.raw`\begin{aligned} \frac{\partial Q}{\partial x} &= \frac{\partial}{\partial x}\left(\frac{x}{x^2 + y^2}\right) = \frac{(x^2 + y^2) - x \cdot 2x}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2} \\ \frac{\partial P}{\partial y} &= \frac{\partial}{\partial y}\left(\frac{-y}{x^2 + y^2}\right) = \frac{-(x^2 + y^2) + y \cdot 2y}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2} \end{aligned}`},{explanation:`But $\\mathbf{F}$ isn't defined on the $z$-axis, where $x^2 + y^2 = 0$. With the axis missing, the region isn't simply connected: a loop around the axis can't shrink to a point without crossing it. So $\\operatorname{curl}\\mathbf{F} = \\mathbf{0}$ doesn't prove $\\mathbf{F}$ is conservative, and the line integral has to be found another way.`+(y?` The $\\nabla g$ part is conservative on all of $\\mathbb{R}^3$, so by the Fundamental Theorem for Line Integrals it gives $g(\\mathbf{r}(b)) - g(\\mathbf{r}(a)) = 0$ around a closed curve.`:``),tex:y?String.raw`\oint_C \mathbf{F} \cdot d\mathbf{r} = ${C}\oint_C \mathbf{S} \cdot d\mathbf{r} + \underbrace{\oint_C \nabla g \cdot d\mathbf{r}}_{g(\mathbf{r}(b)) - g(\mathbf{r}(a)) = 0}`:String.raw`\oint_C \mathbf{F} \cdot d\mathbf{r} = ${C}\oint_C \mathbf{S} \cdot d\mathbf{r}`,lessonSection:b.holes},...l.swirlSteps,{explanation:n===1?`That's the whole line integral.`:`Multiply by the swirl's coefficient, $${n}$.`,tex:String.raw`\oint_C \mathbf{F} \cdot d\mathbf{r} = ${n===1?``:`${n} \\cdot (${g}) = `}${m}`}];return{problem:_(String.raw`Evaluate $\oint_C \mathbf{F} \cdot d\mathbf{r}$, where $C$ is ${l.text}.`,v,p,m,w),F:([e,t,r])=>{let a=e*e+t*t;return[-n*t/a,n*e/a,0].map((n,a)=>n+f(i[a],[e,t,r]))},curve:[l.piece]}}var k=[{build:O}],A=[`x`,`y`,`z`];function j(e){return e.split(`,`).map(Number).map((e,t)=>e===0?``:e===1?A[t]:`${A[t]}^{${e}}`).join(``)}function M(e,t){let n=[];for(let[r,i]of e){let e=i.num/i.den,a=r.split(`,`).map(Number),o=p([[e,...a]]),s=[...u(o,t)][0];n.push({term:{coef:e,body:j(r)},derivative:s?{coef:s[1].num/s[1].den,body:j(s[0])}:null,at:t=>e*a.reduce((e,n,r)=>e*t[r]**n,1)})}return n}function N(t,n){let r=e([0,1,2],t),i=e([0,1,2].filter(e=>e!==r),t),a=e([1,2,3,-1,-2],t),o=n?a:e([1,2,3,-1,-2].filter(e=>e!==a),t),[s,c]=[A[r],A[i]];return{u:r,v:i,pieces:[{term:{coef:a,body:String.raw`${s}\sin ${c}`},derivative:{coef:a,body:String.raw`\sin ${c}`},at:e=>a*e[r]*Math.sin(e[i])},{term:{coef:o,body:String.raw`\cos ${c}`},derivative:{coef:-o,body:String.raw`\sin ${c}`},at:e=>o*Math.cos(e[i])}]}}function P(t){let n=t()<.5,{components:i,extras:a,divergenceTex:s}=r(()=>{let r=[0,1,2].map(()=>h(t,g,[1,2,3,-1,-2],1)),i=m(r).map((e,t)=>M(e,t)),a=[];if(t()<.6){let n=e([0,1,2],t),r=e([1,2,3,-1],t),o=e(v(n),t);i[n].push({term:{coef:r,body:o.tex},derivative:null,at:e=>r*o.at(e)}),a.push(`$${o.tex}$ doesn't involve $${A[n]}$, so its $${A[n]}$-derivative is $0$`)}let s=n?null:t()<.6?`polynomial`:`pair`;if(t()<.4||s===`pair`){let e=N(t,s!==`pair`);i[e.u].push(e.pieces[0]),i[e.v].push(e.pieces[1]),s!==`pair`&&a.push(`the derivatives of $${e.pieces[0].term.body}$ and $${e.pieces[1].term.body}$ cancel`)}if(s===`polynomial`){let n=e([0,1,2],t),r=e(g.filter(e=>e[n]>=1&&e[0]+e[1]+e[2]<=2),t);i[n].push(...M(p([[e([1,2,3,-1,-2],t),r[0],r[1],r[2]]]),n))}return{components:i,extras:a,divergenceTex:o(i.flatMap(e=>e.map(e=>e.derivative)))}},({components:e,divergenceTex:t})=>t===`0`!==n||e.some(e=>o(e.map(e=>e.term))===`0`)||e.flat().length>7),c=i.map(e=>o(e.map(e=>e.term))),l=String.raw`\left\langle ${c.join(`,\\ `)} \right\rangle`,u=n?`Yes`:`No`,d=i.map((e,t)=>String.raw`\frac{\partial}{\partial ${A[t]}}\left(${c[t]}\right) &= ${o(e.map(e=>e.derivative))}`),f=[{explanation:`If $\\mathbf{H} = \\operatorname{curl}\\mathbf{G}$, then $\\operatorname{div}\\mathbf{H} = \\operatorname{div}(\\operatorname{curl}\\mathbf{G}) = 0$, since the mixed partials of $\\mathbf{G}$ cancel in pairs. On all of $\\mathbb{R}^3$ the converse holds too: a field with divergence $0$ is the curl of some $\\mathbf{G}$. So the question is whether $\\operatorname{div}\\mathbf{H} = 0$.`,tex:String.raw`\operatorname{div}(\operatorname{curl}\mathbf{G}) = 0`,lessonSection:b.isCurl},{explanation:`Differentiate each component with respect to its own variable.`+(a.length===0?``:` Note that ${a.join(`, and `)}.`),tex:String.raw`\begin{aligned} ${d.join(String.raw` \\ `)} \end{aligned}`},{explanation:n?`Add them up. The divergence is $0$, so such a $\\mathbf{G}$ exists.`:`Add them up. The divergence isn't $0$, but every curl has divergence $0$, so no such $\\mathbf{G}$ exists.`,tex:String.raw`\operatorname{div}\mathbf{H} = ${s} ${n?``:String.raw`\neq 0`}`}];return{problem:{promptHtml:`Is there a vector field $\\mathbf{G}$ on $\\mathbb{R}^3$ with $\\operatorname{curl}\\mathbf{G} = \\mathbf{H}$?`,givenTex:String.raw`\mathbf{H}(x, y, z) = ${l}`,answerTex:String.raw`\text{${u}}`,choices:[`Yes`,`No`],correctChoice:u,wrongChoiceHint:`Every curl has divergence 0. Find div H.`,steps:f},H:e=>i.map(t=>t.reduce((t,n)=>t+n.at(e),0))}}var F=[{build:P}],[,,I,L]=l,R=(e,t)=>({build:n=>{let{problem:r}=e(n),[i,...a]=r.steps;return{problem:{...r,steps:[{...i,lessonSection:i.lessonSection??t},...a]}}}}),z=[t(`find-f`,`Conservative or not? Find f`,[R(L.build,b.test)]),t(`line-integral`,`Line integral by the Fundamental Theorem`,[R(I.build,b.theorem)]),t(`is-curl`,`Is there a G with curl G = H?`,F),t(`hole`,`Curl 0 around the z-axis`,k)];function B(t){return e(z,t).generate(t)}var V={...n(`conservative-3d`),lessonHtml:y,techniques:[i],generateProblem:B,problemTypes:z};export{V as conservative3dTopic};