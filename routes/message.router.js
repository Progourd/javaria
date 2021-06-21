const express = require('express');

const { getMessage, addmessage, DeleteTheMessage, UpdatetheMessage } = require('../controller/Emessage.controller');

const router = express.Router();

router.post('/addmessagetoEmploye', addmessage);
router.post('/Getmessage', getMessage);
router.post('/DeleteMessage', DeleteTheMessage);
router.post('/UpdateMessage', UpdatetheMessage);
module.exports = router;
