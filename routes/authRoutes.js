import express from "express";
import {createJWT} from "../controller/authController.js";

const router = express.Router();


router.route("/jwt").post(createJWT)


export default router;