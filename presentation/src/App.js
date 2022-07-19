import React from "react";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import Steps from "./components/Steps";
import Tools from "./components/Tools";

import css from "./main.css";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <div className="container">
        <Card />
      </div>
      <Steps />
      <Tools />
      <Blog />
      <Quotes />
      <Banner />
      <Footer />

    </React.Fragment>
  );
};
export default App;
