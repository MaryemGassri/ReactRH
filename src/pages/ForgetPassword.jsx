import React, { useState } from 'react';
import api from '../service/api'; // ton fichier API
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const [email, setEmail] = useState(''); // stocker l'email
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.forgetPassword({ email }); // envoyer email au backend
      if(res) {
        alert("Un lien de réinitialisation a été envoyé à votre email !");
        navigate("/login"); // redirection vers login
      }
    } catch (error) {
      console.log("Erreur lors de la demande de mot de passe oublié", error);
    }
  }

  return (
    <div>
      {/* Header Start */}
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Mot de passe oublié</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Mot de passe oublié</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Header End */}

      <div className="container-xxl py-5">
    <div className="container">
    <div className="row g-4">
    <div className="col-md-3"></div>
    
    <div className="col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
          <h2>Réinitialisez votre mot de passe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Votre Email</label>
          </div>
          <button className="btn btn-primary w-100" type="submit">Envoyer le lien</button>
        </form>
          </div>
        </div>


    <div className="col-md-3"></div>


    </div>


    </div>

       
      </div>
    </div>
  );
}

export default ForgetPassword;
