import React from 'react'
import Sidebar from './sidebar';

const Basvuru_kontrol = () => {
  return (
    <>
      <div className="row" style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "10 px" }}>
        <Sidebar
          gor_active="active" 
          gor_disable="disabled" 
          form_to="/home/Basvuru_form" />
      </div>
      <div>

      </div>
    </>
  )
}

export default Basvuru_kontrol;
