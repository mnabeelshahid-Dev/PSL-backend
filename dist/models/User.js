// src/models/User.ts
import mongoose, { Schema } from 'mongoose';
// Define the user schema
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});
// Create the User model
const UserModel = mongoose.model('User', userSchema);
export default UserModel;
