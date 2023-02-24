import {useState}from "react";

function  Favorirenk(){

    const [renk, setRenk]= useState("Blue");

    return(
        <>
            <h1>Favori Renk: </h1>
            <button type="button" onClick={()=>setRenk("red")}>Blue</button>
            </>
    );
            
}
export default Favorirenk;