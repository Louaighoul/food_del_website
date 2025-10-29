import express from 'express';
import multer from 'multer';
import {addfood,listfood,removefood} from '../controllers/foodController.js';


const foodRouter = express.Router();
// imaget storage configuration
 const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
});

const uploads = multer({storage: storage});


foodRouter.post('/add',uploads.single('image'), addfood);
foodRouter.get('/list', listfood);
foodRouter.delete('/remove/:id', removefood);

// Dummy multer config just to avoid crash


export default foodRouter;
