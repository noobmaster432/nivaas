import express from "express";

import {
  createProperty,
  getAllProperties,
  getPropertyDetail,
  deleteProperty,
  updateProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

router.route("/").get(getAllProperties);
router.route("/").post(createProperty);
router.route("/:id").get(getPropertyDetail);
router.route("/:id").delete(deleteProperty);
router.route("/:id").patch(updateProperty);

export default router;
