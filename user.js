const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
        required: true,
    },
},{ strict: true, timestamps: true });
const User = mongoose.model("User", UserSchema);
module.exports = User;