import React from "react";
import "../../assets/css/Footer.css";
import kadis from "../../assets/img/SALNI-JAS-Titlered.png";

const Footer = () => {
  return (
    <>
      <section>
        {/* Footer */}
        <footer className="bg-secondary text-white text-center text-md-start mt-4">
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className=" text-center border col-lg-5 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Lokasi</h5>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="gmap"
                      width="100%"
                      height="65%"
                      id="gmap_canvas"
                      style={{ borderRadius: "10px" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6435011554754!2d104.40639301431443!3d-2.918472540406331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b0426adc661dd%3A0xb8559ac0ebe10cc2!2sDinas%20Kominfo%20Kabupaten%20Banyuasin!5e0!3m2!1sen!2sid!4v1676106600120!5m2!1sen!2sid"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="border col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="border text-center col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">
                  Kadis diskominfo kab.banyuasin
                </h5>
                <img className="img-kadis" src={kadis} alt="" />
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div className="text-center p-3 footer-2">
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              DISKOMINFO
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </section>
    </>
  );
};

export default Footer;
