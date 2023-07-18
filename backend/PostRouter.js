import  express  from "express";
import {deletepost, getSinglepost, getposts,updatepost } from "./Postcontroller.js";


export const postRouetr=express.Router()

postRouetr.get("/get/posts",getposts)
postRouetr.get("/single/post/:id",getSinglepost)
postRouetr.put("/update/post",updatepost)
postRouetr.delete("/post/delete/:id",deletepost)