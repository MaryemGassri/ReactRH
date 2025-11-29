import {BrowserRouter as Router,Routes ,Route}from "react-router-dom"
import About from "./pages/About";
import Categorie from "./pages/Categorie";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Offer from "./pages/Offer";
import OfferByCategory from "./pages/OfferByCategory";
import Offerdetails from "./pages/Offerdetails";
import Register from "./pages/Register";
import ForgetPassword from './pages/ForgetPassword';
import Reset from "./pages/Reset";
import Account from "./pages/Account";
import Candidatute from "./pages/ListCandidature";
import PrivateRoute from "./components/PrivateRoute";
import ListInterview from "./pages/ListInterview";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}> 
        <Route path="/" element ={<Layout/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/categorie" element ={<Categorie/>}/>
        <Route path="/offer" element ={<Offer/>}/>
        <Route path="/offer/category/:id" element ={<OfferByCategory/>}/>

        <Route path="/offerdetails/:id" element ={<Offerdetails/>}/>

        <Route path="/account" element ={
        <PrivateRoute>
 <Account/>
        </PrivateRoute>
       }/>
        <Route path="/entretien" element ={
        
          <PrivateRoute>
<ListInterview/>        

</PrivateRoute>
        }/>
        <Route path="/candidature" element ={
      
      <PrivateRoute>
<Candidatute/>      
      </PrivateRoute>
      }/>



        </Route> 


        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/reset/:token" element={<Reset />} />



      </Routes>
    </Router>
  );
}

export default App;
