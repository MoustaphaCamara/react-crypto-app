import React from "react";

const TopArrow = () => {
  return (
    <div className="top">
      <img
        src="./assets/arrow-icon.svg"
        alt="arrow-top"
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};

export default TopArrow;
