
import "./ComponentStyle/AppartmentGrid.css"
import  Apartment from "./ApartmentCard.jsx"


import React, { useState, useEffect } from 'react';

function AppartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchAppartements();
  }, []);

  function fetchAppartements() {
    fetch("db.json")
      .then((res) => res.json()) // récupérer mon fichier db.json
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <Apartment key={apartment.id} title={apartment.title} imageUrl={apartment.cover} id={ apartment.id} />
      ))}
    </div>
  );
  
}

export default AppartmentGrid;




