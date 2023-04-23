const mongoose = require("mongoose")
const drinkSchema = mongoose.Schema({
drink_type: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
drink_size: String,
drink_cost:{
    type: Number,
    min:1,
    max:10000
} 
})

module.exports = mongoose.model("Drink",drinkSchema)

