import React from 'react';
import { Link } from 'react-router-dom';
import "./anasayfa.css";

const Anasayfa = () => {

    

    return (
        <>
            <div className='bg-image'>
            </div>
            <div className="bg-text">
                <div className="row">
                    <h4 style={{ fontFamily: "Georgia", fontSize: "50px", color: "white" }}>
                        ERASMUS SCHOOL
                    </h4>
                </div>
                <div className="row buton">

                    <Link to="/giris">Giriş Yap!</Link>
                </div>
            </div>

        </>
    )
}

export default Anasayfa
