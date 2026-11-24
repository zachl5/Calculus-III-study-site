var e={id:`technique-unit-vectors`,title:`Making a unit vector`,summary:String.raw`$D_{\mathbf{u}} f$ needs $|\mathbf{u}| = 1$: use $\langle \cos\theta, \sin\theta \rangle$ for an angle, $\mathbf{v}/|\mathbf{v}|$ for a vector, and $\overrightarrow{PQ}/|\overrightarrow{PQ}|$ toward a point.`,html:String.raw`
  <p>
    The formula $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$ only works when $\mathbf{u}$ is a <strong>unit vector</strong> (length $1$).
    Problems describe the direction in one of three ways:
  </p>
  <table>
    <thead><tr><th>The problem gives</th><th>Unit vector</th><th>Example</th></tr></thead>
    <tbody>
      <tr>
        <td>An angle $\theta$ from the positive $x$-axis</td>
        <td>$\mathbf{u} = \langle \cos\theta, \sin\theta \rangle$ (already length $1$)</td>
        <td>$\theta = \frac{\pi}{3}$: $\mathbf{u} = \left\langle \frac{1}{2}, \frac{\sqrt{3}}{2} \right\rangle$</td>
      </tr>
      <tr>
        <td>A vector $\mathbf{v}$</td>
        <td>$\mathbf{u} = \dfrac{\mathbf{v}}{|\mathbf{v}|}$</td>
        <td>$\mathbf{v} = \langle 3, -4 \rangle$: $|\mathbf{v}| = 5$, $\mathbf{u} = \left\langle \frac{3}{5}, -\frac{4}{5} \right\rangle$</td>
      </tr>
      <tr>
        <td>"From $P$ toward $Q$"</td>
        <td>$\mathbf{v} = \overrightarrow{PQ} = Q - P$, then divide by its length</td>
        <td>$P(1, 2)$, $Q(4, 6)$: $\overrightarrow{PQ} = \langle 3, 4 \rangle$, $\mathbf{u} = \left\langle \frac{3}{5}, \frac{4}{5} \right\rangle$</td>
      </tr>
    </tbody>
  </table>

  <h4>Values of sine and cosine you'll need</h4>
  <table>
    <thead><tr><th>$\theta$</th><th>$\frac{\pi}{6}$</th><th>$\frac{\pi}{4}$</th><th>$\frac{\pi}{3}$</th><th>$\frac{\pi}{2}$</th><th>$\pi$</th></tr></thead>
    <tbody>
      <tr><td>$\cos\theta$</td><td>$\frac{\sqrt{3}}{2}$</td><td>$\frac{\sqrt{2}}{2}$</td><td>$\frac{1}{2}$</td><td>$0$</td><td>$-1$</td></tr>
      <tr><td>$\sin\theta$</td><td>$\frac{1}{2}$</td><td>$\frac{\sqrt{2}}{2}$</td><td>$\frac{\sqrt{3}}{2}$</td><td>$1$</td><td>$0$</td></tr>
    </tbody>
  </table>
  <p>
    For other angles, use the quadrant to fix the signs: $\cos\frac{3\pi}{4} = -\frac{\sqrt{2}}{2}$ and $\sin\left(-\frac{\pi}{6}\right) = -\frac{1}{2}$.
  </p>

  <h4>Simplifying the answer</h4>
  <p>
    Dividing by $|\mathbf{v}|$ often leaves a root in the denominator. Either form is correct: $\frac{6}{\sqrt{8}} = \frac{6}{2\sqrt{2}} = \frac{3}{\sqrt{2}} = \frac{3\sqrt{2}}{2}$.
  </p>

  <h4>Common slips</h4>
  <ul>
    <li><strong>Forgetting to divide by the length.</strong> $\nabla f \cdot \mathbf{v}$ is $|\mathbf{v}|$ times too big when $|\mathbf{v}| \ne 1$.</li>
    <li><strong>Subtracting backward.</strong> "From $P$ toward $Q$" is $Q - P$. Using $P - Q$ flips the sign of the answer.</li>
    <li><strong>Using $Q$ as the point.</strong> The derivative is evaluated at $P$, the starting point. $Q$ only gives the direction.</li>
  </ul>`},t={id:`technique-chain-rule-partials`,title:`Partial derivatives with the chain rule`,summary:String.raw`for $\ln$, $\sqrt{\ }$, $\tan^{-1}$, and $e^{(\ )}$ of an inside expression, take the outer derivative, then multiply by the partial of the inside.`,html:String.raw`
  <p>
    A partial derivative treats every other variable as a constant, so the single-variable rules apply as usual. When $f$ is an outer function
    of an inside expression, use the chain rule: outer derivative times the partial of the inside.
  </p>
  <table>
    <thead><tr><th>$f$</th><th>$f_x$</th><th>Why</th></tr></thead>
    <tbody>
      <tr><td>$\ln(2x + 3y)$</td><td>$\dfrac{2}{2x + 3y}$</td><td>$\frac{1}{\text{inside}}$ times $\frac{\partial}{\partial x}(2x + 3y) = 2$</td></tr>
      <tr><td>$\sqrt{2x + 3y}$</td><td>$\dfrac{2}{2\sqrt{2x + 3y}}$</td><td>$\frac{1}{2\sqrt{\text{inside}}}$ times $2$</td></tr>
      <tr><td>$\tan^{-1}(xy)$</td><td>$\dfrac{y}{1 + x^2y^2}$</td><td>$\frac{1}{1 + \text{inside}^2}$ times $\frac{\partial}{\partial x}(xy) = y$</td></tr>
      <tr><td>$e^{xy}$</td><td>$ye^{xy}$</td><td>$e^{\text{inside}}$ times $y$</td></tr>
      <tr><td>$xe^{3y}$</td><td>$e^{3y}$</td><td>$e^{3y}$ is a constant when only $x$ changes</td></tr>
      <tr><td>$\dfrac{x}{y^2} = xy^{-2}$</td><td>$\dfrac{1}{y^2}$</td><td>and $f_y = -2xy^{-3} = -\frac{2x}{y^3}$ by the power rule</td></tr>
    </tbody>
  </table>
  <h4>Plug in last</h4>
  <p>
    Find each partial as a formula first, then substitute the point. For $f = \ln(2x + 3y)$ at $(1, 2)$: $f_x = \frac{2}{2x + 3y}$, so
    $f_x(1, 2) = \frac{2}{2(1) + 3(2)} = \frac{2}{8} = \frac{1}{4}$.
  </p>
  <h4>Common slips</h4>
  <ul>
    <li><strong>Dropping the inside derivative.</strong> $\frac{\partial}{\partial x}\ln(2x + 3y)$ is $\frac{2}{2x + 3y}$, not $\frac{1}{2x + 3y}$.</li>
    <li><strong>Treating the other variable as a variable.</strong> In $f_x$ of $xe^{3y}$, $e^{3y}$ is just a constant factor.</li>
  </ul>`},n={id:`technique-vector-derivatives`,title:`Differentiating vector functions`,summary:String.raw`differentiate each component on its own; for products, use $\frac{d}{dt}[\mathbf{u} \cdot \mathbf{v}] = \mathbf{u}' \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{v}'$ (and the same pattern for $\times$, keeping the order).`,html:String.raw`
  <p>A vector function is differentiated <strong>one component at a time</strong>, with the usual single-variable rules:</p>
  $$\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle \quad\Rightarrow\quad \mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle$$
  <table>
    <thead><tr><th>Component</th><th>Derivative</th><th>Rule</th></tr></thead>
    <tbody>
      <tr><td>$e^{3t}$</td><td>$3e^{3t}$</td><td>chain rule: times the derivative of $3t$</td></tr>
      <tr><td>$\sin 2t$, $\cos 2t$</td><td>$2\cos 2t$, $-2\sin 2t$</td><td>chain rule</td></tr>
      <tr><td>$te^{-t}$</td><td>$e^{-t} - te^{-t}$</td><td>product rule</td></tr>
      <tr><td>$\ln(1 + 2t)$</td><td>$\dfrac{2}{1 + 2t}$</td><td>chain rule</td></tr>
      <tr><td>$\sqrt{1 + 4t}$</td><td>$\dfrac{4}{2\sqrt{1 + 4t}}$</td><td>chain rule</td></tr>
      <tr><td>$\dfrac{1}{1 + t}$</td><td>$-\dfrac{1}{(1 + t)^2}$</td><td>power rule on $(1 + t)^{-1}$</td></tr>
    </tbody>
  </table>
  <p>Find $\mathbf{r}'(t)$ as a formula first, then plug in $t_0$.</p>

  <h4>Rules for combinations</h4>
  <p>For vector functions $\mathbf{u}$ and $\mathbf{v}$, a scalar $c$, and a real function $f$:</p>
  $$\begin{aligned}
    \tfrac{d}{dt}[\mathbf{u} + \mathbf{v}] &= \mathbf{u}' + \mathbf{v}' & \tfrac{d}{dt}[c\,\mathbf{u}] &= c\,\mathbf{u}' \\
    \tfrac{d}{dt}[f(t)\,\mathbf{u}] &= f'\,\mathbf{u} + f\,\mathbf{u}' & \tfrac{d}{dt}[\mathbf{u}(f(t))] &= f'(t)\,\mathbf{u}'(f(t)) \\
    \tfrac{d}{dt}[\mathbf{u} \cdot \mathbf{v}] &= \mathbf{u}' \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{v}' & \tfrac{d}{dt}[\mathbf{u} \times \mathbf{v}] &= \mathbf{u}' \times \mathbf{v} + \mathbf{u} \times \mathbf{v}'
  \end{aligned}$$
  <p>
    They're the usual product and chain rules. The one catch is the <strong>cross product</strong>: $\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}$,
    so keep $\mathbf{u}$ before $\mathbf{v}$ in both terms.
  </p>

  <h4>Example</h4>
  <p>
    If $\mathbf{u}(1) = \langle 1, 0, 2 \rangle$, $\mathbf{u}'(1) = \langle 3, 1, 0 \rangle$, $\mathbf{v}(1) = \langle 2, 1, 1 \rangle$, and $\mathbf{v}'(1) = \langle 0, 4, -1 \rangle$, then at $t = 1$:
  </p>
  $$\frac{d}{dt}[\mathbf{u} \cdot \mathbf{v}] = \langle 3, 1, 0 \rangle \cdot \langle 2, 1, 1 \rangle + \langle 1, 0, 2 \rangle \cdot \langle 0, 4, -1 \rangle = 7 + (-2) = 5$$`},r={id:`technique-segment`,title:`Parametrizing a line segment`,summary:String.raw`write the segment from $\mathbf{r}_0$ to $\mathbf{r}_1$ as $(1 - t)\,\mathbf{r}_0 + t\,\mathbf{r}_1$, for $0 \le t \le 1$.`,html:String.raw`
  <p>To travel in a straight line from the point $\mathbf{r}_0$ to the point $\mathbf{r}_1$, use</p>
  $$\mathbf{r}(t) = (1 - t)\,\mathbf{r}_0 + t\,\mathbf{r}_1, \qquad 0 \le t \le 1$$
  <p>Apply it to each coordinate separately. For $\mathbf{r}_0 = (x_0, y_0, z_0)$ and $\mathbf{r}_1 = (x_1, y_1, z_1)$:</p>
  $$x(t) = (1 - t)x_0 + t\,x_1 \qquad y(t) = (1 - t)y_0 + t\,y_1 \qquad z(t) = (1 - t)z_0 + t\,z_1$$
  <p>In the plane, just drop $z$.</p>

  <h4>Why it works</h4>
  <ul>
    <li>At $t = 0$: $\mathbf{r}(0) = 1 \cdot \mathbf{r}_0 + 0 \cdot \mathbf{r}_1 = \mathbf{r}_0$, the start.</li>
    <li>At $t = 1$: $\mathbf{r}(1) = 0 \cdot \mathbf{r}_0 + 1 \cdot \mathbf{r}_1 = \mathbf{r}_1$, the end.</li>
    <li>In between, it's a weighted average of the two points. At $t = \tfrac{1}{2}$ it's the midpoint.</li>
  </ul>
  <p>
    As $t$ increases, the point moves <strong>from $\mathbf{r}_0$ toward $\mathbf{r}_1$</strong>, so this parametrization
    has the right direction automatically. That matters for integrals with $dx$, $dy$, $dz$.
  </p>

  <h4>The same formula, rearranged</h4>
  <p>Distributing and collecting terms gives an equivalent form that's often quicker to write:</p>
  $$\mathbf{r}(t) = \mathbf{r}_0 + t\left(\mathbf{r}_1 - \mathbf{r}_0\right) \qquad\text{so}\qquad x(t) = x_0 + t\,(x_1 - x_0), \text{ and so on}$$
  <p>
    $\mathbf{r}_1 - \mathbf{r}_0$ is the direction vector of the segment. That makes $\mathbf{r}'(t) = \mathbf{r}_1 - \mathbf{r}_0$:
    each derivative is just "end minus start" for that coordinate.
  </p>

  <h4>Example</h4>
  <p>Parametrize the segment from $(1, -2, 3)$ to $(4, 0, 1)$.</p>
  $$\mathbf{r}(t) = (1 - t)\langle 1, -2, 3 \rangle + t\langle 4, 0, 1 \rangle = \langle 1 + 3t,\ -2 + 2t,\ 3 - 2t \rangle, \qquad 0 \le t \le 1$$
  <p>
    Check the ends: $t = 0$ gives $(1, -2, 3)$ and $t = 1$ gives $(4, 0, 1)$. The differentials are
    $dx = 3\,dt$, $dy = 2\,dt$, $dz = -2\,dt$, which are the changes $4 - 1$, $0 - (-2)$, and $1 - 3$.
  </p>

  <h4>Common slips</h4>
  <ul>
    <li><strong>Swapping the points.</strong> $(1 - t)$ goes with the <em>starting</em> point. Swapping them traces the segment backward, which flips the sign of $\int P\,dx + Q\,dy$ (but not of $\int f\,ds$).</li>
    <li><strong>Using a different interval.</strong> This formula needs $0 \le t \le 1$. Other values of $t$ land on the line beyond the segment's ends.</li>
    <li><strong>Forgetting to check.</strong> Plugging in $t = 0$ and $t = 1$ takes seconds and catches most mistakes.</li>
  </ul>`},i={id:`technique-closed-interval`,title:`Extremes of a one-variable function on an interval`,summary:String.raw`on an edge, $f$ becomes a function of one variable: check where its derivative is $0$ inside the interval, and both endpoints.`,html:String.raw`
  <p>
    On one piece of the boundary, $f$ reduces to a function of a single variable, $g(s)$ for $a \le s \le b$.
    Its largest and smallest values are found the same way as in single-variable calculus:
  </p>
  <ol>
    <li><strong>Find where $g'(s) = 0$</strong> and keep only the solutions strictly between $a$ and $b$.</li>
    <li><strong>Add both endpoints</strong>, $s = a$ and $s = b$. On a polygon, these are the corners.</li>
    <li><strong>Evaluate $g$</strong> at every point found. These are the boundary candidates.</li>
  </ol>

  <h4>Example</h4>
  <p>On the edge $y = 0$, $0 \le x \le 3$, suppose $f$ becomes $g(x) = x^2 - 2x$.</p>
  $$g'(x) = 2x - 2 = 0 \;\Rightarrow\; x = 1, \qquad g(0) = 0,\quad g(1) = -1,\quad g(3) = 3$$
  <p>So the candidates from this edge are $(0, 0)$, $(1, 0)$, and $(3, 0)$, with values $0$, $-1$, and $3$.</p>

  <h4>Common slips</h4>
  <ul>
    <li><strong>Forgetting the endpoints.</strong> The largest value on an edge is often at a corner, where $g'(s) \ne 0$.</li>
    <li><strong>Keeping a critical point outside the interval.</strong> If $g'(s) = 0$ at $s = 5$ but the edge stops at $s = 3$, it doesn't count.</li>
    <li><strong>Forgetting the other coordinate.</strong> Each candidate is a point $(x, y)$: use the edge's equation to find the coordinate you didn't solve for.</li>
  </ul>`},a={id:`technique-critical-point-systems`,title:`Solving for critical points`,summary:String.raw`set both partial derivatives to $0$, factor, and split into cases instead of dividing by a variable.`,html:String.raw`
  <p>
    Critical points come from solving <strong>two equations at once</strong>: $f_x = 0$ and $f_y = 0$. They're usually not linear,
    so there's no single formula. These habits find every solution:
  </p>
  <ol>
    <li><strong>Factor</strong> each equation as much as possible.</li>
    <li><strong>Use the zero-product property:</strong> if $AB = 0$, then $A = 0$ <em>or</em> $B = 0$. Each factor starts a separate case.</li>
    <li><strong>Substitute</strong> each case into the other equation and solve.</li>
    <li><strong>Check</strong> every point in both original equations, and list them all.</li>
  </ol>

  <h4>Never divide by a variable</h4>
  <p>
    Dividing both sides by $x$ assumes $x \ne 0$, and silently throws away every solution with $x = 0$.
    Factor it out instead, and treat $x = 0$ as its own case.
  </p>

  <h4>Example</h4>
  <p>Find the critical points of $f(x, y) = x^2y - x^2 + y^2 - 6y$.</p>
  $$f_x = 2xy - 2x = 2x(y - 1) = 0 \qquad f_y = x^2 + 2y - 6 = 0$$
  <p>From $f_x = 0$: either $x = 0$ or $y = 1$.</p>
  <ul>
    <li><strong>Case $x = 0$:</strong> $f_y = 0 + 2y - 6 = 0$, so $y = 3$. Point: $(0, 3)$.</li>
    <li><strong>Case $y = 1$:</strong> $f_y = x^2 + 2 - 6 = 0$, so $x^2 = 4$ and $x = \pm 2$. Points: $(2, 1)$ and $(-2, 1)$.</li>
  </ul>
  <p>
    Three critical points. Dividing $2xy - 2x = 0$ by $2x$ would have given only $y = 1$, losing $(0, 3)$.
  </p>

  <h4>Linear systems</h4>
  <p>
    When $f$ is a quadratic, both partial derivatives are linear, and there's exactly one solution (unless the lines are parallel).
    Solve one equation for a variable and substitute, or add multiples of the equations to eliminate a variable.
  </p>`},o={id:`technique-lagrange-systems`,title:`Solving a Lagrange system`,summary:String.raw`solve for each variable in terms of $\lambda$ and substitute into the constraint, or factor and split into cases; never divide by a variable. With two constraints, find the lone multiplier first.`,html:String.raw`
  <p>
    The equations $\nabla f = \lambda \nabla g$ and $g = k$ are rarely linear, so there's no single formula. Every solution comes from one of
    a few moves. Pick the one that fits the equations in front of you.
  </p>

  <h4>One constraint</h4>

  <h5>1. Solve for the variables in terms of $\lambda$</h5>
  <p>
    When each equation has just one variable on the right, like $3 = 2\lambda x$, solve for it: $x = \frac{3}{2\lambda}$. Substitute
    every variable into the constraint, which leaves one equation in $\lambda$ alone.
  </p>
  $$3 = 2\lambda x,\quad 4 = 2\lambda y,\quad x^2 + y^2 = 25 \;\Rightarrow\; \frac{9}{4\lambda^2} + \frac{16}{4\lambda^2} = 25 \;\Rightarrow\; \lambda = \pm\frac{1}{2}$$
  <p>Each value of $\lambda$ gives one point: $(3, 4)$ and $(-3, -4)$.</p>

  <h5>2. Factor and split into cases</h5>
  <p>
    Move everything to one side and factor. By the zero-product property, each factor starts its own case. For example,
    $4y = 2\lambda y$ becomes $2y(2 - \lambda) = 0$, so <strong>$y = 0$ or $\lambda = 2$</strong>. Follow each case to the end.
  </p>

  <h5>3. Make the left sides match</h5>
  <p>
    When the equations look alike, multiply them so one side is the same in each. For $f = xy$ and $g = x^2 + 2y^2$:
  </p>
  $$y = 2\lambda x \;\xrightarrow{\ \times x\ }\; xy = 2\lambda x^2, \qquad x = 4\lambda y \;\xrightarrow{\ \times y\ }\; xy = 4\lambda y^2$$
  <p>So $2\lambda x^2 = 4\lambda y^2$. Then handle $\lambda = 0$ as its own case, and otherwise cancel $\lambda$ to get $x^2 = 2y^2$.</p>

  <h5>Never divide by a variable (or by $\lambda$) without a case</h5>
  <p>
    Dividing by $y$ assumes $y \ne 0$ and silently throws away every point with $y = 0$, which is often where the answer is. Factor it
    out instead. The same goes for $\lambda$: check $\lambda = 0$ separately before canceling it.
  </p>

  <h5>Finish the job</h5>
  <ul>
    <li><strong>Use the constraint.</strong> It's always one of the equations. A point that isn't on the constraint doesn't count.</li>
    <li><strong>Keep every sign.</strong> $x^2 = 4$ means $x = 2$ <em>or</em> $x = -2$. Each sign can be a different point.</li>
    <li><strong>You don't need $\lambda$'s value at the end.</strong> It's a helper for finding the points. Only $f$ at the points matters.</li>
  </ul>

  <h4>Two constraints</h4>
  <p>
    With $g = k$ and $h = c$, the system $\nabla f = \lambda \nabla g + \mu \nabla h$ plus both constraints is <strong>5 equations in 5
    unknowns</strong>: $x$, $y$, $z$, $\lambda$, and $\mu$. The same moves as above still work. What's new is choosing the order, so each step
    removes one unknown.
  </p>

  <h5>The order of attack</h5>
  <ol>
    <li><strong>Find an equation with only one multiplier.</strong> When $h$ is a plane, $\nabla h$ is constant, and a component where $\nabla g$
      is $0$ leaves just $\mu$, like $1 = -\mu$. Solve it right away.</li>
    <li><strong>Substitute that multiplier</strong> into the other component equations.</li>
    <li><strong>Solve for the variables in terms of the remaining multiplier</strong>, as in move 1 above (or split into cases, as in move 2).</li>
    <li><strong>Use the curved constraint</strong> to find $\lambda$.</li>
    <li><strong>Use the plane</strong> to find the last variable.</li>
  </ol>

  <h5>Example</h5>
  <p>Find the extreme values of $f(x, y, z) = 2x + 4y + z$ subject to $x^2 + y^2 = 25$ and $x - z = 1$.</p>
  <p>Here $\nabla g = \langle 2x, 2y, 0 \rangle$ and $\nabla h = \langle 1, 0, -1 \rangle$, so the system is:</p>
  $$2 = 2\lambda x + \mu, \qquad 4 = 2\lambda y, \qquad 1 = -\mu, \qquad x^2 + y^2 = 25, \qquad x - z = 1$$
  <ul>
    <li><strong>Lone multiplier:</strong> the $z$-equation has no $\lambda$, so $\mu = -1$.</li>
    <li><strong>Substitute:</strong> the $x$-equation becomes $2 = 2\lambda x - 1$, so $2\lambda x = 3$.</li>
    <li><strong>Variables in terms of $\lambda$:</strong> $\lambda \ne 0$ (since $2\lambda y = 4$), so $x = \frac{3}{2\lambda}$ and $y = \frac{2}{\lambda}$.</li>
    <li><strong>Curved constraint:</strong> $\frac{9}{4\lambda^2} + \frac{4}{\lambda^2} = \frac{25}{4\lambda^2} = 25$, so $\lambda = \pm\frac{1}{2}$.</li>
    <li><strong>Plane:</strong> $\lambda = \frac{1}{2}$ gives $x = 3$, $y = 4$, and $z = x - 1 = 2$. $\lambda = -\frac{1}{2}$ gives $x = -3$, $y = -4$, $z = -4$.</li>
  </ul>
  $$f(3, 4, 2) = 6 + 16 + 2 = 24, \qquad f(-3, -4, -4) = -6 - 16 - 4 = -26$$
  <p>The maximum is $24$ and the minimum is $-26$.</p>

  <h5>When neither multiplier is alone</h5>
  <p>
    If every component equation has both $\lambda$ and $\mu$, <strong>eliminate one</strong>. Solve one equation for $\mu$ and substitute it into
    the others, or subtract two equations whose $\mu$ terms match. For example, with $\nabla h = \langle 1, 1, 0 \rangle$:
  </p>
  $$1 = 2\lambda x + \mu \quad\text{and}\quad 3 = 2\lambda y + \mu \;\xrightarrow{\ \text{subtract}\ }\; 2 = 2\lambda(y - x)$$
  <p>
    That leaves equations in $\lambda$ alone, and you continue as with one constraint. When both constraints are planes, every equation is
    linear, and ordinary elimination solves the whole system.
  </p>

  <h5>Common slips with two constraints</h5>
  <ul>
    <li><strong>Forgetting a constraint.</strong> Both $g = k$ and $h = c$ are in the system. Points must satisfy both.</li>
    <li><strong>Mixing up the multipliers.</strong> $\lambda$ always goes with $\nabla g$ and $\mu$ with $\nabla h$. Write $\nabla f = \lambda \nabla g + \mu \nabla h$ in full before splitting it into components.</li>
    <li><strong>Leaving a variable unfound.</strong> The curved constraint often gives only some of the variables. The plane gives the rest.</li>
  </ul>`},s={id:`technique-distance-derivatives`,title:`Derivatives of |r|`,summary:String.raw`use $\frac{\partial |\mathbf{r}|}{\partial x} = \frac{x}{|\mathbf{r}|}$, which leads to $\nabla\left(\frac{1}{|\mathbf{r}|}\right) = -\frac{\mathbf{r}}{|\mathbf{r}|^3}$.`,html:String.raw`
  <p>
    Fields that depend on distance from the origin use $|\mathbf{r}| = \sqrt{x^2 + y^2 + z^2}$, written $r$ for short.
    Its partial derivatives come from the chain rule:
  </p>
  $$\frac{\partial r}{\partial x} = \frac{1}{2\sqrt{x^2 + y^2 + z^2}} \cdot 2x = \frac{x}{r}, \qquad \frac{\partial r}{\partial y} = \frac{y}{r}, \qquad \frac{\partial r}{\partial z} = \frac{z}{r}$$
  <p>So for any power $r^n$, the chain rule again gives</p>
  $$\frac{\partial}{\partial x}\,r^n = n\,r^{n-1} \cdot \frac{x}{r} = n\,x\,r^{n-2} \qquad\text{and so}\qquad \nabla\left(r^n\right) = n\,r^{n-2}\,\mathbf{r}$$

  <h4>The case that matters most</h4>
  <p>With $n = -1$:</p>
  $$\nabla\left(\frac{1}{r}\right) = -\,r^{-3}\,\mathbf{r} = -\frac{\mathbf{r}}{|\mathbf{r}|^3}$$
  <p>Multiplying by $-c$ shows where inverse-square potentials come from:</p>
  $$f(\mathbf{r}) = -\frac{c}{|\mathbf{r}|} \quad\Longrightarrow\quad \nabla f = \frac{c\,\mathbf{r}}{|\mathbf{r}|^3}$$

  <h4>Check one component by hand</h4>
  $$\begin{aligned} \frac{\partial}{\partial x}\left[-c\left(x^2 + y^2 + z^2\right)^{-1/2}\right] &= -c \cdot \left(-\tfrac{1}{2}\right)\left(x^2 + y^2 + z^2\right)^{-3/2} \cdot 2x \\ &= \frac{c\,x}{\left(x^2 + y^2 + z^2\right)^{3/2}} \end{aligned}$$
  <p>That is exactly the $x$-component of $\dfrac{c\,\mathbf{r}}{|\mathbf{r}|^3}$. The same formulas work in 2D with $r = \sqrt{x^2 + y^2}$.</p>`},c={id:`technique-partial-integration`,title:`Integrating with respect to one variable`,summary:String.raw`integrate in one variable, holding the others constant, and add a function of the others instead of $+\,C$.`,html:String.raw`
  <p>
    To undo a partial derivative, integrate with respect to that one variable and treat every other variable as a
    <strong>constant</strong>, exactly as you did when taking partial derivatives:
  </p>
  $$\int 6x^2y\,dx = 2x^3y \qquad\text{(}y\text{ is a constant, like the 6)}$$

  <h4>The "constant" of integration is a function</h4>
  <p>
    In one variable, the antiderivative is only known up to $+\,C$. Here, anything that doesn't depend on $x$ acts like a
    constant when you differentiate with respect to $x$. So the leftover can be any function of the <em>other</em> variables:
  </p>
  $$\int 6x^2y\,dx = 2x^3y + g(y) \qquad\text{because}\qquad \frac{\partial}{\partial x}\Big[2x^3y + g(y)\Big] = 6x^2y$$
  <p>
    Writing $+\,C$ instead of $+\,g(y)$ is the most common mistake when finding potential functions: it loses every term
    of $f$ that has no $x$ in it.
  </p>

  <h4>Finding the leftover function</h4>
  <ol>
    <li>Differentiate your partial answer with respect to the next variable, say $y$. You get some terms plus $g'(y)$.</li>
    <li>Set that equal to the component you know, such as $Q$. Matching terms cancel.</li>
    <li>What's left is $g'(y)$. It must contain no $x$; if it does, check your work or the field isn't conservative.</li>
    <li>Integrate $g'(y)$ with respect to $y$. Now a true constant $C$ is fine.</li>
  </ol>
  <p>In three dimensions, the first leftover is $g(y, z)$, and finding it produces a second leftover $h(z)$.</p>

  <h4>Watch for the chain rule in reverse</h4>
  <p>
    With $y$ held constant, $\int ye^{xy}\,dx = e^{xy}$, since $\frac{\partial}{\partial x}e^{xy} = ye^{xy}$.
    Likewise $\int \cos(xy) \cdot y\,dx = \sin(xy)$. When the integrand has the other variable multiplying a function of $xy$, look for this pattern.
  </p>`},l={id:`technique-perfect-squares`,title:`Perfect squares under the root`,summary:String.raw`spot $A^2 + 2AB + B^2$ under a square root, so the root disappears.`,html:String.raw`
  <p>
    After squaring and adding the derivatives, you often get three terms under the root.
    Integrating $\sqrt{\text{three terms}}$ directly is usually impossible, so problems are designed so the three terms
    form a perfect square:
  </p>
  $$A^2 + 2AB + B^2 = (A + B)^2 \qquad A^2 - 2AB + B^2 = (A - B)^2$$
  <p>Then the root disappears: $\sqrt{(A + B)^2} = |A + B|$.</p>

  <h4>How to spot one</h4>
  <ol>
    <li><strong>Factor out any common constant first.</strong> $36 + 72t^2 + 36t^4 = 36(1 + 2t^2 + t^4)$.</li>
    <li><strong>Find the two terms that are squares</strong> of something simple. Call those things $A$ and $B$.</li>
    <li><strong>Check the third term.</strong> If it equals $2AB$, you have $(A + B)^2$. If it equals $-2AB$, you have $(A - B)^2$.</li>
    <li><strong>Take the root carefully.</strong> $\sqrt{(A + B)^2} = |A + B|$. Drop the absolute value only if $A + B$ stays positive on the whole interval.</li>
  </ol>

  <h4>Example</h4>
  <p>Find the length of $\mathbf{r}(t) = \left\langle t,\ t^2,\ \tfrac{2}{3}t^3 \right\rangle$ for $0 \le t \le 1$.</p>
  <p>Differentiate, square each term, and add:</p>
  $$\mathbf{r}'(t) = \left\langle 1,\ 2t,\ 2t^2 \right\rangle \qquad |\mathbf{r}'(t)| = \sqrt{1^2 + (2t)^2 + (2t^2)^2} = \sqrt{1 + 4t^2 + 4t^4}$$
  <p>
    The squares are $1 = 1^2$ and $4t^4 = (2t^2)^2$, so $A = 1$ and $B = 2t^2$.
    Check: $2AB = 2 \cdot 1 \cdot 2t^2 = 4t^2$. That matches the middle term, so
  </p>
  $$\sqrt{1 + 4t^2 + 4t^4} = \sqrt{\left(1 + 2t^2\right)^2} = 1 + 2t^2$$
  <p>No absolute value is needed, since $1 + 2t^2$ is always positive. Now the integral is a polynomial:</p>
  $$L = \int_0^1 \left(1 + 2t^2\right)dt = \left[\,t + \frac{2t^3}{3}\,\right]_0^1 = 1 + \frac{2}{3} = \frac{5}{3}$$

  <h4>Patterns worth recognizing</h4>
  <table>
    <thead><tr><th>Expression</th><th>Perfect square</th><th>Why it works</th></tr></thead>
    <tbody>
      <tr><td>$e^{2t} + 2 + e^{-2t}$</td><td>$(e^t + e^{-t})^2$</td><td>$e^t \cdot e^{-t} = 1$</td></tr>
      <tr><td>$e^{2t} - 2 + e^{-2t}$</td><td>$(e^t - e^{-t})^2$</td><td>same, with a minus sign</td></tr>
      <tr><td>$4t^2 + 4 + \tfrac{1}{t^2}$</td><td>$\left(2t + \tfrac{1}{t}\right)^2$</td><td>$t \cdot \tfrac{1}{t} = 1$</td></tr>
      <tr><td>$1 + 2t^2 + t^4$</td><td>$(1 + t^2)^2$</td><td>$A = 1$, $B = t^2$</td></tr>
      <tr><td>$1 + 4t^2 + 4t^4$</td><td>$(1 + 2t^2)^2$</td><td>$A = 1$, $B = 2t^2$</td></tr>
    </tbody>
  </table>
  <p>
    A strong hint: when a component is $e^{t}$ paired with $e^{-t}$, or $t$ paired with $\ln t$, expect a perfect square.
    Their products are constants, which is exactly what the middle term needs.
  </p>`},u={id:`technique-pythagorean-identity`,title:`The identity sin² + cos² = 1`,summary:String.raw`factor out the common coefficient so $\sin^2 t + \cos^2 t$ becomes $1$.`,html:String.raw`
  $$\sin^2\theta + \cos^2\theta = 1$$
  <p>
    <strong>Why it's true:</strong> the point $(\cos\theta, \sin\theta)$ lies on the unit circle, at distance $1$ from the origin.
    By the Pythagorean theorem, $(\cos\theta)^2 + (\sin\theta)^2 = 1^2$.
  </p>

  <h4>Where it shows up</h4>
  <p>
    Any curve built from $a\cos t$ and $a\sin t$ (circles, helices, ellipses with equal axes) produces
    $a^2\sin^2 t + a^2\cos^2 t$ when you compute the speed $|\mathbf{r}'(t)|$.
    <strong>Factor out the common coefficient first</strong>, then apply the identity:
  </p>
  $$9\sin^2 t + 9\cos^2 t + 16 = 9\left(\sin^2 t + \cos^2 t\right) + 16 = 9 + 16 = 25$$
  <p>
    The identity only applies when the coefficients match. $4\sin^2 t + 9\cos^2 t$ (from an ellipse) does <em>not</em> simplify to a constant.
  </p>

  <h4>When sine and cosine are mixed together</h4>
  <p>Curves like $\langle e^t\cos t, e^t\sin t\rangle$ give squared binomials. Expand, then use the identity:</p>
  $$(\cos t - \sin t)^2 = \cos^2 t - 2\sin t\cos t + \sin^2 t = 1 - 2\sin t\cos t$$
  $$(\sin t + \cos t)^2 = \sin^2 t + 2\sin t\cos t + \cos^2 t = 1 + 2\sin t\cos t$$
  <p>Added together, the $\pm 2\sin t\cos t$ terms cancel and leave $2$.</p>

  <h4>Other forms of the same identity</h4>
  <ul>
    <li>$1 - \sin^2\theta = \cos^2\theta$ and $1 - \cos^2\theta = \sin^2\theta$ (rearranged)</li>
    <li>$1 + \tan^2\theta = \sec^2\theta$ (divide everything by $\cos^2\theta$). This appears with curves like $\langle t, \ln(\cos t)\rangle$, whose speed is $\sqrt{1 + \tan^2 t} = \sec t$.</li>
  </ul>
  <p><strong>Watch the notation:</strong> $\sin^2 t$ means $(\sin t)^2$, not $\sin(t^2)$.</p>`},d={id:`technique-u-substitution`,title:`u-substitution`,summary:String.raw`when the integrand contains a function and its derivative, substitute $u$ and change the bounds.`,html:String.raw`
  <p>
    u-substitution undoes the chain rule. Use it when the integrand contains a function <em>and</em> (a constant multiple of)
    that function's derivative:
  </p>
  $$\int f\big(g(t)\big)\,g'(t)\,dt = \int f(u)\,du \qquad \text{where } u = g(t)$$

  <h4>Steps</h4>
  <ol>
    <li><strong>Choose $u$.</strong> Usually the inside of a root, a power, or an exponent.</li>
    <li><strong>Compute $du$</strong> and solve for the piece of the integrand it replaces.</li>
    <li><strong>Change the bounds</strong> for a definite integral: plug the old $t$-bounds into $u = g(t)$.</li>
    <li><strong>Integrate in $u$</strong> and evaluate at the new bounds. No need to switch back to $t$.</li>
  </ol>
  <p>If any $t$ is left over after substituting, $u$ was the wrong choice. Try a different one.</p>

  <h4>Example</h4>
  <p>The arc length of $\mathbf{r}(t) = \langle t^2, t^3 \rangle$ on $0 \le t \le 1$ leads to this integral.</p>
  $$\begin{gathered} u = 4 + 9t^2, \qquad du = 18t\,dt \;\Rightarrow\; t\,dt = \tfrac{1}{18}\,du \\ \text{bounds: } t = 0 \to u = 4, \qquad t = 1 \to u = 13 \end{gathered}$$
  $$\int_0^1 t\sqrt{4 + 9t^2}\,dt = \frac{1}{18}\int_4^{13} u^{1/2}\,du = \frac{1}{18}\cdot\frac{2}{3}\Big[u^{3/2}\Big]_4^{13} = \frac{13\sqrt{13} - 8}{27}$$

  <h4>Common slips</h4>
  <ul>
    <li>Forgetting to change the bounds, then plugging $t$-values into a $u$-expression.</li>
    <li>Dropping the constant: $du = 18t\,dt$ means $t\,dt = \tfrac{1}{18}du$, not $du$.</li>
  </ul>`},f={id:`technique-power-reducing`,title:`Integrating sin² and cos²`,summary:String.raw`rewrite $\sin^2 t$ or $\cos^2 t$ as $\frac{1 \mp \cos 2t}{2}$, which you can integrate.`,html:String.raw`
  <p>
    You can't integrate $\sin^2 t$ or $\cos^2 t$ directly, and u-substitution doesn't help because there is no
    extra $\cos t$ or $\sin t$ to serve as $du$. Instead, rewrite them with the <strong>power-reducing identities</strong>:
  </p>
  $$\sin^2 t = \frac{1 - \cos 2t}{2} \qquad \cos^2 t = \frac{1 + \cos 2t}{2}$$
  <p>
    <strong>Where they come from:</strong> the double-angle formula $\cos 2t = \cos^2 t - \sin^2 t$. Replace $\cos^2 t$ with
    $1 - \sin^2 t$ and solve for $\sin^2 t$, or replace $\sin^2 t$ with $1 - \cos^2 t$ and solve for $\cos^2 t$.
  </p>

  <h4>Example</h4>
  $$\int_0^{2\pi} \sin^2 t\,dt = \int_0^{2\pi} \frac{1 - \cos 2t}{2}\,dt = \left[\,\frac{t}{2} - \frac{\sin 2t}{4}\,\right]_0^{2\pi} = \pi - 0 = \pi$$
  <p>The antiderivative of $\cos 2t$ is $\tfrac{1}{2}\sin 2t$, because of the chain rule in reverse.</p>

  <h4>Shortcut for full periods</h4>
  <p>
    Over any whole number of half-turns, such as $[0, \pi]$ or $[0, 2\pi]$, the $\sin 2t$ term is $0$ at both ends.
    So the integral of $\sin^2 t$ or $\cos^2 t$ is just <strong>half the length of the interval</strong>:
  </p>
  $$\int_0^{\pi} \sin^2 t\,dt = \frac{\pi}{2} \qquad \int_0^{2\pi} \cos^2 t\,dt = \pi$$

  <h4>Don't confuse it with u-substitution</h4>
  <p>
    $\int \cos^2 t \sin t\,dt$ is different: the extra $\sin t$ is the derivative of $\cos t$ (up to a sign),
    so $u = \cos t$ works and gives $-\tfrac{1}{3}\cos^3 t$. Use power-reducing only when nothing is left over to be $du$.
  </p>`},p={id:`technique-cross-products`,title:`Cross products`,summary:String.raw`$\mathbf{a} \times \mathbf{b}$ is the $3 \times 3$ determinant with $\mathbf{i}, \mathbf{j}, \mathbf{k}$ on top; it's perpendicular to both $\mathbf{a}$ and $\mathbf{b}$.`,html:String.raw`
  <p>Set up a $3 \times 3$ grid: the unit vectors on top, then $\mathbf{a}$, then $\mathbf{b}$, in that order.</p>
  $$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}$$
  <p>
    Expand along the top row. For each unit vector, cover its row and column; the $2 \times 2$ grid left over gives that component.
    The middle term gets a minus sign.
  </p>
  $$= \mathbf{i} \begin{vmatrix} a_2 & a_3 \\ b_2 & b_3 \end{vmatrix} - \mathbf{j} \begin{vmatrix} a_1 & a_3 \\ b_1 & b_3 \end{vmatrix} + \mathbf{k} \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix}$$
  <p>Each $2 \times 2$ grid is (top left)(bottom right) $-$ (top right)(bottom left), so</p>
  $$\mathbf{a} \times \mathbf{b} = \left\langle a_2 b_3 - a_3 b_2,\ a_3 b_1 - a_1 b_3,\ a_1 b_2 - a_2 b_1 \right\rangle$$
  <p>The minus sign on $\mathbf{j}$ is the easiest step to drop: the middle component is $-(a_1 b_3 - a_3 b_1) = a_3 b_1 - a_1 b_3$.</p>

  <h4>Example</h4>
  $$\begin{aligned} \langle 1, 0, 2 \rangle \times \langle 0, 1, -1 \rangle &= \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 0 & 2 \\ 0 & 1 & -1 \end{vmatrix} \\ &= \mathbf{i} \begin{vmatrix} 0 & 2 \\ 1 & -1 \end{vmatrix} - \mathbf{j} \begin{vmatrix} 1 & 2 \\ 0 & -1 \end{vmatrix} + \mathbf{k} \begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} \\ &= \mathbf{i}\big(0(-1) - 2(1)\big) - \mathbf{j}\big(1(-1) - 2(0)\big) + \mathbf{k}\big(1(1) - 0(0)\big) \\ &= -2\mathbf{i} + \mathbf{j} + \mathbf{k} = \langle -2, 1, 1 \rangle \end{aligned}$$
  <p>
    <strong>Check it:</strong> the answer should be perpendicular to both vectors, so both dot products are 0:
    $\langle -2, 1, 1 \rangle \cdot \langle 1, 0, 2 \rangle = -2 + 0 + 2 = 0$ and $\langle -2, 1, 1 \rangle \cdot \langle 0, 1, -1 \rangle = 0 + 1 - 1 = 0$.
  </p>
  <p>The order matters: $\mathbf{b} \times \mathbf{a} = -\mathbf{a} \times \mathbf{b}$. For a normal vector to a plane, either one works.</p>`},m={id:`technique-completing-the-square`,title:`Completing the square`,summary:String.raw`turn $x^2 + bx$ into $\left(x + \frac{b}{2}\right)^2 - \frac{b^2}{4}$, to read a sphere's center and radius from its expanded equation.`,html:String.raw`
  <p>
    An expanded equation like $x^2 + y^2 + z^2 - 6x + 4z = 3$ hides a sphere's center and radius. Completing the square in each variable brings back the form
    $(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2$.
  </p>
  <h4>The rule</h4>
  <p>Take half the coefficient of the linear term, square it, and add it to both sides:</p>
  $$x^2 + bx + \left(\frac{b}{2}\right)^2 = \left(x + \frac{b}{2}\right)^2$$
  <h4>Example</h4>
  <p>For $x^2 + y^2 + z^2 - 6x + 4z = 3$: half of $-6$ is $-3$, squared $9$; half of $4$ is $2$, squared $4$. $y$ has no linear term, so it stays $y^2$.</p>
  $$(x^2 - 6x + 9) + y^2 + (z^2 + 4z + 4) = 3 + 9 + 4 \quad\Rightarrow\quad (x - 3)^2 + y^2 + (z + 2)^2 = 16$$
  <p>The center is $(3, 0, -2)$ (flip each sign inside the squares) and the radius is $\sqrt{16} = 4$.</p>
  <h4>Common slips</h4>
  <ul>
    <li><strong>Adding to one side only.</strong> Whatever you add on the left must be added on the right.</li>
    <li><strong>Keeping the signs.</strong> $(z + 2)^2$ means $l = -2$: the center's coordinate has the opposite sign.</li>
    <li><strong>Forgetting the leading coefficient.</strong> With $2x^2 + 2y^2 + 2z^2$, divide the whole equation by $2$ first.</li>
    <li><strong>Calling $r^2$ the radius.</strong> The right side is $r^2$; take its square root. If it comes out $0$ the "sphere" is one point, and if it's negative there are no points at all.</li>
  </ul>`};export{p as a,c,u as d,r as f,n as h,a as i,l,e as m,i as n,s as o,d as p,m as r,o as s,t,f as u};