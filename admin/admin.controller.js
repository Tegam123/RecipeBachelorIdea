const adminService = require("./admin.service");

module.exports = {
  promote,
};

function promote(req, res, next) {
  adminService
    .promote(req.params.id)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "user could not be updated" })
    )
    .catch((err) => next(err));
}
