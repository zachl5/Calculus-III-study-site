import{d as e,f as t,h as n,p as r,s as i}from"./index-BX9zVO2G.js";import{c as a,o}from"./techniques-2ghdpz7U.js";import{d as s,f as c,n as l,u}from"./polynomial-D7OtKEoC.js";import{i as d,n as f,r as p,t as m}from"./terms-BZIL_b18.js";import{n as h}from"./fieldDiagram-BszNFGyr.js";import{a as g,c as _,i as v,l as y,o as b,r as x,u as S}from"./problems-BNCfKuTq.js";function C(e,t){let n=Math.hypot(e,t);if(n===0)return[0,0];let r=Math.min(1/(n*n),1.2);return[-e/n*r,-t/n*r]}var w=String.raw`
<h2 id="what-work-is" data-toc="What work is">What work is</h2>
<p>
  When a force $\mathbf{F}$ acts on an object moving along a curve $C$, the <strong>work</strong> it does is the line integral
</p>
<div class="formula">
  $$W = \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}\big(\mathbf{r}(t)\big) \cdot \mathbf{r}'(t)\,dt = \int_C \mathbf{F} \cdot \mathbf{T}\,ds$$
</div>
<p>
  $\mathbf{F} \cdot \mathbf{T}$ is the part of the force along the direction of motion, so work adds up "force along the path × distance."
  With force in newtons and distance in meters, work is in joules ($1\text{ J} = 1\text{ N}\cdot\text{m}$).
</p>
<ul>
  <li><strong>Positive work:</strong> the force pushes the object the way it's moving, and speeds it up.</li>
  <li><strong>Negative work:</strong> the force pushes against the motion, and slows it down.</li>
  <li><strong>Zero work:</strong> the force is perpendicular to the motion, like the tension in a string swinging an object in a circle.</li>
</ul>
<p>
  For a <strong>constant</strong> force moving an object in a straight line by a displacement $\mathbf{D}$, this reduces to the familiar $W = \mathbf{F} \cdot \mathbf{D}$.
</p>

<h2 id="computing-work" data-toc="Computing work">Computing work: two methods</h2>
<table>
  <thead><tr><th>If $\mathbf{F}$ is…</th><th>Then compute $W$ by…</th><th>Covered on</th></tr></thead>
  <tbody>
    <tr>
      <td>not conservative</td>
      <td>parametrizing $C$ and integrating $P\,x'(t) + Q\,y'(t) + R\,z'(t)$</td>
      <td><a href="?topic=line-integrals-xyz">Line Integrals with Respect to x, y, z</a></td>
    </tr>
    <tr>
      <td>conservative, $\mathbf{F} = \nabla f$</td>
      <td>$W = f(\text{end}) - f(\text{start})$, for any path</td>
      <td><a href="?topic=conservative-fields">Conservative Vector Fields</a></td>
    </tr>
  </tbody>
</table>
<p>Always test first. The shortcut on the second row is only valid for conservative fields.</p>

<h2 id="work-energy" data-toc="The work–energy theorem">The work–energy theorem</h2>
<p>
  Suppose an object of mass $m$ moves along $C$, given by $\mathbf{r}(t)$ for $a \le t \le b$, and $\mathbf{F}$ is the total force on it.
  Newton's second law says $\mathbf{F}\big(\mathbf{r}(t)\big) = m\,\mathbf{r}''(t)$. Substitute that into the work integral:
</p>
$$W = \int_a^b \mathbf{F}\big(\mathbf{r}(t)\big) \cdot \mathbf{r}'(t)\,dt = \int_a^b m\,\mathbf{r}''(t) \cdot \mathbf{r}'(t)\,dt$$
<p>
  By the product rule for dot products, $\frac{d}{dt}\big[\mathbf{r}'(t) \cdot \mathbf{r}'(t)\big] = 2\,\mathbf{r}''(t) \cdot \mathbf{r}'(t)$, and
  $\mathbf{r}' \cdot \mathbf{r}' = |\mathbf{r}'|^2$. So the integrand is a derivative, and the Fundamental Theorem of Calculus finishes it:
</p>
$$W = \frac{m}{2}\int_a^b \frac{d}{dt}\,|\mathbf{r}'(t)|^2\,dt = \frac{m}{2}\Big[\,|\mathbf{r}'(t)|^2\,\Big]_a^b = \tfrac{1}{2}m\,|\mathbf{v}(b)|^2 - \tfrac{1}{2}m\,|\mathbf{v}(a)|^2$$
<p>
  where $\mathbf{v} = \mathbf{r}'$ is the velocity. The quantity $K = \tfrac{1}{2}m|\mathbf{v}|^2$ is the <strong>kinetic energy</strong>, so
</p>
<div class="formula">
  $$W = K(B) - K(A)$$
</div>
<p>The work done on an object equals its change in kinetic energy. This holds for any force, conservative or not.</p>

<h2 id="conservation-of-energy" data-toc="Conservation of energy">Potential energy and conservation of energy</h2>
<p>
  Now suppose $\mathbf{F}$ is conservative, $\mathbf{F} = \nabla f$. Physicists define the <strong>potential energy</strong> as $P = -f$,
  so $\mathbf{F} = -\nabla P$. The Fundamental Theorem for Line Integrals gives the work a second way:
</p>
$$W = f(B) - f(A) = -P(B) + P(A)$$
<p>Setting the two expressions for $W$ equal:</p>
$$P(A) - P(B) = K(B) - K(A) \qquad\Longrightarrow\qquad P(A) + K(A) = P(B) + K(B)$$
<div class="formula">
  <p>
    <strong>Conservation of energy:</strong> under a conservative force, potential energy plus kinetic energy stays the same as the object moves.
    That's where the name "conservative" comes from.
  </p>
</div>
<p>
  <strong>Watch the sign:</strong> the potential <em>function</em> $f$ and the potential <em>energy</em> $P$ are negatives of each other.
  Mathematicians usually work with $f$, physicists with $P$. When the force does positive work, $f$ goes up, $P$ goes down, and $K$ goes up.
</p>

<h2 id="inverse-square" data-toc="Inverse-square fields">Inverse-square fields</h2>
<p>An <strong>inverse-square field</strong> has the form</p>
<div class="formula">
  $$\mathbf{F}(\mathbf{r}) = \frac{c\,\mathbf{r}}{|\mathbf{r}|^3}, \qquad \mathbf{r} = \langle x, y, z \rangle$$
</div>
<p>
  The name comes from its magnitude: $|\mathbf{F}| = \frac{|c|\,|\mathbf{r}|}{|\mathbf{r}|^3} = \frac{|c|}{|\mathbf{r}|^2}$, which falls off with the
  <em>square</em> of the distance. Its direction is along $\mathbf{r}$: straight away from the origin if $c > 0$, straight toward it if $c < 0$.
</p>

<!-- tools -->
<h3>Its potential function</h3>
<p>Using $\nabla\left(\frac{1}{|\mathbf{r}|}\right) = -\frac{\mathbf{r}}{|\mathbf{r}|^3}$ (see <a href="#technique-distance-derivatives">derivatives of $|\mathbf{r}|$</a>):</p>
$$f(\mathbf{r}) = -\frac{c}{|\mathbf{r}|} \quad\Longrightarrow\quad \nabla f = \frac{c\,\mathbf{r}}{|\mathbf{r}|^3} = \mathbf{F}$$
<p>
  $\mathbf{F}$ isn't defined at the origin, so its domain is $\mathbb{R}^3$ minus one point. On the
  <a href="?topic=conservative-fields#the-test">Conservative Vector Fields</a> page, that domain is <strong>still simply connected in 3D</strong>:
  a loop can always slide around a single missing point. So inverse-square fields are conservative.
</p>

<h3>Work depends only on distance</h3>
<p>Moving an object from $P_1$ to $P_2$, at distances $d_1 = |P_1|$ and $d_2 = |P_2|$ from the origin, along any path that avoids the origin:</p>
<div class="formula">
  $$W = f(P_2) - f(P_1) = -\frac{c}{d_2} + \frac{c}{d_1} = c\left(\frac{1}{d_1} - \frac{1}{d_2}\right)$$
</div>
<p>The directions to $P_1$ and $P_2$ don't matter at all. Only how far each is from the origin.</p>

<h2 id="gravity" data-toc="Gravitational fields">Gravitational fields</h2>
<p>
  By Newton's law of gravitation, a mass $M$ at the origin pulls on a mass $m$ at position $\mathbf{r}$ with force
</p>
<div class="formula">
  $$\mathbf{F}(\mathbf{r}) = -\frac{mMG}{|\mathbf{r}|^3}\,\mathbf{r}, \qquad G = 6.67 \times 10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2$$
</div>
<div class="figure-row">
  <figure>
    ${h({label:`Arrows pointing toward the origin, stronger near the center, with a curve moving inward.`,field:C,curve:{points:[[2.1,1.6],[1.6,.6],[1,.1],[.55,-.15]]}})}
    <figcaption>Gravity points toward the center and grows stronger closer in (lengths capped near the center). A path moving inward goes with the arrows: positive work.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>This is an inverse-square field with $c = -mMG$, so:</p>
    <ul>
      <li>Potential function: $f = \dfrac{mMG}{|\mathbf{r}|}$. Potential energy: $P = -\dfrac{mMG}{|\mathbf{r}|}$.</li>
      <li>Work from distance $d_1$ to distance $d_2$: $W = mMG\left(\dfrac{1}{d_2} - \dfrac{1}{d_1}\right)$.</li>
      <li><strong>Moving closer</strong> ($d_2 < d_1$): $W > 0$. Gravity speeds the object up, like a planet falling toward perihelion.</li>
      <li><strong>Moving away</strong> ($d_2 > d_1$): $W < 0$. Gravity slows it down, and a rocket must supply the energy.</li>
    </ul>
  </div>
</div>

<h3>Worked example: raising a satellite</h3>
<p>
  An 800 kg satellite moves from $7.0 \times 10^6$ m to $8.0 \times 10^6$ m from Earth's center ($M = 5.97 \times 10^{24}$ kg).
  How much work does gravity do?
</p>
$$mMG = (800)(5.97 \times 10^{24})(6.67 \times 10^{-11}) = 3.186 \times 10^{17}$$
$$\begin{aligned} \frac{1}{d_2} - \frac{1}{d_1} &= \frac{1}{8.0 \times 10^6} - \frac{1}{7.0 \times 10^6} \\ &= 1.250 \times 10^{-7} - 1.429 \times 10^{-7} = -1.786 \times 10^{-8} \end{aligned}$$
$$W = \left(3.186 \times 10^{17}\right)\left(-1.786 \times 10^{-8}\right) \approx -5.69 \times 10^{9}\ \text{J}$$
<p>
  Negative, because the satellite moves away from Earth against gravity's pull. By the work–energy theorem, without engines it would lose
  $5.69 \times 10^9$ J of kinetic energy on the way.
</p>

<h3>The same math for electric force</h3>
<p>
  Coulomb's law for charges $q$ and $Q$ has the same form, $\mathbf{F} = \frac{\varepsilon\,qQ}{|\mathbf{r}|^3}\,\mathbf{r}$ with
  $\varepsilon \approx 8.99 \times 10^9$, so $c = \varepsilon qQ$. Like charges ($qQ > 0$) repel; opposite charges attract, like gravity.
  Everything above about potentials and work applies unchanged.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Forgetting to convert km to m.</strong> $G$ is in $\text{N}\cdot\text{m}^2/\text{kg}^2$, so distances must be in meters. Kilometers make the answer 1000 times too big.</li>
  <li><strong>Getting the sign backward.</strong> Check it physically: toward the attracting body is positive work for gravity, away is negative.</li>
  <li><strong>Confusing $|\mathbf{r}|^3$ with $|\mathbf{r}|^2$.</strong> The formula has $|\mathbf{r}|^3$ because $\mathbf{r}$ on top has length $|\mathbf{r}|$; the force still falls off as $1/|\mathbf{r}|^2$.</li>
  <li><strong>Mixing up $f$ and $P$.</strong> $P = -f$. Work is $f(B) - f(A)$, which is $P(A) - P(B)$.</li>
  <li><strong>Rounding too early.</strong> In $\frac{1}{d_2} - \frac{1}{d_1}$ the two terms are close, so keep at least four significant figures until the end.</li>
</ul>
`,T=e=>Math.hypot(...e),E=e=>Math.round(Math.sqrt(e.reduce((e,t)=>e+t*t,0))),D=[[1,2,2],[0,3,4],[2,3,6],[1,4,8],[4,4,7],[2,6,9],[3,4,12],[2,10,11]];function O(t){let n=[...e(D,t)];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n.map(e=>t()<.5?-e:e)}function k(e,t){let n=t.map((t,n)=>t-e[n]),r=Math.min(1,Math.max(0,-e.reduce((e,t,r)=>e+t*n[r],0)/n.reduce((e,t)=>e+t*t,0)));return T(e.map((e,t)=>e+r*n[t]))}var A=`x^2 + y^2 + z^2`;function j(e){let t=t=>String.raw`\frac{${e.c}\,${t}}{\left(${A}\right)^{3/2}}`,n=String.raw`${e.negated}\left(${A}\right)^{-1/2}`;return[{explanation:String.raw`Write out the components. Since $|\mathbf{r}| = \sqrt{${A}}$, the denominator is $|\mathbf{r}|^3 = \left(${A}\right)^{3/2}$, and each component is $c$ times one coordinate over it.`,tex:String.raw`P = ${t(`x`)}, \qquad Q = ${t(`y`)}, \qquad R = ${t(`z`)}`},{explanation:String.raw`Integrate $P$ with respect to $x$, holding $y$ and $z$ constant. Substitute $u = ${A}$, so $du = 2x\,dx$ and $x\,dx = \tfrac{1}{2}du$. The leftover can depend on $y$ and $z$.`,tex:String.raw`f = \int ${t(`x`)}\,dx = ${e.half}\int u^{-3/2}\,du = ${e.half}\left(-2u^{-1/2}\right) = ${n} + g(y, z)`,technique:a},{explanation:String.raw`Differentiate with respect to $y$ using the chain rule, and compare with $Q$.`,tex:String.raw`\frac{\partial f}{\partial y} = ${e.negated}\left(-\tfrac{1}{2}\right)\left(${A}\right)^{-3/2}(2y) + \frac{\partial g}{\partial y} = ${t(`y`)} + \frac{\partial g}{\partial y} = Q`,technique:o},{explanation:String.raw`That already equals $Q$, so $\frac{\partial g}{\partial y} = 0$ and $g$ depends only on $z$: $g = h(z)$. The same computation with respect to $z$ gives exactly $R$, so $h'(z) = 0$ and $h$ is a constant.`,tex:String.raw`\frac{\partial f}{\partial z} = ${t(`z`)} + h'(z) = R \quad\Rightarrow\quad h'(z) = 0 \quad\Rightarrow\quad h(z) = C`},{explanation:String.raw`So the potential function is $-c$ divided by the distance from the origin.`,tex:String.raw`f(\mathbf{r}) = ${n} + C = ${e.potential} + C`}]}function M(e){return String.raw`\mathbf{F}(\mathbf{r}) = ${e<0?`-`:``}\frac{${Math.abs(e)===1?``:Math.abs(e)}\,\mathbf{r}}{|\mathbf{r}|^3}`}var N={name:`inverse-square work`,build(t){let n=e([-12,-6,-4,-3,-2,2,3,4,6,12],t),{p1:i,p2:a}=r(()=>({p1:O(t),p2:O(t)}),({p1:e,p2:t})=>E(e)===E(t)||k(e,t)<1),[o,d]=[E(i),E(a)],f=e=>u(-n,e),p=l(f(d),u(-f(o).num,f(o).den)),m=(e,t,n)=>String.raw`${n} = \sqrt{${e.map(e=>e<0?`(${e})^2`:`${e}^2`).join(` + `)}} = \sqrt{${t*t}} = ${t}`,h=[...j({c:`${n}`,half:s(u(n,2)),negated:`${-n}`,potential:String.raw`${n>0?`-`:``}\frac{${Math.abs(n)}}{|\mathbf{r}|}`}),{explanation:String.raw`So $\mathbf{F}$ is conservative on all of space except the origin, which is still simply connected in 3D. The work is the same along every path that avoids the origin: $W = f(P_2) - f(P_1)$.`,tex:String.raw`W = \int_C \mathbf{F} \cdot d\mathbf{r} = f(P_2) - f(P_1)`},{explanation:`Find each point's distance from the origin. Only these distances matter.`,tex:String.raw`\begin{aligned} ${m(i,o,`d_1 = |P_1|`).replace(` = `,` &= `)} \\ ${m(a,d,`d_2 = |P_2|`).replace(` = `,` &= `)} \end{aligned}`},{explanation:String.raw`Evaluate $f = ${n>0?`-`:``}\frac{${Math.abs(n)}}{d}$ at each end and subtract: end minus start.`,tex:String.raw`W = f(P_2) - f(P_1) = \left(${s(f(d))}\right) - \left(${s(f(o))}\right) = ${s(p)}`},{explanation:c(p)>0?`The work is positive: overall, the force pushes the object the way it moves.`:`The work is negative: overall, the force pushes against the object's motion.`,tex:String.raw`W = ${n}\left(\frac{1}{${o}} - \frac{1}{${d}}\right) = ${s(p)}`}];return{problem:{promptHtml:String.raw`Let $\mathbf{F}$ be the inverse-square field below, where $\mathbf{r} = \langle x, y, z \rangle$. Find the work done by $\mathbf{F}$ in moving an object from $P_1 = ${y(i)}$ to $P_2 = ${y(a)}$ along a path that avoids the origin.`,givenTex:String.raw`${M(n)}, \qquad P_1 = ${y(i)} \to P_2 = ${y(a)}`,answerTex:s(p),answerValue:c(p),rounding:{decimals:3},steps:h},path:{position:e=>i.map((t,n)=>t+(a[n]-t)*e),start:0,end:1},force:e=>{let t=T(e);return e.map(e=>n*e/t**3)},offset:0}}},P={value:667e-13,tex:String.raw`6.67 \times 10^{-11}`},F={value:199e28,tex:String.raw`1.99 \times 10^{30}`},I={value:597e22,tex:String.raw`5.97 \times 10^{24}`},L=[{body:`the Moon`,center:`Earth`,bodyMass:{value:735e20,tex:String.raw`7.35 \times 10^{22}`},centerMass:I,far:{name:`apogee`,km:{value:405500,tex:String.raw`4.055 \times 10^{5}`}},near:{name:`perigee`,km:{value:363300,tex:String.raw`3.633 \times 10^{5}`}}},{body:`Mars`,center:`the Sun`,bodyMass:{value:642e21,tex:String.raw`6.42 \times 10^{23}`},centerMass:F,far:{name:`aphelion`,km:{value:2492e5,tex:String.raw`2.492 \times 10^{8}`}},near:{name:`perihelion`,km:{value:2067e5,tex:String.raw`2.067 \times 10^{8}`}}},{body:`Mercury`,center:`the Sun`,bodyMass:{value:33e22,tex:String.raw`3.30 \times 10^{23}`},centerMass:F,far:{name:`aphelion`,km:{value:698e5,tex:String.raw`6.98 \times 10^{7}`}},near:{name:`perihelion`,km:{value:46e6,tex:String.raw`4.60 \times 10^{7}`}}},{body:`Jupiter`,center:`the Sun`,bodyMass:{value:19e26,tex:String.raw`1.90 \times 10^{27}`},centerMass:F,far:{name:`aphelion`,km:{value:8166e5,tex:String.raw`8.166 \times 10^{8}`}},near:{name:`perihelion`,km:{value:7405e5,tex:String.raw`7.405 \times 10^{8}`}}}],R=[{name:`a low orbit (400 km up)`,km:{value:6771,tex:String.raw`6.771 \times 10^{3}`}},{name:`a GPS orbit`,km:{value:26560,tex:String.raw`2.656 \times 10^{4}`}},{name:`a geostationary orbit`,km:{value:42160,tex:String.raw`4.216 \times 10^{4}`}}],z=`Large answers can be typed in scientific notation, like <code>1.75e32</code> or <code>1.75*10^32</code> (in joules). Keep at least four significant figures until the end; answers within 1% are accepted.`,B={name:`gravitational work`,build(t){let n,a,o,s,c,l,u;if(t()<.6){let r=e(L,t),i=t()<.5;({body:n,center:a,bodyMass:o,centerMass:s}=r),[c,l]=i?[r.far,r.near]:[r.near,r.far],u=String.raw`${n[0].toUpperCase()}${n.slice(1)} (mass $${o.tex}$ kg) moves in its orbit around ${a} (mass $${s.tex}$ kg) from ${c.name}, at a distance of $${c.km.tex}$ km, to ${l.name}, at $${l.km.tex}$ km.`}else{let i=e([500,1e3,2e3,3e3],t),[d,f]=r(()=>[e(R,t),e(R,t)],([e,t])=>e===t);n=`the satellite`,a=`Earth`,o={value:i,tex:`${i}`},s=I,c=d,l=f,u=String.raw`A ${i} kg satellite is moved from ${d.name}, $${d.km.tex}$ km from Earth's center, to ${f.name}, $${f.km.tex}$ km from Earth's center. Earth's mass is $${I.tex}$ kg.`}let d=c.km.value*1e3,f=l.km.value*1e3,p=o.value*s.value*P.value,m=1/f-1/d,h=p*m,g=String.raw`${i(h)}\text{ J}`,_=[{explanation:String.raw`Gravity is an inverse-square field with $c = -mMG$. Find its potential function by partial integration, keeping $m$, $M$, and $G$ as constants for now.`,tex:String.raw`\mathbf{F} = -\frac{mMG\,\mathbf{r}}{|\mathbf{r}|^3} = \frac{c\,\mathbf{r}}{|\mathbf{r}|^3}, \qquad c = -mMG`},...j({c:`-mMG`,half:String.raw`-\frac{mMG}{2}`,negated:`mMG`,potential:String.raw`\frac{mMG}{|\mathbf{r}|}`}),{explanation:`Gravity is conservative, so the work depends only on the starting and ending distances from the center, not the path.`,tex:String.raw`W = f(\text{end}) - f(\text{start}) = mMG\left(\frac{1}{d_2} - \frac{1}{d_1}\right)`},{explanation:String.raw`Convert the distances to meters, since $G$ is in $\text{N}\cdot\text{m}^2/\text{kg}^2$.`,tex:String.raw`d_1 = ${c.km.tex}\text{ km} = ${i(d,4)}\text{ m}, \qquad d_2 = ${l.km.tex}\text{ km} = ${i(f,4)}\text{ m}`},{explanation:String.raw`Multiply the constants: the two masses and $G$.`,tex:String.raw`mMG = \left(${o.tex}\right)\left(${s.tex}\right)\left(${P.tex}\right) = ${i(p,4)}`},{explanation:`Compute the difference of reciprocals. Keep several digits: the two terms are close, so early rounding loses accuracy.`,tex:String.raw`\frac{1}{d_2} - \frac{1}{d_1} = ${i(1/f,4)} - ${i(1/d,4)} = ${i(m,4)}\ \text{m}^{-1}`},{explanation:h>0?`Multiply. The work is positive: ${n} moves closer to ${a}, in the direction gravity pulls, so gravity speeds it up.`:`Multiply. The work is negative: ${n} moves away from ${a}, against gravity's pull, so gravity slows it down (or an engine must supply that energy).`,tex:String.raw`W = \left(${i(p,4)}\right)\left(${i(m,4)}\right) \approx ${g}`}];return{problem:{promptHtml:`${u} Using $G = ${P.tex}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, find the work done by the gravitational field of ${a}.`,givenTex:String.raw`W = \int_C \mathbf{F} \cdot d\mathbf{r}, \qquad \mathbf{F} = -\frac{mMG\,\mathbf{r}}{|\mathbf{r}|^3}`,answerTex:g,answerValue:h,rounding:{significantFigures:3},relativeTolerance:.01,inputHint:z,steps:_},path:{position:e=>[d+(f-d)*e,0,0],start:0,end:1},force:e=>{let t=T(e);return e.map(e=>-p*e/t**3)},offset:0}}},V={name:`conservation of energy`,build(t){let n=e([2,4,6],t),i=e([1,2,3],t),a=n*i*i/2,o=()=>e([-2,-1,0,1,2],t),{terms:s,a:c,b:l,finalEnergy:u}=r(()=>{let e=_(t,!1),n=[o(),o()],r=[o(),o()],i=m(f(e,r).exact,f(e,n).exact);return{terms:e,a:n,b:r,finalEnergy:{...i,constant:i.constant+a}}},({a:e,b:t,finalEnergy:n})=>e[0]===t[0]&&e[1]===t[1]||p(n)<.5),h=b(s,c,l),C=d(u),w=[{explanation:String.raw`The work–energy theorem says the work done on the particle equals its change in kinetic energy: $W = K(B) - K(A)$. If $\mathbf{F} = \nabla f$, the work is also $f(B) - f(A)$. So first check that $\mathbf{F}$ is conservative.`,tex:String.raw`K(B) = K(A) + W, \qquad W = f(B) - f(A)`},...S(s,2),...g(s,2),...h.steps,{explanation:String.raw`Find the starting kinetic energy, $K = \tfrac{1}{2}m|\mathbf{v}|^2$.`,tex:String.raw`K(A) = \tfrac{1}{2}(${n})(${i})^2 = ${a}`},{explanation:`Add the work done by the force.`,tex:String.raw`K(B) = K(A) + W = ${a} + \left(${h.answer}\right) = ${C}`}];return{problem:{promptHtml:String.raw`A particle of mass $${n}$ moves under the force $\mathbf{F}$ below, with no other forces acting. At $A = ${y(c)}$ its speed is $${i}$. Find its kinetic energy when it reaches $B = ${y(l)}$.`,givenTex:x(s,2),answerTex:C,answerValue:p(u),steps:w},path:{position:e=>c.map((t,n)=>t+(l[n]-t)*e),start:0,end:1},force:v(s,2),offset:a}}},H=[N,B,V];function U(t){return e(H,t).build(t).problem}var W=[t(`inverse-square`,`Inverse-square work`,[N]),t(`gravity`,`Gravitational work`,[B]),t(`energy`,`Conservation of energy`,[V])],G={...n(`work-and-force-fields`),lessonHtml:w,techniques:[o,a],generateProblem:U,problemTypes:W};export{G as workTopic};