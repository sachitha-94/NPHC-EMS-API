import mongoose, { ConnectionOptions } from "mongoose";
import dotenv from "dotenv";

mongoose.Promise = global.Promise;
dotenv.config();

const { MONGO_DB_URL } = process.env;

const connectToDatabase = async (): Promise<void> => {
  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(MONGO_DB_URL || "", options);
};

export { connectToDatabase };
