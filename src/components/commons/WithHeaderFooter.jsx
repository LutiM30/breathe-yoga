import React from "react";
import Header from "components/commons/Header";
import Footer from "components/commons/Footer";

const WithHeaderFooter = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default WithHeaderFooter;
