import React from "react";
import ContentCarousel from "../../assets/img/CarouselContent.png";
import { Carousel } from "antd";
import ContentCarousel2 from "../../assets/img/CarouselContent2.png";

const CarouselGaleri = () => {
  return (
    <Carousel autoplay effect="fade">
      <div>
        <img src={ContentCarousel} className="img-fluid" alt="none" />
      </div>
      <div>
        <img src={ContentCarousel2} className="img-fluid" alt="none" />
      </div>
    </Carousel>
  );
};

export default CarouselGaleri;
