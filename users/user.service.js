const config = require("config.json");
const jwt = require("jsonwebtoken");
const Role = require("_helpers/role");
const users = require("../models/userschema");
const bcrypt = require("bcrypt");


module.exports = {
  authenticate,
  register,
  getAll,
  getById,
};

async function authenticate({ username, password }) {
  const user = await users.findOne({ username: username });

  let Ispasswordvalid = await bcrypt
    .compare(password, user.password)
    .then(function (res) {
      return res;
    });
  if (Ispasswordvalid) {
    const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
    return {
      token,
    };
  }
}

async function register({ username, password, firstname, lastname }) {
  let hash = await bcrypt.hash(password, 2);

  // Store hash in your password DB.
  let newUser = {
    username: username,
    password: hash,
    firstName: firstname,
    lastName: lastname,
    role: Role.User,
  };

  try {
    let test = await users.create(newUser);
    if (test) {
      const token = jwt.sign({ sub: test.id, role: test.role }, config.secret);
      return {
        token,
      };
    }
  } catch {}
}

async function getAll() {
  const dbusers = await users.find({}).catch((reason) =>
    res.status(400).json({
      title: "Unable to read users from the database",
      detail: reason,
    })
  );
  return dbusers.map((u) => {
    return {
      firstname: u.firstName,
      lastname: u.lastName,
      username: u.username,
      role: u.role,
    };
  });
}

async function getById(id) {
  const dbuser = users.findById(id);
  if (!user) return;
  return {
    firstname: dbuser.firstName,
    lastname: dbuser.lastName,
    username: dbuser.username,
    role: dbuser.role,
  };
}
