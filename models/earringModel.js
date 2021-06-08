import {Schema, model} from "mongoose";

const earringSchema = new Schema({
  base64: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String
  }
})
const earring = model("earring", earringSchema)

export default earring;
