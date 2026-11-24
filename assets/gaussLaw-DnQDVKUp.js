import{d as e,f as t,h as n,p as r}from"./index-ZzztMt-8.js";import{t as i}from"./techniques-2ghdpz7U.js";import{d as a,f as o,s,u as c}from"./polynomial-DkCx2WfM.js";import{c as l}from"./terms-BZIL_b18.js";import{a as u,c as d,r as f}from"./exact-CWz9QflX.js";import{t as p}from"./common-C_c-e9Fi.js";import{i as m}from"./common-CX_ys3GA.js";import{a as h,c as g,l as _,o as v,s as y}from"./surfacesSH-BoIlFLiz.js";var b=String.raw`
<h2 id="gauss-law" data-toc="Gauss's Law">Gauss's Law</h2>
<p>
  An electric field $\mathbf{E}$ is a vector field, and its flux out of a closed surface $S$, $\iint_S \mathbf{E} \cdot d\mathbf{S}$, is called the <strong>electric flux</strong>.
  Gauss's Law says the flux measures the charge inside:
</p>
<div class="formula">
  $$Q = \varepsilon_0 \iint_S \mathbf{E} \cdot d\mathbf{S}$$
</div>
<p>
  Here $Q$ is the net charge enclosed by $S$, and $\varepsilon_0 \approx 8.85 \times 10^{-12}$ is a constant called the permittivity of free space. Problems keep it as the symbol $\varepsilon_0$, so answers look like
  $36\,\varepsilon_0$ or $\frac{8}{3}\pi a^3\,\varepsilon_0$. On this site, type it as <code>epsilon</code>.
</p>

<h2 id="charge-in-a-solid" data-toc="Charge inside a solid">Charge inside a solid</h2>
<p>
  When $S$ is the boundary of a solid $D$ and $\mathbf{E}$ is smooth on all of $D$, the <a href="?topic=flux-divergence-3d#divergence-theorem">Divergence Theorem</a> turns the flux into a triple integral:
</p>
<div class="formula">
  $$Q = \varepsilon_0 \iint_S \mathbf{E} \cdot d\mathbf{S} = \varepsilon_0 \iiint_D \operatorname{div}\mathbf{E}\,dV$$
</div>
<p>
  The fields in these problems have a constant divergence, so the triple integral is just that constant times the volume of $D$. For example, with
  $\mathbf{E} = \langle 3x + z^2,\ 2y,\ -z \rangle$, $\operatorname{div}\mathbf{E} = 3 + 2 - 1 = 4$ (the $z^2$ doesn't involve $x$, so its $x$-derivative is $0$). In the solid ball of radius $a$:
</p>
<div class="formula">
  $$Q = \varepsilon_0 \cdot 4 \cdot \frac{4}{3}\pi a^3 = \frac{16}{3}\pi a^3\,\varepsilon_0$$
</div>
<p>The volumes that come up:</p>
<ul>
  <li><strong>Cube</strong> with vertices $(\pm s, \pm s, \pm s)$: side $2s$, so $V = (2s)^3 = 8s^3$. (A common slip is using $s^3$.)</li>
  <li><strong>Solid ball</strong> $x^2 + y^2 + z^2 \le a^2$: $V = \frac{4}{3}\pi a^3$.</li>
  <li><strong>Solid hemisphere</strong>, the same with $z \ge 0$: half of that, $V = \frac{2}{3}\pi a^3$.</li>
  <li><strong>Solid cylinder</strong> $x^2 + y^2 \le a^2$, $0 \le z \le h$: $V = \pi a^2 h$.</li>
</ul>
<!-- tools -->

<h2 id="symmetry" data-toc="Terms that cancel by symmetry">Terms that cancel by symmetry</h2>
<p>
  If $\mathbf{E}$ has a term like $2x^2$ in its first component, the divergence picks up $4x$, which isn't constant. You don't need to integrate it: when the solid is symmetric across
  the plane $x = 0$, every point $(x, y, z)$ has a mirror point $(-x, y, z)$, and $4x$ has opposite signs at the two. So
</p>
<div class="formula">
  $$\iiint_D x\,dV = 0 \quad \text{whenever } D \text{ is symmetric across } x = 0$$
</div>
<p>
  The cube and ball are symmetric across all three coordinate planes. The hemisphere $z \ge 0$ and the cylinder $0 \le z \le h$ are symmetric across $x = 0$ and $y = 0$ but not $z = 0$,
  so a $z$ term would not cancel there.
</p>

<h2 id="inverse-square" data-toc="Inverse-square fields">Inverse-square fields</h2>
<p>A point charge $Q$ at the origin makes the electric field (Coulomb's Law)</p>
<div class="formula">
  $$\mathbf{E}(\mathbf{r}) = \frac{\varepsilon Q}{|\mathbf{r}|^3}\,\mathbf{r}, \qquad \mathbf{r} = \langle x, y, z \rangle$$
</div>
<p>
  where $\varepsilon$ is a constant. It points straight away from the charge, and its strength $|\mathbf{E}| = \varepsilon Q/|\mathbf{r}|^2$ falls off like one over the distance squared, so fields
  $c\,\mathbf{r}/|\mathbf{r}|^3$ are called <strong>inverse-square fields</strong>. Gravity is another one.
</p>
<p>
  <strong>Flux out of a sphere of radius $R$ centered at the origin.</strong> On the sphere $|\mathbf{r}| = R$ and the outward unit normal is $\mathbf{n} = \mathbf{r}/R$, so
</p>
<div class="formula">
  $$\mathbf{F} \cdot \mathbf{n} = \frac{c}{R^3}\,\mathbf{r} \cdot \frac{\mathbf{r}}{R} = \frac{c R^2}{R^4} = \frac{c}{R^2}, \qquad \iint_S \mathbf{F} \cdot d\mathbf{S} = \frac{c}{R^2} \cdot 4\pi R^2 = 4\pi c$$
</div>
<p>
  The radius cancels: the flux is the same through every sphere around the origin. A bigger sphere has more area, but the field on it is weaker by exactly the same factor. For the electric field,
  $c = \varepsilon Q$, and with $\varepsilon = \frac{1}{4\pi\varepsilon_0}$ Gauss's Law gives back $\varepsilon_0 \cdot 4\pi\varepsilon Q = Q$, the charge inside.
</p>

<h2 id="divergence-of-r-over-r-p" data-toc="The divergence of r / |r|^p">The divergence of $\mathbf{r}/|\mathbf{r}|^p$</h2>
<p>
  Write $|\mathbf{r}| = \sqrt{x^2 + y^2 + z^2}$. By the chain rule, $\frac{\partial |\mathbf{r}|}{\partial x} = \frac{x}{|\mathbf{r}|}$, and then the product rule gives
</p>
<div class="formula">
  $$\frac{\partial}{\partial x}\left(x|\mathbf{r}|^{-p}\right) = |\mathbf{r}|^{-p} + x \cdot (-p)|\mathbf{r}|^{-p-1} \cdot \frac{x}{|\mathbf{r}|} = |\mathbf{r}|^{-p} - p x^2 |\mathbf{r}|^{-p-2}$$
</div>
<p>Adding the $x$, $y$, and $z$ versions and using $x^2 + y^2 + z^2 = |\mathbf{r}|^2$:</p>
<div class="formula">
  $$\operatorname{div}\left(\frac{\mathbf{r}}{|\mathbf{r}|^p}\right) = 3|\mathbf{r}|^{-p} - p|\mathbf{r}|^2|\mathbf{r}|^{-p-2} = \frac{3 - p}{|\mathbf{r}|^p}$$
</div>
<p>
  For example, $\operatorname{div}\left(\frac{\mathbf{r}}{|\mathbf{r}|}\right) = \frac{2}{|\mathbf{r}|}$ and $\operatorname{div}\left(\frac{\mathbf{r}}{|\mathbf{r}|^4}\right) = -\frac{1}{|\mathbf{r}|^4}$.
  The special case is $p = 3$: an inverse-square field has <strong>divergence $0$</strong> everywhere except the origin, where it isn't defined.
</p>

<h2 id="around-the-charge" data-toc="Any closed surface around the charge">Any closed surface around the charge</h2>
<p>
  Since $\operatorname{div}\mathbf{F} = 0$, you might expect every flux of $\mathbf{F} = c\,\mathbf{r}/|\mathbf{r}|^3$ to be $0$. That's only half right, because the Divergence Theorem needs
  $\mathbf{F}$ to be smooth on the whole solid.
</p>
<ul>
  <li>
    <strong>The origin is outside $S$.</strong> Then $\mathbf{F}$ is smooth inside, and $\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_W 0\,dV = 0$.
  </li>
  <li>
    <strong>The origin is inside $S$</strong> (a cube, a box, an ellipsoid, an off-center sphere around it). Cut out a small sphere $S_a$ of radius $a$ around the origin. On the region $W$
    between $S$ and $S_a$, $\mathbf{F}$ is smooth and $\operatorname{div}\mathbf{F} = 0$. The boundary of $W$ is $S$ facing out plus $S_a$ facing in, so
  </li>
</ul>
<div class="formula">
  $$\iint_S \mathbf{F} \cdot d\mathbf{S} - \iint_{S_a} \mathbf{F} \cdot d\mathbf{S} = \iiint_W \operatorname{div}\mathbf{F}\,dV = 0 \quad\Rightarrow\quad \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_{S_a} \mathbf{F} \cdot d\mathbf{S} = 4\pi c$$
</div>
<p>
  This is the same move as on the <a href="?topic=conservative-3d#simply-connected">conservative fields</a> page, one dimension up: there a small circle around the $z$-axis, here a small sphere
  around the origin. It's why Gauss's Law works for any surface, not just spheres: only the charge inside counts.
</p>

<h2 id="maxwells-equations" data-toc="Maxwell's equations">Maxwell's equations</h2>
<p>
  Gauss's Law is the first of four equations that describe every electric field $\mathbf{E}$ and magnetic field $\mathbf{B}$. Each one is a statement about a flux or a line integral,
  and the <a href="?topic=flux-divergence-3d#divergence-theorem">Divergence Theorem</a> or <a href="?topic=stokes#stokes-theorem">Stokes' Theorem</a> turns it into a statement about
  $\operatorname{div}$ or $\operatorname{curl}$ at each point. The move is the same every time:
</p>
<ol>
  <li>Write the law as an integral over any solid $D$ or any surface $S$.</li>
  <li>Use the theorem to make both sides integrals over the same region.</li>
  <li>The two integrals agree for <em>every</em> region, however small, so the functions inside them must be equal at every point.</li>
</ol>

<h3>1. Gauss's Law for E: Divergence Theorem</h3>
<p>
  Spread the charge out with a density $\rho(x, y, z)$, so the charge in $D$ is $Q = \iiint_D \rho\,dV$. Gauss's Law says $\varepsilon_0 \iint_S \mathbf{E} \cdot d\mathbf{S} = Q$, and the Divergence Theorem turns
  the flux into $\iiint_D \operatorname{div}\mathbf{E}\,dV$:
</p>
<div class="formula">
  $$\iiint_D \operatorname{div}\mathbf{E}\,dV = \iiint_D \frac{\rho}{\varepsilon_0}\,dV \text{ for every } D \quad\Rightarrow\quad \operatorname{div}\mathbf{E} = \frac{\rho}{\varepsilon_0}$$
</div>
<p>
  This is the practice problems read backwards: there you knew $\operatorname{div}\mathbf{E}$ and integrated it to get $Q$. Where there's no charge, $\operatorname{div}\mathbf{E} = 0$, which is why the
  inverse-square field has divergence $0$ everywhere but the origin.
</p>

<h3>2. Gauss's Law for B: Divergence Theorem</h3>
<p>
  There are no magnetic charges: a magnet always has a north and a south pole together. So the flux of $\mathbf{B}$ out of every closed surface is $0$, and by the same three steps
</p>
<div class="formula">
  $$\begin{aligned} &\iint_S \mathbf{B} \cdot d\mathbf{S} = 0 \text{ for every closed } S \\ \Rightarrow\quad &\iiint_D \operatorname{div}\mathbf{B}\,dV = 0 \text{ for every } D \\ \Rightarrow\quad &\operatorname{div}\mathbf{B} = 0 \end{aligned}$$
</div>
<p>
  A field with divergence $0$ everywhere is the <a href="?topic=conservative-3d#is-it-a-curl">curl of another field</a>, so $\mathbf{B} = \operatorname{curl}\mathbf{A}$ for some $\mathbf{A}$.
</p>

<h3>3. Faraday's Law: Stokes' Theorem</h3>
<p>
  A changing magnetic field pushes charge around a loop. The push, $\oint_C \mathbf{E} \cdot d\mathbf{r}$, equals minus the rate of change of the flux of $\mathbf{B}$ through a surface $S$ that $C$ bounds.
  Stokes' Theorem turns the line integral into $\iint_S \operatorname{curl}\mathbf{E} \cdot d\mathbf{S}$:
</p>
<div class="formula">
  $$\begin{aligned} &\oint_C \mathbf{E} \cdot d\mathbf{r} = -\frac{d}{dt}\iint_S \mathbf{B} \cdot d\mathbf{S} \\ \Rightarrow\quad &\iint_S \operatorname{curl}\mathbf{E} \cdot d\mathbf{S} = \iint_S \left(-\frac{\partial \mathbf{B}}{\partial t}\right) \cdot d\mathbf{S} \text{ for every } S \\ \Rightarrow\quad &\operatorname{curl}\mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \end{aligned}$$
</div>
<p>
  When nothing changes in time, $\operatorname{curl}\mathbf{E} = \mathbf{0}$, so by the <a href="?topic=conservative-3d#curl-test">curl test</a> a still electric field is conservative: $\mathbf{E} = -\nabla V$ for a potential $V$.
  Coulomb's field is the gradient of $\varepsilon Q/|\mathbf{r}|$ with a minus sign.
</p>

<h3>4. Ampère's Law, with Maxwell's correction: Stokes' Theorem</h3>
<p>
  An electric current, with density $\mathbf{J}$, makes $\mathbf{B}$ circle around it, and so does a changing $\mathbf{E}$. The line integral of $\mathbf{B}$ around $C$ measures the current through $S$ plus
  the rate of change of the flux of $\mathbf{E}$, each times a constant ($\mu_0$ is the permeability of free space). Stokes' Theorem again:
</p>
<div class="formula">
  $$\begin{aligned} &\oint_C \mathbf{B} \cdot d\mathbf{r} = \mu_0 \iint_S \mathbf{J} \cdot d\mathbf{S} + \mu_0 \varepsilon_0 \frac{d}{dt}\iint_S \mathbf{E} \cdot d\mathbf{S} \\ \Rightarrow\quad &\operatorname{curl}\mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \end{aligned}$$
</div>

<h3>All four together</h3>
<div class="formula">
  $$\begin{aligned}
    \operatorname{div}\mathbf{E} &= \frac{\rho}{\varepsilon_0} & &\text{(Divergence Theorem)} \\
    \operatorname{div}\mathbf{B} &= 0 & &\text{(Divergence Theorem)} \\
    \operatorname{curl}\mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} & &\text{(Stokes' Theorem)} \\
    \operatorname{curl}\mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} & &\text{(Stokes' Theorem)}
  \end{aligned}$$
</div>
<p>
  A pattern to remember: laws about a <strong>closed surface</strong> (flux out of a solid) become <strong>divergence</strong> equations, and laws about a <strong>loop</strong> (a line integral
  around a curve) become <strong>curl</strong> equations.
</p>

<h2 id="signs-from-a-picture" data-toc="Signs and values from a picture">Signs and values from a picture</h2>
<p>
  Six of the eight practice finals show two surfaces and ask for signs and values without computing any surface integral. $S$ is a bowl below the $xy$-plane whose edge is the unit
  circle, oriented by $\mathbf{n}$ pointing out of the bowl. $H$ is a closed surface in the first octant, oriented by the outward $\mathbf{m}$. Each part falls to one of four moves:
</p>
<ul>
  <li>
    <strong>$\iint g\,dS$ has no normal.</strong> $dS$ is area, so the integral has the sign of $g$ on the surface. On $H$, $x$, $y$, $z$ are all positive; on $S$, $z \lt 0$.
  </li>
  <li>
    <strong>A closed surface: the Divergence Theorem.</strong> $\iint_H \mathbf{F} \cdot \mathbf{m}\,dS = \iiint \operatorname{div}\mathbf{F}\,dV$, so its sign is the sign of
    $\operatorname{div}\mathbf{F}$ inside $H$. The flux of a curl through a closed surface is always $0$, since $\operatorname{div}(\operatorname{curl}\mathbf{F}) = 0$ (or: $H$ has no
    boundary for Stokes' Theorem to integrate around).
  </li>
  <li>
    <strong>The bowl: cap it with the unit disk $D$.</strong> $S$ and $D$ enclose a solid, with outward normals $\mathbf{n}$ and $\mathbf{k}$, so
  </li>
</ul>
<div class="formula">
  $$\iint_S \mathbf{F} \cdot \mathbf{n}\,dS = \iiint \operatorname{div}\mathbf{F}\,dV - \iint_D \mathbf{F} \cdot \mathbf{k}\,dA$$
</div>
<p>
  When $\operatorname{div}\mathbf{F} = 0$, only the disk is left; for a curl that's always true, and $\iint_S (\operatorname{curl}\mathbf{F}) \cdot \mathbf{n}\,dS =
  -\iint_D (Q_x - P_y)\,dA$. On $D$, $z = 0$, terms odd in $x$ or $y$ cancel, and a constant $c$ gives $c\pi$. For example, $\mathbf{F} = \langle y + z, -x, yz \rangle$ has
  $Q_x - P_y = -2$, so the flux of its curl through $S$ is $2\pi$.
</p>
<ul>
  <li>
    <strong>A point charge at the origin.</strong> $H$ doesn't surround it, so $\iint_H \mathbf{E} \cdot \mathbf{m}\,dS = 0$. On $S$, $\mathbf{E}$ points away from a positive charge,
    the same way as $\mathbf{n}$, so the flux has the sign of $Q$.
  </li>
</ul>

<h2 id="common-mistakes" data-toc="Common mistakes">Common mistakes</h2>
<ul>
  <li><strong>Leaving off $\varepsilon_0$.</strong> The flux is $Q/\varepsilon_0$; the charge is $\varepsilon_0$ times the flux.</li>
  <li><strong>Using $s^3$ for the cube with vertices $(\pm s, \pm s, \pm s)$.</strong> Its side is $2s$.</li>
  <li><strong>Forgetting the hemisphere is half a ball:</strong> $\frac{2}{3}\pi a^3$, not $\frac{4}{3}\pi a^3$.</li>
  <li><strong>Using the Divergence Theorem with the origin inside.</strong> For $c\,\mathbf{r}/|\mathbf{r}|^3$ it gives $0$, but the answer is $4\pi c$: the field isn't defined at the origin.</li>
  <li><strong>Integrating an odd term the long way.</strong> Over a symmetric solid, $x$, $y$, or $z$ alone integrates to $0$.</li>
</ul>
`,x=[`x`,`y`,`z`];function S(t){let n=e([`cube`,`ball`,`hemisphere`,`cylinder`],t);if(n===`cube`){let n=e([1,2,3,4],t);return{text:String.raw`the cube with vertices $(\pm ${n}, \pm ${n}, \pm ${n})$`,volume:{coef:c(8*n**3),pi:!1,aPower:0},volumeTex:String.raw`(2 \cdot ${n})^3 = ${8*n**3}`,symmetricAxes:[0,1,2],usesA:!1,surface:()=>v([-n,-n,-n],[n,n,n])}}if(n===`ball`)return{text:String.raw`the solid ball $x^2 + y^2 + z^2 \le a^2$`,volume:{coef:c(4,3),pi:!0,aPower:3},volumeTex:String.raw`\frac{4}{3}\pi a^3`,symmetricAxes:[0,1,2],usesA:!0,surface:e=>[g([0,0,0],[e,e,e])]};if(n===`hemisphere`)return{text:String.raw`the solid hemisphere $x^2 + y^2 + z^2 \le a^2$, $z \ge 0$`,volume:{coef:c(2,3),pi:!0,aPower:3},volumeTex:String.raw`\frac{1}{2} \cdot \frac{4}{3}\pi a^3 = \frac{2}{3}\pi a^3`,symmetricAxes:[0,1],usesA:!0,surface:e=>[{...g([0,0,0],[e,e,e]),uRange:[0,Math.PI/2]},{r:(e,t)=>[e*Math.cos(t),e*Math.sin(t),0],uRange:[0,e],vRange:[0,2*Math.PI],sign:-1}]};let r=e([1,2,3,4],t);return{text:String.raw`the solid cylinder $x^2 + y^2 \le a^2$, $0 \le z \le ${r}$`,volume:{coef:c(r),pi:!0,aPower:2},volumeTex:String.raw`\pi a^2 \cdot ${r}${r===1?``:String.raw` = ${r}\pi a^2`}`,symmetricAxes:[0,1],usesA:!0,surface:e=>[{r:(t,n)=>[e*Math.cos(t),e*Math.sin(t),n],uRange:[0,2*Math.PI],vRange:[0,r]},{r:(e,t)=>[e*Math.cos(t),e*Math.sin(t),r],uRange:[0,e],vRange:[0,2*Math.PI]},{r:(e,t)=>[e*Math.cos(t),e*Math.sin(t),0],uRange:[0,e],vRange:[0,2*Math.PI],sign:-1}]}}function C(e,t,n){let r=`${t?String.raw`\pi`:``}${n===0?``:` a^${n}`}`.trim(),i=a(e);return r===``?i:`${i===`1`?``:i===`-1`?`-`:i}${r}`}var w=(e,t,n)=>String.raw`${C(e,t,n)}\,\varepsilon_0`;function T(t){let n=S(t),{components:i,notes:a,oddAxes:u,D:d}=r(()=>{let r=[0,1,2].map(()=>e([1,2,3,4,5,-1,-2,-3],t)),i=r.map((e,t)=>[{term:{coef:e,body:x[t]},derivative:{coef:e,body:``},at:n=>e*n[t]}]),a=[],o=[];if(t()<.45){let r=e(n.symmetricAxes,t),a=e([1,2,3,-1],t);i[r].push({term:{coef:a,body:`${x[r]}^2`},derivative:{coef:2*a,body:x[r]},at:e=>a*e[r]**2}),o.push(r)}for(let n of[0,1,2])if(t()<.3){let r=e([1,2,3,-1],t),o=e(m(n),t);i[n].push({term:{coef:r,body:o.tex},derivative:null,at:e=>r*o.at(e)}),a.push(`$${o.tex}$ doesn't involve $${x[n]}$, so its $${x[n]}$-derivative is $0$`)}return{own:r,components:i,notes:a,oddAxes:o,D:r.reduce((e,t)=>e+t,0)}},({components:e,D:t})=>{let n=e.map(e=>l(e.map(e=>e.term))).join(`, `);return t===0||n===`x, y, 5z`||n===`x, y, z`}),f=i.map(e=>l(e.map(e=>e.term))),p=u.map(e=>i[e][1].derivative),h=l([...p,{coef:d,body:``}]),g=s(c(d),n.volume.coef),v=w(g,n.volume.pi,n.volume.aPower),y=C(g,n.volume.pi,n.volume.aPower),b=C(n.volume.coef,n.volume.pi,n.volume.aPower),T=d<0?`(${d})`:`${d}`,E=i.map((e,t)=>String.raw`\frac{\partial}{\partial ${x[t]}}\left(${f[t]}\right) &= ${l(e.map(e=>e.derivative))}`),D=[{explanation:`Gauss's Law says the charge enclosed by a closed surface $S$ is $\\varepsilon_0$ times the flux of $\\mathbf{E}$ out through $S$. Here $S$ is the boundary of the solid $D$, so the Divergence Theorem turns the flux into a triple integral of $\\operatorname{div}\\mathbf{E}$.`,tex:String.raw`Q = \varepsilon_0 \iint_S \mathbf{E} \cdot d\mathbf{S} = \varepsilon_0 \iiint_D \operatorname{div}\mathbf{E}\,dV`,lessonSection:_.solid},{explanation:`Find $\\operatorname{div}\\mathbf{E} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$: differentiate each component with respect to its own variable.`+(a.length===0?``:` Note that ${a.join(`, and `)}.`),tex:String.raw`\begin{aligned} ${E.join(String.raw` \\ `)} \\ \operatorname{div}\mathbf{E} &= ${h} \end{aligned}`}];if(u.length>0){let e=x[u[0]],t=l(p);D.push({explanation:`The solid is symmetric across the plane $${e} = 0$: for every point with a positive $${e}$ there's a mirror point with $-${e}$. So $${t}$, which changes sign there, integrates to $0$, and only the constant $${d}$ is left.`,tex:String.raw`\iiint_D \left(${h}\right) dV = \underbrace{\iiint_D ${t}\,dV}_{0} + \iiint_D ${T}\,dV`,lessonSection:_.symmetry})}D.push({explanation:`A constant integrates to that constant times the volume of $D$, and $V(D) = ${n.volumeTex}$.`,tex:String.raw`\iiint_D ${T}\,dV = ${d} \cdot V(D) = ${d} \cdot ${n.usesA?String.raw`\left(${b}\right)`:b} = ${y}`},{explanation:`Multiply by $\\varepsilon_0$.`,tex:String.raw`Q = ${v}`});let O=n.usesA?[`a`,`epsilon`]:[`epsilon`],k=o(g);return{problem:{promptHtml:`Use Gauss's Law to find the charge contained in ${n.text}, if the electric field is given below. Write the permittivity $\\varepsilon_0$ in your answer.`,givenTex:String.raw`\mathbf{E}(x, y, z) = \left\langle ${f.join(`,\\ `)} \right\rangle`,answerTex:v,inputHint:`Type ε₀ as <code>epsilon</code> and π as <code>pi</code>, like <code>${n.usesA?`4/3*pi*a^3*epsilon`:`24*epsilon`}</code>.`,field:{variables:O,scalar:!0,at:e=>[k*(n.volume.pi?Math.PI:1)*(n.usesA?e[0]**n.volume.aPower:1)*e[O.length-1]]},steps:D},E:e=>i.map(t=>t.reduce((t,n)=>t+n.at(e),0)),surface:n.surface,usesA:n.usesA}}var E=[{build:T}],D=(e,t)=>e===0?`${t}^2`:`(${t} ${e>0?`-`:`+`} ${Math.abs(e)})^2`;function O(t){let n=e([`sphere`,`sphere`,`cube`,`box`,`ellipsoid`,`offset-sphere`,`far-sphere`,`far-box`],t);if(n===`sphere`){let n=e([2,3,4,5],t);return{text:String.raw`the sphere $x^2 + y^2 + z^2 = ${n*n}$`,enclosesOrigin:!0,why:`it's centered there`,centeredSphere:n,pieces:[g([0,0,0],[n,n,n])]}}if(n===`cube`){let n=e([1,2,3],t);return{text:String.raw`the surface of the cube with vertices $(\pm ${n}, \pm ${n}, \pm ${n})$`,enclosesOrigin:!0,why:`the cube is centered there`,pieces:v([-n,-n,-n],[n,n,n])}}if(n===`box`){let n=[0,1,2].map(()=>-e([1,2],t)),r=[0,1,2].map(()=>e([1,2,3],t));return{text:String.raw`the surface of the box $${n[0]} \le x \le ${r[0]}$, $${n[1]} \le y \le ${r[1]}$, $${n[2]} \le z \le ${r[2]}$`,enclosesOrigin:!0,why:`each of $x$, $y$, $z$ can be $0$ in the box`,pieces:v(n,r)}}if(n===`ellipsoid`){let[n,r,i]=e([[1,2,3],[2,1,3],[3,2,1],[2,3,1],[1,3,2]],t);return{text:String.raw`the ellipsoid $\frac{x^2}{${n*n}} + \frac{y^2}{${r*r}} + \frac{z^2}{${i*i}} = 1$`.replace(String.raw`\frac{x^2}{1}`,`x^2`).replace(String.raw`\frac{y^2}{1}`,`y^2`).replace(String.raw`\frac{z^2}{1}`,`z^2`),enclosesOrigin:!0,why:`the ellipsoid is centered there`,pieces:[g([0,0,0],[n,r,i])]}}if(n===`offset-sphere`){let[n,r]=e([[1,2],[1,3],[2,3],[-1,2],[-2,3]],t);return{text:String.raw`the sphere $${D(n,`x`)} + y^2 + z^2 = ${r*r}$`,enclosesOrigin:!0,why:`the origin is ${Math.abs(n)} from the center $(${n}, 0, 0)$, less than the radius ${r}`,pieces:[g([n,0,0],[r,r,r])]}}if(n===`far-sphere`){let[n,r]=e([[3,1],[3,2],[4,2],[-3,2],[5,3]],t),i=e([0,1,2],t),a=[0,0,0];a[i]=n;let o=[`x`,`y`,`z`].map((e,t)=>D(a[t],e));return{text:String.raw`the sphere $${o.join(` + `)} = ${r*r}$`,enclosesOrigin:!1,why:`the origin is ${Math.abs(n)} from the center, more than the radius ${r}`,pieces:[g(a,[r,r,r])]}}let r=e([1,2],t),i=e([1,2],t),a=e([0,1,2],t),o=[-1,-1,-1],s=[1,1,1];o[a]=r,s[a]=r+i;let c=[`x`,`y`,`z`];return{text:String.raw`the surface of the box ${[0,1,2].map(e=>`$${o[e]} \\le ${c[e]} \\le ${s[e]}$`).join(`, `)}`,enclosesOrigin:!1,why:`every point of the box has $${c[a]} \\ge ${r}$`,pieces:v(o,s)}}function k(e,t,n){let r=t===`a`?`a^2`:`${Number(t)**2}`,i=t===`a`?`a^3`:`${Number(t)**3}`,a=t===`a`?String.raw`4\pi a^2`:String.raw`4\pi \cdot ${r}`;return[{explanation:`On $${n}$, $|\\mathbf{r}| = ${t}$ and the outward unit normal points straight away from the origin, $\\mathbf{n} = \\mathbf{r}/${t}$. So $\\mathbf{F} \\cdot \\mathbf{n}$ is the same everywhere on it.`,tex:String.raw`\mathbf{F} \cdot \mathbf{n} = \frac{${e}}{${i}}\,\mathbf{r} \cdot \frac{\mathbf{r}}{${t}} = \frac{${e}\,|\mathbf{r}|^2}{${t===`a`?`a^4`:Number(t)**4}} = \frac{${e}}{${r}}`,lessonSection:_.inverseSquare},{explanation:`A constant times the surface area of the sphere, $4\\pi (\\text{radius})^2$. The radius cancels, so the answer doesn't depend on how big the sphere is.`,tex:String.raw`\iint_{${n}} \mathbf{F} \cdot d\mathbf{S} = \iint_{${n}} \mathbf{F} \cdot \mathbf{n}\,dS = \frac{${e}}{${r}} \cdot ${a} = ${d(u(c(4*e)))}`}]}function A(t){let n=e([1,2,3,5,-1,-2],t),r=O(t),i=r.enclosesOrigin?u(c(4*n)):f(0),a=d(i),o={explanation:`Away from the origin, $\\operatorname{div}\\mathbf{F} = 0$: for $\\mathbf{r}/|\\mathbf{r}|^p$ the divergence is $(3 - p)/|\\mathbf{r}|^p$, and here $p = 3$. At the origin $\\mathbf{F}$ isn't defined at all.`,tex:String.raw`\operatorname{div}\mathbf{F} = ${n} \cdot \frac{3 - 3}{|\mathbf{r}|^3} = 0 \quad (\mathbf{r} \ne \mathbf{0})`,lessonSection:_.power},s;return s=r.centeredSphere===void 0?r.enclosesOrigin?[o,{explanation:`The origin is inside $S$ (${r.why}), and $\\mathbf{F}$ isn't defined there, so the Divergence Theorem can't be used on the whole solid. Instead cut out a small sphere $S_a$: $x^2 + y^2 + z^2 = a^2$, small enough to fit inside $S$. On the region $W$ between them $\\mathbf{F}$ is smooth and $\\operatorname{div}\\mathbf{F} = 0$. The boundary of $W$ is $S$ facing out and $S_a$ facing in toward the origin, so its flux is the difference.`,tex:String.raw`\iint_S \mathbf{F} \cdot d\mathbf{S} - \iint_{S_a} \mathbf{F} \cdot d\mathbf{S} = \iiint_W \operatorname{div}\mathbf{F}\,dV = 0`,lessonSection:_.aroundOrigin},...k(n,`a`,`S_a`),{explanation:`So the flux out of $S$ is the same as out of the small sphere.`,tex:String.raw`\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_{S_a} \mathbf{F} \cdot d\mathbf{S} = ${a}`}]:[o,{explanation:`The origin is outside $S$ (${r.why}), so $\\mathbf{F}$ is smooth on the whole solid $W$ inside $S$. The Divergence Theorem applies, and the integrand is $0$.`,tex:String.raw`\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_W \operatorname{div}\mathbf{F}\,dV = \iiint_W 0\,dV = 0`,lessonSection:_.aroundOrigin}]:[...k(n,`${r.centeredSphere}`,`S`)],{problem:p(`Find the flux of $\\mathbf{F}$ out of ${r.text}, oriented outward. (Fields like this, with $c = \\varepsilon Q$, are the electric field of a point charge at the origin.)`,String.raw`\mathbf{F}(\mathbf{r}) = \frac{${y(n)}\mathbf{r}}{|\mathbf{r}|^3} = \frac{${y(n)}\langle x, y, z \rangle}{(x^2 + y^2 + z^2)^{3/2}}`,i,a,s),F:e=>{let t=Math.hypot(...e)**3;return e.map(e=>n*e/t)},pieces:r.pieces}}var j=[{build:A}],M=`x^2 + y^2 + z^2`;function N(e){return e===1?String.raw`\sqrt{${M}}`:e===2?M:e%2==0?`(${M})^{${e/2}}`:`(${M})^{${e}/2}`}function P(t){let n=e([1,2,3,4,-1,-2],t),r=e([1,2,3,4,5],t),a=n*(3-r),o=a===0?`0`:String.raw`${a<0?`-`:``}\frac{${Math.abs(a)}}{${N(r)}}`,s=n===1?``:String.raw`${n} \cdot `,c=[{explanation:`Write $|\\mathbf{r}| = \\sqrt{${M}}$, so $\\mathbf{F} = ${y(n)}\\,|\\mathbf{r}|^{-${r}} \\langle x, y, z \\rangle$. The chain rule gives the derivative of $|\\mathbf{r}|$ with respect to $x$ (and the same with $y$ or $z$).`,tex:String.raw`\frac{\partial |\mathbf{r}|}{\partial x} = \frac{1}{2\sqrt{${M}}} \cdot 2x = \frac{x}{|\mathbf{r}|}`,technique:i,lessonSection:_.power},{explanation:`Differentiate $x|\\mathbf{r}|^{-p}$ with the product rule, then the chain rule. The $y$ and $z$ terms work the same way.`,tex:String.raw`\frac{\partial}{\partial x}\left(x|\mathbf{r}|^{-${r}}\right) = |\mathbf{r}|^{-${r}} + x \cdot (-${r})|\mathbf{r}|^{-${r+1}} \cdot \frac{x}{|\mathbf{r}|} = |\mathbf{r}|^{-${r}} - ${r===1?``:r}x^2|\mathbf{r}|^{-${r+2}}`},{explanation:`Add the three, using $x^2 + y^2 + z^2 = |\\mathbf{r}|^2$.${r===3?` With $p = 3$ the two parts cancel: an inverse-square field has divergence $0$ wherever it's defined.`:``}`,tex:String.raw`\begin{aligned} \operatorname{div}\mathbf{F} &= ${s}\left(3|\mathbf{r}|^{-${r}} - ${r===1?``:r}(${M})|\mathbf{r}|^{-${r+2}}\right) = ${s}\left(3 - ${r}\right)|\mathbf{r}|^{-${r}} \\ &= ${o} \end{aligned}`}];return{problem:{promptHtml:`Find $\\operatorname{div}\\mathbf{F}$ (where $\\mathbf{F}$ is defined).`,givenTex:String.raw`\mathbf{F}(x, y, z) = \frac{${y(n)}\langle x, y, z \rangle}{${N(r)}}`,answerTex:o,field:{variables:[`x`,`y`,`z`],scalar:!0,at:([e,t,n])=>[a/(e*e+t*t+n*n)**(r/2)]},steps:c},F:e=>{let t=Math.hypot(...e);return e.map(e=>n*e/t**r)}}}var F=[{build:P}],I=[t(`charge`,`Charge inside a solid by Gauss's Law`,E),t(`power-divergence`,`Divergence of c r / |r|^p`,F),t(`inverse-square`,`Flux of an inverse-square field`,j),t(`s-and-h`,`Signs and values for the pictured surfaces S and H`,h)];function L(t){return e(I,t).generate(t)}var R={...n(`gauss-law`),lessonHtml:b,techniques:[i],generateProblem:L,problemTypes:I};export{R as gaussLawTopic};