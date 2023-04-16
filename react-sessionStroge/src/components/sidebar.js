import React from "react";
import { Router, Route, Routes, Link, useNavigate } from 'react-router-dom';


const Sidebar = (props) => {

  const navigate = useNavigate();
  return (
    <>
    
      <div class="p-3 m-1 border-0 bd-example"  >
        <nav class="navbar navbar-dark bg-dark fixed-top" len="1947">
          <div class="container-fluid" len="1908">
            <a class="navbar-brand" href="#" len="21" lang="tr" style={{marginLeft:16}}
            >Erasmus School</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
              len="53"
            >
              <span class="navbar-toggler-icon" len="0"></span>
            </button>
            <div
              class="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
              len="1455"
            >
              <div class="offcanvas-header" len="214">
                <h4
                  class="offcanvas-title"
                  id="offcanvasDarkNavbarLabel"
                  len="14"
                  lang="tr"
                >
                  Profilim
                </h4>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  len="0"
                ></button>
              </div>
              <div class="offcanvas-body" len="1152">
                <ul
                  class="navbar-nav justify-content-end flex-grow-1 pe-3"
                  len="835"
                >
                  <li class="nav-item" len="88">
                    <Link
                      className={`nav-link ${props.gor_active} ${props.gor_disable}`} 
                      aria-current="page" 
                      to={`${props.gor_to}`}
                      len="4"
                      lang="tr"
                    >Başvurularım</Link>
                  </li>
                  <li class="nav-item" len="61">
                    <Link class={`nav-link ${props.form_active} ${props.form_disable}`} aria-current="page" 
                                    to={`${props.form_to}`} lang="tr">Başvuru Formu</Link>
                  </li>
                  <li class="nav-item dropdown" len="557">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      len="36"
                      lang="tr"
                     
                    >
                      Kullanıcı Bilgileri
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" len="323">
                      <li len="44">
                        <a class="dropdown-item" href="#" len="6" lang="tr"
                        >Kişisel Bilgiler</a>
                      </li>
                      <li len="52">
                        <a class="dropdown-item" href="#" len="14" lang="tr"
                        >Eğitim Bilgileri</a>
                      </li>
                      <li len="61">
                        <hr class="dropdown-divider" len="0" />
                      </li>
                      <li len="57">
                        <a class="dropdown-item" href="#" len="19" lang="tr"
                        >İletişim Bilgileri</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex mt-3" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Portal'da ara"
                    aria-label="Search"
                    len="0"
                  />
                  <button class="btn btn-success" type="submit" len="6" lang="tr">
                    Ara
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
