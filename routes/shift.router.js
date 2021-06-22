const express = require('express');

const { getDetailsofShifts, addShifts, DeleteTheShift, UpdatetheShift , getDetailsofPublish} = require('../controller/shifts.controller');

const router = express.Router();


router.post('/addshift', addShifts);

router.post('/getshift', getDetailsofShifts);

router.post('/deleteshift', DeleteTheShift);

router.post('/updateshift', UpdatetheShift);

router.post('/Getpublish', getDetailsofPublish);
module.exports = router;
