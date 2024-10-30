const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (req, res) => {
  console.log(`Received ${req.method} request to ${req.url}`);

  if (req.method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({
        success: false,
        message: `Method ${req.method} Not Allowed`,
      });
  }

  try {
    const { name, email, location, message } = req.body;

    const requiredEnvVars = [
      "NODEMAILER_HOST",
      "NODEMAILER_PORT",
      "EMAIL_USER",
      "EMAIL_PASS",
      "EMAIL_FROM",
      "RECEIVER_EMAIL",
    ];

    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new Error(`Missing environment variable: ${envVar}`);
      }
    }

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
      text: `Name: ${name}\nEmail: ${email}\nLocation: ${location}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while sending the email",
    });
  }
};
