const Router = require("express")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const config = require ("../config")
const tokenCheck = require ("../tokenCheckMiddlewear")

const db = mongoose.connection;

const router = Router();

router.get("/", tokenCheck, async (req, res) => {
  try {
    console.log(req.user)
    res.json({token: req.user})
  } catch (error) {
  }
});

router.post("/login", async (req, res) => {
  debugger;
  console.log(req.body)
  try {
    let admin = await db.collection("admin").findOne({});
    console.log(admin)
    if (admin.userName === req.body.login.toLowerCase() && admin.password === req.body.password) {
      console.log("good")
      const token = jwt.sign(
        {adminId:admin._id},
        config.jwt,
        {expiresIn: "30m"}
      )

      res.status(200).json({resCode : 1 ,token})
    } else {
      res.json({resCode: 0 ,  message: "Wrong username or password" });
    }
  } catch (error) {
    return errorHandler(res, error);
  }
});

function errorHandler(res, error) {
  console.log(error);
  return res
    .status(500)
    .json({ message: "Something went wrong.Please contact support" });
}

module.exports = router
