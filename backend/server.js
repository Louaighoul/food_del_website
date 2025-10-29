import express from 'express';
import cors from 'cors';
import {connectDB} from './config/db.js';

import foodRouter from "./routes/foodRouter.js";



//app configuration
const app = express();
//database connection


connectDB();

//api endpoints
app.use('/api/food', foodRouter)
app.use('/image', express.static('uploads')); // Serve static files from the uploads directory


//middleware
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('api is running');
})

//port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});