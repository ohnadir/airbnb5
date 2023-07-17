const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();
const connectDb = require("./src/api/v1/config");

// config dot env file
dotenv.config();
connectDb();

app.use(cors());
app.use(express.json());

const userRoute = require("./src/api/v1/routes/user");  
const placeRoute = require("./src/api/v1/routes/place");  
const bookingRoute = require("./src/api/v1/routes/booking");  
const paymentRoute = require("./src/api/v1/routes/payment");  
const mapRoute = require("./src/api/v1/routes/map");  


app.use("/api/v1/user", userRoute);
app.use("/api/v1/place", placeRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/map", mapRoute);

app.get('/', (req, res) => {
  res.send('Airbnb Testing connection')
})


const PORT = process.env.PORT
const HOST = process.env.HOST
app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}, url http://${HOST}:${PORT}`);
});

