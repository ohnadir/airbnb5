const Place = require('./Model');

exports.getPlaces = async () => {
    const response = {
        code: 200,
        status: 'success',
        message: 'Places fetch successfully',
    };
    try {
        const places = await Place.find({});
        if (!places) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No Place found at this moment';
            return response;
        }
        response.places = places
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}
  
exports.getPlace = async ({id}) => {
    const response = {
        code: 200,
        status: 'success',
        message: 'Place fetch successfully',
    };
    try {
        const place = await Place.findOne({_id:id});
        if (!place) {
            response.code = 404;
            response.status = 'failed';
            response.message = 'No place found by this id';
            return response;
        }
        response.place = place
        return response;
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}