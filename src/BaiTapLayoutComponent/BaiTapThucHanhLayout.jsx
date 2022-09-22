import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import ListItems from "./ListItems";
import Footer from "./Footer";

const BaiTapThucHanhLayout = () => {
  return (
    <>
      <Header />
      <div className="body">
        <Carousel />
        <ListItems />
      </div>
      <Footer />
    </>
  );
};

export default BaiTapThucHanhLayout;
