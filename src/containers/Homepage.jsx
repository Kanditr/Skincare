import React, { Component } from "react";
import CustomizationEngine from "../components/CustomizationEngine";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Todos from "../components/todos";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <CustomizationEngine />
        <Todos />
        <Footer />
      </>
    );
  }
}

export default Homepage;
