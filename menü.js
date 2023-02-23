import React from "react";
import ReactDOM from "react-dom/client";
import NavList from "./navlist";
import Detay from "./detay";
import tv from "./resim/tv.jpeg";
import sinema from "./resim/sinema.jpeg";
import tiyatro from "./resim/tiyatro.jpeg";
import yazi from "./resim/yazi.jpeg";
import müzik from "./resim/müzik.jpeg";



function Menu() {

    //TEKRAR KULLANILABİLEN DEĞERLER

    const baslik= ["TV","Sinema","Tiyatro","Kitap", "Müzik"];
    const aciklama =["TV Tarihi","Sinema Tarihi","Tiyatronun Tarihi","Yazının Tarihi","Müzik Tarihi"];
    const resim= [tv,sinema,tiyatro,yazi,müzik];

    //RENDER FONKSİYONU

    const goster = (index) => {

        const detay = ReactDOM.createRoot(document.getElementById("detay"));

        detay.render( 
         <Detay 
          aciklama={aciklama[index]}
          resim={resim[index]}
          />
        )
    }

    //EKRANA YAZDIĞIMIZ İÇERİK

    return(
      <>
      <ul>
        {baslik.map((eleman,index) => 

         (<NavList
          menuElemani={eleman}
          tiklandiginda={()=> goster(index)} />)
        
        )}
      </ul>
      <div id="detay">

      </div>
      
      </>
    );
}

export default Menu;
