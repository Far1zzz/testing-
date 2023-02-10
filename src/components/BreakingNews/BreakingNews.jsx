import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="container-fluid mt-3 bg-breakingNews">
      <div className="container content-breakingNews">
        <div className="breakingNews">BREAKING NEWS</div>
        <Marquee gradient={false} pauseOnHover={true}>
          <div className="terkini">Terkini</div>
          <div className="description-breakingNews">
            BUPATI MENGHADIRI PERTEMUAN DENGAN GUBERNUR
          </div>
          <div className="terkini">Terkini</div>
          <div className="description-breakingNews">
            WAKIL BUPATI MENDAPAT PENGHARGAAN{" "}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
