import Link from 'next/link'
import Layout from '../../component/layout'
import myhome from "./Hmain.module.scss"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import Readmore from '@/component/Readmore'
import { Myvalues } from '@/component/Authcontext'
import { useRouter } from 'next/router'
import { Baseurl } from '@/config/config'
// import { Parser } from 'html-to-react'


export default function Home() {
  const {datas,setdatas}=useContext(Myvalues)
   const [posts,setposts]=useState([])
   const router=useRouter()
   useEffect(()=>{
    let q=router.query.cat?router.query.cat:""
    try {
      
      const getposts=async()=>{
       
        const {data}=await Baseurl.get(`/get/posts?cat=${q}`)
        if (data!==0) {
          console.log(data,"data")
          setposts(data)
          
        }else{
          console.log(data.message,"else")
        }
  
      }
      getposts()
    } catch (error) {
      console.log(error.message)
      
    }

   },[router.query.cat])


//   const postarr=[
//     {
//     id:1,
//    img:"/Images/first.jpg",
//    desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//     title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
//   },
//     {
//     id:2,
//    img:"/Images/sec.jpg",
//    desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//     title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
//   },
//     {
//     id:3,
//    img:"/Images/three.jpg",
//    desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//     title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
//   },
//     {
//     id:4,
//    img:"/Images/four.jpg",
//    desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//     title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
//   },
//     {
//     id:5,
//    img:"/Images/five.jpg",
//    desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//     title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
//   },
  
// ]
  
  return (
     <Layout>
      <div className={myhome.maindiv}>
        <div className={myhome.posts}>
          {
            posts.map((x)=>(
              <div key={x.id} className={myhome.post}>
                  <div className={myhome.imgs}>
                <img src={x.Pimage} alt='post'></img>
                  </div>
                <div className={myhome.content}>
                  {
                    <h1><Link href={`/admin/${x.postid}`} passHref><div>{x.title}</div></Link></h1>
                  }
                  {/* <p>{x.desc}</p> */}
                  <Readmore desc={x.desc}/>
                  
                  

                </div>
                </div>

            ))
          }

        </div>
        
      <footer>
        footer of main
      </footer>
      </div>
     </Layout>
  )
}
