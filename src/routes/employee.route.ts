/* eslint-disable @typescript-eslint/no-empty-function */
import { Router } from "express";
import multer from "multer";
import {
  addEmployeesfromCSV,
  getAllEmployees,
} from "../controllers/employee.controler";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getAllEmployees);

router.post("/upload", upload.single("file"), addEmployeesfromCSV);

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

export default router;
