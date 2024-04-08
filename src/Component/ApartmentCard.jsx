import React from 'react'
import { Link } from 'react-router-dom'
import "./ComponentStyle/Appartment.css"


function stylelink() {
  return { color: "white", textDecoration: "none", wordBreak: "break"};
}

function Apartment( props ) {
const state = {
   AppartmentId: props.id

};
function getPath() {
  return "/flat/"  + state.AppartmentId;
}





  return (
    // afficher l image et le titres dans les apparCards
    <div className='Apartment'>
     <Link to={getPath()} state= {state}>
        <img src={props.imageUrl}/>
     <div style={stylelink()}>{props.title}</div>
     </Link>
    </div>
  )
  }

export default Apartment
