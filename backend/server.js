import app from "./src/app.js";
import { PORT } from "./src/constant/constant.js";
import { connectDb } from "./src/db/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDb();

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(process.env.PORT || PORT, () => {
  console.log("server running at 3000");
});
