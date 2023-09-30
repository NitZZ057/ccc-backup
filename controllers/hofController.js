import dotenv from 'dotenv';
import cloudinary from "cloudinary";
import hofDetails from '../models/hofDetailsModel.js';
import leadImg from '../models/leaderboardModel.js';

dotenv.config();

export const uploadLeadImg = async (req, res) => {
    try {
        const {image} = req.files;
        const result = await cloudinary.uploader.upload(image.path, {
            folder: "pastEvent",
            width: 150,
            crop: "scale",
          });

          const oldImg = await leadImg.findOne()
          if(oldImg){
            oldImg.image=result.secure_url
            await oldImg.save()
            return res.status(200).send({
              success:true,
            })
          }else{
            const addImg =  await leadImg.create({image:result.secure_url})
            return res.status(200).send({
              success:true,
            })
          }

          
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:'error in uploading image'
        })
    }
}

export const uploadHofDetails = async (req, res) => {
    try {
        const {rank,name,score,year,month} = req.fields;
       
          const addImg =  await hofDetails.create({rank:rank,name:name,score:score,year:year,month:month})
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





export const getLeadImg= async (req,res) =>{
    try {
        const images = await leadImg.find({});
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

export const getHOFDetails= async (req,res) =>{
    try {
        const images = await hofDetails.find({});
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

export const deleteHOFImg = async (req,res) =>{
    try {
        const {id} = req.params;
        await leadImg.findByIdAndDelete({_id:id});
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

export const deleteHOFDetails = async (req,res) =>{
    try {
        const {id} = req.params;
        await hofDetails.findByIdAndDelete({_id:id});
        return res.status(200).send({
            success:true,
            message:'details deleted'
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:'error in deleting details'
        })
    }
}
