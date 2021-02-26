const express = require('express');
const router = express.Router();
const adminController = require('../admin/admin.controller');
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

router.post("/promote/:id", authorize(Role.Administrator), adminController.promote); // public route

module.exports = router; 