import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../service/api";

function Login() {
  const [data, setData] = useState({});
  const [alert, setAlert] = useState({ type: "", message: "" }); // 🔹 état pour l'alerte
  const navigate = useNavigate();

  const changeHandle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await api.login(data);

      if (
        res.data.data?.isverified === false ||
        res.data.data?.role !== "candidate"
      ) {
        throw new Error("❌ Votre compte candidat n'est pas vérifié");
      }

      // Succès
      setAlert({ type: "success", message: "✅ Vous êtes connecté maintenant" });
      localStorage.setItem("user", JSON.stringify(res.data.data));

      // redirection après 1,5s
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Erreur lors de connexion", error);
      setAlert({
        type: "error",
        message:
          error.response?.data?.message ||
          error.message ||
          "❌ Erreur lors de la connexion",
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Login
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Login
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Formulaire */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">

                {/* 🔹 Zone alerte */}
                {alert.message && (
                  <div
                    className={`p-3 mb-4 text-sm rounded-lg ${
                      alert.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {alert.message}
                  </div>
                )}

                <form onSubmit={login}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          onChange={changeHandle}
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          name="password"
                          onChange={changeHandle}
                          required
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>

                <Link
                  to={"/forget"}
                  className="py-4 px-lg-5 d-none d-lg-block"
                >
                  Mot de passe oublié ?
                </Link>
                <Link
                  to={"/register"}
                  className="py-4 px-lg-5 d-none d-lg-block"
                >
                  Create  new account  
                </Link>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
