import React from 'react'
import { Input } from '@chakra-ui/react'
const Inputs = ({settitle}) => {


  return (
    <Input placeholder='title'  name="title" onChange={(e)=>settitle(e.target.value)} />
  )
}

export default Inputs