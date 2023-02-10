import React from "react";
import Content1 from "../../assets/img/InfoGrafis.png";
import Content2 from "../../assets/img/InfoGrafis2.png";
import Content3 from "../../assets/img/InfoGrafis3.png";
import Content4 from "../../assets/img/InfoGrafis4.png";

const InfoGrafis = () => {
  return (
    <>
      <div className="container-fluid bg-infoGrafis mt-5">
        <div className="title-infoGrafis pt-5">
          INFOGRAFIS
          <hr className="line-infoGrafis" />
        </div>
        <div className="container pb-5 mt-3">
          <div className="row">
            <div className="col-lg-3 infoGrafis-content">
              <img
                src={Content1}
                alt="none"
                className="img-fluid img-infoGrafis"
              />
            </div>
            <div className="col-lg-3 infoGrafis-content">
              <img
                src={Content2}
                alt="none"
                className="img-fluid img-infoGrafis"
              />
            </div>
            <div className="col-lg-3 infoGrafis-content">
              <img
                src={Content3}
                alt="none"
                className="img-fluid img-infoGrafis"
              />
            </div>
            <div className="col-lg-3 infoGrafis-content">
              <img
                src={Content4}
                alt="none"
                className="img-fluid img-infoGrafis"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoGrafis;
