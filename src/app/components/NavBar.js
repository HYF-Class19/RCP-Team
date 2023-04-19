'use client';
import './NavBar.css';
import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  return (
    <div className="navbar">
      <input type="checkbox" id="toggle" defaultChecked={true} />
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
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'indian',
                  },
                }}
              >
                Indian
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'african',
                  },
                }}
              >
                African
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'chinese',
                  },
                }}
              >
                Chinese
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'american',
                  },
                }}
              >
                American
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'european',
                  },
                }}
              >
                European
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'french',
                  },
                }}
              >
                French
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'italian',
                  },
                }}
              >
                Italian
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'mediterranean',
                  },
                }}
              >
                Mediterranean
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: '',
                    menuOriginData: 'mexican',
                  },
                }}
              >
                Mexican
              </Link>
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
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: 'vegetarian',
                    menuOriginData: '',
                  },
                }}
              >
                Vegetarian
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: 'vegan',
                    menuOriginData: '',
                  },
                }}
              >
                Vegan
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: 'pescetarian',
                    menuOriginData: '',
                  },
                }}
              >
                Pescetarian
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: 'primal',
                    menuOriginData: '',
                  },
                }}
              >
                Primal
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/components/FilterComponent',
                  query: {
                    ingredientsData: '',
                    excludeIngredientsData: '',
                    dietsData: 'paleo',
                    menuOriginData: '',
                  },
                }}
              >
                Paleo
              </Link>
            </li>
          </ul>
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
