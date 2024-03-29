
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/auth/action";


const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 4;
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1655726274521-baa049e629d8?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb);
  position: relative;
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
  width: 50px;
  height: 50px;
`;
const Center = styled.div``;
const Heading = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;
const Text = styled.div`
  font-size:${props=>props.fontsize};
  color: ${props=>props.color};
  margin-bottom: 15px;
  cursor: pointer;
`;

const Bottom = styled.div`
  font-size: 0.8rem;
  color: white;
`;

const Right = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
 margin-top: 30px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
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

const Register = () => {
  const user = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate=useNavigate()


  
  const [detail, setDetail] = useState({
    first_name: "",
    last_name: "",
    email:"",
    password:"",
    username:"",
  });

  const handleForm = (e) => {
    setDetail((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    if(detail.first_name!=="" || detail.last_name!=="" || detail.email!=="" || detail.username!=="" || detail.password!==""){
      dispatch(register({...detail}));
    }
  };

  useEffect(()=>{
    if(user.status){
      navigate("/login")
    }
  },[user,navigate])

  return (
    <Container>
      <Left>
        <Wrapper>
          <Logo src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" />
          <Center>
            <Heading color="white" fontsize="3rem">
              Creation starts here
            </Heading>
            <Text color="white" fontsize="1.3rem">
              Access 3,980,552 free, high-resolution photos you can’t find
              anywhere else
            </Text>
          </Center>
          <Bottom>Uploaded 1 day ago by Martin Marek</Bottom>
        </Wrapper>
      </Left>
      <Right>
        <Heading color="black" fontsize="3rem">
          Join Unsplash
        </Heading>
        <Link to="/login">
        <Text  color="black" fontsize="0.9rem">Already have an account ? Login</Text>
          </Link>
        <Button text="Join using Facebook " background="blue" width="45%"/>
        <Form>
          <InputWrapper>
            <InputLabel>
              <Label>First Name</Label>
              <Input type={"text"} name="first_name" onChange={handleForm}/>
            </InputLabel>
            <InputLabel>
              <Label>Last Name</Label>
              <Input type={"text"} name="last_name" onChange={handleForm}/>
            </InputLabel>
          </InputWrapper>

          <InputWrapper>
            <InputLabel>
              <Label>Email</Label>
              <Input type={"email"} name="email" onChange={handleForm}/>
            </InputLabel>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              <Label>Username(only letters,numbers, and underscores)</Label>
              <Input type={"text"} name="username" onChange={handleForm}/>
            </InputLabel>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              <Label>Password(min. 8 char)</Label>
              <Input type={"password"} name="password" onChange={handleForm}/>
            </InputLabel>
          </InputWrapper>
          <InputWrapper>
          <Button onClick={handleSubmit} text="Join" background="black" width="100%" />
          </InputWrapper>
        </Form>
      </Right>
    </Container>
  );
};

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
const Button = ({ background, text,width,onClick }) => {
  return <Btn onClick={onClick} background={background} width={width}>{text}</Btn>;
};

export default Register;
