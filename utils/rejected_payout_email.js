const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

async function rejectionRequestEmail(userEmail, name, reason){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.AUTH_USER,
        to: userEmail,
        subject: "Your EatsEasy Payout Request Has Been Rejected",
        html: ` <h2>EatsEasy Payout Request</h2>

        <p>Dear ${name},</p>
    
        <p>We regret to inform you that after careful consideration, we are unable to approve your recent request. This decision was made due to the following reason(s):</p>
    
        <p><i>${reason}</i></p>
    
        <p>We understand that this may be disappointing news, and we're here to provide any further clarification or discuss alternative solutions that may be available. Please do not hesitate to reach out to our support team at eatseasy.services@gmail.com or +639294983155 for assistance.</p>
    
        <p>Your understanding is greatly appreciated, and we look forward to the opportunity to support you in the future.</p>
    
        <p>Best regards,</p>
    
        <p>The EatsEasy Team</p>`

    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Rejection request email sent successfully.");
    } catch (error) {
        console.log("Failed to send rejection request email: ", error);
    }
}

module.exports = rejectionRequestEmail;
