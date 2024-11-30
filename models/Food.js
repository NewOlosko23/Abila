const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        costPrice: {
            type: Number,
            required: true,
            min: 0,
        },
        salePrice: {
            type: Number,
            required: true,
            min: 0,
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
        },
        quantityType: {
            type: String,
            enum: ["kg", "grams", "liters", "pieces", "packets"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
