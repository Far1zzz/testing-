import React from "react";
import "../assets/css/navbar.css";
import LogoPemerintah from "../assets/img/LOGO DISKOM.png";
import PromotionBanner from "../assets/img/PROMOTION BANNER.png";
import PromotionBanner2 from "../assets/img/PROMOTION BANNER 2.png";
import { Carousel } from "antd";

function Navbar() {
  return (
    <React.Fragment>
      <div id="header-navbar">
        <div className="container">
          <div
            style={{ border: "1px solid white" }}
            className="row d-flex justify-content-between align-items-center py-3"
          >
            <div className="col-md-4">
              <img src={LogoPemerintah} alt="" className="img-logo" />
            </div>
            <div className="col-md-7">
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
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-content">
          <div className="container-fluid">
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
                  <div
                    className="nav-link contents-navbar"
                    aria-current="page"
                    href="#"
                  >
                    Beranda
                  </div>
                </li>
                {/* handle navbar profile */}
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle contents-navbar"
                    href="#"
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
                      <div className="dropdown-item" href="#">
                        Visi & Misi
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item" href="#">
                        7 program & 12 Gerakan
                      </div>
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
                <li className="nav-item">
                  <div className="nav-link contents-navbar" href="#">
                    Gallery
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link contents-navbar" href="#">
                    Cctv Online
                  </div>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Cari..."
                  aria-label="Search"
                />
                <button className="btn-search" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
