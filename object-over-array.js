const students = {
  "bcb09c6c-3554-40e3-84f3-4d9f47f75df1": {
    id: "bcb09c6c-3554-40e3-84f3-4d9f47f75df1",
    name: "biplob",
    email: "biplob@gmail.com",
  },
  "959425f3-678c-4780-a7a4-2b95d0b9e113": {
    id: "959425f3-678c-4780-a7a4-2b95d0b9e113",
    name: "shohan",
    email: "shohan@gmail.com",
  },
  "335eccde-5fb6-4fb4-8f7f-48f12d4ff39d": {
    id: "335eccde-5fb6-4fb4-8f7f-48f12d4ff39d",
    name: "emon",
    email: "emon@gmail.com",
  },
};
//Traverse
// for (const key in students) {
//   console.log(key, students[key]);
// }
//filter;
Object.keys(students).forEach(
  (item) => (students[item].name = students[item].name + "a")
);
//Read
console.log(students["335eccde-5fb6-4fb4-8f7f-48f12d4ff39d"].name);

//Create
students["335eccde-5fb6-4fb4-8f7f-48f12d4ff325"] = {
  id: "335eccde-5fb6-4fb4-8f7f-48f12d4ff325",
  name: "maruf",
  email: "maruf@gmail.com",
};

//update
const idToUpdate = "335eccde-5fb6-4fb4-8f7f-48f12d4ff325";
const updatedObj = {
  name: "maruiffa",
  email: "maruiffa@gmail.com",
};
students[idToUpdate] = {
  ...students[idToUpdate],
  ...updatedObj,
};

//delete
delete students[idToUpdate];
console.log(students);
