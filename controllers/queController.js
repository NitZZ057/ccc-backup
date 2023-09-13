import imageFileName from "../models/imageModel.js";
import cloudinary from "cloudinary";
import userModel from "../models/userModel.js";


export const addQuestionController = async (req, res) => {
    try {
        const {question, testcase, output} = req.fields;
        const {image} = req.files;
        const result = await cloudinary.uploader.upload(image.path, {
            folder: "event",
            width: 150,
            crop: "scale",
          });

          const oldImg = await imageFileName.findOne()
          await userModel.updateMany({},{$set:{solved:0}});
          if(oldImg){
            oldImg.image=result.secure_url
            oldImg.question=question
            oldImg.testcase=testcase
            oldImg.output=output
            await oldImg.save()
            return res.status(200).send({
              success:true,
            })
          }else{
            const addImg =  await imageFileName.create({image:result.secure_url,question:question,testcase:testcase,output:output})
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

export const getQuestionController = async (req, res) => {
    try {
        const questions = await imageFileName.find({});
        // console.log(questions)
        return res.status(200).send({
            success:true,
            questions:questions
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:'error in getting images'
        })
    }
}