const ShiftInput = require('../models/Shifts');

exports.addShifts = async (req, res) => {

    const Shift = ShiftInput(req.body);

    await Shift.save((error, data) => {

        if (error)
            return res.status(400).json({
                message: 'failed to add event'
            })

        if (data) {
            res.status(201).json({
                message: 'event has been created',
                data
            })
        }


    })


}
exports.getDetailsofShifts = async (req, res) => {
    ShiftInput.find({ EmailId: req.body.EmailId }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data);

    })


}
exports.DeleteTheShift = async (req, res) => {

    ShiftInput.findOneAndDelete({ id: req.body.id }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send("Your schedule is deleted successfully");

    })

}

exports.UpdatetheShift = async (req, res) => {

    
    ShiftInput.findOneAndUpdate({ id: req.body.id }, { $set: req.body}).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send("Your schedule is deleted successfully");

    })
}
