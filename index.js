import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/connectDB.js";

dotenv.config({
  path: ".env",
});

connectDB();
const PORT = 3000;
const app = express();
// const port = 3000;

app.use(express.json);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
