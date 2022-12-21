const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.json('hola!')
})

app.post('/', (req, res) => {
    res.json(res)
})

app.listen(3000, ()=> {console.log(`Server is running on port ${PORT}`)})