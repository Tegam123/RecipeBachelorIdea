const Role = require("../_helpers/role");
module.exports = users = [
  {
    id: 1,
    username: "Poul",
    password: "Poul",
    firstName: "Poul",
    lastName: "Administrator",
    role: Role.Administrator,
  },
  {
    id: 2,
    username: "David",
    password: "David",
    firstName: "David",
    lastName: "Manager",
    role: Role.Manager,
  },
  {
    id: 3,
    username: "Victor",
    password: "Victor",
    firstName: "Victor",
    lastName: "User",
    role: Role.User,
  },
];
