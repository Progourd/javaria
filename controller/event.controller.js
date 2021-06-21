const moment = require('moment');
const Event = require('../models/event')

exports.createEvents = async (req,res) =>{
   const event = Event(req.body);
   await event.save((error,data) =>{
       if(error)
           return res.status(400).json({
               message:'failed to add event'
           })

        if(data){
            res.status(201).json({
               message:'event has been created',
               data
            })
        }

   });


}

// GET EVENTS

exports.getEvents = async(req,res) =>{
    // greater than equal
    const events = await Event.find({
        start: {$gte: moment(req.query.start).toDate()},
        end: {$lte : moment(req.query.end).toDate()},
    })
    res.send(events);
}