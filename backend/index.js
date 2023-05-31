const express = require('express');
const dotenv = require("dotenv");
const app = express();
const connectDb = require("./src/api/v1/config");

// config dot env file
dotenv.config();
connectDb();

const userRoute = require("./src/api/v1/routes//user");  


app.use("/api/v1/user", userRoute);

app.get('/', (req, res) => {
  res.send('Airbnb Testing connection')
})


const PORT = process.env.PORT
const HOST = process.env.HOST
app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}, url http://${HOST}:${PORT}`);
});