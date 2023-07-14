const Booking = require('./Model');

exports.booking=async({booking})=>{
    const response = {
        code: 200,
        status: true,
        message:"Booking Successfully"
    };
    try {
        const result = await Booking.create(booking);
        await result.save();
        response.newBooking = result;
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}
exports.getBookings =async()=>{
    const response = {
        code: 200,
        status: true,
        message:"Fetch all booking"
    };
    try {
        const result = await Booking.find({});
        if(!result){
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Place found';
            return response;
        }
        response.bookings = result
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}

exports.getBooking =async({id})=>{
    const response = {
        code: 200,
        status: true,
        message:"Fetch booking details"
    };
    try {
        const result = await Booking.findOne({ _id : id});
        if(!result){
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Place found by this id';
            return response;
        }
        response.booking = result
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}

exports.emailBooking=async({email})=>{
    const response = {
        code: 200,
        status: true,
        message:"Email based Booking"
    };
    try {
        const result = await Booking.find({email: email});
        if(!result){
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Booking found by this email';
            return response;
        }
        response.booking = result
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}