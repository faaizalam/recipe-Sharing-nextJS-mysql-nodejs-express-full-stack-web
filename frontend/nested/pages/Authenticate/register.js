import { useState } from "react";
import Link from 'next/link';
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
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { frameData } from "framer-motion";
import { Baseurl } from "@/config/config";
import ErrorPage from "../_error";
import Axios  from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const  Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [deatilsregis,setdeatilsregis]=useState()
  const [password,setpassword]=useState('')
  const [email,setemail]=useState('')
  const [image,setimg]=useState('')
  const [name,setname]=useState('')
  const [errormessage,seterrormessage]=useState(null)
  const [loadings,setloading]=useState(false)





  const Registered=(async(e)=>{
    e.preventDefault()
    // console.log(deatilsregis)
    setloading(true)
    const formData = new FormData();
  
      if (image) {
        formData.append("image",image)
        }
      formData.append("name",name)
      formData.append("email",email)
      formData.append("password",password)  
      // console.log(Array.form(formData).entries())
      console.log(Array.from(formData.entries()));



      try {
   
        const { data } = await Baseurl.post("/register", formData, {
          header: {
       "Content-Type": "multipart/form-data"
       }
}
);
      
        
        if(data.message){
          seterrormessage(data.message)
        

          setloading(false)
         
       }
       setloading(false)
      } catch (error) {
        seterrormessage(error.response?error.response.data.message:error.message)
        setloading(false)
        
        
      }


  })


 

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
          <form style={{color:"black"}} onSubmit={Registered}>
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
                  <Input type="email" placeholder="email address" name="email" onChange={(e)=>setemail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="name" placeholder="enter your name" name="name" onChange={(e)=>setname(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="file" name="image" onChange={(e)=>setimg(e.target.files[0])} />
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
                    placeholder="Password"
                    name="password"
                    onChange={(e)=>setpassword(e.target.value)}
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
            {
              errormessage&&
          <Alert status='error'>
     <AlertIcon />
     <AlertTitle>error while creating account</AlertTitle>
     <AlertDescription>{errormessage}</AlertDescription>
    </Alert>

            }
          </form>
            {
              loadings&&<Spinner/>
            }
        </Box>

      <Box>
        Already Registered?{" "}
        <Link href="/Authenticate/signin">
           Sing in
        </Link>
      </Box>
      </Stack>
    </Flex>
  );
};

export default Register;