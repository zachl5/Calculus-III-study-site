import{d as e,f as t,h as n,m as r,p as i}from"./index-ZzztMt-8.js";import{i as a}from"./techniques-2ghdpz7U.js";import{n as o}from"./contourExtrema-DguqnTgN.js";import{c as s,n as c,s as l}from"./terms-BZIL_b18.js";var u=String.raw`
<h2 id="definitions" data-toc="Local maximum and minimum">Local maximum and minimum</h2>
<p>
  Picture the graph of $f(x, y)$ as a landscape over the $xy$-plane. Hilltops and valley floors are where $f$ is largest or smallest
  <em>compared with nearby points</em>.
</p>
<ul>
  <li>
    $f$ has a <strong>local maximum</strong> at $(a, b)$ if $f(x, y) \le f(a, b)$ for every point $(x, y)$ in some disk centered at $(a, b)$.
    The number $f(a, b)$ is the <strong>local maximum value</strong>.
  </li>
  <li>
    $f$ has a <strong>local minimum</strong> at $(a, b)$ if $f(x, y) \ge f(a, b)$ for every point in some disk centered at $(a, b)$.
    The number $f(a, b)$ is the <strong>local minimum value</strong>.
  </li>
</ul>
<p>
  "Local" means only nearby points are compared. A local maximum can be lower than some far-away point. When the inequality holds for
  <em>every</em> point in the domain, it's an <strong>absolute</strong> maximum or minimum, which is the next page.
</p>
<p>
  <strong>Point vs. value:</strong> the extremum is <em>at</em> the point $(a, b)$; its <em>value</em> is the number $f(a, b)$. Questions asking
  for "the local maximum value" want the number.
</p>

<h2 id="critical-points" data-toc="Critical points">Critical points</h2>
<p>
  At the top of a smooth hill, the surface is flat: the tangent plane is horizontal. That means both slopes, $f_x$ and $f_y$, are zero there.
</p>
<div class="formula">
  <p>
    If $f$ has a local maximum or minimum at $(a, b)$ and its first partial derivatives exist there, then
    $f_x(a, b) = 0$ and $f_y(a, b) = 0$.
  </p>
</div>
<p>
  A point where $f_x = 0$ and $f_y = 0$ (or where a partial derivative doesn't exist) is called a <strong>critical point</strong>.
  Every local extremum of a smooth function is a critical point, so <strong>critical points are the only candidates</strong>.
</p>

<h3>Not every critical point is an extremum</h3>
<p>
  For $f(x, y) = y^2 - x^2$, both partials are $0$ at the origin, yet $f(0, 0) = 0$ is neither a max nor a min: moving along the
  $y$-axis $f$ goes up, and along the $x$-axis it goes down. A critical point like this is a <strong>saddle point</strong>,
  named for the shape of a horse's saddle: a low point in one direction and a high point in another.
</p>

<h3>On a contour map</h3>
<p>
  A local max or min is the center of a ring of closed level curves: the labels increase toward a max and decrease toward a min. A saddle is where two level curves cross in an X (or where curves
  pinch toward each other like an hourglass), with higher labels on two opposite sides and lower labels on the other two. Anywhere a level curve passes smoothly through a point, $\nabla f \ne \mathbf{0}$
  there, so it isn't a critical point.
</p>

<h2 id="second-derivative-test" data-toc="The second derivative test">The second derivative test</h2>
<p>To sort critical points into maxima, minima, and saddle points, use the second partial derivatives. At a critical point $(a, b)$, compute</p>
<div class="formula">
  $$D = f_{xx}(a, b)\,f_{yy}(a, b) - \big[f_{xy}(a, b)\big]^2$$
</div>
<table>
  <thead><tr><th>If…</th><th>then $(a, b)$ is…</th></tr></thead>
  <tbody>
    <tr><td>$D > 0$ and $f_{xx}(a, b) > 0$</td><td>a <strong>local minimum</strong> (curving up, like a bowl)</td></tr>
    <tr><td>$D > 0$ and $f_{xx}(a, b) < 0$</td><td>a <strong>local maximum</strong> (curving down, like a dome)</td></tr>
    <tr><td>$D < 0$</td><td>a <strong>saddle point</strong></td></tr>
    <tr><td>$D = 0$</td><td>the test is <strong>inconclusive</strong>: it could be any of the three</td></tr>
  </tbody>
</table>
<p>
  <strong>Only the signs matter.</strong> The value of $D$, like $24$ or $-5$, is used only for its sign, along with the sign of $f_{xx}$.
  A larger $D$ doesn't mean a "stronger" maximum or minimum, and $D$ is not the extreme value. For that, compute $f(a, b)$.
</p>
<div class="figure-row">
  <figure>
    <canvas class="surface-plot" data-plot="bowl"></canvas>
    <figcaption><strong>Local minimum.</strong> $f = x^2 + y^2$: $D = 4 > 0$ and $f_{xx} = 2 > 0$. A bowl.</figcaption>
  </figure>
  <figure>
    <canvas class="surface-plot" data-plot="dome"></canvas>
    <figcaption><strong>Local maximum.</strong> $f = -x^2 - y^2$: $D = 4 > 0$ and $f_{xx} = -2 < 0$. A dome.</figcaption>
  </figure>
  <figure>
    <canvas class="surface-plot" data-plot="saddle"></canvas>
    <figcaption><strong>Saddle point.</strong> $f = y^2 - x^2$: $D = -4 < 0$. Up along one direction, down along another.</figcaption>
  </figure>
</div>
<p class="plot-hint">Drag a graph (or click it and use the arrow keys) to rotate it. Try viewing the saddle from straight above, then from the side.</p>
<p>
  The test assumes the second partial derivatives are continuous near $(a, b)$, which is true for every polynomial.
  A handy way to remember $D$: it's the determinant
  $\begin{vmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{vmatrix}$.
</p>

<h3>Why it works</h3>
<p>
  Near a critical point, $f$ looks like a quadratic: $f(a + h, b + k) \approx f(a, b) + \tfrac{1}{2}\left(f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2\right)$.
  Completing the square shows this quadratic keeps one sign in every direction exactly when $D > 0$, and that sign is the sign of $f_{xx}$.
  When $D < 0$, it's positive in some directions and negative in others: a saddle.
</p>

<h3>When $D = 0$, anything can happen</h3>
<p>All three of these have $D = 0$ at the origin:</p>
<ul>
  <li>$f = x^4 + y^4$ has a local <strong>minimum</strong> there.</li>
  <li>$f = -x^4 - y^4$ has a local <strong>maximum</strong> there.</li>
  <li>$f = x^4 - y^4$ has <strong>neither</strong>.</li>
</ul>
<p>So "inconclusive" really means the test gives no answer, not that the point is a saddle.</p>

<h3>From a table of values</h3>
<p>
  Exams often give a table of $f$, $f_x$, $f_y$, $f_{xx}$, $f_{yy}$, and $f_{xy}$ at a few points. Check the first partials <em>first</em>: if $f_x$ or $f_y$ isn't $0$, the point is not a critical
  point, whatever the second partials say. Only at a critical point compute $D = f_{xx}f_{yy} - f_{xy}^2$. Watch for a saddle where $f_{xx}$ and $f_{yy}$ have the same sign but $f_{xy}$ is large
  (for example $f_{xx} = 1$, $f_{yy} = 2$, $f_{xy} = 3$ gives $D = -7$), and for $D = 0$, where the table can't tell you what the point is.
</p>

<h2 id="recipe">The recipe</h2>
<ol>
  <li><strong>Find $f_x$ and $f_y$.</strong></li>
  <li><strong>Solve $f_x = 0$ and $f_y = 0$ together</strong> for every critical point. Factor and split into cases; don't divide by a variable.</li>
  <li><strong>Find $f_{xx}$, $f_{yy}$, and $f_{xy}$.</strong></li>
  <li><strong>Compute $D$ at each critical point</strong> and classify it. A table keeps this organized.</li>
  <li><strong>Find the values</strong> $f(a, b)$ if the question asks for them.</li>
</ol>

<!-- tools -->
<h2 id="worked-examples" data-toc="Worked examples">Worked example: a minimum and a saddle</h2>
<p>Find and classify the critical points of $f(x, y) = 2x^3 - 6x + y^2 - 2y$.</p>
$$f_x = 6x^2 - 6 = 6\left(x^2 - 1\right) = 0 \;\Rightarrow\; x = \pm 1, \qquad f_y = 2y - 2 = 0 \;\Rightarrow\; y = 1$$
<p>Critical points: $(1, 1)$ and $(-1, 1)$. Second partials: $f_{xx} = 12x$, $f_{yy} = 2$, $f_{xy} = 0$.</p>
$$\begin{array}{c|c|c|c|l} \text{Point} & f_{xx} & f_{yy} & D & \text{Conclusion} \\ \hline (1, 1) & 12 & 2 & 24 & \text{local minimum, } f(1, 1) = -5 \\ (-1, 1) & -12 & 2 & -24 & \text{saddle point} \end{array}$$
<div class="figure-row">
  <figure class="wide-figure">
    <canvas class="surface-plot" data-plot="workedExample"></canvas>
    <figcaption>
      The graph of $f(x, y) = 2x^3 - 6x + y^2 - 2y$. The valley floor at $(1, 1)$ is the local minimum. At $(-1, 1)$, $f$ rises along the
      $y$-direction but falls along the $x$-direction: the saddle point. The local minimum $-5$ isn't the lowest value of $f$ overall:
      as $x$ becomes very negative, the $2x^3$ term makes $f$ fall without bound. That's the difference between local and absolute.
    </figcaption>
  </figure>
</div>

<h2>Worked example: why you check $D$ first</h2>
<p>Classify the critical point of $f(x, y) = x^2 + 3xy + y^2 - 5x - 5y$.</p>
$$f_x = 2x + 3y - 5 = 0, \qquad f_y = 3x + 2y - 5 = 0$$
<p>Subtracting the equations gives $-x + y = 0$, so $y = x$, and then $5x - 5 = 0$: the critical point is $(1, 1)$.</p>
$$f_{xx} = 2, \quad f_{yy} = 2, \quad f_{xy} = 3, \qquad D = (2)(2) - 3^2 = -5 < 0$$
<p>
  It's a <strong>saddle point</strong>, even though $f_{xx} > 0$. The cross term $3xy$ is strong enough to make $f$ decrease along the line
  $y = -x$ through $(1, 1)$. Only look at the sign of $f_{xx}$ <em>after</em> finding $D > 0$.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Dividing by a variable</strong> while solving $f_x = 0$, $f_y = 0$. It loses the solutions where that variable is $0$.</li>
  <li><strong>Forgetting to square $f_{xy}$</strong>, or using $+$ instead of $-$, in $D = f_{xx}f_{yy} - (f_{xy})^2$.</li>
  <li><strong>Checking $f_{xx}$ before $D$.</strong> The sign of $f_{xx}$ only matters once $D > 0$.</li>
  <li><strong>Reading $D = 0$ as "saddle point."</strong> It means the test can't decide.</li>
  <li><strong>Giving the point instead of the value.</strong> "Local maximum value" is $f(a, b)$, a single number.</li>
  <li><strong>Missing critical points.</strong> Check every case from every factor, and combine every $x$-solution with every matching $y$-solution.</li>
</ul>
`,d=3,f=100,p=44,m=e=>p+e*f,h=e=>p+(d-e)*f;function g(e){let t=([e,t])=>`${e.toFixed(5)},${t.toFixed(5)}`,n=new Map;e.forEach(([e,r],i)=>{for(let a of[e,r])n.set(t(a),[...n.get(t(a))??[],i])});let r=new Set,i=[],a=i=>{for(;;){let a=i[i.length-1],o=(n.get(t(a))??[]).find(e=>!r.has(e));if(o===void 0)return;r.add(o);let[s,c]=e[o];i.push(t(s)===t(a)?c:s)}};return e.forEach(([e,t],n)=>{if(r.has(n))return;r.add(n);let o=[e,t];a(o),o.reverse(),a(o),i.push(o)}),i}function _(e,t){let n=d/90,r=Array.from({length:91},(t,r)=>Array.from({length:91},(t,i)=>e(r*n,i*n))),i=[];for(let e of t){let t=e+1e-7,a=[];for(let e=0;e<90;e++)for(let i=0;i<90;i++){let o=[[e,i,r[e][i]],[e+1,i,r[e+1][i]],[e+1,i+1,r[e+1][i+1]],[e,i+1,r[e][i+1]]],s=[];for(let e=0;e<4;e++){let[r,i]=[o[e],o[(e+1)%4]];if((r[2]-t)*(i[2]-t)<0){let e=(t-r[2])/(i[2]-r[2]);s.push([(r[0]+e*(i[0]-r[0]))*n,(r[1]+e*(i[1]-r[1]))*n])}}for(let e=0;e+1<s.length;e+=2)a.push([s[e],s[e+1]])}for(let t of g(a))t.length>3&&i.push({points:t,level:e})}return i}var v=e=>`M${e.map(([e,t])=>`${m(e).toFixed(1)} ${h(t).toFixed(1)}`).join(`L`)}`;function y(e,t,n){let r=.04,i=[e[0],e[e.length-1]].flatMap(([e,t])=>{let n=[];return t>2.96&&n.push({edge:`top`,at:[m(e),h(d)-8]}),e>2.96&&n.push({edge:`right`,at:[m(d)+14,h(t)+4]}),t<r&&n.push({edge:`bottom`,at:[m(e),h(0)+31]}),e<r&&n.push({edge:`left`,at:[m(0)-34,h(t)+4]}),n});return i.sort((e,n)=>t.indexOf(e.edge)-t.indexOf(n.edge)),i.map(e=>e.at).find(e=>n.every(t=>Math.hypot(t[0]-e[0],t[1]-e[1])>22))??null}function b(e){let t=Array.from({length:31},(t,n)=>Array.from({length:31},(t,r)=>e(n*d/30,r*d/30))).flat(),[n,r]=[Math.min(...t),Math.max(...t)],i=[.5,1,2,3,5,10,15,20].find(e=>(r-n)/e<=8)??30,a=[];for(let e=Math.ceil(n/i)*i;e<=r;e+=i)a.push(Math.round(e*100)/100);return a}function x(e,t){let n=_(e,b(e)),r=_(t,b(t)),i=[],a=[...n.map(e=>({...e,dashed:!1,prefer:[`top`,`right`,`left`,`bottom`]})),...r.map(e=>({...e,dashed:!0,prefer:[`bottom`,`left`,`right`,`top`]}))].flatMap(({points:e,level:t,dashed:n,prefer:r})=>{let a=y(e,r,i);return a?(i.push(a),[{at:a,level:t,dashed:n}]):[]}),o=Array.from({length:7},(e,t)=>t/2).map(e=>`<line x1="${m(e)}" y1="${h(0)}" x2="${m(e)}" y2="${h(d)}" stroke="var(--border)" stroke-width="0.6" /><line x1="${m(0)}" y1="${h(e)}" x2="${m(d)}" y2="${h(e)}" stroke="var(--border)" stroke-width="0.6" /><text x="${m(e)}" y="${h(0)+15}" font-size="11" text-anchor="middle" fill="var(--muted)">${e}</text><text x="${m(0)-6}" y="${h(e)+4}" font-size="11" text-anchor="end" fill="var(--muted)">${e}</text>`).join(``),s=e=>e?`var(--highlight)`:`var(--text)`,c=({at:e,level:t,dashed:n})=>`<text x="${e[0].toFixed(1)}" y="${e[1].toFixed(1)}" font-size="12" ${n?`font-style="italic" `:``}font-weight="700" text-anchor="middle" fill="${s(n)}">${t}</text>`,[l,u]=[408,412];return[`<svg class="field-diagram" viewBox="0 0 ${l} ${u}" role="img" aria-label="Level curves of f_x drawn solid and of f_y drawn dashed in a second color on the square 0 ≤ x, y ≤ 3, each labeled with its value where it leaves the square; dashed labels are in italics.">`,o,...n.map(({points:e})=>`<path d="${v(e)}" fill="none" stroke="${s(!1)}" stroke-width="1.4" />`),...r.map(({points:e})=>`<path d="${v(e)}" fill="none" stroke="${s(!0)}" stroke-width="1.6" stroke-dasharray="7 5" />`),`<rect x="${m(0)}" y="${h(d)}" width="300" height="300" fill="none" stroke="var(--text)" stroke-width="1" />`,...a.map(c),`</svg>`].join(``)}var S=([e,t])=>`(${e}, ${t})`,C=e=>e.map(({point:e,kind:t})=>`${S(e)} is a ${t}`).join(`; `);function w(t){let{h:n,k:a,r:o,lambda:s,s:c,sigma:l}=i(()=>{let n=e([.5,1],t),r=e(n===.5?[1,-1]:[.5,-.5,1,-1],t);return{h:e([1,1.5,2],t),k:e([1,1.5,2],t),r:n,lambda:r,s:e([1,-1],t),sigma:e([1,-1,2,-2],t)}},({h:e,k:t,r:n,lambda:r})=>[e-n,e+n,t-r*n,t+r*n].some(e=>e<.5||e>2.5)),u=(e,t)=>{let[r,i]=[e-n,t-a];return c*(3*r*r-3*o*o)-2*l*s*(i-s*r)},d=(e,t)=>2*l*(t-a-s*(e-n)),f=e=>l*6*c*e<0?`saddle`:l>0?`local min`:`local max`,p=[-o,o].map(e=>({point:[n+e,a+s*e],kind:f(e)})),m=e=>e===`local min`?`local max`:`local min`,h=p.find(e=>e.kind!==`saddle`),g=p.map(({point:e,kind:t})=>({point:[e[0],a],kind:t})),_=[p.map(({point:e,kind:t})=>({point:e,kind:t===`saddle`?h.kind:`saddle`})),p.map(({point:e,kind:t})=>({point:e,kind:t===`saddle`?t:m(t)})),p.map(({point:e})=>({point:e,kind:`saddle`})),p.map(({point:e})=>({point:e,kind:h.kind})),g],v=C(p),y=[...new Set(_.map(C))].filter(e=>e!==v),b=r([v,...r(y,t).slice(0,3)],t),w=e=>6*c*e+2*l*s*s,T=-2*l*s,E=2*l,D=e=>Number.isInteger(e)?`${e}`:e.toFixed(1);return{fx:u,fy:d,points:p,problem:{promptHtml:`The level curves of the partial derivatives $f_x$ (solid lines, upright labels) and $f_y$ (dashed lines, italic labels) of a function $f(x, y)$ are shown. There are exactly two critical points of $f$ in the picture. Find both and classify each one.`,givenTex:``,figureHtml:x(u,d),choices:b,correctChoice:v,wrongChoiceHint:`Critical points are where the f_x = 0 curve crosses the f_y = 0 curve. Then read f_xx from how f_x changes going right, f_yy from how f_y changes going up, and f_xy from how f_x changes going up.`,answerTex:String.raw`\text{${v}}`,steps:[{explanation:`A critical point has $f_x = 0$ and $f_y = 0$, so it's where the solid curve labeled $0$ crosses the dashed curve labeled $0$.`,tex:String.raw`f_x = 0 \text{ and } f_y = 0 \text{ at } ${p.map(e=>S(e.point)).join(` \\text{ and } `)}`,lessonSection:{id:`critical-points`,title:`Critical points`}},{explanation:`Read the second partials from how the labels change near each point: $f_{xx}$ is how fast $f_x$ grows moving right, $f_{yy}$ how fast $f_y$ grows moving up, and $f_{xy}$ how fast $f_x$ grows moving up (the same as $f_y$ moving right). Then use the second derivative test.`,tex:String.raw`D = f_{xx}f_{yy} - f_{xy}^2`,lessonSection:{id:`second-derivative-test`,title:`The second derivative test`}},...p.map(({point:e,kind:t})=>{let r=e[0]-n,i=w(r)*E-T*T;return{explanation:`At $${S(e)}$: ${t===`saddle`?`$D < 0$, so it's a saddle.`:`$D > 0$ and $f_{xx} ${w(r)>0?`> 0`:`< 0`}$, so it's a ${t}.`}`,tex:String.raw`f_{xx} \approx ${D(w(r))},\quad f_{yy} \approx ${D(E)},\quad f_{xy} \approx ${D(T)} \quad\Rightarrow\quad D \approx ${D(i)}`}})]}}}var T=[{build:w}],E=[`Local maximum`,`Local minimum`,`Saddle point`,`Not a critical point`,`Cannot determine`],D=(e,t,n)=>t+Math.floor(e()*(n-t+1)),O=(e,t,n)=>i(()=>D(e,t,n),e=>e===0);function k(t,n){switch(n){case`Local minimum`:case`Local maximum`:{let e=n===`Local minimum`?1:-1;return i(()=>[e*D(t,1,5),e*D(t,1,4),D(t,-3,3)],([e,t,n])=>e*t-n*n<=0)}case`Saddle point`:return e([()=>[D(t,1,4),-D(t,1,4),D(t,-3,3)],()=>{let n=e([1,-1],t),[r,i]=[n*D(t,1,3),n*D(t,1,3)];return[r,i,e([1,-1],t)*(Math.floor(Math.sqrt(r*i))+D(t,1,3))]},()=>[0,D(t,-3,3),O(t,-4,4)]],t)();case`Cannot determine`:return e([()=>[0,D(t,-3,3),0],()=>{let[n,r,i]=[O(t,-2,2),O(t,-2,2),e([1,-1],t)];return[i*n*n,i*r*r,n*r]}],t)()}}function A(t,n,r){let i=D(t,-16,16);if(r===`Not a critical point`){let[a,o,s]=k(t,e([`Local minimum`,`Local maximum`,`Saddle point`],t)),[c,l]=e([[O(t,-5,12),0],[0,O(t,-5,5)],[O(t,-3,3),O(t,-3,3)]],t);return{point:n,f:i,fx:c,fy:l,fxx:a,fyy:o,fxy:s,kind:r}}let[a,o,s]=k(t,r);return{point:n,f:i,fx:0,fy:0,fxx:a,fyy:o,fxy:s,kind:r}}var j=([e,t])=>`(${e}, ${t})`,M=e=>e<0?`(${e})`:`${e}`;function N(t){let n=e(E,t),i=r([[0,0],[1,0],[0,1],[1,1],[-1,0],[0,-1],[2,1],[1,-1],[-2,0],[2,0]],t).slice(0,e([3,4],t)),a=r(E.filter(e=>e!==n),t),o=i.map((e,r)=>A(t,e,r===0?n:a[r-1])),s=o[0];o.sort((e,t)=>e.point[0]-t.point[0]||e.point[1]-t.point[1]);let c=t()<.4,l=c?[`f`,`f_x`,`f_y`,`f_{xx}`,`f_{xy}`,`f_{yy}`]:[`f`,`f_x`,`f_y`,`f_{xx}`,`f_{yy}`,`f_{xy}`],u=e=>c?[e.f,e.fx,e.fy,e.fxx,e.fxy,e.fyy]:[e.f,e.fx,e.fy,e.fxx,e.fyy,e.fxy],d=String.raw`\begin{array}{|c|cccccc|} \hline (x, y) & ${l.join(` & `)} \\ \hline ${o.map(e=>`${j(e.point)} & ${u(e).join(` & `)}`).join(String.raw` \\ `)} \\ \hline \end{array}`,f=s.fxx*s.fyy-s.fxy*s.fxy,p=s.fx===0&&s.fy===0,m=j(s.point),h=p?[{explanation:`At $${m}$, $f_x = 0$ and $f_y = 0$, so it is a critical point.`,tex:String.raw`f_x${m} = 0,\quad f_y${m} = 0`,lessonSection:{id:`critical-points`,title:`Critical points`}},{explanation:`Apply the second derivative test.`,tex:String.raw`D = f_{xx}f_{yy} - f_{xy}^2 = ${M(s.fxx)}${M(s.fyy)} - ${M(s.fxy)}^2 = ${f}`,lessonSection:{id:`second-derivative-test`,title:`The second derivative test`}},{explanation:f>0?`$D > 0$ and $f_{xx} = ${s.fxx} ${s.fxx>0?`>`:`<`} 0$: a local ${s.fxx>0?`minimum`:`maximum`}.`:f<0?`$D < 0$: a saddle point${s.fxx*s.fyy>0?`, even though $f_{xx}$ and $f_{yy}$ have the same sign; $f_{xy}^2$ is bigger than their product`:``}${s.fxx===0?`, even though $f_{xx} = 0$`:``}.`:`$D = 0$: the test is inconclusive, so the table can't tell us what kind of point this is.`,tex:String.raw`\text{${s.kind}}`}]:[{explanation:`At $${m}$, ${s.fx===0?`$f_y = ${s.fy} \\ne 0$`:`$f_x = ${s.fx} \\ne 0$`}, so $\\nabla f \\ne \\mathbf{0}$ and it is not a critical point. The second partials don't matter${s.fxx*s.fyy-s.fxy*s.fxy>0?` (they would give $D > 0$, but the second derivative test only applies at critical points)`:``}.`,tex:String.raw`\nabla f${m} = \langle ${s.fx}, ${s.fy} \rangle \ne \mathbf{0}`,lessonSection:{id:`critical-points`,title:`Critical points`}}];return{rows:o,asked:s,problem:{promptHtml:`Suppose $f(x, y)$ has continuous second partial derivatives, with the values in the table. Which best describes the point $${m}$? ("Cannot determine" means it can't be determined from the table.)`,givenTex:d,choices:E,correctChoice:s.kind,wrongChoiceHint:`First check whether f_x and f_y are both 0. Only then use D = f_xx f_yy − f_xy²: its sign, and if D > 0 the sign of f_xx.`,answerTex:String.raw`\text{${s.kind}}`,steps:h}}}var P=[{build:N}],F=[`Local maximum`,`Local minimum`,`Saddle point`,`Test is inconclusive`],I=(t,n)=>e(Array.from({length:2*n},(e,t)=>t<n?t+1:n-t-1),t),L=(e,t,n)=>l(e,[t,n,0]),R=e=>(t,n)=>e.reduce((e,r)=>e+r.value([t,n,0]),0);function z(e,t,n,[r,i]){let a=.001,o=(e,t)=>e===`x`?[t,0]:[0,t],s=(a,s)=>{let[c,l]=o(t,a),[u,d]=o(n,s);return e(r+c+u,i+l+d)};return Math.round((s(a,a)-s(a,-.001)-s(-.001,a)+s(-.001,-.001))/(4*a*a))}function B(e,t){return t>0?e>0?`Local minimum`:`Local maximum`:t<0?`Saddle point`:`Test is inconclusive`}var V=([e,t])=>`(${e}, ${t})`,H=e=>e<0?`(${e})`:`${e}`;function U(t,n,r={}){let i=r.inconclusiveOnly??!1,{terms:a,solvingSteps:o,points:l}=n,u=R(a),d=s(a.map(e=>e.f)),f=e=>s(a.map(t=>t.partial[e]??null)),p=(e,t)=>s(a.map(n=>n.mixed(e,t))),m=l.map(e=>{let t=z(u,`x`,`x`,e),n=z(u,`y`,`y`,e),r=z(u,`x`,`y`,e),i=t*n-r*r;return{point:e,fxx:t,fyy:n,fxy:r,d:i,classification:B(t,i)}}),h=m.map(e=>String.raw`${V(e.point)} & ${e.fxx} & ${e.fyy} & ${e.fxy} & ${H(e.fxx)}${H(e.fyy)} - ${H(e.fxy)}^2 = ${e.d} & \text{${e.classification}}`).join(String.raw` \\ `),g=[{explanation:String.raw`Find both first partial derivatives. Treat $y$ as a constant for $f_x$, and $x$ as a constant for $f_y$.`,tex:String.raw`f_x = ${f(`x`)}, \qquad f_y = ${f(`y`)}`},...o,{explanation:String.raw`Find the second partial derivatives for the second derivative test.`,tex:String.raw`f_{xx} = ${p(`x`,`x`)}, \qquad f_{yy} = ${p(`y`,`y`)}, \qquad f_{xy} = ${p(`x`,`y`)}`},{explanation:String.raw`Compute $D = f_{xx}f_{yy} - (f_{xy})^2$ at each critical point. $D > 0$ with $f_{xx} > 0$ is a local minimum, $D > 0$ with $f_{xx} < 0$ a local maximum, $D < 0$ a saddle point, and $D = 0$ means the test can't decide.`,tex:String.raw`\begin{array}{c|c|c|c|c|l} \text{Point} & f_{xx} & f_{yy} & f_{xy} & D & \text{Conclusion} \\ \hline ${h} \end{array}`}],_=String.raw`Let $f(x, y) = ${d}$.`,v=m.filter(e=>e.classification===`Local maximum`),y=m.filter(e=>e.classification===`Local minimum`),b=m.filter(e=>e.classification===`Saddle point`),x=i?[`classify`]:[`classify`,`classify`,...v.length===1?[`max`]:[],...y.length===1?[`min`]:[],...l.length>1?[`saddles`]:[]],S=x.filter(e=>r.question===`value`?e===`max`||e===`min`:r.question===void 0||e===r.question),C=e(S.length>0?S:x,t),w=m.map(e=>({point:e.point,classification:e.classification}));if(C===`classify`){let n=e(m,t);return g.push({explanation:String.raw`Read off the conclusion for $${V(n.point)}$.${n.classification===`Test is inconclusive`?` With D = 0, the test gives no information; other methods would be needed to decide.`:``}`,tex:String.raw`${V(n.point)}:\ \text{${n.classification}}`}),{problem:{promptHtml:String.raw`${_} ${l.length>1?`One of its critical points is $${V(n.point)}$.`:`Its only critical point is $${V(n.point)}$.`} What does the second derivative test say about it?`,givenTex:String.raw`f(x, y) = ${d}`,answerTex:String.raw`\text{${n.classification}}`,choices:F,correctChoice:n.classification,steps:g},f:u,criticalPoints:w}}if(C===`saddles`)return g.push({explanation:`Count the saddle points in the table.`,tex:String.raw`\text{Saddle points: } ${b.length===0?String.raw`\text{none}`:b.map(e=>V(e.point)).join(`, `)}`}),{problem:{promptHtml:String.raw`${_} How many saddle points does $f$ have?`,givenTex:String.raw`f(x, y) = ${d}`,answerTex:`${b.length}`,answerValue:b.length,rounding:{decimals:0},inputHint:`Type a whole number.`,steps:g},f:u,criticalPoints:w};let T=C===`max`?v[0]:y[0],E=C===`max`?`maximum`:`minimum`,D=c(a,[T.point[0],T.point[1],0]);return g.push({explanation:String.raw`The local ${E} is at $${V(T.point)}$. Its value is $f$ there, not the point itself.`,tex:String.raw`f${V(T.point)} = ${D.substitutedTex} = ${D.exact.constant}`}),{problem:{promptHtml:String.raw`${_} Find the local ${E} value of $f$.`,givenTex:String.raw`f(x, y) = ${d}`,answerTex:`${D.exact.constant}`,answerValue:D.exact.constant,steps:g},f:u,criticalPoints:w}}var W={name:`separate x and y parts`,build(t,n){let r=e([1,-1],t),i=e([1,2],t),o=e([1,-1],t),s=t()<.4,c=e([-2,-1,0,1,2],t),l=e([1,2],t),u=[L(r,3,0),L(-3*i*i*r,1,0)];s?u.push(L(o,0,3),L(-3*l*l*o,0,1)):(u.push(L(o,0,2)),c!==0&&u.push(L(-2*c*o,0,1)));let d=[i,-i],f=s?[l,-l]:[c],p=d.flatMap(e=>f.map(t=>[e,t])),m=String.raw`${r===1?``:`-`}3\left(x^2 - ${i*i}\right)`,h=s?String.raw`${o===1?``:`-`}3\left(y^2 - ${l*l}\right)`:`${o===1?``:`-`}2${c===0?`y`:String.raw`\left(y ${c<0?`+`:`-`} ${Math.abs(c)}\right)`}`;return U(t,{terms:u,solvingSteps:[{explanation:String.raw`Set both partial derivatives to $0$. Here each one involves only one variable, so they can be solved separately. Factor each.`,tex:String.raw`f_x = ${m} = 0 \;\Rightarrow\; x = \pm ${i}, \qquad f_y = ${h} = 0 \;\Rightarrow\; y = ${s?String.raw`\pm ${l}`:c}`,technique:a},{explanation:String.raw`Every combination of an $x$-value with a $y$-value is a critical point.`,tex:p.map(V).join(`, `)}],points:p},{question:n})}},G=[W,W,{name:`cubic with a cross term`,build(t,n){let r=e([2,3],t),i=e([1,-1],t);return U(t,{terms:[L(i,3,0),L(i,0,3),L(-3*r*i,1,1)],solvingSteps:[{explanation:String.raw`Set both partial derivatives to $0$ and divide out the common factor $${i===1?3:-3}$ (a number, which is safe to divide by).`,tex:String.raw`x^2 - ${r}y = 0, \qquad y^2 - ${r}x = 0`},{explanation:String.raw`Solve the first for $y$ and substitute into the second. Then factor out $x$ instead of dividing by it, so the case $x = 0$ isn't lost.`,tex:String.raw`y = \frac{x^2}{${r}} \;\Rightarrow\; \frac{x^4}{${r*r}} - ${r}x = 0 \;\Rightarrow\; x\left(x^3 - ${r**3}\right) = 0 \;\Rightarrow\; x = 0 \text{ or } x = ${r}`,technique:a},{explanation:String.raw`Find $y = \frac{x^2}{${r}}$ for each $x$.`,tex:String.raw`x = 0 \Rightarrow y = 0, \qquad x = ${r} \Rightarrow y = \frac{${r*r}}{${r}} = ${r} \qquad\text{Critical points: } (0, 0),\ (${r}, ${r})`}],points:[[0,0],[r,r]]},{question:n})}},{name:`quadratic`,build(t,n){let{a:r,b:o,c,x0:l,y0:u}=i(()=>({a:I(t,3),b:e([-4,-3,-2,-1,1,2,3,4],t),c:I(t,3),x0:e([-2,-1,0,1,2],t),y0:e([-2,-1,0,1,2],t)}),e=>4*e.a*e.c-e.b*e.b==0||e.a===1&&e.b===3&&e.c===1&&e.x0===1&&e.y0===1),d=-(2*r*l+o*u),f=-(o*l+2*c*u),p=[L(r,2,0),L(o,1,1),L(c,0,2),...d===0?[]:[L(d,1,0)],...f===0?[]:[L(f,0,1)]],m=s([{coef:2*r,body:`x`},{coef:o,body:`y`},{coef:d,body:``}]),h=s([{coef:o,body:`x`},{coef:2*c,body:`y`},{coef:f,body:``}]);return U(t,{terms:p,solvingSteps:[{explanation:String.raw`Set both partial derivatives to $0$. For a quadratic, these are two linear equations, with one solution.`,tex:String.raw`${m} = 0, \qquad ${h} = 0`,technique:a},{explanation:String.raw`Solve the system by substitution or elimination. Check the answer in both equations: $${2*r}(${l}) + ${H(o)}(${u}) + ${H(d)} = 0$ and $${o}(${l}) + ${H(2*c)}(${u}) + ${H(f)} = 0$.`,tex:String.raw`\text{Critical point: } ${V([l,u])}`}],points:[[l,u]]},{question:n})}},{name:`inconclusive test`,build(e,t){let n=I(e,3),r=I(e,3);return U(e,{terms:[L(n,4,0),L(r,0,2)],solvingSteps:[{explanation:`Set both partial derivatives to 0. Each involves one variable.`,tex:String.raw`${4*n}x^3 = 0 \;\Rightarrow\; x = 0, \qquad ${2*r}y = 0 \;\Rightarrow\; y = 0 \qquad\text{Critical point: } (0, 0)`,technique:a}],points:[[0,0]]},{inconclusiveOnly:!0,question:t})}}];function K(t){return e(G,t).build(t).problem}function q(t,n,r){return{id:t,label:n,generate:n=>i(()=>e(G,n).build(n,t).problem,e=>!r(e))}}var J=[q(`classify`,`Classify a critical point`,e=>e.choices!==void 0),q(`value`,`Find a local max or min value`,e=>e.promptHtml.includes(` value of`)),q(`saddles`,`Count saddle points`,e=>e.promptHtml.includes(`saddle points does`)),t(`table`,`Classify from a table of partials`,P),t(`contour`,`Critical points from a contour map`,o),t(`partial-curves`,`Critical points from level curves of f_x and f_y`,T)],Y={...n(`local-extrema`),lessonHtml:u,techniques:[a],generateProblem:K,problemTypes:J,plots:{bowl:{label:`Graph of f = x squared plus y squared: a bowl with its lowest point, the local minimum, at the origin.`,f:(e,t)=>e*e+t*t,xRange:[-2,2],yRange:[-2,2],points:[{x:0,y:0,label:`min`}]},dome:{label:`Graph of f = negative x squared minus y squared: a dome with its highest point, the local maximum, at the origin.`,f:(e,t)=>-e*e-t*t,xRange:[-2,2],yRange:[-2,2],points:[{x:0,y:0,label:`max`}]},saddle:{label:`Graph of f = y squared minus x squared: a saddle that rises along the y-axis and falls along the x-axis, with a saddle point at the origin.`,f:(e,t)=>t*t-e*e,xRange:[-2,2],yRange:[-2,2],points:[{x:0,y:0,label:`saddle`}]},workedExample:{label:`Graph of f = 2x cubed minus 6x plus y squared minus 2y, with a local minimum at (1, 1) and a saddle point at (-1, 1).`,f:(e,t)=>2*e**3-6*e+t*t-2*t,xRange:[-2,2],yRange:[-1,3],points:[{x:1,y:1,label:`local min (1, 1)`},{x:-1,y:1,label:`saddle (-1, 1)`}]}}};export{Y as localExtremaTopic};