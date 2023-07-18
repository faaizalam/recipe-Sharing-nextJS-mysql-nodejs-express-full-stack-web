import epxress from "express"
import { dbs } from "./index.js"
import Jwt  from "jsonwebtoken";

export const getSinglepost=(req,res)=>{
           console.log(req.params.id)
        //    select * from users u JOIN posts p ON u.idusers=p.postid where p.postid=?"
    const q="select * from posts p JOIN users u ON u.idusers=p.uid where postid=?"
    dbs.query(q,[req.params.id],(err,data)=>{
        if (err) {
            res.send({message:"no post was found"})
            return
        }
        
        if (data.length===0) {
            console.log(data)
            res.send({message:"no post was found"})
            return
            
        }

        if(data.length>0){
            console.log(data)
            res.status(200).send(data)

        }

    })

}
export const getposts=(req,res)=>{
    console.log("yes",req.query.cat)
    // let t="faaiz"
    // if (t) {
    //     console.log("hh")
        
    // }
   

    // const q= req.query.cat ? "select * from posts where category=?":"select * from posts"
    
    const q = req.query.cat? "select * from posts where category=?" : "select * from posts";

    console.log(q)
    dbs.query(q,[req.query.cat],(err,data)=>{
        if (err) {
            console.log(err)
            res.status(500).send({message:"error in fetching the posts"})
            
        }else{
            res.status(200).send(data)
            // console.log(data,"else")
        }
    })
   


}

export const deletepost=async(req,res)=>{
  
console.log("see")
    const token=req.cookies.jwt
    if (!token) {
        res.send({message:"you dont have acess"})
        return
    }
    Jwt.verify(token,"secretkey",(err,data)=>{
        if (err) {
            console.log("yes")
            res.send({message:"you dont have acess OR your token has been expired"})
            return
        }

        const postid=req.params.id
        const q="delete from posts where postid=? AND uid=?"
        dbs.query(q,[postid,data.id],(err,data)=>{
            if (err) {
                res.send({message:"error while deleting post"})
                
            }else{
                
                res.send({message:"sucessfully deleted"})
                return
            }
        })
    })


    
}
export const updatepost=('/',((req,res)=>{
    res.json("hello")
}))


export const mypostcreater=async(req,res,next)=>{
    let token=req.cookies.jwt
    // if (!token) {
    //     res.send({message:"you dont have acess"})
    //     return
        
    // }
    Jwt.verify(token,"secretkey",(err,data)=>{
        // if (err) {
        //     console.log("yes")
        //     res.send({message:"you dont have acess OR your token has been expired"})
        //     return
        // }

        let Pimage= req.file.location?req.file.location:""
        let Date=req.body.Date
        console.log(req.body,req.body.Date)
       const q="insert into posts(`desc`,`title`,`Pimage`,`Date`,`uid`,`category`) values(?)"
       const value=[req.body.desc,req.body.title,Pimage,Date,Number(req.body.uid),req.body.category]
       dbs.query(q,[value],(err,data)=>{
         if (err) {
           console.log(err)
           res.status(500).send({message:"the problem in uplaading post"})
           
       }else{
             res.send({message:"the post has been successfully posted"})
    
         }
       })
    })



}