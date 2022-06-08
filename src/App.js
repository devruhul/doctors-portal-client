import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Feature from './pages/Home/Feature/Feature';
import Blogs from './pages/Home/Blogs/Blogs';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Authentication/Login/Login';
import NotFound from './pages/Home/NotFound/NotFound';
import Reviews from './pages/Home/Reviews/Reviews';
import Services from './pages/Home/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Register from './pages/Authentication/Register/Register';
import ContextProvider from './Context/ContextProvider/ContextProvider';

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        {/* All routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feature" element={<Feature />} />
          <Route path="services" element={<Services />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
