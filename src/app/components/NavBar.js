import './NavBar.css';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <div className="navbar">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        {' '}
        Menu <i className="pi pi-bars"></i>
      </label>

      <ul className="parentList">
        <li>
          <Link
            href={{
              pathname: '../',
            }}
          >
            <i
              className="pi pi-home"
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>{' '}
            Home
          </Link>
        </li>
        <li>
          <a href="#">
            Menu Origin{' '}
            <i className="pi pi-angle-down" style={{ color: 'white' }}></i>
          </a>
          <ul>
            <li>
              <a href="#">Indian</a>
            </li>
            <li>
              <a href="#">African</a>
            </li>
            <li>
              <a href="#">Chinese</a>
            </li>
            <li>
              <a href="#">American</a>
            </li>
            <li>
              <a href="#">European</a>
            </li>
            <li>
              <a href="#">French</a>
            </li>
            <li>
              <a href="#">Italian</a>
            </li>
            <li>
              <a href="#">Mediterranean</a>
            </li>
            <li>
              <a href="#">Mexican</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            Dietary{' '}
            <i className="pi pi-angle-down" style={{ color: 'white' }}></i>
          </a>
          <ul>
            <li>
              <a href="#">Vegetarian</a>
            </li>
            <li>
              <a href="#">Vegan</a>
            </li>
            <li>
              <a href="#">Gluten Free</a>
            </li>
            <li>
              <a href="#">Ketogenic</a>
            </li>
            <li>
              <a href="#">Paleo</a>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href={{
              pathname: '/components/Favorites',
            }}
          >
            Favorite Recipes
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: '/components/RandomRecipe',
            }}
          >
            Random Recipe
          </Link>
        </li>
      </ul>
    </div>
  );
};
