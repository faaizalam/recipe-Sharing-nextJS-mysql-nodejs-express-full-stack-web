import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import myhome from "../pages/admin/Hmain.module.scss"

const Readmore = ({desc}) => {

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    console.log(doc.body.querySelector("p")?.innerText)
    return doc.body.querySelector("p")?.innerText?doc.body.querySelector("p")?.innerText:html
  }
  

    const [ReadmoreStatus,setReadmorestatus]=useState(false)
    // const halftitle=desc.slice(0,10)
 const chnagstatus=(()=>{
    setReadmorestatus(!ReadmoreStatus)
 })
  return (
    <div className={myhome.readmorepara}>

        {ReadmoreStatus?(<p>{getText(desc)}</p>):(<p>{getText(desc.substring(0,10))}</p>)}

        <div><Button onClick={chnagstatus}>{ReadmoreStatus?"Show less":"Read more"}</Button></div>
    
    </div>
  )
}

export default Readmore