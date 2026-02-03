import User from "../model/user.js";
import bcryptjs from 'bcryptjs';

export const userSignup = async(req, res) => {

    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) // if user  already present
            return res.status(400).json({ message: "user already exists" });

        const hashPassword = await bcryptjs.hash(password,10)
        const newUser = new User({
            fullname,
            email,
            password:hashPassword,
        })

        await newUser.save();
        res.status(201).json({ 
            message: "user created successfully",
            user:{
                _id:newUser._id,
                fullname:newUser.fullname,
                email:newUser.email,
            }
        });

    } catch (error) {
        console.log("User not created: \n",error);
        res.status(500).json({message:"Internal server error"})
        
    }
}

export const userLogin = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        
        if(!user)
            return res.status(400).json({message:"Invalid username or password"});
        
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch)
            return res.status(400).json({message:"Invalid username or password"});
        
        return res.status(200).json({message:"Login successfully ",user:{
               _id:user._id,
               fullname: user.fullname,
               email:user.email
        }});
    } catch (error) {
        console.log(`Error during login \n ${error}`);
        res.status(500).json({message:"Internal server error"});
        
    }
}