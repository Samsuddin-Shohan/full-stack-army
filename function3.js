// const newFn = new Function(
//   "arr",
//   `let newArr = [];
//     for (let a of arr) {
//         if (a%2) {
//            newArr.push(a);
//         }
//     }
//     return newArr;`
// );

// console.log(newFn([1, 2, 3, 4, 5, 6, 7, 8]));

// const greetFunction = new Function(
//   "name",
//   "email",
//   `
//       const fName = name.split(' ')[0];
//       console.log('My name is ', fName, ' & email is ' , email);
//       return fName;
//   `
// );

// const firstName = greetFunction("samsuddin shohan", "shohan@gmail.com");
// console.log(firstName);
const fData = {
  params: ["a", "b"],
  body: ["const r = a + b", "return r"],
};

const fBody = fData.body.reduce((acc, cur) => {
  acc += cur + ";";
  return acc;
}, "");

const tf = new Function(...fData.params, fBody);
console.log(tf.toString());
console.log(tf(100, 200));
