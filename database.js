const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB!!!!!');
  } catch (err) {
    console.err('Error connecting to MongoDB:', errs);
    process.exit(1);
  }
};
