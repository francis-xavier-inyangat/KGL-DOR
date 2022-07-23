const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
  },
  position:{
    type:String,
  },
  branch:{
    type:String,
  },
});

// Export Model
//ManagerSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Signup", signupSchema);