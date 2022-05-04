const compact = (arr) => {
  console.log(arguments);
  const copyOfOriginal = [...arr];
  const result = copyOfOriginal.filter((item) => item);
  return result;
};
console.log(compact([1, 2, null, false, "", undefined, NaN, 5, 6, 4, 4]));
