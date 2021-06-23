const { generateToken } = require("../helper/generateToken");
const user = require("../models/user");
const Message  =  require('../models/message');
const contactus = require('../models/contact');
exports.verifiedUserByEmail = (email) => {
    return user.findOne({ email })
      .then(async (user) => {
        if (user) {
          const token = await generateToken(user._id);
          // console.log('token-->:' + token);
          return {
            status: 200,
            message: "User present in database",
            user,
            token: token,
          };
        } else {
          return {
            status: 401,
            message: "wrong credential",
          };
        }
      })
      .catch((err) => {
        return {
          status: 400,
          error: err,
          message: "something went wrong",
        };
      });
  };


exports.saveMessageData =  (body) =>{
    return Message(body)
    .save()
    .then((message) => {
      if (message) {
        return {
          status: 201,
          message: "message added in database",
          messageData:message,
        };
      } else {
        return {
          status: 200,
          message: "could not add try again",
        };
      }
    })
    .catch((err) => {
      console.log(err);
      return {
        status: 400,
        message: "something went wrong",
      };
    });
};

exports.contactpeople =  (body) =>{
  return contactus(body)
  .save()
  .then((message) => {
    if (message) {
      return {
        status: 200,
        message: "Message Added To JAVARIA ",
        messageData:message,

      };
    } else {
      return {
        status: 201,
        message: "could not add try again",
      };
    }
  })
  .catch((err) => {
    console.log(err);
    return {
      status: 400,
      message: "something went wrong",
    };
  });
};
/*
const { generateToken } = require("../helper/generateToken");
const user = require("../models/user");
const Message  =  require('../models/message')
exports.verifiedUserByEmail = (email) => {
    return user.findOne({ email })
      .then(async (user) => {
        if (user) {
          const token = await generateToken(user._id);
          // console.log('token-->:' + token);
          return {
            status: 200,
            message: "User present in database",
            user,
            token: token,
          };
        } else {
          return {
            status: 401,
            message: "wrong credential",
          };
        }
      })
      .catch((err) => {
        return {
          status: 400,
          error: err,
          message: "something went wrong",
        };
      });
  };


exports.saveMessageData =  (body) =>{
    return Message(body)
    .save()
    .then((message) => {
      if (message) {
        return {
          status: 201,
          message: "message added in database",
          messageData:message,
        };
      } else {
        return {
          status: 200,
          message: "could not add try again",
        };
      }
    })
    .catch((err) => {
      console.log(err);
      return {
        status: 400,
        message: "something went wrong",
      };
    });
};


exports.contactpeople =  (body) =>{
  return contactus(body)
  .save()
  .then((message) => {
    if (message) {
      return {
        status: 200,
        message: "Message Added To JAVARIA ",
        messageData:message,

      };
    } else {
      return {
        status: 201,
        message: "could not add try again",
      };
    }
  })
  .catch((err) => {
    console.log(err);
    return {
      status: 400,
      message: "something went wrong",
    };
  });
};
*/