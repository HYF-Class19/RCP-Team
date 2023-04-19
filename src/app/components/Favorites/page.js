'use client';
import { RecipeCard } from './RecipeCard';
import Link from 'next/link';
import './page.css';
import Image from 'next/image';
import favorite from '../../../../public/assets/veggie.jpg';

export default function Home() {
  return (
    <div className="page">
      <div className="page-title">
        <h2>
          <Link href="../../">Home</Link> {'>'} Favorite Recipes
        </h2>
        <Image
          className="favorite-image"
          src={favorite}
          alt="Image"
          width={1400}
          height={300}
        />
      </div>
      <h2 className="favorites-title">My favorite recipes</h2>
      <div className="recipe-display">
        <RecipeCard />
      </div>
    </div>
  );
}
