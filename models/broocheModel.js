const {Schema , model} = require ("mongoose")

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
module.exports = model("Brooche", broocheSchema)


