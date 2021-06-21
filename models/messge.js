const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);


const AddMessageSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true

    },
    _id: {

        type: String
        
    },
      
})
module.exports = mongoose.model('adminMessage', AddMessageSchema);