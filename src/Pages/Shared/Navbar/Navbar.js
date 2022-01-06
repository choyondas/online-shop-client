import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
// import { mobile } from "";
import useAuth from "./../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { mobile } from "../../../Responsive/Responsive";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  background-color: #f2f0f2;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  ${mobile({ width: "70px", height: "15px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 50px;
  ${mobile({ width: "30px" })}
`;
const LogoText = styled.h1`
  font-size: 24px;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  // console.log(quantity);
  const { user, logout } = useAuth();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="https://i.ibb.co/pR5C5H3/logo.png"></Logo>
          <LogoText>SHOP</LogoText>
        </Left>
        <Center>
          {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          {user?.email ? (
            <Box className="d-flex">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                <Button variant="outlined">Dashboard</Button>
              </Link>

              <Button type="button" color="inherit">
                {user.displayName}
              </Button>

              <Button
                type="button"
                className="btn btn-danger"
                onClick={logout}
                color="inherit"
              >
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </NavLink>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
