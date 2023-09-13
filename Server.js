import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from "./config/db.js";
import { isAdmin, requireSignIn } from "./middlewares/authMiddleware.js";
import cloudinary from "cloudinary";
import path from 'path';
import { fileURLToPath } from "url";



//routes
import potdRoutes from './routes/potdRoutes.js';
import authRoutes from './routes/authRoutes.js'
import imgRout from './routes/imgRouts.js'
import eventRoutes from './routes/eventRoutes.js'

const app = express();
dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//config clodinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });


app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//path
app.use(express.static(path.join(__dirname,'./ccc-sjcem/build')))

app.use('/api/v1/potd',potdRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/question', imgRout);
app.use('/api/v1/event', eventRoutes);
// app.post('/api/v1/potd',(req,res)=>{
//     console.log(req.body)
// })

app.use("*", function(req, res){
  res.sendFile(path.join(__dirname,'./ccc-sjcem/build/index.html'));
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    }
);



