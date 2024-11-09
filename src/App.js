// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Navigation from './Components/Home/Navigation.jsx';
import Footer from './Components/Home/Footer.jsx';
import Signup from './Pages/Signup.jsx';
import Loginpage from './Pages/Loginpage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserDetail } from './actions/authActions.js';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {  
    dispatch(getUserDetail());
  }, [dispatch]);


  return (
   <>
   <BrowserRouter>
   <Navigation/>
   <ToastContainer />
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Loginpage/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
