import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  border: "1px solid";
`;

const BannerImg = styled.img`
  width: 100vw;
  height: 60vh;
  position: relative;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 59.5vh;
  opacity: 0.5;
  position: absolute;
  top: 100px;
`;
const Info = styled.div`
  width: 50vw;
  margin: auto;
  margin-top: 70px;
`;
const InfoText = styled.div``;
const H3 = styled.h3`
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
`;
const P = styled.p`
  color: #ffffff;
  line-height: 30px;
  margin-bottom: 10px;
`;
const Span = styled.span`
  color: #ffff;
  font-size: 12px;
`;
const InfoSearch = styled.div``;

const Banner = ({searchquery}) => {
  return (
    <Container>
      <BannerImg src="https://images.unsplash.com/photo-1653856114603-d67a3735c376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&auto=format%2Ccompress&fit=crop&w=1000&h=1000" />
      <Wrapper>
        <Info>
          <InfoText>
            <H3>Unsplash</H3>
            <P>
              The internet's source of freely-usable images.
              <br />
              Powered by creators everywhere.
            </P>
          </InfoText>
          <InfoSearch>
            <Search searchquery={searchquery}/>
          </InfoSearch>
          <br />
          <Span>Trending: flower wallpapers backgrounds happy love</Span>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Banner;