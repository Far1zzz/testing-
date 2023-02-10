import React from "react";
import "../../assets/css/beritaLainnya.css";
import "../../assets/css/carouselBerita.css";
import BeritaPopuler from "../BeritaPopuler/BeritaPopuler";
import CarouselBeritaLainnya from "./CarouselBeritaLainnya";
import CarouselBeritaLainnya2 from "./CarouselBeritaLainnya2";

const BeritaLainnya = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-8">
            <div className="title">Berita Lainnya</div>
          </div>
          <div className="col-lg-4">
            <div className="title">
              Berita Terpopuler <hr className="line-title" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row mt-2">
              <div className="col-lg-6">
                <CarouselBeritaLainnya />
              </div>
              <div className="col-lg-6">
                <CarouselBeritaLainnya2 />
              </div>
            </div>
            <div className="view-all">
              <button className="button">
                <span>View All</span>
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <BeritaPopuler />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeritaLainnya;
