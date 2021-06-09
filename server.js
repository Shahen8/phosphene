import config from "./config.js";
import express from "express";
import mongoose from "mongoose";
// import adminRouter from "./Routes/adminRoute.js";
import getShop from "./Routes/shopRoute.js";
import path from "path";

const app = express();
const __dirname = path.resolve(path.dirname(""));

app.set("view engine", "jade");
app.use("/api", getShop);
// app.use("/admin", adminRouter);
app.use("/", express.static(path.join(__dirname, config.STATIC_FILES)));

app.get("*", (req, res) => {
  res.sendFile("phosphene_client/build/index.html", { root: __dirname });
});

mongoose.connect(config.DB_URI, config.DB_OPTIONS).then(() => {
  console.log("MongoDB connected");
  app.listen(config.PORT, () =>
    console.log(`Server is running on PORT ${config.PORT}`)
  );
});
