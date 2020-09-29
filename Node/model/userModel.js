const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    validate: [validator.isEmail, 'email format'],
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'confirmPassword is required'],
    validate: {
      // this only work on save
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
  passwordChangeAt: Date,
});

userSchema.pre('save', async function (next) {
  // run if password was modified
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

// Instance method to check the user password
userSchema.methods.correctPassword = async function (
  cadinatePassword,
  userPassword
) {
  return await bcrypt.compare(cadinatePassword, userPassword);
};

// Instance method to check if the password was changed
userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangeAt) {
    const changeTimeStamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changeTimeStamp;
  }
  return false;
};

const Users = mongoose.model('User', userSchema);

module.exports = Users;
