const mongoose = require("mongoose");

//schemas and models

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const organisations = mongoose.Schema({
    title:String,
    description: String,
    admin: mongoose.Types.ObjectId,
    members: []
})