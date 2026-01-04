import app from "./src/app.js";
import { PORT } from "./src/constant/constant.js";
import { connectDb } from "./src/db/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/auth.route.js";

dotenv.config();
connectDb();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running at ${process.env.PORT || PORT}`);
});
