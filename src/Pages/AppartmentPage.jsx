
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageBanner from '../Component/imageBanner.jsx';
import AppartmentTitle from '../Component/AppartmentTitle.jsx';
import AppartmentDescription from '../Component/AppartmentDescription.jsx';
import AppartmentEquipement from '../Component/AppartmentEquipement.jsx';
import AppartementsListes from '../../public/db.json';

function AppartmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [flat, setFlat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state && location.state.AppartmentId) {
      const id = location.state.AppartmentId;
      fetchDataApartment(id);
    } else {
      // Rediriger vers la page d'erreur si aucun ID n'est fourni
      navigate('/error');
    }
  }, [location.state, navigate]);

  function fetchDataApartment(id) {
    const flat = AppartementsListes.find((flat) => flat.id === id);
    if (flat) {
      setFlat(flat);
      setLoading(false);
    } else {
      // Rediriger vers la page d'erreur si l'ID de l'appartement est incorrect
      navigate('/error');
    }
  }

  if (loading) {
    // Afficher un chargement pendant que les données sont récupérées
    return <div>Chargement ...</div>;
  }

  return (
    <div className="AppartmentPage">
      <ImageBanner pictures={flat.pictures} />
      <AppartmentTitle flat={flat} />
      <div className="flex-containerD">
        <AppartmentDescription title="Description" content={flat.description} />
        <AppartmentEquipement title="Équipements" content={flat.equipments} />
      </div>
    </div>
  );
}

export default AppartmentPage;
