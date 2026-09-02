const userModel = require('../models/user.model.js');
const jwt = require("jsonwebtoken");

async function registerUser(req, res){
    const {username, email, password} = req.body;

    const isUserAleradyExists = await userModel.findOne({
        email
    })

    if(isUserAleradyExists){
        return res.status(409).json({
            message: "User already exists"
        })
    }

    const user = await userModel.create({
        username, email, password
    })

    const token = await jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered succesfully",
        user,
        token   
    })
}

module.exports = {registerUser}