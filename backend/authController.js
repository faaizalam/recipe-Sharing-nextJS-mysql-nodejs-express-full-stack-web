import { dbs } from "./index.js"
import bcrypt from 'bcryptjs'
import expressAsyn from "express-async-handler"
import multer from "multer";
import Jwt  from "jsonwebtoken";
import { tokens } from "./utils.js";






export const Register=expressAsyn(async(req,res)=>{
    if (!req.file) {
        // Assign the path to the default avatar image
        req.file = {
          filename: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png',
        };
      }
    // console.log(`/${req.file.path}`)
    
    const q="select * from users where email =? OR name=?"
    dbs.query(q,[req.body.email,req.body.name],(err,rows)=>{
        if (err) {
            res.status(500).send(err.message)
            return
        }
        if (rows.length) {
            res.status(500).send({message:"Account Exist with the Email or name Already"})
            return
        }
        
          

        const salt=bcrypt.genSaltSync(10)
        const password=bcrypt.hashSync(req.body.password,salt)
        const savinguser="insert into users(`name`,`email`,`password`,`image`) values(?)"
        
        
          const values=[req.body.name,req.body.email,password,req.file.filename]
           dbs.query(savinguser,[values],(err,data)=>{
            if (err) {
                console.log(err)
              return  
            }
            res.status(200).send({message:"user has been created"})

        })



    })
 
    








})





export const Login = async(req,res)=>{
  console.log(req.body)
  // try {
    
    const q='select * from users where email=?'
   
  
    dbs.query(q,[req.body.email,req.body.password],(err,data)=>{
      if (data.length===0) {
        console.log("wroks")
       res.status(404).send({message:"no user found"})
       return
      }
      if(err)return res.status(500).send({message:err})
  
      const ispassword=bcrypt.compareSync(req.body.password,data[0].password)
      console.log(ispassword)
      if (!ispassword) {
        console.log("woring")
        return res.status(404).send({message:"email or password is wrong"})
        
      }
     console.log("yes")
   const token=tokens(data)
   console.log(token)
  const {password,...other}=data[0]
  console.log(other)
   
  // res.cookie("access_token",token,{
  //   httpOnly:true
  // }).status(200).json(other)
  const maxAge = 3 * 24 * 60 * 60;
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.status(201).send({message:"sucessfulyy loged in",userData:data[0] })
  
    })
  // } catch (error) {
  //    res.sendStatus(500).send({message:err.message})
    
  // }
 

}


export const logout=async(req,res)=>{
  console.log("yes")
  res.clearCookie("jwt",{sameSite:"none",secure:true})
  // message
  res.status(201).send({message:"user has been logged out sucessfully"})


}