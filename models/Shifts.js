const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


const AddShiftsschema = mongoose.Schema({
    EmailId: {
        type: String,
        required: true
    },
    Fullname: {
        type: String,
        required: true
    },
    Shifts: {
        type: String,
        required: true
    },
    Sitename: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    id: {
        type: Intl,
        required: true
    },
})
module.exports = mongoose.model('Addshifts', AddShiftsschema);