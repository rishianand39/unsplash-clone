const router=require("express").Router();
const User=require("../models/user.model")
const CryptoJS=require("crypto-js")




// -----------------REGISTER HERE--------------
router.post("/register",async(req,res)=>{
    const newUser=new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,"rishi").toString(),
        username:req.body.username,

    })
    try {
        const savedUser=await newUser.save();
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// ----------------lOGIN HERE----------------
router.post("/login",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});

        if(!user){
            return res.status(401).json("wrong credential")
        }

        const hashedPassword=CryptoJS.AES.decrypt(user.password,"rishi");

        
        const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)

        if(originalPassword!==req.body.password){
            return res.status(401).json("wrong credential")
        }

        return res.status(200).json(user)

    } catch (error) {
      return res.status(500).json(error)  
    }
})

module.exports=router;