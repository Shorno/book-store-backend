import {User} from '../models/Users.js';

export const createUser = async (req, res) => {
    const {firebaseUID, email, displayName, photoURL, role} = req.body;

    if (!firebaseUID || !email || !role || !displayName || !photoURL) {
        return res.status(400).json({
            status: 'error',
            message: 'Please provide the required fields'
        });
    }

    try {
        const existingUser = await User.findOne({email});

        if (existingUser) {
            const result = await User.findOneAndUpdate(
                {email},
                {
                    $set: {
                        displayName,
                        photoURL,
                    }
                },
                {
                    upsert: true,
                    new: true,
                    runValidators: true
                }
            );

            return res.status(200).json({
                status: 'success',
                data: result
            });
        } else {

            const newUser = new User({
                firebaseUID,
                email,
                displayName,
                photoURL,
                role
            });

            const result = await newUser.save();

            return res.status(201).json({
                status: 'success',
                data: result
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error creating or updating user',
            error: error.message
        });
    }
};


export const getUsers = async (req, res) => {
    try {
        const { email, role } = req.query;

        if (email) {
            const user = await User.findOne({ email })
                .select('email role')
                .lean();

            if (!user) {
                return res.status(404).json({
                    status: 'fail',
                    message: 'User not found'
                });
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    email: user.email,
                    role: user.role
                }
            });
        }

        const query = role ? { role } : {};
        const users = await User.find(query)
            .lean();

        return res.status(200).json({
            status: 'success',
            results: users.length,
            data: users
        });

    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error fetching users',
            error: error.message
        });
    }
};