import React, { PureComponent } from 'react'
import "./stylePage/AboutPage.css";
import "../Component/Banner.jsx";
import "./stylePage/AppartmentPage.css";
import AppartmentDescription from '../Component/AppartmentDescription.jsx';


export class AboutPage extends PureComponent {
  render() {
    return (
        <>
     
        <span className="About__img">
      <div className='Baner'>

        <img src="/logo/about.png"/>


      </div>

</span>
<br></br> 
<span className='About__description'>
 
  <AppartmentDescription title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
  <AppartmentDescription title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>
  <AppartmentDescription title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>
  <AppartmentDescription title="Sécurité" content="Le sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité étabilis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/><br></br>
  </span>

       
  </>
    )
  }
}

export default AboutPage
