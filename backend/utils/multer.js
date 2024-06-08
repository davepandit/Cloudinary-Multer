import multer from "multer";
import { __dirname } from "../index.js";
import path from 'path'

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname , 'public/images'))
    },
    filename:function (req, file, cb) {
      
        cb(null, file.originalname)
      }
})
export const upload = multer({ 
    storage:storage, 
})