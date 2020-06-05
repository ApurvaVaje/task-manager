const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail= (email,name)=>{
  sgMail.send({
    to:email,
    from:"apurvavaje0@gmail.com",
    subject:"Thanks for joining in!",
    text: `Welcome to the app, ${name}. Hope you are safe in this so called pandemic!!`
  })
}

const sendCancellationEmail= (email,name)=>{
  sgMail.send({
    to:email,
    from:"apurvavaje0@gmail.com",
    subject:"Sorry to see you go!",
    text:`Goodbye, ${name}. I hope to see you back after sometime!!`
  })
}
module.exports={
  sendWelcomeEmail,
  sendCancellationEmail
}
