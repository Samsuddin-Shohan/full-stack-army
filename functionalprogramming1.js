//side effect
const fruits = ["pineapple", "orange", "pawpaw", "kiwi"];
function removeData(dataArr) {
  const removedFruits = [...dataArr];
  removedFruits.pop();
  return removedFruits;
}
const removedFruits = removeData(fruits);
console.log(fruits, removedFruits);
