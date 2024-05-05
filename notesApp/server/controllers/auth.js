const User = require("../models/user");
const Token = require("../models/token");
const bcrypt = require("bcrypt");
const sendEmail = require("../helpers/sendmail");
const crypto = require("crypto");
const mongoose = require("mongoose");

const signup = async (req, res) => {
    const { fname, lname, email, password } = req.body.userData;
    if (!fname) {
        return res.json({
            error: "First name is required",
        });
    }
    if (!password || password.length < 6) {
        return res.json({
            error: "Password is required & should be atleast 6 characters long",
        });
    }

    try {
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: "Email already registered",
            });
        }
    } catch (err) {
        console.log("Error while checking for existing user");
    }

    try {
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await new User({
            ...req.body.userData,
            password: hashedPassword,
        }).save();

        const token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();

        const url = `${process.env.CLIENT_URL}/users/${user._id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify NotesApp Email", url);
        return res.json({
            message:
                "An verification link sent to your email account, Please verify!",
        });
    } catch (err) {
        console.log("Register User Error: ", err);
    }
};

const verifyToken = async (req, res) => {
    try {
        const { id, token } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.json({
                error: "Invalid URL",
            });
        }

        const texist = await Token.findOne({ userId: id, token: token });
        if (!texist) {
            return res.json({
                error: "Invalid URL",
            });
        }

        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.json({
                error: "Invalid URL",
            });
        }

        const newUser = await User.findByIdAndUpdate(id, {
            ...user,
            verified: true,
        });

        if (!newUser) return res.json({ error: "An Error Occured" });
        await Token.findOneAndDelete({ token });

        return res.json({
            message: "Congrats! You are successfully registered",
        });
    } catch (err) {
        console.log(`Error occured while verifying token: `, err);
    }
};

module.exports = { signup, verifyToken };
