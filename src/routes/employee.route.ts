/* eslint-disable @typescript-eslint/no-empty-function */
import { Router } from "express";
import multer from "multer";
import {
  addEmployeesfromCSV,
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employee.controler";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getAllEmployees);

router.post("/upload", upload.array("file"), addEmployeesfromCSV);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

export default router;
