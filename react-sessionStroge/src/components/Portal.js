import React from 'react';
import Sidebar from './sidebar';

const Portal = () => {
  return (
    <div style={{}} >
      <div className="row" style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "10 px" }}>

        <Sidebar
          gor_to="Basvuru_kontrol"
          form_to="Basvuru_form" />

      </div>
      <div>

      </div>
    </div>


  )
}

export default Portal;
