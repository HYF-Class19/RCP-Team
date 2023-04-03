"use client";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./page.css";

import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { useSearchParams } from "next/navigation";

import SingleRecipe from "./SingleRecipe";

export default function Home() {
  const getId = useSearchParams();
  const id = Number(getId.get("id"));

  return (
    <>
      <Header />
      <NavBar />
      <SingleRecipe dishId={id} />
      <Footer />
    </>
  );
}
