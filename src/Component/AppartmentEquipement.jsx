import React from 'react'
import "./ComponentStyle/AppartementEquipement.css"
import { useState } from 'react';

function AppartmentEquipement(props) {
    const [showContent1, setShowContent1] = useState(false);
    const Show1 = () => {
        setShowContent1(!showContent1)
      }
  return (
    <div className='descriptionArea'>
        <div className="description">
      
      <div className="description__header">

      <label>{props.title}</label>
      <i
            className={`fa-solid fa-chevron-up ${showContent1 ? 'rotate' : ''}`}
            onClick={Show1}
          ></i>

        </div>
   {/* liste des equipements */}
        {showContent1 && (
  <div className="description__content">
    <ul>
      {props.content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)}      
       
     
       
       
        
             
    </div>
    </div>
  )
}

export default AppartmentEquipement

