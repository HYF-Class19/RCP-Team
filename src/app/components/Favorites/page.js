import { RecipeCard } from './RecipeCard';
import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <div className="page">
      <div className="page-title">
        <h2>
          <Link href="../../">Home</Link> {'>'} Favorite Recipes
        </h2>
      </div>
      <div className="recipe-display">
        <RecipeCard />
      </div>
    </div>
  );
}
