"use client";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./page.css";

import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";

import SingleRecipe from "./SingleRecipe";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <SingleRecipe dishId={324694} />
      <Footer />
    </>
  );
}
