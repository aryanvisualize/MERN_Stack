const {body, ValidationResult} = require('express-validator');

async function validateResult(req, res, next) {
    const errors = ValidationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    next();
}

const registerUserValidationRules = [

    body("username")
    .isString()
    .withMessage("Username must be string")
    .isLength({min: 3, max: 20})
    .withMessage("Username must be between 3 and 20 characters"),
    

    body("email")
    .isEmail()
    .withMessage("Invalid email address"),

    body("password")
    .isLength({min: 6})
    .withMessage("Password must be atleast 6 characters long"),

    validateResult
]

module.exports = {registerUserValidationRules};