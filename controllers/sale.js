const Sale = require("../models/Sale");

// Create a new sale
exports.createSale = async (req, res) => {
    try {
        const { item, vendor, totals, paymentMode } = req.body;

        const newSale = new Sale({ item, vendor, totals, paymentMode });
        const savedSale = await newSale.save();

        res.status(201).json({ message: "Sale recorded successfully", data: savedSale });
    } catch (error) {
        res.status(500).json({ message: "Error recording sale", error: error.message });
    }
};

// Update a sale
exports.updateSale = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedSale = await Sale.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedSale) {
            return res.status(404).json({ message: "Sale not found" });
        }

        res.status(200).json({ message: "Sale updated successfully", data: updatedSale });
    } catch (error) {
        res.status(500).json({ message: "Error updating sale", error: error.message });
    }
};

// Get all sales
exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.status(200).json({ data: sales });
    } catch (error) {
        res.status(500).json({ message: "Error fetching sales", error: error.message });
    }
};

// Get sales for a specific food item
exports.getSalesByItem = async (req, res) => {
    try {
        const { item } = req.params;

        const sales = await Sale.find({ item });

        if (sales.length === 0) {
            return res.status(404).json({ message: "No sales found for this item" });
        }

        res.status(200).json({ data: sales });
    } catch (error) {
        res.status(500).json({ message: "Error fetching sales", error: error.message });
    }
};

// Get sales for a specific vendor
exports.getSalesByVendor = async (req, res) => {
    try {
        const { vendor } = req.params;

        const sales = await Sale.find({ vendor });

        if (sales.length === 0) {
            return res.status(404).json({ message: "No sales found for this vendor" });
        }

        res.status(200).json({ data: sales });
    } catch (error) {
        res.status(500).json({ message: "Error fetching sales", error: error.message });
    }
};

// Get sales by payment method
exports.getSalesByPaymentMode = async (req, res) => {
    try {
        const { paymentMode } = req.params;

        const sales = await Sale.find({ paymentMode });

        if (sales.length === 0) {
            return res.status(404).json({ message: "No sales found for this payment method" });
        }

        res.status(200).json({ data: sales });
    } catch (error) {
        res.status(500).json({ message: "Error fetching sales", error: error.message });
    }
};
