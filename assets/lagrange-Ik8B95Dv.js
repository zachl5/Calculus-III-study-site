import{d as e,f as t,h as n,m as r,o as i,p as a,u as o}from"./index-BX9zVO2G.js";import{i as s,s as c}from"./techniques-2ghdpz7U.js";import{d as l,f as u,n as d,s as f,u as p}from"./polynomial-D7OtKEoC.js";import{c as m,l as h,s as g}from"./terms-BZIL_b18.js";var _=e=>Math.round(e*1e3)/1e3,v=e=>e.map(([e,t])=>`${_(e)},${_(t)}`).join(` `);function y(e,t,n,r=`middle`,i=700){return`<text x="${_(e[0])}" y="${_(e[1])}" font-size="${n}" font-weight="${i}" text-anchor="${r}" dominant-baseline="central" fill="var(--text)" stroke="var(--surface)" stroke-width="${_(n*.4)}" paint-order="stroke">${t}</text>`}function b(e,t,n,r,i){let[a,o]=[t[0]-e[0],t[1]-e[1]],s=Math.hypot(a,o),[c,l]=[a/s,o/s],u=[t[0]-c*r,t[1]-l*r],d=[u[0]-l*r*.55,u[1]+c*r*.55],f=[u[0]+l*r*.55,u[1]-c*r*.55];return`<line x1="${_(e[0])}" y1="${_(e[1])}" x2="${_(u[0])}" y2="${_(u[1])}" stroke="${i}" stroke-width="${n}" /><polygon points="${v([t,d,f])}" fill="${i}" />`}var x=45*Math.PI/180,S=10*Math.PI/180,C=[-Math.sin(x),Math.cos(x),0],w=[-Math.sin(S)*Math.cos(x),-Math.sin(S)*Math.sin(x),Math.cos(S)],T=[Math.cos(S)*Math.cos(x),Math.cos(S)*Math.sin(x),Math.sin(S)],E=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],D=e=>[E(e,C),-E(e,w)],O=5,[k,ee]=[-8,10],A=(e,t)=>[O*Math.cos(e),t,O*Math.sin(e)],j=e=>E([Math.cos(e),0,Math.sin(e)],T)>0,te=e=>[O*Math.cos(e),1+O*Math.sin(e),O*Math.sin(e)],ne=240,re=Array.from({length:241},(e,t)=>2*Math.PI*t/ne);function ie(e,t,n){let r=[];for(let t of re){let n=j(t),i=r[r.length-1];(!i||i.front!==n)&&r.push({front:n,pts:i?[i.pts[i.pts.length-1]]:[]}),r[r.length-1].pts.push(D(e(t)))}return r.map(({front:e,pts:r})=>`<polyline points="${v(r)}" fill="none" stroke="${t}" stroke-width="${e?n:n*.7}"${e?``:` stroke-dasharray="${n*3} ${n*2.5}"`} stroke-linejoin="round" />`).join(``)}function ae(){let e=Math.atan2(-T[0],T[2]),t=[e,e+Math.PI].map(e=>{let[t,n]=[D(A(e,k)),D(A(e,ee))];return`<line x1="${_(t[0])}" y1="${_(t[1])}" x2="${_(n[0])}" y2="${_(n[1])}" stroke="var(--muted)" stroke-width="0.09" />`}).join(``),n=ie(e=>A(e,k),`var(--muted)`,.09),r=`<polygon points="${v(re.map(e=>D(A(e,ee))))}" fill="var(--muted)" fill-opacity="0.08" stroke="var(--muted)" stroke-width="0.09" />`,i=[[-8,-5.5,-6.5],[8,-5.5,-6.5],[8,7.5,6.5],[-8,7.5,6.5]],a=`<polygon points="${v(i.map(D))}" fill="var(--accent)" fill-opacity="0.13" stroke="var(--accent)" stroke-width="0.07" />`,o=ie(te,`var(--highlight)`,.16),s=D([3,5,4]),c=D([-3,-3,-4]),l=[s,c].map(([e,t])=>`<circle cx="${_(e)}" cy="${_(t)}" r="0.32" fill="var(--text)" />`).join(``),u=D(A(Math.PI/2,k)),d=D(i[0]);return n+r+t+a+o+l+y([s[0],s[1]-1.05],`max (3, 5, 4)`,.85)+y([c[0],c[1]+1.05],`min (−3, −3, −4)`,.85)+y([u[0],u[1]-.9],`g: x² + z² = 25`,.85)+y([d[0]+.3,d[1]+.9],`h: y − z = 1`,.85,`start`)+oe()}function oe(){let e=[-11,-7.4];return[`x`,`y`,`z`].map((t,n)=>{let r=[0,0,0];r[n]=2.2;let[i,a]=D(r),o=[e[0]+i,e[1]+a],s=[e[0]+i*1.35,e[1]+a*1.35];return b(e,o,.08,.4,`var(--muted)`)+y(s,t,.75,`middle`,600)}).join(``)}var se=`<svg class="field-diagram" viewBox="-13.5 -10.5 25 18" role="img" aria-label="A cylinder x squared plus z squared equals 25, lying along the y-axis, cut by the slanted plane y minus z equals 1. They meet in a tilted ellipse, marked with its highest value of f at (3, 5, 4) and its lowest at (minus 3, minus 3, minus 4).">${ae()}</svg>`;function ce(){let e=[4/5,-3/5],t=([e,t])=>[e,-t];return[-25,-15,-5,5,15,25].map(n=>{let r=Math.abs(n)===25,i=[3*n/25,4*n/25],a=n=>t([i[0]+n*e[0],i[1]+n*e[1]]),[o,s]=[a(-12),a(12)],c=r?`var(--accent)`:`var(--muted)`,l=`<line x1="${_(o[0])}" y1="${_(o[1])}" x2="${_(s[0])}" y2="${_(s[1])}" stroke="${c}" stroke-width="${r?.16:.1}" />`,u=Math.sqrt(6.4**2-(n/5)**2),d=n+1;return l+y(a(u),d<0?`−${-d}`:`${d}`,.85)}).join(``)}function le(){let e=`<line x1="-7.5" y1="0" x2="7.5" y2="0" stroke="var(--border)" stroke-width="0.08" /><line x1="0" y1="-7.5" x2="0" y2="7.5" stroke="var(--border)" stroke-width="0.08" />`+y([7.1,-.55],`x`,.75,`middle`,600)+y([.5,-7.05],`z`,.75,`middle`,600),t=b([3,-4],[4.26,-5.68],.14,.55,`var(--text)`);return e+ce()+`<circle cx="0" cy="0" r="5" fill="none" stroke="var(--highlight)" stroke-width="0.2" />`+t+`<circle cx="3" cy="-4" r="0.28" fill="var(--text)" /><circle cx="-3" cy="4" r="0.28" fill="var(--text)" />`+y([3,-2.9],`max`,.8)+y([-3,2.9],`min`,.8)}var ue=`<svg class="field-diagram" viewBox="-7.5 -7.5 15 15" role="img" aria-label="The circle x squared plus z squared equals 25 and level lines of 3x plus 4z plus 1, labeled with their values from minus 24 to 26. The lines for 26 and minus 24 just touch the circle, at (3, 4) and (minus 3, minus 4).">${le()}</svg>`;function de(){return[-2,-1,0,1,2].map(e=>{let t=Math.abs(e)===2,n=t?`var(--accent)`:`var(--muted)`,r=`<line x1="-2.5" y1="${-(e+2.5)}" x2="2.5" y2="${2.5-e}" stroke="${n}" stroke-width="${t?.055:.035}" />`,[i,a]=[(e+2.8)/2,(e-2.8)/2];return r+`<text x="${i}" y="${-a}" font-size="0.3" font-weight="700" text-anchor="middle" dominant-baseline="central" fill="var(--text)" stroke="var(--surface)" stroke-width="0.12" paint-order="stroke">${e<0?`−${-e}`:e}</text>`}).join(``)}var fe=String.raw`
<svg class="field-diagram" viewBox="-2.5 -2.5 5 5" role="img" aria-label="The circle x squared plus y squared equals 2, crossed by the level lines x plus y equals minus 2 through 2. The lines for 2 and minus 2 just touch the circle at (1, 1) and (minus 1, minus 1), where the gradients of f and g point the same way.">
  <line x1="-2.5" y1="0" x2="2.5" y2="0" stroke="var(--border)" stroke-width="0.03" />
  <line x1="0" y1="-2.5" x2="0" y2="2.5" stroke="var(--border)" stroke-width="0.03" />
  ${de()}
  <circle cx="0" cy="0" r="1.4142" fill="none" stroke="var(--highlight)" stroke-width="0.075" />
  <line x1="1" y1="-1" x2="1.68" y2="-1.68" stroke="var(--text)" stroke-width="0.06" />
  <polygon points="1.8,-1.8 1.729,-1.559 1.559,-1.729" fill="var(--text)" />
  <text x="1.45" y="-2.15" font-size="0.3" font-weight="700" text-anchor="middle" fill="var(--text)" stroke="var(--surface)" stroke-width="0.12" paint-order="stroke">∇f ∥ ∇g</text>
  <circle cx="1" cy="-1" r="0.1" fill="var(--text)" />
  <circle cx="-1" cy="1" r="0.1" fill="var(--text)" />
</svg>`,pe=String.raw`
<h2 id="constrained" data-toc="Extremes along a constraint">Extremes along a constraint</h2>
<p>
  Many problems ask for the largest or smallest value of $f$ <strong>only at points that satisfy a condition</strong>, called a
  <strong>constraint</strong>, written $g(x, y) = k$:
</p>
<ul>
  <li>The hottest point on a circular wire, where $f$ is temperature and the wire is $x^2 + y^2 = 1$.</li>
  <li>The point of a plane closest to the origin, where $f$ is the squared distance $x^2 + y^2 + z^2$.</li>
  <li>The largest box with a fixed amount of material, where $f$ is the volume and $g$ is the surface area.</li>
</ul>
<p>
  The constraint is a <strong>curve</strong> $g(x, y) = k$ in two variables, or a <strong>surface</strong> $g(x, y, z) = k$ in three. Setting
  $f_x = f_y = 0$ is the wrong tool: those are points where $f$ is flat in <em>every</em> direction, but along a constraint you can only move
  in some directions.
</p>
<p>
  On the <a href="?topic=absolute-extrema#boundary">Absolute Max and Min page</a>, you solved the constraint for one variable and substituted.
  That works for lines and some circles, but often the substitution is messy or impossible. Lagrange multipliers avoid it.
</p>

<h2 id="why-it-works" data-toc="Why the gradients line up">Why the gradients line up</h2>
<div class="figure-row">
  <figure>
    ${fe}
    <figcaption>
      The constraint $x^2 + y^2 = 2$ (orange) and level lines of $f = x + y$, labeled with their values. The highest line that still touches
      the circle is $f = 2$, at $(1, 1)$. The lowest is $f = -2$, at $(-1, -1)$.
    </figcaption>
  </figure>
  <div class="figure-notes">
    <p>
      Picture walking along the constraint while watching the level curves of $f$ go by. Where your path <strong>crosses</strong> a level
      curve, you pass from lower values to higher ones, so that point can't be a maximum or minimum.
    </p>
    <p>
      The extremes happen where the constraint just <strong>touches</strong> a level curve without crossing it: the two curves are
      <strong>tangent</strong>.
    </p>
    <p>
      The gradient is perpendicular to the level curves. $\nabla f$ is perpendicular to the level curve of $f$, and $\nabla g$ is perpendicular
      to the constraint. Where the curves are tangent, both gradients are perpendicular to the same line, so they're
      <strong>parallel</strong>: one is a multiple of the other.
    </p>
  </div>
</div>
$$\nabla f(x_0, y_0) = \lambda\, \nabla g(x_0, y_0)$$
<p>
  The number $\lambda$ (Greek "lambda") is the <strong>Lagrange multiplier</strong>. In the picture, at $(1, 1)$: $\nabla f = \langle 1, 1 \rangle$ and
  $\nabla g = \langle 2x, 2y \rangle = \langle 2, 2 \rangle$, so $\nabla f = \frac{1}{2} \nabla g$.
</p>

<h2 id="method" data-toc="The method">The method of Lagrange multipliers</h2>
<div class="formula">
  <p>
    To find the maximum and minimum values of $f(x, y, z)$ subject to $g(x, y, z) = k$, assuming these values exist and
    $\nabla g \ne \mathbf{0}$ on the surface $g = k$:
  </p>
  <ol>
    <li>Find every $x$, $y$, $z$, and $\lambda$ with
      $$\nabla f(x, y, z) = \lambda \,\nabla g(x, y, z) \quad\text{and}\quad g(x, y, z) = k$$</li>
    <li>Evaluate $f$ at every point $(x, y, z)$ from step 1. The largest value is the maximum, and the smallest is the minimum.</li>
  </ol>
</div>
<p>Written out one component at a time, step 1 is a system of equations, one per variable plus the constraint itself:</p>
<table>
  <thead><tr><th>Two variables (3 equations)</th><th>Three variables (4 equations)</th></tr></thead>
  <tbody>
    <tr>
      <td>$f_x = \lambda g_x$<br />$f_y = \lambda g_y$<br />$g(x, y) = k$</td>
      <td>$f_x = \lambda g_x$<br />$f_y = \lambda g_y$<br />$f_z = \lambda g_z$<br />$g(x, y, z) = k$</td>
    </tr>
  </tbody>
</table>
<ul>
  <li><strong>Don't forget the constraint equation.</strong> Without it there are more unknowns than equations.</li>
  <li><strong>No second derivative test.</strong> Like the absolute extrema recipe, just evaluate $f$ at every candidate and compare.</li>
  <li><strong>$\lambda$ is only a helper.</strong> You solve for it along the way, but the answer is the value of $f$, not $\lambda$.</li>
</ul>

<!-- tools -->
<h2 id="worked-examples" data-toc="Worked examples">Worked example: a circle</h2>
<p>Find the maximum and minimum values of $f(x, y) = x^2 + 2y^2 - 2x$ subject to $x^2 + y^2 = 4$.</p>
<p>Here $g = x^2 + y^2$, so $\nabla f = \langle 2x - 2,\ 4y \rangle$ and $\nabla g = \langle 2x, 2y \rangle$. The system is:</p>
$$2x - 2 = 2\lambda x, \qquad 4y = 2\lambda y, \qquad x^2 + y^2 = 4$$
<p>The second equation factors: $4y - 2\lambda y = 2y(2 - \lambda) = 0$, so $y = 0$ or $\lambda = 2$.</p>
<ul>
  <li><strong>Case $y = 0$:</strong> the constraint gives $x^2 = 4$, so $x = \pm 2$. Points $(2, 0)$ and $(-2, 0)$.</li>
  <li><strong>Case $\lambda = 2$:</strong> the first equation becomes $2x - 2 = 4x$, so $x = -1$. Then $y^2 = 4 - 1 = 3$, so $y = \pm\sqrt{3}$. Points $(-1, \pm\sqrt{3})$.</li>
</ul>
$$f(2, 0) = 0, \qquad f(-2, 0) = 8, \qquad f(-1, \pm\sqrt{3}) = 1 + 6 + 2 = 9$$
<p>
  The maximum is $9$, at $(-1, \pm\sqrt{3})$, and the minimum is $0$, at $(2, 0)$. The Absolute Max and Min page found the same $9$ by
  substituting $y^2 = 4 - x^2$.
</p>
<p>
  Dividing $4y = 2\lambda y$ by $y$ would have given only $\lambda = 2$ and lost both points with $y = 0$, including the minimum.
</p>

<h2>Worked example: a sphere</h2>
<p>Find the maximum and minimum values of $f(x, y, z) = 2x - y + 2z$ on the sphere $x^2 + y^2 + z^2 = 36$.</p>
$$2 = 2\lambda x, \qquad -1 = 2\lambda y, \qquad 2 = 2\lambda z, \qquad x^2 + y^2 + z^2 = 36$$
<p>
  $\lambda$ can't be $0$ (the first equation would say $2 = 0$), so solve each equation for its variable:
  $x = \frac{1}{\lambda}$, $y = -\frac{1}{2\lambda}$, $z = \frac{1}{\lambda}$. Substitute into the constraint:
</p>
$$\frac{1}{\lambda^2} + \frac{1}{4\lambda^2} + \frac{1}{\lambda^2} = 36 \;\Rightarrow\; \frac{9}{4\lambda^2} = 36 \;\Rightarrow\; \lambda^2 = \frac{1}{16} \;\Rightarrow\; \lambda = \pm\frac{1}{4}$$
<p>$\lambda = \frac{1}{4}$ gives $(4, -2, 4)$, and $\lambda = -\frac{1}{4}$ gives $(-4, 2, -4)$.</p>
$$f(4, -2, 4) = 8 + 2 + 8 = 18, \qquad f(-4, 2, -4) = -18$$
<p>The maximum is $18$ and the minimum is $-18$. For any linear $f$ on a sphere, the two points are opposite each other, in the direction of $\nabla f$ and against it.</p>

<h2 id="existence" data-toc="When there's no max or min">When there's no maximum or minimum</h2>
<p>
  The method <strong>assumes</strong> the extreme values exist. It finds the candidates, but it can't tell you whether there's anything to
  find. Look at the constraint:
</p>
<ul>
  <li>
    <strong>Closed and bounded constraint</strong> (a circle, an ellipse, a sphere, an ellipsoid): by the
    <a href="?topic=absolute-extrema#extreme-value-theorem">Extreme Value Theorem</a>, a continuous $f$ has both a maximum and a minimum on it.
    The largest candidate is the maximum, and the smallest is the minimum.
  </li>
  <li>
    <strong>Unbounded constraint</strong> (a line, a plane, a hyperbola like $xy = 2$): one or both may not exist. Follow the constraint off
    to infinity and see what $f$ does there.
  </li>
</ul>
<h3>Example: the point of a plane closest to the origin</h3>
<p>Minimize the squared distance $f(x, y, z) = x^2 + y^2 + z^2$ subject to $x + 2y + 2z = 9$.</p>
$$2x = \lambda, \qquad 2y = 2\lambda, \qquad 2z = 2\lambda, \qquad x + 2y + 2z = 9$$
<p>So $x = \frac{\lambda}{2}$, $y = \lambda$, $z = \lambda$. Substitute: $\frac{\lambda}{2} + 2\lambda + 2\lambda = \frac{9\lambda}{2} = 9$, so $\lambda = 2$, and the only candidate is $(1, 2, 2)$ with $f = 9$.</p>
<p>
  <strong>Is it a max or a min?</strong> The plane goes on forever, and points far out on it are far from the origin, so $f$ has
  <strong>no maximum</strong>. A plane does have a closest point, and $(1, 2, 2)$ is the only candidate, so the minimum is $9$. (The
  distance itself is $\sqrt{9} = 3$.)
</p>
<p>
  Minimizing $f = d^2$ instead of the distance $d = \sqrt{x^2 + y^2 + z^2}$ gives the same point, with much simpler derivatives.
</p>

<h3>How to tell which one is missing</h3>
<p>On an unbounded constraint, follow it off to infinity in <strong>every</strong> direction it goes, and see what $f$ does there.</p>
<ol>
  <li>
    <strong>Write the far ends with one variable.</strong> For a line, use a parametrization like $(1 + t,\ 1 - t)$ for $x + y = 2$, and let
    $t \to \infty$ and $t \to -\infty$. For a hyperbola like $xy = 1$, substitute $y = \frac{1}{x}$ and let $x \to \pm\infty$ and $x \to 0$ on each branch.
  </li>
  <li><strong>Read off the result:</strong>
    <ul>
      <li>$f \to +\infty$ at <em>any</em> end: there's <strong>no maximum</strong>.</li>
      <li>$f \to -\infty$ at <em>any</em> end: there's <strong>no minimum</strong>.</li>
      <li>
        $f \to +\infty$ at <em>every</em> end: a minimum exists, and it's the smallest candidate. Likewise, $f \to -\infty$ at every end means
        a maximum exists, and it's the largest candidate.
      </li>
      <li>$f \to +\infty$ at one end and $-\infty$ at another: <strong>neither exists</strong>, even though Lagrange still finds points.</li>
      <li>
        $f$ approaches a <strong>number</strong> $L$: compare $L$ with the candidates. If a candidate beats $L$, that extreme exists. If none
        does, $f$ gets closer and closer to $L$ without reaching it, so that extreme doesn't exist.
      </li>
    </ul>
  </li>
</ol>
<table>
  <thead><tr><th>Problem</th><th>Far out along the constraint</th><th>Conclusion</th></tr></thead>
  <tbody>
    <tr>
      <td>$f = x^2 + y^2$ on $x + y = 2$</td>
      <td>On $(1 + t,\ 1 - t)$, $f = 2 + 2t^2 \to +\infty$ at both ends</td>
      <td>No maximum. Minimum $2$, at the only candidate $(1, 1)$</td>
    </tr>
    <tr>
      <td>$f = 1 - x^2 - y^2$ on $x + y = 2$</td>
      <td>$f = -1 - 2t^2 \to -\infty$ at both ends</td>
      <td>No minimum. Maximum $-1$, at $(1, 1)$</td>
    </tr>
    <tr>
      <td>$f = x + y$ on $xy = 1$</td>
      <td>$f = x + \frac{1}{x}$: $+\infty$ on the right branch, $-\infty$ on the left</td>
      <td>Neither. The candidates $(1, 1)$ and $(-1, -1)$, with $f = 2$ and $-2$, are only the extremes of each branch separately</td>
    </tr>
    <tr>
      <td>$f = e^{-(x^2 + y^2)}$ on $x + y = 2$</td>
      <td>$f = e^{-2 - 2t^2} \to 0$ at both ends, but $f$ is never $0$</td>
      <td>Maximum $e^{-2}$ at $(1, 1)$, which beats $0$. No minimum: $f$ gets close to $0$ but never reaches it</td>
    </tr>
  </tbody>
</table>
<p>
  The third row is the trap. Lagrange multipliers always hand you candidates, and on an unbounded constraint the largest candidate isn't
  automatically the maximum. Check the far ends first.
</p>

<h2 id="inequality" data-toc="Regions with an inequality">Regions with an inequality</h2>
<p>
  To find the extremes of $f$ on a <strong>region</strong> like $x^2 + y^2 \le 4$, combine this page with the
  <a href="?topic=absolute-extrema#recipe">absolute extrema recipe</a>. The region has an inside and a boundary:
</p>
<ol>
  <li><strong>Inside</strong> ($x^2 + y^2 < 4$): critical points of $f$, where $f_x = f_y = 0$. Keep only those inside the region.</li>
  <li><strong>Boundary</strong> ($x^2 + y^2 = 4$): Lagrange multipliers, with the boundary as the constraint.</li>
  <li><strong>Compare</strong> $f$ at all the candidates from both steps.</li>
</ol>
<p>
  For $f(x, y) = x^2 + 2y^2 - 2x$ on $x^2 + y^2 \le 4$: the inside gives $f_x = 2x - 2 = 0$ and $f_y = 4y = 0$, so $(1, 0)$, with $f(1, 0) = -1$.
  The boundary is the circle from the first worked example, with values $0$, $8$, and $9$. So the maximum is $9$ and the minimum is $-1$, inside.
</p>

<h2 id="two-constraints" data-toc="Two constraints">Two constraints</h2>
<p>
  With two constraints $g(x, y, z) = k$ and $h(x, y, z) = c$, the allowed points lie on the <strong>curve</strong> where two surfaces meet, such
  as a plane slicing a cylinder in an ellipse. At an extreme, $\nabla f$ lies in the plane spanned by $\nabla g$ and $\nabla h$, so it gets one
  multiplier for each:
</p>
<div class="formula">
  $$\nabla f = \lambda\, \nabla g + \mu\, \nabla h, \qquad g(x, y, z) = k, \qquad h(x, y, z) = c$$
  <p>That's five equations ($x$, $y$, $z$ components plus both constraints) in five unknowns: $x$, $y$, $z$, $\lambda$, and $\mu$ ("mu").</p>
</div>
<h3>Example</h3>
<p>Find the extreme values of $f(x, y, z) = 3x + y + 3z$ subject to $x^2 + z^2 = 25$ and $y - z = 1$.</p>
<p>Here $\nabla g = \langle 2x, 0, 2z \rangle$ and $\nabla h = \langle 0, 1, -1 \rangle$, so the components give:</p>
$$3 = 2\lambda x, \qquad 1 = \mu, \qquad 3 = 2\lambda z - \mu$$
<p>
  The middle equation gives $\mu = 1$ right away, so the third becomes $2\lambda z = 4$. Then $x = \frac{3}{2\lambda}$ and $z = \frac{2}{\lambda}$.
  Substitute into the cylinder:
</p>
$$\frac{9}{4\lambda^2} + \frac{4}{\lambda^2} = 25 \;\Rightarrow\; \frac{25}{4\lambda^2} = 25 \;\Rightarrow\; \lambda = \pm\frac{1}{2}$$
<p>$\lambda = \frac{1}{2}$: $x = 3$, $z = 4$, and the plane gives $y = 1 + z = 5$. $\lambda = -\frac{1}{2}$: $x = -3$, $z = -4$, $y = -3$.</p>
$$f(3, 5, 4) = 9 + 5 + 12 = 26, \qquad f(-3, -3, -4) = -9 - 3 - 12 = -24$$
<p>The maximum is $26$ and the minimum is $-24$. The curve is an ellipse, which is closed and bounded, so both exist.</p>
<h3>Picturing the example</h3>
<div class="figure-row">
  <figure class="wide-figure">
    ${se}
    <figcaption>
      <strong>Where the allowed points are.</strong> Every point of the cylinder (gray) satisfies the first constraint, $x^2 + z^2 = 25$.
      Every point of the plane (blue) satisfies the second, $y - z = 1$. Only the points on both, the tilted ellipse where they meet (orange),
      satisfy both constraints at once. The question is which point of that ellipse makes $f$ largest or smallest.
    </figcaption>
  </figure>
  <figure>
    ${ue}
    <figcaption>
      <strong>Why those points.</strong> On the plane, $y = 1 + z$, so $f = 3x + 4z + 1$. Looking straight down the cylinder (along the $y$-axis), only $x$ and $z$ show, and the ellipse
      looks like the circle $x^2 + z^2 = 25$. The highest level line that still touches it is $f = 26$, at $x = 3$, $z = 4$, and the lowest is
      $f = -24$: the same tangency as with one constraint.
    </figcaption>
  </figure>
</div>
<p>
  <strong>How $\nabla g$ and $\nabla h$ fit in.</strong> At the maximum $(3, 5, 4)$, $\nabla g = \langle 6, 0, 8 \rangle$ is perpendicular to the
  cylinder and $\nabla h = \langle 0, 1, -1 \rangle$ is perpendicular to the plane, so both are perpendicular to the ellipse that lies in both.
  $\nabla f$ only has to be perpendicular to the ellipse too, so it can be any mix of the two. Here
  $\nabla f = \langle 3, 1, 3 \rangle = \tfrac{1}{2}\langle 6, 0, 8 \rangle + 1\langle 0, 1, -1 \rangle$, which is $\lambda = \tfrac{1}{2}$ and
  $\mu = 1$ from the solution above.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Dividing by a variable.</strong> Canceling $y$ in $4y = 2\lambda y$ loses every point with $y = 0$. Factor and split into cases.</li>
  <li><strong>Forgetting the constraint equation.</strong> $\nabla f = \lambda \nabla g$ alone has too many unknowns. The constraint is always part of the system.</li>
  <li><strong>Dropping a sign.</strong> $x^2 = 4$ gives $x = 2$ and $x = -2$, and each can be a different point with a different value of $f$.</li>
  <li><strong>Reporting $\lambda$ as the answer.</strong> The maximum or minimum is a value of $f$. $\lambda$ is only used to find the points.</li>
  <li><strong>Assuming both extremes exist.</strong> On an unbounded constraint like a plane or $xy = 1$, one of them may not. Check what $f$ does far out along the constraint.</li>
  <li><strong>Skipping the inside of a region.</strong> For $x^2 + y^2 \le 4$, Lagrange handles only the boundary. Critical points inside still count.</li>
</ul>
`,M=(e,t,n=120)=>Array.from({length:n},(r,i)=>[e[0]+t*Math.cos(2*Math.PI*i/n),e[1]+t*Math.sin(2*Math.PI*i/n)]),me=(e,t,n=120)=>Array.from({length:n},(r,i)=>[e*Math.cos(2*Math.PI*i/n),t*Math.sin(2*Math.PI*i/n)]),N=e=>[Math.cos(e),Math.sin(e)],P=`The level curve touches $C$ without crossing it, so $f$ can equal $M$ at the touching point and be smaller than $M$ everywhere else on $C$.`,F=`$C$ crosses the level curve, so on one side of the crossing $f$ is bigger than $M$ somewhere on $C$.`,he=[t=>{let[n,r]=[e([.55,.7],t),e([.5,.65,.8],t)],i=N(t()*2*Math.PI),a=[-i[0]*.45,-i[1]*.45];return{c:M(a,n),closed:!0,level:{kind:`circle`,center:[a[0]+(n+r)*i[0],a[1]+(n+r)*i[1]],r},could:!0,why:`${P} They're tangent there.`}},t=>{let[n,r]=[e([.35,.45],t),e([.85,1],t)],i=N(t()*2*Math.PI);return{c:M([(r-n)*i[0],(r-n)*i[1]],n),closed:!0,level:{kind:`circle`,center:[0,0],r},could:!0,why:`${P} $C$ sits inside, tangent to it.`}},t=>{let[n,r]=[e([.5,.6],t),e([.6,.8],t)],i=N(t()*2*Math.PI),a=Math.abs(r-n)+.45*(n+r-Math.abs(r-n)),o=[-i[0]*.35,-i[1]*.35];return{c:M(o,n),closed:!0,level:{kind:`circle`,center:[o[0]+a*i[0],o[1]+a*i[1]],r},could:!1,why:F}},t=>{let[n,r]=[e([.9,1.1],t),e([.5,.65],t)],i=t()*2*Math.PI,a=[n*Math.cos(i),r*Math.sin(i)];return{c:me(n,r),closed:!0,level:{kind:`line`,p:a,d:[-n*Math.sin(i),r*Math.cos(i)]},could:!0,why:`${P} The line is tangent to $C$ there.`}},t=>{let[n,r]=[e([.9,1.1],t),e([.5,.65],t)],i=[e([-.3,0,.3],t),0];return{c:me(n,r),closed:!0,level:{kind:`line`,p:i,d:N(Math.PI/2+(t()-.5)*1.2)},could:!1,why:F}},t=>{let n=e([.55,.7],t),r=N(t()*2*Math.PI);return{c:M([0,0],n),closed:!0,level:{kind:`line`,p:[r[0]*(n+.3),r[1]*(n+.3)],d:[-r[1],r[0]]},could:!1,why:`The level curve never meets $C$, so $f$ is never equal to $M$ on $C$; $M$ can't be its maximum there.`}},e=>{let t=(e,t,n)=>Array.from({length:60},(r,i)=>[e+Math.cos(t+(n-t)*i/59),Math.sin(t+(n-t)*i/59)]),n=Math.asin(.8);return{c:[...t(-.6,-n,n),...t(.6,Math.PI-n,Math.PI+n)],closed:!0,level:{kind:`line`,p:[0,.8],d:N((e()-.5)*.6)},could:!0,why:`The level curve meets $C$ only at its corner and stays outside it. At a corner Lagrange's condition doesn't apply, so the curves don't need to be tangent: $f$ can be $M$ there and smaller than $M$ on the rest of $C$.`}},t=>{let n=e([.8,1],t);return{c:Array.from({length:81},(e,t)=>{let r=-1+t/40;return[r,n*r**3]}),closed:!1,level:{kind:`line`,p:[0,0],d:[1,0]},could:!1,why:`The line is tangent to $C$, but at an inflection point, where $C$ crosses from one side of it to the other. ${F}`}},t=>{let n=e([.8,1],t),r=e([.65,.75],t);return{c:Array.from({length:81},(e,t)=>{let r=-1+t/40;return[r,n*r**3]}),closed:!1,level:{kind:`line`,p:[r,n*r**3],d:[1,3*n*r*r]},could:!0,why:`${P} The line is tangent to $C$ there.`}}];function I(e,[t,n]){if(e.kind===`circle`)return Math.hypot(t-e.center[0],n-e.center[1])-e.r;let r=Math.hypot(...e.d);return((t-e.p[0])*e.d[1]-(n-e.p[1])*e.d[0])/r}var[L,R]=[180,150];function ge(e){let t=e.c.map(t=>Math.abs(I(e.level,t))),n=e.c.length,r=e.c.filter((r,i)=>{let[a,o]=e.closed?[t[(i-1+n)%n],t[(i+1)%n]]:[t[i-1]??1/0,t[i+1]??1/0];return t[i]<.03&&t[i]<=a&&t[i]<=o});return r.filter((e,t)=>r.slice(0,t).every(t=>Math.hypot(e[0]-t[0],e[1]-t[1])>.15))}function _e(e,t){let n=e.level.kind===`circle`?M(e.level.center,e.level.r,48):[],r=[...e.c,...n],[i,a]=[Math.min(...r.map(e=>e[0])),Math.max(...r.map(e=>e[0]))],[o,s]=[Math.min(...r.map(e=>e[1])),Math.max(...r.map(e=>e[1]))],c=Math.min((L-44)/Math.max(a-i,.8),(R-44)/Math.max(s-o,.8),70),[l,u]=[(i+a)/2,(o+s)/2],d=([e,t])=>[L/2+c*(e-l),R/2-c*(t-u)],f=e=>d(e).map(e=>e.toFixed(1)),p=[e.c.reduce((e,t)=>e+t[0],0)/e.c.length,e.c.reduce((e,t)=>e+t[1],0)/e.c.length],m,h;if(e.level.kind===`circle`){let{center:t,r:n}=e.level,[r,i]=f(t);m=`<circle cx="${r}" cy="${i}" r="${(c*n).toFixed(1)}" fill="none" stroke="var(--highlight)" stroke-width="1.6" />`;let a=[t[0]-p[0],t[1]-p[1]],o=Math.hypot(...a),s=o<.05?[0,1]:[a[0]/o,a[1]/o];h=d([t[0]+n*s[0],t[1]+n*s[1]]),h=[h[0]+14*s[0],h[1]-14*s[1]]}else{let t=Math.hypot(...e.level.d),n=[e.level.d[0]/t,e.level.d[1]/t],r=e.level.p,i=e=>{let[t,i]=d([r[0]+e*n[0],r[1]+e*n[1]]);return t>8&&t<L-8&&i>8&&i<R-8},[a,o]=[0,0];for(;i(a-.02);)a-=.02;for(;i(o+.02);)o+=.02;let[s,c]=[d([r[0]+a*n[0],r[1]+a*n[1]]),d([r[0]+o*n[0],r[1]+o*n[1]])];m=`<line x1="${s[0].toFixed(1)}" y1="${s[1].toFixed(1)}" x2="${c[0].toFixed(1)}" y2="${c[1].toFixed(1)}" stroke="var(--highlight)" stroke-width="1.6" marker-start="url(#lag-arrow)" marker-end="url(#lag-arrow)" />`;let l=[-n[1],n[0]],u=(p[0]-r[0])*l[0]+(p[1]-r[1])*l[1]>0?-1:1,f=Math.abs(o)>Math.abs(a)?c:s;h=[f[0]+14*u*l[0],f[1]-14*u*l[1]]}let g=e.c.reduce((t,n)=>Math.abs(I(e.level,n))>Math.abs(I(e.level,t))?n:t,e.c[0]),_=[g[0]-p[0],g[1]-p[1]],v=Math.hypot(..._)||1,y=d(g),b=[y[0]+12*_[0]/v,y[1]-12*_[1]/v+4],x=([e,t],n)=>[Math.min(Math.max(e,n+2),L-n-2),Math.min(Math.max(t,12),R-4)],[S,C]=x(h,30),[w,T]=x(b,6);return[`<figure><figcaption>${t}</figcaption><svg class="field-diagram" viewBox="0 0 ${L} ${R}" role="img" aria-label="Picture ${t}: a constraint curve C and a level curve f(x, y) = M.">`,`<defs><marker id="lag-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--highlight)" /></marker></defs>`,m,`<polyline points="${[...e.c,...e.closed?[e.c[0]]:[]].map(e=>f(e).join(`,`)).join(` `)}" fill="none" stroke="var(--text)" stroke-width="2" />`,...ge(e).map(e=>`<circle cx="${f(e)[0]}" cy="${f(e)[1]}" r="3" fill="var(--text)" />`),`<text x="${S.toFixed(1)}" y="${C.toFixed(1)}" font-size="11" font-style="italic" text-anchor="middle" fill="var(--highlight)" stroke="var(--surface)" stroke-width="3" paint-order="stroke">f(x, y) = M</text>`,`<text x="${w.toFixed(1)}" y="${T.toFixed(1)}" font-size="13" font-style="italic" font-weight="700" text-anchor="middle" fill="var(--text)" stroke="var(--surface)" stroke-width="3" paint-order="stroke">C</text>`,`</svg></figure>`].join(``)}var z=[`A`,`B`,`C`,`D`,`E`,`F`];function ve(e){let t=a(()=>r(he,e).slice(0,6).map(t=>t(e)),e=>e.filter(e=>e.could).length<2||e.filter(e=>!e.could).length<2),n=z.filter((e,n)=>t[n].could);return{panels:t,problem:{promptHtml:`Each picture shows a constraint curve $C$, given by $g(x, y) = 1$, and a level curve $f(x, y) = M$ of a function $f$ (assume $\\nabla f$ is never zero). Select all and only the pictures in which $M$ could be the maximum value of $f$ subject to $g(x, y) = 1$.`,givenTex:``,figureHtml:`<div class="panel-row">${t.map((e,t)=>_e(e,z[t])).join(``)}</div>`,options:z,correctOptions:n,noneOption:`None of them`,answerTex:String.raw`\text{${n.join(`, `)}}`,wrongAnswerHint:`M can be the max on C only if f reaches M on C and never goes above it there. Does the level curve touch C without crossing it? (At a corner of C, touching is enough; elsewhere it has to be tangent.)`,steps:[{explanation:`Since $\\nabla f \\ne \\mathbf{0}$, $f$ is bigger than $M$ on one side of the level curve and smaller on the other. So $M$ is the maximum on $C$ exactly when $C$ reaches the level curve but never gets to the bigger side: the curves touch without crossing. At a smooth point of $C$ that means they're tangent ($\\nabla f = \\lambda \\nabla g$).`,tex:String.raw`M = \max_C f \iff C \text{ touches } \{f = M\} \text{ without crossing it}`,lessonSection:{id:`why-it-works`,title:`Why the gradients line up`}},...t.map((e,t)=>({explanation:`<strong>${z[t]}:</strong> ${e.why} ${e.could?`Could be the max.`:`Can't be the max.`}`,tex:``}))]}}}var ye=[{build:ve}],B=e=>m(e.map(([e,t])=>g(e,t).f)),V=e=>t=>e.reduce((e,[n,r])=>e+g(n,r).value(t),0),H=(e,t)=>m(e.map(([e,n])=>g(e,n).partial[t]??null)),be=(e,t)=>String.raw`\left\langle ${h.slice(0,t).map(t=>H(e,t)).join(`, `)} \right\rangle`;function xe(e,t){let n=e.flatMap(([e,n])=>{let r=g(e,n).partial[t];return r?[{coef:r.coef,body:r.body===``?String.raw`\lambda`:String.raw`\lambda ${r.body}`}]:[]});return m(n)}var Se=e=>String.raw`\left\{\begin{aligned} ${e.join(String.raw` \\ `)} \end{aligned}\right.`,Ce=e=>String.raw`\left(${e.join(`, `)}\right)`,U=e=>Ce(e.map(l));function we(e){let t=e.den===1?String.raw`\lambda`:String.raw`${e.den}\lambda`;return String.raw`${e.num<0?`-`:``}\frac{${Math.abs(e.num)}}{${t}}`}function Te(e){return e.den===1&&Math.abs(e.num)===1?e.num<0?String.raw`-\lambda`:String.raw`\lambda`:String.raw`${l(e)}\lambda`}function Ee(e,t){let n=[...e];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n}var De=e=>e()<.5?-1:1,W=(e,t)=>[0,1,2].map(n=>n===e?t:0),G=e=>e()<.5?`maximum`:`minimum`,K=(e,t,n=720)=>Array.from({length:n},(r,i)=>{let a=2*Math.PI*i/n;return[e*Math.cos(a),t*Math.sin(a)]}),Oe=e=>Array.from({length:90},(e,t)=>t/89*Math.PI).flatMap(t=>Array.from({length:180},(n,r)=>{let i=2*Math.PI*r/180;return[e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t)]})),q=(e,t)=>Math.abs(e-t)<=1e-7*Math.max(1,Math.abs(t));function J(e){let{goal:t,dimension:n,fPoly:r,constraintTex:i,steps:a,candidates:o}=e,s=o.reduce((e,n)=>(t===`maximum`?u(n.value)>u(e.value):u(n.value)<u(e.value))?n:e),c=n===2?`f(x, y)`:`f(x, y, z)`,d=B(r),f=o.map(e=>String.raw`${e.tex} & ${l(e.value)}`).join(String.raw` \\ `);a.push({explanation:`List every candidate and its value of f.`,tex:String.raw`\begin{array}{c|c} \text{Point} & f \\ \hline ${f} \end{array}`},{explanation:e.existenceNote,tex:String.raw`\text{${t===`maximum`?`Maximum`:`Minimum`}: } ${l(s.value)}`});let p=t===`maximum`?`minimum`:`maximum`;return{problem:{promptHtml:e.region?String.raw`Find the absolute ${t} value of $${c} = ${d}$ on the region $${i}$.`:e.onlyOne?String.raw`Use Lagrange multipliers to find the ${t} value of $${c} = ${d}$ subject to the constraint $${i}$. (Then explain why $f$ has no ${p} value there.)`:String.raw`Use Lagrange multipliers to find the ${t} value of $${c} = ${d}$ subject to the constraint $${i}$.`,givenTex:String.raw`${c} = ${d}, \qquad ${i}`,answerTex:l(s.value),answerValue:u(s.value),steps:a},witness:s.point}}var Y=(e,t)=>`The ${e} is closed and bounded, so by the Extreme Value Theorem f has both a maximum and a minimum on it, and they're among the candidates. The ${t} is the ${t===`maximum`?`largest`:`smallest`} value in the table.`;function X(e,t,n,r){let i=h.slice(0,e);return{explanation:String.raw`Write the constraint as $g = ${r}$ with $g = ${B(n)}$. Then $\nabla f = ${be(t,e)}$ and $\nabla g = ${be(n,e)}$. Setting $\nabla f = \lambda \nabla g$ gives one equation per variable, plus the constraint itself.`,tex:Se([...i.map(e=>`${H(t,e)} &= ${xe(n,e)}`),`${B(n)} &= ${r}`])}}var ke=[[3,4,5],[5,12,13],[6,8,10],[8,15,17]],Ae=[[1,2,2,3],[2,3,6,7],[1,4,8,9],[4,4,7,9],[2,6,9,11]];function je(t,n){let{coefficients:r,length:i,r:a}=o(()=>{let r=e(n===2?ke:Ae,t),i=r[r.length-1];return{coefficients:Ee(r.slice(0,n),t).map(e=>e*De(t)),length:i,r:e([1,2,i],t)}},({coefficients:e,r:t})=>e.join()===`2,2,1`&&t===3||e.join()===`2,-1,2`&&t===6),s=h.slice(0,n),d=r.map((e,t)=>[e,W(t,1)]),f=s.map((e,t)=>[1,W(t,2)]),m=a*a,g=`${B(f)} = ${m}`,_=r.map(e=>e*e),v=p(i,2*a),y=e=>r.map(t=>p(e*t*a,i)),b=[1,-1].map(e=>({tex:U(y(e)),point:y(e).map(u),value:p(e*i*a)})),x=G(t),S=n===2?`circle`:`sphere`,{problem:C,witness:w}=J({goal:x,dimension:n,fPoly:d,constraintTex:g,steps:[X(n,d,f,m),{explanation:String.raw`$\lambda$ can't be $0$: the first equation would say $${r[0]} = 0$. So divide by $\lambda$ and solve each equation for its variable.`,tex:s.map((e,t)=>`${e} = ${we(p(r[t],2))}`).join(String.raw`, \qquad `),technique:c},{explanation:`Substitute these into the constraint, which leaves one equation in λ.`,tex:String.raw`\frac{${_.join(` + `)}}{4\lambda^2} = ${m} \;\Rightarrow\; \lambda^2 = \frac{${_.reduce((e,t)=>e+t)}}{${4*m}} \;\Rightarrow\; \lambda = \pm ${l(v)}`,technique:c},{explanation:String.raw`Each value of $\lambda$ gives one point. They're opposite each other on the ${S}.`,tex:String.raw`\lambda = ${l(v)}: ${b[0].tex}, \qquad \lambda = -${l(v)}: ${b[1].tex}`}],candidates:b,existenceNote:Y(S,x)});return{problem:C,f:V(d),feasible:e=>q(e.reduce((e,t)=>e+t*t,0),m),samples:()=>n===2?K(a,a):Oe(a),witness:w}}var Me={name:`linear f on a circle`,build:e=>je(e,2)},Ne={name:`linear f on a sphere`,build:e=>je(e,3)},Pe={name:`xy on an ellipse`,build(t){let{k:n,m:r,n:i}=o(()=>{let[n,r]=e([[1,1],[1,2],[2,1],[1,3],[3,1],[2,3],[3,2]],t);return{k:e([1,2,3,-1,-2],t),m:n,n:r}},({k:e,m:t,n})=>e===1&&t===1&&n===2),a=i*i,s=r*r,l=2*a*r*r,u=[[n,[1,1,0]]],d=[[a,[2,0,0]],[s,[0,2,0]]],f=B(u),m=B([[a,[2,0,0]]]),h=B([[s,[0,2,0]]]),g=e=>p(e*n*r*i),_=[{tex:String.raw`(${r}, ${i}),\ (-${r}, -${i})`,point:[r,i],value:g(1)},{tex:String.raw`(${r}, -${i}),\ (-${r}, ${i})`,point:[r,-i],value:g(-1)}],v=G(t),y=[X(2,u,d,l),{explanation:String.raw`Multiply the first equation by $x$ and the second by $y$. Both left sides become $${f}$, so the right sides are equal.`,tex:String.raw`${f} = ${2*a}\lambda x^2 \quad\text{and}\quad ${f} = ${2*s}\lambda y^2 \;\Rightarrow\; ${2*a}\lambda x^2 = ${2*s}\lambda y^2`,technique:c},{explanation:String.raw`<strong>Case $\lambda = 0$:</strong> the first two equations give $y = 0$ and $x = 0$, but $(0, 0)$ isn't on the constraint. So $\lambda \ne 0$, and it cancels.`,tex:String.raw`${m} = ${h}`,technique:c},{explanation:String.raw`Replace $${h}$ with $${m}$ in the constraint and solve for $x$, then for $y$. Keep both signs of each.`,tex:String.raw`${2*a}x^2 = ${l} \;\Rightarrow\; x = \pm ${r}, \qquad y^2 = \frac{${a}x^2}{${s}} = ${i*i} \;\Rightarrow\; y = \pm ${i}`}],{problem:b,witness:x}=J({goal:v,dimension:2,fPoly:u,constraintTex:`${B(d)} = ${l}`,steps:y,candidates:_,existenceNote:Y(`ellipse`,v)});return{problem:b,f:V(u),feasible:([e,t])=>q(a*e*e+s*t*t,l),samples:()=>K(Math.sqrt(l/a),Math.sqrt(l/s)),witness:x}}},Fe={name:`x²y on a circle`,build(t){let n=e([1,2,3,-1,-2],t),r=e([1,2],t),a=t()<.5,[o,s]=a?[`y`,`x`]:[`x`,`y`],l=(e,t)=>Ce(a?[t,e]:[e,t]),u=(e,t)=>a?[t,e]:[e,t],d=3*r*r,f=[[n,a?[1,2,0]:[2,1,0]]],h=[[1,[2,0,0]],[1,[0,2,0]]],g=i(r,2),_=i(r,3),v=[{tex:l(`0`,String.raw`\pm ${_}`),point:u(0,r*Math.sqrt(3)),value:p(0)},{tex:l(String.raw`\pm ${g}`,`${r}`),point:u(r*Math.SQRT2,r),value:p(2*n*r**3)},{tex:l(String.raw`\pm ${g}`,`-${r}`),point:u(r*Math.SQRT2,-r),value:p(-2*n*r**3)}],y=G(t),b=m([{coef:n,body:s},{coef:-1,body:String.raw`\lambda`}]),x=m([{coef:n,body:s}]),S=m([{coef:n,body:`${o}^{2}`}]),C=n===1?``:`, cancel $${n}$`,w=[X(2,f,h,d),{explanation:String.raw`Don't divide the $${o}$-equation by $${o}$. Move everything to one side and factor instead: $${o} = 0$ or $\lambda = ${x}$.`,tex:String.raw`2${o}\left(${b}\right) = 0`,technique:c},{explanation:String.raw`<strong>Case $${o} = 0$:</strong> the constraint gives $${s}^2 = ${d}$. Here $f = 0$.`,tex:String.raw`${s} = \pm ${_}`,technique:c},{explanation:String.raw`<strong>Case $\lambda = ${x}$:</strong> substitute into the $${s}$-equation${C}, and use the constraint.`,tex:String.raw`${S} = 2(${x})${s} \;\Rightarrow\; ${o}^2 = 2${s}^2 \;\Rightarrow\; 3${s}^2 = ${d} \;\Rightarrow\; ${s} = \pm ${r},\ ${o} = \pm ${g}`,technique:c}],{problem:T,witness:E}=J({goal:y,dimension:2,fPoly:f,constraintTex:`${B(h)} = ${d}`,steps:w,candidates:v,existenceNote:Y(`circle`,y)}),D=Math.sqrt(d);return{problem:T,f:V(f),feasible:([e,t])=>q(e*e+t*t,d),samples:()=>K(D,D),witness:E}}},Ie=({a:e,b:t,d:n,c:r})=>[[e,[2,0,0]],[t,[0,2,0]],[n,[1,0,0]],[r,[0,0,0]]],Z=[[1,[2,0,0]],[1,[0,2,0]]];function Le(t){return o(()=>{let n=e([2,3],t),r=e([-2,-1,1,2],t),i=e([-3,-2,-1,1,2,3].filter(e=>e!==r),t),a=e([-1,0,1].concat(n===3?[-2,2]:[]),t);return{a:r,b:i,d:2*(i-r)*a,c:e([0,0,1,2,-3],t),r2:n*n}},e=>e.a===1&&e.b===2&&e.d===-2&&e.c===0&&e.r2===4)}function Re(e){let{a:t,b:n,d:r,c:a,r2:o}=e,s=Math.sqrt(o),l=(e,i)=>t*e*e+n*i+r*e+a,u=r/(2*(n-t))+0,d=o-u*u,f=m([{coef:n,body:``},{coef:-1,body:String.raw`\lambda`}]),h=i(1,d),g=[{tex:`(${s}, 0)`,point:[s,0],value:p(l(s,0))},{tex:`(-${s}, 0)`,point:[-s,0],value:p(l(-s,0))},{tex:String.raw`\left(${u}, \pm ${h}\right)`,point:[u,Math.sqrt(d)],value:p(l(u,d))}];return{steps:[{explanation:String.raw`Don't divide the $y$-equation by $y$. Move everything to one side and factor instead: $y = 0$ or $\lambda = ${n}$.`,tex:String.raw`${m([{coef:2*n,body:`y`}])} - 2\lambda y = 2y\left(${f}\right) = 0`,technique:c},{explanation:String.raw`<strong>Case $y = 0$:</strong> the constraint gives $x^2 = ${o}$.`,tex:String.raw`x = \pm ${s}: \quad (${s}, 0),\ (-${s}, 0)`,technique:c},{explanation:String.raw`<strong>Case $\lambda = ${n}$:</strong> the $x$-equation becomes linear. Solve it, then use the constraint for $y$, keeping both signs.`,tex:String.raw`${H(Ie(e),`x`)} = ${m([{coef:2*n,body:`x`}])} \;\Rightarrow\; x = ${u}, \qquad y^2 = ${o} - ${u<0?`(${u})`:u}^2 = ${d} \;\Rightarrow\; y = \pm ${h}`,technique:c}],candidates:g}}var ze={name:`quadratic on a circle`,build(e){let t=Le(e),n=Ie(t),r=Re(t),i=G(e),{problem:a,witness:o}=J({goal:i,dimension:2,fPoly:n,constraintTex:`${B(Z)} = ${t.r2}`,steps:[X(2,n,Z,t.r2),...r.steps],candidates:r.candidates,existenceNote:Y(`circle`,i)}),s=Math.sqrt(t.r2);return{problem:a,f:V(n),feasible:([e,n])=>q(e*e+n*n,t.r2),samples:()=>K(s,s),witness:o}}},Be={name:`quadratic on a disk`,build(e){let t=Le(e),n=Ie(t),r=Re(t),i=p(-t.d,2*t.a),a=U([i,p(0)]),o=u(i)**2<t.r2,c=d(f(p(t.a),f(i,i)),d(f(p(t.d),i),p(t.c))),l={explanation:String.raw`<strong>Inside the disk</strong> ($x^2 + y^2 < ${t.r2}$): find the critical points of $f$. `+(o?String.raw`The point $${a}$ is inside, so it's a candidate.`:String.raw`The point $${a}$ is outside the disk, so it doesn't count.`),tex:String.raw`f_x = ${H(n,`x`)} = 0, \qquad f_y = ${H(n,`y`)} = 0 \quad\Rightarrow\quad ${a}`,technique:s},m={...X(2,n,Z,t.r2),explanation:String.raw`<strong>On the boundary</strong> $x^2 + y^2 = ${t.r2}$, use Lagrange multipliers with $g = x^2 + y^2$: $\nabla f = ${be(n,2)}$ and $\nabla g = \langle 2x, 2y \rangle$.`},h=G(e),g=o?[{tex:a,point:[u(i),0],value:c}]:[],{problem:_,witness:v}=J({goal:h,dimension:2,fPoly:n,constraintTex:String.raw`${B(Z)} \le ${t.r2}`,steps:[l,m,...r.steps],candidates:[...g,...r.candidates],existenceNote:`The disk is closed and bounded, so the absolute ${h} exists, and it's the ${h===`maximum`?`largest`:`smallest`} value from the inside and the boundary together.`,region:!0}),y=Math.sqrt(t.r2),b=()=>Array.from({length:121},(e,t)=>-y+2*y*t/120).flatMap(e=>Array.from({length:121},(t,n)=>[e,-y+2*y*n/120]));return{problem:_,f:V(n),feasible:([e,n])=>e*e+n*n<=t.r2+1e-9,samples:()=>[...b().filter(([e,n])=>e*e+n*n<=t.r2),...K(y,y)],witness:v}}},Ve={name:`xyz on a sphere`,build(t){let n=e([1,2,3,-1,-2],t),r=e([1,2],t),a=3*r*r,o=[[n,[1,1,1]]],s=[[1,[2,0,0]],[1,[0,2,0]],[1,[0,0,2]]],l=B(o),u=i(r,3),d=String.raw`(\pm ${u}, 0, 0),\ (0, \pm ${u}, 0),\ (0, 0, \pm ${u})`,f=[[r,r,r],[r,-r,-r],[-r,r,-r],[-r,-r,r]],m=f.map(e=>e.map(e=>-e)),h=e=>e.map(e=>`(${e.join(`, `)})`).join(String.raw`,\ `),g=[{tex:d,point:[r*Math.sqrt(3),0,0],value:p(0)},{tex:h(f),point:f[0],value:p(n*r**3)},{tex:h(m),point:m[0],value:p(-n*r**3)}],_=G(t),v=[X(3,o,s,a),{explanation:String.raw`Multiply the three equations by $x$, $y$, and $z$. Every left side becomes $${l}$, so the right sides are all equal.`,tex:String.raw`${l} = 2\lambda x^2 = 2\lambda y^2 = 2\lambda z^2`,technique:c},{explanation:String.raw`<strong>Case $\lambda = 0$:</strong> then $yz = xz = xy = 0$, so at least two of $x$, $y$, $z$ are $0$. The constraint gives the third. Here $f = 0$.`,tex:d,technique:c},{explanation:String.raw`<strong>Case $\lambda \ne 0$:</strong> cancel $2\lambda$, so $x^2 = y^2 = z^2$. The constraint becomes $3x^2 = ${a}$. Each coordinate is $\pm ${r}$, giving eight points. Then $f = ${l}$ is $${n*r**3}$ when an even number of the signs are negative, and $${-n*r**3}$ when an odd number are.`,tex:String.raw`x^2 = y^2 = z^2 = ${r*r} \;\Rightarrow\; (\pm ${r}, \pm ${r}, \pm ${r}), \qquad f = ${l} = \pm ${Math.abs(n)*r**3}`,technique:c}],{problem:y,witness:b}=J({goal:_,dimension:3,fPoly:o,constraintTex:`${B(s)} = ${a}`,steps:v,candidates:g,existenceNote:Y(`sphere`,_)});return{problem:y,f:V(o),feasible:e=>q(e.reduce((e,t)=>e+t*t,0),a),samples:()=>Oe(Math.sqrt(a)),witness:b}}};function He(e){let t=[e[1],-e[0],0],n=[e[0]*e[2],e[1]*e[2],-(e[0]*e[0]+e[1]*e[1])],r=e=>e.map(t=>t/Math.hypot(...e));return[r(t),r(n)]}function Q(t,n,r){let{normal:i,d:s}=o(()=>{let r=a(()=>Array.from({length:n},()=>e([-3,-2,-1,1,2,3],t)),e=>e.every(e=>e%2==0)||e.every(e=>e%3==0)),i=r.reduce((e,t)=>e+t*t,0);return{normal:r,d:t()<.5?i*e([1,2,-1],t):e([1,2,3,4,5,6],t)*De(t)}},({normal:e,d:t})=>e.join()===`1,2,2`&&t===9),f=r===`minimum`?1:-1,m=r===`minimum`?0:e([0,4,9,10,20],t),g=h.slice(0,n),_=i.reduce((e,t)=>e+t*t,0),v=[...g.map((e,t)=>[f,W(t,2)]),[m,[0,0,0]]],y=i.map((e,t)=>[e,W(t,1)]),b=p(2*f*s,_),x=i.map(e=>p(e*s,_)),S=n===2?`line`:`plane`,C=f<0?`-`:``,w=[X(n,v,y,s),{explanation:String.raw`Each equation has one variable. Solve each for it in terms of $\lambda$.`,tex:g.map((e,t)=>`${e} = ${Te(p(f*i[t],2))}`).join(String.raw`, \qquad `),technique:c},{explanation:`Substitute into the constraint and solve for λ.`,tex:String.raw`${C}\frac{${i.map(e=>e*e).join(` + `)}}{2}\lambda = ${s} \;\Rightarrow\; ${l(p(f*_,2))}\lambda = ${s} \;\Rightarrow\; \lambda = ${l(b)}`,technique:c},{explanation:`That gives the only point.`,tex:String.raw`${Ce(g)} = ${U(x)}`}],T=r===`minimum`?`The ${S} goes on forever, and its points far away are far from the origin, so f (the squared distance to the origin) grows without limit: there's no maximum. The ${S} does have a closest point to the origin, and this is the only candidate, so it's the minimum.`:`Here f is ${m} minus the squared distance to the origin. The ${S} goes on forever, and its points far away are far from the origin, so f decreases without limit: there's no minimum. f is largest where the ${S} is closest to the origin, and this is the only candidate, so it's the maximum.`,{problem:E,witness:D}=J({goal:r,dimension:n,fPoly:v,constraintTex:`${B(y)} = ${s}`,steps:w,candidates:[{tex:U(x),point:x.map(u),value:d(p(m),p(f*s*s,_))}],existenceNote:T,onlyOne:!0});return{problem:E,f:V(v),feasible:e=>q(e.reduce((e,t,n)=>e+i[n]*t,0),s),samples:()=>{let e=x.map(u),t=n===2?[[-i[1],i[0]]]:He(i),r=Array.from({length:41},(e,t)=>-6+12*t/40);return n===2?r.map(n=>e.map((e,r)=>e+n*t[0][r])):r.flatMap(n=>r.map(r=>e.map((e,i)=>e+n*t[0][i]+r*t[1][i])))},witness:D}}var Ue={name:`distance to a line`,build:e=>Q(e,2,`minimum`)},We={name:`distance to a plane`,build:e=>Q(e,3,`minimum`)},Ge={name:`K minus distance on a line`,build:e=>Q(e,2,`maximum`)},Ke={name:`K minus distance on a plane`,build:e=>Q(e,3,`maximum`)};function qe(t,n){let{c:r,m:i,n:a}=o(()=>{let[n,r]=e([[1,1],[1,2],[2,1],[1,3],[3,1],[2,3]],t);return{c:e([1,2,3],t),m:n,n:r}},({c:e,m:t,n:r})=>n===`minimum`&&e===1&&t===1&&r===1),s=n===`minimum`?1:-1,u=n===`minimum`?0:e([0,10,20,50],t),d=s*r*a*a,f=s*r*i*i,m=i*a,h=[[d,[2,0,0]],[f,[0,2,0]],[u,[0,0,0]]],g=[[1,[1,1,0]]],_=p(a,i),v=_.num===_.den?`x`:String.raw`${l(_)}x`,y=[X(2,h,g,m),{explanation:String.raw`Multiply the first equation by $x$ and the second by $y$. Both right sides become $\lambda xy$, so the left sides are equal.`,tex:String.raw`${2*d}x^2 = \lambda xy = ${2*f}y^2 \;\Rightarrow\; ${B([[a*a,[2,0,0]]])} = ${B([[i*i,[0,2,0]]])}`,technique:c},{explanation:String.raw`So $y = \pm ${v}$. Since $xy = ${m}$ is positive, $x$ and $y$ have the same sign: $y = ${v}$. Substitute into the constraint.`,tex:String.raw`x \cdot ${v} = ${m} \;\Rightarrow\; x^2 = ${i*i} \;\Rightarrow\; x = \pm ${i},\ y = \pm ${a}`,technique:c}],b=n===`minimum`?String.raw`The hyperbola is unbounded. Far out along it, where $x$ is large or close to $0$ (so $y = ${m}/x$ is large), $f$ grows without limit, so there's no maximum. Since $f$ is large at both ends of each branch, it does reach a smallest value, and that can only be at the candidates: it's the minimum.`:String.raw`The hyperbola is unbounded. Far out along it, where $x$ is large or close to $0$ (so $y = ${m}/x$ is large), the squared terms grow without limit, so $f$ decreases without limit: there's no minimum. Since $f$ is very negative at both ends of each branch, it does reach a largest value, and that can only be at the candidates: it's the maximum.`,{problem:x,witness:S}=J({goal:n,dimension:2,fPoly:h,constraintTex:`xy = ${m}`,steps:y,candidates:[{tex:String.raw`(${i}, ${a}),\ (-${i}, -${a})`,point:[i,a],value:p(u+2*s*r*i*i*a*a)}],existenceNote:b,onlyOne:!0});return{problem:x,f:V(h),feasible:([e,t])=>q(e*t,m),samples:()=>Array.from({length:401},(e,t)=>Math.exp(-3+6*t/400)).flatMap(e=>[[e,m/e],[-e,-m/e]]),witness:S}}var Je={name:`on a hyperbola`,build:e=>qe(e,`minimum`)},Ye={name:`peak on a hyperbola`,build:e=>qe(e,`maximum`)},Xe={name:`two constraints`,build(t){let{A:n,C:r,length:i,beta:s,u:h,w:g,k:_,R:v}=o(()=>{let[n,r,i]=e(ke.slice(0,3),t),[o,s]=Ee([n,r],t).map(e=>e*De(t)),[c,l]=a(()=>[e([-1,0,1,2],t),e([-1,0,1,2],t)],([e,t])=>e===0&&t===0);return{A:o,C:s,length:i,beta:e([1,2,-1],t),u:c,w:l,k:e([-2,-1,1,2,3],t),R:e([1,i],t)}},e=>e.A===3&&e.C===4&&e.beta===1&&e.u===0&&e.w===-1&&e.k===1&&e.R===5),y=n+s*h,b=r+s*g,x=[[y,[1,0,0]],[s,[0,1,0]],[b,[0,0,1]]],S=[[1,[2,0,0]],[1,[0,0,2]]],C=[[h,[1,0,0]],[1,[0,1,0]],[g,[0,0,1]]],w=v*v,T=`${B(S)} = ${w}`,E=`${B(C)} = ${_}`,D=p(i,2*v),O=e=>{let t=p(e*n*v,i),a=p(e*r*v,i);return[t,d(p(_),f(p(-1),d(f(p(h),t),f(p(g),a)))),a]},k=e=>e.reduce((e,t,n)=>d(e,f(p([y,s,b][n]),t)),p(0)),ee=[1,-1].map(e=>({tex:U(O(e)),point:O(e).map(u),value:k(O(e))})),A=(e,t)=>t===0?e:`${e} ${t<0?`-`:`+`} ${m([{coef:Math.abs(t),body:String.raw`\mu`}])}`,j=G(t),te=[{explanation:String.raw`Two constraints: $g = ${B(S)} = ${w}$ and $h = ${B(C)} = ${_}$. With $\nabla g = \langle 2x, 0, 2z \rangle$ and $\nabla h = \langle ${h}, 1, ${g} \rangle$, set $\nabla f = \lambda \nabla g + \mu \nabla h$ and add both constraints.`,tex:Se([`${y} &= ${A(String.raw`2\lambda x`,h)}`,String.raw`${s} &= \mu`,`${b} &= ${A(String.raw`2\lambda z`,g)}`,T.replace(`=`,`&=`),E.replace(`=`,`&=`)])},{explanation:String.raw`The $y$-equation gives $\mu = ${s}$ right away. Put it into the other two and solve for $x$ and $z$. ($\lambda \ne 0$, since $2\lambda x = ${n}$.)`,tex:String.raw`2\lambda x = ${n},\quad 2\lambda z = ${r} \;\Rightarrow\; x = ${we(p(n,2))},\quad z = ${we(p(r,2))}`,technique:c},{explanation:String.raw`Substitute into $${T}$ and solve for $\lambda$.`,tex:String.raw`\frac{${n*n} + ${r*r}}{4\lambda^2} = ${w} \;\Rightarrow\; \lambda = \pm ${l(D)}`,technique:c},{explanation:String.raw`Each $\lambda$ gives $x$ and $z$. Then the plane $${E}$ gives $y$.`,tex:String.raw`\lambda = ${l(D)}: y = ${l(O(1)[1])}, \qquad \lambda = -${l(D)}: y = ${l(O(-1)[1])}`}],{problem:ne,witness:re}=J({goal:j,dimension:3,fPoly:x,constraintTex:String.raw`${T},\ ${E}`,steps:te,candidates:ee,existenceNote:`The constraints meet in an ellipse (a plane slicing a cylinder), which is closed and bounded, so both extremes exist. The ${j} is the ${j===`maximum`?`larger`:`smaller`} value.`});return ne.promptHtml=String.raw`Use Lagrange multipliers to find the ${j} value of $f(x, y, z) = ${B(x)}$ subject to both constraints $${T}$ and $${E}$.`,{problem:ne,f:V(x),feasible:([e,t,n])=>q(e*e+n*n,w)&&q(h*e+t+g*n,_),samples:()=>K(v,v).map(([e,t])=>[e,_-h*e-g*t,t]),witness:re}}},$=(t,n,r)=>({id:t,label:n,generate:t=>e(r,t).build(t).problem}),Ze=[$(`two-variables`,`Two variables, one constraint`,[Me,Pe,Fe,ze]),$(`three-variables`,`Three variables, one constraint`,[Ne,Ve]),$(`only-one`,`Only a minimum exists`,[Ue,We,Je]),$(`only-max`,`Maximum but no minimum`,[Ge,Ke,Ye]),$(`region`,`Region with an inequality`,[Be]),$(`two-constraints`,`Two constraints`,[Xe]),t(`picture`,`Could M be the maximum? (pictures)`,ye)];function Qe(t){return e(Ze,t).generate(t)}var $e={...n(`lagrange-multipliers`),lessonHtml:pe,techniques:[c,s],generateProblem:Qe,problemTypes:Ze};export{$e as lagrangeTopic};