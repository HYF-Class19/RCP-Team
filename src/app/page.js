"use client";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { SlideShow } from "./components/SlideShow";
import { SingleRecipe } from "./components/SingleRecipe";
import { Footer } from "./components/Footer";
import { Filter } from "./components/FilterComponent/Filter";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <SlideShow />
      <SingleRecipe dishId={716429} />
      <Filter />
      <Footer />
    </>
  );
}
