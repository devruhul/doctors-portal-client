import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment/Appointment';
import About from './pages/Home/About/About';
import Blogs from './pages/Home/Blogs/Blogs';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Home/Login/Login';
import NotFound from './pages/Home/NotFound/NotFound';
import Reviews from './pages/Home/Reviews/Reviews';
import Services from './pages/Home/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
