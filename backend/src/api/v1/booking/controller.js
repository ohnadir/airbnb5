const {
    booking,
    getBookings,
    emailBooking
} = require("./service")

exports.newBooking = async (req, res) => {
    const { status, code, message, newBooking } = await booking({booking :req.body});
    res.status(code).json({ code, status, message, newBooking });
};
exports.bookings = async (req, res) => {
    const { status, code, message, bookings } = await getBookings({...req.body});
    res.status(code).json({ code, status, message, bookings });
};
exports.emailBooking = async (req, res) => {
    const { status, code, message, booking } = await emailBooking({...req.params});
    res.status(code).json({ code, status, message, booking });
};