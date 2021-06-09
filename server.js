const config =require("./config.js");
const express =require("express");
const mongoose =require("mongoose");
// const adminRouter =require("./Routes/adminRoute.js");
const getShop =require("./Routes/shopRoute.js");
const path =require("path");

const app = express();
// const __dirname = path.resolve(path.dirname(""));

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
