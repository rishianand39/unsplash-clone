import React from "react";
import styled from "styled-components";
import { login } from "../Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Text = styled.div`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
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
const Bottom = styled.div`
  margin-top: 30px;
  border: 1px solid gray;
  padding: 25px;
  cursor: pointer;
`;

const Login = () => {
  const user = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert,setAlert]=useState(false)

  console.log(user)
  const [detail, setDetail] = useState({
    email: "",
    password: "",
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
    if (detail.email !== "" || detail.password !== "") {
      dispatch(login({ ...detail }));
    }else{
      setAlert(true)
    }
  };

  useEffect(() => {
    if (user.data.length !== 0) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container>
      <Logo src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" />
      <Text fontsize="1.5rem">Login</Text>
      <Text fontsize="0.9rem">Welcome back.</Text>
      <Button background="blue" text="Login with Facebook" />
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputLabel>
            <Label>Email</Label>
            <Input type="email" name="email" onChange={handleForm} />
          </InputLabel>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>
            <Label>Password</Label>
            <Input type="password" name="password" onChange={handleForm} />
          </InputLabel>
        </InputWrapper>
        <InputWrapper>
          <Button
            background="black"
            text="Login"
            width="100%"
            onClick={handleSubmit}
          />
        </InputWrapper>
        <Link to="/register">
          <Bottom>Don't have an account ? Join Unsplash</Bottom>
        </Link>
      </Form>
      {alert&& <AlertForEmptyField />}
      {user.isError && <AlertComponent />}
    </Container>
  );
};

const Btn = styled.div`
  background-color: ${(props) => props.background};
  width: ${(props) => props.width};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
const Button = ({ background, text, width, onClick }) => {
  return (
    <Btn onClick={onClick} background={background} width={width}>
      {text}
    </Btn>
  );
};
const AlertComponent = () => {
  return (
    <Alert status="error" style={{width:"350px",position:"absolute",bottom:"-80px",left:"5vw"}}>
        <AlertIcon />
       Something went wrong! Email or password is not valid.
      </Alert>
  );
};
const AlertForEmptyField = () => {
  return (

       <Alert status="error" style={{width:"350px",position:"absolute",bottom:"-80px",left:"5vw"}}>
        <AlertIcon />
        please fill all field. Both email and password is a must.
      </Alert> 
  );
};

export default Login;
