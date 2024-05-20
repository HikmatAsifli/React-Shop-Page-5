import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import Banner from "../../../components/Banner/Banner";
import Welcome from "../../../components/Welcome/Welcome";
import Discover from "../../../components/Discover/Discover";
import Cards from "../../../components/Cards/Cards";
import Review from "../../../components/Review/Review";
import Blog from "../../../components/Blog/Blog";
import Subscribe from "../../../components/Subscribe/Subscribe";

const Home = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Welcome />
      <Discover />
      <Cards />
      <Review />
      <Blog />
      <Subscribe />
    </>
  );
};

export default Home;
