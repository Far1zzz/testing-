import React from "react";
import Pict from "../../assets/img/Welcome.png";
import "../../assets/css/welcome.css";

const Welcome = () => {
  return (
    <div className="container">
      <div className="row mt-3 text-center text-danger">
        <div className="welcome-description">
          <img src={Pict} className="img-fluid" alt="" srcset="" />
          <h6>
            Selamat Datang di Website Dinas kominfo-SP Kab.Banyuasin
            <p>Dr.H.Salni Pajar,S.Ag.,M.H.I</p>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
