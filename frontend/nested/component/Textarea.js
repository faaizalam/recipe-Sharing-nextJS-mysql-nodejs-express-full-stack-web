import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { color } from '@chakra-ui/react';
// import  Reactquill from "react-quill"

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
  });


function TextArea({myfunc,value,writestyles,setdes}) {

return <ReactQuill     placeholder='write here descriotion for your post'  className={writestyles.editor} onChange={(event)=>setdes(event)} />;
    
  
  
}

export default TextArea