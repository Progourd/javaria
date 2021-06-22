
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



exports.createCustomer = (req, res) => {

 
    // Save a Customer in the MongoDB
    People.save(req.body).then(data => {
                    res.status(200).json(data);
                }).catch(err => {
                    res.status(500).json({
                      message: "Fail!",
                      error: err.message
                    })
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
    People.findOneAndDelete({ _id : req.body.id}).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data);
       

            
    })

   
}

exports.updateCustomer = (req, res) => {
     // Find customer and update it
    People.findByIdAndUpdate(
                      req.body.id, 
                      {

            email :req.body.email,
            firstname :req.body.firstname,
            lastname :req.body.lastname,
            worksat :req.body.worksat,
            mobilenumber :req.body.mobilenumber

                      }, 
                        {new: true}
                    ).select('-__v')
        .then(People => {
            if(!People) {
                return res.status(404).send({
                    message: "Error -> Can NOT update a people with id = " + req.body.id,
                    error: "Not Found!"
                })
            }

            res.status(200).json({People});
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can not update a people with id = " + req.body.id,
              error: err.message
            })
        })
}

/*
const People = require('../models/addpeople');

exports.addpeople = async (req, res) => {
    const people = People(req.body);
    await people.save((error, data) => {

        if (error)
            return res.status(400).json({
                message: 'people adding error',
                error
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
*/