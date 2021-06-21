const express = require('express');
const { createEvents, getEvents } = require('../controller/event.controller');
const router = express.Router();

router.post('/create-event', createEvents);

router.get('/get-events',getEvents);

module.exports = router;