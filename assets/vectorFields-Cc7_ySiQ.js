import{d as e,g as t,h as n,m as r,p as i}from"./index-ZzztMt-8.js";import{t as a}from"./techniques-2ghdpz7U.js";import{a as o,c as s,d as c,g as l,l as u,m as d,p as f,s as p}from"./terms-BZIL_b18.js";import{n as m,r as h}from"./fieldDiagram-BszNFGyr.js";import{n as g,r as _}from"./squarePlots-B0XjDynh.js";var v=String.raw`
<h2 id="definition" data-toc="What a vector field is">What a vector field is</h2>
<p>
  A <strong>vector field</strong> assigns a vector to every point of a region. In the plane, it's a function $\mathbf{F}(x, y)$ whose output is a
  2D vector; in space, $\mathbf{F}(x, y, z)$ gives a 3D vector:
</p>
<div class="formula">
  $$\mathbf{F}(x, y) = P(x, y)\,\mathbf{i} + Q(x, y)\,\mathbf{j} = \langle P, Q \rangle, \qquad \mathbf{F}(x, y, z) = \langle P, Q, R \rangle$$
</div>
<p>
  The <strong>component functions</strong> $P$, $Q$, $R$ are ordinary scalar functions. Picture an arrow attached to each point: wind velocity on a
  weather map, the flow of water in a pipe, or the force of gravity around a planet.
</p>

<h2 id="sketching" data-toc="Sketching a vector field">Sketching a vector field</h2>
<ol>
  <li><strong>Pick points</strong>, usually a small grid like $x, y \in \{-1, 0, 1\}$.</li>
  <li><strong>Evaluate $\mathbf{F}$</strong> at each one.</li>
  <li><strong>Draw each vector as an arrow starting at its point.</strong> Plots usually scale all the arrows down by the same factor so they don't overlap; only their relative lengths matter.</li>
</ol>
<div class="figure-row">
  <figure>
    ${m({label:`The field F = (y, -x): arrows circle the origin clockwise and get longer farther out.`,field:(e,t)=>[t,-e]})}
    <figcaption>$\mathbf{F}(x, y) = \langle y, -x \rangle$: every arrow is perpendicular to the line from the origin, so the arrows circle clockwise, longer farther out.</figcaption>
  </figure>
  <div class="figure-notes">
    <table>
      <thead><tr><th>Point</th><th>$\mathbf{F} = \langle y, -x \rangle$</th><th>Arrow</th></tr></thead>
      <tbody>
        <tr><td>$(1, 0)$</td><td>$\langle 0, -1 \rangle$</td><td>down</td></tr>
        <tr><td>$(0, 1)$</td><td>$\langle 1, 0 \rangle$</td><td>right</td></tr>
        <tr><td>$(-1, 0)$</td><td>$\langle 0, 1 \rangle$</td><td>up</td></tr>
        <tr><td>$(0, -1)$</td><td>$\langle -1, 0 \rangle$</td><td>left</td></tr>
        <tr><td>$(1, 1)$</td><td>$\langle 1, -1 \rangle$</td><td>down-right</td></tr>
      </tbody>
    </table>
    <p>
      Notice $\mathbf{F}(x, y) \cdot \langle x, y \rangle = xy - yx = 0$: each arrow is perpendicular to the position vector. That's why they go around in
      circles.
    </p>
  </div>
</div>

<h2 id="reading-plots" data-toc="Reading a vector field plot">Reading a vector field plot</h2>
<p>To match a formula with a plot, check a few easy points and look for these patterns:</p>
<div class="figure-row small-figures">
  <figure>
    ${m({label:`A constant field: identical arrows everywhere.`,field:()=>[1,.5]})}
    <figcaption><strong>Constant</strong>, like $\langle 2, 1 \rangle$: the same arrow everywhere.</figcaption>
  </figure>
  <figure>
    ${m({label:`A radial field: arrows point straight away from the origin.`,field:(e,t)=>[e,t]})}
    <figcaption><strong>Radial</strong>, like $\langle x, y \rangle$: straight out from the origin (or in, with a minus sign).</figcaption>
  </figure>
  <figure>
    ${m({label:`A rotation field: arrows circle the origin counterclockwise.`,field:(e,t)=>[-t,e]})}
    <figcaption><strong>Rotation</strong>, like $\langle -y, x \rangle$: around the origin.</figcaption>
  </figure>
  <figure>
    ${m({label:`A saddle field: arrows come in along one axis and go out along the other.`,field:(e,t)=>[e,-t]})}
    <figcaption><strong>Saddle</strong>, like $\langle x, -y \rangle$: out along one axis, in along the other.</figcaption>
  </figure>
</div>
<ul>
  <li><strong>Check axes.</strong> On the $x$-axis $y = 0$, so $\langle y, x \rangle$ gives $\langle 0, x \rangle$: vertical arrows there.</li>
  <li><strong>Check where $\mathbf{F} = \mathbf{0}$.</strong> $\langle x, -y \rangle$ is zero only at the origin; $\langle y, 0 \rangle$ is zero along the whole $x$-axis.</li>
  <li><strong>Check signs.</strong> A component that's always positive (like $1$ or $e^x$) means every arrow leans that way.</li>
  <li><strong>Check lengths.</strong> $\langle x, y \rangle$ grows away from the origin; a constant field doesn't change at all.</li>
</ul>

<h2 id="physics" data-toc="Fields in physics">Fields in physics</h2>
<ul>
  <li><strong>Velocity fields:</strong> the velocity of a fluid at each point. A wheel spinning with angular speed $\omega$ has $\mathbf{v} = \langle -\omega y, \omega x \rangle$, a rotation field.</li>
  <li>
    <strong>Gravitational field:</strong> by Newton's law, the force on a mass $m$ at position $\mathbf{x}$ from a mass $M$ at the origin is
    $\mathbf{F}(\mathbf{x}) = -\frac{mMG}{|\mathbf{x}|^3}\,\mathbf{x}$: it points toward the origin, with length $\frac{mMG}{|\mathbf{x}|^2}$. More on the
    <a href="?topic=work-and-force-fields">Work and Force Fields</a> page.
  </li>
  <li><strong>Electric field:</strong> the same inverse-square shape, pointing away from a positive charge.</li>
</ul>

<!-- tools -->
<h2 id="gradient-fields" data-toc="Gradient fields">Gradient fields</h2>
<p>
  Every differentiable function $f$ gives a vector field: its <strong>gradient</strong>,
  $\nabla f = \langle f_x, f_y \rangle$ (or $\langle f_x, f_y, f_z \rangle$ in space). From the
  <a href="?topic=directional-derivatives#level-curves">Directional Derivatives</a> page:
</p>
<div class="figure-row">
  <figure>
    ${m({label:`Circular level curves of f = x squared plus y squared, labeled 0.5, 2, and 4.5, with gradient arrows pointing straight outward across them.`,field:(e,t)=>[2*e,2*t],circleContours:[{radius:Math.sqrt(.5),value:`0.5`},{radius:Math.SQRT2,value:`2`},{radius:Math.sqrt(4.5),value:`4.5`}]})}
    <figcaption>$f(x, y) = x^2 + y^2$ and its gradient field $\nabla f = \langle 2x, 2y \rangle$. The arrows cross the circular level curves at right angles, pointing toward higher values.</figcaption>
  </figure>
  <div class="figure-notes">
    <ul>
      <li>$\nabla f$ is <strong>perpendicular to the level curves</strong> of $f$.</li>
      <li>It points toward <strong>higher values</strong> of $f$.</li>
      <li>It's <strong>longer where $f$ changes quickly</strong>, where the level curves are close together.</li>
    </ul>
    <p>
      <strong>Example.</strong> For $f(x, y) = x^2y + 3y$: $\nabla f = \langle 2xy,\ x^2 + 3 \rangle$. Hold $y$ constant for $f_x$, and $x$ constant for $f_y$.
    </p>
  </div>
</div>

<h2 id="conservative" data-toc="Conservative vector fields">Conservative vector fields</h2>
<div class="formula">
  <p>
    A vector field $\mathbf{F}$ is <strong>conservative</strong> if it's the gradient of some function: $\mathbf{F} = \nabla f$. Then $f$ is called a
    <strong>potential function</strong> for $\mathbf{F}$.
  </p>
</div>
<p><strong>The test in the plane.</strong> If $\mathbf{F} = \langle P, Q \rangle$ is conservative, then $P = f_x$ and $Q = f_y$, so by Clairaut's theorem</p>
$$\frac{\partial P}{\partial y} = f_{xy} = f_{yx} = \frac{\partial Q}{\partial x}.$$
<p>
  The converse holds on regions like the whole plane (open and simply connected): if $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ there, then
  $\mathbf{F}$ is conservative.
</p>
<ul>
  <li>
    <strong>Conservative:</strong> $\mathbf{F} = \langle 2xy + 1,\ x^2 \rangle$. $\frac{\partial P}{\partial y} = 2x = \frac{\partial Q}{\partial x}$, and a potential function is
    $f = x^2y + x$: check that $f_x = 2xy + 1$ and $f_y = x^2$.
  </li>
  <li>
    <strong>Not conservative:</strong> $\mathbf{F} = \langle y, -x \rangle$, the clockwise field above. $\frac{\partial P}{\partial y} = 1$ but $\frac{\partial Q}{\partial x} = -1$.
    You can see it in the picture: a field that circles around can't be pointing "uphill" on any function, since going around a loop would have to
    end higher than it started.
  </li>
</ul>
<p>
  <strong>Why it matters:</strong> for a conservative field, line integrals depend only on the endpoints: $\int_C \nabla f \cdot d\mathbf{r} = f(B) - f(A)$.
  Testing fields in 3D, finding potential functions step by step, and using the theorem are on the
  <a href="?topic=conservative-fields">Conservative Vector Fields</a> page.
</p>

<h3 id="conservative-from-a-picture">Spotting a non-conservative field in a picture</h3>
<p>
  A conservative field has $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ around every closed loop. So imagine walking around a small rectangle in the plot and
  ask whether the pushes cancel. Two patterns give them away:
</p>
<ul>
  <li>
    <strong>Shear:</strong> arrows that point sideways but get longer as you move <em>up</em> (or point up and get longer as you move <em>sideways</em>). The top
    and bottom edges of a rectangle get different amounts of push, so the loop doesn't cancel. That's $\frac{\partial P}{\partial y} \ne 0 = \frac{\partial Q}{\partial x}$.
  </li>
  <li><strong>Swirl:</strong> arrows that turn around a point. Walking around with them, every push is in your favor.</li>
</ul>
<p>
  Arrows that get longer in the direction they point, like $\nabla(x^2) = \langle 2x, 0 \rangle$, are fine: the left and right edges of a rectangle are
  perpendicular to them, and the top and bottom cancel exactly.
</p>
<div class="panel-row">
  <figure>
    <figcaption>Conservative</figcaption>
    ${h(`The field (2x, 0): sideways arrows that get longer to the right.`,e=>[2*e,0])}
  </figure>
  <figure>
    <figcaption>Not conservative (shear)</figcaption>
    ${h(`The field (y squared, 0): sideways arrows that get longer upward.`,(e,t)=>[t*t,0])}
  </figure>
  <figure>
    <figcaption>Not conservative (swirl)</figcaption>
    ${h(`The field (-y, x): arrows turning counterclockwise around the origin.`,(e,t)=>[-t,e])}
  </figure>
</div>

<h2 id="flow-lines" data-toc="Flow lines">Flow lines</h2>
<p>
  If $\mathbf{F}$ is a velocity field (wind, a current), a particle carried along by it follows a <strong>flow line</strong> (also called a streamline or integral curve): a path $\mathbf{r}(t)$ whose velocity
  is always the field at its position.
</p>
<div class="formula">
  $$\mathbf{r}'(t) = \mathbf{F}(\mathbf{r}(t))$$
</div>
<p>
  <strong>Checking a candidate.</strong> For $\mathbf{F} = \langle 1, x \rangle$ and $\mathbf{r}(t) = \langle t, t^2/2 \rangle$: $\mathbf{r}'(t) = \langle 1, t \rangle$, and $\mathbf{F}(\mathbf{r}(t)) = \langle 1, t \rangle$
  since $x = t$. They match, so it's a flow line. On a plot, a flow line runs along the arrows, tangent to each one it passes.
</p>
<p>
  <strong>A short time later.</strong> A particle at $P$ at time $t_0$ moves with velocity $\mathbf{F}(P)$, so after a small $\Delta t$ it is near $P + \Delta t\,\mathbf{F}(P)$. For $\mathbf{V} = \langle 3y, x + y \rangle$
  at $(1, 1)$: $\mathbf{V}(1, 1) = \langle 3, 2 \rangle$, so $0.1$ time units later it's near $(1.3, 1.2)$.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Drawing the arrow at the wrong place.</strong> $\mathbf{F}(1, 2)$ is drawn with its tail at the point $(1, 2)$, not at the origin.</li>
  <li><strong>Mixing up components.</strong> In $\langle P, Q \rangle$, $P$ is the horizontal part and $Q$ the vertical part, even when $P$ depends on $y$.</li>
  <li><strong>Trusting arrow lengths literally.</strong> Plots scale arrows down. Compare lengths with each other, not with the grid.</li>
  <li><strong>Testing the wrong partials.</strong> The test compares $\frac{\partial P}{\partial y}$ with $\frac{\partial Q}{\partial x}$, not $\frac{\partial P}{\partial x}$ with $\frac{\partial Q}{\partial y}$.</li>
  <li><strong>Forgetting that "conservative" means "is a gradient."</strong> Equal partials are the test; a potential function $f$ is the proof.</li>
</ul>
`,y=[{tex:String.raw`\langle t,\ 1 - t \rangle`,at:e=>[e,1-e],velocity:()=>[1,-1],velocityTex:String.raw`\langle 1, -1 \rangle`},{tex:String.raw`\langle e^{-t},\ t \rangle`,at:e=>[Math.exp(-e),e],velocity:e=>[-Math.exp(-e),1],velocityTex:String.raw`\langle -e^{-t}, 1 \rangle`},{tex:String.raw`\langle t,\ e^{t} \rangle`,at:e=>[e,Math.exp(e)],velocity:e=>[1,Math.exp(e)],velocityTex:String.raw`\langle 1, e^{t} \rangle`},{tex:String.raw`\langle e^{t},\ e^{t} \rangle`,at:e=>[Math.exp(e),Math.exp(e)],velocity:e=>[Math.exp(e),Math.exp(e)],velocityTex:String.raw`\langle e^{t}, e^{t} \rangle`},{tex:String.raw`\langle t,\ t^2/2 \rangle`,at:e=>[e,e*e/2],velocity:e=>[1,e],velocityTex:String.raw`\langle 1, t \rangle`},{tex:String.raw`\langle t^2/2,\ t \rangle`,at:e=>[e*e/2,e],velocity:e=>[e,1],velocityTex:String.raw`\langle t, 1 \rangle`},{tex:String.raw`\langle t/2,\ t \rangle`,at:e=>[e/2,e],velocity:()=>[.5,1],velocityTex:String.raw`\langle 1/2, 1 \rangle`},{tex:String.raw`\langle 1/2,\ t \rangle`,at:e=>[.5,e],velocity:()=>[0,1],velocityTex:String.raw`\langle 0, 1 \rangle`},{tex:String.raw`\langle e^{-t},\ e^{-t} \rangle`,at:e=>[Math.exp(-e),Math.exp(-e)],velocity:e=>[-Math.exp(-e),-Math.exp(-e)],velocityTex:String.raw`\langle -e^{-t}, -e^{-t} \rangle`},{tex:String.raw`\langle t,\ t \rangle`,at:e=>[e,e],velocity:()=>[1,1],velocityTex:String.raw`\langle 1, 1 \rangle`},{tex:String.raw`\langle 1 - t,\ 1 - t \rangle`,at:e=>[1-e,1-e],velocity:()=>[-1,-1],velocityTex:String.raw`\langle -1, -1 \rangle`},{tex:String.raw`\langle t,\ e^{-t} \rangle`,at:e=>[e,Math.exp(-e)],velocity:e=>[1,-Math.exp(-e)],velocityTex:String.raw`\langle 1, -e^{-t} \rangle`},{tex:String.raw`\langle e^{t},\ t \rangle`,at:e=>[Math.exp(e),e],velocity:e=>[Math.exp(e),1],velocityTex:String.raw`\langle e^{t}, 1 \rangle`},{tex:String.raw`\langle t,\ \sqrt{t} \rangle`,at:e=>[e,Math.sqrt(e)],velocity:e=>[1,.5/Math.sqrt(e)],velocityTex:String.raw`\langle 1, \tfrac{1}{2\sqrt{t}} \rangle`}],b=[{tex:String.raw`\langle 1, -1 \rangle`,F:()=>[1,-1]},{tex:String.raw`\langle -x, 1 \rangle`,F:e=>[-e,1]},{tex:String.raw`\langle 1, y \rangle`,F:(e,t)=>[1,t]},{tex:String.raw`\langle x, y \rangle`,F:(e,t)=>[e,t]},{tex:String.raw`\langle y, x \rangle`,F:(e,t)=>[t,e]},{tex:String.raw`\langle 1, x \rangle`,F:e=>[1,e]},{tex:String.raw`\langle y, 1 \rangle`,F:(e,t)=>[t,1]},{tex:String.raw`\langle 1/2, 1 \rangle`,F:()=>[.5,1]},{tex:String.raw`\langle -x, -y \rangle`,F:(e,t)=>[-e,-t]},{tex:String.raw`\langle 1, -y \rangle`,F:(e,t)=>[1,-t]},{tex:String.raw`\langle x, 1 \rangle`,F:e=>[e,1]}],x=(e,t)=>Math.abs(e-t)<1e-9*(1+Math.abs(e)+Math.abs(t)),S=(e,t)=>Array.from({length:21},(e,t)=>.05+.95*t/20).every(n=>{let[r,i]=[t.velocity(n),e.F(...t.at(n))];return x(r[0],i[0])&&x(r[1],i[1])}),C=e=>`${Math.round(e*1e3)/1e3+0}`,w=e=>String.raw`\langle ${C(e[0])}, ${C(e[1])} \rangle`,T=(e,t)=>[.5,1,.25].find(n=>{let[r,i]=[t.velocity(n),e.F(...t.at(n))];return!x(r[0],i[0])||!x(r[1],i[1])})??.5;function E(n){let i=e(b,n),a=y.filter(e=>S(i,e)),o=e(a,n),s=r(y.filter(e=>!S(i,e)),n).slice(0,3),c=r([o,...s],n),l=[`A`,`B`,`C`,`D`],u=c.indexOf(o);return{field:i,options:c,right:u,problem:{promptHtml:`The vector field $\\mathbf{F}$ is plotted below. Exactly one of these is a flow line of $\\mathbf{F}$ (also called a streamline or integral curve), parameterized by time for $0 \\le t \\le 1$. Which one?`,givenTex:``,figureHtml:`<div class="vector-given">${h(`The vector field F on the unit square.`,i.F)}</div>${t(`<ul class="integral-options">${c.map((e,t)=>`<li><strong>${l[t]}.</strong> $\\mathbf{r}(t) = ${e.tex}$</li>`).join(``)}</ul>`)}`,choices:l,correctChoice:l[u],wrongChoiceHint:`A flow line's velocity is the field at its position: r′(t) = F(r(t)). Read F off the plot at a few points the curve passes through.`,answerTex:`\\text{${l[u]}: } \\mathbf{r}(t) = ${o.tex}`,steps:[{explanation:`A flow line is a path whose velocity always equals the field where it is: $\\mathbf{r}'(t) = \\mathbf{F}(\\mathbf{r}(t))$. Reading arrows off the plot, $\\mathbf{F} = ${i.tex}$.`,tex:String.raw`\mathbf{r}'(t) = \mathbf{F}(\mathbf{r}(t))`,lessonSection:{id:`flow-lines`,title:`Flow lines`}},...c.map((e,t)=>{if(t===u)return{explanation:`<strong>${l[t]}</strong> works: $\\mathbf{r}'(t) = ${e.velocityTex}$, and plugging $\\mathbf{r}(t)$ into $\\mathbf{F}$ gives the same thing for every $t$.`,tex:String.raw`\mathbf{r}(t) = ${e.tex},\quad \mathbf{r}'(t) = ${e.velocityTex} = \mathbf{F}(\mathbf{r}(t))`};let n=T(i,e);return{explanation:`<strong>${l[t]}</strong> doesn't: at $t = ${n}$ its velocity and the field at its position differ.`,tex:String.raw`\begin{aligned} &\mathbf{r}(t) = ${e.tex} \\ &\mathbf{r}'(${n}) = ${w(e.velocity(n))} \ne ${w(i.F(...e.at(n)))} = \mathbf{F}(\mathbf{r}(${n})) \end{aligned}`}})]}}}function D(t){let[n,r,i,a]=[e([0,1,2,3,-1],t),e([1,2,3,-2],t),e([1,2,-1],t),e([0,1,-1,2],t)],o=(e,t)=>[n*e+r*t,i*e+a*t],c=[e([1,2,-1],t),e([1,2,3,-1],t)],[l,u]=[e([1,2,3,5],t),e([.1,.2,.05],t)],d=o(...c),f=[c[0]+u*d[0],c[1]+u*d[1]].map(e=>Math.round(e*1e9)/1e9),p=String.raw`\langle ${s([{coef:n,body:`x`},{coef:r,body:`y`}])},\ ${s([{coef:i,body:`x`},{coef:a,body:`y`}])} \rangle`,m=e([[`A leaf floats on a stream`,`the leaf`],[`A particle moves`,`the particle`],[`A small boat drifts`,`the boat`]],t);return{F:o,start:c,dt:u,problem:{promptHtml:`${m[0]} according to the velocity field $\\mathbf{V}(x, y) = ${p}$. If ${m[1]} is at $(${c.join(`, `)})$ at time $t = ${l}$, estimate its location at time $t = ${l+u}$.`,givenTex:``,answerTex:`(${f.map(C).join(`, `)})`,vector:f,point:!0,steps:[{explanation:`${m[1][0].toUpperCase()}${m[1].slice(1)} follows a flow line of $\\mathbf{V}$, so its velocity at $(${c.join(`, `)})$ is the field there.`,tex:String.raw`\mathbf{V}(${c.join(`, `)}) = ${w(d)}`,lessonSection:{id:`flow-lines`,title:`Flow lines`}},{explanation:`Over the short time $\\Delta t = ${u}$, it moves about velocity times time (the linear approximation $\\mathbf{r}(t_0 + \\Delta t) \\approx \\mathbf{r}(t_0) + \\Delta t\\,\\mathbf{r}'(t_0)$).`,tex:String.raw`(${c.join(`, `)}) + ${u}\,${w(d)} = (${f.map(C).join(`, `)})`}]}}}var O=[{build:E},{build:E},{build:D}],k=e=>String.raw`\left\langle ${e.join(`, `)} \right\rangle`,A=e=>s(e),j=t=>e([1,-1],t),M=[(e,t)=>[e,-t],(e,t)=>[t,e-t],(e,t)=>[t,t+2],(e,t)=>[t,2*e],(e,t)=>[Math.sin(t),Math.cos(e)],(e,t)=>[Math.cos(e+t),e]],N=(e,t)=>[[.3,.7],[-1.1,.4],[1.5,-.9]].every(([n,r])=>e(n,r).every((e,i)=>Math.abs(e-t(n,r)[i])<1e-9)),P=[t=>{let[n,r]=[e([-2,-1,1,2],t),e([-2,-1,0,1,2],t)];return{family:`constant`,tex:k([`${n}`,`${r}`]),F:()=>[n,r]}},t=>{let n=e([1,2,-1,-2],t);return{family:`radial`,tex:k([A([{coef:n,body:`x`}]),A([{coef:n,body:`y`}])]),F:(e,t)=>[n*e,n*t]}},t=>{let n=e([1,2,-1,-2],t);return{family:`rotation`,tex:k([A([{coef:-n,body:`y`}]),A([{coef:n,body:`x`}])]),F:(e,t)=>[-n*t,n*e]}},t=>{let n=e([1,2,-1],t),r=Math.sign(n)*e([1,2],t);return t()<.5?{family:`saddle`,tex:k([A([{coef:n,body:`x`}]),A([{coef:-Math.abs(r),body:`y`}])]),F:(e,t)=>[n*e,-Math.abs(r)*t]}:{family:`saddle`,tex:k([A([{coef:n,body:`y`}]),A([{coef:r,body:`x`}])]),F:(e,t)=>[n*t,r*e]}},t=>{let n=e([1,2,-1,-2],t);return t()<.5?{family:`shear`,tex:k([A([{coef:n,body:`y`}]),`0`]),F:(e,t)=>[n*t,0]}:{family:`shear`,tex:k([`0`,A([{coef:n,body:`x`}])]),F:e=>[0,n*e]}},t=>{let[n,r]=[e([1,2,-1],t),e([1,-1,2],t)];return t()<.5?{family:`one constant component`,tex:k([`${r}`,A([{coef:n,body:`y`}])]),F:(e,t)=>[r,n*t]}:{family:`one constant component`,tex:k([A([{coef:n,body:`x`}]),`${r}`]),F:e=>[n*e,r]}},t=>{let[n,r]=[e([`sin`,`cos`],t),e([`sin`,`cos`],t)],[i,a]=[e([1,2],t),e([1,2],t)],o=(e,t)=>e===`sin`?Math.sin(t):Math.cos(t);return{family:`trigonometric`,tex:k([`\\${n} ${i===1?`y`:`${i}y`}`,`\\${r} ${a===1?`x`:`${a}x`}`]),F:(e,t)=>[o(n,i*t),o(r,a*e)]}},e=>{let[t,n]=[j(e),j(e)];return{family:`spiral`,tex:k([A([{coef:t,body:`x`},{coef:-n,body:`y`}]),A([{coef:n,body:`x`},{coef:t,body:`y`}])]),F:(e,r)=>[t*e-n*r,n*e+t*r]}}];function F(e,t){return P.map(t=>({family:t,key:e()})).sort((e,t)=>e.key-t.key).map(({family:e})=>e).slice(0,t).map(t=>i(()=>t(e),e=>M.some(t=>N(e.F,t))))}function I([e,t]){if(Math.hypot(e,t)<1e-9)return`zero (no arrow)`;let n=Math.abs(e)<1e-9?``:e>0?`right`:`left`,r=Math.abs(t)<1e-9?``:t>0?`up`:`down`;return n?r?`${r} and to the ${n}`:`straight ${n}`:`straight ${r}`}var L=[`I`,`II`,`III`,`IV`];function R(e,t){return`<div class="panel-grid">`+e.map((e,n)=>`<figure><figcaption>${L[n]}</figcaption>${m({label:`Plot ${L[n]}: ${t(n)}.`,field:(t,n)=>e(t,n)})}</figure>`).join(``)+`</div>`}function z(e){return[[1,0],[0,1],[1,1]].map(([t,n])=>{let r=e(t,n).map(e=>Math.round(e*100)/100+0);return String.raw`$\mathbf{F}(${t}, ${n}) = \langle ${r.join(`, `)} \rangle$ points ${I(r)}`}).join(`; `)}var B={name:`match a field with its plot`,build(t){let n=F(t,4),r=e(n,t),i=L[n.indexOf(r)];return{problem:{promptHtml:String.raw`Which plot, I to IV, shows the vector field $\mathbf{F}(x, y) = ${r.tex}$?`,givenTex:``,figureHtml:R(n.map(e=>e.F),e=>`a ${n[e].family} field`),answerTex:String.raw`\text{Plot ${i}}`,choices:L.map(e=>`Plot ${e}`),correctChoice:`Plot ${i}`,steps:[{explanation:`Evaluate F at a few easy points and compare the arrows there with each plot. The plots' axes cross at the origin.`,tex:String.raw`\mathbf{F}(x, y) = ${r.tex}`,lessonSection:{id:`reading-plots`,title:`Reading a vector field plot`}},{explanation:`${z(r.F)}. Only plot ${i} has arrows like that.`,tex:String.raw`\text{Plot ${i}}`}]},shown:n,target:r}}},V=[(e,t)=>e*e+t*t,(e,t)=>e*(e+t),(e,t)=>(e+t)**2,(e,t)=>Math.sin(Math.sqrt(e*e+t*t))],H=[t=>{let n=e([2,3,-1,-2],t);return{family:`bowl`,tex:`${n===-1?`-`:n}(x^2 + y^2)`,gradientTex:k([`${2*n}x`,`${2*n}y`]),gradient:(e,t)=>[2*n*e,2*n*t],f:(e,t)=>n*(e*e+t*t)}},t=>{let n=e([1,2,-1],t);return{family:`product`,tex:`${n===1?``:n===-1?`-`:n}xy`,gradientTex:k([A([{coef:n,body:`y`}]),A([{coef:n,body:`x`}])]),gradient:(e,t)=>[n*t,n*e],f:(e,t)=>n*e*t}},t=>{let[n,r]=[e([1,2],t),e([1,2],t)];return{family:`saddle`,tex:`${n===1?``:n}x^2 - ${r===1?``:r}y^2`,gradientTex:k([`${2*n}x`,`${-2*r}y`]),gradient:(e,t)=>[2*n*e,-2*r*t],f:(e,t)=>n*e*e-r*t*t}},t=>{let n=e([2,-1,3,-2],t),r=A([{coef:1,body:`x`},{coef:n,body:`y`}]);return{family:`square of a line`,tex:`(${r})^2`,gradientTex:k([`2(${r})`,`${2*n}(${r})`]),gradient:(e,t)=>[2*(e+n*t),2*n*(e+n*t)],f:(e,t)=>(e+n*t)**2}},t=>{let[n,r]=[e([1,2,-1,-2],t),e([1,2,-1,3],t)];return{family:`plane`,tex:A([{coef:n,body:`x`},{coef:r,body:`y`}]),gradientTex:k([`${n}`,`${r}`]),gradient:()=>[n,r],f:(e,t)=>n*e+r*t}},t=>{let n=e([2,-1,3],t);return{family:`x times a line`,tex:`x(${A([{coef:1,body:`x`},{coef:n,body:`y`}])})`,gradientTex:k([A([{coef:2,body:`x`},{coef:n,body:`y`}]),A([{coef:n,body:`x`}])]),gradient:(e,t)=>[2*e+n*t,n*e],f:(e,t)=>e*(e+n*t)}},t=>{let n=e([1,2],t),r=`e^{-${n===1?``:n}(x^2 + y^2)}`;return{family:`bump`,tex:r,gradientTex:k([`${-2*n}x${r}`,`${-2*n}y${r}`]),gradient:(e,t)=>[-2*n*e*Math.exp(-n*(e*e+t*t)),-2*n*t*Math.exp(-n*(e*e+t*t))],f:(e,t)=>Math.exp(-n*(e*e+t*t))}},t=>{let n=e([1,2],t),r=t()<.5,i=n===1?`x`:`${n}x`;return{family:`wave`,tex:r?String.raw`\sin ${i}`:String.raw`\cos ${i}`,gradientTex:k([r?String.raw`${n===1?``:n}\cos ${i}`:String.raw`-${n===1?``:n}\sin ${i}`,`0`]),gradient:e=>[r?n*Math.cos(n*e):-n*Math.sin(n*e),0],f:e=>r?Math.sin(n*e):Math.cos(n*e)}}],U={name:`match a function with its gradient field`,build(t){let n=H.map(e=>({family:e,key:t()})).sort((e,t)=>e.key-t.key).map(({family:e})=>e).slice(0,4).map(e=>i(()=>e(t),e=>V.some(t=>[[.3,.7],[-1.1,.4]].every(([n,r])=>Math.abs(e.f(n,r)-t(n,r))<1e-9)))),r=e(n,t),a=L[n.indexOf(r)];return{problem:{promptHtml:String.raw`Which plot, I to IV, is the gradient vector field of $f(x, y) = ${r.tex}$?`,givenTex:``,figureHtml:R(n.map(e=>e.gradient),e=>`the gradient of a ${n[e].family} function`),answerTex:String.raw`\text{Plot ${a}}`,choices:L.map(e=>`Plot ${e}`),correctChoice:`Plot ${a}`,steps:[{explanation:`Find the gradient: the vector of partial derivatives.`,tex:String.raw`\nabla f(x, y) = ${r.gradientTex}`,lessonSection:{id:`gradient-fields`,title:`Gradient fields`}},{explanation:`Then check a few points: ${z(r.gradient).replace(/\\mathbf\{F\}/g,String.raw`\nabla f`)}. Only plot ${a} matches. (The gradient also points toward higher values of f, perpendicular to its level curves.)`,tex:String.raw`\text{Plot ${a}}`}]},shown:n,target:r}}};function W(t,n){let r=[[2,0,0],[0,2,0],[1,1,0],[2,1,0],[1,2,0],[3,0,0],[0,3,0],[1,0,0],[0,1,0],[3,1,0]],a=[[1,1,1],[2,0,1],[0,1,2],[1,0,1],[2,1,0],[0,0,2],[1,2,0],[0,2,1],[1,0,0]],s=[()=>o(e([1,2,-1],t)),()=>c(e([1,2,3],t)),()=>l(e([1,2,-2],t)),()=>f(e([1,2,-1],t)),()=>d(e([1,3,-1],t))];return i(()=>{let i=e([2,3],t),o=[];for(let c=0;c<i;c++){let i=n===2&&t()<.3;o.push(i?e(s,t)():p(e([-3,-2,-1,1,2,3,4],t),e(n===2?r:a,t)))}return o},e=>new Set(e.map(e=>e.f.body)).size<e.length||u.slice(0,n).some(t=>e.every(e=>!e.dependsOn.includes(t))))}var G={name:`find the gradient field`,build(t){let n=e([2,2,3],t),r=W(t,n),i=u.slice(0,n),o=s(r.map(e=>e.f)),c=i.map(e=>s(r.map(t=>t.partial[e]??null))),l=r.some(e=>!e.plain.match(/^-?\d+(\*[xyz](\^\d+)?)*$/)),d=`f(${i.join(`, `)})`;return{problem:{promptHtml:String.raw`Find the gradient vector field of $${d} = ${o}$.`,givenTex:``,answerTex:String.raw`\nabla f = ${k(c)}`,field:{variables:[...i],at:e=>i.map(t=>r.reduce((n,r)=>n+r.partialValue(t,e),0))},steps:[{explanation:String.raw`The gradient field is $\nabla f = \langle ${i.map(e=>`f_${e}`).join(`, `)} \rangle$. Find each partial derivative, holding the other variables constant.`,tex:i.map((e,t)=>`f_${e} = ${c[t]}`).join(String.raw`, \qquad `),technique:l?a:void 0},{explanation:`Put them together.`,tex:String.raw`\nabla f(${i.join(`, `)}) = ${k(c)}`}]},terms:r,dimension:n}}},K=e=>s(e.map(([e,t])=>p(e,t).f));function q(e,t){let n=new Map;for(let[r,i]of e){if(i[t]===0)continue;let e=[...i];--e[t];let a=e.join(),o=n.get(a);n.set(a,[(o?o[0]:0)+r*i[t],e])}return[...n.values()].filter(([e])=>e!==0)}var J=(e,t)=>K(e)===K(t);function Y(e){let t=new Map;for(let[n,r]of e){let e=t.get(r.join());t.set(r.join(),[(e?e[0]:0)+n,r])}return[...t.values()].filter(([e])=>e!==0)}var X={name:`is the field conservative`,build(t){let n=[[2,0,0],[0,2,0],[1,1,0],[2,1,0],[1,2,0],[3,0,0],[0,3,0],[1,0,0],[0,1,0],[2,2,0],[3,1,0]],r=i(()=>Array.from({length:e([2,3],t)},()=>[e([-3,-2,-1,1,2,3],t),e(n,t)]),e=>new Set(e.map(([,e])=>e.join())).size<e.length||!e.some(([,e])=>e[0]>0&&e[1]>0)),a=q(r,0),o=q(r,1);if(!(t()<.5)){let n=[e([1,2,-1,3],t),e([[1,0,0],[1,1,0],[2,0,0],[1,2,0]],t)];o=Y([...o,n])}let s=q(a,1),c=q(o,0),l=J(s,c),u=l?`Conservative`:`Not conservative`,d=[{explanation:String.raw`On the whole plane (open and simply connected), $\mathbf{F} = \langle P, Q \rangle$ is conservative exactly when $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$. Compute both.`,tex:String.raw`\frac{\partial P}{\partial y} = ${K(s)}, \qquad \frac{\partial Q}{\partial x} = ${K(c)}`,lessonSection:{id:`conservative`,title:`Conservative vector fields`}},l?{explanation:String.raw`They're equal, so $\mathbf{F}$ is conservative. One potential function (check that $f_x = P$ and $f_y = Q$):`,tex:String.raw`f(x, y) = ${K(r)}`}:{explanation:`They're different, so F is not a gradient field: no potential function exists.`,tex:String.raw`\frac{\partial P}{\partial y} \ne \frac{\partial Q}{\partial x}`}];return{problem:{promptHtml:String.raw`Is the vector field $\mathbf{F}(x, y) = ${k([K(a),K(o)])}$ conservative (a gradient field)?`,givenTex:``,answerTex:String.raw`\text{${u}}`,choices:[`Conservative`,`Not conservative`],correctChoice:u,steps:d},P:a,Q:o,conservative:l}}},Z=[{id:`match-field`,label:`Match F to its plot`,generate:e=>B.build(e).problem},{id:`match-gradient`,label:`Match f to its gradient field`,generate:e=>U.build(e).problem},{id:`find-gradient`,label:`Find the gradient field`,generate:e=>G.build(e).problem},{id:`conservative`,label:`Is F conservative?`,generate:e=>X.build(e).problem},{id:`pick-plot`,label:`Pick the plot of F (unit square)`,generate:e=>_.build(e).problem},{id:`not-conservative-plot`,label:`Which plot is not conservative?`,generate:e=>g.build(e).problem},{id:`flow-lines`,label:`Flow lines`,generate:t=>e(O,t).build(t).problem}];function Q(t){return e(Z,t).generate(t)}var $={...n(`vector-fields`),lessonHtml:v,techniques:[a],generateProblem:Q,problemTypes:Z};export{$ as vectorFieldsTopic};