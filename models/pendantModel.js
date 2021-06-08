import {Schema, model} from "mongoose";

const pedantSchema = new Schema({
  base64: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  }
})
const pendant = model("Pendant", pedantSchema)

export default pendant;
