import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "server created" });
});

app.listen(8000, () => {
  console.log("app is started");
});
