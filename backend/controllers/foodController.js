import foodModel from "../models/FoodModel.js"; // also add .js if using ESM
import fs from "fs";

const addfood = async (req, res) => {
   let image_filename = `${req.file.filename}`;


    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
    })

    try {
      await food.save();
      res.json({
        success: true,
        message: "Food item added successfully",
        data: food
      });
    } catch (error) {
      console.error("Error adding food item:", error);
      res.status(500).json({
        success: false,
        message: "Failed to add food item",
        error: error.message
      });
      
    }
};
 const listfood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({
      success: true,
      data: foods
    });
  } catch (error) {
    console.error("Error fetching food items:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch food items",
      error: error.message
    });
  }
   
};

 const removefood= async (req, res) => {
  const foodId = req.params.id;
  try {
    const food = await foodModel.findByIdAndDelete(foodId);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found"
      });
    }
    // Optionally remove the image file from the server
    fs.unlinkSync(`./uploads/${food.image}`);
    res.json({
      success: true,
      message: "Food item removed successfully"
    });
  } catch (error) {
    console.error("Error removing food item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to remove food item",
      error: error.message
    });
  }
};

// ✅ matches the function name
export { addfood, listfood, removefood }; // ✅ export the function for use in routes