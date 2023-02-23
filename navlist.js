function NavList(props){
    return(

        <li>
           <a href={"#"} onClick={props.tiklandiginda}> 
           {props.menuElemani}
           </a>
           
        </li>
    );
}
export default NavList;