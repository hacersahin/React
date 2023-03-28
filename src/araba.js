import {useState}from "react";

function  Araba(){

    // const [marka, setMarka]= useState("Ford"); 
    // const [model, setModel]= useState("Ax5"); 
    // const [yil, setYil]= useState("2025"); 
    // const [renk, setRenk]= useState("Gri"); 

    const [araba, setAraba]= 
            useState({
                marka:"opel",
                model:"astra",
                yil:"2000",
                renk:"beyaz"
            })


    const renkdegistir=()=>{

        setAraba(previousState =>{
            return{...previousState, renk:"kırmızı"} 
        })


    }


    return(
        <>
        <h1>Markam: {araba.marka}</h1>
        <p> 
            Model: {araba.model}, Renk: {araba.renk}, Yil: {araba.yil},
        </p>
        <button type="button" onClick={renkdegistir}>Renk Değiştir</button>

            
        </>
    )
            
}
export default Araba;