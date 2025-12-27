import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from '../Models/user.js';
import jwt from 'jsonwebtoken';

// config dotenv
dotenv.config();

// create user
export async function createUser(req,res) {
    try {
        const saltRound = 10;
        const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, saltRound);

        const newUser = new User({
            email: process.env.ADMIN_EMAIL,  
            password: hashedPassword
        });

        const result = await newUser.save();

        res.status(201).json({
            message: "User created successful"
        })
    } catch (err) {
        res.status(500).json({
            message: "Fail to create user.",
            error: err.message
        });
    }
}

// login user
export async function loginUser(req,res) {
    try {
        const credentials = req.body;

        // find user is exist
        const existUser = await User.findOne({email: credentials.email});

        if (existUser != null) {
            const validPassword = bcrypt.compareSync(credentials.password ,existUser.password);

            if (validPassword) {
                try {
                    const payload = {
                        email: existUser.email
                    }

                    const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: "48h"});

                    res.status(200).json({
                        message: "Login Successful.",
                        token: token
                    });

                } catch (err) {
                    res.status(500).json({
                        message: "Fail to login",
                        error: err.message
                    })
                }
            } else {
                res.status(500).json({
                    message: "Invalid Password"
                })
            }
        } else {
            res.status(404).json({
                message: "User not found"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Fail to login user.",
            error: err.message
        });
    }
}