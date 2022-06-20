import React from 'react'
import styled from "styled-components"

const Container=styled.div`
flex:7;
`
const HeadingText=styled.h3`
  font-size: 32px;
  font-weight: bold;

`
const Text=styled.p`
width:70%;
`

const Heading = ({heading,para}) => {
  return (
   <Container>
     <HeadingText>
      {heading}
     </HeadingText>
     <Text>
      {para}
     </Text>
   </Container>
  )
}

export default Heading