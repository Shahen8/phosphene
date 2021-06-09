const Router =require("express")
const mongoose =require("mongoose")

const db = mongoose.connection

const router = Router();

router.get("/getEarrings", async (req, res) => {
    try {
        let earrings = await db
            .collection("earrings")
            .find({})
            .toArray();
        res.json(earrings)
    } catch (error) {
        return errorHandler(res, error)
    }
});

router.get("/getBrooches", async (req, res) => {
    try {
        let brooches = await db
            .collection("brooches")
            .find({})
            .toArray();
        res.json(brooches)
    } catch (error) {
        return errorHandler(res, error)
    }
});

router.get("/getPendandts", async (req, res) => {
    try {
        let pendands = await mongoose.connection.db
            .collection("pendants")
            .find({})
            .toArray();
        res.json(pendands)
    } catch (error) {
        return errorHandler(res, error)
    }
});

// ______HELPERS _____________
function errorHandler(res, error) {
    console.log(error)
    return res.status(500).send("Something went wrong.Please contact support")
}

module.exports = router
