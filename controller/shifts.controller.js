const ShiftInput = require('../models/Shifts');
const Clockfy = require('../models/clockfy');
const { sendhtml } = require('../helper/sendMail');

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
        res.send("Your schedule is deleted successful");

    })

}

exports.UpdatetheShift = async (req, res) => {

    
    ShiftInput.findOneAndUpdate({ id: req.body.id }, { $set: req.body}).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send("Your schedule is deleted successful");

    })
}
//gary@pgsgroupglobal.com
exports.getDetailsofPublish = async (req, res) => {
  

    ShiftInput.find({ EmailId: req.body.EmailId ,
        start_date: {
            $gte: req.body.fromdate,
            $lt: req.body.todate
          }                    
    
    }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data); 

    })


}

exports.sendMailto = async (req, res) =>{
    var mailTo =req.body.mailTo
    var subject = req.body.subject
    var template = req.body.template 
    await sendhtml(mailTo, subject, template);
    if(res.status(200)){
    return res.status(200).json({ 
      status: 1,
      message: ' Email has sent'
    })
}else{
    return {
        status: 0,
        message: 'Em ail send fail'
      }
}

}

exports.Getclockfy = async (req, res) => {
    Clockfy.find({ EmailId: req.body.EmailId }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data);

    })


}


exports.DeleteClockfy = async (req, res) => {

    Clockfy.findOneAndDelete({ id: req.body.id }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send("Your schedule is deleted successful");

    })

}


/*
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


exports.getDetailsofPublish = async (req, res) => {
  

    ShiftInput.find({ EmailId: req.body.EmailId ,
        start_date: {
            $gte: req.body.fromdate,
            $lt: req.body.todate
          }                    
    
    }).exec((error, data) => {
        if (error) return res.status(400).json({ error });
        res.send(data); 

    })


}
*/