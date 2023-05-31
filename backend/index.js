const express = require('express');
const dotenv = require("dotenv");
const app = express();

// config dot env file
dotenv.config();



app.get('/', (req, res) => {
    res.send('Airbnb Testing connection')
})


const PORT = process.env.PORT
const HOST = process.env.HOST
app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}, url http://${HOST}:${PORT}`);
});