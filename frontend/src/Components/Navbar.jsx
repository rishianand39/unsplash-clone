import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Button from "./Button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
const text = [
  {
    text: "Explore",
  },
  {
    text: "Advertise",
  },
  {
    text: "Blog",
  },
  {
    text: "Log in  /",
  },
  {
    text: "Sign up",
  },
];
const barText = [
  {
    text: "About",
   
  },
  {
    text: "History",
   
  },
  {
    text: "Join the team",
   
  },
  {
    text: "Press",
   
  },
  {
    text: "Contact us",
   
  },
  {
    text: "Help Center",
   
  },
];
const navText = [
  {
    text: "Editorial",
    param:"editorial"
    
  },
  {
    text: "Current Events",
    param:"currentevents"
  },
  {
    text: "Wallpapers",
    param:"wallpapers"
  },
  {
    text: "3D Renders",
    param:"3drenders"
  },
  {
    text: "Textures & Patterns",
    param:"textures"
  },
  {
    text: "Experimental",
    param:"experimental"
  },
  {
    text: "Architecture",
    param:"architecture"
  },
  {
    text: "Bussiness & Work",
    param:"bussiness"
  },
  {
    text: "Fashion",
    param:"fashion"
  },
  {
    text: "Film",
    param:"film"
  },
  {
    text: "Food & Drink",
    param:"food"
  },
  {
    text: "Health & Wellness",
    param:"health"
  },
  {
    text: "People",
    param:"people"
  },
  {
    text: "Interiors",
    param:"interiors"
  },
  {
    text: "Street Photography",
    param:"street"
  },
  {
    text: "Travel",
    param:"travel"
  },
  {
    text: "Animals",
    param:"animals"
  }
  ,
  {
    text: "Spirituality",
    param:"spiritual"
  },
  {
    text: "Arts & Culture",
    param:"arts"
  },
  {
    text: "History",
    param:"history"
  },
  {
    text: "Atheltics",
    param:"atheltics"
  }
];
const Container = styled.div`
  width: 98vw;

`;
const Top = styled.div`
  display: flex;

  padding: 0 10px;
  display: flex;
  align-items: center;
  width: 98vw;
`;
const FlexLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.5;


`;
const FlexSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 6;

`;
const FlexText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 3;
padding-left: 10px;


`;
const Logo = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
`;
const Submit = styled.button`
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
  min-width: 100px;

`;
const BarIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  flex: 0.5;
  justify-content: center;
`;
const Bottom=styled.div`
  display: flex;
  align-items: center;
  padding:5px 15px;
  overflow-x: hidden;
  width: 98vw;
`
const ButtonBox=styled.div`
  margin: 10px;
`
const Navbar = ({searchquery}) => {

  const navigate=useNavigate()
  const handleCategory=(item)=>{
    navigate(`/category/${item.param}`)
    
  }
  return (
    <Container>
      <Top>
        <FlexLogo>
          <Link to="/">
          
          <Logo src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" />
          </Link>
        </FlexLogo>
        <FlexSearch>
          <Search searchquery={searchquery}/>
        </FlexSearch>
        <FlexText>
          {text.map((item) => (
            <Button key={uuid()} text={item.text} />
          ))}
        <Submit>Submit a photo</Submit>
        </FlexText>
        <BarIcon>
          <HamburgerIcon />
        </BarIcon>
      </Top>
      <Bottom>
        {navText.map(item=>
       
            <ButtonBox key={uuid()}>

            <Button text={item.text} onclick={()=>handleCategory(item)} />
            </ButtonBox>
        
        
        )}
      </Bottom>
    </Container>
  );
};

export default Navbar;
