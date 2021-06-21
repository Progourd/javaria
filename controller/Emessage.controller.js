const addmessageInput = require('../models/messge');


exports.addmessage = async (req, res) => {

    const message = addmessageInput(req.body);

    /*
    addmessageInput.({ Title: req.body.Title, Message: req.body.Message, date: req.body.date, time: req.body.time, id: req.body.id, _id: req.body._id }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data);

    })
    */
     
    await message.save((error, data) => {

        if (error)
            return res.status(400).json({
                message: 'failed to add message',
                error:  error
            })

        if (data) {
            res.status(201).json({
                message: 'event has been created',
                data
            })
        }


    })


}

exports.getMessage = async (req, res) => {
    addmessageInput.find({ EmailId: req.body.EmailId }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data);

    })


}

exports.DeleteTheMessage = async (req, res) => {

    addmessageInput.findOneAndDelete({ _id: req.body._id }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send("Deleted Successfully");

    })

}
exports.UpdatetheMessage = async (req, res) => {


    addmessageInput.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send("Deleted Successfully");


    })
}
