let info = [
  {
    params: ["a", "b"],
    body: "console.log('additon is a + b', a+b)",
    args: [30, 15],
  },
  {
    params: ["a", "b"],
    body: "console.log('Substraction is a + b', a-b)",
    args: [30, 15],
  },
  {
    params: ["a", "b"],
    body: "console.log('Multiplication is a + b', a*b)",
    args: [30, 15],
  },
  {
    params: ["a", "b"],
    body: "console.log('Division is a + b', a/b)",
    args: [30, 15],
  },
];
info.forEach((item) => {
  const fun = new Function(...item.params, item.body);
  fun(...item.args);
});
