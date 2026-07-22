import Kitchen from "../../models/kitchen.model.js";
import ApiError from "../../utils/ApiError.util";
import asyncHandler from "../../utils/asyncHandler.util";
import uploadImage from "../../utils/uploadImage.util.js"

const createKitchen = asyncHandler(async (req, res)=>{
    const {
        name, description, cuisine, street, city, state, pincode, deliveryTime, deliveryCharge, 
    }=req.body;

    if(!name || !street || !city || !state || !pincode ){
        throw new ApiError(400, "name and address are must");
    }
    const kitchenData = {
        name, owner: req.user.id,
        description: description|| "",
        cuisine : cuisine ? Array.isArray(cuisine) ?  cuisine:cuisine.split(",").map((c)=>c.trim()):[],
        address: {street, city, state, pincode},
        deliveryTime: deliveryTime || 45,
        deliveryCharge: deliveryCharge || 0,
    };
    if(req.file){
        const imageResult = await uploadImage(req.file.buffer, "kitchen");
        kitchenData.image = imageResult;
    }
    const kitchen = new Kitchen(kitchenData);
    await kitchen.save();
    res.status(201).json({message:"kitchen added"});
});

export default createKitchen;