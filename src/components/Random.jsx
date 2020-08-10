import React from 'react';

const Random = ({ min, max }) => {
  return (
    <div className="Random box">
      <p>
        Random value between {min} and {max} {'=> '}
        {Math.floor(Math.random() * (max - min) + min)}
      </p>
    </div>
  );
};

export default Random;
