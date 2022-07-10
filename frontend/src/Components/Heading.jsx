import React from 'react'
import styled from "styled-components"

const Container=styled.div`
flex:7;
/* border:1px solid; */


`
const HeadingText=styled.h3`
  font-size: 2.5vw;
  font-weight: bold;
  @media only screen and (max-width:701px) {
   text-align: center;
   font-size:6vw;
  }

`
const Text=styled.p`
width:70%;
@media only screen and (max-width:701px) {
   text-align: justify;
   width: 98%;
  }
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