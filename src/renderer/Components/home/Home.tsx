/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './Home.scss';

function homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to the homepage!</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default homepage;
