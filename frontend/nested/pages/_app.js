
import Authcontext from "@/component/Authcontext"
import "../styles/Index.scss"
import { ChakraProvider } from '@chakra-ui/react'
import ProtectedRoute from "@/component/ProctectedRoutes"


export default function App({ Component, pageProps }) {
 return(

  <Authcontext>
   <ChakraProvider>

    <ProtectedRoute>
   <Component {...pageProps} />
    </ProtectedRoute>
</ChakraProvider>
  </Authcontext>
   )
}
