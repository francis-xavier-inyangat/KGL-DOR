const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
  },
});

// Export Model
loginSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Login", loginSchema);