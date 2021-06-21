const People = require('../models/addpeople');

exports.addpeople = async (req, res) => {
    const people = People(req.body);
    await people.save((error, data) => {

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

exports.findDetailsWithEmail = async(req, res) =>
{
    People.find({ EmailId: req.body.EmailId }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data);

    })
        
    
}

exports.DeletePeople = async (req, res) => {
    People.findOneAndDelete({ email: req.body.email }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
       
        message: 'person is deleted', 
            data

            
    })

   
}
