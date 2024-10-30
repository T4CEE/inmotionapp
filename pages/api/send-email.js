const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({
        success: false,
        message: `Method ${req.method} Not Allowed`,
      });
  }

  // Destructure request body for form data
  const { name, email, location, message } = req.body;

  // Verify environment variables
  if (
    !process.env.NODEMAILER_HOST ||
    !process.env.NODEMAILER_PORT ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS ||
    !process.env.EMAIL_FROM ||
    !process.env.RECEIVER_EMAIL
  ) {
    console.error("Missing environment variables for Nodemailer setup");
    return res
      .status(500)
      .json({ success: false, message: "Server configuration error" });
  }

  // Nodemailer transporter configuration
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nLocation: ${location}\nMessage: ${message}`,
  };

  // Send email
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
