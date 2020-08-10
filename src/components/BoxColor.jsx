import React from 'react';

const BoxColor = ({ r, g, b }) => {
  return (
    <div
      className="BoxColor box"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
};

export default BoxColor;
