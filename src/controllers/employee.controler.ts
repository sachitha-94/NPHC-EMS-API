import { NextFunction, Request, Response } from "express";
import csv from "csvtojson";
import { Employee, EmployeeInput } from "../models/employee.model";

export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const employees = await Employee.find();
    res.json({ sucess: true, data: employees });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error.",
    });
    next(error);
  }
};

export const addEmployeesfromCSV = async (req: Request, res: Response) => {
  try {
    const { file } = req;

    if (!file?.path) throw Error();

    const jsonObj = await csv().fromFile(file?.path);

    const employees = jsonObj?.map((employee) => {
      return {
        id: employee?.id,
        fullName: employee.fullName,
        userName: employee.userName,
        salary: employee.salary,
      } as EmployeeInput;
    });

    const result = await Employee.insertMany(employees);
    return res
      .status(201)
      .json({ message: "Successfully Uploaded", data: result, error: false });
  } catch (error) {
    return res.status(500).json({ message: "Error", data: null, error: true });
  }
};
