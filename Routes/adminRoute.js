import Router from "express";
import mongoose from "mongoose";

const db = mongoose.connection;

const router = Router();

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    let admin = await db.collection("admin").find({});
    if (admin.userName === userName && admin.password === password) {
      req.send(true);
    } else {
      req.status(400).json({ message: "Wrong username or password" });
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

export default router;
