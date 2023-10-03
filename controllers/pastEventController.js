import dotenv from 'dotenv';
import cloudinary from "cloudinary";
import pastEventModel from '../models/pastEvetModel.js';


dotenv.config();

export const uploadPastEventImg = async (req, res) => {
    try {
        const {eventName, discription} = req.fields;
        const {image} = req.files;
        const result = await cloudinary.uploader.upload(image.path, {
            folder: "pastEvent",
            width: 150,
            crop: "scale",
          });

          const addImg =  await pastEventModel.create({image:result.secure_url,discription:discription,eventName:eventName})
          return res.status(200).send({
            success:true,
          })
        

          
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:'error in uploading image'
        })
    }
}

export const getPastEventImg= async (req,res) =>{
    try {
        const images = await pastEventModel.find({});
        // console.log(images)
        if(!images){
            return res.status(404).send({
                success:false,
                message:'No image found'
            })
        }

        return res.status(200).send({
            success:true,
            images:images
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:'error in getting images'
        })
    }
}

export const deletePastEventImg = async (req,res) =>{
    try {
        const {id} = req.params;
        await pastEventModel.findByIdAndDelete({_id:id});
        return res.status(200).send({
            success:true,
            message:'image deleted'
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:'error in deleting image'
        })
    }
}

