import React ,{useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../service/api';
function Register() {
   const [data,setData] =useState({}) 
   const[photo,setphoto] =useState(null)
   const navigate = useNavigate()
   const changeHandle =async(e)=>
   {
       setData({
           ...data,
           [e.target.name]:e.target.value,
       });
       //console.log(`tape dans l'input ${e.target.name} la valeur ${e.target.value}`)
    };
    const handlephotochange =async(e)=>{
        setphoto(e.target.files[0]);
    };

    const register = async(e)=>{
        e.preventDefault()//pour elever les donees qui sont dans l url
        try {

const formData = new FormData()
formData.append("Firstname" , data.Firstname)
formData.append("Lastname" , data.Lastname)
formData.append("email" , data.email)
formData.append("adresse" , data.adresse)
formData.append("phonenumber" , data.phonenumber)
formData.append("password" , data.password)
if(photo) formData.append("image" , photo)

            const res= await api.register(formData)
if(res){
    alert("vous etes inscrit maintanant ")
navigate("/login")
}

            
        } catch (error) {
            console.log("erreur lors d'inscription" , error)
            
        }
    }
    
  return (
    <div>
  {/* Header End */}
  <div className="container-xxl py-5 bg-dark page-header mb-5">
    <div className="container my-5 pt-5 pb-4">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Register</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Register</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
      <div className="col-md-3"></div>

       
        <div className="col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={register}>
              <div className="row g-3">

               
               
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="FirstName" className="form-control" id="FirstName" placeholder="FirstName" name='FirstName' onChange={changeHandle} />
                    <label htmlFor="subject">FirstName</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="Lastname" className="form-control" id="Lastname" placeholder="Lastname" name='Lastname' onChange={changeHandle} />
                    <label htmlFor="subject">Lastname</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email"  placeholder="Your Email" name='email' onChange={changeHandle} />
                    <label htmlFor="email">Your Email</label>
                  </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="adresse" className="form-control" id="adresse" placeholder="adresse" name='adresse' onChange={changeHandle}  />
                    <label htmlFor="subject">adresse</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="number" className="form-control" id="phonenumber" placeholder="phonenumber" name='phonenumber' onChange={changeHandle}  />
                    <label htmlFor="subject">phonenumber</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="file" className="form-control" id="image" placeholder="image"  name='image' onChange={handlephotochange} />
                    <label htmlFor="subject">image</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="password" className="form-control" id="password" placeholder="password"  name='password' onChange={changeHandle} />
                    <label htmlFor="subject">password</label>
                  </div>
                </div>
               
               
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>

      </div>
    </div>
  </div>
  {/* Contact End */}
</div>

  )
}
export default Register