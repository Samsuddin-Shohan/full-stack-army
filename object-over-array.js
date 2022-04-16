function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const students = [
  {
    id: "bcb09c6c-3554-40e3-84f3-4d9f47f75df1",
    name: "biplob",
    email: "biplob@gmail.com",
  },

  {
    id: "959425f3-678c-4780-a7a4-2b95d0b9e113",
    name: "shohan",
    email: "shohan@gmail.com",
  },
  {
    id: "335eccde-5fb6-4fb4-8f7f-48f12d4ff39d",
    name: "emon",
    email: "emon@gmail.com",
  },
];
console.log(students);
