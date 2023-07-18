import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import singlePage from './Single.module.scss'
import Layout from '@/component/layout';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, Button, Spinner } from '@chakra-ui/react';
import { EditIcon,DeleteIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Readmore from '@/component/Readmore';
import { Baseurl } from '@/config/config';
import moment from "moment"
import { Myvalues } from '@/component/Authcontext';
// const ids={
//   id:1,
//  img:"/Images/first.jpg",
//  desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $stylesIt looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $stylesIt looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $stylesIt looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//   title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles  It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles  It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles   It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
// }
const sliderr=[
  {
  id:1,
 img:"/Images/first.jpg",
 desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead looks like there might be a problem with the syntax in your mixin definition. Instead looks like there might be a problem with the syntax in your mixin definition. Instead  looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
  title:"work"
  },
  {
  id:2,
 img:"/Images/sec.jpg",
 desc:"faaiz in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
  title:"exprenice"
},
  {
  id:3,
 img:"/Images/three.jpg",
 desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
  title:"countr"
  },
//  {
//   id:4,
//  img:"/Images/four.jpg",
//  desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//   title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
// },
//   {
//   id:5,
//  img:"/Images/five.jpg",
//  desc:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles",
//   title:"It looks like there might be a problem with the syntax in your mixin definition. Instead of passing in a content block as a parameter using @content, you are trying to pass in a string of styles using $styles"
// },

]

// export async function getServerSideProps(context) {
//   const  {postid}  = context.query; // Extract the postId from the URL
// console.log("hhe")
//   // Fetch data based on the postIdn
//   const myfirst=async()=>{

 
//   try {
  
//     const {data} = await Baseurl.get(`/single/post/${postid}`);
//     if (data) {
//       console.log(data)
//      return data
      
//     }
    
//   } catch (error) {
//     return error.response&& error.response.data.message?error.response.data.message:error.message
   
//     };
    
    
//   }
//   const data=myfirst()
//   return {
//     props: {
//       // myData: jsonData,
//       mydata:data
      
//     }
// }
//   // const jsonData = await data.json();

//   // Return the data as props
// }
let now=new Date()
console.log(now)


export default function single() {
  // console.log(mydata)
  // const router=useRouter()
  let {datas,setdatas}=useContext(Myvalues)
  const router = useRouter()
  const [postone,setpost]=useState([])
  const [postarr,setpostrr]=useState([])
  const [errormessage,seterrormessage]=useState(null)
  const [loadings,setloading]=useState(false)
  const [deleteloadings,setDeleteloading]=useState(false)
  const [errorDeletemessage,setDeleteerrormessage]=useState(null)
//  console.log(router.query.postid);
let [position,setposition]=useState(sliderr[0].id)
// let [n,setn]=useState({desc:postarr[0].desc})
let onepost=null
let g=null
// let g={desc:postarr[0].desc}

const myfun=((id)=>{

  setposition(null)
  setposition(id)
  
 
  // n=g

})
console.log(position,"nno")

if (position) {
   g= sliderr.find((x)=>{

    if (x.id===position) {
    //  console.log(x)
      return x
     
    }


}) 

  
}
const getsinglepost=async(id)=>{
  try {
  // setloading(true)
  const { data }=await Baseurl.get(`/single/post/${id}`)
  console.log(data)
  
  if (Array.isArray(data)) {
    console.log(data,"data simgle")

    setpost(data)
    setloading(false)
    console.log(data.message,"true")
    fectcategory(data)
    
  }
  else{
    seterrormessage(data.message)
    setloading(false)
    console.log(data,"simglepost")
    
  }
  
} catch (err) {
  setloading(false)
  seterrormessage(err.response && err.response.data.message ? err.response.data.message: err.message)
  console.log(err,"faaiz")
}
// setloading(false)



}
 useEffect (() => {
    // console.log(router.query.postid);
    if (router.query.postid) {
      console.log(router.query.postid);
      //  setpost()
      getsinglepost(router.query.postid)  
      // console.log(erro)
    }
  },[router.query.postid]);
 

  const fectcategory=async(x)=>{
    let category=x[0].category

    const {data}=await Baseurl.get(`/get/posts?cat=${category}`)
    if (data!==0) {
      console.log(data,"data")
      setpostrr(data)
      
    }else{
      console.log(data.message,"else")
    }

  }
    




  const deletepost=async()=>{
    try {
        setDeleteloading(true)
        const {data}=await Baseurl.delete(`/post/delete/${router.query.postid}`)
        console.log(data)
        if (data.message==="sucessfully deleted") {
          setDeleteloading(false)
          router.push("/admin")
          
        }else{
          setDeleteloading(false)
          setDeleteerrormessage(data.message)
          
        }
      } catch (err) {
      setDeleteloading(false)
      setDeleteerrormessage(err.response&& err.response.data.message?err.response.data.message:err.message)

      
    }

  }
  
    
   return  (
    
    <Layout>

       <div className={singlePage.main}>
     <div className={singlePage.Allaboutpost}>
    
       {
errormessage&&(
    <Alert status='error'>
<AlertIcon />
<AlertTitle>error while showing single post</AlertTitle>
<AlertDescription>{errormessage}</AlertDescription>
</Alert>)
}
  <>
  {
    postone.map((x)=>(
<>
      <div className={singlePage.imgss}>

        <img src={x.Pimage?.includes("https")?x.Pimage:`../uploads/${x.Pimage}`} alt='img'></img>
       </div>



   
 
        
       <div className={singlePage.userdeatisl}>
        <Avatar></Avatar>
        <div className={singlePage.actions}>
     <div>

  
        <div>{x.username}</div>
        <div>posted at {moment("2023-07-13T11:06:24.320Z").fromNow()}</div>
    </div>

          { datas.idusers===x.idusers &&(
            
            <div>
              <br/>
              {/* <br/> */}
            
          <Link href={"/edit/2"}>
            {deleteloadings&&<Spinner/>}
            {
errorDeletemessage&&(
    <Alert status='error'>
<AlertIcon />
<AlertTitle>error while deleting single post</AlertTitle>
<AlertDescription>{errorDeletemessage}</AlertDescription>
</Alert>)
}
          <EditIcon style={{color:"blue",marginRight:"10px"}}/>
          </Link>
          <button >
          <DeleteIcon onClick={deletepost} style={{color:"blue"}}/>
          </button>
        </div>
          )
      }
        </div>
        

       </div>
  
         
       <div className={singlePage.postdetailss}>
        
        
          
            <>
            <h1>{x.title}</h1>
            <p>{x.desc}</p>
            </>

        

       </div>

       {/* to see */}

       <div className={singlePage.maindiv}>
        <div>
       
        {
          sliderr.map((x)=>(
          
            <div className={singlePage.linemain}  onClick={()=>myfun(x.id)}>
              

            <div className={Number(position)===Number(x.id)?singlePage.actives: singlePage.line}></div>
              <div className={singlePage.titles} >{x.title}</div>
            
          
          </div>
          
          ))
        }
         </div>
        <div className={singlePage.para}>
          {g?.desc}

          </div>

       </div>


       {/* last */}
       
</>
        ))
      }
       
       </>

      </div>


      <div className={singlePage.maylikepost}>

        <h1>OTHER POST YOU MAY LIKE</h1>
        <div className={singlePage.allmaylikeposts}>
        {
          postarr.map(({id,Pimage,title,desc},index)=>(
            <div key={index} className={singlePage.shadow}>
              <img src={Pimage?.includes("https")?Pimage:`../uploads/${Pimage}`} alt='img'></img>
              <h1><Link href={'/admin/id#'}>{title}</Link></h1>
              <Readmore desc={desc}/>
              </div>
          ))
        }


        </div>

      </div>
    </div>
    </Layout>
    )

  
}

