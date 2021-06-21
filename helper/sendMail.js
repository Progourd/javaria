// import node mailer
const nodemailer = require('nodemailer');

// import nodemailer handlebars
const hbs = require('nodemailer-express-handlebars');

// log
const { log } = console;
console.log("process.env.EMAIL  " , process.env.USER_EMAIL)
// Step 1
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// step 2/
const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'views', // your path, views is a folder inside the source folder
    layoutsDir: 'views',
    defaultLayout: '', // set this one empty and provide your template below,
  },
  viewPath: 'views',
  extName: '.hbs',
};

transporter.use('compile', hbs(handlebarOptions));

// Step 3
exports.sendMail = (mailTo, subject, template) => {
  const mailOptions = {
    from: 'jahangeeransari194@gmail.com',
    to: mailTo,
    subject,
    // text: mailMessage,
    template,
    // context: {
    //   username: mailData.username,
    //   resetKey: mailData.resetKey,
    //   userId: mailData.userId,
    // },
  };

  // Step 4
  // console.log(mailOptions);
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log(`Error occurs${err}`);
    }
    return log('Email sent!');
  });
};