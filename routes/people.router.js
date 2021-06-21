const express = require('express');

const { findDetailsWithEmail, addpeople, DeletePeople } = require('../controller/people.controller');

const router = express.Router();

router.post('/addpeople', addpeople);
router.post('/GetPeople', findDetailsWithEmail);
router.post('/deletePeople', DeletePeople);

module.exports = router;
