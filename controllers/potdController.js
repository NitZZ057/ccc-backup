import { exec } from "child_process";
import { promisify } from "util";
import { resolve } from "path";
import { writeFile } from "fs";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import path from 'path';

import userModel from "../models/userModel.js";
import { response } from "express";
import questionModel from "../models/questionModel.js";
import imageModel from "../models/imageModel.js";

const execAsync = promisify(exec);
const writeFileAsync = promisify(writeFile);




export const jdoodleController = async (req, res) => {
    try {
        //check credits
        const creditData = {
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        };
        const credits = await axios.post(`https://api.jdoodle.com/v1/credit-spent`,creditData);
        console.log(credits.data);

        const creditData1 = {
            clientId: process.env.CLIENT_ID_1,
            clientSecret: process.env.CLIENT_SECRET_1,
        };
        const credits1 = await axios.post(`https://api.jdoodle.com/v1/credit-spent`,creditData1);
        console.log(credits1.data);

        let clientId = ''
        let clientSecret = ''

        //switch accounts
        if(credits.data.used < 200){
           clientId = process.env.CLIENT_ID;
            clientSecret = process.env.CLIENT_SECRET;
        }else if(credits1.data.used < 200){
            clientId = process.env.CLIENT_ID_1;
            clientSecret = process.env.CLIENT_SECRET_1;
        }
        else{
            clientId = process.env.CLIENT_ID_2;
            clientSecret = process.env.CLIENT_SECRET_2;
        }

        const { code,language,id,stdin,output } = req.body;

        const requestData = {
            script: code,
            language: language,
            versionIndex: '3',
            stdin: stdin,
            clientId: clientId,
            clientSecret: clientSecret,
        };

        

        let passed = false;

        

        const response = await axios.post(`https://api.jdoodle.com/v1/execute`, requestData);

        console.log(response.data.output.trim(),output.trim())
        
        if(response.data.output.trim() == output.trim()){
            passed = true;
            const user = await userModel.findById(id);
            if(user.solved == 0){
                user.score += 10;
                user.solved = 1;
                await user.save();
            }else{
                return res.status(200).send({
                    success: true,
                    passed:false,
                    message:'You have solved this question already'
                });
            }
            // const user = await userModel.findByIdAndUpdate(id, {$inc:{score : 10}}, { new: true });
        }

        
        
        return res.status(200).send({
            success: true,
            data: response.data,
            passed: passed,
            output: response.data.output
        });
    } catch (error) {
        console.log(error)
        return res.status(200).send({
            success: false,
            message: "error in compilation",
            error
        })
    }
}

// export const jdoodleController = async (req, res) => {
//     try {
//         const { config } = req.body;
//         console.log(config)
//         const response = await axios.post(config.url, config.data);
//         return res.status(200).send({
//             success: true,
//             data: response.data
//         });
//     } catch (error) {
//         console.log(error.response)
//         return res.status(200).send({
//             success: false,
//             message: "error in compilation",
//             error
//         })
//     }
// }

export const getWinnersController = async (req,res) =>{
    try {
        const winners = await userModel.find({role:{$ne:1}}).sort({score:-1, updatedAt: 1}).limit(10);

        if(!winners){
            return res.status(404).send({
                success:false,
                message:'No user found'
            })
        }

        return res.status(200).send({
            success:true,
            winners:winners
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in getting weekly winners'
        })
    }
}

export const getArgsController = async (req,res) =>{
    try {
        
        const args = await imageModel.find({});
        return res.status(200).send({
            success:true,
            testcase:args[0].testcase,
            output:args[0].output
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in getting weekly winners'
        })
    }
}

export const getPhotoController = async (req,res) =>{
    try {
        const questions = await questionModel.find({})

        return res.status(200).send({
            success:true,
            questions:questions
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in getting weekly winners'
        })
    }
}

