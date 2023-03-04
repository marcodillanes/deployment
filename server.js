const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req,res)=> {
    res.send('HELLO WORLD!')
})

app.listen(PORT, () => console.log('server is running in port ${PORT}'))

module.exports = app;