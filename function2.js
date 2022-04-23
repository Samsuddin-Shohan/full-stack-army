function testFunction() {
  console.log("I am a test function");
  //   return 2;
}

const fn = testFunction;

// const arr = [fn, testFunction];
// const obj = {
//   fn: testFunction,
// };
// arr[0]();
function fnArgument(fn) {
  return fn();
}
const hello = fnArgument(testFunction);
console.log(hello);
