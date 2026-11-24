import{d as e,h as t,p as n}from"./index-ZzztMt-8.js";import{c as r,p as i}from"./techniques-2ghdpz7U.js";import{d as a,f as o,u as s}from"./polynomial-DkCx2WfM.js";import{c,i as l,l as u,n as d,p as f,r as p,t as m}from"./exact-CWz9QflX.js";import{c as h,d as g,u as _}from"./poly2-B4z7s4Td.js";import{a as v,i as y,n as b,r as x,t as S}from"./regions-oN-9FXmX.js";import{i as C}from"./signs-CqU7JeHy.js";var w=e=>e.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g,`($1/$2)`).replace(/\^\{?2\}?/g,`²`).replace(/\^\{?3\}?/g,`³`).replace(/[{}\\]/g,``);function T(e){let t=Array.from({length:61},(t,n)=>e.lo+(e.hi-e.lo)*n/60),n=(t,n)=>e.type===`I`?[t,n]:[n,t],r=[...t.map(t=>n(t,S(e.lower,t))),...[...t].reverse().map(t=>n(t,S(e.upper,t)))],i=[...r.map(e=>e[0]),0],a=[...r.map(e=>e[1]),0],[o,s,c,l]=[Math.min(...i),Math.max(...i),Math.min(...a),Math.max(...a)],u=.5*Math.max(s-o,l-c,1)*1.36,[d,f]=[(o+s)/2,(c+l)/2],[p,m,h,g]=[d-u,d+u,f-u,f+u],_=220/Math.max(m-p,g-h),v=([e,t])=>`${((e-p)*_).toFixed(1)},${((g-t)*_).toFixed(1)}`,[y,b]=[(m-p)*_,(g-h)*_],x=Array.from({length:81},(t,n)=>e.lo-.15*(e.hi-e.lo)+1.3*(e.hi-e.lo)*n/80),C=[e.lower,e.upper].filter(t=>t.size>0||e.type===`II`).map(e=>`<polyline points="${x.map(t=>v(n(t,S(e,t)))).join(` `)}" fill="none" stroke="var(--text)" stroke-width="1.4" />`).join(``),T=`<line x1="0" y1="${(g*_).toFixed(1)}" x2="${y.toFixed(1)}" y2="${(g*_).toFixed(1)}" stroke="var(--border)" stroke-width="1" /><line x1="${(-p*_).toFixed(1)}" y1="0" x2="${(-p*_).toFixed(1)}" y2="${b.toFixed(1)}" stroke="var(--border)" stroke-width="1" /><text x="${(y-4).toFixed(1)}" y="${(g*_-5).toFixed(1)}" font-size="10" text-anchor="end" fill="var(--muted)">x</text><text x="${(-p*_+5).toFixed(1)}" y="10" font-size="10" fill="var(--muted)">y</text>`,E=(e,t,n=-6)=>`<text x="${((e[0]-p)*_).toFixed(1)}" y="${((g-e[1])*_+n).toFixed(1)}" font-size="10" text-anchor="middle" fill="var(--text)" stroke="var(--surface)" stroke-width="3" paint-order="stroke">${t}</text>`,D=e.curves.map(e=>E(e.at,w(e.tex),-8)).join(``),O=e.corners.map(e=>`<circle cx="${((e[0]-p)*_).toFixed(1)}" cy="${((g-e[1])*_).toFixed(1)}" r="2.5" fill="var(--text)" />`+E(e,`(${e[0]}, ${e[1]})`,13)).join(``);return`<svg class="field-diagram" viewBox="0 0 ${y.toFixed(1)} ${b.toFixed(1)}" role="img" aria-label="The region D, shaded, with its boundary curves labeled.">`+T+`<polygon points="${r.map(v).join(` `)}" fill="var(--highlight)" fill-opacity="0.22" stroke="none" />`+C+D+O+`</svg>`}var E=e=>/\s[+-]\s/.test(e)?String.raw`\left(${e}\right)`:e,D=(e,t)=>{for(let n=1;n<10;n++){let r=e.lo+(e.hi-e.lo)*n/10,[i,a]=[S(e.lower,r),S(e.upper,r)];for(let n=1;n<10;n++){let o=i+(a-i)*n/10,[s,c]=e.type===`I`?[r,o]:[o,r];if(g(t,s,c)<=0)return!1}}return!0},O={name:`double integral over a region`,build(e){let{region:t,f:r}=n(()=>({region:x(e),f:b(e,!0)}),({region:e,f:t})=>v(e,t)),{answer:i,steps:s}=y(t,r),c=_(r),l=e()<.25,[u,d]=t.type===`I`?[`x`,`y`]:[`y`,`x`],f=l?String.raw`$D = \{(x, y) \mid ${t.lo} \le ${u} \le ${t.hi},\ ${_(t.lower,t.type===`I`?[`x`,`y`]:[`y`,`x`])} \le ${d} \le ${_(t.upper,t.type===`I`?[`x`,`y`]:[`y`,`x`])}\}$`:t.description,p=c===`1`?`area`:D(t,r)&&e()<.35?`volume`:`integral`,m=p===`area`?`Use a double integral to find the area of the region $D$, where ${f}.`:p===`volume`?String.raw`Find the volume of the solid that lies under the surface $z = ${c}$ and above the region $D$, where ${f}.`:String.raw`Evaluate the double integral $\iint_D ${E(c)}\,dA$, where ${f}.`,h=p===`area`?[{explanation:`The area of D is the double integral of 1 over D.`,tex:String.raw`A(D) = \iint_D 1\,dA`},...s]:s;return{problem:{promptHtml:m,givenTex:``,answerTex:a(i),answerValue:o(i),steps:h},region:t,f:r}}},k={name:`double integral over a region shown`,build(e){let{region:t,f:r}=n(()=>({region:x(e),f:b(e,!1)}),({region:e,f:t})=>v(e,t)),{answer:i,steps:s}=y(t,r);return{problem:{promptHtml:String.raw`Express $\iint_D f(x, y)\,dA$ as an iterated integral and evaluate it, where $f(x, y) = ${_(r)}$ and $D$ is the region shown.`,givenTex:``,figureHtml:T(t),answerTex:a(i),answerValue:o(i),steps:[{explanation:`Read the boundary curves and where they meet from the picture.`,tex:String.raw`\text{corners: } ${t.corners.map(e=>`(${e[0]}, ${e[1]})`).join(`, `)}`},...s]},region:t,f:r}}},A=[{p:h([]),tex:()=>`0`},{p:h([[1,1,0]]),tex:e=>e},{p:h([[2,1,0]]),tex:e=>`2${e}`},{p:h([[1,2,0]]),tex:e=>`${e}^2`},{p:h([[1,3,0]]),tex:e=>`${e}^3`},{p:h([[1,0,0]]),tex:()=>`1`},{p:h([[1,0,0],[1,1,0]]),tex:e=>`${e} + 1`}],j=[{f:(e,t)=>8*e-2*t,lo:1,hi:5,outer:`x`,lower:e=>0,upper:e=>e},{f:(e,t)=>e*e*t,lo:0,hi:2,outer:`y`,lower:e=>0,upper:e=>e*e}];function M(t){let{type:r,lo:i,hi:s,lowerBound:c,upperBound:l,f:u}=n(()=>{let r=e([`I`,`II`],t),[i,a]=e([[0,1],[0,2],[1,2],[1,3],[0,3],[1,5]],t),[o,s]=n(()=>[e(A,t),e(A,t)],([e,t])=>e===t||_(e.p)===`0`&&_(t.p)===`1`);return{type:r,lo:i,hi:a,lowerBound:o,upperBound:s,f:b(t,!1)}},e=>Array.from({length:11},(t,n)=>e.lo+(e.hi-e.lo)*n/10).some(t=>S(e.lowerBound.p,t)>S(e.upperBound.p,t)+1e-12)||(()=>{let t=y({family:`given`,type:e.type,lo:e.lo,hi:e.hi,lower:e.lowerBound.p,upper:e.upperBound.p,description:``,curves:[],corners:[],setupWhy:``},e.f).answer;return Math.abs(o(t))>150||t.den>120})()||j.some(t=>t.outer===(e.type===`I`?`x`:`y`)&&t.lo===e.lo&&t.hi===e.hi&&[.3,1.7].every(n=>Math.abs(t.lower(n)-g(e.lowerBound.p,n,0))<1e-9&&Math.abs(t.upper(n)-g(e.upperBound.p,n,0))<1e-9)&&[[.4,1.3],[2.2,.6]].every(([n,r])=>Math.abs(t.f(n,r)-g(e.f,n,r))<1e-9))),d={family:`given`,type:r,lo:i,hi:s,lower:c.p,upper:l.p,description:``,curves:[],corners:[],setupWhy:``},{answer:f,steps:p,iteratedTex:m}=y(d,u);return{problem:{promptHtml:`Evaluate the iterated integral.`,givenTex:m,answerTex:a(f),answerValue:o(f),steps:[{explanation:`The inner bounds depend on ${r===`I`?`x`:`y`}, so do the inner integral first and plug them in, then integrate the result.`,tex:m,lessonSection:{id:`iterated-variable`,title:`Iterated integrals with variable limits`}},...p.slice(2)]},spec:{lo:i,hi:s,lower:e=>S(c.p,e),upper:e=>S(l.p,e),f:(e,t)=>r===`I`?g(u,t,e):g(u,e,t)}}}var N=e=>({value:e,tex:`${e}`,root:t=>{let n=Math.round(e**(1/t));return n**t===e?{value:n,tex:`${n}`}:null}}),P=e=>({value:e?Math.PI/2:Math.PI,tex:e?String.raw`\frac{\pi}{2}`:String.raw`\pi`,root:t=>t===2?{value:Math.sqrt(e?Math.PI/2:Math.PI),tex:e?String.raw`\sqrt{\pi/2}`:String.raw`\sqrt{\pi}`}:t===3?{value:Math.cbrt(e?Math.PI/2:Math.PI),tex:e?String.raw`\sqrt[3]{\pi/2}`:String.raw`\sqrt[3]{\pi}`}:null}),F=[{name:`exp`,tex:e=>`e^{${e}}`,value:Math.exp,integral:e=>m(d(e.value),p(-1)),antiderivativeTex:`e^{u}`,bounds:[1,4,8].map(N)},{name:`recip`,tex:e=>String.raw`\frac{1}{1 + ${e}}`,value:e=>1/(1+e),integral:e=>l(1+e.value),antiderivativeTex:String.raw`\ln(1 + u)`,bounds:[1,4,8,16].map(N)},{name:`sqrt`,tex:e=>String.raw`\sqrt{1 + ${e}}`,value:e=>Math.sqrt(1+e),integral:e=>p(2*(Math.sqrt(1+e.value)**3-1),3),antiderivativeTex:String.raw`\frac{2}{3}(1 + u)^{3/2}`,bounds:[N(8)]},{name:`sin`,tex:e=>String.raw`\sin(${e})`,value:Math.sin,integral:e=>p(e.value===Math.PI?2:1),antiderivativeTex:String.raw`-\cos u`,bounds:[P(!0),P(!1)]},{name:`cos`,tex:e=>String.raw`\cos(${e})`,value:Math.cos,integral:()=>p(1),antiderivativeTex:String.raw`\sin u`,bounds:[P(!0)]}],I=[[1,0,2],[1,1,3],[1,2,4],[2,0,3],[2,1,5],[3,0,4]];function L(t){return n(()=>{let[n,r,i]=e(I,t),a=e(F,t),o=e(a.bounds,t),s=o.root(i)??{value:NaN,tex:``},c=t()<.5;return{c:e([1,2,3,4,5,6,8,10,12],t),p:n,q:r,r:i,outer:a,U:o,a:s,s:c?`y`:`x`,t:c?`x`:`y`}},e=>Number.isNaN(e.a.value)||e.c===1&&e.p===1&&e.q===1&&e.r===3&&e.outer.name===`exp`&&e.U.value===1&&e.s===`x`)}var R=(e,t)=>t===0?``:t===1?e:`${e}^{${t}}`;function z(e){return f(e.outer.integral(e.U),s(e.c,(e.q+1)*e.r))}var B=(e,t)=>t.startsWith(String.raw`\frac{1}`)&&e!==``?t.replace(String.raw`\frac{1}`,String.raw`\frac{${e}}`):`${e}${t}`,V=e=>e.num===1&&e.den===1?``:a(e);function H(e){let{c:t,p:n,q:r,r:i,s:a,t:o}=e,l=n*(r+1),u=s(t,r+1),d=e.outer.tex(R(o,i)),f=`${t===1?``:t}${R(a,r)}`||`1`,p=B(`${V(u)}${R(o,l)}`,d),m=V(s(t,(r+1)*i));return[{explanation:String.raw`Integrate with respect to $${a}$. The factor $${d}$ is constant in $${a}$, so only $${f}$ gets integrated.`,tex:String.raw`\int_0^{${R(o,n)}} ${U(e)}\,d${a} = ${d}\Big[\,${V(u)}${R(a,r+1)}\,\Big]_0^{${R(o,n)}} = ${p}`,lessonSection:{id:`iterated-variable`,title:`Iterated integrals with variable limits`}},{explanation:String.raw`Now substitute $u = ${R(o,i)}$, $du = ${i}${R(o,i-1)}\,d${o}$: the $${R(o,l)}$ is exactly what $du$ needs. The bounds become $u = 0$ and $u = ${e.U.tex}$.`,tex:String.raw`\int_0^{${e.a.tex}} ${p}\,d${o} = ${m}\int_0^{${e.U.tex}} ${e.outer.tex(`u`)}\,du = ${m}\Big[\,${e.outer.antiderivativeTex}\,\Big]_0^{${e.U.tex}} = ${c(z(e))}`}]}var U=e=>B(`${e.c===1?``:e.c}${R(e.s,e.q)}`,e.outer.tex(R(e.t,e.r))),W={name:`iterated integral with variable limits`,build(e){if(e()<.6)return M(e);let t=L(e),n=z(t);return{problem:{promptHtml:`Evaluate the iterated integral.`,givenTex:String.raw`\int_0^{${t.a.tex}}\int_0^{${R(t.t,t.p)}} ${U(t)}\,d${t.s}\,d${t.t}`,answerTex:c(n),answerValue:u(n),steps:H(t)},spec:{lo:0,hi:t.a.value,lower:()=>0,upper:e=>e**t.p,f:(e,n)=>t.c*e**t.q*t.outer.value(n**t.r)}}}},G=(e,t)=>t===1?e:t===2?String.raw`\sqrt{${e}}`:String.raw`\sqrt[${t}]{${e}}`,K={name:`reverse the order of integration`,build(e){let t=n(()=>L(e),e=>e.p>1&&!Number.isInteger(e.a.value)),r=z(t),i=t.p===1?t.a.tex:`${t.a.value**t.p}`,a=String.raw`\int_0^{${i}}\int_{${G(t.s,t.p)}}^{${t.a.tex}} ${U(t)}\,d${t.t}\,d${t.s}`,o=String.raw`\int_0^{${t.a.tex}}\int_0^{${R(t.t,t.p)}} ${U(t)}\,d${t.s}\,d${t.t}`;return{problem:{promptHtml:`Evaluate the integral by reversing the order of integration.`,givenTex:a,answerTex:c(r),answerValue:u(r),steps:[{explanation:String.raw`As written, the inner integral is $\int ${t.outer.tex(R(t.t,t.r))}\,d${t.t}$, which has no elementary antiderivative. So reverse the order.`,tex:a,lessonSection:{id:`reversing`,title:`Reversing the order of integration`}},{explanation:String.raw`The region is $0 \le ${t.s} \le ${i}$, $${G(t.s,t.p)} \le ${t.t} \le ${t.a.tex}$. The same region, sliced the other way: $${t.t}$ runs from $0$ to $${t.a.tex}$, and for each $${t.t}$, $${t.s}$ runs from $0$ to $${R(t.t,t.p)}$ (since $${G(t.s,t.p)} \le ${t.t}$ means $${t.s} \le ${R(t.t,t.p)}$).`,tex:String.raw`${a} = ${o}`},...H(t)]},setup:t}}},q=T({family:`lesson`,type:`I`,lo:0,hi:2,lower:h([[1,2,0]]),upper:h([[2,1,0]]),description:``,curves:[{tex:`y = x^2`,at:[1.8,3.24]},{tex:`y = 2x`,at:[.7,1.4]}],corners:[[0,0],[2,4]],setupWhy:``}),J=String.raw`
<h2 id="idea" data-toc="The idea">Integrating over a region that isn't a rectangle</h2>
<p>
  To integrate over a region $D$ that isn't a rectangle, slice it into strips. Inside each strip, one variable runs between two
  <strong>curves</strong> instead of two numbers. So the inner bounds of the iterated integral become functions of the outer variable.
</p>
<p>The recipe:</p>
<ol>
  <li>Sketch $D$ and find where its boundary curves meet.</li>
  <li>Decide which way to slice: vertical strips (type I) or horizontal strips (type II).</li>
  <li>Read the bounds: outer bounds are numbers, inner bounds are the curves.</li>
  <li>Integrate the inside first, plugging in the curves, then the outside.</li>
</ol>

<h2 id="type-i" data-toc="Type I regions">Type I regions: vertical strips</h2>
<div class="formula">
  <p>If $D = \{(x, y) \mid a \le x \le b,\ g_1(x) \le y \le g_2(x)\}$, then</p>
  $$\iint_D f(x, y)\,dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y)\,dy\,dx$$
</div>
<div class="figure-row">
  <figure>
    ${q}
    <figcaption>The region between $y = x^2$ (bottom) and $y = 2x$ (top). They meet at $(0, 0)$ and $(2, 4)$.</figcaption>
  </figure>
  <div class="figure-notes">
    <p>
      <strong>Example.</strong> $\iint_D x\,dA$ over that region. The curves meet where $x^2 = 2x$, at $x = 0$ and $x = 2$, and the line is on top:
    </p>
    $$\int_0^2\int_{x^2}^{2x} x\,dy\,dx = \int_0^2 x(2x - x^2)\,dx = \Big[\,\tfrac{2}{3}x^3 - \tfrac{1}{4}x^4\,\Big]_0^2 = \tfrac{16}{3} - 4 = \tfrac{4}{3}$$
  </div>
</div>
<p>
  <strong>Top and bottom:</strong> the inner integral always goes from the lower curve to the upper curve. To tell which is which, test a value of $x$
  between the intersections: at $x = 1$, $2x = 2$ beats $x^2 = 1$.
</p>

<h2 id="type-ii" data-toc="Type II regions">Type II regions: horizontal strips</h2>
<div class="formula">
  <p>If $D = \{(x, y) \mid c \le y \le d,\ h_1(y) \le x \le h_2(y)\}$, then</p>
  $$\iint_D f(x, y)\,dA = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x, y)\,dx\,dy$$
</div>
<p>
  Here the inner bounds run from the <strong>left</strong> curve to the <strong>right</strong> curve. Type II is the better choice when the boundary is
  given as $x = $ (a function of $y$), like $x = y^2$, or when vertical strips would hit different curves in different places. For example, the triangle
  with vertices $(0, 1)$, $(2, 1)$, and $(1, 3)$ has one horizontal side, so horizontal strips each run from the left side to the right side, with no
  splitting:
</p>
$$\int_1^3\int_{(y - 1)/2}^{(5 - y)/2} f(x, y)\,dx\,dy$$

<!-- tools -->
<h2 id="iterated-variable" data-toc="Variable limits">Iterated integrals with variable limits</h2>
<p>
  When an iterated integral is given directly, the inner bounds tell you which variable to integrate first. Plug those bounds in, and the result is a
  function of the outer variable only:
</p>
$$\int_0^1\int_0^{y} 6xy\,dx\,dy = \int_0^1 \Big[\,3x^2y\,\Big]_{x=0}^{x=y} dy = \int_0^1 3y^3\,dy = \tfrac{3}{4}$$
<p>
  <strong>Watch for a substitution.</strong> After the inner integral, the result often has the derivative of an inside function sitting in front:
  $\int_0^1\int_0^{y^2} e^{y^3}\,dx\,dy = \int_0^1 y^2 e^{y^3}\,dy$, and $u = y^3$, $du = 3y^2\,dy$ finishes it: $\frac{1}{3}(e - 1)$.
</p>

<h2 id="volume-area" data-toc="Volume and area">Volume and area</h2>
<ul>
  <li><strong>Volume:</strong> if $f \ge 0$ on $D$, the volume under $z = f(x, y)$ and above $D$ is $\iint_D f(x, y)\,dA$.</li>
  <li><strong>Area:</strong> the area of $D$ is $\iint_D 1\,dA$. For type I, that's $\int_a^b \big(g_2(x) - g_1(x)\big)\,dx$, the familiar "top minus bottom."</li>
</ul>

<h2 id="reversing" data-toc="Reversing the order">Reversing the order of integration</h2>
<p>
  Some iterated integrals can't be done in the order given, because the inner integral has no elementary antiderivative, like
  $\int e^{y^2}\,dy$. Describe the same region the other way and swap:
</p>
$$\int_0^1\int_x^1 e^{y^2}\,dy\,dx \;=\; \int_0^1\int_0^y e^{y^2}\,dx\,dy \;=\; \int_0^1 y\,e^{y^2}\,dy \;=\; \tfrac{1}{2}(e - 1)$$
<ol>
  <li>Write the region from the bounds: here $0 \le x \le 1$ and $x \le y \le 1$, the triangle above the line $y = x$.</li>
  <li>Sketch it, then read it the other way: $y$ from $0$ to $1$, and for each $y$, $x$ from $0$ to $y$.</li>
  <li>The new inner integral is easy, and it leaves exactly the factor a substitution needs.</li>
</ol>
<p>
  The same goes for curved bounds: $\sqrt{x} \le y \le 1$ means $x \le y^2$, so $\int_0^1\int_{\sqrt{x}}^1 \cdots\,dy\,dx = \int_0^1\int_0^{y^2} \cdots\,dx\,dy$.
</p>

<h2 id="common-mistakes">Common mistakes</h2>
<ul>
  <li><strong>Numbers on the inside.</strong> The outer bounds must be numbers; curves belong on the inner integral.</li>
  <li><strong>Upside-down bounds.</strong> Inner bounds go from bottom to top (type I) or left to right (type II), not in the order the curves were named.</li>
  <li><strong>Forgetting where curves meet.</strong> The outer bounds come from the intersection points, so solve for them instead of guessing.</li>
  <li><strong>Swapping without redrawing.</strong> Reversing the order isn't just switching $dx$ and $dy$: the bounds have to be rebuilt from a sketch.</li>
</ul>
`,Y=[{id:`variable-limits`,label:`Iterated integral with variable limits`,generate:e=>W.build(e).problem},{id:`region`,label:`Double integral over a region (and volume, area)`,generate:e=>O.build(e).problem},{id:`picture`,label:`Region shown in a picture`,generate:e=>k.build(e).problem},{id:`sign`,label:`Negative, zero, or positive?`,generate:e=>C.build(e).problem},{id:`reverse`,label:`Reverse the order of integration`,generate:e=>K.build(e).problem}];function X(t){return e(Y,t).generate(t)}var Z={...t(`general-regions`),lessonHtml:J,techniques:[r,i],generateProblem:X,problemTypes:Y};export{Z as generalRegionsTopic};