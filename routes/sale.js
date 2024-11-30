const express = require("express");
const router = express.Router();
const salesController = require("../controllers/sale");

router.post("/", salesController.createSale); // Create a new sale
router.put("/:id", salesController.updateSale); // Update a sale
router.get("/", salesController.getAllSales); // Get all sales
router.get("/item/:item", salesController.getSalesByItem); // Get sales for a specific item
router.get("/vendor/:vendor", salesController.getSalesByVendor); // Get sales for a specific vendor
router.get("/payment-mode/:paymentMode", salesController.getSalesByPaymentMode); // Get sales by payment mode

module.exports = router;
