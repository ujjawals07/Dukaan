import React from "react";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navopen from "./components/NavOpen";
import Quotes from "./components/Quotes";
import Responsive from "./components/Slider";
import Steps from "./components/Steps";
import Tools from "./components/Tools";

import css from "./main.css";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Navopen />
      <Home />
      <div className="container">
        <Card />
      </div>
      <Steps />
      <Responsive />
      <Tools />

      <Blog />
      <Quotes />
      <Banner />
      <Footer />
    </React.Fragment>
  );
};
export default App;
