import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});
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
