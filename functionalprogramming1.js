function randomSum(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  t();
  function t() {
    console.log(test);
  }
  var test = "something";
  t();
  return random1 + random2; // placeholder
}

const r = randomSum(15);
