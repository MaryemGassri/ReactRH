import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navebar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // pour la redirection

  const storedUser = localStorage.getItem("user");
  if (storedUser && !user) {
    try {
      setUser(JSON.parse(storedUser));
    } catch (e) {
      console.error("erreur lors du parsing des données utilisateur", e);
    }
  }

  const handlelogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // redirection vers la page d'accueil
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
          <h1 className="m-0 text-primary">JobEntry</h1>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to={"/"} className="nav-item nav-link active">Home</Link>
            <Link to={"/about"} className="nav-item nav-link">About</Link>

            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to={"/categorie"} className="dropdown-item">Job Category</Link>
                <Link to={"/offer"} className="dropdown-item">Job List</Link>
              </div>
            </div>

            {user ? (
              <>
                <Link to={"/entretien"} className="nav-item nav-link">Entretien</Link>
                <Link to={"/candidature"} className="nav-item nav-link">Candidature</Link>
                <Link to={"/account"} className="nav-item nav-link">Compte</Link>

                <button
                  onClick={handlelogout} // 👈 juste ça change
                  className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
                >
                  Logout<i className="fa fa-arrow-right ms-3" />
                </button>
              </>
            ) : (
              <Link to={"/login"} className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">
                Login<i className="fa fa-arrow-right ms-3" />
              </Link>
            )}

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navebar;
