
import React, { useContext, useEffect, useState } from 'react'
import Layout from '@/component/layout';

import writestyle from "./Write.module.scss"
import Inputs from '@/component/Input';
const isBrowser = typeof document !== "undefined";
import TextArea from '@/component/Textarea';
import { Badge, Button, Radio, RadioGroup, Stack, WrapItem } from '@chakra-ui/react';
import { Radiobutton } from '@/component/Radiobutton';
// const [value, setValue] = useState('');
import parse from 'html-react-parser';
import { Baseurl } from '@/config/config';
import { Myvalues } from '@/component/Authcontext';
import moment from "moment"



let categoryarr=[
    {name:"art"},
    {name:"science"},
    {name:"teacher"},
    {name:"cinema"},
    {name:"desgin"},
    {name:"food"},
]




const index = () => {
    const [desc, setdes] = useState("");
    const [Pimage, setimg] = useState("");
    // const [imagetwo, setimgtwo] = useState("");
    const [category, setcat] = useState("");
    const [title, settitle] = useState("");
    const {datas,setdatas}=useContext(Myvalues)
   



    
   



// })





const createpost=async(e)=>{
    let Dates= moment(Date.now()).format("YYYY-MM-DD HH-mm-ss")
    console.log(Dates,"owo")
    
   

// reader.readAsDataURL(image);
    console.log("clik")
    e.preventDefault()
    let formData=new FormData()
    formData.append("desc",desc)
    formData.append("image",Pimage)
    formData.append("title",title)
    formData.append("category",category)
    formData.append("uid",datas.idusers)
    formData.append("Date",Dates)

    const {data}=await Baseurl.post("/s3",formData,{
        header:{
            "Content-Type": "multipart/form-data"
        }
})
    console.log(data)


}


// console.log(imagetwo)

  return (
    <Layout>
        <div className={writestyle.maindivs}>
            <div className={writestyle.postcreat}>

            <div className={writestyle.inputediv}>
                <Inputs settitle={settitle}/> 
            </div>
            <div className={writestyle.textareadiv}>
            <TextArea    setdes={setdes} value={""} writestyles={writestyle}/>

            </div>
            </div>


            {/* right side */}
            <div className={writestyle.rightside}>
                <div className={writestyle.forstatus}>
                  <h1> <Badge variant='outline' colorScheme='green'>Publish</Badge></h1> 
                    <ul>
                        <li><Badge>Status</Badge>:Draft</li>
                        <li><Badge>Visiblity</Badge>:public</li>
                        
                        <li><input style={{display:"none"}} name='file' onChange={(e)=>setimg(e.target.files[0])} type='file' id='uploadimg'></input>
                        {
                            
                            Pimage&&<img src={URL.createObjectURL(Pimage)}/>    
                        }
                        
                        <label htmlFor='uploadimg'><Badge>Upload image</Badge></label>
                        </li>
                    
                        <li className={writestyle.buttonsforwrite}>
                  
      <Button  colorScheme='cyan'mr={'20px'} w={['100px','100px','100px']} h={['20px','20px','40px']} variant='solid'>Save as Draf</Button>
      <Button  colorScheme='cyan' variant='solid' onClick={createpost}>Update</Button>
    
                        </li>
                    </ul>

                </div>
                <div className={writestyle.forcategory}>
  
                        <RadioGroup defaultValue='1'>
                    {
                        categoryarr.map((x)=>(
                            
                                 <Radiobutton className={writestyle.rad}   type={"radio"} name="cat"  value={x.name} setcat={setcat} /> 

                            
                        ))
                    }
                    </RadioGroup>
                    

                </div>

            </div>
       
        </div>
   
   </Layout>
   
  )
}

export default index