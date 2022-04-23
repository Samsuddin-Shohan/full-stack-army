const info = {
  parameter: ["a", "b"],
  body: ["const sub = a-b;", "return sub;"],
};
const functionBody = info.body.reduce((acc, cur) => {
  acc += cur;
  return acc;
}, "");
const substraction = new Function(...info.parameter, functionBody);
console.log(substraction(30, 20));
