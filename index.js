const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
const {CourierClient} = require('@trycourier/courier');

const courier = new CourierClient({ authorizationToken: "dk_prod_VVQ43JZJQA45V8H2Y2QX3VN2V2MT" });

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/text-mail',async (req,res)=>{
  const { requestId } = await courier.send({
    message: {
      to: {
        email: "nicolas.edwards0822@gmail.com",
      },
      content: {
        title: "Welcome!",
        body: "Thanks for signing up, {{name}}",
      },
      data: {
        name: "Peter Parker",
      },
      routing: {
        method: "single",
        channels: ["email"],
      },
    },
  });
  res.send(requestId);

})

app.listen(port,()=>console.log(`server is running ${port}`));