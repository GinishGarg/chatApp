import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateJWT.js";

export const signup = async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match!" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashed_password = await bcrypt.hash(password, salt);
   

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = User({
      fullName,
      username,
      password: hashed_password,
      profilepic: gender == "male" ? boyProfilePic : girlProfilePic,
      gender,
    });
    if (newUser) {
        generateTokenAndSetCookie(newUser._id,res);
        await newUser.save();

      return res.status(201).json({
        id: newUser._id,
        fullname: newUser.fullName,
        username: newUser.username,
        password: newUser.password,
        profilepic: newUser.profilepic,
        gender: newUser.gender,
      });
    } else {
      return res.status(400).json({ error: "Invalid User Data!" });
    }
  } catch (err) {
    if (err) {
      console.log("error in signup controller", err.message);
    }
  }
};
export const login =async (req,res) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect =  bcrypt.compare(password,user?.password || "");

        if (!user || !isPasswordCorrect) {
            res.status(400).json({error:"Invalid Username or Password"})
        }
         
        generateTokenAndSetCookie(user._id,res);

        return res.status(200).json({
            fullName:user.fullName,
            username:user.username,
            profilepic:user.profilepic,
            gender:user.gender
        })
    } catch (error) {
        

        console.log("error in login controller:", error.message);
        res.status(500).json({error:"Internal server error"})
    }
};
export const logout =async (req,res) => {
try {
  res.cookie("jwt","",{maxAge:0})
  res.status(200).json({message:"Logged out Succesfully"})
} catch (error) {
  console.log("error in login controller:", error.message);
}
  
};
