const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const creditSchema = new mongoose.Schema({
    nameofProduce: {
    type: String,
  },
  typeofproduce: {
    type: String,
  },
  weight:{
    type: Number,
  },
  date: {
  type: Date,
  },
  date:{
    type:Date,
  },
  amount:{
    type:Number,
  },
  nameofBuyer:{
    type: String,
  },
  nin:{
    type:String,
  },
  location:{
    type:String,
  },
  contact:{
    type:Number,
  },
  agent:{
    type:String,
  },
  

});

// Export Model

module.exports = mongoose.model("Credit", creditSchema);
