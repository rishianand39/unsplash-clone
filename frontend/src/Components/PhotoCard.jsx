import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

// Modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 200;
  cursor: pointer;
`;
const Container = styled.div`
  position: relative;
  &:hover ${Wrapper} {
    opacity: 1;
  }
`;
const Img = styled.img`
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.div`
  background-color: white;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid;
  &:hover {
    transform: scale(1.1);
  }
`;
const Text = styled.div`
  color: white;
`;
const Logo = styled.img`
  border-radius: 50%;
  margin-right: 5px;
  border: 1px solid;
`;
// const PhotoCard = ({item}) => {
//   // console.log(item)
//   return (
// <Container>
//   <Img  src={item.urls.small} alt="" />
//   <Wrapper>
//    <Top>
//    <Icon>
//         <AiOutlinePlus />
//       </Icon>
//       <Icon>
//         <AiFillHeart />

//       </Icon>

//    </Top>
//    <Bottom>
//      <Text>
//      <Logo src={item.user.profile_image.small} />
//     <Text>{item.user.name}</Text>
//      </Text>
//     <Icon>
//       <AiOutlineArrowDown />
//     </Icon>
//    </Bottom>
//   </Wrapper>
// </Container>
//   )
// }
const ModalTitle=styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:30px ;
`
const ModalText=styled.div`
display: flex;
align-items: center;
`
const ModalImage=styled.img`
  
`
const ModalIcon=styled.div`
  display: flex;;
`


function PhotoCard({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('md')
  console.log(item)
  return (
    <>
      <Container onClick={onOpen}>
        <Img src={item.urls.small} alt="" />
        <Wrapper>
          <Top>
            <Icon>
              <AiOutlinePlus />
            </Icon>
            <Icon>
              <AiFillHeart />
            </Icon>
          </Top>
          <Bottom>
            <Text>
              <Logo src={item.user.profile_image.small} />
              <Text>{item.user.name}</Text>
            </Text>
            <Icon>
              <AiOutlineArrowDown />
            </Icon>
          </Bottom>
        </Wrapper>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}  size={"6xl"}>
        <ModalOverlay />
        <ModalContent padding="20px">
        <ModalCloseButton position={"absolute"} top="-50px" left="-100px" background={"whiteAlpha.400"} color="white"/>
          <ModalTitle>
          <ModalText>
              <Logo src={item.user.profile_image.small} />
              <ModalText>{item.user.name}</ModalText>
            </ModalText>
            <ModalIcon>

            <Icon>
              <AiFillHeart />
            </Icon>
            <Icon>
              <AiOutlinePlus />
            </Icon>
            <Icon>
              <AiOutlineArrowDown />
            </Icon>
            
            </ModalIcon>
          </ModalTitle>
          <ModalBody>
            <ModalImage src={item.urls.regular} />
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  );
}

export default PhotoCard;
