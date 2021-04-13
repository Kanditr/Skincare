import React, { Component } from "react";
import CustomizationEngine from "../components/CustomizationEngine";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <CustomizationEngine/>
        <Footer />
      </>
    );
  }
}

export default Homepage;
