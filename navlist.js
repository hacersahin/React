function NavList(props){


    const sitil={
        display:'inline-block',
        margin:'0 10px',
        
    }
    const linktus= {
        textDecoration:'none',
        backgroundColor:'transparent',
        color:'black',
        border: '1px solid',
        borderRadius: '5px',
        padding: '10px',
        margin: '5',
        display:'inline-block',
        transition:'background-color 0.2 seconds'
        
        

    };
    const hoverstili={
        backgroundColor:'pink',
    };
    return(

        <li style={sitil}>
           <a href={"#"} onClick={props.tiklandiginda} style={linktus} 
           onMouseOver= {(e)=> Object.assign(e.target.style, hoverstili)}
           onMouseOut= {(e)=> Object.assign(e.target.style, linktus)}> 
           {props.menuElemani} 
           </a>
           
        </li>
    );
}
export default NavList;
