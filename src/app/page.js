'use client';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './page.css';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { SlideShow } from './components/SlideShow';
import { Footer } from './components/Footer';
import { Filter } from './components/FilterComponent/Filter';
import { ShowRecipes } from './components/FilterComponent/ShowRecipes';

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <SlideShow />
      <div className="filter-showcase">
        <Filter />
        <ShowRecipes />
      </div>
      <Footer />
    </>
  );
}
