import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../service/api'
function Offer() {
  const [offer ,setOffer] = useState([])
  const fetchOffer = async()=>{
    try{
      const res= await api.getOffer()
      console.log("reponse de getOffer",res.data.data)  
      setOffer(res.data.data)
    }
    catch(error){
      console.log("erreur lors de la recuperation de category" , error)
    }
  }
  useEffect(()=>{
    fetchOffer()
  },[])

  return (
   <div>  <div className="container-xxl bg-white p-0">

    
    {/* Header End */}
    <div className="container-xxl py-5 bg-dark page-header mb-5">
      <div className="container my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Job List</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">Job List</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Header End */}
    {/* Jobs Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
         
        <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              {offer.length>0 ?(
                offer.slice(0,5).map((i)=>(
                  <div className="job-item p-4 mb-4" key={i._id}>
                  <Link to={`/offerdetails/${i._id}`} className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid border rounded" src={`http://localhost:5000/${i.idrecruiter.image}`} alt style={{width: 80, height: 80}} />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">{i.title}</h5>
                        <span className="text-truncate me-3">
  <i className="fas fa-building text-primary me-2"></i>
  {i.idrecruiter.company}
</span>

                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{i.localisation}</span>
                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{i.salary}</span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href><i className="far fa-heart text-primary" /></a>
                        <a className="btn btn-primary" href>Apply Now</a>
                      </div>
                      <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2" />Date Line: {new Date(i.datefin).toLocaleString("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
})}
</small>
                    </div>
                  </Link>
                </div>
                ))
               
              ):(
                <p>not data found</p>
              )}
              
              
              <Link to={"/offer"} className="btn btn-primary py-3 px-5" href>Browse More Jobs</Link>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    {/* Jobs End */}
   
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
</div>

  )
}

export default Offer