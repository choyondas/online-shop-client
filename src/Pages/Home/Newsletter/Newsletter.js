import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../../Responsive/Responsive";


const Container = styled.div`
  height: 60vh;
  background-color: #e63946;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 75px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;

const Description = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
  ${mobile({ padding:"20px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;

  border: none;
  background-color: #e76f51;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>

      <Description>GET CONNECTED WITH US ANY TIME</Description>
      <InputContainer>
        <Input placeholder="Enter Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
