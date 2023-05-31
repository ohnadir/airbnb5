const {
    getPlaces,
    getPlace
  } =require("./service")

  exports.places = async (req, res ) => {
    const { status, code, message, places } = await getPlaces({...req.params});
    res.status(code).json({ code, status, message, places });
  };
  
  exports.place = async (req, res ) => {
    const { status, code, message, place } = await getPlace({...req.params});
    res.status(code).json({ code, status, message, place });
  };