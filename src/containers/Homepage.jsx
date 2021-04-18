import React, { Component } from "react";
import CustomizationEngine from "../components/CustomizationEngine";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Todos from "../components/Todos";
import Products from "../components/Products";

class Homepage extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <CustomizationEngine />
        <Products />
        <Footer />
      </>
    );
  }
}

export default Homepage;
