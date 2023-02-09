import React from "react";
import "../../assets/css/home.css";
import BreakingNews from "../../components/BreakingNews/BreakingNews";

const Home = () => {
  return (
    <>
      <BreakingNews />
      <div className="container-fluid mt-3 bg-carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 berita-terkini my-2">Berita Terkini</div>
          </div>
          <div className="row">
            <div className="col-lg-9 ">
              <div className="carousel-content">Hhaha</div>
            </div>
            <div className="col-lg-3">
              <div className="carousel-content">hadeh</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
