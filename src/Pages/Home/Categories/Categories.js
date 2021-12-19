import styled from "styled-components";
import { mobile } from "../../../Responsive/Responsive";
import { categories } from "../../../Fakedata/data";
import CategoryItem from "../CategoryItem/CategoryItem";
// import { mobile } from "../../Responsive/Responsive";
const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  ${mobile({padding:"0px", flexDirection:"column"})}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} 
        key ={item.id}
        />
      ))}
    </Container>
  );
};

export default Categories;
