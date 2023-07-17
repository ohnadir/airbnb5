const {
    booking,
    getBookings,
    getBooking,
    emailBooking
} = require("./service")

exports.newBooking = async (req, res) => {
    const { status, code, message, newBooking } = await booking({booking :req.body});
    res.status(code).json({ code, status, message, newBooking });
};
exports.bookings = async (req, res) => {
    const { status, code, message, bookings } = await getBookings();
    res.status(code).json({ code, status, message, bookings });
};

exports.booking = async (req, res) => {
    const { status, code, message, booking } = await getBooking({ id:req.params.id } );
    res.status(code).json({ code, status, message, booking });
};

exports.emailBooking = async (req, res) => {
    const { status, code, message, bookings } = await emailBooking({ email:req.params.email });
    res.status(code).json({ code, status, message, bookings });
};