import React , {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../service/api'

function Categorie() {
  const [category ,setCategory ]= useState([])

const fetchCategory=async()=>{
  try {
    const res=await api.getCategory()
    setCategory(res.data.data)
  } catch (error) {
    console.log("erreur lors de la recuperation de category" , error)

    
  }
}
useEffect(()=>{
  fetchCategory()
},[])


  return (
   <div>  <div className="container-xxl bg-white p-0">
    
    
    {/* Header End */}
    <div className="container-xxl py-5 bg-dark page-header mb-5">
      <div className="container my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Category</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">Category</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Header End */}
    {/* Category Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
        <div className="row g-4">
          {category.length > 0 ? 
          (
            category.map((cat)=>(
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={cat._id}>
               <Link className="cat-item rounded p-4" to={`/offer/category/${cat._id}`}>
                <i className="fa fa-3x fa-mail-bulk text-primary mb-4" />
                <h6 className="mb-3">{cat.name}</h6>
                <p className="mb-0">{cat.idoffer.length}</p>
              </Link>
            </div>
            ))
         
          )
          :
          (
            <p>Not data found</p>
          )}
         
        
        </div>
      </div>
    </div>
    {/* Category End */}
   
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div></div>

  )
}

export default Categorie