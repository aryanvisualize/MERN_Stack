import User from "../models/user.model";

const isAdmin= async(req, res, next)=>{
    try{
        const user = await User.findById(req.user.id);
        if(!user) return res.status(404).json({message: "User not found"});

        if(user.role !== "admin"){
            return res
            .status(403)
            .json({message: "access denied, please come with admin username"});
        }
        next();
    }
    catch (err){
        res.status(500).json({message: "err.message"});
    }
};

export default isAdmin;