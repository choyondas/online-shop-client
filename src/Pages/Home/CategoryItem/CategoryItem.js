import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../Responsive/Responsive";
// import { mobile } from "../../../Responsive/Responsive";

const Container = styled.div`
  flex: 1;
  margin: 5;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 80%;
  height: 80%;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;

  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-weight: bold;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} alt="" />
        <Info>
          <Title>{item.title}</Title>
          <Link to={`/cart`}>
            <Button>SHOP NOW</Button>
          </Link>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
