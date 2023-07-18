import express from "express"
import mysql from "mysql"
import cors from "cors"
// import { PostRouter } from "./Postcontroller.js"
import  cont from "./Auth.js"
import cookieParser from "cookie-parser"
import path from 'path'
// import { getSinglepost, getposts } from "./Postcontroller.js"
import { postRouetr } from "./PostRouter.js"
const app=express()

app.use(cors({credentials: true, origin: true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
export const dbs=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"faaiz",
    database:"blog"
})
app.use((err, req, res, next) => {
    if (err) {
      // Custom error handling logic
      res.status(500).json({ error: 'Internal Server Error' });
    } 
  });
dbs.connect((err)=>{
    if (err) {
         console.log(err)
    }else{
        console.log("connected")
    }

})
const Port =5000


//
const __dirname=path.resolve()
// app.use('/uploads',express.static(path.join(__dirname,'./uploads')))
// console.log(path.join(__dirname,'./uploads'))
app.use((err, req, res, next) => {
    const status = err.name && err.name === 'validationError' ? 400 : 500;
    res.status(status).send({ message: err.message, })

})

  
app.use(cont.AuthenRouter)
app.use(cont.Logins)
app.use(cont.Loginout)
app.use(postRouetr)
// app.use(getSinglepost)






app.listen(process.env.PORT||Port,()=>{
    console.log(`you server working on http://localhost:5000`)

})