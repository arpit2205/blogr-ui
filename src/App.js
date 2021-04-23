import React from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Mobile from "./components/Mobile";
import Laptop from "./components/Laptop";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Editor />
      <Mobile />
      <Laptop />
      <Footer />
    </>
  );
};

export default App;
