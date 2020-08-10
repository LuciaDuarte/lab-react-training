import React from 'react';

const Rating = (props) => {
  let stars;
  const value = Math.round(props.children);

  switch (value) {
    case 0:
      stars = '☆☆☆☆☆';
      break;
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
  }

  return (
    <div className="Rating">
      <p>{stars}</p>
    </div>
  );
};

export default Rating;
