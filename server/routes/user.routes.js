import express from "express";

import {
  getAllUsers,
  getUserInfoByID,
  createUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoByID);

export default router;
