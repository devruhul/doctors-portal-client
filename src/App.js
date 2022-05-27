import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="doctors" element={<Doctors />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
