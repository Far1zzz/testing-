import React from "react";
import { Carousel } from "antd";
import ContentCarousel from "../../assets/img/CarouselContent.png";
import ContentCarousel2 from "../../assets/img/CarouselContent2.png";
import "../../assets/css/carouselContent.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const contentStyle = {
  width: "100%",
  height: "450px",
  lineHeight: "450px",
  objectFit: "cover",
  borderRadius: "5px",
};
const CarouselContent = () => (
  <Carousel autoplay effect="fade">
    <div>
      <img src={ContentCarousel} style={contentStyle} alt="none" />
      <div className="news-title-background">
        <div className="news-title">
          pegelaran wayang dalam rangka hut banyuasin ke-21 dan tvri
        </div>
      </div>
      <div className="date-time-news">
        <h5>Kamis, 26 Januari 2023</h5>
        <h6>
          <i class="bi bi-clock-history"></i> 15 Menit yang lalu
        </h6>
      </div>
    </div>
    <div>
      <img src={ContentCarousel2} style={contentStyle} alt="none" />
      <div className="news-title-background">
        <div className="news-title">
          pegelaran wayang dalam rangka hut banyuasin ke-21 dan tvri
        </div>
      </div>
      <div className="date-time-news">
        <h5>Jum'at, 27 Januari 2023</h5>
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
export default CarouselContent;
