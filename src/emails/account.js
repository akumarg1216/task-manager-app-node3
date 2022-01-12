const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "akumarg1216@gmail.com",
        subject: "Welcome to Tasksocity",
        text: `Hi,${name}. 
        
        We are happy to have you along with us 🤩🤩. We gurantee to serve you to the best of our extent. Please provide a feedback if you think we have done anything wrong. We will surely work on your feedback or get in touch with you.
        
        From Team, 
        Tasksocity.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "akumarg1216@gmail.com",
        subject: "Soory to see you go",
        text: `Hi, ${name}. 
        
        We are sorry to see you go 😥.
        Could you take a moment and write what could we have done to keep serving you.
        Your valuable feedback matters to help you serve better.

        Thanks,
        Team Tasksocity`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}