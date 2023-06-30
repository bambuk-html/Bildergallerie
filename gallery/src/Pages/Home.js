import React from 'react';
import './Home.css';
import Navbar from '../Components/navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="home">
            <h1 className="title">Lebensmittelgeschäft</h1>
        </div>
    </div>
  );
};

export default Home;
