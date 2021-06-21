const mongoose = require('mongoose');
const featureSchema = mongoose.Schema({
   feature:{
       type:String,
       required:true
   } ,
   plateform:{
       type:String,
       required:true
   },
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,  
   },
   challenge:{
       type:String,
       required:true
   },
   ability:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ability",
    required: true,
   },
   description:{
    
        type:String,
        required: true
    
   },
       
   
},
{
    timestamp:true,
})
module.exports = mongoose.model('Feature',featureSchema);
