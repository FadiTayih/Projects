const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./Router/tour/tourRouter');
const userRouter = require('./Router/users/usersRouter');
const globalErrorHandler = require('./controller/erroController');
const AppError = require('./uilits/appError');
const app = express();

// MiddleWear
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.newTime = new Date().toISOString();
  next();
});

//  Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// unHandled Routes
app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl}`, 404));
});

// Global error handler
app.use(globalErrorHandler);

module.exports = app;
