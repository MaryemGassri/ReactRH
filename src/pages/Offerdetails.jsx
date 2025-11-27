import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../service/api';

function Offerdetails() {
  const { id } = useParams();
  const [user,setUser]= useState(null)
  const storedUser = localStorage.getItem("user")//pour recuperer user depuis localstorage
  if (storedUser && !user){
    try{
      setUser(JSON.parse(storedUser));
    }
    catch(e){
      console.error("erreur lors du parsing des données utilisateur",e);
    }
  }
  const [Offerdetails, setOfferdetails] = useState(null);

  // État pour le formulaire
  const [formData, setFormData] = useState({
    idoffer: '',
    idcandidate: '',
    coverLetter: '',
    file: null
  });

  // Récupérer les détails de l'offre
  const fetchOfferDetails = async () => {
    try {
      const res = await api.getOfferDetails(id);
      console.log("getOfferDetails", res.data.data)
      setOfferdetails(res.data.data);
    } catch (error) {
      console.log("Erreur lors de la récupération de offer details", error);
    }
  };

  // Récupérer les infos du localStorage
  useEffect(() => {
    fetchOfferDetails();

    const dataFromStorage = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (key.toLowerCase().includes('name') || key.toLowerCase().includes('email')) {
        dataFromStorage[key] = value;
      }
    }
    setFormData(prev => ({ ...prev, ...dataFromStorage }));
  }, []);

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData(prev => ({ ...prev, file: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user){
      alert("veuillez vous connecter pour postuler")
      return ;
    }

    try {
      const data = new FormData();
    data.append("idoffer", id)
    data.append("idcandidate" , user._id)
    data.append("coverLetter" , formData.coverLetter)
    data.append("cv" , formData.file)


      // Affiche les données envoyées pour debug
      console.log('Données envoyées pour candidature :');
   

      // Appel à l'API pour créer la candidature
     const res = await api.candidature(data);
if(res){
  alert('Candidature envoyée avec succès !');

}
    } catch (error) {
      console.error('Erreur complète :', error);
      if (error.response) {
        console.error('Détails backend :', error.response.data);
        console.error('Status code :', error.response.status);
        console.error('Headers :', error.response.headers);
      }
      alert('Erreur lors de la candidature. Vérifie la console pour plus de détails.');
    }
  };

  return (
    <div>
      <div className="container-xxl bg-white p-0">
        {/* Header */}
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Job Detail */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row gy-5 gx-4">
              <div className="col-lg-8">
                <div className="d-flex align-items-center mb-5">
                  <img className="flex-shrink-0 img-fluid border rounded" src={`http://localhost:5000/${Offerdetails?.idrecruiter?.image}`} alt style={{width: 80, height: 80}} />
                  <div className="text-start ps-4">
                    <h3 className="mb-3">{Offerdetails?.title}</h3>
                    <span className="text-truncate me-3">
  <i className="fas fa-building text-primary me-2"></i>
  {Offerdetails?.idrecruiter?.company}
</span>
                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{Offerdetails?.localisation}</span>
                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{Offerdetails?.salary}</span>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="mb-3">Job description</h4>
                  <p>{Offerdetails?.description}</p>

                  <h4 className="mb-3">Responsibility</h4>
                  <p>{Offerdetails?.exigence}</p>

                </div>

                {/* Formulaire de candidature */}
                <div>
                  <h4 className="mb-4">Apply For The Job</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          name="name"
                          value={user?.FirstName +" " + user?.LastName || ''}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          name="email"
                          value={user?.email || ''}
                          onChange={handleChange}
                        />
                      </div>
                 
                      <div className="col-12 ">
                        <input
                          type="file"
                          className="form-control bg-white"
                          name="file"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="Coverletter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4">
                {/* Job Summary & Company Details */}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
    </div>
  );
}

export default Offerdetails;
