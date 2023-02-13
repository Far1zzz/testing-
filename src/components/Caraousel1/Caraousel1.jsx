import { Carousel } from "antd";
import React from "react";
import CarouselImg2 from "../../assets/img/CarouselContent2.png";
import "../../assets/css/caraousel1.css";

function Caraousel1() {
  return (
    <React.Fragment>
      <Carousel>
        {/* <div className="caraousel-item">
          <div className="content-kominfo ">
            <img src={CarouselImg} alt="Logo" />
            <div className="content-kominfo-text container">
              <h1>Pemerintahan</h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                et reprehenderit qui necessitatibus fuga sapiente alias
                consequatur! Rerum expedita, quibusdam nam assumenda deleniti
                totam, quod, eveniet veritatis ullam molestiae nobis.
              </h2>
              <button className="btn-berita">
                <h6>Selengkapnya...</h6>
              </button>
            </div>
          </div>
        </div> */}
        <div className="caraousel-item">
          <div className="content-kominfo ">
            <img src={CarouselImg2} alt="Logo" />
            <div className="content-kominfo-text container">
              <h1>Pemerintahan</h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                et reprehenderit qui necessitatibus fuga sapiente alias
                consequatur! Rerum expedita, quibusdam nam assumenda deleniti
                totam, quod, eveniet veritatis ullam molestiae nobis.
              </h2>
              <button className="btn-berita">
                <h6>Selengkapnya...</h6>
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </React.Fragment>
  );
}

export default Caraousel1;
