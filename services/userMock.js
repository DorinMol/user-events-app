const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Smith Allen",
    email: "smith@gmail.com",
  },
  {
    id: 3,
    name: "Brave Rodger",
    email: "rodger@gmail.com",
  },
];

const getUsers = () => users;
const getUser = (id) => users.find((user) => user.id === id);

module.exports = {
  getUser,
  getUsers,
};
