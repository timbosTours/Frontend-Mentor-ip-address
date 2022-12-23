const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const PORT = 5000

const app = express()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, res) => {
  res.json('hola!')
  console.log(req.body)
})


// app.get('/searchip', async (req, res) => {
//   req.json(req.query)
//   console.log(req.query)
// })

app.listen(5000, ()=> {console.log(`Server is running on port ${PORT}`)})