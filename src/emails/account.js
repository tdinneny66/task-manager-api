const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tdinneny@optonline.net',
        subject: 'Welcome to the Task App',
        text: `Welcome to the app, ${name}. Let me know about your experience with the app!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tdinneny@optonline.net',
        subject: 'Sorry to see you go!',
        text: `${name}, sorry to see you cancelled your account. Please let us know the reason why and how we can do better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

// sgMail.send({
//     from: 'tdinneny@optonline.net',
//     to: 'tdinneny@optonline.net', 
//     subject: 'This is a SendGrid test mail',
//     text: 'This is a test mail for the Node.js course.'
// }).then(() => {
//     console.log('Email sent!')
// }).catch ((error) => {
//     console.log(error)
// })
