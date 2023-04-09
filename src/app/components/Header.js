import Image from 'next/image';
import Link from 'next/link';

import './Header.css';
import logo from '../../../public/assets/logo.png';

export const Header = () => {
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
        <Link href="/account">
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
        </Link>

      </div>
    </div>
  );
};