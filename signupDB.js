const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/techDB")

const signupSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    createPassword: String,
    confirmPassword: String
});


const Signup = new mongoose.model("Signup", signupSchema);

module.exports= Signup;
