const User = require("../user/Model")
const jwt = require('jsonwebtoken');

// Checks if user is authenticated or not 
exports.isAuthenticatedUser = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({message: 'UnAuthorized access'})
  }
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded){
    if(err) {
      return res.status(403).send({ message: 'Forbidden access' })
    }
    req.decoded = decoded;
    next();
  })
}

exports.authorizeRoles = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1];
  if (!token) {
    return res.status(401).send({message: 'UnAuthorized access'})
  }
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded){
    if(err) {
      return res.status(403).send({ message: 'Forbidden access' })
    }
    const user = await User.findById(decoded.id);
    if(user.role === "admin"){
      req.decoded = decoded;
      next();
    }else{
      return res.status(401).send({message: `Role ${user.role} is not allowed to access this resource`})
    }
  })
}