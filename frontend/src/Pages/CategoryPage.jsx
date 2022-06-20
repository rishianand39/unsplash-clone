import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from "styled-components"
import Navbar from "../Components/Navbar"

const Container=styled.div`
  
`
const CategoryPage = () => {
  const [searchParam,setSearchParam]=useSearchParams()

  useEffect(()=>{
    // setSearchParam({category:"cat"})
    let params={
      category:searchParam.getAll("category")
    }
  },[])
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

export default CategoryPage