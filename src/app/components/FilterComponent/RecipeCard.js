import Image from 'next/image';
import recipeImage from '../../../../public/assets/food2.jpg';
import './RecipeCard.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeCard = ({ recipes, loading }) => {
  return (
    <>
      {loading ? (
        <h2>Fetching recipes ...</h2>
      ) : (
        recipes.map((item) => {
          return (
            <>
              <div className="single-recipe" key={uuidv4()}>
                <Image
                  class="border-round-3xl"
                  className="recipe-image"
                  src={item.image}
                  alt="Image"
                  width={220}
                  height={156}
                />
                <div className="time-difficulty">
                  <h3>
                    {item.servings} <i className="pi pi-users"></i>
                  </h3>
                  <h3>
                    {item.readyInMinutes} <i className="pi pi-clock"></i>
                  </h3>
                </div>
                <div className="recipe-title">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
