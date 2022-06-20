import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Button = ({text,onclick}) => {
  return (
   <Box>
     <Text width={"max-content"} onClick={onclick}  cursor={"pointer"} fontSize="13px" color={'gray.500'}>{text}</Text>
   </Box>
  )
}

export default Button