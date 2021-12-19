import { Add, Remove } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Footer from "../../Shared/Footer/Footer";

import Navbar from "../../Shared/Navbar/Navbar";

// import StripeCheckout from "react-stripe-checkout";

import { useHistory } from "react-router";
import { mobile } from "../../../Responsive/Responsive";
import Announcement from "../Announcement/Announcement";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "5px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 15px;
`;

const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 300px;
  ${mobile({ width: "60%" })}
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProductName = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ flexDirection: "column" })}
`;
const ProductPrice = styled.div`
  font-size: 50px;
  font-weight: 200;
`;

const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-weight: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;

const Cart = () => {

  // const [stripeToken, setStripeToken] = useState(null);

  // const history = useHistory();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: cart.total * 100,
  //       });
  //       history.push("/success", { data: res.data });
  //     } catch {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Products</Title>

        <Top>
          <TopButton>Continue Shopping</TopButton>

          <TopTexts>
            <TopText>Shopping Bag(4)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Buttom>
          <Info>
         
              {/* <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      {" "}
                      <b>Product: </b> {product.title}
                    </ProductName>
                    <ProductId>
                      {" "}
                      <b>Id:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      {" "}
                      <b>Size: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))} */}

            <hr />
            <Product>
              <ProductDetail>
                <Image src="https://www.transparentpng.com/thumb/polo-shirt/WTwWgU-polo-shirt-cut-out.png" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product: </b> Polo Shirt
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>Id:</b> 67946498765146
                  </ProductId>
                  <ProductColor color="" />
                  <ProductSize>
                    {" "}
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$23</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>subtotal</SummaryItemText>
              <SummaryItemPrice>$ {}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 4.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -4.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${}</SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="Easy Shop"
              image="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png"
              billingAddress
              shippingAddress
              description={`Your total is `}
              amount={100}
              
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout> */}
          </Summary>
        </Buttom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
