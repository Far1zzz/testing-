import React, { useState } from "react";
import { Carousel } from "antd";
import "../../assets/css/home.css";
import "../../assets/css/breakingNews.css";
import "../../assets/css/carouselContent.css";
import "../../assets/css/infoGrafis.css";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import CarouselContent from "../../components/Carousel/Carousel";
import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import BeritaLainnya from "../../components/BeritaLainnya/BeritaLainnya";
import InfoGrafis from "../../components/InfoGrafis/InfoGrafis";
import PengumumanInformasi from "../../components/PengumumanInformasi/PengumumanInformasi";
import Aplikasi from "../../components/Aplikasi/Aplikasi";
import Sosmed from "../../components/Sosmed/Sosmed";
import Welcome from "../../components/Welcome/Welcome";
import CarouselImg from "../../assets/img/CarouselContent2.png";
import CarouselImg2 from "../../assets/img/CarouselContent.png";
import Carousel1 from "../../components/Caraousel1/Caraousel1";

const Home = () => {
  const [input, setInput] = useState("");
  const [calendar, setCalendar] = useState(new Date());

  // logic show alert
  const searchButton = (e) => {
    e.preventDefault();
    alert(`${input}`);
  };

  return (
    <>
      <Carousel1 />
      <BreakingNews />
      <Welcome />
      <div className="container-fluid mt-3 bg-carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 berita-terkini mb-3">Berita Terkini</div>
            <div className="col-lg-3">
              <form onSubmit={searchButton} className="d-flex mb-3">
                <input
                  className="form-control me-2 input-form"
                  type="text"
                  placeholder="Cari..."
                  aria-label="Search"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn-search search-icon" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 ">
              <CarouselContent />
              <div className="view-all">
                <button className="button">
                  <span>View All</span>
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <Calendar
                className="react-calendar"
                onChange={setCalendar}
                value={calendar}
              />
            </div>
          </div>
        </div>
      </div>
      <Aplikasi />
      <BeritaLainnya />
      <InfoGrafis />
      <PengumumanInformasi />
      <Sosmed />
    </>
  );
};

export default Home;
