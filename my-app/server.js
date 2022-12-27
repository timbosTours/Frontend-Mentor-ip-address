const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const PORT = 5000
// const port = process.env.PORT
const url = process.env.URL
const apiKey = process.env.API_KEY

const app = express()

app.use(express.urlencoded({ extended: true }))


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    
  );


  next();
});

app.get('/user', async (req, res) => {
  const fetch_response = await axios.get(`${url}apiKey=${apiKey}`);
  const ipData = await fetch_response.data;
  res.json(ipData)
  console.log(ipData)

})

app.post('/search', async (req, res) => {
  const searchIp = await req.body.values.ipAddress
  res.status(201)

  const fetch_response = await axios.get(`${url}apiKey=${apiKey}&ipAddress=${searchIp}`);
  const ipData = await fetch_response.data;
  res.json(ipData)
  console.log(ipData)
})


app.listen(5000, ()=> {console.log(`Server is running on port ${PORT}`)})