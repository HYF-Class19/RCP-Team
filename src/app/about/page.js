"use client";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../page.css";

import { AboutUs } from "../components/about/about";

export default function Home() {
  return (
    <>
      <AboutUs />
    </>
  );
}