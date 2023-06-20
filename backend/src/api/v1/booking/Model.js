const { Schema, model } = require("mongoose")

const bookingSchema = Schema({
    placeName : String,
    placeImg : String,
    check_in : String ,
    check_out : String ,
    guest : Number,
    total : Number,
    name : String,
    phone : String,
    email : String,
    address : {},
    transactionId : String,
    paymentStatus : String,
    paidAt: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model('Booking', bookingSchema);