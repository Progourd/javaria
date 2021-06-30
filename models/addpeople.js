const mongoose = require('mongoose');
const AddpeopleSchema = mongoose.Schema({
    EmailId: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    preferredname: {
        type: String,
        required: true
    },
    worksat: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    },
    _id:
    {
        type:String,
        require: true
    }
})
module.exports = mongoose.model('addpeople', AddpeopleSchema);