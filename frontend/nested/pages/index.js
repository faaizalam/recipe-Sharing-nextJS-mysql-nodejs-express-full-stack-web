import Image from 'next/image'
import Register from './Authenticate/register';
import Signin  from './Authenticate/signin';
import { useContext, useEffect } from 'react';
import { Myvalues } from '@/component/Authcontext';
// import { Inter } from 'next/font/google'
const isBrowser = typeof window !== "undefined";



// const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

   console.log(props)
  // const {datas,setdatas}=useContext(Myvalues)
  // console.log(datas)

  // if (Object.keys(datas).length===0) {
  //   console.log("yahooooonn")
      
    
  // }
return <Signin/>
  
}

export async function getServerSideProps({ req, res, resolvedUrl }) {
  
  
  
  return {
    props: {
      data: resolvedUrl, // Pass the fetched data as props to the page component
    },
  };
}