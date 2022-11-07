import mongoose, { Schema, Model, Document } from "mongoose";

type EmployeeDocument = Document & {
  id: string;
  userName: string;
  fullName?: string;
  salary: number;
};

type EmployeeInput = {
  id: EmployeeDocument["id"];
  userName: EmployeeDocument["userName"];
  fullName: EmployeeDocument["fullName"];
  salary: EmployeeDocument["salary"];
};

const employeeSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    userName: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Employee: Model<EmployeeDocument> = mongoose.model<EmployeeDocument>(
  "employee",
  employeeSchema
);

export { Employee, EmployeeDocument, EmployeeInput };
