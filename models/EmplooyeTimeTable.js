const mongoose = require('mongoose');
const timeTableSchema = mongoose.Schema({
    name: {
        type: String
      },
      details: {
        type: String
      },
      start: {
        type: String
      },
      end: {
        type: String
      },
      color: {
        type: String
      }
})
module.exports = mongoose.model('EmplooyesTimeTable',timeTableSchema);