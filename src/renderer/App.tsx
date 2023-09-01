import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import Home from '@Components/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="content-pane">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
