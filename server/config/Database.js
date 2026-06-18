const mongoose = require("mongoose");

// commonjs export so that server.js can require it
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
