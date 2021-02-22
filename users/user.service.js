const config = require("config.json");
const jwt = require("jsonwebtoken");
const Role = require("_helpers/role");
const users = require("../models/userschema");
const bcrypt = require('bcrypt');
const { db } = require("../models/userschema");

module.exports = {
  authenticate,
  getAll,
  getById,
};



async function authenticate({ username, password }) {
  const user = await users.findOne({username: username});

  let Ispasswordvalid = await bcrypt.compare(password, user.password).then(function (res) {
    return res
    });
  if (Ispasswordvalid){
  const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
  return {
    token
    };
  }
}

async function getAll() {

  const dbusers = await users.find({})
    .catch(reason =>
      res.status(400).json({
          "title": "Unable to read users from the database",
          "detail": reason
      })
    );
  return dbusers.map(u => {
    return {
      firstname: u.firstName,
      lastname: u.lastName,
      username: u.username,
      role: u.role};
  })
}

async function getById(id) {
  const dbuser = users.findById(id);
  if (!user) return;
  return {
    firstname: dbuser.firstName,
    lastname: dbuser.lastName,
    username: dbuser.username,
    role: dbuser.role};
}
