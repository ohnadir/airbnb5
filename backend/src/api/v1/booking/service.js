const Booking = require('./Model');

exports.booking=async(productInfo, shippingInfo, paymentInfo)=>{
    const response = {
        code: 200,
        status: true,
        message:"Add place Successfully"
    };
    try {
        const result = await Booking.create({
            ...productInfo, ...shippingInfo, ...paymentInfo
        });
        await result.save();
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
        message:"Email based Place Successfully"
    };
    try {
        const result = await Booking.find({});
        if(!result){
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Place found';
            return response;
        }
        response.place = result
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
        message:"Email based Place Successfully"
    };
    try {
        const result = await Booking.find({email: email});
        if(!result){
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Place found by this id';
            return response;
        }
        response.place = result
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}