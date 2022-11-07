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

    if (!file?.path) throw Error("File is not fount");

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
    return res.status(500).json({ message: error, data: null, error: true });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { params } = req;

    if (!params?.id) throw new Error("Id is Required");

    const result = await Employee.findOneAndDelete({ id: params?.id });
    if (!result) throw new Error("Employee Not found");
    return res
      .status(204)
      .json({ message: "Successfully Deleted", data: result, error: false });
  } catch (error) {
    return res.status(500).json({ message: error, data: null, error: true });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { params, body } = req;

    if (!params?.id) throw new Error("Id is Required");

    const update = body as EmployeeInput;
    if (!update) throw new Error();

    let employee = await Employee.findOne({ id: params?.id });

    if (!employee) throw new Error("Employee Not found");

    employee.fullName = update?.fullName || employee?.fullName;
    employee.userName = update?.userName || employee?.userName;
    employee.salary = update?.salary || employee?.salary;

    const result = await employee.save();
    return res
      .status(204)
      .json({ message: "Successfully Updated", data: result, error: false });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: error, data: null, error: true });
  }
};
