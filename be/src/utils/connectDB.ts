import mongoose from "mongoose";
import CONFIG from "../config/environment";

mongoose
  .connect(
    "mongodb+srv://sfarkhan48:KrSit8N2RzCEQ8Vw@cluster0.xx2t4rq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
