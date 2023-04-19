import React, { useState } from 'react';
import './MenuOrigin.css';

export const MenuOrigin = ({ callbackMenu }) => {
  const [menuInfo, setMenuInfo] = useState({ menus: [] });

  const handleMenuChange = (e) => {
    const { value, checked } = e.target;

    const { menus } = menuInfo;

    if (checked) {
      setMenuInfo({
        menus: [...menus, value],
      });
    } else {
      setMenuInfo({
        menus: menus.filter((e) => e !== value),
      });
    }
  };

  callbackMenu(menuInfo);

  return (
    <div className="menu-origin">
      <h2>Menu Origin</h2>
      <div className="select-origin">
        <div>
          <input
            type="checkbox"
            id="african"
            name="origin"
            value="african"
            onChange={handleMenuChange}
          />
          <label for="african">African</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="american"
            name="origin"
            value="american"
            onChange={handleMenuChange}
          />
          <label for="american">American</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="chinese"
            name="origin"
            value="chinese"
            onChange={handleMenuChange}
          />
          <label for="chinese">Chinese</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="european"
            name="origin"
            value="european"
            onChange={handleMenuChange}
          />
          <label for="european">European</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="indian"
            name="origin"
            value="indian"
            onChange={handleMenuChange}
          />
          <label for="indian">Indian</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="italian"
            name="origin"
            value="italian"
            onChange={handleMenuChange}
          />
          <label for="italian">Italian</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="mediterranean"
            name="origin"
            value="mediterranean"
            onChange={handleMenuChange}
          />
          <label for="mediterranean">Mediterranean</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="french"
            name="origin"
            value="french"
            onChange={handleMenuChange}
          />
          <label for="french">French</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="mexican"
            name="origin"
            value="mexican"
            onChange={handleMenuChange}
          />
          <label for="mexican">Mexican</label>
        </div>
      </div>
    </div>
  );
};
