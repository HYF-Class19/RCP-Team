import React from 'react';
import './MenuOrigin.css';

export const MenuOrigin = () => {
  return (
    <div className="menu-origin">
      <h2>MENU ORIGIN</h2>
      <div className="select-origin">
        <div>
          <input type="checkbox" id="african" name="origin" value="african" />
          <label for="african">African</label>
        </div>
        <div>
          <input type="checkbox" id="american" name="origin" value="american" />
          <label for="american">American</label>
        </div>
        <div>
          <input type="checkbox" id="chinese" name="origin" value="chinese" />
          <label for="chinese">Chinese</label>
        </div>
        <div>
          <input type="checkbox" id="european" name="origin" value="european" />
          <label for="european">European</label>
        </div>
        <div>
          <input type="checkbox" id="indian" name="origin" value="indian" />
          <label for="indian">Indian</label>
        </div>
        <div>
          <input type="checkbox" id="italian" name="origin" value="italian" />
          <label for="italian">Italian</label>
        </div>
      </div>
    </div>
  );
};
