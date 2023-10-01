import dotenv from 'dotenv';
import cloudinary from "cloudinary";
import eventModel from '../models/eventModel.js';
import userModel from '../models/userModel.js';


dotenv.config();

export const eventImageController = async (req, res) => {
    try {
        // const {name,imgData} = req.body;
        const { image } = req.files;
    
        const result = await cloudinary.uploader.upload(image.path, {
            folder: "event",
            width: 150,
            crop: "scale",
        });

        console.log(result);
        await eventModel.create({
            image: result.secure_url,
            cloudinary_id: result.public_id,
        });

        return res.status(200).send({
            success: true,
            message: 'image uploaded'
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'error in uploading image'
        })
    }
}

export const getEventImageController = async (req, res) => {
    try {
        const images = await eventModel.find({});
        // console.log(images)
        if (!images) {
            return res.status(404).send({
                success: false,
                message: 'No image found'
            })
        }

        return res.status(200).send({
            success: true,
            images: images
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'error in getting images'
        })
    }
}

export const deleteEventImgController = async (req, res) => {
    try {
        const { id } = req.params;
        // const image = await eventModel.findOne({_id:id});
        // console.log(image.cloudinary_id);
        // await cloudinary.uploader.destory(image.cloudinary_id);
        await eventModel.findByIdAndDelete({ _id: id });
        return res.status(200).send({
            success: true,
            message: 'image deleted'
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'error in deleting image'
        })
    }
}

export const resetScoreController = async (req, res) => {
    try {
        const result = await userModel.updateMany({}, { $set: { score: 0 } });
        if (result.modifiedCount > 0) {
            return res.status(200).send({
                success: true,
                message: 'Score upadted successfully',
                result: result

            })
        }

        return res.status(404).send({
            success: false,
            message: 'No user found'
        })


    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'error in updating score'
        })
    }
}