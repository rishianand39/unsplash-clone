const mongoose = require("mongoose");



 const connect = () => mongoose.connect("mongodb+srv://rishianand:rishi123@cluster0.khgq8.mongodb.net/?retryWrites=true&w=majority");

 module.exports = connect;