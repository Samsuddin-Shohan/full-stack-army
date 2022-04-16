let arr1 = [3, 2, 5, 3, 1];
// console.log(arr1);
arr1.push(4);
// console.log(arr1);
arr1 = [];
// console.log("====================================");
// console.log(arr1);
// console.log("====================================");

let firstObj = {
  name: "shohan",
  dept: "cse",
  id: 1802017,
  read: function () {
    console.log(`${this.name} can read`);
  },
};

//console.log(firstObj);
// for (const x in firstObj) {
//   if (firstObj[x] === "cse") {
//     continue;
//   } else {
//     delete firstObj[x];
//   }
// }
// console.log(firstObj);

// for (const x in firstObj) {
//   if (typeof firstObj[x] === "number") {
//     firstObj[x] *= 2;
//   } else if (typeof firstObj[x] === "string") {
//     firstObj[x] += firstObj[x];
//   }
// }
// console.log(firstObj);
// console.log(firstObj.lenght);
// const size = Object.values(firstObj);
// console.log(size);
// console.log(obj);
