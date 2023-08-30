import Login from '@Components/login/Login';
import Signup from '@Components/signup/Signup';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from '@Components/home/Home';
import ForgotPassword from '@Components/forgot-password/ForgotPassword';
import NavBar from '@Components/nav-bar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content-pane">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
