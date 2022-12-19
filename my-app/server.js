const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const PORT = 7000

const app = express()

app.get('/', (req, res) => {
    res.json('hola!')
})

app.listen(7000, ()=> {console.log(`Server is running on port ${PORT}`)})