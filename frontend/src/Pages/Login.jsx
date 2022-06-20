import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Wrapper = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
`;


const Text = styled.div`
  font-size:${props=>props.fontsize};
  color: ${props=>props.color};
  margin-bottom: 15px;
  font-weight: bold;
`;





const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  min-width: 30vw;
`;
const Input = styled.input`
  border: 1px solid;
  width: 90%;
  margin: 10px;
  padding: 8px;
`;
const Label = styled.label``;
const InputLabel = styled.div`
  width: 100%;
`;
const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: auto;
`;
const Bottom=styled.div`
  margin-top: 30px;
  border: 1px solid gray;
  padding:25px;
`


const Login = () => {
  return (
    <Container>
      <Logo src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"/>
      <Text fontsize="1.5rem">Login</Text>
      <Text fontsize="0.9rem">Welcome back.</Text>
      <Button background="blue" text="Login with Facebook"/>
      <Form>
        <InputWrapper>
        <InputLabel>
        <Label>Email</Label>
        <Input type="email" />
        </InputLabel>
        </InputWrapper>
        <InputWrapper>
        <InputLabel>
        <Label>Password</Label>
        <Input type="password" />
        </InputLabel>
        </InputWrapper>
        <InputWrapper>
        <Button background="black" text="Login" width="100%"/>
        </InputWrapper>
        <Bottom>Don't have an account ? Join Unsplash</Bottom>
      </Form>
    </Container>
  )
}


const Btn = styled.div`
  background-color: ${(props) => props.background};
  width: ${props=>props.width};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;
const Button = ({ background, text,width }) => {
  return <Btn background={background} width={width}>{text}</Btn>;
};
export default Login