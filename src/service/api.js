import axiosContext from "./axiosContext";

const getCategory = () => {
  return axiosContext.get("/categorie/get");
};

const getOffer = () => {
  return axiosContext.get("/offer/get");
};

const getByidCategory = (id) => {
  return axiosContext.get(`/categorie/get/${id}`);
};

const getOfferDetails = (id) => {
  return axiosContext.get(`/offer/get/${id}`);
};

const login = (data) => {
  return axiosContext.post("/user/login", data);
};

const register = (data) => {
  return axiosContext.post("/Candidate/add", data);
};

const forgetPassword = async (data) => {
  return await axiosContext.post("/user/forget", data);
};

const resetPassword = async (token, data) => {
  return await axiosContext.post(`/user/reset/${token}`, data);
};

const candidature = async (data) => {
  return await axiosContext.post(`/candidature/add`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const getCandidature = async () => {
  return axiosContext.get(`/candidature/get`);
};

const getInterview = async () => {
  return axiosContext.get(`/interviewEvent/get`);
};

const OfferDetails = async (id) => {
  return await axiosContext.get(`/offers/${id}`);
};

const deleteCandidature = async (id) => {
  return await axiosContext.delete(`/candidature/delete/${id}`);
};

// 🟢 Nouvelle fonction Update User
const updatedUser = async (id, data) => {
    return await axiosContext.put(`/Candidate/put/${id}`, data);
  };
  
  const getAllEducation = () => {
    return axiosContext.get("/education/get"); // route qui retourne toutes les éducations
  };
  const deleteEducation = async (id) => {
    return await axiosContext.delete(`/education/delete/${id}`);
  };
  const updateEducation = (id, data) => {
    return axiosContext.put(`/education/put/${id}`, data); // pour mettre à jour
  };
  const getAllExperience = () => {
    return axiosContext.get("/experience/get"); // route qui retourne toutes les expériences
  };
  
  const deleteExperience = async (id) => {
    return await axiosContext.delete(`/experience/delete/${id}`); // supprimer une expérience
  };
  
  const updateExperience = (id, data) => {
    return axiosContext.put(`/experience/put/${id}`, data); // mettre à jour une expérience
  };
  const getAllCertifications = () => {
    return axiosContext.get("/certification/get"); // récupérer toutes les certifications
  };
  
  const deleteCertification = async (id) => {
    return await axiosContext.delete(`/certification/delete/${id}`); // supprimer une certification
  };
  
  const updateCertification = (id, data) => {
    return axiosContext.put(`/certification/put/${id}`, data); // mettre à jour une certification
  };
  
  const addCertification = (data) => {
    return axiosContext.post("/Certification/add", data); // ajouter une nouvelle certification
  };
  /** ----- SKILLS ----- **/
const getAllSkills = () => {
    return axiosContext.get("/Skill/get"); // récupérer toutes les compétences
  };
  
  const addSkill = (data) => {
    return axiosContext.post("/Skill/add", data); // ajouter une compétence
  };
  
  const updateSkill = (id, data) => {
    return axiosContext.put(`/skill/put/${id}`, data); // mettre à jour une compétence
  };
  
  const deleteSkill = (id) => {
    return axiosContext.delete(`/skill/delete/${id}`); // supprimer une compétence
  };
  
export default {
  getCategory,
  getOffer,
  getByidCategory,
  getOfferDetails,
  login,
  register,
  forgetPassword,
  resetPassword,
  candidature,
  OfferDetails,
  getCandidature,
  getInterview,
  deleteCandidature,
  updatedUser, // ✅ on l’exporte
  getAllEducation,
  deleteEducation,
  updateEducation,
  getAllExperience,
  deleteExperience,
  updateExperience,
  getAllCertifications,
  deleteCertification,
  updateCertification,
  addCertification,
  getAllSkills,
  addSkill,
  updateSkill,
  deleteSkill,
};
