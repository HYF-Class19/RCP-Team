"use client";

import './page.css';


import { useSearchParams } from "next/navigation";

import SingleRecipe from "./SingleRecipe";

export default function Home() {
  const getId = useSearchParams();
  const id = Number(getId.get("id"));

  return (
    <>
      <SingleRecipe dishId={id} />
    </>
  );
}
