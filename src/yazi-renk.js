import { useState } from "react";

function Yazi(){
    function rastgeleRenk(){
        const harfler= '0123456789ABCDEF';
        let renk='#';

        for (let i=0; i<6; i++){

            renk+=harfler[Math.floor(Math.random()*16)];

        }

     return renk;

    }

    const [text, setText]= useState('');
    const [renk, setRenk]= useState('');

    function degistiginde (event){
        setText(event.target.value);
        setRenk(rastgeleRenk());
        document.body.style.backgroundColor=renk;


    }

    return(
        <>

            <input type="text" value={text} onChange={degistiginde}/>
            <p>Yazi: {text}</p>
        </>
    )
}
export default Yazi;