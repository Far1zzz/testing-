import React from "react";
import { Carousel } from "antd";
import Content2 from "../../assets/img/carouseBerita2.png";
import Content3 from "../../assets/img/carouselBerita.png";

const contentStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  aspectRatio: "2/2.7",
};

const CarouselBeritaLainnya = () => {
  return (
    <Carousel autoplay effect="fade">
      <div>
        <img
          src={Content2}
          style={contentStyle}
          className="img-fluid carousel-img"
          alt="none"
        />
        <div className="berita-title-background">
          <div className="berita-title">Kunjungan Bupati Ke Langkan</div>
        </div>
        <div className="date-time-berita">
          <h5>Sabtu, 13 Januari 2023</h5>
          <h6>
            <i class="bi bi-clock-history"></i> 1 Minggu Yang lalu
          </h6>
        </div>
      </div>
      <div>
        <img
          src={Content3}
          style={contentStyle}
          className="img-fluid carousel-img"
          alt="none"
        />
        <div className="berita-title-background">
          <div className="berita-title">Kunjungan Wakil Bupat Ke kebun </div>
        </div>
        <div className="date-time-berita">
          <h5>Sabtu, 13 Januari 2023</h5>
          <h6>
            <i class="bi bi-clock-history"></i> 20 Menit yang lalu
          </h6>
        </div>
      </div>
      {/* <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
    </Carousel>
  );
};

export default CarouselBeritaLainnya;
