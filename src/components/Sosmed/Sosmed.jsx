import React from "react";
import "../../assets/css/sosmed.css";
import FB from "../../assets/icon/iconFB.png";
import YT from "../../assets/icon/iconYT.png";
import IG from "../../assets/icon/iconIG.png";
import TWT from "../../assets/icon/iconTWT.png";
import WA from "../../assets/icon/iconWA.png";
import { useNavigate } from "react-router-dom";

const Sosmed = () => {
  const navigate = useNavigate();

  const click = () => {
    alert("COMING SOON!!!");
    navigate(window.scrollTo(0, 0));
  };

  return (
    <div className="container mt-3">
      <div className="row text-center">
        <h3>Ikuti Kami</h3>
        <div className="item-sosmed">
          <img onClick={click} src={YT} alt="none" />
          <img onClick={click} src={FB} alt="none" />
          <img onClick={click} src={IG} alt="none" />
          <img onClick={click} src={TWT} alt="none" />
        </div>
      </div>
    </div>
  );
};

export default Sosmed;
