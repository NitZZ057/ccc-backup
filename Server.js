import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';



//routes
import potdRoutes from './routes/potdRoutes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



app.use('/api/v1/potd/compile',potdRoutes);

// app.post('/api/v1/potd',(req,res)=>{
//     console.log(req.body)
// })


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    }
);



