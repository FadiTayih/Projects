const User = require('./../model/userModel');
const catchAsyc = require('./../uilits/catchAsyc');
const CatchAsyc = require('./../uilits/catchAsyc');

exports.getAllUsers = catchAsyc(async (req, res, next) => {
  const users = await User.find();
  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Route not implemented',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Route not implemented',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Route not implemented',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'Route not implemented',
  });
};
