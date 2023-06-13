const nodemailer = require('nodemailer');

// email access methods
async function sendMail(rec,msg){
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.g_user,
        pass: process.env.g_pass
      }
    });
    
    const mailOptions = {
      from: process.env.g_user,
      to: rec,
      subject: 'Central English Territory',
      text: msg
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  
  }

  module.exports = {
    sendMail: sendMail,
  }