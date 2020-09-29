const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const port = process.env.PORT;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected succesfully');
  });

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
