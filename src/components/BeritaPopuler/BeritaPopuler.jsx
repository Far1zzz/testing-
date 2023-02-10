import React from "react";
import Content from "../../assets/img/BeritaLainnnya.png";

const BeritaPopuler = () => {
  return (
    <>
      {" "}
      <div className="row mt-2 position-berita">
        <div className="col-lg-4">
          <img src={Content} alt="" className="img-fluid image-berita" />{" "}
        </div>
        <div className="col-lg-8">
          <div className="news-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            soluta veniam incidunt delectus quis voluptatum!
          </div>
          <div className="date-description mt-5 text-danger">
            27 Agustus 2003
          </div>
        </div>
      </div>
      <div className="row mt-2 position-berita">
        <div className="col-lg-4">
          <img src={Content} alt="" className="img-fluid image-berita" />{" "}
        </div>
        <div className="col-lg-8">
          <div className="news-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            soluta veniam incidunt delectus quis voluptatum!
          </div>
          <div className="date-description mt-5 text-danger">
            27 Agustus 2003
          </div>
        </div>
      </div>
      <div className="row mt-2 position-berita">
        <div className="col-lg-4">
          <img src={Content} alt="" className="img-fluid image-berita" />{" "}
        </div>
        <div className="col-lg-8">
          <div className="news-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            soluta veniam incidunt delectus quis voluptatum!
          </div>
          <div className="date-description mt-5 text-danger">
            27 Agustus 2003
          </div>
        </div>
      </div>
      <div className="row mt-2 ">
        <div className="col-lg-4">
          <img src={Content} alt="" className="img-fluid image-berita" />{" "}
        </div>
        <div className="col-lg-8">
          <div className="news-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            soluta veniam incidunt delectus quis voluptatum!
          </div>
          <div className="date-description mt-5 text-danger">
            27 Agustus 2003
          </div>
        </div>
      </div>
    </>
  );
};

export default BeritaPopuler;
