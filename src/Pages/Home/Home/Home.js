import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Categories from "../Categories/Categories";
import Newsletter from "../Newsletter/Newsletter";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import "./Home.css";
import PromoVideo from "./PromoVideo/PromoVideo";
import ShowReview from "./ShowReview/ShowReview";
// import Footer from '../../Shared/Footer/Footer';
// import Navigation from '../../Shared/Navigation/Navigation';
// import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
// import Banner from '../Banner/Banner';
// import Services from '../Services/Services';
// import Brands from './Brands/Brands';
// import Designer from './Designer/Designer';
// import PromoVideo from './PromoVideo/PromoVideo';
// import ShowReview from './ShowReview/ShowReview';
// import Subscribe from './Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      {/* <Categories /> */}
      <Products />
      <PromoVideo />
      <ShowReview></ShowReview>
      <Newsletter />
      <Footer />

      {/* <Navigation></Navigation>
            <Banner></Banner> */}
      {/* <Brands></Brands> */}
      {/* <Services></Services>
            <PromoVideo></PromoVideo>


            <Designer></Designer> */}

      {/* <Subscribe></Subscribe>
            <Footer></Footer>  */}
    </div>
  );
};

export default Home;
