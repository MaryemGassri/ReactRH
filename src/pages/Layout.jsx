import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../service/api'

function Layout() {
  const [category , setCategory] = useState([])
  const [offer ,setOffer] = useState([])

  const fetchCategory =async()=>{
    try {
      const res = await api.getCategory()
     // console.log("reponse de getCategory" , res.data.data)
      setCategory(res.data.data)
    } catch (error) {
      console.log("erreur lors de la recuperation de category" , error)

      
    }
  }
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
    fetchCategory()
    fetchOffer()
  },[])

  return (
    <div>{/* Carousel Start */}
    <div className="container-fluid p-0">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel-1.jpg" alt />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(43, 57, 64, .5)'}}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                  <a href className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel-2.jpg" alt />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(43, 57, 64, .5)'}}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                  <a href className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Carousel End */}
    {/* Search Start */}
    <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: 35}}>
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-4">
                <input type="text" className="form-control border-0" placeholder="Keyword" />
              </div>
              <div className="col-md-4">
                <select className="form-select border-0">
                  <option selected>Category</option>
                  <option value={1}>Category 1</option>
                  <option value={2}>Category 2</option>
                  <option value={3}>Category 3</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select border-0">
                  <option selected>Location</option>
                  <option value={1}>Location 1</option>
                  <option value={2}>Location 2</option>
                  <option value={3}>Location 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-dark border-0 w-100">Search</button>
          </div>
        </div>
      </div>
    </div>
    {/* Search End */}
    {/* Category Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
        <div className="row g-4">
          {category.length > 0 ? 
          (
            category.slice(0,8).map((cat)=>(
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
    {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 about-bg rounded overflow-hidden">
              <div className="col-6 text-start">
                <img className="img-fluid w-100" src="img/about-1.jpg" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid" src="img/about-2.jpg" style={{width: '85%', marginTop: '15%'}} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid" src="img/about-3.jpg" style={{width: '85%'}} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid w-100" src="img/about-4.jpg" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p><i className="fa fa-check text-primary me-3" />Tempor erat elitr rebum at clita</p>
            <p><i className="fa fa-check text-primary me-3" />Aliqu diam amet diam et eos</p>
            <p><i className="fa fa-check text-primary me-3" />Clita duo justo magna dolore erat amet</p>
            <a className="btn btn-primary py-3 px-5 mt-3" href>Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
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
    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="text-center mb-5">Our Clients Say!!!</h1>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-4.jpg" style={{width: 50, height: 50}} />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonial End */}</div>
  )
}

export default Layout