const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
  const o = {
    id: i,
    value: i,
  };
  arr.push(o);
  arrToObj[i] = o;
}
let id = 4999999;

// console.time("array");

// const obj = arr.find((item) => item.id === id);
// obj.value = 555;
// console.timeEnd("array"); // 104.901ms

// console.time("obj");
// arrToObj[id].value = 999;
// console.timeEnd("obj"); // 0.019ms

console.time("array");
arr.unshift({
  id: 5000000,
  value: 5000000,
});
console.timeEnd("array"); // 15.084ms

// console.time('obj');
// arrToObj[5000000] = {
// 	id: 5000000,
// 	value: 5000000,
// };
// console.timeEnd('obj'); // 0.018ms

// console.time('array');
// const index = arr.findIndex((item) => item.id === 4000000);
// arr.splice(index, 1);
// console.timeEnd('array'); // 93.135ms

// console.time('obj');
// delete arrToObj[4000000];
// console.timeEnd('obj'); // 0.015ms
