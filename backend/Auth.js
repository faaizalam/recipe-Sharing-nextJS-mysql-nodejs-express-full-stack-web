import  express  from "express";
import { Login, Register, logout } from "./authController.js";
import multer from "multer";
import {S3} from "@aws-sdk/client-s3"
import multerS3 from "multer-s3"

import expressAsyn from "express-async-handler"
import { mypostcreater } from "./Postcontroller.js";
const AuthenRouter=express.Router()
// aws.config.update({
//   accessanalyzer:"AKIA43TWJSSUS6QFAJR6",
//   secretAccessKey:"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"
// })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder where files will be uploaded
    cb(null, '../frontend/nested/public/uploads');
  },
  filename: function (req, file, cb) {
    // Set the file name for the uploaded file
    cb(null, Date.now()+"-"+file.originalname);
  }
});


const s3 = new S3({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: "AKIASDGX5CUFQUIKTU4C",
    secretAccessKey: "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",
  },
});

const storageS3 = multerS3({
  s3: s3,
  bucket: "alamfirsttime",
  
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    cb(null,Date.now()+"-"+file.originalname);
  },
});

const upload3 = multer({ storage: storageS3 });

AuthenRouter.post("/S3", upload3.single("image"),mypostcreater)




const Imgsize=1 * 1024 * 1024;
  const fileFilter=((req,file,cb)=>{
    const filtype=['image/jpeg','image/png']
    if (!filtype.includes(file.mimetype)) {
      const error=new Error("only jpg and png files are allowd")  
      error.code='LIMIT_FILE_TYPES'
      cb(error,false)
    }

    if (file.size>Imgsize) {
        const error = new Error(`File size should be less than ${maxSize} bytes`);
        error.code = 'LIMIT_FILE_SIZE';
        return cb(error, false);
        
    }
    cb(null,true)

  })
  
  const upload = multer({ storage,fileFilter:fileFilter });

 const Logins=express.Router()
 const Loginout=express.Router()

AuthenRouter.post("/register", upload.single("image") ,Register)
Logins.post("/login",Login)
Loginout.post("/logout/user",logout)


export default {AuthenRouter,Logins,Loginout}