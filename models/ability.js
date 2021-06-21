const mongoose = require('mongoose');
const abilitySchema = mongoose.Schema({
     name:{
         type:String,
         required:true
     }
})

module.exports = mongoose.model('Ability',abilitySchema);