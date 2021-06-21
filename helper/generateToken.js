const jwt = require("jsonwebtoken");

exports.generateToken = async (userId) => {
  //    token having 3 part header
  return await jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
};