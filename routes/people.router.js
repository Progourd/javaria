const express = require('express');

const { findDetailsWithEmail,updateCustomer,createCustomer,addpeople, DeletePeople } = require('../controller/people.controller');

const router = express.Router();

router.post('/addpeople', addpeople);
router.post('/createCustomer', addpeople);
router.post('/GetPeople', findDetailsWithEmail);
router.post('/deletePeople', DeletePeople);
router.post('/updatepeople', updateCustomer);

module.exports = router;


/*
const express = require('express');

const { findDetailsWithEmail, addpeople, DeletePeople } = require('../controller/people.controller');

const router = express.Router();

router.post('/addpeople', addpeople);
router.post('/GetPeople', findDetailsWithEmail);
router.post('/deletePeople', DeletePeople);

module.exports = router;

*/