const User = require("../models/user");
const Token = require("../models/token");
const bcrypt = require("bcrypt");
const sendEmail = require("../helpers/sendmail");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

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

const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.v2.uploader.upload(req.files.image.path);
        res.json({
            url: result.secure_url,
        })
    } catch (err) {
        console.log(err);
        res.json({
            error: "Could not upload Image",
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { _id, image, fname, lname } = req.body.user;
        const user = await User.findByIdAndUpdate(_id, {
            image: image,
            fname: fname,
            lname: lname,
        }, {
            new: true
        })
        // console.log(user);

        if (!user) {
            return res.json({
                error: "Can't update profile",
            })
        }

        user.password = undefined;
        return res.status(200).json({
            user,
        })
    } catch (err) {
        console.log('PROFILE UPDATE ERR: ', err);
        res.json({
            error: "Can't update profile",
        })
    }
}

const verifyToken = async (req, res) => {
    try {
        const { id, token } = req.params;

        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.json({
                error: "Invalid user ID",
            });
        }

        const tokenExist = await Token.findOne({ userId: id, token: token });
        if (!tokenExist) {
            return res.json({
                error: "Invalid or expired token",
            });
        }

        const newUser = await User.findByIdAndUpdate(id, { verified: true });
        if (!newUser) {
            return res.json({ error: "Failed to update user" });
        }

        await Token.findOneAndDelete({ token });

        return res.json({
            message:
                "Congratulations! Your account has been successfully verified.",
        });
    } catch (err) {
        console.error(`Error occurred while verifying token: `, err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


const signin = async (req, res) => {
    try {
        // console.log(req.body);
        const user = await User.findOne({ email: req.body.user.email });
        if (!user) {
            return res.json({
                error: "Invalid email or password",
            });
        }

        const validPassword = await bcrypt.compare(
            req.body.user.password,
            user.password
        );
        if (!validPassword)
            return res.json({ error: "Invalid email or password" });

        if (user.verified === false) {
            let token = await Token.findOne({ userId: user._id });
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex"),
                }).save();
            }

            const url = `${process.env.CLIENT_URL}/users/${user._id}/verify/${token.token}`;
            await sendEmail(user.email, "Verify NotesApp Email", url);
            return res.json({
                error: "Verification mail sent to your account, please verify first",
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "100d",
        });

        user.password = undefined;
        user.secret = undefined;

        return res.json({
            message: "Login successfull",
            token,
            user,
        });
    } catch (err) {
        console.log("Sign in Error: ", err);
        res.status(500).json({ error: "An issue occured while fetching data" });
    }
};

const currentUser = async (req, res) => {
    try {
        // console.log(req.auth);
        let user = await User.findById(req.auth._id);
        if (!user) return res.json({ error: "UnAuthorized Access" });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.log("User Authentication ERR: ", err);
        res.status(401).json({
            error: "UnAuthorized Access",
        });
    }
};

module.exports = {
    signup,
    verifyToken,
    signin,
    currentUser,
    updateUser,
    uploadImage,
};
