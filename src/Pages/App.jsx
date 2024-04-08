import React from 'react';

import './stylePage/App.css';
import Banner from '../Component/Banner.jsx';
import AppartmentGrid from '../Component/AppartmentGrid.jsx'
import { useLocation, useParams } from 'react-router-dom';
 



function App() {

const location = useLocation();
console.log(location)
  return (
    <div>
     
  
      <Banner />
      <AppartmentGrid />
     
    </div>
  )
}

export default App
