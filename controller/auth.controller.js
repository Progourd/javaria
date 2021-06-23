const Message = require('../models/message');
const User = require('../models/user');
const Clockfy = require('../models/clockfy');
const jwt = require('jsonwebtoken');
const { encryptPassword, decryptPassword } = require('../utils/helpers');
const { sendMail } = require('../helper/sendMail');
const { verifiedUserByEmail, saveMessageData,contactpeople } = require('../services/auth.services');


exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec( async(error, user) => {
      if (user)
        return res.status(200).json({
          message: "User already registered",
        });

      const { name, email, password } = req.body;
      const _user = new User({
        name,
        email,
        password: encryptPassword(password),
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (data) {
          return res.status(201).json({
            message: "User has been successful created ",
            user: data,
          });
        }
      });
    });
  };
  //get clockfy
  exports.Getclockfy = (req, res)=> {
    Clockfy.find({ EmailId: req.body.EmailId }).exec((error, data) => {
      if (error) return res.status(400).json({ error });
      res.send(data);
    })
  }

// find the valid user and login him
exports.signin = (req, res) => {
    if(!(req.body.email && req.body.password)) {
      return res.status(204).json({message: "Please provide the email and password!"});
    }
    User.findOne({ email: req.body.email }).exec((error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
          const decryptedPassword = decryptPassword(user.password);
        if (req.body.password === decryptedPassword) {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
            );
              const userid = req.body.email
    
           
            const { data } = user;
           
          res.status(200).json({
              message: 'User signin successful',
              token, userid, 
              user: data

            

          });
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } else {
        res.status(400).json({
          message: "something went wrong",
        });
      }
    });
  };

exports.verifiedUser = async (req, res) => {
    const { email } = req.body;
    try{
      const verify = await verifiedUserByEmail(email);
    console.log(verify);
    const template = "reset_password";
    const subject = "Demo Mail";
    const mailTo = email;
  if(verify.message=== 'wrong credential'){
    return  res.status(400).json({
      status:0,
      message: 'Wrong user credential'
    });
  }
   else if(verify.user.email === email){
      await sendMail(mailTo, subject, template);
      return res.status(200).json({
        status: 1,
        message: 'Reset password email has sent'
      })
    }
    }catch (error) {
     console.log(error);
    }
  };


//   UPDATED PASSWORD

exports.updatedUserPassword = async (req, res) => {
    const { password } = req.body;


      User.findOneAndUpdate({ email: req.body.email }, { password: encryptPassword(password)})
      .then((user) => {
        if (user) {
          return res.status(200).json({
            status: 1,
            message: "User password updated",
          });
        }
      })
      .catch((err) => {
        return {
          status: 400,
          error: err,
          message: "User password updatin got failed!",
        };
      });
  };


  // message Controller
exports.saveUserMessage = async (req,res) =>{

    const saveMessage = await saveMessageData(req.body);
    return res.status(saveMessage.status).json(saveMessage);
  }


//   exports.clockfy_User = async (req, res) => {
//     const clockfy = Clockfy(req.body);
//     await clockfy.save((error, data) => {

//         if (error)
//             return res.status(400).json({
//                 message: 'failed to add event'
//             })

//         if (data) {
//             res.status(201).json({
//                 message: 'event has been created',
//                 data
//             })
//         }

//     })

// }

exports.clockfy_User = (req, res) => {
  const clockfy = Clockfy(req.body);
    clockfy.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }

      if (data) {
        return res.status(201).json({
          message: "User has been successful created ",
          user: data,
        });
      }
    });
  
};

/*
const Message = require('../models/message');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { encryptPassword, decryptPassword } = require('../utils/helpers');
const { sendMail } = require('../helper/sendMail');
const { verifiedUserByEmail, saveMessageData } = require('../services/auth.services');


exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec( async(error, user) => {
      if (user)
        return res.status(200).json({
          message: "User already registered",
        });

      const { name, email, password } = req.body;
      const _user = new User({
        name,
        email,
        password: encryptPassword(password),
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (data) {
          return res.status(201).json({
            message: "User has been successfully created ",
            user: data,
          });
        }
      });
    });
  };

// find the valid user and login him
exports.signin = (req, res) => {
    if(!(req.body.email && req.body.password)) {
      return res.status(204).json({message: "Please provide the email and password!"});
    }
    User.findOne({ email: req.body.email }).exec((error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
          const decryptedPassword = decryptPassword(user.password);
        if (req.body.password === decryptedPassword) {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
            );
            const userid = req.body.email


            const { data } = user;
           
          res.status(200).json({
              message: 'User login successful',
              token, userid, 
              user: data

          });
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } else {
        res.status(400).json({
          message: "something went wrong",
        });
      }
    });
  };

exports.verifiedUser = async (req, res) => {
    const { email } = req.body;
    try{
      const verify = await verifiedUserByEmail(email);
    console.log(verify);
    const template = "reset_password";
    const subject = "Demo Mail";
    const mailTo = email;
  if(verify.message=== 'wrong credential'){
    return  res.status(400).json({
      status:0,
      message: 'Wrong user credential'
    });
  }
   else if(verify.user.email === email){
      await sendMail(mailTo, subject, template);
      return res.status(200).json({
        status: 1,
        message: 'Reset password email has sent'
      })
    }
    }catch (error) {
     console.log(error);
    }
  };


//   UPDATED PASSWORD

exports.updatedUserPassword = async (req, res) => {
    const { password } = req.body;


      User.findOneAndUpdate({ email: req.body.email }, { password: encryptPassword(password)})
      .then((user) => {
        if (user) {
          return res.status(200).json({
            status: 1,
            message: "User password updated",
          });
        }
      })
      .catch((err) => {
        return {
          status: 400,
          error: err,
          message: "User password updatin got failed!",
        };
      });
  };


  // message Controller
exports.saveUserMessage = async (req,res) =>{

    const saveMessage = await saveMessageData(req.body);
    return res.status(saveMessage.status).json(saveMessage);
  }
  */