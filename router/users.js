const express = require("express");
const router = express.Router();
const userController = require("../users/users.controller");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Managing the different users, here you can register, login and get all users and their ID's
 */

/**
 * @swagger
 * /users/authenticate:
 *   post:
 *     summary: Is used to Login with a user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Logged in
 */
router.post("/authenticate", userController.authenticate); // public route

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Is used to create a new user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 required: true
 *               firstname:
 *                 type: string
 *                 required: true
 *               lastname:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *               role:
 *                 type: string
 *                 required: false
 *     responses:
 *       200:
 *         description: Created
 */
router.post("/register", userController.register); // public route

/**
 * @swagger
 * /users/getall:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve the list of users, and their ID's (The ID of an user can be used to promote a User to a Manager, can only be done if an User is logged in).
 *     tags: [Users]
 *     description: Retrieve a list of users.
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
