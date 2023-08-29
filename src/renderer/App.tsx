import Login from '@Components/login/Login';
import Signup from '@Components/signup/Signup';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from '@Components/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
