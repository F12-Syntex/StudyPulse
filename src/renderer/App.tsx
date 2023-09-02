import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import Home from '@Components/home/Home';
import './App.scss';
import AddSubject from '@Components/add-subject/AddSubject';
import NavBar from '@Components/nav-bar/NavBar';
import Database from 'src/database/Database';

function App() {
  //load the database
  const db = Database.getInstance();

  const data = {
    name: 'test',
    description: 'test',
    color: 'test',
    icon: 'test',
  };

  db.set('test', data);

  const value: any = db.get('test');

  console.log(value.name);

  return (
    <Router>
      <NavBar />
      <div className="content-pane">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-subject" element={<AddSubject />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
