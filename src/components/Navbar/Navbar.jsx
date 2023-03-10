import React from "react";
import "../../assets/css/navbars.css";
import { Link } from "react-router-dom";
import PromotionBanner from "../../assets/img/PROMOTIONBANNER.png";
import PromotionBanner2 from "../../assets/img/PROMOTIONBANNER2.png";
import { Carousel } from "antd";
import ModalContent from "../ModalContent/ModalContent";

function Navbar() {
  return (
    <React.Fragment>
      <header>
        <div id="header-navbar">
          <div data-aos="zoom-in" data-aos-offset="300" className="container">
            <div className="row d-flex justify-content-between align-items-center py-3">
              <div className="col-md-4">
                <img
                  src={
                    "https://media.discordapp.net/attachments/1070315411377225769/1072513577447063572/Asset_35x.png?width=1440&height=289"
                  }
                  alt=""
                  className="img-logo"
                />
              </div>
              <div className="col-md-7">
                <ModalContent>
                  <Carousel autoplay className="carousel" effect="fade">
                    <div>
                      <img
                        src={PromotionBanner}
                        alt=""
                        className="caraousel-image"
                      />
                    </div>
                    <div>
                      <img
                        src={PromotionBanner2}
                        alt=""
                        className="caraousel-image"
                      />
                    </div>
                  </Carousel>
                </ModalContent>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg  p-0">
            <div className="container-fluid content-navbars">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse container"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to={"/"}
                      className="nav-link contents-navbar"
                      aria-current="page"
                    >
                      Beranda
                    </Link>
                  </li>
                  {/* handle navbar profile */}
                  <li className="nav-item dropdown">
                    <div
                      className="nav-link dropdown-toggle contents-navbar"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </div>
                    <ul
                      className="dropdown-menu bg-content-navbar"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to={"/visi-misi"} className="dropdown-item">
                          Visi & Misi
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"program-gerakan"}
                          className="dropdown-item"
                          href="#"
                        >
                          7 program & 12 Gerakan
                        </Link>
                      </li>

                      <li>
                        <div className="dropdown-item" href="#">
                          Struktur Organisasi
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* handle navbar portal berita */}
                  <li className="nav-item dropdown">
                    <div
                      className="nav-link dropdown-toggle contents-navbar"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Portal Berita
                    </div>
                    <ul
                      className="dropdown-menu bg-content-navbar"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <div className="dropdown-item" href="#">
                          Berita
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          Berita Pengumuman
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* handle navbar informasi publik */}
                  <li className="nav-item dropdown">
                    <div
                      className="nav-link dropdown-toggle contents-navbar"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Informasi Publik
                    </div>
                    <ul
                      className="dropdown-menu bg-content-navbar"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <div className="dropdown-item" href="#">
                          Banyuasin Tv
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          SIMAYA
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          Informasi Covid-19
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* handle navbar portal terkait */}
                  <li className="nav-item dropdown">
                    <div
                      className="nav-link dropdown-toggle contents-navbar"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Portal Terkait
                    </div>
                    <ul
                      className="dropdown-menu bg-content-navbar"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <div className="dropdown-item" href="#">
                          Portal Data
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          JDIH Banyuasin
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          BPS Banyuasin
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          BSSN
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          BIMTEK BPPTIK
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          BMKG
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          EMONEV Banyuasin
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <div
                      className="nav-link dropdown-toggle contents-navbar"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Gallery
                    </div>
                    <ul
                      className="dropdown-menu bg-content-navbar"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <div className="dropdown-item" href="#">
                          Foto Peristiwa
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          Video
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item" href="#">
                          InfoGrafis
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
