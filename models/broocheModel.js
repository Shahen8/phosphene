import {Schema, model} from "mongoose";

const broocheSchema = new Schema({
  base64: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  }
})
const brooche = model("Brooche", broocheSchema)

export default brooche;
