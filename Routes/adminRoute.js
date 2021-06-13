const Router =require("express")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const config = require ("../config")

const db = mongoose.connection;

const router = Router();

router.post("/login", async (req, res) => {
  debugger;
  console.log(req.body)
  const { userName, password } = req.body;
  try {
    let admin = await db.collection("admin").find({});
    if (admin.userName === userName && admin.password === password) {
      const token = jwt.sign(
        {adminId:admin._id},
        config.jwt,
        {expiresIn: "1h"}
      )

      res.status(200).json({token})
    } else {
      res.status(400).json({ message: "Wrong username or password" });
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
