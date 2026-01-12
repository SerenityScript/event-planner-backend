require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_LINK)
  .then(() => {
    console.log('Mongo connected');

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error:', err.message);
    process.exit(1);
  });
