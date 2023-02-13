import React from "react";
import "../../assets/css/pengmumanInformasi.css";
import Pengumuman from "../../assets/img/BeritaLainnnya.png";
import { Carousel } from "antd";

const contentStyle = {
  width: "100%",
};

const PengumumanInformasi = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row position-pengumuman">
          <div className="title-pengumuman">
            <h5>
              Pengumuman Dan Informasi
              <hr />
            </h5>
          </div>
          <div className="col-lg-8 informasi-pengumuman">
            <div className="row">
              <div className="col-lg-6 mb-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <img
                        src={Pengumuman}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <span className="description-pengumuman">
                      1 BUPATI BUPATI BLABLABLA BUPATI BLABLABLA BUPATI BUPATI
                      BLABLABLA BUPATI BUPATI BLABLABLA.....
                    </span>
                    <div className="date-pengumuman">27 Agustus 2023</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <img
                        src={Pengumuman}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <span className="description-pengumuman">
                      2 BUPATI BUPATI BLABLABLA BUPATI BLABLABLA BUPATI BUPATI
                      BLABLABLA BUPATI BUPATI BLABLABLA.....
                    </span>
                    <div className="date-pengumuman">27 Agustus 2023</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <img
                        src={Pengumuman}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <span className="description-pengumuman">
                      3 BUPATI BUPATI BLABLABLA BUPATI BLABLABLA BUPATI BUPATI
                      BLABLABLA BUPATI BUPATI BLABLABLA.....
                    </span>
                    <div className="date-pengumuman">27 Agustus 2023</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <img
                        src={Pengumuman}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <span className="description-pengumuman">
                      4 BUPATI BUPATI BLABLABLA BUPATI BLABLABLA BUPATI BUPATI
                      BLABLABLA BUPATI BUPATI BLABLABLA.....
                    </span>
                    <div className="date-pengumuman">27 Agustus 2023</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <img
                        src={Pengumuman}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <span className="description-pengumuman">
                      5 BUPATI BUPATI BLABLABLA BUPATI BLABLABLA BUPATI BUPATI
                      BLABLABLA BUPATI BUPATI BLABLABLA.....
                    </span>
                    <div className="date-pengumuman">27 Agustus 2023</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div>
                      <img
                        src={Pengumuman}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <span className="description-pengumuman">
                      6 BUPATI BUPATI BLABLABLA BUPATI BLABLABLA BUPATI BUPATI
                      BLABLABLA BUPATI BUPATI BLABLABLA.....
                    </span>
                    <div className="date-pengumuman">27 Agustus 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 rounded text-center galeri-peristiwa">
            <h5>Foto Peristiwa</h5>
            {/* <img src={Pict} alt="" className="img-fluid rounded " /> */}
            <Carousel autoplay effect="fade">
              <div className="carousel-foto-peristiwa">
                <img
                  src={Pengumuman}
                  className="img-fluid rounded galeri"
                  alt="none"
                  style={contentStyle}
                />
              </div>
              <div className="carousel-foto-peristiwa">
                <img
                  src={Pengumuman}
                  className="img-fluid rounded galeri"
                  alt="none"
                  style={contentStyle}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default PengumumanInformasi;
