import { useState } from "react";

function Form(){

    const [input, setInput]= useState("");

    const submitFonk = (event) => {

        event.preventDefault();

        //alert(`Girdiğiniz Bilgiler: ${input}`)

        console.log(input);
       


    }
    const degistiginde = (event) => {

       const input_name = event.target.name;//isim
       const input_value = event.target.value;//mert

       setInput(values=> ({...values,[input_name]:input_value }));
       
    }

    return(

        <>

        <form onSubmit={submitFonk}>

        <label>İsim Gir:

            <input 
                type="text" 
                name="isim"
                value={input.isim|| ""}
                onChange={degistiginde}
            /> 
        </label> 
        <br/>
        <label> Yaş Giriniz:

            <input
            type="number"
            name="yas"
            value={input.yas || ""}
            onChange={degistiginde}
                       
            />

        </label>
        <br/>
        <label>
            Başvurma Amacınız:
            <br/>
            <textarea 
                name="metin" 
                value={input.metin||""} 
                onChange={degistiginde}>
                

            </textarea>
        </label>
        <br/>
        
        <label>
            Burs İsteği:  
            <select 
                name="burs"
                value={input.burs ||""}
                onChange={degistiginde}>

                <option value="1">İstiyorum</option>
                <option value="0">İstemiyorum</option>

            </select>
        </label>
            
        <input type="submit"/>

        </form>
        
        </>
    );
       
}
export default Form;
