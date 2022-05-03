const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(2000).then(() => {
  console.log("Done in 2000ms");
});

wait(1000).then(() => {
  console.log("Done in 1000ms");
});

wait(3000).then(() => {
  console.log("Done in 3000ms");
});
