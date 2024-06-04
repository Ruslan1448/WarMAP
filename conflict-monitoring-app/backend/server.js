const cors = require('cors');
const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000


app.use(cors('*'))
app.use(express.json())


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`start server ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()