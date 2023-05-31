const {
    booking,
    getBookings,
    emailBooking
} = require("./service")

exports.newBooking = async (req, res, next) => {
    const { status, code, message } = await booking({...req.body});
    res.status(code).json({ code, status, message });
};
exports.bookings = async (req, res, next) => {
    const { status, code, message, places } = await getBookings({...req.body});
    res.status(code).json({ code, status, message, places });
};
exports.emailBooking = async (req, res, next) => {
    const { status, code, message, place } = await emailBooking({...req.params});
    res.status(code).json({ code, status, message, place });
};