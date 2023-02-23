function Detay(props){


    const ozellik = {

        width: "50%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        padding: "50px",
        border: "1px solid black",
    };

    const img = {
        width: "50%",
        height: "50%",
        margin: "auto",
        padding: "50px",
        display: "block",
    };
   
      
    
    return(

        <>
        <div style={ozellik}>

                <img src={props.resim} style={{img}}/>
                <p > {props.aciklama}</p>

        </div>
        
        </>
       
    );
}
export default Detay;
