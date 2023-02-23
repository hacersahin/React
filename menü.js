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
    const aciklama =["TV Tarihi","1891 yılında Amerika’da Thomas Edison ile yardımcısı William Kennedy Laurie Dickson’ın geliştirdiği “Kinetoscope” prototipi ilk film görüntüleme makinelerinden biridir. Cihazın üst kısmında bulunan bir delikten hareketli resimlerin izlenebildiği bu makine, aynı zamanda sinematik projeksiyon aletlerinin de temelini oluşturmaktadır.","Tiyatronun Tarihi","İlk yazı yüzeyi hem sert oluşu hem de yazılmak için bir hazırlığa ihtiyaç duymaması nedeniyle taş olarak bilinir. Prehistorik dönemde insanların fikirlerini somut ve görünür kılmak için kullandıkları taş yüzeyler kimi zaman mağara duvarlarındaki ritüel çizimleri olarak ortaya çıkarken kimi zaman da küçük taşlar üzerinde geometrik işaretler olarak gözlemlenir. Paleolitik çağda Kuzey İspanya’da,Fransa’da ve İngiltere’de bunun gibi küçük taşların üzerindeki yazılara veya başka bir ifadeyle sembollere rastlanır. Eski çağ sonlarına kadar taş yüzeyi üzerindeki yazıların aktif şekilde kullanıldığı bilinir","Müzik, geçmiş ve şimdiki bilinen her kültür ve dinde zaman ve mekânlar arasında büyük çeşitlilik gösterir. En izole edilmiş kabile grupları da dâhil olmak üzere dünyadaki tüm insanlar bir müzik türüne sahip olduklarından, müziğin, insanların dünyaya yayılmasından önce atalardan oluşan topluluklarda mevcut olduğu sonucuna varılabilir. Sonuç olarak, ilk müzik Afrika'da icat edilmiş ve daha sonra çeşitli çalgılar yapmak için çeşitli materyaller kullanarak insan hayatının temel bir bileşeni hâline gelmiş olabilir."];
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
      <div style={{border:'1px solid black'}}>
      <ul style={{
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
       
      }}>
        {baslik.map((eleman,index) => 

         (<NavList
          menuElemani={eleman}
          tiklandiginda={()=> goster(index)} />)
        
        )}
      </ul>
      </div>
      <div id="detay">

      </div>
      
      </>
    );
}

export default Menu;
