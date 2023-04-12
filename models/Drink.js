const mongoose = require("mongoose")
const drinkSchema = mongoose.Schema({
drink_type: String,
drink_size: String,
drink_cost: Number
})

module.exports = mongoose.model("Drink",drinkSchema)

