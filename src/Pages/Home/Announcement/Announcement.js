import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Announcement = () => {
  return <Container>50 % discount for spring festival</Container>;
};

export default Announcement;
