import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firebaseUID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    displayName: {
        type: String,
        required: false,
        trim: true
    },
    photoURL: {
        type: String,
        required: false,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin', 'superAdmin'],
        default: 'user'
    }
}, {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);

