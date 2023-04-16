import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';


const Giris = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();

      const kullanici_adi = sessionStorage.getItem('email');
      const sifre = sessionStorage.getItem('password');

      if(email == kullanici_adi && password == sifre){

          navigate('/Home');
      }
      else{
          setError('Hatali kullanici adi veya sifre!');
      }


  }


  return (
    <div>
       <div class="giris">
          <div class="form">  
          <h4 class="giris-text">Giriş</h4><br/>
          <form class="giris-from" onSubmit={handleSubmit}>
              <input type="email" 
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required  />
              <input type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        required />
              <button type="submit">Giriş Yap</button>
              <p class="mesaj">
                Kayıtlı değil misin? <Link to="/kayit">Hesap Oluştur!</Link>
              </p>
            </form>   
            {error && <p style={{color:'red'}}> {error} </p> }         
          </div>
        </div>
    </div>
  )
}

export default Giris;
