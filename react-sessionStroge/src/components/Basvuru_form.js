import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar.js";
import './form.css';

const Basvuru_form = () => {
  useEffect(() => {
    const kullanici_tipi = document.querySelector("#mezun_durumu");
    const ogrenci_bilgileri = document.querySelector("#ogrenci_bilgileri");
    const mezun_bilgileri = document.querySelector("#mezun_bilgileri");

    function handleUserTypeChange() {
      if (kullanici_tipi.value === "ogrenci") {
        ogrenci_bilgileri.style.display = "block";
        mezun_bilgileri.style.display = "none";
      } else if (kullanici_tipi.value === "mezun") {
        ogrenci_bilgileri.style.display = "none";
        mezun_bilgileri.style.display = "block";
      } else {
        ogrenci_bilgileri.style.display = "none";
        mezun_bilgileri.style.display = "none";
      }
    }

    kullanici_tipi.addEventListener("change", handleUserTypeChange);
    return () => {
      kullanici_tipi.removeEventListener("change", handleUserTypeChange);
    };
  }, []);

  const [isim, setIsim] = useState("");
  const [soyisim, setSoyisim] = useState("");
  const [kimlikno, setKimlikno] = useState("");
  const [dogumtarihi, setDogumtarihi] = useState("");
  const [milliyet1, setMilliyet1] = useState("");
  const [milliyet2, setMilliyet2] = useState("");
  const [engel, setEngel] = useState("");
  const [telefon, setTelefon] = useState("");
  const [adres, setAdres] = useState("");
  const [ulke, setUlke] = useState("");
  const [postakodu, setPostakodu] = useState("");
  const [mezun_durumu, setMezun_durumu] = useState("");
  const [mezunOkul, setMezunOkul] = useState("");
  const [mezunBolum, setMezunBolum] = useState("");
  const [mezunTarih, setMezunTarih] = useState("");
  const [mezunNot, setMezunNot] = useState("");
  const [ogrenciOkul, setOgrenciOkul] = useState("");
  const [ogrenciBolum, setOgrenciBolum] = useState("");
  const [ogrencisinif, setOgrencisinif] = useState("");
  const [ogrenciOrtalama, setOgrenciOrtalama] = useState("");
  const [cv, setCv] = useState("");
  const [diploma, setDiploma] = useState("");
  const [pasaport, setPasaport] = useState("");
  const [niyetmektubu, setNiyetmektubu] = useState("");
  const [ikametgah, setIkametgah] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form_veri = [isim, soyisim, kimlikno, dogumtarihi, milliyet1, milliyet2, engel, telefon, adres, ulke, postakodu, mezun_durumu, mezunBolum, mezunOkul, mezunTarih, mezunNot, ogrenciBolum, ogrenciOkul, ogrenciOrtalama, cv, diploma, niyetmektubu, ikametgah];

  const id = sessionStorage.getItem("id");

  sessionStorage.setItem(id, JSON.stringify(form_veri));

  const depo_veri = sessionStorage.getItem("form_veri");
  if (depo_veri) {
    form_veri = JSON.parse(depo_veri);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isim", isim);
    sessionStorage.setItem("soyisim", soyisim);
    sessionStorage.setItem("kimlikno", kimlikno);
    sessionStorage.setItem("dogumtarihi", dogumtarihi);
    sessionStorage.setItem("milliyet1", milliyet1);
    sessionStorage.setItem("milliyet2", milliyet2);
    sessionStorage.setItem("engel", engel);
    sessionStorage.setItem("telefon", telefon);
    sessionStorage.setItem("adres", adres);
    sessionStorage.setItem("ulke", ulke);
    sessionStorage.setItem("pkod", postakodu);
    sessionStorage.setItem("mezun_durumu", mezun_durumu);
    sessionStorage.setItem("m_okul", mezunOkul);
    sessionStorage.setItem("m_bolum", mezunBolum);
    sessionStorage.setItem("m_not", mezunNot);
    sessionStorage.setItem("m_tarih", mezunTarih);
    sessionStorage.setItem("o_okul", ogrenciOkul);
    sessionStorage.setItem("o_bolum", ogrenciBolum);
    sessionStorage.setItem("o_not", ogrenciOrtalama);
    sessionStorage.setItem("o_sinif", ogrencisinif);
    sessionStorage.setItem("cv", cv);
    sessionStorage.setItem("diploma", diploma);
    sessionStorage.setItem("n_mektup", niyetmektubu);
    sessionStorage.setItem("ikametgah", ikametgah);


    setSuccess("Basvuru basarili sekilde alindi.");
    // setIsim('');
    // setSoyisim('');
    // setKimlikno('');
    // setDogumtarihi('');
    // setMilliyet1('');
    // setMilliyet2('');
    // setTelefon('');
    // setAdres('');
    // setEngel('');
    // setUlke('');
    // setPostakodu('');
    // setMezun_durumu('');
    // setMezunOkul('');
    // setMezunBolum('');
    // setMezunTarih('');
    // setMezunNot('');
    // setOgrenciOkul('');
    // setOgrenciBolum('');
    // setOgrencisinif('');
    // setOgrenciOrtalama('');
    // setCv('');
    // setDiploma('');
    // setPasaport('');
    // setNiyetmektubu('');
    // setIkametgah('');
    // setError('');
  };
  

  return (
    <>
      <div className="row" style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "10 px" }}>
        <Sidebar
          form_active="active"
          form_disable="disabled"
          gor_to="/home/Basvurularim" />
      </div>
      <div class="row justify-content-center ">
        <div class="col-8 ">
          <div class="card justify-content-center align-items-center">
            <main class="form w-100 m-auto">
              <form class="form " onSubmit={handleSubmit} style={{ margin: "50px" }}>
                <div class=" row example  justify-content-center border-dark ">
                  <div class="col-12 justify-content-center ">
                    <h4 class="mb-3">Başvuru İçin Gerekli Bilgiler</h4>
                    <br />
                    <h5>1. Kişisel Bilgiler</h5> <br />
                    <form class="needs-validation" novalidate>
                      <div class="row g-3">
                        <div class="col-sm-6">
                          <label for="firstName" class="form-label">
                            İsim
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="isim"
                            placeholder=""
                            value={isim}
                            onChange={(e) => setIsim(e.target.value)}
                            required
                          />
                          <div class="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">
                            Soyisim
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="soyisim"
                            placeholder=""
                            value={soyisim}
                            onChange={(e) => setSoyisim(e.target.value)}
                            required
                          />
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-sm-6">
                          <label for="kimlikno" class="form-label">
                            Kimlik No
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="kimlikno"
                            placeholder=""
                            value={kimlikno}
                            onChange={(e) => setKimlikno(e.target.value)}
                            required
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                          />
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-sm-6">
                          <label for="date" class="form-label">
                            Doğum Tarihi
                          </label>
                          <input
                            type="date"
                            class="form-control"
                            id="dogumtarihi"
                            placeholder=""
                            value={dogumtarihi}
                            onChange={(e) => setDogumtarihi(e.target.value)}
                            required
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                          />
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-sm-6">
                          <label for="1milliyet" class="form-label">
                            1.Milliyet
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="milliyet1"
                            placeholder=""
                            value={milliyet1}
                            onChange={(e) => setMilliyet1(e.target.value)}
                            required
                          />
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-sm-6">
                          <label for="2milliyet" class="form-label">
                            2.Milliyet
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="miliyet2"
                            placeholder=""
                            value={milliyet2}
                            onChange={(e) => setMilliyet2(e.target.value)}
                            required
                          />
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-12" style={{ margin: "5px" }}>
                          <label for="username" class="form-label">
                            Engel Durumu
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="engel"
                            placeholder="Herhangi bir engel durmunuz varsa yazınız..."
                            value={engel}
                            onChange={(e) => setEngel(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-12">
                          <div class="col-4">
                            <label for="telefon" class="form-label">
                              Telefon <span class="text-muted"></span>
                            </label>
                          </div>
                          <div class="col-6">
                            <input
                              type="number"
                              class="form-control"
                              id="telefon"
                              placeholder=""
                              value={telefon}
                              onChange={(e) => setTelefon(e.target.value)}
                              style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="address" class="form-label">
                            Adres
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="adres"
                            placeholder=""
                            value={adres}
                            onChange={(e) => setAdres(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-md-5">
                          <label for="country" class="form-label">
                            Ülke
                          </label>
                          <select
                            class="form-select"
                            id="ulke"
                            value={ulke}
                            onChange={(e) => setUlke(e.target.value)}
                            required
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            <option value="">Seçiniz...</option>
                            <option value="TR">Türkiye</option>
                            <option value="DE">Almanya</option>
                            <option value="US">
                              Amerika Birleşik Devletleri
                            </option>
                            <option value="BZ">Belize</option>
                            <option value="BE">Belçika</option>
                            <option value="BY">Beyaz Rusya</option>
                            <option value="BT">Bhutan</option>
                            <option value="ZZ">
                              Bilinmeyen veya Geçersiz Bölge
                            </option>
                            <option value="AE">
                              Birleşik Arap Emirlikleri
                            </option>
                            <option value="GB">Birleşik Krallık</option>
                            <option value="BO">Bolivya</option>
                            <option value="BA">Bosna Hersek</option>
                            <option value="TD">Çad</option>
                            <option value="CZ">Çek Cumhuriyeti</option>
                            <option value="CN">Çin</option>
                            <option value="DK">Danimarka</option>
                            <option value="DM">Dominik</option>
                            <option value="FR">Fransa</option>
                            <option value="NL">Hollanda</option>
                            <option value="AN">Hollanda Antilleri</option>
                            <option value="HK">Hong Kong SAR - Çin</option>
                            <option value="HR">Hırvatistan</option>
                            <option value="IQ">Irak</option>
                            <option value="VG">
                              İngiliz Virgin Adaları
                            </option>
                            <option value="IR">İran</option>
                            <option value="IE">İrlanda</option>
                            <option value="ES">İspanya</option>
                            <option value="IL">İsrail</option>
                            <option value="SE">İsveç</option>
                            <option value="CH">İsviçre</option>
                            <option value="IT">İtalya</option>
                            <option value="IS">İzlanda</option>
                            <option value="JM">Jamaika</option>
                            <option value="JP">Japonya</option>
                            <option value="QA">Katar</option>
                            <option value="KW">Kuveyt</option>
                            <option value="EG">Mısır</option>
                            <option value="NO">Norveç</option>
                            <option value="PL">Polonya</option>
                            <option value="PT">Portekiz</option>
                            <option value="RU">Rusya Federasyonu</option>
                            <option value="TM">Türkmenistan</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukrayna</option>
                            <option value="OM">Umman</option>
                            <option value="NZ">Yeni Zelanda</option>
                            <option value="GR">Yunanistan</option>
                          </select>
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-md-5">
                          <label for="zip" class="form-label">
                            Posta Kodu
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="pkod"
                            placeholder=""
                            value={postakodu}
                            onChange={(e) => setPostakodu(e.target.value)}
                            required
                          />
                          <div class="invalid-feedback"></div>
                        </div>
                      </div>
                      <br />
                      <div class=" row ">
                        <div class="col-12 " style={{ margin: "5px" }}>
                          <h5>2.Eğitim Bilgiler</h5> <br />
                          <form class="needs-validation" novalidate>
                            <div class="row g-3">
                              <div class="col-12">
                                <label
                                  class="form-label"
                                  for="mezun_durumu"
                                >
                                  Mezuniyet Durumu:
                                </label>
                                <select id="mezun_durumu"
                                  value={mezun_durumu}
                                  onChange={(e) =>
                                    setMezun_durumu(e.target.value)
                                  }>
                                  <option value="none">Seçiniz</option>
                                  <option
                                    id="ogrenci"
                                    value="ogrenci"

                                  >
                                    Öğrenci
                                  </option>
                                  <option
                                    id="mezun"
                                    value="mezun"

                                  >
                                    Mezun
                                  </option>
                                </select>

                                <div id="ogrenci_bilgileri" style={{ display: "none" }}>
                                  <label class="form-label" for="okul_adi">
                                    Okul Adı:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    id="o_okul"
                                    name="okul_adi"
                                    value={ogrenciOkul}
                                    onChange={(e) =>
                                      setOgrenciOkul(e.target.value)
                                    }
                                  />
                                  <br />

                                  <label class="form-label" for="bolum">
                                    Bölüm:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    id="o_bolum"
                                    name="bolum"
                                    value={ogrenciBolum}
                                    onChange={(e) =>
                                      setOgrenciBolum(e.target.value)
                                    }
                                  />
                                  <br />

                                  <label class="form-label" for="sinif">
                                    Sınıf:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    id="o_sinif"
                                    name="sinif"
                                    value={ogrencisinif}
                                    onChange={(e) =>
                                      setOgrencisinif(e.target.value)
                                    }
                                  />
                                  <br />
                                  <label
                                    class="form-label"
                                    for="ogr_ortalamasi"
                                  >
                                    Not Ortalaması:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="number"
                                    id="o_not"
                                    name="ogr_ortalamasi"
                                    value={ogrenciOrtalama}
                                    onChange={(e) =>
                                      setOgrenciOrtalama(e.target.value)
                                    }
                                  />
                                  <br />
                                </div>

                                <div
                                  id="mezun_bilgileri" style={{ display: "none" }}
                                >
                                  <label class="form-label" for="okul_adi">
                                    Okul Adı:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    id="m_okul"
                                    name="okul_adi"
                                    value={mezunOkul}
                                    onChange={(e) =>
                                      setMezunOkul(e.target.value)
                                    }
                                  />
                                  <br />

                                  <label class="form-label" for="bolum">
                                    Bölüm:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    id="m_bolum"
                                    name="bolum"
                                    value={mezunBolum}
                                    onChange={(e) =>
                                      setMezunBolum(e.target.value)
                                    }
                                  />
                                  <br />
                                  <label
                                    class="form-label"
                                    for="mezuniyet_tarihi"
                                  >
                                    Mezuniyet Tarihi:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="date"
                                    id="m_tarih"
                                    name="mezuniyet_tarihi"
                                    value={mezunTarih}
                                    onChange={(e) =>
                                      setMezunTarih(e.target.value)
                                    }
                                  />
                                  <br />

                                  <label
                                    class="form-label"
                                    for="not_ortalamasi"
                                  >
                                    Not Ortalaması:
                                  </label>
                                  <input
                                    class="form-control"
                                    type="number"
                                    id="m_not"
                                    name="not_ortalamasi"
                                    value={mezunNot}
                                    onChange={(e) =>
                                      setMezunNot(e.target.value)
                                    }
                                  />
                                  <br />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-12 order-md-last" style={{ margin: "5px" }}>
                            <h5 class="d-flex justify-content-between align-items-center mb-3">
                              <span>3. Gerekli Belgeleri Yükle</span>
                            </h5>
                            <div>
                              <label
                                for="not"
                                class="form-label"
                                style={{ margin: "5px" }}
                              >
                                <strong>CV</strong>
                              </label>
                              <div class="input-group">
                                <input
                                  type="file"
                                  id="cv"
                                  class="form-control"
                                  placeholder=" "
                                  value={cv}
                                  onChange={(e) => setCv(e.target.value)}
                                />
                                <button
                                  type="button"
                                  class="btn btn-outline-primary"
                                >
                                  Yükle
                                </button>
                                <div class="invalid-feedback"></div>
                              </div>
                              <label
                                for="not"
                                class="form-label"
                                style={{ margin: 5 }}
                              >
                                <strong>Diploma</strong>
                              </label>
                              <div class="input-group">
                                <input
                                  type="file"
                                  id="diploma"
                                  class="form-control"
                                  placeholder=" "
                                  value={diploma}
                                  onChange={(e) =>
                                    setDiploma(e.target.value)
                                  }
                                />
                                <button
                                  type="button"
                                  class="btn btn-outline-primary"
                                >
                                  Yükle
                                </button>
                                <div class="invalid-feedback"></div>
                              </div>
                              <label
                                for="not"
                                class="form-label"
                                style={{ margin: 5 }}
                              >
                                <strong>Pasaport</strong>
                              </label>
                              <div class="input-group">
                                <input
                                  type="file"
                                  id="pasaport"
                                  class="form-control"
                                  placeholder=" "
                                  value={pasaport}
                                  onChange={(e) =>
                                    setPasaport(e.target.value)
                                  }
                                />
                                <button
                                  type="button"
                                  class="btn btn-outline-primary"
                                >
                                  Yükle
                                </button>
                                <div class="invalid-feedback"></div>
                              </div>
                              <label
                                for="not"
                                class="form-label"
                                style={{ margin: 5 }}
                              >
                                <strong>Niyet Mektubu</strong>
                              </label>
                              <div class="input-group">
                                <input
                                  type="file"
                                  id="n_mektup"
                                  class="form-control"
                                  placeholder=" "
                                  value={niyetmektubu}
                                  onChange={(e) =>
                                    setNiyetmektubu(e.target.value)
                                  }
                                />
                                <button
                                  type="button"
                                  class="btn btn-outline-primary"
                                >
                                  Yükle
                                </button>
                                <div class="invalid-feedback"></div>
                              </div>
                              <label
                                for="not"
                                class="form-label"
                                style={{ margin: 5 }}
                              >
                                <strong>İkametgah</strong>
                              </label>
                              <div class="input-group">
                                <input
                                  type="file"
                                  id="ikahmetgah"
                                  class="form-control"
                                  placeholder=" "
                                  value={ikametgah}
                                  onChange={(e) =>
                                    setIkametgah(e.target.value)
                                  }
                                />
                                <button
                                  type="button"
                                  class="btn btn-outline-primary"
                                >
                                  Yükle
                                </button>
                                <div class="invalid-feedback"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <br />
                    <div class="row" style={{ margin: 50 }}>
                      <br />
                      <div class="col-md-12 " style={{ textAlign: "center" }}>
                        <a href="">
                          <button
                            type="submit"
                            class=" buton btn  btn-outline-primary "
                            onclick=""
                          >
                            Kaydet
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {error && <p style={{ color: 'red' }}> {error} </p>}
              {success && <p style={{ color: 'green' }}> {success} </p>}

            </main>
          </div>
        </div>
      </div>

    </>
  );
};
export default Basvuru_form;
