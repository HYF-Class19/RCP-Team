import React, { useState } from 'react';
import './Dietary.css';

export const Dietary = ({ callbackDiets }) => {
  const [dietsInfo, setDietsInfo] = useState({ diets: [] });

  const handleChange = (e) => {
    const { value, checked } = e.target;

    const { diets } = dietsInfo;

    if (checked) {
      setDietsInfo({
        diets: [...diets, value],
      });
    } else {
      setDietsInfo({
        diets: diets.filter((e) => e !== value),
      });
    }
  };

  callbackDiets(dietsInfo);

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
            className="checkbox"
            onChange={handleChange}
          />
          <label for="vegetarian">Vegetarian</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="vegan"
            name="diets"
            value="vegan"
            className="checkbox"
            onChange={handleChange}
          />
          <label for="vegan">Vegan</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="gluten-free"
            name="diets"
            value="gluten-free"
            className="checkbox"
            onChange={handleChange}
          />
          <label for="gluten-free">Gluten free</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="ketogenic"
            name="diets"
            value="ketogenic"
            className="checkbox"
            onChange={handleChange}
          />
          <label for="ketogenic">Ketogenic</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="paleo"
            name="diets"
            value="paleo"
            className="checkbox"
            onChange={handleChange}
          />
          <label for="paleo">Paleo</label>
        </div>
      </div>
    </div>
  );
};
