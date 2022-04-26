const randomSum = (max) => {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 + random2;
};
const randomSub = (max) => {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 - random2;
};
const randomSumSquare = (max) => {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return random1 * random1 + random2 * random2;
};
