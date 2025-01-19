import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";
import { connectDB } from "./config/dbConfig.js";

dotenv.config();
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use("/", routes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(8000, () => {
      console.log(`app is started at PORT ${PORT}`);
    });
  } catch (error) {
    console.log("faild to start server", error.message);
    process.exit(1);
  }
};

startServer();
