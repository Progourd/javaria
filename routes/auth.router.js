const express = require('express');
const { signup,
     signin, verifiedUser,
     saveUserMessage, updatedUserPasswoupdatedUserPasswordrd, updatedUserPassword } = require('../controller/auth.controller');
const { validateSignupRequest, isRequestValidated } = require('../validators');
// const { validateSignupRequest } = require('../validators');
const router = express.Router();

router.post('/user/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/user/signin',signin);
router.post('/user/verifyUser',verifiedUser);
router.post('/user/updatedPassword',updatedUserPassword);
router.post('/user/message', saveUserMessage);

module.exports = router;