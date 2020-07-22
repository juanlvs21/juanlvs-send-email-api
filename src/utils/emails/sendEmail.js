const nodemailer = require("nodemailer");

// Templates
const contactMeTemplate = require("./templates/contactMe");

const myEmail = process.env.MY_EMAIL_ACCOUNT;

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.MAIL_ACCOUNT,
    pass: process.env.MAIL_PASSWORT,
  },
});

async function contactMe(email, name, subject, message) {
  await transporter.sendMail({
    from: `Contacto 📧 ${name}  <${email}>`, // sender address
    to: myEmail, // list of receivers
    subject, // Subject line
    html: contactMeTemplate(name, message), // html body
  });
}

module.exports = contactMe;
