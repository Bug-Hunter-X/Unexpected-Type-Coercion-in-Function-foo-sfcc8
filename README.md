# Unexpected Type Coercion in JavaScript Function

This repository demonstrates a subtle bug in JavaScript related to type coercion when using loose equality (==) in a function's conditional statement.  The function `foo` intends to return 0 only when both inputs are strictly null. However, due to loose comparison, other falsy values could lead to unexpected results.

The `bug.js` file contains the buggy code.  The solution, implemented in `bugSolution.js`, addresses this by using strict equality (===).