const { Schema, model } = require("mongoose");

const earringSchema = new Schema({
  base64: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});
module.exports = model("Earring", earringSchema);
