const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "anjali.jha1903@gmail.com",
    subject: "Welcome!",
    text: `Thank you, ${name}, for creating an account!`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "anjali.jha1903@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}!!`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
