import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Basvuru from "./component/Basvuru_form";
import Goruntule from "./component/BasvuruGoruntule";

const Portal = () => {
  return (
    <div className="row">
      <div className="col-4">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
          style={{ width: 280 }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Sidebar</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                Anasayfa
              </a>
            </li>
            <li>
              <Link to="/basvuruformu" class="nav-link text-white">
                Başvuru Formu
              </Link>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Başvuru Görüntüle
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Products
              </a>
            </li>
          </ul>
          <hr />
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a class="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-8">
        <Routes>
          <Route path="/Basvuru_formu" element={<Basvuru/>} />

          <Route path="/BasvuruGoruntule" element={<Goruntule />} />
        </Routes>
      </div>
    </div>
  );
};

export default Portal;
