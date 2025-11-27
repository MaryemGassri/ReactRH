import React, { useState, useEffect } from "react";
import api from "../service/api";

function ListInterview() {
  const [interview, setInterview] = useState([]);
  const [user, setUser] = useState(null);

  // Récupérer l'utilisateur depuis localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Erreur lors du parsing des données utilisateur", e);
      }
    }
  }, []);

  // Récupérer les interviews
  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const res = await api.getInterview();

        if (user) {
          const myInterview = res.data.data.filter(
            (i) => i.idcandidature && i.idcandidature.idcandidate === user._id
          );
          setInterview(myInterview);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des interviews", error);
      }
    };

    if (user) fetchInterview();
  }, [user]);

  return (
    <div className="container-xxl bg-white p-0">

  {/* Header */}
  <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Mes Entretiens</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Mes Entretiens</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="p-6 max-w-4xl mx-auto">
      

      {interview.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Aucun entretien trouvé
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interview.map((i) => (
            <div
              key={i._id}
              className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                🕒 Entretien
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Début :</span> 
                {new Date(i.start).toLocaleString("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
})}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Fin :</span> 
                {new Date(i.end).toLocaleString("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
})}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Lieu :</span> {i.location}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>

    </div>

  );
}

export default ListInterview;
