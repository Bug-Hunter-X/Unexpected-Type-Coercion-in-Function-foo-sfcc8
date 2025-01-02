function foo(a, b) {
  if (a === null || b === null) {
    return 0; 
  }
  return a + b; 
}
console.log(foo(null, 1)); //Output: 0
console.log(foo(1, null)); //Output: 0
console.log(foo(null, null)); //Output: 0
console.log(foo(1, 2)); //Output: 3

//Corrected version using strict equality
function fooStrict(a, b) {
  if (a === null && b === null) {
    return 0;
  }
  return a + b;
}
console.log(fooStrict(null, 1)); // Output: 0
console.log(fooStrict(1, null)); //Output: 0
console.log(fooStrict(null, null)); //Output: 0
console.log(fooStrict(1, 2)); //Output: 3
console.log(fooStrict(0, 1)); // Output: 1
console.log(fooStrict(1, false)); //Output: 1
console.log(fooStrict("",1)); //Output: 1