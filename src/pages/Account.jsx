import React, { useState, useEffect } from 'react';
import api from '../service/api';

function Account() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const[image,setImage] =useState(null)

  const [education, setEducation] = useState([]);
  const [editingEduIndex, setEditingEduIndex] = useState(null);
  const [eduForm, setEduForm] = useState({});

  const [experience, setExperience] = useState([]);
  const [editingExpIndex, setEditingExpIndex] = useState(null);
  const [expForm, setExpForm] = useState({});

  const [certifications, setCertifications] = useState([]);
  const [editingCertIndex, setEditingCertIndex] = useState(null);
  const [certForm, setCertForm] = useState({});

  const [skills, setSkills] = useState([]);
  const [editingSkillIndex, setEditingSkillIndex] = useState(null);
  const [skillForm, setSkillForm] = useState({});

  // Charger l'utilisateur depuis localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setFormData(parsed);
      fetchEducation(parsed._id);
      fetchExperience(parsed._id);
      fetchCertifications(parsed._id);
      fetchSkills(parsed._id);
    }
  }, []);

  /** ---------- Education ---------- **/
  const fetchEducation = async (userId) => {
    if (!userId) return;
    try {
      const res = await api.getAllEducation();
      const myEducation = res.data.data.filter((edu) => edu.idcandidate === userId);
      setEducation(myEducation);
    } catch (error) {
      console.error("Erreur lors de la récupération des éducations", error);
    }
  };

  const handleEditEducation = (index) => {
    setEditingEduIndex(index);
    setEduForm({ ...education[index] });
  };

  const handleChangeEdu = (e) => {
    const { name, value } = e.target;
    setEduForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateEducation = async () => {
    try {
      const eduId = eduForm._id;
      const res = await api.updateEducation(eduId, eduForm);
      const updatedEdu = res.data.data ? res.data.data : res.data;
      setEducation((prev) =>
        prev.map((edu, i) => (i === editingEduIndex ? updatedEdu : edu))
      );
      setEditingEduIndex(null);
      alert("Éducation mise à jour ✅");
    } catch (err) {
      console.error("Erreur update éducation :", err);
      alert("Erreur lors de la mise à jour ❌");
    }
  };

  const handleDeleteEducation = async (id) => {
    try {
      await api.deleteEducation(id);
      setEducation((prev) => prev.filter((edu) => edu._id !== id));
    } catch (err) {
      console.error("Erreur suppression éducation :", err);
    }
  };

  /** ---------- Experience ---------- **/
  const fetchExperience = async (userId) => {
    if (!userId) return;
    try {
      const res = await api.getAllExperience();
      const myExp = res.data.data.filter((exp) => exp.idcandidate === userId);
      setExperience(myExp);
    } catch (error) {
      console.error("Erreur lors de la récupération des expériences", error);
    }
  };

  const handleEditExperience = (index) => {
    setEditingExpIndex(index);
    setExpForm({ ...experience[index] });
  };

  const handleChangeExp = (e) => {
    const { name, value } = e.target;
    setExpForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateExperience = async () => {
    try {
      const expId = expForm._id;
      const res = await api.updateExperience(expId, expForm);
      const updatedExp = res.data.data ? res.data.data : res.data;
      setExperience((prev) =>
        prev.map((exp, i) => (i === editingExpIndex ? updatedExp : exp))
      );
      setEditingExpIndex(null);
      alert("Expérience mise à jour ✅");
    } catch (err) {
      console.error("Erreur update expérience :", err);
      alert("Erreur lors de la mise à jour ❌");
    }
  };

  const handleDeleteExperience = async (id) => {
    try {
      await api.deleteExperience(id);
      setExperience((prev) => prev.filter((exp) => exp._id !== id));
    } catch (err) {
      console.error("Erreur suppression expérience :", err);
    }
  };

  /** ---------- Certifications ---------- **/
  const fetchCertifications = async (userId) => {
    if (!userId) return;
    try {
      const res = await api.getAllCertifications();
      const myCerts = res.data.data.filter((cert) => cert.idcandidate === userId);
      setCertifications(myCerts);
    } catch (error) {
      console.error("Erreur lors de la récupération des certifications", error);
    }
  };

  const handleEditCertification = (index) => {
    setEditingCertIndex(index);
    setCertForm({ ...certifications[index] });
  };

  const handleChangeCert = (e) => {
    const { name, value } = e.target;
    setCertForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateCertification = async () => {
    try {
      const certId = certForm._id;
      const res = await api.updateCertification(certId, certForm);
      const updatedCert = res.data.data ? res.data.data : res.data;
      setCertifications((prev) =>
        prev.map((cert, i) => (i === editingCertIndex ? updatedCert : cert))
      );
      setEditingCertIndex(null);
      alert("Certification mise à jour ✅");
    } catch (err) {
      console.error("Erreur update certification :", err);
      alert("Erreur lors de la mise à jour ❌");
    }
  };

  const handleDeleteCertification = async (id) => {
    try {
      await api.deleteCertification(id);
      setCertifications((prev) => prev.filter((cert) => cert._id !== id));
    } catch (err) {
      console.error("Erreur suppression certification :", err);
    }
  };

  /** ---------- Skills ---------- **/
  const fetchSkills = async (userId) => {
    if (!userId) return;
    try {
      const res = await api.getAllSkills();
      const mySkills = res.data.data.filter((skill) => skill.idcandidate === userId);
      setSkills(mySkills);
    } catch (err) {
      console.error("Erreur récupération skills :", err);
    }
  };

  const handleEditSkill = (index) => {
    setEditingSkillIndex(index);
    setSkillForm({ ...skills[index] });
  };

  const handleChangeSkill = (e) => {
    const { name, value } = e.target;
    setSkillForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateSkill = async () => {
    try {
      const skillId = skillForm._id;
      const res = await api.updateSkill(skillId, skillForm);
      const updatedSkill = res.data.data ? res.data.data : res.data;
      setSkills(prev => prev.map((s, i) => i === editingSkillIndex ? updatedSkill : s));
      setEditingSkillIndex(null);
      alert("Compétence mise à jour ✅");
    } catch (err) {
      console.error("Erreur update skill :", err);
      alert("Erreur lors de la mise à jour ❌");
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await api.deleteSkill(id);
      setSkills(prev => prev.filter(s => s._id !== id));
    } catch (err) {
      console.error("Erreur suppression skill :", err);
    }
  };

  /** ---------- Compte ---------- **/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlephotochange =async(e)=>{
    setImage(e.target.files[0]);
}; 
const handleUpdateUser = async () => {
  if (!user) return alert("Utilisateur introuvable");

  try {
    const fData = new FormData();
    fData.append("FirstName", formData.FirstName || "");
    fData.append("LastName", formData.LastName || "");
    fData.append("email", formData.email || "");
    fData.append("adresse", formData.adresse || "");
    fData.append("PhoneNumber", formData.PhoneNumber || ""); // ✅ même nom que dans formData

    if (image) {
      fData.append("image", image); // ✅ nom conforme au backend
    }

    const res = await api.updatedUser(user._id, fData, {
      headers: {
        "Content-Type": "multipart/form-data", // ✅ très important pour l'upload
      },
    });

    const updatedUser = res.data.data ? res.data.data : res.data;
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
    alert("Mise à jour réussie ✅");
  } catch (err) {
    console.error("Erreur update :", err);
    alert("Erreur lors de la mise à jour ❌");
  }
};




  return (
    <div className="container my-5">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="compte-tab" data-bs-toggle="tab" data-bs-target="#compte" type="button" role="tab" aria-controls="compte" aria-selected="true">Compte</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="false">Education</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="experience-tab" data-bs-toggle="tab" data-bs-target="#experience" type="button" role="tab" aria-controls="experience" aria-selected="false">Experience</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="certification-tab" data-bs-toggle="tab" data-bs-target="#certification" type="button" role="tab" aria-controls="certification" aria-selected="false">Certifications</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Skills</button>
        </li>
      </ul>

      <div className="tab-content mt-3" id="myTabContent">
        {/* Compte */}
        <div className="tab-pane fade show active" id="compte" role="tabpanel" aria-labelledby="compte-tab">
          <h2 className="mb-3">Compte</h2>
          {user ? (
            <div>
              {isEditing ? (
                <div>
                  <input type="text" name="FirstName" value={formData.FirstName || ""} onChange={handleChange} placeholder="Prénom" className="form-control mb-2"/>
                  <input type="text" name="LastName" value={formData.LastName || ""} onChange={handleChange} placeholder="Nom" className="form-control mb-2"/>
                  <input type="email" name="email" value={formData.email || ""} onChange={handleChange} placeholder="Email" className="form-control mb-2"/>
                  <input type="text" name="adresse" value={formData.adresse || ""} onChange={handleChange} placeholder="Adresse" className="form-control mb-2"/>
                  <input type="text" name="PhoneNumber" value={formData.PhoneNumber || ""} onChange={handleChange} placeholder="Téléphone" className="form-control mb-2"/>
                  <input type="file" name="image"  onChange={handlephotochange} placeholder="image" className="form-control mb-2"/>
                  <button onClick={handleUpdateUser} className="btn btn-success me-2">Sauvegarder</button>
                  <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Annuler</button>
                </div>
              ) : (
                <div>
                  <p><strong>Nom :</strong> {user.FirstName} {user.LastName}</p>
                  <p><strong>Email :</strong> {user.email}</p>
                  <p><strong>Adresse :</strong> {user.adresse}</p>
                  <p><strong>Téléphone :</strong> {user.PhoneNumber}</p>
                  <img className="img-fluid border rounded mt-3" src={`http://localhost:5000/${user.image}`} alt="Profil"  style={{ width: 100, height: 100, objectFit: 'cover' }}/>
                  <br />
                  <button onClick={() => setIsEditing(true)} className="btn btn-primary mt-3">Mettre à jour</button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-muted">Aucun utilisateur connecté.</p>
          )}
        </div>

        {/* Education */}
        <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
          <h2 className="mb-3">Education</h2>
          {education?.length === 0 ? (
            <p className="text-gray-500 text-center">Vous n’avez aucune éducation enregistrée.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition relative">
                  {editingEduIndex === index ? (
                    <div>
                      <input type="text" name="title" value={eduForm.title || ""} onChange={handleChangeEdu} className="form-control mb-2"/>
                      <input type="text" name="institution" value={eduForm.institution || ""} onChange={handleChangeEdu} className="form-control mb-2"/>
                      <input type="date" name="dateReception" value={eduForm.dateReception ? new Date(eduForm.dateReception).toISOString().split("T")[0] : ""} onChange={handleChangeEdu} className="form-control mb-2"/>
                      <div className="absolute top-5 right-5 flex gap-2">
                        <button onClick={handleUpdateEducation} className="text-green-500 hover:text-green-700"><i className="fa fa-check text-lg"></i></button>
                        <button onClick={() => setEditingEduIndex(null)} className="text-gray-500 hover:text-gray-700"><i className="fa fa-times text-lg"></i></button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{edu.title}</h2>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Institution :</span> {edu.institution}</p>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Date :</span> {edu.dateReception ? new Date(edu.dateReception).toLocaleDateString() : "-"}</p>
                      <div className="absolute top-5 right-5 flex gap-2">
                        <button onClick={() => handleEditEducation(index)} className="text-blue-500 hover:text-blue-700" title="Modifier"><i className="fa fa-edit text-lg"></i></button>
                        <button onClick={() => handleDeleteEducation(edu._id)} className="text-red-500 hover:text-red-700" title="Supprimer"><i className="fa fa-trash text-lg"></i></button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Experience */}
        <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
          <h2 className="mb-3">Experience</h2>
          {experience?.length === 0 ? (
            <p className="text-gray-500 text-center">Vous n’avez aucune expérience enregistrée.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((exp, index) => (
                <div key={index} className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition relative">
                  {editingExpIndex === index ? (
                    <div>
                      <input type="text" name="title" value={expForm.title || ""} onChange={handleChangeExp} className="form-control mb-2" placeholder="Titre"/>
                      <input type="text" name="company" value={expForm.company || ""} onChange={handleChangeExp} className="form-control mb-2" placeholder="Entreprise"/>
                      <input type="text" name="role" value={expForm.role || ""} onChange={handleChangeExp} className="form-control mb-2" placeholder="Rôle"/>
                      <input type="text" name="description" value={expForm.description || ""} onChange={handleChangeExp} className="form-control mb-2" placeholder="Description"/>
                      <input type="date" name="dateStart" value={expForm.dateStart ? new Date(expForm.dateStart).toISOString().split("T")[0] : ""} onChange={handleChangeExp} className="form-control mb-2"/>
                      <input type="date" name="dateEnd" value={expForm.dateEnd ? new Date(expForm.dateEnd).toISOString().split("T")[0] : ""} onChange={handleChangeExp} className="form-control mb-2"/>
                      <div className="absolute top-5 right-5 flex gap-2">
                        <button onClick={handleUpdateExperience} className="text-green-500 hover:text-green-700"><i className="fa fa-check text-lg"></i></button>
                        <button onClick={() => setEditingExpIndex(null)} className="text-gray-500 hover:text-gray-700"><i className="fa fa-times text-lg"></i></button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{exp.title}</h2>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Entreprise :</span> {exp.company}</p>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Rôle :</span> {exp.role}</p>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Description :</span> {exp.description}</p>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Période :</span> {exp.dateStart ? new Date(exp.dateStart).toLocaleDateString() : "-"} à {exp.dateEnd ? new Date(exp.dateEnd).toLocaleDateString() : "-"}</p>
                      <div className="absolute top-5 right-5 flex gap-2">
                        <button onClick={() => handleEditExperience(index)} className="text-blue-500 hover:text-blue-700" title="Modifier"><i className="fa fa-edit text-lg"></i></button>
                        <button onClick={() => handleDeleteExperience(exp._id)} className="text-red-500 hover:text-red-700" title="Supprimer"><i className="fa fa-trash text-lg"></i></button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certifications */}
        <div className="tab-pane fade" id="certification" role="tabpanel" aria-labelledby="certification-tab">
          <h2 className="mb-3">Certifications</h2>
          {certifications?.length === 0 ? (
            <p className="text-gray-500 text-center">Vous n’avez aucune certification enregistrée.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition relative">
                  {editingCertIndex === index ? (
                    <div>
                      <input type="text" name="title" value={certForm.title || ""} onChange={handleChangeCert} className="form-control mb-2" placeholder="Titre"/>
                      <input type="text" name="institution" value={certForm.institution || ""} onChange={handleChangeCert} className="form-control mb-2" placeholder="Institution"/>
                      <input type="date" name="dateReception" value={certForm.dateReception ? new Date(certForm.dateReception).toISOString().split("T")[0] : ""} onChange={handleChangeCert} className="form-control mb-2"/>
                      <div className="absolute top-5 right-5 flex gap-2">
                        <button onClick={handleUpdateCertification} className="text-green-500 hover:text-green-700"><i className="fa fa-check text-lg"></i></button>
                        <button onClick={() => setEditingCertIndex(null)} className="text-gray-500 hover:text-gray-700"><i className="fa fa-times text-lg"></i></button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h2>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Institution :</span> {cert.institution}</p>
                      <p className="text-gray-600 mb-2"><span className="font-medium">Date :</span> {cert.dateReception ? new Date(cert.dateReception).toLocaleDateString() : "-"}</p>
                      <div className="absolute top-5 right-5 flex gap-2">
                        <button onClick={() => handleEditCertification(index)} className="text-blue-500 hover:text-blue-700" title="Modifier"><i className="fa fa-edit text-lg"></i></button>
                        <button onClick={() => handleDeleteCertification(cert._id)} className="text-red-500 hover:text-red-700" title="Supprimer"><i className="fa fa-trash text-lg"></i></button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Skills */}
        {/* Skills */}
<div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
  <h2 className="mb-3">Compétences</h2>
  {skills?.length === 0 ? (
    <p className="text-gray-500 text-center">Vous n’avez aucune compétence enregistrée.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-lg transition relative">
          {editingSkillIndex === index ? (
            <div>
              <input
                type="text"
                name="title"
                value={skillForm.title || ""}
                onChange={handleChangeSkill}
                className="form-control mb-2"
                placeholder="Nom de la compétence"
              />
              <input
                type="text"
                name="level"
                value={skillForm.level || ""}
                onChange={handleChangeSkill}
                className="form-control mb-2"
                placeholder="Niveau"
              />
              <input
                type="text"
                name="description"
                value={skillForm.description || ""}
                onChange={handleChangeSkill}
                className="form-control mb-2"
                placeholder="Description"
              />
              <div className="absolute top-5 right-5 flex gap-2">
                <button onClick={handleUpdateSkill} className="text-green-500 hover:text-green-700">
                  <i className="fa fa-check text-lg"></i>
                </button>
                <button onClick={() => setEditingSkillIndex(null)} className="text-gray-500 hover:text-gray-700">
                  <i className="fa fa-times text-lg"></i>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h2>
              <p className="text-gray-600 mb-2"><span className="font-medium">Niveau :</span> {skill.level}</p>
              <p className="text-gray-600 mb-2"><span className="font-medium">Description :</span> {skill.description}</p>
              <div className="absolute top-5 right-5 flex gap-2">
                <button onClick={() => handleEditSkill(index)} className="text-blue-500 hover:text-blue-700" title="Modifier">
                  <i className="fa fa-edit text-lg"></i>
                </button>
                <button onClick={() => handleDeleteSkill(skill._id)} className="text-red-500 hover:text-red-700" title="Supprimer">
                  <i className="fa fa-trash text-lg"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>


      </div>
    </div>
  );
}

export default Account;
