import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Box } from "@chakra-ui/react"

// picks up a nested color value using dot notation
// => `theme.colors.gray[50]`

export function ErrorPage(message) {
  
    
    
        return (
            <div>
        <Box color='red'>Error {message.error}</Box>
     <Box color='red'>Sorry, an error occurred.</Box>
      </div>
    );
    
}
function Error({ statusCode }) {
    return (
      <div>
        <h1>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
      </div>
    );
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };

export const Myspinner=(()=>{
    return(

<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    )
})


export default Error
