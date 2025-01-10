import express from "express";
import {createUser, getUsers} from "../controller/UserController.js";
import {verifyToken} from "../controller/authController.js";

const router = express.Router();

router.route("/")
    .post(createUser)
    .get(verifyToken, getUsers)


export default router;