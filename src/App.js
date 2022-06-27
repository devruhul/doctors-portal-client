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
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './pages/Authentication/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        {/* All routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feature" element={<Feature />} />
          <Route path="services" element={<Services />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          } />
          <Route path="dashboard" element={<PrivateRoute><Dashboard />
          </PrivateRoute>
          }>

            <Route path="/dashboard/dashboardHome" element={<DashboardHome />} />
            <Route path="/dashboard/makeAdmin" element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            } />
            <Route path="/dashboard/addDoctor" element={
              <AdminRoute>
                <AddDoctor />
              </AdminRoute>
            } />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
