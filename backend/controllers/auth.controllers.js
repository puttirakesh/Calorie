import bcrypt from 'bcryptjs'
import User from '../models/user.models.js'

export const signup= async(req,res)=>{
    try {
        const {fullName,username,password,confirmPassword,gender}=req.body

        if(password!==confirmPassword){
            return res.status(400).json({error:"Password doesn't match"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error:"user already exits"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender==="male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                password:newUser.password,
                profilePic:newUser.profilePic
            })
        }else{
            res.status(400).json({error:"Invalid user data"})
        }
    } catch (error) {
        console.log("err in signUp controller:- ",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const login=async(req,res)=>{
    try {
        const {username,password}=req.body
        const user = await User.findOne({username})

        const isPasswordCorrect = await bcrypt.compare(password,user?.password ||"")
        
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"})
        }

        res.status(201).json({
            _id:user._id,
            fullName:user.fullName,
            password:user.password,
            profilePic:user.profilePic
        })
    } catch (error) {
        console.log("err in login controller:- ",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"logged out successfully"})
    } catch (error) {
        console.log("err in logout controller:- ",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}