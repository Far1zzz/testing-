import React from "react";
import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";
import CarouselImg from "../../assets/img/CarouselContent2.png";
import CarouselImg2 from "../../assets/img/CarouselContent.png";
import { Carousel } from "antd";

function Navbar() {
  return (
    <React.Fragment>
      <header>
        <div id="navbar-brand">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 justify-content-between">
                <img
                  src={
                    "https://cdn.discordapp.com/attachments/1070315411377225769/1072513577447063572/Asset_35x.png"
                  }
                  alt=""
                  className="img-kominfo"
                />
              </div>
              <div className="col-lg-6 text-end mt-3 text-white ">
                <span>
                  <i className="fa fa-sun mx-3"></i>
                </span>
                EN | ID
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-content">
          <nav class="navbar navbar-expand-lg  p-0">
            <div class="container">
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
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to={"/"}
                      className="nav-link contents-navbar"
                      aria-current="page"
                    >
                      <i class="bi bi-house-fill"></i> Beranda
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
                  <li className="nav-item">
                    <div className="nav-link contents-navbar" href="#">
                      Gallery
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
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

export default Navbar;
