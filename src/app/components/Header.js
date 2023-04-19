import Image from 'next/image';
import Link from 'next/link';

import './Header.css';
import logo from '../../../public/assets/logo.png';

export const Header = () => {
  return (
    <div className="header">
      <Link
        href={{
          pathname: '../',
        }}
      >
        <Image src={logo} alt="logo" width={202} />
      </Link>

      <h1 className='slogan'>I want to choose a recipe by...</h1>
      <div className="btn-group">
       {/* <button className="add-recipe">
          <i
            className="pi pi-plus-circle"
            style={{ color: 'white', fontSize: '25px' }}
          ></i>
          <p>Add recipe</p>
        </button>
      */}
        <Link href="/components/Favorites" className='justify-content-center p-3'>
        <i
              className="pi pi-heart-fill"
              style={{ color: 'black', fontSize: '35px' }}
            ></i>
            </Link>
            <Link href="/account" className='justify-content-center p-3'>
            <i
              className="pi pi-user"
              style={{ color: 'black', fontSize: '35px' }}
            ></i>
        </Link>
      </div>
    </div>
  );
};
