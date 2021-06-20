const Brooche = require("../models/broocheModel");
const Earring = require("../models/earringModel");
const Pendant = require("../models/pendantModel");
const imageToBase64 = require("image-to-base64");
const Router = require("express");
const tokenCheck = require ("../tokenCheckMiddlewear")

const router = new Router();

router.post("/additem", async (req, res) => {
  let ItemName = "";
  switch (req.body.item) {
    case "earring":
      ItemName = Earring;
      break;
    case "brooche":
      ItemName = Brooche;
      break;
    case "pendant":
      ItemName = Pendant;
      break;
    default:
      ItemName = Earring;
  }
  try {
    const [Url, description, type] = Object.values(req.body);
    const base64 = await imageToBase64(Url);
    const item = new ItemName({ base64, description });
    await item.save();
    res
      .status(200)
      .json({ resCode: 1, message: "item was successfully created" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.json({ resCode: 2, message: "Item alredy exists!" });
    }
    return res.json({ message: "Something went wrong.Please try again" });
  }
});



module.exports = router;
