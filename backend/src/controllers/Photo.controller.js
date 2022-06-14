const router=require("express").Router();

const Photo=require("../models/photo.model")

// GET ALL PRODUCT
router.get("/",async(req,res)=>{
    const qNew=req.query.new;
    const qCategory=req.query.category;

   try {

       let photos;
       if(qNew){
           photos=await Photo.find().sort({createdAt: -1}).limit(8)
       }else if(qCategory){
           photos=await Photo.find({categories:{
               $in:[qCategory],
              },
           })
       }else{
           photos=await Photo.find();
       }
     
       return res.status(200).json(photos)

   } catch (error) {
       return res.status(500).json(error)   
   }
});