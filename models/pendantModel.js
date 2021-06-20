const {Schema , model} = require ("mongoose")

const pedantSchema = new Schema({
  base64: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  }
})
module.exports = model("Pendant", pedantSchema)


