import dotenv from 'dotenv';
import cloudinary from "cloudinary";
import pastEventModel from '../models/pastEvetModel.js';


dotenv.config();

export const uploadPastEventImg = async (req, res) => {
    try {
        // const {name,image,imgData} = req.body;
        const {image} = req.files;
        const result = await cloudinary.uploader.upload(image.path, {
            folder: "event",
            width: 150,
            crop: "scale",
          });

          console.log(result);
          await pastEventModel.create({
            image: result.secure_url,
            cloudinary_id: result.public_id,
            });

            return res.status(200).send({
                success:true,
                message:'image uploaded'
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
        // const image = await eventModel.findOne({_id:id});
        // console.log(image.cloudinary_id);
        // await cloudinary.uploader.destory(image.cloudinary_id);
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
