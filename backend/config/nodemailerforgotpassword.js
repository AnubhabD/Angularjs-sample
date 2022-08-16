import nodemailer from 'nodemailer';
import config from './config.js';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.HOST_EMAIL, // generated ethereal user
        pass: config.HOST_EMAIL_PASSWORD // generated ethereal password
      }
  });

export default transporter;