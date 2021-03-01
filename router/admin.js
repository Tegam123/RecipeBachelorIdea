const express = require("express");
const router = express.Router();
const adminController = require("../admin/admin.controller");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Managing the different users
 */

/**
 * @swagger
 * /admin/promote/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Promote a user from User to Manager (This can only be done by an Administator (The only Administrator is Poul)).
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         requried: true
 *         description: The id of the user
 *     responses:
 *       200:
 *         description: Promote successful
 */
router.post(
  "/promote/:id",
  authorize(Role.Administrator),
  adminController.promote
); // public route

module.exports = router;
