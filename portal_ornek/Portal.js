import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Basvuru from "./component/Basvuru_form";
import Goruntule from "./component/BasvuruGoruntule";


const Portal = () => {
  const formTikla = () => {
    ReactDOM.render(<Basvuru />, document.getElementById("sol"));
    document.getElementById("sol").style.display = "block";
    document.getElementById("sag").style.display = "none";
  };
  const basvuruGoruntule = () => {
    ReactDOM.render(<Goruntule />, document.getElementById("sag"));
    document.getElementById("sol").style.display = "none";
    document.getElementById("sag").style.display = "block";
  };
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div
            className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
            style={{ width: "280px", height: "900px"}}
          >
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-4">Portal</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" class="nav-link " aria-current="page">
                  Anasayfa
                </a>
              </li>
              <li>
                <Link
                  class="nav-link text-white"
                  aria-current="page"
                  onClick={formTikla}
                >
                  Başvuru Formu
                </Link>
              </li>
              <li>
                <Link
                  class="nav-link text-white "
                  aria-current="page"
                  onClick={basvuruGoruntule}
                >
                  Başvuru Görüntüle
                </Link>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  Products
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>mdo</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-8" id="icerik">
          <div className="row">
            <div className="col6" id="sag" style={{ display: "none" }}></div>
            <div className="col6" id="sol" style={{ display: "none" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portal;
