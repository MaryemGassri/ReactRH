import React , { useState }  from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../service/api';

function Reset() {
    const {token} =useParams()
    const navigate =useNavigate()
    const [password ,setPassword] =useState("")
    const changeHandle =async(e)=>
    {
        setPassword({
            ...password,
            [e.target.name]:e.target.value,
        });
        //console.log(`tape dans l'input ${e.target.name} la valeur ${e.target.value}`)
     };
     const reset=async(e)=>
     {
         e.preventDefault()
         try {
             const res =await api.resetPassword(token,password)
             if(res){
                alert("votre mot de passe set changé  ")
                navigate("/login")            }
          
                        
                    } catch (error) {
                        console.log("erreur lors de reset" , error)
                        
                    }
                }
  return (

    <div>
      {/* Header Start */}
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Changer votre mot de passe</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Changer votre mot de passe</li>
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
          <form onSubmit={reset}>
          <div className="row g-3">
          <div className="col-md-12">

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Votre password"
              name="password" 
              onChange={changeHandle}
            />
            <label htmlFor="password">Votre password</label>
          </div>
          <button className="btn btn-primary w-100" type="submit">changer le mot de passe</button>
          </div>
          </div>


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

export default Reset