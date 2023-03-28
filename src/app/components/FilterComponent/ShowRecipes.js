import './ShowRecipes.css';
import Image from 'next/image';
import recipeImage from '../../../../public/assets/food2.jpg';
import 'primeicons/primeicons.css';

export const ShowRecipes = () => {
  return (
    <div className="show-recipes">
      <div className="single-recipe">
        <Image
          class="border-round-3xl"
          className="recipe-image"
          src={recipeImage}
          alt="Image"
          width={220}
          height={156}
        />
        <div className="time-difficulty">
          <h3>Easy</h3>
          <h3>
            45 <i className="pi pi-clock"></i>
          </h3>
        </div>
        <div className="recipe-title">
          <h3>Belgian Waffles with egss</h3>
        </div>
      </div>
    </div>
  );
};
