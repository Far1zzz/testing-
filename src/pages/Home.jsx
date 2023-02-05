import React from "react";
import "../assets/css/home.css";
import Content1 from "../assets/img/63CC610C-901F-41DB-AFC8-EAEDA6F73B15-1440x564_c.jpeg";
import Content2 from "../assets/img/IMG-20230118-WA0022-1440x564_c.jpg";
import { Carousel } from "antd";
import Video from "../assets/video/vid.mp4";

function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid mt-3">
        <div className="container" style={{ border: "1px solid black" }}>
          <div className="news-container">
            <div className="border">
              <div className="terkini">
                <p className="title">Berita</p>
                <p className="titles">Terkini</p>
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid black" }} className="row">
            <div className="col-lg-4">
              <div data-aos="zoom-in" className="content1">
                <div className="content1-bg">
                  <img src={Content1} alt="" />
                  <div className="box-news">
                    <h5>
                      Pengumuman hasil akhir tes designer kominfo pada tanggal 1
                      januari
                    </h5>
                  </div>
                </div>
                <div className="breaking">
                  <h4>Kamis, 5 Januari 2023</h4>
                  <h6>5 Menit yang lalu</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-3">
              <div data-aos="zoom-out" className="content2">
                <div className="content2-bg">
                  <img src={Content2} alt="Berita terkini 1" />
                  <div className="box-news">
                    <h5>
                      PERTEMUAN KEPALA DINAS KOMINFO MENGENAI PENERIMAAN
                      PROGRAMMER{" "}
                    </h5>
                  </div>
                </div>
                <div className="breaking">
                  <h4>Kamis, 5 Januari 2023</h4>
                  <h6>5 Menit yang lalu</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="news-container2">
                <div className="border2">
                  <div className="terkini2">
                    <p className="title2">Berita</p>
                    <p className="titles2">Terkini</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="exampleCarousel">
                <Carousel autoplay className="carouselNews" effect="fade">
                  <div>
                    <img src={Content1} alt="" className="caraouselNews-img" />
                  </div>
                  <div>
                    <img src={Content2} alt="" className="caraouselNews-img" />
                  </div>
                </Carousel>
              </div>
            </div>
            <div id="cardContent1" className="col-lg-3 ">
              <div data-aos="zoom-out" className="video-responsive">
                <iframe
                  src={"https://www.youtube.com/embed/9H4NkxWUyB8"}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YOUTUBE"
                />
              </div>
              <div data-aos="zoom-in" className="shortVid">
                <video
                  controls
                  preload="auto"
                  typeof="video/mp4"
                  src={Video}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
