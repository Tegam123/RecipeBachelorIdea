// const usershema = require("../models/userschema");
// var mongoose = require("mongoose");

// let dbUrl = "mongodb://localhost:27017/Recipe";

// const users = [
//   {
//     id: 1,
//     username: "Poul",
//     password: "Poul",
//     firstName: "Poul",
//     lastName: "Super",
//     role: Role.Admin,
//   },
//   {
//     id: 2,
//     username: "David",
//     password: "David",
//     firstName: "David",
//     lastName: "User",
//     role: Role.User,
//   },
//   {
//     id: 3,
//     username: "Victor",
//     password: "Victor",
//     firstName: "Victor",
//     lastName: "BadCoder",
//     role: Role.BadCoder,
//   },
//   {
//     id: 4,
//     username: "Lasse",
//     password: "Lasse",
//     firstName: "Lasse",
//     lastName: "Rookie",
//     role: Role.Rookie,
//   },
// ];

// mongoose
//   .connect(dbUrl, { useNewUrlParser: true })
//   .catch((err) => {
//     console.log(err.stack);
//     process.exit(1);
//   })
//   .then(() => {
//     console.log("connected to db in development environment");
//   });

// users.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === products.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });

const bcrypt = require('bcrypt');
const saltRounds = 10;
const plaintextPassword = 'Victor';



bcrypt.hash(plaintextPassword, saltRounds).then(function(hash) {
// Store hash in your password DB.
console.log(hash)
});
