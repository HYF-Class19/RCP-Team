"use client";
import "primereact/resources/themes/saga-green/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../page.css";

import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import { TermsOfUse } from "../components/terms/terms";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <TermsOfUse />
      <Footer />
    </>
  );
}