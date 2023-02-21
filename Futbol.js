function Futbol(){

   
    const sut= function Gol(){

        const sayi= Math.round(Math.random()+1);

        const tahmin= prompt("1 veya 2 giriniz:");

        if(tahmin<1 || tahmin>2){

            alert("Lütfen 1 veya 2 giriniz:");
        }
        else if (sayi!=tahmin){

            alert("Şut kaçtı!");
        }
        else if (tahmin==sayi){

            alert("Gol");
        }

    }
    return (

        <button onClick={sut}> Şut Çek!</button>

    );
    
}
    export default Futbol;