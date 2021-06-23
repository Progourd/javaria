

const express = require('express');

const { getDetailsofShifts, addShifts, DeleteTheShift, UpdatetheShift,getDetailsofPublish ,sendMailto,Getclockfy,DeleteClockfy} = require('../controller/shifts.controller');
const router = express.Router();


router.post('/addshift', addShifts);

router.post('/getshift', getDetailsofShifts);

router.post('/deleteshift', DeleteTheShift);

router.post('/updateshift', UpdatetheShift);

router.post('/Getpublish', getDetailsofPublish);

router.post('/sendmail' ,sendMailto);

router.post('/getclockfy',Getclockfy);
router.post('/deleteClockfy',DeleteClockfy);


module.exports = router;


/*
const express = require('express');

const { getDetailsofShifts, addShifts, DeleteTheShift, UpdatetheShift , getDetailsofPublish} = require('../controller/shifts.controller');

const router = express.Router();


router.post('/addshift', addShifts);

router.post('/getshift', getDetailsofShifts);

router.post('/deleteshift', DeleteTheShift);

router.post('/updateshift', UpdatetheShift);

router.post('/Getpublish', getDetailsofPublish);
module.exports = router;

*/


