import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "email is already exist"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
})
const User = mongoose.models.admin || mongoose.model('admin', UserSchema)
export default User