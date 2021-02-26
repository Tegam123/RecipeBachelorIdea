const express = require("express");
const router = express.Router();
const adminService = require("./admin.service");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

/// ROUTES ///
router.post("/promote/:id", authorize(Role.Administrator), promote); // public route
module.exports = router;

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
