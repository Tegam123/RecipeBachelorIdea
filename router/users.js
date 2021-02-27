const express = require("express");
const router = express.Router();
const userController = require("../users/users.controller");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Managing the different users
 */

router.post("/authenticate", userController.authenticate); // public route
router.post("/register", userController.register); // public route

/**
 * @swagger
 * /users/getall:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve the list of users
 *     tags: [Users]
 *     description: Retrieve a list of users. Can be used to something...
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   description: The username.
 *                   example: JohnDoe
 *                 firstname:
 *                   type: string
 *                   description: The user's firstname.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The user's lastname.
 *                   example: Doe
 *                 role:
 *                   type: string
 *                   description: The user's role.
 *                   example: Administrator
 */
router.get("/getall", authorize(Role.Admin), userController.getAll); // admin only
//router.get("/:id", authorize(), userController.getById); // all authenticated users

module.exports = router;
