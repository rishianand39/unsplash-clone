



import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Navbar from '../Components/Navbar'
import Heading from '../Components/Heading'
import HeadingSideCard from '../Components/HeadingSideCard'
import {v4 as uuid} from "uuid"
import PhotoCard from '../Components/PhotoCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetch } from '../Redux/photo/action'

const Container = styled.div``;
const ImageDiv = styled.div`
  width: 70vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  object-fit: cover;
  @media only screen and (min-width:401px) and (max-width:800px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media only screen and (min-width:0px) and (max-width:399px) {
    grid-template-columns: repeat(1,1fr);
  }
`;
const Header=styled.div`
  display: flex;
  width: 70vw;
  margin:30px auto;
`

const History = () => {



  const [query, setQuery] = useState({
    query: "history",
    page: 1,
    per_page: 30,
  });
  const dispatch = useDispatch();
  const data = useSelector((store) => store.photos.data);


  useEffect(() => {
    dispatch(fetch(query));
  }, [query.query]);



  return (
    <Container>
      <Navbar searchquery={(e)=>setQuery({...query,query:e.target.value })}/>
           
    <Header>
      <Heading heading="History" para="Powerful photographs from the past — exploring monumental moments throughout our shared history."/>
      <HeadingSideCard />
    </Header>
      <ImageDiv>
        {data?.map((item) => (
          <PhotoCard key={uuid()} item={item} />
        ))}
      </ImageDiv>

    </Container>
  )
}

export default History