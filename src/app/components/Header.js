import React from 'react';
import './Header.css';
import 'primeicons/primeicons.css';
import Image from 'next/image';
import logo from '../../../public/assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <Image src={logo} alt="logo" width={202} />
      <h1>I want to choose a recipe by...</h1>
      <div className="btn-group">
        <button className="add-recipe">
          <i
            className="pi pi-plus-circle"
            style={{ color: 'white', fontSize: '25px' }}
          ></i>
          <p>Add recipe</p>
        </button>
        <button className="sign-in">
          <i
            className="pi pi-user"
            style={{ color: 'black', fontSize: '25px' }}
          ></i>
          <i
            className="pi pi-heart-fill"
            style={{ color: 'black', fontSize: '25px' }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
