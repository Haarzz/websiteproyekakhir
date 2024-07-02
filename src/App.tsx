// App.tsx

import React from 'react';
import Header from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Admin from './Admin/Admin';
import './App.css';
import Riwayat from './CekRiwayat/Riwayat';
import DetailRiwayat from './CekRiwayat/DetailRiwayat';
import Login from './LoginAdmin/Login';


const App: React.FC = () => {

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column bg-dark text-light">
        <Router>
          <Header />
          <div className="container mt-4">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cekriwayat" element={<Riwayat />} />
              <Route path="/login" element={<Login />} />
              <Route path="/detailriwayat/:id" element={<DetailRiwayat />}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
};

export default App;
