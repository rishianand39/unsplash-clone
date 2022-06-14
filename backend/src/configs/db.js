const mongoose = require("mongoose");



 const connect = () => mongoose.connect(process.env.MONGOURL);

 module.exports = connect;