const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.CRYPTER_SECRET_KEY);

//encrypt
exports.encryptPassword = (password) => cryptr.encrypt(password)
exports.decryptPassword = (hashedPassword) => cryptr.decrypt(hashedPassword)