const nodemailer = require("nodemailer");
require("dotenv").config();

const envfile = process.env.NODEMAILER_HOST;

console.log("I am env", envfile);

module.exports = (req, res) => {
  const { name, email, location, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `Location: ${location}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred while sending email:", error);
      return res.status(500).json({
        success: false,
        message: error.response || "Email failed to send",
      });
    }
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  });
};
