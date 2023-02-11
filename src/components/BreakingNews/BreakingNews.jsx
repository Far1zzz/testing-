import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="container-fluid mt-3 bg-breakingNews">
      <div className="container content-breakingNews">
        <div className="breakingNews">BREAKING NEWS</div>
        <Marquee gradient={false} pauseOnClick={true}>
          <div className="terkini">Terkini</div>
          <div className="description-breakingNews">
            <a href="/"> BUPATI MENGHADIRI PERTEMUAN DENGAN GUBERNUR</a>
          </div>
          <div className="terkini">Terkini</div>
          <div className="description-breakingNews">
            <a href="/"> WAKIL BUPATI MENDAPAT PENGHARGAAN </a>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
