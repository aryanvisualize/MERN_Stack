import Kitchen from "../../models/kitchen.model.js";
import asyncHandler from "../../utils/asyncHandler.util";

const getMyKitchen = asyncHandler(async (req, res) =>{
    const allKitchens = await Kitchen.find({owner: req.user.id}).sort({
        createdAt : -1,
    });
    res.status(200).json({allKitchens});
});

export default getMyKitchen;
