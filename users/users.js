const Role = require("../_helpers/role");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const plaintextPassword = "qwerasdf";

module.exports = users = [
  {
    username: "Poul",
    password: "$2b$10$Kf9OFQxitojQMDbaY/xdTu2NbCLWt7pKns6bHPVNtm1E7TO12UdC.",
    firstName: "Poul",
    lastName: "Ejnar",
    role: Role.Administrator,
  },
  {
    username: "David",
    password: "$2b$10$X471xReI.UIXY8hTR2wycehIFoMOo8v6AXSdUnIwoQlaVm46GSgSi",
    firstName: "David",
    lastName: "Tegam",
    role: Role.Manager,
  },
  {
    username: "Victor",
    password: "$2b$10$RZ5FR54H/c7Zy/2N/bbEmO9AAwUolXwyrVuR8XsDvOmoZh5X9Qgpy",
    firstName: "Victor",
    lastName: "Kildahl",
    role: Role.User,
  },
];
