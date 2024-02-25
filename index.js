const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
const nodemailer = require("nodemailer");

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/text-mail',(req,res)=>{
  res.send('Hello World')
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: "densisagapov6666@gmail.com",
      pass: "Climax123!2",
      clientId: "804730404802-3ssulrqadtorcoitab8qr3ch4rb6n8g1.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "https://developers.google.com/oauthplayground"
    }
  });
  const mailData = {
    to:"denisagapov6666@gmail.com",
    subject:"Hello",
    text:"I'm denisagapov. Nice to meet you",
  }
  transporter.sendMail(mailData,(error,info)=>{
    if(error){
      return console.log(error)
    }
    res.status(200).send({message:"Mail send", message_id:info.message});
  })
})

app.listen(port,()=>console.log(`server is running ${port}`));