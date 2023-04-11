"use client";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../page.css";


import { TermsOfUse } from "../components/terms/terms";

export default function Home() {
  return (
    <>
      <TermsOfUse />
    </>
  );
}