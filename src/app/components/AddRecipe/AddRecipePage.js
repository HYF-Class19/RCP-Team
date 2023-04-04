'use client';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './AddRecipePage.css';


import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { RecipeBox } from './RecipeBox';
import { RecipeForm } from './RecipeForm';
import { Footer } from '../Footer';




export default function AddRecipePage() {
  return (
    <>
      <Header />
      <NavBar />
      <RecipeBox />
      <RecipeForm />
      <Footer />
      </>
  );
}
