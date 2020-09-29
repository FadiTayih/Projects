const User = require('./../model/userModel');
const catchAsyc = require('./../uilits/catchAsyc');
const jwt = require('jsonwebtoken');
const AppError = require('./../uilits/appError');
const { promisify } = require('util');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPRIES_IN,
  });
};

exports.signup = catchAsyc(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsyc(async (req, res, next) => {
  const { email, password } = req.body;

  // check if the email and password exist
  if (!email || !password) {
    next(new AppError('Please provide a correct email or password', 400));
  }

  // Check if the password is correct and the user exist
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // send the token to the client
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
});

// protected routes
exports.protect = catchAsyc(async (req, res, next) => {
  let token;
  // Getting the toke and check if it is there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in ', 401));
  }
  // Verification of the token

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if the user is still there

  const freshUser = await User.findById(decode.id);

  if (!freshUser) {
    return next(new AppError('Token no longer exist', 401));
  }

  // Check if the password didnt change after the token was issued
  if (freshUser.changePasswordAfter(decode.iat)) {
    return next(new AppError('the password has changed recently ', 401));
  }

  // graind access to the protected route
  req.user = freshUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You dont have premission to perform this aciton ', 403)
      );
    }
    next();
  };
};
