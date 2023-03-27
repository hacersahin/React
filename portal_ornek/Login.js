import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const kullanici_adi = sessionStorage.getItem("email");
    const sifre = sessionStorage.getItem("password");
    if (email == kullanici_adi && password == sifre) {
      navigate("/portal");
    } else {
      setError("Hatalı Giriş Yaptınız");
    }
  };

  return (
    <div>
      <h2>Giriş</h2>
      <from onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Mail girin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre girin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş</button>
      </from>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Hesabınız yok mu? <Link to="/kayit">Kayıt</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
