import React from "react";
import "../../assets/css/aplikasi.css";

const Aplikasi = () => {
  const jam = new Date();

  const clickk = () => {
    alert("Belom ado linkNyo createdAt(03:35 AM)");
  };

  return (
    <div className="container ">
      <div className="aplikasi ">
        <div className="">
          <div className="item-aplikasi"></div>
          <div onClick={clickk} className="nama-aplikasi">
            JDIH Kominfo
          </div>
        </div>
        <div className="">
          <div className="item-aplikasi"></div>
          <div onClick={clickk} className="nama-aplikasi">
            Perizinan Online
          </div>
        </div>
        <div className="">
          <div className="item-aplikasi"></div>
          <div onClick={clickk} className="nama-aplikasi">
            Portal Data
          </div>
        </div>
        <div className="">
          <div className="item-aplikasi"></div>
          <div onClick={clickk} className="nama-aplikasi">
            CCTV Online
          </div>
        </div>
        <div className="">
          <div className="item-aplikasi"></div>
          <div onClick={clickk} className="nama-aplikasi">
            Kerjasama Media
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplikasi;
