// jwtOwner.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

// In-memory blacklist
const tokenBlacklist = new Set();

// Middleware to verify JWT and check blacklist
export const verifyJwtAdmin = (req, res, next) => {
    const adminToken = req.headers['authorization']?.split(' ')[1];

    if (!adminToken) {
        return res.status(403).json({ message: 'Token required.' });
    }

    // Check if the token is blacklisted
    if (tokenBlacklist.has(adminToken)) {
        return res.status(401).json({ message: 'Token has been blacklisted.' });
    }

    jwt.verify(adminToken, JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token has expired.' });
            }
            return res.status(401).json({ message: 'Invalid token.' });
        }
    
        req.admin = decoded;
        next();
    });
    

};

// Function to blacklist a token
export const blacklistToken = (adminToken) => {
    tokenBlacklist.add(adminToken);
};
