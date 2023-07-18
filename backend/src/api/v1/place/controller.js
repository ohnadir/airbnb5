const {
  getPlaces,
  getPlace,
  search,
  filter,
  putBookedDate
} =require("./service")

  exports.places = async (req, res ) => {
    const { status, code, message, places } = await getPlaces({});
    res.status(code).json({ code, status, message, places });
  };
  
exports.place = async (req, res ) => {
  const { status, code, message, place } = await getPlace({...req.params});
  res.status(code).json({ code, status, message, place });
};
exports.searchPlace = async (req, res ) => {
  const { status, code, message, places, total } = await search({ q : req.query});
  res.status(code).json({ code, status, message, places, total });
};
exports.putBookingDate = async (req, res) => {
  const { status, code, message, newBooking } = await putBookedDate({ id:req.params.id, booking :req.body});
  res.status(code).json({ code, status, message, newBooking });
};