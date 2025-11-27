import React, { useState, useEffect } from "react";
import api from "../service/api";

function ListCandidature() {
  const [candidature, setCandidature] = useState([]);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({ type: "", message: "" }); // 🔹 nouvel état pour les alertes

  // Récupérer user depuis localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Erreur lors du parsing des données utilisateur", e);
        setAlert({ type: "error", message: "❌ Erreur de lecture des infos utilisateur" });
      }
    }
  }, []);

  // Récupérer les candidatures
  const fetchCandidature = async () => {
    if (!user) return;
    try {
      const res = await api.getCandidature();
      const Mycandidature = res.data.data.filter(
        (app) => app.idcandidate === user._id
      );
      setCandidature(Mycandidature);
    } catch (error) {
      console.log("Erreur lors de la récupération des candidatures", error);
      setAlert({ type: "error", message: "⚠️ Impossible de récupérer vos candidatures" });
    }
  };

  useEffect(() => {
    fetchCandidature();
  }, [user]);

  // Supprimer une candidature
  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette candidature ?")) return;
    try {
      await api.deleteCandidature(id);
      setCandidature(candidature.filter((c) => c._id !== id));
      setAlert({ type: "success", message: "✅ Candidature supprimée avec succès" });
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
      setAlert({ type: "error", message: "❌ Erreur lors de la suppression de la candidature" });
    }
  };

  return (
    <div className="container-xxl bg-white p-0">
      {/* Header */}
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Mes Candidatures
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Mes Candidatures
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* 🔹 Zone d’alerte */}
        {alert.message && (
          <div
            className={`p-4 mb-4 text-sm rounded-lg ${
              alert.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {alert.message}
          </div>
        )}

        {candidature?.length === 0 ? (
          <p className="text-gray-500 text-center">
            Vous n’avez pas encore postulé à une offre.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidature?.map((i, index) => (
              <div
                key={index}
                className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {i.idoffer?.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Description :</span> {i?.idoffer?.exigence}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Salaire :</span> {i?.idoffer?.salary} TND
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Recruteur :</span>{" "}
                  {i?.idoffer?.idrecruiter?.FirstName + " " + i?.idoffer?.idrecruiter?.LastName} - {i.idoffer?.idrecruiter?.email}
                </p>
                <p className="text-gray-600 italic mb-2">
                  <span className="font-medium">Lettre de motivation :</span> {i?.coverLetter}
                </p>

                {/* Bouton supprimer */}
                <button
                  onClick={() => handleDelete(i._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListCandidature;
