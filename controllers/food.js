const Food = require("../models/Food");

// Create a new food item
exports.createFoodItem = async (req, res) => {
  try {
    const { name, costPrice, salePrice, quantity, quantityType } = req.body;

    const newFood = new Food({ name, costPrice, salePrice, quantity, quantityType });
    const savedFood = await newFood.save();

    res.status(201).json({ message: "Food item created successfully", data: savedFood });
  } catch (error) {
    res.status(500).json({ message: "Error creating food item", error: error.message });
  }
};

// Update a food item
exports.updateFoodItem = async (req, res) => {
  try {
    const { id } = req.params; 
    const updates = req.body;

    const updatedFood = await Food.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedFood) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.status(200).json({ message: "Food item updated successfully", data: updatedFood });
  } catch (error) {
    res.status(500).json({ message: "Error updating food item", error: error.message });
  }
};

// Delete a food item
exports.deleteFoodItem = async (req, res) => {
  try {
    const { id } = req.params; 

    const deletedFood = await Food.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.status(200).json({ message: "Food item deleted successfully", data: deletedFood });
  } catch (error) {
    res.status(500).json({ message: "Error deleting food item", error: error.message });
  }
};

// Get all food items
exports.getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.status(200).json({ data: foodItems });
  } catch (error) {
    res.status(500).json({ message: "Error fetching food items", error: error.message });
  }
};

// Get a single food item
exports.getFoodItem = async (req, res) => {
  try {
    const { id } = req.params; 

    const foodItem = await Food.findById(id);

    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.status(200).json({ data: foodItem });
  } catch (error) {
    res.status(500).json({ message: "Error fetching food item", error: error.message });
  }
};

// Update stock (adjust quantity)
exports.updateStock = async (req, res) => {
  try {
    const { id } = req.params; 
    const { adjustment } = req.body;

    const foodItem = await Food.findById(id);

    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }

    const newQuantity = foodItem.quantity + adjustment;

    if (newQuantity < 0) {
      return res.status(400).json({ message: "Stock cannot be negative" });
    }

    foodItem.quantity = newQuantity;

    const updatedFood = await foodItem.save();

    res.status(200).json({ message: "Stock updated successfully", data: updatedFood });
  } catch (error) {
    res.status(500).json({ message: "Error updating stock", error: error.message });
  }
};
