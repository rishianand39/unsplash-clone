import React from "react";
import styled from "styled-components";
import { SiChakraui } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";
import { BiImage } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";

const Container = styled.div`
border: 1px solid gray;
min-width: 250px;
max-height: 150px;
/* flex:3 */
`;
const Row = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid gray;
padding-bottom: 10px;
margin:5px;
`;
const Left = styled.div`
display: flex;
align-items: center;
`;
const Icon = styled.div`
margin: 0 5px 0 2px;
display: flex;
align-items: center;
color: #746d6d;
`;
const Text = styled.div`
font-size: 12px;


`;
const Right = styled.div`
font-size: 12px;
display: flex;

`;
const Logo=styled.img`
 width :20px ;
 height :20px;
 border-radius:50%;
 margin-right: 5px;
`

const HeadingSideCard = () => {
  return (
    <Container>
      <Row>
        <Left>
          <Icon>
            <SiChakraui />
          </Icon>
          <Text>Status</Text>
        </Left>
        <Right>
          Open
        </Right>
      </Row>
      <Row>
        <Left>
          <Icon>
            < BsFillPersonFill/>
          </Icon>
          <Text>Curator</Text>
        </Left>
        <Right>
        <Logo src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" />
        </Right>
      </Row>
      <Row>
        <Left>
          <Icon>
            <BiImage />
          </Icon>
          <Text>Contributions</Text>
        </Left>
        <Right>
          4.2k
        </Right>
      </Row>
      <Row>
        <Left>
          <Icon>
            <IoMdPeople />
          </Icon>
          <Text>Top contributors</Text>
        </Left>
        <Right>
         <Logo src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
         <Logo src="https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
         <Logo src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
         <Logo src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </Right>
      </Row>
    </Container>
  );
};

export default HeadingSideCard;
