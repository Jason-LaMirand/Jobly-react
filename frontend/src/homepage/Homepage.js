import React, { useContext } from 'react';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import "./Homepage.css";


const Homepage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage-container">
      <div className="Homepage">
        <div className="text-container">
          <h1 className="mb-4 font-weight-bold mt-5">Welcome to Jobly!</h1>
          <p className="mb-4 font-weight-light">Find your dream job here.</p>
          {currentUser ? <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2> : (
            <div>
              <Link to="/login">
                <Button color="primary">Login</Button>
              </Link>
              <Link to="/signup" className="ml-3">
                <Button color="primary">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/working_illustration.png`} alt="working illustration" className="homepage-image" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;