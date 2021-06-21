const { check } =require('express-validator');
const { validationResult } = require('express-validator')

exports.validateSignupRequest = [

    check('name')
    .notEmpty()
    .withMessage('Name is required'),

    check('email')
    .isEmail()
    .withMessage('Email is required'),

    check('password')
    .isLength({min:6})
    .withMessage('Password must be in 6 character long')
];

exports.isRequestValidated = (req,res,next)=>{

    const errors = validationResult(req);
    if(errors.array().length > 0){
        console.log('errors-msg--->',errors.array())

        return res.status(400).json({error:errors.array()[0].msg})
    }
    // not use next() middleware
    next();
}