const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const salesSchema = new mongoose.Schema({
  nameofProduce: {
    type: String,
  },
  weight : {
    type: Number,
  },

  amount: {
    type: Number,
  },
  nameofBuyer:{
    type:String,
  },
  date:{
  type:Date,
  },
  agent:{
    type:String,
  },
});

// Export Model
//ManagerSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Sales", salesSchema);