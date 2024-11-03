import UserModel from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User created successfully!" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const login = async (req, res) => {
    try {
        const { password } = req.body;
        const user = await UserModel.findOne({});
        if (!user)
            return res.status(400).json({ message: "Invalid credentials" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
