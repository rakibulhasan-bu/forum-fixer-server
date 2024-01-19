import express from "express";
import { categoryController } from "./issue.controller";
import validateRequest from "../../middleware/validateRequest";
import { categoryValidation } from "./issue.validation";
import auth from "../../middleware/auth";
import USER_ROLE from "../user/user.const";

const categoryRoute = express.Router();

categoryRoute.post(
  "/categories",
  auth(USER_ROLE.admin),
  validateRequest(categoryValidation.categoryValidationSchema),
  categoryController.createCategory,
);

categoryRoute.get("/categories", categoryController.getAllCategory);

export default categoryRoute;
