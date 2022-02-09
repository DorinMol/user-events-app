require("../startup/db");

const UserModel = require("../models/user");

const sampleData = [
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    events: [],
    password: "1234",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    password: "1234",
  },
  {
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    password: "1234",
  },
  {
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    password: "1234",
  },
  {
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    password: "1234",
  },
];

async function runSeed() {
  // use save instead of insertMany so password hash can do it's job
  await Promise.all(sampleData.map((user) => new UserModel(user).save()));
  console.log("DONE!");
  process.exit(0);
}

runSeed();
