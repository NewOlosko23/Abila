const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
    {
        items: [
            {
                name: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                },
                price: {
                    type: Number,
                    required: true,
                    min: 0,
                },
            },
        ],
        vendor: {
            type: String,
            required: true,
        },
        totals: {
            type: Number,
            required: true,
            min: 0,
        },
        paymentMode: {
            type: String,
            enum: ["Cash", "Mobile Money", "Card"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Sale = mongoose.model("Sale", SaleSchema);

module.exports = Sale;
