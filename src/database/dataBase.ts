import mongoose from "mongoose";
import Config from "../config";

const config: Config = Config.getInstance();

mongoose.connect(config.mongoUri);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("conexion establecida con la base de datos");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});