const {
  registration,
  login,
  loadUser,
} =require("./service");


exports.Register = async (req, res) => {
  const { status, code, message, success, token, user } = await registration({
    body:req.body,
    ...req.body
  });
  res.status(code).json({ code, status, message, success, token, user });
};
  
exports.Login = async (req, res) => {
    const { status, code, message, success, token, user } = await login({
      body:req.body,
      ...req.body
    });
    res.status(code).json({ code, status, message,  success, token, user });
};

exports.LoadUser = async (req, res) => {
    const { status, code, message, user } = await loadUser({
      token:req.params.token
    });
    res.status(code).json({ code, status, message, user });
};