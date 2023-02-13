import React from "react";
import "../../assets/css/pengmumanInformasi.css";
import Pengumuman from "../../assets/img/BeritaLainnnya.png";

const PengumumanInformasi = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row position-pengumuman">
          <div className="col-lg-8 informasi-pengumuman">
            <div className="title-pengumuman">
              <h5>Pengumuman Dan Informasi</h5>
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="mb-4 col-lg-4">
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
              <div className="col-lg-6">
                <div className="row">
                  <div className="mb-4 col-lg-4">
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
              <div className="col-lg-6">
                <div className="row">
                  <div className="mb-4 col-lg-4">
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
              <div className="col-lg-6">
                <div className="row">
                  <div className="mb-4 col-lg-4">
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
              <div className="col-lg-6">
                <div className="row">
                  <div className="mb-4 col-lg-4">
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
              <div className="col-lg-6">
                <div className="row">
                  <div className="mb-4 col-lg-4">
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
          <div className="border text-center col-lg-4 rounded galeri-peristiwa">
            <h5>Foto Peristiwa</h5>
            <div className="galeri rounded-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PengumumanInformasi;
