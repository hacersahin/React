import { useState } from "react";

function Sayac(){

    const [sayi,setSayi]= useState(0);

    function arttir(){
        setSayi(sayi+1);
    }
    function azalt(){
        setSayi(sayi-1);
    }
    return(
        <>
        <h1>Sayac: {sayi}</h1>
        <button onClick={arttir}>Artır</button>
        <button onClick={azalt}>Azalt</button>
        </>
    )
}
export default Sayac;