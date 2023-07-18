import { useContext, useState } from "react";
import Link from 'next/link';
import { Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Axios from "axios";
import { Baseurl } from "@/config/config";
import { previewData } from "next/dist/client/components/headers";
import {ErrorPage,Myspinner} from "../_error";
import { Myvalues } from "@/component/Authcontext";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Sign = () => {

  const {datas,setdatas}=useContext(Myvalues)
  // console.log(datas,"signin")
  const [error,seterror]=useState("")
  const [loading,setloading]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
  // const [password, setPassword] = useState("");
  // const [email, setemail] = useState("");
  const [inputs,setinputs]=useState({
    email:"",
    password:""
  })

  const handleShowClick = () => setShowPassword(!showPassword);

const handlechange=((e)=>{
  seterror("")
  setinputs((pre)=>({...pre,[e.target.name]:e.target.value,[e.target.name]:e.target.value}))
})





const login=async(e)=>{
  e.preventDefault()
  setloading(true)

 try {
    const {data}=await Baseurl.post('/login',inputs)
    console.log(data)
    if (data.message==="sucessfulyy loged in") {
      setdatas(data.userData)
      localStorage.setItem("userData",JSON.stringify(data.userData))
      setloading(false)
      
    }else{
      setloading(false)
      seterror(data.message)
      

    }
  } catch (error) {
    seterror(error.response && error.response.data.message?error.response.data.message:error.message)
    setloading(false)
  }


}
const router=useRouter()
if (datas.email && datas.email.includes("@")) {
  router.push("/admin") 
}


  return (
    
 
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
        {
    loading===true &&<Myspinner/>
   }
          <form  onSubmit={login}> 
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" name="email" onChange={handlechange} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"  name="password"
                    onChange={handlechange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  {/* <Link>forgot password?</Link> */}
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      <Box>
        New to us?{" "}
        <Link href="/Authenticate/register">
        Sign Up
        </Link>
        {
          error!==""&&<ErrorPage  error={error}/>
        }
      </Box>
      </Stack>
    </Flex>
  );
};

export default Sign ;
