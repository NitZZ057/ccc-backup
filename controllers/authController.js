import JWT from "jsonwebtoken";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import cccMemberModel from "../models/cccMemberModel.js";
import nodemailer from 'nodemailer';

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.send({ message: "Name required!!" })
        }
        if (!email) {
            return res.send({ message: "Email required!!" })
        }
        if (!password) {
            return res.send({ message: "Password required!!" })
        }

        //
        // const mis_id = email.split('@')[0];

        // const ccc_member = await cccMemberModel.findOne({mis_id})
        // if(!ccc_member){
        //     return res.status(200).send({
        //         success: false,
        //         message: "You are not a CCC member. Please Contact CCC team."
        //     })
        // }

        //

        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(200).send({
                success: false,
                message: "User Already Exist, Please Sign in"
            })
        }

        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
        }).save();



        return res.status(201).send({
            success: true,
            message: "User Registered successfully",
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
};



export const signInController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send({ message: "Invalid Email or Password" })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "Invalid Email"
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        return res.status(200).send({
            success: true,
            message: "Login Successfull",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                score: user.score
            },
            token

        });


    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error while Sign in",
            error
        });
    }
}

export const getScoreController = async (req, res) => {
    try {
        const id = req.params.id;
        const score = await userModel.findOne({ _id: id })
        return res.status(200).send({
            success: true,
            score: score.score
        })
    } catch (error) {

    }
}

export const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "Invalid Email"
            })
        }


        const transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        const min = 100000; // Minimum 6-digit number
        const max = 999999; // Maximum 6-digit number
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;


        const mailOptions = {
            from: '"ccc-sjcem"<nitzz057@gmail.com>',
            to: user.email,
            subject: "Password Reset OTP",
            html: `
              <html>
                <body>
                  <h1>Hello, ${user.name}</h1>
                  <p>We detect a request to change the password. It requires further OTP verification.OTP is valid for 60 sec.</p>
                  <b>Your OTP is: ${randomNum}</b>
                  <p>Regards,</p>
                  <p>CCC Team</p>
                </body>
              </html>
            `,
          };

        const info = await transporter.sendMail(mailOptions);

        return res.status(200).send({
            success: true,
            id: user._id,
            otp: randomNum,
            message:"OTP sent successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error while sending OTP",
            error
        })
    }
}

export const resetPasswordController = async (req, res) => {
    try {
        const { id, password } = req.body;
        const hashedPassword = await hashPassword(password);

        const user = await userModel.findOneAndUpdate({ _id: id }, { password: hashedPassword })
        if(!user){
            return res.status(200).send({
                success: false,
                message: "Invalid User"
            })
        }

        return res.status(200).send({
            success: true,
            message: "Password reset successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error while reseting password",
            error
        })
    }
}
