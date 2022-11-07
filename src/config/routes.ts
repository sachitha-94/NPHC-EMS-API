import { Express } from "express";

import employeeRoutes from "../routes/employee.route";

export const setupRoutes = (app: Express): void => {
  app.use("/api/employees", employeeRoutes);
};
