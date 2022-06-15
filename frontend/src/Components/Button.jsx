import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Button = ({text}) => {
  return (
   <Box>
     <Text width={"max-content"}  cursor={"pointer"} fontSize="12px" color={'gray.500'}>{text}</Text>
   </Box>
  )
}

export default Button