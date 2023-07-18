import { FormLabel, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

export const Radiobutton = ({type,name,value,setcat}) => {
    const [valuex, setValuex] = React.useState('1')
  let myfunc=((e)=>{
    setcat(e.target.value)

   })

  return (
    <>
    <Stack spacing={4} direction='row'>
    <Radio  onChange={myfunc} name={name} value={value}>{value}</Radio>
    </Stack>
    </>
  )
}
