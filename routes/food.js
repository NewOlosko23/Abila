const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food");

router.post("/", foodController.createFoodItem); // Create food item
router.put("/:id", foodController.updateFoodItem); // Update food item
router.delete("/:id", foodController.deleteFoodItem); // Delete food item
router.get("/", foodController.getAllFoodItems); // Get all food items
router.get("/:id", foodController.getFoodItem); // Get a single food item
router.patch("/:id/stock", foodController.updateStock); // Update stock

module.exports = router;
