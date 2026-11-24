import{d as e,h as t,m as n,u as r}from"./index-BX9zVO2G.js";import{i,n as a}from"./techniques-2ghdpz7U.js";import{t as o}from"./contourExtrema-TPoEjLfL.js";import{a as s,d as c,f as l,i as u,l as d,n as f,o as p,p as m,s as h,t as g,u as _}from"./polynomial-D7OtKEoC.js";import{c as v,s as y}from"./terms-BZIL_b18.js";var b=String.raw`
<h2 id="definitions" data-toc="Absolute maximum and minimum">Absolute maximum and minimum</h2>
<p>
  The <a href="?topic=local-extrema">local</a> maximum and minimum compare $f$ with nearby points only. The <strong>absolute</strong> versions
  compare it with <em>every</em> point of a region $D$:
</p>
<ul>
  <li>$f$ has an <strong>absolute maximum</strong> on $D$ at $(a, b)$ if $f(x, y) \le f(a, b)$ for every $(x, y)$ in $D$.</li>
  <li>$f$ has an <strong>absolute minimum</strong> on $D$ at $(a, b)$ if $f(x, y) \ge f(a, b)$ for every $(x, y)$ in $D$.</li>
</ul>
<p>
  The numbers $f(a, b)$ are the absolute maximum and minimum <strong>values</strong>. An absolute extremum can be at a point inside $D$, where it's also
  a local one, or on the <strong>edge</strong> of $D$, where the derivative test from the previous page doesn't apply at all.
</p>

<h2 id="extreme-value-theorem" data-toc="The Extreme Value Theorem">The Extreme Value Theorem</h2>
<div class="formula">
  <p>
    If $f$ is <strong>continuous</strong> on a <strong>closed</strong>, <strong>bounded</strong> set $D$, then $f$ has an absolute maximum value and an
    absolute minimum value on $D$, each attained at some point of $D$.
  </p>
</div>
<ul>
  <li><strong>Closed</strong> means $D$ contains all of its boundary points (see <a href="?topic=conservative-fields#the-test">open and closed regions</a>). Inequalities like $\le$ and $\ge$ usually signal a closed set.</li>
  <li><strong>Bounded</strong> means $D$ fits inside some disk: it doesn't go off to infinity.</li>
</ul>
<p>Both conditions matter. Without them, there may be no absolute maximum or minimum:</p>
<ul>
  <li><strong>Not closed:</strong> on the open disk $x^2 + y^2 < 1$, $f = x^2 + y^2$ gets closer and closer to $1$ but never reaches it. No maximum.</li>
  <li><strong>Not bounded:</strong> on the whole plane, $f = x + y$ grows without limit. No maximum and no minimum.</li>
</ul>

<p>
  <strong>What the theorem does and doesn't say.</strong> On a set that isn't closed or isn't bounded, a continuous function <em>might or might not</em> have an absolute max: a constant function always does,
  so "must not" is never right. And the theorem pins down where the extremes are: each is on the boundary or at a critical point inside. For example, if $f = 20$ on the circle $x^2 + y^2 = 100$,
  $f(0, 0) = 5$, and $f$ has just one critical point $(1, 2)$, then the absolute minimum (at most $5$) isn't on the circle, so it's at $(1, 2)$, and $f(1, 2) < 5$ since $(0, 0)$ isn't critical.
</p>
<p>
  <strong>Estimating from a contour map.</strong> On a closed rectangle $D$ the absolute max and min exist, so "DNE" is never the answer. Find the highest level curve drawn: if the labels go up to $5$ and the
  level $6$ never appears, the absolute maximum is between $5$ and $6$, about $5.5$. It may be at a local max (inside a ring of curves) or on the edge of $D$, where the labels keep increasing to the boundary.
  The absolute minimum works the same way with the lowest level.
</p>

<h2 id="recipe">The recipe</h2>
<p>For a continuous $f$ on a closed, bounded set $D$:</p>
<ol>
  <li><strong>Inside $D$:</strong> find the critical points ($f_x = 0$ and $f_y = 0$). Keep only those that lie inside $D$, and find $f$ at each.</li>
  <li><strong>On the boundary:</strong> find the largest and smallest values of $f$ on each piece of the boundary of $D$.</li>
  <li><strong>Compare:</strong> the largest value from steps 1 and 2 is the absolute maximum; the smallest is the absolute minimum.</li>
</ol>
<p>
  <strong>No second derivative test needed.</strong> You don't have to classify the critical points. Just evaluate $f$ at every candidate and compare
  the numbers.
</p>

<h3 id="boundary">Handling the boundary</h3>
<p>Each piece of the boundary turns $f$ into a function of one variable. Then it's a single-variable problem on an interval.</p>
<table>
  <thead><tr><th>Boundary piece</th><th>How to reduce it</th><th>Candidates</th></tr></thead>
  <tbody>
    <tr>
      <td>Vertical edge $x = c$, $y_0 \le y \le y_1$</td>
      <td>Plug in $x = c$: a function of $y$</td>
      <td>Where its derivative is $0$ inside $[y_0, y_1]$, plus both ends</td>
    </tr>
    <tr>
      <td>Horizontal edge $y = c$</td>
      <td>Plug in $y = c$: a function of $x$</td>
      <td>Same, on the $x$-interval</td>
    </tr>
    <tr>
      <td>Slanted edge (like a triangle's)</td>
      <td>Write the line as $y = mx + b$ and substitute: a function of $x$</td>
      <td>Same, on the edge's $x$-interval</td>
    </tr>
    <tr>
      <td>Circle $x^2 + y^2 = R^2$</td>
      <td>Substitute $y^2 = R^2 - x^2$ when $f$ has only $y^2$; otherwise use $x = R\cos t$, $y = R\sin t$</td>
      <td>Where the derivative is $0$, plus the ends ($x = \pm R$, or $t = 0$ and $2\pi$)</td>
    </tr>
  </tbody>
</table>
<p>
  <strong>Corners count.</strong> The ends of each edge are the corners of $D$, and they're often where the maximum or minimum is. On a polygon,
  every corner must be in your candidate list.
</p>
<p>
  For a curved boundary where substitution gets messy, the <strong>Lagrange multiplier</strong> method on the next page finds the extremes along a
  constraint curve directly.
</p>

<!-- tools -->
<h2 id="worked-examples" data-toc="Worked examples">Worked example: a rectangle</h2>
<p>Find the absolute maximum and minimum of $f(x, y) = x^2 - 2x + y^2 - 4y$ on $D = \{(x, y) \mid 0 \le x \le 3,\ 0 \le y \le 3\}$.</p>
<p><strong>Inside:</strong> $f_x = 2x - 2 = 0$ and $f_y = 2y - 4 = 0$ give $(1, 2)$, which is inside $D$: $f(1, 2) = -5$.</p>
<p><strong>Boundary,</strong> one edge at a time:</p>
<ul>
  <li>$x = 0$: $g(y) = y^2 - 4y$ on $[0, 3]$. $g' = 2y - 4 = 0$ at $y = 2$. Values: $f(0, 0) = 0$, $f(0, 2) = -4$, $f(0, 3) = -3$.</li>
  <li>$x = 3$: $g(y) = 3 + y^2 - 4y$. $g' = 0$ at $y = 2$. Values: $f(3, 0) = 3$, $f(3, 2) = -1$, $f(3, 3) = 0$.</li>
  <li>$y = 0$: $g(x) = x^2 - 2x$ on $[0, 3]$. $g' = 0$ at $x = 1$: $f(1, 0) = -1$. (The corners are already listed.)</li>
  <li>$y = 3$: $g(x) = x^2 - 2x - 3$. $g' = 0$ at $x = 1$: $f(1, 3) = -4$.</li>
</ul>
<p>
  <strong>Compare:</strong> the largest value is $f(3, 0) = 3$, at a corner, and the smallest is $f(1, 2) = -5$, inside.
  Absolute maximum $3$, absolute minimum $-5$.
</p>
<div class="figure-row">
  <figure class="wide-figure">
    <canvas class="surface-plot" data-plot="rectangleExample"></canvas>
    <figcaption>
      The graph of $f$ over the rectangle. The absolute minimum is the bottom of the valley at $(1, 2)$. The absolute maximum is at the corner
      $(3, 0)$, on the edge, where $f$ isn't flat at all. Drag to rotate.
    </figcaption>
  </figure>
</div>

<h2>Worked example: a disk</h2>
<p>Find the absolute maximum and minimum of $f(x, y) = x^2 + 2y^2 - 2x$ on $D = \{(x, y) \mid x^2 + y^2 \le 4\}$.</p>
<p><strong>Inside:</strong> $f_x = 2x - 2 = 0$ and $f_y = 4y = 0$ give $(1, 0)$, inside $D$: $f(1, 0) = -1$.</p>
<p>
  <strong>Boundary:</strong> on the circle, $y^2 = 4 - x^2$, so $f$ becomes
  $g(x) = x^2 + 2(4 - x^2) - 2x = -x^2 - 2x + 8$ for $-2 \le x \le 2$.
</p>
$$g'(x) = -2x - 2 = 0 \;\Rightarrow\; x = -1, \qquad y = \pm\sqrt{4 - 1} = \pm\sqrt{3}$$
$$g(-1) = 9, \qquad g(-2) = 8 \text{ at } (-2, 0), \qquad g(2) = 0 \text{ at } (2, 0)$$
<p>
  <strong>Compare:</strong> the largest value is $9$, at the two points $(-1, \pm\sqrt{3})$ on the circle. The smallest is $-1$, at $(1, 0)$ inside.
</p>
<div class="formula">
  <p><strong>$g(x)$ vs. $f(x, y)$:</strong> $g(x)$ is $f$ <em>restricted to the circle</em>. It has $y^2 = R^2 - x^2$ built in, so it's only valid for points <strong>on the circle</strong>.</p>
  <ul>
    <li><strong>On the circle:</strong> plugging an $x$-value into $g$ gives the value of $f$ at both points $\left(x, \pm\sqrt{R^2 - x^2}\right)$. Then find $y$ from $y = \pm\sqrt{R^2 - x^2}$ to name the points.</li>
    <li><strong>Inside the disk:</strong> use $f(x, y)$ itself, never $g$. The interior critical point $(1, 0)$ goes into $f$: $f(1, 0) = -1$. Plugging $x = 1$ into $g$ would give $g(1) = 5$, the value at the circle points $(1, \pm\sqrt{3})$ instead.</li>
    <li><strong>Check:</strong> $f(-1, \sqrt{3}) = 1 + 6 + 2 = 9$ matches $g(-1) = 9$, as it should for a point on the circle.</li>
  </ul>
</div>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Skipping the boundary.</strong> Setting $f_x = f_y = 0$ only finds interior candidates. The answer is often on the edge, where the partials aren't $0$.</li>
  <li><strong>Forgetting corners.</strong> Every edge's endpoints are candidates. Many absolute extrema are at corners.</li>
  <li><strong>Keeping critical points outside $D$.</strong> A critical point that isn't in $D$ doesn't count, however nice its value.</li>
  <li><strong>Using the second derivative test.</strong> It's not needed here, and it can't find boundary extrema. Compare values instead.</li>
  <li><strong>Missing a point on a circle.</strong> Each $x$-value inside $(-R, R)$ gives two points, $y = \pm\sqrt{R^2 - x^2}$.</li>
  <li><strong>Applying the theorem to the wrong kind of set.</strong> If $D$ isn't closed and bounded, there may be no absolute maximum or minimum at all.</li>
</ul>
`,x=e=>e*e;function S(t){let[n,r,i,a]=[e([1,2,3],t),e([2,3],t),e([1,2,3],t),e([1,2,4],t)],[o,s]=[e([2,4],t),e([4,5,8],t)],c=n+r,l=(e,t)=>e*e+t*t;return[{tex:String.raw`x^2 + y^2 \le ${x(c)}`,closed:!0,bounded:!0,why:`a disk with its boundary circle`,inside:(e,t)=>l(e,t)<=x(c)},{tex:String.raw`x^2 + y^2 < ${x(c)}`,closed:!1,bounded:!0,why:`the boundary circle is missing`,inside:(e,t)=>l(e,t)<x(c)},{tex:String.raw`${x(n)} < x^2 + y^2 \le ${x(c)}`,closed:!1,bounded:!0,why:`the inner circle is missing`,inside:(e,t)=>x(n)<l(e,t)&&l(e,t)<=x(c)},{tex:String.raw`${x(n)} \le x^2 + y^2 \le ${x(c)}`,closed:!0,bounded:!0,why:`a ring with both boundary circles`,inside:(e,t)=>x(n)<=l(e,t)&&l(e,t)<=x(c)},{tex:String.raw`x^2 + y^2 = ${x(c)}`,closed:!0,bounded:!0,why:`a circle: it is its own boundary`,inside:(e,t)=>l(e,t)===x(c)},{tex:String.raw`x^2 + y^2 \ge ${x(n)}`,closed:!0,bounded:!1,why:`it goes off to infinity`,inside:(e,t)=>l(e,t)>=x(n)},{tex:String.raw`y \ge 0`,closed:!0,bounded:!1,why:`a half-plane goes off to infinity`,inside:(e,t)=>t>=0},{tex:String.raw`0 \le x \le ${i},\ 0 \le y \le ${a}`,closed:!0,bounded:!0,why:`a rectangle with its edges`,inside:(e,t)=>e>=0&&e<=i&&t>=0&&t<=a},{tex:String.raw`0 \le x \le ${i},\ y \ge 0`,closed:!0,bounded:!1,why:`a strip that goes up forever`,inside:(e,t)=>e>=0&&e<=i&&t>=0},{tex:String.raw`0 < x < ${i},\ 0 \le y \le ${a}`,closed:!1,bounded:!0,why:`the left and right edges are missing`,inside:(e,t)=>e>0&&e<i&&t>=0&&t<=a},{tex:String.raw`x^2 + ${o}y^2 \le ${s}`,closed:!0,bounded:!0,why:`an ellipse with its boundary`,inside:(e,t)=>e*e+o*t*t<=s},{tex:String.raw`x^2 + ${o}y^2 < ${s}`,closed:!1,bounded:!0,why:`the boundary ellipse is missing`,inside:(e,t)=>e*e+o*t*t<s},{tex:String.raw`x \ge 0,\ y \ge 0,\ x + y \le ${a}`,closed:!0,bounded:!0,why:`a triangle with its edges`,inside:(e,t)=>e>=0&&t>=0&&e+t<=a},{tex:String.raw`x > 0,\ y > 0,\ x + y \le ${a}`,closed:!1,bounded:!0,why:`two edges of the triangle are missing`,inside:(e,t)=>e>0&&t>0&&e+t<=a},{tex:String.raw`xy \ge 1`,closed:!0,bounded:!1,why:`it follows the hyperbola off to infinity`,inside:(e,t)=>e*t>=1},{tex:String.raw`x^2 + y^2 \le ${x(c)},\ y > 0`,closed:!1,bounded:!0,why:`the flat edge on the x-axis is missing`,inside:(e,t)=>l(e,t)<=x(c)&&t>0}]}var C=e=>e.closed&&e.bounded,w=e=>String.raw`\{(x, y) \mid ${e.tex}\}`,T=e=>C(e)?`closed and bounded (${e.why})`:`${e.closed?`closed but not bounded`:e.bounded?`bounded but not closed`:`neither closed nor bounded`} (${e.why})`,E={id:`extreme-value-theorem`,title:`The Extreme Value Theorem`};function D(e){let t=S(e),r=n([...n(t.filter(C),e).slice(0,2),...n(t.filter(e=>!C(e)),e).slice(0,2)],e),i=[`I`,`II`,`III`,`IV`],a=i.filter((e,t)=>C(r[t]));return{sets:r,problem:{promptHtml:`Suppose $f(x, y)$ is continuous on the whole plane. On which of these sets is $f$ <strong>guaranteed</strong> to take on an absolute maximum and an absolute minimum? (Select all that apply.)`,givenTex:String.raw`\begin{array}{ll} ${r.map((e,t)=>String.raw`\text{${i[t]}.} & ${w(e)}`).join(String.raw` \\[4pt] `)} \end{array}`,answerTex:String.raw`\text{${a.join(`, `)}}`,options:i,correctOptions:a,noneOption:`None of these`,wrongAnswerHint:`The Extreme Value Theorem needs a set that is closed (contains its boundary: ≤, ≥, =) and bounded (fits in some disk).`,steps:[{explanation:`By the Extreme Value Theorem, a continuous function is guaranteed an absolute max and min on a set that is <strong>closed</strong> and <strong>bounded</strong>. On any other set, some continuous functions have them and some don't, so nothing is guaranteed.`,tex:String.raw`\text{closed} + \text{bounded} \;\Rightarrow\; \text{absolute max and min exist}`,lessonSection:E},...r.map((e,t)=>({explanation:`<strong>${i[t]}:</strong> ${T(e)}. ${C(e)?`Guaranteed.`:`Not guaranteed.`}`,tex:w(e)}))]}}}function O(t){let n=S(t),r=e(t()<.45?n.filter(C):n.filter(e=>!C(e)),t),i=e([`maximum`,`minimum`],t),a=C(r)?`must`:`might or might not`;return{set:r,problem:{promptHtml:`A continuous function on $D = ${w(r)}$ ______ have an absolute ${i}. Which phrase makes the sentence true?`,givenTex:``,choices:[`must`,`might or might not`,`must not`],correctChoice:a,wrongChoiceHint:`If D is closed and bounded, the Extreme Value Theorem guarantees it. Otherwise some continuous functions have one (a constant function always does) and some don't.`,answerTex:String.raw`\text{${a}}`,steps:[{explanation:`$D$ is ${T(r)}.`,tex:w(r),lessonSection:E},{explanation:C(r)?`So the Extreme Value Theorem applies: every continuous function on $D$ has an absolute ${i}.`:`So the theorem doesn't apply. A constant function still has an absolute ${i}, but other continuous functions don't (one that grows without bound, or approaches a value it never reaches at the missing boundary). It might or might not. "Must not" is never right: constant functions always have one.`,tex:String.raw`\text{${a}}`}]}}}function k(t){let n=e([5,10,4],t),r=e([20,10,-3,8],t),i=e([`<`,`>`],t),a=i===`<`?r-e([5,12,15],t):r+e([4,6,9],t),o=e([[1,2],[2,-1],[-1,1],[1,1]],t),s=[`f(${o.join(`, `)}) > ${a}`,`f(${o.join(`, `)}) < ${a}`,`f(${o.join(`, `)}) = ${a}`,`Cannot be determined`],c=i===`<`?s[1]:s[0],l=i===`<`?`minimum`:`maximum`;return{boundary:r,center:a,problem:{promptHtml:`Let $f(x, y)$ be differentiable on the disk $D = \\{x^2 + y^2 \\le ${n*n}\\}$, with $f = ${r}$ at every point of the circle $x^2 + y^2 = ${n*n}$, $f(0, 0) = ${a}$, and only one critical point, at $(${o.join(`, `)})$. Which is true?`,givenTex:``,choices:s,correctChoice:c,wrongChoiceHint:`D is closed and bounded, so f has an absolute max and min on D. Where can they be: on the circle, or at a critical point inside?`,answerTex:String.raw`f(${o.join(`, `)}) ${i} ${a}`,steps:[{explanation:`$D$ is closed and bounded and $f$ is continuous, so $f$ has an absolute maximum and minimum on $D$. Each is either on the boundary circle or at a critical point inside.`,tex:String.raw`\text{candidates: the circle (where } f = ${r}\text{) and } (${o.join(`, `)})`,lessonSection:E},{explanation:`$f(0, 0) = ${a}$ is ${i===`<`?`smaller`:`larger`} than the boundary value $${r}$, so the absolute ${l} is not on the circle. It must be at a critical point, and there's only one, so it is $(${o.join(`, `)})$. Since $(0, 0)$ isn't a critical point, the ${l} isn't there, so $f(${o.join(`, `)})$ is strictly ${i===`<`?`less`:`greater`} than $${a}$.`,tex:String.raw`f(${o.join(`, `)}) ${i} ${a}`}]}}}var A=[{build:D},{build:O},{build:O},{build:k}],j=(e,t)=>f(e,_(-t.num,t.den)),M=(e,t)=>h(e,_(t.den,t.num)),N=(e,t)=>l(e)<l(t);function P(e,t,n){return[h(_(e.a),h(t,t)),h(_(e.b),h(n,n)),h(_(e.c),h(t,n)),h(_(e.d),t),h(_(e.e),n),_(e.k)].reduce((e,t)=>f(e,t),_(0))}var F=e=>(t,n)=>e.a*t*t+e.b*n*n+e.c*t*n+e.d*t+e.e*n+e.k;function I(e){return[y(e.a,[2,0,0]),y(e.c,[1,1,0]),y(e.b,[0,2,0]),y(e.d,[1,0,0]),y(e.e,[0,1,0]),y(e.k,[0,0,0])]}var L=e=>v(I(e).map(e=>e.f));function R(e,t,n){let r=(e,t)=>m(e,_(t));return g(r(p(t,t),e.a),r(p(n,n),e.b),r(p(t,n),e.c),r(t,e.d),r(n,e.e),[_(e.k)])}var z=(e,t)=>`\\left(${c(e)}, ${c(t)}\\right)`,B=(e,t,n)=>({tex:z(t,n),x:l(t),y:l(n),value:P(e,t,n)});function V(e,t,n){let r=I(e),a=v(r.map(e=>e.partial.x??null)),o=v(r.map(e=>e.partial.y??null)),s=4*e.a*e.b-e.c*e.c,c=_(e.c*e.e-2*e.b*e.d,s),u=_(e.c*e.d-2*e.a*e.e,s),d=t(l(c),l(u)),f=!d&&n(l(c),l(u));return{step:{explanation:String.raw`<strong>Inside $D$:</strong> find the critical points by setting both partial derivatives to $0$. `+(d?String.raw`The point $${z(c,u)}$ lies inside $D$, so it's a candidate.`:f?String.raw`The point $${z(c,u)}$ lies on the boundary of $D$, not inside it, so it's checked with the boundary below.`:String.raw`The point $${z(c,u)}$ lies outside $D$, so it doesn't count.`),tex:String.raw`f_x = ${a} = 0, \qquad f_y = ${o} = 0 \quad\Rightarrow\quad ${z(c,u)}`,technique:i},candidate:d?B(e,c,u):void 0,pointTex:z(c,u)}}function H(e,t,n){let r=t[0]===n[0],i=r?`y`:`x`,[o,l]=r?[Math.min(t[1],n[1]),Math.max(t[1],n[1])]:[Math.min(t[0],n[0]),Math.max(t[0],n[0])],f=r?_(0):_(n[1]-t[1],n[0]-t[0]),p=r?_(0):j(_(t[1]),h(f,_(t[0]))),m=r?[_(t[0])]:[_(0),_(1)],g=r?[_(0),_(1)]:[p,f],v=r?`x = ${t[0]}`:`y = ${d(g,`x`)}`,y=R(e,m,g),b=u(y),x=n=>r?B(e,_(t[0]),n):B(e,n,s(g,n)),S=[x(_(o)),x(_(l))],C=String.raw`g'(${i}) = ${d(b,i)}`;if(b.length===2){let e=M(_(-b[0].num,b[0].den),b[1]),t=N(_(o),e)&&N(e,_(l));C+=String.raw` = 0 \;\Rightarrow\; ${i} = ${c(e)}${t?``:String.raw`\ (\text{outside the edge})`}`,t&&S.splice(1,0,x(e))}else b.length===1?C+=String.raw`\ (\text{never } 0 \text{ inside the edge})`:C=String.raw`g'(${i}) = 0 \ (g \text{ is constant on this edge})`;let w=b.length===0?String.raw` Here $g$ is constant, so every point of the edge has the same value as its ends.`:``;return{step:{explanation:String.raw`<strong>Edge from $(${t[0]}, ${t[1]})$ to $(${n[0]}, ${n[1]})$:</strong> here $${v}$ with $${o} \le ${i} \le ${l}$, so $f$ becomes a function of $${i}$ alone. Check where its derivative is $0$, plus both ends.${w}`,tex:String.raw`g(${i}) = ${d(y,i)}, \qquad ${C}`,technique:a},candidates:S}}function U(e){let t=new Set;return e.filter(e=>{let n=`${e.x.toFixed(9)},${e.y.toFixed(9)}`;return!t.has(n)&&(t.add(n),!0)})}function W(e,t,n,r,i,a){let o=U(a),s=e()<.5,u=o.reduce((e,t)=>(s?N(e.value,t.value):N(t.value,e.value))?t:e),d=s?`maximum`:`minimum`,f=o.map(e=>String.raw`${e.tex} & ${c(e.value)}`).join(String.raw` \\ `);return i.push({explanation:`List every candidate and its value of f.`,tex:String.raw`\begin{array}{c|c} \text{Point} & f \\ \hline ${f} \end{array}`},{explanation:`The absolute ${d} is the ${s?`largest`:`smallest`} value in the table.`,tex:String.raw`\text{Absolute ${d}: } f${u.tex} = ${c(u.value)}`}),{problem:{promptHtml:String.raw`Find the absolute ${d} value of $f(x, y) = ${L(t)}$ on ${r}.`,givenTex:String.raw`\begin{gathered} f(x, y) = ${L(t)} \\ D = ${n} \end{gathered}`,answerTex:c(u.value),answerValue:l(u.value),steps:i},witness:u}}var G=(t,n)=>e(n,t);function K(e,t,n,r){let i=G(e,[-2,-1,1,2]),a=G(e,[-2,-1,1,2]),o=r?G(e,[-2,-1,0,0,1,2]):0;return 4*i*a-o*o==0&&(o=0),{a:i,b:a,c:o,d:-(2*i*t+o*n),e:-(o*t+2*a*n),k:G(e,[0,1,2,3,4,5])}}var q={explanation:String.raw`$f$ is continuous and $D$ is closed and bounded, so by the Extreme Value Theorem, $f$ has an absolute maximum and minimum on $D$. They occur at critical points inside $D$ or somewhere on its boundary, so collect candidates from both.`,tex:String.raw`\text{Candidates} = \{\text{critical points inside } D\} \cup \{\text{extremes on the boundary}\}`},J=(e,t)=>e.a===t.a&&e.b===t.b&&e.c===t.c&&e.d===t.d&&e.e===t.e&&e.k===t.k,Y=[{f:{a:1,b:1,c:1,d:0,e:-6,k:0},box:[-3,3,0,5]},{f:{a:1,b:2,c:0,d:-2,e:-4,k:1},box:[0,2,0,3]},{f:{a:1,b:1,c:0,d:-2,e:-4,k:0},box:[0,3,0,3]}],X={name:`rectangle`,build(t){let{f:n,box:i}=r(()=>{let n=e([-2,-1,0],t),r=e([-2,-1,0],t),i=[n,n+e([2,3,4],t),r,r+e([2,3,4],t)];return{f:K(t,e([-1,0,1,2,3],t),e([-1,0,1,2,3],t),!0),box:i}},({f:e,box:t})=>Y.some(n=>J(e,n.f)&&n.box.every((e,n)=>e===t[n]))),[a,o,s,c]=i,l=(e,t)=>a<e&&e<o&&s<t&&t<c,u=(e,t)=>a<=e&&e<=o&&s<=t&&t<=c,d=V(n,l,u),f=[[a,s],[o,s],[o,c],[a,c]],p=f.map((e,t)=>H(n,e,f[(t+1)%4])),{problem:m,witness:h}=W(t,n,String.raw`\{(x, y) \mid ${a} \le x \le ${o},\ ${s} \le y \le ${c}\}`,String.raw`the rectangle $${a} \le x \le ${o}$, $${s} \le y \le ${c}$`,[q,d.step,...p.map(e=>e.step)],[...d.candidate?[d.candidate]:[],...p.flatMap(e=>e.candidates)]);return{problem:m,f:F(n),contains:u,box:i,witness:h,criticalTex:d.pointTex}}},Z={name:`triangle`,build(t){let n=e([2,3,4],t),r=e([2,3,4],t),i=e([1,-1],t),a=e([1,-1],t),o=K(t,i*e([0,1],t),a*e([0,1],t),!0),s=[[0,0],[i*n,0],[0,a*r]],c=(e,t)=>i*e>0&&a*t>0&&i*e/n+a*t/r<1,l=(e,t)=>i*e>=-1e-12&&a*t>=-1e-12&&i*e/n+a*t/r<=1+1e-12,u=V(o,c,l),d=s.map((e,t)=>H(o,e,s[(t+1)%3])),f=s.map(([e,t])=>`(${e}, ${t})`).join(`, `),{problem:p,witness:m}=W(t,o,String.raw`\text{the closed triangle with vertices } ${f}`,String.raw`the closed triangular region with vertices $${f}$`,[q,u.step,...d.map(e=>e.step)],[...u.candidate?[u.candidate]:[],...d.flatMap(e=>e.candidates)]);return{problem:p,f:F(o),contains:l,box:[Math.min(0,i*n),Math.max(0,i*n),Math.min(0,a*r),Math.max(0,a*r)],witness:m,criticalTex:u.pointTex}}},Q={name:`disk`,build(t){let{f:n,r2:i}=r(()=>{let n=e([1,4,9],t),r=G(t,[-2,-1,1,2]),i=G(t,[-3,-2,-1,1,2,3].filter(e=>e!==r)),a=e([-2,-1,0,1,2],t);return{f:{a:r,b:i,c:0,d:-2*r*a,e:0,k:G(t,[0,1,2,3])},r2:n}},({f:e,r2:t})=>t===4&&J(e,{a:1,b:2,c:0,d:-2,e:0,k:0})),o=Math.sqrt(i),f=(e,t)=>e*e+t*t<i,p=(e,t)=>e*e+t*t<=i+1e-9,m=V(n,f,p),v=g([_(n.b*i+n.k),_(n.d),_(n.a-n.b)]),y=u(v),b=e=>{let t=j(_(i),h(e,e)),n=s(v,e);if(t.num===0)return[{tex:z(e,_(0)),x:l(e),y:0,value:n}];let r=t.den===1&&Number.isInteger(Math.sqrt(t.num))?`${Math.sqrt(t.num)}`:String.raw`\sqrt{${c(t)}}`,a=Math.sqrt(l(t));return[{tex:String.raw`\left(${c(e)}, \pm ${r}\right)`,x:l(e),y:a,value:n}]},x=[...b(_(-o)),...b(_(o))],S=String.raw`g'(x) = ${d(y,`x`)}`;if(y.length===2){let e=M(_(-y[0].num,y[0].den),y[1]),t=l(e)>-o&&l(e)<o;S+=String.raw` = 0 \;\Rightarrow\; x = ${c(e)}${t?``:String.raw`\ (\text{outside } [-${o}, ${o}])`}`,t&&x.splice(1,0,...b(e))}else S+=String.raw`\ (\text{never } 0)`;let C={explanation:String.raw`<strong>On the circle</strong> $x^2 + y^2 = ${i}$: substitute $y^2 = ${i} - x^2$, so $f$ becomes a function of $x$ alone, for $-${o} \le x \le ${o}$. Check where its derivative is $0$, plus both ends. Each $x$ inside gives two points, $y = \pm\sqrt{${i} - x^2}$, with the same value. Remember: $g$ gives $f$'s value only on the circle; the interior point uses $f$ itself.`,tex:String.raw`g(x) = ${d(v,`x`)}, \qquad ${S}`,technique:a},{problem:w,witness:T}=W(t,n,String.raw`\{(x, y) \mid x^2 + y^2 \le ${i}\}`,String.raw`the disk $x^2 + y^2 \le ${i}$`,[q,m.step,C],[...m.candidate?[m.candidate]:[],...x]);return{problem:w,f:F(n),contains:p,box:[-o,o,-o,o],witness:T,criticalTex:m.pointTex}}},$=[X,Z,Q];function ee(t){return e($,t).build(t).problem}var te=[{id:`rectangle`,label:`Rectangle`,generate:e=>X.build(e).problem},{id:`triangle`,label:`Triangle`,generate:e=>Z.build(e).problem},{id:`disk`,label:`Disk`,generate:e=>Q.build(e).problem},{id:`evt`,label:`Extreme Value Theorem: is a max or min guaranteed?`,generate:t=>e(A,t).build(t).problem},{id:`contour`,label:`Estimate from a contour map`,generate:e=>o[0].build(e).problem}],ne={...t(`absolute-extrema`),lessonHtml:b,techniques:[i,a],generateProblem:ee,problemTypes:te,plots:{rectangleExample:{label:`Graph of f = x squared minus 2x plus y squared minus 4y over the square from 0 to 3, with the absolute minimum at (1, 2) and the absolute maximum at the corner (3, 0).`,f:(e,t)=>e*e-2*e+t*t-4*t,xRange:[0,3],yRange:[0,3],points:[{x:1,y:2,label:`abs min (1, 2)`},{x:3,y:0,label:`abs max (3, 0)`}]}}};export{ne as absoluteExtremaTopic};