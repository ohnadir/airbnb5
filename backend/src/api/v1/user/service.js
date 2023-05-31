const  User  = require("./Modal")
const jwt = require('jsonwebtoken');

exports.registration = async ({ body, phone, email }) => {
    const response = {
      code: 200,
      success : true,
      status: 'success',
      message: 'Registration successfully'
    };
    try {
        const isPhoneExist = await User.findOne({ phone });
        if (isPhoneExist) {
            response.code = 400;
            response.success = false;
            response.status = 'failed';
            response.message = 'User Phone Number already taken';
            return response;
        }
        if(email){
            const isEmailExist = await User.findOne({ email });
            if (isEmailExist) {
                response.code = 400;
                response.success = false;
                response.status = 'failed';
                response.message = 'User Name already taken';
                return response;
            }
        }
        const newUser = new User(body);
        await newUser.save();
        response.token = newUser.getJwtToken();
        response.user= newUser;
        return response;
    } catch (error) {
        response.code = 500;
        response.success = false;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};

exports.login = async ({ email, password }) => {
    const response = {
      code: 200,
      success : true,
      status: 'success',
      message: 'login successfully',
    };
  
    try {
        const user = await User.findOne({email});
        if (!user) {
            response.code = 404;
            response.success = false;
            response.status = 'failed';
            response.message = 'Incorrect credential';
            return response;
        }
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            response.code = 404;
            response.success = false;
            response.status = 'failed';
            response.message = 'Incorrect credential';
            return response;
        }
        
        response.token = user.getJwtToken();
        response.user= user
        return response;
    } catch (error) {
        response.code = 500;
        response.success = false;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
};

exports.loadUser=async({token})=>{
    const response = {
        code: 200,
        success:true,
        status: 'success',
        message: 'Load user successfully',
    };
    try {
        if (!token) {
            response.code = 401;
            response.success = false;
            response.status = 'failed';
            response.message = 'Invalid Token';
            return response;
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET );
        response.user  = await User.findById({_id: decode.id});
        return response;
    } catch (error) {
        response.code = 500;
        response.success = false;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}