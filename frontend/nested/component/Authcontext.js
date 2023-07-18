import { createContext,useEffect,useState } from "react";


export const Myvalues=createContext()

import React from 'react'

export default function Authcontext({children}) {
    let initialdata=null
    if (typeof window !== 'undefined') {
      initialdata=localStorage.getItem("userData")
    }
    const [datas,setdatas]=useState(initialdata?JSON.parse(initialdata):{})
    console.log(datas)
useEffect(()=>{
  setdatas(initialdata?JSON.parse(initialdata):{})
},[])


  return (
   <Myvalues.Provider value={{datas,setdatas}}>
    {children}
   </Myvalues.Provider>
  )
}
