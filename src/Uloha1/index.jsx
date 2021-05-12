import React from 'react';

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.

export const Uloha1 = () => {
  return (
    <button className="button" onClick={clickOn}>
      Ukaž bublinu
    </button>
  );
};

const clickOn = () => {
  alert('Ahoj!');
};
