import { ReactNode, useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import {
  Box,
  Flex,
  Avatar,
  
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  AlertIcon,
  AlertDescription,
  Alert,
  Spinner,
  AlertTitle
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Myvalues } from './Authcontext';
import Axios from 'axios';
import { useRouter } from 'next/router';
import { Baseurl } from '@/config/config';

export const NavLink = ({ children }) => (


  
  
  <Link
  px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  let {datas,setdatas}=useContext(Myvalues)
  const [newdata,setnewdata]=useState(null)
  // console.log(datas,"hime")
  const [errormessage,seterrormessage]=useState(null)
  const [loadings,setloading]=useState(false)

  
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bars=[
    {
        name:"writes",
        link:"/admin/Write"
    },
    {
        name:"johon",
        link:"/admin?cat=jhone"
    },
    {
        name:"food",
        link:"/admin?cat=food"
    },
    {
        name:"desgin",
        link:"/admin?cat=desgin"
    },
    {
        name:"cenima",
        link:"/admin?cat=cenima"
    },
    {
        name:"Technology",
        link:"/admin?cat=Technology"
    },
    {
        name:"Science",
        link:"/Science"
    },
    {
        name:"Arts",
        link:"/Arts"
    },
  ]
  const router=useRouter()
  const logoutfun=async()=>{
  //  localStorage.removeItem("userData")
  setloading(true)
  try {
    const {data}=await Baseurl.post("/logout/user",{})
    // console.log(data.data.message)
    if(data.message==="user has been logged out sucessfully"){
      
      localStorage.removeItem("userData")
      setdatas({})
      seterrormessage(data.message)
      setloading(false)
      router.push("/")
      
      
    }
    
  } catch (error) {
    setloading(false)
    seterrormessage(error.response?error.response.data.message:error.message)
    
  }

}
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex ml="20px" h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} justifyContent={"center"} >
          <Box display="flex" alignItems={'center'}  >Logos</Box>

            </Flex>
            <Flex width={[
      '100%', // 0-30em
      '50%', // 30em-48em
      '25%', // 48em-62em
      '50%', // 62em+
    ]
    
  }
    >

            {bars.map((x,index)=>
          <Box className='' key={index+1} ml={['30px']}>
            <Link href={x.link}>{x.name}</Link>
          </Box>
            )}
            </Flex>

          <Flex mr="20px" alignItems={'center'}>
            
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={datas.image?.includes("https")?datas.image:`../uploads/${datas.image}`}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    {/* <Avatar
                      size={'2xl'}
                      src={datas.image}
                    /> */}
                    {
                      datas.image&&(
                        <>
                        

            <img
            // uploads\1688665852519-Aitheorytask.PNG
      src={datas.image.includes("https")?datas.image:`../uploads/${datas.image}`}
      
      alt="Picture of the author"
      />
      </>
                        
                      )
                    }
                  </Center>
                  <br />
                  <Center>
                    <p>{datas.name}</p>
                  </Center>
                  <br />
                  {
              errormessage&&
          <Alert status='error'>
     <AlertIcon />
     <AlertTitle>error while siging out</AlertTitle>
     <AlertDescription>{errormessage}</AlertDescription>
    </Alert>
    }
{
 loadings&&<Spinner/>
}
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem   onClick={logoutfun}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}