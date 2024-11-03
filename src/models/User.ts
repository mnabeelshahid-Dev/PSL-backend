// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the User interface and extend Document
interface User extends Document {
    username: string;
    password: string;
}

// Define the user schema
const userSchema: Schema<User> = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

// Create the User model
const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
