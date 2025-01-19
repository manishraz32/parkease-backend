import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendMail = async (to, subject, html) => {
  // send mail with defined transport object
  console.log("to", to);
  try {
    const res = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: to,
      subject: subject,
      html: html,
    });
    console.log("mail sent", res);
  } catch (error) {
    console.log("error durng sending email", error);
  }
};
