const { Schema, model } = require('mongoose');
const placeSchema = Schema({
  name: { type: String, required: true},
  img: [],
  bookingDate : [], 
  price: { type: Number, required: true},
  rating : Number,
  serviceCharge : Number,
  zone: String,
  latitude: Number,
  longitude : Number,
  reviews: []
},{ timestamps: true });

module.exports = model('Place', placeSchema);