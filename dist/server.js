// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import userRoutes from './routes/userRoutes';
config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
// Options can be set directly on the connection instance if needed
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));
// Routes
app.use('/api/users', userRoutes);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
