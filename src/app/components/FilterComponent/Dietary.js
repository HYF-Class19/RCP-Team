import React from 'react';
import './Dietary.css';

export const Dietary = () => {
  return (
    <div className="dietary">
      <h2>Dietary</h2>
      <div className="select-diet">
        <div>
          <input
            type="checkbox"
            id="vegetarian"
            name="diets"
            value="vegetarian"
          />
          <label for="vegetarian">Vegetarian</label>
        </div>
        <div>
          <input type="checkbox" id="vegan" name="diets" value="vegan" />
          <label for="vegan">Vegan</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="gluten-free"
            name="diets"
            value="gluten-free"
          />
          <label for="gluten-free">Gluten free</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="ketogenic"
            name="diets"
            value="ketogenic"
          />
          <label for="ketogenic">Ketogenic</label>
        </div>
        <div>
          <input type="checkbox" id="paleo" name="diets" value="paleo" />
          <label for="paleo">Paleo</label>
        </div>
      </div>
    </div>
  );
};
