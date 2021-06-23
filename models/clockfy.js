const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


const AddShiftsschema = mongoose.Schema({
    EmailId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    minutes:{
        type:String,
        requrired: true
    },
    hours:{
        type:String,
        requried:true
    },
   
},
{ timestamps: true }
);
module.exports = mongoose.model('Clockif', AddShiftsschema);