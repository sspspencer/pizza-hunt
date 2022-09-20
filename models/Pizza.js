const { Schema, model } = require("mongoose");

const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    default: "large",
  },
  toppings: [],
});

// create pizza model with the pizzaSchema
const Pizza = model("pizza", PizzaSchema);

// export the pizza model
module.exports = Pizza;
