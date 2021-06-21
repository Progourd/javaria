const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
    },
    telephone:{
        type: String,
        required:true,
    },
    postcode:{
        type:String,
        required:true
    },
    suburb:{
        type:String,
        required:true
    },
    reason_for_contact:{
        type:String,
        required:true,
    },
    company_name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
       
    },
    check:{
         type:  Boolean,

    }
})

module.exports = mongoose.model('Contact',contactSchema);