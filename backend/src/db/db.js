import mongoose from "mongoose";
import dotenv from "dotenv";
import { dbname } from "../constant/constant.js";

dotenv.config();

export function connectDb() {
  mongoose
    .connect(`${process.env.Mongodb_Uri}${dbname}`)
    .then(() => {
      console.log("Mongodb connected sucessfully");
    })
    .catch(() => {
      console.log("Error  connecting Mongodb ");
    });
}
