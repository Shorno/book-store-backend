import express from "express";
import {getMobileData} from "../controller/mobileController.js";

const router = express.Router();

router
    .route("/")
    .get(getMobileData)



export default router;