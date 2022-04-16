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
// console.log(students);
//create operation
students.push({
  id: "3e313f0a-79b3-454a-8633-b373ea4ad9cb",
  name: "Habiba",
  email: "Habiba@gmail.com",
});
students.unshift({
  id: "5b4981f9-2744-4728-93b9-e138cb5dd355",
  name: "al-amin",
  email: "alamin@gmail.com",
});

//Update operation
const idToUpdate = "959425f3-678c-4780-a7a4-2b95d0b9e113";
const index = students.findIndex((item) => item.id === idToUpdate);
const udpatedObj = {
  name: "yash",
  email: "yash@gmail.com",
};
students[index] = {
  ...students[index],
  ...udpatedObj,
};
//Delete
const idToDelete = "335eccde-5fb6-4fb4-8f7f-48f12d4ff39d";
const indexToDelete = students.findIndex((item) => item.id === idToDelete);
students.splice(indexToDelete, 1);

for (let i = 0; i < students.length; i++) {
  console.log("using loop", students[i].name);
}

for (const item of students) {
  console.log("using for of", item.name);
}
for (const i in students) {
  console.log("using for in", students[i].name);
}
//console.log(students);
